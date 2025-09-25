
import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';

const UnderstandingHeadacheEyeFatigue = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  return (
    <section className="py-16 bg-gradient-to-r from-white to-blue-50 relative overflow-hidden">
      <AnimatedBackground colorScheme="blue" numberOfCircles={10} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              {t('headache.understanding.title', 'Understanding Headaches')} <span className="text-eyecare-blue">{t('headache.understanding.highlight', '& Eye Fatigue')}</span>
            </h2>
            <p className="text-gray-700 mb-6">
              {t('headache.understanding.paragraph1', 'Eye strain and vision-related headaches are increasingly common in our digital age. These uncomfortable symptoms can significantly impact your daily productivity, comfort, and overall quality of life.')}
            </p>
            <p className="text-gray-700">
              {t('headache.understanding.paragraph2', 'Understanding the connection between your eyes and headaches is crucial for finding effective relief. Our comprehensive approach addresses both the symptoms and underlying causes to provide lasting solutions.')}
            </p>
            
            <div className="mt-8 p-4 bg-blue-50 border-l-4 border-eyecare-blue rounded-r-lg">
              <p className="text-eyecare-blue font-medium">{t('headache.understanding.didYouKnow.title', 'Did You Know?')}</p>
              <p className="text-gray-700 mt-2">{t('headache.understanding.didYouKnow.fact', 'Up to 90% of people who work on computers experience some form of eye strain, which can lead to headaches and reduced productivity.')}</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/headache_eyestrain.jpg" 
              alt={t('headache.understanding.imageAlt', 'Person experiencing headache and eye strain')}
              className="rounded-lg shadow-xl max-w-full lg:max-w-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = "https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZGFjaGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderstandingHeadacheEyeFatigue;
