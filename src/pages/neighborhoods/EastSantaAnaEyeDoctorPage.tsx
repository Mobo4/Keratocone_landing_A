import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const EastSantaAnaEyeDoctorPage = () => {
  const pageData = {
    city: "East Santa Ana",
    neighborhoods: [
      "Located in the heart of East Santa Ana",
      "Serving families near Century High School and Riverview Elementary",
      "Convenient to Santa Ana Zoo and Santiago Creek Greenway",
      "Close to Bristol Street corridor and The District shopping",
      "Easy access from Bristol, First Street, and Santa Ana Freeway",
      "Trusted by East Santa Ana families for comprehensive eye care"
    ],
    driveTime: "8 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar is so close to our East Santa Ana home. He caught my keratoconus early and fitted me with scleral lenses that changed my life!",
        author: "Maria G.",
        location: "East Santa Ana"
      },
      {
        quote: "Living near Century High School, it's perfect that Dr. Bonakdar speaks Spanish and is just minutes away. Great care for our whole family.",
        author: "Carlos R.",
        location: "East Santa Ana"
      },
      {
        quote: "As an East Santa Ana resident, I love that Dr. Bonakdar accepts our insurance and provides same-week appointments. Very professional!",
        author: "Angela T.",
        location: "East Santa Ana"
      }
    ],
    seoKeywords: "East Santa Ana eye doctor, East Santa Ana optometrist, eye exam East Santa Ana, keratoconus East Santa Ana, Bristol Street eye care",
    metaDescription: "Expert eye doctor serving East Santa Ana, CA. Dr. Bonakdar provides comprehensive eye care near Century High School. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default EastSantaAnaEyeDoctorPage;