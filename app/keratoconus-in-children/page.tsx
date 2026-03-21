import React from 'react';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import PediatricKeratoconusContent from '@/components/PediatricKeratoconusContent';
import FAQSchema from '@/components/FAQSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import GeoBadge from '@/components/GeoBadge';
import { getPersonalization } from '@/lib/geo-personalization';

const PEDIATRIC_FAQS = [
    { question: "At what age should children be screened for keratoconus?", answer: "Children with a family history of keratoconus should begin corneal topography screening by age 10. For the general population, screening is recommended during adolescence (ages 12–15) when keratoconus most commonly begins. Signs that warrant earlier screening include frequent prescription changes, chronic eye rubbing, allergies, and complaints of blurry vision that glasses do not fully correct." },
    { question: "Is keratoconus more aggressive in children?", answer: "Yes — keratoconus that develops in childhood or early adolescence tends to progress faster and more severely than adult-onset cases. Research shows that patients diagnosed before age 15 are more likely to require corneal transplant if untreated. This is why early corneal cross-linking is especially important in pediatric patients — stopping progression early preserves more corneal tissue and better long-term outcomes." },
    { question: "Can children wear scleral lenses?", answer: "Yes — scleral lenses can be successfully fitted on children, typically starting around age 10–12 depending on maturity and ability to handle the lenses independently. Younger children may need parental assistance with insertion and removal. Dr. Bonakdar has extensive experience fitting pediatric patients referred from CHOC (Children's Hospital of Orange County) and tailors the fitting process to be comfortable and age-appropriate." },
    { question: "Is corneal cross-linking safe for children?", answer: "Corneal cross-linking has been performed on patients as young as 9 years old with good safety profiles. The FDA-approved protocol (epi-off with riboflavin and UV-A) is the same for children and adults. Pediatric cross-linking is considered especially important because younger patients face decades of potential progression. The procedure is performed under topical anesthesia and takes approximately 60 minutes." },
    { question: "Does eye rubbing really cause keratoconus in children?", answer: "Eye rubbing is one of the strongest modifiable risk factors for keratoconus development and progression. Studies show eye rubbing is present in over 90% of pediatric keratoconus patients. Children with allergies, eczema, or sleep habits involving face-down positioning are at highest risk. Teaching children to stop rubbing their eyes — and treating underlying allergies — is a critical preventive measure." },
    { question: "Can my child play sports with keratoconus?", answer: "Yes — most sports are safe with keratoconus, and scleral lenses provide stable vision during physical activity. However, contact sports (boxing, wrestling, martial arts) carry a higher risk of eye injury and should be played with protective eyewear. Swimming requires removing scleral lenses or wearing watertight goggles to prevent lens contamination. Dr. Bonakdar provides sport-specific guidance during lens fitting." },
    { question: "Will keratoconus affect my child's education?", answer: "Untreated keratoconus can significantly impact academic performance because reading, computer work, and seeing the whiteboard become difficult. Children may not realize their vision is abnormal since they have nothing to compare it to. With properly fitted scleral lenses, students with keratoconus can achieve 20/20 or better vision and perform at full academic potential. Early treatment prevents years of struggling in school." },
];

export const metadata: Metadata = {
    title: "Keratoconus in Children | Pediatric Specialist Orange County",
    description: "Pediatric keratoconus requires early detection and aggressive treatment. CHOC referral center, scleral lens fitting for ages 10+, cross-linking coordination. (714) 558-0641",
    keywords: ["keratoconus in children", "pediatric keratoconus", "keratoconus teenager", "child keratoconus treatment", "keratoconus screening children", "CHOC keratoconus", "keratoconus eye rubbing children"],
    alternates: {
        canonical: 'https://www.keratocones.com/keratoconus-in-children',
        languages: {
            'en': 'https://www.keratocones.com/keratoconus-in-children',
            'x-default': 'https://www.keratocones.com/keratoconus-in-children',
        },
    },
};

export default async function PediatricKeratoconusPage() {
    const headersList = await headers();
    const city = headersList.get('x-visitor-city') || '';
    const keyword = headersList.get('x-keyword') || '';
    const utmCampaign = headersList.get('x-utm-campaign') || '';
    const utmSource = headersList.get('x-utm-source') || '';
    const geo = getPersonalization(city, keyword || undefined, utmCampaign || undefined, utmSource || undefined);

    const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Keratoconus in Children & Teenagers",
        "description": "Comprehensive guide to pediatric keratoconus: early detection, treatment options, and what parents need to know.",
        "url": "https://www.keratocones.com/keratoconus-in-children",
        "lastReviewed": "2026-03-01",
        "reviewedBy": {
            "@type": "Physician",
            "name": "Dr. Alexander Bonakdar",
            "jobTitle": "Keratoconus Specialist",
            "medicalSpecialty": "Corneal Disease"
        },
        "about": {
            "@type": "MedicalCondition",
            "name": "Pediatric Keratoconus",
            "alternateName": "Keratoconus in Children",
            "code": { "@type": "MedicalCode", "code": "H18.6", "codingSystem": "ICD-10-CM" },
            "signOrSymptom": [
                { "@type": "MedicalSignOrSymptom", "name": "Frequent prescription changes" },
                { "@type": "MedicalSignOrSymptom", "name": "Eye rubbing" },
                { "@type": "MedicalSignOrSymptom", "name": "Difficulty seeing the whiteboard" },
                { "@type": "MedicalSignOrSymptom", "name": "Squinting" },
                { "@type": "MedicalSignOrSymptom", "name": "Light sensitivity" }
            ],
            "riskFactor": [
                { "@type": "MedicalRiskFactor", "name": "Family history of keratoconus" },
                { "@type": "MedicalRiskFactor", "name": "Chronic eye rubbing" },
                { "@type": "MedicalRiskFactor", "name": "Allergies or eczema" },
                { "@type": "MedicalRiskFactor", "name": "Down syndrome" }
            ]
        },
        "audience": {
            "@type": "MedicalAudience",
            "audienceType": "Patient",
            "suggestedMinAge": 8,
            "suggestedMaxAge": 18
        }
    };

    return (
        <>
            <GeoBadge text={geo.badge} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <BreadcrumbSchema items={[
                { name: 'Home', url: 'https://www.keratocones.com' },
                { name: 'Keratoconus in Children' },
            ]} />
            <FAQSchema faqs={PEDIATRIC_FAQS} />
            <PediatricKeratoconusContent />
        </>
    );
}
