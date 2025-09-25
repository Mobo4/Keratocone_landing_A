import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GeoAccessService from '@/services/geoAccessService';
import { Loader2 } from 'lucide-react';

interface GeoGuardProps {
  children: React.ReactNode;
}

const GeoGuard: React.FC<GeoGuardProps> = ({ children }) => {
  const [isChecking, setIsChecking] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkGeoAccess = async () => {
      // Skip geo check for out-of-service-area page
      if (location.pathname === '/out-of-service-area') {
        setIsChecking(false);
        setIsAllowed(true);
        return;
      }

      // Bypass in development and when embedded in a preview iframe (Lovable)
      // Also bypass for localhost and Vercel preview domains
      const hostname = window.location.hostname;
      const isVercelPreview = hostname.includes('vercel.app') || hostname.includes('vercel.dev');
      const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';
      const isLovablePreview = window.self !== window.top;
      const isDevelopment = import.meta.env.DEV;

      if (isDevelopment || isLovablePreview || isLocalhost || isVercelPreview) {
        console.log('Geo check bypassed:', {
          isDevelopment,
          isLovablePreview,
          isLocalhost,
          isVercelPreview,
          hostname
        });
        setIsAllowed(true);
        setIsChecking(false);
        return;
      }

      // Check for bypass parameter (development only)
      const urlParams = new URLSearchParams(location.search);
      const bypassGeo = urlParams.get('bypass-geo') === 'true';
      
      if (bypassGeo && import.meta.env.DEV) {
        localStorage.setItem('geo-bypass', 'true');
      }

      // Check if geo bypass is active (development only)
      const hasGeoBypass = localStorage.getItem('geo-bypass') === 'true';
      if (hasGeoBypass && import.meta.env.DEV) {
        setIsAllowed(true);
        setIsChecking(false);
        return;
      }

      try {
        const geoService = GeoAccessService.getInstance();
        const { allowed, location: userLocation, reason } = await geoService.checkAccess();

        if (!allowed) {
          console.log('Access denied:', reason, userLocation);
          // Store the attempted URL for analytics
          sessionStorage.setItem('geo-blocked-url', location.pathname);
          navigate('/out-of-service-area', { replace: true });
        } else {
          setIsAllowed(true);
        }
      } catch (error) {
        console.error('Error checking geo access:', error);
        // On error, allow access (fail open)
        setIsAllowed(true);
      } finally {
        setIsChecking(false);
      }
    };

    checkGeoAccess();
  }, [navigate, location]);

  // Show loading state while checking
  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-eyecare-blue mx-auto mb-4" />
          <p className="text-gray-600">Verifying your location...</p>
          <p className="text-sm text-gray-400 mt-2">
            Testing on Vercel? Geo restrictions are automatically bypassed for preview domains.
          </p>
        </div>
      </div>
    );
  }

  // Only render children if allowed
  return isAllowed ? <>{children}</> : null;
};

export default GeoGuard;
