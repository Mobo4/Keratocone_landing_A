import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const KeratoconusSpecialistNearMeAnaheimResortPage: React.FC = () => {
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
  "city": "Anaheim Resort",
  "driveTime": "20-25 minutes",
  "neighborhoods": [
    "Located in Anaheim Resort",
    "Serving families throughout Anaheim",
    "Convenient to major Anaheim landmarks",
    "Easy freeway access from Anaheim Resort",
    "Trusted by Anaheim Resort residents since 1990",
    "Professional keratoconus specialist near me care near Anaheim Resort"
  ]
};
  
  const testimonials = [
  {
    "quote": "Dr. Bonakdar changed my life with scleral lenses. My vision is better than it's been in years. True keratoconus expert.",
    "author": "Emily R.",
    "location": "Anaheim Resort",
    "service": "Keratoconus Treatment"
  },
  {
    "quote": "After being told nothing could help my keratoconus, Dr. Bonakdar fitted me with scleral lenses. Amazing results!",
    "author": "James H.",
    "location": "Anaheim Resort",
    "service": "Scleral Lens Fitting"
  },
  {
    "quote": "The keratoconus care here is exceptional. Dr. Bonakdar really understands this condition and has the expertise to help.",
    "author": "Maria G.",
    "location": "Anaheim Resort",
    "service": "Specialty Contact Lenses"
  }
];
  
  const seoKeywords = "keratoconus-specialist-near-me Anaheim Resort, Anaheim Resort keratoconus-specialist-near-me, Keratoconus Specialist Near Me Anaheim Resort, Anaheim Resort eye doctor, keratoconus-specialist-near-me near me";
  const metaDescription = "Expert keratoconus specialist near me in Anaheim Resort, Anaheim. Dr. Bonakdar provides specialized keratoconus specialist near me treatment. Same-week appointments. 20-25 minutes from Anaheim Resort. (949) 658-2372";

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

export default KeratoconusSpecialistNearMeAnaheimResortPage;