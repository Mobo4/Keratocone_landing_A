import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const HuntingtonHarborEyeDoctorPage = () => {
  const pageData = {
    city: "Huntington Harbor, Huntington Beach",
    neighborhoods: [
      "Located in the heart of Huntington Harbor",
      "Serving families near Huntington Harbor Mall and Sunset Aquatic Marina",
      "Convenient to Harbour View Elementary and Marina High School",
      "Close to Huntington Harbour Bay Club and Peter Green Golf Course",
      "Easy access from Pacific Coast Highway, Warner Avenue, and Algonquin Street",
      "Trusted by Huntington Harbor families for over 30 years"
    ],
    driveTime: "30 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar's scleral lens fitting for my keratoconus has been outstanding. I can now enjoy boating in Huntington Harbor with perfect vision and confidence.",
        author: "Captain Jim Rodriguez",
        location: "Huntington Harbor"
      },
      {
        quote: "The comprehensive retinal screening detected early macular changes that saved my vision. Dr. Bonakdar's advanced technology made all the difference.",
        author: "Eleanor Martinez",
        location: "Huntington Harbor"
      },
      {
        quote: "My contact lens fitting for complex astigmatism was handled with exceptional care. Dr. Bonakdar's expertise with specialty lenses is remarkable.",
        author: "Karen Phillips",
        location: "Huntington Harbor"
      }
    ],
    seoKeywords: "huntington harbor eye doctor, huntington harbor optometrist, eye exam huntington harbor, huntington harbor keratoconus specialist",
    metaDescription: "Expert eye doctor serving Huntington Harbor, Huntington Beach. Dr. Bonakdar provides comprehensive eye care near Harbor Mall. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default HuntingtonHarborEyeDoctorPage;