
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import AnimatedBackground from './AnimatedBackground';
import { toast } from "@/components/ui/sonner";
import { useTranslation } from 'react-i18next';
import AppointmentRequestDialog from './AppointmentRequestDialog';

const AboutSection = () => {
  const [imageError, setImageError] = useState(false);
  const { t } = useTranslation();
  
  // Image sources with comprehensive fallbacks for Dr. Bonakdar
  const drBonakdarImageSources = [
    // Staff directory path as primary source
    "/images/staff/drbonakdar.png",
    
    // Previous fallback sources
    "/lovable-uploads/4b09b2bf-3915-4a88-a9c4-de479b3942ce.png",
    "/lovable-uploads/dr-alexander-bonakdar.png", 
    "/lovable-uploads/alexander-bonakdar.png",
    "/images/staff/alexander-bonakdar.png",
    "/images/team/dr-alexander-bonakdar.png",
    
    // Generic fallback if all else fails
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=500&h=500&q=80" 
  ];

  // Handle image errors by trying alternative sources
  const handleDoctorImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    const currentIndex = drBonakdarImageSources.indexOf(target.src);
    
    if (currentIndex >= 0 && currentIndex < drBonakdarImageSources.length - 1) {
      // Try next source in the array
      const nextSource = drBonakdarImageSources[currentIndex + 1];
      target.src = nextSource;
    } else if (!imageError) {
      setImageError(true);
      // If all fallbacks fail, show a toast notification
      toast.error("Doctor's image couldn't be loaded. Please upload the image to your project.");
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-white to-eyecare-lighter-blue/30 relative overflow-hidden">
      <AnimatedBackground colorScheme="blue" numberOfCircles={10} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet <span className="text-eyecare-blue">Dr. Alexander Bonakdar</span>
            </h2>
            <p className="text-gray-700 mb-4">
              Dr. Alexander Bonakdar is a highly experienced optometrist with over 35 years of dedicated service in comprehensive eye care. He specializes in advanced treatments for dry eye disease, keratoconus management, and complex contact lens fittings.
            </p>
            <p className="text-gray-700 mb-6">
              Dr. Bonakdar completed his prestigious residency at the Bascom Palmer Eye Institute in Miami, one of the nation's top-ranked ophthalmology programs. He is committed to providing personalized, cutting-edge care using the latest diagnostic technology and treatment methods.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/services" className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-md transition-colors hover:scale-105 transform duration-300">
                Learn More About Our Services
              </a>
              <AppointmentRequestDialog>
                <button className="bg-white border border-eyecare-blue text-eyecare-blue hover:bg-eyecare-lighter-blue px-6 py-3 rounded-md transition-colors hover:scale-105 transform duration-300">
                  Schedule Consultation
                </button>
              </AppointmentRequestDialog>
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative group cursor-pointer">
              <div className="absolute -top-5 -left-5 w-28 h-28 bg-eyecare-lighter-blue rounded-full opacity-70 z-0 animate-pulse"></div>
              {imageError ? (
                <div className="bg-gray-200 rounded-lg w-full h-[300px] flex items-center justify-center group-hover:bg-eyecare-lighter-blue/30 transition-colors duration-300">
                  <p className="text-gray-500">Dr. Alexander Bonakdar<br/>(Please upload image)</p>
                </div>
              ) : (
                <img 
                  src={drBonakdarImageSources[0]} 
                  alt="Dr. Alexander Bonakdar - Experienced Optometrist" 
                  className="rounded-lg shadow-xl z-10 relative w-full max-w-md mx-auto hover:scale-[1.05] transition-transform duration-500"
                  onError={handleDoctorImageError}
                  loading="eager"
                  width="600"
                  height="450"
                />
              )}
              <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-eyecare-lighter-blue rounded-full opacity-70 z-0 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
