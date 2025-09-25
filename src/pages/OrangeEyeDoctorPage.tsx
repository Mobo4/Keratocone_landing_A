import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import VendorLogoCarousel from '@/components/VendorLogoCarousel';
import SEO from '@/components/SEO';
import { Phone, MapPin, Clock, Calendar } from 'lucide-react';

const OrangeEyeDoctorPage = () => {
  return (
    <>
      <SEO 
        title="Eye Doctor Orange CA - Dr. Bonakdar Vision Care | Comprehensive Eye Exams"
        description="Trusted eye doctor in Orange CA serving Old Towne Orange, Orange Park Acres, and Santiago Hills. Comprehensive eye exams, contact lenses, and vision care services."
        keywords="eye doctor Orange CA, optometrist Orange, eye exam Orange, vision care Old Towne Orange, eye doctor Santiago Hills"
        canonicalUrl="https://bonakdarvision.com/orange-eye-doctor"
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Hero Section */}
        <Hero
          title="Exceptional Eye Care in Orange, CA"
          subtitle="Serving Old Towne Orange, Orange Park Acres, Santiago Hills, The Circle, and surrounding neighborhoods with comprehensive vision care services"
          backgroundImage="/images/orange-hero.jpg"
          ctaText="Schedule Your Eye Exam"
          ctaLink="/contact"
        />

        {/* Location Info Section */}
        <section className="py-16 bg-gradient-to-r from-blue-100 to-eyecare-lighter-blue">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Your Trusted Eye Doctor in Orange, CA
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Conveniently located in Orange, Dr. Bonakdar provides exceptional eye care services 
                to residents of Old Towne Orange, Orange Park Acres, Santiago Hills, and The Circle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                <MapPin className="h-12 w-12 text-eyecare-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Central Location</h3>
                <p className="text-gray-600">
                  Easily accessible from all Orange neighborhoods including Old Towne and Santiago Hills
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
                Serving Orange Communities
              </h2>
              <p className="text-lg text-gray-600">
                Proudly providing exceptional eye care to residents throughout Orange, CA
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-2">Old Towne Orange</h3>
                <p className="text-gray-600 text-sm">
                  Historic charm meets modern eye care in Old Towne Orange
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-2">Orange Park Acres</h3>
                <p className="text-gray-600 text-sm">
                  Quality vision services for the Orange Park Acres community
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-2">Santiago Hills</h3>
                <p className="text-gray-600 text-sm">
                  Expert eye care for Santiago Hills residents
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-2">The Circle</h3>
                <p className="text-gray-600 text-sm">
                  Convenient location near The Circle shopping area
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
                What Our Orange Patients Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                name="David K."
                location="Old Towne Orange"
                text="Dr. Bonakdar's office is fantastic! The comprehensive eye exam was thorough and the staff made me feel so comfortable. Highly recommend!"
                rating={5}
              />
              <TestimonialCard
                name="Lisa T."
                location="Santiago Hills"
                text="Amazing experience from start to finish. The technology is cutting-edge and Dr. Bonakdar really takes time to explain everything."
                rating={5}
              />
              <TestimonialCard
                name="Robert H."
                location="Orange Park Acres"
                text="Best eye care in Orange! Professional, friendly, and they have a great selection of frames. My whole family comes here now."
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
              Join hundreds of satisfied patients from Orange who trust Dr. Bonakdar for their vision care needs.
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

export default OrangeEyeDoctorPage;