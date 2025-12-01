'use client';

import Script from 'next/script';

export default function ChatWidget() {
    return (
        <>
            <Script
                src="https://beta.leadconnectorhq.com/loader.js"
                data-resources-url="https://beta.leadconnectorhq.com/chat-widget/loader.js"
                data-widget-id="69163f6533e9926104e6ee9e"
                strategy="lazyOnload"
            />
        </>
    );
}
