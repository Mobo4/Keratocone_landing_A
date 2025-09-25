
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardImage, CardTitle } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';
import BrandLogo from '@/components/BrandLogo';
import { useTranslation } from 'react-i18next';

const FeaturedBrands = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  
  const featuredBrands = [
    {
      name: "Ray-Ban",
      description: "Iconic styles with timeless appeal, known for classic designs like the Aviator and Wayfarer.",
      logoImage: "/images/logos/Logo_Rayban.jpg"
    },
    {
      name: "Tom Ford",
      description: "Elegant, refined frames with distinctive details that exude luxury and sophistication.",
      logoImage: "/images/logos/Logo_Tomford.jpg"
    },
    {
      name: "Prada",
      description: "Sophisticated frames with innovative designs that blend contemporary style with Italian craftsmanship.",
      logoImage: "/images/logos/Logo_Prada.jpg"
    },
    {
      name: "Barton Perreira",
      description: "Handcrafted luxury eyewear with exceptional quality and unparalleled details.",
      logoImage: "/images/logos/Logo_Barton Perreira.jpg"
    }
  ];

  return (
    <section id="featured-brands" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('featuredBrands.title')} <span className="text-eyecare-blue">{t('featuredBrands.highlight')}</span> {t('featuredBrands.subtitle')}
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            {t('featuredBrands.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredBrands.map((brand, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="bg-white p-6 flex items-center justify-center h-40">
                <img 
                  src={brand.logoImage}
                  alt={`${brand.name} logo`}
                  className="max-h-20 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "/lovable-uploads/4bcc1574-aebc-4a51-a42f-6fb00f0ba226.png";
                  }}
                />
              </div>
              <CardHeader className="pb-0">
                <CardTitle>{brand.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600">
                  {brand.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#eyewear-categories" 
            className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-md transition-colors inline-block hover:scale-105 transform duration-300"
          >
            {t('featuredBrands.exploreStyles')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
