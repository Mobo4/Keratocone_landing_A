
import React from 'react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import StatCounter from '@/components/StatCounter';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const LasikResults = () => {
  const isMobile = useIsMobile();
  
  const testimonials = [
    {
      name: "Sarah M.",
      age: 32,
      quote: "After 20 years of thick glasses, LASIK has completely changed my life. Waking up able to see clearly is something I'll never take for granted!",
      prescription: "-6.50"
    },
    {
      name: "Michael T.",
      age: 28,
      quote: "As someone active in sports, contacts were always a hassle. LASIK has given me freedom I never thought possible. Best decision ever!",
      prescription: "-4.25 with astigmatism"
    },
    {
      name: "Jennifer K.",
      age: 41,
      quote: "I was nervous about eye surgery, but the procedure was quick and painless. Now I have better than 20/20 vision - it feels like magic!",
      prescription: "-3.00 with mild astigmatism"
    }
  ];
  
  return (
    <section className="py-16 bg-gradient-to-r from-white to-green-50 relative overflow-hidden">
      <AnimatedBackground colorScheme="green" numberOfCircles={8} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Results & <span className="text-eyecare-blue">Recovery</span></h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            LASIK offers remarkable vision improvement with a brief recovery period. Most patients experience significant results immediately.
          </p>
        </div>
        
        <div className="mb-12">
          <BeforeAfterSlider 
            image="/lovable-uploads/Before_after_01.png"
            beforeLabel="Before LASIK"
            afterLabel="After LASIK"
          />
          <p className="text-center mt-4 text-sm text-gray-500 italic">
            Left: Blurry vision requiring glasses or contacts. Right: Clear, sharp vision after LASIK.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12">
          <StatCounter endValue={96} label="Patients Achieving 20/20 Vision or Better" suffix="%" />
          <StatCounter endValue={1} label="Day to Resume Normal Activities" />
          <StatCounter endValue={99} label="Patient Satisfaction Rate" suffix="%" />
        </div>
        
        <h3 className="text-2xl font-semibold mb-6 text-center">Patient Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-6">
                <Quote className="h-10 w-10 text-eyecare-lighter-blue mb-4" />
                <p className="italic text-gray-600 mb-4">{testimonial.quote}</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-semibold">{testimonial.name}, {testimonial.age}</p>
                    <p className="text-sm text-gray-500">Former prescription: {testimonial.prescription}</p>
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

export default LasikResults;
