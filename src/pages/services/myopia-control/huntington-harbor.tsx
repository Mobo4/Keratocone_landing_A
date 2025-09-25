import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const MyopiaControlHuntingtonHarborPage: React.FC = () => {
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
  "city": "Huntington Harbor",
  "driveTime": "25-30 minutes",
  "neighborhoods": [
    "Located in Huntington Harbor",
    "Serving families throughout Huntington Beach",
    "Convenient to major Huntington Beach landmarks",
    "Easy freeway access from Huntington Harbor",
    "Trusted by Huntington Harbor residents since 1990",
    "Professional myopia control care near Huntington Harbor"
  ]
};
  
  const testimonials = [
  {
    "quote": "My daughter's myopia progression has slowed significantly with Dr. Bonakdar's myopia control program. So grateful we found him.",
    "author": "Amy L.",
    "location": "Huntington Harbor",
    "service": "Myopia Control"
  },
  {
    "quote": "The ortho-k lenses have been amazing for my son. He can play sports without glasses and his prescription hasn't gotten worse.",
    "author": "Mark D.",
    "location": "Huntington Harbor",
    "service": "Orthokeratology"
  },
  {
    "quote": "Dr. Bonakdar explained myopia control so well. The treatment is working and we're protecting our child's future vision.",
    "author": "Lisa C.",
    "location": "Huntington Harbor",
    "service": "Children's Eye Care"
  }
];
  
  const seoKeywords = "myopia-control Huntington Harbor, Huntington Harbor myopia-control, Myopia Control Huntington Harbor, Huntington Harbor eye doctor, myopia-control near me";
  const metaDescription = "Expert myopia control in Huntington Harbor, Huntington Beach. Dr. Bonakdar provides specialized myopia control treatment. Same-week appointments. 25-30 minutes from Huntington Harbor. (949) 658-2372";

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

export default MyopiaControlHuntingtonHarborPage;