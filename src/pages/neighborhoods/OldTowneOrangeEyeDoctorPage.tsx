import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const OldTowneOrangeEyeDoctorPage = () => {
  const pageData = {
    city: "Old Towne Orange",
    neighborhoods: [
      "Located in the charming heart of Old Towne Orange",
      "Serving families near Orange Circle and antique shops",
      "Convenient to Chapman University and Orange High School",
      "Close to Orange Plaza and Historic Orange landmarks",
      "Easy access from Glassell Street, Chapman Avenue, and The Circle",
      "Trusted by Old Towne Orange families for personalized eye care"
    ],
    driveTime: "12 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar is perfect for our historic Old Towne Orange community. He treated my keratoconus with the same personal care as our neighborhood shops!",
        author: "Robert S.",
        location: "Old Towne Orange"
      },
      {
        quote: "Living near Chapman University, I love that Dr. Bonakdar is just a short drive from the Orange Circle. His scleral lens fitting was amazing!",
        author: "Jessica M.",
        location: "Old Towne Orange"
      },
      {
        quote: "As an Orange High School parent, Dr. Bonakdar's convenient location and expertise with teen eye care makes him our go-to eye doctor.",
        author: "Michael D.",
        location: "Old Towne Orange"
      }
    ],
    seoKeywords: "Old Towne Orange eye doctor, Orange Circle optometrist, eye exam Old Towne Orange, Chapman University eye care, Orange Plaza eye doctor",
    metaDescription: "Expert eye doctor serving Old Towne Orange, CA. Dr. Bonakdar provides comprehensive eye care near Orange Circle and Chapman University. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default OldTowneOrangeEyeDoctorPage;