import { NextRequest, NextResponse } from 'next/server';

const GHL_API_URL = 'https://services.leadconnectorhq.com/contacts/';
const GHL_API_VERSION = '2021-07-28';

interface ContactPayload {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    message?: string;
    smsConsent: boolean;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
}

function validatePayload(body: unknown): ContactPayload {
    const b = body as Record<string, unknown>;

    const firstName = typeof b.firstName === 'string' ? b.firstName.trim() : '';
    const lastName = typeof b.lastName === 'string' ? b.lastName.trim() : '';
    const phone = typeof b.phone === 'string' ? b.phone.trim() : '';
    const email = typeof b.email === 'string' ? b.email.trim() : '';
    const message = typeof b.message === 'string' ? b.message.trim().slice(0, 200) : '';
    const smsConsent = b.smsConsent === true;
    const utmSource = typeof b.utmSource === 'string' ? b.utmSource.slice(0, 100) : '';
    const utmMedium = typeof b.utmMedium === 'string' ? b.utmMedium.slice(0, 100) : '';
    const utmCampaign = typeof b.utmCampaign === 'string' ? b.utmCampaign.slice(0, 200) : '';

    if (!firstName || !lastName || !phone || !email) {
        throw new Error('firstName, lastName, phone, and email are required');
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error('Invalid email address');
    }

    return { firstName, lastName, phone, email, message, smsConsent, utmSource, utmMedium, utmCampaign };
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

        const body = await request.json();
        const { firstName, lastName, phone, email, message, smsConsent, utmSource, utmMedium, utmCampaign } = validatePayload(body);

        // Build GHL contact payload
        const tags = ['keratoconus lead'];
        if (smsConsent) tags.push('sms-consent');

        const ghlBody: Record<string, unknown> = {
            firstName,
            lastName,
            phone,
            email,
            source: 'keratocones.com',
            tags,
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

        // Build custom fields: UTM params + optional message field
        const customFields: { id: string; field_value: string }[] = [];
        if (utmSource) customFields.push({ id: '6sdXreQxbnVymcrOOvHU', field_value: utmSource });
        if (utmMedium) customFields.push({ id: '3if5VqRIHGXkjDspuNgs', field_value: utmMedium });
        if (utmCampaign) customFields.push({ id: 'cZiraewtlWoRya9HTpoD', field_value: utmCampaign });
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
                            body: `Returning patient form submission from keratocones.com\nMessage: ${message || '(none)'}\nSubmitted: ${new Date().toISOString()}`,
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
                    if (!currentTags.includes('returning-patient')) {
                        const updatedTags = [...new Set([...currentTags, 'returning-patient', 'website form'])];
                        await fetch(
                            `https://services.leadconnectorhq.com/contacts/${existingId}`,
                            {
                                method: 'PUT',
                                headers: {
                                    'Authorization': `Bearer ${apiKey}`,
                                    'Version': GHL_API_VERSION,
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({ tags: updatedTags }),
                            }
                        ).catch((err) => console.error('Failed to update tags:', err));
                    }
                }

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
                        body: `New patient form submission from keratocones.com\nMessage: ${message || '(none)'}\nSubmitted: ${new Date().toISOString()}`,
                    }),
                }
            ).catch((err) => console.error('Failed to add note:', err));

            // Add new-patient + website form tags
            await fetch(
                `https://services.leadconnectorhq.com/contacts/${newContactId}`,
                {
                    method: 'PUT',
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'Version': GHL_API_VERSION,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        tags: ['keratoconus lead', 'new-patient', 'website form', 'keratoconus consultation'],
                    }),
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
