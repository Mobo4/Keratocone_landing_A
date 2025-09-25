import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// Global type declarations for tracking scripts
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer: any[];
    CallRail?: {
      startSwap: () => void;
      startFormTracking: (config: any) => void;
      track: (event: string, data: any) => void;
    };
  }
}

interface TrackingProps {
  pageTitle?: string;
  pageDescription?: string;
  pageImage?: string;
  pageUrl?: string;
}

const Tracking: React.FC<TrackingProps> = ({
  pageTitle = "Dr. Bonakdar - Expert Eye Care in Orange County",
  pageDescription = "Dr. Kamran Bonakdar provides comprehensive eye care services including keratoconus treatment, dry eye therapy, and scleral lens fitting in Santa Ana and Orange County.",
  pageImage = "https://eyecarecenteroc.com/images/dr-bonakdar-office.jpg",
  pageUrl = "https://eyecarecenteroc.com"
}) => {
  useEffect(() => {
    // Google Tag Manager
    const gtmScript = document.createElement('script');
    gtmScript.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-K4XG7ZJ4'); // www.drbonakdar.net GTM Container
    `;
    document.head.appendChild(gtmScript);

    // CallRail Tracking - ACTIVE
    const callRailScript = document.createElement('script');
    callRailScript.src = '//cdn.callrail.com/companies/453122914/99c405dbdf8bc7511fbb/12/swap.js';
    callRailScript.type = 'text/javascript';
    callRailScript.async = true;
    document.body.appendChild(callRailScript); // Note: CallRail recommends before </body> tag

    // CallRail Form Tracking
    const callRailFormScript = document.createElement('script');
    callRailFormScript.innerHTML = `
      window.addEventListener('DOMContentLoaded', function() {
        if (typeof CallRail !== 'undefined') {
          CallRail.startSwap();
          CallRail.startFormTracking({
            selector: 'form',
            required_fields: ['phone', 'email'],
            form_capture: true
          });
        }
      });
    `;
    document.head.appendChild(callRailFormScript);

    // Facebook Pixel
    const fbPixelScript = document.createElement('script');
    fbPixelScript.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '395306154557054'); // Eyecarecenter Facebook Pixel
      fbq('track', 'PageView');
    `;
    document.head.appendChild(fbPixelScript);

    // Google Ads Conversion Tracking
    const googleAdsScript = document.createElement('script');
    googleAdsScript.async = true;
    googleAdsScript.src = "https://www.googletagmanager.com/gtag/js?id=AW-1068394845"; // ECCOC Google Ads
    document.head.appendChild(googleAdsScript);

    const googleAdsConfig = document.createElement('script');
    googleAdsConfig.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-1068394845'); // ECCOC Google Ads
    `;
    document.head.appendChild(googleAdsConfig);

    // Microsoft Clarity
    const clarityScript = document.createElement('script');
    clarityScript.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "tbq0ecz52d"); // Microsoft Clarity Active
    `;
    document.head.appendChild(clarityScript);

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <Helmet>
      {/* Open Graph Tags for Social Media */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:site_name" content="Dr. Bonakdar Eye Care" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      <meta name="twitter:site" content="@DrBonakdarEye" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={pageUrl} />
      
      {/* Structured Data for Rich Results */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalBusiness",
          "name": "Dr. Kamran Bonakdar - Eye Care Center",
          "image": pageImage,
          "url": pageUrl,
          "telephone": "(949) 658-2372",
          "priceRange": "$$",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "801 North Tustin Avenue, Suite 404",
            "addressLocality": "Santa Ana",
            "addressRegion": "CA",
            "postalCode": "92705",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 33.7454,
            "longitude": -117.8376
          },
          "openingHoursSpecification": [{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "17:00"
          }],
          "sameAs": [
            "https://www.facebook.com/DrBonakdarEyeCare",
            "https://www.instagram.com/drbonakdar_eyecare",
            "https://www.linkedin.com/company/bonakdar-eye-care",
            "https://www.youtube.com/@DrBonakdarEyeCare"
          ],
          "medicalSpecialty": [
            "Optometry",
            "Keratoconus Treatment",
            "Dry Eye Therapy",
            "Scleral Lens Fitting"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Eye Care Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Comprehensive Eye Exam"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Keratoconus Treatment"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Scleral Lens Fitting"
                }
              }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default Tracking;

// Conversion tracking helper functions with proper TypeScript typing
export const trackPhoneCall = (phoneNumber: string, source: string): void => {
  // Google Analytics Event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_call', {
      event_category: 'engagement',
      event_label: source,
      value: phoneNumber
    });
  }

  // Facebook Pixel Event
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Contact', {
      content_category: 'phone_call',
      content_name: source
    });
  }

  // CallRail Event
  if (typeof window !== 'undefined' && window.CallRail) {
    window.CallRail.track('phone_call', {
      source: source,
      phone: phoneNumber
    });
  }
};

export const trackFormSubmission = (formName: string, formData?: Record<string, any>): void => {
  // Google Analytics Event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'form_submission', {
      event_category: 'engagement',
      event_label: formName,
      value: 1
    });
  }

  // Facebook Pixel Event
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', {
      content_name: formName,
      content_category: 'form_submission'
    });
  }

  // Google Ads Conversion - using the actual ECCOC Google Ads ID
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-1068394845/contact-conversion' // ECCOC Google Ads conversion
    });
  }
};

export const trackAppointmentBooking = (appointmentType: string, location: string): void => {
  // Google Analytics Event
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'appointment_scheduled', {
      event_category: 'conversion',
      event_label: appointmentType,
      event_value: 100, // Estimated value
      location: location
    });
  }

  // Facebook Pixel Event
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Schedule', {
      content_name: appointmentType,
      location: location,
      value: 100,
      currency: 'USD'
    });
  }

  // CallRail Event
  if (typeof window !== 'undefined' && window.CallRail) {
    window.CallRail.track('appointment_scheduled', {
      type: appointmentType,
      location: location
    });
  }

  // Google Ads Conversion for appointments
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-1068394845/appointment-conversion' // ECCOC Google Ads appointment conversion
    });
  }
};