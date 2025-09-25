import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  structuredData?: object;
  canonical?: string;
  noindex?: boolean;
  image?: string;
  type?: 'website' | 'article' | 'organization';
  locale?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  structuredData,
  canonical,
  noindex = false,
  image = "https://eyecarecenteroc.com/og-image.jpg",
  type = 'website',
  locale = 'en_US'
}) => {
  const location = useLocation();
  const currentUrl = `https://eyecarecenteroc.com${location.pathname}`;
  const canonicalUrl = canonical || currentUrl;

  // Enhanced title with brand
  const fullTitle = title.includes('Eyecare Center') ? title : `${title} | Eyecare Center of Orange County`;

  // Business JSON-LD schema
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness", "Optometrist"],
    "name": "Eyecare Center of Orange County",
    "alternateName": "Dr. Alexander Bonakdar Eye Care",
    "description": "Leading eye care center in Orange County specializing in keratoconus, dry eye treatment, comprehensive eye exams, and advanced vision solutions.",
    "url": "https://eyecarecenteroc.com",
    "telephone": "+1-714-942-4111",
    "email": "eyecarecenteroc@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "801 North Tustin Ave #404",
      "addressLocality": "Santa Ana",
      "addressRegion": "CA",
      "postalCode": "92705",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.7455",
      "longitude": "-117.8677"
    },
    "openingHours": [
      "Mo-Th 09:00-18:00",
      "Fr 09:00-17:00",
      "Sa 09:00-14:00"
    ],
    "founder": {
      "@type": "Person",
      "name": "Dr. Alexander Bonakdar",
      "jobTitle": "Doctor of Optometry",
      "description": "Board-certified optometrist specializing in keratoconus treatment, dry eye therapy, and comprehensive eye care."
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Santa Ana",
        "addressRegion": "CA"
      },
      {
        "@type": "City",
        "name": "Irvine",
        "addressRegion": "CA"
      },
      {
        "@type": "City",
        "name": "Newport Beach",
        "addressRegion": "CA"
      },
      {
        "@type": "City",
        "name": "Costa Mesa",
        "addressRegion": "CA"
      },
      {
        "@type": "City",
        "name": "Tustin",
        "addressRegion": "CA"
      },
      {
        "@type": "City",
        "name": "Anaheim",
        "addressRegion": "CA"
      },
      {
        "@type": "City",
        "name": "Orange",
        "addressRegion": "CA"
      }
    ],
    "paymentAccepted": "Cash, Check, Credit Card, Insurance",
    "currenciesAccepted": "USD",
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Eye Care Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Comprehensive Eye Exams",
            "description": "Complete eye health evaluation including vision testing, disease screening, and prescription updates."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Keratoconus Treatment",
            "description": "Specialized treatment for keratoconus including scleral lenses, cross-linking referrals, and advanced management."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dry Eye Treatment",
            "description": "Advanced dry eye therapy including IPL treatment, prescription medications, and lifestyle management."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Contact Lens Fitting",
            "description": "Specialized contact lens fittings including scleral lenses, orthokeratology, and multifocal contacts."
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "image": [
      "https://eyecarecenteroc.com/images/clinic-exterior.jpg",
      "https://eyecarecenteroc.com/images/dr-bonakdar.jpg",
      "https://eyecarecenteroc.com/images/exam-room.jpg"
    ],
    "logo": "https://eyecarecenteroc.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/eyecarecenteroc",
      "https://www.instagram.com/eyecarecenteroc",
      "https://www.youtube.com/@eyecarecenteroc"
    ]
  };

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="Eyecare Center of Orange County" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="author" content="Dr. Alexander Bonakdar" />
      <meta name="geo.region" content="US-CA" />
      <meta name="geo.placename" content="Santa Ana, Orange County" />
      <meta name="geo.position" content="33.7455;-117.8677" />
      <meta name="ICBM" content="33.7455, -117.8677" />

      {/* Business specific */}
      <meta name="business:contact_data:street_address" content="801 North Tustin Ave #404" />
      <meta name="business:contact_data:locality" content="Santa Ana" />
      <meta name="business:contact_data:region" content="CA" />
      <meta name="business:contact_data:postal_code" content="92705" />
      <meta name="business:contact_data:country_name" content="US" />
      <meta name="business:contact_data:phone_number" content="+1-714-942-4111" />

      {/* Google Analytics 4 */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX', {
            page_title: '${fullTitle}',
            page_location: '${canonicalUrl}',
            content_group1: '${type}',
            content_group2: 'Eye Care',
            send_page_view: true
          });
        `}
      </script>

      {/* Facebook Pixel */}
      <script>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'XXXXXXXXXXXXXXX');
          fbq('track', 'PageView');
        `}
      </script>

      {/* Google Tag Manager */}
      <script>
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-XXXXXXX');
        `}
      </script>

      {/* CallRail tracking */}
      <script>
        {`
          var _cr = _cr || [];
          _cr.push(['setDataLayerName', 'dataLayer']);
          (function(){
            var s = document.createElement('script');
            s.src = 'https://d2zu2dctt2m7mv.cloudfront.net/XXXXXXXXXXX.js';
            s.async = true;
            document.head.appendChild(s);
          })();
        `}
      </script>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>

      {/* Custom structured data if provided */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Preconnect to improve performance */}
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://connect.facebook.net" />
      <link rel="preconnect" href="https://d2zu2dctt2m7mv.cloudfront.net" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />

      {/* PWA and mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#6B46C1" />

      {/* RSS and sitemap */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

      {/* Local business verification */}
      <meta name="google-site-verification" content="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" />
      <meta name="bing-site-verification" content="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" />
    </Helmet>
  );
};

export default SEO;