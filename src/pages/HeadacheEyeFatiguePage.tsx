
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UnderstandingHeadacheEyeFatigue from '@/components/headache/UnderstandingHeadacheEyeFatigue';
import CausesSymptoms from '@/components/headache/CausesSymptoms';
import TreatmentOptions from '@/components/headache/TreatmentOptions';
import PreventionTips from '@/components/headache/PreventionTips';
import HeadacheEyeFatigueCTA from '@/components/headache/HeadacheEyeFatigueCTA';
import VendorLogoCarousel from '@/components/VendorLogoCarousel';
import SEO from '@/components/SEO';
import AnimatedBackground from '@/components/AnimatedBackground';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';
import TrustSignals from '@/components/TrustSignals';

const HeadacheEyeFatiguePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Eye Strain and Vision-Related Headaches",
    "description": "Eye strain and vision-related headaches can result from various visual problems and digital device usage.",
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Vision Therapy",
        "description": "Specialized exercises and treatments to improve visual function and reduce eye strain."
      },
      {
        "@type": "MedicalProcedure",
        "name": "Computer Vision Syndrome Treatment",
        "description": "Comprehensive evaluation and treatment for digital eye strain and computer-related vision problems."
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Vision Therapy for Headaches | Dr. Bonakdar"
        description="Headaches from eye strain? Expert vision therapy available. Same-day appointments. Call (949) 776-0726"
        keywords="eye strain treatment, vision headaches, digital eye strain, computer vision syndrome, eye fatigue, Orange County, eye doctor, optometrist"
        canonicalUrl="https://eyecarecenteroc.com/conditions/headache-eye-fatigue"
        ogType="article"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-r from-purple-50 to-pink-50 relative overflow-hidden">
          <AnimatedBackground colorScheme="purple" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-eyecare-blue">Headache</span> & Eye Fatigue Treatment
              </h1>
              <p className="text-xl mb-6 text-gray-700 max-w-3xl mx-auto">
                Vision-related headaches and digital eye strain treatment with personalized care plans. Find relief from computer vision syndrome and eye fatigue.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
                <p className="text-lg font-semibold text-blue-700">
                  💡 Headache relief starts with proper vision care
                </p>
              </div>

              <div className="mb-6">
                <a
                  href="tel:9497760726"
                  className="text-2xl md:text-3xl font-bold text-eyecare-blue hover:text-eyecare-dark-blue transition-colors callrail-phone"
                >
                  (949) 776-0726
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:9497760726"
                  className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300 callrail-phone"
                >
                  Call Now: (949) 776-0726
                </a>

                <AppointmentRequestDialog>
                  <button className="bg-white border-2 border-eyecare-blue text-eyecare-blue hover:bg-eyecare-blue hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300">
                    Schedule Consultation
                  </button>
                </AppointmentRequestDialog>
              </div>
            </div>
          </div>
        </section>
        
        <TrustSignals className="py-12 bg-gray-50" />
        
        {/* Page sections */}
        <UnderstandingHeadacheEyeFatigue />
        <CausesSymptoms />
        <TreatmentOptions />
        <PreventionTips />
        <VendorLogoCarousel 
          title="Our Trusted Vision Therapy Partners" 
          description="We use advanced technology and methods for treating eye strain and vision-related headaches"
          category="vision-therapy"
        />
        <HeadacheEyeFatigueCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default HeadacheEyeFatiguePage;
