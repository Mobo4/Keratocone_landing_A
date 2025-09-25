import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import VendorLogoCarousel from '@/components/VendorLogoCarousel';
import SEO from '@/components/SEO';
import { Phone, MapPin, Clock, Calendar, CheckCircle, Star } from 'lucide-react';

interface ServiceLocationPageProps {
  service: {
    name: string;
    slug: string;
    description: string;
    benefits: string[];
    expertise: string;
    icon: string;
    relatedServices: string[];
  };
  location: {
    city: string;
    driveTime: string;
    neighborhoods: string[];
  };
  testimonials: {
    quote: string;
    author: string;
    location: string;
    service?: string;
  }[];
  seoKeywords?: string;
  metaDescription?: string;
}

const ServiceLocationTemplate: React.FC<ServiceLocationPageProps> = ({
  service,
  location,
  testimonials,
  seoKeywords,
  metaDescription
}) => {
  const { city, driveTime, neighborhoods } = location;
  const pageTitle = `${service.name} ${city} CA | Dr. Bonakdar Orange County`;
  const pageUrl = `https://eyecarecenteroc.com/services/${service.slug}/${city.toLowerCase().replace(/\s+/g, '-')}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": `Dr. Alexander Bonakdar - ${service.name} ${city}`,
    "description": metaDescription || `Expert ${service.name.toLowerCase()} in ${city}, CA. Dr. Bonakdar provides specialized ${service.name.toLowerCase()} treatment. Same-week appointments available.`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "801 North Tustin Avenue, Suite 404",
      "addressLocality": "Santa Ana",
      "addressRegion": "CA",
      "postalCode": "92705"
    },
    "telephone": "(949) 658-2372",
    "url": pageUrl,
    "areaServed": [city, ...neighborhoods],
    "medicalSpecialty": service.name,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.name,
      "description": service.description
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={pageTitle}
        description={metaDescription || `Expert ${service.name.toLowerCase()} in ${city}, CA. Dr. Bonakdar provides specialized ${service.name.toLowerCase()} treatment with 30+ years experience. Same-week appointments. (949) 658-2372`}
        keywords={seoKeywords || `${service.slug} ${city}, ${city} ${service.slug}, ${service.name.toLowerCase()} ${city}, ${city} eye care`}
        canonicalUrl={pageUrl}
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* SERVICE-SPECIFIC HERO */}
        <Hero 
          title={`${service.name} in ${city} - Dr. Alexander Bonakdar`}
          subtitle={`Expert ${service.name} Treatment Serving ${city} Families`}
          buttonText={`Schedule Your ${service.name} Consultation`}
          buttonLink="https://promo.eyecarecenteroc.com/lead-magnet-page-6841-9006-6616-2060"
          backgroundClass="bg-gradient-to-r from-blue-100 to-eyecare-lighter-blue"
          colorScheme="purple"
        />

        {/* SERVICE OVERVIEW SECTION */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Specialized {service.name} Care for {city} Residents
              </h2>
              <p className="text-lg text-gray-600 text-center mb-12">
                {service.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">Why Choose Dr. Bonakdar for {service.name}?</h3>
                  <div className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-gray-600">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Dr. Bonakdar's {service.name} Expertise</h3>
                  <p className="text-gray-600 mb-6">{service.expertise}</p>
                  
                  <div className="bg-white p-4 rounded border">
                    <h4 className="font-semibold text-gray-900 mb-2">From {city}:</h4>
                    <p className="text-gray-600 text-sm mb-2">Drive time: {driveTime}</p>
                    <p className="text-gray-600 text-sm">Central Orange County location with easy freeway access</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Comprehensive Eye Care Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title={service.name}
                description={`Specialized ${service.name.toLowerCase()} treatment with advanced techniques and technology.`}
                icon={service.icon}
                highlighted={true}
              />
              {service.relatedServices.map((relatedService, index) => (
                <ServiceCard
                  key={index}
                  title={relatedService}
                  description={`Comprehensive ${relatedService.toLowerCase()} care for ${city} families.`}
                  icon="eye"
                />
              ))}
            </div>
          </div>
        </section>

        {/* LOCATION SPECIFIC CONTENT */}
        <section className="py-16 bg-eyecare-lighter-blue">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Serving {city} & Surrounding Areas
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                    Trusted {service.name} Provider Since 1990
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    {neighborhoods.map((neighborhood, index) => (
                      <li key={index}>• {neighborhood}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    <MapPin className="inline-block w-5 h-5 mr-2 text-eyecare-blue" />
                    Convenient Access for {city} Patients
                  </h3>
                  <p className="font-semibold text-gray-900">801 North Tustin Avenue, Suite 404</p>
                  <p className="text-gray-600">Santa Ana, CA 92705</p>
                  <p className="text-sm text-gray-500 mt-2">From {city}: {driveTime}</p>
                  <div className="mt-4">
                    <p className="font-semibold text-gray-900">Office Hours:</p>
                    <p className="text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE-SPECIFIC TESTIMONIALS */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              What {city} Patients Say About Our {service.name}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  location={testimonial.location}
                  rating={5}
                />
              ))}
            </div>
          </div>
        </section>

        {/* INSURANCE & PRICING */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Insurance & Payment Options</h2>
              <p className="text-lg text-gray-600 mb-8">
                We accept most major insurance plans to make {service.name.toLowerCase()} affordable for {city} families.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Vision Insurance Accepted</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• VSP Vision Care</li>
                    <li>• EyeMed</li>
                    <li>• Spectera</li>
                    <li>• Davis Vision</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Medical Insurance Accepted</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Blue Cross Blue Shield</li>
                    <li>• Aetna</li>
                    <li>• United Healthcare</li>
                    <li>• Medicare</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-16 bg-eyecare-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started with {service.name}?</h2>
              <p className="text-xl mb-8 opacity-90">
                Join hundreds of satisfied {city} patients who trust Dr. Bonakdar for their {service.name.toLowerCase()} needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:(949)658-2372"
                  className="inline-flex items-center justify-center bg-white text-eyecare-blue hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-medium transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (949) 658-2372
                </a>
                <a
                  href="https://promo.eyecarecenteroc.com/lead-magnet-page-6841-9006-6616-2060"
                  className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-eyecare-blue px-8 py-3 rounded-md text-lg font-medium transition-colors"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Online
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* VENDOR CAROUSEL */}
        <VendorLogoCarousel 
          title="Trusted Technology Partners" 
          description={`We use leading technology and manufacturers to provide the best ${service.name.toLowerCase()} care for ${city} patients`}
          category="general"
          fixedPosition={false}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceLocationTemplate;