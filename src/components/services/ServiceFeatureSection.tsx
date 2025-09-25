
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardImage, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceFeatureSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-gradient-to-r from-white to-eyecare-lighter-blue/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t('services.specializedTreatments.title')} <span className="text-eyecare-blue">{t('services.specializedTreatments.highlight')}</span>
        </h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
          {t('services.specializedTreatments.description')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <CardImage 
                src="/lovable-uploads/IPL_01.png"
                alt="IPL Treatment for Dry Eye"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-bold">{t('services.specializedTreatments.ipl.title')}</h3>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                {t('services.specializedTreatments.ipl.description')}
              </p>
              <Link to="/conditions/dry-eye" className="flex items-center text-eyecare-blue hover:text-eyecare-dark-blue font-medium group">
                <span className="story-link">{t('common.learnMore')}</span>
                <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <CardImage 
                src="/lovable-uploads/Scleral_lens_01.png"
                alt="Scleral Lenses"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-bold">{t('services.specializedTreatments.scleral.title')}</h3>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                {t('services.specializedTreatments.scleral.description')}
              </p>
              <Link to="/conditions/keratoconus" className="flex items-center text-eyecare-blue hover:text-eyecare-dark-blue font-medium group">
                <span className="story-link">{t('common.learnMore')}</span>
                <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="relative">
              <CardImage 
                src="/lovable-uploads/Corneal_cross_linking.png"
                alt="Corneal Cross-Linking"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <h3 className="text-white text-xl font-bold">{t('services.specializedTreatments.crossLinking.title')}</h3>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-gray-700 mb-4">
                {t('services.specializedTreatments.crossLinking.description')}
              </p>
              <Link to="/conditions/keratoconus" className="flex items-center text-eyecare-blue hover:text-eyecare-dark-blue font-medium group">
                <span className="story-link">{t('common.learnMore')}</span>
                <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatureSection;
