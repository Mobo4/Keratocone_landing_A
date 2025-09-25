import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const EastGardenGroveEyeDoctorPage = () => {
  const pageData = {
    city: "East Garden Grove",
    neighborhoods: [
      "Located in residential East Garden Grove area",
      "Serving families near Chapman Elementary and Doig Intermediate",
      "Convenient to Magnolia Science Academy and educational centers",
      "Close to Euclid Street corridor and local shopping",
      "Easy access from Garden Grove Freeway and Magnolia Avenue",
      "Trusted by East Garden Grove families for personalized eye care"
    ],
    driveTime: "12 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar diagnosed my astigmatism perfectly and fitted me with contacts that work great! The drive from East Garden Grove is so convenient.",
        author: "Susan H.",
        location: "East Garden Grove"
      },
      {
        quote: "Living near Chapman Elementary, we trust Dr. Bonakdar for our children's vision screening. His pediatric expertise gives us confidence!",
        author: "Robert C.",
        location: "East Garden Grove"
      },
      {
        quote: "As an East Garden Grove resident, I love Dr. Bonakdar's comprehensive approach and modern technology. Best eye care in Orange County!",
        author: "Janet F.",
        location: "East Garden Grove"
      }
    ],
    seoKeywords: "East Garden Grove eye doctor, Magnolia Avenue optometrist, eye exam East Garden Grove, Chapman Elementary eye care, Euclid Street eye doctor",
    metaDescription: "Expert eye doctor serving East Garden Grove, CA. Dr. Bonakdar provides comprehensive eye care near Magnolia Avenue. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default EastGardenGroveEyeDoctorPage;