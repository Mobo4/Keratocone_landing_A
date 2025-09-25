import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const MyopiaControlEastYorbaLindaPage: React.FC = () => {
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
  "city": "East Yorba Linda",
  "driveTime": "30-35 minutes",
  "neighborhoods": [
    "Located in East Yorba Linda",
    "Serving families throughout Yorba Linda",
    "Convenient to major Yorba Linda landmarks",
    "Easy freeway access from East Yorba Linda",
    "Trusted by East Yorba Linda residents since 1990",
    "Professional myopia control care near East Yorba Linda"
  ]
};
  
  const testimonials = [
  {
    "quote": "My daughter's myopia progression has slowed significantly with Dr. Bonakdar's myopia control program. So grateful we found him.",
    "author": "Amy L.",
    "location": "East Yorba Linda",
    "service": "Myopia Control"
  },
  {
    "quote": "The ortho-k lenses have been amazing for my son. He can play sports without glasses and his prescription hasn't gotten worse.",
    "author": "Mark D.",
    "location": "East Yorba Linda",
    "service": "Orthokeratology"
  },
  {
    "quote": "Dr. Bonakdar explained myopia control so well. The treatment is working and we're protecting our child's future vision.",
    "author": "Lisa C.",
    "location": "East Yorba Linda",
    "service": "Children's Eye Care"
  }
];
  
  const seoKeywords = "myopia-control East Yorba Linda, East Yorba Linda myopia-control, Myopia Control East Yorba Linda, East Yorba Linda eye doctor, myopia-control near me";
  const metaDescription = "Expert myopia control in East Yorba Linda, Yorba Linda. Dr. Bonakdar provides specialized myopia control treatment. Same-week appointments. 30-35 minutes from East Yorba Linda. (949) 658-2372";

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

export default MyopiaControlEastYorbaLindaPage;