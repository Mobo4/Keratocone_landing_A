import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const MyopiaControlTurtleRockPage: React.FC = () => {
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
  "city": "Turtle Rock",
  "driveTime": "12-15 minutes",
  "neighborhoods": [
    "Located in Turtle Rock",
    "Serving families throughout Irvine",
    "Convenient to major Irvine landmarks",
    "Easy freeway access from Turtle Rock",
    "Trusted by Turtle Rock residents since 1990",
    "Professional myopia control care near Turtle Rock"
  ]
};
  
  const testimonials = [
  {
    "quote": "My daughter's myopia progression has slowed significantly with Dr. Bonakdar's myopia control program. So grateful we found him.",
    "author": "Amy L.",
    "location": "Turtle Rock",
    "service": "Myopia Control"
  },
  {
    "quote": "The ortho-k lenses have been amazing for my son. He can play sports without glasses and his prescription hasn't gotten worse.",
    "author": "Mark D.",
    "location": "Turtle Rock",
    "service": "Orthokeratology"
  },
  {
    "quote": "Dr. Bonakdar explained myopia control so well. The treatment is working and we're protecting our child's future vision.",
    "author": "Lisa C.",
    "location": "Turtle Rock",
    "service": "Children's Eye Care"
  }
];
  
  const seoKeywords = "myopia-control Turtle Rock, Turtle Rock myopia-control, Myopia Control Turtle Rock, Turtle Rock eye doctor, myopia-control near me";
  const metaDescription = "Expert myopia control in Turtle Rock, Irvine. Dr. Bonakdar provides specialized myopia control treatment. Same-week appointments. 12-15 minutes from Turtle Rock. (949) 658-2372";

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

export default MyopiaControlTurtleRockPage;