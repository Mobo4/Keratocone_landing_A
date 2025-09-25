
import React, { useEffect, useState } from 'react';
import SecurityHeaders from '@/utils/securityHeaders';

interface GeographicAccessControlProps {
  children: React.ReactNode;
}

const GeographicAccessControl: React.FC<GeographicAccessControlProps> = ({ children }) => {
  const [isCaliforniaUser, setIsCaliforniaUser] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize security headers
    SecurityHeaders.addSecurityHeaders();
    SecurityHeaders.enforceHTTPS();
    
    // Validate we're on expected domains
    const allowedDomains = ['eyecarecenteroc.com', 'lovableproject.com', 'localhost'];
    if (!SecurityHeaders.validateDomain(allowedDomains)) {
      console.warn('Security Warning: Unexpected domain detected');
    }

    const checkGeolocation = async () => {
      try {
        // Add timeout to prevent hanging requests
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);
        
        const response = await fetch('https://ipapi.co/json/', {
          signal: controller.signal,
          headers: {
            'Accept': 'application/json',
          }
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        
        // Log access attempt for security monitoring (development only)
        if (process.env.NODE_ENV === 'development') {
          console.log('Geolocation check:', {
            region: data.region_code,
            country: data.country_code,
            timestamp: new Date().toISOString()
          });
        }
        
        // Check if user is in California - be more strict
        const isInCalifornia = data.country_code === 'US' && 
          (data.region_code === 'CA' || data.region === 'California');
        
        if (isInCalifornia) {
          setIsCaliforniaUser(true);
        } else {
          // Default to blocking access - more secure approach
          setIsCaliforniaUser(false);
          // Redirect to non-local page
          window.location.href = 'https://eyecare-general.com';
          return;
        }
      } catch (error) {
        console.error('Geolocation check failed:', error);
        // More secure default: block access if geolocation fails
        setIsCaliforniaUser(false);
        // Still redirect to maintain security
        window.location.href = 'https://eyecare-general.com';
      } finally {
        setIsLoading(false);
      }
    };

    checkGeolocation();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-eyecare-blue mx-auto mb-4"></div>
          <p className="text-gray-600">Verifying access...</p>
        </div>
      </div>
    );
  }

  if (!isCaliforniaUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md mx-auto p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Service Area Limited
          </h1>
          <p className="text-gray-600 mb-6">
            Our services are currently available only to California residents. 
            You are being redirected to our general information page.
          </p>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-eyecare-blue mx-auto"></div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default GeographicAccessControl;
