# Deployment Instructions for Dr. Bonakdar Website

## 🎯 Current Status
✅ **September 15th Stable Version Ready**: `restore-sept15-stable` branch
✅ **Build Tested**: Production build completed successfully  
✅ **GitHub Updated**: Latest configuration files pushed
✅ **Localhost Working**: Confirmed working at http://localhost:8082

## 🚀 Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended)
1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Find your existing "drbonakdarwebsite" project
3. Go to **Settings** → **Git**
4. Change the **Production Branch** from `main` to `restore-sept15-stable`
5. Click **Save**
6. Go to **Deployments** tab
7. Click **Redeploy** on the latest deployment
8. Select **Use existing build cache: No** 
9. Click **Redeploy**

### Option 2: Vercel CLI
```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Deploy from the stable branch
cd "/Users/alex/Documents/Documents - MacMiniM4/VSCode_Apps/bonakdar_net_Lovable"
git checkout restore-sept15-stable
vercel --prod
```

## 🎨 Deploy to Lovable

### Update Lovable Configuration
1. Go to your [Lovable Dashboard](https://lovable.dev/projects)
2. Find your Dr. Bonakdar project
3. Go to **Settings** → **Deployment**
4. Set **Deploy Branch** to `restore-sept15-stable`
5. Click **Save Settings**
6. Click **Deploy Now**

## 🔧 Configuration Files Added

### `vercel.json`
- Configures iframe-compatible security headers
- Sets proper build commands and output directory
- Enables deployment from `restore-sept15-stable` branch
- Includes CSP headers allowing `*.vercel.app` and `*.lovable.app`

### `lovable.json`
- Platform-specific configuration for Lovable
- Matches Vercel security settings for consistency
- Specifies deployment branch and build settings

## 🛡️ Key Security Header Changes

The working version includes these iframe-compatible headers:

```
X-Frame-Options: SAMEORIGIN
Content-Security-Policy: frame-ancestors 'self' *.vercel.app *.lovable.app;
```

This allows the site to be embedded in iframes on both deployment platforms while maintaining security.

## 📍 Geo-Location Fix

The `GeoGuard` component now includes localhost bypass:
```javascript
if (import.meta.env.DEV || window.self !== window.top || window.location.hostname === 'localhost') {
  setIsAllowed(true);
  setIsChecking(false);
  return;
}
```

## 🧪 Testing

### Local Testing
```bash
cd "/Users/alex/Documents/Documents - MacMiniM4/VSCode_Apps/bonakdar_net_Lovable"
npm run dev
# Should open at http://localhost:8082 (confirmed working)
```

### Production Build Testing
```bash
npm run build
npm run preview
```

## 📋 Verification Checklist

After deployment, verify these items:

### Vercel Deployment
- [ ] Site loads without blank page
- [ ] Navigation between pages works
- [ ] No console errors in browser dev tools
- [ ] Contact forms submit properly
- [ ] SEO meta tags present
- [ ] Analytics tracking working

### Lovable Deployment  
- [ ] Site loads in Lovable editor preview
- [ ] No iframe blocking errors
- [ ] Can make edits and see updates
- [ ] Publish function works correctly

## 🔄 Rollback Plan

If deployments fail, you can quickly rollback:

### Vercel Rollback
1. Go to **Deployments** in Vercel dashboard
2. Find a working deployment 
3. Click **...** → **Promote to Production**

### Lovable Rollback
1. Go to project settings
2. Change deploy branch back to `main` 
3. Redeploy

## 🎯 Expected Results

Once deployed correctly:
- **www.drbonakdar.net** should load the full website
- Both English and Spanish versions should work
- Geo-location should only block actual out-of-area visitors
- All analytics and tracking should function
- Contact forms should submit successfully

## ⚠️ Important Notes

- **Branch**: Always deploy from `restore-sept15-stable` - this is the last known working version
- **Security**: Headers are configured for iframe compatibility with both platforms
- **Cache**: Clear build cache if deployment issues persist
- **Testing**: Always test localhost first to confirm the version works

---

*Last updated: September 19th, 2025*  
*Working version: September 15th stable (commit c792c44)*