import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Glasses, Stethoscope, Scan, Phone } from 'lucide-react';

const TreatmentOptionsSection = () => {
  const treatments = [
    {
      title: "Custom Scleral Lenses",
      description: "Specialized contact lenses that vault over the cornea for clear, comfortable vision",
      icon: <Glasses className="w-8 h-8 text-eyecare-blue" />
    },
    {
      title: "RGP & Hybrid Lenses",
      description: "Rigid gas permeable and hybrid lens options for various keratoconus stages",
      icon: <Eye className="w-8 h-8 text-eyecare-blue" />
    },
    {
      title: "Cross-Linking Consultation",
      description: "Evaluation and referral for corneal cross-linking to halt progression",
      icon: <Stethoscope className="w-8 h-8 text-eyecare-blue" />
    },
    {
      title: "Corneal Topography",
      description: "Advanced corneal mapping to precisely measure corneal shape and irregularities",
      icon: <Scan className="w-8 h-8 text-eyecare-blue" />
    },
    {
      title: "Emergency Care",
      description: "Same-day appointments for acute keratoconus symptoms and lens issues",
      icon: <Phone className="w-8 h-8 text-eyecare-blue" />
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Our <span className="text-eyecare-blue">Treatment Options</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {treatments.map((treatment, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  {treatment.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {treatment.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  {treatment.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentOptionsSection;