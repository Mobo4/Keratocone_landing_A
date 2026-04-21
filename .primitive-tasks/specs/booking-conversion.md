# SYNTHESIZED PRD: Booking Conversion Overhaul

## Synthesis Notes

### Agreement Across All 3 PRDs (High Confidence)
- All 3 agree: GHL calendar iframe is the right solution (not Square)
- All 3 agree: Tabbed UI (calendar | form) is better than replacing the form
- All 3 agree: Sticky mobile CTA is needed
- All 3 agree: Quiz result should link to booking section
- All 3 agree: All #contact-form anchors must update to #lead-form

### Where PRDs Disagreed
| Decision | PRD-A | PRD-B | PRD-C | Winner |
|----------|-------|-------|-------|--------|
| Layout | Tabs | Side-by-side | Tabs | **Tabs (A/C)** — simpler, mobile-native, no width issues with iframe |
| Sticky bar height | Unspecified | Full-width gradient | 48px thin | **C** — thin is less intrusive, more premium |
| Form tab subtext | "1 business day" | Keep original | "Within 4 hours" | **C** — tighter promise = more conversions |
| Quiz urgency text | "3 slots this week" | "Same-week evaluation" | "Limited slots" | **A** — specific number (3) creates real urgency |
| Booking section design | Premium card | Navy header band | Apple-minimal | **C** — minimal wins for medical; trust comes from content not decoration |

### What All 3 Missed
- Need to keep the `id="contact-form"` as a secondary anchor (backwards compat with any saved links)
- Calendar iframe needs a loading state (skeleton) to avoid layout shift
- Need to handle case where GHL calendar is temporarily down (fallback to form tab)

### Primitive Gate
1. **Simplest thing that works?** YES — iframe embed + tabs + sticky bar. All standard patterns.
2. **New services/dependencies?** NO — uses existing GHL calendar, no new packages.
3. **Future complexity?** NO — components are self-contained.
4. **Over-engineered?** NO — three focused components.
5. **Break existing?** LOW RISK — form still works, just adding calendar option alongside it.

---

## Problem
Site generates strong intent via quiz + vision simulator but leaks conversions at a form-only booking flow. Patients must fill out a form and wait up to 24 hours. No instant booking, no mobile sticky CTA, quiz dead-ends at generic form.

## Proposed Changes

### 1. NEW: `components/BookingSection.tsx` — Tabbed Calendar + Form
**Source: PRD-C design, PRD-A structure**
- Tabs: "Book Online" (default, calendar) | "Request Callback" (form)
- Calendar tab: GHL iframe (`https://api.leadconnectorhq.com/widget/booking/VwkJ0jM0shArIftj7dpu`)
- Form tab: existing `<ContactForm />` component (unchanged)
- Loading skeleton while iframe loads
- Clean design: white card, subtle shadow, animated tab underline
- Trust badges row below tabs (same-week, 2000+ patients, Bascom Palmer, insurance)
- Calendar tab subtext: "Choose your preferred time"
- Form tab subtext: "We'll reach out within 4 hours"
- Both `id="lead-form"` and `id="contact-form"` anchor targets

### 2. NEW: `components/StickyMobileCTA.tsx` — Mobile Floating Bar
**Source: PRD-C design (thin, premium)**
- 52px height, fixed bottom, mobile only (md:hidden)
- "Book Now" button + phone icon button
- Frosted glass: navy bg at 90% opacity + backdrop-blur
- IntersectionObserver: appears after hero, hides when booking section visible
- Safe area padding: `pb-[env(safe-area-inset-bottom)]`
- z-50 (below modals, above content)
- Slide-up entrance animation

### 3. UPDATE: `components/KeratoconusQuiz.tsx` — Quiz → Calendar
**Source: PRD-A urgency text**
- Line 111: Change `href="#contact-form"` → `href="#lead-form"`
- Change button text: "Book Your Same-Week Appointment"
- Add micro-copy: "Only 3 new patient slots left this week"
- Slightly larger button with subtle pulse animation on the icon

### 4. UPDATE: `components/MidPageCTA.tsx` — Anchor Fix
- Change default `ctaLink` from `"#contact-form"` to `"#lead-form"`

### 5. UPDATE: `app/page.tsx` — Integration
- Replace `<LeadForm />` with `<BookingSection />`
- Keep section wrapper with `id="lead-form"`
- Add `id="contact-form"` as alias on same section (backwards compat)

### 6. UPDATE: `app/layout.tsx` — Add StickyMobileCTA
- Import and render `<StickyMobileCTA />` after `<ChatWidget />`

### 7. UPDATE: `app/globals.css` — Animations
- Add slide-up animation for sticky bar
- Add subtle pulse for quiz CTA

## Cold Review Fixes Applied
1. **HIGH — StickyCTA already exists**: Modify existing `components/StickyCTA.tsx` (not create new). Add IntersectionObserver show/hide + better design. LandingLayout.tsx already renders it.
2. **HIGH — Anchor preservation**: BookingSection must keep BOTH `id="lead-form"` (outer) and `id="contact-form"` (inner). 40+ links depend on #contact-form.
3. **HIGH — iframe CLS**: Set `min-h-[600px]` on iframe container + loading skeleton.
4. **MEDIUM — iframe fallback**: 8-second timeout → show "Calendar unavailable, call us" fallback.
5. **MEDIUM — ARIA tabs**: Implement proper `role="tablist"`, `role="tab"`, `role="tabpanel"`, arrow key nav.
6. **MEDIUM — Chat widget z-index**: Add CSS rule to push GHL chat bubble up 70px when sticky bar is visible.
7. **LOW — IntersectionObserver SSR**: Wrap in useEffect with cleanup.

## Out of Scope
- Square Appointments widget
- Exit-intent popup
- Form field reduction
- A/B testing infrastructure
- Analytics for tab switch events (future)

## Verify
1. GHL calendar iframe loads and shows available time slots
2. Tab switching between Calendar and Form is smooth, no layout jump
3. Form submission still works correctly via /api/contact → GHL API
4. Sticky mobile CTA appears after scrolling past hero on mobile
5. Sticky CTA hides when booking section is in viewport
6. Sticky CTA does not appear on desktop
7. Quiz result "Book" button scrolls to booking section
8. All MidPageCTA buttons scroll to booking section
9. GHL chat widget is not obscured by sticky CTA
10. Both #lead-form and #contact-form anchors work
11. Design is visually premium — clean tabs, proper spacing, brand colors
12. Page builds without TypeScript errors
