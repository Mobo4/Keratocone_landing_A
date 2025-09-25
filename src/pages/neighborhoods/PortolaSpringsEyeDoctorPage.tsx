import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const PortolaSpringsEyeDoctorPage = () => {
  const pageData = {
    city: "Portola Springs, Irvine",
    neighborhoods: [
      "Located in the heart of Portola Springs",
      "Serving families near Whiting Ranch Wilderness Park and Portola Springs Community Center",
      "Convenient to Portola Springs Elementary and Jeffrey Trail Middle School",
      "Close to Portola High School and The Village Shopping Center",
      "Easy access from Portola Parkway, Irvine Boulevard, and Sand Canyon Avenue",
      "Trusted by Portola Springs families for over 30 years"
    ],
    driveTime: "16 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar's scleral lens fitting for my severe dry eyes has been life-changing. I can finally enjoy hiking at Whiting Ranch without constant discomfort.",
        author: "Rachel Kim",
        location: "Portola Springs"
      },
      {
        quote: "My keratoconus progression was concerning until Dr. Bonakdar fitted me with custom contact lenses. His expertise and follow-up care have been outstanding.",
        author: "Daniel Garcia",
        location: "Portola Springs"
      },
      {
        quote: "The pediatric eye exam for my daughter was thorough and gentle. Dr. Bonakdar's kid-friendly approach made her feel comfortable throughout the entire visit.",
        author: "Amanda Foster",
        location: "Portola Springs"
      }
    ],
    seoKeywords: "portola springs eye doctor, portola springs optometrist, eye exam portola springs irvine, portola springs keratoconus specialist",
    metaDescription: "Expert eye doctor serving Portola Springs, Irvine. Dr. Bonakdar provides comprehensive eye care near Whiting Ranch. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default PortolaSpringsEyeDoctorPage;