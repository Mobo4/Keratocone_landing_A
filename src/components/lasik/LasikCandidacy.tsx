
import React from 'react';
import { Card } from '@/components/ui/card';
import AnimatedBackground from '@/components/AnimatedBackground';
import { Check, X } from 'lucide-react';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';

const LasikCandidacy = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <AnimatedBackground colorScheme="green" numberOfCircles={6} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Are You a <span className="text-eyecare-blue">LASIK Candidate?</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            While many people can benefit from LASIK, several factors determine if you're an ideal candidate for the procedure.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              Ideal LASIK Candidates
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Are 21 years or older with stable vision prescription (unchanged for at least 1 year)</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Have nearsightedness, farsightedness, or astigmatism within treatable ranges</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Have adequately thick corneas relative to your prescription</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Have healthy eyes free from diseases like severe dry eye, glaucoma, or cataracts</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Are in good general health without autoimmune disorders or conditions affecting healing</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Have realistic expectations about the outcomes of LASIK</span>
              </li>
            </ul>
          </Card>
          
          <Card className="p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-3">
                <X className="w-5 h-5 text-red-500" />
              </div>
              LASIK May Not Be Right If You
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <X className="mr-2 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Have unstable vision that has changed significantly in the past year</span>
              </li>
              <li className="flex items-start">
                <X className="mr-2 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Are pregnant, nursing, or planning to become pregnant soon</span>
              </li>
              <li className="flex items-start">
                <X className="mr-2 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Have thin corneas or unusually shaped corneas (keratoconus)</span>
              </li>
              <li className="flex items-start">
                <X className="mr-2 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Have severe dry eye syndrome or other ocular surface diseases</span>
              </li>
              <li className="flex items-start">
                <X className="mr-2 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Have advanced glaucoma, cataracts, or diabetic eye disease</span>
              </li>
              <li className="flex items-start">
                <X className="mr-2 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>Take medications that could affect healing or corneal stability</span>
              </li>
            </ul>
          </Card>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
            The only way to determine if you're a good candidate for LASIK is through a comprehensive evaluation with our specialists. We'll perform detailed measurements of your cornea, pupil size, refractive error, and overall eye health.
          </p>
          <AppointmentRequestDialog>
            <button className="inline-block bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-md transition-colors hover:scale-105 transform duration-300">
              Schedule Your LASIK Consultation
            </button>
          </AppointmentRequestDialog>
        </div>
      </div>
    </section>
  );
};

export default LasikCandidacy;
