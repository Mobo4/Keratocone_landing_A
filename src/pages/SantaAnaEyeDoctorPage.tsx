import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import VendorLogoCarousel from '@/components/VendorLogoCarousel';
import SEO from '@/components/SEO';
import { Phone, MapPin, Clock, Calendar } from 'lucide-react';

const SantaAnaEyeDoctorPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dr. Alexander Bonakdar - Santa Ana Eye Doctor",
    "description": "Local eye doctor in Santa Ana, CA. Dr. Bonakdar provides comprehensive eye care, keratoconus treatment. Bilingual staff serving diverse community.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "801 North Tustin Avenue, Suite 404",
      "addressLocality": "Santa Ana",
      "addressRegion": "CA",
      "postalCode": "92705",
      "addressCountry": "US"
    },
    "telephone": "(949) 658-2372",
    "url": "https://eyecarecenteroc.com/locations/santa-ana-eye-doctor",
    "medicalSpecialty": ["Optometry", "Keratoconus Treatment", "Community Eye Care"],
    "languages": ["English", "Spanish"],
    "areaServed": [
      {
        "@type": "City",
        "name": "Santa Ana",
        "addressRegion": "CA"
      },
      {
        "@type": "Place", 
        "name": "Downtown Santa Ana"
      },
      {
        "@type": "Place",
        "name": "West Santa Ana"
      }
    ]
  };


  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Eye Doctor Santa Ana CA | Dr. Bonakdar Local Orange County Expert"
        description="Local eye doctor in Santa Ana, CA. Dr. Bonakdar provides comprehensive eye care, keratoconus treatment. Bilingual staff. (949) 658-2372"
        keywords="eye doctor Santa Ana, Santa Ana optometrist, oculista Santa Ana, Santa Ana eye care, bilingual eye doctor, keratoconus Santa Ana"
        canonicalUrl="https://eyecarecenteroc.com/locations/santa-ana-eye-doctor"
        ogType="website"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Using existing Hero component with standard colors */}
        <Hero
          title="Serving Santa Ana's 330,000 Residents Since 1995 - Dr. Bonakdar"
          subtitle="30 years caring for Santa Ana's diverse Latino community (78% Hispanic/Latino). Bilingual practice serving downtown workers, government employees, and multi-generational families. Expert eye care adapted for Orange County's cultural capital."
          buttonText="Schedule Your Santa Ana Eye Exam"
          buttonLink="https://promo.eyecarecenteroc.com/lead-magnet-page-6841-9006-6616-2060"
          backgroundClass="bg-gradient-to-r from-blue-100 to-eyecare-lighter-blue"
          colorScheme="blue"
        />

        {/* Services Section - Using existing ServiceCard component */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Services for Santa Ana Residents</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Comprehensive Eye Exams"
                description="Complete eye examinations for Santa Ana families with bilingual staff support."
                icon="eye"
              />
              <ServiceCard
                title="Keratoconus Treatment"
                description="Specialized keratoconus care with culturally sensitive approach."
                icon="microscope"
              />
              <ServiceCard
                title="Contact Lens Fittings"
                description="Expert contact lens fittings for all types including specialty lenses."
                icon="glasses"
              />
              <ServiceCard
                title="Diabetic Eye Care"
                description="Specialized diabetic eye monitoring and treatment for the community."
                icon="heart"
              />
              <ServiceCard
                title="Children's Vision Care"
                description="Comprehensive pediatric eye care for Santa Ana families."
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
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Santa Ana Chooses Dr. Bonakdar</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">30+ Years Experience</h3>
                <p className="text-gray-600">Decades of trusted eye care serving Santa Ana families.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Bilingual Staff</h3>
                <p className="text-gray-600">English and Spanish speaking staff - Hablamos Español.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Central Location</h3>
                <p className="text-gray-600">Located in the heart of Orange County - convenient for all Santa Ana.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">All Insurance Accepted</h3>
                <p className="text-gray-600">VSP, EyeMed, Medical insurance, and affordable payment plans.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Culturally Sensitive Care</h3>
                <p className="text-gray-600">Understanding and respecting Santa Ana's diverse community.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Community Focus</h3>
                <p className="text-gray-600">Deep roots in Santa Ana with generations of family trust.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Specific Content - Using standard eyecare-lighter-blue */}
        <section className="py-16 bg-eyecare-lighter-blue">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Serving Santa Ana & Surrounding Areas</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Proudly Serving Santa Ana Since 1990</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Downtown Santa Ana and Historic District</li>
                    <li>• West Santa Ana and South Coast Metro</li>
                    <li>• Floral Park and French Park neighborhoods</li>
                    <li>• Park Santiago and Delhi neighborhoods</li>
                    <li>• Close to Santa Ana College and Civic Center</li>
                    <li>• Easy access from I-5, 22, and 55 freeways</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    <MapPin className="inline-block w-5 h-5 mr-2 text-eyecare-blue" />
                    Convenient Location & Access
                  </h3>
                  <p className="font-semibold text-gray-900">Central Orange County Office:</p>
                  <p className="text-gray-600">801 N Tustin Ave, Suite 404</p>
                  <p className="text-sm text-gray-500 mt-2">Located in the heart of Orange County</p>
                  <div className="mt-4">
                    <p className="font-semibold text-gray-900">Office Hours:</p>
                    <p className="text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Hablamos Español</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What Santa Ana Patients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="Dr. Bonakdar and his bilingual staff made me feel comfortable. Finally found an eye doctor who understands our community."
                author="Carmen M."
                location="Downtown Santa Ana"
                rating={5}
              />
              <TestimonialCard
                quote="El personal habla español y entiende nuestras necesidades. Excelente cuidado para toda la familia."
                author="Roberto L."
                location="West Santa Ana"
                rating={5}
              />
              <TestimonialCard
                quote="Great with kids and takes time to explain everything. The central location is perfect for our Santa Ana family."
                author="Ana R."
                location="Floral Park"
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Schedule Your Santa Ana Eye Exam Today</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of satisfied Santa Ana families who trust Dr. Bonakdar for their eye care needs.<br/>
                Acompáñanos - Hablamos Español
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
          description="We work with leading manufacturers to provide the best care for Santa Ana patients"
          category="general"
          fixedPosition={false}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default SantaAnaEyeDoctorPage;