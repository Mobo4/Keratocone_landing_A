import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/partial-lead
 *
 * Creates / updates a GHL contact when the user fills in phone or email
 * and tabs away — even if they never submit the form.
 *
 * Requirements: phone OR email (not both required).
 * Tagged with 'partial-form-lead' so GHL can trigger a follow-up workflow:
 *   "Hi, we noticed you started booking — still need a time?"
 *
 * Fire-and-forget from the client. Errors are swallowed silently.
 */

const GHL_API_URL = 'https://services.leadconnectorhq.com/contacts/';
const GHL_API_VERSION = '2021-07-28';

// GHL custom field IDs (created 2026-04-14)
const CF = {
    utmSource:           '6sdXreQxbnVymcrOOvHU',
    utmCampaign:         'cZiraewtlWoRya9HTpoD',
    firstTouchSource:    'QoGS6IY4CnI6zkweqWL5',
    firstTouchMedium:    'pj56WnUOOZma58h5drEy',
    firstTouchCampaign:  'eQlXBQoWYb8mMNKX3F3D',
    visitorId:           'M4rocza6tWrZuvDneTTo',
};

function sanitize(v: unknown, max = 100): string {
    return typeof v === 'string' ? v.trim().slice(0, max) : '';
}

export async function POST(request: NextRequest) {
    try {
        const apiKey = process.env.GHL_LEAD_API_KEY;
        if (!apiKey) return NextResponse.json({ ok: false }, { status: 500 });

        // Vercel edge geo headers
        const cityRaw = request.headers.get('x-vercel-ip-city') ?? '';
        const stateRaw = request.headers.get('x-vercel-ip-region') ?? '';
        const city = decodeURIComponent(cityRaw).slice(0, 100);
        const state = stateRaw.slice(0, 100);

        const body = await request.json().catch(() => ({})) as Record<string, unknown>;

        const phone = sanitize(body.phone, 30);
        const email = sanitize(body.email, 150);
        const firstName = sanitize(body.firstName, 50);
        const lastName = sanitize(body.lastName, 50);
        const utmSource = sanitize(body.utmSource);
        const utmCampaign = sanitize(body.utmCampaign, 200);
        const gclid = typeof body.gclid === 'string' ? body.gclid.replace(/[^A-Za-z0-9_\-]/g, '').slice(0, 100) : '';
        const firstTouchSource   = sanitize(body.firstTouchSource, 100);
        const firstTouchMedium   = sanitize(body.firstTouchMedium, 100);
        const firstTouchCampaign = sanitize(body.firstTouchCampaign, 200);
        const visitorId = typeof body.visitorId === 'string' ? body.visitorId.replace(/[^A-Za-z0-9\-]/g, '').slice(0, 40) : '';

        // Need at least phone or email to create a contact
        if (!phone && !email) {
            return NextResponse.json({ ok: false, reason: 'no_identifier' }, { status: 400 });
        }

        const locationId = process.env.GHL_LOCATION_ID;

        const ghlBody: Record<string, unknown> = {
            source: 'keratocones.com (partial)',
            tags: ['partial-form-lead', 'website form'],
            ...(phone ? { phone } : {}),
            ...(email ? { email } : {}),
            ...(firstName ? { firstName } : {}),
            ...(lastName ? { lastName } : {}),
            ...(gclid ? { gclid } : {}),
            ...(city ? { city } : {}),
            ...(state ? { state } : {}),
            ...(locationId ? { locationId } : {}),
        };

        // Custom fields: last-touch UTMs + first-touch UTMs + visitor context
        const customFields: { id: string; field_value: string }[] = [];
        if (utmSource)          customFields.push({ id: CF.utmSource,          field_value: utmSource });
        if (utmCampaign)        customFields.push({ id: CF.utmCampaign,        field_value: utmCampaign });
        if (firstTouchSource)   customFields.push({ id: CF.firstTouchSource,   field_value: firstTouchSource });
        if (firstTouchMedium)   customFields.push({ id: CF.firstTouchMedium,   field_value: firstTouchMedium });
        if (firstTouchCampaign) customFields.push({ id: CF.firstTouchCampaign, field_value: firstTouchCampaign });
        if (visitorId)          customFields.push({ id: CF.visitorId,          field_value: visitorId });
        if (customFields.length > 0) ghlBody.customFields = customFields;

        const ghlRes = await fetch(GHL_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Version': GHL_API_VERSION,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ghlBody),
        });

        if (!ghlRes.ok) {
            const errText = await ghlRes.text();
            let errData: Record<string, unknown> = {};
            try { errData = JSON.parse(errText); } catch { /* ignore */ }

            // Duplicate contact — already in GHL; add a note + partial tag
            if (ghlRes.status === 400 &&
                typeof errData.message === 'string' &&
                errData.message.includes('duplicated') &&
                errData.meta && typeof errData.meta === 'object' && 'contactId' in errData.meta) {
                const existingId = (errData.meta as Record<string, unknown>).contactId as string;

                await Promise.allSettled([
                    fetch(`${GHL_API_URL}${existingId}/notes`, {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${apiKey}`,
                            'Version': GHL_API_VERSION,
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            body: [
                                `Partial form interaction on keratocones.com`,
                                `Field filled: ${phone ? 'phone' : ''}${phone && email ? ' + ' : ''}${email ? 'email' : ''}`,
                                city ? `Location:    ${city}${state ? `, ${state}` : ''}` : null,
                                `Source: ${utmSource || 'direct'} / ${utmCampaign || '-'}`,
                                firstTouchSource ? `First touch: ${firstTouchSource} / ${firstTouchMedium || '-'} / ${firstTouchCampaign || '-'}` : null,
                                `Time: ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PT`,
                            ].filter(Boolean).join('\n'),
                        }),
                    }),
                    fetch(`${GHL_API_URL}${existingId}`, {
                        method: 'PUT',
                        headers: {
                            'Authorization': `Bearer ${apiKey}`,
                            'Version': GHL_API_VERSION,
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ tags: ['partial-form-lead', 'website form', 'returning-visitor'] }),
                    }),
                ]);

                return NextResponse.json({ ok: true, existing: true });
            }

            // Some other error — log but don't surface to user
            console.error('partial-lead GHL error:', ghlRes.status, errText.slice(0, 200));
            return NextResponse.json({ ok: false }, { status: 502 });
        }

        return NextResponse.json({ ok: true, existing: false });
    } catch (err) {
        console.error('partial-lead error:', err);
        return NextResponse.json({ ok: false }, { status: 500 });
    }
}
