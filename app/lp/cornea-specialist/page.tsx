import React from 'react';
import { Metadata } from 'next';
import CornealSpecialistContent from '@/components/lp/CornealSpecialistContent';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
    title: "Cornea Specialist Orange County | Dr. Bonakdar",
    description: "Orange County cornea specialist with 35+ years experience. Keratoconus, corneal disease, scleral lenses, post-surgical management. Same-week appointments. (714) 558-0641",
    alternates: {
        canonical: 'https://www.keratocones.com/lp/cornea-specialist',
        languages: {
            'en': 'https://www.keratocones.com/lp/cornea-specialist',
            'x-default': 'https://www.keratocones.com/lp/cornea-specialist',
        },
    },
};

export default function CorneaSpecialistPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Cornea Specialist Orange County",
        "description": "Board-certified cornea specialist in Orange County providing expert treatment for keratoconus, corneal disease, and complex corneal conditions.",
        "url": "https://www.keratocones.com/lp/cornea-specialist",
        "mainEntity": {
            "@type": "Physician",
            "name": "Dr. Alexander Bonakdar",
            "medicalSpecialty": "Cornea Specialist",
            "description": "Orange County cornea specialist with 35+ years of experience treating keratoconus, corneal ectasia, and complex corneal conditions.",
            "worksFor": {
                "@type": "MedicalBusiness",
                "name": "Keratoconus Vision Center",
                "url": "https://www.keratocones.com",
                "parentOrganization": {
                    "@type": "MedicalBusiness",
                    "name": "Eye Care Center of Orange County",
                    "url": "https://www.eyecarecenteroc.com"
                }
            },
            "areaServed": {
                "@type": "AdministrativeArea",
                "name": "Orange County, California"
            }
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <BreadcrumbSchema items={[
                { name: 'Home', url: 'https://www.keratocones.com' },
                { name: 'Cornea Specialist Orange County' },
            ]} />
            <CornealSpecialistContent />
        </>
    );
}
