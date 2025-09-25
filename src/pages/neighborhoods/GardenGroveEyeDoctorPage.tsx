import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const GardenGroveEyeDoctorPage = () => {
  const pageData = {
    city: "Garden Grove",
    neighborhoods: [
      "Located in central Garden Grove community",
      "Serving families near Garden Grove High School and Santiago Elementary",
      "Convenient to Main Street shopping and business district",
      "Close to Garden Grove Park and recreational facilities",
      "Easy access from 22 and 405 Freeways via Harbor Boulevard",
      "Trusted by Garden Grove families for comprehensive eye care"
    ],
    driveTime: "15 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar's keratoconus treatment changed my life! The drive from Garden Grove is so convenient, and his expertise is amazing.",
        author: "Rosa M.",
        location: "Garden Grove"
      },
      {
        quote: "Living near Garden Grove High, we appreciate Dr. Bonakdar's bilingual staff and thorough approach to our teenagers' eye care.",
        author: "David K.",
        location: "Garden Grove"
      },
      {
        quote: "As a Garden Grove resident, I love that Dr. Bonakdar accepts all our insurance and provides same-week appointments. Excellent service!",
        author: "Linda T.",
        location: "Garden Grove"
      }
    ],
    seoKeywords: "Garden Grove eye doctor, Garden Grove optometrist, eye exam Garden Grove, Main Street eye care, Harbor Boulevard eye doctor",
    metaDescription: "Expert eye doctor serving Garden Grove, CA. Dr. Bonakdar provides comprehensive eye care near Main Street district. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default GardenGroveEyeDoctorPage;