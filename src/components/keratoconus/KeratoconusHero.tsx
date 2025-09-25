import React from 'react';
import { useCallRailPhone } from '@/hooks/useCallRailPhone';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';
import AnimatedBackground from '@/components/AnimatedBackground';

const KeratoconusHero = () => {
  const { phoneNumber, phoneHref } = useCallRailPhone();

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-eyecare-lighter-blue/30 relative overflow-hidden">
      <AnimatedBackground colorScheme="blue" numberOfCircles={12} />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
          Serving Orange County's 3.2 Million Residents Since 1995
          <span className="text-eyecare-blue block">Advanced Keratoconus & Corneal Disease Center</span>
        </h1>

        <p className="text-xl md:text-2xl mb-4 text-gray-700 max-w-4xl mx-auto">
          30-Year Orange County Practice • 500+ Keratoconus Patients Treated • UCI & CHOC Referral Partner • Santa Ana Winds Vision Specialist
        </p>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
          <p className="text-lg font-semibold text-red-700">
            🚨 Same-Day Emergency Appointments Available
          </p>
        </div>
        
        <div className="mb-8">
          <a 
            href={phoneHref}
            className="text-3xl md:text-5xl font-bold text-eyecare-blue hover:text-eyecare-dark-blue transition-colors callrail-phone"
          >
            {phoneNumber}
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href={phoneHref}
            className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300 callrail-phone"
          >
            Call Now: {phoneNumber}
          </a>
          
          <AppointmentRequestDialog>
            <button className="bg-white border-2 border-eyecare-blue text-eyecare-blue hover:bg-eyecare-blue hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300">
              Schedule Consultation
            </button>
          </AppointmentRequestDialog>
        </div>
      </div>
    </section>
  );
};

export default KeratoconusHero;