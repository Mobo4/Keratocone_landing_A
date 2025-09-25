# Claude Desktop Webflow Instructions - Dr. Bonakdar Optometry Site

## Project Overview
Create a 300-page Webflow website replicating the Dr. Bonakdar Optometry site with optimized structure and preserved SEO.

## API Configuration
```
WEBFLOW_API_KEY=1b57afb40d7b010bd4174aba0775dea577952a9f73548d56ec2417240ba5d9bd
```

## Site Structure (300 Pages Total)

### 1. Main Pages (36 pages - Keep All)
- Index, About, Contact, Admin tools
- Individual location pages (Newport Beach, Villa Park, etc.)
- Core business pages

### 2. Medical Conditions (13 pages - Keep All)
Each condition page MUST include:
- **SEO Title**: "[Condition] Treatment | Dr. Bonakdar Optometry"
- **Meta Description**: "Expert [condition] treatment in Orange County. Dr. Bonakdar provides comprehensive care for [condition]. Call (714) 891-9191."
- **Primary Keywords**: "[condition] treatment", "[condition] specialist", "[condition] doctor near me"
- **Content Structure**:
  - H1: "[Condition] Treatment in Orange County"
  - H2: "Understanding [Condition]"
  - H2: "Symptoms of [Condition]"
  - H2: "Treatment Options"
  - H2: "Why Choose Dr. Bonakdar"
  - Call-to-action with phone number: (714) 891-9191

### 3. Service Pages - Consolidated Structure (196 pages)

#### CORRECTED Implementation (377→300 pages):
- **Current Reality**: 7 services × 41 locations = 287 service location pages + 7 index pages = 294 total
- **Merge**: `scleral-lens-specialist-near-me` + `keratoconus-specialist-near-me` → `keratoconus-scleral-lens-specialist-near-me`
- **Reduce Locations**: From 41 to 28 locations per service (saves 91 pages)
- **Final Services**: 6 service categories × 28 locations = 168 pages + 6 index pages = 174 total service pages
- **Pages Saved**: 294 - 174 = 120 pages saved

#### Services to Create:
1. **dry-eye-doctor-near-me** (28 locations)
2. **keratoconus-scleral-lens-specialist-near-me** (28 locations) [MERGED]
3. **optometrist-near-me** (28 locations)
4. **myopia-control** (28 locations)
5. **orthokeratology** (28 locations)
6. **headache-eye-fatigue** (28 locations)

#### Top 28 Priority Locations (Selected from Current 41):

**CURRENT 41 LOCATIONS** (cities + neighborhoods):
anaheim-hills, anaheim-resort, balboa-island, carbon-canyon, corona-del-mar, cypress-village, downtown, downtown-brea, downtown-fullerton, downtown-huntington-beach, downtown-santa-ana, east-westminster, east-yorba-linda, eastside, fashion-island, floral-park, french-park, great-park, huntington-harbor, little-saigon, mesa-verde, mile-square, newport-coast, north-fullerton, northwood, oak-creek, old-town-tustin, old-towne-orange, orange-park-acres, orchard-hills, platinum-triangle, portola-springs, quail-hill, south-coast-metro, southwest, turtle-rock, tustin-legacy, tustin-ranch, university-park, west-garden-grove, woodbridge

**TOP 28 PRIORITY LOCATIONS** (keep highest traffic):
1. anaheim-hills
2. balboa-island
3. corona-del-mar
4. downtown-brea
5. downtown-fullerton
6. downtown-huntington-beach
7. downtown-santa-ana
8. fashion-island
9. huntington-harbor
10. little-saigon
11. mesa-verde
12. newport-coast
13. northwood
14. old-town-tustin
15. old-towne-orange
16. orange-park-acres
17. orchard-hills
18. platinum-triangle
19. portola-springs
20. quail-hill
21. south-coast-metro
22. turtle-rock
23. tustin-legacy
24. tustin-ranch
25. university-park
26. west-garden-grove
27. woodbridge
28. great-park

### 4. Landing Pages (4 pages - Keep All)
- Keratoconus Specialist
- Dry Eye Treatment
- Headache Eye Fatigue
- Orthokeratology

## SEO Template for Each Service Page

### Page Title Format:
`[Service] in [Location] | Dr. Bonakdar Optometry`

### Meta Description Format:
`Expert [service] in [location]. Dr. Bonakdar provides comprehensive eye care serving [location] and surrounding areas. Call (714) 891-9191.`

### Content Structure for Each Service Page:
```
H1: [Service] in [Location] - Dr. Bonakdar Optometry
H2: Why Choose Dr. Bonakdar for [Service] in [Location]
H3: Serving [Location] and Surrounding Areas
H2: About [Service/Condition]
H3: Symptoms and Diagnosis
H3: Treatment Options
H2: Our [Location] Patients
H3: Convenient Location for [Location] Residents
H3: Easy Scheduling and Insurance
H2: Contact Our [Location] Practice

CTA Section:
- Phone: (714) 891-9191
- Address: 17777 Main St, Irvine, CA 92614
- "Serving [Location] and surrounding Orange County communities"
```

### Required Keywords per Service Page:
- Primary: "[service] [location]"
- Secondary: "[service] near [location]", "[condition] doctor [location]"
- Geographic: "[location] eye doctor", "[location] optometrist"
- Long-tail: "best [service] in [location]", "[service] specialist near [location]"

### Schema Markup Required:
- LocalBusiness
- MedicalOrganization
- Physician
- Place (for location data)

## Content Guidelines

### Medical Authority Content:
- Always include Dr. Bonakdar's credentials
- Mention specific equipment and technology
- Include patient testimonial placeholders
- Add condition-specific treatment details

### Local SEO Elements:
- Mention driving directions from each location
- Include local landmarks and neighborhoods
- Reference "serving [location] and surrounding areas"
- Add distance/drive time from major areas

### Contact Information (Consistent Across All Pages):
- Phone: (714) 891-9191
- Address: 17777 Main St, Irvine, CA 92614
- Email: eyecarecenteroc@gmail.com
- Hours: Mon-Fri 9AM-6PM, Sat 9AM-3PM

## Technical Requirements

### Performance:
- Optimize images for web
- Use responsive design for mobile
- Implement lazy loading for images
- Minimize CSS/JS for fast loading

### SEO Technical:
- Clean URL structure: `/services/[service]/[location]`
- Proper heading hierarchy (H1 → H2 → H3)
- Alt text for all images
- Internal linking between related pages
- XML sitemap generation

### Webflow-Specific:
- Use Webflow CMS for scalable content management
- Create reusable components for consistent design
- Implement Webflow's SEO settings for each page
- Set up 301 redirects for any changed URLs

## Success Metrics
- Preserve current keyword rankings for 15,000+ keywords
- Maintain page load speeds under 3 seconds
- Ensure mobile responsiveness scores 95%+
- Complete migration within 2-week timeline

## Complete Layout & Design System

### Brand Colors & Theme
```css
Primary: #2563eb (Professional blue)
Secondary: #0891b2 (Teal)
Accent: #059669 (Green)
Text: #1f2937 (Dark gray)
Background: #ffffff (White)
Light Background: #f8fafc (Light gray)
```

### Typography System
- **Headers**: Inter or Open Sans, bold weights
- **Body**: Inter or Open Sans, regular/medium weights
- **H1**: 2.5rem (40px) desktop, 2rem (32px) mobile
- **H2**: 2rem (32px) desktop, 1.75rem (28px) mobile
- **H3**: 1.5rem (24px) desktop, 1.25rem (20px) mobile
- **Body**: 1rem (16px) with 1.6 line height

### Required Webflow Components

#### 1. Header Component
- Logo (Dr. Bonakdar Optometry)
- Main navigation menu
- Phone number: (714) 891-9191 (prominent)
- Mobile hamburger menu
- Sticky/fixed positioning

#### 2. Hero Section Component
- H1 headline with location keywords
- Subtitle with value proposition
- Primary CTA button: "Schedule Appointment"
- Secondary CTA: "Call Now"
- Background image: professional medical/eye care

#### 3. Service Card Component
- Icon or medical image
- Service title (H3)
- Brief description (2-3 lines)
- "Learn More" link
- Hover effects

#### 4. Location Info Component
- Location name (H3)
- "Serving [Location] and surrounding areas"
- Distance/drive time from major landmarks
- Local keywords integration

#### 5. Contact Section Component
- Phone: (714) 891-9191
- Address: 17777 Main St, Irvine, CA 92614
- Hours: Mon-Fri 9AM-6PM, Sat 9AM-3PM
- Map integration
- Appointment booking form

#### 6. Footer Component
- Services menu links
- Conditions menu links
- Contact information
- Social media links
- Copyright and legal links

### Page Layout Templates

#### Homepage Layout:
1. Header Navigation
2. Hero Section with appointment booking
3. Services overview (3-column grid)
4. About Dr. Bonakdar section
5. Areas we serve (location grid)
6. Patient testimonials
7. Contact section with map
8. Footer

#### Service Location Page Layout:
1. Header Navigation
2. Breadcrumb: Home > Services > [Service] > [Location]
3. H1: [Service] in [Location] - Dr. Bonakdar Optometry
4. Local hero section
5. Why choose Dr. Bonakdar for [Service] in [Location]
6. About [Service/Condition]
7. Serving [Location] and surrounding areas
8. Contact section
9. Footer

#### Medical Condition Page Layout:
1. Header Navigation
2. Breadcrumb: Home > Conditions > [Condition]
3. H1: [Condition] Treatment in Orange County
4. Understanding [Condition]
5. Symptoms and diagnosis
6. Treatment options
7. Why choose Dr. Bonakdar
8. Schedule consultation CTA
9. Footer

#### Neighborhood Page Layout:
1. Header Navigation
2. Breadcrumb: Home > Locations > [Neighborhood]
3. H1: Eye Doctor in [Neighborhood]
4. Serving [Neighborhood] families since 2003
5. Convenient location and access
6. Full range of eye care services
7. Insurance and easy scheduling
8. Contact and directions
9. Footer

### Responsive Design Requirements

#### Mobile (320px-768px):
- Single column layout
- Hamburger navigation menu
- Large touch targets (44px minimum)
- Stacked content sections
- Phone number prominently displayed
- Simplified contact forms

#### Tablet (768px-1024px):
- Two-column grid layouts
- Expanded navigation menu
- Side-by-side content blocks
- Larger service cards

#### Desktop (1024px+):
- Multi-column layouts (up to 3 columns)
- Full horizontal navigation
- Large hero sections
- Grid-based displays

### CSS Classes & Styling

#### Container Classes:
```css
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
.hero-section { background: linear-gradient(135deg, #2563eb 0%, #0891b2 100%); color: white; padding: 80px 0; }
.service-card { background: white; border-radius: 8px; padding: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
.cta-button { background: #059669; color: white; padding: 15px 30px; border-radius: 6px; font-weight: 600; }
.location-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
```

#### Utility Classes:
```css
.text-center { text-align: center; }
.mb-4 { margin-bottom: 1.5rem; }
.py-8 { padding: 2rem 0; }
.font-bold { font-weight: 700; }
.text-primary { color: #2563eb; }
```

### Navigation Structure

#### Main Menu:
- Home
- About Dr. Bonakdar
- Services (dropdown)
- Conditions (dropdown)
- Locations (dropdown)
- Contact
- Schedule Appointment (CTA button)

#### Services Dropdown:
- Dry Eye Treatment
- Keratoconus & Scleral Lenses
- Myopia Control
- Orthokeratology
- Comprehensive Exams
- View All Services

#### Conditions Dropdown:
- Dry Eye Syndrome
- Keratoconus
- Computer Vision Syndrome
- Floaters & Flashes
- Blepharitis
- View All Conditions

#### Locations Dropdown:
- Newport Beach
- Irvine
- Costa Mesa
- Tustin
- Orange County Areas
- View All Locations

### Content Population Instructions

#### For Each Service Location Page:
1. Create page with URL: `/services/[service]/[location]`
2. Apply "Service Location Page Layout" template
3. Populate with location-specific content
4. Add local keywords and landmarks
5. Include driving directions
6. Add schema markup for LocalBusiness

#### For Each Condition Page:
1. Create page with URL: `/conditions/[condition]`
2. Apply "Medical Condition Page Layout" template
3. Add medical authority content
4. Include treatment information
5. Add doctor credentials
6. Include schema markup for MedicalCondition

#### For Each Neighborhood Page:
1. Create page with URL: `/locations/[neighborhood]`
2. Apply "Neighborhood Page Layout" template
3. Add location-specific references
4. Include local landmarks and directions
5. Add area demographics and service info

### Image Requirements
- Professional headshot of Dr. Bonakdar
- Modern medical equipment photos
- Clean, bright office interior shots
- Orange County landmark references
- Eye care procedure imagery
- Patient testimonial photos (with permission)
- Stock medical imagery (high quality)

### Performance Optimization
- Optimize all images for web (WebP format)
- Implement lazy loading for images
- Minimize CSS and JavaScript
- Use Webflow's built-in CDN
- Compress and optimize assets
- Target page load times under 3 seconds

### SEO Implementation
- Unique title tags for each page
- Meta descriptions with phone number
- H1-H6 heading hierarchy
- Alt text for all images
- Internal linking structure
- Schema markup implementation
- XML sitemap generation
- Clean URL structure

## Quality Assurance
Before marking any page complete:
- [ ] Layout template properly applied
- [ ] All components present and functional
- [ ] Responsive design tested on all breakpoints
- [ ] SEO title and meta description set
- [ ] All required H1/H2/H3 headings present
- [ ] Primary and secondary keywords naturally integrated
- [ ] Contact information and CTA present
- [ ] Mobile responsive design verified
- [ ] Page loads under 3 seconds
- [ ] Internal links to related services/conditions
- [ ] Schema markup implemented
- [ ] Brand colors and styling applied
- [ ] Navigation working properly