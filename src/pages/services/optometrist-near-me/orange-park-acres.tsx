import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const OptometristNearMeOrangeParkAcresPage: React.FC = () => {
  const service = {
  "name": "Optometrist Near Me",
  "slug": "optometrist-near-me",
  "description": "Looking for a trusted optometrist near you? Dr. Bonakdar provides comprehensive eye care with same-week appointments and 30+ years of experience serving Orange County families.",
  "benefits": [
    "Same-week appointments available",
    "30+ years of trusted eye care experience",
    "Comprehensive eye exams and vision care",
    "Convenient Orange County location",
    "All major insurance plans accepted",
    "Bilingual staff for diverse communities"
  ],
  "expertise": "Dr. Bonakdar has been providing comprehensive optometry services to Orange County for over 30 years, with expertise in routine eye exams, contact lens fittings, and vision correction.",
  "icon": "eye",
  "relatedServices": [
    "Comprehensive Eye Exams",
    "Contact Lens Fittings",
    "Vision Correction"
  ],
  "targetAudience": "families",
  "searchVolume": "high"
};
  
  const location = {
  "city": "Orange Park Acres",
  "driveTime": "15-18 minutes",
  "neighborhoods": [
    "Located in Orange Park Acres",
    "Serving families throughout Orange",
    "Convenient to major Orange landmarks",
    "Easy freeway access from Orange Park Acres",
    "Trusted by Orange Park Acres residents since 1990",
    "Professional optometrist near me care near Orange Park Acres"
  ]
};
  
  const testimonials = [
  {
    "quote": "Dr. Bonakdar has been our family eye doctor for over 10 years. So convenient from Orange Park Acres and he always takes time to explain everything thoroughly.",
    "author": "Sarah M.",
    "location": "Orange Park Acres",
    "service": "Comprehensive Eye Care"
  },
  {
    "quote": "Finally found an optometrist who really listens. The office is easy to get to from Orange Park Acres and they got me in the same week I called.",
    "author": "Michael T.",
    "location": "Orange Park Acres",
    "service": "Eye Exam"
  },
  {
    "quote": "Great with my kids and takes time to make them comfortable. Perfect location from our Orange Park Acres home.",
    "author": "Jennifer L.",
    "location": "Orange Park Acres",
    "service": "Children's Eye Care"
  }
];
  
  const seoKeywords = "optometrist-near-me Orange Park Acres, Orange Park Acres optometrist-near-me, Optometrist Near Me Orange Park Acres, Orange Park Acres eye doctor, optometrist-near-me near me";
  const metaDescription = "Expert optometrist near me in Orange Park Acres, Orange. Dr. Bonakdar provides specialized optometrist near me treatment. Same-week appointments. 15-18 minutes from Orange Park Acres. (949) 658-2372";

  return (
    <ServiceLocationTemplate
      service={service}
      location={location}
      testimonials={testimonials}
      seoKeywords={seoKeywords}
      metaDescription={metaDescription}
    />
  );
};

export default OptometristNearMeOrangeParkAcresPage;