import React from 'react';
import { Metadata } from 'next';
import KeratoconusScleralContent from '@/components/lp/KeratoconusScleralContent';
import FAQSchema, { LANDING_FAQS } from '@/components/FAQSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
    title: "Scleral Lenses for Keratoconus | 500+ Fits | OC",
    description: "Other contacts failed you? We fit the cases others can't. 500+ scleral lens fits, same-week appointments, insurance accepted. (714) 558-0641",
    alternates: {
        canonical: 'https://keratocones.com/lp/keratoconus-scleral',
    },
};

export default function KeratoconusScleralPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Keratoconus Scleral Lenses Center",
        "description": "Specialized scleral lens fitting for keratoconus patients in Orange County.",
        "url": "https://keratocones.com/lp/keratoconus-scleral",
        "mainEntity": {
            "@type": "MedicalSpecialty",
            "name": "Keratoconus Treatment",
            "medicalCode": "ICD-10-CM H18.6"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <BreadcrumbSchema items={[
                { name: 'Home', url: 'https://keratocones.com' },
                { name: 'Scleral Lenses for Keratoconus' },
            ]} />
            <FAQSchema faqs={LANDING_FAQS} />
            <KeratoconusScleralContent />
        </>
    );
}
