# CLAUDE.md - KERATOCONUS SPECIALIST WEBSITE

## 🎯 PROJECT MISSION
**ORANGE COUNTY KERATOCONUS MARKET DOMINANCE**

Create a hyper-targeted landing website that dominates affluent Orange County communities for keratoconus treatment, generating high-intent patient inquiries through email-triggered appointment workflows.

## 🏥 PROJECT OVERVIEW

### Target Market
- **Geographic Focus**: 30-mile radius from 92705 (Irvine)
- **Demographics**: Affluent ZIP codes with >$150K household income
- **Condition Focus**: Keratoconus treatment and scleral lens specialization
- **Revenue Target**: $500K+ annual attribution

### Core Objectives
1. **SEO Dominance**: Top 3 rankings for 50+ keratoconus keywords per affluent city
2. **Lead Generation**: 200+ qualified email inquiries per month
3. **Conversion Optimization**: >5% form completion rate
4. **Technical Performance**: <2 second load times, 95+ mobile score

## 🎯 KILLER KEYWORD STRATEGY

### PRIMARY HIGH-VALUE KEYWORDS
```
Target Keywords (Highest Revenue Potential):
- "keratoconus specialist Newport Beach" (300 searches/month)
- "scleral lens specialist Orange County" (250 searches/month)
- "keratoconus treatment Irvine" (200 searches/month)
- "corneal crosslinking near me" (180 searches/month)
- "keratoconus doctor Orange County" (150 searches/month)
```

### LONG-TAIL DOMINANCE (Lower Competition)
```
Conversion-Focused Keywords:
- "best keratoconus doctor Newport Beach"
- "keratoconus specialist who accepts insurance"
- "scleral lens fitting specialist Orange County"
- "keratoconus treatment without surgery"
- "keratoconus specialist near [affluent neighborhood]"
```

### AFFLUENT CITY TARGETING
```
Primary Cities (Tier 1 - Ultra Affluent):
- Newport Beach (92660, 92661, 92662, 92663)
- Laguna Beach (92651, 92652, 92653, 92654, 92656, 92677)
- Manhattan Beach (90266)
- Beverly Hills (90210, 90211, 90212)
- Palos Verdes (90274, 90275)
- Rolling Hills Estates (90274)

Secondary Cities (Tier 2 - Highly Affluent):
- Irvine (92602, 92603, 92604, 92606, 92612, 92614, 92617, 92618, 92620)
- Mission Viejo (92691, 92692, 92694)
- Aliso Viejo (92656)
- Laguna Hills (92653)
- Dana Point (92629)
- San Clemente (92672, 92673, 92674)
```

## 🏗️ TECHNICAL ARCHITECTURE

### Development Server
- `npm run dev` - Start development server on port 8081
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality checks

### Base Technology Stack
- **Framework**: React 18 + TypeScript + Vite
- **UI Library**: shadcn/ui (Radix UI components)
- **Styling**: Tailwind CSS with custom keratoconus branding
- **SEO**: React Helmet for meta optimization
- **Forms**: React Hook Form with email integration

### Keratoconus-Specific Customizations
- **Color Palette**: Medical blue/teal theme for trust and expertise
- **Content Focus**: Keratoconus education, scleral lens benefits, treatment options
- **Hero Section**: Condition-specific messaging and location targeting
- **Footer**: Affluent city links and keratoconus-specific keywords

## 📧 EMAIL-BASED APPOINTMENT WORKFLOW

### HIPAA-Compliant Contact System
```javascript
// No PHI stored locally - direct email submission
const keratoconusAppointmentForm = {
  emailRecipient: "appointments@eyecarecenteroc.com",
  subject: "Keratoconus Consultation Request",
  emailBody: `
    Patient Interest: Keratoconus Treatment
    Preferred Contact: ${phone}
    Location Preference: ${city}
    Insurance: ${insurance}
    Symptoms: ${symptoms}
    Message: ${message}
    Source: Keratoconus Specialist Website
    Landing Page: ${currentUrl}
  `,
  // Encrypted transmission only
  encryption: 'TLS 1.3',
  // No database storage
  storage: 'none'
};
```

### Conversion Optimization
- **Form Placement**: Above-the-fold and floating contact button
- **Trust Signals**: Doctor credentials, patient testimonials, insurance acceptance
- **Urgency Elements**: "Schedule Your Keratoconus Evaluation Today"
- **Location Relevance**: City-specific contact information

## 🎨 DESIGN & BRANDING

### Visual Identity
- **Primary Colors**: Medical blue (#2563eb), Trust teal (#0891b2)
- **Typography**: Professional fonts for medical authority
- **Imagery**: Keratoconus-specific diagrams, scleral lens photos
- **Layout**: Clean, medical website aesthetic

### Content Strategy
- **Hero Message**: "Orange County's Leading Keratoconus Specialist"
- **Value Proposition**: Advanced scleral lens fitting, latest treatments
- **Social Proof**: Patient success stories, before/after vision improvements
- **Education**: Keratoconus causes, symptoms, treatment options

## 🔍 SEO OPTIMIZATION STRATEGY

### On-Page SEO
- **Title Tags**: "Keratoconus Specialist [City] | Dr. Bonakdar | Advanced Treatment"
- **Meta Descriptions**: Condition-specific benefits and location targeting
- **H1 Tags**: "Leading Keratoconus Treatment in [Affluent City]"
- **Schema Markup**: Medical practice, doctor, condition-specific structured data

### Content Marketing
- **Landing Pages**: One page per affluent city with keratoconus focus
- **Educational Content**: Keratoconus FAQs, treatment comparisons
- **Local SEO**: Google My Business optimization for keratoconus keywords
- **Link Building**: Medical directory submissions, keratoconus resources

## 📊 SUCCESS METRICS & TRACKING

### Primary KPIs
- **Organic Traffic**: 10,000+ monthly visits within 90 days
- **Keyword Rankings**: Top 3 for 50+ keratoconus terms per city
- **Lead Generation**: 200+ qualified emails per month
- **Conversion Rate**: >5% form completion rate

### Technical Metrics
- **Page Speed**: <2 seconds (WebPageTest validation)
- **Mobile Performance**: 95+ PageSpeed score
- **Uptime**: 99.9% availability
- **Security**: 100% HIPAA compliance

### Business Metrics
- **Appointment Conversion**: >30% of emails convert to appointments
- **Revenue Attribution**: $500K+ annual via UTM tracking
- **Patient Lifetime Value**: Premium keratoconus patients
- **ROI**: 400%+ within 12 months

## 🚀 DEVELOPMENT WORKFLOW

### Phase 1: Foundation (Current)
- [x] Base codebase copied from eyecarecenteroc_website
- [x] Project configuration customized for keratoconus
- [ ] Keratoconus-specific content integration
- [ ] Email appointment workflow implementation

### Phase 2: Optimization
- [ ] Affluent city landing pages creation
- [ ] Keratoconus keyword optimization
- [ ] Performance optimization (<2s load times)
- [ ] HIPAA compliance validation

### Phase 3: Launch & Scale
- [ ] Production deployment
- [ ] Google Search Console setup
- [ ] Analytics and conversion tracking
- [ ] Systematic keyword monitoring

## 🛡️ COMPLIANCE & SECURITY

### HIPAA Requirements
- **No PHI Storage**: All patient data via email only
- **Encrypted Transmission**: TLS 1.3 for all communications
- **Access Controls**: No patient data retention
- **Audit Trail**: Email communication logging only

### Security Measures
- **Form Validation**: Client and server-side validation
- **Rate Limiting**: Prevent spam submissions
- **Content Security Policy**: XSS protection
- **Input Sanitization**: All form data cleaned

## 📱 MOBILE OPTIMIZATION

### Responsive Design
- **Mobile-First**: Optimized for affluent mobile users
- **Touch Optimization**: Large, accessible form controls
- **Speed**: <2 second load times on mobile
- **Usability**: 95+ mobile PageSpeed score

### Call-to-Action Optimization
- **Floating Contact**: Always-visible appointment button
- **Click-to-Call**: Direct phone number links
- **Location-Based**: City-specific contact preferences
- **Emergency**: Urgent keratoconus consultation options

---

## 🎯 NEXT ACTIONS

1. **Immediate**: Customize hero section for keratoconus messaging
2. **Day 1**: Implement email appointment workflow
3. **Week 1**: Create affluent city landing pages
4. **Week 2**: Optimize for keratoconus keywords
5. **Week 3**: Performance optimization and HIPAA validation
6. **Week 4**: Launch and begin SEO dominance campaign

**GOAL**: Make the phones ring with high-intent keratoconus patients from Orange County's most affluent communities!