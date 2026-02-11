/**
 * KeratoconusEducationSnippet - Section 11: Link to Resources
 *
 * A compact educational section that links to the main keratoconus
 * resources page and specific articles. This provides internal
 * linking value and additional unique content at the bottom of
 * city silo pages.
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

interface KeratoconusEducationSnippetProps {
    cityName: string;
}

const educationLinks = [
    {
        title: 'Scleral Lenses vs. Corneal Transplant',
        href: '/keratoconus-resources/scleral-lenses-vs-corneal-transplant',
        summary: 'When scleral lenses can delay or replace the need for corneal transplant surgery.',
    },
    {
        title: 'Understanding Keratoconus Stages',
        href: '/keratoconus-resources',
        summary: 'A guide to the four stages of keratoconus and what each means for treatment.',
    },
    {
        title: 'Why Early Detection Matters',
        href: '/keratoconus-resources',
        summary: 'How corneal topography screening identifies keratoconus years before symptoms become severe.',
    },
];

export default function KeratoconusEducationSnippet({ cityName }: KeratoconusEducationSnippetProps) {
    return (
        <section className="py-12 md:py-16 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto px-4">
                <FadeIn>
                    <div className="flex items-start gap-4 mb-8">
                        <div className="w-10 h-10 rounded-full bg-eyecare-lighter-blue flex items-center justify-center text-eyecare-blue shrink-0">
                            <BookOpen className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-eyecare-navy">
                                Keratoconus Resources for {cityName} Patients
                            </h2>
                            <p className="text-sm text-gray-500 mt-1">
                                Learn more about keratoconus, scleral lenses, and your treatment options
                            </p>
                        </div>
                    </div>
                </FadeIn>

                <div className="space-y-4">
                    {educationLinks.map((link, index) => (
                        <FadeIn key={index} delay={index * 0.08}>
                            <Link
                                href={link.href}
                                className="block bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-eyecare-blue/30 hover:shadow-sm transition-all group"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="font-bold text-eyecare-navy mb-1 group-hover:text-eyecare-blue transition-colors">
                                            {link.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {link.summary}
                                        </p>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-eyecare-blue shrink-0 mt-1 transition-colors" />
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.3}>
                    <div className="mt-6 text-center">
                        <Link
                            href="/keratoconus-resources"
                            className="inline-flex items-center gap-2 text-eyecare-blue font-medium hover:text-eyecare-dark-blue transition-colors"
                        >
                            View All Keratoconus Resources
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
