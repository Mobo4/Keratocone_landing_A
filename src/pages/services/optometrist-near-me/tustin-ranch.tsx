import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const OptometristNearMeTustinRanchPage: React.FC = () => {
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
  "city": "Tustin Ranch",
  "driveTime": "8-12 minutes",
  "neighborhoods": [
    "Located in Tustin Ranch",
    "Serving families throughout Tustin",
    "Convenient to major Tustin landmarks",
    "Easy freeway access from Tustin Ranch",
    "Trusted by Tustin Ranch residents since 1990",
    "Professional optometrist near me care near Tustin Ranch"
  ]
};
  
  const testimonials = [
  {
    "quote": "Dr. Bonakdar has been our family eye doctor for over 10 years. So convenient from Tustin Ranch and he always takes time to explain everything thoroughly.",
    "author": "Sarah M.",
    "location": "Tustin Ranch",
    "service": "Comprehensive Eye Care"
  },
  {
    "quote": "Finally found an optometrist who really listens. The office is easy to get to from Tustin Ranch and they got me in the same week I called.",
    "author": "Michael T.",
    "location": "Tustin Ranch",
    "service": "Eye Exam"
  },
  {
    "quote": "Great with my kids and takes time to make them comfortable. Perfect location from our Tustin Ranch home.",
    "author": "Jennifer L.",
    "location": "Tustin Ranch",
    "service": "Children's Eye Care"
  }
];
  
  const seoKeywords = "optometrist-near-me Tustin Ranch, Tustin Ranch optometrist-near-me, Optometrist Near Me Tustin Ranch, Tustin Ranch eye doctor, optometrist-near-me near me";
  const metaDescription = "Expert optometrist near me in Tustin Ranch, Tustin. Dr. Bonakdar provides specialized optometrist near me treatment. Same-week appointments. 8-12 minutes from Tustin Ranch. (949) 658-2372";

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

export default OptometristNearMeTustinRanchPage;