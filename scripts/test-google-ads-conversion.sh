#!/bin/bash
# Test: Google Ads Conversion Tracking — Final PRD
# Verifies: code cleanup (AC1-AC9) + GTM trigger fix (AC10-AC11)

set -euo pipefail
FAILURES=0
PROJECT="/Users/alex/Documents/Projects/keratocones_website/keratocones"

echo "=== Google Ads Conversion Tracking Tests ==="
echo ""

# ─── AC1: No direct gtag.js script ───
echo "--- AC1: No direct gtag.js in any component ---"
GTAG_FILES=$(grep -rl "googletagmanager.com/gtag/js?id=AW-" "$PROJECT/components/" "$PROJECT/app/" 2>/dev/null || true)
if [ -n "$GTAG_FILES" ]; then
  echo "❌ FAIL: Direct gtag.js found in: $GTAG_FILES"
  FAILURES=$((FAILURES + 1))
else
  echo "✅ PASS: No direct gtag.js in components or app"
fi

# ─── AC2: trackFormSubmit pushes ghl_form_submit to dataLayer ───
echo "--- AC2: trackFormSubmit pushes ghl_form_submit to dataLayer ---"
if [ -f "$PROJECT/lib/tracking.ts" ] && grep -q "ghl_form_submit" "$PROJECT/lib/tracking.ts"; then
  echo "✅ PASS: lib/tracking.ts pushes ghl_form_submit"
else
  echo "❌ FAIL: lib/tracking.ts missing or doesn't push ghl_form_submit"
  FAILURES=$((FAILURES + 1))
fi

# ─── AC2b: ContactForm uses trackFormSubmit from tracking ───
echo "--- AC2b: ContactForm imports from lib/tracking ---"
if grep -q "from '@/lib/tracking'" "$PROJECT/components/ContactForm.tsx" && grep -q "trackFormSubmit" "$PROJECT/components/ContactForm.tsx"; then
  echo "✅ PASS: ContactForm.tsx imports trackFormSubmit from lib/tracking"
else
  echo "❌ FAIL: ContactForm.tsx has wrong import or missing trackFormSubmit"
  FAILURES=$((FAILURES + 1))
fi

# ─── AC3: Build passes ───
echo "--- AC3: Next.js build succeeds ---"
cd "$PROJECT"
if npx next build > /tmp/nextbuild.log 2>&1; then
  echo "✅ PASS: Build succeeded"
else
  echo "❌ FAIL: Build failed"
  tail -20 /tmp/nextbuild.log
  FAILURES=$((FAILURES + 1))
fi

# ─── AC4: No window.gtag calls ───
echo "--- AC4: No window.gtag calls in codebase ---"
GTAG_CALLS=$(grep -rl "window\.gtag\b" "$PROJECT/lib/" "$PROJECT/components/" 2>/dev/null || true)
if [ -n "$GTAG_CALLS" ]; then
  echo "❌ FAIL: window.gtag calls found in: $GTAG_CALLS"
  FAILURES=$((FAILURES + 1))
else
  echo "✅ PASS: No window.gtag calls"
fi

# ─── AC5: Facebook pixel intact ───
echo "--- AC5: Facebook pixel (395306154557054) intact ---"
if grep -q "395306154557054" "$PROJECT/components/TrackingScripts.tsx"; then
  echo "✅ PASS: Facebook pixel present"
else
  echo "❌ FAIL: Facebook pixel missing"
  FAILURES=$((FAILURES + 1))
fi

# ─── AC6: GTM still in layout ───
echo "--- AC6: GTM-NS6QTKN in layout ---"
if grep -q "GTM-NS6QTKN" "$PROJECT/app/layout.tsx"; then
  echo "✅ PASS: GTM present in layout"
else
  echo "❌ FAIL: GTM missing from layout"
  FAILURES=$((FAILURES + 1))
fi

# ─── AC7: No stale @/lib/gtag imports ───
echo "--- AC7: No stale @/lib/gtag imports ---"
STALE=$(grep -rl "from '@/lib/gtag'" "$PROJECT/components/" "$PROJECT/app/" 2>/dev/null || true)
if [ -n "$STALE" ]; then
  echo "❌ FAIL: Stale @/lib/gtag imports in: $STALE"
  FAILURES=$((FAILURES + 1))
else
  echo "✅ PASS: No stale imports"
fi

# ─── AC8: types/gtag.d.ts deleted ───
echo "--- AC8: types/gtag.d.ts deleted ---"
if [ -f "$PROJECT/types/gtag.d.ts" ]; then
  echo "❌ FAIL: types/gtag.d.ts still exists"
  FAILURES=$((FAILURES + 1))
else
  echo "✅ PASS: types/gtag.d.ts removed"
fi

# ─── AC9: Footer is server component ───
echo "--- AC9: Footer.tsx is server component ---"
if head -3 "$PROJECT/components/Footer.tsx" | grep -q "'use client'"; then
  echo "❌ FAIL: Footer.tsx still has 'use client'"
  FAILURES=$((FAILURES + 1))
else
  echo "✅ PASS: Footer.tsx is server component"
fi

# ─── AC9b: No trackClickToCall in phone link components ───
echo "--- AC9b: No trackClickToCall in phone link components ---"
CLICK_TRACK=$(grep -rl "trackClickToCall" "$PROJECT/components/Footer.tsx" "$PROJECT/components/Hero.tsx" "$PROJECT/components/StickyCTA.tsx" "$PROJECT/components/ContactPageContent.tsx" 2>/dev/null || true)
if [ -n "$CLICK_TRACK" ]; then
  echo "❌ FAIL: trackClickToCall still in: $CLICK_TRACK"
  FAILURES=$((FAILURES + 1))
else
  echo "✅ PASS: No trackClickToCall in phone link components"
fi

# ─── AC9c: lib/gtag.ts deleted ───
echo "--- AC9c: lib/gtag.ts deleted ---"
if [ -f "$PROJECT/lib/gtag.ts" ]; then
  echo "❌ FAIL: lib/gtag.ts still exists"
  FAILURES=$((FAILURES + 1))
else
  echo "✅ PASS: lib/gtag.ts removed"
fi

# ─── AC10: GTM tag 24 fires only on trigger 17 (API check) ───
echo "--- AC10: GTM tag 24 fires only on trigger 17 ---"
cd /Users/alex/Documents/Projects/Marketing_F2F
TAG24_TRIGGERS=$(node -e "
require('dotenv').config();
(async () => {
  const resp = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });
  const { access_token } = await resp.json();
  const live = await (await fetch('https://tagmanager.googleapis.com/tagmanager/v2/accounts/6076437670/containers/104514292/versions:live', {
    headers: { Authorization: 'Bearer ' + access_token },
  })).json();
  const tag24 = (live.tag || []).find(t => t.tagId === '24');
  if (tag24) {
    console.log(JSON.stringify(tag24.firingTriggerId));
  } else {
    console.log('TAG_NOT_FOUND');
  }
})();
" 2>/dev/null)
cd "$PROJECT"

if [ "$TAG24_TRIGGERS" = '["17"]' ]; then
  echo "✅ PASS: Tag 24 fires only on trigger 17"
elif echo "$TAG24_TRIGGERS" | grep -q '"17"'; then
  echo "❌ FAIL: Tag 24 has extra triggers: $TAG24_TRIGGERS (expected [\"17\"] only)"
  FAILURES=$((FAILURES + 1))
else
  echo "❌ FAIL: Tag 24 triggers unexpected: $TAG24_TRIGGERS"
  FAILURES=$((FAILURES + 1))
fi

# ─── AC11: GTM live version >= 18 ───
echo "--- AC11: GTM live version >= 18 ---"
cd /Users/alex/Documents/Projects/Marketing_F2F
LIVE_VERSION=$(node -e "
require('dotenv').config();
(async () => {
  const resp = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      refresh_token: process.env.GOOGLE_ADS_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });
  const { access_token } = await resp.json();
  const live = await (await fetch('https://tagmanager.googleapis.com/tagmanager/v2/accounts/6076437670/containers/104514292/versions:live', {
    headers: { Authorization: 'Bearer ' + access_token },
  })).json();
  console.log(live.containerVersionId || '0');
})();
" 2>/dev/null)
cd "$PROJECT"

if [ "$LIVE_VERSION" -ge 18 ] 2>/dev/null; then
  echo "✅ PASS: GTM live version is v$LIVE_VERSION (>= 18)"
else
  echo "❌ FAIL: GTM live version is v$LIVE_VERSION (expected >= 18)"
  FAILURES=$((FAILURES + 1))
fi

# ─── Summary ───
echo ""
echo "================================"
if [ "$FAILURES" -eq 0 ]; then
  echo "ALL TESTS PASSED ✅"
else
  echo "FAILURES: $FAILURES ❌"
fi
echo "================================"
exit "$FAILURES"
