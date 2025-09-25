# Claude Desktop Webflow Implementation Instructions

## 🔑 API Configuration

**Current API Token**: `1b57afb40d7b010bd4174aba0775dea577952a9f73548d56ec2417240ba5d9bd`
**Token Status**: Testing required for permissions
**Generated**: September 20, 2025

## 🎯 Project Overview

**Project Name**: Dr. Bonakdar Optometry Foundation
**Objective**: Migrate React website to Webflow CMS
**Timeline**: 2-week conservative implementation
**Plan Type**: CMS Plan ($23/month annually)

## 🚀 Implementation Steps

### Day 1: Foundation Setup (TODAY)

1. **Verify API Token**:
   - Test sites:list permission
   - Test sites:write permission
   - Test cms:read/write permissions

2. **Create Webflow Site**:
   - Name: "Dr Bonakdar Optometry Foundation"
   - Subdomain: drbonakdar-optometry
   - Plan: CMS (when ready to publish)

3. **Design System Setup**:
   ```css
   Primary Purple: #8B5CF6
   Light Purple: #A78BFA
   Dark Purple: #7C3AED
   Text Primary: #1F2937
   Text Secondary: #6B7280
   Accent Green: #059669
   ```

4. **Typography Hierarchy**:
   - H1: 48px (desktop) / 36px (mobile)
   - H2: 36px (desktop) / 28px (mobile)
   - H3: 24px (desktop) / 20px (mobile)
   - Body: 16px
   - Small: 14px

### Component Creation Order

1. **Navigation Header**:
   - Logo placement
   - Menu items: Home, About, Services, Conditions, Contact
   - Language switcher (EN/ES)
   - Appointment CTA button

2. **Footer Component**:
   - Practice name: Dr. Alexander Bonakdar
   - Address: Santa Ana, CA
   - Phone: Encoded for HIPAA
   - Hours of operation
   - Quick links

3. **Homepage Hero**:
   - Headline: "Advanced Eye Care Solutions"
   - Subheading: "Comprehensive vision care for Orange County families"
   - Primary CTA: "Schedule Appointment"
   - Background: Purple gradient

### CMS Collections Structure

1. **Medical Conditions Collection**:
   - Name (Text)
   - Slug (Slug)
   - Description (Rich Text)
   - Symptoms (Multi-line Text)
   - Treatments (Rich Text)
   - Featured Image (Image)
   - SEO Meta Description (Text)

2. **Services Collection**:
   - Service Name (Text)
   - Slug (Slug)
   - Description (Rich Text)
   - Price Range (Text)
   - Duration (Text)
   - Icon (Image)

3. **Locations Collection**:
   - City Name (Text)
   - Slug (Slug)
   - Address (Text)
   - Phone (Text)
   - Hours (Multi-line Text)
   - Map Embed (HTML)

4. **Insurance Providers Collection**:
   - Provider Name (Text)
   - Logo (Image)
   - Accepted (Boolean)

## 📋 Daily Checklist

### Day 1-2: Foundation
- [ ] Site created in Webflow
- [ ] Design system implemented
- [ ] Basic navigation structure
- [ ] Homepage hero section

### Day 3-4: Core Pages
- [ ] About Dr. Bonakdar page
- [ ] Services overview page
- [ ] Contact page with form
- [ ] Location pages

### Day 5-7: Medical Content
- [ ] Keratoconus page (Priority #1)
- [ ] Dry Eye treatment page
- [ ] LASIK consultation page
- [ ] Cataract care page
- [ ] Ortho-K page

### Day 8-10: CMS Setup
- [ ] Create all CMS collections
- [ ] Add sample content
- [ ] Set up dynamic pages
- [ ] Configure form submissions

### Day 11-13: Optimization
- [ ] SEO meta tags
- [ ] Mobile responsiveness
- [ ] Performance optimization
- [ ] Cross-browser testing

### Day 14: Launch Prep
- [ ] Dr. Bonakdar content review
- [ ] Staff training documentation
- [ ] Backup procedures
- [ ] Go-live checklist

## 🚨 Critical Requirements

1. **HIPAA Compliance**:
   - No patient data in forms
   - Secure contact methods
   - Privacy policy visible
   - Encrypted submissions

2. **Medical Accuracy**:
   - Dr. Bonakdar approval required
   - Professional medical terminology
   - Evidence-based content
   - Clear disclaimers

3. **SEO Preservation**:
   - Maintain URL structure
   - Preserve meta descriptions
   - Keep keyword targeting
   - 301 redirects ready

4. **Bilingual Support**:
   - English pages complete
   - Spanish translations ready
   - Language switcher functional
   - SEO for both languages

## 🛠️ MCP Tools Available

1. **Webflow Tools**:
   - sites_list
   - sites_get
   - sites_publish
   - collections_list
   - collections_create
   - collections_items_create_item_live
   - components_list
   - pages_list

2. **Filesystem Tools**:
   - read_file
   - write_file
   - list_directory
   - create_directory

3. **Memory Tools**:
   - create_entities
   - add_observations
   - read_graph

## 📊 Success Metrics

- **Performance**: ≤ 3 second load time
- **Accessibility**: WCAG 2.1 AA compliant
- **Mobile**: 100% responsive
- **SEO**: Zero ranking loss
- **Forms**: 100% submission success
- **Content**: Dr. Bonakdar approved

## 🔄 Daily Progress Tracking

Each day, create a progress report in:
`/backup/daily_progress_[DATE].md`

Include:
- Tasks completed
- Issues encountered
- Next day priorities
- Screenshots if applicable
- Time spent

## 📱 Contact & Support

**Project Lead**: Alex
**Location**: /Users/alex/Documents/Documents - MacMiniM4/VSCode_Apps/bonakdar_net_Lovable/bonakdar_webflow/
**Documentation**: /docs/ folder
**Backup**: /backup/ folder

---

**Last Updated**: September 20, 2025
**Status**: Ready for Implementation
**Next Step**: Verify API token and begin site creation
