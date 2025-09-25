# Domain Redirect Strategy - Dr. Bonakdar Eye Care

## Executive Summary

This document outlines the strategic approach for implementing 301 redirects from legacy domains to the primary website (bonakdar.net), maximizing SEO authority consolidation and user experience while preserving valuable search rankings and backlink equity.

## Primary Domain Strategy

### Main Website: bonakdar.net
- **Primary Platform**: React-based eye care website
- **SEO Status**: Optimized with 15,000+ keyword targets
- **Content Architecture**: Comprehensive service×location matrix (271 pages)
- **Technical Foundation**: Modern, fast-loading, mobile-optimized

## Legacy Domains Analysis & Redirect Strategy

### 1. keratocones.com → bonakdar.net

#### Domain Value Assessment
- **Target Condition**: Keratoconus specialty treatment
- **SEO Potential**: High-value medical niche with specific patient needs
- **Business Impact**: Critical specialty service with high conversion potential
- **User Intent**: Direct condition-specific searches

#### Redirect Implementation Strategy
```apache
# Primary keratoconus redirects
Redirect 301 /keratoconus https://bonakdar.net/conditions/keratoconus
Redirect 301 /treatment https://bonakdar.net/conditions/keratoconus
Redirect 301 /specialist https://bonakdar.net/keratoconus-specialist
Redirect 301 /doctor https://bonakdar.net/about
Redirect 301 /contact https://bonakdar.net/contact

# Catch-all for any other pages
Redirect 301 / https://bonakdar.net/conditions/keratoconus
```

#### SEO Benefits
- Transfer domain authority to primary site
- Consolidate keratoconus-related search rankings
- Reduce keyword cannibalization between domains
- Strengthen topical authority for eye conditions

#### User Experience Benefits
- Single, comprehensive information source
- Modern website with better mobile experience
- Integrated appointment booking system
- Multilingual support (English/Spanish)

### 2. eyecarecenterof.com → bonakdar.net

#### Domain Value Assessment
- **Geographic Focus**: "Eye Care Center of" implies location-based services
- **SEO Potential**: Local search authority and geographic rankings
- **Business Impact**: Location-based patient acquisition
- **User Intent**: Local eye care service searches

#### Redirect Implementation Strategy
```apache
# Location-based redirects
Redirect 301 /orange-county https://bonakdar.net/locations/orange-county
Redirect 301 /irvine https://bonakdar.net/locations/irvine
Redirect 301 /newport-beach https://bonakdar.net/locations/newport-beach
Redirect 301 /costa-mesa https://bonakdar.net/locations/costa-mesa

# Service-based redirects
Redirect 301 /services https://bonakdar.net/services
Redirect 301 /eye-exams https://bonakdar.net/services/comprehensive-eye-exams
Redirect 301 /contact-lenses https://bonakdar.net/services/contact-lens-fitting
Redirect 301 /dry-eye https://bonakdar.net/dry-eye-treatment

# Catch-all
Redirect 301 / https://bonakdar.net/locations/orange-county
```

#### SEO Benefits
- Consolidate local search authority
- Transfer geographic relevance signals
- Strengthen "Orange County eye care" rankings
- Reduce multi-domain confusion for search engines

#### Local SEO Strategy
- Implement location-specific landing pages on bonakdar.net
- Transfer Google My Business citations and NAP consistency
- Consolidate local directory listings to primary domain
- Maintain location-specific content architecture

### 3. drbonakdar.com → bonakdar.net

#### Domain Value Assessment
- **Brand Focus**: Direct doctor name recognition
- **SEO Potential**: Personal brand authority and medical credibility
- **Business Impact**: Professional reputation and trust signals
- **User Intent**: Direct doctor-specific searches

#### Redirect Implementation Strategy
```apache
# Doctor-focused redirects
Redirect 301 /about https://bonakdar.net/about
Redirect 301 /biography https://bonakdar.net/about
Redirect 301 /credentials https://bonakdar.net/about
Redirect 301 /experience https://bonakdar.net/about

# Professional content
Redirect 301 /publications https://bonakdar.net/about#publications
Redirect 301 /awards https://bonakdar.net/about#awards
Redirect 301 /education https://bonakdar.net/about#education

# Service redirects
Redirect 301 /services https://bonakdar.net/services
Redirect 301 /specialties https://bonakdar.net/services

# Catch-all
Redirect 301 / https://bonakdar.net/about
```

#### SEO Benefits
- Transfer personal brand authority
- Consolidate doctor name search rankings
- Strengthen E-A-T (Expertise, Authoritativeness, Trustworthiness)
- Reduce brand dilution across multiple domains

## Technical Implementation Plan

### Phase 1: Pre-Implementation Assessment (Week 1)

#### Domain Audit Tasks
- [ ] Analyze current backlink profiles for each legacy domain
- [ ] Identify top-performing pages and content
- [ ] Review existing redirect structures
- [ ] Document current search rankings for each domain
- [ ] Identify any existing penalties or issues

#### Tools Required
- Google Search Console access for each domain
- Ahrefs/SEMrush for backlink analysis
- Google Analytics historical data
- Domain registrar access for DNS management

### Phase 2: Redirect Implementation (Week 2)

#### Technical Requirements
```apache
# .htaccess configuration for each legacy domain
RewriteEngine On
RewriteCond %{HTTP_HOST} ^(www\.)?keratocones\.com$ [NC]
RewriteRule ^(.*)$ https://bonakdar.net/conditions/keratoconus [R=301,L]

RewriteCond %{HTTP_HOST} ^(www\.)?eyecarecenterof\.com$ [NC]
RewriteRule ^(.*)$ https://bonakdar.net/locations/orange-county [R=301,L]

RewriteCond %{HTTP_HOST} ^(www\.)?drbonakdar\.com$ [NC]
RewriteRule ^(.*)$ https://bonakdar.net/about [R=301,L]
```

#### Implementation Checklist
- [ ] Configure DNS settings to point to primary hosting
- [ ] Upload .htaccess files with redirect rules
- [ ] Test all redirect paths using HTTP status checkers
- [ ] Verify SSL certificates for all domains
- [ ] Update internal linking structures

### Phase 3: SEO Monitoring & Optimization (Weeks 3-8)

#### Monitoring Requirements
- [ ] Set up Google Search Console for redirect tracking
- [ ] Monitor 404 errors and crawl issues
- [ ] Track search ranking changes for target keywords
- [ ] Analyze traffic patterns and user behavior
- [ ] Monitor Core Web Vitals and page speed impacts

#### Key Performance Indicators
- **Redirect Success Rate**: >98% (monitor 404 errors)
- **Search Ranking Retention**: >85% within 8 weeks
- **Traffic Consolidation**: Monitor overall traffic to bonakdar.net
- **User Experience**: Bounce rate and session duration maintenance

## Content Migration Strategy

### Priority Content Assessment

#### High-Value Content to Preserve
1. **Medical Authority Content**: Research, publications, case studies
2. **Condition-Specific Information**: Detailed treatment explanations
3. **Patient Testimonials**: Trust signals and social proof
4. **Educational Resources**: Eye health guides and prevention tips

#### Content Integration Plan
- Audit existing content on legacy domains
- Identify gaps in current bonakdar.net content
- Create comprehensive content mapping
- Integrate valuable content into primary site architecture
- Maintain URL structure consistency where possible

### URL Mapping Strategy

#### Keratocones.com Mapping
```
keratocones.com/treatment → bonakdar.net/conditions/keratoconus
keratocones.com/symptoms → bonakdar.net/conditions/keratoconus#symptoms
keratocones.com/diagnosis → bonakdar.net/conditions/keratoconus#diagnosis
keratocones.com/specialist → bonakdar.net/keratoconus-specialist
```

#### Eye Care Center Mapping
```
eyecarecenterof.com/irvine → bonakdar.net/locations/irvine
eyecarecenterof.com/services → bonakdar.net/services
eyecarecenterof.com/dry-eye → bonakdar.net/dry-eye-treatment
eyecarecenterof.com/contact → bonakdar.net/contact
```

#### Dr. Bonakdar Mapping
```
drbonakdar.com/about → bonakdar.net/about
drbonakdar.com/credentials → bonakdar.net/about#credentials
drbonakdar.com/contact → bonakdar.net/contact
drbonakdar.com/services → bonakdar.net/services
```

## Business Impact Analysis

### Expected SEO Benefits (3-6 months)

#### Domain Authority Consolidation
- **Current State**: Authority spread across 4 domains
- **Target State**: Consolidated authority on bonakdar.net
- **Expected Increase**: 15-25% in domain authority metrics

#### Search Ranking Improvements
- **Keratoconus Terms**: 20-30% improvement in specialty rankings
- **Local Terms**: 15-20% improvement in geographic searches
- **Brand Terms**: 25-35% improvement in doctor name searches

#### Traffic Consolidation
- **Total Organic Traffic**: Expected 10-15% net increase
- **Conversion Rate**: Improved user experience should increase conversions by 8-12%
- **Page Load Speed**: Modern site architecture reduces bounce rate

### Risk Mitigation Strategies

#### Temporary Ranking Drops
- **Expected Duration**: 2-4 weeks for full stabilization
- **Mitigation**: Aggressive monitoring and quick issue resolution
- **Backup Plan**: Ability to temporarily revert problematic redirects

#### User Experience Disruption
- **Communication Strategy**: Update all marketing materials
- **Bookmark Updates**: Email existing patients about domain changes
- **Search Update Timeline**: 4-8 weeks for full search engine recognition

## Implementation Timeline

### Week 1: Preparation & Analysis
- Complete domain audits and backlink analysis
- Document existing content and page structures
- Prepare redirect mapping and technical configuration
- Set up monitoring tools and baseline metrics

### Week 2: Technical Implementation
- Configure DNS and hosting settings
- Implement redirect rules via .htaccess
- Test all redirect paths and error handling
- Update Google Search Console settings

### Week 3-4: Initial Monitoring
- Monitor for crawl errors and broken redirects
- Track search ranking fluctuations
- Analyze user behavior and traffic patterns
- Address any technical issues immediately

### Week 5-8: Optimization & Stabilization
- Fine-tune redirect rules based on performance data
- Optimize landing pages for converted traffic
- Monitor long-term SEO impact and rankings
- Document lessons learned and best practices

### Ongoing: Maintenance & Growth
- Regular monitoring of redirect performance
- Quarterly review of SEO impact and adjustments
- Continuous optimization of landing page content
- Long-term tracking of business impact metrics

## Success Metrics & KPIs

### Technical Metrics
- **Redirect Success Rate**: >98%
- **Page Load Speed**: <2 seconds for all redirected pages
- **Crawl Error Rate**: <1%
- **SSL Certificate Uptime**: 99.9%

### SEO Metrics
- **Search Ranking Retention**: >85% within 8 weeks
- **Organic Traffic Growth**: 10-15% net increase
- **Domain Authority**: 15-25% improvement
- **Local Search Visibility**: 15-20% improvement

### Business Metrics
- **Conversion Rate**: 8-12% improvement
- **Patient Acquisition Cost**: 10-15% reduction
- **Brand Search Volume**: 25-35% increase
- **Patient Retention**: Maintain >95% current levels

## Conclusion

The strategic consolidation of keratocones.com, eyecarecenterof.com, and drbonakdar.com into bonakdar.net represents a significant opportunity to:

1. **Strengthen SEO Authority**: Consolidate domain authority and eliminate keyword cannibalization
2. **Improve User Experience**: Provide a single, comprehensive, modern website experience
3. **Enhance Business Efficiency**: Reduce maintenance overhead and focus resources on one primary platform
4. **Increase Conversion Potential**: Leverage the optimized conversion architecture of bonakdar.net

When executed properly with careful monitoring and optimization, this domain consolidation strategy should result in measurable improvements in search rankings, user engagement, and business growth metrics while positioning Dr. Bonakdar's practice for long-term digital success.

---

**Document Version**: 1.0  
**Created**: September 16, 2025  
**Last Updated**: September 16, 2025  
**Next Review**: October 16, 2025  
**Owner**: SEO Strategy Team