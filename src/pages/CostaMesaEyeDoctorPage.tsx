import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import VendorLogoCarousel from '@/components/VendorLogoCarousel';
import SEO from '@/components/SEO';
import { Phone, MapPin, Clock, Calendar } from 'lucide-react';

const CostaMesaEyeDoctorPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dr. Alexander Bonakdar - Costa Mesa Eye Doctor",
    "description": "Costa Mesa's most experienced eye doctor. 30+ years expertise vs newer practices. True keratoconus expertise.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "801 North Tustin Avenue, Suite 404",
      "addressLocality": "Santa Ana",
      "addressRegion": "CA",
      "postalCode": "92705"
    },
    "telephone": "(949) 658-2372",
    "url": "https://eyecarecenteroc.com/locations/costa-mesa-eye-doctor",
    "areaServed": ["Costa Mesa", "Mesa Verde", "Costa Mesa Country Club", "Downtown Costa Mesa"]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Eye Doctor Costa Mesa CA | Dr. Bonakdar vs Insight Vision"
        description="Experienced eye doctor in Costa Mesa, CA. Dr. Bonakdar: 30+ years expertise vs newer practices. Keratoconus specialist. (949) 658-2372"
        keywords="eye doctor Costa Mesa, Costa Mesa optometrist, Costa Mesa eye care, Costa Mesa keratoconus"
        canonicalUrl="https://eyecarecenteroc.com/locations/costa-mesa-eye-doctor"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section - Using existing Hero component with standard colors */}
        <Hero
          title="Serving Costa Mesa's 113,000 Residents Since 1995 - Dr. Bonakdar"
          subtitle="30 years caring for Costa Mesa families from Mesa Verde to South Coast Plaza. Specialized eye care for retail professionals, hospitality workers, and Segerstrom Center employees. Expert treatment for Orange County's shopping and entertainment hub."
          buttonText="Schedule Your Costa Mesa Eye Exam"
          buttonLink="https://promo.eyecarecenteroc.com/lead-magnet-page-6841-9006-6616-2060"
          backgroundClass="bg-gradient-to-r from-blue-100 to-eyecare-lighter-blue"
          colorScheme="blue"
        />

        {/* Services Section - Using existing ServiceCard component */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Services for Costa Mesa</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Expert Keratoconus Treatment"
                description="500+ successful cases vs competitors with limited experience."
                icon="microscope"
              />
              <ServiceCard
                title="Advanced Scleral Lens Fittings"
                description="Decades of specialty lens expertise vs newer practices."
                icon="eye"
              />
              <ServiceCard
                title="Comprehensive Eye Exams"
                description="Thorough examinations with 30+ years of diagnostic experience."
                icon="glasses"
              />
              <ServiceCard
                title="Contact Lens Expertise"
                description="All types of contact lenses with proven fitting success."
                icon="star"
              />
              <ServiceCard
                title="Dry Eye Management"
                description="Advanced dry eye treatments based on decades of experience."
                icon="droplet"
              />
              <ServiceCard
                title="Emergency Eye Care"
                description="Same-day emergency care when newer practices have wait times."
                icon="activity"
              />
            </div>
          </div>
        </section>

        {/* Experience Advantage Section - Using standard gray-50 background */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">The Experience Advantage</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">30+ Years in Orange County</h3>
                <p className="text-gray-600">vs competitors with only 10 years experience</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">500+ Successful Keratoconus Cases</h3>
                <p className="text-gray-600">Proven track record vs unproven newer practices</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Established Before Many Current Practices</h3>
                <p className="text-gray-600">Founded before many competitors even existed</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Proven Track Record</h3>
                <p className="text-gray-600">Decades of results in Costa Mesa area</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Independent Practice</h3>
                <p className="text-gray-600">Not a corporate chain - personalized care</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Established Relationships</h3>
                <p className="text-gray-600">Trusted by Costa Mesa families for generations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Specific Content - Using standard eyecare-lighter-blue */}
        <section className="py-16 bg-eyecare-lighter-blue">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Deep Roots in Costa Mesa</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Serving Costa Mesa Since Before South Coast Plaza Expansion</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Trusted by Costa Mesa families for generations</li>
                    <li>• Convenient to South Coast Plaza and Orange County Fair</li>
                    <li>• Easy access from 405, 55, and 73 freeways</li>
                    <li>• Serving Mesa Verde, Costa Mesa Country Club, and downtown</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    <MapPin className="inline-block w-5 h-5 mr-2 text-eyecare-blue" />
                    Why Experience Matters
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Decades of proven results vs newer practices</li>
                    <li>• Central Orange County location</li>
                    <li>• Personalized care (not corporate volume)</li>
                    <li>• Direct access to experienced doctor</li>
                    <li>• Same-week appointments available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Costa Mesa Families Trust Experience</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                quote="Dr. Bonakdar has been our family's eye doctor for over 20 years. His experience with keratoconus saved my son's vision."
                author="Maria R."
                location="Costa Mesa"
                rating={5}
              />
              <TestimonialCard
                quote="I tried the newer practices first, but Dr. Bonakdar's decades of experience immediately identified my complex prescription needs."
                author="James K."
                location="Mesa Verde"
                rating={5}
              />
              <TestimonialCard
                quote="Three generations of our family have trusted Dr. Bonakdar. You can't replace decades of experience with newer technology alone."
                author="The Johnson Family"
                location="Costa Mesa"
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Choose Experience for Your Eye Care</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join Costa Mesa families who trust 30+ years of proven expertise.
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
                  Same-Week Appointments
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Vendor Logo Carousel */}
        <VendorLogoCarousel 
          title="Proven Treatment Partners" 
          description="Decades of relationships with leading eye care manufacturers"
          category="general"
          fixedPosition={false}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default CostaMesaEyeDoctorPage;