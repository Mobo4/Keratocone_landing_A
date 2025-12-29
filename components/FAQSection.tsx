'use client';

import React from 'react';
import FadeIn from '@/components/FadeIn';

export default function FAQSection() {
    const faqs = [
        {
            question: "Can Keratoconus be cured?",
            answer: "While there is currently no 'cure' for keratoconus that reverses the condition completely, it can be effectively managed. Treatments like Corneal Cross-Linking (CXL) can stop progression, and modern Scleral Lenses can restore vision to 20/20 in almost all cases, allowing patients to live normal lives."
        },
        {
            question: "How are Scleral Lenses different from regular contacts?",
            answer: "Regular contact lenses sit directly on the cornea, which is painful and unstable for keratoconus eyes. Scleral lenses are larger and vault over the entire cornea, resting gently on the white part of the eye (sclera). This creates a liquid reservoir that bathes the eye and provides a perfect new optical surface, correcting distortion."
        },
        {
            question: "Does insurance cover Scleral Lenses?",
            answer: "Yes, in most cases involving keratoconus, Scleral Lenses are classified as 'medically necessary.' We accept most major vision plans including VSP, EyeMed, and others, which often cover the entire cost of the lenses. Our team specializes in obtaining prior authorizations for complex corneal conditions."
        },
        {
            question: "What if I've had a corneal transplant?",
            answer: "We specialize in fitting post-surgical corneas. Even after a transplant, many patients still having irregular astigmatism. Scleral lenses are often the safest and most effective way to protect a transplant and achieve sharp vision without needing further surgery."
        },
        {
            question: "How long does the fitting process take?",
            answer: "Using our advanced topography technology, we can often achieve an optimal fit in just 2-3 visits. Traditional methods used to take months of trial and error; we use microscopic mapping to get it right, often on the very first custom design."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn>
                    <div className="mx-auto max-w-4xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-eyecare-navy sm:text-4xl font-serif">
                            Common Questions About Keratoconus
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Clear answers from a specialist.
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
