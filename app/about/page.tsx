import React from 'react';
import LandingLayout from '@/components/LandingLayout';
import AboutPageContent from '@/components/AboutPageContent';
import FAQSchema, { ABOUT_FAQS } from '@/components/FAQSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
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
        canonical: 'https://www.keratocones.com/about',
        languages: {
            'en': 'https://www.keratocones.com/about',
            'es': 'https://www.keratocones.com/es/acerca-de',
            'x-default': 'https://www.keratocones.com/about',
        },
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
            "medicalSpecialty": ["Keratoconus Treatment", "Scleral Lens Fitting", "Corneal Disease", "Corneal Cross-Linking Co-Management", "Post-Surgical Vision Correction"],
            "url": "https://www.eyecarecenteroc.com/about",
            "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "Illinois College of Optometry"
            },
            "hasCredential": [
                { "@type": "EducationalOccupationalCredential", "credentialCategory": "Degree", "name": "Doctor of Optometry (O.D.)" },
                { "@type": "EducationalOccupationalCredential", "credentialCategory": "Board Certification", "name": "California State Board of Optometry" },
                { "@type": "EducationalOccupationalCredential", "credentialCategory": "Board Certification", "name": "National Board of Examiners in Optometry (NBEO)" },
                { "@type": "EducationalOccupationalCredential", "credentialCategory": "Fellowship", "name": "Advanced Contact Lens Fellowship" },
                { "@type": "EducationalOccupationalCredential", "credentialCategory": "Fellowship", "name": "Corneal Disease Fellowship" }
            ],
            "memberOf": [
                { "@type": "Organization", "name": "American Optometric Association (AOA)" },
                { "@type": "Organization", "name": "California Optometric Association (COA)" },
                { "@type": "Organization", "name": "American Academy of Optometry (AAO)" },
                { "@type": "Organization", "name": "Scleral Lens Education Society" },
                { "@type": "Organization", "name": "International Keratoconus Academy" }
            ],
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
            "description": "Orange County's leading keratoconus doctor specializing in non-surgical keratoconus treatment with 35+ years of experience. Trusted keratoconus specialist for complex corneal cases. Illinois College of Optometry graduate with fellowships in Advanced Contact Lens and Corneal Disease.",
            "knowsAbout": ["Keratoconus", "Scleral Lenses", "Corneal Disease", "Corneal Cross-Linking", "Non-surgical Vision Restoration", "Pediatric Keratoconus", "Post-LASIK Ectasia"],
            "award": ["Optometrist of the Year", "Excellence in Patient Care Award", "Top Doctor Recognition"],
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
            <BreadcrumbSchema items={[
                { name: 'Home', url: 'https://keratocones.com' },
                { name: 'About Dr. Bonakdar' },
            ]} />
            <FAQSchema faqs={ABOUT_FAQS} />
            <AboutPageContent />
        </LandingLayout>
    );
}
