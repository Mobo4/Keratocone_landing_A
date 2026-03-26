'use client';

import Script from 'next/script';

export default function ChatWidget() {
    return (
        <Script
            src="https://widgets.leadconnectorhq.com/loader.js"
            data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
            data-widget-id="69c4a1e35bd8e6f257cdf52d"
            strategy="afterInteractive"
        />
    );
}
