import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const BalboaIslandEyeDoctorPage = () => {
  const pageData = {
    city: "Balboa Island, Newport Beach",
    neighborhoods: [
      "Located in the heart of Balboa Island",
      "Serving families near Balboa Fun Zone and Balboa Ferry",
      "Convenient to Balboa Elementary and Newport Harbor High School",
      "Close to Balboa Pavilion and Newport Harbor",
      "Easy access from Marine Avenue, Park Avenue, and Balboa Boulevard",
      "Trusted by Balboa Island families for over 30 years"
    ],
    driveTime: "25 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar's expertise with scleral lenses for my keratoconus has been remarkable. I can now enjoy sailing in Newport Harbor with crystal clear vision.",
        author: "Captain James Mitchell",
        location: "Balboa Island"
      },
      {
        quote: "The meticulous contact lens fitting process ensured perfect comfort for my irregular astigmatism. Dr. Bonakdar's attention to detail is unmatched on the peninsula.",
        author: "Susan Delacroix",
        location: "Balboa Island"
      },
      {
        quote: "My dry eye treatment with Dr. Bonakdar has been life-changing. I can finally enjoy the ocean breeze at Balboa without constant irritation.",
        author: "Robert Castellanos",
        location: "Balboa Island"
      }
    ],
    seoKeywords: "balboa island eye doctor, balboa island optometrist, eye exam balboa island newport beach, balboa island keratoconus specialist",
    metaDescription: "Expert eye doctor serving Balboa Island, Newport Beach. Dr. Bonakdar provides comprehensive eye care near Balboa Fun Zone. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default BalboaIslandEyeDoctorPage;