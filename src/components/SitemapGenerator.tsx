
import React from 'react';
import { getLastModifiedDate } from '@/utils/contentTracker';

// Define page types for better organization
type PageType = 'main' | 'condition' | 'service' | 'other';

interface Page {
  url: string;
  priority: string;
  changefreq: string;
  title: string;
  type: PageType;
  lastModified?: string; // Will be populated dynamically
}

const SitemapGenerator = () => {
  // Define all pages with their metadata
  const getPages = (): Page[] => {
    const pages: Page[] = [
      // English pages with unique, SEO-optimized URLs
      { url: '/', priority: '1.0', changefreq: 'weekly', title: 'Orange County Eye Care Center - Dr. Alexander Bonakdar', type: 'main' },
      { url: '/about', priority: '0.8', changefreq: 'monthly', title: 'About Dr. Alexander Bonakdar - Orange County Optometrist', type: 'main' },
      { url: '/services', priority: '0.8', changefreq: 'monthly', title: 'Comprehensive Eye Care Services - Orange County', type: 'service' },
      { url: '/contact', priority: '0.7', changefreq: 'monthly', title: 'Contact Eye Doctor Orange County - Schedule Appointment', type: 'main' },
      { url: '/eyewear', priority: '0.8', changefreq: 'weekly', title: 'Designer Eyewear & Glasses - Orange County', type: 'service' },
      { url: '/fashion', priority: '0.8', changefreq: 'weekly', title: 'Fashion Eyewear Collection - Orange County', type: 'service' },
      { url: '/conditions/keratoconus', priority: '0.9', changefreq: 'monthly', title: 'Keratoconus Treatment Orange County - Specialist Care', type: 'condition' },
      { url: '/conditions/dry-eye', priority: '0.9', changefreq: 'monthly', title: 'Dry Eye Treatment Orange County - IPL Therapy', type: 'condition' },
      { url: '/conditions/headache-eye-fatigue', priority: '0.8', changefreq: 'monthly', title: 'Eye Strain & Headache Treatment - Orange County', type: 'condition' },
      { url: '/conditions/ortho-k', priority: '0.8', changefreq: 'monthly', title: 'Ortho-K Myopia Control - Orange County Specialist', type: 'condition' },
      { url: '/conditions/lasik', priority: '0.8', changefreq: 'monthly', title: 'LASIK Consultation Orange County - Co-Management', type: 'condition' },
      { url: '/conditions/cataract', priority: '0.8', changefreq: 'monthly', title: 'Cataract Evaluation Orange County - Expert Care', type: 'condition' },
      
      // Spanish pages with unique, SEO-optimized URLs
      { url: '/es', priority: '1.0', changefreq: 'weekly', title: 'Centro de Cuidado Ocular Orange County - Dr. Alexander Bonakdar', type: 'main' },
      { url: '/es/about', priority: '0.8', changefreq: 'monthly', title: 'Acerca Dr. Alexander Bonakdar - Optometrista Orange County', type: 'main' },
      { url: '/es/services', priority: '0.8', changefreq: 'monthly', title: 'Servicios Integrales Cuidado Ocular - Orange County', type: 'service' },
      { url: '/es/contact', priority: '0.7', changefreq: 'monthly', title: 'Contactar Oculista Orange County - Programar Cita', type: 'main' },
      { url: '/es/eyewear', priority: '0.8', changefreq: 'weekly', title: 'Anteojos Diseñador y Gafas - Orange County', type: 'service' },
      { url: '/es/fashion', priority: '0.8', changefreq: 'weekly', title: 'Colección Anteojos Moda - Orange County', type: 'service' },
      { url: '/es/conditions/keratoconus', priority: '0.9', changefreq: 'monthly', title: 'Tratamiento Queratocono Orange County - Cuidado Especializado', type: 'condition' },
      { url: '/es/conditions/dry-eye', priority: '0.9', changefreq: 'monthly', title: 'Tratamiento Ojo Seco Orange County - Terapia IPL', type: 'condition' },
      { url: '/es/conditions/headache-eye-fatigue', priority: '0.8', changefreq: 'monthly', title: 'Tratamiento Fatiga Ocular y Dolor Cabeza - Orange County', type: 'condition' },
      { url: '/es/conditions/ortho-k', priority: '0.8', changefreq: 'monthly', title: 'Ortho-K Control Miopía - Especialista Orange County', type: 'condition' },
      { url: '/es/conditions/lasik', priority: '0.8', changefreq: 'monthly', title: 'Consulta LASIK Orange County - Co-manejo', type: 'condition' },
      { url: '/es/conditions/cataract', priority: '0.8', changefreq: 'monthly', title: 'Evaluación Cataratas Orange County - Cuidado Experto', type: 'condition' }
    ];
    
    // Add dynamic lastModified date to each page
    return pages.map(page => ({
      ...page,
      lastModified: getLastModifiedDate(page.url)
    }));
  };

  // Generate the full sitemap with all pages
  const generateSitemap = () => {
    const baseUrl = 'https://eyecarecenteroc.com';
    const pages = getPages();

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(page => {
  const url = `${baseUrl}${page.url}`;
  const alternateUrl = page.url.startsWith('/es') ?
    `${baseUrl}${page.url.replace('/es', '')}` :
    `${baseUrl}/es${page.url}`;
  
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="${page.url.startsWith('/es') ? 'es' : 'en'}" href="${url}" />
    <xhtml:link rel="alternate" hreflang="${page.url.startsWith('/es') ? 'en' : 'es'}" href="${alternateUrl}" />
    ${page.url === '/' || page.url === '/es' ? '<xhtml:link rel="alternate" hreflang="x-default" href="https://eyecarecenteroc.com/" />' : ''}
  </url>`;
}).join('\n')}
</urlset>`;

    downloadXml(sitemap, 'sitemap.xml');
  };
  
  // Generate a sitemap for a specific page type
  const generateTypeSitemap = (type: PageType) => {
    const baseUrl = 'https://eyecarecenteroc.com';
    const pages = getPages().filter(page => page.type === type);
    
    const filename = `sitemap-${type}.xml`;
    const title = type === 'main' ? 'Main Pages' :
                 type === 'condition' ? 'Medical Conditions' :
                 type === 'service' ? 'Services' : 'Other Pages';
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<!-- ${title} Sitemap -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(page => {
  const url = `${baseUrl}${page.url}`;
  const alternateUrl = page.url.startsWith('/es') ?
    `${baseUrl}${page.url.replace('/es', '')}` :
    `${baseUrl}/es${page.url}`;
  
  return `  <url>
    <loc>${url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="${page.url.startsWith('/es') ? 'es' : 'en'}" href="${url}" />
    <xhtml:link rel="alternate" hreflang="${page.url.startsWith('/es') ? 'en' : 'es'}" href="${alternateUrl}" />
    ${page.url === '/' || page.url === '/es' ? '<xhtml:link rel="alternate" hreflang="x-default" href="https://eyecarecenteroc.com/" />' : ''}
  </url>`;
}).join('\n')}
</urlset>`;

    downloadXml(sitemap, filename);
  };
  
  // Generate sitemap index that references all sitemaps
  const generateSitemapIndex = () => {
    const baseUrl = 'https://eyecarecenteroc.com';
    const today = new Date().toISOString().split('T')[0];
    
    const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-main.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-condition.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-service.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;

    downloadXml(sitemapIndex, 'sitemap-index.xml');
  };
  
  // Helper function to download XML files
  const downloadXml = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const generateRobotsTxt = () => {
    const robotsTxt = `# robots.txt for eyecarecenteroc.com

# Allow all web crawlers full access
User-agent: *
Allow: /

# Set crawl delay for specific bots to prevent overloading
User-agent: YandexBot
Crawl-delay: 5

User-agent: BingBot
Crawl-delay: 3

# Disallow admin pages and internal tools
Disallow: /admin/
Disallow: /api/
Disallow: /_next/

# Sitemap index - primary reference for search engines
Sitemap: https://eyecarecenteroc.com/sitemap-index.xml

# Individual sitemaps for better organization
Sitemap: https://eyecarecenteroc.com/sitemap.xml
Sitemap: https://eyecarecenteroc.com/sitemap-main.xml
Sitemap: https://eyecarecenteroc.com/sitemap-condition.xml
Sitemap: https://eyecarecenteroc.com/sitemap-service.xml`;

    downloadXml(robotsTxt, 'robots.txt');
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">SEO Tools - Google Indexing Optimization</h3>
      <div className="space-y-4">
        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
          <p className="text-sm text-green-700">
            <strong>SEO Optimized:</strong> All pages now have unique, location-focused titles and proper canonical URLs with dynamic lastmod dates for better search engine indexing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-blue-50 rounded-md">
            <h4 className="font-semibold mb-2">Sitemap Generation</h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={generateSitemap}
                className="bg-eyecare-blue text-white px-4 py-2 rounded-md hover:bg-eyecare-dark-blue transition-colors text-sm"
              >
                Generate Complete Sitemap
              </button>
              <button
                onClick={() => generateTypeSitemap('main')}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm"
              >
                Generate Main Pages Sitemap
              </button>
              <button
                onClick={() => generateTypeSitemap('condition')}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors text-sm"
              >
                Generate Conditions Sitemap
              </button>
              <button
                onClick={() => generateTypeSitemap('service')}
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors text-sm"
              >
                Generate Services Sitemap
              </button>
              <button
                onClick={generateSitemapIndex}
                className="bg-violet-600 text-white px-4 py-2 rounded-md hover:bg-violet-700 transition-colors text-sm"
              >
                Generate Sitemap Index
              </button>
            </div>
          </div>
          <div className="p-4 bg-green-50 rounded-md">
            <h4 className="font-semibold mb-2">Search Engine Configuration</h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={generateRobotsTxt}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-sm"
              >
                Generate Robots.txt
              </button>
              <a
                href="https://search.google.com/search-console"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors text-sm text-center"
              >
                Open Google Search Console
              </a>
              <a
                href="https://www.bing.com/webmasters/home"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors text-sm text-center"
              >
                Open Bing Webmaster Tools
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <h4 className="font-semibold mb-2">SEO Improvements Made:</h4>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>✅ All pages have unique, descriptive titles</li>
            <li>✅ Meta descriptions never empty, location-focused</li>
            <li>✅ Proper canonical URLs for all pages</li>
            <li>✅ Bilingual hreflang attributes implemented</li>
            <li>✅ Enhanced structured data for local business</li>
            <li>✅ Dynamic lastmod dates for content freshness</li>
            <li>✅ Organized sitemaps by content type</li>
            <li>✅ Google Search Console verification meta tags</li>
            <li>✅ Mobile optimization meta tags</li>
          </ul>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-md">
          <h4 className="font-semibold mb-2">Next Steps for Google Indexing:</h4>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>Download all sitemap files using the buttons above</li>
            <li>Upload the sitemaps and robots.txt to your website's root directory</li>
            <li>Submit the sitemap-index.xml to Google Search Console</li>
            <li>Request re-indexing of your pages in Google Search Console</li>
            <li>Add verification tokens for search engines in the .env file</li>
            <li>Monitor your indexing status over the next few days</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SitemapGenerator;
