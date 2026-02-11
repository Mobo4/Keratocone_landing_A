/**
 * CityInsuranceSection - Dimension 5: City-Type Insurance Messaging
 *
 * Replaces generic insurance content with city-type-aware messaging.
 * Different city demographics have different insurance profiles:
 *
 *  - Tech-hub cities: Employer-sponsored PPOs, HSAs common
 *  - Senior cities: Medicare emphasis, supplemental plans
 *  - Affluent cities: Concierge-style messaging, premium coverage
 *  - Family cities: Family plan coverage, pediatric benefits
 *  - Coastal cities: Active lifestyle + insurance integration
 *
 * Combines the accepted insurance lists (vision + medical) with
 * city-type-specific messaging and financing options.
 *
 * Data is sourced from getInsuranceMessaging() in city-content-kc.ts.
 */

'use client';

import React from 'react';
import { CheckCircle, CreditCard, Shield } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { getCityType } from '@/data/city-types';
import { getInsuranceMessaging as getInsuranceText } from '@/data/city-content-kc';

interface CityInsuranceSectionProps {
    citySlug: string;
    cityName: string;
}

// Standard insurance lists accepted by the practice
const visionPlans = [
    'VSP (Vision Service Plan)',
    'EyeMed',
    'Davis Vision',
    'Spectera',
    'Superior Vision',
    'Avesis',
];

const medicalPlans = [
    'Medicare',
    'Blue Shield of California',
    'Anthem Blue Cross',
    'United Healthcare',
    'Cigna',
    'Aetna',
    'Tricare',
];

export default function CityInsuranceSection({ citySlug, cityName }: CityInsuranceSectionProps) {
    const cityType = getCityType(citySlug);
    const insuranceText = getInsuranceText(cityType, cityName);

    return (
        <section className="py-16 md:py-20 bg-eyecare-warm border-t border-gray-100">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-serif font-bold text-eyecare-navy mb-4">
                                Insurance & Payment Options for {cityName} Patients
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                We work with most major insurance providers to maximize your keratoconus treatment benefits.
                            </p>
                        </div>

                        {/* City-type-specific insurance messaging */}
                        {insuranceText && (
                            <div className="bg-blue-50 rounded-2xl p-6 md:p-8 border border-blue-100 mb-8">
                                <div className="flex items-start gap-3">
                                    <Shield className="w-6 h-6 text-eyecare-blue shrink-0 mt-0.5" />
                                    <p className="text-gray-700 leading-relaxed">
                                        {insuranceText}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Insurance plan grids */}
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-eyecare-blue mb-4">Vision Plans</h3>
                                <ul className="space-y-3">
                                    {visionPlans.map((plan, i) => (
                                        <li key={i} className="flex items-center text-gray-700">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                            <span className="font-medium">{plan}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-xl font-bold text-eyecare-navy mb-4">Medical Plans</h3>
                                <ul className="space-y-3">
                                    {medicalPlans.map((plan, i) => (
                                        <li key={i} className="flex items-center text-gray-700">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                            <span className="font-medium">{plan}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Financing options */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center">
                                <h4 className="font-bold text-eyecare-navy mb-2">HSA & FSA Accepted</h4>
                                <p className="text-sm text-gray-600">
                                    Use pre-tax dollars for medically necessary contact lenses and keratoconus evaluations.
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                                <h4 className="font-bold text-eyecare-navy mb-2">CareCredit Financing</h4>
                                <p className="text-sm text-gray-600">
                                    0% interest financing options available through CareCredit to make treatment affordable.
                                </p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
                                <h4 className="font-bold text-eyecare-navy mb-2">Major Cards Accepted</h4>
                                <div className="flex items-center justify-center gap-2 mt-1">
                                    <CreditCard className="w-4 h-4 text-gray-400" />
                                    <div className="flex justify-center gap-3">
                                        <span className="font-bold text-slate-500 text-sm">VISA</span>
                                        <span className="font-bold text-slate-500 text-sm">MC</span>
                                        <span className="font-bold text-slate-500 text-sm">AMEX</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Verification note */}
                        <p className="text-center text-sm text-gray-500 mt-8">
                            We verify your insurance coverage before your first visit. Call{' '}
                            <a href="tel:7145580641" className="text-eyecare-blue font-medium hover:underline">
                                (714) 558-0641
                            </a>{' '}
                            with any questions about coverage for keratoconus treatment.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
