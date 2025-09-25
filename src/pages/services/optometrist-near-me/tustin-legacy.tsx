import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const OptometristNearMeTustinLegacyPage: React.FC = () => {
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
  "city": "Tustin Legacy",
  "driveTime": "8-12 minutes",
  "neighborhoods": [
    "Located in Tustin Legacy",
    "Serving families throughout Tustin",
    "Convenient to major Tustin landmarks",
    "Easy freeway access from Tustin Legacy",
    "Trusted by Tustin Legacy residents since 1990",
    "Professional optometrist near me care near Tustin Legacy"
  ]
};
  
  const testimonials = [
  {
    "quote": "Dr. Bonakdar has been our family eye doctor for over 10 years. So convenient from Tustin Legacy and he always takes time to explain everything thoroughly.",
    "author": "Sarah M.",
    "location": "Tustin Legacy",
    "service": "Comprehensive Eye Care"
  },
  {
    "quote": "Finally found an optometrist who really listens. The office is easy to get to from Tustin Legacy and they got me in the same week I called.",
    "author": "Michael T.",
    "location": "Tustin Legacy",
    "service": "Eye Exam"
  },
  {
    "quote": "Great with my kids and takes time to make them comfortable. Perfect location from our Tustin Legacy home.",
    "author": "Jennifer L.",
    "location": "Tustin Legacy",
    "service": "Children's Eye Care"
  }
];
  
  const seoKeywords = "optometrist-near-me Tustin Legacy, Tustin Legacy optometrist-near-me, Optometrist Near Me Tustin Legacy, Tustin Legacy eye doctor, optometrist-near-me near me";
  const metaDescription = "Expert optometrist near me in Tustin Legacy, Tustin. Dr. Bonakdar provides specialized optometrist near me treatment. Same-week appointments. 8-12 minutes from Tustin Legacy. (949) 658-2372";

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

export default OptometristNearMeTustinLegacyPage;