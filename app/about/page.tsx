import React from 'react';
import LandingLayout from '@/components/LandingLayout';
import AboutPageContent from '@/components/AboutPageContent';
import FAQSchema, { ABOUT_FAQS } from '@/components/FAQSchema';
import { Metadata } from 'next';
import enMessages from '@/messages/en.json';

function t(key: string) {
    const keys = ('About.' + key).split('.');
    let value: any = enMessages;
    for (const k of keys) {
        value = value?.[k as keyof typeof value];
    }
    return (value as string) || key;
}

export const metadata: Metadata = {
    title: t('Metadata.title'),
    description: t('Metadata.description'),
    alternates: {
        canonical: 'https://keratocones.com/about',
    },
};

export default function AboutPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
            "@type": "Physician",
            "name": "Dr. Alexander Bonakdar",
            "jobTitle": "Keratoconus Specialist",
            "medicalSpecialty": ["Keratoconus Treatment", "Scleral Lens Fitting", "Corneal Disease"],
            "worksFor": {
                "@type": "MedicalBusiness",
                "name": "Keratoconus Vision Center",
                "url": "https://keratocones.com"
            },
            "description": "Orange County's leading keratoconus doctor specializing in non-surgical keratoconus treatment with 35+ years of experience. Trusted keratoconus specialist for complex corneal cases.",
            "knowsAbout": ["Keratoconus", "Scleral Lenses", "Corneal Disease", "Non-surgical Vision Restoration"],
            "areaServed": {
                "@type": "State",
                "name": "California"
            }
        }
    };

    return (
        <LandingLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <FAQSchema faqs={ABOUT_FAQS} />
            <AboutPageContent />
        </LandingLayout>
    );
}
