
import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card } from '@/components/ui/card';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';

const IntacsSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 bg-gradient-to-r from-white to-purple-50 relative overflow-hidden">
      <AnimatedBackground colorScheme="purple" numberOfCircles={12} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Intacs <span className="text-eyecare-blue">Corneal Implants</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Tiny, clear inserts placed in the periphery of the cornea to reshape its surface and improve vision in keratoconus patients.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 hover:shadow-2xl hover:shadow-purple-200/60 hover:border-2 hover:border-eyecare-blue transition-all duration-300">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">How Intacs Work</h3>
              <p className="text-gray-700 mb-4">
                The procedure works by mechanically reshaping the cornea from within. When strategically placed in the periphery of the cornea, Intacs flatten the steep area of the cornea, improving the cornea's overall shape and reducing visual distortions caused by keratoconus.
              </p>
              <p className="text-gray-700 mb-4">
                The procedure is quick (taking about 10 minutes) and minimally invasive. The implants can be exchanged or removed as needed through additional procedures, making this a reversible option.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Benefits of Intacs</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Minimally invasive procedure with quick recovery</li>
                <li>Reversible – implants can be removed if necessary</li>
                <li>Can significantly improve vision in suitable candidates</li>
                <li>May delay or prevent the need for corneal transplant</li>
                <li>Can be combined with other treatments like corneal cross-linking</li>
                <li>Often allows patients to wear contact lenses more comfortably</li>
              </ul>
            </div>
            
            <div className="mt-6">
              <AppointmentRequestDialog>
                <button className="inline-block bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-md transition-all duration-300 hover:scale-105 transform hover:shadow-lg">
                  Learn if Intacs are Right for You
                </button>
              </AppointmentRequestDialog>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IntacsSection;
