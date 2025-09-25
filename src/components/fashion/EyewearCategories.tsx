
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardImage, CardTitle } from "@/components/ui/card";
import AnimatedBackground from '@/components/AnimatedBackground';

const EyewearCategories = () => {
  const categories = [
    {
      name: "Premium Optical Frames",
      description: "Sophisticated prescription eyewear designed for style and comfort with premium materials.",
      image: "https://images.unsplash.com/photo-1594014312018-6e2ee7fad95e?auto=format&fit=crop&w=500&h=300&q=80"
    },
    {
      name: "Designer Sunglasses",
      description: "Protect your eyes with stylish UV protection from the world's most prestigious brands.",
      image: "https://images.unsplash.com/photo-1589384267710-7a25bc241c59?auto=format&fit=crop&w=500&h=300&q=80"
    },
    {
      name: "Sports & Performance",
      description: "Engineered for active lifestyles with impact-resistant materials and secure fit.",
      image: "https://images.unsplash.com/photo-1547195072-42becb9dded4?auto=format&fit=crop&w=500&h=300&q=80"
    },
    {
      name: "Children's Frames",
      description: "Durable, comfortable designs for kids with playful colors and styles.",
      image: "https://images.unsplash.com/photo-1577400808877-5b2ff19afa09?auto=format&fit=crop&w=500&h=300&q=80"
    }
  ];

  return (
    <section id="eyewear-categories" className="py-16 bg-gradient-to-r from-white to-eyecare-lighter-blue/30 relative overflow-hidden">
      <AnimatedBackground colorScheme="purple" numberOfCircles={8} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Eyewear <span className="text-eyecare-blue">Categories</span></h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Explore our diverse collection of eyewear styles to find the perfect frames for your unique needs and preferences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <CardImage 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <h3 className="text-white text-xl font-bold">{category.name}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700">
                  {category.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-3">Find Your Perfect Fit</h3>
              <p className="text-gray-700 mb-4">
                Not sure which style suits you best? Our expert opticians provide personalized frame styling 
                consultations to help you find eyewear that perfectly complements your face shape, lifestyle, 
                and personal style.
              </p>
              <a 
                href="https://promo.eyecarecenteroc.com/lead-magnet-page-6841-9006-6616-2060" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-md transition-colors inline-block hover:scale-105 transform duration-300"
              >
                Schedule Styling Consultation
              </a>
            </div>
            <div className="hidden md:block">
              <div className="w-20 h-20 bg-eyecare-lighter-blue rounded-full opacity-70 mx-auto animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EyewearCategories;
