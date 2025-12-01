'use client';

import Script from 'next/script';

export default function GoogleTag() {
    return (
        <>
            {/* Google Tag Manager / Analytics Placeholder */}
            {/* Replace G-XXXXXXXXXX with actual Measurement ID */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-XXXXXXXXXX');
        `}
            </Script>
        </>
    );
}
