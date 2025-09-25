import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const NorthwoodEyeDoctorPage = () => {
  const pageData = {
    city: "Northwood, Irvine",
    neighborhoods: [
      "Located in the heart of Northwood",
      "Serving families near Northwood Town Center and Northwood Community Park",
      "Convenient to Northwood Elementary and Sierra Vista Middle School",
      "Close to Northwood Shopping Plaza and Marketplace",
      "Easy access from Yale Avenue, Culver Drive, and Barranca Parkway",
      "Trusted by Northwood families for over 30 years"
    ],
    driveTime: "7 minutes",
    testimonials: [
      {
        quote: "My corneal disease required specialized treatment that only Dr. Bonakdar could provide. His custom scleral lenses gave me back my independence and confidence.",
        author: "Jennifer Park",
        location: "Northwood"
      },
      {
        quote: "Dr. Bonakdar's expertise in keratoconus management is exceptional. His patience in fitting my complex prescription made all the difference in my daily life.",
        author: "Steven Lee",
        location: "Northwood"
      },
      {
        quote: "Our family has trusted Dr. Bonakdar for years. His thorough exams and honest recommendations have kept our vision healthy and our minds at ease.",
        author: "Monica Rodriguez",
        location: "Northwood"
      }
    ],
    seoKeywords: "northwood eye doctor, northwood optometrist, eye exam northwood irvine, northwood keratoconus specialist",
    metaDescription: "Expert eye doctor serving Northwood, Irvine. Dr. Bonakdar provides comprehensive eye care near Northwood Town Center. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default NorthwoodEyeDoctorPage;