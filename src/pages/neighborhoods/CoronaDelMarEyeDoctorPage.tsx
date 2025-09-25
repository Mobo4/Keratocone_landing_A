import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const CoronaDelMarEyeDoctorPage = () => {
  const pageData = {
    city: "Corona del Mar, Newport Beach",
    neighborhoods: [
      "Located in the heart of Corona del Mar",
      "Serving families near CDM State Beach and Sherman Library & Gardens",
      "Convenient to Corona del Mar High School and Harbor View Elementary",
      "Close to Corona del Mar Plaza and Fashion Island",
      "Easy access from Pacific Coast Highway, MacArthur Boulevard, and Marguerite Avenue",
      "Trusted by Corona del Mar families for over 30 years"
    ],
    driveTime: "22 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar's scleral lens fitting for my keratoconus restored my ability to teach at Corona del Mar High School with confidence. His expertise is truly exceptional.",
        author: "Professor Elena Vasquez",
        location: "Corona del Mar"
      },
      {
        quote: "The comprehensive retinal screening caught early macular changes that saved my vision. Dr. Bonakdar's advanced technology and expertise made all the difference.",
        author: "Charles Whitman",
        location: "Corona del Mar"
      },
      {
        quote: "My teenager's myopia control treatment has been incredibly effective. Dr. Bonakdar's proactive approach gives our family peace of mind about her future vision.",
        author: "Jennifer Hamilton",
        location: "Corona del Mar"
      }
    ],
    seoKeywords: "corona del mar eye doctor, corona del mar optometrist, eye exam corona del mar newport beach, corona del mar keratoconus specialist",
    metaDescription: "Expert eye doctor serving Corona del Mar, Newport Beach. Dr. Bonakdar provides comprehensive eye care near CDM Beach and Sherman Gardens. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default CoronaDelMarEyeDoctorPage;