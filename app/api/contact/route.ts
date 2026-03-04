import { NextRequest, NextResponse } from 'next/server';

const GHL_API_URL = 'https://services.leadconnectorhq.com/contacts/';
const GHL_API_VERSION = '2021-07-28';

interface ContactPayload {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    message?: string;
}

function validatePayload(body: unknown): ContactPayload {
    const b = body as Record<string, unknown>;

    const firstName = typeof b.firstName === 'string' ? b.firstName.trim() : '';
    const lastName = typeof b.lastName === 'string' ? b.lastName.trim() : '';
    const phone = typeof b.phone === 'string' ? b.phone.trim() : '';
    const email = typeof b.email === 'string' ? b.email.trim() : '';
    const message = typeof b.message === 'string' ? b.message.trim().slice(0, 200) : '';

    if (!firstName || !lastName || !phone || !email) {
        throw new Error('firstName, lastName, phone, and email are required');
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error('Invalid email address');
    }

    return { firstName, lastName, phone, email, message };
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
        const { firstName, lastName, phone, email, message } = validatePayload(body);

        // Build GHL contact payload
        const ghlBody: Record<string, unknown> = {
            firstName,
            lastName,
            phone,
            email,
            source: 'keratocones.com',
            tags: ['Website Form', 'Keratoconus Consultation'],
        };

        // Add message as custom field if configured, otherwise skip
        const messageFieldId = process.env.GHL_MESSAGE_FIELD_ID;
        if (message && messageFieldId) {
            ghlBody.customFields = [{ id: messageFieldId, field_value: message }];
        }

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
            const ghlError = await ghlResponse.text();
            console.error('GHL API error:', ghlResponse.status, ghlError);
            return NextResponse.json(
                { success: false, error: 'Failed to submit. Please call us directly.' },
                { status: 502 }
            );
        }

        // If message exists but no custom field configured, add as a note
        const ghlData = await ghlResponse.json();
        if (message && !messageFieldId && ghlData.contact?.id) {
            await fetch(
                `https://services.leadconnectorhq.com/contacts/${ghlData.contact.id}/notes`,
                {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'Version': GHL_API_VERSION,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ body: `Website form message: ${message}` }),
                }
            ).catch((err) => console.error('Failed to add note:', err));
        }

        return NextResponse.json({ success: true });
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
