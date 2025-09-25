import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SEO from '@/components/SEO';
import GeoAccessService from '@/services/geoAccessService';
import { useAnalytics } from '@/hooks/useAnalytics';

const OutOfServiceArea = () => {
  const [userLocation, setUserLocation] = useState<{
    city: string;
    region: string;
    country: string;
  }>({ city: '', region: '', country: '' });
  
  const { trackEvent } = useAnalytics();

  useEffect(() => {
    const loadLocation = async () => {
      const geoService = GeoAccessService.getInstance();
      const { location } = await geoService.checkAccess();
      
      setUserLocation({
        city: location.city,
        region: location.region,
        country: location.country
      });

      // Track page view with location
      trackEvent('out_of_service_area_view', {
        city: location.city,
        region: location.region,
        country: location.country
      });
    };

    loadLocation();
  }, [trackEvent]);

  const handleContactClick = () => {
    trackEvent('out_of_area_contact_attempt');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <SEO 
        title="Service Area Notice | Eyecare Center of Orange County"
        description="We currently serve patients in Southern California. Learn about our service area and how to contact us."
        keywords="service area, Southern California, Orange County, eye care, optometrist"
        noIndex={true} // Don't index this page
      />

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Globe className="h-8 w-8 text-eyecare-blue" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Eyecare Center of Orange County
                </h1>
                <p className="text-sm text-gray-600">Service Area Information</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Alert Card */}
          <Card className="mb-8 border-orange-200 bg-orange-50">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <AlertCircle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Outside Our Service Area
                  </h2>
                  <p className="text-gray-700">
                    We've detected that you're accessing our site from{' '}
                    <span className="font-semibold">
                      {userLocation.city && userLocation.city !== 'Unknown' 
                        ? `${userLocation.city}, ` 
                        : ''}
                      {userLocation.region && userLocation.region !== 'Unknown'
                        ? `${userLocation.region}, `
                        : ''}
                      {userLocation.country || 'your location'}
                    </span>
                    .
                  </p>
                  <p className="text-gray-700 mt-2">
                    We currently provide in-person eye care services exclusively to patients in 
                    <span className="font-semibold"> Southern California</span>.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Area Map */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-eyecare-blue" />
                Our Service Area
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>We proudly serve patients throughout Southern California, including:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
                  {[
                    'Orange County',
                    'Los Angeles County',
                    'San Diego County',
                    'Riverside County',
                    'San Bernardino County',
                    'Ventura County'
                  ].map((county) => (
                    <div key={county} className="flex items-center">
                      <div className="w-2 h-2 bg-eyecare-blue rounded-full mr-2" />
                      <span className="text-sm">{county}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <p className="text-gray-700 mb-4">
                While we cannot provide in-person services outside Southern California, 
                you're welcome to contact us for:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-eyecare-blue mr-2">•</span>
                  Referrals to eye care providers in your area
                </li>
                <li className="flex items-start">
                  <span className="text-eyecare-blue mr-2">•</span>
                  General eye health information
                </li>
                <li className="flex items-start">
                  <span className="text-eyecare-blue mr-2">•</span>
                  Questions about specific eye conditions
                </li>
              </ul>
              
              <div className="space-y-3">
                <a 
                  href="tel:714-558-1182" 
                  className="flex items-center text-eyecare-blue hover:text-eyecare-dark-blue"
                  onClick={handleContactClick}
                >
                  <Phone className="h-5 w-5 mr-3" />
                  <span>(714) 558-1182</span>
                </a>
                <a 
                  href="mailto:eyecarecenteroc@gmail.com" 
                  className="flex items-center text-eyecare-blue hover:text-eyecare-dark-blue"
                  onClick={handleContactClick}
                >
                  <Mail className="h-5 w-5 mr-3" />
                  <span>eyecarecenteroc@gmail.com</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Alternative Resources */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Finding Eye Care in Your Area</h3>
              <p className="text-gray-700 mb-4">
                To find a qualified eye care provider in your area, we recommend:
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">American Optometric Association</h4>
                  <p className="text-sm text-gray-600">
                    Find a doctor tool to locate optometrists near you
                  </p>
                  <a 
                    href="https://www.aoa.org/healthy-eyes/find-a-doctor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-eyecare-blue hover:text-eyecare-dark-blue text-sm"
                  >
                    Visit AOA Find a Doctor →
                  </a>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">American Academy of Ophthalmology</h4>
                  <p className="text-sm text-gray-600">
                    Find an ophthalmologist in your area
                  </p>
                  <a 
                    href="https://www.aao.org/find-an-ophthalmologist"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-eyecare-blue hover:text-eyecare-dark-blue text-sm"
                  >
                    Visit AAO Find an Ophthalmologist →
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Back to Homepage (for testing) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-8 text-center">
              <Link to="/?bypass-geo=true">
                <Button variant="outline">
                  Continue to Site (Development Only)
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-600">
            <p>© 2024 Eyecare Center of Orange County. All rights reserved.</p>
            <p className="mt-2 text-sm">
              801 North Tustin Ave #404, Santa Ana, CA 92705
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OutOfServiceArea;