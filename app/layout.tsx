
import type { Metadata } from "next";
import { Poppins, Playfair_Display } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { headers } from 'next/headers';
import enMessages from '@/messages/en.json';
import esMessages from '@/messages/es.json';
import "./globals.css";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { GoogleTagManager } from '@next/third-parties/google';
import TrackingScripts from "@/components/TrackingScripts";
import { Analytics } from "@vercel/analytics/next";
import BusinessSchema from "@/components/BusinessSchema";

export const metadata: Metadata = {
  title: "Keratoconus Specialist Orange County | See Us This Week",
  description: "Why wait 6 months at UCLA/UCI? 500+ keratoconus cases treated. Direct specialist access, not residents. Insurance accepted. Call (714) 558-0641",
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
          <ChatWidget />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
