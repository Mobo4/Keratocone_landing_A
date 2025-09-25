import React from 'react';
import LocationPageTemplate from '@/components/LocationPageTemplate';

const TalbertFountainValleyEyeDoctorPage = () => {
  const pageData = {
    city: "Talbert, Fountain Valley",
    neighborhoods: [
      "Located in the Talbert area of Fountain Valley",
      "Serving families near Talbert Elementary and Hawes Elementary",
      "Convenient to Talbert Regional Park and sports facilities",
      "Close to Talbert Avenue shopping and business district",
      "Easy access from 405 and 22 Freeways via Talbert Avenue",
      "Trusted by Talbert families for professional eye care"
    ],
    driveTime: "25 minutes",
    testimonials: [
      {
        quote: "Dr. Bonakdar diagnosed my daughter's vision problem that others missed. The drive from Talbert is worth it for his expertise!",
        author: "Rebecca L.",
        location: "Talbert, Fountain Valley"
      },
      {
        quote: "Living near Talbert Regional Park, I love that Dr. Bonakdar fits me in quickly for emergency eye care. Great service!",
        author: "Kevin J.",
        location: "Talbert, Fountain Valley"
      },
      {
        quote: "As a Talbert Elementary parent, Dr. Bonakdar's kid-friendly approach and thorough exams give us peace of mind about our children's vision.",
        author: "Maria G.",
        location: "Talbert, Fountain Valley"
      }
    ],
    seoKeywords: "Talbert Fountain Valley eye doctor, Talbert Avenue optometrist, eye exam Talbert area, Talbert Regional Park eye care, 405 Freeway eye doctor",
    metaDescription: "Expert eye doctor serving Talbert, Fountain Valley area. Dr. Bonakdar provides comprehensive eye care near Talbert Regional Park. Same-week appointments. (949) 658-2372"
  };

  return <LocationPageTemplate {...pageData} />;
};

export default TalbertFountainValleyEyeDoctorPage;