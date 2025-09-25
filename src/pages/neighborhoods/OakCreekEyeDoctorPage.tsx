import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const OakCreekEyeDoctorPage = () => {
  const pageData = {
    city: "Oak Creek, Irvine",
    neighborhoods: [
      "Located in the heart of Oak Creek",
      "Serving families near Oak Creek Golf Club and Oak Creek Community Center",
      "Convenient to Oak Creek Elementary and South Lake Middle School",
      "Close to Irvine Spectrum Center and Oak Creek Shopping Center",
      "Easy access from Irvine Center Drive, Barranca Parkway, and Culver Drive",
      "Trusted by Oak Creek families for over 30 years"
    ],
    driveTime: "12 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar's scleral lens fitting changed my life with keratoconus. After years of struggle, I can finally see clearly enough to enjoy time with my grandchildren at Oak Creek Park.",
        author: "Helen Martinez",
        location: "Oak Creek"
      },
      {
        quote: "The advanced technology in Dr. Bonakdar's office detected my retinal issues early. His prompt referral and follow-up care saved my vision.",
        author: "Thomas Chen",
        location: "Oak Creek"
      },
      {
        quote: "My son's sports vision training with Dr. Bonakdar improved his performance on the Oak Creek soccer team. The specialized lenses made all the difference.",
        author: "Karen Wilson",
        location: "Oak Creek"
      }
    ],
    seoKeywords: "oak creek eye doctor, oak creek optometrist, eye exam oak creek irvine, oak creek keratoconus specialist",
    metaDescription: "Expert eye doctor serving Oak Creek, Irvine. Dr. Bonakdar provides comprehensive eye care near Oak Creek Golf Club. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default OakCreekEyeDoctorPage;