
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const OrthoKProcess = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('orthoK.process.title')}</h2>
          <p className="text-lg text-gray-700">
            {t('orthoK.process.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-white hover:shadow-xl transition duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-eyecare-blue font-bold text-xl">1</div>
              <h3 className="text-xl font-bold mb-3">{t('orthoK.process.steps.0.title')}</h3>
              <p className="text-gray-700">
                {t('orthoK.process.steps.0.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-xl transition duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-eyecare-blue font-bold text-xl">2</div>
              <h3 className="text-xl font-bold mb-3">{t('orthoK.process.steps.1.title')}</h3>
              <p className="text-gray-700">
                {t('orthoK.process.steps.1.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-xl transition duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-eyecare-blue font-bold text-xl">3</div>
              <h3 className="text-xl font-bold mb-3">{t('orthoK.process.steps.2.title')}</h3>
              <p className="text-gray-700">
                {t('orthoK.process.steps.2.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-xl transition duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-eyecare-blue font-bold text-xl">4</div>
              <h3 className="text-xl font-bold mb-3">{t('orthoK.process.steps.3.title')}</h3>
              <p className="text-gray-700">
                {t('orthoK.process.steps.3.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-xl transition duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-eyecare-blue font-bold text-xl">5</div>
              <h3 className="text-xl font-bold mb-3">{t('orthoK.process.steps.4.title')}</h3>
              <p className="text-gray-700">
                {t('orthoK.process.steps.4.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white hover:shadow-xl transition duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-eyecare-blue font-bold text-xl">6</div>
              <h3 className="text-xl font-bold mb-3">{t('orthoK.process.steps.5.title')}</h3>
              <p className="text-gray-700">
                {t('orthoK.process.steps.5.description')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OrthoKProcess;
