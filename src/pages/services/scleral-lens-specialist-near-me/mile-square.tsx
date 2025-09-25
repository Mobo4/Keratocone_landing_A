import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const ScleralLensSpecialistNearMeMileSquarePage: React.FC = () => {
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
  "city": "Mile Square",
  "driveTime": "15-20 minutes",
  "neighborhoods": [
    "Located in Mile Square",
    "Serving families throughout Fountain Valley",
    "Convenient to major Fountain Valley landmarks",
    "Easy freeway access from Mile Square",
    "Trusted by Mile Square residents since 1990",
    "Professional scleral lens specialist near me care near Mile Square"
  ]
};
  
  const testimonials = [
  {
    "quote": "The scleral lens fitting process was so professional. Dr. Bonakdar's expertise shows - perfect fit and incredible vision improvement.",
    "author": "Kevin P.",
    "location": "Mile Square",
    "service": "Scleral Lens Fitting"
  },
  {
    "quote": "Best decision ever was getting scleral lenses from Dr. Bonakdar. My vision and comfort are better than I ever imagined possible.",
    "author": "Susan M.",
    "location": "Mile Square",
    "service": "Specialty Contact Lenses"
  },
  {
    "quote": "Dr. Bonakdar is a true scleral lens expert. The fitting was precise and the results are life-changing.",
    "author": "Richard T.",
    "location": "Mile Square",
    "service": "Keratoconus Care"
  }
];
  
  const seoKeywords = "scleral-lens-specialist-near-me Mile Square, Mile Square scleral-lens-specialist-near-me, Scleral Lens Specialist Near Me Mile Square, Mile Square eye doctor, scleral-lens-specialist-near-me near me";
  const metaDescription = "Expert scleral lens specialist near me in Mile Square, Fountain Valley. Dr. Bonakdar provides specialized scleral lens specialist near me treatment. Same-week appointments. 15-20 minutes from Mile Square. (949) 658-2372";

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

export default ScleralLensSpecialistNearMeMileSquarePage;