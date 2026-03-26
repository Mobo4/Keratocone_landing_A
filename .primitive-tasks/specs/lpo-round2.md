# Synthesized PRD: Landing Page Optimization Round 2

## Primitive Notation
```
TASK: Implement 6 high-impact, low-risk LPO changes — NO visual changes allowed
INPUTS: GPT PRD analysis, cold review assessment, existing codebase
CONSTRAINTS: No change in the look of the page. Only structural/invisible improvements.
OUTPUT: Better QS, faster load, better AdsBot crawlability, stronger copy
```

## Synthesis Notes
Source: GPT PRD filtered through our cold review. Only changes that are invisible
to the visitor (no layout changes, no section reorder, no new visible sections).

## Primitive Gate
1. Simplest thing that works? YES — all are targeted edits to existing files
2. New services/dependencies? NO
3. Future complexity? NO — each change is self-contained
4. Over-engineered? NO — minimal edits per change
5. Can break working things? LOW — copy changes + lazy loading only

---

## Changes

### 1. Fix FadeIn opacity for AdsBot (QS fix)
**File:** `components/FadeIn.tsx`
**Problem:** FadeIn uses Framer Motion `initial={{ opacity: 0 }}`. AdsBot-Google-Mobile
doesn't reliably execute JS animations. Content may appear hidden to Google's QS crawler.
**Fix:** Add `style={{ opacity: 1 }}` as the default CSS on the wrapper element, then let
Framer Motion override it on hydration. AdsBot sees opacity:1 in HTML, real users see animation.
**Visual impact:** NONE — users still see the fade animation as before.

### 2. Add "near me" keywords to geo-personalization templates
**File:** `lib/geo-personalization.ts`
**Problem:** 0 occurrences of "near me" on the page. "keratoconus specialist near me" is
a bidded keyword with QS=4.
**Fix:** Add "near you" or "near [city]" naturally into the geo subhead templates.
Not in Hero.tsx (it's dynamic from geo-personalization).
**Visual impact:** Minimal — subhead text changes slightly for geo visitors.

### 3. Lazy-load YouTube iframe
**File:** `components/Testimonials.tsx` (the video component)
**Problem:** YouTube iframe loads immediately with the page, adding ~500KB+ to initial load.
**Fix:** Use `loading="lazy"` on the iframe, or use a click-to-play pattern (show thumbnail,
load iframe on click). Next.js Script component already supports lazy strategies.
**Visual impact:** NONE — video still appears, just loads when scrolled into view.

### 4. Contextualize the 5,000+ number
**File:** `lib/geo-personalization.ts` (subhead templates)
**Problem:** "5,000+ cases" is a raw number with no context. Doesn't convey specialization.
**Fix:** Change default subhead from "5,000+ cases, same-week appointments, direct specialist access."
to "Most clinics see 10 keratoconus patients a year. We've treated 5,000+. Same-week appointments."
**Visual impact:** Copy change only — no layout change.

### 5. Add insurance reassurance to form area
**File:** `components/TrustSignals.tsx`
**Problem:** Cost is the #1 patient anxiety. No mention of insurance verification near the form.
**Fix:** Add a 5th trust signal: "We verify your insurance benefits before your visit"
**Visual impact:** One additional line in the existing trust signals grid — same style.

### 6. Defer Facebook Pixel + LinkedIn tag
**File:** `components/TrackingScripts.tsx`
**Problem:** FB Pixel and LinkedIn Insight load immediately, blocking render.
**Fix:** Change loading strategy to load after page is interactive (afterInteractive or lazyOnload).
**Visual impact:** NONE — tracking scripts are invisible.

## Out of Scope
- Section reorder (not allowed — no visual changes)
- New sections (Lenses Before Surgery, What to Expect) — would change page look
- Doctor photo move — would change page look
- Form simplification — would change page look
- Sticky nav bar — would change page look
- Quick-callback form — would change page look
- Mobile accordion for education content — would change page look

## Verify Criteria
- [ ] VC1: FadeIn wrapper has opacity:1 in initial HTML (view-source check)
- [ ] VC2: "near" keyword appears in geo-personalization default subhead
- [ ] VC3: YouTube iframe has loading="lazy" or loads on interaction
- [ ] VC4: Default subhead contextualizes 5,000+ with comparison
- [ ] VC5: TrustSignals has insurance verification line
- [ ] VC6: Facebook Pixel loads with lazyOnload or afterInteractive strategy
- [ ] VC7: Build passes
- [ ] VC8: No visual layout changes (same section order, same components)
