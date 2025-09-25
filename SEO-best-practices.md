# SEO Best Practices for Dr. Bonakdar Eye Care Center

## Using the New Schema Markup System

The new schema markup generator we've implemented provides rich structured data for search engines. Here's how to make the most of it:

### For Treatment Pages

When creating or updating treatment pages, use the Medical Procedure schema:

```tsx
<SEO
  title="Dry Eye Treatment Orange County - IPL Therapy"
  description="Advanced dry eye treatment using IPL therapy and comprehensive diagnosis in Orange County. Schedule your consultation today."
  pageType="treatment"
  schemaData={{
    treatmentName: "Dry Eye Treatment",
    specialty: "Ophthalmology",
    procedureType: "Therapeutic",
    condition: "Dry Eye Syndrome"
  }}
  // Other SEO properties
/>
```

### For Service Pages

Service pages benefit from the Service schema type:

```tsx
<SEO
  title="Comprehensive Eye Exams Orange County - Dr. Bonakdar"
  description="Complete eye examinations using advanced diagnostic technology in Orange County."
  pageType="service" 
  // Other SEO properties
/>
```

### For Product Pages (Eyewear)

Eyewear pages should use the Product schema:

```tsx
<SEO
  title="Designer Eyewear Collection - Orange County"
  description="Discover our premium collection of designer frames from top brands."
  pageType="eyewear"
  schemaData={{
    products: [
      {
        name: "Ray-Ban Aviator Sunglasses",
        description: "Classic aviator style with polarized lenses",
        image: "https://eyecarecenteroc.com/images/products/rayban-aviator.jpg"
      },
      // Additional products
    ]
  }}
  // Other SEO properties
/>
```

## Verification Setup

### Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property
3. Choose the "HTML tag" verification method
4. Copy the verification code (looks like: `<meta name="google-site-verification" content="ABC123...">`)
5. Add the code to your `.env` file:
   ```
   VITE_GOOGLE_VERIFICATION="ABC123..."
   ```

### Bing Webmaster Tools

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add your site
3. Choose the "Meta Tag" verification option
4. Copy the content value from the meta tag
5. Add to your `.env` file:
   ```
   VITE_BING_VERIFICATION="ABC123..."
   ```

## Sitemap Submission

1. Generate all sitemap files using the SitemapGenerator component
2. Upload the files to your website's root directory
3. Submit your sitemap-index.xml to:
   - [Google Search Console](https://search.google.com/search-console) (Sitemaps section)
   - [Bing Webmaster Tools](https://www.bing.com/webmasters) (Sitemaps section)

## Translation Management

The translation verification system will help identify missing translations. When you see translation errors during the build process, here's how to address them:

1. Check the error message to identify which keys are missing
2. For Spanish translations, add the missing keys to `src/i18n/locales/es.json`
3. For English translations, add the missing keys to `src/i18n/locales/en.json`
4. Run `npm run verify-translations` to check if you've resolved all issues

## Regular Maintenance

To keep your SEO performance strong:

1. **Update Content Regularly**: This will refresh the lastmod dates in your sitemap
2. **Monitor Search Console**: Check for errors and opportunities regularly
3. **Review Schema Markup**: Update as new services or features are added
4. **Check Translations**: Ensure all new content is available in both languages
5. **Keep Verification Tokens Updated**: If you need to re-verify, update the environment variables

## Performance Optimization

For future improvements, consider:

1. **Image Optimization**: Compress and serve properly sized images
2. **Core Web Vitals**: Monitor and improve LCP, FID, and CLS metrics
3. **Mobile Friendliness**: Continue testing on mobile devices
4. **Page Speed**: Optimize JavaScript and CSS loading
5. **Accessibility**: Improve ARIA attributes and keyboard navigation