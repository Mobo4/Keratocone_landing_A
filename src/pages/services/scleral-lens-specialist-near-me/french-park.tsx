import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const ScleralLensSpecialistNearMeFrenchParkPage: React.FC = () => {
  const service = {
  "name": "Scleral Lens Specialist Near Me",
  "slug": "scleral-lens-specialist-near-me",
  "description": "Expert scleral lens fittings for keratoconus, irregular corneas, and severe dry eye. Dr. Bonakdar has successfully fitted 500+ patients with custom scleral lenses.",
  "benefits": [
    "500+ successful scleral lens fittings",
    "Custom lens design and fabrication",
    "Advanced fitting technology",
    "Comprehensive follow-up care",
    "Insurance coverage available",
    "Improved vision and comfort"
  ],
  "expertise": "Dr. Bonakdar is an expert in scleral lens technology with over 500 successful fittings. He uses advanced diagnostic equipment to create custom lenses for optimal vision and comfort.",
  "icon": "glasses",
  "relatedServices": [
    "Keratoconus Treatment",
    "Dry Eye Therapy",
    "Specialty Contact Lenses"
  ],
  "targetAudience": "specialty",
  "searchVolume": "medium"
};
  
  const location = {
  "city": "French Park",
  "driveTime": "5-8 minutes",
  "neighborhoods": [
    "Located in French Park",
    "Serving families throughout Santa Ana",
    "Convenient to major Santa Ana landmarks",
    "Easy freeway access from French Park",
    "Trusted by French Park residents since 1990",
    "Professional scleral lens specialist near me care near French Park"
  ]
};
  
  const testimonials = [
  {
    "quote": "The scleral lens fitting process was so professional. Dr. Bonakdar's expertise shows - perfect fit and incredible vision improvement.",
    "author": "Kevin P.",
    "location": "French Park",
    "service": "Scleral Lens Fitting"
  },
  {
    "quote": "Best decision ever was getting scleral lenses from Dr. Bonakdar. My vision and comfort are better than I ever imagined possible.",
    "author": "Susan M.",
    "location": "French Park",
    "service": "Specialty Contact Lenses"
  },
  {
    "quote": "Dr. Bonakdar is a true scleral lens expert. The fitting was precise and the results are life-changing.",
    "author": "Richard T.",
    "location": "French Park",
    "service": "Keratoconus Care"
  }
];
  
  const seoKeywords = "scleral-lens-specialist-near-me French Park, French Park scleral-lens-specialist-near-me, Scleral Lens Specialist Near Me French Park, French Park eye doctor, scleral-lens-specialist-near-me near me";
  const metaDescription = "Expert scleral lens specialist near me in French Park, Santa Ana. Dr. Bonakdar provides specialized scleral lens specialist near me treatment. Same-week appointments. 5-8 minutes from French Park. (949) 658-2372";

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

export default ScleralLensSpecialistNearMeFrenchParkPage;