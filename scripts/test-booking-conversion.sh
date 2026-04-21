#!/bin/bash
# Test Script: Booking Conversion Overhaul
# Tests all acceptance criteria from the synthesized PRD
set -euo pipefail

PROJECT="/Users/alex/Documents/Projects/keratocones_website/keratocones"
PASS=0
FAIL=0

pass() { echo "✅ PASS: $1"; PASS=$((PASS + 1)); }
fail() { echo "❌ FAIL: $1"; FAIL=$((FAIL + 1)); }

echo "=== Booking Conversion Test Suite ==="
echo ""

# 1. BookingSection component exists and has calendar iframe
if [ -f "$PROJECT/components/BookingSection.tsx" ]; then
    if grep -q "api.leadconnectorhq.com/widget/booking/VwkJ0jM0shArIftj7dpu" "$PROJECT/components/BookingSection.tsx"; then
        pass "BookingSection has GHL calendar iframe URL"
    else
        fail "BookingSection missing GHL calendar iframe URL"
    fi
else
    fail "BookingSection.tsx does not exist"
fi

# 2. BookingSection has tabbed UI with proper ARIA
if [ -f "$PROJECT/components/BookingSection.tsx" ]; then
    if grep -q 'role="tablist"' "$PROJECT/components/BookingSection.tsx"; then
        pass "BookingSection has ARIA tablist role"
    else
        fail "BookingSection missing ARIA tablist role"
    fi
    if grep -q 'role="tabpanel"' "$PROJECT/components/BookingSection.tsx"; then
        pass "BookingSection has ARIA tabpanel role"
    else
        fail "BookingSection missing ARIA tabpanel role"
    fi
fi

# 3. BookingSection preserves both anchor IDs
if [ -f "$PROJECT/components/BookingSection.tsx" ]; then
    if grep -q 'id="contact-form"' "$PROJECT/components/BookingSection.tsx"; then
        pass "BookingSection preserves id=contact-form anchor"
    else
        fail "BookingSection missing id=contact-form anchor"
    fi
fi

# 4. iframe has min-height to prevent CLS
if [ -f "$PROJECT/components/BookingSection.tsx" ]; then
    if grep -q 'min-h-\[6' "$PROJECT/components/BookingSection.tsx" || grep -q 'minHeight' "$PROJECT/components/BookingSection.tsx"; then
        pass "Calendar iframe has min-height set (CLS prevention)"
    else
        fail "Calendar iframe missing min-height (will cause CLS)"
    fi
fi

# 5. iframe has loading skeleton
if [ -f "$PROJECT/components/BookingSection.tsx" ]; then
    if grep -q 'animate-pulse\|skeleton\|loading' "$PROJECT/components/BookingSection.tsx"; then
        pass "BookingSection has loading state/skeleton"
    else
        fail "BookingSection missing loading skeleton"
    fi
fi

# 6. iframe has fallback for errors
if [ -f "$PROJECT/components/BookingSection.tsx" ]; then
    if grep -q 'timeout\|fallback\|unavailable\|error' "$PROJECT/components/BookingSection.tsx"; then
        pass "BookingSection has iframe fallback/error handling"
    else
        fail "BookingSection missing iframe fallback handling"
    fi
fi

# 7. StickyCTA updated (not new file created)
if [ -f "$PROJECT/components/StickyCTA.tsx" ]; then
    if grep -q 'IntersectionObserver\|useEffect\|isVisible\|showBar' "$PROJECT/components/StickyCTA.tsx"; then
        pass "StickyCTA has scroll-based show/hide (IntersectionObserver)"
    else
        fail "StickyCTA missing IntersectionObserver show/hide behavior"
    fi
else
    fail "StickyCTA.tsx does not exist"
fi

# 8. StickyCTA links to #lead-form
if [ -f "$PROJECT/components/StickyCTA.tsx" ]; then
    if grep -q '#lead-form' "$PROJECT/components/StickyCTA.tsx"; then
        pass "StickyCTA links to #lead-form"
    else
        fail "StickyCTA still links to old #contact-form"
    fi
fi

# 9. Quiz result links to #lead-form
if grep -q 'href="#lead-form"' "$PROJECT/components/KeratoconusQuiz.tsx"; then
    pass "Quiz result links to #lead-form"
else
    fail "Quiz result still links to #contact-form"
fi

# 10. Quiz has updated CTA text
if grep -q 'Same-Week\|same-week\|Book Your' "$PROJECT/components/KeratoconusQuiz.tsx"; then
    pass "Quiz has updated urgency CTA text"
else
    fail "Quiz still has generic CTA text"
fi

# 11. MidPageCTA default links to #lead-form
if grep -q '"#lead-form"' "$PROJECT/components/MidPageCTA.tsx"; then
    pass "MidPageCTA default ctaLink is #lead-form"
else
    fail "MidPageCTA still defaults to #contact-form"
fi

# 12. page.tsx uses BookingSection
if grep -q 'BookingSection' "$PROJECT/app/page.tsx"; then
    pass "page.tsx imports BookingSection"
else
    fail "page.tsx still uses LeadForm instead of BookingSection"
fi

# 13. page.tsx has id="lead-form" on section
if grep -q 'id="lead-form"' "$PROJECT/app/page.tsx"; then
    pass "page.tsx has id=lead-form anchor on section"
else
    fail "page.tsx missing id=lead-form anchor"
fi

# 14. No duplicate StickyMobileCTA file
if [ -f "$PROJECT/components/StickyMobileCTA.tsx" ]; then
    fail "StickyMobileCTA.tsx exists — should modify existing StickyCTA instead"
else
    pass "No duplicate StickyMobileCTA file (correctly uses existing StickyCTA)"
fi

# 15. TypeScript build check
echo ""
echo "--- Running TypeScript check ---"
cd "$PROJECT"
if npx tsc --noEmit 2>/dev/null; then
    pass "TypeScript compilation passes"
else
    fail "TypeScript compilation has errors"
fi

# Summary
echo ""
echo "=== Results ==="
echo "Passed: $PASS"
echo "Failed: $FAIL"
echo ""
exit $FAIL
