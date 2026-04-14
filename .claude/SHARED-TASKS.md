# Shared Tasks - Keratocones.com

**Purpose**: Track tasks across sessions for keratocones.com website
**Last Updated**: March 26, 2026

---

## Session Log

| Date | Session | Work Done |
|------|---------|-----------|
| 2026-04-14 | lead-magnet-quiz-nurture | **Governed build: Added scored KC + OrthoK lead-capture quiz funnel to keratocones.com. 5 files: `app/api/quiz/route.ts` (server-side scoring, GHL integration, honeypot, duplicate handling), `app/quiz/page.tsx` (KC 6Q quiz), `app/quiz/ortho-k/page.tsx` (OrthoK 5Q quiz), `app/quiz/results/[tier]/page.tsx` (shared tier results with KC+OrthoK copy), `KeratoconusQuiz.tsx` CTA → /quiz. 45/45 tests, 2x pass. 8 PRD bugs fixed in cold review.** |

### Session 2026-03-25/26 (GHL Chat + CRO Overhaul + LPO)
**Session Name**: `ghl-chat-cro-lpo`
**Date**: March 25-26, 2026
**Claude Agent**: Claude Opus 4.6 (1M context)

#### GHL Chat Widget
- [x] Fixed ChatWidget — was never wired into layout.tsx
- [x] Fixed script URL: beta → widgets.leadconnectorhq.com
- [x] Switched to dashboard-controlled widget (ID: 69c4a1e35bd8e6f257cdf52d)
- [x] Fixed double-bubble (removed <chat-widget> element, kept Script only)
- [x] Branding: Keratoconus Vision Center / keratocones.com

#### GHL Contact Form
- [x] Updated Vercel env vars via API (GHL_LEAD_API_KEY + GHL_LOCATION_ID)
- [x] Fixed duplicate contact handling (returning-patient tag + note)
- [x] Changed tag to existing 'keratoconus lead'
- [x] Added HIPAA consent + SMS opt-in with DND settings
- [x] Removed contactId leak from API response

#### CRO Overhaul (Full Governance)
- [x] CRO audit (page-cro skill) — 10 ranked improvements
- [x] 3 independent PRDs (funnel, trust, architecture)
- [x] Synthesized PRD with Primitive Gate
- [x] Cold architectural review — found 3 critical bugs
- [x] New components: TestimonialQuotes, WaitTimeComparison, MidPageCTA, FAQ accordion
- [x] Star rating badge in Hero (4.9 ★ 500+ Google Reviews)
- [x] Page reorder: social proof first, quiz moved to position 5
- [x] 15 acceptance tests, 2x consecutive passes

#### Gap Analysis Fixes
- [x] Duplicate h1 → mobile uses <p role="heading">
- [x] Duplicate AggregateRating → removed from BusinessSchema
- [x] "5,000+ Google Reviews" → "500+ Google Reviews" (verifiable)
- [x] Nested <main> → LandingLayout changed to <div>
- [x] Spanish form locale="es"
- [x] Geo metadata: Irvine → Santa Ana
- [x] Spanish "20 años" → "35+ años"

#### LPO Round 2 (No Visual Changes)
- [x] FadeIn AdsBot fix (Tailwind opacity-100 class)
- [x] "near me" keywords in geo templates (OC, IE, default)
- [x] YouTube lazy-load (loading="lazy")
- [x] Contextualized 5,000+ ("Most clinics see 10/year")

#### QA Fixes
- [x] Intake page phone: 558-1182 → 558-0641 with +1
- [x] 3 dead href="#" sidebar links → real pages
- [x] 500+ → 5,000+ across 33+ files (patients, not reviews)

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

### 📋 Todo (Remaining from audits)
- Add MedicalWebPage + Physician schema to homepage, contact, scleral LP
- Fix duplicate WebPage schema on scleral LP (remove from KeratoconusScleralContent.tsx)
- Add OG + Twitter tags to /contact and /lp/keratoconus-scleral
- Fix www vs non-www in schema URLs (BreadcrumbList, ContactPage)
- Add medical review byline to core pages
- Convert 2 raw `<img>` tags on homepage to Next.js `<Image>`
- Port CRO components to Spanish /es page (TestimonialQuotes, WaitTimeComparison, MidPageCTA, ReviewWidget)
- KeratoconusContent mobile accordion (educational wall still full-length on mobile)
- Add rate limiting to /api/contact endpoint
- Host external topography image locally (currently Cloudinary)
- Fix rAF cleanup in FAQ AccordionPanel

### ⏳ Pending
- GHL Workflow: Set up "Contact Created" trigger for form submission notifications
- Monitor Google Ads for form conversions appearing
- After 2-4 weeks: evaluate Smart Bidding switch (need conversion data)
- After 90 days: recalculate form value ($500) using actual CRM form-to-patient rate
- Consider re-enabling qualified call tracking (CallRail or alternative) — currently DISCONNECTED
- Test geo-personalization with VPN (LA, SD, IE locations)

### ✅ Done (2026-03-25/26)
- GHL chat widget enabled + working (widget ID 69c4a1e3, dashboard-controlled) ✅
- GHL form fixed (API key + location ID updated on Vercel) ✅
- Duplicate contact handling (returning-patient tag + note) ✅
- HIPAA consent + SMS opt-in on contact form ✅
- 500+ → 5,000+ across 33+ files ✅
- CRO overhaul: TestimonialQuotes, WaitTimeComparison, MidPageCTA, FAQ accordion ✅
- Star rating badge in Hero (4.9 ★ 500+ Google Reviews) ✅
- Page reorder (social proof first, quiz moved up, 4 CTAs) ✅
- Cold review: 3 critical bugs fixed (tel:+1, FAQ schema sync, mobile h1 accessibility) ✅
- Gap analysis: 7 errors fixed (duplicate h1/schema/main, Spanish fixes, geo metadata) ✅
- LPO: FadeIn AdsBot fix, "near me" keywords, YouTube lazy-load, 5000+ contextualized ✅
- QA: intake phone fixed, dead links fixed, all tests passing ✅
- Full governance compliance (3 PRDs, cold review, tests, 2x pass) ✅

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
