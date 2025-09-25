
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AnimatedBackground from '@/components/AnimatedBackground';
import VendorLogoCarousel from '@/components/VendorLogoCarousel';
import EyewearOverview from '@/components/fashion/EyewearOverview';
import FeaturedBrands from '@/components/fashion/FeaturedBrands';
import EyewearCategories from '@/components/fashion/EyewearCategories';
import TryOnExperience from '@/components/fashion/TryOnExperience';
import FashionCTA from '@/components/fashion/FashionCTA';
import SEO from '@/components/SEO';
import { useTranslation } from 'react-i18next';

const FashionPage = () => {
  const { t } = useTranslation();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "Orange County Designer Eyewear Collection",
    "description": "Premium designer eyewear and luxury frames from leading fashion brands in Orange County.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Designer Eyewear Collection",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Designer Frames",
            "description": "Premium designer eyewear from leading fashion brands including Ray-Ban, Gucci, Prada, and Tom Ford"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product", 
            "name": "Luxury Sunglasses",
            "description": "High-end luxury sunglasses for style and UV protection"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Luxury Designer Eyewear Collection | Orange County Fashion Frames"
        description="Discover our curated collection of luxury designer eyewear featuring brands like Ray-Ban, Gucci, Prada, Tom Ford, and more. Premium frames for the perfect blend of style and vision correction in Orange County."
        keywords="designer eyewear, luxury frames, fashion glasses, Ray-Ban, Gucci, Prada, Tom Ford, Orange County eyewear, designer sunglasses, premium frames"
        canonicalUrl="https://eyecarecenteroc.com/fashion"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with H1 */}
        <section className="relative bg-gradient-to-r from-eyecare-lighter-blue to-purple-100 py-16 md:py-24 overflow-hidden">
          <AnimatedBackground colorScheme="purple" numberOfCircles={8} />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-eyecare-blue">{t('fashion.hero.title')}</span>{' '}
                {t('fashion.hero.highlight')}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
                {t('fashion.hero.subtitle')}
              </p>
              <a 
                href="#featured-brands" 
                className="inline-block bg-eyecare-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300"
              >
                {t('fashion.hero.button')}
              </a>
            </div>
          </div>
        </section>
        
        <EyewearOverview />
        <FeaturedBrands />
        <EyewearCategories />
        <TryOnExperience />
        <FashionCTA />
        <VendorLogoCarousel 
          title="Featured Brands"
          description="We partner with the world's most prestigious eyewear designers to bring you exclusive styles."
          category="frames"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default FashionPage;
