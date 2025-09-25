import React from 'react';
import { Check } from 'lucide-react';

const KeyBenefits = () => {
    const benefits = [
      "Serving Orange County's unique environmental challenges since 1995",
      "500+ keratoconus patients treated from Irvine to Newport Beach",
      "Specialized Santa Ana winds dry eye protocols for keratoconus",
      "UCI Health & CHOC preferred keratoconus referral center",
      "Orange County's only corneal cross-linking specialist with 15+ years experience"
    ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Why Orange County Families Choose <span className="text-eyecare-blue">Dr. Bonakdar for Keratoconus</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-lg text-gray-800">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;