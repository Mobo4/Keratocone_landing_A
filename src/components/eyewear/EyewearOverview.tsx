
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '@/contexts/LanguageContext';

const EyewearOverview = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const pathPrefix = language === 'es' ? '/es' : '';
  
  return (
    <section className="py-16 relative overflow-hidden">
      <AnimatedBackground colorScheme="purple" numberOfCircles={12} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('eyewearOverview.title.prefix')} <span className="text-eyecare-blue">{t('eyewearOverview.title.highlight')}</span> {t('eyewearOverview.title.suffix')}
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            {t('eyewearOverview.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4">{t('eyewearOverview.designerFrames.title')}</h3>
            <p className="text-gray-700 mb-6">
              {t('eyewearOverview.designerFrames.description')}
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h4 className="text-xl font-semibold mb-4 text-eyecare-blue">{t('eyewearOverview.features.title')}</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-eyecare-blue mr-2">•</span>
                  <span>{t('eyewearOverview.features.item1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-eyecare-blue mr-2">•</span>
                  <span>{t('eyewearOverview.features.item2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-eyecare-blue mr-2">•</span>
                  <span>{t('eyewearOverview.features.item3')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-eyecare-blue mr-2">•</span>
                  <span>{t('eyewearOverview.features.item4')}</span>
                </li>
              </ul>
            </div>
            
            <Link to={`${pathPrefix}/schedule`} className="inline-flex items-center text-eyecare-blue hover:text-eyecare-dark-blue font-medium group">
              <span>{t('eyewearOverview.styleConsultation')}</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/b9931ef0-a30e-4856-b90c-75eccb4e6be7.png" 
              alt={t('eyewearOverview.modelImageAlt')} 
              className="w-full h-64 object-contain p-8 bg-gray-50" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <img 
              src="/lovable-uploads/de4332bb-d7f8-4ff9-b288-60783dc8ade3.png" 
              alt={t('eyewearOverview.lensImageAlt')} 
              className="rounded-lg shadow-lg" 
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-4">{t('eyewearOverview.lensTech.title')}</h3>
            <p className="text-gray-700 mb-6">
              {t('eyewearOverview.lensTech.description')}
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-eyecare-blue">{t('eyewearOverview.lensTech.option1.title')}</h4>
                <p className="text-sm text-gray-600">{t('eyewearOverview.lensTech.option1.description')}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-eyecare-blue">{t('eyewearOverview.lensTech.option2.title')}</h4>
                <p className="text-sm text-gray-600">{t('eyewearOverview.lensTech.option2.description')}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-eyecare-blue">{t('eyewearOverview.lensTech.option3.title')}</h4>
                <p className="text-sm text-gray-600">{t('eyewearOverview.lensTech.option3.description')}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-eyecare-blue">{t('eyewearOverview.lensTech.option4.title')}</h4>
                <p className="text-sm text-gray-600">{t('eyewearOverview.lensTech.option4.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EyewearOverview;
