import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const ScleralLensSpecialistNearMeCarbonCanyonPage: React.FC = () => {
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
  "city": "Carbon Canyon",
  "driveTime": "25-30 minutes",
  "neighborhoods": [
    "Located in Carbon Canyon",
    "Serving families throughout Brea",
    "Convenient to major Brea landmarks",
    "Easy freeway access from Carbon Canyon",
    "Trusted by Carbon Canyon residents since 1990",
    "Professional scleral lens specialist near me care near Carbon Canyon"
  ]
};
  
  const testimonials = [
  {
    "quote": "The scleral lens fitting process was so professional. Dr. Bonakdar's expertise shows - perfect fit and incredible vision improvement.",
    "author": "Kevin P.",
    "location": "Carbon Canyon",
    "service": "Scleral Lens Fitting"
  },
  {
    "quote": "Best decision ever was getting scleral lenses from Dr. Bonakdar. My vision and comfort are better than I ever imagined possible.",
    "author": "Susan M.",
    "location": "Carbon Canyon",
    "service": "Specialty Contact Lenses"
  },
  {
    "quote": "Dr. Bonakdar is a true scleral lens expert. The fitting was precise and the results are life-changing.",
    "author": "Richard T.",
    "location": "Carbon Canyon",
    "service": "Keratoconus Care"
  }
];
  
  const seoKeywords = "scleral-lens-specialist-near-me Carbon Canyon, Carbon Canyon scleral-lens-specialist-near-me, Scleral Lens Specialist Near Me Carbon Canyon, Carbon Canyon eye doctor, scleral-lens-specialist-near-me near me";
  const metaDescription = "Expert scleral lens specialist near me in Carbon Canyon, Brea. Dr. Bonakdar provides specialized scleral lens specialist near me treatment. Same-week appointments. 25-30 minutes from Carbon Canyon. (949) 658-2372";

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

export default ScleralLensSpecialistNearMeCarbonCanyonPage;