import React from 'react';
import { Metadata } from 'next';
import ScleralLensesCostContent from '@/components/ScleralLensesCostContent';
import FAQSchema from '@/components/FAQSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const COST_FAQS = [
    { question: "How much do scleral lenses cost?", answer: "Scleral lenses for keratoconus typically cost $1,500–$3,500 per eye, including the fitting process, diagnostic imaging, trial lenses, and final custom lenses. The total cost depends on corneal complexity, lens design required, and number of fitting visits. This is a comprehensive fee — not just the lens itself — covering the specialized expertise needed for a precision fit." },
    { question: "Does insurance cover scleral lenses for keratoconus?", answer: "Yes — scleral lenses for keratoconus are classified as medically necessary (not cosmetic) and are covered by most medical insurance plans, not vision insurance. Medical insurance typically covers a significant portion of the fitting and lens cost when keratoconus is documented with corneal topography. We verify your specific benefits and obtain pre-authorization before beginning the fitting process." },
    { question: "What is the difference between medical and vision insurance for scleral lenses?", answer: "Vision insurance (VSP, EyeMed) covers routine eye exams and standard glasses/contacts — it does not cover specialty lenses for medical conditions. Medical insurance (Blue Cross, Aetna, Cigna, United, etc.) covers scleral lenses when prescribed for a diagnosed medical condition like keratoconus (ICD-10 H18.6). Always use your medical insurance, not vision plan, for keratoconus-related care." },
    { question: "Can I use my HSA or FSA for scleral lenses?", answer: "Yes — scleral lenses for keratoconus are a qualified medical expense for both Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA). The full cost of the fitting evaluation, diagnostic testing, and lenses can be paid with pre-tax HSA/FSA dollars, effectively saving you 25–35% on out-of-pocket costs." },
    { question: "How often do scleral lenses need to be replaced?", answer: "Scleral lenses typically last 1–2 years before replacement is needed. Replacement is driven by protein deposits, minor scratches, and (in patients without cross-linking) changes in corneal shape. Annual evaluations ensure the fit remains optimal. Replacement lenses cost less than the initial fitting because the diagnostic work is already done — typically $500–$1,000 per lens." },
    { question: "Is CareCredit accepted for scleral lens fitting?", answer: "Yes — we accept CareCredit for scleral lens fitting and other keratoconus treatments. CareCredit offers 6- and 12-month no-interest financing plans for qualifying patients. This allows you to spread the cost of treatment over time. We also accept all major credit cards, HSA/FSA, and personal checks." },
    { question: "Why are scleral lenses more expensive than regular contacts?", answer: "Scleral lenses are custom-manufactured for each individual eye based on precise corneal topography measurements. Unlike mass-produced soft contacts ($200–$500/year), each scleral lens is one-of-a-kind — designed to vault over your specific corneal irregularity while maintaining clearance and comfort. The fitting process requires specialized expertise, multiple trial lenses, and advanced diagnostic technology that general optometrists do not have." },
    { question: "What does the scleral lens fitting fee include?", answer: "The comprehensive fitting fee typically includes: initial keratoconus evaluation with corneal topography, diagnostic lens trials (often 2–4 trial lenses per eye), over-refraction to optimize vision, final custom lens order, lens insertion and removal training, and 90-day follow-up visits. Some practices charge separately for these items — our fee is all-inclusive." },
];

export const metadata: Metadata = {
    title: "Scleral Lenses Cost | $1,500–$3,500/Eye | Insurance Guide",
    description: "Scleral lenses for keratoconus cost $1,500–$3,500 per eye. Medical insurance covers most cases. HSA/FSA eligible, CareCredit accepted. Full cost breakdown inside.",
    keywords: ["scleral lenses cost", "how much do scleral lenses cost", "scleral lens price", "scleral lenses insurance", "scleral lenses keratoconus cost", "are scleral lenses covered by insurance"],
    alternates: {
        canonical: 'https://www.keratocones.com/scleral-lenses-cost',
        languages: {
            'en': 'https://www.keratocones.com/scleral-lenses-cost',
            'x-default': 'https://www.keratocones.com/scleral-lenses-cost',
        },
    },
};

export default function ScleralLensesCostPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Scleral Lenses Cost & Insurance Coverage",
        "description": "Complete cost breakdown for scleral lenses: pricing, insurance coverage, HSA/FSA eligibility, financing options, and what the fitting fee includes.",
        "url": "https://www.keratocones.com/scleral-lenses-cost",
        "lastReviewed": "2026-03-01",
        "reviewedBy": {
            "@type": "Physician",
            "name": "Dr. Alexander Bonakdar",
            "jobTitle": "Keratoconus Specialist",
            "medicalSpecialty": "Corneal Disease"
        },
        "about": {
            "@type": "MedicalTherapy",
            "name": "Scleral Contact Lenses",
            "description": "Custom-designed rigid gas permeable lenses that vault over the cornea, providing clear vision for keratoconus and other corneal irregularities.",
            "indication": {
                "@type": "MedicalIndication",
                "name": "Keratoconus"
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
                { name: 'Scleral Lenses Cost' },
            ]} />
            <FAQSchema faqs={COST_FAQS} />
            <ScleralLensesCostContent />
        </>
    );
}
