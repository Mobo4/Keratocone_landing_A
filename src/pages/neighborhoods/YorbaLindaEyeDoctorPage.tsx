import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const YorbaLindaEyeDoctorPage = () => {
  const pageData = {
    city: "Yorba Linda",
    neighborhoods: [
      "Located in prestigious Yorba Linda community",
      "Serving families near Yorba Linda High School and Bryant Ranch Elementary",
      "Convenient to Richard Nixon Library and Presidential Museum",
      "Close to Yorba Regional Park and recreational facilities",
      "Easy access from 91 and 57 Freeways via Imperial Highway",
      "Trusted by Yorba Linda families for premium eye care"
    ],
    driveTime: "35 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar's keratoconus expertise is unmatched! The drive from Yorba Linda is worth it for his specialized scleral lens care.",
        author: "Robert M.",
        location: "Yorba Linda"
      },
      {
        quote: "Living near the Nixon Library, we appreciate Dr. Bonakdar's attention to detail and high-quality care for our entire family.",
        author: "Elizabeth T.",
        location: "Yorba Linda"
      },
      {
        quote: "As a Yorba Linda resident, I love that Dr. Bonakdar uses cutting-edge technology and provides thorough eye examinations.",
        author: "William H.",
        location: "Yorba Linda"
      }
    ],
    seoKeywords: "Yorba Linda eye doctor, Yorba Linda optometrist, eye exam Yorba Linda, Imperial Highway eye care, Nixon Library eye doctor",
    metaDescription: "Expert eye doctor serving Yorba Linda, CA. Dr. Bonakdar provides premium eye care near Richard Nixon Library. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default YorbaLindaEyeDoctorPage;