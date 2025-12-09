
'use client';

import Script from 'next/script';

export default function TrackingScripts() {
  return (
    <>
      {/* 
        ------------------------------------------------------------
        Microsoft Clarity (Heatmaps & Session Recordings) - FREE 
        ------------------------------------------------------------
        Recommended for 2025 UX Optimization. 
      */}
      {/* Microsoft Clarity */}
      <Script id="microsoft-clarity" strategy="afterInteractive">
        {`
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "stt3rclumb");
                `}
      </Script>

      {/* 
        ------------------------------------------------------------
        CallRail (Dynamic Number Insertion) 
        ------------------------------------------------------------
        Account: Dr. Bonakdar / Keratoconus (ID: 453122914)
        Found in sibling projects: keratoconus_website, drbonakdar_net
      */}
      <Script
        id="callrail"
        strategy="afterInteractive"
        src="//cdn.callrail.com/companies/453122914/99c405dbdf8bc7511fbb/12/swap.js"
      />

      {/* 
        ------------------------------------------------------------
        Meta Pixel (Facebook) 
        ------------------------------------------------------------
        ID: 395306154557054 (Found in analytics audit)
      */}
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
          fbq('init', '395306154557054');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img height="1" width="1" style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=395306154557054&ev=PageView&noscript=1"
        />
      </noscript>

    </>
  );
}
