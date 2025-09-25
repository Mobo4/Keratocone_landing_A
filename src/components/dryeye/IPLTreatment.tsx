
import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTranslation } from 'react-i18next';

interface Benefit {
  title: string;
  description: string;
}

const IPLTreatment = () => {
  const isMobile = useIsMobile();
  const { t, i18n } = useTranslation();
  
  // Default benefits in English to be used as fallbacks
  const defaultBenefits = [
    {
      title: "Long-lasting Relief",
      description: "Unlike eye drops that provide temporary comfort, IPL addresses the root causes for sustained relief from dry eye symptoms."
    },
    {
      title: "Reduced Inflammation",
      description: "IPL therapy effectively reduces inflammation around the eyelids, helping to restore normal tear film function."
    },
    {
      title: "Quick & Comfortable",
      description: "Treatment sessions take only minutes to complete with minimal discomfort and no downtime required."
    }
  ];
  
  // Try to get translated benefits, fall back to English if not available
  const benefitsTranslation = t('dryEye.ipl.benefits', { returnObjects: true });
  const benefits = Array.isArray(benefitsTranslation) && benefitsTranslation.length > 0 
    ? benefitsTranslation 
    : defaultBenefits;

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-white relative overflow-hidden">
      <AnimatedBackground colorScheme="blue" numberOfCircles={8} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              {t('dryEye.ipl.title', 'Intense Pulsed Light (IPL)')}
            </h2>
            <p className="text-gray-600 mb-6">
              {t('dryEye.ipl.description1', 'IPL is a revolutionary treatment for dry eye disease that targets the underlying causes rather than just the symptoms. Using specific wavelengths of light, IPL reduces inflammation around the eyelids and improves meibomian gland function.')}
            </p>
            <p className="text-gray-600 mb-6">
              {t('dryEye.ipl.description2', 'This non-invasive procedure takes only minutes to perform and provides lasting relief for many patients suffering from chronic dry eye disease.')}
            </p>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/IPL_01.png" 
                alt={t('dryEye.ipl.imageAlt', "IPL Treatment Procedure")}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            {t('dryEye.ipl.benefitsTitle', 'Benefits')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-semibold mb-3">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            {t('dryEye.ipl.whatToExpectTitle', 'What To Expect')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3">{t('dryEye.ipl.glandImaging', 'Meibomian Gland Imaging')}</h4>
              <p className="text-gray-600">
                {t('dryEye.ipl.glandImagingDescription', "Advanced imaging technology allows us to examine the structure of your meibomian glands and identify any dysfunction or blockages.")}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-3">{t('dryEye.ipl.tearFilmAnalysis', 'Tear Film Analysis')}</h4>
              <p className="text-gray-600">
                {t('dryEye.ipl.tearFilmDescription', "We evaluate tear quality, quantity, and evaporation rate using specialized equipment to determine the specific type of dry eye you're experiencing.")}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            {t('dryEye.ipl.testimonialSectionTitle', 'Patient Testimonials')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <blockquote className="text-gray-600 pl-4 italic">
                {t('dryEye.ipl.testimonialQuote1', "After struggling with dry eyes for years, the comprehensive testing at Eye Care Center of OC finally pinpointed my specific problem. Now I'm getting treatment that actually works!")}
                <footer className="text-right mt-2 font-medium">— {t('dryEye.ipl.testimonialAuthor1', 'Maria S.')}</footer>
              </blockquote>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <blockquote className="text-gray-600 pl-4 italic">
                {t('dryEye.ipl.testimonialQuote2', "The IPL treatment has been life-changing. My eyes feel more comfortable than they have in years, and I'm not constantly reaching for eye drops anymore.")}
                <footer className="text-right mt-2 font-medium">— {t('dryEye.ipl.testimonialAuthor2', 'David L.')}</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IPLTreatment;
