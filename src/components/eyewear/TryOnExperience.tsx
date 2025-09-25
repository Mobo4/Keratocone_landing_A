
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';

const TryOnExperience = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('tryOnExperience.title.prefix')} <span className="text-eyecare-blue">{t('tryOnExperience.title.highlight')}</span> {t('tryOnExperience.title.suffix')}
            </h2>
            
            <div className="space-y-6">
              <p className="text-gray-700">
                {t('tryOnExperience.description')}
              </p>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-eyecare-lighter-blue flex items-center justify-center text-eyecare-blue flex-shrink-0">
                  <span className="text-lg font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">{t('tryOnExperience.steps.consultation.title')}</h4>
                  <p className="text-gray-600">
                    {t('tryOnExperience.steps.consultation.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-eyecare-lighter-blue flex items-center justify-center text-eyecare-blue flex-shrink-0">
                  <span className="text-lg font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">{t('tryOnExperience.steps.tryBefore.title')}</h4>
                  <p className="text-gray-600">
                    {t('tryOnExperience.steps.tryBefore.description')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-eyecare-lighter-blue flex items-center justify-center text-eyecare-blue flex-shrink-0">
                  <span className="text-lg font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">{t('tryOnExperience.steps.fitting.title')}</h4>
                  <p className="text-gray-600">
                    {t('tryOnExperience.steps.fitting.description')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="https://promo.eyecarecenteroc.com/lead-magnet-page-6841-9006-6616-2060" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-md transition-colors inline-block hover:scale-105 transform duration-300"
              >
                {t('tryOnExperience.buttonText')}
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative bg-eyecare-lighter-blue/20 rounded-lg p-12">
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-eyecare-lighter-blue rounded-full opacity-50 z-0 animate-pulse"></div>
              <div className="h-64 flex items-center justify-center">
                <div className="text-eyecare-blue text-center">
                  <h3 className="text-xl font-semibold mb-2">{t('tryOnExperience.showcase.title')}</h3>
                  <p>{t('tryOnExperience.showcase.description')}</p>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-eyecare-lighter-blue rounded-full opacity-50 z-0 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryOnExperience;
