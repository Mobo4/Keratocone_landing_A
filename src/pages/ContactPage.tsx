
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import LocationMap from '@/components/contact/LocationMap';
import OfficeHours from '@/components/contact/OfficeHours';
import InsuranceInfo from '@/components/contact/InsuranceInfo';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';
import SEO from '@/components/SEO';
import EmailProtection from '@/utils/emailProtection';
import { Phone, Mail, MapPin, Calendar, Clock } from 'lucide-react';
import { useCallRailPhone } from '@/hooks/useCallRailPhone';

const ContactPage = () => {
  const [showFullEmail, setShowFullEmail] = useState(false);
  const { phoneNumber, phoneHref } = useCallRailPhone();
  const protectedEmail = EmailProtection.createProtectedEmailDisplay('eyecarecenteroc@gmail.com');
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Eyecare Center of Orange County",
    "description": "Contact information and appointment scheduling for Orange County's premier eye care center."
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Contact Us | Schedule Your Eye Exam | Orange County Eye Care"
        description="Contact Eyecare Center of Orange County to schedule your eye exam. Located in Santa Ana serving Orange County with comprehensive eye care services."
        keywords="contact eye doctor, schedule eye exam, Orange County eye care, Santa Ana optometrist, book appointment"
        canonicalUrl="https://eyecarecenteroc.com/contact"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-eyecare-blue to-eyecare-light-purple py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Contact Our <span className="text-eyecare-lighter-blue">Eye Care</span> Team
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Schedule your comprehensive eye exam or consultation with our experienced optometry team in Orange County.
            </p>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-purple-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get in Touch with Our <span className="text-eyecare-blue">Eye Care Experts</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Multiple convenient ways to reach us for appointments, consultations, and emergency care
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-eyecare-blue to-eyecare-light-purple rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Our Location</h3>
                <p className="text-gray-600">
                  801 North Tustin Ave #404<br />
                  Santa Ana, CA 92705
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-eyecare-blue font-medium">Convenient Orange County Location</p>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Call Us</h3>
                <a href={phoneHref} className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors callrail-phone">
                  {phoneNumber}
                </a>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-green-600 font-medium">Emergency Care Available</p>
                </div>
              </div>
              
              <AppointmentRequestDialog>
                <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 cursor-pointer">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">Email Us</h3>
                  <div className="text-blue-600 font-medium">
                    {showFullEmail ? protectedEmail.revealEmail() : protectedEmail.displayText}
                    {!showFullEmail && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowFullEmail(true);
                        }}
                        className="block text-sm text-blue-600 hover:text-blue-700 hover:underline mt-2 mx-auto transition-colors"
                      >
                        Show full email
                      </button>
                    )}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-blue-600 font-medium">Click to Schedule Appointment</p>
                  </div>
                </div>
              </AppointmentRequestDialog>
              
              <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Office Hours</h3>
                <div className="text-gray-700 space-y-1">
                  <p className="font-medium">Mon-Thu: 9AM-6PM</p>
                  <p className="font-medium">Fri: 9AM-5PM</p>
                  <p className="font-medium">Sat: By Appointment</p>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-orange-600 font-medium">Flexible Scheduling</p>
                </div>
              </div>
            </div>

            {/* Map and Office Details */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-96 lg:h-auto">
                  <LocationMap />
                </div>
                <div className="p-8 lg:p-12 space-y-8 bg-gradient-to-br from-white to-gray-50">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <MapPin className="w-6 h-6 text-eyecare-blue mr-3" />
                      Visit Our Modern Facility
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Our state-of-the-art eye care center is conveniently located in Santa Ana, 
                      serving patients throughout Orange County with comprehensive vision care services.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <OfficeHours />
                    <InsuranceInfo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
