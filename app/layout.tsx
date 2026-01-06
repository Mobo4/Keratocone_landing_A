
import type { Metadata } from "next";
import { Poppins, Playfair_Display } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import enMessages from '@/messages/en.json';
import "./globals.css";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import GoogleTag from "@/components/GoogleTag";
import TrackingScripts from "@/components/TrackingScripts";
import { Analytics } from "@vercel/analytics/next";
import BusinessSchema from "@/components/BusinessSchema";

export const metadata: Metadata = {
  title: "Keratoconus Vision Center | Dr. Alexander Bonakdar - Keratoconus Specialist",
  description: "Orange County's leading keratoconus specialist and cornea doctor. Advanced scleral lens fitting and non-surgical vision restoration for keratoconus treatment.",
  keywords: ["keratoconus specialist", "keratoconus doctor", "keratoconus treatment", "scleral lenses", "cornea specialist", "keratoconus specialist near me", "best keratoconus doctor", "keratoconus treatment without surgery", "corneal disease specialist", "irregular astigmatism doctor"],
};

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable} antialiased font-sans`}>
        <NextIntlClientProvider locale="en" messages={enMessages}>
          <BusinessSchema />
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
