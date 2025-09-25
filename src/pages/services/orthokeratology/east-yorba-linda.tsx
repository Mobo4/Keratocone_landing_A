import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const OrthokeratologyEastYorbaLindaPage: React.FC = () => {
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
  "city": "East Yorba Linda",
  "driveTime": "30-35 minutes",
  "neighborhoods": [
    "Located in East Yorba Linda",
    "Serving families throughout Yorba Linda",
    "Convenient to major Yorba Linda landmarks",
    "Easy freeway access from East Yorba Linda",
    "Trusted by East Yorba Linda residents since 1990",
    "Professional orthokeratology care near East Yorba Linda"
  ]
};
  
  const testimonials = [
  {
    "quote": "Ortho-k has been life-changing for my athletic teenager. Clear vision all day without contacts or glasses during sports.",
    "author": "Coach Miller",
    "location": "East Yorba Linda",
    "service": "Orthokeratology"
  },
  {
    "quote": "Love my ortho-k lenses! I can swim, surf, and play volleyball without worrying about contacts. Dr. Bonakdar is an expert.",
    "author": "Jessica A.",
    "location": "East Yorba Linda",
    "service": "Sports Vision"
  },
  {
    "quote": "The ortho-k fitting was so professional. Perfect vision during the day and slowing my child's myopia progression too.",
    "author": "Tom R.",
    "location": "East Yorba Linda",
    "service": "Myopia Control"
  }
];
  
  const seoKeywords = "orthokeratology East Yorba Linda, East Yorba Linda orthokeratology, Orthokeratology East Yorba Linda, East Yorba Linda eye doctor, orthokeratology near me";
  const metaDescription = "Expert orthokeratology in East Yorba Linda, Yorba Linda. Dr. Bonakdar provides specialized orthokeratology treatment. Same-week appointments. 30-35 minutes from East Yorba Linda. (949) 658-2372";

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

export default OrthokeratologyEastYorbaLindaPage;