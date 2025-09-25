
import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const KeratoconusTreatment = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  
  // Get the benefits as an array, with fallback
  const benefitsList = t('keratoconus.treatment.benefits.list', { returnObjects: true });
  const benefits = Array.isArray(benefitsList) ? benefitsList : Object.values(benefitsList || {});
  
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 relative overflow-hidden">
      <AnimatedBackground colorScheme="teal" numberOfCircles={12} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {t('keratoconus.treatment.title')} <span className="text-eyecare-blue">Treatment</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t('keratoconus.treatment.subtitle')}
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <Card className="md:w-1/2 hover:shadow-xl transition-all duration-300 hover:shadow-blue-200/40 hover:border-eyecare-blue hover:border border">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">{t('keratoconus.treatment.benefits.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                {benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              
              <div className="rounded-lg overflow-hidden shadow-lg relative hover:scale-[1.03] transition-transform duration-300">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-eyecare-light-purple rounded-full opacity-40 z-0 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-eyecare-light-purple rounded-full opacity-40 z-0 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="md:w-1/2 hover:shadow-xl transition-all duration-300 hover:shadow-blue-200/40 hover:border-eyecare-blue hover:border border">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">{t('keratoconus.treatment.howItWorks.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                {t('keratoconus.treatment.howItWorks.description')}
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://promo.eyecarecenteroc.com/lead-magnet-page-6841-9006-6616-2060" 
                  className="inline-block bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-md transition-colors hover:scale-105 transform duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('keratoconus.treatment.howItWorks.button')}
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default KeratoconusTreatment;
