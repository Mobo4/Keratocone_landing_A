import React, { Suspense } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import { PRIORITY_SERVICES, getTargetNeighborhoods, generateServiceLocationPageData } from '@/utils/generateServiceLocationPages';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

// Lazy load NotFound to be consistent with App.tsx
const NotFound = React.lazy(() => import('@/pages/NotFound'));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

// Dynamic service location page component
const DynamicServiceLocationPage: React.FC = () => {
  const { serviceSlug, locationSlug } = useParams<{ serviceSlug: string; locationSlug: string }>();
  
  if (!serviceSlug || !locationSlug) {
    return <NotFound />;
  }
  
  // Find the service
  const service = PRIORITY_SERVICES.find(s => s.slug === serviceSlug);
  if (!service) {
    return <NotFound />;
  }
  
  // Get target neighborhoods for this service
  const targetNeighborhoods = getTargetNeighborhoods(service);
  
  // Find matching neighborhood by converting location slug back to neighborhood format
  const matchingNeighborhood = targetNeighborhoods.find(neighborhood => {
    const city = neighborhood.split(' - ')[0];
    const area = neighborhood.split(' - ')[1] || neighborhood;
    const expectedSlug = area.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    return expectedSlug === locationSlug;
  });
  
  if (!matchingNeighborhood) {
    return <NotFound />;
  }
  
  // Generate page data
  const pageData = generateServiceLocationPageData(service, matchingNeighborhood);
  const { service: serviceData, location, testimonials, seoKeywords, metaDescription } = pageData;
  
  return (
    <ServiceLocationTemplate
      service={serviceData}
      location={location}
      testimonials={testimonials}
      seoKeywords={seoKeywords}
      metaDescription={metaDescription}
    />
  );
};

// Service index page component that redirects to first location
const ServiceIndexPage: React.FC = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  
  if (!serviceSlug) {
    return <NotFound />;
  }
  
  // Find the service
  const service = PRIORITY_SERVICES.find(s => s.slug === serviceSlug);
  if (!service) {
    return <NotFound />;
  }
  
  // Get first target neighborhood
  const targetNeighborhoods = getTargetNeighborhoods(service);
  if (targetNeighborhoods.length === 0) {
    return <NotFound />;
  }
  
  const firstNeighborhood = targetNeighborhoods[0];
  const city = firstNeighborhood.split(' - ')[0];
  const area = firstNeighborhood.split(' - ')[1] || firstNeighborhood;
  const firstLocationSlug = area.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  
  // Generate page data for first location
  const pageData = generateServiceLocationPageData(service, firstNeighborhood);
  const { service: serviceData, location, testimonials, seoKeywords, metaDescription } = pageData;
  
  return (
    <ServiceLocationTemplate
      service={serviceData}
      location={location}
      testimonials={testimonials}
      seoKeywords={seoKeywords}
      metaDescription={metaDescription}
    />
  );
};

// Router component for all service location pages
const ServiceLocationRouter: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Service index pages */}
        <Route path=":serviceSlug" element={<ServiceIndexPage />} />
        
        {/* Specific service location pages */}
        <Route path=":serviceSlug/:locationSlug" element={<DynamicServiceLocationPage />} />
        
        {/* 404 for invalid service routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default ServiceLocationRouter;