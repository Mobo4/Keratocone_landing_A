import React from 'react';
import LandingLayout from '@/components/LandingLayout';
import AboutPageContent from '@/components/AboutPageContent';
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
            "@type": "Person",
            "name": "Dr. Alexander Bonakdar",
            "jobTitle": "Optometrist",
            "medicalSpecialty": "Keratoconus Specialist",
            "worksFor": {
                "@type": "MedicalBusiness",
                "name": "Keratoconus Vision Center"
            },
            "description": "Orange County's leading expert in non-surgical vision restoration for Keratoconus with 20+ years of experience."
        }
    };

    return (
        <LandingLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <AboutPageContent />
        </LandingLayout>
    );
}
