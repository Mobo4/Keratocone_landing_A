# Dr. Bonakdar Optometry - Webflow CMS Collections Schema

## 🏗️ COMPREHENSIVE CMS ARCHITECTURE FOR MEDICAL CONTENT

### 📋 COLLECTIONS OVERVIEW
**Total Collections**: 6 primary + 2 supporting = 8 collections
**Content Items**: ~100 total items across all collections
**Languages**: English (primary) + Spanish (secondary)
**SEO Integration**: Full meta tag and schema markup support

---

## 🏥 MEDICAL CONDITIONS COLLECTION

### Collection Settings
- **Collection Name**: Medical Conditions
- **Collection Slug**: medical-conditions
- **Template Page**: `/conditions/[slug]`
- **Items per Page**: All (no pagination)
- **Sort Order**: Custom (by condition severity/frequency)

### Field Structure
```
1. NAME (Plain Text) *Required*
   - Field ID: name
   - Help Text: Medical condition name (e.g., "Keratoconus")
   - Character Limit: 100
   - SEO Impact: H1 tag, title tag component

2. SLUG (Plain Text) *Required, Unique*
   - Field ID: slug
   - Help Text: URL-friendly version (e.g., "keratoconus")
   - Validation: Lowercase, hyphens only
   - Auto-generate: From Name field

3. SUMMARY (Plain Text) *Required*
   - Field ID: summary
   - Help Text: Brief one-line description for cards and meta descriptions
   - Character Limit: 160
   - SEO Impact: Meta description base

4. DETAILED DESCRIPTION (Rich Text) *Required*
   - Field ID: detailed-description
   - Help Text: Comprehensive condition information
   - HTML Support: Full rich text with headings, lists, links
   - SEO Impact: Main page content

5. SYMPTOMS (Rich Text) *Required*
   - Field ID: symptoms
   - Help Text: What patients experience with this condition
   - Structure: Bulleted lists preferred
   - Medical Focus: Patient-friendly language

6. TREATMENT OPTIONS (Rich Text) *Required*
   - Field ID: treatment-options
   - Help Text: Available treatment methods and procedures
   - Structure: Organized by treatment type
   - Include: Benefits, process, timeline

7. FEATURED IMAGE (Image) *Required*
   - Field ID: featured-image
   - Help Text: Main hero image for condition page
   - Requirements: 1920x1080px, medical/professional
   - Alt Text: Auto-generated from condition name

8. GALLERY IMAGES (Multi-Image)
   - Field ID: gallery-images
   - Help Text: Additional supporting images
   - Limit: 6 images maximum
   - Use Cases: Before/after, procedure photos, diagrams

9. SEO TITLE (Plain Text)
   - Field ID: seo-title
   - Help Text: Custom title tag (leave blank for auto-generation)
   - Character Limit: 60
   - Default Formula: "[Name] Treatment Orange County | Dr. Bonakdar"

10. SEO DESCRIPTION (Plain Text)
    - Field ID: seo-description
    - Help Text: Custom meta description
    - Character Limit: 160
    - Default: Uses Summary field if blank

11. KEYWORDS (Plain Text)
    - Field ID: keywords
    - Help Text: Comma-separated target keywords
    - Example: "keratoconus treatment, corneal cross-linking, Orange County"

12. SPANISH NAME (Plain Text)
    - Field ID: spanish-name
    - Help Text: Condition name in Spanish
    - Example: "Queratocono"

13. SPANISH SUMMARY (Plain Text)
    - Field ID: spanish-summary
    - Help Text: Brief description in Spanish
    - Character Limit: 160

14. SPANISH CONTENT (Rich Text)
    - Field ID: spanish-content
    - Help Text: Full Spanish translation of content
    - Structure: Mirror English content organization

15. CONDITION SEVERITY (Option) *Required*
    - Field ID: condition-severity
    - Options: "Common", "Moderate", "Severe", "Emergency"
    - Use: Content prioritization and layout

16. AGE GROUP (Multi-Select)
    - Field ID: age-group
    - Options: "Children", "Adults", "Seniors", "All Ages"
    - Use: Content targeting and recommendations

17. INSURANCE COVERAGE (Option)
    - Field ID: insurance-coverage
    - Options: "Typically Covered", "Partially Covered", "Usually Not Covered", "Varies"
    - Use: Patient financial planning information

18. RELATED CONDITIONS (Multi-Reference)
    - Field ID: related-conditions
    - Reference: Medical Conditions collection
    - Use: Cross-linking related conditions

19. APPOINTMENT CTA TEXT (Plain Text)
    - Field ID: appointment-cta-text
    - Help Text: Custom call-to-action text
    - Default: "Schedule Your Consultation"
    - Character Limit: 50

20. PUBLISHED (Switch) *Required*
    - Field ID: published
    - Default: Off
    - Use: Content approval workflow
```

### Initial Content Items (6 Items)
1. **Keratoconus**: Progressive corneal condition, cross-linking treatment
2. **Dry Eye Syndrome**: Tear production issues, IPL therapy options
3. **LASIK Surgery**: Vision correction procedure, candidacy assessment
4. **Cataract Treatment**: Lens replacement surgery, IOL options
5. **Orthokeratology**: Overnight vision correction, myopia control
6. **Headache/Eye Fatigue**: Vision-related headaches, digital eye strain

---

## 🔧 SERVICES COLLECTION

### Collection Settings
- **Collection Name**: Services
- **Collection Slug**: services
- **Template Page**: `/services/[slug]`
- **Sort Order**: Priority (comprehensive exams first)

### Field Structure
```
1. SERVICE NAME (Plain Text) *Required*
   - Field ID: service-name
   - Character Limit: 100
   - Examples: "Comprehensive Eye Exams", "Contact Lens Fitting"

2. SLUG (Plain Text) *Required, Unique*
   - Field ID: slug
   - Auto-generate from Service Name

3. SHORT DESCRIPTION (Plain Text) *Required*
   - Field ID: short-description
   - Character Limit: 200
   - Use: Service cards, overview sections

4. DETAILED DESCRIPTION (Rich Text) *Required*
   - Field ID: detailed-description
   - Full service information and benefits

5. PROCESS STEPS (Rich Text)
   - Field ID: process-steps
   - What patients can expect during service

6. BENEFITS (Rich Text) *Required*
   - Field ID: benefits
   - Key advantages and outcomes

7. PRICING INFORMATION (Rich Text)
   - Field ID: pricing-information
   - Cost ranges, insurance information

8. FEATURED IMAGE (Image) *Required*
   - Field ID: featured-image
   - Service-related professional imagery

9. ICON IMAGE (Image)
   - Field ID: icon-image
   - Small icon for service cards (SVG preferred)

10. SERVICE CATEGORY (Option) *Required*
    - Field ID: service-category
    - Options: "Eye Exams", "Vision Correction", "Eyewear", "Specialty Care"

11. DURATION (Plain Text)
    - Field ID: duration
    - Typical appointment length

12. AGE GROUPS SERVED (Multi-Select)
    - Field ID: age-groups-served
    - Options: "Children", "Adults", "Seniors"

13. INSURANCE TYPICALLY COVERS (Switch)
    - Field ID: insurance-covers
    - Default: On for most services

14. SPANISH SERVICE NAME (Plain Text)
    - Field ID: spanish-service-name

15. SPANISH DESCRIPTION (Rich Text)
    - Field ID: spanish-description

16. SEO TITLE (Plain Text)
    - Field ID: seo-title

17. SEO DESCRIPTION (Plain Text)
    - Field ID: seo-description

18. PUBLISHED (Switch) *Required*
    - Field ID: published
```

### Initial Content Items (8 Items)
1. **Comprehensive Eye Exams**: Complete vision and health assessment
2. **Contact Lens Fitting**: Specialty lens fitting and follow-up
3. **Eyewear Services**: Prescription glasses and frame selection
4. **Emergency Eye Care**: Urgent eye problems and injuries
5. **Pediatric Eye Care**: Children's vision development
6. **Senior Eye Health**: Age-related condition management
7. **Fashion Eyewear**: Designer frames and style consultation
8. **Vision Therapy**: Specialized vision training programs

---

## 📍 LOCATIONS COLLECTION

### Collection Settings
- **Collection Name**: Locations
- **Collection Slug**: locations
- **Template Page**: `/locations/[slug]`
- **Sort Order**: Primary location first

### Field Structure
```
1. LOCATION NAME (Plain Text) *Required*
   - Field ID: location-name
   - Examples: "Santa Ana Main Office", "Irvine Satellite"

2. SLUG (Plain Text) *Required, Unique*
   - Field ID: slug
   - Examples: "santa-ana", "irvine"

3. STREET ADDRESS (Plain Text) *Required*
   - Field ID: street-address
   - Full street address

4. CITY (Plain Text) *Required*
   - Field ID: city

5. STATE (Plain Text) *Required*
   - Field ID: state
   - Default: "California"

6. ZIP CODE (Plain Text) *Required*
   - Field ID: zip-code

7. PHONE NUMBER (Plain Text) *Required*
   - Field ID: phone-number
   - Format: (XXX) XXX-XXXX

8. EMAIL ADDRESS (Email)
   - Field ID: email-address

9. OFFICE HOURS (Rich Text) *Required*
   - Field ID: office-hours
   - Structured format for each day

10. SERVICES OFFERED (Multi-Reference) *Required*
    - Field ID: services-offered
    - Reference: Services collection

11. MEDICAL CONDITIONS TREATED (Multi-Reference)
    - Field ID: conditions-treated
    - Reference: Medical Conditions collection

12. STAFF MEMBERS (Multi-Reference)
    - Field ID: staff-members
    - Reference: Staff collection

13. MAP EMBED CODE (Plain Text)
    - Field ID: map-embed-code
    - Google Maps iframe embed

14. DIRECTIONS (Rich Text)
    - Field ID: directions
    - Detailed driving directions

15. PARKING INFORMATION (Rich Text)
    - Field ID: parking-information
    - Parking availability and instructions

16. ACCESSIBILITY FEATURES (Rich Text)
    - Field ID: accessibility-features
    - ADA compliance information

17. PUBLIC TRANSPORTATION (Rich Text)
    - Field ID: public-transportation
    - Bus routes, train access

18. LOCATION IMAGE (Image) *Required*
    - Field ID: location-image
    - Professional exterior/interior photo

19. INSURANCE ACCEPTED (Rich Text)
    - Field ID: insurance-accepted
    - List of accepted insurance plans

20. APPOINTMENT SCHEDULING (Rich Text)
    - Field ID: appointment-scheduling
    - Location-specific scheduling information

21. SPANISH ADDRESS (Plain Text)
    - Field ID: spanish-address

22. SPANISH HOURS (Rich Text)
    - Field ID: spanish-hours

23. SPANISH DIRECTIONS (Rich Text)
    - Field ID: spanish-directions

24. PRIMARY LOCATION (Switch)
    - Field ID: primary-location
    - Only one should be marked as primary

25. PUBLISHED (Switch) *Required*
    - Field ID: published
```

### Initial Content Items (3 Items)
1. **Santa Ana Main Office**: Primary practice location
2. **Irvine Satellite Office**: Secondary location
3. **Mobile Services**: On-site patient care (if applicable)

---

## 👥 STAFF COLLECTION

### Collection Settings
- **Collection Name**: Staff
- **Collection Slug**: staff
- **Template Page**: `/staff/[slug]` (optional detail pages)
- **Sort Order**: Dr. Bonakdar first, then by title

### Field Structure
```
1. FULL NAME (Plain Text) *Required*
   - Field ID: full-name
   - Professional name for display

2. SLUG (Plain Text) *Required, Unique*
   - Field ID: slug
   - Auto-generate from name

3. TITLE (Plain Text) *Required*
   - Field ID: title
   - Examples: "Optometrist", "Office Manager", "Technician"

4. CREDENTIALS (Plain Text)
   - Field ID: credentials
   - Professional certifications (OD, CPC, etc.)

5. BIOGRAPHY (Rich Text) *Required*
   - Field ID: biography
   - Professional background and experience

6. PROFESSIONAL PHOTO (Image) *Required*
   - Field ID: professional-photo
   - High-quality headshot

7. SPECIALTIES (Multi-Select)
   - Field ID: specialties
   - Options: "Keratoconus", "Dry Eye", "LASIK", "Pediatrics", "Low Vision"

8. LANGUAGES SPOKEN (Multi-Select) *Required*
   - Field ID: languages
   - Options: "English", "Spanish", "Other"

9. EDUCATION (Rich Text)
   - Field ID: education
   - Degree information and institutions

10. PROFESSIONAL AFFILIATIONS (Rich Text)
    - Field ID: professional-affiliations
    - Medical associations and memberships

11. LOCATIONS (Multi-Reference) *Required*
    - Field ID: locations
    - Reference: Locations collection

12. SERVICES PROVIDED (Multi-Reference)
    - Field ID: services-provided
    - Reference: Services collection

13. YEARS OF EXPERIENCE (Number)
    - Field ID: years-experience
    - Integer value

14. CONTACT EMAIL (Email)
    - Field ID: contact-email
    - Direct contact if applicable

15. SPANISH BIOGRAPHY (Rich Text)
    - Field ID: spanish-biography

16. DISPLAY ON ABOUT PAGE (Switch) *Required*
    - Field ID: display-about
    - Show in main about section

17. DISPLAY ORDER (Number)
    - Field ID: display-order
    - Sorting priority

18. PUBLISHED (Switch) *Required*
    - Field ID: published
```

### Initial Content Items (5 Items)
1. **Dr. Bonakdar**: Primary optometrist and practice owner
2. **Office Manager**: Administrative and scheduling lead
3. **Lead Technician**: Senior ophthalmic technician
4. **Patient Coordinator**: Customer service and insurance
5. **Optical Specialist**: Eyewear fitting and dispensing

---

## 📰 BLOG/NEWS COLLECTION (Optional)

### Collection Settings
- **Collection Name**: Blog Posts
- **Collection Slug**: blog
- **Template Page**: `/blog/[slug]`
- **Sort Order**: Publication date (newest first)

### Field Structure (Simplified for Future Implementation)
```
1. TITLE (Plain Text) *Required*
2. SLUG (Plain Text) *Required, Unique*
3. EXCERPT (Plain Text) *Required*
4. CONTENT (Rich Text) *Required*
5. FEATURED IMAGE (Image) *Required*
6. AUTHOR (Reference to Staff)
7. PUBLICATION DATE (Date) *Required*
8. CATEGORIES (Multi-Select)
9. TAGS (Multi-Select)
10. SEO TITLE (Plain Text)
11. SEO DESCRIPTION (Plain Text)
12. SPANISH TITLE (Plain Text)
13. SPANISH CONTENT (Rich Text)
14. PUBLISHED (Switch) *Required*
```

---

## 📋 TESTIMONIALS COLLECTION

### Collection Settings
- **Collection Name**: Patient Testimonials
- **Collection Slug**: testimonials
- **Template Page**: None (used in components only)
- **Sort Order**: Rating (5-star first), then date

### Field Structure
```
1. PATIENT NAME (Plain Text) *Required*
   - Field ID: patient-name
   - First name + last initial for privacy

2. RATING (Number) *Required*
   - Field ID: rating
   - Range: 1-5 stars

3. TESTIMONIAL TEXT (Rich Text) *Required*
   - Field ID: testimonial-text
   - Patient review content

4. SERVICE RECEIVED (Reference)
   - Field ID: service-received
   - Reference: Services collection

5. CONDITION TREATED (Reference)
   - Field ID: condition-treated
   - Reference: Medical Conditions collection

6. REVIEW DATE (Date) *Required*
   - Field ID: review-date

7. LOCATION (Reference)
   - Field ID: location
   - Reference: Locations collection

8. PHOTO PERMISSION (Switch)
   - Field ID: photo-permission
   - Patient approved photo use

9. PATIENT PHOTO (Image)
   - Field ID: patient-photo
   - Optional patient photo

10. SPANISH TESTIMONIAL (Rich Text)
    - Field ID: spanish-testimonial

11. VERIFIED REVIEW (Switch) *Required*
    - Field ID: verified-review
    - Confirmed authentic patient

12. FEATURED (Switch)
    - Field ID: featured
    - Show on homepage

13. PUBLISHED (Switch) *Required*
    - Field ID: published
```

### Initial Content Items (10 Items)
1. **Keratoconus Success Stories**: Cross-linking treatment outcomes
2. **LASIK Results**: Vision correction satisfaction
3. **Dry Eye Relief**: Treatment success testimonials
4. **Cataract Surgery**: Premium lens satisfaction
5. **General Eye Care**: Routine exam experiences
6. **Emergency Care**: Urgent treatment gratitude
7. **Pediatric Care**: Parent testimonials
8. **Fashion Eyewear**: Style consultation satisfaction
9. **Ortho-K Success**: Overnight correction results
10. **Overall Practice**: General service excellence

---

## 🔄 CONTENT WORKFLOW AND MANAGEMENT

### Content Creation Workflow
1. **Draft Creation**: Staff creates content in English
2. **Medical Review**: Dr. Bonakdar approves medical content
3. **SEO Optimization**: Meta tags and keywords added
4. **Spanish Translation**: Professional medical translation
5. **Quality Assurance**: Content review and testing
6. **Publication**: Published flag enabled

### Content Maintenance Schedule
- **Medical Conditions**: Quarterly review and updates
- **Services**: Bi-annual review and pricing updates
- **Staff Information**: As needed for changes
- **Locations**: Monthly verification of hours and contact info
- **Testimonials**: Monthly addition of new reviews

### SEO Integration Points
- **Auto-Generated Titles**: Formula-based title generation
- **Schema Markup**: Automatic structured data generation
- **Sitemap Integration**: CMS items automatically in sitemap
- **Meta Descriptions**: Fallback to summary fields
- **Image SEO**: Auto-generated alt text from content

This comprehensive CMS schema provides the foundation for migrating all React-based content to Webflow while maintaining SEO value and enabling easy content management for the practice staff.