import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const MyopiaControlTustinLegacyPage: React.FC = () => {
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
  "city": "Tustin Legacy",
  "driveTime": "8-12 minutes",
  "neighborhoods": [
    "Located in Tustin Legacy",
    "Serving families throughout Tustin",
    "Convenient to major Tustin landmarks",
    "Easy freeway access from Tustin Legacy",
    "Trusted by Tustin Legacy residents since 1990",
    "Professional myopia control care near Tustin Legacy"
  ]
};
  
  const testimonials = [
  {
    "quote": "My daughter's myopia progression has slowed significantly with Dr. Bonakdar's myopia control program. So grateful we found him.",
    "author": "Amy L.",
    "location": "Tustin Legacy",
    "service": "Myopia Control"
  },
  {
    "quote": "The ortho-k lenses have been amazing for my son. He can play sports without glasses and his prescription hasn't gotten worse.",
    "author": "Mark D.",
    "location": "Tustin Legacy",
    "service": "Orthokeratology"
  },
  {
    "quote": "Dr. Bonakdar explained myopia control so well. The treatment is working and we're protecting our child's future vision.",
    "author": "Lisa C.",
    "location": "Tustin Legacy",
    "service": "Children's Eye Care"
  }
];
  
  const seoKeywords = "myopia-control Tustin Legacy, Tustin Legacy myopia-control, Myopia Control Tustin Legacy, Tustin Legacy eye doctor, myopia-control near me";
  const metaDescription = "Expert myopia control in Tustin Legacy, Tustin. Dr. Bonakdar provides specialized myopia control treatment. Same-week appointments. 8-12 minutes from Tustin Legacy. (949) 658-2372";

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

export default MyopiaControlTustinLegacyPage;