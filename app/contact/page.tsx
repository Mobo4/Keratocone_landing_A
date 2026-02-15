import React from 'react';
import LandingLayout from '@/components/LandingLayout';
import ContactPageContent from '@/components/ContactPageContent';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Book Keratoconus Appointment | See Us This Week',
    description: 'Done waiting months for UCLA/UCI? Book this week. 500+ cases, 35+ yrs experience, direct specialist access. Insurance accepted. (714) 558-0641',
    alternates: {
        canonical: 'https://www.keratocones.com/contact',
        languages: {
            'en': 'https://www.keratocones.com/contact',
            'es': 'https://www.keratocones.com/es/contacto',
            'x-default': 'https://www.keratocones.com/contact',
        },
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
            <BreadcrumbSchema items={[
                { name: 'Home', url: 'https://keratocones.com' },
                { name: 'Contact' },
            ]} />
            <ContactPageContent />
        </LandingLayout>
    );
}
