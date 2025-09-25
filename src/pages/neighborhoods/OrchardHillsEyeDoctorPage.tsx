import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const OrchardHillsEyeDoctorPage = () => {
  const pageData = {
    city: "Orchard Hills, Irvine",
    neighborhoods: [
      "Located in the heart of Orchard Hills",
      "Serving families near Orchard Hills Shopping Center and Orchard Hills Community Park",
      "Convenient to Orchard Hills Elementary and Jeffrey Trail Middle School",
      "Close to Portola High School and Orchard Hills Country Club",
      "Easy access from Portola Parkway, Sand Canyon Avenue, and Irvine Boulevard",
      "Trusted by Orchard Hills families for over 30 years"
    ],
    driveTime: "14 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar's expertise in irregular cornea management saved my career. His custom scleral lenses for my keratoconus allow me to work as a software engineer with perfect clarity.",
        author: "Mark Thompson",
        location: "Orchard Hills"
      },
      {
        quote: "The comprehensive diabetic eye exam caught early changes that my primary doctor missed. Dr. Bonakdar's coordination with my endocrinologist has been exceptional.",
        author: "Lisa Wang",
        location: "Orchard Hills"
      },
      {
        quote: "My teenager's myopia control treatment with Dr. Bonakdar has slowed her prescription changes dramatically. His proactive approach gives us peace of mind about her future vision.",
        author: "James Miller",
        location: "Orchard Hills"
      }
    ],
    seoKeywords: "orchard hills eye doctor, orchard hills optometrist, eye exam orchard hills irvine, orchard hills keratoconus specialist",
    metaDescription: "Expert eye doctor serving Orchard Hills, Irvine. Dr. Bonakdar provides comprehensive eye care near Orchard Hills Shopping Center. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default OrchardHillsEyeDoctorPage;