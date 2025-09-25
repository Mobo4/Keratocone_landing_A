import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import VendorLogoCarousel from '@/components/VendorLogoCarousel';
import SEO from '@/components/SEO';
import { Phone, MapPin, Clock, Calendar } from 'lucide-react';

const AnaheimEyeDoctorPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dr. Alexander Bonakdar - Anaheim Eye Doctor",
    "description": "Expert eye doctor serving Anaheim, CA. Dr. Bonakdar provides comprehensive eye care, keratoconus treatment. Near Disneyland and Anaheim Convention Center.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "801 North Tustin Avenue, Suite 404",
      "addressLocality": "Santa Ana",
      "addressRegion": "CA",
      "postalCode": "92705"
    },
    "telephone": "(949) 658-2372",
    "url": "https://eyecarecenteroc.com/locations/anaheim-eye-doctor",
    "areaServed": ["Anaheim", "Anaheim Resort", "Platinum Triangle", "West Anaheim", "Central Anaheim", "The Colony"]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Eye Doctor Anaheim CA | Dr. Bonakdar Orange County Eye Care"
        description="Expert eye doctor serving Anaheim, CA. Dr. Bonakdar provides comprehensive eye care, keratoconus treatment. Near Disneyland and Convention Center. (949) 658-2372"
        keywords="eye doctor Anaheim, Anaheim optometrist, eye exam Anaheim, Anaheim eye care"
        canonicalUrl="https://eyecarecenteroc.com/locations/anaheim-eye-doctor"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Using existing Hero component with standard colors */}
        <Hero
          title="Serving Anaheim's 350,000 Residents Since 1995 - Dr. Bonakdar"
          subtitle="30 years caring for Anaheim's tourism and entertainment workforce. Specialized eye care for Disney employees, Convention Center staff, and hospitality professionals. Expert treatment for Anaheim's diverse community from the Resort District to the Hills."
          buttonText="Schedule Your Anaheim Eye Exam"
          buttonLink="https://promo.eyecarecenteroc.com/lead-magnet-page-6841-9006-6616-2060"
          backgroundClass="bg-gradient-to-r from-blue-100 to-eyecare-lighter-blue"
          colorScheme="blue"
        />

        {/* Services Section - Using existing ServiceCard component */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Services for Anaheim Residents</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Comprehensive Eye Exams"
                description="Complete eye examinations for Anaheim families with same-week appointments available."
                icon="eye"
              />
              <ServiceCard
                title="Keratoconus Treatment"
                description="Specialized keratoconus treatment with 500+ successful scleral lens fittings."
                icon="microscope"
              />
              <ServiceCard
                title="Contact Lens Fittings"
                description="Expert contact lens fittings for all types including specialty lenses."
                icon="glasses"
              />
              <ServiceCard
                title="Dry Eye Treatment"
                description="Advanced dry eye therapy and management for lasting relief."
                icon="droplet"
              />
              <ServiceCard
                title="Children's Vision Care"
                description="Comprehensive pediatric eye care for infants through teenagers."
                icon="baby"
              />
              <ServiceCard
                title="Emergency Eye Care"
                description="Same-day emergency appointments for urgent eye care needs."
                icon="activity"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Section - Using standard gray-50 background */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Anaheim Chooses Dr. Bonakdar</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">30+ Years Experience</h3>
                <p className="text-gray-600">Decades of trusted eye care serving Orange County families with proven expertise.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Keratoconus Specialist</h3>
                <p className="text-gray-600">500+ successful keratoconus fittings with advanced scleral lens expertise.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Same-Week Appointments</h3>
                <p className="text-gray-600">Convenient scheduling for busy Anaheim families and professionals.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">20 Minutes from Anaheim</h3>
                <p className="text-gray-600">Quick access via I-5 or 57 freeway - convenient central location.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">All Insurance Accepted</h3>
                <p className="text-gray-600">VSP, EyeMed, Blue Cross, and medical insurance accepted.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Bilingual Staff</h3>
                <p className="text-gray-600">English and Spanish speaking staff for diverse Anaheim community.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Specific Content - Using standard eyecare-lighter-blue */}
        <section className="py-16 bg-eyecare-lighter-blue">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Serving Anaheim & Surrounding Areas</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Proudly Serving Anaheim Since 1990</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Anaheim Resort District and Convention Center area</li>
                    <li>• Platinum Triangle and Center City</li>
                    <li>• West Anaheim and The Colony neighborhoods</li>
                    <li>• Anaheim Canyon and East Anaheim Hills</li>
                    <li>• Close to Disneyland and Angel Stadium</li>
                    <li>• Near Downtown Anaheim and Packing District</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    <MapPin className="inline-block w-5 h-5 mr-2 text-eyecare-blue" />
                    Convenient Location & Access
                  </h3>
                  <p className="font-semibold text-gray-900">From Anaheim:</p>
                  <p className="text-gray-600">Take I-5 South to 55 South, exit Main Street</p>
                  <p className="text-sm text-gray-500 mt-2">Approximate drive time: 20 minutes</p>
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

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What Anaheim Patients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="Dr. Bonakdar's expertise with keratoconus saved my vision. The drive from Anaheim is worth it for his specialized care."
                author="Michael T."
                location="Anaheim Resort"
                rating={5}
              />
              <TestimonialCard
                quote="Our entire family has been seeing Dr. Bonakdar for years. Professional, thorough, and great with kids."
                author="Patricia L."
                location="West Anaheim"
                rating={5}
              />
              <TestimonialCard
                quote="Excellent service and convenient location from Anaheim. Dr. Bonakdar takes time to explain everything thoroughly."
                author="David K."
                location="Platinum Triangle"
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Schedule Your Anaheim Eye Exam Today</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of satisfied Anaheim patients who trust Dr. Bonakdar for their eye care needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:(949)658-2372"
                  className="inline-flex items-center justify-center bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (949) 658-2372
                </a>
                <a
                  href="https://promo.eyecarecenteroc.com/lead-magnet-page-6841-9006-6616-2060"
                  className="inline-flex items-center justify-center border-2 border-eyecare-blue text-eyecare-blue hover:bg-eyecare-blue hover:text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Online
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Vendor Logo Carousel */}
        <VendorLogoCarousel 
          title="Trusted Eye Care Partners" 
          description="We work with leading manufacturers to provide the best care for Anaheim patients"
          category="general"
          fixedPosition={false}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default AnaheimEyeDoctorPage;