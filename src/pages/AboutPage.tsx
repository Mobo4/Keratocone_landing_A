
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import TeamMembers from '@/components/TeamMembers';
import OurMission from '@/components/OurMission';
import ClinicTour from '@/components/ClinicTour';
import SEO from '@/components/SEO';

const AboutPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dr. Alexander Bonakdar",
    "jobTitle": "Optometrist",
    "worksFor": {
      "@type": "Organization",
      "name": "Eyecare Center of Orange County"
    },
    "alumniOf": "UC Berkeley School of Optometry",
    "knowsAbout": ["Optometry", "Ophthalmology", "Corneal Specialist", "Dry Eye Treatment", "Keratoconus Management", "Corneal Cross-Linking", "Contact Lens Fitting", "Myopia Control", "IPL Therapy", "Scleral Lenses"]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="About Dr. Alexander Bonakdar | Orange County Eye Care Specialist"
        description="Meet Dr. Alexander Bonakdar, experienced eye care specialist providing advanced optometry and ophthalmology services in Orange County. Expert in corneal conditions, dry eye, and myopia control."
        keywords="Dr. Alexander Bonakdar Orange County, Orange County eye specialist, eye care team Orange County, corneal specialist Orange County, dry eye expert Orange County, keratoconus specialist Orange County, myopia control specialist Orange County, advanced eye care Orange County, medical eye care Orange County"
        canonicalUrl="https://eyecarecenteroc.com/about"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          translationKey="about.hero"
          buttonLink="/contact"
          backgroundClass="bg-gradient-to-r from-blue-50 to-eyecare-lighter-blue"
          colorScheme="blue"
        />
        
        {/* Page sections */}
        <AboutSection />
        <TeamMembers />
        <OurMission />
        <ClinicTour />
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
