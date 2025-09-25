import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Eyecare Center of Orange County",
    "description": "Privacy policy and HIPAA compliance information for Eyecare Center of Orange County patients.",
    "publisher": {
      "@type": "Organization",
      "name": "Eyecare Center of Orange County"
    }
  };

  return (
    <>
      <SEO
        title="Privacy Policy & HIPAA Compliance | Eyecare Center of Orange County"
        description="Learn about our privacy practices, HIPAA compliance, and how we protect your personal health information at Eyecare Center of Orange County."
        structuredData={structuredData}
      />
      <Header />

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-eyecare-blue mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-600">Your privacy and health information security are our top priorities</p>
            <p className="text-sm text-gray-500 mt-2">Last Updated: September 2025</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            {/* HIPAA Compliance */}
            <section>
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-eyecare-blue mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">HIPAA Compliance</h2>
              </div>
              <p className="text-gray-700 mb-4">
                Eyecare Center of Orange County is committed to protecting your protected health information (PHI)
                in accordance with the Health Insurance Portability and Accountability Act (HIPAA).
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>We maintain strict administrative, physical, and technical safeguards</li>
                <li>Only authorized personnel have access to your health information</li>
                <li>All staff receive regular HIPAA training</li>
                <li>We use secure, encrypted systems for all patient communications</li>
              </ul>
            </section>

            {/* Information Collection */}
            <section>
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-eyecare-blue mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">Information We Collect</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold mb-2">Health Information:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Medical history and current conditions</li>
                    <li>Eye examination results and diagnoses</li>
                    <li>Treatment plans and prescriptions</li>
                    <li>Insurance and billing information</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Contact Information:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Name, address, phone number, email</li>
                    <li>Emergency contact information</li>
                    <li>Appointment scheduling details</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Website Analytics:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>IP address and browser information</li>
                    <li>Pages visited and time spent on site</li>
                    <li>Referral sources and search terms</li>
                    <li>Device and location information (with consent)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold mb-2">For Treatment:</h3>
                  <p>Providing eye care services, coordinating with other healthcare providers, and maintaining medical records.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">For Payment:</h3>
                  <p>Processing insurance claims, billing for services, and collecting payments.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">For Healthcare Operations:</h3>
                  <p>Quality improvement, staff training, appointment scheduling, and practice management.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">For Communication:</h3>
                  <p>Appointment reminders, treatment follow-ups, and health education (with your consent).</p>
                </div>
              </div>
            </section>

            {/* Information Sharing */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-700 mb-4">We may share your information only in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>With your consent:</strong> When you explicitly authorize us to share information</li>
                <li><strong>For treatment:</strong> With other healthcare providers involved in your care</li>
                <li><strong>For payment:</strong> With insurance companies and billing services</li>
                <li><strong>Legal requirements:</strong> When required by law or court order</li>
                <li><strong>Public health:</strong> For disease prevention or public health activities</li>
                <li><strong>Business associates:</strong> With vendors who help us operate (under strict agreements)</li>
              </ul>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 text-eyecare-blue">Access Your Records</h3>
                  <p className="text-gray-700 text-sm">Request copies of your medical records and health information.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-eyecare-blue">Request Amendments</h3>
                  <p className="text-gray-700 text-sm">Ask us to correct or update your health information.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-eyecare-blue">Restrict Use</h3>
                  <p className="text-gray-700 text-sm">Request limitations on how we use your information.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-eyecare-blue">Confidential Communications</h3>
                  <p className="text-gray-700 text-sm">Ask to receive communications in a specific way or location.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-eyecare-blue">Accounting of Disclosures</h3>
                  <p className="text-gray-700 text-sm">Get a list of when and why we shared your information.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-eyecare-blue">File Complaints</h3>
                  <p className="text-gray-700 text-sm">Report concerns about our privacy practices.</p>
                </div>
              </div>
            </section>

            {/* Website Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Website Privacy</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold mb-2">Cookies and Tracking:</h3>
                  <p>We use cookies to improve your browsing experience and analyze website traffic. You can disable cookies in your browser settings.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Third-Party Services:</h3>
                  <p>Our website uses Google Analytics, Facebook Pixel, and CallRail for analytics and marketing. These services have their own privacy policies.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">SSL Encryption:</h3>
                  <p>All data transmitted through our website is encrypted using SSL technology to protect your information.</p>
                </div>
              </div>
            </section>

            {/* Security Measures */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Security Measures</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-eyecare-blue mb-2">Physical Safeguards</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Locked filing cabinets</li>
                    <li>Secure computer workstations</li>
                    <li>Limited facility access</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-eyecare-blue mb-2">Technical Safeguards</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Data encryption</li>
                    <li>Secure networks</li>
                    <li>Regular backups</li>
                  </ul>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-eyecare-blue mb-2">Administrative Safeguards</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>Staff training</li>
                    <li>Access controls</li>
                    <li>Regular audits</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-eyecare-blue mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">Questions About Privacy</h2>
              </div>
              <p className="text-gray-700 mb-4">
                If you have questions about this privacy policy or wish to exercise your rights, please contact our Privacy Officer:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Privacy Officer:</strong> Dr. Alexander Bonakdar</p>
                <p><strong>Address:</strong> 801 North Tustin Ave #404, Santa Ana, CA 92705</p>
                <p><strong>Phone:</strong> (714) 942-4111</p>
                <p><strong>Email:</strong> privacy@eyecarecenteroc.com</p>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded">
                <p className="text-sm text-yellow-800">
                  <strong>Notice:</strong> You also have the right to file a complaint with the U.S. Department of Health and Human Services
                  Office for Civil Rights if you believe your privacy rights have been violated.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;