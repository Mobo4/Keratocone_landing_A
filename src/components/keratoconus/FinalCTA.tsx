import React from 'react';
import { useCallRailPhone } from '@/hooks/useCallRailPhone';
import AnimatedBackground from '@/components/AnimatedBackground';

const FinalCTA = () => {
  const { phoneNumber, phoneHref } = useCallRailPhone();

  return (
    <section className="py-20 bg-gradient-to-r from-eyecare-blue to-eyecare-dark-blue text-white relative overflow-hidden">
      <AnimatedBackground colorScheme="purple" numberOfCircles={15} />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Don't Wait - Get Same-Day Care
        </h2>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
          Experience clear vision again with our expert keratoconus treatment
        </p>
        
        <a 
          href={phoneHref}
          className="inline-block bg-white text-eyecare-blue hover:bg-gray-100 px-12 py-6 rounded-lg text-xl md:text-2xl font-bold transition-all hover:scale-105 transform duration-300 callrail-phone"
        >
          Call Now for Same-Day Appointment: {phoneNumber}
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;