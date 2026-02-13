import { Metadata } from 'next';
import LandingLayout from '@/components/LandingLayout';
import KeratoconusFactsContent from '@/components/KeratoconusFactsContent';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import LeadForm from '@/components/LeadForm';
import FadeIn from '@/components/FadeIn';

export const metadata: Metadata = {
    title: 'Keratoconus Facts & Statistics | Prevalence, Risk Factors, Outcomes',
    description: 'Peer-reviewed keratoconus statistics: 1 in 375 prevalence, age of onset, risk factors, scleral lens outcomes, and transplant rates. Sourced from published ophthalmology research.',
    keywords: [
        'keratoconus statistics',
        'keratoconus prevalence',
        'keratoconus risk factors',
        'keratoconus treatment outcomes',
        'keratoconus facts',
        'how common is keratoconus',
        'keratoconus age of onset',
        'scleral lens success rate',
        'corneal transplant keratoconus',
    ],
    alternates: {
        canonical: 'https://keratocones.com/keratoconus-facts',
    },
    openGraph: {
        title: 'Keratoconus Facts & Statistics | Peer-Reviewed Data',
        description: 'Evidence-based keratoconus statistics: prevalence, risk factors, treatment outcomes, and prognosis from published research.',
        url: 'https://keratocones.com/keratoconus-facts',
        siteName: 'Keratoconus Vision Center',
        locale: 'en_US',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Keratoconus Facts & Statistics',
        description: 'Peer-reviewed prevalence data, risk factors, and treatment outcomes for keratoconus.',
    },
};

export default function KeratoconusFactsPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Keratoconus Facts & Statistics",
        "description": "Peer-reviewed prevalence data, risk factors, treatment outcomes, and prognosis for keratoconus.",
        "url": "https://keratocones.com/keratoconus-facts",
        "inLanguage": "en-US",
        "about": {
            "@type": "MedicalCondition",
            "name": "Keratoconus",
            "alternateName": "KC",
            "code": {
                "@type": "MedicalCode",
                "codeValue": "H18.6",
                "codingSystem": "ICD-10-CM"
            }
        },
        "author": {
            "@type": "Physician",
            "name": "Dr. Alexander Bonakdar",
            "jobTitle": "Keratoconus Specialist",
            "url": "https://keratocones.com/about"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Keratoconus Vision Center",
            "url": "https://keratocones.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://keratocones.com/images/logo.png"
            }
        },
        "datePublished": "2025-01-15",
        "dateModified": "2026-02-12",
        "medicalAudience": [
            { "@type": "MedicalAudience", "audienceType": "Patient" },
            { "@type": "MedicalAudience", "audienceType": "Clinician" }
        ]
    };

    const datasetSchema = {
        "@context": "https://schema.org",
        "@type": "Dataset",
        "name": "Keratoconus Prevalence and Treatment Statistics",
        "description": "Aggregated keratoconus statistics from peer-reviewed ophthalmology journals including prevalence rates, age of onset, risk factors, and treatment outcomes.",
        "url": "https://keratocones.com/keratoconus-facts",
        "license": "https://creativecommons.org/licenses/by/4.0/",
        "creator": {
            "@type": "Organization",
            "name": "Keratoconus Vision Center"
        },
        "keywords": ["keratoconus", "corneal ectasia", "scleral lenses", "corneal transplant", "prevalence"],
        "variableMeasured": [
            "Keratoconus prevalence rate",
            "Age of onset distribution",
            "Corneal transplant rate",
            "Scleral lens success rate"
        ]
    };

    return (
        <LandingLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
            />
            <BreadcrumbSchema items={[
                { name: 'Home', url: 'https://keratocones.com' },
                { name: 'Keratoconus Facts & Statistics' },
            ]} />
            <KeratoconusFactsContent />

            {/* Lead Form */}
            <section id="lead-form" className="py-12 md:py-24 bg-eyecare-lighter-blue">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-eyecare-blue/10 max-w-3xl mx-auto">
                            <div className="p-6 md:p-12 lg:p-16">
                                <LeadForm />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </LandingLayout>
    );
}
