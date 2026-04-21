#!/bin/bash
# Test script for CRO improvements — keratocones.com homepage
# Tests acceptance criteria from synthesized PRD + cold review fixes

PROJECT="$(cd "$(dirname "$0")/.." && pwd)"
FAILURES=0

pass() { echo "✅ PASS: $1"; }
fail() { echo "❌ FAIL: $1"; FAILURES=$((FAILURES + 1)); }

echo "=== CRO Improvements Test Suite ==="
echo ""

# --- AC1: Star rating badge in Hero ---
echo "--- AC1: Star rating badge in Hero (mobile + desktop) ---"
if grep -q "StarBadge" "$PROJECT/components/Hero.tsx" && \
   grep -q "Google Reviews" "$PROJECT/components/Hero.tsx" && \
   grep -q '#reviews' "$PROJECT/components/Hero.tsx"; then
  pass "StarBadge exists with Google Reviews linking to #reviews"
else
  fail "StarBadge missing or wrong content in Hero.tsx"
fi

# --- AC2: TestimonialQuotes component renders 3 quotes ---
echo "--- AC2: TestimonialQuotes with 3 patient quotes ---"
if [ -f "$PROJECT/components/TestimonialQuotes.tsx" ] && \
   grep -q "Sarah M" "$PROJECT/components/TestimonialQuotes.tsx" && \
   grep -q "David L" "$PROJECT/components/TestimonialQuotes.tsx" && \
   grep -q "Brian H" "$PROJECT/components/TestimonialQuotes.tsx"; then
  pass "TestimonialQuotes has 3 curated quotes (Sarah M, David L, Brian H)"
else
  fail "TestimonialQuotes missing or incomplete"
fi

# --- AC3: WaitTimeComparison component exists ---
echo "--- AC3: WaitTimeComparison component ---"
if [ -f "$PROJECT/components/WaitTimeComparison.tsx" ] && \
   grep -q "University Hospitals" "$PROJECT/components/WaitTimeComparison.tsx" && \
   grep -q "Same-Week" "$PROJECT/components/WaitTimeComparison.tsx" && \
   grep -q "#contact-form" "$PROJECT/components/WaitTimeComparison.tsx"; then
  pass "WaitTimeComparison has university vs practice comparison with CTA"
else
  fail "WaitTimeComparison missing or incomplete"
fi

# --- AC4: MidPageCTA component exists and used twice ---
echo "--- AC4: MidPageCTA reusable component used 2x in page ---"
if [ -f "$PROJECT/components/MidPageCTA.tsx" ]; then
  COUNT=$(grep -c "MidPageCTA" "$PROJECT/app/page.tsx" | head -1)
  if [ "$COUNT" -ge 3 ]; then  # 1 import + 2 usages = 3+
    pass "MidPageCTA exists and used 2+ times in page.tsx"
  else
    fail "MidPageCTA exists but not used twice in page.tsx (found $COUNT refs)"
  fi
else
  fail "MidPageCTA.tsx does not exist"
fi

# --- AC5: Quiz moved to top half of page ---
echo "--- AC5: Quiz positioned before KeratoconusContent ---"
QUIZ_LINE=$(grep -n "KeratoconusQuiz" "$PROJECT/app/page.tsx" | head -1 | cut -d: -f1)
CONTENT_LINE=$(grep -n "KeratoconusContent" "$PROJECT/app/page.tsx" | head -1 | cut -d: -f1)
if [ -n "$QUIZ_LINE" ] && [ -n "$CONTENT_LINE" ] && [ "$QUIZ_LINE" -lt "$CONTENT_LINE" ]; then
  pass "KeratoconusQuiz (line $QUIZ_LINE) appears before KeratoconusContent (line $CONTENT_LINE)"
else
  fail "Quiz not moved up — Quiz line $QUIZ_LINE, Content line $CONTENT_LINE"
fi

# --- AC6: FAQ is accordion (uses useState for openIndex) ---
echo "--- AC6: FAQ converted to accordion ---"
if grep -q "openIndex" "$PROJECT/components/FAQSection.tsx" && \
   grep -q "ChevronDown" "$PROJECT/components/FAQSection.tsx" && \
   grep -q "AccordionPanel" "$PROJECT/components/FAQSection.tsx"; then
  pass "FAQSection is an accordion with ChevronDown and openIndex state"
else
  fail "FAQSection not converted to accordion"
fi

# --- AC7: FAQ schema matches visible FAQ content ---
echo "--- AC7: FAQ schema matches accordion questions ---"
SCHEMA_Q1=$(grep "Can keratoconus be cured" "$PROJECT/components/FAQSchema.tsx" | wc -l | tr -d ' ')
SCHEMA_Q2=$(grep "scleral lenses different" "$PROJECT/components/FAQSchema.tsx" | wc -l | tr -d ' ')
SCHEMA_Q6=$(grep "fitting process take" "$PROJECT/components/FAQSchema.tsx" | wc -l | tr -d ' ')
if [ "$SCHEMA_Q1" -ge 1 ] && [ "$SCHEMA_Q2" -ge 1 ] && [ "$SCHEMA_Q6" -ge 1 ]; then
  pass "HOMEPAGE_FAQS schema matches visible accordion questions"
else
  fail "FAQ schema does not match visible accordion content"
fi

# --- AC8: MidPageCTA tel: link has +1 country code ---
echo "--- AC8: MidPageCTA phone link has +1 country code ---"
if grep -q 'tel:+1' "$PROJECT/components/MidPageCTA.tsx" || grep -q "tel:\+1" "$PROJECT/components/MidPageCTA.tsx"; then
  pass "MidPageCTA phone link includes +1 country code"
else
  fail "MidPageCTA phone link missing +1 country code"
fi

# --- AC9: Mobile h1 is accessible (no aria-hidden) ---
echo "--- AC9: Mobile headline is accessible ---"
if grep -q 'aria-hidden="true"' "$PROJECT/components/Hero.tsx"; then
  fail "Mobile headline still has aria-hidden='true'"
else
  if grep -q "<h1" "$PROJECT/components/Hero.tsx"; then
    pass "Mobile headline is accessible (h1, no aria-hidden)"
  else
    fail "No h1 found in Hero.tsx"
  fi
fi

# --- AC10: No contactId leaked in API response ---
echo "--- AC10: API does not leak contactId to client ---"
if grep -q "contactId:" "$PROJECT/app/api/contact/route.ts"; then
  fail "API response still contains contactId"
else
  pass "API response does not leak contactId"
fi

# --- AC11: All CTAs link to #contact-form ---
echo "--- AC11: CTA links point to #contact-form ---"
CTA_LINKS=$(grep -rl "#contact-form" "$PROJECT/components/MidPageCTA.tsx" "$PROJECT/components/WaitTimeComparison.tsx" "$PROJECT/components/Hero.tsx" "$PROJECT/app/page.tsx" 2>/dev/null | wc -l | tr -d ' ')
if [ "$CTA_LINKS" -ge 3 ]; then
  pass "$CTA_LINKS components contain #contact-form links (MidPageCTA, WaitTimeComparison, Hero/page)"
else
  fail "Not enough #contact-form links across CTA components ($CTA_LINKS found)"
fi

# --- AC12: GHL tag is 'keratoconus lead' ---
echo "--- AC12: GHL contact tagged as 'keratoconus lead' ---"
if grep -q "keratoconus lead" "$PROJECT/app/api/contact/route.ts"; then
  pass "Contact form uses 'keratoconus lead' tag"
else
  fail "Contact form not using 'keratoconus lead' tag"
fi

# --- AC13: HIPAA consent checkbox present ---
echo "--- AC13: HIPAA consent checkbox in ContactForm ---"
if grep -q "hipaaNotice\|HIPAA" "$PROJECT/components/ContactForm.tsx" && \
   grep -q "consentLabel\|consent" "$PROJECT/components/ContactForm.tsx"; then
  pass "ContactForm has HIPAA notice and consent checkbox"
else
  fail "ContactForm missing HIPAA consent"
fi

# --- AC14: No remaining 500+ (should all be 2,000+) ---
echo "--- AC14: No remaining '500+' references (all should be 2,000+) ---"
REMAINING=$(grep -rn "500+" --include="*.ts" --include="*.tsx" --include="*.json" "$PROJECT" | grep -v node_modules | grep -v .next | grep -v "\\$500\|500)" | grep -v "2,000+" | grep -v "Google Reviews" | grep -v "reviews.json" | wc -l | tr -d ' ')
if [ "$REMAINING" -eq 0 ]; then
  pass "Zero remaining 500+ references"
else
  fail "$REMAINING files still have 500+ instead of 2,000+"
fi

# --- AC15: Build passes ---
echo "--- AC15: Build passes with zero errors ---"
BUILD_OUTPUT=$(cd "$PROJECT" && npx next build 2>&1)
if echo "$BUILD_OUTPUT" | grep -q "Compiled successfully"; then
  pass "Build compiles successfully"
else
  fail "Build failed"
fi

echo ""
echo "=== RESULTS ==="
echo "Failures: $FAILURES"
exit $FAILURES
