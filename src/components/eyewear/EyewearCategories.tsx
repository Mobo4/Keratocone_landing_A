
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardImage, CardTitle } from "@/components/ui/card";
import AnimatedBackground from '@/components/AnimatedBackground';
import { useTranslation } from 'react-i18next';

const EyewearCategories = () => {
  const { t } = useTranslation();
  
  const categories = [
    {
      name: t('eyewearCategories.options.optical.name'),
      description: t('eyewearCategories.options.optical.description'),
      image: "/lovable-uploads/711ab46f-edfb-468f-85d0-1f88cea13df7.png"
    },
    {
      name: t('eyewearCategories.options.sunglasses.name'),
      description: t('eyewearCategories.options.sunglasses.description'),
      image: "/lovable-uploads/84331394-6835-4fe8-a5d3-29a5600f9a98.png"
    },
    {
      name: t('eyewearCategories.options.sports.name'),
      description: t('eyewearCategories.options.sports.description'),
      image: "/lovable-uploads/37a46c9d-5390-4d12-987b-265ad217a512.png"
    },
    {
      name: t('eyewearCategories.options.children.name'),
      description: t('eyewearCategories.options.children.description'),
      image: "/lovable-uploads/c5cedd6f-372e-48b5-bdae-66ea3143996f.png"
    }
  ];

  return (
    <section id="eyewear-categories" className="py-16 bg-gradient-to-r from-white to-eyecare-lighter-blue/30 relative overflow-hidden">
      <AnimatedBackground colorScheme="purple" numberOfCircles={8} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('eyewearCategories.title')} <span className="text-eyecare-blue">{t('eyewearCategories.highlight')}</span></h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            {t('eyewearCategories.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <CardImage 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white text-xl font-bold">{category.name}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-3">{t('eyewearCategories.findFit.title')}</h3>
              <p className="text-gray-700 mb-4">
                {t('eyewearCategories.findFit.description')}
              </p>
              <a 
                href="https://promo.eyecarecenteroc.com/lead-magnet-page-6841-9006-6616-2060" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-md transition-colors inline-block hover:scale-105 transform duration-300"
              >
                {t('eyewearCategories.findFit.ctaButton')}
              </a>
            </div>
            <div className="hidden md:block">
              <div className="w-20 h-20 bg-eyecare-lighter-blue rounded-full opacity-70 mx-auto animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EyewearCategories;
