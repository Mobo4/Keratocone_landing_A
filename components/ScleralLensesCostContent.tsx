'use client';

import React from 'react';
import LandingLayout from '@/components/LandingLayout';
import InsuranceSection from '@/components/InsuranceSection';
import LeadForm from '@/components/LeadForm';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';

const COST_BREAKDOWN = [
    { item: "Initial Keratoconus Evaluation", description: "Corneal topography, tomography, pachymetry, comprehensive exam", range: "$200–$350" },
    { item: "Diagnostic Lens Trials", description: "2–4 trial lenses per eye to optimize fit, vault, and comfort", range: "Included" },
    { item: "Custom Scleral Lens (per eye)", description: "Individually manufactured based on your corneal topography", range: "$800–$1,500" },
    { item: "Fitting Fee", description: "Specialized expertise, over-refraction, insertion/removal training", range: "$400–$800" },
    { item: "90-Day Follow-Up Visits", description: "Post-fitting adjustments and comfort optimization", range: "Included" },
    { item: "Annual Evaluation", description: "Corneal topography monitoring, lens assessment, prescription update", range: "$150–$250" },
    { item: "Replacement Lens", description: "When lens is scratched, deposited, or prescription changes", range: "$500–$1,000" },
];

const COMPARISON = [
    { type: "Standard Soft Contacts", annual: "$200–$500/yr", vision: "Cannot correct keratoconus", custom: "No", lifespan: "Daily–Monthly" },
    { type: "RGP (Hard) Contacts", annual: "$300–$600/yr", vision: "Moderate correction", custom: "Semi-custom", lifespan: "1–2 years" },
    { type: "Scleral Lenses", annual: "$1,500–$3,500 initial", vision: "20/20 or better in 90%+", custom: "Fully custom per eye", lifespan: "1–2 years" },
    { type: "Corneal Transplant", annual: "$13,000–$27,000", vision: "Variable, may still need lenses", custom: "Surgical", lifespan: "15–20 years" },
];

export default function ScleralLensesCostContent() {
    return (
        <LandingLayout>
            {/* Hero */}
            <section className="bg-eyecare-navy text-white py-16 md:py-20">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <FadeIn>
                        <p className="text-eyecare-light-blue font-bold text-sm tracking-widest uppercase mb-4">Medically Reviewed by Dr. Alexander Bonakdar, O.D.</p>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Scleral Lenses Cost: What to Expect</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            Scleral lenses for keratoconus typically cost $1,500–$3,500 per eye. Here is exactly what that includes, what insurance covers, and how to make treatment affordable.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Cost Summary */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="grid lg:grid-cols-3 gap-8 mb-16">
                            <div className="text-center p-8 bg-eyecare-lighter-blue/30 rounded-2xl border border-eyecare-blue/10">
                                <p className="text-4xl font-bold text-eyecare-navy mb-2">$1,500–$3,500</p>
                                <p className="text-gray-600 font-medium">Per Eye (Initial Fitting)</p>
                                <p className="text-sm text-gray-500 mt-2">Includes evaluation, trials, custom lens, training, follow-up</p>
                            </div>
                            <div className="text-center p-8 bg-eyecare-lighter-blue/30 rounded-2xl border border-eyecare-blue/10">
                                <p className="text-4xl font-bold text-eyecare-navy mb-2">$500–$1,000</p>
                                <p className="text-gray-600 font-medium">Replacement Lens</p>
                                <p className="text-sm text-gray-500 mt-2">Every 1–2 years, less than initial because diagnostics are done</p>
                            </div>
                            <div className="text-center p-8 bg-green-50 rounded-2xl border border-green-200">
                                <p className="text-4xl font-bold text-green-700 mb-2">Most Covered</p>
                                <p className="text-gray-600 font-medium">Medical Insurance</p>
                                <p className="text-sm text-gray-500 mt-2">Keratoconus lenses are medically necessary, not cosmetic</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Detailed Breakdown */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-eyecare-navy font-serif mb-12 text-center">Detailed Cost Breakdown</h2>
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                            <div className="grid grid-cols-12 bg-eyecare-navy text-white p-4 text-sm font-bold">
                                <div className="col-span-3">Item</div>
                                <div className="col-span-6">What It Includes</div>
                                <div className="col-span-3 text-right">Cost Range</div>
                            </div>
                            {COST_BREAKDOWN.map((item, i) => (
                                <div key={i} className={`grid grid-cols-12 p-4 text-sm items-start ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-100`}>
                                    <div className="col-span-3 font-medium text-eyecare-navy">{item.item}</div>
                                    <div className="col-span-6 text-gray-600">{item.description}</div>
                                    <div className="col-span-3 text-right font-bold text-eyecare-blue">{item.range}</div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Why So Expensive */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-eyecare-navy font-serif mb-8">Why Scleral Lenses Cost More Than Regular Contacts</h2>
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Standard soft contacts are mass-produced — millions of identical lenses stamped from the same mold for $200–$500 per year. Scleral lenses are the opposite: each lens is <strong>custom-manufactured for your specific eye</strong> based on micron-level corneal topography measurements.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    The fitting process itself requires specialized expertise that most general optometrists do not have. Dr. Bonakdar has 35+ years of experience and has fitted 5,000+ keratoconus patients — the precision required to vault a scleral lens over an irregular cornea while maintaining comfort for 14+ hours of daily wear demands this level of specialization.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Think of it this way: the cost of scleral lenses is comparable to a quality pair of prescription eyeglasses — but scleral lenses provide vision that glasses <em>cannot</em> achieve for keratoconus patients.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-eyecare-navy mb-4">What Makes Them Worth It</h3>
                                <ul className="space-y-4">
                                    {[
                                        { stat: "90%+", text: "of keratoconus patients achieve 20/20 or better with scleral lenses" },
                                        { stat: "14+ hrs", text: "of comfortable daily wear — compared to 4–6 hours with older lens types" },
                                        { stat: "90%", text: "of patients avoid corneal transplant surgery with scleral lens treatment" },
                                        { stat: "1–2 yrs", text: "lens lifespan — works out to ~$2–5/day for clear vision" },
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl">
                                            <span className="text-2xl font-bold text-eyecare-blue whitespace-nowrap">{item.stat}</span>
                                            <span className="text-gray-700">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-eyecare-navy font-serif mb-12 text-center">Cost Comparison: Treatment Options</h2>
                        <div className="bg-white rounded-2xl shadow-md overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-eyecare-navy text-white">
                                        <th className="p-4 text-left font-bold">Treatment</th>
                                        <th className="p-4 text-left font-bold">Cost</th>
                                        <th className="p-4 text-left font-bold">Vision Quality</th>
                                        <th className="p-4 text-left font-bold">Customization</th>
                                        <th className="p-4 text-left font-bold">Lifespan</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {COMPARISON.map((row, i) => (
                                        <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} ${row.type === 'Scleral Lenses' ? 'ring-2 ring-eyecare-blue ring-inset bg-eyecare-lighter-blue/20' : ''}`}>
                                            <td className="p-4 font-medium text-eyecare-navy">{row.type}{row.type === 'Scleral Lenses' && <span className="ml-2 text-xs bg-eyecare-blue text-white px-2 py-0.5 rounded-full">Recommended</span>}</td>
                                            <td className="p-4 text-gray-700">{row.annual}</td>
                                            <td className="p-4 text-gray-700">{row.vision}</td>
                                            <td className="p-4 text-gray-700">{row.custom}</td>
                                            <td className="p-4 text-gray-700">{row.lifespan}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Insurance & Payment */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-eyecare-navy font-serif mb-12 text-center">Insurance & Payment Options</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
                                <h3 className="text-xl font-bold text-green-800 mb-4">Medical Insurance (Use This)</h3>
                                <p className="text-gray-700 mb-4">Scleral lenses for keratoconus are classified as <strong>medically necessary</strong> under ICD-10 code H18.6. File under your medical insurance, not vision plan.</p>
                                <ul className="space-y-2">
                                    {["Blue Cross / Blue Shield", "Aetna", "Cigna", "United Healthcare", "Anthem", "Medicare (with documentation)"].map((ins, i) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-700">
                                            <span className="text-green-500 font-bold">✓</span> {ins}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                                    <h3 className="text-xl font-bold text-eyecare-navy mb-4">Additional Payment Options</h3>
                                    <ul className="space-y-3">
                                        {[
                                            { method: "HSA / FSA", detail: "Pre-tax dollars — saves 25–35% on out-of-pocket costs" },
                                            { method: "CareCredit", detail: "6- and 12-month no-interest financing available" },
                                            { method: "Credit Cards", detail: "Visa, Mastercard, Amex, Discover accepted" },
                                        ].map((opt, i) => (
                                            <li key={i}>
                                                <span className="font-bold text-eyecare-navy">{opt.method}:</span>{' '}
                                                <span className="text-gray-600">{opt.detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                                    <p className="text-amber-900 text-sm">
                                        <strong>Important:</strong> Vision insurance (VSP, EyeMed) does NOT cover scleral lenses for keratoconus. Always use your medical insurance. We verify benefits and obtain pre-authorization before starting.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Insurance Section */}
            <InsuranceSection />

            {/* Lead Form */}
            <section id="lead-form" className="py-16 md:py-24 bg-eyecare-lighter-blue/30">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
                            <div className="p-8 md:p-12 bg-eyecare-navy text-white flex flex-col justify-center">
                                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">Get Your Insurance Verified</h2>
                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    We check your medical insurance benefits for scleral lens coverage before your first visit — no surprises.
                                </p>
                                <p className="text-gray-300">
                                    Or call: <a href="tel:+17145580641" className="text-white font-bold hover:text-eyecare-light-blue">(714) 558-0641</a>
                                </p>
                            </div>
                            <div className="p-8 md:p-12">
                                <LeadForm />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </LandingLayout>
    );
}
