import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const BryantRanchYorbaLindaEyeDoctorPage = () => {
  const pageData = {
    city: "Bryant Ranch, Yorba Linda",
    neighborhoods: [
      "Located in the Bryant Ranch master-planned community",
      "Serving families near Bryant Ranch Elementary and Bernardo Yorba Middle School",
      "Convenient to Bryant Ranch Golf Course and recreational facilities",
      "Close to Yorba Linda Community Center and sports complexes",
      "Easy access from 91 Freeway via Gypsum Canyon Road",
      "Trusted by Bryant Ranch families for quality eye care"
    ],
    driveTime: "38 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar's keratoconus treatment has been life-changing! The drive from Bryant Ranch is easy with 91 Freeway access.",
        author: "Michael D.",
        location: "Bryant Ranch, Yorba Linda"
      },
      {
        quote: "Living in Bryant Ranch, we love that Dr. Bonakdar provides comprehensive eye exams for our golf-playing family. Great sports vision care!",
        author: "Barbara L.",
        location: "Bryant Ranch, Yorba Linda"
      },
      {
        quote: "As a Bryant Ranch resident, I appreciate Dr. Bonakdar's modern equipment and thorough approach to pediatric eye care.",
        author: "Christopher M.",
        location: "Bryant Ranch, Yorba Linda"
      }
    ],
    seoKeywords: "Bryant Ranch eye doctor, Yorba Linda Bryant Ranch optometrist, eye exam Bryant Ranch, Gypsum Canyon eye care, Bryant Ranch Golf Course eye doctor",
    metaDescription: "Expert eye doctor serving Bryant Ranch, Yorba Linda. Dr. Bonakdar provides comprehensive eye care near Bryant Ranch Golf Course. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default BryantRanchYorbaLindaEyeDoctorPage;