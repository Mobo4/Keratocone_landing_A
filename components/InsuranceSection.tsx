'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';
import FadeIn from './FadeIn';

const visionInsurances = [
    "VSP (Vision Service Plan)",
    "EyeMed",
    "Davis Vision",
    "Spectera",
    "Superior Vision",
    "Avesis"
];

const medicalInsurances = [
    "Medicare",
    "Blue Shield of California",
    "Anthem Blue Cross",
    "United Healthcare",
    "Cigna",
    "Aetna",
    "Tricare"
];

export default function InsuranceSection() {
    return (
        <section className="py-16 bg-eyecare-warm border-t border-eyecare-blue/10">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-eyecare-navy font-serif mb-4">Insurance Plans We Accept</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We work with most major vision and medical insurance providers to maximize your benefits.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Vision Insurance */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-eyecare-blue mb-6 flex items-center justify-center">
                                <span className="bg-blue-50 p-2 rounded-lg mr-3">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </span>
                                Vision Plans
                            </h3>
                            <ul className="space-y-3">
                                {visionInsurances.map((plan, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                        <span className="font-medium">{plan}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Medical Insurance */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-eyecare-navy mb-6 flex items-center justify-center">
                                <span className="bg-gray-50 p-2 rounded-lg mr-3">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </span>
                                Medical Plans
                            </h3>
                            <ul className="space-y-3">
                                {medicalInsurances.map((plan, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                                        <span className="font-medium">{plan}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs text-gray-400 mt-6 text-center">
                                *Medical insurance is often used for medically necessary contact lenses.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
