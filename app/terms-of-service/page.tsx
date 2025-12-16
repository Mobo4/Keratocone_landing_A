
import React from 'react';
import LandingLayout from '@/components/LandingLayout';

export const metadata = {
    title: 'Terms of Service | Keratoconus Vision Center',
    description: 'Terms of Service for Keratoconus Vision Center and Dr. Alexander Bonakdar.',
};

export default function TermsOfService() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Terms of Service",
        "url": "https://keratocones.com/terms-of-service"
    };

    return (
        <LandingLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <div className="bg-white py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto prose prose-blue">
                    <h1>Terms of Service</h1>
                    <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>

                    <h2>1. Agreement to Terms</h2>
                    <p>
                        These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Keratoconus Vision Center ("we," "us" or "our"),
                        concerning your access to and use of the keratocones.com website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
                    </p>

                    <h2>2. Medical Disclaimer</h2>
                    <p>
                        The content on this Site is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
                        Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                        Never disregard professional medical advice or delay in seeking it because of something you have read on this Site.
                    </p>

                    <h2>3. Intellectual Property Rights</h2>
                    <p>
                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content")
                        and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                    </p>

                    <h2>4. User Representations</h2>
                    <p>
                        By using the Site, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Terms of Service; (2) you are not a minor in the jurisdiction in which you reside;
                        (3) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Site for any illegal or unauthorized purpose;
                        and (5) your use of the Site will not violate any applicable law or regulation.
                    </p>

                    <h2>5. Appointment and Consultation Terms</h2>
                    <p>
                        When you request a consultation through our website, you acknowledge that: (1) appointment requests are subject to availability and confirmation by our office staff,
                        (2) we reserve the right to refuse service to anyone for any lawful reason, (3) cancellations must be made at least 24 hours in advance to avoid a cancellation fee,
                        and (4) specialized scleral lens fittings may require multiple visits and are subject to separate professional fees.
                    </p>
                    <p>
                        Our services are provided on a professional fee-for-service basis. While we accept many vision insurance plans, coverage for medically necessary contact lenses varies by carrier.
                        We will provide you with a detailed cost estimate and insurance verification prior to beginning treatment. Payment is due at the time of service unless other arrangements have been made in advance.
                    </p>

                    <h2>6. Limitation of Liability</h2>
                    <p>
                        To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues,
                        whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the Site.
                    </p>

                    <h2>7. Contact Us</h2>
                    <p>
                        If you have questions or comments about this Site, please write to us at:
                        <br />
                        <strong>Keratoconus Vision Center</strong><br />
                        801 N Tustin Ave #401<br />
                        Santa Ana, CA 92705
                    </p>
                </div>
            </div>
        </LandingLayout>
    );
}
