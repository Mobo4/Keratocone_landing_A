
import React from 'react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import StatCounter from '@/components/StatCounter';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTranslation } from 'react-i18next';

const TreatmentResults = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-gradient-to-r from-white to-green-50 relative overflow-hidden">
      <AnimatedBackground colorScheme="green" numberOfCircles={8} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('dryEye.results.title')} <span className="text-eyecare-blue">{t('dryEye.results.highlight')}</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t('dryEye.results.subtitle')}
          </p>
        </div>
        
        <div className="mb-12">
          <BeforeAfterSlider 
            image="/lovable-uploads/Before_after_01.png"
            beforeLabel={t('dryEye.results.beforeLabel')}
            afterLabel={t('dryEye.results.afterLabel')}
          />
          <p className="text-center mt-4 text-sm text-gray-500 italic">
            {t('dryEye.results.imageCaption')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <StatCounter endValue={92} label={t('dryEye.results.stats.satisfaction')} suffix="%" />
          <StatCounter endValue={4} label={t('dryEye.results.stats.sessions')} />
          <StatCounter endValue={85} label={t('dryEye.results.stats.reduction')} suffix="%" />
        </div>
      </div>
    </section>
  );
};

export default TreatmentResults;
