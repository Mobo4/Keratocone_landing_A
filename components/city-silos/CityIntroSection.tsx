/**
 * CityIntroSection - Dimension 1: Demographics-Based City Introduction
 *
 * Renders a hero-style introductory section for city silo pages.
 * Content is pulled from getCityIntro() in city-content-kc.ts, which
 * returns a 150-200 word paragraph with city-type-specific keratoconus
 * context (e.g., coastal-affluent, tech-university, family-suburban, etc.).
 *
 * This section appears at the top of city silo pages, immediately
 * establishing geographic relevance and keratoconus context for the city.
 */

'use client';

import React from 'react';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { getCityType } from '@/data/city-types';
import { getCityIntro } from '@/data/city-content-kc';

interface CityIntroSectionProps {
    citySlug: string;
    cityName: string;
    county: string;
}

export default function CityIntroSection({ citySlug, cityName, county }: CityIntroSectionProps) {
    const cityType = getCityType(citySlug);
    const introText = getCityIntro(cityType, cityName);

    return (
        <section className="relative bg-eyecare-navy text-white py-20 lg:py-28 overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
            {/* Background image */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="w-full h-full bg-[url('/images/corneal-topography-blue.webp')] bg-cover bg-center" />
            </div>

            <div className="container mx-auto px-4 relative z-20">
                <FadeIn>
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6 tracking-wide backdrop-blur-sm">
                        Serving Patients in {cityName}, {county === 'Orange County' ? 'CA' : county}
                    </span>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 max-w-4xl">
                        Keratoconus Treatment for{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                            {cityName}
                        </span>{' '}
                        Residents
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8 leading-relaxed">
                        {introText}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#appointment"
                            className="inline-flex justify-center items-center px-8 py-4 bg-white text-eyecare-navy rounded-full font-bold hover:bg-blue-50 transition-colors"
                        >
                            Book {cityName} Consultation
                        </Link>
                        <Link
                            href="tel:7145580641"
                            className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
                        >
                            Call (714) 558-0641
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
