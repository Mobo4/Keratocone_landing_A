import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const OrangeParkAcresEyeDoctorPage = () => {
  const pageData = {
    city: "Orange Park Acres",
    neighborhoods: [
      "Located in the prestigious Orange Park Acres community",
      "Serving families near Orange Park Elementary and Santiago Hills",
      "Convenient to equestrian properties and country estates",
      "Close to Santiago Creek Trail and Peters Canyon Regional Park",
      "Easy access from Santiago Canyon Road and Jamboree Road",
      "Trusted by Orange Park Acres families for premium eye care"
    ],
    driveTime: "18 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar provides the high-quality eye care our Orange Park Acres family expects. His keratoconus expertise is unmatched in Orange County!",
        author: "Elizabeth H.",
        location: "Orange Park Acres"
      },
      {
        quote: "Living in the Santiago Hills area, I appreciate Dr. Bonakdar's personalized approach. His scleral lens fitting gave me perfect vision again!",
        author: "William T.",
        location: "Orange Park Acres"
      },
      {
        quote: "As an Orange Park Acres resident, the drive to Dr. Bonakdar's office is worth it for his exceptional expertise with contact lens fittings.",
        author: "Patricia L.",
        location: "Orange Park Acres"
      }
    ],
    seoKeywords: "Orange Park Acres eye doctor, Santiago Hills optometrist, eye exam Orange Park Acres, Santiago Canyon eye care, equestrian community eye doctor",
    metaDescription: "Expert eye doctor serving Orange Park Acres, CA. Dr. Bonakdar provides premium eye care for Santiago Hills families. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default OrangeParkAcresEyeDoctorPage;