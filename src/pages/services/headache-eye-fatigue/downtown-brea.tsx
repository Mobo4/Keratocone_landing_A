import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const HeadacheandEyeFatigueDowntownBreaPage: React.FC = () => {
  const service = {
  "name": "Headache and Eye Fatigue",
  "slug": "headache-eye-fatigue",
  "description": "Frequent headaches or eye strain? Digital eye strain and vision problems can cause headaches. Get relief with comprehensive vision evaluation and treatment.",
  "benefits": [
    "Comprehensive headache evaluation",
    "Digital eye strain assessment",
    "Computer vision syndrome treatment",
    "Blue light protection options",
    "Ergonomic vision assessments",
    "Prescription solutions available"
  ],
  "expertise": "Dr. Bonakdar evaluates vision-related headaches and eye strain, providing targeted treatments for computer vision syndrome, uncorrected refractive errors, and binocular vision problems.",
  "icon": "activity",
  "relatedServices": [
    "Computer Vision",
    "Comprehensive Eye Exams",
    "Vision Therapy"
  ],
  "targetAudience": "professionals",
  "searchVolume": "medium"
};
  
  const location = {
  "city": "Downtown Brea",
  "driveTime": "25-30 minutes",
  "neighborhoods": [
    "Located in Downtown Brea",
    "Serving families throughout Brea",
    "Convenient to major Brea landmarks",
    "Easy freeway access from Downtown Brea",
    "Trusted by Downtown Brea residents since 1990",
    "Professional headache and eye fatigue care near Downtown Brea"
  ]
};
  
  const testimonials = [
  {
    "quote": "My computer-related headaches are gone thanks to Dr. Bonakdar's vision assessment. He found the exact cause and fixed it.",
    "author": "Rachel B.",
    "location": "Downtown Brea",
    "service": "Computer Vision"
  },
  {
    "quote": "Years of eye strain and headaches resolved with the right prescription. Dr. Bonakdar really understands vision-related headaches.",
    "author": "Alex P.",
    "location": "Downtown Brea",
    "service": "Eye Strain Treatment"
  },
  {
    "quote": "The comprehensive evaluation found vision problems I didn't know I had. No more afternoon headaches at work!",
    "author": "Michelle K.",
    "location": "Downtown Brea",
    "service": "Vision Correction"
  }
];
  
  const seoKeywords = "headache-eye-fatigue Downtown Brea, Downtown Brea headache-eye-fatigue, Headache and Eye Fatigue Downtown Brea, Downtown Brea eye doctor, headache-eye-fatigue near me";
  const metaDescription = "Expert headache and eye fatigue in Downtown Brea, Brea. Dr. Bonakdar provides specialized headache and eye fatigue treatment. Same-week appointments. 25-30 minutes from Downtown Brea. (949) 658-2372";

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

export default HeadacheandEyeFatigueDowntownBreaPage;