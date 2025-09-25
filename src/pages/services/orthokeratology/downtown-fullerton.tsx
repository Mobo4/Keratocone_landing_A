import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const OrthokeratologyDowntownFullertonPage: React.FC = () => {
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
  "city": "Downtown Fullerton",
  "driveTime": "20-25 minutes",
  "neighborhoods": [
    "Located in Downtown Fullerton",
    "Serving families throughout Fullerton",
    "Convenient to major Fullerton landmarks",
    "Easy freeway access from Downtown Fullerton",
    "Trusted by Downtown Fullerton residents since 1990",
    "Professional orthokeratology care near Downtown Fullerton"
  ]
};
  
  const testimonials = [
  {
    "quote": "Ortho-k has been life-changing for my athletic teenager. Clear vision all day without contacts or glasses during sports.",
    "author": "Coach Miller",
    "location": "Downtown Fullerton",
    "service": "Orthokeratology"
  },
  {
    "quote": "Love my ortho-k lenses! I can swim, surf, and play volleyball without worrying about contacts. Dr. Bonakdar is an expert.",
    "author": "Jessica A.",
    "location": "Downtown Fullerton",
    "service": "Sports Vision"
  },
  {
    "quote": "The ortho-k fitting was so professional. Perfect vision during the day and slowing my child's myopia progression too.",
    "author": "Tom R.",
    "location": "Downtown Fullerton",
    "service": "Myopia Control"
  }
];
  
  const seoKeywords = "orthokeratology Downtown Fullerton, Downtown Fullerton orthokeratology, Orthokeratology Downtown Fullerton, Downtown Fullerton eye doctor, orthokeratology near me";
  const metaDescription = "Expert orthokeratology in Downtown Fullerton, Fullerton. Dr. Bonakdar provides specialized orthokeratology treatment. Same-week appointments. 20-25 minutes from Downtown Fullerton. (949) 658-2372";

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

export default OrthokeratologyDowntownFullertonPage;