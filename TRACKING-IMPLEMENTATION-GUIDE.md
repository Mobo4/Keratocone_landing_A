# 📊 TRACKING IMPLEMENTATION GUIDE

## Critical Tracking Systems Setup for Dr. Bonakdar Website

---

## 🚨 REQUIRED BEFORE DEPLOYMENT

The following tracking systems MUST be configured with actual IDs before the site goes live. The Tracking.tsx component has been created with placeholders that need to be replaced.

---

## 1. 📞 CALLRAIL SETUP (HIGHEST PRIORITY)

### **Account Setup**
1. Create CallRail account at https://www.callrail.com
2. Select "Healthcare" as industry
3. Choose "Multi-location" if planning expansion

### **Configuration Steps**
```javascript
// Replace in src/components/Tracking.tsx
callRailScript.src = '//cdn.callrail.com/companies/XXXXXXXXX/XXXXXXXXX/XXXXXXXXX/swap.js';
// With your actual CallRail swap script from your CallRail dashboard
```

### **Features to Enable**
- ✅ Dynamic Number Insertion (DNI)
- ✅ Keyword-level tracking
- ✅ Call recording (with HIPAA compliance)
- ✅ Form tracking
- ✅ Text message tracking
- ✅ Integration with Google Ads
- ✅ Integration with Google Analytics

### **Phone Numbers to Track**
- Main office: (949) 658-2372
- Mobile-only number (if different)
- Department-specific numbers (if applicable)

### **HIPAA Compliance Note**
⚠️ Enable HIPAA-compliant call recording in CallRail settings
⚠️ Sign BAA (Business Associate Agreement) with CallRail

---

## 2. 📊 GOOGLE TAG MANAGER

### **Account Setup**
1. Go to https://tagmanager.google.com
2. Create container for eyecarecenteroc.com
3. Get GTM ID (format: GTM-XXXXXXX)

### **Implementation**
```javascript
// Replace in src/components/Tracking.tsx
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX'); // Replace GTM-XXXXXXX with your actual ID
```

### **Tags to Configure in GTM**
1. **Google Analytics 4** (Already have: G-CT7WS4307Z)
2. **Google Ads Conversion Tracking**
3. **Facebook Pixel**
4. **LinkedIn Insight Tag**
5. **Microsoft Advertising UET**

### **Triggers to Set Up**
- Phone call clicks
- Form submissions
- Appointment bookings
- PDF downloads
- Video plays
- Scroll depth (25%, 50%, 75%, 90%)

### **Variables to Create**
- Page Path
- Page Title
- Click URL
- Click Text
- Form ID

---

## 3. 📘 FACEBOOK PIXEL

### **Setup Steps**
1. Go to Facebook Business Manager
2. Navigate to Events Manager
3. Create new Pixel for "Dr. Bonakdar Eye Care"
4. Get Pixel ID

### **Implementation**
```javascript
// Replace in src/components/Tracking.tsx
fbq('init', 'YOUR_PIXEL_ID'); // Replace YOUR_PIXEL_ID with actual ID
```

### **Events to Track**
- PageView (automatic)
- ViewContent (service pages)
- Lead (form submissions)
- Schedule (appointment bookings)
- Contact (phone calls)
- Search (site search)

---

## 4. 🎯 GOOGLE ADS CONVERSION TRACKING

### **Setup**
1. Access Google Ads account
2. Tools & Settings → Conversions
3. Create conversion actions for:
   - Phone calls
   - Form submissions
   - Appointment bookings

### **Implementation**
```javascript
// Replace in src/components/Tracking.tsx
googleAdsScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX";
gtag('config', 'AW-XXXXXXXXX'); // Replace with your Google Ads ID
```

### **Conversion Values**
- Phone Call: $75 (estimated value)
- Form Submission: $50
- Appointment Booking: $100
- Newsletter Signup: $10

---

## 5. 🔍 MICROSOFT CLARITY (HEATMAPS)

### **Setup**
1. Go to https://clarity.microsoft.com
2. Create project for eyecarecenteroc.com
3. Get Clarity Project ID

### **Implementation**
```javascript
// Replace in src/components/Tracking.tsx
})(window, document, "clarity", "script", "YOUR_CLARITY_ID");
```

### **Features to Enable**
- Session recordings
- Heatmaps
- Scroll maps
- Click maps
- Dashboard sharing with team

---

## 6. 📈 GOOGLE SEARCH CONSOLE

### **Verification Steps**
1. Go to https://search.google.com/search-console
2. Add property: eyecarecenteroc.com
3. Verify via GTM or HTML tag
4. Submit sitemap: https://eyecarecenteroc.com/sitemap.xml

### **Configuration**
- Set preferred domain (www or non-www)
- Submit all sitemaps
- Set international targeting (USA)
- Monitor Core Web Vitals

---

## 7. 🎨 SOCIAL MEDIA META TAGS

### **Already Implemented in Tracking.tsx**
✅ Open Graph tags for Facebook
✅ Twitter Card tags
✅ LinkedIn meta tags
✅ Schema.org structured data

### **Images to Prepare**
- Default OG image: 1200x630px
- Twitter Card image: 1200x600px
- Logo square: 600x600px
- Dr. Bonakdar headshot: 400x400px

---

## 8. 📱 ADDITIONAL TRACKING TOOLS

### **Recommended Additions**
1. **Hotjar** - User behavior analytics
2. **Lucky Orange** - Live visitor recordings
3. **Crazy Egg** - A/B testing platform
4. **FullStory** - Digital experience analytics

---

## 🔧 TESTING CHECKLIST

### **Before Going Live**
- [ ] Test CallRail number swapping on different devices
- [ ] Verify GTM is firing on all pages
- [ ] Test Facebook Pixel with Pixel Helper extension
- [ ] Verify Google Ads conversions in test mode
- [ ] Check Clarity is recording sessions
- [ ] Test all conversion events
- [ ] Verify phone tracking on mobile
- [ ] Test form submission tracking
- [ ] Check social media preview cards

### **Testing Tools**
- Google Tag Assistant
- Facebook Pixel Helper
- CallRail's diagnostic tools
- GTM Preview Mode
- Google's Rich Results Test

---

## 📊 TRACKING DASHBOARD SETUP

### **Create Unified Dashboard**
1. **Google Analytics 4**
   - Custom dashboard for conversions
   - Real-time monitoring view
   - SEO performance report

2. **CallRail Dashboard**
   - Call volume by source
   - Keyword attribution report
   - Call quality scores

3. **Google Data Studio**
   - Combined reporting dashboard
   - Automated weekly reports
   - ROI tracking

---

## ⚠️ PRIVACY & COMPLIANCE

### **Required Implementations**
1. **Cookie Consent Banner**
   - GDPR/CCPA compliant
   - Granular consent options
   - Cookie policy page

2. **Privacy Policy Updates**
   - List all tracking tools
   - Data retention policies
   - User rights information

3. **HIPAA Considerations**
   - No PHI in tracking events
   - Secure form submissions
   - Encrypted data transmission

---

## 🚀 POST-LAUNCH MONITORING

### **Week 1**
- Daily conversion tracking review
- Fix any tracking gaps
- Verify all events firing

### **Month 1**
- Analyze conversion patterns
- Optimize conversion values
- Set up automated alerts

### **Ongoing**
- Monthly tracking audit
- Quarterly tool evaluation
- Annual privacy review

---

## 📞 SUPPORT CONTACTS

### **Tracking Platform Support**
- **CallRail**: 1-800-783-6884
- **Google Tag Manager**: Via Google Support
- **Facebook Business**: Via Business Help Center
- **Microsoft Clarity**: Via Azure Support

### **Implementation Help**
- Review Tracking.tsx component for implementation
- Test in development environment first
- Use tag debugging tools before launch

---

## ✅ FINAL IMPLEMENTATION STEPS

1. **Get all tracking IDs** from respective platforms
2. **Update Tracking.tsx** with actual IDs
3. **Test thoroughly** in staging environment
4. **Deploy to production**
5. **Verify all tracking** is working
6. **Monitor for 48 hours** post-launch

---

**CRITICAL**: Do not launch the site without completing at least:
- ❗ CallRail phone tracking
- ❗ Google Tag Manager
- ❗ Basic conversion tracking

These are essential for measuring ROI and optimizing the SEO investment.

---

*Last Updated: September 16, 2025*
*Implementation Time Estimate: 8-12 hours total*