import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import VendorLogoCarousel from '@/components/VendorLogoCarousel';
import SEO from '@/components/SEO';
import { Phone, MapPin, Clock, Calendar } from 'lucide-react';

const TustinEyeDoctorPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dr. Alexander Bonakdar - Tustin Eye Doctor",
    "description": "Trusted eye doctor in Tustin, CA. Dr. Bonakdar offers family eye care, keratoconus treatment, contact lenses. Close to Tustin Ranch.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "801 North Tustin Avenue, Suite 404",
      "addressLocality": "Santa Ana",
      "addressRegion": "CA",
      "postalCode": "92705"
    },
    "telephone": "(949) 658-2372",
    "url": "https://eyecarecenteroc.com/locations/tustin-eye-doctor",
    "areaServed": ["Tustin", "Tustin Ranch", "Old Town Tustin", "Columbus Grove", "Tustin Legacy"]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Eye Doctor Tustin CA | Dr. Bonakdar Family Eye Care Specialist"
        description="Trusted eye doctor in Tustin, CA. Dr. Bonakdar offers family eye care, keratoconus treatment, contact lenses. Close to Tustin Ranch. (949) 658-2372"
        keywords="eye doctor Tustin, Tustin optometrist, Tustin Ranch eye doctor, Tustin eye care"
        canonicalUrl="https://eyecarecenteroc.com/locations/tustin-eye-doctor"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Using existing Hero component with standard colors */}
        <Hero
          title="Serving Tustin's 80,000 Residents Since 1995 - Dr. Bonakdar"
          subtitle="30 years caring for Tustin families from Old Town to Tustin Legacy. Specialized care for aerospace professionals, tech workers, and family-oriented community. Located on North Tustin Avenue in the heart of Orange County."
          buttonText="Schedule Your Tustin Eye Exam"
          buttonLink="https://promo.eyecarecenteroc.com/lead-magnet-page-6841-9006-6616-2060"
          backgroundClass="bg-gradient-to-r from-blue-100 to-eyecare-lighter-blue"
          colorScheme="blue"
        />

        {/* Services Section - Using existing ServiceCard component */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Services for Tustin Families</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Family Eye Exams"
                description="Complete eye examinations for all family members from infants to seniors."
                icon="eye"
              />
              <ServiceCard
                title="Keratoconus Treatment"
                description="Expert keratoconus management with 500+ successful scleral lens fittings."
                icon="microscope"
              />
              <ServiceCard
                title="Children's Vision Care"
                description="Specialized pediatric eye care and early detection of vision problems."
                icon="baby"
              />
              <ServiceCard
                title="Contact Lens Fittings"
                description="Safe contact lens fittings for teenagers and adults with proper education."
                icon="glasses"
              />
              <ServiceCard
                title="Sports Vision"
                description="Specialized vision care for student athletes and sports performance."
                icon="activity"
              />
              <ServiceCard
                title="Senior Eye Care"
                description="Comprehensive eye health monitoring for age-related conditions."
                icon="heart"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Section - Using standard gray-50 background */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Tustin Families Choose Dr. Bonakdar</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">30+ Years Experience</h3>
                <p className="text-gray-600">Decades serving multiple generations of Tustin families.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">All Ages Welcome</h3>
                <p className="text-gray-600">Expert care from infants through seniors in one location.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">10 Minutes from Tustin</h3>
                <p className="text-gray-600">Convenient location via Jamboree, Red Hill, or 55 freeway.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Same-Week Appointments</h3>
                <p className="text-gray-600">Flexible scheduling that works with school and work.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">All Insurance Accepted</h3>
                <p className="text-gray-600">VSP, EyeMed, Blue Cross, and medical insurance accepted.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Family-Friendly Office</h3>
                <p className="text-gray-600">Welcoming environment designed with families in mind.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Specific Content - Using standard eyecare-lighter-blue */}
        <section className="py-16 bg-eyecare-lighter-blue">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Serving Tustin & Surrounding Areas</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Proudly Serving Tustin Since 1990</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Tustin Ranch and Tustin Legacy neighborhoods</li>
                    <li>• Old Town Tustin and Historic District</li>
                    <li>• Columbus Grove and Columbus Square</li>
                    <li>• Tustin Fields and Peters Canyon areas</li>
                    <li>• Convenient to Tustin schools and sports facilities</li>
                    <li>• Close to Tustin Marketplace and The District</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    <MapPin className="inline-block w-5 h-5 mr-2 text-eyecare-blue" />
                    Convenient Location & Access
                  </h3>
                  <p className="font-semibold text-gray-900">From Tustin:</p>
                  <p className="text-gray-600">Take Jamboree or Red Hill north</p>
                  <p className="text-sm text-gray-500 mt-2">Approximate drive time: 10 minutes</p>
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
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What Tustin Families Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="Dr. Bonakdar has cared for our family for over 15 years. From our kids' first eye exams to my parents' cataract monitoring - excellent care."
                author="The Miller Family"
                location="Tustin Ranch"
                rating={5}
              />
              <TestimonialCard
                quote="Great with kids! My teenager got contact lenses and my 8-year-old loves coming for check-ups. Professional yet friendly."
                author="Sarah K."
                location="Old Town Tustin"
                rating={5}
              />
              <TestimonialCard
                quote="My son plays baseball at Tustin High. Dr. Bonakdar's sports vision assessment improved his game significantly. Highly recommend!"
                author="Coach Martinez"
                location="Columbus Grove"
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Schedule Your Tustin Family Eye Exams Today</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of satisfied Tustin families who trust Dr. Bonakdar for their eye care needs.
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
          description="We work with leading manufacturers to provide the best care for Tustin families"
          category="general"
          fixedPosition={false}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default TustinEyeDoctorPage;