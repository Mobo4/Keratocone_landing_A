
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Eye, Microscope, Syringe, Thermometer } from 'lucide-react';

const DiagnosticOptions = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-white to-blue-50 relative overflow-hidden">
      <AnimatedBackground colorScheme="blue" numberOfCircles={8} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Advanced <span className="text-eyecare-blue">Diagnosis</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We use state-of-the-art technology to accurately diagnose and monitor keratoconus.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Diagnostic Technology</h3>
              <p className="mb-3">Our comprehensive keratoconus evaluation includes:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Eye className="mr-2 h-5 w-5 text-eyecare-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Corneal Topography:</span> Creates detailed 3D maps of the corneal surface
                  </div>
                </li>
                <li className="flex items-start">
                  <Microscope className="mr-2 h-5 w-5 text-eyecare-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Anterior Segment OCT:</span> Captures high-resolution cross-sectional images of the cornea
                  </div>
                </li>
                <li className="flex items-start">
                  <Thermometer className="mr-2 h-5 w-5 text-eyecare-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Pachymetry:</span> Measures corneal thickness at various points
                  </div>
                </li>
                <li className="flex items-start">
                  <Eye className="mr-2 h-5 w-5 text-eyecare-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Wavefront Aberrometry:</span> Measures optical aberrations affecting vision quality
                  </div>
                </li>
                <li className="flex items-start">
                  <Syringe className="mr-2 h-5 w-5 text-eyecare-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">Biomechanical Assessment:</span> Evaluates the strength and resilience of corneal tissue
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Stages of Keratoconus</h3>
              <p className="mb-3">Our diagnostic process can determine your stage of keratoconus:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-eyecare-lighter-blue flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-eyecare-blue font-medium">1</span>
                  </div>
                  <div>
                    <span className="font-medium">Early Stage:</span> Mild corneal thinning, slight visual distortion
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-eyecare-lighter-blue flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-eyecare-blue font-medium">2</span>
                  </div>
                  <div>
                    <span className="font-medium">Moderate Stage:</span> Increased corneal steepening, more noticeable vision changes
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-eyecare-lighter-blue flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-eyecare-blue font-medium">3</span>
                  </div>
                  <div>
                    <span className="font-medium">Advanced Stage:</span> Significant corneal thinning and protrusion
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-eyecare-lighter-blue flex items-center justify-center mr-2 flex-shrink-0">
                    <span className="text-eyecare-blue font-medium">4</span>
                  </div>
                  <div>
                    <span className="font-medium">Severe Stage:</span> Extreme thinning, scarring, and pronounced corneal distortion
                  </div>
                </li>
              </ul>
              <p className="mt-4 text-gray-700">
                Early diagnosis is crucial—the sooner keratoconus is detected, the more treatment options are available to preserve your vision.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticOptions;
