import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const DowntownHBEyeDoctorPage = () => {
  const pageData = {
    city: "Downtown HB, Huntington Beach",
    neighborhoods: [
      "Located in the heart of Downtown Huntington Beach",
      "Serving families near Huntington Beach Pier and Main Street",
      "Convenient to Huntington Beach High School and Isaac Sowers Middle School",
      "Close to Pacific City and Bella Terra Shopping Center",
      "Easy access from Pacific Coast Highway, Beach Boulevard, and Main Street",
      "Trusted by Downtown HB families for over 30 years"
    ],
    driveTime: "32 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar's scleral lens expertise for my keratoconus has been incredible. I can now enjoy surfing near the HB Pier with crystal clear vision.",
        author: "Jake Thompson",
        location: "Downtown HB"
      },
      {
        quote: "The comprehensive eye exam detected early glaucoma that other doctors missed. Dr. Bonakdar's thorough approach saved my sight.",
        author: "Maria Gonzalez",
        location: "Downtown HB"
      },
      {
        quote: "My daughter's vision therapy improved her reading skills dramatically. Dr. Bonakdar's specialized treatment made all the difference in her academic success.",
        author: "Lisa Chang",
        location: "Downtown HB"
      }
    ],
    seoKeywords: "downtown huntington beach eye doctor, downtown hb optometrist, eye exam downtown huntington beach, downtown hb keratoconus specialist",
    metaDescription: "Expert eye doctor serving Downtown Huntington Beach. Dr. Bonakdar provides comprehensive eye care near HB Pier and Main Street. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default DowntownHBEyeDoctorPage;