import type { Metadata } from "next";
import { Poppins, Playfair_Display } from 'next/font/google';
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";
import GoogleTag from "@/components/GoogleTag";

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

export const metadata: Metadata = {
  title: "National Keratoconus Center of Excellence | Dr. Alexander Bonakdar",
  description: "Specialized scleral lens treatment for keratoconus in Santa Ana, CA. Trusted referral center for CHOC and UCI Medical Center.",
  keywords: "Keratoconus, Scleral Lenses, Dr. Alexander Bonakdar, Keratoconus Specialist, Santa Ana, Orange County",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Keratoconus Vision Center | Dr. Alexander Bonakdar",
    "image": "https://keratocones.com/images/drbonakdar.webp",
    "telephone": "(714) 558-0641",
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
      }
    ],
    "sameAs": [
      "https://www.facebook.com/eyecarecenteroc",
      "https://www.instagram.com/eyecarecenteroc",
      "https://www.yelp.com/biz/alexander-bonakdar-od-santa-ana"
    ],
    "url": "https://keratocones.com",
    "priceRange": "$$$",
    "medicalSpecialty": ["Optometry", "Keratoconus Treatment", "Scleral Lenses"]
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
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
