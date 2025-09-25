#!/usr/bin/env tsx

/**
 * Sitemap Validation Script
 *
 * This script validates the generated sitemap.xml to ensure all
 * expected page types are included and properly structured.
 */

import { readFileSync } from 'fs';
import { join } from 'path';

const PROJECT_ROOT = process.cwd();
const SITEMAP_PATH = join(PROJECT_ROOT, 'public', 'sitemap.xml');

function validateSitemap() {
  try {
    console.log('🔍 Validating sitemap.xml...\n');

    const sitemapContent = readFileSync(SITEMAP_PATH, 'utf8');
    const urls = sitemapContent.match(/<loc>(.*?)<\/loc>/g) || [];
    const urlList = urls.map(url => url.replace(/<\/?loc>/g, ''));

    console.log(`📊 Total URLs found: ${urlList.length}\n`);

    // Categorize URLs
    const categories = {
      homepage: urlList.filter(url => url === 'https://eyecarecenteroc.com/'),
      mainPages: urlList.filter(url =>
        /\/(?:about|services|contact|eyewear|fashion|conditions)$/.test(url) && !url.includes('/es/')
      ),
      spanishPages: urlList.filter(url => url.includes('/es/')),
      conditionPages: urlList.filter(url =>
        /\/conditions\/[^\/]+$/.test(url) && !url.includes('/es/')
      ),
      spanishConditionPages: urlList.filter(url =>
        /\/es\/conditions\/[^\/]+$/.test(url)
      ),
      locationPages: urlList.filter(url => /\/locations\/[^\/]+$/.test(url)),
      spanishLocationPages: urlList.filter(url => /\/es\/locations\/[^\/]+$/.test(url)),
      neighborhoodPages: urlList.filter(url => /\/neighborhoods\/[^\/]+$/.test(url)),
      serviceLocationPages: urlList.filter(url => /\/services\/[^\/]+\/[^\/]+$/.test(url)),
      serviceIndexPages: urlList.filter(url =>
        /\/services\/[^\/]+$/.test(url) && !url.includes('/es/')
      ),
      educationalPages: urlList.filter(url => /\/education\//.test(url)),
      specialPages: urlList.filter(url =>
        url.includes('/keratoconus-referral') ||
        url.includes('/privacy-policy') ||
        url.includes('/terms-of-service')
      )
    };

    console.log('📋 URL Categories:');
    Object.entries(categories).forEach(([category, urls]) => {
      console.log(`  • ${category}: ${urls.length} URLs`);
    });

    console.log('\n🎯 Key Route Validations:');

    // Check for high-priority pages
    const criticalPages = [
      'https://eyecarecenteroc.com/',
      'https://eyecarecenteroc.com/about',
      'https://eyecarecenteroc.com/services',
      'https://eyecarecenteroc.com/contact',
      'https://eyecarecenteroc.com/conditions',
      'https://eyecarecenteroc.com/conditions/keratoconus',
      'https://eyecarecenteroc.com/conditions/dry-eye',
      'https://eyecarecenteroc.com/locations/irvine-eye-doctor',
      'https://eyecarecenteroc.com/neighborhoods/woodbridge-eye-doctor',
      'https://eyecarecenteroc.com/services/optometrist-near-me',
      'https://eyecarecenteroc.com/es/',
      'https://eyecarecenteroc.com/es/conditions/keratoconus'
    ];

    let missingPages = 0;
    criticalPages.forEach(page => {
      const found = urlList.includes(page);
      console.log(`  ${found ? '✅' : '❌'} ${page}`);
      if (!found) missingPages++;
    });

    console.log('\n🌐 Multilingual Coverage:');
    console.log(`  • English pages: ${urlList.filter(url => !url.includes('/es/')).length}`);
    console.log(`  • Spanish pages: ${categories.spanishPages.length}`);

    console.log('\n🏥 Service Coverage:');
    const serviceTypes = [
      'optometrist-near-me',
      'dry-eye-doctor-near-me',
      'keratoconus-specialist-near-me',
      'scleral-lens-specialist-near-me',
      'myopia-control',
      'orthokeratology',
      'headache-eye-fatigue'
    ];

    serviceTypes.forEach(service => {
      const servicePages = urlList.filter(url => url.includes(`/services/${service}`));
      console.log(`  • ${service}: ${servicePages.length} pages`);
    });

    console.log('\n🏘️ Geographic Coverage:');
    const cities = [
      'irvine', 'newport-beach', 'costa-mesa', 'santa-ana',
      'tustin', 'anaheim', 'orange', 'villa-park'
    ];

    cities.forEach(city => {
      const cityPages = urlList.filter(url => url.includes(city));
      console.log(`  • ${city}: ${cityPages.length} pages`);
    });

    console.log('\n📈 Priority Distribution:');
    const priorityMatches = sitemapContent.match(/<priority>(.*?)<\/priority>/g) || [];
    const priorities = priorityMatches.map(p => p.replace(/<\/?priority>/g, ''));
    const priorityCount = priorities.reduce((acc, priority) => {
      acc[priority] = (acc[priority] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    Object.entries(priorityCount)
      .sort(([a], [b]) => parseFloat(b) - parseFloat(a))
      .forEach(([priority, count]) => {
        console.log(`  • Priority ${priority}: ${count} pages`);
      });

    // Validation summary
    console.log('\n' + '='.repeat(50));
    console.log('🎉 VALIDATION SUMMARY');
    console.log('='.repeat(50));

    if (missingPages === 0) {
      console.log('✅ All critical pages found');
    } else {
      console.log(`❌ ${missingPages} critical pages missing`);
    }

    if (urlList.length >= 340) {
      console.log('✅ Expected page count achieved (340+)');
    } else {
      console.log(`⚠️ Page count below expected (${urlList.length}/340+)`);
    }

    if (categories.spanishPages.length > 0) {
      console.log('✅ Multilingual support confirmed');
    } else {
      console.log('❌ No Spanish pages found');
    }

    console.log(`\n📊 Final Statistics:`);
    console.log(`  • Total URLs: ${urlList.length}`);
    console.log(`  • Unique URLs: ${new Set(urlList).size}`);
    console.log(`  • Duplicate URLs: ${urlList.length - new Set(urlList).size}`);

    if (urlList.length === new Set(urlList).size && missingPages === 0) {
      console.log('\n🎯 SITEMAP VALIDATION: PASSED ✅');
    } else {
      console.log('\n⚠️ SITEMAP VALIDATION: NEEDS ATTENTION');
    }

  } catch (error) {
    console.error('❌ Error validating sitemap:', error);
    process.exit(1);
  }
}

validateSitemap();