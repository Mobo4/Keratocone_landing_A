# PRD-C: Minimal Calendar + Maximum Polish

## Problem
The booking conversion rate is limited by a form-only flow with delayed response messaging. Patients with high intent (post-quiz, post-vision-simulator) hit a friction wall. Mobile experience lacks persistent booking access.

## Evidence
- Current flow: fill form → wait up to 24 hours → maybe book
- Ideal flow: pick a time → confirmed → done
- Quiz completion = high intent signal, wasted by generic form redirect
- Mobile: after hero scroll, no CTA visible until page bottom
- Site already has premium feel (quiz, simulator, testimonials) but booking section feels flat

## Root Cause
Missing the "instant gratification" moment. The emotional high from quiz/simulator dissipates by the time user reaches plain form.

## Proposed Changes

### 1. Tabbed BookingSection — Clean, Premium
- File: NEW `components/BookingSection.tsx`
- Tabs: "Book Online" (calendar) | "Request Callback" (form)
- Calendar tab: GHL iframe, full width, clean card with rounded corners
- Form tab: existing ContactForm, unchanged
- Design philosophy: Apple-like minimal. White card, subtle shadow, animated tab underline
- Header: "Schedule Your Expert Consultation" with trust badges below tabs
- Change subtext from "within 1 business day" to "Choose your preferred time" (calendar) / "We'll call within 4 hours" (form — tighter promise)

### 2. Lightweight Sticky Bar — Mobile Only
- File: NEW `components/StickyMobileCTA.tsx`
- Thin bar (48px height), not chunky
- Single "Book Appointment" button, phone icon on right
- Frosted glass effect (backdrop-blur), brand navy bg at 90% opacity
- IntersectionObserver: show after hero, hide when booking section visible
- Respects safe areas (env(safe-area-inset-bottom))

### 3. Quiz Result Enhancement
- File: `components/KeratoconusQuiz.tsx`
- Change CTA text: "Book Your Same-Week Appointment"
- Add micro-copy: "Limited new patient slots — book now to secure yours"
- Button style: larger, more prominent, pulsing subtle glow

### 4. Anchor Updates
- Files: `components/MidPageCTA.tsx`, `components/Hero.tsx`, `components/KeratoconusQuiz.tsx`
- All #contact-form references → #lead-form
- Hero CTA text: keep "Book Your Consultation" (already good)

### 5. Page.tsx Integration
- File: `app/page.tsx`
- Replace `<LeadForm />` with `<BookingSection />`
- Keep id="lead-form" on section wrapper

## Out of Scope
- Side-by-side layout (tabs are simpler, cleaner, mobile-friendly)
- Exit intent popup
- Form field changes
- Analytics event tracking for tab switches (future)

## Verify
1. GHL calendar loads in iframe without CORS/CSP errors
2. Tab switching is smooth, no layout jump
3. Form submission works in "Request Callback" tab
4. Sticky bar appears on mobile after hero scroll
5. Sticky bar disappears when booking section is visible
6. Quiz "Book" button scrolls to booking section
7. All CTAs across page point to #lead-form
8. Design looks premium — no jarring style breaks
9. GHL chat widget not obscured
