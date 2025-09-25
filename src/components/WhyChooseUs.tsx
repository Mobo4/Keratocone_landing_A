
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Lightbulb, Users, Heart, Award, Microscope, Handshake } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const WhyChooseUs = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      titleKey: "whyChooseUs.expertise.title",
      descriptionKey: "whyChooseUs.expertise.description"
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      titleKey: "whyChooseUs.technology.title",
      descriptionKey: "whyChooseUs.technology.description"
    },
    {
      icon: <Users className="w-8 h-8" />,
      titleKey: "whyChooseUs.treatment.title",
      descriptionKey: "whyChooseUs.treatment.description"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      titleKey: "whyChooseUs.care.title",
      descriptionKey: "whyChooseUs.care.description"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      titleKey: "whyChooseUs.approach.title",
      descriptionKey: "whyChooseUs.approach.description"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      titleKey: "whyChooseUs.relationships.title",
      descriptionKey: "whyChooseUs.relationships.description"
    }
  ];

  // Safe translation handling for title parts
  const mainTitle = t('whyChooseUs.title', 'Why Choose');
  const highlightTitle = t('whyChooseUs.highlight', 'Our Practice');

  return (
    <section className="py-16 bg-gradient-to-r from-white to-eyecare-lighter-blue/30 relative overflow-hidden">
      <AnimatedBackground colorScheme="purple" numberOfCircles={15} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {mainTitle} <span className="text-eyecare-blue">{highlightTitle}</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            {t('whyChooseUs.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start gap-4">
                <div className="text-eyecare-blue flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-left">{t(feature.titleKey)}</h3>
                  <p className="text-gray-700 leading-relaxed">{t(feature.descriptionKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="https://promo.eyecarecenteroc.com/lead-magnet-page-6841-9006-6616-2060"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-3 rounded-md text-lg font-medium transition-colors hover:scale-105 transform duration-300"
          >
            {t('whyChooseUs.ctaButton')}
            <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
