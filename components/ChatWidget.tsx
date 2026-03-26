'use client';

import Script from 'next/script';

export default function ChatWidget() {
    return (
        <>
            {/* @ts-expect-error -- chat-widget is a GHL web component, not a React element */}
            <chat-widget
                location-id="gQMBw35UGXwFCKQ03Y7Q"
                heading="Ask us your questions!"
                sub-heading="Enter your question below and we will get back to you shortly. "
                prompt-msg="Hi there, have a question? Chat us here. "
                agency-name="Keratoconus Vision Center"
                agency-website="www.keratocones.com"
                chat-type="liveChat"
                live-chat-user-inactive-msg="Looks like no one is available. Please leave your contact details. We will get back to you shortly."
                live-chat-feedback-note="Thank you, for taking your time."
                show-consent-checkbox="true"
            />
            <Script
                src="https://widgets.leadconnectorhq.com/loader.js"
                data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
                strategy="afterInteractive"
            />
        </>
    );
}
