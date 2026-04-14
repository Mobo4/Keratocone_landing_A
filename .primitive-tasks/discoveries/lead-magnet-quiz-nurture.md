# Discovery: Lead Magnet Quiz + Nurture System
Date: 2026-04-13

## Problem Statement
keratocones.com serves only BOFU visitors (direct "Request Appointment" form). Research shows KC patients take 6+ months to book after first awareness; ophthalmology CPL is $125.57/lead (highest of all specialties). 90%+ of site visitors are in TOFU/MOFU and leave without giving contact info. No lead capture, no nurture.

## Current State

### eyecarecenteroc.com (REFERENCE IMPLEMENTATION — DO NOT MODIFY)
- Full 7-question scored quiz at `app/[locale]/quiz/page.tsx`
- Tier routing: hot (≥80) / warm (≥50) / nurture (≥20) / general
- Contact capture: firstName, lastName, phone, email (optional), honeypot
- `app/api/quiz/route.ts` → GHL with quiz-lead + quiz-{tier} tags + answers in customFields
- `app/[locale]/quiz/results/[tier]/page.tsx` → tier-specific CTA copy

### keratocones.com (TARGET)
- `components/KeratoconusQuiz.tsx`: 3-question teaser, no lead capture, all paths → "You Are A High-Priority Candidate", anchors to `#contact-form`. Used at `app/page.tsx:129`.
- No `/quiz` route exists
- No ortho-K pages exist
- `app/api/contact/route.ts`: working GHL integration (POST contacts, notes, tags, UTM fields)
- GHL custom field IDs confirmed: utmSource=6sdXreQxbnVymcrOOvHU, utmMedium=3if5VqRIHGXkjDspuNgs, utmCampaign=cZiraewtlWoRya9HTpoD
- next-intl: locale via middleware (not [locale] wrapper) — `/quiz` routes go at `app/quiz/` root
- Env vars available: GHL_LEAD_API_KEY, GHL_LOCATION_ID, RESEND_API_KEY, LEAD_NOTIFY_EMAIL, GHL_MESSAGE_FIELD_ID

## Files That Will Change
- CREATE: `app/quiz/page.tsx` — KC lead-capture quiz (6Q, scoring, contact step, honeypot)
- CREATE: `app/quiz/results/[tier]/page.tsx` — KC tier results (KC-specific copy)
- CREATE: `app/quiz/ortho-k/page.tsx` — Ortho-K parent quiz (5Q)
- CREATE: `app/quiz/ortho-k/results/[tier]/page.tsx` — Ortho-K tier results
- CREATE: `app/api/quiz/route.ts` — KC quiz → GHL (tags: kc-quiz-lead, kc-quiz-{tier})
- CREATE: `app/api/quiz/ortho-k/route.ts` — Ortho-K quiz → GHL (tags: orthok-quiz-lead, orthok-quiz-{tier})
- MODIFY: `components/KeratoconusQuiz.tsx` — update result CTA to link to `/quiz` for full assessment
- OUT OF SCOPE: GHL nurture email sequences (workflow API is read-only; will document as manual setup)
- OUT OF SCOPE: eyecarecenteroc.com (already has quiz — no changes)

## Key Risks
1. Locale routing — keratocones.com uses middleware locale, not [locale] route wrapper. Quiz at `/quiz` root is correct.
2. GHL duplicate contact handling — same logic as contact/route.ts (400 + duplicated contacts → update tags/note, don't error out)
3. Honeypot field must be hidden from screen readers and tab order
4. Results page needs [tier] validation (notFound() for invalid tier values)

## Verify Criteria (pre-test)
1. `/quiz` loads in browser (HTTP 200)
2. Completing all 6 KC questions advances to contact capture step
3. Submitting contact info sends POST to `/api/quiz` with score + answers
4. GHL receives contact with tags: kc-quiz-lead, kc-quiz-hot/warm/nurture/general
5. Browser redirects to `/quiz/results/hot` (or correct tier) after submit
6. `/quiz/ortho-k` loads (HTTP 200), 5 questions, separate GHL tags (orthok-quiz-lead)
7. `/quiz/results/invalid-tier` returns 404
8. Honeypot bot submission returns success=true but does NOT create GHL contact
9. Existing `KeratoconusQuiz.tsx` result CTA links to `/quiz` (not `#contact-form`)
10. TypeScript compiles clean (`tsc --noEmit` exit 0)
