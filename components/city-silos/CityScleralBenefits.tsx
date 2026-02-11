/**
 * CityScleralBenefits - Dimension 3: Lifestyle-Specific Scleral Lens Benefits
 *
 * Renders scleral lens benefits tailored to the city's dominant lifestyle.
 * Content varies by city type to show how scleral lenses address the
 * specific visual demands of residents in that community.
 *
 * Examples:
 *  - Coastal-affluent: Premium materials, UV blocking, glare management
 *  - Coastal-active: Sports stability, wind protection, hydration in salt air
 *  - Tech-university: Screen comfort, digital focus, all-day hydration
 *  - Family-suburban: Child-friendly fitting, sports safety, school performance
 *
 * Data is sourced from getScleralBenefits() in city-content-kc.ts, which
 * returns a 150-200 word paragraph tailored to the city type.
 */

'use client';

import React from 'react';
import { Eye, CheckCircle } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { getCityType } from '@/data/city-types';
import { getScleralBenefits } from '@/data/city-content-kc';

interface CityScleralBenefitsProps {
    citySlug: string;
    cityName: string;
}

export default function CityScleralBenefits({ citySlug, cityName }: CityScleralBenefitsProps) {
    const cityType = getCityType(citySlug);
    const benefitsText = getScleralBenefits(cityType, cityName);

    // Universal scleral lens advantages (always shown)
    const keyAdvantages = [
        'Vault entirely over the cornea without contact, protecting thinning tissue',
        'Fluid reservoir provides continuous hydration throughout the day',
        'Stable on the eye during physical activity and sports',
        'Corrects higher-order aberrations that glasses cannot address',
        'Compatible with most insurance plans as medically necessary',
    ];

    return (
        <section className="py-16 md:py-20 bg-eyecare-lighter-blue">
            <div className="max-w-4xl mx-auto px-4">
                <FadeIn>
                    <div className="text-center mb-10">
                        <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-eyecare-blue mx-auto mb-4">
                            <Eye className="w-7 h-7" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mb-4">
                            How Scleral Lenses Help {cityName} Patients
                        </h2>
                    </div>
                </FadeIn>

                {/* City-type-specific benefits text */}
                <FadeIn delay={0.1}>
                    <p className="text-lg text-gray-700 leading-relaxed mb-10">
                        {benefitsText}
                    </p>
                </FadeIn>

                {/* Key advantages list */}
                <FadeIn delay={0.2}>
                    <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                        <h3 className="text-xl font-bold text-eyecare-navy mb-5">
                            Key Scleral Lens Advantages
                        </h3>
                        <ul className="space-y-3">
                            {keyAdvantages.map((advantage, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span className="text-gray-700 leading-relaxed">{advantage}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
