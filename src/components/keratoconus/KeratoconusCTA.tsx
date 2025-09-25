
import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useIsMobile } from '@/hooks/use-mobile';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';
import { useTranslation } from 'react-i18next';
import { useCallRailPhone } from '@/hooks/useCallRailPhone';

const KeratoconusCTA = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const { phoneNumber, phoneHref } = useCallRailPhone();
  
  return (
    <section className="py-16 bg-gradient-to-r from-eyecare-blue to-eyecare-dark-blue text-white relative overflow-hidden">
      <AnimatedBackground colorScheme="purple" numberOfCircles={15} />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('keratoconus.cta.title')}</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          {t('keratoconus.cta.subtitle')}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <AppointmentRequestDialog>
            <button className="bg-white text-eyecare-blue hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition-colors hover:scale-105 transform duration-300">
              {t('keratoconus.cta.scheduleButton')}
            </button>
          </AppointmentRequestDialog>
          <a 
            href={phoneHref}
            className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-md text-lg font-medium transition-colors hover:scale-105 transform duration-300 callrail-phone"
          >
            {t('keratoconus.cta.callButton')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default KeratoconusCTA;
