import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const DryEyeDoctorNearMeWestGardenGrovePage: React.FC = () => {
  const service = {
  "name": "Dry Eye Doctor Near Me",
  "slug": "dry-eye-doctor-near-me",
  "description": "Suffering from dry, irritated eyes? Find relief with Dr. Bonakdar's advanced dry eye treatments. Specialized care for chronic dry eye syndrome with lasting results.",
  "benefits": [
    "Advanced dry eye diagnostic technology",
    "Personalized treatment plans",
    "Multiple treatment options available",
    "30+ years of dry eye management experience",
    "Same-week consultations",
    "Insurance coverage for medical dry eye"
  ],
  "expertise": "Dr. Bonakdar specializes in comprehensive dry eye management using the latest diagnostic tools and treatment methods, including punctal plugs, prescription eye drops, and lifestyle modifications.",
  "icon": "droplet",
  "relatedServices": [
    "Comprehensive Eye Exams",
    "Contact Lens Fittings",
    "Eye Allergies"
  ],
  "targetAudience": "adults",
  "searchVolume": "high"
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
    "Professional dry eye doctor near me care near West Garden Grove"
  ]
};
  
  const testimonials = [
  {
    "quote": "Suffered with dry eyes for years until I found Dr. Bonakdar. His treatment plan has given me complete relief. Worth the drive from West Garden Grove!",
    "author": "Robert K.",
    "location": "West Garden Grove",
    "service": "Dry Eye Treatment"
  },
  {
    "quote": "The dry eye evaluation was so thorough. Dr. Bonakdar explained exactly what was causing my symptoms and the treatment is working perfectly.",
    "author": "Linda S.",
    "location": "West Garden Grove",
    "service": "Dry Eye Therapy"
  },
  {
    "quote": "I can finally wear contacts again thanks to Dr. Bonakdar's dry eye treatment. Convenient location from West Garden Grove.",
    "author": "David W.",
    "location": "West Garden Grove",
    "service": "Contact Lens Care"
  }
];
  
  const seoKeywords = "dry-eye-doctor-near-me West Garden Grove, West Garden Grove dry-eye-doctor-near-me, Dry Eye Doctor Near Me West Garden Grove, West Garden Grove eye doctor, dry-eye-doctor-near-me near me";
  const metaDescription = "Expert dry eye doctor near me in West Garden Grove, Garden Grove. Dr. Bonakdar provides specialized dry eye doctor near me treatment. Same-week appointments. 10-15 minutes from West Garden Grove. (949) 658-2372";

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

export default DryEyeDoctorNearMeWestGardenGrovePage;