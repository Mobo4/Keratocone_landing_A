
import type { Metadata } from "next";
import { Poppins, Playfair_Display } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { headers } from 'next/headers';
import enMessages from '@/messages/en.json';
import esMessages from '@/messages/es.json';
import "./globals.css";
import Footer from "@/components/Footer";
import { GoogleTagManager } from '@next/third-parties/google';
import TrackingScripts from "@/components/TrackingScripts";
import { Analytics } from "@vercel/analytics/next";
import BusinessSchema from "@/components/BusinessSchema";
import ChatWidget from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "Keratoconus Specialist Orange County | See Us This Week",
  description: "Why wait 6 months at UCLA/UCI? 2,000+ keratoconus cases treated. Direct specialist access, not residents. Insurance accepted. Call (714) 558-0641",
  keywords: ["keratoconus specialist", "keratoconus doctor", "keratoconus treatment", "scleral lenses", "cornea specialist", "keratoconus specialist near me", "best keratoconus doctor", "keratoconus treatment without surgery", "corneal disease specialist", "irregular astigmatism doctor"],
  other: {
    'geo.region': 'US-CA',
    'geo.placename': 'Santa Ana, California',
    'geo.position': '33.7599;-117.8359',
    'ICBM': '33.7599, -117.8359',
  },
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

const messagesMap = { en: enMessages, es: esMessages } as const;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const locale = (headersList.get('x-locale') as 'en' | 'es') || 'en';
  const messages = messagesMap[locale] || enMessages;

  return (
    <html lang={locale}>
      <GoogleTagManager gtmId="GTM-NS6QTKN" />
      <head>
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        {/* AI assistant / LLM discoverability - AEO */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-friendly site summary" />
        <link rel="alternate" type="text/plain" href="/llms-full.txt" title="LLM-friendly knowledge index" />
      </head>
      <body className={`${poppins.variable} ${playfair.variable} antialiased font-sans`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <BusinessSchema />
          <TrackingScripts />
          <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <Analytics />
          <ChatWidget />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
