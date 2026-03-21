import React from 'react';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import CornealCrosslinkingContent from '@/components/CornealCrosslinkingContent';
import FAQSchema from '@/components/FAQSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import GeoBadge from '@/components/GeoBadge';
import { getPersonalization } from '@/lib/geo-personalization';

const CROSSLINKING_FAQS = [
    {
        question: "What is corneal cross-linking (CXL)?",
        answer: "Corneal cross-linking is an FDA-approved, minimally invasive procedure that uses UV light and riboflavin (vitamin B2) eye drops to strengthen the collagen fibers in the cornea. It is the only treatment proven to stop keratoconus progression. The 60-minute outpatient procedure creates new bonds between corneal collagen fibers, preventing further thinning and bulging."
    },
    {
        question: "Does corneal cross-linking hurt?",
        answer: "During the procedure, numbing drops keep you comfortable — most patients feel only mild pressure. After cross-linking, you may experience light sensitivity, tearing, and mild discomfort for 3–5 days. Pain medication and a bandage contact lens are provided. Most patients describe post-procedure discomfort as moderate and manageable."
    },
    {
        question: "How much does corneal cross-linking cost?",
        answer: "Corneal cross-linking typically costs $2,500–$4,000 per eye. Most major medical insurance plans now cover CXL for keratoconus since FDA approval in 2016 (Avedro iLink). We verify your insurance benefits before scheduling and offer CareCredit financing for any out-of-pocket costs. HSA/FSA funds can also be applied."
    },
    {
        question: "Is corneal cross-linking covered by insurance?",
        answer: "Yes — since FDA approval in 2016, most major medical insurance plans cover corneal cross-linking for progressive keratoconus. Coverage typically requires documentation of progression through corneal topography. Our office handles pre-authorization and verifies your specific benefits before scheduling."
    },
    {
        question: "How long does recovery from cross-linking take?",
        answer: "Initial recovery takes 1–2 weeks, during which you wear a bandage contact lens and use prescription eye drops. Vision is blurry during this period. Functional vision returns within 2–4 weeks. Full visual stabilization takes 3–6 months as the cornea heals and strengthens. Most patients return to work within 1 week."
    },
    {
        question: "Can cross-linking improve my vision?",
        answer: "Cross-linking is primarily designed to stop keratoconus from getting worse — not to improve vision directly. However, about 50% of patients experience modest vision improvement after the cornea stabilizes. For significant vision correction, scleral contact lenses are fitted after cross-linking stabilizes the cornea, often restoring 20/20 functional vision."
    },
    {
        question: "Am I a candidate for corneal cross-linking?",
        answer: "You may be a candidate if you have progressive keratoconus (documented worsening on corneal topography), corneal thickness of at least 400 microns, and are not pregnant or nursing. Cross-linking is most effective when performed early — before significant corneal scarring develops. A comprehensive evaluation with corneal topography determines candidacy."
    },
    {
        question: "What is the difference between epi-off and epi-on cross-linking?",
        answer: "Epi-off (epithelium removed) is the FDA-approved standard with the strongest evidence — the surface layer is gently removed so riboflavin penetrates more effectively. Epi-on (transepithelial) leaves the surface intact for faster initial recovery but has less long-term data. Dr. Bonakdar coordinates with corneal surgeons who perform the FDA-approved epi-off protocol for maximum effectiveness."
    },
];

export const metadata: Metadata = {
    title: "Corneal Cross-Linking (CXL) Orange County | Stop Keratoconus",
    description: "FDA-approved corneal cross-linking stops keratoconus progression in 94% of patients. Same-week evaluation, insurance accepted, coordinated with top corneal surgeons. (714) 558-0641",
    keywords: ["corneal cross-linking", "CXL keratoconus", "corneal crosslinking near me", "cross-linking cost", "cross-linking insurance", "corneal cross-linking orange county", "stop keratoconus progression"],
    alternates: {
        canonical: 'https://www.keratocones.com/corneal-crosslinking',
        languages: {
            'en': 'https://www.keratocones.com/corneal-crosslinking',
            'x-default': 'https://www.keratocones.com/corneal-crosslinking',
        },
    },
};

export default async function CornealCrosslinkingPage() {
    const headersList = await headers();
    const city = headersList.get('x-visitor-city') || '';
    const keyword = headersList.get('x-keyword') || '';
    const utmCampaign = headersList.get('x-utm-campaign') || '';
    const utmSource = headersList.get('x-utm-source') || '';
    const geo = getPersonalization(city, keyword || undefined, utmCampaign || undefined, utmSource || undefined);

    const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Corneal Cross-Linking (CXL) for Keratoconus",
        "description": "Comprehensive guide to corneal cross-linking — the only FDA-approved treatment to stop keratoconus progression.",
        "url": "https://www.keratocones.com/corneal-crosslinking",
        "lastReviewed": "2026-03-01",
        "reviewedBy": {
            "@type": "Physician",
            "name": "Dr. Alexander Bonakdar",
            "jobTitle": "Keratoconus Specialist",
            "medicalSpecialty": "Corneal Disease"
        },
        "about": {
            "@type": "MedicalProcedure",
            "name": "Corneal Cross-Linking",
            "alternateName": ["CXL", "Corneal Collagen Cross-Linking", "C3-R"],
            "procedureType": "Minimally Invasive",
            "howPerformed": "UV-A light is applied to the cornea after riboflavin (vitamin B2) drops are administered, creating new collagen cross-links that strengthen the corneal structure.",
            "preparation": "Comprehensive corneal topography evaluation to document progression and confirm candidacy. Corneal thickness must be at least 400 microns.",
            "followup": "Bandage contact lens for 5-7 days, prescription drops for 1-2 months, corneal topography at 1, 3, 6, and 12 months post-procedure.",
            "status": "https://schema.org/EventScheduled",
            "bodyLocation": "Cornea",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Progressive Keratoconus"
            }
        },
        "mainEntity": {
            "@type": "MedicalCondition",
            "name": "Keratoconus",
            "alternateName": "Corneal Ectasia",
            "code": {
                "@type": "MedicalCode",
                "code": "H18.6",
                "codingSystem": "ICD-10-CM"
            },
            "possibleTreatment": [
                { "@type": "MedicalProcedure", "name": "Corneal Cross-Linking (CXL)" },
                { "@type": "MedicalTherapy", "name": "Scleral Contact Lenses" },
                { "@type": "MedicalProcedure", "name": "Intacs Corneal Implants" },
                { "@type": "MedicalProcedure", "name": "Corneal Transplant (DALK/PKP)" }
            ]
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
                { name: 'Corneal Cross-Linking (CXL)' },
            ]} />
            <FAQSchema faqs={CROSSLINKING_FAQS} />
            <CornealCrosslinkingContent />
        </>
    );
}
