import React from 'react';
import { Metadata } from 'next';
import KeratoconusFAQContent from '@/components/KeratoconusFAQContent';
import FAQSchema from '@/components/FAQSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

const COMPREHENSIVE_FAQS = [
    { question: "Can keratoconus cause blindness?", answer: "Keratoconus very rarely causes total blindness. It causes significant vision distortion and blur that cannot be corrected with standard glasses, but functional vision can almost always be restored with scleral contact lenses. Even in advanced cases, corneal transplant surgery has a 90%+ success rate. The key is early diagnosis and treatment — untreated progressive keratoconus leads to worsening vision, but modern treatments prevent blindness in virtually all patients." },
    { question: "Is keratoconus hereditary?", answer: "Yes, keratoconus has a genetic component. Approximately 10–15% of keratoconus patients have a first-degree relative with the condition. If a parent has keratoconus, each child has roughly a 1 in 10 chance of developing it. However, genetics alone do not determine diagnosis — environmental factors like chronic eye rubbing, UV exposure, and allergies also play significant roles. Children of keratoconus patients should have corneal topography screening by age 10." },
    { question: "Can keratoconus be reversed?", answer: "Keratoconus cannot be reversed — once the cornea thins and steepens, it does not return to its original shape on its own. However, corneal cross-linking (CXL) can stop the progression, and scleral contact lenses can restore clear, functional vision by creating a smooth optical surface over the irregular cornea. Together, these treatments effectively manage keratoconus so patients can live normally with excellent vision." },
    { question: "How fast does keratoconus progress?", answer: "Keratoconus progression varies significantly between patients. In teenagers and young adults (ages 10–25), progression can be rapid — noticeable changes within months. After age 35–40, progression typically slows or stabilizes naturally. Factors that accelerate progression include chronic eye rubbing, allergies, and UV exposure. Corneal cross-linking can halt progression at any stage, which is why early detection through corneal topography is critical." },
    { question: "Does keratoconus affect both eyes?", answer: "Yes — keratoconus is bilateral in approximately 96% of cases, meaning it eventually affects both eyes. However, the two eyes are almost always affected asymmetrically: one eye is usually more advanced than the other. The second eye may develop keratoconus months or years after the first. This is why both eyes are monitored with corneal topography even if only one eye shows symptoms." },
    { question: "Can you drive with keratoconus?", answer: "Many keratoconus patients can drive safely with properly fitted scleral contact lenses, which can restore vision to 20/20 or better. Without correction, moderate-to-advanced keratoconus makes driving dangerous due to blurred vision, ghosting, and severe glare — especially at night. Night driving is typically the first activity affected. If you have keratoconus and struggle with driving, scleral lenses are often the solution." },
    { question: "Is keratoconus a disability?", answer: "Keratoconus can qualify as a disability under the ADA and for Social Security benefits if it severely limits daily activities even with best-corrected vision. To qualify for SSDI/SSI, your best-corrected visual acuity must generally be 20/200 or worse in your better eye. Many patients with properly fitted scleral lenses achieve vision well above this threshold. Documentation from a keratoconus specialist is required for disability applications." },
    { question: "Can you get LASIK with keratoconus?", answer: "No — LASIK is contraindicated (not recommended) for patients with keratoconus. LASIK works by removing corneal tissue, which would further weaken an already thin cornea and accelerate keratoconus progression. This can cause a serious complication called post-LASIK ectasia. Patients with keratoconus should never have LASIK, PRK, or SMILE surgery. The appropriate treatments are corneal cross-linking and scleral contact lenses." },
    { question: "What does vision look like with keratoconus?", answer: "Keratoconus vision is characterized by ghosting (multiple overlapping images), streaking of lights, halos around light sources, and overall blur that glasses cannot fully correct. Straight lines may appear wavy or bent. Night vision is particularly affected — headlights and streetlights produce dramatic starbursts and glare. The severity depends on the stage: early keratoconus may only cause mild blur, while advanced cases create significant visual distortion." },
    { question: "What is the best treatment for keratoconus?", answer: "The best treatment depends on the stage and whether keratoconus is progressing. For progressive keratoconus, corneal cross-linking (CXL) should be done first to stop worsening. For vision correction, scleral contact lenses are the gold standard — they restore clear vision in 90%+ of patients without surgery. For advanced cases where lenses are no longer effective, corneal transplant (DALK or PKP) is the last resort, with 90%+ success rates." },
    { question: "Can allergies cause keratoconus?", answer: "Allergies do not directly cause keratoconus, but they are a significant risk factor. Allergic conjunctivitis causes itchy eyes, which leads to chronic eye rubbing — and eye rubbing is one of the strongest known risk factors for keratoconus development and progression. Studies show that up to 50% of keratoconus patients have allergic eye disease. Managing allergies effectively (antihistamine drops, avoiding rubbing) is a critical part of keratoconus management." },
    { question: "How is keratoconus diagnosed?", answer: "Keratoconus is diagnosed through corneal topography — a non-invasive imaging technique that creates a detailed color map of the corneal surface. This reveals the characteristic steepening and thinning patterns of keratoconus. Additional tests include corneal tomography (measures full thickness), pachymetry (corneal thickness measurement), and anterior segment OCT. A comprehensive keratoconus evaluation takes approximately 60–90 minutes and is covered by medical insurance." },
    { question: "Can keratoconus come back after cross-linking?", answer: "Corneal cross-linking has a 94% success rate in stopping keratoconus progression. In rare cases (approximately 6%), some progression may occur after the initial treatment, typically within the first 2–3 years. This is why regular follow-up with corneal topography is essential — at 3, 6, and 12 months post-procedure, then annually. If progression recurs, a repeat cross-linking procedure can be performed." },
    { question: "What age does keratoconus start?", answer: "Keratoconus typically begins during puberty (ages 10–15) and is most commonly diagnosed between ages 15–25. However, it can be detected as early as age 8 in aggressive cases and may not be diagnosed until the 30s or 40s in milder forms. Keratoconus that starts earlier tends to progress more aggressively, making early detection and cross-linking especially important for teenagers." },
    { question: "Do scleral lenses stop keratoconus from getting worse?", answer: "No — scleral lenses correct vision but do not stop keratoconus progression. They work by creating a smooth optical surface over the irregular cornea, but they have no effect on the underlying disease process. Corneal cross-linking (CXL) is the only treatment that stops progression. The ideal approach is cross-linking to stabilize the cornea, followed by scleral lens fitting for vision correction." },
    { question: "How often do scleral lenses need to be replaced?", answer: "Scleral lenses typically need replacement every 1–2 years, depending on protein deposits, scratches, and changes in corneal shape. Annual evaluations with corneal topography ensure the fit remains optimal. If keratoconus progresses (in patients who have not had cross-linking), lenses may need more frequent refitting. With cross-linking-stabilized corneas, lens prescriptions tend to remain stable longer." },
];

export const metadata: Metadata = {
    title: "Keratoconus FAQ | 16 Questions Answered by a Specialist",
    description: "Can keratoconus cause blindness? Is it hereditary? Can you drive? Get definitive answers from a specialist with 500+ cases. Evidence-based, not generic advice.",
    keywords: ["keratoconus faq", "can keratoconus cause blindness", "is keratoconus hereditary", "keratoconus disability", "can you drive with keratoconus", "keratoconus questions", "keratoconus answers"],
    alternates: {
        canonical: 'https://www.keratocones.com/keratoconus-faq',
        languages: {
            'en': 'https://www.keratocones.com/keratoconus-faq',
            'x-default': 'https://www.keratocones.com/keratoconus-faq',
        },
    },
};

export default function KeratoconusFAQPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Keratoconus Frequently Asked Questions",
        "description": "Comprehensive answers to the most common keratoconus questions, reviewed by a specialist with 500+ cases treated.",
        "url": "https://www.keratocones.com/keratoconus-faq",
        "lastReviewed": "2026-03-01",
        "reviewedBy": {
            "@type": "Physician",
            "name": "Dr. Alexander Bonakdar",
            "jobTitle": "Keratoconus Specialist",
            "medicalSpecialty": "Corneal Disease"
        },
        "about": {
            "@type": "MedicalCondition",
            "name": "Keratoconus",
            "code": { "@type": "MedicalCode", "code": "H18.6", "codingSystem": "ICD-10-CM" }
        },
        "audience": {
            "@type": "MedicalAudience",
            "audienceType": "Patient"
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
                { name: 'Keratoconus FAQ' },
            ]} />
            <FAQSchema faqs={COMPREHENSIVE_FAQS} />
            <KeratoconusFAQContent faqs={COMPREHENSIVE_FAQS} />
        </>
    );
}
