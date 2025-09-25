#!/usr/bin/env node

// Generate sitemap.xml for EyeCare Center Orange County
import fs from 'fs';
import { generateSitemapXML } from './src/utils/generateSitemap.js';

console.log('🚀 Generating comprehensive sitemap for EyeCare Center Orange County...\n');

try {
  // Generate the sitemap XML content
  const sitemapXML = generateSitemapXML();

  // Write to public directory (for development server access)
  const publicPath = './public/sitemap.xml';
  fs.writeFileSync(publicPath, sitemapXML, 'utf8');
  console.log(`✅ Sitemap generated: ${publicPath}`);

  // Also write to dist directory (for production builds)
  const distPath = './dist/sitemap.xml';
  if (fs.existsSync('./dist')) {
    fs.writeFileSync(distPath, sitemapXML, 'utf8');
    console.log(`✅ Sitemap generated: ${distPath}`);
  }

  // Count the URLs
  const urlCount = (sitemapXML.match(/<url>/g) || []).length;
  console.log(`\n📊 Sitemap Statistics:`);
  console.log(`   • Total URLs: ${urlCount}`);
  console.log(`   • File Size: ${(sitemapXML.length / 1024).toFixed(2)} KB`);

  // Show sample URLs
  const urlMatches = sitemapXML.match(/<loc>(.*?)<\/loc>/g);
  if (urlMatches && urlMatches.length > 0) {
    console.log(`\n📋 Sample URLs (first 10):`);
    urlMatches.slice(0, 10).forEach((url, index) => {
      const cleanUrl = url.replace('<loc>', '').replace('</loc>', '');
      console.log(`   ${index + 1}. ${cleanUrl}`);
    });

    if (urlMatches.length > 10) {
      console.log(`   ... and ${urlMatches.length - 10} more URLs`);
    }
  }

  console.log(`\n🎯 SEO Optimizations Applied:`);
  console.log(`   • Ophthalmology + Optometry keywords`);
  console.log(`   • Orange County geographic targeting`);
  console.log(`   • Medical procedure terminology`);
  console.log(`   • Advanced procedure highlighting`);
  console.log(`   • Urgent care positioning`);

  console.log(`\n✨ Ready for Google Search Console submission!`);
  console.log(`   Submit: https://eyecarecenteroc.com/sitemap.xml`);

} catch (error) {
  console.error('❌ Error generating sitemap:', error.message);
  process.exit(1);
}