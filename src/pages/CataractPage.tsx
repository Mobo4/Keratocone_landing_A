
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import UnderstandingCataract from '@/components/cataract/UnderstandingCataract';
import CataractDiagnostics from '@/components/cataract/CataractDiagnostics';
import LensOptions from '@/components/cataract/LensOptions';
import CataractTreatment from '@/components/cataract/CataractTreatment';
import CataractResults from '@/components/cataract/CataractResults';
import CataractCTA from '@/components/cataract/CataractCTA';
import VendorLogoCarousel from '@/components/VendorLogoCarousel';
import SEO from '@/components/SEO';
import { useTranslation } from 'react-i18next';

const CataractPage = () => {
  const { t } = useTranslation();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Cataract",
    "description": "A cataract is a clouding of the normally clear lens of your eye, which can cause vision problems.",
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Cataract Surgery",
        "description": "Surgical procedure to remove the clouded lens and replace it with an artificial intraocular lens."
      }
    ],
    "riskFactor": ["Age", "Diabetes", "UV exposure", "Smoking"],
    "epidemiology": "Most common cause of vision loss in people over age 40"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={t('cataract.seo.title')}
        description={t('cataract.seo.description')}
        keywords={t('cataract.seo.keywords')}
        canonicalUrl="https://eyecarecenteroc.com/conditions/cataract"
        ogType="article"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          translationKey="cataract.hero"
          buttonLink="https://promo.eyecarecenteroc.com/lead-magnet-page-6841-9006-6616-2060"
          backgroundClass="bg-gradient-to-r from-amber-50 to-orange-50"
          colorScheme="purple"
        />
        
        {/* Page sections */}
        <UnderstandingCataract />
        <CataractDiagnostics />
        <LensOptions />
        <CataractTreatment />
        <CataractResults />
        <VendorLogoCarousel 
          title="Our Trusted Cataract Surgery Partners" 
          description="We collaborate with leading ophthalmologists and surgical centers"
          category="cataract"
        />
        <CataractCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default CataractPage;
