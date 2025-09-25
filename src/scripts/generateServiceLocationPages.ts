#!/usr/bin/env tsx

// Script to generate all service × location combination pages
// Run with: npx tsx src/scripts/generateServiceLocationPages.ts

import fs from 'fs';
import path from 'path';
import { 
  PRIORITY_SERVICES, 
  getTargetNeighborhoods, 
  generateServiceLocationPageData,
  getTotalPageCount 
} from '../utils/generateServiceLocationPages';

// Template for individual service location pages
function generatePageTemplate(service: any, location: any, testimonials: any[], seoKeywords: string, metaDescription: string) {
  const serviceVar = JSON.stringify(service, null, 2);
  const locationVar = JSON.stringify(location, null, 2);
  const testimonialsVar = JSON.stringify(testimonials, null, 2);
  const citySlug = location.city.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const serviceSlug = service.slug;
  
  return `import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const ${service.name.replace(/[^a-zA-Z0-9]/g, '')}${location.city.replace(/[^a-zA-Z0-9]/g, '')}Page: React.FC = () => {
  const service = ${serviceVar};
  
  const location = ${locationVar};
  
  const testimonials = ${testimonialsVar};
  
  const seoKeywords = "${seoKeywords}";
  const metaDescription = "${metaDescription}";

  return (
    <ServiceLocationTemplate
      service={service}
      location={location}
      testimonials={testimonials}
      seoKeywords={seoKeywords}
      metaDescription={metaDescription}
    />
  );
};

export default ${service.name.replace(/[^a-zA-Z0-9]/g, '')}${location.city.replace(/[^a-zA-Z0-9]/g, '')}Page;`;
}

// Generate directory structure and files
function generateAllPages() {
  const baseDir = path.join(process.cwd(), 'src', 'pages', 'services');
  
  // Ensure base directory exists
  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
  }
  
  let totalGenerated = 0;
  const summary: { [key: string]: number } = {};
  
  console.log('🚀 Generating service × location pages...\n');
  
  PRIORITY_SERVICES.forEach(service => {
    const serviceDir = path.join(baseDir, service.slug);
    
    // Create service directory
    if (!fs.existsSync(serviceDir)) {
      fs.mkdirSync(serviceDir, { recursive: true });
    }
    
    const targetNeighborhoods = getTargetNeighborhoods(service);
    let servicePageCount = 0;
    
    console.log(`📁 Creating ${service.name} pages (${targetNeighborhoods.length} locations):`);
    
    targetNeighborhoods.forEach(neighborhood => {
      const pageData = generateServiceLocationPageData(service, neighborhood);
      const { service: serviceData, location, testimonials, seoKeywords, metaDescription } = pageData;
      
      // Generate filename
      const citySlug = location.city.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
      const filename = `${citySlug}.tsx`;
      const filepath = path.join(serviceDir, filename);
      
      // Generate page content
      const pageContent = generatePageTemplate(serviceData, location, testimonials, seoKeywords!, metaDescription!);
      
      // Write file
      fs.writeFileSync(filepath, pageContent);
      
      console.log(`   ✅ ${filename} (${location.city})`);
      servicePageCount++;
      totalGenerated++;
    });
    
    summary[service.name] = servicePageCount;
    console.log(`   📊 ${servicePageCount} pages created for ${service.name}\n`);
  });
  
  console.log('📈 GENERATION SUMMARY:');
  console.log('='.repeat(50));
  Object.entries(summary).forEach(([serviceName, count]) => {
    console.log(`${serviceName}: ${count} pages`);
  });
  console.log('='.repeat(50));
  console.log(`🎯 Total pages generated: ${totalGenerated}`);
  console.log(`📍 Expected total: ${getTotalPageCount()}`);
  
  // Generate index file for each service
  generateServiceIndexFiles();
  
  console.log('\n✨ All service × location pages generated successfully!');
}

// Generate index files for each service directory
function generateServiceIndexFiles() {
  const baseDir = path.join(process.cwd(), 'src', 'pages', 'services');
  
  PRIORITY_SERVICES.forEach(service => {
    const serviceDir = path.join(baseDir, service.slug);
    const indexFile = path.join(serviceDir, 'index.tsx');
    
    const targetNeighborhoods = getTargetNeighborhoods(service);
    const firstNeighborhood = targetNeighborhoods[0];
    const pageData = generateServiceLocationPageData(service, firstNeighborhood);
    const firstCitySlug = pageData.location.city.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    
    const indexContent = `import React from 'react';
import { Navigate } from 'react-router-dom';

// Default service page redirects to the first location
const ${service.name.replace(/[^a-zA-Z0-9]/g, '')}Index: React.FC = () => {
  return <Navigate to="/services/${service.slug}/${firstCitySlug}" replace />;
};

export default ${service.name.replace(/[^a-zA-Z0-9]/g, '')}Index;`;
    
    fs.writeFileSync(indexFile, indexContent);
  });
}

// Run the generator
generateAllPages();

export { generateAllPages };