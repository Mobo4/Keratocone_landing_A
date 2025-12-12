
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keratoconus Vision Center | Dr. Alexander Bonakdar",
  description: "Orange County's leading keratoconus specialist. Advanced scleral lens fitting and non-surgical vision restoration.",
  keywords: ["medical doctors", "keratoconus treatment", "eye disease", "clinical training", "scleral lenses", "diagnosis", "optometrist specialist", "corneal disease"],
};
import { Poppins, Playfair_Display } from 'next/font/google';
import "./globals.css";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import GoogleTag from "@/components/GoogleTag";
import TrackingScripts from "@/components/TrackingScripts";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

// ... (existing imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema: "Specialty Site" Configuration (Strictly following Prompt 2)
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://keratocones.com/#organization",
    "name": "Keratoconus Specialist Orange County",
    "alternateName": "Keratoconus Vision Center",
    "description": "Orange County's leading keratoconus treatment center. Expert scleral lens fitting, corneal cross-linking consultations, and specialized care for keratoconus patients.",
    "url": "https://keratocones.com",
    "logo": "https://keratocones.com/images/icon.png",
    "image": "https://keratocones.com/images/drbonakdar.webp",
    "telephone": "+1-714-558-0641",
    "email": "info@eyecarecenteroc.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "801 N Tustin Ave #401",
      "addressLocality": "Santa Ana",
      "addressRegion": "CA",
      "postalCode": "92705",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "33.7599",
      "longitude": "-117.8357"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "medicalSpecialty": [
      "Optometry",
      "Cornea and External Diseases"
    ],
    "availableService": [
      { "@type": "MedicalProcedure", "name": "Keratoconus Diagnosis" },
      { "@type": "MedicalProcedure", "name": "Keratoconus Treatment" },
      { "@type": "MedicalProcedure", "name": "Scleral Lens Fitting" },
      { "@type": "MedicalProcedure", "name": "Corneal Cross-Linking Consultation" },
      { "@type": "MedicalProcedure", "name": "Corneal Topography" },
      { "@type": "MedicalProcedure", "name": "Emergency Keratoconus Care" }
    ],
    "areaServed": [
      { "@type": "City", "name": "Irvine" },
      { "@type": "City", "name": "Newport Beach" },
      { "@type": "City", "name": "Costa Mesa" },
      { "@type": "City", "name": "Tustin" },
      { "@type": "City", "name": "Santa Ana" },
      { "@type": "City", "name": "Orange" },
      { "@type": "county", "name": "Orange County, California" }
    ],
    "paymentAccepted": ["Cash", "Credit Card", "VSP", "Medical Insurance", "CareCredit"],
    "currenciesAccepted": "USD",
    "sameAs": [
      "https://www.facebook.com/eyecarecenteroc",
      "https://www.instagram.com/eyecarecenteroc",
      "https://www.yelp.com/biz/alexander-bonakdar-od-santa-ana"
    ],
    "parentOrganization": {
      "@type": "MedicalBusiness",
      "name": "Eye Care Center of Orange County",
      "url": "https://eyecarecenteroc.com",
      "@id": "https://eyecarecenteroc.com/#organization"
    }
  };

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${playfair.variable} antialiased font-sans`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <GoogleTag />
        <TrackingScripts />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <ChatWidget />
        <Analytics />
      </body>
    </html>
  );
}
