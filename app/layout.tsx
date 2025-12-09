
import type { Metadata } from "next";
import { Poppins, Playfair_Display } from 'next/font/google';
import "./globals.css";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import GoogleTag from "@/components/GoogleTag";
import TrackingScripts from "@/components/TrackingScripts";

// ... (existing imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ... (existing schema)

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
      </body>
    </html>
  );
}
