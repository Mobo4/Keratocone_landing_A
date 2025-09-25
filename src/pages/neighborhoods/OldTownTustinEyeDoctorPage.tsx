import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const OldTownTustinEyeDoctorPage = () => {
  const pageData = {
    city: "Old Town Tustin, Tustin",
    neighborhoods: [
      "Located in the heart of Old Town Tustin",
      "Serving families near Tustin Historic District and Tustin Area Museum",
      "Convenient to Tustin Memorial Academy and Currie Middle School",
      "Close to Old Town Tustin Plaza and District at Tustin Legacy",
      "Easy access from Main Street, Newport Avenue, and Tustin Street",
      "Trusted by Old Town Tustin families for over 30 years"
    ],
    driveTime: "10 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar's scleral lens fitting for my severe dry eyes has been life-changing. I can finally enjoy walking through Old Town Tustin without constant discomfort.",
        author: "Margaret Davis",
        location: "Old Town Tustin"
      },
      {
        quote: "My keratoconus management with custom contact lenses has been exceptional. Dr. Bonakdar's expertise and follow-up care exceeded my expectations.",
        author: "Thomas Anderson",
        location: "Old Town Tustin"
      },
      {
        quote: "The pediatric eye exam for my daughter was thorough and gentle. Dr. Bonakdar's approach made her feel comfortable throughout the entire visit.",
        author: "Sarah Wilson",
        location: "Old Town Tustin"
      }
    ],
    seoKeywords: "old town tustin eye doctor, old town tustin optometrist, eye exam old town tustin, old town tustin keratoconus specialist",
    metaDescription: "Expert eye doctor serving Old Town Tustin, Tustin. Dr. Bonakdar provides comprehensive eye care near Tustin Historic District. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default OldTownTustinEyeDoctorPage;