
import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Card, CardContent, CardDescription, CardHeader, CardImage, CardTitle } from "@/components/ui/card";

const EyewearOverview = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <AnimatedBackground colorScheme="purple" numberOfCircles={10} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Luxury <span className="text-eyecare-blue">Eyewear</span> Collection</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Discover our curated selection of designer frames that blend sophisticated style with exceptional quality and comfort.
            Each piece is handpicked to offer you the perfect combination of fashion and function.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-eyecare-lighter-blue flex items-center justify-center text-eyecare-blue flex-shrink-0">
                <span className="text-xl font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Premium Designer Selection</h3>
                <p className="text-gray-600">
                  Browse our collection of luxury eyewear from world-renowned designers including Ray-Ban, Gucci, 
                  Prada, Tom Ford, and many more prestigious brands.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-eyecare-lighter-blue flex items-center justify-center text-eyecare-blue flex-shrink-0">
                <span className="text-xl font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Personalized Styling</h3>
                <p className="text-gray-600">
                  Our experienced stylists provide expert guidance to help you find frames that perfectly 
                  complement your face shape, skin tone, and personal style.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-eyecare-lighter-blue flex items-center justify-center text-eyecare-blue flex-shrink-0">
                <span className="text-xl font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Premium Lens Technology</h3>
                <p className="text-gray-600">
                  Pair your designer frames with advanced lens technologies including progressive, 
                  blue light filtering, and light-adaptive options for ultimate vision comfort.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <CardImage 
                src="/images/logos/logo_rayban2.png"
                alt="Luxury Eyewear Collection"
                className="w-full h-64 object-contain p-8 bg-gray-50"
              />
              <CardHeader>
                <CardTitle>Designer Frames</CardTitle>
                <CardDescription>
                  Our collection features the latest styles from top designer brands, ensuring you'll find 
                  the perfect frames to express your unique personality and enhance your appearance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EyewearOverview;
