
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useIsMobile } from '@/hooks/use-mobile';
import { Building2, Microscope, EyeIcon, Clipboard } from 'lucide-react';

const ClinicTour = () => {
  const isMobile = useIsMobile();
  
  const facilities = [
    {
      name: "Modern Reception Area",
      description: "Our comfortable reception area is designed to make you feel welcome from the moment you arrive. Enjoy complimentary Wi-Fi, refreshments, and a relaxing atmosphere.",
      icon: <Building2 className="h-6 w-6" />
    },
    {
      name: "State-of-the-Art Diagnostic Suite",
      description: "Our clinic features the latest diagnostic technology, including corneal topography, OCT imaging, and visual field testing for comprehensive eye examinations.",
      icon: <Microscope className="h-6 w-6" />
    },
    {
      name: "Specialized Treatment Rooms",
      description: "Dedicated spaces for treatments like IPL therapy for dry eye, laser procedures, and minor surgical interventions in a clean, comfortable setting.",
      icon: <EyeIcon className="h-6 w-6" />
    },
    {
      name: "Premium Optical Boutique",
      description: "Browse our selection of designer frames and lens options with the guidance of our experienced optical team in a stylish, well-lit environment.",
      icon: <Clipboard className="h-6 w-6" />
    }
  ];
  
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 relative overflow-hidden">
      <AnimatedBackground colorScheme="blue" numberOfCircles={8} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our <span className="text-eyecare-blue">Facility</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Step inside our modern eye care clinic designed with your comfort and care in mind.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => (
            <Card key={index} className="p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full">
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-eyecare-lighter-blue flex items-center justify-center mb-4">
                  <div className="text-eyecare-blue">
                    {facility.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3">{facility.name}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicTour;
