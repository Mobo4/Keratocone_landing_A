
import React from 'react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

const TryOnExperience = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Perfect <span className="text-eyecare-blue">Fit</span> Experience</h2>
            
            <div className="space-y-6">
              <p className="text-gray-700">
                At Eyecare Center of OC, we believe finding the perfect eyewear should be an enjoyable and 
                rewarding experience. Our expert frame stylists guide you through our curated collection to 
                find frames that complement your unique features and lifestyle.
              </p>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-eyecare-lighter-blue flex items-center justify-center text-eyecare-blue flex-shrink-0">
                  <span className="text-lg font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Personal Style Consultation</h4>
                  <p className="text-gray-600">
                    Our specialists analyze your face shape, skin tone, and personal style to recommend 
                    frames that enhance your natural features.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-eyecare-lighter-blue flex items-center justify-center text-eyecare-blue flex-shrink-0">
                  <span className="text-lg font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Try Before You Buy</h4>
                  <p className="text-gray-600">
                    Sample a wide range of frames in our comfortable showroom with expert guidance and 
                    honest feedback from our experienced staff.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-eyecare-lighter-blue flex items-center justify-center text-eyecare-blue flex-shrink-0">
                  <span className="text-lg font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Precision Fitting & Adjustments</h4>
                  <p className="text-gray-600">
                    Our certified opticians ensure your new eyewear fits perfectly with professional 
                    measurements and adjustments for optimal comfort.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="https://promo.eyecarecenteroc.com/lead-magnet-page-6841-9006-6616-2060" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-md transition-colors inline-block hover:scale-105 transform duration-300"
              >
                Book Styling Appointment
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-24 h-24 bg-eyecare-lighter-blue rounded-full opacity-50 z-0 animate-pulse"></div>
              <BeforeAfterSlider
                image="https://images.unsplash.com/photo-1582142407894-ec8cecd263a6?auto=format&fit=crop&w=800&h=500&q=80"
                beforeLabel="Before"
                afterLabel="After"
              />
              <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-eyecare-lighter-blue rounded-full opacity-50 z-0 animate-pulse" style={{ animationDelay: '1.2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TryOnExperience;
