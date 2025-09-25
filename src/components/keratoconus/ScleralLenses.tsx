
import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card } from '@/components/ui/card';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';

const ScleralLenses = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 bg-gradient-to-r from-white to-blue-50 relative overflow-hidden">
      <AnimatedBackground colorScheme="blue" numberOfCircles={8} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Scleral Lenses for <span className="text-eyecare-blue">Keratoconus</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Custom-designed scleral lenses provide exceptional comfort and vision for patients with keratoconus.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 hover:shadow-xl hover:shadow-blue-200/50 hover:border-2 hover:border-eyecare-blue transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-4">How Scleral Lenses Work</h3>
            <p className="text-gray-700 mb-4">
              Scleral lenses are specially designed to vault over the cornea, creating a fluid-filled reservoir between the lens and the corneal surface. This design offers several advantages: the fluid layer compensates for corneal irregularities, creating a smooth optical surface; the lens rests on the less sensitive sclera rather than the cornea, improving comfort; the fluid reservoir continuously bathes the cornea, providing relief for dry eye symptoms that often accompany keratoconus; and the rigid material provides superior optics compared to soft lenses.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4 mt-8">The Scleral Lens Fitting Process</h3>
            <p className="text-gray-700 mb-4">
              Fitting scleral lenses requires specialized expertise and technology. Our process includes comprehensive corneal mapping using advanced topography, custom lens design based on your unique corneal shape, trial lens evaluation to assess fit and vision, detailed training on insertion, removal, and care, and follow-up appointments to ensure optimal fit and comfort.
            </p>
            <p className="text-gray-700 mb-4">
              Dr. Bonakdar is recognized as a leading scleral lens specialist, with extensive experience fitting even the most challenging keratoconus cases.
            </p>
            
            <div className="mt-6">
              <AppointmentRequestDialog>
                <button className="inline-block bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-md transition-colors hover:scale-105 transform duration-300">
                  Learn if Scleral Lenses are Right for You
                </button>
              </AppointmentRequestDialog>
            </div>
          </Card>
          
          <div className="flex items-center justify-center">
            <div className="relative group w-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-eyecare-blue to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative">
                <img 
                  src="/lovable-uploads/Scleral_lens_01.png" 
                  alt="Scleral lens design for keratoconus patients - specialized contact lens at EYECARE CENTER OF ORANGE COUNTY" 
                  className="rounded-lg shadow-lg w-full h-auto hover:scale-[1.05] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <Card className="p-6 hover:shadow-xl hover:shadow-blue-200/50 hover:border-2 hover:border-eyecare-blue transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-eyecare-blue">Benefits of Scleral Lenses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    <span className="font-medium">Dramatically improved vision quality</span> - Creates a smooth optical surface that corrects irregular astigmatism
                  </li>
                  <li>
                    <span className="font-medium">All-day comfort</span> - Even for patients who couldn't tolerate other contact lenses
                  </li>
                  <li>
                    <span className="font-medium">Protection of the corneal surface</span> - The fluid reservoir provides a cushioning effect
                  </li>
                </ul>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    <span className="font-medium">Reduced progression of keratoconus</span> - In some cases by preventing mechanical trauma
                  </li>
                  <li>
                    <span className="font-medium">Relief from dryness and irritation</span> - The fluid reservoir continuously bathes the eye
                  </li>
                  <li>
                    <span className="font-medium">May delay or avoid corneal transplant</span> - For patients with advanced keratoconus
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScleralLenses;
