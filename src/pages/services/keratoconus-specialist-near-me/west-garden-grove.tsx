import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const KeratoconusSpecialistNearMeWestGardenGrovePage: React.FC = () => {
  const service = {
  "name": "Keratoconus Specialist Near Me",
  "slug": "keratoconus-specialist-near-me",
  "description": "Expert keratoconus treatment with 500+ successful scleral lens fittings. Dr. Bonakdar specializes in advanced keratoconus management and specialty contact lenses.",
  "benefits": [
    "500+ successful keratoconus treatments",
    "Scleral lens fitting expertise",
    "Advanced corneal mapping technology",
    "Personalized treatment protocols",
    "Ongoing management and follow-up",
    "Insurance coverage for medical conditions"
  ],
  "expertise": "Dr. Bonakdar is recognized as a keratoconus specialist with over 500 successful scleral lens fittings. He uses advanced corneal topography and custom scleral lens designs to restore vision.",
  "icon": "microscope",
  "relatedServices": [
    "Scleral Lens Fittings",
    "Corneal Cross-Linking",
    "Specialty Contact Lenses"
  ],
  "targetAudience": "specialty",
  "searchVolume": "medium"
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
    "Professional keratoconus specialist near me care near West Garden Grove"
  ]
};
  
  const testimonials = [
  {
    "quote": "Dr. Bonakdar changed my life with scleral lenses. My vision is better than it's been in years. True keratoconus expert.",
    "author": "Emily R.",
    "location": "West Garden Grove",
    "service": "Keratoconus Treatment"
  },
  {
    "quote": "After being told nothing could help my keratoconus, Dr. Bonakdar fitted me with scleral lenses. Amazing results!",
    "author": "James H.",
    "location": "West Garden Grove",
    "service": "Scleral Lens Fitting"
  },
  {
    "quote": "The keratoconus care here is exceptional. Dr. Bonakdar really understands this condition and has the expertise to help.",
    "author": "Maria G.",
    "location": "West Garden Grove",
    "service": "Specialty Contact Lenses"
  }
];
  
  const seoKeywords = "keratoconus-specialist-near-me West Garden Grove, West Garden Grove keratoconus-specialist-near-me, Keratoconus Specialist Near Me West Garden Grove, West Garden Grove eye doctor, keratoconus-specialist-near-me near me";
  const metaDescription = "Expert keratoconus specialist near me in West Garden Grove, Garden Grove. Dr. Bonakdar provides specialized keratoconus specialist near me treatment. Same-week appointments. 10-15 minutes from West Garden Grove. (949) 658-2372";

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

export default KeratoconusSpecialistNearMeWestGardenGrovePage;