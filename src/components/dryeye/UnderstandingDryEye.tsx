
import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTranslation } from 'react-i18next';

const UnderstandingDryEye = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-gradient-to-r from-white to-eyecare-lighter-blue/20 relative overflow-hidden">
      <AnimatedBackground colorScheme="purple" numberOfCircles={8} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              {t('dryEye.understanding.title')} <span className="text-eyecare-blue">{t('dryEye.understanding.highlight')}</span>
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                {t('dryEye.understanding.paragraph1')}
              </p>
              <p className="text-gray-700">
                {t('dryEye.understanding.paragraph2')}
              </p>
              <p className="text-gray-700">
                {t('dryEye.understanding.paragraph3')}
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-16 h-16 md:w-20 md:h-20 bg-eyecare-lighter-blue rounded-full opacity-50 z-0 animate-pulse"></div>
              <img 
                src="/lovable-uploads/Dryeye_01.png" 
                alt={t('dryEye.understanding.imageAlt')} 
                className="rounded-lg shadow-lg w-full h-auto hover:scale-[1.02] transition-transform duration-500 relative z-10" 
              />
              <div className="absolute -bottom-5 -right-5 w-16 h-16 md:w-20 md:h-20 bg-eyecare-lighter-blue rounded-full opacity-50 z-0 animate-pulse" style={{animationDelay: '1s'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderstandingDryEye;
