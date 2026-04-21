# PRD-B: Dual-Path Booking with Visual Overhaul

## Problem
Website conversion funnel ends at a plain white form with "1 business day" callback messaging. No instant booking option exists despite GHL calendar availability. Mobile users lose all CTAs after scrolling past hero. Quiz engagement (high) doesn't translate to booking (low).

## Evidence
- LeadForm.tsx: plain white div, no visual differentiation from rest of page
- ContactForm.tsx: 5 fields + 2 checkboxes — high friction on mobile
- KeratoconusQuiz result: generic "Schedule Your Expert Consultation" → #contact-form
- No persistent CTA on mobile scroll
- GHL calendar VwkJ0jM0shArIftj7dpu exists but unused

## Root Cause
Single-path conversion (form-only) with no instant gratification. Booking section lacks visual weight and urgency.

## Proposed Changes

### 1. NEW BookingSection component with side-by-side layout
- File: NEW `components/BookingSection.tsx`
- Desktop: Two columns — left = GHL calendar iframe, right = quick contact form
- Mobile: Stacked — calendar on top, form below with "Or fill out this form" divider
- Premium design: dark navy header band with trust badges, calendar in elevated card
- Urgency badge: pulsing "Same-Week Availability" indicator
- Both paths feed into GHL pipeline

### 2. Sticky mobile bottom bar
- File: NEW `components/StickyMobileCTA.tsx`
- Full-width bar: gradient bg matching brand colors
- "Book Now" primary button + phone icon secondary
- Slide-up animation on scroll (CSS transform)
- Hides when user reaches the booking section (no redundancy)
- Safe area padding for iPhone notch

### 3. Quiz → Calendar with personalized result
- File: `components/KeratoconusQuiz.tsx`
- After quiz completes, show "Book Your Priority Consultation" → scroll to calendar
- Add dynamic text: "Based on your answers, we recommend a same-week evaluation"
- Green priority badge visual

### 4. MidPageCTA visual upgrade
- File: `components/MidPageCTA.tsx`
- Add subtle animation (fade-in counter: "X patients seen this month")
- All CTAs point to #lead-form (booking section)

### 5. Update page.tsx
- File: `app/page.tsx`
- Replace LeadForm import/usage with BookingSection
- Adjust section bg to contrast with new booking card design

## Out of Scope
- Form field reduction (keep full form for insurance pre-qual)
- Exit-intent popup
- A/B testing infrastructure

## Verify
1. GHL calendar iframe renders on both desktop and mobile
2. Side-by-side layout on desktop, stacked on mobile
3. Form still submits to /api/contact successfully
4. Sticky CTA visible on mobile, hidden on desktop
5. Sticky CTA hides when booking section is in viewport
6. Quiz result scrolls smoothly to booking section
7. All internal links updated from #contact-form to #lead-form
8. No z-index conflicts with GHL chat widget
