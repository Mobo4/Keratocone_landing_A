import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const HeadacheandEyeFatigueFloralParkPage: React.FC = () => {
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
  "city": "Floral Park",
  "driveTime": "5-8 minutes",
  "neighborhoods": [
    "Located in Floral Park",
    "Serving families throughout Santa Ana",
    "Convenient to major Santa Ana landmarks",
    "Easy freeway access from Floral Park",
    "Trusted by Floral Park residents since 1990",
    "Professional headache and eye fatigue care near Floral Park"
  ]
};
  
  const testimonials = [
  {
    "quote": "My computer-related headaches are gone thanks to Dr. Bonakdar's vision assessment. He found the exact cause and fixed it.",
    "author": "Rachel B.",
    "location": "Floral Park",
    "service": "Computer Vision"
  },
  {
    "quote": "Years of eye strain and headaches resolved with the right prescription. Dr. Bonakdar really understands vision-related headaches.",
    "author": "Alex P.",
    "location": "Floral Park",
    "service": "Eye Strain Treatment"
  },
  {
    "quote": "The comprehensive evaluation found vision problems I didn't know I had. No more afternoon headaches at work!",
    "author": "Michelle K.",
    "location": "Floral Park",
    "service": "Vision Correction"
  }
];
  
  const seoKeywords = "headache-eye-fatigue Floral Park, Floral Park headache-eye-fatigue, Headache and Eye Fatigue Floral Park, Floral Park eye doctor, headache-eye-fatigue near me";
  const metaDescription = "Expert headache and eye fatigue in Floral Park, Santa Ana. Dr. Bonakdar provides specialized headache and eye fatigue treatment. Same-week appointments. 5-8 minutes from Floral Park. (949) 658-2372";

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

export default HeadacheandEyeFatigueFloralParkPage;