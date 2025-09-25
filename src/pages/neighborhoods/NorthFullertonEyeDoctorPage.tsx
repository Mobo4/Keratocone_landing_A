import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const NorthFullertonEyeDoctorPage = () => {
  const pageData = {
    city: "North Fullerton",
    neighborhoods: [
      "Located in sought-after North Fullerton area",
      "Serving families near Acacia Elementary and Nicolas Junior High",
      "Convenient to Fullerton Sports Complex and recreation centers",
      "Close to Bastanchury Road shopping and entertainment",
      "Easy access from 57 Freeway via Yorba Linda Boulevard",
      "Trusted by North Fullerton families for premium eye care"
    ],
    driveTime: "28 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar's scleral lens fitting for my keratoconus was life-changing! Worth every minute of the drive from North Fullerton.",
        author: "Jennifer S.",
        location: "North Fullerton"
      },
      {
        quote: "Living near the Sports Complex, we love that Dr. Bonakdar understands athletes' vision needs. He fitted my son perfectly for sports!",
        author: "Mark D.",
        location: "North Fullerton"
      },
      {
        quote: "As a North Fullerton resident, I appreciate Dr. Bonakdar's high-tech equipment and thorough diagnostic approach. Excellent care!",
        author: "Diana W.",
        location: "North Fullerton"
      }
    ],
    seoKeywords: "North Fullerton eye doctor, Bastanchury Road optometrist, eye exam North Fullerton, Fullerton Sports Complex eye care, Yorba Linda Boulevard eye doctor",
    metaDescription: "Expert eye doctor serving North Fullerton, CA. Dr. Bonakdar provides comprehensive eye care near Fullerton Sports Complex. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default NorthFullertonEyeDoctorPage;