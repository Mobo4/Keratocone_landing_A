
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import VendorLogoCarousel from '@/components/VendorLogoCarousel';
import SEO from '@/components/SEO';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePageImagePreloader } from '@/hooks/useImagePreloader';
import { useAnalytics } from '@/hooks/useAnalytics';
import { getUTMParams } from '@/utils/utmUtils';
import { useCallRailPhone } from '@/hooks/useCallRailPhone';
import TrustSignals from '@/components/TrustSignals';

const Index = () => {
  const { language } = useLanguage();
  const { trackEvent } = useAnalytics();
  const { phoneNumber } = useCallRailPhone();
  
  // Preload critical images for homepage
  usePageImagePreloader('home');

  // Track UTM parameters for GMB campaign
  useEffect(() => {
    const utmParams = getUTMParams();
    
    if (utmParams.utm_campaign === 'gmb') {
      trackEvent('gmb_landing', {
        utm_source: utmParams.utm_source,
        utm_medium: utmParams.utm_medium,
        utm_campaign: utmParams.utm_campaign,
        page: 'homepage'
      });
    }
    
    // Track any UTM parameters on homepage visit
    if (Object.keys(utmParams).some(key => utmParams[key as keyof typeof utmParams])) {
      trackEvent('homepage_utm_visit', utmParams as Record<string, unknown>);
    }
  }, [trackEvent]);
  
  const title = language === 'es' ?
    "Centro de Cuidado Ocular Orange County CA | Especialistas Oftalmología & Optometría | Santa Ana" :
    "EyeCare Center of Orange County | Expert Ophthalmology & Optometry | Advanced Vision Solutions";

  const description = language === 'es' ?
    "✓ Centro oftalmológico líder Orange County CA ✓ Especialistas optometría & oftalmología ✓ Exámenes médicos oculares avanzados ✓ Tratamiento ojo seco médico ✓ Queratocono cross-linking ✓ LASIK médico ✓ Cirugía cataratas ✓ Santa Ana, Irvine, Newport Beach ✓ Aceptamos medical & vision insurance ✓ Citas urgentes mismo día" :
    "✓ Leading ophthalmology & optometry center Orange County CA ✓ Medical eye care specialists ✓ Advanced ocular disease management ✓ Medical dry eye treatment center ✓ Corneal cross-linking expertise ✓ Medical LASIK evaluations ✓ Cataract surgical planning ✓ Santa Ana, Irvine, Newport Beach ✓ Medical & vision insurance accepted ✓ Same-day urgent eye care";
    
  const keywords = language === 'es' ?
    "centro oftalmológico Orange County, especialistas oftalmología optometría Santa Ana, médico ojos Orange County, oftalmólogo Irvine, especialista cornea Newport Beach, cirugía ocular Costa Mesa, centro médico ocular Tustin, oftalmología médica Anaheim, especialista retina Huntington Beach, glaucoma especialista Garden Grove, centro oftalmológico cerca de mi, mejor oftalmólogo Orange County, examen médico ocular completo, tratamiento médico ojo seco, queratocono cross-linking, evaluación LASIK médica, cirugía cataratas Orange County, especialista córnea, oftalmología médica avanzada, centro enfermedades oculares, especialista degeneración macular, centro retinopatía diabética, glaucoma tratamiento médico, uveítis especialista, queratitis especialista, distrofia corneal centro, cirugía refractiva Orange County, implantes ICL, centro baja visión médica, rehabilitación visual médica, oftalmología pediátrica, centro urgencias oculares, seguro médico aceptado, VSP EyeMed Blue Cross, Spanish oftalmología, profesionales bilingües médicos" :
    "ophthalmology Orange County, ophthalmologist Orange County, medical eye care Orange County, corneal specialist Orange County, retinal specialist Santa Ana, glaucoma specialist Irvine, medical optometry Newport Beach, ocular disease management Costa Mesa, corneal cross-linking Orange County, medical LASIK Orange County, cataract surgery Orange County, retinal detachment Orange County, macular degeneration Orange County, diabetic retinopathy Orange County, corneal dystrophy Orange County, uveitis specialist Orange County, keratitis treatment Orange County, medical dry eye Orange County, ophthalmology emergency Orange County, refractive surgery Orange County, ICL implants Orange County, medical low vision Orange County, pediatric ophthalmology Orange County, oculoplastic surgery Orange County, neuro-ophthalmology Orange County, vitreoretinal surgery Orange County, corneal transplant Orange County, ptosis repair Orange County, eyelid surgery Orange County, medical eye insurance accepted, urgent eye care Orange County, Spanish ophthalmology services, bilingual medical eye care, Orange County eye specialists, advanced ocular diagnostics Orange County, medical contact lens fitting Orange County";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness", "Optometrist", "Ophthalmologist"],
    "name": language === 'es' ? "Centro de Cuidado Ocular de Orange County" : "EyeCare Center of Orange County",
    "description": description,
    "url": language === 'es' ? "https://eyecarecenteroc.com/es/" : "https://eyecarecenteroc.com/",
    "telephone": `+1-${phoneNumber.replace(/[^\d]/g, '')}`,
    "email": "eyecarecenteroc@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "801 North Tustin Ave #404",
      "addressLocality": "Santa Ana",
      "addressRegion": "CA",
      "postalCode": "92705",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.7455",
      "longitude": "-117.8677"
    },
    "openingHours": [
      "Mo-Th 09:00-18:00",
      "Fr 09:00-17:00", 
      "Sa 09:00-14:00"
    ],
    "medicalSpecialty": [
      "Optometry",
      "Keratoconus Treatment",
      "Dry Eye Treatment",
      "Contact Lens Fitting",
      "Pediatric Eye Care"
    ],
    "founder": {
      "@type": "Person",
      "name": "Medical Director",
      "jobTitle": "Doctor of Optometry"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": language === 'es' ? "Servicios de Cuidado Ocular" : "Eye Care Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": language === 'es' ? "Exámenes Oculares Completos" : "Comprehensive Eye Exams"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": language === 'es' ? "Tratamiento Ojo Seco" : "Dry Eye Treatment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": language === 'es' ? "Manejo Queratocono" : "Keratoconus Management"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        canonicalUrl={language === 'es' ? "https://eyecarecenteroc.com/es/" : "https://eyecarecenteroc.com/"}
        structuredData={structuredData}
        pageType="home"
        googleVerification={import.meta.env.VITE_GOOGLE_VERIFICATION}
        bingVerification={import.meta.env.VITE_BING_VERIFICATION}
        yandexVerification={import.meta.env.VITE_YANDEX_VERIFICATION}
      />
      
      <Header />
      
      <main className="flex-1" id="main-content">
        <Hero 
          translationKey="hero"
          buttonLink="https://promo.eyecarecenteroc.com/lead-magnet-page-6841-9006-6616-2060"
          backgroundClass="bg-gradient-to-r from-blue-50 to-eyecare-lighter-blue"
          colorScheme="blue"
        />
        
        <TrustSignals className="py-16 bg-gray-50" />
        
        <WhyChooseUs />
        
        <VendorLogoCarousel
          title="Our Trusted Partners" 
          description="We work with leading manufacturers and technology partners"
          category="all"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
