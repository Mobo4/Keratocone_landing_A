import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const OptometristNearMeDowntownHuntingtonBeachPage: React.FC = () => {
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
  "city": "Downtown Huntington Beach",
  "driveTime": "25-30 minutes",
  "neighborhoods": [
    "Located in Downtown Huntington Beach",
    "Serving families throughout Huntington Beach",
    "Convenient to major Huntington Beach landmarks",
    "Easy freeway access from Downtown Huntington Beach",
    "Trusted by Downtown Huntington Beach residents since 1990",
    "Professional optometrist near me care near Downtown Huntington Beach"
  ]
};
  
  const testimonials = [
  {
    "quote": "Dr. Bonakdar has been our family eye doctor for over 10 years. So convenient from Downtown Huntington Beach and he always takes time to explain everything thoroughly.",
    "author": "Sarah M.",
    "location": "Downtown Huntington Beach",
    "service": "Comprehensive Eye Care"
  },
  {
    "quote": "Finally found an optometrist who really listens. The office is easy to get to from Downtown Huntington Beach and they got me in the same week I called.",
    "author": "Michael T.",
    "location": "Downtown Huntington Beach",
    "service": "Eye Exam"
  },
  {
    "quote": "Great with my kids and takes time to make them comfortable. Perfect location from our Downtown Huntington Beach home.",
    "author": "Jennifer L.",
    "location": "Downtown Huntington Beach",
    "service": "Children's Eye Care"
  }
];
  
  const seoKeywords = "optometrist-near-me Downtown Huntington Beach, Downtown Huntington Beach optometrist-near-me, Optometrist Near Me Downtown Huntington Beach, Downtown Huntington Beach eye doctor, optometrist-near-me near me";
  const metaDescription = "Expert optometrist near me in Downtown Huntington Beach, Huntington Beach. Dr. Bonakdar provides specialized optometrist near me treatment. Same-week appointments. 25-30 minutes from Downtown Huntington Beach. (949) 658-2372";

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

export default OptometristNearMeDowntownHuntingtonBeachPage;