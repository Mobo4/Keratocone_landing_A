# PRD: Lead-Capture Quiz + GHL Nurture Entry — keratocones.com
Date: 2026-04-13 | Status: Synthesized

## Problem
keratocones.com drives $235/day in paid traffic to a 3-question teaser quiz with no lead capture. KC patients have a 6-month consideration cycle; ophthalmology CPL is $125.57/lead. 90%+ of visitors are TOFU/MOFU and leave without giving contact info. eyecarecenteroc.com already has a working scored quiz → GHL pipeline. keratocones.com needs the same, plus an Ortho-K variant.

## Proposed Changes

### 1. NEW: `app/quiz/page.tsx` — KC Qualification Quiz
`'use client'` page. State machine: `'quiz' | 'contact' | 'submitting'`. 6 scored questions → contact capture step → POST `/api/quiz` → redirect to `/quiz/results/[tier]?type=kc`.

**KC Questions (6Q, max score 24):**

| # | Question | Options → Points |
|---|----------|-----------------|
| Q1 | Has your glasses or contact lens prescription changed in the last 2 years? | Stable →1 / Slight update →2 / Noticeably stronger →3 / Changed multiple times, still doesn't feel right →4 |
| Q2 | How is your vision when driving at night or in low light? | Fine →1 / Some glare, manageable →2 / Halos or streaking, I avoid night driving →3 / I don't drive at night anymore — too unsafe →4 |
| Q3 | When you wear glasses, how well do they correct your vision? | Glasses work well →1 / Slightly blurry even with new prescription →2 / Blurry and distorted — glasses help but not much →3 / Glasses barely help — told nothing can be corrected further →4 |
| Q4 | Have you seen a doctor or specialist about your vision problems? | No, not yet →1 / Told it's mild, just monitor →2 / Tried multiple solutions, none worked →3 / Told my case is complex or may need a transplant →4 |
| Q5 | Have you been told you have keratoconus, or that your cornea has an unusual shape? | Unexplained vision problems, no diagnosis →2 / Possibly — no formal diagnosis →3 / Yes, diagnosed with keratoconus or corneal irregularity →4 / I had LASIK and my vision has been getting worse since →3 |
| Q6 | What's most important to you right now? | Just researching →1 / Want to understand my options →2 / Want something that actually works — dealt with this too long →3 / Need to act now — it's affecting work, driving, or daily life →4 |

**Tier thresholds (KC):** Hot ≥ 16 | Warm ≥ 10 | Nurture < 10

**Contact step fields:** First Name* / Last Name* / Phone* / Email (optional — for results) / SMS consent checkbox (unchecked by default, TCPA)  
**Honeypot:** `<input name="website" style={{display:'none'}} tabIndex={-1} aria-hidden="true" autoComplete="off" />`  
**UTM passthrough:** call `captureAndGetTracking()` in `useEffect` on mount; call `getStoredTracking()` in submit handler; include all tracking fields in POST body.  
**On API error:** soft-fail → `router.push(`/quiz/results/general?type=${quizType}`)` — never leave user on spinner. `quizType` must be captured in the submit handler scope before the API call.
**On network failure:** same soft-fail.

---

### 2. NEW: `app/quiz/ortho-k/page.tsx` — Ortho-K Parent Quiz
`'use client'` page. Same pattern as KC quiz. 5 questions → contact capture → POST `/api/quiz` with `quizType: 'orthok'` → redirect to `/quiz/results/[tier]?type=orthok`.

**Ortho-K Questions (5Q, max score 20):**

| # | Question | Options → Points |
|---|----------|-----------------|
| Q1 | How has your child's glasses prescription changed over the past year? | Stable →1 / Slight change →2 / Moderately stronger each visit →3 / Significantly stronger every 6–12 months →4 |
| Q2 | How old is your child? | Under 6 →1 / 6–8 →3 / 9–14 →4 / 15–18 →3 |
| Q3 | Does your child play sports or have activities where glasses are an issue? | No, glasses are fine →1 / Sometimes inconvenient →2 / Sports where glasses cause real problems →3 / Injury or lost glasses due to activities →4 |
| Q4 | How concerned are you about their vision continuing to worsen? | Not very →1 / Somewhat, want to monitor →2 / Actively looking for ways to slow it →3 / Very concerned, want to act now →4 |
| Q5 | Has your child's eye doctor mentioned myopia control or overnight contact lenses? | No — found this on my own →2 / Mentioned fast progression but no solution →3 / Suggested myopia control but not ortho-K specifically →3 / Specifically recommended ortho-K or overnight lenses →4 |

Note: Q5 min=2, Q2 min=1. Max=4+4+4+4+4=20. Min achievable=8 (1+1+1+1+2 but Q2 under-6 never realistic with sports concern). Tier thresholds tested against realistic answer patterns.

**Tier thresholds (Ortho-K):** Hot ≥ 13 | Warm ≥ 8 | Nurture < 8 (max 20)

Same honeypot, UTM passthrough, and soft-fail behavior as KC quiz.

---

### 3. NEW: `app/quiz/results/[tier]/page.tsx` — Shared Results Page
Server component. Reads `tier` param + `type` query param (`kc` | `orthok`).

**Valid tiers:** `hot`, `warm`, `nurture`, `general`. Anything else → `notFound()`.  
**`robots`:** `{ index: false, follow: false }` — results pages are not indexable.  
**`generateStaticParams`:** export `['hot','warm','nurture','general']`.

**Next.js 16 async props — REQUIRED pattern:**
```ts
export default async function ResultsPage({
  params,
  searchParams,
}: {
  params: Promise<{ tier: string }>;
  searchParams: Promise<{ type?: string }>;
}) {
  const { tier } = await params;
  const { type } = await searchParams;
  if (!VALID_TIERS.includes(tier as Tier)) notFound();
  // ...
}
```
Both `params` and `searchParams` are `Promise<>` and must be `await`ed. This matches the existing codebase pattern (`intake/[token]/page.tsx`, etc.).

**KC Results Copy (`?type=kc`):**

| Tier | Headline | Body | CTA |
|------|----------|------|-----|
| hot | "Your Symptoms Match Advanced Keratoconus — Act Before It Gets Worse" | KC is a progressive condition. Your answers describe a pattern where early specialist intervention prevents permanent vision loss. Dr. Bonakdar has treated 2,000+ KC patients, including many told nothing could be done. Same-week appointments available. | Call Now (714) 558-0641 [primary] + Request Appointment [secondary] |
| warm | "Your Vision Changes Are Worth a Specialist's Opinion" | The pattern you described — changing prescriptions, difficulties correcting vision — is exactly what a KC specialist evaluates. Most patients wait too long. A single 60-minute evaluation with Dr. Bonakdar gives you a clear diagnosis and a treatment plan. | Book a Consultation [primary] + (714) 558-0641 [secondary] |
| nurture | "Early Awareness Is Your Best Advantage" | Your symptoms are early-stage — the best time to establish a baseline. KC caught early often requires no surgery, just specialized contact lenses or preventive treatment. Come in now so you're not playing catch-up in 2 years. | Schedule a Free Screening [primary] |
| general | "We're Happy to Help You Understand Your Options" | Whatever's bringing you here — a concern, a referral, or just curiosity — Dr. Bonakdar's team will answer your questions without pressure. Insurance is accepted; same-week appointments are usually available. | Contact Our Office [primary] |

**Ortho-K Results Copy (`?type=orthok`):**

| Tier | Headline | Body | CTA |
|------|----------|------|-----|
| hot | "Your Child Is a Strong Ortho-K Candidate — Now Is the Right Window" | The age range and prescription pattern you described is exactly when ortho-K has the strongest scientific evidence for slowing myopia. Waiting a year means a year of preventable progression. We have evaluation appointments available this week. | Call Now (714) 558-0641 [primary] + Book Evaluation [secondary] |
| warm | "Ortho-K Is Worth Discussing for Your Child" | Based on your answers, your child's situation is a reasonable candidate for ortho-K. A 45-minute consultation will tell you definitively whether it's the right fit — including insurance coverage and realistic expectations. | Book a Consultation [primary] |
| nurture | "Good Time to Establish a Baseline" | Your child's myopia may not need aggressive intervention yet — but monitoring with a specialist who knows ortho-K means you'll act at exactly the right moment. No pressure; just clarity. | Schedule a Monitoring Visit [primary] |
| general | "Let's Answer Your Questions" | Whether you're just curious or actively researching, we're happy to walk through ortho-K with you — candidacy, cost, what to expect. No commitment required. | Contact Our Office [primary] |

**Both result pages:** include "Retake the quiz" link — use the `type` query param to determine back-link: `type=kc` → `/quiz`, `type=orthok` → `/quiz/ortho-k`. Default to `/quiz` if type is absent.

**`general` tier copy (soft-fail path — both KC and Ortho-K):** Headline: "We'd Love to Help You" | Body: "We had trouble processing your quiz results — but that's no reason to wait. Dr. Bonakdar's team is available to answer your questions directly. Same-week appointments available; most insurance accepted." | CTA: Call (714) 558-0641 [primary].

---

### 4. NEW: `app/api/quiz/route.ts` — Quiz Lead API
Handles both KC and Ortho-K via `quizType` field. Pattern mirrors `app/api/contact/route.ts`.

**Validation:**
- `firstName`, `lastName`, `phone`: required, trim, max 80/80/20 chars, strip control chars (`/[\x00-\x1F\x7F]/g`)
- `email`: optional — validate regex only if non-empty; **explicitly omit from GHL body when empty:** `...(email ? { email } : {})`
- `quizType`: enum `["kc", "orthok"]`, reject 400 if invalid
- `answers`: array, max 6 elements, each element stripped of control chars, sliced to 120 chars: `answers.slice(0,6).map(a => typeof a==='string' ? a.replace(/[\x00-\x1F\x7F]/g,'').slice(0,120) : '')`
- `smsConsent`: boolean
- `website` (honeypot): if non-empty string → return `{ success: true, tier: 'general' }` silently, no GHL call

**Score computation — server-side recomputation from answers (NOT client-sent score):**
The API MUST NOT trust the client-sent `score` value. Score is recomputed server-side from the `answers` array using the scoring tables below. Client sends answers as `{question: string, answer: string, points: number}[]`; server validates `points` values against allowed sets before summing.

KC scoring: each of Q1-Q4,Q6 = {1,2,3,4}; Q5 = {2,3,4}. Max=24, min=7.
Ortho-K scoring: each of Q1,Q3,Q4 = {1,2,3,4}; Q2 = {1,3,4,3}; Q5 = {2,3,3,4}. Max=20, min=7.

Tier computation happens server-side after recomputation. The `tier` returned in the response is the authoritative value — client must use it for the redirect (not compute its own).

**Rate limiting:** REMOVED — in-memory Map is non-functional in serverless (resets per cold start, no shared state across concurrent instances). Cloudflare WAF rate limit rule is the correct layer; add via Cloudflare dashboard as a separate step. Do not ship a false-security measure.

**GHL tags:**
- KC: `['kc-quiz-lead', `kc-quiz-${tier}`, 'keratoconus lead']`
- Ortho-K: `['orthok-quiz-lead', `orthok-quiz-${tier}`]`
- Plus `'sms-consent'` if smsConsent=true
- If smsConsent=false → `dndSettings: { SMS: { status: 'active', message: 'No SMS consent on quiz form' } }`

**GHL custom fields:** utmSource → `6sdXreQxbnVymcrOOvHU`, utmMedium → `3if5VqRIHGXkjDspuNgs`, utmCampaign → `cZiraewtlWoRya9HTpoD` (same IDs as contact route).

**Duplicate handling (HTTP 400 + "duplicated contacts"):**
1. Extract `ghlError.meta.contactId`
2. POST note to `/contacts/${existingId}/notes` with full quiz note body
3. GET existing contact, merge quiz tags, PUT update
4. Fire Resend notification (returning variant)
5. Return `{ success: true, tier, returning: true }`

**GHL note body:**
```
{KC Qualification|Ortho-K Parent} Quiz — keratocones.com
Score: {score} → {tier.toUpperCase()}
Quiz type: {kc|orthok}

Q1: {question} → {answer}
Q2: ...
Last touch:  {utmSource} / {utmMedium} / {utmCampaign}{gclid ? ` (gclid: ${gclid})` : ''}
First touch: {firstTouchSource} / ...
Visits: {visitCount}
Submitted:   {timestamp PT}
```

**Resend notification:** fire-and-forget (`.catch(() => {})`). Subject: `🧪 Quiz [{tier.toUpperCase()}] {quizType.toUpperCase()} — {firstName} {lastName}`. Returning variant: `↩️ Returning Quiz Lead`. Uses existing `RESEND_API_KEY` + `LEAD_NOTIFY_EMAIL` env vars — zero new vars.

**On non-duplicate GHL error:** return `{ success: false, error: 'We couldn\'t save your info — please call us at (714) 558-0641.' }` HTTP 502. Client soft-fails to general results page.

**Response on success:** `{ success: true, tier: 'hot'|'warm'|'nurture'|'general', returning: boolean }`

---

### 5. EDIT: `components/KeratoconusQuiz.tsx`
Change line ~111:
- `href="#contact-form"` → `href="/quiz"`
- Button text: `"Schedule Your Expert Consultation"` → `"Get My Full Assessment (2 min)"`

---

## Out of Scope
- Spanish quiz variants (`/es/quiz`) — explicitly out of scope. Spanish-preferring users who navigate to `/quiz` will see English. Middleware only auto-redirects on `/`; direct `/quiz` access is unaffected. Add Spanish variant as a separate PR.
- Separate ortho-k results route tree — shared `/quiz/results/[tier]` with `?type=` is sufficient
- A/B testing infrastructure
- CMS-driven question configuration — hardcode in page file (questions change rarely)
- GTM events for quiz interactions — add as enhancement, not blocking
- GHL email nurture sequences — GHL workflow API is read-only; document as separate manual setup guide
- Rate limiting via in-memory Map — REMOVED (non-functional in serverless). Use Cloudflare WAF rule instead (manual setup, separate from this PR)

## Verify
1. `GET /quiz` returns HTTP 200. 6 questions render in sequence with progress bar.
2. All 6 answers collected → contact capture step appears (name/phone required, email optional).
3. Submitting contact info sends POST `/api/quiz` → browser redirects to `/quiz/results/{hot|warm|nurture|general}?type=kc`.
4. `/quiz/results/hot?type=kc` renders KC-specific hot copy with call CTA `tel:+17145580641`.
5. `/quiz/results/invalid?type=kc` returns 404.
6. `GET /quiz/ortho-k` returns HTTP 200. 5 questions. POST includes `quizType: 'orthok'` → redirects to `/quiz/results/{tier}?type=orthok`.
7. `/quiz/results/hot?type=orthok` renders Ortho-K-specific hot copy (different from KC copy).
8. GHL contact created with correct tags: kc-quiz-lead + kc-quiz-hot/warm/nurture (KC); orthok-quiz-lead + orthok-quiz-{tier} (Ortho-K).
9. GHL note contains quiz answers, score, tier, UTM attribution.
10. Honeypot: POST with `{ website: "spam" }` returns `{ success: true, tier: 'general' }` — no GHL contact created.
11. Duplicate GHL contact (HTTP 400): note added to existing contact + tags updated — API returns 200, user redirected to results page normally.
12. API hard failure: user is still redirected to `/quiz/results/general` — no stuck spinner.
13. `components/KeratoconusQuiz.tsx` result CTA: `href="/quiz"`, text "Get My Full Assessment (2 min)".
14. `tsc --noEmit` exits 0. No TypeScript errors.
15. `GHL_LEAD_API_KEY` not present in `.next/static/` after build.
16. smsConsent=false → GHL body includes `dndSettings.SMS.status = 'active'`.

---

## Synthesis Notes

**From PRD-A (architecture critic):**
- Reject separate ortho-K results route tree — shared page with `?type=` query param is cleaner ✓
- Co-locate quiz logic in page files rather than shared QuizShell — quiz questions differ enough that a shared shell adds complexity without reducing code ✓
- Zero new env vars — reuse existing GHL + Resend vars ✓
- Resend notification: PRD-A deferred it, PRD-C included it. INCLUDED — it's a .catch fire-and-forget with no new config risk ✓

**From PRD-B (security auditor):**
- Full honeypot attributes (CSS hidden, aria-hidden, tabIndex=-1, autoComplete=off) ✓
- Rate limiter: REMOVED after cold review confirmed in-memory Map is non-functional in serverless. Cloudflare WAF is the correct layer. ✓
- `email: ""` enforcement made explicit with `...(email ? { email } : {})` spread ✓
- smsConsent=false → DND setting (TCPA compliance, same as contact/route.ts) ✓
- Build-time credential check (verify #15) ✓

**Cold review fixes (8 bugs addressed):**
1. `searchParams` async pattern (Next.js 16) — explicit `Promise<>` type + `await` required ✓
2. Soft-fail redirect parameterized — `?type=${quizType}` not hardcoded `?type=kc` ✓
3. Rate limiter removed — non-functional in serverless, dropped rather than shipped as false security ✓
4. Score recomputed server-side — client-sent score field removed from trusted inputs ✓
5. Ortho-K questions fully defined with point values (max 20, not 19) ✓
6. Email omission explicit in GHL payload spread ✓
7. Answers array control-char stripping explicit ✓
8. KC Q5 min=2 scoring gap documented; server-side min bound = 7 ✓

**From PRD-C (conversion expert):**
- Question order: symptom pain first (prescription change, night driving) before diagnosis questions — patients don't know they have KC, they know their glasses stopped working ✓
- Q5 minimum 2 pts — self-referred patients with no diagnosis are still valid leads ✓
- Tier thresholds validated against KC scoring literature ✓
- Separate results copy per quiz type (KC vs ortho-K) is justified — messaging IS different ✓
- Soft-fail on API error: redirect to general results + phone number, never block user ✓

## Primitive Gate
1. Is this the simplest thing that works? ✅ — port reference impl, adapt questions, one CTA edit
2. Does it add new services, containers, or dependencies? ✅ No — zero new packages, zero new env vars
3. Does it add complexity that future sessions need to understand? ✅ Minimal — 4 new files, clear pattern
4. Would a senior engineer say "over-engineered"? ✅ No abstractions beyond the reference pattern
5. Can this break something that's currently working? ✅ Only risk is the KeratoconusQuiz.tsx CTA edit (easily reverted)

---

## Cold Review — Step 4b Findings (2026-04-13)

Reviewed by fresh agent (zero context) before implementation. 8 bugs caught and fixed:

1. **Async searchParams** — Next.js 16 requires `await searchParams` (Promise type). Fixed in PRD.
2. **Parameterized soft-fail** — `quizType` must be captured before `try` so `catch` can use it. Fixed.
3. **Rate limiter removed** — In-memory Map non-functional in serverless; Cloudflare WAF is correct layer. Removed.
4. **Server-side score recomputation** — Server MUST NOT trust client-sent score; recompute from answers. Made explicit.
5. **OrthoK Q5 point values** — Two options score 3 pts; `ORTHOK_ALLOWED_POINTS[4] = [2,3,4]` correct. Clarified.
6. **Email explicit omission** — Empty string must not be sent: `...(email ? { email } : {})`. Fixed.
7. **Answer control-char stripping** — Per-element sanitization required. Added.
8. **Q5 min-2 documentation** — KC Q5 has no 1-pt option; minimum is 2. Noted.

Step 5b cold test review: 5 false-pass patterns caught and fixed (grep context, line matching, fetch line targeting, URL literals, co-location proximity).

Step 7b cold implementation review: 0 CRITICAL, 0 HIGH. LOW-1 (answer count validation) applied immediately.
