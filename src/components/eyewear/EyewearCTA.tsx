
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Glasses } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';

const EyewearCTA = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-16 bg-eyecare-lighter-blue">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('eyewearCTA.title')}</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              {t('eyewearCTA.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-eyecare-lighter-blue flex items-center justify-center text-eyecare-blue flex-shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('eyewearCTA.stylingTitle')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('eyewearCTA.stylingDescription')}
                  </p>
                  <AppointmentRequestDialog>
                    <button className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-md transition-colors">
                      {t('eyewearCTA.bookAppointment')}
                    </button>
                  </AppointmentRequestDialog>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-eyecare-lighter-blue flex items-center justify-center text-eyecare-blue flex-shrink-0">
                  <Glasses className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{t('eyewearCTA.showroomTitle')}</h3>
                  <p className="text-gray-600 mb-4">
                    {t('eyewearCTA.showroomDescription')}
                  </p>
                  <Link 
                    to="/contact" 
                    className="border border-eyecare-blue text-eyecare-blue hover:bg-eyecare-lighter-blue px-6 py-3 rounded-md transition-colors inline-block"
                  >
                    {t('eyewearCTA.getDirections')}
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-eyecare-lighter-blue/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center">{t('eyewearCTA.promise')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-eyecare-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">{t('eyewearCTA.warranty')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-eyecare-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">{t('eyewearCTA.adjustments')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-eyecare-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">{t('eyewearCTA.satisfaction')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-eyecare-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">{t('eyewearCTA.insurance')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EyewearCTA;
