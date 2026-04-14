# Cold Review Findings — lead-magnet-quiz-nurture

## Step 4b — PRD Architecture Review (2026-04-13)

8 bugs caught and fixed in the synthesized PRD before implementation:

1. **Async `searchParams`** — Next.js 16 requires `await searchParams` (it's a Promise). PRD updated to show correct async pattern.
2. **Parameterized soft-fail** — `quizType` must be captured as `const quizType = 'kc'` before the `try` block so the `catch` can use it in `router.push()`. Fixed in PRD.
3. **Rate limiter removed** — In-memory Map is non-functional in serverless (resets per cold start, no shared state across concurrent instances). PRD updated to remove it and note Cloudflare WAF rule as correct layer.
4. **Server-side score recomputation** — PRD made explicit: server MUST NOT trust client-sent score. Score recomputed from `answers` array using validated point sets per question.
5. **OrthoK Q5 question definitions** — Q5 has two options with 3 points (must review, not mentioned ortho-k specifically = 3; and mentioned but no solution = 3). ORTHOK_ALLOWED_POINTS correctly uses `[2,3,4]` (unique values; both 3-pt answers map to 3).
6. **Email explicit omission** — Empty email must not be sent as empty string. Pattern: `...(email ? { email } : {})` required.
7. **Answer control-char stripping** — Each answer element requires `.replace(/[\x00-\x1F\x7F]/g, '')`. PRD updated.
8. **Q5 min-2 note** — KC Q5 has min 2 pts (no option with 1 pt); `KC_ALLOWED_POINTS[4] = [2,3,4]`. OrthoK Q5 same. PRD clarified.

## Step 5b — Test Cold Review (2026-04-13)

5 false-pass patterns caught and fixed in the test script before running:

1. **V1a `question:` grep** — Changed to `grep -cE "^\s*question:"` to require line-start whitespace (object property format, not comment matches).
2. **V3c tier redirect check** — Added word boundary `\b` and alternative patterns to avoid partial matches at end of line.
3. **V10c GHL fetch line detection** — Changed from matching `GHL_API_URL` constant (line 1, before honeypot check) to matching actual `fetch(` invocation line.
4. **V12c URL literal split** — Added `grep -qF "type=kc'"` and `grep -qF 'type=kc"'` as additional literal checks for URL string.
5. **V16c co-location check** — Changed from three independent greps to `grep -A10 "smsConsent" | grep -q "dndSettings"` requiring both within 10 lines.

## Step 7b — Implementation Review (2026-04-14)

0 CRITICAL, 0 HIGH findings. 4 LOW findings:

- **LOW-1 (FIXED)** — Answer count not validated per quizType. Added: `const expectedCount = quizType === 'kc' ? 6 : 5; if (rawAnswers.length !== expectedCount) throw new Error(...)`. Closes score-manipulation path.
- **LOW-2** — Returning lead email subject uses different prefix (`↩️`) from PRD's format (`🧪 Quiz [TIER]`). Acceptable extension, not a bug.
- **LOW-3** — Unicode BiDi characters not stripped (only ASCII control chars). Low practical risk; GHL handles UTF-8.
- **LOW-4** — `general` and `nurture` tiers share slate accent color. Product judgment — `general` CTA may benefit from higher-contrast color; not a spec violation.

## Reviewer Checklist Passed

- SQL correctness: N/A (no SQL in this feature)
- Function signatures: All match actual imports (`captureAndGetTracking`, `getStoredTracking` from `@/lib/utm-tracking`)
- Performance: No unbounded loops; `computeScore` is O(n) where n≤6
- Race conditions: None (stateless serverless API handler)
- Security: No credentials exposed to client; honeypot before GHL; parameterized inputs
- File descriptor leaks: None (all fetch calls are one-shot)
- API endpoints: `/api/quiz`, `/contacts/`, `/contacts/{id}/notes` all exist and are verified
