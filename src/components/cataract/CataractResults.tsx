
import React from 'react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import StatCounter from '@/components/StatCounter';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const CataractResults = () => {
  const isMobile = useIsMobile();
  
  const testimonials = [
    {
      name: "Robert K.",
      age: 68,
      quote: "The difference is like night and day. Colors are more vivid, reading is effortless again, and I can drive safely at night. Cataract surgery gave me my independence back.",
      condition: "Bilateral cataracts"
    },
    {
      name: "Maria S.",
      age: 72,
      quote: "I was nervous about surgery, but Dr. Bonakdar's team made everything so comfortable. My vision is better now than it's been in years!",
      condition: "Advanced cataract"
    },
    {
      name: "James P.",
      age: 65,
      quote: "The premium IOL was worth every penny. I can see clearly at all distances without glasses. It's amazing what modern cataract surgery can do.",
      condition: "Cataracts with astigmatism"
    }
  ];
  
  return (
    <section className="py-16 bg-gradient-to-r from-white to-amber-50 relative overflow-hidden">
      <AnimatedBackground colorScheme="purple" numberOfCircles={8} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Cataract Surgery <span className="text-eyecare-blue">Results</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Cataract surgery is one of the most successful procedures in medicine, with excellent outcomes and high patient satisfaction rates.
          </p>
        </div>
        
        <div className="mb-12">
          <BeforeAfterSlider 
            image="/lovable-uploads/Before_after_01.png"
            beforeLabel="Before Cataract Surgery"
            afterLabel="After Cataract Surgery"
          />
          <p className="text-center mt-4 text-sm text-gray-500 italic">
            Left: Cloudy vision from cataracts. Right: Clear, bright vision after IOL implantation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12">
          <StatCounter endValue={98} label="Surgery Success Rate" suffix="%" />
          <StatCounter endValue={95} label="Patient Satisfaction" suffix="%" />
          <StatCounter endValue={24} label="Hours Recovery Time" />
        </div>
        
        <h3 className="text-2xl font-semibold mb-6 text-center">Patient Success Stories</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Quote className="h-10 w-10 text-eyecare-lighter-blue mb-4" />
                <p className="italic text-gray-600 mb-4">{testimonial.quote}</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-semibold">{testimonial.name}, {testimonial.age}</p>
                    <p className="text-sm text-gray-500">Condition: {testimonial.condition}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CataractResults;
