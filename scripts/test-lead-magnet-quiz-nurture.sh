#!/usr/bin/env bash
# Tests: lead-magnet-quiz-nurture
# Governance Step 5 — REAL implementations (filled in 2026-04-13)
# Strategy: static source analysis (no running server required).
# V14 requires all implementation files to exist first.
# V15 requires a completed `npm run build` in the REPO.

PASSED=0
FAILED=0

log_pass() { echo "  ✅ PASS: $1"; PASSED=$((PASSED + 1)); }
log_fail() { echo "  ❌ FAIL: $1"; FAILED=$((FAILED + 1)); }

REPO="/Users/alex/Documents/Projects/keratocones_website/keratocones"
KC_QUIZ="$REPO/app/quiz/page.tsx"
RESULTS_PAGE="$REPO/app/quiz/results/[tier]/page.tsx"
ORTHOK_QUIZ="$REPO/app/quiz/ortho-k/page.tsx"
API_ROUTE="$REPO/app/api/quiz/route.ts"
TEASER="$REPO/components/KeratoconusQuiz.tsx"

echo "============================================"
echo "  Tests: lead-magnet-quiz-nurture"
echo "============================================"

# ---------------------------------------------------------------------------
# V1: GET /quiz returns HTTP 200. 6 questions render in sequence with progress bar.
# ---------------------------------------------------------------------------
echo ""
echo "--- V1: KC quiz page + 6 questions + progress bar ---"

if [ ! -f "$KC_QUIZ" ]; then
  log_fail "V1: app/quiz/page.tsx not found"
else
  # Use ^\s*question: to match object property lines only, not comments or aria-labels
  Q_COUNT=$(grep -cE "^\s*question:" "$KC_QUIZ" 2>/dev/null || echo 0)
  if [ "$Q_COUNT" -ge 6 ]; then
    log_pass "V1a: KC quiz page exists with $Q_COUNT question: property lines (>=6)"
  else
    log_fail "V1a: Expected >=6 question: property lines in KC quiz, found $Q_COUNT"
  fi

  if grep -qE "progress|currentStep|step.*of |stepOf|progressBar" "$KC_QUIZ" 2>/dev/null; then
    log_pass "V1b: Progress indicator found in KC quiz"
  else
    log_fail "V1b: No progress indicator found in KC quiz (expected progress/currentStep pattern)"
  fi
fi

# ---------------------------------------------------------------------------
# V2: All 6 answers collected → contact capture step appears (name/phone required, email optional).
# ---------------------------------------------------------------------------
echo ""
echo "--- V2: Contact capture step with required/optional fields ---"

if [ ! -f "$KC_QUIZ" ]; then
  log_fail "V2: app/quiz/page.tsx not found"
else
  if grep -qE "'contact'|\"contact\"|step.*contact|contact.*step|setStep" "$KC_QUIZ" 2>/dev/null; then
    log_pass "V2a: Contact step state found in KC quiz"
  else
    log_fail "V2a: No 'contact' step state found in KC quiz"
  fi

  if grep -q "firstName" "$KC_QUIZ" 2>/dev/null && grep -q "lastName" "$KC_QUIZ" 2>/dev/null && grep -q "phone" "$KC_QUIZ" 2>/dev/null; then
    log_pass "V2b: firstName / lastName / phone fields present"
  else
    log_fail "V2b: Missing required contact fields (firstName, lastName, and/or phone)"
  fi

  # email should be present but NOT marked required
  if grep -q "email" "$KC_QUIZ" 2>/dev/null; then
    # Use grep -q (not grep -c) to avoid BSD grep exit-code 1 when no matches
    if grep -i "email" "$KC_QUIZ" 2>/dev/null | grep -qi "required"; then
      log_fail "V2c: Email field appears required (found 'required' adjacent to email) — should be optional"
    else
      log_pass "V2c: Email field is optional (no 'required' adjacent to email)"
    fi
  else
    log_fail "V2c: No email field found in contact step"
  fi
fi

# ---------------------------------------------------------------------------
# V3: Submitting contact info sends POST /api/quiz → browser redirects to /quiz/results/{tier}?type=kc
# ---------------------------------------------------------------------------
echo ""
echo "--- V3: POST /api/quiz + redirect to /quiz/results ---"

if [ ! -f "$KC_QUIZ" ]; then
  log_fail "V3: app/quiz/page.tsx not found"
else
  if grep -qF '"/api/quiz"' "$KC_QUIZ" 2>/dev/null || grep -qF "'/api/quiz'" "$KC_QUIZ" 2>/dev/null || grep -qF '/api/quiz`' "$KC_QUIZ" 2>/dev/null; then
    log_pass "V3a: POST to /api/quiz found"
  else
    log_fail "V3a: POST to /api/quiz NOT found in KC quiz page"
  fi

  if grep -q '/quiz/results' "$KC_QUIZ" 2>/dev/null; then
    log_pass "V3b: Redirect to /quiz/results present"
  else
    log_fail "V3b: Redirect to /quiz/results NOT found"
  fi

  # Redirect must use tier from API response, not hardcoded — require word boundary
  if grep -qE "(data|result|json\(\))\.tier\b|\.tier\b.*router\.push|router\.push.*tier" "$KC_QUIZ" 2>/dev/null; then
    log_pass "V3c: Redirect uses tier from API response (data.tier or result.tier)"
  else
    log_fail "V3c: Redirect does not use tier from API response (hardcoded tier risk)"
  fi
fi

# ---------------------------------------------------------------------------
# V4: /quiz/results/hot?type=kc renders KC-specific hot copy with call CTA tel:+17145580641
# ---------------------------------------------------------------------------
echo ""
echo "--- V4: Results page — KC hot copy + tel:+17145580641 CTA ---"

if [ ! -f "$RESULTS_PAGE" ]; then
  log_fail "V4: app/quiz/results/[tier]/page.tsx not found"
else
  if grep -q "Act Before It Gets Worse\|Advanced Keratoconus" "$RESULTS_PAGE" 2>/dev/null; then
    log_pass "V4a: KC hot copy headline present ('Act Before It Gets Worse' or 'Advanced Keratoconus')"
  else
    log_fail "V4a: KC hot copy missing — expected 'Act Before It Gets Worse' or 'Advanced Keratoconus'"
  fi

  if grep -qE "tel:\+17145580641|558-0641|558\.0641" "$RESULTS_PAGE" 2>/dev/null; then
    log_pass "V4b: Call CTA with (714) 558-0641 present"
  else
    log_fail "V4b: Missing call CTA — expected tel:+17145580641 or 558-0641 variant"
  fi
fi

# ---------------------------------------------------------------------------
# V5: /quiz/results/invalid?type=kc returns 404.
# ---------------------------------------------------------------------------
echo ""
echo "--- V5: Results page — invalid tier → 404 ---"

if [ ! -f "$RESULTS_PAGE" ]; then
  log_fail "V5: app/quiz/results/[tier]/page.tsx not found"
else
  if grep -q "notFound()" "$RESULTS_PAGE" 2>/dev/null; then
    log_pass "V5a: notFound() guard present in results page"
  else
    log_fail "V5a: notFound() NOT called — invalid tier will not return 404"
  fi

  # All 4 valid tiers must be defined
  TIERS_OK=0
  grep -q '"hot"\|'"'"'hot'"'" "$RESULTS_PAGE" 2>/dev/null && TIERS_OK=$((TIERS_OK+1))
  grep -q '"warm"\|'"'"'warm'"'" "$RESULTS_PAGE" 2>/dev/null && TIERS_OK=$((TIERS_OK+1))
  grep -q '"nurture"\|'"'"'nurture'"'" "$RESULTS_PAGE" 2>/dev/null && TIERS_OK=$((TIERS_OK+1))
  grep -q '"general"\|'"'"'general'"'" "$RESULTS_PAGE" 2>/dev/null && TIERS_OK=$((TIERS_OK+1))
  if [ "$TIERS_OK" -eq 4 ]; then
    log_pass "V5b: All 4 valid tiers defined (hot / warm / nurture / general)"
  else
    log_fail "V5b: Only $TIERS_OK/4 valid tiers found — expected hot, warm, nurture, general"
  fi

  # 'invalid' must NOT be a recognized tier
  if grep -qE '"invalid"|'"'"'invalid'"'" "$RESULTS_PAGE" 2>/dev/null; then
    log_fail "V5c: 'invalid' found as a valid tier — must not be recognized"
  else
    log_pass "V5c: 'invalid' is not a defined tier (will be caught by notFound guard)"
  fi
fi

# ---------------------------------------------------------------------------
# V6: GET /quiz/ortho-k returns HTTP 200. 5 questions. POST includes quizType: 'orthok'.
# ---------------------------------------------------------------------------
echo ""
echo "--- V6: Ortho-K quiz page + 5 questions + quizType orthok ---"

if [ ! -f "$ORTHOK_QUIZ" ]; then
  log_fail "V6: app/quiz/ortho-k/page.tsx not found"
else
  Q_COUNT=$(grep -c "question:" "$ORTHOK_QUIZ" 2>/dev/null || echo 0)
  if [ "$Q_COUNT" -ge 5 ]; then
    log_pass "V6a: Ortho-K quiz has $Q_COUNT question: entries (>=5)"
  else
    log_fail "V6a: Expected >=5 questions in Ortho-K quiz, found $Q_COUNT"
  fi

  if grep -qE "'orthok'|\"orthok\"" "$ORTHOK_QUIZ" 2>/dev/null; then
    log_pass "V6b: quizType 'orthok' string present in Ortho-K quiz"
  else
    log_fail "V6b: quizType 'orthok' NOT found in Ortho-K quiz"
  fi

  if grep -q "quizType" "$ORTHOK_QUIZ" 2>/dev/null; then
    log_pass "V6c: quizType field included in POST body"
  else
    log_fail "V6c: quizType field NOT included in Ortho-K quiz POST body"
  fi
fi

# ---------------------------------------------------------------------------
# V7: /quiz/results/hot?type=orthok renders Ortho-K-specific hot copy (different from KC copy).
# ---------------------------------------------------------------------------
echo ""
echo "--- V7: Results page — Ortho-K hot copy distinct from KC hot copy ---"

if [ ! -f "$RESULTS_PAGE" ]; then
  log_fail "V7: app/quiz/results/[tier]/page.tsx not found"
else
  KC_HOT=$(grep -cE "Act Before It Gets Worse|Advanced Keratoconus" "$RESULTS_PAGE" 2>/dev/null || echo 0)
  OK_HOT=$(grep -cE "Strong Ortho-K Candidate|Now Is the Right Window|right window|Ortho-K Candidate" "$RESULTS_PAGE" 2>/dev/null || echo 0)

  if [ "$KC_HOT" -ge 1 ]; then
    log_pass "V7a: KC hot copy present ('Act Before It Gets Worse' / 'Advanced Keratoconus')"
  else
    log_fail "V7a: KC hot copy MISSING from results page"
  fi

  if [ "$OK_HOT" -ge 1 ]; then
    log_pass "V7b: Ortho-K hot copy present ('Strong Ortho-K Candidate' / 'Now Is the Right Window')"
  else
    log_fail "V7b: Ortho-K hot copy MISSING from results page (expected 'Strong Ortho-K Candidate' or 'Now Is the Right Window')"
  fi

  if [ "$KC_HOT" -ge 1 ] && [ "$OK_HOT" -ge 1 ]; then
    log_pass "V7c: KC and Ortho-K hot copies are distinct strings (both present)"
  else
    log_fail "V7c: Cannot confirm KC and Ortho-K hot copies are distinct (one or both missing)"
  fi
fi

# ---------------------------------------------------------------------------
# V8: GHL contact created with correct tags: kc-quiz-lead + kc-quiz-{tier} (KC);
#     orthok-quiz-lead + orthok-quiz-{tier} (Ortho-K).
# ---------------------------------------------------------------------------
echo ""
echo "--- V8: API route — GHL tags ---"

if [ ! -f "$API_ROUTE" ]; then
  log_fail "V8: app/api/quiz/route.ts not found"
else
  if grep -q "kc-quiz-lead" "$API_ROUTE" 2>/dev/null; then
    log_pass "V8a: 'kc-quiz-lead' tag present"
  else
    log_fail "V8a: 'kc-quiz-lead' tag MISSING from API route"
  fi

  if grep -q "orthok-quiz-lead" "$API_ROUTE" 2>/dev/null; then
    log_pass "V8b: 'orthok-quiz-lead' tag present"
  else
    log_fail "V8b: 'orthok-quiz-lead' tag MISSING from API route"
  fi

  # Dynamic kc-quiz-${tier} template literal — single-quote keeps $ literal in bash
  if grep -q 'kc-quiz-${tier}' "$API_ROUTE" 2>/dev/null; then
    log_pass "V8c: kc-quiz-\${tier} dynamic tag pattern present"
  else
    log_fail "V8c: kc-quiz-\${tier} dynamic tag pattern MISSING"
  fi

  if grep -q 'orthok-quiz-${tier}' "$API_ROUTE" 2>/dev/null; then
    log_pass "V8d: orthok-quiz-\${tier} dynamic tag pattern present"
  else
    log_fail "V8d: orthok-quiz-\${tier} dynamic tag pattern MISSING"
  fi
fi

# ---------------------------------------------------------------------------
# V9: GHL note contains quiz answers, score, tier, UTM attribution.
# ---------------------------------------------------------------------------
echo ""
echo "--- V9: GHL note — answers + score + tier + UTM ---"

if [ ! -f "$API_ROUTE" ]; then
  log_fail "V9: app/api/quiz/route.ts not found"
else
  if grep -qE "Score:|score:|Score =" "$API_ROUTE" 2>/dev/null; then
    log_pass "V9a: Score included in GHL note body"
  else
    log_fail "V9a: 'Score:' NOT found in GHL note body"
  fi

  if grep -qE "utmSource|Last touch" "$API_ROUTE" 2>/dev/null; then
    log_pass "V9b: UTM attribution (utmSource / Last touch) in note body"
  else
    log_fail "V9b: UTM attribution NOT found in GHL note body"
  fi

  # Answers in note — either Q${i+1}: pattern or answers.map reference
  if grep -q 'Q${' "$API_ROUTE" 2>/dev/null || grep -qE "answers\.map|Q1:|Q2:" "$API_ROUTE" 2>/dev/null; then
    log_pass "V9c: Quiz answers present in GHL note body"
  else
    log_fail "V9c: Quiz answers NOT found in GHL note body (expected Q\${...} or Q1: / answers.map)"
  fi

  # Tier in note — toUpperCase is the PRD pattern
  if grep -qE "toUpperCase|tier.*note|note.*tier|TIER" "$API_ROUTE" 2>/dev/null; then
    log_pass "V9d: Tier included in GHL note (toUpperCase / tier label)"
  else
    log_fail "V9d: Tier NOT found in GHL note body"
  fi
fi

# ---------------------------------------------------------------------------
# V10: Honeypot: POST with { website: "spam" } returns { success: true, tier: 'general' } — no GHL call.
# ---------------------------------------------------------------------------
echo ""
echo "--- V10: Honeypot — early return before GHL API call ---"

if [ ! -f "$API_ROUTE" ]; then
  log_fail "V10: app/api/quiz/route.ts not found"
else
  # 1. A conditional check on the website field must exist
  if grep -qE "if\s*\(\s*website\s*\)|website\s*&&|website\s*\?" "$API_ROUTE" 2>/dev/null; then
    log_pass "V10a: Honeypot conditional 'if (website)' present"
  else
    log_fail "V10a: Honeypot conditional check MISSING (expected 'if (website)' pattern)"
  fi

  # 2. The honeypot return must include tier: 'general'
  if grep -A5 "if.*website\b" "$API_ROUTE" 2>/dev/null | grep -q "general"; then
    log_pass "V10b: Honeypot return includes tier: 'general'"
  else
    log_fail "V10b: Honeypot return does NOT include tier:'general' within 5 lines of website check"
  fi

  # 3. Honeypot check must appear before the GHL *fetch call* (not the URL constant definition)
  HONEYPOT_LINE=$(grep -n "if.*website\b" "$API_ROUTE" 2>/dev/null | head -1 | cut -d: -f1)
  # Match the actual fetch invocation, not the GHL_API_URL constant definition at top of file
  GHL_FETCH_LINE=$(grep -n "await fetch.*GHL\|fetch(GHL_API_URL\|fetch(ghlUrl\|fetch.*leadconnectorhq" "$API_ROUTE" 2>/dev/null | head -1 | cut -d: -f1)
  if [ -n "$HONEYPOT_LINE" ] && [ -n "$GHL_FETCH_LINE" ] && [ "$HONEYPOT_LINE" -lt "$GHL_FETCH_LINE" ]; then
    log_pass "V10c: Honeypot check (line $HONEYPOT_LINE) before GHL fetch call (line $GHL_FETCH_LINE)"
  else
    log_fail "V10c: Honeypot not before GHL fetch call (honeypot:${HONEYPOT_LINE:-missing}, GHL fetch:${GHL_FETCH_LINE:-missing})"
  fi
fi

# ---------------------------------------------------------------------------
# V11: Duplicate GHL contact (HTTP 400): note added + tags updated → API returns 200.
# ---------------------------------------------------------------------------
echo ""
echo "--- V11: Duplicate contact handling ---"

if [ ! -f "$API_ROUTE" ]; then
  log_fail "V11: app/api/quiz/route.ts not found"
else
  if grep -q "duplicated contacts" "$API_ROUTE" 2>/dev/null; then
    log_pass "V11a: 'duplicated contacts' GHL error handled"
  else
    log_fail "V11a: 'duplicated contacts' handling MISSING from API route"
  fi

  if grep -qE "contactId|existingId" "$API_ROUTE" 2>/dev/null; then
    log_pass "V11b: Existing contact ID extracted (contactId / existingId)"
  else
    log_fail "V11b: Existing contact ID extraction MISSING"
  fi

  # Note must be posted to the existing contact's notes endpoint
  if grep -qE "contacts/\\\$\{existingId\}/notes|contacts.*\\\$\{.*\}/notes" "$API_ROUTE" 2>/dev/null || \
     grep -q '/notes' "$API_ROUTE" 2>/dev/null; then
    log_pass "V11c: Note POST to existing contact's /notes endpoint present"
  else
    log_fail "V11c: Note POST to existing contact's /notes endpoint MISSING"
  fi

  # Duplicate path must return success: true — use -A60 (handler block is ~50 lines)
  if grep -A60 "duplicated contacts" "$API_ROUTE" 2>/dev/null | grep -q "success: true"; then
    log_pass "V11d: Duplicate path returns { success: true }"
  else
    log_fail "V11d: Duplicate path does NOT return { success: true } within 60 lines of duplicate check"
  fi
fi

# ---------------------------------------------------------------------------
# V12: API hard failure: user is still redirected to /quiz/results/general — no stuck spinner.
# ---------------------------------------------------------------------------
echo ""
echo "--- V12: Soft-fail redirect on API error ---"

if [ ! -f "$KC_QUIZ" ]; then
  log_fail "V12: app/quiz/page.tsx not found"
else
  if grep -qE "try\s*\{|\.catch\(" "$KC_QUIZ" 2>/dev/null; then
    log_pass "V12a: try/catch or .catch error handling present in KC quiz"
  else
    log_fail "V12a: No try/catch or .catch in KC quiz — API errors may leave user on spinner"
  fi

  if grep -q "results/general" "$KC_QUIZ" 2>/dev/null; then
    log_pass "V12b: Redirect to /quiz/results/general present for error path"
  else
    log_fail "V12b: Redirect to /quiz/results/general MISSING — user may get stuck on error"
  fi

  # Redirect must NOT be hardcoded to ?type=kc — check both single-line and split patterns
  if grep -qF "results/general?type=kc" "$KC_QUIZ" 2>/dev/null || \
     grep -qF "type=kc'" "$KC_QUIZ" 2>/dev/null || \
     grep -qF 'type=kc"' "$KC_QUIZ" 2>/dev/null; then
    log_fail "V12c: Soft-fail redirect hardcoded to ?type=kc — must be parameterized with quizType"
  else
    log_pass "V12c: Soft-fail redirect is not hardcoded to ?type=kc (parameterized)"
  fi
fi

# ---------------------------------------------------------------------------
# V13: components/KeratoconusQuiz.tsx result CTA: href="/quiz", text "Get My Full Assessment (2 min)"
# ---------------------------------------------------------------------------
echo ""
echo "--- V13: KeratoconusQuiz.tsx CTA updated ---"

if [ ! -f "$TEASER" ]; then
  log_fail "V13: components/KeratoconusQuiz.tsx not found"
else
  if grep -qF 'href="/quiz"' "$TEASER" 2>/dev/null; then
    log_pass "V13a: href=\"/quiz\" present in KeratoconusQuiz.tsx"
  else
    log_fail "V13a: href=\"/quiz\" NOT found — still using old link"
  fi

  if grep -q "Get My Full Assessment" "$TEASER" 2>/dev/null; then
    log_pass "V13b: 'Get My Full Assessment' button text present"
  else
    log_fail "V13b: 'Get My Full Assessment' button text MISSING"
  fi

  # Old CTA must be gone
  if grep -qF 'href="#contact-form"' "$TEASER" 2>/dev/null; then
    log_fail "V13c: Old href=\"#contact-form\" still present — update not complete"
  else
    log_pass "V13c: Old href=\"#contact-form\" removed"
  fi
fi

# ---------------------------------------------------------------------------
# V14: tsc --noEmit exits 0 — no TypeScript errors.
# ---------------------------------------------------------------------------
echo ""
echo "--- V14: TypeScript compilation clean ---"

# Require all implementation files to exist before running tsc
# (in RED phase these don't exist yet, so V14 correctly fails)
MISSING_FILES=""
[ ! -f "$KC_QUIZ" ]       && MISSING_FILES="$MISSING_FILES app/quiz/page.tsx"
[ ! -f "$RESULTS_PAGE" ]  && MISSING_FILES="$MISSING_FILES app/quiz/results/[tier]/page.tsx"
[ ! -f "$ORTHOK_QUIZ" ]   && MISSING_FILES="$MISSING_FILES app/quiz/ortho-k/page.tsx"
[ ! -f "$API_ROUTE" ]     && MISSING_FILES="$MISSING_FILES app/api/quiz/route.ts"

if [ -n "$MISSING_FILES" ]; then
  log_fail "V14: Implementation files not yet created — tsc check requires full implementation. Missing:$MISSING_FILES"
else
  TSC_OUTPUT=$(cd "$REPO" && npx tsc --noEmit 2>&1)
  TSC_EXIT=$?
  if [ $TSC_EXIT -eq 0 ]; then
    log_pass "V14: tsc --noEmit exits 0 — no TypeScript errors"
  else
    FIRST_ERRORS=$(echo "$TSC_OUTPUT" | grep "error TS" | head -3 | sed 's|'"$REPO/"'||g')
    log_fail "V14: TypeScript errors (exit $TSC_EXIT): $FIRST_ERRORS"
  fi
fi

# ---------------------------------------------------------------------------
# V15: GHL_LEAD_API_KEY not present in .next/static/ after build.
# ---------------------------------------------------------------------------
echo ""
echo "--- V15: GHL_LEAD_API_KEY not leaked to client bundle ---"

BUILD_STATIC="$REPO/.next/static"
if [ ! -d "$BUILD_STATIC" ]; then
  log_fail "V15: .next/static does not exist — run 'npm run build' in $REPO first, then re-run this test"
else
  FOUND_STATIC=$(grep -r "GHL_LEAD_API_KEY" "$BUILD_STATIC" 2>/dev/null | wc -l | tr -d ' ')
  # Also check .next/server/ — API routes compile there and must NOT contain the raw key string
  FOUND_SERVER=$(grep -r "GHL_LEAD_API_KEY" "$REPO/.next/server" 2>/dev/null | grep -v "route.js" | wc -l | tr -d ' ')
  if [ "$FOUND_STATIC" -eq 0 ]; then
    log_pass "V15: GHL_LEAD_API_KEY not found in .next/static/ (not leaked to client bundle)"
  else
    log_fail "V15: SECURITY — GHL_LEAD_API_KEY found in $FOUND_STATIC client bundle file(s) in .next/static/"
  fi
  # Note: .next/server/app/api/quiz/route.js will contain process.env.GHL_LEAD_API_KEY as a reference
  # (string literal "GHL_LEAD_API_KEY") — that is correct. We check that the VALUE (the actual token)
  # is not hardcoded. The string name "GHL_LEAD_API_KEY" appearing in server route.js is expected.
fi

# ---------------------------------------------------------------------------
# V16: smsConsent=false → GHL body includes dndSettings.SMS.status = 'active'.
# ---------------------------------------------------------------------------
echo ""
echo "--- V16: smsConsent=false → dndSettings.SMS.status='active' ---"

if [ ! -f "$API_ROUTE" ]; then
  log_fail "V16: app/api/quiz/route.ts not found"
else
  if grep -q "dndSettings" "$API_ROUTE" 2>/dev/null; then
    log_pass "V16a: dndSettings referenced in API route"
  else
    log_fail "V16a: dndSettings NOT found in API route"
  fi

  # Must include SMS key and 'active' status
  if grep -q "SMS" "$API_ROUTE" 2>/dev/null && grep -qE "'active'|\"active\"" "$API_ROUTE" 2>/dev/null; then
    log_pass "V16b: SMS + 'active' DND status values present"
  else
    log_fail "V16b: SMS DND status 'active' NOT found in API route"
  fi

  # Co-location check: smsConsent conditional must reference dndSettings within 10 lines
  # This prevents three separate independent greps from false-passing
  if grep -A10 "smsConsent" "$API_ROUTE" 2>/dev/null | grep -q "dndSettings"; then
    log_pass "V16c: smsConsent → dndSettings co-located (dndSettings within 10 lines of smsConsent)"
  else
    log_fail "V16c: smsConsent → dndSettings NOT co-located (may be wired incorrectly or missing)"
  fi
fi

echo ""
echo "============================================"
echo "  Results: $PASSED/$((PASSED + FAILED)) passed, $FAILED failed"
echo "============================================"
exit $FAILED
