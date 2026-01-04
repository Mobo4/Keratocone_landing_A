'use client';

import Script from 'next/script';

export default function Analytics() {
    return (
        <>
            {/* ============================================================
                GOOGLE ANALYTICS & GOOGLE ADS (GA4 + GTM)
                Replace G-XXXXXXXXXX with your Measurement ID
                Replace AW-XXXXXXXXXX with your Google Ads ID
               ============================================================ */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          // Google Analytics
          gtag('config', 'G-XXXXXXXXXX');
          
          // Google Ads (Conversion Linker)
          // gtag('config', 'AW-XXXXXXXXXX'); 
        `}
            </Script>

            {/* ============================================================
                FACEBOOK PIXEL (Meta Ads)
                Replace YOUR_PIXEL_ID with your actual Pixel ID
               ============================================================ */}
            <Script id="facebook-pixel" strategy="afterInteractive">
                {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'YOUR_PIXEL_ID');
          fbq('track', 'PageView');
        `}
            </Script>

            {/* ============================================================
                TIKTOK PIXEL
                Replace YOUR_TIKTOK_PIXEL_ID with your actual ID
               ============================================================ */}
            <Script id="tiktok-pixel" strategy="afterInteractive">
                {`
          !function (w, d, t) {
            w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
            ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
            
            ttq.load('YOUR_TIKTOK_PIXEL_ID');
            ttq.page();
          }(window, document, 'ttq');
        `}
            </Script>

        </>
    );
}
