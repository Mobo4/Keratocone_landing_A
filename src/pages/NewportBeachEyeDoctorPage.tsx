import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import VendorLogoCarousel from '@/components/VendorLogoCarousel';
import SEO from '@/components/SEO';
import { Phone, MapPin, Clock, Calendar } from 'lucide-react';

const NewportBeachEyeDoctorPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dr. Alexander Bonakdar - Newport Beach Eye Doctor",
    "description": "Premier eye doctor in Newport Beach, CA. Dr. Bonakdar offers luxury eye care, keratoconus treatment, designer frames.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "801 North Tustin Avenue, Suite 404",
      "addressLocality": "Santa Ana", 
      "addressRegion": "CA",
      "postalCode": "92705"
    },
    "telephone": "(949) 658-2372",
    "url": "https://eyecarecenteroc.com/locations/newport-beach-eye-doctor",
    "areaServed": ["Newport Beach", "Newport Coast", "Corona del Mar", "Lido Isle", "Balboa Island"]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Eye Doctor Newport Beach CA | Dr. Bonakdar Luxury Eye Care"
        description="Premier eye doctor in Newport Beach, CA. Dr. Bonakdar offers luxury eye care, keratoconus treatment, designer frames. Call (949) 658-2372"
        keywords="eye doctor Newport Beach, Newport Beach optometrist, luxury eye care Newport Beach"
        canonicalUrl="https://eyecarecenteroc.com/locations/newport-beach-eye-doctor"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Using existing Hero component with standard colors */}
        <Hero
          title="Serving Newport Beach's 85,000 Residents Since 1995"
          subtitle="Three generations of Newport Beach families trust Dr. Bonakdar. Specialized care for Fashion Island executives, harbor professionals, and luxury community residents. Expert marine environment eye protection and UV damage prevention."
          buttonText="Book Your Newport Beach Consultation"
          buttonLink="https://promo.eyecarecenteroc.com/lead-magnet-page-6841-9006-6616-2060"
          backgroundClass="bg-gradient-to-r from-blue-100 to-eyecare-lighter-blue"
          colorScheme="blue"
        />

        {/* Services Section - Using existing ServiceCard component */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Luxury Services for Newport Beach</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Comprehensive Eye Exams"
                description="Unhurried, personalized eye examinations with the latest diagnostic technology."
                icon="eye"
              />
              <ServiceCard
                title="Advanced Keratoconus Management"
                description="Specialized keratoconus treatment with premium scleral lens fittings."
                icon="microscope"
              />
              <ServiceCard
                title="Premium Contact Lens Fittings"
                description="Expert fittings for all types including luxury specialty lenses."
                icon="glasses"
              />
              <ServiceCard
                title="Designer Frame Collections"
                description="Curated selection of luxury eyewear from top international designers."
                icon="star"
              />
              <ServiceCard
                title="Executive Eye Care Packages"
                description="Comprehensive eye health programs for busy Newport Beach professionals."
                icon="briefcase"
              />
              <ServiceCard
                title="Concierge-Level Service"
                description="White-glove patient experience with extended consultation times."
                icon="award"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Section - Using standard gray-50 background */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Newport Beach Chooses Dr. Bonakdar</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">30+ Years of Excellence</h3>
                <p className="text-gray-600">Decades of proven expertise serving Orange County's most discerning patients.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Recognized Keratoconus Specialist</h3>
                <p className="text-gray-600">Advanced keratoconus management with premium treatment options.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Personalized Appointments</h3>
                <p className="text-gray-600">Extended consultation times ensuring thorough, comprehensive care.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Premium Location Access</h3>
                <p className="text-gray-600">Conveniently located just 10 minutes from Newport Beach.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Exclusive Patient Experience</h3>
                <p className="text-gray-600">White-glove service with valet parking and direct doctor access.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Premium Insurance Networks</h3>
                <p className="text-gray-600">All major insurance plans accepted, including premium networks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Specific Content - Using standard eyecare-lighter-blue */}
        <section className="py-16 bg-eyecare-lighter-blue">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Serving Newport Beach's Elite</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Proudly Serving Newport Beach</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Convenient to Fashion Island and Balboa Island</li>
                    <li>• Serving Newport Coast, Corona del Mar, and Lido Isle</li>
                    <li>• Premium care worthy of Newport Beach standards</li>
                    <li>• Easy access from PCH and Newport Boulevard</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    <MapPin className="inline-block w-5 h-5 mr-2 text-eyecare-blue" />
                    Premium Features
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Same-day appointments for urgent needs</li>
                    <li>• Extended consultation times</li>
                    <li>• Latest diagnostic technology</li>
                    <li>• Luxury frame selection</li>
                    <li>• Flexible scheduling for professionals</li>
                    <li>• Evening appointments available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Newport Beach Professionals Trust Dr. Bonakdar</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="Finally found an eye doctor who understands the level of care Newport Beach expects. Dr. Bonakdar's expertise is unmatched."
                author="Michael S."
                location="Newport Coast"
                rating={5}
              />
              <TestimonialCard
                quote="The white-glove service and attention to detail is exactly what we needed. Premium care from a true professional."
                author="Catherine L."
                location="Fashion Island"
                rating={5}
              />
              <TestimonialCard
                quote="His keratoconus treatment saved my vision. The quality of care exceeds anything I've experienced in Newport Beach."
                author="Dr. Robert M."
                location="Corona del Mar"
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Schedule Your Newport Beach Eye Exam Today</h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience the luxury eye care that Newport Beach residents deserve.
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
                  VIP Scheduling
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Vendor Logo Carousel */}
        <VendorLogoCarousel 
          title="Luxury Eyewear & Treatment Partners" 
          description="We partner with the world's finest manufacturers for premium eye care solutions"
          category="general"
          fixedPosition={false}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default NewportBeachEyeDoctorPage;