
import React from 'react';
import { Eye, Glasses, Syringe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const OrthoKBenefits = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('orthoK.benefits.title')}</h2>
          <p className="text-lg text-gray-700">
            {t('orthoK.benefits.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="service-card">
            <div className="service-icon">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">{t('orthoK.benefits.list.0.title')}</h3>
            <p className="text-gray-700">
              {t('orthoK.benefits.list.0.description')}
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <Glasses className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">{t('orthoK.benefits.list.1.title')}</h3>
            <p className="text-gray-700">
              {t('orthoK.benefits.list.1.description')}
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <Syringe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">{t('orthoK.benefits.list.2.title')}</h3>
            <p className="text-gray-700">
              {t('orthoK.benefits.list.2.description')}
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">{t('orthoK.benefits.list.3.title')}</h3>
            <p className="text-gray-700">
              {t('orthoK.benefits.list.3.description')}
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <Glasses className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">{t('orthoK.benefits.list.4.title')}</h3>
            <p className="text-gray-700">
              {t('orthoK.benefits.list.4.description')}
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <Syringe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">{t('orthoK.benefits.list.5.title')}</h3>
            <p className="text-gray-700">
              {t('orthoK.benefits.list.5.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrthoKBenefits;
