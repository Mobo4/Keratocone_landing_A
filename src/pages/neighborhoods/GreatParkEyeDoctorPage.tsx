import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const GreatParkEyeDoctorPage = () => {
  const pageData = {
    city: "Great Park, Irvine",
    neighborhoods: [
      "Located in the heart of Great Park",
      "Serving families near OC Great Park Balloon and Great Park Sports Complex",
      "Convenient to Great Park Elementary and Beacon Park School",
      "Close to Great Park Ice & FivePoint Arena and Wild Rivers",
      "Easy access from Sand Canyon Avenue, Irvine Boulevard, and Great Park Boulevard",
      "Trusted by Great Park families for over 30 years"
    ],
    driveTime: "18 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar's expertise with scleral lenses for my keratoconus has been incredible. I can now play tennis at Great Park without vision limitations holding me back.",
        author: "Kevin Lee",
        location: "Great Park"
      },
      {
        quote: "The contact lens fitting for my astigmatism was meticulous and thorough. Dr. Bonakdar's attention to detail ensured perfect comfort and vision clarity.",
        author: "Sophia Martinez",
        location: "Great Park"
      },
      {
        quote: "My son's vision therapy with Dr. Bonakdar improved his reading skills dramatically. The specialized treatment made all the difference in his academic performance.",
        author: "Michelle Wong",
        location: "Great Park"
      }
    ],
    seoKeywords: "great park eye doctor, great park optometrist, eye exam great park irvine, great park keratoconus specialist",
    metaDescription: "Expert eye doctor serving Great Park, Irvine. Dr. Bonakdar provides comprehensive eye care near OC Great Park Balloon. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default GreatParkEyeDoctorPage;