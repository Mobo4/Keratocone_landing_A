
import React from 'react';
import { Droplet } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import ServiceCard from '@/components/ServiceCard';
import { useIsMobile } from '@/hooks/use-mobile';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';

const TreatmentOptions = () => {
  const isMobile = useIsMobile();
  
  const treatments = [
    {
      title: "Corneal Cross-Linking",
      description: "FDA-approved procedure that strengthens corneal tissue to halt keratoconus progression using UV light and riboflavin drops.",
      icon: <Droplet className="w-6 h-6" />,
      link: "/contact"
    },
    {
      title: "Specialty Contact Lenses",
      description: "Custom-designed rigid gas permeable (RGP), scleral, or hybrid lenses that provide clear vision by creating a new optical surface.",
      icon: <Droplet className="w-6 h-6" />,
      link: "/contact"
    },
    {
      title: "Intacs Corneal Implants",
      description: "Tiny, clear inserts placed within the cornea to reshape its surface and improve vision in patients with keratoconus.",
      icon: <Droplet className="w-6 h-6" />,
      link: "/contact"
    },
    {
      title: "Custom Prescription Eyewear",
      description: "Specialized glasses with unique prescriptions can help manage mild cases or provide supplementary vision correction.",
      icon: <Droplet className="w-6 h-6" />,
      link: "/contact"
    },
    {
      title: "Topography-Guided PRK",
      description: "Advanced laser procedure that reshapes the cornea based on detailed topographic measurements for improved vision.",
      icon: <Droplet className="w-6 h-6" />,
      link: "/contact"
    },
    {
      title: "Corneal Transplantation",
      description: "For advanced cases, surgical replacement of the central cornea with healthy donor tissue to restore corneal function.",
      icon: <Droplet className="w-6 h-6" />,
      link: "/contact"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-purple-50 relative overflow-hidden">
      <AnimatedBackground colorScheme="blue" numberOfCircles={12} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Complete <span className="text-eyecare-blue">Treatment</span> Solutions
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At Eyecare Center of OC, we offer comprehensive keratoconus management tailored to your specific needs and condition severity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <ServiceCard
              key={index}
              title={treatment.title}
              description={treatment.description}
              icon={treatment.icon}
              link={treatment.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentOptions;
