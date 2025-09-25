// Comprehensive Sitemap Generator for EyeCare Center of Orange County
// This utility generates sitemap entries for ALL pages in the website

import { PRIORITY_SERVICES, getTargetNeighborhoods } from './generateServiceLocationPages';

export interface SitemapEntry {
  url: string;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  priority: string;
  lastmod: string;
}

// Generate all service location sitemap entries
export function generateServiceLocationSitemapEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];
  const baseUrl = 'https://eyecarecenteroc.com';
  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

  PRIORITY_SERVICES.forEach(service => {
    const targetNeighborhoods = getTargetNeighborhoods(service);

    // Service index page
    entries.push({
      url: `${baseUrl}/services/${service.slug}`,
      changefreq: 'monthly',
      priority: service.searchVolume === 'high' ? '0.9' : service.searchVolume === 'medium' ? '0.8' : '0.7',
      lastmod: currentDate
    });

    // Individual location pages
    targetNeighborhoods.forEach(neighborhood => {
      const city = neighborhood.split(' - ')[0];
      const area = neighborhood.split(' - ')[1] || neighborhood;
      const locationSlug = area.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

      entries.push({
        url: `${baseUrl}/services/${service.slug}/${locationSlug}`,
        changefreq: 'monthly',
        priority: service.searchVolume === 'high' ? '0.8' : service.searchVolume === 'medium' ? '0.7' : '0.6',
        lastmod: currentDate
      });
    });
  });

  return entries;
}

// Generate condition pages sitemap entries
export function generateConditionSitemapEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];
  const baseUrl = 'https://eyecarecenteroc.com';
  const currentDate = new Date().toISOString().split('T')[0];

  const conditionPages = [
    'keratoconus',
    'dry-eye',
    'headache-eye-fatigue',
    'ortho-k',
    'lasik',
    'cataract',
    'subconjunctival-hemorrhage',
    'posterior-vitreous-detachment',
    'ocular-surface-disease',
    'computer-vision-syndrome',
    'uveitis-iritis',
    'herpes-simplex-keratitis',
    'narrow-angles',
    'blepharitis',
    'fuchs-corneal-dystrophy',
    'allergic-conjunctivitis',
    'floaters-flashes',
    'myopia',
    'pinguecula-pterygium'
  ];

  // English condition pages
  conditionPages.forEach(condition => {
    entries.push({
      url: `${baseUrl}/conditions/${condition}`,
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: currentDate
    });
  });

  // Spanish condition pages
  conditionPages.forEach(condition => {
    entries.push({
      url: `${baseUrl}/es/conditions/${condition}`,
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: currentDate
    });
  });

  return entries;
}

// Generate location pages sitemap entries
export function generateLocationSitemapEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];
  const baseUrl = 'https://eyecarecenteroc.com';
  const currentDate = new Date().toISOString().split('T')[0];

  const locationPages = [
    'irvine-eye-doctor',
    'newport-beach-eye-doctor',
    'costa-mesa-eye-doctor',
    'santa-ana-eye-doctor',
    'tustin-eye-doctor',
    'anaheim-eye-doctor',
    'anaheim-hills-eye-doctor',
    'orange-eye-doctor',
    'villa-park-eye-doctor',
    'riverside-eye-doctor'
  ];

  // English location pages
  locationPages.forEach(location => {
    entries.push({
      url: `${baseUrl}/locations/${location}`,
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: currentDate
    });
  });

  // Spanish location pages
  locationPages.forEach(location => {
    entries.push({
      url: `${baseUrl}/es/locations/${location}`,
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: currentDate
    });
  });

  return entries;
}

// Generate neighborhood pages sitemap entries
export function generateNeighborhoodSitemapEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];
  const baseUrl = 'https://eyecarecenteroc.com';
  const currentDate = new Date().toISOString().split('T')[0];

  const neighborhoodPages = [
    // Irvine neighborhoods
    'woodbridge-eye-doctor',
    'turtle-rock-eye-doctor',
    'university-park-eye-doctor',
    'quail-hill-eye-doctor',
    'northwood-eye-doctor',
    'oak-creek-eye-doctor',
    'orchard-hills-eye-doctor',
    'portola-springs-eye-doctor',
    'great-park-eye-doctor',
    'cypress-village-eye-doctor',

    // Newport Beach neighborhoods
    'newport-coast-eye-doctor',
    'balboa-island-eye-doctor',
    'corona-del-mar-eye-doctor',

    // Costa Mesa neighborhoods
    'south-coast-metro-eye-doctor',
    'mesa-verde-eye-doctor',

    // Anaheim neighborhoods
    'anaheim-hills-neighborhood-eye-doctor',
    'platinum-triangle-eye-doctor',

    // Tustin neighborhoods
    'tustin-ranch-eye-doctor',
    'old-town-tustin-eye-doctor',

    // Huntington Beach neighborhoods
    'huntington-harbor-eye-doctor',
    'downtown-hb-eye-doctor',

    // Santa Ana neighborhoods
    'east-santa-ana-eye-doctor',

    // Orange neighborhoods
    'old-towne-orange-eye-doctor',
    'orange-park-acres-eye-doctor',

    // Fountain Valley neighborhoods
    'fountain-valley-eye-doctor',
    'fountain-valley-west-eye-doctor',
    'talbert-fountain-valley-eye-doctor',

    // Garden Grove neighborhoods
    'garden-grove-eye-doctor',
    'west-garden-grove-eye-doctor',
    'east-garden-grove-eye-doctor',

    // Fullerton neighborhoods
    'fullerton-eye-doctor',
    'west-fullerton-eye-doctor',
    'north-fullerton-eye-doctor',

    // Yorba Linda neighborhoods
    'yorba-linda-eye-doctor',
    'east-yorba-linda-eye-doctor',
    'bryant-ranch-yorba-linda-eye-doctor',

    // Placentia neighborhoods
    'placentia-eye-doctor',
    'west-placentia-eye-doctor',

    // Brea neighborhoods
    'brea-eye-doctor',
    'north-brea-eye-doctor'
  ];

  neighborhoodPages.forEach(neighborhood => {
    entries.push({
      url: `${baseUrl}/neighborhoods/${neighborhood}`,
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: currentDate
    });
  });

  return entries;
}

// Generate educational content sitemap entries
export function generateEducationalSitemapEntries(): SitemapEntry[] {
  const entries: SitemapEntry[] = [];
  const baseUrl = 'https://eyecarecenteroc.com';
  const currentDate = new Date().toISOString().split('T')[0];

  const educationalPages = [
    'education/faq/conditions/what-is-keratoconus',
    'education/faq/conditions/why-eyes-always-dry',
    'education/guides/conditions/child-nearsighted-signs'
  ];

  educationalPages.forEach(page => {
    entries.push({
      url: `${baseUrl}/${page}`,
      changefreq: 'monthly',
      priority: '0.6',
      lastmod: currentDate
    });
  });

  return entries;
}

// Generate XML sitemap content
export function generateSitemapXML(): string {
  const baseUrl = 'https://eyecarecenteroc.com';
  const currentDate = new Date().toISOString().split('T')[0];

  // Main navigation and core pages
  const staticEntries: SitemapEntry[] = [
    // Homepage - highest priority
    {
      url: `${baseUrl}/`,
      changefreq: 'weekly',
      priority: '1.0',
      lastmod: currentDate
    },

    // Main navigation pages - high priority
    {
      url: `${baseUrl}/about`,
      changefreq: 'monthly',
      priority: '0.9',
      lastmod: currentDate
    },
    {
      url: `${baseUrl}/services`,
      changefreq: 'weekly',
      priority: '0.9',
      lastmod: currentDate
    },
    {
      url: `${baseUrl}/contact`,
      changefreq: 'monthly',
      priority: '0.9',
      lastmod: currentDate
    },
    {
      url: `${baseUrl}/eyewear`,
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: currentDate
    },
    {
      url: `${baseUrl}/fashion`,
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: currentDate
    },

    // Conditions overview page
    {
      url: `${baseUrl}/conditions`,
      changefreq: 'monthly',
      priority: '0.9',
      lastmod: currentDate
    },

    // Special keratoconus landing page
    {
      url: `${baseUrl}/keratoconus-referral`,
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: currentDate
    },

    // Spanish homepage and main pages
    {
      url: `${baseUrl}/es`,
      changefreq: 'weekly',
      priority: '0.8',
      lastmod: currentDate
    },
    {
      url: `${baseUrl}/es/`,
      changefreq: 'weekly',
      priority: '0.8',
      lastmod: currentDate
    },
    {
      url: `${baseUrl}/es/about`,
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: currentDate
    },
    {
      url: `${baseUrl}/es/services`,
      changefreq: 'weekly',
      priority: '0.7',
      lastmod: currentDate
    },
    {
      url: `${baseUrl}/es/contact`,
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: currentDate
    },
    {
      url: `${baseUrl}/es/eyewear`,
      changefreq: 'monthly',
      priority: '0.6',
      lastmod: currentDate
    },
    {
      url: `${baseUrl}/es/fashion`,
      changefreq: 'monthly',
      priority: '0.6',
      lastmod: currentDate
    },
    {
      url: `${baseUrl}/es/conditions`,
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: currentDate
    },

    // Legal pages - lower priority
    {
      url: `${baseUrl}/privacy-policy`,
      changefreq: 'yearly',
      priority: '0.5',
      lastmod: currentDate
    },
    {
      url: `${baseUrl}/terms-of-service`,
      changefreq: 'yearly',
      priority: '0.5',
      lastmod: currentDate
    }
  ];

  // Generate all entry types
  const serviceEntries = generateServiceLocationSitemapEntries();
  const conditionEntries = generateConditionSitemapEntries();
  const locationEntries = generateLocationSitemapEntries();
  const neighborhoodEntries = generateNeighborhoodSitemapEntries();
  const educationalEntries = generateEducationalSitemapEntries();

  // Combine all entries
  const allEntries = [
    ...staticEntries,
    ...serviceEntries,
    ...conditionEntries,
    ...locationEntries,
    ...neighborhoodEntries,
    ...educationalEntries
  ];

  // Sort by priority (highest first), then by URL
  allEntries.sort((a, b) => {
    const priorityDiff = parseFloat(b.priority) - parseFloat(a.priority);
    if (priorityDiff !== 0) return priorityDiff;
    return a.url.localeCompare(b.url);
  });

  const xmlHeader = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  const xmlFooter = `</urlset>`;

  const xmlEntries = allEntries.map(entry => `
  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('');

  return xmlHeader + xmlEntries + '\n' + xmlFooter;
}

// Generate comprehensive keyword count summary
export function generateKeywordSummary() {
  // Get all page types
  const serviceEntries = generateServiceLocationSitemapEntries();
  const conditionEntries = generateConditionSitemapEntries();
  const locationEntries = generateLocationSitemapEntries();
  const neighborhoodEntries = generateNeighborhoodSitemapEntries();
  const educationalEntries = generateEducationalSitemapEntries();

  // Count static pages (from generateSitemapXML)
  const staticPagesCount = 16; // Homepage, navigation, Spanish versions, legal pages

  const serviceGroups: { [key: string]: number } = {};

  PRIORITY_SERVICES.forEach(service => {
    const targetNeighborhoods = getTargetNeighborhoods(service);
    serviceGroups[service.name] = targetNeighborhoods.length;
  });

  const totalPages = staticPagesCount + serviceEntries.length + conditionEntries.length +
                   locationEntries.length + neighborhoodEntries.length + educationalEntries.length;

  // Estimate keywords based on page type
  const estimatedKeywords =
    (staticPagesCount * 3) +                    // 3 keywords per static page
    (serviceEntries.length * 5) +               // 5 keywords per service page
    (conditionEntries.length * 4) +             // 4 keywords per condition page
    (locationEntries.length * 4) +              // 4 keywords per location page
    (neighborhoodEntries.length * 3) +          // 3 keywords per neighborhood page
    (educationalEntries.length * 3);            // 3 keywords per educational page

  return {
    totalPages,
    estimatedKeywords,
    pageBreakdown: {
      staticPages: staticPagesCount,
      serviceLocationPages: serviceEntries.length,
      conditionPages: conditionEntries.length,
      cityLocationPages: locationEntries.length,
      neighborhoodPages: neighborhoodEntries.length,
      educationalPages: educationalEntries.length
    },
    serviceBreakdown: serviceGroups,
    highValueServices: PRIORITY_SERVICES.filter(s => s.searchVolume === 'high').length,
    mediumValueServices: PRIORITY_SERVICES.filter(s => s.searchVolume === 'medium').length,
    lowValueServices: PRIORITY_SERVICES.filter(s => s.searchVolume === 'low').length
  };
}

// Generate robots.txt content
export function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /

# Allow all main content
Allow: /services/
Allow: /conditions/
Allow: /locations/
Allow: /neighborhoods/
Allow: /education/
Allow: /es/

# Sitemap
Sitemap: https://eyecarecenteroc.com/sitemap.xml

# Disallow admin pages and QR code pages
Disallow: /admin/

# Allow specific admin tools for SEO testing
Allow: /admin/tools

# Crawl-delay for good citizenship
Crawl-delay: 1

# Additional crawl instructions
User-agent: Googlebot
Crawl-delay: 0

User-agent: Bingbot
Crawl-delay: 1`;
}

// Export all URLs for marketing and SEO analysis
export function exportAllUrls(): string[] {
  const serviceEntries = generateServiceLocationSitemapEntries();
  const conditionEntries = generateConditionSitemapEntries();
  const locationEntries = generateLocationSitemapEntries();
  const neighborhoodEntries = generateNeighborhoodSitemapEntries();
  const educationalEntries = generateEducationalSitemapEntries();

  const allEntries = [
    ...serviceEntries,
    ...conditionEntries,
    ...locationEntries,
    ...neighborhoodEntries,
    ...educationalEntries
  ];

  return allEntries.map(entry => entry.url);
}

// Export service URLs only (backward compatibility)
export function exportAllServiceUrls(): string[] {
  const serviceEntries = generateServiceLocationSitemapEntries();
  return serviceEntries.map(entry => entry.url);
}