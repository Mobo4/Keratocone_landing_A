import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const NewportCoastEyeDoctorPage = () => {
  const pageData = {
    city: "Newport Coast, Newport Beach",
    neighborhoods: [
      "Located in the heart of Newport Coast",
      "Serving families near Crystal Cove State Park and Pelican Hill Resort",
      "Convenient to Newport Coast Elementary and Sage Hill School",
      "Close to Crystal Cove Shopping Center and Fashion Island",
      "Easy access from Pacific Coast Highway, Newport Coast Drive, and Laguna Canyon Road",
      "Trusted by Newport Coast families for over 30 years"
    ],
    driveTime: "20 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar's scleral contact lens fitting for my keratoconus was life-changing. I can now enjoy the beautiful Crystal Cove trails with perfect vision and confidence.",
        author: "Michael Harrison",
        location: "Newport Coast"
      },
      {
        quote: "The luxury-level care and advanced technology in Dr. Bonakdar's practice matches the quality we expect in Newport Coast. His expertise with complex prescriptions is exceptional.",
        author: "Victoria Sterling",
        location: "Newport Coast"
      },
      {
        quote: "My corneal irregularities required specialized treatment that only Dr. Bonakdar could provide. His custom lens solutions restored my ability to drive safely along PCH.",
        author: "Jonathan Pierce",
        location: "Newport Coast"
      }
    ],
    seoKeywords: "newport coast eye doctor, newport coast optometrist, eye exam newport coast, newport coast keratoconus specialist",
    metaDescription: "Expert eye doctor serving Newport Coast, Newport Beach. Dr. Bonakdar provides comprehensive eye care near Crystal Cove and Pelican Hill. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default NewportCoastEyeDoctorPage;