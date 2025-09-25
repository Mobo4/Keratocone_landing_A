
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceOverview from '@/components/services/ServiceOverview';
import ServiceCategories from '@/components/services/ServiceCategories';
import ServiceFeatureSection from '@/components/services/ServiceFeatureSection';
import ServiceTestimonials from '@/components/services/ServiceTestimonials';
import ServicesCTA from '@/components/services/ServicesCTA';
import VendorLogoCarousel from '@/components/VendorLogoCarousel';
import SEO from '@/components/SEO';

const ServicesPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Orange County Medical Eye Care Services",
    "description": "Advanced medical eye care services including comprehensive diagnostics, corneal procedures, retinal evaluation, glaucoma management, surgical co-management, and urgent eye care.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Eye Care Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Comprehensive Eye Exams",
            "description": "Complete vision and eye health evaluations"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Contact Lens Fittings",
            "description": "Professional contact lens consultations and fittings"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Advanced Medical Eye Care Services Orange County | Ophthalmology & Optometry"
        description="Comprehensive medical eye care Orange County. Advanced diagnostic services, corneal procedures, retinal evaluation, glaucoma management, cataract planning, urgent eye care. Same-day appointments."
        keywords="medical eye care services Orange County, ophthalmology services Orange County, advanced eye care Orange County, corneal specialist Orange County, retinal evaluation Orange County, glaucoma management Orange County, cataract evaluation Orange County, urgent eye care Orange County, eye disease management Orange County, surgical co-management Orange County, Dr. Bonakdar services"
        canonicalUrl="https://eyecarecenteroc.com/services"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          translationKey="services.hero"
          buttonLink="https://promo.eyecarecenteroc.com/lead-magnet-page-6841-9006-6616-2060"
          backgroundClass="bg-gradient-to-r from-eyecare-lighter-blue to-blue-50"
          colorScheme="purple"
        />
        
        {/* Page sections */}
        <ServiceOverview />
        <ServiceCategories />
        <ServiceFeatureSection />
        <ServiceTestimonials />
        <VendorLogoCarousel 
          title="Our Technology Partners" 
          description="We use the latest technology from leading manufacturers"
          category="all"
        />
        <ServicesCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
