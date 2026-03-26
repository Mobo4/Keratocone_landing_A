'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

function AccordionPanel({ isOpen, children }: { isOpen: boolean; children: React.ReactNode }) {
    const contentRef = useRef<HTMLDivElement>(null);
    const [maxHeight, setMaxHeight] = useState<string>(isOpen ? 'none' : '0px');

    useEffect(() => {
        if (isOpen) {
            const el = contentRef.current;
            if (el) {
                setMaxHeight(`${el.scrollHeight}px`);
                const timer = setTimeout(() => setMaxHeight('none'), 300);
                return () => clearTimeout(timer);
            }
        } else {
            // Force a reflow so the browser registers the current height before transitioning to 0
            const el = contentRef.current;
            if (el) {
                setMaxHeight(`${el.scrollHeight}px`);
                // Use rAF to ensure the explicit height is painted before collapsing
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        setMaxHeight('0px');
                    });
                });
            }
        }
    }, [isOpen]);

    return (
        <div
            ref={contentRef}
            style={{ maxHeight }}
            className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        >
            <div className="pt-3">
                {children}
            </div>
        </div>
    );
}

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = useCallback((index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    }, []);

    const faqs = [
        {
            question: "Can keratoconus be cured?",
            answer: "There is currently no cure that reverses keratoconus. However, the condition can be effectively managed. Corneal cross-linking can slow or halt progression, and specialty contact lenses such as scleral lenses can restore clear vision in most cases. With appropriate management, most patients maintain functional vision throughout their lives.",
            link: "/keratoconus-resources/can-keratoconus-be-cured",
            linkText: "Learn more about keratoconus management options"
        },
        {
            question: "How are scleral lenses different from regular contacts?",
            answer: "Scleral lenses are larger than standard contact lenses and vault over the entire cornea without touching it. They rest on the sclera (the white part of the eye) and create a fluid reservoir between the lens and the corneal surface. This provides a smooth optical surface that corrects the irregular astigmatism caused by keratoconus, which standard soft lenses cannot adequately address.",
            link: "/keratoconus-resources/scleral-lenses-vs-corneal-transplant",
            linkText: "Compare scleral lenses to other treatment options"
        },
        {
            question: "Does insurance cover scleral lenses for keratoconus?",
            answer: "In most cases, scleral lenses for keratoconus are classified as medically necessary by insurance providers. Many major vision and medical plans, including VSP, EyeMed, Medicare, and others, cover medically necessary contact lenses. Prior authorization is typically required, and coverage varies by plan.",
            link: "/keratoconus-resources/living-with-keratoconus",
            linkText: "Read about insurance and living with keratoconus"
        },
        {
            question: "Can scleral lenses be worn after a corneal transplant?",
            answer: "Yes, scleral lenses are frequently used after corneal transplant surgery. Many post-transplant patients have residual irregular astigmatism that glasses cannot correct. Scleral lenses provide a smooth optical surface over the graft and can protect the corneal surface while delivering improved visual acuity.",
            link: "/keratoconus-resources/scleral-lenses-vs-corneal-transplant",
            linkText: "Learn about post-surgical lens options"
        },
        {
            question: "What are the stages of keratoconus?",
            answer: "Keratoconus is generally classified into four stages based on corneal steepness and irregularity: early (forme fruste), moderate, advanced, and severe. Each stage corresponds to increasing corneal thinning and steepening. The stage of keratoconus influences which management approaches are appropriate and how frequently monitoring is needed.",
            link: "/keratoconus-resources/4-stages-of-keratoconus",
            linkText: "Learn about the four stages of keratoconus"
        },
        {
            question: "How long does the scleral lens fitting process take?",
            answer: "A scleral lens fitting for keratoconus typically requires two to three office visits. The process begins with corneal topography and tomography to map the corneal surface, followed by diagnostic lens trials and adjustments. Modern imaging technology has shortened this process compared to older trial-and-error methods.",
            link: "/keratoconus-resources/ultimate-guide-to-keratoconus",
            linkText: "Read the complete guide to keratoconus"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <div className="mx-auto max-w-4xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-eyecare-navy sm:text-4xl font-serif">
                            Frequently Asked Questions About Keratoconus
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Common questions about keratoconus diagnosis, treatment, and management.
                        </p>
                    </div>
                </FadeIn>
                <div className="mx-auto max-w-4xl mt-8">
                    <dl className="space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <FadeIn key={index} delay={index * 0.1}>
                                    <div className="bg-gray-50 rounded-2xl border border-gray-100 hover:border-eyecare-blue/30 transition-colors">
                                        <dt>
                                            <button
                                                type="button"
                                                onClick={() => toggle(index)}
                                                aria-expanded={isOpen}
                                                className="flex w-full items-center justify-between p-6 sm:p-8 text-left cursor-pointer"
                                            >
                                                <span className="text-lg font-bold text-eyecare-navy pr-4">
                                                    {faq.question}
                                                </span>
                                                <ChevronDown
                                                    className={`h-5 w-5 flex-shrink-0 text-eyecare-blue transition-transform duration-300 ${
                                                        isOpen ? 'rotate-180' : ''
                                                    }`}
                                                />
                                            </button>
                                        </dt>
                                        <dd className="px-6 sm:px-8">
                                            <AccordionPanel isOpen={isOpen}>
                                                <p className="text-base text-gray-600 leading-relaxed pb-6 sm:pb-8">
                                                    {faq.answer}
                                                    {faq.link && (
                                                        <Link
                                                            href={faq.link}
                                                            className="block mt-3 text-eyecare-blue hover:text-eyecare-dark-blue font-medium transition-colors"
                                                        >
                                                            {faq.linkText} &rarr;
                                                        </Link>
                                                    )}
                                                </p>
                                            </AccordionPanel>
                                        </dd>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </dl>
                </div>
            </div>
        </section>
    );
}
