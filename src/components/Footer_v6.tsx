import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ProtectedEmail from '@/components/ui/protected-email';
import { useCallRailPhone } from '@/hooks/useCallRailPhone';

const Footer = () => {
  const [showFullEmail, setShowFullEmail] = useState(false);
  const { phoneNumber, phoneHref } = useCallRailPhone();

  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-300">
                EYECARE CENTER OF OC is led by Dr. Alexander Bonakdar, a specialist in keratoconus, dry eye treatment, and advanced vision care solutions.
              </p>
              <div className="mt-4 flex space-x-2">
                <a href="https://www.facebook.com/" className="bg-eyecare-blue p-2 rounded-full hover:bg-eyecare-light-purple transition-colors" aria-label="Facebook">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/" className="bg-eyecare-blue p-2 rounded-full hover:bg-eyecare-light-purple transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.60 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 715.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/" className="bg-eyecare-blue p-2 rounded-full hover:bg-eyecare-light-purple transition-colors" aria-label="YouTube">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 01 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-eyecare-light-purple transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-eyecare-light-purple transition-colors">About Us</Link></li>
                <li><Link to="/services" className="text-gray-300 hover:text-eyecare-light-purple transition-colors">Services</Link></li>
                <li><Link to="/conditions" className="text-gray-300 hover:text-eyecare-light-purple transition-colors">Eye Conditions</Link></li>
                <li><Link to="/city-conditions" className="text-gray-300 hover:text-eyecare-light-purple transition-colors">City-Specific Care</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-eyecare-light-purple transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Medical Conditions</h3>
              <ul className="space-y-2">
                <li><Link to="/conditions/keratoconus" className="text-gray-300 hover:text-eyecare-light-purple transition-colors">Keratoconus</Link></li>
                <li><Link to="/conditions/dry-eye" className="text-gray-300 hover:text-eyecare-light-purple transition-colors">Dry Eye Treatment</Link></li>
                <li><Link to="/conditions/lasik" className="text-gray-300 hover:text-eyecare-light-purple transition-colors">LASIK Surgery</Link></li>
                <li><Link to="/conditions/cataract" className="text-gray-300 hover:text-eyecare-light-purple transition-colors">Cataract Surgery</Link></li>
                <li><Link to="/conditions/ortho-k" className="text-gray-300 hover:text-eyecare-light-purple transition-colors">Orthokeratology (Ortho-K)</Link></li>
                <li><Link to="/conditions/headache-eye-fatigue" className="text-gray-300 hover:text-eyecare-light-purple transition-colors">Headache & Eye Fatigue</Link></li>
                <li><Link to="/conditions" className="text-gray-300 hover:text-eyecare-light-purple transition-colors">View All Conditions</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-eyecare-light-purple mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">801 North Tustin Ave #404, Santa Ana, CA 92705</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-eyecare-light-purple mr-2 flex-shrink-0" />
                  <a href={phoneHref} className="text-gray-300 hover:text-eyecare-light-purple transition-colors callrail-phone">{phoneNumber}</a>
                </li>
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-eyecare-light-purple mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-gray-300">
                      Email: <ProtectedEmail asLink={showFullEmail} text={showFullEmail ? "eyecarecenteroc@gmail.com" : "eye***@gmail.com"} />
                    </span>
                    {!showFullEmail && (
                      <button
                        onClick={() => setShowFullEmail(true)}
                        className="block text-sm text-eyecare-light-purple hover:underline mt-1"
                      >
                        Show full email
                      </button>
                    )}
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="w-5 h-5 text-eyecare-light-purple mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Mon-Thu: 9am - 6pm</p>
                    <p className="text-gray-300">Fri: 9am - 5pm</p>
                    <p className="text-gray-300">Sat: By Appointment Only</p>
                    <p className="text-gray-300">Sun: Closed</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="py-4 border-t border-gray-800">
          <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} EYECARE CENTER OF ORANGE COUNTY. All rights reserved.</p>
            <div className="mt-2">
              <Link to="/services" className="text-gray-500 hover:text-gray-400 text-xs">
                Cities Served
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Persistent Phone Button - Like Test3 */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <a
          href={phoneHref}
          className="block w-full bg-eyecare-blue text-white py-4 text-center font-semibold text-lg shadow-lg callrail-phone"
          aria-label="Call Now"
        >
          <div className="flex items-center justify-center">
            <Phone className="w-5 h-5 mr-2" />
            Call Now: {phoneNumber}
          </div>
        </a>
      </div>

      {/* Add bottom padding to body on mobile to account for persistent button */}
      <style jsx>{`
        @media (max-width: 768px) {
          body {
            padding-bottom: 70px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;