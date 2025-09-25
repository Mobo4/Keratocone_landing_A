
import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTranslation } from 'react-i18next';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';
import { useCallRailPhone } from '@/hooks/useCallRailPhone';

const HeadacheEyeFatigueCTA = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const { phoneNumber, phoneHref } = useCallRailPhone();
  
  return (
    <section className="py-16 bg-gradient-to-r from-eyecare-blue to-blue-700 relative overflow-hidden">
      <AnimatedBackground colorScheme="blue" numberOfCircles={15} />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white drop-shadow-lg">
          {t('headache.cta.title', 'Get Relief from Headaches and Eye Fatigue')}
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-white drop-shadow-md">
          {t('headache.cta.subtitle', 'Don\'t let eye strain and headaches impact your productivity and quality of life. Our specialized care can help you find lasting relief.')}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <AppointmentRequestDialog>
            <button className="bg-white text-eyecare-blue hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition-colors hover:scale-105 transform duration-300">
              {t('headache.cta.scheduleButton', 'Schedule Your Consultation')}
            </button>
          </AppointmentRequestDialog>
          <a 
            href={phoneHref}
            className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-3 rounded-md text-lg font-medium transition-colors hover:scale-105 transform duration-300 callrail-phone"
          >
            Call Now: {phoneNumber}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeadacheEyeFatigueCTA;
