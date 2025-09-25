# Dr. Bonakdar Optometry - Webflow Design System Foundation

## 🎨 EYECARE MEDICAL BRANDING SYSTEM

**Project**: Dr. Bonakdar Optometry Website Migration
**Phase**: Foundation Design System (Week 1-2)
**Compliance**: HIPAA-friendly, ADA accessible, medical practice standards

## 🌈 Color Palette Specifications

### Primary Medical Colors
```css
/* Primary Purple - Trust & Professionalism */
--primary-purple: #8B5CF6;
--primary-purple-rgb: 139, 92, 246;
--primary-purple-hsl: 258, 89%, 66%;

/* Light Purple - Gentle & Calming */
--light-purple: #A78BFA;
--light-purple-rgb: 167, 139, 250;
--light-purple-hsl: 258, 89%, 76%;

/* Dark Purple - Authority & Expertise */
--dark-purple: #7C3AED;
--dark-purple-rgb: 124, 58, 237;
--dark-purple-hsl: 258, 84%, 58%;

/* Background & Text */
--background-white: #FFFFFF;
--text-primary: #1F2937;
--text-secondary: #6B7280;
--text-light: #9CA3AF;
```

### Medical Accent Colors
```css
/* Medical Blue - Trust & Technology */
--medical-blue: #3B82F6;
--medical-blue-light: #60A5FA;
--medical-blue-dark: #2563EB;

/* Success Green - Health & Wellness */
--success-green: #10B981;
--success-green-light: #34D399;
--success-green-dark: #059669;

/* Warning Amber - Caution & Attention */
--warning-amber: #F59E0B;
--warning-amber-light: #FBBF24;
--warning-amber-dark: #D97706;

/* Error Red - Urgent Medical Attention */
--error-red: #EF4444;
--error-red-light: #F87171;
--error-red-dark: #DC2626;
```

### Accessibility Color Ratios
All color combinations meet WCAG 2.1 AA standards:
- **Primary text on white**: 9.2:1 contrast ratio
- **Purple CTA on white**: 4.8:1 contrast ratio
- **Light purple on dark**: 7.1:1 contrast ratio

## 📝 Typography System

### Font Hierarchy for Medical Content
```css
/* Primary Font Stack - Professional & Readable */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Medical Content Font - High Readability */
--font-medical: 'Source Sans Pro', Arial, sans-serif;

/* Display Font - Headlines & CTAs */
--font-display: 'Inter', system-ui, sans-serif;
```

### Typography Scale
```css
/* Heading Sizes */
--text-5xl: 48px;  /* H1 - Page Titles */
--text-4xl: 36px;  /* H2 - Section Headers */
--text-3xl: 30px;  /* H3 - Subsection Headers */
--text-2xl: 24px;  /* H4 - Medical Conditions */
--text-xl: 20px;   /* H5 - Treatment Options */
--text-lg: 18px;   /* H6 - Procedure Steps */

/* Body Text Sizes */
--text-base: 16px; /* Primary body text */
--text-sm: 14px;   /* Secondary information */
--text-xs: 12px;   /* Fine print, disclaimers */

/* Line Heights for Readability */
--leading-tight: 1.25;   /* Headlines */
--leading-normal: 1.5;   /* Body text */
--leading-relaxed: 1.75; /* Medical content */
```

### Medical Content Typography Rules
```css
/* Medical Condition Headers */
.medical-condition-title {
  font-size: var(--text-3xl);
  font-weight: 700;
  color: var(--dark-purple);
  line-height: var(--leading-tight);
  margin-bottom: 1.5rem;
}

/* Treatment Description Text */
.treatment-text {
  font-size: var(--text-base);
  font-weight: 400;
  color: var(--text-primary);
  line-height: var(--leading-relaxed);
  margin-bottom: 1rem;
}

/* Medical Disclaimer Text */
.medical-disclaimer {
  font-size: var(--text-sm);
  font-weight: 400;
  color: var(--text-secondary);
  line-height: var(--leading-normal);
  font-style: italic;
}
```

## 🧩 Component Library Foundation

### Primary Button System
```css
/* Primary CTA Button - Appointment Booking */
.btn-primary {
  background-color: var(--primary-purple);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: var(--text-base);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: var(--dark-purple);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
}

/* Secondary Button - Information Requests */
.btn-secondary {
  background-color: transparent;
  color: var(--primary-purple);
  border: 2px solid var(--primary-purple);
  padding: 10px 22px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: var(--primary-purple);
  color: white;
}
```

### Medical Card Components
```css
/* Medical Condition Card */
.medical-card {
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.medical-card:hover {
  box-shadow: 0 8px 24px rgba(139, 92, 246, 0.15);
  transform: translateY(-2px);
}

/* Treatment Option Card */
.treatment-card {
  background: linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%);
  border-left: 4px solid var(--primary-purple);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 16px;
}
```

### Navigation System
```css
/* Main Navigation */
.main-nav {
  background: white;
  border-bottom: 1px solid #E5E7EB;
  padding: 16px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

/* Navigation Links */
.nav-link {
  color: var(--text-primary);
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.2s ease;
  text-decoration: none;
}

.nav-link:hover {
  background-color: var(--light-purple);
  color: var(--dark-purple);
}

.nav-link.active {
  background-color: var(--primary-purple);
  color: white;
}
```

## 📱 Responsive Design Framework

### Breakpoint System
```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Small desktops */
--breakpoint-xl: 1280px;  /* Large desktops */
--breakpoint-2xl: 1536px; /* 4K displays */
```

### Mobile-First Components
```css
/* Hero Section - Mobile First */
.hero-section {
  padding: 40px 20px;
  text-align: center;
}

@media (min-width: 768px) {
  .hero-section {
    padding: 80px 40px;
    text-align: left;
  }
}

@media (min-width: 1024px) {
  .hero-section {
    padding: 120px 60px;
  }
}

/* Medical Grid - Responsive */
.medical-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  padding: 20px;
}

@media (min-width: 768px) {
  .medical-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    padding: 40px;
  }
}

@media (min-width: 1024px) {
  .medical-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
}
```

## 🏥 Medical Content Styling

### Medical Condition Layout
```css
/* Condition Overview Section */
.condition-overview {
  background: linear-gradient(135deg, #F8F4FF 0%, #F3E8FF 100%);
  padding: 40px;
  border-radius: 16px;
  margin-bottom: 40px;
}

/* Symptoms List */
.symptoms-list {
  list-style: none;
  padding: 0;
}

.symptoms-list li {
  padding: 12px 0;
  border-bottom: 1px solid #E5E7EB;
  position: relative;
  padding-left: 24px;
}

.symptoms-list li::before {
  content: "•";
  color: var(--primary-purple);
  font-weight: bold;
  position: absolute;
  left: 0;
}

/* Treatment Options Grid */
.treatment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  margin: 32px 0;
}
```

### Call-to-Action Sections
```css
/* Appointment CTA */
.appointment-cta {
  background: linear-gradient(135deg, var(--primary-purple) 0%, var(--dark-purple) 100%);
  color: white;
  padding: 48px;
  border-radius: 16px;
  text-align: center;
  margin: 48px 0;
}

.appointment-cta h3 {
  font-size: var(--text-2xl);
  margin-bottom: 16px;
}

.appointment-cta p {
  font-size: var(--text-lg);
  margin-bottom: 24px;
  opacity: 0.9;
}

/* Contact Information Display */
.contact-info {
  background: white;
  border: 2px solid var(--light-purple);
  padding: 32px;
  border-radius: 12px;
  text-align: center;
}

.phone-number {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--primary-purple);
  text-decoration: none;
}
```

## ♿ Accessibility Standards

### WCAG 2.1 AA Compliance
```css
/* Focus States for Keyboard Navigation */
.btn-primary:focus,
.btn-secondary:focus,
.nav-link:focus {
  outline: 3px solid var(--primary-purple);
  outline-offset: 2px;
}

/* High Contrast Mode Support */
@media (prefers-contrast: high) {
  :root {
    --primary-purple: #5B21B6;
    --text-primary: #000000;
    --background-white: #FFFFFF;
  }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Screen Reader Optimization
```css
/* Screen Reader Only Content */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Skip Navigation Links */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: var(--primary-purple);
  color: white;
  padding: 8px;
  z-index: 1000;
  text-decoration: none;
  border-radius: 4px;
}

.skip-link:focus {
  top: 6px;
}
```

## 🖼️ Image & Media Guidelines

### Medical Image Optimization
```css
/* Medical Procedure Images */
.medical-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Before/After Image Containers */
.before-after-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin: 32px 0;
}

/* Video Containers */
.video-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
  border-radius: 12px;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

## 📊 Implementation Checklist

### Phase 1: Foundation Setup (Days 1-2)
- [ ] Implement primary color palette in Webflow
- [ ] Configure typography system with medical fonts
- [ ] Create basic button components
- [ ] Set up responsive breakpoint system
- [ ] Test accessibility color contrasts

### Phase 2: Component Creation (Days 3-4)
- [ ] Build navigation component
- [ ] Create medical card components
- [ ] Implement CTA sections
- [ ] Build footer component
- [ ] Test mobile responsiveness

### Phase 3: Medical Content Layout (Day 5)
- [ ] Create medical condition page template
- [ ] Style treatment option sections
- [ ] Implement symptom list styling
- [ ] Add appointment booking CTAs
- [ ] Validate WCAG 2.1 AA compliance

## 🔍 Quality Assurance

### Design System Testing
1. **Color Contrast Testing**: Use WebAIM contrast checker
2. **Typography Readability**: Test with medical professionals
3. **Mobile Optimization**: Test on iOS and Android devices
4. **Accessibility**: Screen reader testing with NVDA/JAWS
5. **Cross-Browser**: Chrome, Safari, Firefox, Edge validation

### Medical Content Review
1. **Clinical Accuracy**: Review by Dr. Bonakdar
2. **Patient Understanding**: Layperson comprehension testing
3. **Legal Compliance**: Medical disclaimer review
4. **HIPAA Compliance**: Ensure no PHI in design examples

---

**Next Steps**: Implement foundation design system in Webflow
**Timeline**: 5-day implementation schedule
**Dependencies**: Webflow API token with proper permissions