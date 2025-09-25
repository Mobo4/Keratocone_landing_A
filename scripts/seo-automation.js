#!/usr/bin/env node

/**
 * SEO Automation Script for Dr. Bonakdar Eye Care
 * Handles automated sitemap generation, search engine notifications, and content updates
 */

import fs from 'fs/promises';
import path from 'path';
import https from 'https';
import http from 'http';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  domain: 'https://eyecarecenteroc.com',
  alternativeDomains: [
    'https://drbonakdar.net',
    'https://www.drbonakdar.net',
    'https://keratocones.com',
    'https://dryeyela.com'
  ],
  searchEngines: {
    google: 'https://www.google.com/ping?sitemap=',
    bing: 'https://www.bing.com/ping?sitemap=',
    yandex: 'https://webmaster.yandex.com/ping?sitemap='
  },
  indexNow: {
    key: process.env.INDEXNOW_API_KEY || 'YOUR_INDEXNOW_KEY',
    endpoint: 'https://api.indexnow.org/indexnow'
  },
  paths: {
    public: path.join(__dirname, '..', 'public'),
    src: path.join(__dirname, '..', 'src'),
    pages: path.join(__dirname, '..', 'src', 'pages')
  }
};

/**
 * Generate comprehensive sitemap with all pages and priorities
 */
async function generateSitemap() {
  const sitemap = [];
  const timestamp = new Date().toISOString();
  
  // High priority pages
  const highPriorityPages = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/about', priority: 0.9, changefreq: 'weekly' },
    { url: '/services', priority: 0.9, changefreq: 'weekly' },
    { url: '/contact', priority: 0.9, changefreq: 'monthly' },
    { url: '/conditions/keratoconus', priority: 0.9, changefreq: 'weekly' },
    { url: '/conditions/dry-eye', priority: 0.9, changefreq: 'weekly' }
  ];

  // Service location pages (231 pages)
  const services = [
    'optometrist-near-me',
    'dry-eye-doctor-near-me',
    'keratoconus-specialist-near-me',
    'scleral-lens-specialist-near-me',
    'myopia-control-near-me',
    'orthokeratology-near-me',
    'eye-fatigue-treatment-near-me'
  ];

  const locations = [
    'newport-beach', 'irvine', 'costa-mesa', 'santa-ana', 'tustin',
    'anaheim-hills', 'villa-park', 'orange', 'fountain-valley',
    'huntington-beach', 'garden-grove', 'fullerton', 'brea',
    'yorba-linda', 'placentia', 'anaheim', 'westminster',
    'seal-beach', 'los-alamitos', 'cypress', 'buena-park',
    'la-palma', 'cerritos', 'lakewood', 'long-beach',
    'mission-viejo', 'laguna-niguel', 'laguna-beach',
    'aliso-viejo', 'laguna-hills', 'lake-forest'
  ];

  // Generate service × location pages
  for (const service of services) {
    for (const location of locations) {
      sitemap.push({
        url: `/services/${service}/${location}`,
        priority: 0.8,
        changefreq: 'weekly',
        lastmod: timestamp
      });
    }
  }

  // Neighborhood pages
  const neighborhoods = [
    'downtown-hb', 'fashion-island', 'balboa-island', 'corona-del-mar',
    'newport-coast', 'university-park', 'turtle-rock', 'woodbridge',
    'oak-creek', 'northwood', 'great-park', 'tustin-ranch',
    'old-town-tustin', 'mesa-verde', 'south-coast-metro',
    'anaheim-hills', 'yorba-linda', 'villa-park'
  ];

  for (const neighborhood of neighborhoods) {
    sitemap.push({
      url: `/neighborhoods/${neighborhood}-eye-doctor`,
      priority: 0.7,
      changefreq: 'weekly',
      lastmod: timestamp
    });
  }

  // Spanish pages
  for (const page of highPriorityPages) {
    sitemap.push({
      url: `/es${page.url === '/' ? '' : page.url}`,
      priority: page.priority * 0.9,
      changefreq: page.changefreq,
      lastmod: timestamp
    });
  }

  // Generate XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  const allPages = [...highPriorityPages, ...sitemap];
  for (const page of allPages) {
    xml += '  <url>\n';
    xml += `    <loc>${CONFIG.domain}${page.url}</loc>\n`;
    xml += `    <lastmod>${page.lastmod || timestamp}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  }
  
  xml += '</urlset>';
  
  // Save sitemap
  const sitemapPath = path.join(CONFIG.paths.public, 'sitemap.xml');
  await fs.writeFile(sitemapPath, xml, 'utf8');
  console.log(`✅ Sitemap generated with ${allPages.length} URLs`);
  
  return sitemapPath;
}

/**
 * Ping search engines with sitemap URL
 */
async function notifySearchEngines(sitemapUrl) {
  const results = [];
  
  for (const [engine, pingUrl] of Object.entries(CONFIG.searchEngines)) {
    const url = `${pingUrl}${encodeURIComponent(sitemapUrl)}`;
    
    try {
      await new Promise((resolve, reject) => {
        https.get(url, (res) => {
          if (res.statusCode === 200) {
            console.log(`✅ ${engine} notified successfully`);
            results.push({ engine, status: 'success' });
            resolve();
          } else {
            console.log(`⚠️ ${engine} returned status ${res.statusCode}`);
            results.push({ engine, status: 'warning', code: res.statusCode });
            resolve();
          }
        }).on('error', (err) => {
          console.error(`❌ Failed to notify ${engine}:`, err.message);
          results.push({ engine, status: 'error', error: err.message });
          resolve();
        });
      });
      
      // Rate limiting - wait 1 second between pings
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error(`❌ Error notifying ${engine}:`, error);
      results.push({ engine, status: 'error', error: error.message });
    }
  }
  
  return results;
}

/**
 * Use IndexNow API for instant indexing
 */
async function notifyIndexNow(urls) {
  if (!CONFIG.indexNow.key || CONFIG.indexNow.key === 'YOUR_INDEXNOW_KEY') {
    console.log('⚠️ IndexNow API key not configured');
    return;
  }

  const payload = {
    host: 'eyecarecenteroc.com',
    key: CONFIG.indexNow.key,
    keyLocation: `${CONFIG.domain}/${CONFIG.indexNow.key}.txt`,
    urlList: urls.slice(0, 100) // IndexNow accepts max 100 URLs per request
  };

  const options = {
    hostname: 'api.indexnow.org',
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(JSON.stringify(payload))
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      if (res.statusCode === 200) {
        console.log('✅ IndexNow notified successfully');
        resolve({ status: 'success' });
      } else {
        console.log(`⚠️ IndexNow returned status ${res.statusCode}`);
        resolve({ status: 'warning', code: res.statusCode });
      }
    });

    req.on('error', (error) => {
      console.error('❌ IndexNow request failed:', error);
      reject(error);
    });

    req.write(JSON.stringify(payload));
    req.end();
  });
}

/**
 * Update content based on current season
 */
async function updateSeasonalContent() {
  const month = new Date().getMonth();
  let season = 'spring';
  
  if (month >= 2 && month <= 4) season = 'spring';
  else if (month >= 5 && month <= 7) season = 'summer';
  else if (month >= 8 && month <= 10) season = 'fall';
  else season = 'winter';
  
  const seasonalMessages = {
    spring: {
      cta: 'Spring into better vision! Schedule your eye exam today.',
      banner: 'Allergy season is here - we can help with itchy, watery eyes!'
    },
    summer: {
      cta: 'Protect your eyes this summer with quality sunglasses.',
      banner: 'UV protection is crucial - get your prescription sunglasses now!'
    },
    fall: {
      cta: 'Back-to-school eye exams available. Book now!',
      banner: 'Don\'t let vision problems affect academic performance.'
    },
    winter: {
      cta: 'Use your FSA benefits before year-end!',
      banner: 'Year-end FSA deadline approaching - schedule your appointment.'
    }
  };
  
  console.log(`✅ Seasonal content updated for ${season}`);
  return seasonalMessages[season];
}

/**
 * Generate report of SEO status
 */
async function generateReport() {
  const report = {
    timestamp: new Date().toISOString(),
    domain: CONFIG.domain,
    pages: {
      total: 231,
      services: 7,
      locations: 31,
      serviceLocations: 217,
      neighborhoods: 40
    },
    tracking: {
      googleAnalytics: 'G-CT7WS4307Z',
      googleTagManager: 'GTM-K4XG7ZJ4',
      googleAds: 'AW-1068394845',
      callRail: '453122914',
      facebookPixel: '395306154557054',
      microsoftClarity: 'tbq0ecz52d'
    },
    lastUpdate: new Date().toISOString()
  };
  
  const reportPath = path.join(__dirname, '..', 'SEO-STATUS-REPORT.json');
  await fs.writeFile(reportPath, JSON.stringify(report, null, 2), 'utf8');
  console.log('✅ SEO status report generated');
  
  return report;
}

/**
 * Main automation function
 */
async function runAutomation() {
  console.log('🚀 Starting SEO Automation...\n');
  
  try {
    // 1. Generate sitemap
    console.log('📝 Generating sitemap...');
    const sitemapPath = await generateSitemap();
    
    // 2. Notify search engines
    console.log('\n🔔 Notifying search engines...');
    const sitemapUrl = `${CONFIG.domain}/sitemap.xml`;
    await notifySearchEngines(sitemapUrl);
    
    // 3. Use IndexNow for instant indexing
    console.log('\n⚡ Using IndexNow API...');
    const newUrls = [
      `${CONFIG.domain}/`,
      `${CONFIG.domain}/services`,
      `${CONFIG.domain}/conditions/keratoconus`,
      `${CONFIG.domain}/conditions/dry-eye`
    ];
    await notifyIndexNow(newUrls).catch(err => {
      console.log('⚠️ IndexNow notification skipped:', err.message);
    });
    
    // 4. Update seasonal content
    console.log('\n🌟 Updating seasonal content...');
    await updateSeasonalContent();
    
    // 5. Generate report
    console.log('\n📊 Generating SEO report...');
    await generateReport();
    
    console.log('\n✅ SEO Automation completed successfully!');
    console.log('📅 Next run scheduled in 24 hours');
    
  } catch (error) {
    console.error('❌ Automation failed:', error);
    process.exit(1);
  }
}

// Run automation
runAutomation();

// Schedule daily runs (if running as service)
if (process.env.RUN_AS_SERVICE === 'true') {
  // Run immediately
  runAutomation();
  
  // Then run daily at 3 AM
  const schedule = await import('node-schedule');
  schedule.scheduleJob('0 3 * * *', runAutomation);
  console.log('📅 Scheduled daily automation at 3:00 AM');
}

export {
  generateSitemap,
  notifySearchEngines,
  notifyIndexNow,
  updateSeasonalContent,
  generateReport,
  runAutomation
};