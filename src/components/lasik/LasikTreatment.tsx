
import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useIsMobile } from '@/hooks/use-mobile';
import { Check } from 'lucide-react';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';

const LasikTreatment = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-green-50 relative overflow-hidden">
      <AnimatedBackground colorScheme="green" numberOfCircles={12} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Our Advanced <span className="text-eyecare-blue">LASIK Technology</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Experience state-of-the-art LASIK technology that delivers precise, personalized vision correction.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4">Cutting-Edge LASIK Technology</h3>
            <p className="text-gray-700 mb-4">
              Our practice utilizes the latest advancements in LASIK technology, including wavefront-guided systems that create a detailed map of your eye's unique optical characteristics, allowing for truly customized treatment.
            </p>
            <h3 className="text-2xl font-semibold mb-4">The LASIK Advantage</h3>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-eyecare-blue flex-shrink-0 mt-0.5" />
                <span>Bladeless, all-laser technique for enhanced safety</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-eyecare-blue flex-shrink-0 mt-0.5" />
                <span>Wavefront-guided technology for personalized treatment</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-eyecare-blue flex-shrink-0 mt-0.5" />
                <span>Fast procedure - typically less than 15 minutes for both eyes</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-eyecare-blue flex-shrink-0 mt-0.5" />
                <span>Quick recovery - most patients see clearly the next day</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-eyecare-blue flex-shrink-0 mt-0.5" />
                <span>Minimal discomfort - most patients report little to no pain</span>
              </li>
            </ul>
            <AppointmentRequestDialog>
              <button className="inline-block bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-md transition-colors hover:scale-105 transform duration-300">
                Learn About Your LASIK Options
              </button>
            </AppointmentRequestDialog>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="rounded-lg overflow-hidden shadow-xl relative">
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-green-100 rounded-full opacity-40 z-0 animate-pulse"></div>
              <img 
                src="/images/treatments/lasik-technology.png"
                alt="Advanced LASIK Technology" 
                className="w-full h-auto relative z-10 hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-100 rounded-full opacity-40 z-0 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LasikTreatment;
