
import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Card, CardContent, CardHeader, CardImage, CardTitle } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';

const TreatmentOptions = () => {
  const isMobile = useIsMobile();
  
  const treatments = [
    {
      title: "Specialized Eyewear",
      description: "We offer customized glasses with specific coatings and lens designs to reduce eye strain, including blue light filtering lenses, prism lenses to correct eye misalignment, and advanced Neurolens technology that alleviates headaches caused by digital eye strain and binocular vision issues.",
      image: "/lovable-uploads/262c2dce-96c0-4bce-9180-eb38a4af33df.png"
    },
    {
      title: "Vision Therapy",
      description: "Our personalized vision therapy programs can help strengthen eye muscles, improve coordination, and enhance visual skills through tailored exercises and techniques guided by our specialists.",
      image: "https://images.unsplash.com/photo-1540379708242-14a809bef941?auto=format&fit=crop&w=500&h=300&q=80"
    },
    {
      title: "Dry Eye Treatment",
      description: "Since dry eye can contribute to eye fatigue and headaches, we provide advanced treatments including prescription medications, in-office procedures, and lifestyle recommendations.",
      image: "/lovable-uploads/IPL_01.png"
    },
    {
      title: "Precision Prescription",
      description: "Using advanced diagnostics, we ensure your prescription is optimized to relieve strain, addressing even minor refractive errors that can cause significant discomfort during prolonged visual tasks.",
      image: "/lovable-uploads/de4332bb-d7f8-4ff9-b288-60783dc8ade3.png"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-white to-purple-50 relative overflow-hidden">
      <AnimatedBackground colorScheme="blue" numberOfCircles={12} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Treatment <span className="text-eyecare-blue">Options</span></h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            At Eyecare Center of OC, we offer specialized treatments to address the underlying causes of eye fatigue and related headaches.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {treatments.map((treatment, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative">
                <CardImage 
                  src={treatment.image}
                  alt={treatment.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end p-4">
                  <h3 className="text-white text-xl font-bold">{treatment.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-gray-700">
                  {treatment.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center">Our Comprehensive <span className="text-eyecare-blue">Assessment</span></h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6">
                  Before recommending treatment, we conduct a thorough evaluation that goes beyond a standard eye exam. Our comprehensive assessment includes:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-eyecare-blue flex-shrink-0">
                      <span className="font-semibold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Visual Acuity Testing</h4>
                      <p className="text-sm text-gray-600">Precise measurement of your vision at various distances</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-eyecare-blue flex-shrink-0">
                      <span className="font-semibold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Binocular Vision Assessment</h4>
                      <p className="text-sm text-gray-600">Evaluating how well your eyes work together</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-eyecare-blue flex-shrink-0">
                      <span className="font-semibold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Digital Eye Strain Analysis</h4>
                      <p className="text-sm text-gray-600">Specific tests to identify digital device-related issues</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-eyecare-blue flex-shrink-0">
                      <span className="font-semibold">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium">Ocular Surface Evaluation</h4>
                      <p className="text-sm text-gray-600">Checking for dry eye and other surface conditions</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-eyecare-blue">Patient Success Story</h4>
                <blockquote className="text-gray-700 italic mb-4">
                  "After months of daily headaches and eye strain that impacted my work, Dr. Bonakdar diagnosed a subtle astigmatism and eye muscle imbalance. With my new prescription glasses and a short course of vision therapy, I'm now headache-free and can work comfortably all day."
                </blockquote>
                <div className="text-right">
                  <p className="font-medium">— Jennifer K.</p>
                  <p className="text-sm text-gray-600">Marketing Professional, Irvine</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6 text-center">Advanced <span className="text-eyecare-blue">Neurolens Technology</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-eyecare-blue">What are Neurolenses?</h4>
              <p className="text-gray-700 mb-4">
                Neurolenses are the world's first and only prescription lenses that contain a contoured prism to bring the eyes into alignment. They are specifically designed to address the headaches, neck tension, and eye strain caused by binocular vision dysfunction (BVD) - a common condition where the eyes are slightly misaligned.
              </p>
              <h4 className="text-xl font-semibold mb-3 text-eyecare-blue">How Neurolenses Work</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                  <span className="text-gray-700">Corrects misalignment between your eyes at all distances</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                  <span className="text-gray-700">Reduces the overcompensation by your visual system</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                  <span className="text-gray-700">Alleviates symptoms caused by digital device usage</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                  <span className="text-gray-700">Provides contoured prism correction specific to your needs</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-3 text-eyecare-blue">Benefits of Prism Therapy</h4>
              <p className="text-gray-700 mb-4">
                Prism lenses help bring images into proper alignment on your retina, reducing the effort your brain needs to make to process visual information. This can directly impact common symptoms including:
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                  <span className="text-gray-700">Chronic headaches and migraines</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                  <span className="text-gray-700">Eye strain and fatigue</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                  <span className="text-gray-700">Neck and shoulder tension</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                  <span className="text-gray-700">Dizziness and balance issues</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                  <span className="text-gray-700">Light sensitivity</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-white rounded shadow-sm">
                <p className="text-sm text-gray-600 italic">
                  Studies show that over 90% of patients suffering from persistent headaches experience symptom relief with properly prescribed Neurolenses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentOptions;
