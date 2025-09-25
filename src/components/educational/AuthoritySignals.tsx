/**
 * FILE: AuthoritySignals.tsx  
 * VERSION: 2.0.0
 * PURPOSE: Component to display Dr. Bonakdar's expertise and authority signals for E-A-T optimization
 * 
 * AUTHOR: Claude
 * CREATED: 2025-01-16
 * 
 * CONTEXT:
 * - Enhances content credibility with expert credentials
 * - Supports Google's E-A-T (Expertise, Authority, Trustworthiness) factors
 * - Displays professional qualifications and specializations
 * 
 * DEPENDENCIES:
 * - Lucide icons for visual elements
 * - React components for structure
 * 
 * ARCHITECTURE NOTES:
 * - Modular design for different content types
 * - Schema markup for author information
 * - Responsive design for all devices
 * 
 * SEO BENEFITS:
 * - Author credibility signals
 * - Medical expertise indicators  
 * - Trust and authority building
 */

import React from 'react';
import { Award, GraduationCap, MapPin, Clock, Star, Users } from 'lucide-react';

interface AuthoritySignalsProps {
  expertise?: string;
  insights?: string;
  showFullProfile?: boolean;
  compact?: boolean;
}

const AuthoritySignals: React.FC<AuthoritySignalsProps> = ({
  expertise,
  insights,
  showFullProfile = false,
  compact = false
}) => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Doctor of Optometry",
      detail: "UC Berkeley School of Optometry",
      color: "text-blue-600"
    },
    {
      icon: Award,
      title: "Specialty Training",
      detail: "Keratoconus & Specialty Contact Lenses",
      color: "text-green-600"
    },
    {
      icon: MapPin,
      title: "Orange County Practice",
      detail: "Serving patients since 2010",
      color: "text-purple-600"
    },
    {
      icon: Users,
      title: "Patient Care",
      detail: "5,000+ patients treated",
      color: "text-orange-600"
    }
  ];

  const specializations = [
    "Keratoconus Management",
    "Dry Eye Treatment", 
    "Specialty Contact Lenses",
    "Comprehensive Eye Exams",
    "LASIK Consultations",
    "Myopia Control"
  ];

  if (compact) {
    return (
      <div className="flex items-center space-x-4 p-4 bg-blue-50 border border-blue-200 rounded-lg mb-6">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Award className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Expert Medical Opinion</h3>
          <p className="text-sm text-gray-600">
            Content reviewed by Dr. Alexander Bonakdar, Doctor of Optometry
          </p>
        </div>
      </div>
    );
  }

  return (
    <section 
      className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border border-blue-100"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
        {/* Author Photo and Basic Info */}
        <div className="flex-shrink-0 mb-4 md:mb-0">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            DB
          </div>
        </div>

        <div className="flex-grow">
          {/* Author Name and Title */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900" itemProp="name">
              Dr. Alexander Bonakdar
            </h3>
            <p className="text-blue-600 font-medium" itemProp="jobTitle">
              Doctor of Optometry
            </p>
            <div className="flex items-center mt-1">
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
              <span className="text-sm text-gray-600">4.9/5 rating • 150+ reviews</span>
            </div>
          </div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            {credentials.map((credential, index) => {
              const IconComponent = credential.icon;
              return (
                <div key={index} className="flex items-center space-x-2">
                  <IconComponent className={`w-4 h-4 ${credential.color}`} />
                  <div>
                    <span className="font-medium text-gray-900 text-sm">{credential.title}</span>
                    <p className="text-xs text-gray-600">{credential.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Expertise Area */}
          {expertise && (
            <div className="mb-4">
              <h4 className="font-semibold text-gray-900 mb-2">Specialty Focus:</h4>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm">
                <Award className="w-3 h-3 mr-1" />
                {expertise}
              </div>
            </div>
          )}

          {/* Professional Insights */}
          {insights && (
            <div className="bg-white rounded-lg p-4 border border-blue-200 mb-4">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <Clock className="w-4 h-4 text-blue-600 mr-2" />
                Expert Insight
              </h4>
              <p className="text-gray-700 text-sm italic">"{insights}"</p>
            </div>
          )}

          {/* Full Profile Details */}
          {showFullProfile && (
            <div className="border-t border-blue-200 pt-4">
              <h4 className="font-semibold text-gray-900 mb-3">Areas of Expertise:</h4>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-white rounded-md text-xs text-gray-700 border border-blue-200"
                  >
                    {spec}
                  </span>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-blue-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h5 className="font-medium text-gray-900">Education</h5>
                    <p className="text-gray-600">UC Berkeley School of Optometry</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">Experience</h5>
                    <p className="text-gray-600">15+ years in practice</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">Location</h5>
                    <p className="text-gray-600">Santa Ana, CA</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact CTA */}
          <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-blue-200">
            <a
              href="/contact"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              Schedule Consultation
            </a>
            <a
              href="tel:+1-714-558-1182"
              className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 text-sm font-medium rounded-md hover:bg-blue-50 transition-colors duration-200"
            >
              Call (714) 558-1182
            </a>
          </div>
        </div>
      </div>

      {/* Hidden Schema Markup */}
      <div style={{ display: 'none' }}>
        <span itemProp="name">Dr. Alexander Bonakdar</span>
        <span itemProp="jobTitle">Doctor of Optometry</span>
        <span itemProp="worksFor">Eyecare Center of Orange County</span>
        <span itemProp="alumniOf">UC Berkeley School of Optometry</span>
        <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="addressLocality">Santa Ana</span>
          <span itemProp="addressRegion">CA</span>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySignals;