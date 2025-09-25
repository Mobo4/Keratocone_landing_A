import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const MyopiaControlCarbonCanyonPage: React.FC = () => {
  const service = {
  "name": "Myopia Control",
  "slug": "myopia-control",
  "description": "Slow down childhood myopia progression with proven treatments. Dr. Bonakdar offers advanced myopia control options including orthokeratology and specialty contact lenses.",
  "benefits": [
    "Proven myopia progression control",
    "Multiple treatment options available",
    "Orthokeratology (Ortho-K) expertise",
    "Specialty contact lens fittings",
    "Comprehensive pediatric eye care",
    "Long-term vision health protection"
  ],
  "expertise": "Dr. Bonakdar specializes in myopia control using the latest evidence-based treatments including orthokeratology, specialty soft lenses, and environmental modifications to slow myopia progression in children.",
  "icon": "baby",
  "relatedServices": [
    "Orthokeratology",
    "Children's Vision Care",
    "Contact Lens Fittings"
  ],
  "targetAudience": "families",
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
    "Professional myopia control care near Carbon Canyon"
  ]
};
  
  const testimonials = [
  {
    "quote": "My daughter's myopia progression has slowed significantly with Dr. Bonakdar's myopia control program. So grateful we found him.",
    "author": "Amy L.",
    "location": "Carbon Canyon",
    "service": "Myopia Control"
  },
  {
    "quote": "The ortho-k lenses have been amazing for my son. He can play sports without glasses and his prescription hasn't gotten worse.",
    "author": "Mark D.",
    "location": "Carbon Canyon",
    "service": "Orthokeratology"
  },
  {
    "quote": "Dr. Bonakdar explained myopia control so well. The treatment is working and we're protecting our child's future vision.",
    "author": "Lisa C.",
    "location": "Carbon Canyon",
    "service": "Children's Eye Care"
  }
];
  
  const seoKeywords = "myopia-control Carbon Canyon, Carbon Canyon myopia-control, Myopia Control Carbon Canyon, Carbon Canyon eye doctor, myopia-control near me";
  const metaDescription = "Expert myopia control in Carbon Canyon, Brea. Dr. Bonakdar provides specialized myopia control treatment. Same-week appointments. 25-30 minutes from Carbon Canyon. (949) 658-2372";

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

export default MyopiaControlCarbonCanyonPage;