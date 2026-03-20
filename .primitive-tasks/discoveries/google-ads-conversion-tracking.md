# Discovery: Google Ads Conversion Tracking — keratocones.com

## PRIMITIVE NOTATION
```
TASK: Fix form submission conversion tracking + revert duplicate gtag.js pixel
INPUTS: GTM-NS6QTKN already has all conversion tags + triggers LIVE (v17, published 2026-03-19)
CONSTRAINTS: No GTM changes needed. No Google Ads changes needed. Code-only fix.
OUTPUT: Form submissions fire Google Ads conversion ($500 value). No duplicate pixels.
```

## DIAGNOSIS (API-verified 2026-03-19)

### Google Ads Conversion Actions (EXIST, ACTIVE):
| Name | ID | Label | Value | Type |
|------|-----|-------|-------|------|
| Click to call | 7411878463 | mveqCL-Uoc4bEN3Suf0D | $1 | Website (type 3) |
| Thanks Page after appt made | 6972860357 | A_Z0CMXP9fwZEN3Suf0D | $500 | Website (type 37) |

### GTM-NS6QTKN Live Version (v17, 9 tags, 5 triggers — ALL PUBLISHED):

**Conversion Tags (already LIVE):**
- Tag 23: "Google Ads - Click to Call Conversion" (awct) → conversionId: 1068394845, label: mveqCL-Uoc4bEN3Suf0D, value: $1 → fires on trigger 20
- Tag 24: "Google Ads - Form Submit / Thanks Page Conversion" (awct) → conversionId: 1068394845, label: A_Z0CMXP9fwZEN3Suf0D, value: $500 → fires on triggers 10, 21, 17

**Triggers (already LIVE):**
- Trigger 20: "Click - Phone Links (tel)" — linkClick, auto-fires on Click URL containing "tel:" — waitForTags: true, checkValidation: true, timeout: 2000ms
- Trigger 10: "Form Submission - All Forms" — formSubmission (native browser form submit)
- Trigger 17: "CE - ghl_form_submit" — customEvent listening for dataLayer event `ghl_form_submit`
- Trigger 21: "PV - Thank You / Confirmation Page" — pageview matching regex `thank|confirm|success|appointment-booked`

### STATUS: What works, what doesn't

**CLICK-TO-CALL: ✅ ALREADY WORKING**
- GTM trigger 20 is a linkClick trigger that auto-catches clicks on `<a href="tel:...">` links
- No onClick handler in code needed — GTM handles it natively via DOM click listener
- The onClick handlers we added earlier are redundant (but harmless if rewritten to dataLayer)

**FORM SUBMIT: ❌ BROKEN — 0 of 3 triggers fire**
- Trigger 10 (formSubmission): React `ContactForm.tsx` calls `e.preventDefault()` then `fetch('/api/contact')`. The native form submit event is intercepted — GTM's formSubmission listener either doesn't fire or fires before the AJAX completes (can't distinguish success from failure).
- Trigger 17 (ghl_form_submit): Fires on `window.dataLayer.push({ event: 'ghl_form_submit' })`. **Nothing in the code pushes this event.** This is the trigger to use.
- Trigger 21 (Thank You page): Fires on page URLs matching `thank|confirm|success|appointment-booked`. **keratocones.com has no thank you page.** Form shows inline success.

**DUPLICATE PIXEL: ❌ gtag.js added directly alongside GTM**
- TrackingScripts.tsx now has a direct `<Script src="googletagmanager.com/gtag/js?id=AW-1068394845">` plus a `gtag('config', 'AW-1068394845')` call
- GTM already loads Google Ads Remarketing (tag 19, googtag type) on all pages
- Result: AW-1068394845 fires twice per page — double remarketing pixel

### THE FIX (verified from API data):
1. Push `{ event: 'ghl_form_submit' }` to `window.dataLayer` when ContactForm.tsx `fetch('/api/contact')` returns OK
2. Revert the direct gtag.js from TrackingScripts.tsx
3. Rewrite lib/gtag.ts to use dataLayer (not window.gtag)
4. Clean up redundant types/gtag.d.ts

### NO CHANGES NEEDED:
- ❌ No new GTM tags
- ❌ No new GTM triggers
- ❌ No new Google Ads conversion actions
- ❌ No GTM API calls
- ❌ No GTM publish (already v17, published today)
- ❌ No onClick handlers needed for phone links (GTM trigger 20 handles it)
