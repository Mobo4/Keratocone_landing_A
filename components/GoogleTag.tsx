'use client';

import Script from 'next/script';

export default function GoogleTag() {
    return (
        <>
            {/* Google Tag Manager - GTM-NS6QTKN */}
            <Script id="google-tag-manager" strategy="afterInteractive">
                {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-NS6QTKN');
                `}
            </Script>

            {/* Google Analytics 4 & Ads (Hybrid Implementation) */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-E7VSPDXLF3"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'G-E7VSPDXLF3'); // GA4
                  gtag('config', 'GT-TXX6TLW'); // Google Ads
                `}
            </Script>

            {/* Google Tag Manager (noscript) */}
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-NS6QTKN"
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                />
            </noscript>
        </>
    );
}
