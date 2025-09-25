
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';

const CataractCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-eyecare-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t('cataract.cta.title')}
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          {t('cataract.cta.description')}
        </p>
        <AppointmentRequestDialog>
          <button className="inline-flex items-center bg-white text-eyecare-blue px-8 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors">
            {t('cataract.cta.button')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </AppointmentRequestDialog>
      </div>
    </section>
  );
};

export default CataractCTA;
