/**
 * CityRiskFactors - Dimension 2: Local Risk Factors
 *
 * Renders city-type-specific keratoconus risk factor content.
 * Each city type (coastal-affluent, tech-university, family-suburban, etc.)
 * has unique environmental and demographic risk factors that
 * differentiate the content across city silo pages.
 *
 * Examples:
 *  - Coastal-affluent: UV exposure from water, salt air, premium lifestyle demands
 *  - Coastal-active: Sand, wind, surf culture, allergic eye rubbing
 *  - Tech-university: Extended screen time, dry office environments, young demographics
 *  - Family-suburban: Pediatric onset, genetic predisposition, school performance
 *
 * Data is sourced from getLocalRiskFactors() in city-content-kc.ts, which
 * returns a 100-150 word paragraph tailored to the city type.
 */

'use client';

import React from 'react';
import { AlertTriangle } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { getCityType } from '@/data/city-types';
import { getLocalRiskFactors } from '@/data/city-content-kc';

interface CityRiskFactorsProps {
    citySlug: string;
    cityName: string;
}

export default function CityRiskFactors({ citySlug, cityName }: CityRiskFactorsProps) {
    const cityType = getCityType(citySlug);
    const riskFactorsText = getLocalRiskFactors(cityType, cityName);

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4">
                <FadeIn>
                    <div className="flex items-start gap-4 mb-8">
                        <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                            <AlertTriangle className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mb-2">
                                Keratoconus Risk Factors for {cityName} Residents
                            </h2>
                            <p className="text-gray-500 text-sm">
                                Understanding local risk factors for your community
                            </p>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                        {riskFactorsText}
                    </p>
                </FadeIn>

                {/* Early detection callout */}
                <FadeIn delay={0.3}>
                    <div className="bg-blue-50 rounded-2xl p-6 md:p-8 border border-blue-100">
                        <p className="text-gray-700 leading-relaxed">
                            <span className="font-bold text-eyecare-navy">Early detection is critical.</span>{' '}
                            If you live in {cityName} and are experiencing blurred vision, frequent prescription
                            changes, or light sensitivity, a comprehensive corneal evaluation with Dr. Bonakdar
                            can determine whether keratoconus is the cause. Same-week appointments are available.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
