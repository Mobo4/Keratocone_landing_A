
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Calendar, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';

const ServicesCTA = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-eyecare-lighter-blue">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('services.cta.title')}</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              {t('services.cta.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-eyecare-lighter-blue flex items-center justify-center text-eyecare-blue flex-shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('services.cta.scheduleOnline.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('services.cta.scheduleOnline.description')}
                  </p>
                  <AppointmentRequestDialog>
                    <button className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-md transition-colors">
                      {t('services.cta.scheduleOnline.button')}
                    </button>
                  </AppointmentRequestDialog>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-eyecare-lighter-blue flex items-center justify-center text-eyecare-blue flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('services.cta.callDirect.title')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('services.cta.callDirect.description')}
                  </p>
                  <a 
                    href="tel:+1-555-123-4567" 
                    className="border border-eyecare-blue text-eyecare-blue hover:bg-eyecare-lighter-blue px-6 py-3 rounded-md transition-colors inline-block"
                  >
                    {t('services.cta.callDirect.button')}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-eyecare-lighter-blue/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center">{t('services.cta.insurance.title')}</h3>
              <p className="text-gray-700 mb-6">
                {t('services.cta.insurance.description')}
              </p>
              <div className="flex justify-center">
                <Link to="/contact" className="text-eyecare-blue hover:text-eyecare-dark-blue font-medium underline">
                  {t('services.cta.insurance.link')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
