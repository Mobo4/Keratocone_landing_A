import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const MyopiaControlWestGardenGrovePage: React.FC = () => {
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
  "city": "West Garden Grove",
  "driveTime": "10-15 minutes",
  "neighborhoods": [
    "Located in West Garden Grove",
    "Serving families throughout Garden Grove",
    "Convenient to major Garden Grove landmarks",
    "Easy freeway access from West Garden Grove",
    "Trusted by West Garden Grove residents since 1990",
    "Professional myopia control care near West Garden Grove"
  ]
};
  
  const testimonials = [
  {
    "quote": "My daughter's myopia progression has slowed significantly with Dr. Bonakdar's myopia control program. So grateful we found him.",
    "author": "Amy L.",
    "location": "West Garden Grove",
    "service": "Myopia Control"
  },
  {
    "quote": "The ortho-k lenses have been amazing for my son. He can play sports without glasses and his prescription hasn't gotten worse.",
    "author": "Mark D.",
    "location": "West Garden Grove",
    "service": "Orthokeratology"
  },
  {
    "quote": "Dr. Bonakdar explained myopia control so well. The treatment is working and we're protecting our child's future vision.",
    "author": "Lisa C.",
    "location": "West Garden Grove",
    "service": "Children's Eye Care"
  }
];
  
  const seoKeywords = "myopia-control West Garden Grove, West Garden Grove myopia-control, Myopia Control West Garden Grove, West Garden Grove eye doctor, myopia-control near me";
  const metaDescription = "Expert myopia control in West Garden Grove, Garden Grove. Dr. Bonakdar provides specialized myopia control treatment. Same-week appointments. 10-15 minutes from West Garden Grove. (949) 658-2372";

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

export default MyopiaControlWestGardenGrovePage;