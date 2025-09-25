import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const DryEyeDoctorNearMeDowntownBreaPage: React.FC = () => {
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
  "city": "Downtown Brea",
  "driveTime": "25-30 minutes",
  "neighborhoods": [
    "Located in Downtown Brea",
    "Serving families throughout Brea",
    "Convenient to major Brea landmarks",
    "Easy freeway access from Downtown Brea",
    "Trusted by Downtown Brea residents since 1990",
    "Professional dry eye doctor near me care near Downtown Brea"
  ]
};
  
  const testimonials = [
  {
    "quote": "Suffered with dry eyes for years until I found Dr. Bonakdar. His treatment plan has given me complete relief. Worth the drive from Downtown Brea!",
    "author": "Robert K.",
    "location": "Downtown Brea",
    "service": "Dry Eye Treatment"
  },
  {
    "quote": "The dry eye evaluation was so thorough. Dr. Bonakdar explained exactly what was causing my symptoms and the treatment is working perfectly.",
    "author": "Linda S.",
    "location": "Downtown Brea",
    "service": "Dry Eye Therapy"
  },
  {
    "quote": "I can finally wear contacts again thanks to Dr. Bonakdar's dry eye treatment. Convenient location from Downtown Brea.",
    "author": "David W.",
    "location": "Downtown Brea",
    "service": "Contact Lens Care"
  }
];
  
  const seoKeywords = "dry-eye-doctor-near-me Downtown Brea, Downtown Brea dry-eye-doctor-near-me, Dry Eye Doctor Near Me Downtown Brea, Downtown Brea eye doctor, dry-eye-doctor-near-me near me";
  const metaDescription = "Expert dry eye doctor near me in Downtown Brea, Brea. Dr. Bonakdar provides specialized dry eye doctor near me treatment. Same-week appointments. 25-30 minutes from Downtown Brea. (949) 658-2372";

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

export default DryEyeDoctorNearMeDowntownBreaPage;