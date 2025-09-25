
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import UnderstandingDryEye from '@/components/dryeye/UnderstandingDryEye';
import DiagnosticProcess from '@/components/dryeye/DiagnosticProcess';
import ComprehensiveTreatment from '@/components/dryeye/ComprehensiveTreatment';
import IPLTreatment from '@/components/dryeye/IPLTreatment';
import TreatmentResults from '@/components/dryeye/TreatmentResults';
import DryEyeCTA from '@/components/dryeye/DryEyeCTA';
import VendorLogoCarousel from '@/components/VendorLogoCarousel';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';
import SEO from '@/components/SEO';
import TrustSignals from '@/components/TrustSignals';

const DryEyePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Dry Eye Syndrome",
    "description": "Dry eye syndrome is a common condition that occurs when tears aren't able to provide adequate lubrication for your eyes.",
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "IPL Therapy",
        "description": "Intense Pulsed Light therapy to treat meibomian gland dysfunction and improve tear quality."
      },
      {
        "@type": "MedicalProcedure", 
        "name": "LipiFlow",
        "description": "Thermal pulsation treatment that applies heat and massage to unclog blocked meibomian glands."
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Medical Dry Eye Treatment Orange County | IPL Specialist | Dr. Bonakdar"
        description="Advanced medical dry eye treatment center Orange County. IPL therapy, LipiFlow, BlephEx treatments. Same-day ophthalmology appointments. Call (949) 997-3927"
        keywords="medical dry eye treatment Orange County, IPL therapy Orange County, dry eye specialist Orange County, meibomian gland dysfunction Orange County, LipiFlow Orange County, BlephEx Orange County, ocular surface disease Orange County, dry eye ophthalmologist Orange County, tear film dysfunction Orange County, chronic dry eye Orange County, Dr. Bonakdar dry eye"
        canonicalUrl="https://eyecarecenteroc.com/conditions/dry-eye"
        ogType="article"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Orange County's <span className="text-eyecare-blue">Environmental Dry Eye</span> Specialist
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              30 years treating Orange County's unique dry eye challenges: Santa Ana winds, marine layer humidity, and air quality. Over 3,000 patients treated with specialized IPL therapy and LipiFlow protocols adapted for OC's Mediterranean climate.
            </p>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
              <p className="text-lg font-semibold text-red-700">
                🚨 Same-day appointments for severe dry eye
              </p>
            </div>
            
            <div className="mb-6">
              <a 
                href="tel:9499973927"
                className="text-2xl md:text-3xl font-bold text-eyecare-blue hover:text-eyecare-dark-blue transition-colors callrail-phone"
              >
                (949) 997-3927
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:9499973927"
                className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300 callrail-phone"
              >
                Call Now: (949) 997-3927
              </a>
              
              <AppointmentRequestDialog>
                <button className="bg-white border-2 border-eyecare-blue text-eyecare-blue hover:bg-eyecare-blue hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300">
                  Schedule Consultation
                </button>
              </AppointmentRequestDialog>
            </div>
          </div>
        </section>
        
        <TrustSignals className="py-12 bg-gray-50" />
        
        {/* Page sections */}
        <UnderstandingDryEye />
        <DiagnosticProcess />
        <ComprehensiveTreatment />
        <IPLTreatment />
        <TreatmentResults />
        <VendorLogoCarousel 
          title="Our Trusted Dry Eye Treatment Partners" 
          description="We work with leading manufacturers of dry eye treatment technology"
          category="dry-eye"
        />
        <DryEyeCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default DryEyePage;
