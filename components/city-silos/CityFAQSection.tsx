/**
 * CityFAQSection - Dimension 7: Visible FAQ Accordion with Schema
 *
 * Renders a city-type-aware FAQ accordion with 5-6 questions and answers.
 * Also generates FAQPage JSON-LD structured data for Google Rich Results.
 *
 * FAQ content varies by city type:
 *  - Coastal: Water sports, sun exposure, outdoor lifestyle questions
 *  - Tech-university: Screen time, workplace vision, student concerns
 *  - Family-suburban: Pediatric keratoconus, genetic factors, school vision
 *  - Affluent: Premium options, specialist differentiation, timeline
 *  - Urban-diverse: Insurance accessibility, multilingual, driving distance
 *  - Suburban-commuter: Night driving, convenience, appointment efficiency
 *
 * The accordion uses a client-side toggle pattern matching the existing
 * FAQ patterns in the codebase (dl/dt/dd semantic HTML).
 *
 * Base FAQs (appointment, insurance, location) are common to all city pages.
 * City-type-specific FAQs are appended based on the getCityType() classifier.
 */

'use client';

import React, { useState } from 'react';
import Script from 'next/script';
import { ChevronDown } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { getCityType, CityType } from '@/data/city-types';

interface CityFAQSectionProps {
    citySlug: string;
    cityName: string;
    county: string;
}

interface FAQItem {
    question: string;
    answer: string;
}

/**
 * Returns city-type-aware FAQs. Base FAQs cover appointment, insurance,
 * and location questions common to all cities. Type-specific FAQs address
 * the unique concerns of each community type.
 */
function getCityFAQs(cityType: CityType, cityName: string): FAQItem[] {
    // Base FAQs for all city pages
    const baseFAQs: FAQItem[] = [
        {
            question: `Where can I find a keratoconus specialist near ${cityName}?`,
            answer: `Dr. Alexander Bonakdar at the Keratoconus Vision Center in Santa Ana is the closest dedicated keratoconus specialist to ${cityName}. The office is located at 801 N Tustin Ave #401, Santa Ana, CA 92705. Dr. Bonakdar has treated over 500 keratoconus patients with specialty contact lenses over 35+ years of practice. Same-week appointments are available.`,
        },
        {
            question: `Does Dr. Bonakdar accept insurance for ${cityName} patients?`,
            answer: `Yes, we accept most major vision and medical insurance plans. Scleral lenses for keratoconus are classified as medically necessary by most insurers, which may provide coverage through your medical insurance even when vision plan benefits are limited. We verify your coverage before your first visit. Call (714) 558-0641 for insurance questions.`,
        },
        {
            question: 'How soon can I get a keratoconus appointment?',
            answer: `Same-week appointments are available at the Keratoconus Vision Center. Unlike university eye centers where wait times for keratoconus consultations can reach 3 to 6 months, Dr. Bonakdar offers direct specialist access with no extended wait. Call (714) 558-0641 to schedule your evaluation.`,
        },
    ];

    // City-type-specific FAQs
    const typeFAQs: Record<CityType, FAQItem[]> = {
        'coastal-affluent': [
            { question: 'Can I wear scleral lenses during water sports and beach activities?', answer: `Scleral lenses are more stable than smaller lenses during physical activity. However, it is generally recommended to avoid swimming while wearing any contact lenses due to infection risk. Dr. Bonakdar can discuss strategies for managing keratoconus vision correction around your ${cityName} coastal lifestyle, including daily care routines for active outdoor lifestyles.` },
            { question: `How does coastal sun and wind affect keratoconus?`, answer: `Intense UV exposure and coastal winds can exacerbate dry eye symptoms and increase eye irritation, both of which can worsen keratoconus progression through increased eye rubbing. Scleral lenses provide a protective barrier and continuous hydration. Proper UV-protective sunglasses should be worn over scleral lenses during outdoor activities.` },
        ],
        'coastal-active': [
            { question: 'Will scleral lenses stay in place during surfing and beach sports?', answer: `Scleral lenses are significantly more stable than smaller rigid lenses during physical activity. They rest on the sclera and are virtually impossible to dislodge during sports. However, direct water contact should be avoided while wearing any contact lenses. Dr. Bonakdar designs lens fits for ${cityName}'s active patients that maximize stability during high-movement activities.` },
            { question: 'Does eye rubbing from sand and allergies affect keratoconus?', answer: 'Yes, eye rubbing is the single strongest modifiable risk factor for keratoconus progression. Sand irritation, salt-air exposure, and coastal allergens can trigger reflexive rubbing. Dr. Bonakdar counsels patients on allergy management, cold compress techniques, and the importance of breaking the rubbing habit to protect the cornea.' },
        ],
        'tech-university': [
            { question: 'Can scleral lenses help with screen-related eye strain from keratoconus?', answer: `Yes. Scleral lenses address two key issues for screen-intensive workers: they correct the irregular astigmatism that causes fluctuating focus during screen use, and the fluid reservoir prevents drying during extended computer work. Many ${cityName} tech professionals report significant improvement in all-day screen comfort with scleral lenses.` },
            { question: 'Do you treat university students with keratoconus?', answer: 'Yes, a significant portion of our patients are university students and young professionals in their 20s and 30s -- the age range when keratoconus is most commonly diagnosed and most actively progressing. We offer flexible scheduling and accept most student health insurance plans.' },
        ],
        'family-suburban': [
            { question: 'At what age should children be screened for keratoconus?', answer: 'Children with a family history of keratoconus should begin corneal screening around age 10-12, or earlier if symptoms appear. Keratoconus typically presents between ages 10-25 and progresses most rapidly during adolescence. Early detection allows for corneal cross-linking, which can halt progression before significant damage occurs.' },
            { question: 'Can my child still play sports with keratoconus?', answer: 'Yes. With proper scleral lens fitting, most children and teens with keratoconus can participate fully in sports. Scleral lenses are more stable than smaller lenses during physical activity. Dr. Bonakdar works with young patients to ensure their lenses support active lifestyles.' },
        ],
        'affluent-residential': [
            { question: 'What distinguishes Dr. Bonakdar from other keratoconus specialists?', answer: 'Dr. Bonakdar has treated over 500 keratoconus patients across 35+ years of dedicated corneal specialty practice. He receives referrals from CHOC and UCI Medical Center for their most challenging cases. You see Dr. Bonakdar personally at every visit -- your care is never delegated to rotating residents or fellows.' },
            { question: 'How long does the scleral lens fitting process take?', answer: 'The typical scleral lens fitting requires 2-3 office visits. The first visit includes comprehensive corneal mapping and diagnostic lens trials. Follow-up visits refine the fit. Dr. Bonakdar invests the time needed for precision -- each lens is customized to your individual corneal shape and visual demands.' },
        ],
        'urban-diverse': [
            { question: `Is it worth driving from ${cityName} for keratoconus care?`, answer: `Yes. Keratoconus requires specialized expertise. While there are many general eye doctors in ${cityName}, very few have the training and equipment for advanced scleral lens fitting. Our centrally located office provides expert care without university hospital wait times. The drive is typically 15-30 minutes via major freeways.` },
            { question: 'Do you offer payment plans for keratoconus treatment?', answer: 'Yes. We accept most major insurance plans, and scleral lenses for keratoconus are classified as medically necessary. For any out-of-pocket costs, we offer CareCredit financing with 0% interest options. HSA and FSA accounts are also accepted. We verify your coverage before treatment begins.' },
        ],
        'suburban-commuter': [
            { question: 'Can scleral lenses improve night driving with keratoconus?', answer: 'Dramatically. The halos, ghosting, and glare around headlights caused by keratoconus are the result of higher-order aberrations that glasses cannot correct. Scleral lenses create a smooth optical surface that eliminates these visual disturbances. Many commuter patients describe the improvement in night driving as transformative.' },
            { question: 'What should I expect at my first keratoconus appointment?', answer: 'Your first visit includes comprehensive corneal mapping, a vision history review, and a discussion of treatment options. If scleral lenses are appropriate, diagnostic trial lenses may be fitted the same day. Most initial visits are completed within 60-90 minutes.' },
        ],
        'inland-growing': [
            { question: `Can you combine evaluation and fitting in one visit for ${cityName} patients?`, answer: `Yes. We understand that ${cityName} patients factor travel distance into their care decisions. Whenever clinically appropriate, we combine comprehensive evaluation, corneal mapping, and initial diagnostic lens fitting into a single extended visit to minimize the total number of trips required.` },
            { question: 'Why should I travel to Santa Ana instead of seeing a local doctor?', answer: `Keratoconus scleral lens fitting requires specialized equipment and high case volume to achieve optimal results. Dr. Bonakdar's 500+ keratoconus cases and 35+ years of experience provide a level of fitting expertise that most general practices cannot match. The improved vision outcome justifies the drive.` },
        ],
        'north-county-sd': [
            { question: `How do you accommodate patients traveling from ${cityName}?`, answer: `We consolidate appointments whenever possible -- initial consultation, topography, and trial fitting are combined into your first visit. Follow-up adjustments are strategically scheduled, and we offer telehealth check-ins between in-person visits to reduce unnecessary trips while maintaining quality of care.` },
            { question: `Why travel from San Diego County for keratoconus care?`, answer: 'While San Diego has excellent general ophthalmology, very few practices focus specifically on scleral lens fitting for keratoconus. This subspecialty requires dedicated equipment and high case volume. Dr. Bonakdar has treated over 500 keratoconus patients -- experience that produces measurably better vision outcomes.' },
        ],
        'la-gateway': [
            { question: `Why choose Dr. Bonakdar over LA-area specialists?`, answer: `Most LA ophthalmology practices prioritize high-volume procedures like cataract surgery and LASIK. Keratoconus scleral lens fitting is a niche skill that requires dedicated equipment, specific training, and hundreds of fitted cases. Dr. Bonakdar's 500+ keratoconus cases and 35+ years of focused corneal experience represent a level of subspecialty expertise that most multi-specialty LA practices cannot match.` },
            { question: `How long is the drive from ${cityName} to your office?`, answer: `Our Santa Ana office is directly accessible via the I-5, I-405, or SR-55 freeways. Most ${cityName} patients find the drive comparable to or shorter than crossing LA to reach a Westside specialist. Free parking is available at the building, and same-week appointments mean no long wait to be seen.` },
        ],
    };

    return [...baseFAQs, ...(typeFAQs[cityType] || typeFAQs['suburban-commuter'])];
}

export default function CityFAQSection({ citySlug, cityName, county }: CityFAQSectionProps) {
    const cityType = getCityType(citySlug);
    const faqs = getCityFAQs(cityType, cityName);
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    // FAQPage structured data for Google Rich Results
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };

    return (
        <section className="py-16 md:py-20 bg-white">
            {/* FAQPage JSON-LD schema */}
            <Script
                id={`faq-schema-${citySlug}`}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="max-w-4xl mx-auto px-4">
                <FadeIn>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mb-4">
                            Frequently Asked Questions: Keratoconus Care Near {cityName}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Answers to common questions from {cityName} residents about keratoconus
                            treatment, scheduling, and insurance coverage.
                        </p>
                    </div>
                </FadeIn>

                {/* FAQ Accordion */}
                <dl className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <FadeIn key={index} delay={index * 0.06}>
                                <div
                                    className={`bg-gray-50 rounded-2xl border transition-colors ${
                                        isOpen
                                            ? 'border-eyecare-blue/30 shadow-sm'
                                            : 'border-gray-100 hover:border-eyecare-blue/20'
                                    }`}
                                >
                                    <dt>
                                        <button
                                            type="button"
                                            className="w-full text-left p-6 md:p-8 flex items-start justify-between gap-4 cursor-pointer"
                                            onClick={() => toggleFAQ(index)}
                                            aria-expanded={isOpen}
                                            aria-controls={`faq-answer-${citySlug}-${index}`}
                                        >
                                            <span className="text-lg font-bold text-eyecare-navy pr-4">
                                                {faq.question}
                                            </span>
                                            <ChevronDown
                                                className={`w-5 h-5 text-eyecare-blue shrink-0 mt-1 transition-transform duration-200 ${
                                                    isOpen ? 'rotate-180' : ''
                                                }`}
                                            />
                                        </button>
                                    </dt>
                                    <dd
                                        id={`faq-answer-${citySlug}-${index}`}
                                        className={`overflow-hidden transition-all duration-300 ${
                                            isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                    >
                                        <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                                            <p className="text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </dd>
                                </div>
                            </FadeIn>
                        );
                    })}
                </dl>

                {/* CTA below FAQ */}
                <FadeIn delay={0.5}>
                    <div className="mt-10 text-center">
                        <p className="text-gray-500 text-sm mb-4">
                            Have a question not listed here? We are happy to help.
                        </p>
                        <a
                            href="tel:7145580641"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-eyecare-navy text-white rounded-full text-sm font-bold hover:bg-eyecare-blue transition-colors"
                        >
                            Call (714) 558-0641
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
