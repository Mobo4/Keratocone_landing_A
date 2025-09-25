import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Phone, MapPin, Clock, Star, ChevronRight, Mail } from 'lucide-react';
import SEO from '@/components/SEO';
import ProtectedEmail from '@/components/ui/protected-email';

const KeratoconusLandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFullEmail, setShowFullEmail] = useState(false);
  
  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  // SEO structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "about": {
      "@type": "MedicalCondition",
      "name": "Keratoconus",
      "description": "A progressive eye disease where the normally round cornea thins and begins to bulge into a cone-like shape."
    },
    "specialty": {
      "@type": "MedicalSpecialty",
      "name": "Ophthalmology"
    },
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Optometric Eyecare Center of Orange County",
      "telephone": "+17145581182",
      "email": "eyecarecenteroc@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "801 N. Tustin Ave Suite 404",
        "addressLocality": "Santa Ana",
        "addressRegion": "CA",
        "postalCode": "92705"
      }
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col font-['Inter',sans-serif]">
      <SEO 
        title="Keratoconus Specialist Dr. Alexander Bonakdar | Referred Patients"
        description="Expert keratoconus evaluation and treatment in Orange County. Schedule your corneal mapping and consultation with Dr. Alexander Bonakdar."
        keywords="keratoconus referral, corneal mapping, scleral lenses, corneal cross-linking, Dr. Alexander Bonakdar, Orange County"
        canonicalUrl="https://eyecarecenteroc.com/keratoconus-referral"
        ogType="website"
        structuredData={structuredData}
      />
      
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className={`font-bold transition-all duration-300 ${isScrolled ? 'text-gray-900 text-lg' : 'text-white text-xl'}`}>
              Optometric Eyecare Center of OC
            </h1>
            <p className={`text-sm transition-all duration-300 ${isScrolled ? 'text-eyecare-blue' : 'text-eyecare-lighter-blue'}`}>
              Keratoconus & Corneal Disease Management
            </p>
          </div>
          
          <div className="flex space-x-2">
            <a
              href="tel:+17145581182"
              className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all"
              aria-label="Call now"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a
              href="#book-appointment"
              className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all"
              aria-label="Book appointment"
            >
              <Calendar className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-eyecare-blue to-eyecare-dark-blue text-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            className="text-center mb-8"
            initial="initial"
            animate="animate"
            variants={fadeIn}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Referred for Keratoconus?<br />We're Here to Help.
            </h1>
            <p className="text-xl text-eyecare-lighter-blue max-w-2xl mx-auto">
              Schedule your expert corneal mapping and evaluation with Dr. Alexander Bonakdar.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <a 
              href="#book-appointment" 
              className="bg-white text-eyecare-blue hover:bg-eyecare-lighter-blue px-6 py-3 rounded-full font-bold shadow-lg flex items-center justify-center transition-all"
            >
              <Calendar className="w-5 h-5 mr-2" /> Book Appointment
            </a>
            <a 
              href="tel:+17145581182" 
              className="bg-transparent hover:bg-blue-700 border-2 border-white text-white px-6 py-3 rounded-full font-bold flex items-center justify-center transition-all"
            >
              <Phone className="w-5 h-5 mr-2" /> Call Now: (714) 558-1182
            </a>
          </motion.div>
          
          <motion.div
            className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <img 
              src="/lovable-uploads/Keratoconus_eye.png" 
              alt="Keratoconus visualization" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-eyecare-dark-blue/70 to-transparent flex items-end">
              <p className="text-white p-4 text-sm">
                Advanced imaging helps us precisely map your cornea to provide the best treatment options
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Doctor Section */}
      <motion.section 
        className="py-16 px-4 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3">
              <div className="bg-eyecare-lighter-blue rounded-full p-2">
                <img 
                  src="/images/staff/drbonakdar.png" 
                  alt="Dr. Alexander Bonakdar" 
                  className="w-full h-auto rounded-full"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Meet Dr. Alexander Bonakdar
              </h2>
              <p className="text-gray-700 mb-4">
                Dr. Bonakdar specializes in advanced keratoconus management with over 15 years of experience fitting specialty contact lenses for complex corneal conditions. He utilizes cutting-edge diagnostic technology and a patient-centered approach to provide customized treatment plans.
              </p>
              <p className="text-gray-700 mb-4">
                As a keratoconus specialist, Dr. Bonakdar works closely with corneal surgeons and is skilled in fitting advanced scleral and hybrid lenses for optimal vision and comfort, even in the most challenging cases.
              </p>
              <div className="flex items-center text-eyecare-blue">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm">Based on 150+ patient reviews</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* What to Expect Section */}
      <motion.section 
        className="py-16 px-4 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
            What to Expect During Your Visit
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 rounded-full bg-eyecare-lighter-blue flex items-center justify-center mb-4">
                <span className="text-eyecare-blue font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Comprehensive Imaging</h3>
              <p className="text-gray-700">
                We'll perform detailed corneal mapping using our Pentacam HD technology to analyze your cornea's shape and thickness with precision.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 rounded-full bg-eyecare-lighter-blue flex items-center justify-center mb-4">
                <span className="text-eyecare-blue font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Expert Consultation</h3>
              <p className="text-gray-700">
                Dr. Bonakdar will evaluate your condition, explain your diagnosis, and discuss treatment options best suited for your specific case.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="w-12 h-12 rounded-full bg-eyecare-lighter-blue flex items-center justify-center mb-4">
                <span className="text-eyecare-blue font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Personalized Plan</h3>
              <p className="text-gray-700">
                You'll receive a customized treatment plan which may include specialty contact lenses, corneal cross-linking referrals, or other advanced treatments.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-bold mb-2 text-blue-800">Insurance Information</h3>
            <p className="text-gray-700 mb-4">
              We accept most vision and medical insurance plans. Keratoconus treatment may be covered by your medical insurance rather than vision insurance due to its medical nature.
            </p>
            <p className="text-gray-700">
              Our staff will help verify your benefits and explain coverage options prior to treatment.
            </p>
          </div>
        </div>
      </motion.section>
      
      {/* Patient Reviews */}
      <motion.section 
        className="py-16 px-4 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
            What Our Patients Say
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Dr. Bonakdar is amazing with keratoconus patients. After years of struggling with my vision, his expertise with scleral lenses has given me clarity I never thought possible. The office staff is friendly and the technology is cutting-edge."
              </p>
              <p className="font-bold text-gray-900">- Michael T.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "I was referred to Dr. Bonakdar after being diagnosed with keratoconus. He took the time to explain my condition thoroughly and fit me with specialty lenses that have completely changed my quality of life. I highly recommend his expertise!"
              </p>
              <p className="font-bold text-gray-900">- Sarah K.</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="https://www.google.com/search?q=eyecare+center+of+oc+reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              See More Reviews on Google <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </motion.section>
      
      {/* Location Section */}
      <motion.section 
        className="py-16 px-4 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="location"
      >
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
            Our Location
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-start mb-6">
                <MapPin className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-1 text-gray-900">Address</h3>
                  <p className="text-gray-700">
                    801 N. Tustin Ave Suite 404<br />
                    Santa Ana, CA 92705
                  </p>
                  <a 
                    href="https://maps.google.com/?q=801+N+Tustin+Ave+%23404,+Santa+Ana,+CA+92705" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <Phone className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-1 text-gray-900">Phone</h3>
                  <a 
                    href="tel:+17145581182" 
                    className="text-gray-700 hover:text-blue-600"
                  >
                    (714) 558-1182
                  </a>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <Mail className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-1 text-gray-900">Email</h3>
                  <ProtectedEmail 
                    text={showFullEmail ? "eyecarecenteroc@gmail.com" : "eye***@gmail.com"} 
                    asLink={showFullEmail} 
                  />
                  {!showFullEmail && (
                    <button
                      onClick={() => setShowFullEmail(true)}
                      className="block text-sm text-blue-600 hover:underline mt-1"
                    >
                      Show email address
                    </button>
                  )}
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-1 text-gray-900">Office Hours</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li className="flex justify-between">
                      <span>Monday - Thursday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Friday:</span>
                      <span className="font-medium">9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">By Appointment</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="h-96 rounded-xl overflow-hidden shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.944911769163!2d-117.86990162414198!3d33.74550297259654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd9c2a3a4ef5b%3A0x2f2b8ffe34805da9!2s801%20N%20Tustin%20Ave%20%23404%2C%20Santa%20Ana%2C%20CA%2092705!5e0!3m2!1sen!2sus!4v1710937254980!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Optometric Eyecare Center of OC Location"
                aria-label="Map showing our location at 801 North Tustin Ave #404, Santa Ana, CA 92705"
              ></iframe>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-700 to-blue-900 text-white" id="book-appointment">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Schedule Your Keratoconus Evaluation?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
              Take the first step toward better vision today. We're here to help you manage your keratoconus effectively.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+17145581182" 
                className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-full font-bold shadow-lg flex items-center justify-center transition-all text-lg"
              >
                <Phone className="w-5 h-5 mr-2" /> Call (714) 558-1182
              </a>
              <a 
                href="https://promo.eyecarecenteroc.com/lead-magnet-page-6841-9006-6616-2060" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent hover:bg-blue-800 border-2 border-white text-white px-8 py-4 rounded-full font-bold flex items-center justify-center transition-all text-lg"
              >
                <Calendar className="w-5 h-5 mr-2" /> Book Online
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-gray-300 text-sm">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-bold text-white text-lg">Optometric Eyecare Center of OC</p>
              <p>A Keratoconus and Corneal Disease Management Center</p>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
              <a 
                href="https://www.eyecarecenteroc.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                www.eyecarecenteroc.com
              </a>
              <a 
                href="tel:+17145581182" 
                className="hover:text-white"
              >
                (714) 558-1182
              </a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p>&copy; {new Date().getFullYear()} Optometric Eyecare Center of Orange County. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KeratoconusLandingPage;