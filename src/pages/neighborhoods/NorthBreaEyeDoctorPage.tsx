import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const NorthBreaEyeDoctorPage = () => {
  const pageData = {
    city: "North Brea",
    neighborhoods: [
      "Located in upscale North Brea hillside community",
      "Serving families near Brea Canyon High School and Laurel Elementary",
      "Convenient to Brea Country Club and golf facilities",
      "Close to Olinda Oil Museum and historic landmarks",
      "Easy access from 57 Freeway via Lambert Road and Carbon Canyon",
      "Trusted by North Brea families for premium eye care"
    ],
    driveTime: "38 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar's scleral lens fitting for my keratoconus has been amazing! The drive from North Brea hills is scenic and worth every minute.",
        author: "Beverly R.",
        location: "North Brea"
      },
      {
        quote: "Living near Brea Country Club, we appreciate Dr. Bonakdar's attention to detail and high-quality care for our family's vision needs.",
        author: "Richard C.",
        location: "North Brea"
      },
      {
        quote: "As a North Brea resident, I love that Dr. Bonakdar uses cutting-edge technology and provides comprehensive eye health evaluations.",
        author: "Susan W.",
        location: "North Brea"
      }
    ],
    seoKeywords: "North Brea eye doctor, Lambert Road optometrist, eye exam North Brea, Brea Country Club eye care, Carbon Canyon eye doctor",
    metaDescription: "Expert eye doctor serving North Brea, CA. Dr. Bonakdar provides premium eye care near Brea Country Club and Carbon Canyon. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default NorthBreaEyeDoctorPage;