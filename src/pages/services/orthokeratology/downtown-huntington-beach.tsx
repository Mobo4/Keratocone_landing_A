import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const OrthokeratologyDowntownHuntingtonBeachPage: React.FC = () => {
  const service = {
  "name": "Orthokeratology",
  "slug": "orthokeratology",
  "description": "See clearly without glasses or contacts during the day. Orthokeratology (Ortho-K) reshapes your cornea overnight for clear daytime vision.",
  "benefits": [
    "Clear vision without daytime glasses/contacts",
    "FDA-approved overnight treatment",
    "Ideal for active lifestyles and sports",
    "Reversible vision correction",
    "Myopia control for children",
    "Custom lens design for optimal results"
  ],
  "expertise": "Dr. Bonakdar is certified in orthokeratology with extensive experience fitting Ortho-K lenses for both vision correction and myopia control in children and adults.",
  "icon": "moon",
  "relatedServices": [
    "Myopia Control",
    "Specialty Contact Lenses",
    "Sports Vision"
  ],
  "targetAudience": "sports",
  "searchVolume": "low"
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
    "Professional orthokeratology care near Downtown Huntington Beach"
  ]
};
  
  const testimonials = [
  {
    "quote": "Ortho-k has been life-changing for my athletic teenager. Clear vision all day without contacts or glasses during sports.",
    "author": "Coach Miller",
    "location": "Downtown Huntington Beach",
    "service": "Orthokeratology"
  },
  {
    "quote": "Love my ortho-k lenses! I can swim, surf, and play volleyball without worrying about contacts. Dr. Bonakdar is an expert.",
    "author": "Jessica A.",
    "location": "Downtown Huntington Beach",
    "service": "Sports Vision"
  },
  {
    "quote": "The ortho-k fitting was so professional. Perfect vision during the day and slowing my child's myopia progression too.",
    "author": "Tom R.",
    "location": "Downtown Huntington Beach",
    "service": "Myopia Control"
  }
];
  
  const seoKeywords = "orthokeratology Downtown Huntington Beach, Downtown Huntington Beach orthokeratology, Orthokeratology Downtown Huntington Beach, Downtown Huntington Beach eye doctor, orthokeratology near me";
  const metaDescription = "Expert orthokeratology in Downtown Huntington Beach, Huntington Beach. Dr. Bonakdar provides specialized orthokeratology treatment. Same-week appointments. 25-30 minutes from Downtown Huntington Beach. (949) 658-2372";

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

export default OrthokeratologyDowntownHuntingtonBeachPage;