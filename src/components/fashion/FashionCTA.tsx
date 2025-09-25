
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Glasses } from 'lucide-react';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';

const FashionCTA = () => {
  return (
    <section className="py-16 bg-eyecare-lighter-blue">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Perfect Frames?</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Visit our eyewear gallery to explore our extensive collection of designer frames 
              and receive personalized styling from our experienced opticians.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-eyecare-lighter-blue flex items-center justify-center text-eyecare-blue flex-shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Schedule a Styling Session</h3>
                  <p className="text-gray-600 mb-4">
                    Book a personalized frame styling consultation with our eyewear experts.
                  </p>
                  <AppointmentRequestDialog>
                    <button className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-md transition-colors">
                      Book Appointment
                    </button>
                  </AppointmentRequestDialog>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-eyecare-lighter-blue flex items-center justify-center text-eyecare-blue flex-shrink-0">
                  <Glasses className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Visit Our Showroom</h3>
                  <p className="text-gray-600 mb-4">
                    Drop by our eyewear gallery to browse our collection in person.
                  </p>
                  <Link 
                    to="/contact" 
                    className="border border-eyecare-blue text-eyecare-blue hover:bg-eyecare-lighter-blue px-6 py-3 rounded-md transition-colors inline-block"
                  >
                    Get Directions
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-eyecare-lighter-blue/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center">Our Eyewear Promise</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-eyecare-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">1-year warranty on all frames and lenses</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-eyecare-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Free adjustments and cleanings for the life of your glasses</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-eyecare-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">30-day satisfaction guarantee on all purchases</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-eyecare-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">We accept most major vision insurance plans</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FashionCTA;
