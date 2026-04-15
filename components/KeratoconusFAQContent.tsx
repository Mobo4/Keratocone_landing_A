'use client';

import React from 'react';
import LandingLayout from '@/components/LandingLayout';
import LeadForm from '@/components/LeadForm';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';

interface FAQ {
    question: string;
    answer: string;
}

export default function KeratoconusFAQContent({ faqs }: { faqs: FAQ[] }) {
    return (
        <LandingLayout>
            {/* Hero */}
            <section className="bg-eyecare-navy text-white py-16 md:py-20">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <FadeIn>
                        <p className="text-eyecare-light-blue font-bold text-sm tracking-widest uppercase mb-4">Medically Reviewed by Dr. Alexander Bonakdar, O.D.</p>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Keratoconus: Your Questions Answered</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            Definitive answers to the 16 most-searched keratoconus questions — from a specialist who has treated 2,000+ cases. Evidence-based, not generic.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
                <div className="container mx-auto px-4 max-w-5xl">
                    <p className="text-sm text-gray-500 mb-3 font-medium">Jump to a question:</p>
                    <div className="flex flex-wrap gap-2">
                        {faqs.slice(0, 8).map((faq, i) => (
                            <a
                                key={i}
                                href={`#faq-${i}`}
                                className="text-xs bg-white border border-gray-200 px-3 py-1.5 rounded-full hover:border-eyecare-blue hover:text-eyecare-blue transition-colors"
                            >
                                {faq.question.replace(/\?$/, '').replace(/^(Can |Is |Does |What |How |Will |Do )/, '').slice(0, 35)}...
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Content */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-12">
                        {faqs.map((faq, i) => (
                            <FadeIn key={i} delay={i * 0.03}>
                                <div id={`faq-${i}`} className="scroll-mt-24 border-b border-gray-100 pb-12 last:border-0">
                                    <h2 className="text-2xl font-bold text-eyecare-navy font-serif mb-4">
                                        {faq.question}
                                    </h2>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Resources */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <h2 className="text-2xl font-bold text-eyecare-navy font-serif mb-8 text-center">Learn More About Keratoconus</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/keratoconus-resources/ultimate-guide-to-keratoconus" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-eyecare-blue hover:shadow-md transition-all">
                                <h3 className="font-bold text-eyecare-navy mb-2">The Ultimate Guide</h3>
                                <p className="text-sm text-gray-600">Symptoms, causes, and all treatment options explained in depth.</p>
                            </Link>
                            <Link href="/corneal-crosslinking" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-eyecare-blue hover:shadow-md transition-all">
                                <h3 className="font-bold text-eyecare-navy mb-2">Corneal Cross-Linking</h3>
                                <p className="text-sm text-gray-600">The only FDA-approved treatment to stop keratoconus progression.</p>
                            </Link>
                            <Link href="/scleral-lenses-cost" className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-eyecare-blue hover:shadow-md transition-all">
                                <h3 className="font-bold text-eyecare-navy mb-2">Scleral Lenses Cost</h3>
                                <p className="text-sm text-gray-600">Full cost breakdown, insurance coverage, and financing options.</p>
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Lead Form */}
            <section id="lead-form" className="py-12 md:py-24 bg-eyecare-lighter-blue">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-eyecare-navy font-serif mb-3">Still Have Questions?</h2>
                            <p className="text-gray-600">Schedule a consultation and get answers specific to your case.</p>
                        </div>
                        <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-eyecare-blue/10 max-w-3xl mx-auto">
                            <div className="p-6 md:p-12 lg:p-16">
                                <LeadForm />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </LandingLayout>
    );
}
