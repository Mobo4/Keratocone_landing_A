
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import EyewearOverview from '@/components/eyewear/EyewearOverview';
import EyewearCategories from '@/components/eyewear/EyewearCategories';
import FeaturedBrands from '@/components/eyewear/FeaturedBrands';
import TryOnExperience from '@/components/eyewear/TryOnExperience';
import EyewearCTA from '@/components/eyewear/EyewearCTA';
import VendorLogoCarousel from '@/components/VendorLogoCarousel';
import SEO from '@/components/SEO';

const EyewearPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Orange County Designer Eyewear",
    "description": "Premium designer eyewear and advanced lens technology in Orange County.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Eyewear Collection",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Designer Frames",
            "description": "Premium designer eyewear from leading fashion brands"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product", 
            "name": "Advanced Lenses",
            "description": "High-tech lens solutions for all vision needs"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Designer Eyewear & Advanced Lenses | Orange County Eye Care"
        description="Discover premium designer eyewear and advanced lens technology in Orange County. Expert fitting and styling for the perfect combination of fashion and function."
        keywords="designer eyewear, premium glasses, designer frames, advanced lenses, Orange County eyewear, prescription glasses, sunglasses"
        canonicalUrl="https://eyecarecenteroc.com/eyewear"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        <Hero 
          translationKey="eyewear.hero"
          buttonLink="/contact"
          backgroundClass="bg-gradient-to-r from-purple-50 to-pink-50"
          colorScheme="purple"
        />
        
        <EyewearOverview />
        <EyewearCategories />
        <FeaturedBrands />
        <VendorLogoCarousel 
          title="Our Premium Eyewear Partners"
          description="We carry the finest designer frames and advanced lens technologies"
          category="frames"
        />
        <TryOnExperience />
        <EyewearCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default EyewearPage;
