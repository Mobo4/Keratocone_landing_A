
import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useIsMobile } from '@/hooks/use-mobile';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';
import { useCallRailPhone } from '@/hooks/useCallRailPhone';

const LasikCTA = () => {
  const isMobile = useIsMobile();
  const { phoneNumber, phoneHref } = useCallRailPhone();
  
  return (
    <section className="py-16 bg-gradient-to-r from-eyecare-blue to-eyecare-dark-blue text-white relative overflow-hidden">
      <AnimatedBackground colorScheme="purple" numberOfCircles={15} />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">See Life in a New Way</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Imagine waking up with clear vision, free from the constraints of glasses and contacts. LASIK can make that a reality.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <AppointmentRequestDialog>
            <button className="bg-white text-eyecare-blue hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition-colors hover:scale-105 transform duration-300">
              Schedule Your LASIK Consultation
            </button>
          </AppointmentRequestDialog>
          <a 
            href={phoneHref}
            className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-md text-lg font-medium transition-colors hover:scale-105 transform duration-300 callrail-phone"
          >
            Call Us: {phoneNumber}
          </a>
        </div>
      </div>
    </section>
  );
};

export default LasikCTA;
