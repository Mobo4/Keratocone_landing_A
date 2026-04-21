# PRD-A: Calendar-First Approach

## Problem
The site generates strong intent (quiz, vision simulator, social proof) but leaks conversions at the form. Patients fill out a form and wait 1 business day — most never convert. No instant booking, no sticky mobile CTA, quiz dead-ends at form.

## Evidence
- Form says "within 1 business day" — anti-urgency
- No embedded calendar despite having GHL calendar (VwkJ0jM0shArIftj7dpu)
- Quiz result links to #contact-form, not a booking calendar
- Mobile users lose CTA visibility after scrolling past hero
- 67% of patients who don't book within 30 min never return

## Root Cause
Form-only flow adds friction. Patients want to pick a time, not submit info and wait.

## Proposed Changes

### 1. Replace LeadForm with BookingSection (tabbed: Calendar | Form)
- File: NEW `components/BookingSection.tsx`
- Tab 1 (default): GHL calendar iframe (`https://api.leadconnectorhq.com/widget/booking/VwkJ0jM0shArIftj7dpu`)
- Tab 2: Existing ContactForm (for those who prefer form)
- Premium card design: gradient header, trust badges, animated tab indicator
- Heading changes: "Book Your Appointment" (calendar tab) / "Request a Callback" (form tab)

### 2. Update page.tsx LeadForm section
- File: `app/page.tsx` line 265-276
- Replace `<LeadForm />` with `<BookingSection />`
- Keep same section wrapper and id="lead-form"

### 3. Add StickyMobileCTA
- File: NEW `components/StickyMobileCTA.tsx`
- Fixed bottom bar on mobile only (md:hidden)
- Two buttons: "Book Now" (→ #lead-form) + phone icon (tel: link)
- Appears after scrolling past hero (IntersectionObserver)
- Sleek glass-morphism design with blur backdrop
- z-index above chat widget

### 4. Quiz Result → Calendar
- File: `components/KeratoconusQuiz.tsx` line 110-115
- Change `href="#contact-form"` to `href="#lead-form"`
- Add urgency: "3 slots available this week"

### 5. MidPageCTA updates
- File: `components/MidPageCTA.tsx`
- Change default ctaLink from "#contact-form" to "#lead-form"
- Change CTA text: "Book This Week" variant

## Out of Scope
- Square Appointments widget (rejected — off-site, generic)
- Exit-intent popup
- Form field reduction (keep for form tab)

## Verify
1. Calendar iframe loads and shows available slots
2. Tab switching works (Calendar ↔ Form)
3. Form submission still works via GHL API
4. Sticky CTA appears on mobile after scroll, disappears at top
5. Quiz result button scrolls to booking section
6. All MidPageCTA buttons scroll to booking section
7. No layout shift on calendar load
8. Chat widget not obscured by sticky CTA
