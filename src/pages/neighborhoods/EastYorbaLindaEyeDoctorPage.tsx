import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const EastYorbaLindaEyeDoctorPage = () => {
  const pageData = {
    city: "East Yorba Linda",
    neighborhoods: [
      "Located in exclusive East Yorba Linda hills area",
      "Serving families near Esperanza High School and Country Hills Elementary",
      "Convenient to Chino Hills State Park and nature trails",
      "Close to Carbon Canyon Regional Park and recreational areas",
      "Easy access from 91 Freeway via Lakeview Avenue and Fairmont Boulevard",
      "Trusted by East Yorba Linda families for exceptional eye care"
    ],
    driveTime: "40 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar's expertise with specialty contact lenses is amazing! The drive from East Yorba Linda hills is worth every minute.",
        author: "Patricia K.",
        location: "East Yorba Linda"
      },
      {
        quote: "Living near Carbon Canyon, we trust Dr. Bonakdar for our family's eye health. His thorough exams caught issues early!",
        author: "James R.",
        location: "East Yorba Linda"
      },
      {
        quote: "As an East Yorba Linda resident, I appreciate Dr. Bonakdar's professional approach and state-of-the-art equipment.",
        author: "Linda S.",
        location: "East Yorba Linda"
      }
    ],
    seoKeywords: "East Yorba Linda eye doctor, Carbon Canyon optometrist, eye exam East Yorba Linda, Chino Hills State Park eye care, Lakeview Avenue eye doctor",
    metaDescription: "Expert eye doctor serving East Yorba Linda, CA. Dr. Bonakdar provides comprehensive eye care near Carbon Canyon Regional Park. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default EastYorbaLindaEyeDoctorPage;