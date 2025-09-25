import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Scale, AlertTriangle, FileText, Clock } from 'lucide-react';

const TermsOfServicePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service - Eyecare Center of Orange County",
    "description": "Terms of service and conditions for using Eyecare Center of Orange County website and services.",
    "publisher": {
      "@type": "Organization",
      "name": "Eyecare Center of Orange County"
    }
  };

  return (
    <>
      <SEO
        title="Terms of Service | Eyecare Center of Orange County"
        description="Read our terms of service and conditions for using Eyecare Center of Orange County website and medical services."
        structuredData={structuredData}
      />
      <Header />

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <Scale className="w-16 h-16 text-eyecare-blue mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-600">Terms and conditions for using our website and services</p>
            <p className="text-sm text-gray-500 mt-2">Last Updated: September 2025</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            {/* Agreement */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using the Eyecare Center of Orange County website ("Website") and services,
                you agree to be bound by these Terms of Service and all applicable laws and regulations.
                If you do not agree with any of these terms, you are prohibited from using this site.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <p className="text-blue-800 text-sm">
                  <strong>Important:</strong> These terms apply to all visitors, users, and others who access or use our services.
                </p>
              </div>
            </section>

            {/* Medical Services */}
            <section>
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-eyecare-blue mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">Medical Services Disclaimer</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <div className="bg-red-50 border border-red-200 rounded p-4">
                  <h3 className="font-semibold text-red-800 mb-2">Medical Emergency Notice</h3>
                  <p className="text-red-700 text-sm">
                    This website is not intended for medical emergencies. If you are experiencing a medical emergency,
                    please call 911 or go to your nearest emergency room immediately.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">No Doctor-Patient Relationship</h3>
                  <p>
                    Information provided on this website does not establish a doctor-patient relationship.
                    A doctor-patient relationship is only established through an in-person consultation and examination.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Information Purposes Only</h3>
                  <p>
                    Content on this website is for informational purposes only and should not be considered
                    medical advice, diagnosis, or treatment recommendations. Always consult with a qualified
                    healthcare provider for personalized medical advice.
                  </p>
                </div>
              </div>
            </section>

            {/* Website Use */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Website Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 text-eyecare-blue">Permitted Uses</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Viewing information about our services and practice</li>
                    <li>Scheduling appointments through authorized channels</li>
                    <li>Accessing patient education materials</li>
                    <li>Contacting our office for legitimate business purposes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-red-600">Prohibited Uses</h3>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Using the site for any unlawful purpose or activity</li>
                    <li>Attempting to gain unauthorized access to our systems</li>
                    <li>Transmitting viruses, malware, or other harmful code</li>
                    <li>Scraping, harvesting, or collecting user data</li>
                    <li>Impersonating our practice or staff members</li>
                    <li>Posting spam, advertisements, or unauthorized content</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Appointments and Services */}
            <section>
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-eyecare-blue mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">Appointments and Services</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold mb-2">Appointment Scheduling</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Online appointment requests are subject to confirmation by our office</li>
                    <li>We reserve the right to reschedule or cancel appointments if necessary</li>
                    <li>Patients are responsible for arriving on time for scheduled appointments</li>
                    <li>Late arrivals may result in rescheduling or shortened appointment time</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Cancellation Policy</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Appointments must be cancelled at least 24 hours in advance</li>
                    <li>Late cancellations or no-shows may be subject to fees</li>
                    <li>Emergency situations will be considered on a case-by-case basis</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Payment Terms</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Payment is due at the time of service unless other arrangements are made</li>
                    <li>We accept cash, checks, credit cards, and most insurance plans</li>
                    <li>Patients are responsible for understanding their insurance benefits</li>
                    <li>Outstanding balances may be sent to collections after 90 days</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  All content on this website, including text, images, logos, and design elements,
                  is the property of Eyecare Center of Orange County or its licensors and is
                  protected by copyright and trademark laws.
                </p>
                <div>
                  <h3 className="font-semibold mb-2">Use Restrictions</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Content may not be reproduced without written permission</li>
                    <li>Commercial use of any content is strictly prohibited</li>
                    <li>Our trademarks and logos may not be used without authorization</li>
                    <li>User-generated content becomes our property upon submission</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Privacy and Data */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy and Data Protection</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Your privacy is important to us. Our use of your personal information is governed
                  by our Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                <div>
                  <h3 className="font-semibold mb-2">Data Collection</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>We collect information necessary to provide our services</li>
                    <li>Website analytics help us improve user experience</li>
                    <li>We use cookies and similar technologies for functionality</li>
                    <li>Third-party services may collect data subject to their policies</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded p-4">
                  <p className="text-purple-800 text-sm">
                    <strong>HIPAA Protected Information:</strong> Health information is protected under HIPAA
                    and handled according to federal regulations and our Privacy Policy.
                  </p>
                </div>
              </div>
            </section>

            {/* Disclaimers and Limitations */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimers and Limitations</h2>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h3 className="font-semibold mb-2">Website Availability</h3>
                  <p>
                    We strive to maintain website availability but cannot guarantee uninterrupted access.
                    We reserve the right to modify, suspend, or discontinue any part of the website
                    at any time without notice.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Information Accuracy</h3>
                  <p>
                    While we strive for accuracy, we make no warranties regarding the completeness,
                    accuracy, or timeliness of information on this website. Information may be
                    updated without notice.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Limitation of Liability</h3>
                  <p>
                    To the fullest extent permitted by law, Eyecare Center of Orange County shall
                    not be liable for any indirect, incidental, special, or consequential damages
                    arising from use of this website or our services.
                  </p>
                </div>
              </div>
            </section>

            {/* Third-Party Links */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Links and Services</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our website may contain links to third-party websites or services that are not
                  owned or controlled by Eyecare Center of Orange County.
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>We have no control over third-party content or privacy practices</li>
                  <li>We do not endorse or assume responsibility for third-party services</li>
                  <li>Use of third-party services is at your own risk</li>
                  <li>Review third-party terms and privacy policies before use</li>
                </ul>
              </div>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modifications to Terms</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We reserve the right to modify these Terms of Service at any time. Changes will
                  be effective immediately upon posting on this website. Your continued use of
                  our services after changes are posted constitutes acceptance of the new terms.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>Stay Informed:</strong> We recommend reviewing these terms periodically
                    to stay informed of any updates or changes.
                  </p>
                </div>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700">
                These Terms of Service are governed by the laws of the State of California,
                without regard to conflict of law principles. Any disputes will be resolved
                in the courts of Orange County, California.
              </p>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-eyecare-blue mr-3" />
                <h2 className="text-2xl font-semibold text-gray-900">Contact Information</h2>
              </div>
              <p className="text-gray-700 mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Eyecare Center of Orange County</strong></p>
                <p><strong>Address:</strong> 801 North Tustin Ave #404, Santa Ana, CA 92705</p>
                <p><strong>Phone:</strong> (714) 942-4111</p>
                <p><strong>Email:</strong> info@eyecarecenteroc.com</p>
                <p><strong>Website:</strong> www.eyecarecenteroc.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TermsOfServicePage;