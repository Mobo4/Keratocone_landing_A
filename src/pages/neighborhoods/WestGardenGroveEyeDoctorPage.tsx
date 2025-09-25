import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const WestGardenGroveEyeDoctorPage = () => {
  const pageData = {
    city: "West Garden Grove",
    neighborhoods: [
      "Located in vibrant West Garden Grove community",
      "Serving families near Brookhurst Junior High and Enders Elementary",
      "Convenient to Westminster Mall and shopping centers",
      "Close to Mile Square Regional Park and recreational areas",
      "Easy access from 405 Freeway via Brookhurst and Beach Boulevard",
      "Trusted by West Garden Grove families for quality eye care"
    ],
    driveTime: "18 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar's scleral lens fitting was perfect for my keratoconus. The drive from West Garden Grove is easy with freeway access!",
        author: "James L.",
        location: "West Garden Grove"
      },
      {
        quote: "Living near Westminster Mall, we love that Dr. Bonakdar's staff speaks both English and Spanish. Great care for our family!",
        author: "Patricia R.",
        location: "West Garden Grove"
      },
      {
        quote: "As a West Garden Grove resident, I appreciate Dr. Bonakdar's thorough exams and modern equipment. He caught my eye problem early!",
        author: "Michael S.",
        location: "West Garden Grove"
      }
    ],
    seoKeywords: "West Garden Grove eye doctor, Brookhurst eye care, Westminster Mall optometrist, eye exam West Garden Grove, Beach Boulevard eye doctor",
    metaDescription: "Expert eye doctor serving West Garden Grove, CA. Dr. Bonakdar provides comprehensive eye care near Westminster Mall. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default WestGardenGroveEyeDoctorPage;