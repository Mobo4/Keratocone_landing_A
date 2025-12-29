import React from 'react';
import LandingLayout from '@/components/LandingLayout';
import ContactPageContent from '@/components/ContactPageContent';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | Keratoconus Vision Center',
    description: 'Book your consultation at the Keratoconus Vision Center in Santa Ana, CA. Serving Irvine, Newport Beach, and all Orange County.',
    alternates: {
        canonical: 'https://keratocones.com/contact',
    },
};

export default function ContactPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Keratoconus Vision Center",
        "description": "Contact information, location, and hours for Dr. Alexander Bonakdar in Santa Ana, CA.",
        "url": "https://keratocones.com/contact",
        "mainEntity": {
            "@type": "MedicalBusiness",
            "name": "Keratoconus Vision Center",
            "telephone": "+1-714-558-0641",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "801 N Tustin Ave #401",
                "addressLocality": "Santa Ana",
                "addressRegion": "CA",
                "postalCode": "92705",
                "addressCountry": "US"
            }
        }
    };

    return (
        <LandingLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <ContactPageContent />
        </LandingLayout>
    );
}
