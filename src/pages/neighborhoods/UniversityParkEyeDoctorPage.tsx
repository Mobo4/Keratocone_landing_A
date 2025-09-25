import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const UniversityParkEyeDoctorPage = () => {
  const pageData = {
    city: "University Park, Irvine",
    neighborhoods: [
      "Located in the heart of University Park",
      "Serving families near UCI and William R. Mason Regional Park",
      "Convenient to Rancho San Joaquin Middle School and University Park Elementary",
      "Close to Campus Plaza and University Center",
      "Easy access from Culver Drive, University Drive, and Harvard Avenue",
      "Trusted by University Park families for over 30 years"
    ],
    driveTime: "6 minutes",
    testimonials: [
      {
        quote: "My keratoconus diagnosis was devastating until I found Dr. Bonakdar. His custom scleral lenses restored my vision beyond what I thought possible. I'm forever grateful for his expertise.",
        author: "David Kim",
        location: "University Park"
      },
      {
        quote: "Dr. Bonakdar's thorough eye exams caught my glaucoma early. His proactive approach and advanced technology saved my sight. I recommend him to everyone in University Park.",
        author: "Maria Santos",
        location: "University Park"
      },
      {
        quote: "As a UCI graduate student, precise vision is crucial for my lab work. Dr. Bonakdar's specialty contact lens fitting gave me the clarity I needed to excel in my research.",
        author: "Alex Thompson",
        location: "University Park"
      }
    ],
    seoKeywords: "university park eye doctor, university park optometrist, eye exam university park irvine, university park keratoconus specialist",
    metaDescription: "Expert eye doctor serving University Park, Irvine. Dr. Bonakdar provides comprehensive eye care near UCI and Campus Plaza. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default UniversityParkEyeDoctorPage;