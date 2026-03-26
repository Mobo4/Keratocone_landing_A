# Synthesized PRD: Homepage CRO Improvements

## Synthesis Notes

**Sources:** PRD-A (conversion funnel), PRD-B (social proof/trust), PRD-C (page architecture)

**Where all 3 agreed (high confidence):**
- Star rating badge in Hero (all 3 proposed this)
- Mid-page CTA strips (all 3 — A and C as reusable component, B implied)
- Quiz needs to move up (A: position 5, C: position 6)
- Reviews/social proof need to be visible much earlier
- VisionSimulator needs a CTA after it

**Where they diverged:**
- PRD-A: Add TestimonialStrip as new component (3 curated quotes)
- PRD-B: Add FeaturedTestimonials + WaitTimeComparison + TrustBar (3 new components)
- PRD-C: Restructure KeratoconusContent into accordion + convert FAQ to accordion

**Synthesis decision:** Take the best from each:
- From A: Star badge in Hero, TestimonialStrip, move quiz up
- From B: WaitTimeComparison (compelling differentiator)
- From C: MidPageCTA component, section reorder, FAQ accordion
- Skip B's TrustBar (too many new sections at top would slow the page)
- Skip C's KeratoconusContent accordion (complex, can do as follow-up)

## Primitive Gate Check
1. Is this the simplest thing that works? YES — reordering sections + 3 small new components
2. New services/dependencies? NO — all Tailwind + existing patterns
3. Future complexity? LOW — MidPageCTA is simple and reusable
4. Over-engineered? NO — each change is a focused component or reorder
5. Can break working things? LOW — section reorder only, no logic changes

---

## Problem
Homepage buries its strongest conversion assets (4.9 rating, quiz, reviews) at the bottom while front-loading 1,500 words of education with zero CTAs between Hero and form.

## Changes

### 1. Add Star Rating Badge to Hero
**File:** `components/Hero.tsx`
- Add compact "4.9 ★★★★★ 500+ Google Reviews" badge below TrustBadge
- Yellow stars, white text (desktop) / dark text (mobile)
- Links to `#reviews` section

### 2. Create `components/TestimonialQuotes.tsx` (NEW)
- 3 curated patient quotes from reviews.json (Sarah M., David L., Brian H.)
- Horizontal cards on desktop, stacked on mobile
- Each: 5 stars, quote (~100 chars), "— Name, Google Review"
- "Read all 500+ reviews →" link to #reviews

### 3. Create `components/WaitTimeComparison.tsx` (NEW)
- Two-column: "University Hospitals" vs "Keratoconus Vision Center"
- Left (muted): 3-6 month wait / Seen by residents / Multiple departments
- Right (highlighted): Same week / Dr. Bonakdar directly / One specialist
- CTA button: "Book Your Same-Week Appointment"

### 4. Create `components/MidPageCTA.tsx` (NEW)
- Reusable full-width CTA strip
- Props: headline, subtext, ctaText, ctaLink, phoneNumber, variant
- Compact (py-10), bg-eyecare-navy or bg-eyecare-blue
- Used twice: after VisionSimulator + after FAQ

### 5. Convert FAQSection to accordion
**File:** `components/FAQSection.tsx`
- Questions visible, answers collapsed (first item open by default)
- Chevron icon rotates on open
- Reduces section height from ~700px to ~350px
- Preserves all content for SEO

### 6. Reorder sections in `app/page.tsx`

**New order:**
```
 1. GeoBadge
 2. LandingHero (+ star badge)
 3. TestimonialQuotes (NEW)
 4. WaitTimeComparison (NEW)
 5. KeratoconusQuiz (MOVED from 11)
 6. VisionSimulator
 7. MidPageCTA A — "Ready to See Clearly?"
 8. KeratoconusContent (education)
 9. Testimonials (video)
10. Corneal Topography section
11. FAQSection (accordion)
12. MidPageCTA B — "Have More Questions?"
13. ReviewWidget (MOVED from 9 → stays accessible via #reviews)
14. About This Practice
15. InsuranceSection
16. LeadForm
```

## Out of Scope
- Spanish translations of new components (follow-up)
- KeratoconusContent accordion restructuring (follow-up)
- A/B testing infrastructure
- LeadForm/ContactForm changes
- SEO metadata changes
- Analytics event tracking for new CTAs

## Verify Criteria
- [ ] Hero shows star rating badge on mobile and desktop
- [ ] TestimonialQuotes renders 3 patient quotes after Hero
- [ ] WaitTimeComparison shows university vs practice comparison
- [ ] Quiz appears in top half of page (position 5)
- [ ] MidPageCTA renders after VisionSimulator and after FAQ
- [ ] FAQ is accordion (collapsed by default, first open)
- [ ] All CTAs link to #contact-form with correct phone number
- [ ] Build passes (`npm run build`)
- [ ] All components responsive (mobile + desktop)
- [ ] No content text altered — only structure/ordering
