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
        answer: "Dr. Bonakdar has successfully treated over 500 keratoconus patients with specialty contact lenses and corneal management over his 35+ years of practice in Orange County.",
    },
    differentiator: {
        question: "What makes Dr. Bonakdar different from university eye centers?",
        answer: "Direct specialist access with no 3-6 month wait, over 500 successful keratoconus cases, same-week appointments, personalized care from one doctor (not rotating residents), and 35+ years of corneal specialty experience.",
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

export const HOMEPAGE_FAQS: FAQItem[] = [
    CORE_FAQS.appointment,
    CORE_FAQS.insurance,
    CORE_FAQS.experience,
    CORE_FAQS.differentiator,
    CORE_FAQS.treatments,
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
