import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const FountainValleyEyeDoctorPage = () => {
  const pageData = {
    city: "Fountain Valley",
    neighborhoods: [
      "Located in central Fountain Valley community",
      "Serving families near Fountain Valley High School and Cox Elementary",
      "Convenient to Mile Square Regional Park and recreational facilities",
      "Close to Brookhurst Street corridor and Ward Street shopping",
      "Easy access from 405 Freeway, Brookhurst, and Warner Avenue",
      "Trusted by Fountain Valley families for comprehensive eye care"
    ],
    driveTime: "20 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar's expertise with keratoconus saved my vision. The drive from Fountain Valley is totally worth it for his specialized care!",
        author: "Jennifer P.",
        location: "Fountain Valley"
      },
      {
        quote: "Living near Mile Square Park, we love that Dr. Bonakdar accepts our VSP insurance and provides such thorough eye exams for our kids.",
        author: "Mark D.",
        location: "Fountain Valley"
      },
      {
        quote: "As a Fountain Valley High parent, Dr. Bonakdar's convenient scheduling and teen-friendly approach makes eye care easy for our family.",
        author: "Lisa K.",
        location: "Fountain Valley"
      }
    ],
    seoKeywords: "Fountain Valley eye doctor, Fountain Valley optometrist, eye exam Fountain Valley, Mile Square Park eye care, Brookhurst eye doctor",
    metaDescription: "Expert eye doctor serving Fountain Valley, CA. Dr. Bonakdar provides comprehensive eye care near Mile Square Park. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default FountainValleyEyeDoctorPage;