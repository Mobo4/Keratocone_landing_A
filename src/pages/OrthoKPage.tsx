
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UnderstandingOrthoK from '@/components/orthok/UnderstandingOrthoK';
import OrthoKBenefits from '@/components/orthok/OrthoKBenefits';
import OrthoKProcess from '@/components/orthok/OrthoKProcess';
import MyopiaManagement from '@/components/orthok/MyopiaManagement';
import OrthoKCTA from '@/components/orthok/OrthoKCTA';
import VendorLogoCarousel from '@/components/VendorLogoCarousel';
import SEO from '@/components/SEO';
import AnimatedBackground from '@/components/AnimatedBackground';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';
import TrustSignals from '@/components/TrustSignals';

const OrthoKPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Orthokeratology",
    "alternateName": "Ortho-K",
    "description": "Orthokeratology is a non-surgical procedure that uses specially designed contact lenses to temporarily reshape the cornea to improve vision.",
    "medicalSpecialty": "Optometry"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Ortho-K Myopia Control Orange County | Corneal Reshaping Specialist | Dr. Bonakdar"
        description="Advanced Ortho-K myopia control Orange County. Slow myopia progression 50%. FDA-approved corneal reshaping. Same-day appointments. Call (949) 208-9886"
        keywords="orthokeratology Orange County, ortho-k Orange County, myopia control Orange County, corneal reshaping Orange County, overnight vision correction Orange County, myopia management Orange County, pediatric myopia Orange County, myopia specialist Orange County, corneal molding Orange County, contact lens specialist Orange County, Dr. Bonakdar ortho-k"
        canonicalUrl="https://eyecarecenteroc.com/conditions/ortho-k"
        ogType="article"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-r from-teal-50 to-cyan-50 relative overflow-hidden">
          <AnimatedBackground colorScheme="teal" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Orange County's Pioneer in <span className="text-eyecare-blue">Ortho-K</span> Myopia Control
              </h1>
              <p className="text-xl mb-6 text-gray-700 max-w-3xl mx-auto">
                Serving Orange County families since 1995. Over 200 children fitted with Ortho-K from Irvine to Newport Beach. Specialized protocols for Orange County's active outdoor lifestyle and year-round sun exposure.
              </p>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
                <p className="text-lg font-semibold text-orange-700">
                  👥 Stop your child's vision from getting worse - Same-week fittings
                </p>
              </div>

              <div className="mb-6">
                <a
                  href="tel:9492089886"
                  className="text-2xl md:text-3xl font-bold text-eyecare-blue hover:text-eyecare-dark-blue transition-colors callrail-phone"
                >
                  (949) 208-9886
                </a>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:9492089886"
                  className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300 callrail-phone"
                >
                  Call Now: (949) 208-9886
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
        <UnderstandingOrthoK />
        <OrthoKBenefits />
        <OrthoKProcess />
        <MyopiaManagement />
        <VendorLogoCarousel 
          title="Our Trusted Ortho-K Partners" 
          description="We work with leading manufacturers of orthokeratology lenses"
          category="orthok"
        />
        <OrthoKCTA />
      </main>
      
      <Footer />
    </div>
  );
};

export default OrthoKPage;
