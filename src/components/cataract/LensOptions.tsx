
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';

const LensOptions = () => {
  const { t } = useTranslation();

  const lensOptions = [
    {
      name: "Monofocal IOLs",
      description: "Traditional lenses that provide clear vision at one distance, typically for distance vision."
    },
    {
      name: "Multifocal IOLs",
      description: "Advanced lenses that provide clear vision at multiple distances, reducing dependence on glasses."
    },
    {
      name: "Toric IOLs",
      description: "Specialized lenses designed to correct astigmatism along with cataracts."
    },
    {
      name: "Extended Depth of Focus",
      description: "Latest technology providing a continuous range of vision with enhanced quality."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('cataract.lensOptions.title')} <span className="text-eyecare-blue">{t('cataract.lensOptions.highlight')}</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t('cataract.lensOptions.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {lensOptions.map((lens, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold mb-3">{lens.name}</h3>
              <p className="text-gray-600">{lens.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LensOptions;
