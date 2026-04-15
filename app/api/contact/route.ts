import { NextRequest, NextResponse } from 'next/server';

const GHL_API_URL = 'https://services.leadconnectorhq.com/contacts/';
const GHL_API_VERSION = '2021-07-28';

// GHL custom field IDs (created 2026-04-14)
const CF = {
    utmSource:           '6sdXreQxbnVymcrOOvHU',
    utmMedium:           '3if5VqRIHGXkjDspuNgs',
    utmCampaign:         'cZiraewtlWoRya9HTpoD',
    firstTouchSource:    'QoGS6IY4CnI6zkweqWL5',
    firstTouchMedium:    'pj56WnUOOZma58h5drEy',
    firstTouchCampaign:  'eQlXBQoWYb8mMNKX3F3D',
    serviceInterest:     'aZ5MKXBJ0ahkCbR4IhNH',
    insuranceType:       'fSUH2Js6dfxRlkXbrwBi',
    visitorId:           'M4rocza6tWrZuvDneTTo',
};

async function sendLeadNotification(params: {
    firstName: string; lastName: string; phone: string; email: string;
    message?: string; utmSource?: string; utmMedium?: string; utmCampaign?: string;
    returning: boolean;
}) {
    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.LEAD_NOTIFY_EMAIL || 'eyecarecenteroc@gmail.com';
    if (!resendKey) return;

    const { firstName, lastName, phone, email, message, utmSource, utmCampaign, returning } = params;
    const subject = returning
        ? `↩️ Returning Patient Form — ${firstName} ${lastName}`
        : `🆕 New KC Lead — ${firstName} ${lastName}`;

    const body = `
${returning ? 'RETURNING PATIENT — already in GHL' : 'NEW PATIENT — added to GHL'}

Name:     ${firstName} ${lastName}
Phone:    ${phone}
Email:    ${email}
${message ? `Message:  ${message}\n` : ''}
Source:   ${utmSource || 'direct'} / ${utmCampaign || 'unknown'}
Time:     ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PT
`.trim();

    await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${resendKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            from: 'Henry (Dr. Bonakdar) <henry@refract.ing>',
            to: [notifyEmail],
            subject,
            text: body,
        }),
    });
}

interface ContactPayload {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    message?: string;
    smsConsent: boolean;
    gclid?: string;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    // First-touch attribution (what originally brought them to the site)
    firstTouchSource?: string;
    firstTouchMedium?: string;
    firstTouchCampaign?: string;
    firstTouchGclid?: string;
    // Visitor context (from utm-tracking.ts cookies)
    visitorId?: string;
    visitCount?: number;
    // Form step 2 — service interest + insurance
    _serviceTags?: string[];   // e.g. ['interest-keratoconus']
    _insuranceTags?: string[]; // e.g. ['no-insurance']
    _insurance?: string;       // selected plan name e.g. 'VSP'
}

function sanitizeUtm(v: unknown, max = 100): string {
    return typeof v === 'string' ? v.slice(0, max) : '';
}

function validatePayload(body: unknown): ContactPayload {
    const b = body as Record<string, unknown>;

    const firstName = typeof b.firstName === 'string' ? b.firstName.trim() : '';
    const lastName = typeof b.lastName === 'string' ? b.lastName.trim() : '';
    const phone = typeof b.phone === 'string' ? b.phone.trim() : '';
    const email = typeof b.email === 'string' ? b.email.trim() : '';
    const message = typeof b.message === 'string' ? b.message.trim().slice(0, 200) : '';
    const smsConsent = b.smsConsent === true;
    // gclid: GHL standard field — pass directly in contact body (not as customField)
    const gclid = typeof b.gclid === 'string' ? b.gclid.replace(/[^A-Za-z0-9_\-]/g, '').slice(0, 100) : '';
    const utmSource = sanitizeUtm(b.utmSource);
    const utmMedium = sanitizeUtm(b.utmMedium);
    const utmCampaign = sanitizeUtm(b.utmCampaign, 200);
    const firstTouchSource = sanitizeUtm(b.firstTouchSource);
    const firstTouchMedium = sanitizeUtm(b.firstTouchMedium);
    const firstTouchCampaign = sanitizeUtm(b.firstTouchCampaign, 200);
    const firstTouchGclid = typeof b.firstTouchGclid === 'string' ? b.firstTouchGclid.replace(/[^A-Za-z0-9_\-]/g, '').slice(0, 100) : '';
    const visitorId = typeof b.visitorId === 'string' ? b.visitorId.replace(/[^A-Za-z0-9\-]/g, '').slice(0, 40) : '';
    const visitCount = typeof b.visitCount === 'number' && b.visitCount > 0 ? Math.min(b.visitCount, 9999) : 0;

    // Service/insurance fields from form step 2
    const VALID_SERVICE_TAGS = new Set([
        'interest-keratoconus', 'interest-ortho-k', 'interest-dry-eye',
        'interest-headache', 'interest-other',
    ]);
    const rawServiceTags = Array.isArray(b._serviceTags) ? b._serviceTags : [];
    const _serviceTags = rawServiceTags
        .filter((t): t is string => typeof t === 'string' && VALID_SERVICE_TAGS.has(t));

    const rawInsuranceTags = Array.isArray(b._insuranceTags) ? b._insuranceTags : [];
    const _insuranceTags = rawInsuranceTags
        .filter((t): t is string => typeof t === 'string' && /^[a-z0-9\-]{1,50}$/.test(t));

    const _insurance = typeof b._insurance === 'string' ? b._insurance.trim().slice(0, 80) : '';

    if (!firstName || !lastName || !phone || !email) {
        throw new Error('firstName, lastName, phone, and email are required');
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error('Invalid email address');
    }

    return {
        firstName, lastName, phone, email, message, smsConsent,
        gclid, utmSource, utmMedium, utmCampaign,
        firstTouchSource, firstTouchMedium, firstTouchCampaign, firstTouchGclid,
        visitorId, visitCount,
        _serviceTags, _insuranceTags, _insurance,
    };
}

export async function POST(request: NextRequest) {
    try {
        const apiKey = process.env.GHL_LEAD_API_KEY;
        if (!apiKey) {
            console.error('GHL_LEAD_API_KEY is not configured');
            return NextResponse.json(
                { success: false, error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Read Vercel geo headers (populated at the edge on every request)
        const cityRaw = request.headers.get('x-vercel-ip-city') ?? '';
        const stateRaw = request.headers.get('x-vercel-ip-region') ?? '';
        // Vercel URL-encodes city names (e.g. "Los%20Angeles")
        const city = decodeURIComponent(cityRaw).slice(0, 100);
        const state = stateRaw.slice(0, 100);

        const body = await request.json();
        const {
            firstName, lastName, phone, email, message, smsConsent,
            gclid, utmSource, utmMedium, utmCampaign,
            firstTouchSource, firstTouchMedium, firstTouchCampaign, firstTouchGclid,
            visitorId, visitCount,
            _serviceTags = [], _insuranceTags = [], _insurance = '',
        } = validatePayload(body);

        // Build GHL contact payload
        const tags = ['keratoconus lead', ..._serviceTags, ..._insuranceTags];
        if (smsConsent) tags.push('sms-consent');

        const ghlBody: Record<string, unknown> = {
            firstName,
            lastName,
            phone,
            email,
            source: 'keratocones.com',
            tags,
            // Standard GHL location fields (populated from Vercel edge headers)
            ...(city ? { city } : {}),
            ...(state ? { state } : {}),
            // gclid: GHL standard field — populates contact.gclid for Google Ads offline conversions
            ...(gclid ? { gclid } : {}),
            // If no SMS consent, set DND for SMS to respect TCPA
            ...(smsConsent ? {} : {
                dndSettings: {
                    SMS: { status: 'active', message: 'No SMS consent given on website form' },
                },
            }),
        };

        // locationId required for Private Integration Tokens (pit-)
        const locationId = process.env.GHL_LOCATION_ID;
        if (locationId) {
            ghlBody.locationId = locationId;
        }

        // Build custom fields: last-touch UTMs + first-touch UTMs + service/insurance + visitor context
        const customFields: { id: string; field_value: string }[] = [];
        // Last-touch (searchable in GHL, used for workflow triggers)
        if (utmSource)   customFields.push({ id: CF.utmSource,   field_value: utmSource });
        if (utmMedium)   customFields.push({ id: CF.utmMedium,   field_value: utmMedium });
        if (utmCampaign) customFields.push({ id: CF.utmCampaign, field_value: utmCampaign });
        // First-touch (the channel that originally brought them to the site)
        if (firstTouchSource)   customFields.push({ id: CF.firstTouchSource,   field_value: firstTouchSource });
        if (firstTouchMedium)   customFields.push({ id: CF.firstTouchMedium,   field_value: firstTouchMedium });
        if (firstTouchCampaign) customFields.push({ id: CF.firstTouchCampaign, field_value: firstTouchCampaign });
        // Service interest (e.g. "interest-keratoconus") — comma-joined if somehow multiple
        const serviceInterest = _serviceTags.join(', ');
        if (serviceInterest) customFields.push({ id: CF.serviceInterest, field_value: serviceInterest });
        // Insurance type (plan name from dropdown, or 'no-insurance' if declined)
        const insuranceValue = _insurance || (_insuranceTags.includes('no-insurance') ? 'no-insurance' : '');
        if (insuranceValue) customFields.push({ id: CF.insuranceType, field_value: insuranceValue });
        // Visitor ID (for cross-session deduplication)
        if (visitorId) customFields.push({ id: CF.visitorId, field_value: visitorId });
        // Optional message field
        const messageFieldId = process.env.GHL_MESSAGE_FIELD_ID;
        if (message && messageFieldId) customFields.push({ id: messageFieldId, field_value: message });
        if (customFields.length > 0) ghlBody.customFields = customFields;

        const ghlResponse = await fetch(GHL_API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Version': GHL_API_VERSION,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ghlBody),
        });

        if (!ghlResponse.ok) {
            const ghlErrorText = await ghlResponse.text();
            let ghlError;
            try { ghlError = JSON.parse(ghlErrorText); } catch { ghlError = { message: ghlErrorText }; }

            // Handle duplicate contact — patient already exists in system
            if (ghlResponse.status === 400 && ghlError.message?.includes('duplicated contacts') && ghlError.meta?.contactId) {
                const existingId = ghlError.meta.contactId;

                // Add note with form submission details
                await fetch(
                    `https://services.leadconnectorhq.com/contacts/${existingId}/notes`,
                    {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${apiKey}`,
                            'Version': GHL_API_VERSION,
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            body: [
                                    `Returning patient form submission from keratocones.com`,
                                    `Message:     ${message || '(none)'}`,
                                    serviceInterest ? `Service:     ${serviceInterest}` : null,
                                    insuranceValue ? `Insurance:   ${insuranceValue}` : null,
                                    city ? `Location:    ${city}${state ? `, ${state}` : ''}` : null,
                                    `Last touch:  ${utmSource || 'direct'} / ${utmMedium || '-'} / ${utmCampaign || '-'}${gclid ? ` (gclid: ${gclid})` : ''}`,
                                    firstTouchSource ? `First touch: ${firstTouchSource} / ${firstTouchMedium || '-'} / ${firstTouchCampaign || '-'}${firstTouchGclid ? ` (gclid: ${firstTouchGclid})` : ''}` : null,
                                    visitCount ? `Visits: ${visitCount}` : null,
                                    visitorId ? `Visitor ID: ${visitorId}` : null,
                                    `Submitted:   ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PT`,
                                ].filter(Boolean).join('\n'),
                        }),
                    }
                ).catch((err) => console.error('Failed to add note to existing contact:', err));

                // Add returning-patient tag + update tags
                const contactResp = await fetch(
                    `https://services.leadconnectorhq.com/contacts/${existingId}`,
                    {
                        method: 'GET',
                        headers: {
                            'Authorization': `Bearer ${apiKey}`,
                            'Version': GHL_API_VERSION,
                        },
                    }
                ).catch(() => null);

                if (contactResp?.ok) {
                    const contactData = await contactResp.json();
                    const currentTags: string[] = contactData.contact?.tags || [];
                    const updatedTags = [...new Set([...currentTags, 'returning-patient', 'website form'])];
                    const updateBody: Record<string, unknown> = { tags: updatedTags };
                    // Backfill gclid on existing contact if we now have it
                    if (gclid && !contactData.contact?.gclid) updateBody.gclid = gclid;
                    await fetch(
                        `https://services.leadconnectorhq.com/contacts/${existingId}`,
                        {
                            method: 'PUT',
                            headers: {
                                'Authorization': `Bearer ${apiKey}`,
                                'Version': GHL_API_VERSION,
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(updateBody),
                        }
                    ).catch((err) => console.error('Failed to update returning contact:', err));
                }

                sendLeadNotification({ firstName, lastName, phone, email, message, utmSource, utmMedium, utmCampaign, returning: true }).catch(() => {});
                return NextResponse.json({ success: true, returning: true });
            }

            console.error('GHL API error:', ghlResponse.status, ghlErrorText);
            return NextResponse.json(
                { success: false, error: 'Failed to submit. Please call us directly.' },
                { status: 502 }
            );
        }

        // New contact created
        const ghlData = await ghlResponse.json();
        const newContactId = ghlData.contact?.id;

        // Email notification — fire and forget
        sendLeadNotification({ firstName, lastName, phone, email, message, utmSource, utmMedium, utmCampaign, returning: false }).catch(() => {});


        // Add note with form message
        if (newContactId) {
            await fetch(
                `https://services.leadconnectorhq.com/contacts/${newContactId}/notes`,
                {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'Version': GHL_API_VERSION,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        body: [
                                `New patient form submission from keratocones.com`,
                                `Message:     ${message || '(none)'}`,
                                serviceInterest ? `Service:     ${serviceInterest}` : null,
                                insuranceValue ? `Insurance:   ${insuranceValue}` : null,
                                city ? `Location:    ${city}${state ? `, ${state}` : ''}` : null,
                                `Last touch:  ${utmSource || 'direct'} / ${utmMedium || '-'} / ${utmCampaign || '-'}${gclid ? ` (gclid: ${gclid})` : ''}`,
                                firstTouchSource ? `First touch: ${firstTouchSource} / ${firstTouchMedium || '-'} / ${firstTouchCampaign || '-'}${firstTouchGclid ? ` (gclid: ${firstTouchGclid})` : ''}` : null,
                                visitCount ? `Visits: ${visitCount}` : null,
                                visitorId ? `Visitor ID: ${visitorId}` : null,
                                `Submitted:   ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PT`,
                            ].filter(Boolean).join('\n'),
                    }),
                }
            ).catch((err) => console.error('Failed to add note:', err));

            // Add new-patient + website form tags (service tags already in initial contact create)
            const finalTags = [
                'keratoconus lead', 'new-patient', 'website form', 'keratoconus consultation',
                ..._serviceTags, ..._insuranceTags,
            ];
            await fetch(
                `https://services.leadconnectorhq.com/contacts/${newContactId}`,
                {
                    method: 'PUT',
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'Version': GHL_API_VERSION,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ tags: [...new Set(finalTags)] }),
                }
            ).catch((err) => console.error('Failed to update tags:', err));
        }

        return NextResponse.json({ success: true, returning: false });
    } catch (err) {
        if (err instanceof SyntaxError) {
            return NextResponse.json(
                { success: false, error: 'Invalid request body' },
                { status: 400 }
            );
        }
        if (err instanceof Error && err.message.includes('required')) {
            return NextResponse.json(
                { success: false, error: err.message },
                { status: 400 }
            );
        }
        console.error('Contact API error:', err);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}
