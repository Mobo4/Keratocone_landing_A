import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const PlacentiaEyeDoctorPage = () => {
  const pageData = {
    city: "Placentia",
    neighborhoods: [
      "Located in historic Placentia community",
      "Serving families near Placentia-Yorba Linda High School and Valencia Elementary",
      "Convenient to Old Town Placentia and antique district",
      "Close to Tri-City Park and recreational facilities",
      "Easy access from 57 Freeway via Placentia Avenue and Chapman Avenue",
      "Trusted by Placentia families for comprehensive eye care"
    ],
    driveTime: "30 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar's expertise with keratoconus has been incredible! The drive from Placentia is easy via the 57 Freeway.",
        author: "Catherine P.",
        location: "Placentia"
      },
      {
        quote: "Living in Old Town Placentia, we appreciate Dr. Bonakdar's old-fashioned personal service combined with modern technology.",
        author: "Frank M.",
        location: "Placentia"
      },
      {
        quote: "As a Placentia resident, I love that Dr. Bonakdar provides thorough eye exams and accepts all our insurance plans.",
        author: "Nancy L.",
        location: "Placentia"
      }
    ],
    seoKeywords: "Placentia eye doctor, Placentia optometrist, eye exam Placentia, Old Town Placentia eye care, Chapman Avenue eye doctor",
    metaDescription: "Expert eye doctor serving Placentia, CA. Dr. Bonakdar provides comprehensive eye care near Old Town Placentia. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default PlacentiaEyeDoctorPage;