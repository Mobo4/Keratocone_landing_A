
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardImage, CardTitle } from "@/components/ui/card";
import AnimatedBackground from '@/components/AnimatedBackground';

const ServiceOverview = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 relative overflow-hidden">
      <AnimatedBackground colorScheme="blue" numberOfCircles={10} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('services.overview.title')} <span className="text-eyecare-blue">{t('services.overview.highlight')}</span> {t('services.overview.subtitle')}
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            {t('services.overview.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardImage 
                src="/lovable-uploads/Dryeye_01.png"
                alt="Advanced Eye Examination"
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle>{t('services.overview.diagnosticTitle')}</CardTitle>
                <CardDescription>
                  {t('services.overview.diagnosticDescription')}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-eyecare-lighter-blue flex items-center justify-center text-eyecare-blue flex-shrink-0">
                <span className="text-xl font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('services.features.personalizedCare.title')}</h3>
                <p className="text-gray-600">
                  {t('services.features.personalizedCare.description')}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-eyecare-lighter-blue flex items-center justify-center text-eyecare-blue flex-shrink-0">
                <span className="text-xl font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('services.features.specializedTreatment.title')}</h3>
                <p className="text-gray-600">
                  {t('services.features.specializedTreatment.description')}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-eyecare-lighter-blue flex items-center justify-center text-eyecare-blue flex-shrink-0">
                <span className="text-xl font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('services.features.comprehensiveCorrection.title')}</h3>
                <p className="text-gray-600">
                  {t('services.features.comprehensiveCorrection.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
