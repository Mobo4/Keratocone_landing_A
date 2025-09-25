
import React from 'react';
import { Eye, Glasses, Thermometer } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CausesSymptoms = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <AnimatedBackground colorScheme="purple" numberOfCircles={8} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Causes & <span className="text-eyecare-blue">Symptoms</span></h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Understanding the causes and recognizing the symptoms of eye fatigue and related headaches is the first step toward finding relief.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-eyecare-blue">Common Causes</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Eye className="text-eyecare-blue w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Digital Device Usage</h4>
                  <p className="text-gray-600">Extended time spent on computers, smartphones, and tablets without proper breaks.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Glasses className="text-eyecare-blue w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Uncorrected Vision Problems</h4>
                  <p className="text-gray-600">Undiagnosed refractive errors like astigmatism, nearsightedness, or farsightedness.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Thermometer className="text-eyecare-blue w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Environmental Factors</h4>
                  <p className="text-gray-600">Poor lighting, glare, dry air, and improper viewing distances.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Eye className="text-eyecare-blue w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-lg">Eye Muscle Imbalance</h4>
                  <p className="text-gray-600">Binocular vision issues where eyes don't work together properly.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-eyecare-blue">Common Symptoms</h3>
            <Card className="bg-gradient-to-r from-white to-blue-50 border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-eyecare-blue">Watch for These Signs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                    <span className="text-gray-700">Sore, tired, burning, or itching eyes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                    <span className="text-gray-700">Watery or dry eyes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                    <span className="text-gray-700">Blurred or double vision</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                    <span className="text-gray-700">Headache in the forehead or temples</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                    <span className="text-gray-700">Difficulty concentrating</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                    <span className="text-gray-700">Increased sensitivity to light</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                    <span className="text-gray-700">Feeling of eye strain or pressure</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-eyecare-blue rounded-full"></span>
                    <span className="text-gray-700">Difficulty keeping eyes open</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-eyecare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-medium text-eyecare-blue">When to Seek Professional Help</h4>
              <p className="text-gray-700">
                If you experience persistent eye fatigue, recurring headaches, or any changes in vision, 
                it's important to schedule a comprehensive eye examination. These symptoms could indicate 
                an underlying vision problem that requires attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CausesSymptoms;
