
import React from 'react';
import { Check } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';

const UnderstandingOrthoK = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  return (
    <section className="py-16 bg-gradient-to-r from-white to-green-50 relative overflow-hidden">
      <AnimatedBackground colorScheme="green" numberOfCircles={10} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t('orthoK.understanding.title')} <span className="text-eyecare-blue">{t('orthoK.understanding.highlight')}</span></h2>
            <p className="text-gray-700 mb-6">
              {t('orthoK.understanding.paragraph1')}
            </p>
            <p className="text-gray-700">
              {t('orthoK.understanding.paragraph2')}
            </p>
            
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{t('orthoK.understanding.benefits.title')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="text-eyecare-blue mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>{t('orthoK.understanding.benefits.item1')}</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-eyecare-blue mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>{t('orthoK.understanding.benefits.item2')}</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-eyecare-blue mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>{t('orthoK.understanding.benefits.item3')}</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-eyecare-blue mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>{t('orthoK.understanding.benefits.item4')}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/3f6b71df-0758-438f-aa02-4b9e50e90049.png"
              alt={t('orthoK.understanding.imageAlt')}
              className="rounded-lg shadow-xl max-w-full lg:max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderstandingOrthoK;
