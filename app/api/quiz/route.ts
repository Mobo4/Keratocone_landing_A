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
    visitorId:           'M4rocza6tWrZuvDneTTo',
};

// ─── Scoring tables ──────────────────────────────────────────────────────────
// KC: 6 questions, max score 24, min 7 (Q5 has no 1-pt option)
const KC_ALLOWED_POINTS: number[][] = [
    [1, 2, 3, 4],   // Q1: prescription change
    [1, 2, 3, 4],   // Q2: night driving
    [1, 2, 3, 4],   // Q3: glasses correction
    [1, 2, 3, 4],   // Q4: seen specialist
    [2, 3, 4],      // Q5: KC diagnosis (min 2)
    [1, 2, 3, 4],   // Q6: urgency
];

// Ortho-K: 5 questions, max score 20, min 7
const ORTHOK_ALLOWED_POINTS: number[][] = [
    [1, 2, 3, 4],   // Q1: prescription change rate
    [1, 3, 4],      // Q2: child age (1=under6, 3=6-8, 4=9-14, 3=15-18 → unique values 1,3,4)
    [1, 2, 3, 4],   // Q3: sports
    [1, 2, 3, 4],   // Q4: parental concern
    [2, 3, 4],      // Q5: doctor recommendation (min 2)
];

function computeScore(
    answers: Array<{ points: number }>,
    allowedPointsTable: number[][]
): number {
    let score = 0;
    for (let i = 0; i < Math.min(answers.length, allowedPointsTable.length); i++) {
        const pts = answers[i].points;
        const allowed = allowedPointsTable[i];
        // Accept only values from the allowed set; treat invalid as minimum
        if (allowed.includes(pts)) {
            score += pts;
        } else {
            score += allowed[0]; // minimum valid value
        }
    }
    return score;
}

function computeTierKC(score: number): string {
    if (score >= 16) return 'hot';
    if (score >= 10) return 'warm';
    return 'nurture';
}

function computeTierOrthoK(score: number): string {
    if (score >= 13) return 'hot';
    if (score >= 8) return 'warm';
    return 'nurture';
}

// ─── Resend notification ─────────────────────────────────────────────────────
async function sendQuizNotification(params: {
    firstName: string; lastName: string; phone: string; email: string;
    quizType: string; tier: string; score: number;
    utmSource?: string; utmCampaign?: string;
    returning: boolean;
}) {
    const resendKey = process.env.RESEND_API_KEY;
    const notifyEmail = process.env.LEAD_NOTIFY_EMAIL || 'eyecarecenteroc@gmail.com';
    if (!resendKey) return;

    const { firstName, lastName, phone, email, quizType, tier, score, utmSource, utmCampaign, returning } = params;
    const label = quizType === 'orthok' ? 'Ortho-K' : 'KC';
    const subject = returning
        ? `↩️ Returning Quiz Lead [${tier.toUpperCase()}] ${label} — ${firstName} ${lastName}`
        : `🧪 Quiz [${tier.toUpperCase()}] ${label} — ${firstName} ${lastName}`;

    const body = `
${returning ? 'RETURNING PATIENT — updated in GHL' : 'NEW QUIZ LEAD — added to GHL'}

Name:     ${firstName} ${lastName}
Phone:    ${phone}
Email:    ${email || '(not provided)'}
Quiz:     ${label} | Score: ${score} | Tier: ${tier.toUpperCase()}
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

// ─── Validation ──────────────────────────────────────────────────────────────
function sanitize(v: unknown, max: number): string {
    return typeof v === 'string'
        ? v.replace(/[\x00-\x1F\x7F]/g, '').trim().slice(0, max)
        : '';
}

interface QuizAnswer {
    question: string;
    answer: string;
    points: number;
}

interface QuizPayload {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    quizType: 'kc' | 'orthok';
    answers: QuizAnswer[];
    smsConsent: boolean;
    website: string; // honeypot
    gclid?: string;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    firstTouchSource?: string;
    firstTouchMedium?: string;
    firstTouchCampaign?: string;
    firstTouchGclid?: string;
    visitorId?: string;
    visitCount?: number;
}

function validatePayload(body: unknown): QuizPayload {
    const b = body as Record<string, unknown>;

    const firstName = sanitize(b.firstName, 80);
    const lastName = sanitize(b.lastName, 80);
    const phone = sanitize(b.phone, 20);
    const email = typeof b.email === 'string' ? b.email.trim().slice(0, 200) : '';
    const quizType = b.quizType === 'kc' || b.quizType === 'orthok' ? b.quizType : null;
    const smsConsent = b.smsConsent === true;
    const website = sanitize(b.website, 200); // honeypot

    if (!firstName || !lastName || !phone) {
        throw new Error('firstName, lastName, and phone are required');
    }
    if (!quizType) {
        throw new Error('quizType must be "kc" or "orthok"');
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error('Invalid email address');
    }

    // Sanitize answers array — strip control chars, cap each at 120 chars
    const rawAnswers = Array.isArray(b.answers) ? b.answers : [];
    const expectedCount = quizType === 'kc' ? 6 : 5;
    if (rawAnswers.length !== expectedCount) {
        throw new Error(`Expected ${expectedCount} answers for ${quizType}, got ${rawAnswers.length}`);
    }
    const answers: QuizAnswer[] = rawAnswers.slice(0, 6).map((a) => {
        const item = a as Record<string, unknown>;
        return {
            question: sanitize(item.question, 120),
            answer: sanitize(item.answer, 120),
            points: typeof item.points === 'number' ? Math.round(item.points) : 0,
        };
    });

    const gclid = typeof b.gclid === 'string' ? b.gclid.replace(/[^A-Za-z0-9_\-]/g, '').slice(0, 100) : '';
    const utmSource = sanitize(b.utmSource, 100);
    const utmMedium = sanitize(b.utmMedium, 100);
    const utmCampaign = sanitize(b.utmCampaign, 200);
    const firstTouchSource = sanitize(b.firstTouchSource, 100);
    const firstTouchMedium = sanitize(b.firstTouchMedium, 100);
    const firstTouchCampaign = sanitize(b.firstTouchCampaign, 200);
    const firstTouchGclid = typeof b.firstTouchGclid === 'string' ? b.firstTouchGclid.replace(/[^A-Za-z0-9_\-]/g, '').slice(0, 100) : '';
    const visitorId = typeof b.visitorId === 'string' ? b.visitorId.replace(/[^A-Za-z0-9\-]/g, '').slice(0, 40) : '';
    const visitCount = typeof b.visitCount === 'number' && b.visitCount > 0 ? Math.min(b.visitCount, 9999) : 0;

    return {
        firstName, lastName, phone, email, quizType, answers, smsConsent, website,
        gclid, utmSource, utmMedium, utmCampaign,
        firstTouchSource, firstTouchMedium, firstTouchCampaign, firstTouchGclid,
        visitorId, visitCount,
    };
}

// ─── POST handler ─────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
    try {
        const apiKey = process.env.GHL_LEAD_API_KEY;
        if (!apiKey) {
            return NextResponse.json(
                { success: false, error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Vercel edge geo headers
        const cityRaw = request.headers.get('x-vercel-ip-city') ?? '';
        const stateRaw = request.headers.get('x-vercel-ip-region') ?? '';
        const city = decodeURIComponent(cityRaw).slice(0, 100);
        const state = stateRaw.slice(0, 100);

        const body = await request.json();
        const {
            firstName, lastName, phone, email, quizType, answers, smsConsent, website,
            gclid, utmSource, utmMedium, utmCampaign,
            firstTouchSource, firstTouchMedium, firstTouchCampaign, firstTouchGclid,
            visitorId, visitCount,
        } = validatePayload(body);

        // ── Honeypot check — must be before any GHL API call ──
        if (website) {
            // Bot detected — return plausible success response, skip GHL
            return NextResponse.json({ success: true, tier: 'general' });
        }

        // ── Server-side score recomputation (do NOT trust client-sent score) ──
        const allowedPoints = quizType === 'kc' ? KC_ALLOWED_POINTS : ORTHOK_ALLOWED_POINTS;
        const score = computeScore(answers, allowedPoints);
        const tier = quizType === 'kc' ? computeTierKC(score) : computeTierOrthoK(score);

        // ── Build GHL tags ──
        const tags = quizType === 'kc'
            ? ['kc-quiz-lead', `kc-quiz-${tier}`, 'keratoconus lead']
            : ['orthok-quiz-lead', `orthok-quiz-${tier}`];
        if (smsConsent) tags.push('sms-consent');

        // ── Build GHL contact body ──
        const ghlBody: Record<string, unknown> = {
            firstName,
            lastName,
            phone,
            ...(email ? { email } : {}), // never send empty string
            source: 'keratocones.com',
            tags,
            ...(gclid ? { gclid } : {}),
            ...(city ? { city } : {}),
            ...(state ? { state } : {}),
            ...(smsConsent ? {} : {
                dndSettings: {
                    SMS: { status: 'active', message: 'No SMS consent on quiz form' },
                },
            }),
        };

        const locationId = process.env.GHL_LOCATION_ID;
        if (locationId) ghlBody.locationId = locationId;

        // Custom fields: last-touch + first-touch UTMs + visitor context
        const customFields: { id: string; field_value: string }[] = [];
        if (utmSource)          customFields.push({ id: CF.utmSource,          field_value: utmSource });
        if (utmMedium)          customFields.push({ id: CF.utmMedium,          field_value: utmMedium });
        if (utmCampaign)        customFields.push({ id: CF.utmCampaign,        field_value: utmCampaign });
        if (firstTouchSource)   customFields.push({ id: CF.firstTouchSource,   field_value: firstTouchSource });
        if (firstTouchMedium)   customFields.push({ id: CF.firstTouchMedium,   field_value: firstTouchMedium });
        if (firstTouchCampaign) customFields.push({ id: CF.firstTouchCampaign, field_value: firstTouchCampaign });
        if (visitorId)          customFields.push({ id: CF.visitorId,          field_value: visitorId });
        if (customFields.length > 0) ghlBody.customFields = customFields;

        // ── Build note body (for both new and returning contacts) ──
        const quizLabel = quizType === 'kc' ? 'KC Qualification' : 'Ortho-K Parent';
        const answerLines = answers.map((a, i) => `Q${i + 1}: ${a.question} → ${a.answer}`);
        const noteBody = [
            `${quizLabel} Quiz — keratocones.com`,
            `Score: ${score} → ${tier.toUpperCase()}`,
            `Quiz type: ${quizType}`,
            '',
            ...answerLines,
            '',
            city ? `Location:    ${city}${state ? `, ${state}` : ''}` : null,
            `Last touch:  ${utmSource || 'direct'} / ${utmMedium || '-'} / ${utmCampaign || '-'}${gclid ? ` (gclid: ${gclid})` : ''}`,
            firstTouchSource ? `First touch: ${firstTouchSource} / ${firstTouchMedium || '-'} / ${firstTouchCampaign || '-'}${firstTouchGclid ? ` (gclid: ${firstTouchGclid})` : ''}` : null,
            visitCount ? `Visits: ${visitCount}` : null,
            visitorId ? `Visitor ID: ${visitorId}` : null,
            `Submitted:   ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PT`,
        ].filter(Boolean).join('\n');

        // ── POST new contact to GHL ──
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
            let ghlError: Record<string, unknown>;
            try { ghlError = JSON.parse(ghlErrorText); } catch { ghlError = { message: ghlErrorText }; }

            // ── Duplicate contact handling ──
            if (
                ghlResponse.status === 400 &&
                typeof ghlError.message === 'string' &&
                ghlError.message.includes('duplicated contacts') &&
                ghlError.meta && typeof (ghlError.meta as Record<string, unknown>).contactId === 'string'
            ) {
                const existingId = (ghlError.meta as Record<string, unknown>).contactId as string;

                // Add quiz note to existing contact
                await fetch(
                    `https://services.leadconnectorhq.com/contacts/${existingId}/notes`,
                    {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${apiKey}`,
                            'Version': GHL_API_VERSION,
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ body: noteBody }),
                    }
                ).catch((err) => console.error('Failed to add note to existing contact:', err));

                // Merge quiz tags into existing contact
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
                    const contactData = await contactResp.json() as { contact?: { tags?: string[]; gclid?: string } };
                    const currentTags: string[] = contactData.contact?.tags || [];
                    const updatedTags = [...new Set([...currentTags, ...tags, 'returning-patient'])];
                    const updateBody: Record<string, unknown> = { tags: updatedTags };
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

                sendQuizNotification({
                    firstName, lastName, phone, email, quizType, tier, score,
                    utmSource, utmCampaign, returning: true,
                }).catch(() => {});

                return NextResponse.json({ success: true, tier, returning: true });
            }

            console.error('GHL API error:', ghlResponse.status, ghlErrorText);
            return NextResponse.json(
                { success: false, error: "We couldn't save your info — please call us at (714) 558-0641." },
                { status: 502 }
            );
        }

        // ── New contact created ──
        const ghlData = await ghlResponse.json() as { contact?: { id?: string } };
        const newContactId = ghlData.contact?.id;

        sendQuizNotification({
            firstName, lastName, phone, email, quizType, tier, score,
            utmSource, utmCampaign, returning: false,
        }).catch(() => {});

        if (newContactId) {
            // Add quiz note
            await fetch(
                `https://services.leadconnectorhq.com/contacts/${newContactId}/notes`,
                {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'Version': GHL_API_VERSION,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ body: noteBody }),
                }
            ).catch((err) => console.error('Failed to add note:', err));
        }

        return NextResponse.json({ success: true, tier, returning: false });

    } catch (err) {
        if (err instanceof SyntaxError) {
            return NextResponse.json({ success: false, error: 'Invalid request body' }, { status: 400 });
        }
        if (err instanceof Error && err.message.includes('required')) {
            return NextResponse.json({ success: false, error: err.message }, { status: 400 });
        }
        if (err instanceof Error && err.message.includes('quizType')) {
            return NextResponse.json({ success: false, error: err.message }, { status: 400 });
        }
        console.error('Quiz API error:', err);
        return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
    }
}
