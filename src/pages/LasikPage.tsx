
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import UnderstandingLasik from '@/components/lasik/UnderstandingLasik';
import LasikCandidacy from '@/components/lasik/LasikCandidacy';
import LasikComparison from '@/components/lasik/LasikComparison';
import LasikTreatment from '@/components/lasik/LasikTreatment';
import LasikResults from '@/components/lasik/LasikResults';
import LasikCTA from '@/components/lasik/LasikCTA';
import VendorLogoCarousel from '@/components/VendorLogoCarousel';
import SEO from '@/components/SEO';
import { useTranslation } from 'react-i18next';

const LasikPage = () => {
  const { t } = useTranslation();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "LASIK Eye Surgery",
    "description": "LASIK is a type of refractive eye surgery that corrects vision problems like nearsightedness, farsightedness, and astigmatism.",
    "medicalSpecialty": "Ophthalmology",
    "bodyLocation": "Eye",
    "procedureType": "Laser Surgery",
    "preparation": "Comprehensive eye examination and consultation",
    "followup": "Post-operative care and vision monitoring"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={t('lasik.seo.title')}
        description={t('lasik.seo.description')}
        keywords={t('lasik.seo.keywords')}
        canonicalUrl="https://eyecarecenteroc.com/conditions/lasik"
        ogType="article"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          translationKey="lasik.hero"
          buttonLink="https://promo.eyecarecenteroc.com/lead-magnet-page-6841-9006-6616-2060"
          backgroundClass="bg-gradient-to-r from-green-50 to-emerald-50"
          colorScheme="green"
        />
        
        {/* Page sections */}
        <UnderstandingLasik />
        <LasikCandidacy />
        <LasikComparison />
        <LasikTreatment />
        <LasikResults />
        <VendorLogoCarousel 
          title="Our Trusted LASIK Surgery Partners" 
          description="We work with leading refractive surgery centers and specialists"
          category="lasik"
        />
        <LasikCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default LasikPage;
