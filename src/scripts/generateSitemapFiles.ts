#!/usr/bin/env tsx

// Script to generate sitemap.xml and robots.txt files
// Run with: npx tsx src/scripts/generateSitemapFiles.ts

import fs from 'fs';
import path from 'path';
import { generateSitemapXML, generateRobotsTxt, generateKeywordSummary, exportAllServiceUrls } from '../utils/generateSitemap';

function generateSitemapFiles() {
  const publicDir = path.join(process.cwd(), 'public');
  
  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  console.log('🗺️  Generating SEO files...\n');
  
  // Generate sitemap.xml
  const sitemapXML = generateSitemapXML();
  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapXML);
  console.log('✅ Generated sitemap.xml');
  
  // Generate robots.txt
  const robotsTxt = generateRobotsTxt();
  const robotsPath = path.join(publicDir, 'robots.txt');
  fs.writeFileSync(robotsPath, robotsTxt);
  console.log('✅ Generated robots.txt');
  
  // Generate keyword summary report
  const summary = generateKeywordSummary();
  const reportPath = path.join(process.cwd(), 'SERVICE_LOCATION_REPORT.md');
  
  const reportContent = `# Service Location Pages Report
*Generated: ${new Date().toISOString()}*

## 📊 Summary Statistics

- **Total Service Location Pages**: ${summary.totalPages}
- **Estimated Keywords Targeted**: ${summary.estimatedKeywords}
- **High-Value Services**: ${summary.highValueServices}
- **Medium-Value Services**: ${summary.mediumValueServices}
- **Low-Value Services**: ${summary.lowValueServices}

## 🎯 Service Breakdown

${Object.entries(summary.serviceBreakdown).map(([service, count]) => 
  `- **${service}**: ${count} location pages`
).join('\n')}

## 🔗 Sample URLs Generated

### "Near Me" Services (Critical Gap vs Nvision)
- https://eyecarecenteroc.com/services/optometrist-near-me/woodbridge
- https://eyecarecenteroc.com/services/dry-eye-doctor-near-me/irvine
- https://eyecarecenteroc.com/services/keratoconus-specialist-near-me/newport-coast
- https://eyecarecenteroc.com/services/scleral-lens-specialist-near-me/costa-mesa

### Specialty Services (Dr. Bonakdar's Advantages)
- https://eyecarecenteroc.com/services/myopia-control/woodbridge
- https://eyecarecenteroc.com/services/orthokeratology/university-park
- https://eyecarecenteroc.com/services/headache-eye-fatigue/downtown-santa-ana

## 🚀 SEO Impact

This implementation creates ${summary.totalPages} new pages targeting high-value keyword combinations that Nvision lacks:

1. **"Near Me" Gap**: Nvision has no "near me" service pages in Orange County
2. **Specialty Expertise**: Dr. Bonakdar's keratoconus and scleral lens specialization
3. **Local Authority**: Deep neighborhood-level optimization
4. **Search Volume**: Targeting ~${summary.estimatedKeywords} keyword variations

## 📈 Expected Results

- **Immediate**: ${summary.totalPages} new indexed pages
- **Short-term (1-3 months)**: Improved local search rankings
- **Long-term (3-6 months)**: Significant traffic increase from targeted keywords
- **Competitive Advantage**: First-mover advantage in service × location SEO

## 🎯 Next Steps

1. Submit sitemap to Google Search Console
2. Monitor keyword rankings for new pages
3. Optimize page content based on performance data
4. Expand to additional services if successful
`;

  fs.writeFileSync(reportPath, reportContent);
  console.log('✅ Generated SERVICE_LOCATION_REPORT.md');
  
  // Generate URL list for marketing
  const allUrls = exportAllServiceUrls();
  const urlListPath = path.join(process.cwd(), 'SERVICE_URLS.txt');
  fs.writeFileSync(urlListPath, allUrls.join('\n'));
  console.log('✅ Generated SERVICE_URLS.txt');
  
  console.log('\n📈 GENERATION COMPLETE:');
  console.log('='.repeat(50));
  console.log(`📄 Total pages in sitemap: ${summary.totalPages}`);
  console.log(`🔗 Service location URLs: ${allUrls.length}`);
  console.log(`🎯 Estimated keywords: ${summary.estimatedKeywords}`);
  console.log('='.repeat(50));
  console.log('\n🚀 Files ready for deployment:');
  console.log(`   - ${sitemapPath}`);
  console.log(`   - ${robotsPath}`);
  console.log(`   - ${reportPath}`);
  console.log(`   - ${urlListPath}`);
  
  console.log('\n✨ Phase 2 execution complete! Service location pages ready for indexing.');
}

// Run the generator
generateSitemapFiles();

export { generateSitemapFiles };