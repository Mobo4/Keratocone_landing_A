# Dr. Bonakdar Optometry - React Components Catalog

## 📋 COMPLETE COMPONENT INVENTORY FOR WEBFLOW MIGRATION

### 🏠 PAGE COMPONENTS (Primary Content Sources)

#### Core Information Pages
1. **Index.tsx** - Homepage
   - Hero section with appointment booking CTA
   - Services overview grid with icons
   - About section with Dr. Bonakdar introduction
   - Conditions treated highlights
   - Trust signals and credentials
   - Location and contact information

2. **AboutPage.tsx** - Practice Information
   - Dr. Bonakdar biography and credentials
   - Practice philosophy and patient care approach
   - Technology and equipment highlights
   - Community involvement
   - Staff introductions

3. **ContactPage.tsx** - Contact and Booking
   - Primary contact form for appointments
   - Phone numbers and email addresses
   - Emergency contact information
   - Insurance acceptance details
   - New patient requirements

4. **LocationsPage.tsx** - Practice Locations
   - Multiple office locations with addresses
   - Office hours and appointment availability
   - Services offered at each location
   - Parking and accessibility information
   - Map integration and directions

#### Medical Condition Pages (Core Content)
5. **KeratoconusPage.tsx** - Keratoconus Treatment
   - Condition overview and symptoms
   - Treatment options (cross-linking, specialty lenses)
   - Process and what to expect
   - FAQ section and patient education

6. **DryEyePage.tsx** - Dry Eye Syndrome
   - Comprehensive condition information
   - Symptoms and severity assessment
   - Treatment modalities (IPL, artificial tears)
   - Chronic management strategies

7. **LasikPage.tsx** - LASIK Surgery
   - Procedure overview and benefits
   - Candidacy assessment criteria
   - Pre/post-operative care
   - Technology and safety information

8. **CataractPage.tsx** - Cataract Treatment
   - Condition development and symptoms
   - Surgical options and lens types
   - Recovery timeline and expectations
   - Insurance coverage information

9. **OrthoKPage.tsx** - Orthokeratology
   - Overnight vision correction process
   - Candidacy and fitting process
   - Follow-up care requirements
   - Myopia control benefits

10. **HeadacheEyeFatiguePage.tsx** - Headache Treatment
    - Vision-related headache causes
    - Digital eye strain solutions
    - Treatment approaches
    - Workplace ergonomics

#### Service Pages
11. **ServicesPage.tsx** - General Eye Care
    - Comprehensive eye exams
    - Contact lens fitting
    - Emergency eye care
    - Pediatric and senior care

12. **EyewearPage.tsx** - Eyewear Services
    - Prescription glasses and lenses
    - Contact lens types and fitting
    - Specialty lenses for conditions
    - Care and maintenance

13. **FashionPage.tsx** - Fashion Eyewear
    - Designer frame collections
    - Style consultation services
    - Seasonal trends
    - Sunglasses and UV protection

#### Special Function Pages
14. **AdminToolsPage.tsx** - Administrative Interface
    - Content management utilities
    - Image generation tools
    - QR code generation
    - SEO optimization helpers

15. **KeratoconusLandingPage.tsx** - Referral Landing
    - Specialized keratoconus patient referrals
    - Targeted messaging for referrals
    - Streamlined appointment booking

16. **KeratoconusQRCodePage.tsx** - QR Code Interface
    - QR code generation for patient referrals
    - Quick access to keratoconus information
    - Mobile-optimized patient resources

#### Geographic and Error Pages
17. **CityPage.tsx** - City-Specific Content
    - Local market targeting
    - Geographic service customization
    - City-specific SEO optimization

18. **NonLocalPage.tsx** - Non-Local Patients
    - Information for out-of-area patients
    - Referral resources and options
    - Travel and accommodation guidance

19. **OutOfServiceArea.tsx** - Service Area Boundaries
    - Service area limitation messaging
    - Alternative provider referrals
    - Contact for special circumstances

20. **NotFound.tsx** - 404 Error Page
    - User-friendly error messaging
    - Navigation back to main content
    - Search and contact options

---

### 🧩 REUSABLE UI COMPONENTS

#### Medical Condition Components
1. **CataractResults.tsx** - Treatment Outcomes
   - Before/after information
   - Success rates and patient testimonials
   - Long-term benefits and expectations

2. **CataractDiagnostics.tsx** - Diagnostic Procedures
   - Advanced diagnostic technology
   - Testing procedures and what to expect
   - Preparation instructions

#### Interactive Elements
3. **ConfettiCelebration.tsx** - User Engagement
   - Celebration animations for form submissions
   - Success state visual feedback
   - Patient milestone celebrations

4. **MobileStickyCallBar.tsx** - Mobile CTA
   - Persistent mobile call-to-action
   - One-tap phone calling functionality
   - Mobile-optimized appointment booking

#### Specialized Components (Multiple Condition-Specific)
5. **Keratoconus Components** (Directory: `/src/components/keratoconus/`)
   - Treatment-specific information modules
   - Patient education resources
   - Referral and booking interfaces

6. **Dry Eye Components** (Directory: `/src/components/dry-eye/`)
   - Symptom assessment tools
   - Treatment option comparisons
   - Lifestyle modification guides

7. **LASIK Components** (Directory: `/src/components/lasik/`)
   - Candidacy assessment interfaces
   - Procedure explanation modules
   - Pre/post-operative care guides

8. **Appointment Components** (Directory: `/src/components/appointment/`)
   - Booking form interfaces
   - Calendar integration elements
   - Confirmation and reminder systems

9. **Admin Components** (Directory: `/src/components/admin/`)
   - Content management interfaces
   - Analytics and reporting tools
   - Quality assurance utilities

---

### 🔧 UTILITY AND INFRASTRUCTURE COMPONENTS

#### Context Providers
1. **LanguageContext.tsx** - Internationalization
   - Language switching functionality
   - Translation state management
   - URL-based language detection

#### Utility Functions (Non-Visual)
2. **schemaMarkupGenerator.ts** - SEO Schema
   - Medical practice schema generation
   - Local business markup
   - Condition-specific structured data

3. **emailProtection.ts** - Security
   - Email address obfuscation
   - Anti-spam protection measures
   - Secure contact form handling

4. **rateLimiter.ts** - Performance
   - API rate limiting functionality
   - Abuse prevention measures
   - Resource protection

5. **secureStorage.ts** - Data Security
   - Secure client-side storage
   - Sensitive data handling
   - Privacy protection measures

6. **csrfProtection.ts** - Security
   - Cross-site request forgery protection
   - Form security validation
   - Request authentication

7. **securityHeaders.ts** - HTTP Security
   - Security header implementation
   - Content Security Policy
   - HTTPS enforcement

8. **inputSanitizer.ts** - Data Validation
   - User input sanitization
   - XSS prevention
   - Data integrity validation

9. **formValidation.ts** - Form Security
   - Client-side form validation
   - Data format verification
   - Error handling and feedback

10. **utmUtils.ts** - Analytics
    - UTM parameter handling
    - Campaign tracking
    - Marketing attribution

11. **accessibilityHelpers.ts** - Accessibility
    - WCAG compliance utilities
    - Screen reader optimizations
    - Keyboard navigation support

12. **translationVerifier.ts** - Internationalization
    - Translation file validation
    - Completeness checking
    - Quality assurance for multilingual content

13. **security.ts** - General Security
    - Comprehensive security utilities
    - Threat prevention measures
    - Secure coding patterns

14. **contentTracker.ts** - Analytics
    - Content performance tracking
    - User engagement metrics
    - Conversion optimization data

---

### 📱 RESPONSIVE AND MOBILE COMPONENTS

#### UI Framework Components (shadcn/ui)
Located in `/src/components/ui/`:
- Button variants and states
- Form controls and inputs
- Navigation and menu components
- Modal and dialog systems
- Card and layout components
- Typography and text elements

These components provide the design system foundation that must be replicated in Webflow's design system.

---

### 🌐 INTERNATIONALIZATION ASSETS

#### Translation Files
1. **English Translations** (`/src/i18n/locales/en.json`)
   - All page content and UI text
   - Medical terminology and explanations
   - Form labels and error messages
   - Navigation and menu items

2. **Spanish Translations** (`/src/i18n/locales/es.json`)
   - Complete Spanish language content
   - Medical condition translations
   - Cultural adaptations for Hispanic patients
   - Local market messaging

#### i18n Configuration
3. **i18n Setup** (`/src/i18n/`)
   - Language detection logic
   - Route-based language switching
   - Translation loading and caching
   - Fallback handling

---

### 🔄 MIGRATION PRIORITY MATRIX

#### Priority 1: Core Content Pages (Immediate Migration)
- Homepage (Index.tsx)
- All Medical Condition Pages (6 pages)
- About, Contact, Locations, Services

#### Priority 2: Supporting Features (Phase 2)
- Eyewear and Fashion pages
- Multilingual content and routing
- SEO utilities and schema markup

#### Priority 3: Administrative Features (Final Phase)
- Admin tools and content management
- Geographic controls and error pages
- Analytics and tracking utilities

#### Priority 4: Advanced Interactivity (Post-Launch)
- Animation and celebration components
- Advanced form validation
- Performance optimization utilities

---

### 🚀 WEBFLOW COMPONENT MAPPING STRATEGY

#### Static Content → Webflow Pages
- All page components become Webflow page templates
- Content extracted to CMS collections where applicable
- SEO metadata migrated to Webflow page settings

#### Reusable Elements → Webflow Symbols
- UI components become Webflow symbols
- Consistent design elements across pages
- Mobile-responsive component library

#### Dynamic Content → CMS Collections
- Medical conditions become CMS items
- Services and locations as collection items
- Staff information and testimonials

#### Functionality → Webflow Integrations
- Forms become Webflow native forms
- Analytics via Google Analytics integration
- Security features via Webflow hosting security

This comprehensive catalog ensures no content or functionality is lost during the migration process while providing clear mapping between React components and Webflow equivalents.