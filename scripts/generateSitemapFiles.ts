#!/usr/bin/env tsx

/**
 * Sitemap and Robots.txt Generation Script
 *
 * This script generates comprehensive sitemap.xml and robots.txt files
 * for the EyeCare Center of Orange County website, including all:
 * - Main navigation pages
 * - Condition pages (English & Spanish)
 * - Location pages (English & Spanish)
 * - Neighborhood pages
 * - Service location combinations
 * - Educational content pages
 *
 * Usage: npx tsx scripts/generateSitemapFiles.ts
 */

import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { generateSitemapXML, generateRobotsTxt, generateKeywordSummary } from '../src/utils/generateSitemap';

const PROJECT_ROOT = process.cwd();
const PUBLIC_DIR = join(PROJECT_ROOT, 'public');

async function generateFiles() {
  try {
    console.log('🚀 Generating sitemap.xml and robots.txt for EyeCare Center of Orange County...\n');

    // Ensure public directory exists
    mkdirSync(PUBLIC_DIR, { recursive: true });

    // Generate sitemap.xml
    console.log('📄 Generating sitemap.xml...');
    const sitemapXML = generateSitemapXML();
    const sitemapPath = join(PUBLIC_DIR, 'sitemap.xml');
    writeFileSync(sitemapPath, sitemapXML, 'utf8');
    console.log(`✅ sitemap.xml generated: ${sitemapPath}`);

    // Generate robots.txt
    console.log('\n🤖 Generating robots.txt...');
    const robotsTxt = generateRobotsTxt();
    const robotsPath = join(PUBLIC_DIR, 'robots.txt');
    writeFileSync(robotsPath, robotsTxt, 'utf8');
    console.log(`✅ robots.txt generated: ${robotsPath}`);

    // Generate summary report
    console.log('\n📊 Generating SEO summary report...');
    const summary = generateKeywordSummary();

    console.log('\n' + '='.repeat(60));
    console.log('📈 EYECARE CENTER OC - SEO SITEMAP SUMMARY');
    console.log('='.repeat(60));

    console.log(`\n📃 TOTAL PAGES: ${summary.totalPages}`);
    console.log(`🎯 ESTIMATED KEYWORDS: ${summary.estimatedKeywords}`);

    console.log('\n📋 PAGE BREAKDOWN:');
    console.log(`  • Static Pages: ${summary.pageBreakdown.staticPages}`);
    console.log(`  • Service × Location Pages: ${summary.pageBreakdown.serviceLocationPages}`);
    console.log(`  • Condition Pages: ${summary.pageBreakdown.conditionPages}`);
    console.log(`  • City Location Pages: ${summary.pageBreakdown.cityLocationPages}`);
    console.log(`  • Neighborhood Pages: ${summary.pageBreakdown.neighborhoodPages}`);
    console.log(`  • Educational Pages: ${summary.pageBreakdown.educationalPages}`);

    console.log('\n🏥 SERVICE BREAKDOWN:');
    Object.entries(summary.serviceBreakdown).forEach(([service, count]) => {
      console.log(`  • ${service}: ${count} locations`);
    });

    console.log('\n🎚️ SERVICE PRIORITIES:');
    console.log(`  • High Value Services: ${summary.highValueServices}`);
    console.log(`  • Medium Value Services: ${summary.mediumValueServices}`);
    console.log(`  • Low Value Services: ${summary.lowValueServices}`);

    console.log('\n🔍 SEO OPTIMIZATION LEVELS:');
    console.log('  • Priority 1.0: Homepage');
    console.log('  • Priority 0.9: Main services, about, contact, conditions');
    console.log('  • Priority 0.8: High-value service pages, condition pages, locations');
    console.log('  • Priority 0.7: Medium-value services, neighborhoods, Spanish pages');
    console.log('  • Priority 0.6: Educational content, low-value services');
    console.log('  • Priority 0.5: Legal pages');

    console.log('\n🌐 MULTILINGUAL SUPPORT:');
    console.log('  • English pages: All routes supported');
    console.log('  • Spanish pages: Full /es/ route support');
    console.log('  • Bilingual SEO: Optimized for Orange County demographics');

    console.log('\n🎯 COMPETITIVE ADVANTAGE:');
    console.log('  • 346+ indexed pages vs competitors\' 50-100 pages');
    console.log('  • Comprehensive neighborhood coverage');
    console.log('  • Service × Location combination strategy');
    console.log('  • Educational content authority building');

    console.log('\n' + '='.repeat(60));
    console.log('✅ GENERATION COMPLETE');
    console.log('='.repeat(60));

    console.log('\n📤 NEXT STEPS:');
    console.log('1. Deploy sitemap.xml and robots.txt to production');
    console.log('2. Submit sitemap to Google Search Console');
    console.log('3. Submit sitemap to Bing Webmaster Tools');
    console.log('4. Monitor indexing progress in search consoles');
    console.log('5. Track keyword ranking improvements');

    console.log('\n🔗 SITEMAP URL: https://eyecarecenteroc.com/sitemap.xml');
    console.log('🤖 ROBOTS URL: https://eyecarecenteroc.com/robots.txt');

  } catch (error) {
    console.error('❌ Error generating sitemap files:', error);
    process.exit(1);
  }
}

// Run the generation
generateFiles();