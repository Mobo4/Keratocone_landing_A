
import React from 'react';
import { Droplet } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import ServiceCard from '@/components/ServiceCard';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTranslation } from 'react-i18next';

interface Treatment {
  title: string;
  description: string;
  link?: string;
}

const ComprehensiveTreatment = () => {
  const isMobile = useIsMobile();
  const { t, i18n } = useTranslation();
  
  // Default treatments in English
  const defaultTreatments = [
    {
      title: "Artificial Tears",
      description: "Premium lubricating drops to supplement natural tear production and provide temporary relief.",
      icon: <Droplet className="w-6 h-6" />
    },
    {
      title: "Prescription Medications",
      description: "Specialized medications to increase tear production or reduce inflammation associated with dry eye.",
      icon: <Droplet className="w-6 h-6" />
    },
    {
      title: "Punctal Plugs",
      description: "Tiny devices inserted into tear ducts to prevent drainage, keeping eyes moist longer.",
      icon: <Droplet className="w-6 h-6" />
    }
  ];
  
  // Get treatments from translations with fallback
  const treatmentsTranslation = t('dryEye.treatments.options', { returnObjects: true });
  const treatmentsArray = Array.isArray(treatmentsTranslation) && treatmentsTranslation.length > 0
    ? treatmentsTranslation
    : defaultTreatments;
  
  // Add icon to each treatment
  const treatments = treatmentsArray.map(treatment => ({
    ...treatment,
    icon: <Droplet className="w-6 h-6" />,
  }));

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-purple-50 relative overflow-hidden">
      <AnimatedBackground colorScheme="blue" numberOfCircles={12} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span>{t('dryEye.treatments.title') || 'Comprehensive'}</span>{' '}
            <span className="text-eyecare-blue">{t('dryEye.treatments.highlight') || 'Treatment Options'}</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t('dryEye.treatments.subtitle') || 'We offer a range of effective treatments tailored to your specific dry eye condition and symptoms.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <ServiceCard
              key={index}
              title={treatment.title}
              description={treatment.description}
              icon={treatment.icon}
              link={treatment.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveTreatment;
