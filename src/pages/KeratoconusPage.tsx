import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import KeratoconusHero from '@/components/keratoconus/KeratoconusHero';
import KeyBenefits from '@/components/keratoconus/KeyBenefits';
import TreatmentOptionsSection from '@/components/keratoconus/TreatmentOptionsSection';
import PatientTestimonials from '@/components/keratoconus/PatientTestimonials';
import FinalCTA from '@/components/keratoconus/FinalCTA';
import SEO from '@/components/SEO';
import TrustSignals from '@/components/TrustSignals';

const KeratoconusPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Keratoconus",
    "description": "Keratoconus is a progressive eye condition where the cornea thins and bulges into a cone-like shape, causing distorted vision.",
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Corneal Cross-Linking",
        "description": "A minimally invasive procedure that strengthens corneal tissue to halt keratoconus progression."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Scleral Lenses",
        "description": "Specialized contact lenses that vault over the cornea, providing clear vision for keratoconus patients."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Intacs",
        "description": "Micro-thin inserts placed in the cornea to flatten the cone and reduce distortion."
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col snap-y snap-mandatory">
      <SEO 
        title="Keratoconus Specialist Orange County | Corneal Cross-Linking Expert | Dr. Bonakdar"
        description="Advanced keratoconus treatment center Orange County. Corneal cross-linking, custom scleral lenses, Intacs. Same-day ophthalmology appointments. Call (949) 575-8811"
        keywords="keratoconus specialist Orange County, corneal cross-linking Orange County, keratoconus ophthalmologist Orange County, scleral lens specialist Orange County, Intacs Orange County, corneal specialist Orange County, keratoconus treatment Orange County, corneal disease Orange County, keratoconus surgery Orange County, medical eye care Orange County, Dr. Bonakdar keratoconus"
        canonicalUrl="https://eyecarecenteroc.com/conditions/keratoconus"
        ogType="article"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        <KeratoconusHero />
        <TrustSignals className="py-12 bg-gray-50" />
        <KeyBenefits />
        <TreatmentOptionsSection />
        <PatientTestimonials />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default KeratoconusPage;
