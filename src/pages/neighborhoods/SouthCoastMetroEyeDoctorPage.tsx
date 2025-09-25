import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const SouthCoastMetroEyeDoctorPage = () => {
  const pageData = {
    city: "South Coast Metro, Costa Mesa",
    neighborhoods: [
      "Located in the heart of South Coast Metro",
      "Serving families near South Coast Plaza and Orange County Performing Arts Center",
      "Convenient to Metro Pointe and Segerstrom Center for the Arts",
      "Close to South Coast Plaza Village and Triangle Square",
      "Easy access from Bristol Street, Bear Street, and MacArthur Boulevard",
      "Trusted by South Coast Metro families for over 30 years"
    ],
    driveTime: "18 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar's scleral lens expertise transformed my keratoconus management. Working in South Coast Plaza requires perfect vision, and his custom lenses delivered exactly that.",
        author: "Amanda Richardson",
        location: "South Coast Metro"
      },
      {
        quote: "The executive-level eye care matches the professional standards we expect in South Coast Metro. Dr. Bonakdar's advanced diagnostics caught my glaucoma early.",
        author: "David Park",
        location: "South Coast Metro"
      },
      {
        quote: "My contact lens fitting for complex astigmatism was handled with precision and care. Dr. Bonakdar's expertise with specialty lenses is unmatched in Orange County.",
        author: "Rachel Goldman",
        location: "South Coast Metro"
      }
    ],
    seoKeywords: "south coast metro eye doctor, south coast metro optometrist, eye exam south coast metro costa mesa, south coast metro keratoconus specialist",
    metaDescription: "Expert eye doctor serving South Coast Metro, Costa Mesa. Dr. Bonakdar provides comprehensive eye care near South Coast Plaza. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default SouthCoastMetroEyeDoctorPage;