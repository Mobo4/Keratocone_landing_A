import React from 'react';
import ServiceLocationTemplate from '@/components/ServiceLocationTemplate';

const DryEyeDoctorNearMeCypressVillagePage: React.FC = () => {
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
  "city": "Cypress Village",
  "driveTime": "12-15 minutes",
  "neighborhoods": [
    "Located in Cypress Village",
    "Serving families throughout Irvine",
    "Convenient to major Irvine landmarks",
    "Easy freeway access from Cypress Village",
    "Trusted by Cypress Village residents since 1990",
    "Professional dry eye doctor near me care near Cypress Village"
  ]
};
  
  const testimonials = [
  {
    "quote": "Suffered with dry eyes for years until I found Dr. Bonakdar. His treatment plan has given me complete relief. Worth the drive from Cypress Village!",
    "author": "Robert K.",
    "location": "Cypress Village",
    "service": "Dry Eye Treatment"
  },
  {
    "quote": "The dry eye evaluation was so thorough. Dr. Bonakdar explained exactly what was causing my symptoms and the treatment is working perfectly.",
    "author": "Linda S.",
    "location": "Cypress Village",
    "service": "Dry Eye Therapy"
  },
  {
    "quote": "I can finally wear contacts again thanks to Dr. Bonakdar's dry eye treatment. Convenient location from Cypress Village.",
    "author": "David W.",
    "location": "Cypress Village",
    "service": "Contact Lens Care"
  }
];
  
  const seoKeywords = "dry-eye-doctor-near-me Cypress Village, Cypress Village dry-eye-doctor-near-me, Dry Eye Doctor Near Me Cypress Village, Cypress Village eye doctor, dry-eye-doctor-near-me near me";
  const metaDescription = "Expert dry eye doctor near me in Cypress Village, Irvine. Dr. Bonakdar provides specialized dry eye doctor near me treatment. Same-week appointments. 12-15 minutes from Cypress Village. (949) 658-2372";

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

export default DryEyeDoctorNearMeCypressVillagePage;