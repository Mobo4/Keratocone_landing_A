# Shared Tasks - Keratocones.com

**Purpose**: Track tasks across sessions for keratocones.com website
**Last Updated**: March 20, 2026

---

## Session Log

### Session 2026-03-20 (Conversion Tracking + Geo-Personalization + Audit)
**Session Name**: `conversion-geo-audit`
**Date**: March 20, 2026
**Claude Agent**: Claude Opus 4.6

#### Conversion Tracking Fix
- [x] Diagnosed form conversion tracking failure (all 3 GTM triggers broken for React AJAX form)
- [x] Added lib/tracking.ts using sendGTMEvent to push ghl_form_submit to dataLayer
- [x] Removed duplicate gtag.js from TrackingScripts.tsx (kept FB pixel)
- [x] Removed redundant trackClickToCall from Footer, Hero, StickyCTA, ContactPageContent
- [x] Reverted Footer.tsx to server component
- [x] Deleted lib/gtag.ts and types/gtag.d.ts
- [x] GTM API: Updated tag 24 triggers from [10,17,21] to [17] only
- [x] GTM API: Updated tag 23 click-to-call value from $1 to $100
- [x] Published GTM v18 → v19 → then deleted broken tag 26 → v20
- [x] Cold architectural review + BMAD analyst review
- [x] Commit dec74af, Vercel deployment READY, live QA passed

#### GTM Tag 26 Fix
- [x] Found `ReferenceError: gtag is not defined` on every page (from tag 26 "Website Call Phone Snippet")
- [x] Tag 26 called gtag() which requires direct gtag.js — incompatible with GTM-only architecture
- [x] Deleted tag 26 via GTM API, published v20
- [x] Live QA: 0 console errors confirmed

#### Geo-Personalization
- [x] Extended middleware.ts with geo headers (x-visitor-city/region/country from Vercel edge)
- [x] Added UTM forwarding (x-utm-source, x-utm-campaign, x-keyword)
- [x] Added Vary: x-visitor-city for CDN cache safety
- [x] Created lib/geo-personalization.ts (OC, LA, IE, SD, CA fallback)
- [x] Created lib/geo-personalization-es.ts (Spanish translations)
- [x] Created components/GeoBadge.tsx
- [x] Personalized 6 pages: homepage, /es, /lp/keratoconus-scleral, /lp/cornea-specialist, /contact
- [x] 3x test runs (13/13 pass), live QA via Playwright + WebFetch
- [x] Commit 9303579, Vercel deployment READY, QA passed

#### CRO/SEO/Architecture Audit
- [x] CRO audit via page-cro skill (score: 78/100)
- [x] SEO + Schema audit via seo-fundamentals + schema-markup skills
- [x] Landing page architecture audit via landing-page-creator skill
- [x] Created landing-page-creator skill, installed globally

#### Documentation & Memory
- [x] All memory files updated (architecture, session, MEMORY.md index)
- [x] SHARED-TASKS.md updated with all completed work + pending items
- [x] Feedback memory: clean systems, never orphaned
- [x] Fleet-memory Postgres: 6 facts + 1 event stored (conversion fix, GTM architecture, geo, sendGTMEvent pattern, skill, CRO audit)
- [x] 3-tier memory protocol complete (Working + Episodic + Semantic)

### Session 2026-03-14 (Video, CareCredit, CallRail Cleanup, GTM Audit)
**Session Name**: `site-updates-gtm-cleanup`
**Date**: March 14, 2026
**Claude Agent**: Claude Opus 4.6

#### Tasks Completed
- [x] Replaced YouTube video (p3SwILup6rE "Keratoconus Explained") — commit dbc4ba3
- [x] Added CareCredit financing section — commit 3417df0
- [x] Full CallRail removal (swap.js, CSS classes, dead files) — commits 5c0763c, 9f26b17, 0b94dcd
- [x] GTM audit via Tag Manager API — all tags verified
- [x] Unified OAuth token (Ads+GA4+GTM, 6 scopes) — updated OAUTH-CREDENTIALS.md

### Session 2026-02-11 (GTM Installation)
**Session Name**: `gtm-installation-both-sites`
**Date**: February 11, 2026
**Claude Agent**: Claude Sonnet 4.5

#### Tasks Completed
- [x] Installed GTM-NS6QTKN on keratocones.com via @next/third-parties
- [x] Removed old manual GTM/GA4/Clarity scripts
- [x] Build verified, committed, pushed

---

## Active Tasks

### 📋 Todo (from CRO/SEO audit)
- Add 2-3 patient testimonials near CTAs (pull from 127 Google reviews)
- Make 4.9-star / 127-review rating visible on page
- Add mid-page CTA after "Contact Lens Options" section
- Move "Am I A Candidate?" quiz higher (after symptoms section)
- Add MedicalWebPage + Physician schema to homepage, contact, scleral LP
- Fix duplicate WebPage schema on scleral LP (remove from KeratoconusScleralContent.tsx)
- Add OG + Twitter tags to /contact and /lp/keratoconus-scleral
- Fix www vs non-www in schema URLs (BreadcrumbList, ContactPage)
- Add medical review byline to core pages
- Convert 2 raw `<img>` tags on homepage to Next.js `<Image>`

### ⏳ Pending
- GHL Workflow: Set up "Contact Created" trigger for form submission notifications
- Monitor Google Ads for form conversions appearing (24-48h after 2026-03-20 deploy)
- After 2-4 weeks: evaluate Smart Bidding switch (need conversion data to accumulate first)
- After 90 days: recalculate form value ($500) using actual CRM form-to-patient rate
- Consider re-enabling qualified call tracking (CallRail or alternative) — currently DISCONNECTED
- Test geo-personalization with VPN (LA, SD, IE locations) once live

### ✅ Done (2026-03-20)
- Form conversion tracking fixed via GTM dataLayer ✅
- Duplicate gtag.js pixel removed ✅
- Click-to-call value updated $1 → $100 ✅
- Tag 24 triggers cleaned (only trigger 17) ✅
- GTM tag 26 (broken phone snippet) deleted → v20 published ✅
- Geo-personalization deployed (4 regions, 6 pages, EN+ES) ✅
- UTM parameter forwarding via middleware ✅
- GeoBadge component live ✅
- CRO/SEO/Architecture audit completed ✅
- landing-page-creator skill built + installed globally ✅
- Full QA via Playwright + WebFetch (0 errors) ✅
- All memory + docs + SHARED-TASKS updated ✅
- Fleet-memory Postgres: 6 facts + 1 session event stored ✅
- 3-tier memory protocol complete ✅

### ✅ Done (2026-03-14)
- Video updated to "Keratoconus Explained" ✅
- CareCredit financing section added ✅
- CallRail fully removed from codebase and GTM ✅
- GTM tags audited and verified via API ✅
- Unified OAuth token created ✅

---

## GTM Container: GTM-NS6QTKN (keratocones.com ONLY) — Live v20

**Tags (9 total, verified via API 2026-03-20):**
| ID | Name | Type | Value | Fires On |
|----|------|------|-------|----------|
| 4 | Google Tag Page URL | googtag | — | Init Consent |
| 7 | Microsoft Clarity - Official | Clarity | — | All Pages |
| 9 | Conversion Linker - All Pages | gclidw | — | All Pages |
| 11 | GA4 Event - Form Submit | gaawe | — | Trigger 10 |
| 18 | GA4 - ghl_form_submit | gaawe | — | Trigger 17 |
| 19 | Google Ads Remarketing | googtag | — | All Pages |
| 23 | Click to Call Conversion | awct | $100 | Trigger 20 |
| 24 | Form Submit Conversion | awct | $500 | Trigger 17 |
| 25 | GA4 Event - Book Appointment | gaawe | — | Trigger 22 |

**Tag 26 (Website Call Phone Snippet) — DELETED in v20** (called gtag() which doesn't exist in GTM-only setup)

**Triggers (5 total):**
| ID | Name | Type | Status |
|----|------|------|--------|
| 10 | Form Submission - All Forms | formSubmission | Unreliable (React AJAX) |
| 17 | CE - ghl_form_submit | customEvent | PRIMARY form trigger |
| 20 | Click - Phone Links (tel) | linkClick | Working |
| 21 | PV - Thank You Page | pageview | Orphan (no thank-you page) |
| 22 | Click - Booking Buttons | click | Working |

**eyecarecenteroc.com uses separate GTM: GTM-T9MZNLMX**

---

## Notes for Future Sessions

### Critical Information
- keratocones.com GA4: **G-E7VSPDXLF3** (GTM: GTM-NS6QTKN)
- eyecarecenteroc.com GA4: **G-2KDTQ0HX77** (GTM: GTM-T9MZNLMX)
- **CallRail is DISCONNECTED** — do NOT add CallRail scripts or classes
- **No direct gtag.js** — all tracking flows through GTM dataLayer
- Form tracking: lib/tracking.ts → sendGTMEvent → ghl_form_submit → trigger 17 → tag 24
- Click-to-call: GTM trigger 20 handles tel: links natively — no code-side onClick needed
- Facebook pixel (395306154557054) is in TrackingScripts.tsx (NOT in GTM)
- Use @next/third-parties GoogleTagManager + sendGTMEvent
- Native contact form submits to GHL via /api/contact route
- Unified OAuth token covers Ads + GA4 + GTM (see OAUTH-CREDENTIALS.md)

### Geo-Personalization
- middleware.ts reads x-vercel-ip-city → sets x-visitor-city header
- lib/geo-personalization.ts matches city to region (OC, LA, IE, SD, fallback)
- lib/geo-personalization-es.ts for Spanish pages
- Pages read header via `await headers()` → pass personalized props to Hero
- GeoBadge component shows "Serving [City] Patients" bar
- UTM params forwarded: x-utm-source, x-utm-campaign, x-keyword
- Vary: x-visitor-city for CDN cache safety
- Phone ALWAYS (714) 558-0641. Schema ALWAYS Santa Ana. Metadata ALWAYS static.
- On localhost: headers empty → default content (correct behavior)

### Skills Available
- `landing-page-creator` — global skill for medical landing pages (Next.js + SEO + CRO + tracking)
- `page-cro` — conversion rate optimization audit
- `seo-fundamentals` — SEO analysis
- `schema-markup` — structured data audit
- `frontend-design` — UI design quality
- `copywriting` — marketing copy

### Tech Stack
- Next.js 16 (App Router) + TypeScript + Tailwind CSS 4
- Framer Motion for animations
- next-intl (English + Spanish)
- Vercel hosting (auto-deploy from GitHub main)
- GTM for all tracking (GA4, Ads, Clarity, conversions)
- Vercel Edge Middleware for geo-personalization + locale detection
