
import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useIsMobile } from '@/hooks/use-mobile';

const UnderstandingLasik = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 bg-gradient-to-r from-white to-green-50/20 relative overflow-hidden">
      <AnimatedBackground colorScheme="green" numberOfCircles={10} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Understanding <span className="text-eyecare-blue">LASIK</span></h2>
            <p className="text-gray-700 mb-4">
              LASIK (Laser-Assisted In Situ Keratomileusis) is a revolutionary vision correction procedure that reshapes the cornea to improve how light focuses on the retina, correcting nearsightedness, farsightedness, and astigmatism.
            </p>
            <p className="text-gray-700 mb-4">
              During the procedure, a specialized laser creates a thin flap in the cornea which is folded back. A second laser then precisely reshapes the underlying corneal tissue according to your prescription. The flap is then repositioned to act as a natural bandage, promoting quick healing.
            </p>
            <p className="text-gray-700">
              Most patients experience significant vision improvement immediately, with optimal results typically achieved within a few days. LASIK has helped millions of people reduce or eliminate their dependence on glasses and contact lenses, with high satisfaction rates and minimal downtime.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-green-100 rounded-full opacity-50 z-0 animate-pulse"></div>
              <img src="/lovable-uploads/448f498c-3b3e-4c40-9741-2962502e1f5e.png" alt="LASIK Procedure Illustration" className="rounded-lg shadow-lg w-full h-auto hover:scale-[1.02] transition-transform duration-500 relative z-10" />
              <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-green-100 rounded-full opacity-50 z-0 animate-pulse" style={{animationDelay: '1s'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderstandingLasik;
