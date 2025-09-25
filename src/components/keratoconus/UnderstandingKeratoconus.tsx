
import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTranslation } from 'react-i18next';

const UnderstandingKeratoconus = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  
  // Safe translation handling for title parts
  const mainTitle = t('keratoconus.understanding.title', 'Understanding');
  const highlightTitle = t('keratoconus.understanding.highlight', 'Keratoconus');
  
  return (
    <section className="py-16 bg-gradient-to-r from-white to-eyecare-lighter-blue/20 relative overflow-hidden">
      <AnimatedBackground colorScheme="purple" numberOfCircles={10} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">
              {mainTitle} <span className="text-eyecare-blue">{highlightTitle}</span>
            </h2>
            <p className="text-gray-700 mb-4">
              {t('keratoconus.understanding.paragraph1')}
            </p>
            <p className="text-gray-700 mb-4">
              {t('keratoconus.understanding.paragraph2')}
            </p>
            <p className="text-gray-700">
              {t('keratoconus.understanding.paragraph3')}
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-eyecare-lighter-blue rounded-full opacity-50 z-0 animate-pulse"></div>
              <img src="/lovable-uploads/Keratoconus_eye.png" alt={t('keratoconus.understanding.imageAlt')} className="rounded-lg shadow-lg w-full h-auto hover:scale-[1.02] transition-transform duration-500 relative z-10" />
              <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-eyecare-lighter-blue rounded-full opacity-50 z-0 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderstandingKeratoconus;
