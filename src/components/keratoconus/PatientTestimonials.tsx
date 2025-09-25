import React from 'react';
import TestimonialCard from '@/components/TestimonialCard';

const PatientTestimonials = () => {
  const testimonials = [
    {
      quote: "Dr. Bonakdar's expertise with scleral lenses changed my life. My vision is better than it's been in years!",
      name: "Sarah M.",
      date: "March 2024",
      rating: 5
    },
    {
      quote: "I was able to get an appointment the same day I called. Dr. Bonakdar started treatment immediately.",
      name: "Michael R.",
      date: "February 2024", 
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          What Our <span className="text-eyecare-blue">Patients Say</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              date={testimonial.date}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientTestimonials;