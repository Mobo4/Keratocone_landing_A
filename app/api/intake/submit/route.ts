import { NextRequest, NextResponse } from 'next/server';
import { createHash } from 'crypto';

const GHL_API_URL = 'https://services.leadconnectorhq.com/contacts/';
const GHL_API_VERSION = '2021-07-28';

// Security: no caching
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { token, contactId, intakeData } = body;

    if (!token || !contactId || !intakeData) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const refractingApiUrl = process.env.REFRACTING_API_URL;
    const intakeSubmitSecret = process.env.INTAKE_SUBMIT_SECRET;
    const ghlApiKey = process.env.GHL_API_KEY;

    if (!refractingApiUrl || !intakeSubmitSecret) {
      console.error('Missing REFRACTING_API_URL or INTAKE_SUBMIT_SECRET');
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // E-signature: capture timestamp + IP + consent text SHA-256
    const clientIp = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const consentText = 'I acknowledge that I have received and reviewed the Notice of Privacy Practices.';
    const consentHash = createHash('sha256').update(consentText).digest('hex');

    const enrichedData = {
      ...intakeData,
      signatureIp: clientIp,
      consentTextHash: consentHash,
      submittedAt: new Date().toISOString(),
    };

    // Compute token hash for Refracting lookup
    const tokenHash = createHash('sha256').update(token).digest('hex');

    // 1. Update GHL contact with collected custom fields
    if (ghlApiKey) {
      try {
        const ghlPayload: Record<string, string> = {};
        if (intakeData.firstName) ghlPayload.firstName = intakeData.firstName;
        if (intakeData.lastName) ghlPayload.lastName = intakeData.lastName;
        if (intakeData.email) ghlPayload.email = intakeData.email;
        if (intakeData.phone) ghlPayload.phone = intakeData.phone;
        if (intakeData.dob) ghlPayload.dateOfBirth = intakeData.dob;
        if (intakeData.address1) ghlPayload.address1 = intakeData.address1;
        if (intakeData.city) ghlPayload.city = intakeData.city;
        if (intakeData.state) ghlPayload.state = intakeData.state;
        if (intakeData.zipCode) ghlPayload.postalCode = intakeData.zipCode;

        // Update contact
        await fetch(`${GHL_API_URL}${contactId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ghlApiKey}`,
            Version: GHL_API_VERSION,
          },
          body: JSON.stringify(ghlPayload),
        });

        // Add tag "intake-complete"
        await fetch(`${GHL_API_URL}${contactId}/tags`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${ghlApiKey}`,
            Version: GHL_API_VERSION,
          },
          body: JSON.stringify({ tags: ['intake-complete'] }),
        });
      } catch (ghlErr) {
        // GHL update is non-blocking — log but don't fail the submission
        console.error('GHL update failed (non-blocking):', (ghlErr as Error).message);
      }
    }

    // 2. Submit to Refracting API
    const refractingRes = await fetch(`${refractingApiUrl}/api/intake/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Intake-Secret': intakeSubmitSecret,
      },
      body: JSON.stringify({
        contactId,
        tokenHash,
        intakeData: enrichedData,
      }),
    });

    if (!refractingRes.ok) {
      const errBody = await refractingRes.text();
      console.error('Refracting submit failed:', refractingRes.status, errBody);
      return NextResponse.json(
        { success: false, error: 'Failed to save intake data' },
        { status: 500 }
      );
    }

    const result = await refractingRes.json();

    return NextResponse.json({
      success: true,
      intakeId: result.intakeId,
    }, {
      headers: {
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });
  } catch (err) {
    console.error('Intake submit error:', (err as Error).message);
    return NextResponse.json(
      { success: false, error: 'Submission failed' },
      { status: 500 }
    );
  }
}
