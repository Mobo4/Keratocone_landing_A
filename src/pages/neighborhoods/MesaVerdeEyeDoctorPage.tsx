import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const MesaVerdeEyeDoctorPage = () => {
  const pageData = {
    city: "Mesa Verde, Costa Mesa",
    neighborhoods: [
      "Located in the heart of Mesa Verde",
      "Serving families near Mesa Verde Country Club and Mesa Verde Park",
      "Convenient to Mesa Verde Elementary and Adams Elementary School",
      "Close to Mesa Verde Shopping Center and The Lab Anti-Mall",
      "Easy access from Mesa Verde Drive, Newport Boulevard, and Adams Avenue",
      "Trusted by Mesa Verde families for over 30 years"
    ],
    driveTime: "15 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar's scleral contact lens fitting for my keratoconus has been transformative. I can now enjoy golfing at Mesa Verde Country Club with perfect vision clarity.",
        author: "Gregory Santos",
        location: "Mesa Verde"
      },
      {
        quote: "The comprehensive diabetic eye exam detected early retinal changes that my primary doctor missed. Dr. Bonakdar's thorough approach saved my sight.",
        author: "Maria Gonzalez",
        location: "Mesa Verde"
      },
      {
        quote: "My daughter's vision therapy program improved her reading skills dramatically. Dr. Bonakdar's specialized treatment made all the difference in her academic success.",
        author: "Lisa Thompson",
        location: "Mesa Verde"
      }
    ],
    seoKeywords: "mesa verde eye doctor, mesa verde optometrist, eye exam mesa verde costa mesa, mesa verde keratoconus specialist",
    metaDescription: "Expert eye doctor serving Mesa Verde, Costa Mesa. Dr. Bonakdar provides comprehensive eye care near Mesa Verde Country Club. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default MesaVerdeEyeDoctorPage;