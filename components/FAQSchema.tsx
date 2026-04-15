/**
 * FAQSchema - Reusable FAQPage structured data component
 *
 * Outputs a <script type="application/ld+json"> block with valid FAQPage
 * schema markup for Google Rich Results eligibility.
 *
 * Usage:
 *   <FAQSchema faqs={[{ question: "...", answer: "..." }]} />
 *
 * For city pages, use the helper to get city-specific FAQs:
 *   <FAQSchema faqs={getCityFAQs("Irvine")} />
 */

export interface FAQItem {
    question: string;
    answer: string;
}

// ─── Core FAQ definitions ────────────────────────────────────────────

export const CORE_FAQS: Record<string, FAQItem> = {
    appointment: {
        question: "How soon can I get a keratoconus appointment?",
        answer: "Same week appointments are available at Keratoconus Vision Center. Unlike university eye centers with 3-6 month waits, Dr. Bonakdar offers direct specialist access. Call (714) 558-0641 to schedule.",
    },
    insurance: {
        question: "Do you accept insurance for keratoconus treatment?",
        answer: "Yes, we accept VSP, EyeMed, and most medical insurance plans for keratoconus diagnosis and treatment including scleral lens fitting. We verify your coverage before your first visit.",
    },
    experience: {
        question: "How many keratoconus patients has Dr. Bonakdar treated?",
        answer: "Dr. Bonakdar has successfully treated over 2,000 keratoconus patients with specialty contact lenses and corneal management over his 35+ years of practice in Orange County.",
    },
    differentiator: {
        question: "What makes Dr. Bonakdar different from university eye centers?",
        answer: "Direct specialist access with no 3-6 month wait, over 2,000 successful keratoconus cases, same-week appointments, personalized care from one doctor (not rotating residents), and 35+ years of corneal specialty experience.",
    },
    treatments: {
        question: "What keratoconus treatments do you offer?",
        answer: "We specialize in scleral contact lens fitting, hybrid lenses, RGP lenses, and corneal cross-linking co-management. Dr. Bonakdar creates a customized treatment plan based on your keratoconus stage and visual needs.",
    },
};

/**
 * Returns the city-specific FAQ with the city name interpolated.
 */
export function getCityFAQ(cityName: string): FAQItem {
    return {
        question: `Is keratoconus treatment available near ${cityName}?`,
        answer: `Yes, our office in Santa Ana serves ${cityName} patients. We're centrally located in Orange County, typically 15-30 minutes from ${cityName}. Same-week appointments available.`,
    };
}

/**
 * Convenience: returns the standard set of FAQs for city pages
 * (appointment, insurance, and the city-specific question).
 */
export function getCityFAQs(cityName: string): FAQItem[] {
    return [
        CORE_FAQS.appointment,
        CORE_FAQS.insurance,
        getCityFAQ(cityName),
    ];
}

// ─── Pre-built FAQ sets for specific pages ───────────────────────────

// Homepage FAQs must match the visible FAQSection accordion content exactly
// (Google requires schema questions to appear on the page)
export const HOMEPAGE_FAQS: FAQItem[] = [
    {
        question: "Can keratoconus be cured?",
        answer: "There is currently no cure that reverses keratoconus. However, the condition can be effectively managed. Corneal cross-linking can slow or halt progression, and specialty contact lenses such as scleral lenses can restore clear vision in most cases. With appropriate management, most patients maintain functional vision throughout their lives.",
    },
    {
        question: "How are scleral lenses different from regular contacts?",
        answer: "Scleral lenses are larger than standard contact lenses and vault over the entire cornea without touching it. They rest on the sclera (the white part of the eye) and create a fluid reservoir between the lens and the corneal surface. This provides a smooth optical surface that corrects the irregular astigmatism caused by keratoconus, which standard soft lenses cannot adequately address.",
    },
    {
        question: "Does insurance cover scleral lenses for keratoconus?",
        answer: "In most cases, scleral lenses for keratoconus are classified as medically necessary by insurance providers. Many major vision and medical plans, including VSP, EyeMed, Medicare, and others, cover medically necessary contact lenses. Prior authorization is typically required, and coverage varies by plan.",
    },
    {
        question: "Can scleral lenses be worn after a corneal transplant?",
        answer: "Yes, scleral lenses are frequently used after corneal transplant surgery. Many post-transplant patients have residual irregular astigmatism that glasses cannot correct. Scleral lenses provide a smooth optical surface over the graft and can protect the corneal surface while delivering improved visual acuity.",
    },
    {
        question: "What are the stages of keratoconus?",
        answer: "Keratoconus is generally classified into four stages based on corneal steepness and irregularity: early (forme fruste), moderate, advanced, and severe. Each stage corresponds to increasing corneal thinning and steepening. The stage of keratoconus influences which management approaches are appropriate and how frequently monitoring is needed.",
    },
    {
        question: "How long does the scleral lens fitting process take?",
        answer: "A scleral lens fitting for keratoconus typically requires two to three office visits. The process begins with corneal topography and tomography to map the corneal surface, followed by diagnostic lens trials and adjustments. Modern imaging technology has shortened this process compared to older trial-and-error methods.",
    },
];

export const ABOUT_FAQS: FAQItem[] = [
    CORE_FAQS.insurance,
    CORE_FAQS.experience,
    CORE_FAQS.differentiator,
];

export const LANDING_FAQS: FAQItem[] = [
    CORE_FAQS.appointment,
    CORE_FAQS.differentiator,
    CORE_FAQS.treatments,
];

// ─── Component ───────────────────────────────────────────────────────

interface FAQSchemaProps {
    faqs: FAQItem[];
}

export default function FAQSchema({ faqs }: FAQSchemaProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
            },
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
