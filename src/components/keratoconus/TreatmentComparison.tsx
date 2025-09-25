
import React from 'react';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import AnimatedBackground from '@/components/AnimatedBackground';

const TreatmentComparison = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-white to-blue-50 relative overflow-hidden">
      <AnimatedBackground colorScheme="blue" numberOfCircles={8} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Treatment <span className="text-eyecare-blue">Comparison</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Compare the different treatment options for keratoconus to understand which approach might be best for your specific condition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Corneal Cross-Linking */}
          <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-eyecare-blue mb-4">Corneal Cross-Linking</h3>
            <p className="text-gray-700 mb-6">
              A minimally invasive procedure that strengthens corneal tissue to halt keratoconus progression.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Checkbox id="cxl-1" />
                <label htmlFor="cxl-1" className="text-sm font-medium leading-tight cursor-pointer">
                  Stops progression of keratoconus
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id="cxl-2" />
                <label htmlFor="cxl-2" className="text-sm font-medium leading-tight cursor-pointer">
                  FDA-approved procedure
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id="cxl-3" />
                <label htmlFor="cxl-3" className="text-sm font-medium leading-tight cursor-pointer">
                  Outpatient procedure
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id="cxl-4" />
                <label htmlFor="cxl-4" className="text-sm font-medium leading-tight cursor-pointer">
                  May prevent need for corneal transplant
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id="cxl-5" />
                <label htmlFor="cxl-5" className="text-sm font-medium leading-tight cursor-pointer">
                  Most effective in early to moderate stages
                </label>
              </div>
            </div>
          </Card>
          
          {/* Scleral Lenses */}
          <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-eyecare-blue mb-4">Scleral Lenses</h3>
            <p className="text-gray-700 mb-6">
              Specialized contact lenses that vault over the cornea, providing clear vision for keratoconus patients.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Checkbox id="scleral-1" />
                <label htmlFor="scleral-1" className="text-sm font-medium leading-tight cursor-pointer">
                  Improves vision quality
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id="scleral-2" />
                <label htmlFor="scleral-2" className="text-sm font-medium leading-tight cursor-pointer">
                  Does not touch the cornea
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id="scleral-3" />
                <label htmlFor="scleral-3" className="text-sm font-medium leading-tight cursor-pointer">
                  Can be worn for long periods
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id="scleral-4" />
                <label htmlFor="scleral-4" className="text-sm font-medium leading-tight cursor-pointer">
                  Custom fitted to each eye
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id="scleral-5" />
                <label htmlFor="scleral-5" className="text-sm font-medium leading-tight cursor-pointer">
                  Works for all stages of keratoconus
                </label>
              </div>
            </div>
          </Card>
          
          {/* Intacs */}
          <Card className="p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-eyecare-blue mb-4">Intacs</h3>
            <p className="text-gray-700 mb-6">
              Micro-thin inserts placed in the cornea to flatten the cone and reduce distortion.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Checkbox id="intacs-1" />
                <label htmlFor="intacs-1" className="text-sm font-medium leading-tight cursor-pointer">
                  Reshapes the cornea
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id="intacs-2" />
                <label htmlFor="intacs-2" className="text-sm font-medium leading-tight cursor-pointer">
                  Reversible procedure
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id="intacs-3" />
                <label htmlFor="intacs-3" className="text-sm font-medium leading-tight cursor-pointer">
                  May improve contact lens wear
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id="intacs-4" />
                <label htmlFor="intacs-4" className="text-sm font-medium leading-tight cursor-pointer">
                  Quick recovery time
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <Checkbox id="intacs-5" />
                <label htmlFor="intacs-5" className="text-sm font-medium leading-tight cursor-pointer">
                  Can be combined with cross-linking
                </label>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TreatmentComparison;
