
import React from 'react';
import { useTranslation } from 'react-i18next';
import TestimonialCard from '@/components/TestimonialCard';

const ServiceTestimonials = () => {
  const { t } = useTranslation();
  
  const testimonials = [
    {
      quote: "Dr. Bonakdar's expertise in dry eye treatment has completely transformed my quality of life. After years of discomfort, I finally found relief with the specialized therapies at Eyecare Center of OC.",
      name: "Sarah L.",
      location: "Irvine, CA",
      imageSrc: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=256&q=80",
      date: "March 2023",
      rating: 5
    },
    {
      quote: "The advanced diagnostic testing at Eyecare Center of OC detected my early stage keratoconus, allowing for proactive treatment that saved my vision. I can't thank Dr. Bonakdar and his team enough!",
      name: "Michael T.",
      location: "Santa Ana, CA",
      imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
      date: "January 2023",
      rating: 5
    },
    {
      quote: "From the comprehensive eye exam to the personalized care plan, every aspect of my experience at Eyecare Center of OC has been exceptional. Their approach to vision care is truly unmatched.",
      name: "David R.",
      location: "Newport Beach, CA",
      imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
      date: "April 2023",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('services.testimonials.title')} <span className="text-eyecare-blue">{t('services.testimonials.highlight')}</span> {t('services.testimonials.subtitle')}
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            {t('services.testimonials.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              date={testimonial.date}
              location={testimonial.location}
              imageSrc={testimonial.imageSrc}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTestimonials;
