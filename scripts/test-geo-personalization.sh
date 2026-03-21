#!/bin/bash
# Test: Geo-Personalization via Vercel Edge Middleware
set -euo pipefail
FAILURES=0
PROJECT="/Users/alex/Documents/Projects/keratocones_website/keratocones"

echo "=== Geo-Personalization Tests ==="

# AC1: Build passes
echo "--- AC1: Build passes ---"
cd "$PROJECT"
if npx next build > /tmp/nextbuild-geo.log 2>&1; then
  echo "✅ PASS: Build succeeded"
else
  echo "❌ FAIL: Build failed"; tail -20 /tmp/nextbuild-geo.log; FAILURES=$((FAILURES + 1))
fi

# AC2: Middleware sets geo headers
echo "--- AC2: Middleware has geo header logic ---"
if grep -q "x-visitor-city" "$PROJECT/middleware.ts" && grep -q "x-vercel-ip-city" "$PROJECT/middleware.ts"; then
  echo "✅ PASS: Middleware reads Vercel IP headers and sets visitor headers"
else
  echo "❌ FAIL: Middleware missing geo header logic"; FAILURES=$((FAILURES + 1))
fi

# AC3: Middleware sets UTM headers
echo "--- AC3: Middleware forwards UTM parameters ---"
if grep -q "x-utm-source" "$PROJECT/middleware.ts" && grep -q "x-utm-campaign" "$PROJECT/middleware.ts" && grep -q "x-keyword" "$PROJECT/middleware.ts"; then
  echo "✅ PASS: UTM headers forwarded"
else
  echo "❌ FAIL: UTM headers missing from middleware"; FAILURES=$((FAILURES + 1))
fi

# AC4: Vary header set
echo "--- AC4: Vary: x-visitor-city header ---"
if grep -q "Vary.*x-visitor-city" "$PROJECT/middleware.ts"; then
  echo "✅ PASS: Vary header set for cache safety"
else
  echo "❌ FAIL: Vary header missing"; FAILURES=$((FAILURES + 1))
fi

# AC5: Homepage reads geo and personalizes
echo "--- AC5: Homepage uses geo personalization ---"
if grep -q "getPersonalization" "$PROJECT/app/page.tsx" && grep -q "x-visitor-city" "$PROJECT/app/page.tsx" && grep -q "geo.headline" "$PROJECT/app/page.tsx"; then
  echo "✅ PASS: Homepage reads geo headers and passes to Hero"
else
  echo "❌ FAIL: Homepage missing geo integration"; FAILURES=$((FAILURES + 1))
fi

# AC6: Default headline exists in personalization config
echo "--- AC6: Default fallback headline ---"
if grep -q "Orange County.*Keratoconus Specialist" "$PROJECT/lib/geo-personalization.ts"; then
  echo "✅ PASS: Default headline exists for empty city"
else
  echo "❌ FAIL: Default headline missing"; FAILURES=$((FAILURES + 1))
fi

# AC7: Phone number never changes
echo "--- AC7: Phone number unchanged in personalization ---"
if grep -c "714.*558.*0641" "$PROJECT/lib/geo-personalization.ts" > /dev/null && ! grep -q "phoneNumber.*\${" "$PROJECT/lib/geo-personalization.ts" 2>/dev/null; then
  echo "✅ PASS: Phone number is static, not dynamically changed"
else
  echo "❌ FAIL: Phone number may be dynamic in geo config"; FAILURES=$((FAILURES + 1))
fi

# AC8: Schema unchanged (no geo in schema files)
echo "--- AC8: Schema not personalized ---"
SCHEMA_GEO=$(grep -rl "x-visitor-city\|getPersonalization" "$PROJECT/components/BusinessSchema.tsx" "$PROJECT/components/BreadcrumbSchema.tsx" 2>/dev/null || true)
if [ -z "$SCHEMA_GEO" ]; then
  echo "✅ PASS: Schema components have no geo logic"
else
  echo "❌ FAIL: Schema files reference geo: $SCHEMA_GEO"; FAILURES=$((FAILURES + 1))
fi

# AC9: Spanish personalization exists
echo "--- AC9: Spanish geo personalization ---"
if [ -f "$PROJECT/lib/geo-personalization-es.ts" ] && grep -q "getPersonalizationEs" "$PROJECT/lib/geo-personalization-es.ts"; then
  echo "✅ PASS: Spanish personalization file exists"
else
  echo "❌ FAIL: Spanish personalization missing"; FAILURES=$((FAILURES + 1))
fi

# AC10: LP pages read geo
echo "--- AC10: Landing pages use geo ---"
LP_GEO=0
for page in "app/lp/keratoconus-scleral/page.tsx" "app/lp/cornea-specialist/page.tsx" "app/contact/page.tsx"; do
  if grep -q "getPersonalization\|x-visitor-city" "$PROJECT/$page" 2>/dev/null; then
    LP_GEO=$((LP_GEO + 1))
  fi
done
if [ "$LP_GEO" -eq 3 ]; then
  echo "✅ PASS: All 3 additional pages use geo ($LP_GEO/3)"
else
  echo "❌ FAIL: Only $LP_GEO/3 pages use geo"; FAILURES=$((FAILURES + 1))
fi

# AC11: Locale detection still works
echo "--- AC11: Locale detection preserved ---"
if grep -q "x-locale" "$PROJECT/middleware.ts" && grep -q "startsWith('/es')" "$PROJECT/middleware.ts"; then
  echo "✅ PASS: Locale detection intact in middleware"
else
  echo "❌ FAIL: Locale detection may be broken"; FAILURES=$((FAILURES + 1))
fi

# AC12: GeoBadge component exists
echo "--- AC12: GeoBadge component ---"
if [ -f "$PROJECT/components/GeoBadge.tsx" ] && grep -q "MapPin" "$PROJECT/components/GeoBadge.tsx"; then
  echo "✅ PASS: GeoBadge component exists"
else
  echo "❌ FAIL: GeoBadge missing"; FAILURES=$((FAILURES + 1))
fi

# AC13: City arrays cover all regions
echo "--- AC13: All regions have city arrays ---"
REGIONS=0
for region in "OC_CITIES" "LA_CITIES" "IE_CITIES" "SD_CITIES"; do
  grep -q "$region" "$PROJECT/lib/geo-personalization.ts" && REGIONS=$((REGIONS + 1))
done
if [ "$REGIONS" -eq 4 ]; then
  echo "✅ PASS: All 4 regions defined (OC, LA, IE, SD)"
else
  echo "❌ FAIL: Only $REGIONS/4 regions defined"; FAILURES=$((FAILURES + 1))
fi

echo ""
echo "================================"
if [ "$FAILURES" -eq 0 ]; then
  echo "ALL TESTS PASSED ✅"
else
  echo "FAILURES: $FAILURES ❌"
fi
echo "================================"
exit "$FAILURES"
