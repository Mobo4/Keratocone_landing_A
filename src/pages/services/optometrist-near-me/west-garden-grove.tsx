import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const OptometristNearMeWestGardenGrovePage: React.FC = () => {
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
  "city": "West Garden Grove",
  "driveTime": "10-15 minutes",
  "neighborhoods": [
    "Located in West Garden Grove",
    "Serving families throughout Garden Grove",
    "Convenient to major Garden Grove landmarks",
    "Easy freeway access from West Garden Grove",
    "Trusted by West Garden Grove residents since 1990",
    "Professional optometrist near me care near West Garden Grove"
  ]
};
  
  const testimonials = [
  {
    "quote": "Dr. Bonakdar has been our family eye doctor for over 10 years. So convenient from West Garden Grove and he always takes time to explain everything thoroughly.",
    "author": "Sarah M.",
    "location": "West Garden Grove",
    "service": "Comprehensive Eye Care"
  },
  {
    "quote": "Finally found an optometrist who really listens. The office is easy to get to from West Garden Grove and they got me in the same week I called.",
    "author": "Michael T.",
    "location": "West Garden Grove",
    "service": "Eye Exam"
  },
  {
    "quote": "Great with my kids and takes time to make them comfortable. Perfect location from our West Garden Grove home.",
    "author": "Jennifer L.",
    "location": "West Garden Grove",
    "service": "Children's Eye Care"
  }
];
  
  const seoKeywords = "optometrist-near-me West Garden Grove, West Garden Grove optometrist-near-me, Optometrist Near Me West Garden Grove, West Garden Grove eye doctor, optometrist-near-me near me";
  const metaDescription = "Expert optometrist near me in West Garden Grove, Garden Grove. Dr. Bonakdar provides specialized optometrist near me treatment. Same-week appointments. 10-15 minutes from West Garden Grove. (949) 658-2372";

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

export default OptometristNearMeWestGardenGrovePage;