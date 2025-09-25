import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const WestFullertonEyeDoctorPage = () => {
  const pageData = {
    city: "West Fullerton",
    neighborhoods: [
      "Located in peaceful West Fullerton residential area",
      "Serving families near Raymond Elementary and Parks Junior High",
      "Convenient to West Coyote Hills and nature preserves",
      "Close to La Habra Boulevard shopping and dining",
      "Easy access from 91 Freeway via Raymond Avenue and Beach Boulevard",
      "Trusted by West Fullerton families for personalized eye care"
    ],
    driveTime: "30 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar's expertise with contact lens fitting is outstanding! The drive from West Fullerton is easy via the 91 Freeway.",
        author: "Richard L.",
        location: "West Fullerton"
      },
      {
        quote: "Living near West Coyote Hills, we appreciate Dr. Bonakdar's thorough approach to our children's vision care. Great pediatric eye doctor!",
        author: "Sandra M.",
        location: "West Fullerton"
      },
      {
        quote: "As a West Fullerton resident, I love that Dr. Bonakdar's office accepts all our insurance plans and provides quality care.",
        author: "George H.",
        location: "West Fullerton"
      }
    ],
    seoKeywords: "West Fullerton eye doctor, Raymond Avenue optometrist, eye exam West Fullerton, West Coyote Hills eye care, La Habra Boulevard eye doctor",
    metaDescription: "Expert eye doctor serving West Fullerton, CA. Dr. Bonakdar provides comprehensive eye care near West Coyote Hills. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default WestFullertonEyeDoctorPage;