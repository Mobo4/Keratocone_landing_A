# FINAL PRD: Fix Google Ads Form Submit Conversion + Clean Duplicate Pixel

## Synthesis Notes

### Where all 3 agree (high confidence):
- Revert direct gtag.js from TrackingScripts.tsx
- Push `{ event: 'ghl_form_submit' }` to dataLayer on successful form submission
- Delete types/gtag.d.ts
- Rename lib/gtag.ts → lib/tracking.ts using dataLayer (not window.gtag)
- No new GTM tags, triggers, or Google Ads conversion actions needed
- GTM click-to-call (trigger 20) already works for phone links

### Where they disagree + resolution:
| Decision | PRD-A | PRD-B | PRD-C | Final |
|----------|-------|-------|-------|-------|
| Keep phone onClick handlers? | Remove | Keep | Remove | **Remove** — GTM trigger 20 handles it natively. Less code = less risk. (A+C) |
| Keep Footer as client component? | Revert to server | Keep client | Revert to server | **Revert** — no client-only APIs needed. (A+C) |
| Remove trigger 10+21 from tag 24? | No | No | Yes (safety fix) | **Yes** — PRD-C correctly identified double-counting risk. Small GTM API change, big safety win. |
| Keep trackClickToCall function? | Remove | Keep | Remove | **Remove** — unnecessary function, GTM handles it. (A+C) |

### What PRD-C uniquely identified (blind spots fixed):
1. **Double-counting risk**: Trigger 10 (formSubmission) may occasionally fire on React forms, causing duplicate conversions alongside trigger 17. Fix: remove triggers 10+21 from tag 24.
2. **GA4 also fixed**: The `ghl_form_submit` push also fires trigger 17 → tag 18 (GA4 ghl_form_submit). Two-for-one fix.
3. **Built-in variables confirmed**: Live v17 description explicitly says "Enabled click/form built-in variables".

### Primitive Gate:
1. **Simplest thing that works?** YES — one dataLayer push fixes the conversion. Code revert cleans the duplicate. GTM API call removes stale triggers.
2. **Adds new services/containers/dependencies?** NO.
3. **Adds complexity future sessions need?** NO — removes complexity (fewer files, simpler tracking).
4. **Over-engineered?** NO — this is the minimum viable fix.
5. **Can break something working?** RISK AREA: Removing triggers 10+21 from tag 24. Mitigation: trigger 10 is unreliable for AJAX forms (fires before success), trigger 21 never fires (no thank-you page). Removing them only prevents false/duplicate conversions. NET POSITIVE.

**PASSES Primitive Gate.**

---

## Problem Statement
GTM-NS6QTKN has a live Google Ads form submit conversion tag (tag 24, $500 value, label `A_Z0CMXP9fwZEN3Suf0D`) but none of its 3 triggers fire on keratocones.com because the React form uses AJAX submission. Additionally, a duplicate gtag.js pixel was added to the page source alongside GTM, doubling the AW-1068394845 remarketing requests.

## Acceptance Criteria
- [ ] AC1: No direct gtag.js script (`gtag/js?id=AW-`) in any component (only GTM container)
- [ ] AC2: `window.dataLayer` receives `{ event: 'ghl_form_submit' }` after successful form submission
- [ ] AC3: Build passes with zero TypeScript errors
- [ ] AC4: No `window.gtag` calls remain in lib/ or components/
- [ ] AC5: Facebook pixel (395306154557054) still present in TrackingScripts.tsx
- [ ] AC6: GTM-NS6QTKN still in layout.tsx
- [ ] AC7: No stale imports from `@/lib/gtag` in any component
- [ ] AC8: types/gtag.d.ts deleted
- [ ] AC9: Footer.tsx is a server component (no 'use client')
- [ ] AC10: GTM tag 24 fires ONLY on trigger 17 (not 10 or 21)
- [ ] AC11: GTM live version is v18+ (published after trigger cleanup)

## Technical Design

### Part 1: Code Changes (Next.js site)

**1. Revert `components/TrackingScripts.tsx`**
Remove the two Google Ads `<Script>` blocks added in previous edit. Keep Facebook pixel exactly as-is.

**2. Rewrite `lib/gtag.ts` → create `lib/tracking.ts`**
Single function, no gtag dependency:
```typescript
export function trackFormSubmit() {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'ghl_form_submit' });
  }
}
```
Then delete `lib/gtag.ts`.

**3. Delete `types/gtag.d.ts`**

**4. Update `components/ContactForm.tsx`**
Change import from `'@/lib/gtag'` → `'@/lib/tracking'`. Keep `trackFormSubmit()` call on success.

**5. Revert phone link components (remove onClick + import)**
- `components/Footer.tsx` — Remove `'use client'`, remove import, remove `onClick={trackClickToCall}`
- `components/Hero.tsx` — Remove import, remove `onClick={trackClickToCall}` from both phone links
- `components/StickyCTA.tsx` — Remove import, remove `onClick={trackClickToCall}`
- `components/ContactPageContent.tsx` — Remove import, remove `onClick={trackClickToCall}`

### Part 2: GTM API Changes (safety fix)

**6. Update tag 24 — remove stale triggers**
Via GTM API: PATCH tag 24's `firingTriggerId` from `["10", "21", "17"]` to `["17"]` only.
This prevents:
- Trigger 10 (formSubmission) from double-counting on native form events
- Trigger 21 (Thank You page) from being a dead trigger reference

**7. Publish GTM v18**
Create version from workspace + publish via API.

## Dependencies
- GTM API access via unified OAuth token (verified working)
- GTM-NS6QTKN account 6076437670, container 104514292, workspace 18
- No new packages needed

## Risks
1. **Removing triggers 10+21 from tag 24** — Low risk. Trigger 10 is unreliable for AJAX forms (can count failures as conversions). Trigger 21 never fires (no thank-you page). Removing them is strictly positive.
2. **Footer.tsx revert to server component** — Low risk. Footer has no server-only APIs and no client-only APIs (after removing onClick).

## Out of Scope
- New GTM tags or triggers (all exist)
- Google Ads conversion action changes (all exist)
- GA4 changes (ghl_form_submit trigger 17 also fires GA4 tag 18 — already correct)
- Facebook pixel changes
- Click-to-call code changes (GTM trigger 20 handles it natively)
