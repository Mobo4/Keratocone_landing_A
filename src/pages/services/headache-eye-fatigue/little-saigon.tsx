import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const HeadacheandEyeFatigueLittleSaigonPage: React.FC = () => {
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
  "city": "Little Saigon",
  "driveTime": "15-20 minutes",
  "neighborhoods": [
    "Located in Little Saigon",
    "Serving families throughout Westminster",
    "Convenient to major Westminster landmarks",
    "Easy freeway access from Little Saigon",
    "Trusted by Little Saigon residents since 1990",
    "Professional headache and eye fatigue care near Little Saigon"
  ]
};
  
  const testimonials = [
  {
    "quote": "My computer-related headaches are gone thanks to Dr. Bonakdar's vision assessment. He found the exact cause and fixed it.",
    "author": "Rachel B.",
    "location": "Little Saigon",
    "service": "Computer Vision"
  },
  {
    "quote": "Years of eye strain and headaches resolved with the right prescription. Dr. Bonakdar really understands vision-related headaches.",
    "author": "Alex P.",
    "location": "Little Saigon",
    "service": "Eye Strain Treatment"
  },
  {
    "quote": "The comprehensive evaluation found vision problems I didn't know I had. No more afternoon headaches at work!",
    "author": "Michelle K.",
    "location": "Little Saigon",
    "service": "Vision Correction"
  }
];
  
  const seoKeywords = "headache-eye-fatigue Little Saigon, Little Saigon headache-eye-fatigue, Headache and Eye Fatigue Little Saigon, Little Saigon eye doctor, headache-eye-fatigue near me";
  const metaDescription = "Expert headache and eye fatigue in Little Saigon, Westminster. Dr. Bonakdar provides specialized headache and eye fatigue treatment. Same-week appointments. 15-20 minutes from Little Saigon. (949) 658-2372";

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

export default HeadacheandEyeFatigueLittleSaigonPage;