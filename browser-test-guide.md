# Browser Compatibility Test Guide

## Test Browsers
- **Chrome**: Latest version (Windows & macOS)
- **Safari**: Latest version (macOS only)

## Test Devices
1. **Desktop**: 1920x1080, 1366x768, 1024x768
2. **Mobile**: iPhone (375x667), iPad (768x1024)

## Core Functionality Tests

### 1. Analytics Tracking
- [ ] Page views are tracked on navigation
- [ ] USA geolocation is detected correctly
- [ ] Events are tracked (button clicks, phone clicks)
- [ ] Analytics dashboard shows data in admin tools

### 2. Navigation & Accessibility
- [ ] Skip to main content link works (Tab key)
- [ ] Keyboard navigation (Tab through all elements)
- [ ] Mobile menu opens/closes properly
- [ ] Scroll-to-top button appears when scrolling
- [ ] Focus indicators visible when using keyboard

### 3. Forms & Security
- [ ] Contact form submits with email client
- [ ] Appointment form opens and submits
- [ ] Form validation works correctly
- [ ] Rate limiting prevents spam (try submitting rapidly)

### 4. Responsive Design
- [ ] All pages responsive on mobile/tablet/desktop
- [ ] Images load properly (lazy loading)
- [ ] Carousel works on touch devices
- [ ] Text is readable at all sizes

### 5. Language Switching
- [ ] English/Spanish toggle works
- [ ] URLs update correctly (/es/ prefix)
- [ ] Content translates properly
- [ ] Language persists on refresh

## Browser-Specific Tests

### Chrome
1. Open DevTools > Network tab
2. Check no console errors
3. Verify all resources load
4. Test PWA install prompt (if available)

### Safari
1. Open Web Inspector
2. Check no console errors
3. Test touch gestures on trackpad
4. Verify smooth scrolling

## Performance Metrics
- [ ] Page load time < 3 seconds
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3.5s
- [ ] No layout shifts after load

## Test URLs
1. Homepage: https://eyecarecenteroc.com
2. Spanish: https://eyecarecenteroc.com/es
3. Services: https://eyecarecenteroc.com/services
4. Keratoconus: https://eyecarecenteroc.com/conditions/keratoconus
5. Contact: https://eyecarecenteroc.com/contact
6. Admin Tools: https://eyecarecenteroc.com/admin/tools

## Known Issues to Check
- [ ] Analytics only tracks USA visitors
- [ ] Geolocation API may be blocked (fallback works)
- [ ] Email client must be configured for forms
- [ ] Some ad blockers may block analytics

## Test Checklist Summary
- [ ] Chrome Desktop ✓
- [ ] Chrome Mobile ✓
- [ ] Safari Desktop ✓
- [ ] Safari Mobile (iOS) ✓