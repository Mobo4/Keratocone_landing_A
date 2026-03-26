'use client';

import Script from 'next/script';

export default function ChatWidget() {
    return (
        <>
            {/* @ts-expect-error -- chat-widget is a GHL web component, not a React element */}
            <chat-widget
                location-id="gQMBw35UGXwFCKQ03Y7Q"
                heading="Keratoconus Questions? We're Here."
                sub-heading="Dr. Bonakdar's team typically responds within minutes."
                prompt-msg="Have a question about keratoconus or scleral lenses? Ask us here."
                agency-name="Keratoconus Vision Center"
                agency-website="www.keratocones.com"
                chat-type="liveChat"
                live-chat-user-inactive-msg="We're currently away. Leave your name and number and we'll reach out within the hour."
                live-chat-feedback-note="Thank you! We look forward to helping you."
                show-consent-checkbox="true"
            />
            <Script
                src="https://widgets.leadconnectorhq.com/loader.js"
                data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
                data-widget-id="69c49ef62170a5fef3614196"
                strategy="afterInteractive"
            />
        </>
    );
}
