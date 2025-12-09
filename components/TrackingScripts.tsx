
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

    </>
  );
}
