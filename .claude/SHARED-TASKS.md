# Shared Tasks - Keratocones.com & EyeCareCenterOC.com

**Purpose**: Track tasks across sessions for both websites that share GTM container GTM-NS6QTKN

---

## Session Log

### Session 2026-02-11 (GTM Installation)
**Session Name**: `gtm-installation-both-sites`
**Date**: February 11, 2026
**Claude Agent**: Claude Sonnet 4.5

#### Tasks Completed

**Site 1: eyecarecenteroc.com** ✅
- [x] Installed GTM-NS6QTKN using @next/third-parties
- [x] Removed old GTM container (GTM-T9MZNLMX)
- [x] Removed duplicate GA4 scripts
- [x] Removed duplicate Microsoft Clarity script
- [x] Verified callrail-phone class present site-wide
- [x] Committed changes (commit 9fadc64)
- [x] Pushed to GitHub main branch
- [x] Vercel deployment triggered
- [x] Created GTM-INSTALLATION-SUMMARY.md

**Site 2: keratocones.com** ✅
- [x] Installed @next/third-parties package
- [x] Replaced manual GTM script with GoogleTagManager component (GTM-NS6QTKN)
- [x] Removed GoogleTag component (old manual implementation)
- [x] Removed duplicate Microsoft Clarity script from TrackingScripts
- [x] Kept Meta Pixel (not in GTM)
- [x] Added callrail-phone class to Hero (mobile + desktop)
- [x] Added callrail-phone class to Footer
- [x] Added callrail-phone class to ContactPageContent
- [x] Build verified successful (180 pages)
- [x] Ready to commit and push

---

## Active Tasks

### 📋 Todo
- None (both sites complete)

### ⏳ Pending
- Verify GTM firing on eyecarecenteroc.com after deployment
- Verify GTM firing on keratocones.com after deployment
- Configure CallRail swap targets in dashboard (manual step)

### ✅ Done
- GTM installed on eyecarecenteroc.com (commit 9fadc64)
- GTM installed on keratocones.com (ready to commit)
- Documentation created for future sessions
- CallRail-phone class added to both sites

---

## GTM Container Details

**Container ID**: GTM-NS6QTKN (shared across both sites)

**Tags Inside GTM Container**:
- Google Analytics (GA4): G-2KDTQ0HX77
- CallRail tracking script
- Microsoft Clarity: stt3rclumb
- Google Ads conversion linker (GCLID)

**Installation Method**: @next/third-parties/google (recommended for Next.js 14+)

---

## Notes for Future Sessions

### Critical Information
- Both sites use the SAME GTM container: GTM-NS6QTKN
- Do NOT add separate GA4 or CallRail scripts (already in GTM)
- callrail-phone class must be present on all phone links
- Use @next/third-parties GoogleTagManager component (not manual script)

### Verification Steps
1. View page source → Search for GTM-NS6QTKN
2. Chrome DevTools → Network tab → Filter "gtm"
3. Tag Assistant Legacy extension → Verify tags firing

---

**Last Updated**: February 11, 2026
**Updated By**: Claude Sonnet 4.5 (Session: gtm-installation-both-sites)
