import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const PlatinumTriangleEyeDoctorPage = () => {
  const pageData = {
    city: "Platinum Triangle, Anaheim",
    neighborhoods: [
      "Located in the heart of Platinum Triangle",
      "Serving families near Angel Stadium and Honda Center",
      "Convenient to The Anaheim Regional Transportation Intermodal Center",
      "Close to GardenWalk and Downtown Disney District",
      "Easy access from Katella Avenue, State College Boulevard, and Angel Stadium Drive",
      "Trusted by Platinum Triangle families for over 30 years"
    ],
    driveTime: "28 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar's scleral lens fitting for my keratoconus changed my life completely. Working in the sports industry near Angel Stadium requires perfect vision, and he delivered.",
        author: "Carlos Martinez",
        location: "Platinum Triangle"
      },
      {
        quote: "The advanced eye exams detected early signs of diabetic retinopathy. Dr. Bonakdar's coordination with my medical team has been exceptional.",
        author: "Jennifer Park",
        location: "Platinum Triangle"
      },
      {
        quote: "My contact lens fitting for complex astigmatism was handled with precision. Dr. Bonakdar's expertise with specialty lenses is unmatched in the Anaheim area.",
        author: "David Chen",
        location: "Platinum Triangle"
      }
    ],
    seoKeywords: "platinum triangle eye doctor, platinum triangle optometrist, eye exam platinum triangle anaheim, platinum triangle keratoconus specialist",
    metaDescription: "Expert eye doctor serving Platinum Triangle, Anaheim. Dr. Bonakdar provides comprehensive eye care near Angel Stadium. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default PlatinumTriangleEyeDoctorPage;