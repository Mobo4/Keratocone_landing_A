#!/bin/bash
# Test script for LPO Round 2 — invisible optimizations
# 4 changes only (5 and 6 dropped per cold review)

PROJECT="$(cd "$(dirname "$0")/.." && pwd)"
FAILURES=0

pass() { echo "✅ PASS: $1"; }
fail() { echo "❌ FAIL: $1"; FAILURES=$((FAILURES + 1)); }

echo "=== LPO Round 2 Test Suite ==="
echo ""

# --- VC1: FadeIn has opacity:1 default for AdsBot ---
echo "--- VC1: FadeIn renders opacity:1 in initial HTML ---"
if grep -q "opacity-100" "$PROJECT/components/FadeIn.tsx"; then
  pass "FadeIn has Tailwind opacity-100 class for non-JS crawlers"
else
  fail "FadeIn missing opacity-100 class"
fi

# --- VC2: "near" keyword in geo-personalization ---
echo "--- VC2: 'near' keyword in geo-personalization templates ---"
NEAR_COUNT=$(grep -ci "near" "$PROJECT/lib/geo-personalization.ts")
if [ "$NEAR_COUNT" -ge 3 ]; then
  pass "'near' keyword found $NEAR_COUNT times across geo templates"
else
  fail "'near' keyword insufficient in geo templates ($NEAR_COUNT found, need 3+)"
fi

# --- VC3: YouTube iframe lazy loads ---
echo "--- VC3: YouTube iframe loads lazily ---"
if grep -q 'loading="lazy"' "$PROJECT/components/Testimonials.tsx"; then
  pass "YouTube iframe has loading='lazy'"
else
  fail "YouTube iframe missing loading='lazy'"
fi

# --- VC4: 2,000+ number contextualized ---
echo "--- VC4: Default subhead contextualizes 2,000+ ---"
if grep -q "Most clinics" "$PROJECT/lib/geo-personalization.ts"; then
  pass "Default subhead has 'Most clinics' context for 2,000+"
else
  fail "Default subhead missing context for 2,000+"
fi

# --- VC5: Build passes ---
echo "--- VC5: Build passes ---"
BUILD_OUTPUT=$(cd "$PROJECT" && npx next build 2>&1)
if echo "$BUILD_OUTPUT" | grep -q "Compiled successfully"; then
  pass "Build compiles successfully"
else
  fail "Build failed"
fi

# --- VC6: No section reorder (page.tsx unchanged) ---
echo "--- VC6: Page section order unchanged ---"
TESTIMONIAL_LINE=$(grep -n "<TestimonialQuotes" "$PROJECT/app/page.tsx" | head -1 | cut -d: -f1)
QUIZ_LINE=$(grep -n "<KeratoconusQuiz" "$PROJECT/app/page.tsx" | head -1 | cut -d: -f1)
LEADFORM_LINE=$(grep -n "<LeadForm" "$PROJECT/app/page.tsx" | head -1 | cut -d: -f1)
if [ -n "$TESTIMONIAL_LINE" ] && [ -n "$QUIZ_LINE" ] && [ -n "$LEADFORM_LINE" ]; then
  if [ "$TESTIMONIAL_LINE" -lt "$QUIZ_LINE" ] && [ "$QUIZ_LINE" -lt "$LEADFORM_LINE" ]; then
    pass "Page section order preserved"
  else
    fail "Page section order changed"
  fi
else
  fail "Missing sections in page.tsx"
fi

echo ""
echo "=== RESULTS ==="
echo "Failures: $FAILURES"
exit $FAILURES
