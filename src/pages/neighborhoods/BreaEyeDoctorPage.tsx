import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const BreaEyeDoctorPage = () => {
  const pageData = {
    city: "Brea",
    neighborhoods: [
      "Located in beautiful Brea community",
      "Serving families near Brea Olinda High School and Mariposa Elementary",
      "Convenient to Brea Mall and shopping centers",
      "Close to Carbon Canyon Regional Park and Chino Hills State Park",
      "Easy access from 57 and 60 Freeways via Imperial Highway",
      "Trusted by Brea families for comprehensive eye care"
    ],
    driveTime: "35 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar's keratoconus treatment changed my life! The drive from Brea is easy with freeway access, and his expertise is worth it.",
        author: "Jonathan K.",
        location: "Brea"
      },
      {
        quote: "Living near Brea Mall, we love that Dr. Bonakdar provides thorough eye exams and accepts all our insurance plans. Great family care!",
        author: "Helen T.",
        location: "Brea"
      },
      {
        quote: "As a Brea resident, I appreciate Dr. Bonakdar's modern equipment and professional staff. Best eye doctor in Orange County!",
        author: "David M.",
        location: "Brea"
      }
    ],
    seoKeywords: "Brea eye doctor, Brea optometrist, eye exam Brea, Brea Mall eye care, Imperial Highway eye doctor",
    metaDescription: "Expert eye doctor serving Brea, CA. Dr. Bonakdar provides comprehensive eye care near Brea Mall and Carbon Canyon. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default BreaEyeDoctorPage;