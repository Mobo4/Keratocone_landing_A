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
  verification: {
    google: "F5X39sjVBm4JdkKpMca-KHFHorfanDdj9v80GLYhtA8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Keratoconus Vision Center",
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
    "url": "https://keratocones.com",
    "priceRange": "$$$",
    "medicalSpecialty": "Optometry"
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
