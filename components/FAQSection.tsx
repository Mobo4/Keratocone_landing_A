'use client';

import React from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

export default function FAQSection() {
    const faqs = [
        {
            question: "Can Keratoconus be cured?",
            answer: "While there is currently no 'cure' for keratoconus that reverses the condition completely, it can be effectively managed by a keratoconus specialist. Keratoconus treatment options like Corneal Cross-Linking (CXL) can stop progression, and modern Scleral Lenses can restore vision to 20/20 in almost all cases, allowing patients to live normal lives.",
            link: "/keratoconus-resources/can-keratoconus-be-cured",
            linkText: "Learn more about keratoconus treatment options"
        },
        {
            question: "How are Scleral Lenses different from regular contacts?",
            answer: "Regular contact lenses sit directly on the cornea, which is painful and unstable for keratoconus eyes. Scleral lenses are larger and vault over the entire cornea, resting gently on the white part of the eye (sclera). This creates a liquid reservoir that bathes the eye and provides a perfect new optical surface, correcting distortion.",
            link: "/keratoconus-resources/scleral-lenses-vs-corneal-transplant",
            linkText: "Compare scleral lenses to other keratoconus treatments"
        },
        {
            question: "Does insurance cover Scleral Lenses for keratoconus?",
            answer: "Yes, in most cases involving keratoconus, Scleral Lenses are classified as 'medically necessary.' We accept most major vision plans including VSP, EyeMed, and others, which often cover the entire cost of the lenses. Our keratoconus specialist team specializes in obtaining prior authorizations for complex corneal conditions.",
            link: "/keratoconus-resources/living-with-keratoconus",
            linkText: "Read about insurance and living with keratoconus"
        },
        {
            question: "What if I've had a corneal transplant?",
            answer: "Our keratoconus doctor specializes in fitting post-surgical corneas. Even after a transplant, many patients still have irregular astigmatism. Scleral lenses are often the safest and most effective keratoconus treatment to protect a transplant and achieve sharp vision without needing further surgery.",
            link: "/contact",
            linkText: "Schedule a consultation with our keratoconus specialist"
        },
        {
            question: "What are the stages of keratoconus?",
            answer: "Keratoconus progresses through 4 distinct stages, from early (Forme Fruste) to severe. Understanding your stage helps our keratoconus doctor determine the best keratoconus treatment plan. Early detection by a keratoconus specialist is crucial for preserving your vision.",
            link: "/keratoconus-resources/4-stages-of-keratoconus",
            linkText: "Learn about the 4 stages of keratoconus"
        },
        {
            question: "How long does the keratoconus fitting process take?",
            answer: "Using our advanced topography technology, our keratoconus specialist can often achieve an optimal fit in just 2-3 visits. Traditional methods used to take months of trial and error; we use microscopic mapping to get it right, often on the very first custom design.",
            link: "/about",
            linkText: "Learn about our keratoconus doctor's approach"
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <div className="mx-auto max-w-4xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-eyecare-navy sm:text-4xl font-serif">
                            Common Questions About Keratoconus Treatment
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Clear answers from your keratoconus specialist.
                        </p>
                    </div>
                </FadeIn>
                <div className="mx-auto max-w-4xl mt-8">
                    <dl className="space-y-8">
                        {faqs.map((faq, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-eyecare-blue/30 transition-colors">
                                    <dt className="text-lg font-bold text-eyecare-navy mb-3">
                                        {faq.question}
                                    </dt>
                                    <dd className="text-base text-gray-600 leading-relaxed">
                                        {faq.answer}
                                        {faq.link && (
                                            <Link
                                                href={faq.link}
                                                className="block mt-3 text-eyecare-blue hover:text-eyecare-dark-blue font-medium transition-colors"
                                            >
                                                {faq.linkText} &rarr;
                                            </Link>
                                        )}
                                    </dd>
                                </div>
                            </FadeIn>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
}
