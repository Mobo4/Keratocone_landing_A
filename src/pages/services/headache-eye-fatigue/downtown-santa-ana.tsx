import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const HeadacheandEyeFatigueDowntownSantaAnaPage: React.FC = () => {
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
  "city": "Downtown Santa Ana",
  "driveTime": "5-8 minutes",
  "neighborhoods": [
    "Located in Downtown Santa Ana",
    "Serving families throughout Santa Ana",
    "Convenient to major Santa Ana landmarks",
    "Easy freeway access from Downtown Santa Ana",
    "Trusted by Downtown Santa Ana residents since 1990",
    "Professional headache and eye fatigue care near Downtown Santa Ana"
  ]
};
  
  const testimonials = [
  {
    "quote": "My computer-related headaches are gone thanks to Dr. Bonakdar's vision assessment. He found the exact cause and fixed it.",
    "author": "Rachel B.",
    "location": "Downtown Santa Ana",
    "service": "Computer Vision"
  },
  {
    "quote": "Years of eye strain and headaches resolved with the right prescription. Dr. Bonakdar really understands vision-related headaches.",
    "author": "Alex P.",
    "location": "Downtown Santa Ana",
    "service": "Eye Strain Treatment"
  },
  {
    "quote": "The comprehensive evaluation found vision problems I didn't know I had. No more afternoon headaches at work!",
    "author": "Michelle K.",
    "location": "Downtown Santa Ana",
    "service": "Vision Correction"
  }
];
  
  const seoKeywords = "headache-eye-fatigue Downtown Santa Ana, Downtown Santa Ana headache-eye-fatigue, Headache and Eye Fatigue Downtown Santa Ana, Downtown Santa Ana eye doctor, headache-eye-fatigue near me";
  const metaDescription = "Expert headache and eye fatigue in Downtown Santa Ana, Santa Ana. Dr. Bonakdar provides specialized headache and eye fatigue treatment. Same-week appointments. 5-8 minutes from Downtown Santa Ana. (949) 658-2372";

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

export default HeadacheandEyeFatigueDowntownSantaAnaPage;