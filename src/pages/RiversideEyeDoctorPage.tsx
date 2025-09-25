import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import VendorLogoCarousel from '@/components/VendorLogoCarousel';
import SEO from '@/components/SEO';
import { Phone, MapPin, Clock, Calendar } from 'lucide-react';

const RiversideEyeDoctorPage = () => {
  return (
    <>
      <SEO 
        title="Eye Doctor Riverside CA - Dr. Bonakdar Vision Care | Comprehensive Eye Exams"
        description="Leading eye doctor in Riverside CA serving Downtown Riverside, Canyon Crest, Wood Streets, Arlington, and Mission Grove. Comprehensive eye exams, contact lenses, and vision care services."
        keywords="eye doctor Riverside CA, optometrist Riverside, eye exam Riverside, vision care Downtown Riverside, eye doctor Canyon Crest"
        canonicalUrl="https://bonakdarvision.com/riverside-eye-doctor"
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <Hero
          title="Comprehensive Eye Care in Riverside, CA"
          subtitle="Serving Downtown Riverside, Canyon Crest, Wood Streets, Arlington, Mission Grove, and surrounding neighborhoods with comprehensive vision care services"
          backgroundImage="/images/riverside-hero.jpg"
          ctaText="Schedule Your Eye Exam"
          ctaLink="/contact"
        />

        {/* Location Info Section */}
        <section className="py-16 bg-gradient-to-r from-blue-100 to-eyecare-lighter-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your Trusted Eye Doctor in Riverside, CA
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Conveniently located in Riverside, Dr. Bonakdar provides exceptional eye care services 
                to residents of Downtown Riverside, Canyon Crest, Wood Streets, Arlington, and Mission Grove.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <MapPin className="h-12 w-12 text-eyecare-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Accessible Location</h3>
                <p className="text-gray-600">
                  Easily accessible from all Riverside neighborhoods including Downtown and Canyon Crest
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <Clock className="h-12 w-12 text-eyecare-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
                <p className="text-gray-600">
                  Extended hours to accommodate your busy schedule with same-day appointments available
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <Calendar className="h-12 w-12 text-eyecare-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
                <p className="text-gray-600">
                  Online appointment booking and reminder system for your convenience
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Comprehensive Eye Care Services
              </h2>
              <p className="text-lg text-gray-600">
                Advanced vision care technology and personalized treatment for all ages
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Comprehensive Eye Exams"
                description="Thorough vision assessments using state-of-the-art diagnostic equipment"
                icon="eye"
              />
              <ServiceCard
                title="Contact Lens Fitting"
                description="Expert fitting for all types of contact lenses including specialty designs"
                icon="contact"
              />
              <ServiceCard
                title="Designer Eyewear"
                description="Premium selection of frames from top designers and independent brands"
                icon="glasses"
              />
              <ServiceCard
                title="Digital Eye Strain Treatment"
                description="Solutions for computer vision syndrome and blue light protection"
                icon="computer"
              />
              <ServiceCard
                title="Pediatric Eye Care"
                description="Specialized vision care for children with gentle, kid-friendly approaches"
                icon="child"
              />
              <ServiceCard
                title="Emergency Eye Care"
                description="Prompt treatment for eye injuries and urgent vision problems"
                icon="emergency"
              />
            </div>
          </div>
        </section>

        {/* Neighborhoods Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Serving Riverside Communities
              </h2>
              <p className="text-lg text-gray-600">
                Proudly providing exceptional eye care to residents throughout Riverside, CA
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-2">Downtown Riverside</h3>
                <p className="text-gray-600 text-sm">
                  Urban convenience meets quality eye care in downtown
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-2">Canyon Crest</h3>
                <p className="text-gray-600 text-sm">
                  Premium vision services for Canyon Crest residents
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-2">Wood Streets</h3>
                <p className="text-gray-600 text-sm">
                  Historic neighborhood, modern eye care solutions
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-2">Arlington</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive eye care for Arlington families
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-2">Mission Grove</h3>
                <p className="text-gray-600 text-sm">
                  Expert vision care for Mission Grove community
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-eyecare-lighter-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Our Riverside Patients Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                name="Maria G."
                location="Downtown Riverside"
                text="Dr. Bonakdar's practice is top-notch! The comprehensive eye exam was detailed and the staff made the whole experience comfortable and pleasant."
                rating={5}
              />
              <TestimonialCard
                name="Kevin L."
                location="Canyon Crest"
                text="Excellent service and cutting-edge technology. Dr. Bonakdar is thorough and takes time to explain everything. Highly recommend to everyone!"
                rating={5}
              />
              <TestimonialCard
                name="Sandra R."
                location="Arlington"
                text="Best eye care in Riverside! Professional staff, modern equipment, and Dr. Bonakdar really cares about his patients. Five stars!"
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* Vendor Logos */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <VendorLogoCarousel />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-100 to-eyecare-lighter-blue">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Schedule Your Eye Exam?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join hundreds of satisfied patients from Riverside who trust Dr. Bonakdar for their vision care needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-eyecare-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-eyecare-dark-blue transition-colors inline-flex items-center justify-center"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book Appointment
              </a>
              <a
                href="tel:+1234567890"
                className="bg-white text-eyecare-blue border-2 border-eyecare-blue px-8 py-3 rounded-lg font-semibold hover:bg-eyecare-blue hover:text-white transition-colors inline-flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default RiversideEyeDoctorPage;