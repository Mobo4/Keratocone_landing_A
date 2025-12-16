import React from 'react';
import { Metadata } from 'next';
import KeratoconusScleralContent from '@/components/lp/KeratoconusScleralContent';

export const metadata: Metadata = {
    title: "Keratoconus Scleral Lenses | Expert Fitting in Orange County",
    description: "Scleral lens specialists for difficult keratoconus cases. Non-surgical vision restoration when other contacts fail. Book your consultation.",
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
            <KeratoconusScleralContent />
        </>
    );
}
