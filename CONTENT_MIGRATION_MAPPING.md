# Dr. Bonakdar Optometry - Content Migration Mapping

## 📋 REACT TO WEBFLOW CONTENT MAPPING

### 🏠 HOMEPAGE CONTENT (Index.tsx)
**Source**: `/src/pages/Index.tsx`
**Webflow Target**: Homepage template
**Content Elements**:
- Hero section with primary CTA and value proposition
- Services overview grid with icons and descriptions
- About Dr. Bonakdar introduction and credentials
- Conditions treated highlights with links to detail pages
- Trust signals (insurance acceptance, credentials, reviews)
- Location and contact information section
- Appointment booking call-to-action

**SEO Elements to Preserve**:
- Primary title tag and meta description
- H1 tag structure and keyword optimization
- Local business schema markup
- Geographic targeting keywords (Orange County, Santa Ana, Irvine)

---

### 🏥 MEDICAL CONDITIONS CONTENT

#### 1. Keratoconus (KeratoconusPage.tsx)
**Source**: `/src/pages/KeratoconusPage.tsx`
**Webflow Target**: Medical Conditions CMS → Keratoconus Item
**Content Structure**:
- **Hero Section**: Condition name, summary, key benefits
- **Symptoms Section**: What patients experience, when to seek treatment
- **Treatment Options**: Corneal cross-linking, specialty contact lenses, surgical options
- **Process Section**: What to expect during treatment
- **FAQ Section**: Common patient questions and answers
- **CTA Section**: Schedule consultation and contact information

**Special Features**:
- Referral landing page integration (`KeratoconusLandingPage.tsx`)
- QR code generation for patient referrals (`KeratoconusQRCodePage.tsx`)
- Advanced diagnostics and treatment technology information

#### 2. Dry Eye (DryEyePage.tsx)
**Source**: `/src/pages/DryEyePage.tsx`
**Webflow Target**: Medical Conditions CMS → Dry Eye Item
**Content Structure**:
- Comprehensive dry eye syndrome information
- Symptoms identification and severity assessment
- Treatment options: artificial tears, IPL therapy, lifestyle modifications
- Chronic condition management strategies
- Prevention and maintenance recommendations

#### 3. LASIK Surgery (LasikPage.tsx)
**Source**: `/src/pages/LasikPage.tsx`
**Webflow Target**: Medical Conditions CMS → LASIK Item
**Content Structure**:
- LASIK procedure overview and benefits
- Candidacy assessment criteria
- Pre-operative and post-operative care instructions
- Technology and safety information
- Cost and financing options

#### 4. Cataract Treatment (CataractPage.tsx)
**Source**: `/src/pages/CataractPage.tsx`
**Webflow Target**: Medical Conditions CMS → Cataract Item
**Content Structure**:
- Cataract development and symptoms
- Surgical treatment options and lens types
- Recovery timeline and expectations
- Advanced technology lenses (premium IOLs)
- Insurance coverage and payment options

**Related Components**:
- `CataractResults.tsx` - Treatment outcome information
- `CataractDiagnostics.tsx` - Diagnostic procedures and technology

#### 5. Orthokeratology (OrthoKPage.tsx)
**Source**: `/src/pages/OrthoKPage.tsx`
**Webflow Target**: Medical Conditions CMS → Ortho-K Item
**Content Structure**:
- Orthokeratology process and benefits
- Candidacy for overnight vision correction
- Fitting process and follow-up care
- Comparison with other myopia control methods
- Long-term outcomes and safety

#### 6. Headache/Eye Fatigue (HeadacheEyeFatiguePage.tsx)
**Source**: `/src/pages/HeadacheEyeFatiguePage.tsx`
**Webflow Target**: Medical Conditions CMS → Headache Treatment Item
**Content Structure**:
- Connection between vision problems and headaches
- Digital eye strain and computer vision syndrome
- Treatment approaches and lifestyle modifications
- Prescription lens solutions for eye fatigue
- Workspace ergonomics recommendations

---

### 🔧 SERVICE PAGES CONTENT

#### 1. General Services (ServicesPage.tsx)
**Source**: `/src/pages/ServicesPage.tsx`
**Webflow Target**: Services CMS Collection
**Content Elements**:
- Comprehensive eye exams and vision testing
- Contact lens fitting and specialty lenses
- Glasses prescription and frame selection
- Emergency eye care and urgent consultations
- Pediatric eye care and vision development
- Senior eye health and age-related conditions

#### 2. Eyewear Services (EyewearPage.tsx)
**Source**: `/src/pages/EyewearPage.tsx`
**Webflow Target**: Services CMS → Eyewear Item
**Content Structure**:
- Prescription glasses and lens options
- Contact lens types and fitting services
- Specialty lenses for specific conditions
- Insurance coverage and frame warranties
- Care and maintenance instructions

#### 3. Fashion Eyewear (FashionPage.tsx)
**Source**: `/src/pages/FashionPage.tsx`
**Webflow Target**: Services CMS → Fashion Eyewear Item
**Content Structure**:
- Designer frame collections and brands
- Style consultation and fitting services
- Seasonal trends and fashion recommendations
- Custom frame modifications and adjustments
- Sunglasses and UV protection options

---

### 📍 LOCATION AND CONTACT CONTENT

#### 1. Practice Locations (LocationsPage.tsx)
**Source**: `/src/pages/LocationsPage.tsx`
**Webflow Target**: Locations CMS Collection
**Content Elements per Location**:
- Practice address and contact information
- Office hours and appointment availability
- Services offered at each location
- Parking information and accessibility features
- Map integration and driving directions
- Staff members and specialties available

#### 2. Contact Information (ContactPage.tsx)
**Source**: `/src/pages/ContactPage.tsx`
**Webflow Target**: Contact Page Template
**Content Structure**:
- Primary contact form for appointment requests
- Phone numbers and email addresses
- Emergency contact information
- Insurance acceptance and payment options
- New patient information and requirements

#### 3. About Practice (AboutPage.tsx)
**Source**: `/src/pages/AboutPage.tsx`
**Webflow Target**: About Page Template + Staff CMS
**Content Elements**:
- Dr. Bonakdar biography and credentials
- Practice philosophy and patient care approach
- Technology and equipment highlights
- Community involvement and professional affiliations
- Staff introductions and specializations

---

### 🛠️ ADMINISTRATIVE FEATURES

#### 1. Admin Tools (AdminToolsPage.tsx)
**Source**: `/src/pages/AdminToolsPage.tsx`
**Webflow Target**: Admin interface or external tools
**Functionality to Replace**:
- Content management utilities
- Image generation and optimization tools
- QR code generation for referrals
- SEO optimization helpers
- Translation verification tools

#### 2. Geographic Controls
**Source**: `CityPage.tsx`, `NonLocalPage.tsx`, `OutOfServiceArea.tsx`
**Webflow Target**: Conditional content or redirects
**Content Purpose**:
- Local market targeting and messaging
- Service area boundaries and limitations
- Non-local patient information and referrals

---

### 🌐 MULTILINGUAL CONTENT MAPPING

#### English Content Structure
**Primary Language**: English (default URLs)
**Translation Source**: `/src/i18n/locales/en.json`
**Target**: Webflow primary content fields

#### Spanish Content Structure
**Secondary Language**: Spanish (`/es/` routes)
**Translation Source**: `/src/i18n/locales/es.json`
**Target**: Webflow secondary site or conditional content

**Key Translation Elements**:
- Navigation menu items and page titles
- Medical condition names and descriptions
- Service offerings and benefits
- Contact forms and call-to-action buttons
- Location information and office hours
- Insurance and payment information

---

### 🔍 SEO CONTENT PRESERVATION

#### Metadata Elements
**Source**: React component head sections
**Target**: Webflow page settings and CMS fields
**Elements to Migrate**:
- Page titles with keyword optimization
- Meta descriptions with local targeting
- Heading tag hierarchy (H1, H2, H3)
- Image alt tags and file names
- Schema markup for medical practice and conditions

#### URL Structure Preservation
**Current Pattern**: `/conditions/keratoconus`, `/services`, `/about`
**Webflow Target**: CMS-generated URLs or custom slugs
**Redirect Strategy**: 301 redirects for any URL pattern changes

#### Content Keywords
**Medical Conditions**: Keratoconus treatment, dry eye syndrome, LASIK surgery, cataract removal
**Geographic Targeting**: Orange County optometrist, Santa Ana eye doctor, Irvine vision care
**Service Keywords**: Eye exams, contact lenses, designer frames, emergency eye care

---

### 📊 CONTENT AUDIT AND QUALITY ASSURANCE

#### Content Completeness Checklist
- [ ] All medical condition information migrated
- [ ] Service descriptions and benefits preserved
- [ ] Location and contact details verified
- [ ] Staff information and credentials updated
- [ ] Insurance and payment information current
- [ ] Emergency contact and hours accurate

#### SEO Validation Checklist
- [ ] All meta titles and descriptions migrated
- [ ] Heading tag structure preserved
- [ ] Image alt tags and file names optimized
- [ ] Schema markup implemented correctly
- [ ] URL redirects tested and functional
- [ ] Local business information consistent

#### Multilingual Quality Assurance
- [ ] English content fully migrated
- [ ] Spanish translations verified and complete
- [ ] Language switching functionality tested
- [ ] Cultural adaptation for Spanish content
- [ ] Contact forms function in both languages

This detailed mapping ensures systematic and complete content migration from the React application to the Webflow CMS while preserving all SEO value and user experience elements.