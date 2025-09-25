
import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Droplet, Glasses, Sun, Search, Calendar } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';

const ServiceCategories = () => {
  const services = [
    {
      title: "Comprehensive Eye Exams",
      description: "Thorough evaluations of your vision and eye health with our state-of-the-art diagnostic equipment.",
      icon: <Eye className="w-6 h-6" />,
      link: "/services#eye-exams"
    },
    {
      title: "Dry Eye Treatment",
      description: "Advanced treatments including IPL therapy for chronic dry eye syndrome and related conditions.",
      icon: <Droplet className="w-6 h-6" />,
      link: "/conditions/dry-eye"
    },
    {
      title: "Contact Lens Fittings",
      description: "Expert fitting for all types of contact lenses, including specialty lenses for complex prescriptions.",
      icon: <Eye className="w-6 h-6" />,
      link: "/services#contact-lenses"
    },
    {
      title: "Keratoconus Management",
      description: "Specialized care for keratoconus including scleral lenses, cross-linking, and Intacs.",
      icon: <Search className="w-6 h-6" />,
      link: "/conditions/keratoconus"
    },
    {
      title: "Eyewear Styling & Fitting",
      description: "Personalized frame selection and professional fitting for optimal comfort and style.",
      icon: <Glasses className="w-6 h-6" />,
      link: "/eyewear"
    },
    {
      title: "Vision Therapy",
      description: "Custom exercises and treatments to improve visual skills and address specific vision disorders.",
      icon: <Eye className="w-6 h-6" />,
      link: "/services#vision-therapy"
    },
    {
      title: "Computer Vision Care",
      description: "Specialized solutions for digital eye strain and computer-related vision problems.",
      icon: <Sun className="w-6 h-6" />,
      link: "/services#computer-vision"
    },
    {
      title: "Annual Exams & Follow-ups",
      description: "Regular monitoring of your eye health with personalized care plans and preventative measures.",
      icon: <Calendar className="w-6 h-6" />,
      link: "/services#annual-exams"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our <span className="text-eyecare-blue">Services</span></h2>
        <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
          Explore our complete range of eye care services designed to address all your vision needs, 
          from routine exams to specialized treatments for complex conditions.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
