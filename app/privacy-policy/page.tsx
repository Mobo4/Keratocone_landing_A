
import React from 'react';
import LandingLayout from '@/components/LandingLayout';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Keratoconus Vision Center',
    description: 'HIPAA-compliant privacy practices at Keratoconus Vision Center, Santa Ana CA. Your data is protected. Questions? (714) 558-0641',
    alternates: {
        canonical: 'https://keratocones.com/privacy-policy',
    },
};

export default function PrivacyPolicy() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Privacy Policy",
        "url": "https://keratocones.com/privacy-policy"
    };

    return (
        <LandingLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <div className="bg-white py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto prose prose-blue">
                    <h1>Privacy Policy</h1>
                    <p className="text-sm text-gray-500">Last Updated: {new Date().toLocaleDateString()}</p>

                    <h2>1. Introduction</h2>
                    <p>
                        Keratoconus Vision Center ("we," "us," or "our") respects your privacy and is committed to protecting your personal data.
                        This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from)
                        and tell you about your privacy rights and how the law protects you.
                    </p>

                    <h2>2. Data We Collect</h2>
                    <p>
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                    </p>
                    <ul>
                        <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data</strong> includes email address and telephone number.</li>
                        <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
                        <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
                    </ul>

                    <h2>3. How We Use Your Data</h2>
                    <p>
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul>
                        <li>To process your appointment request or contact form submission.</li>
                        <li>To manage our relationship with you.</li>
                        <li>To improve our website, services, marketing and customer relationships.</li>
                    </ul>

                    <h2>4. Data Security</h2>
                    <p>
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                        In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                    </p>

                    <h2>5. HIPAA Compliance & Medical Data Protection</h2>
                    <p>
                        As a healthcare provider, we are committed to complying with the Health Insurance Portability and Accountability Act (HIPAA).
                        All Protected Health Information (PHI) collected during your consultation or treatment is stored securely and transmitted using industry-standard encryption protocols.
                        We maintain strict administrative, physical, and technical safeguards to protect your medical information from unauthorized access or disclosure.
                    </p>
                    <p>
                        Your medical records, including corneal topography scans, scleral lens fitting data, and clinical notes, are maintained in HIPAA-compliant electronic health record systems.
                        We will never share your PHI with third parties without your explicit written consent, except as required by law or for treatment, payment, and healthcare operations purposes.
                    </p>

                    <h2>6. Your Legal Rights</h2>
                    <p>
                        Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
                    </p>
                    <p>
                        Under HIPAA, you also have the right to: (1) request a copy of your medical records, (2) request amendments to your records if you believe they are incorrect,
                        (3) receive an accounting of disclosures of your PHI, and (4) request restrictions on certain uses and disclosures of your information.
                    </p>

                    <h2>7. Contact Us</h2>
                    <p>
                        If you have any questions about this privacy policy or our privacy practices, please contact us at:
                        <br />
                        <strong>Keratoconus Vision Center</strong><br />
                        801 N Tustin Ave #401<br />
                        Santa Ana, CA 92705<br />
                        (714) 558-0641
                    </p>
                </div>
            </div>
        </LandingLayout>
    );
}
