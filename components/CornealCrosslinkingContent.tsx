'use client';

import React from 'react';
import LandingLayout from '@/components/LandingLayout';
import LandingHero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import InsuranceSection from '@/components/InsuranceSection';
import LeadForm from '@/components/LeadForm';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';

const PROCESS_STEPS = [
    { step: 1, title: "Keratoconus Evaluation", description: "Comprehensive corneal topography and tomography to document your corneal shape, thickness, and any progression. This baseline determines cross-linking candidacy.", time: "60–90 min" },
    { step: 2, title: "Insurance Pre-Authorization", description: "We handle all insurance paperwork, submitting topography evidence of progression to obtain pre-authorization for the cross-linking procedure.", time: "5–10 business days" },
    { step: 3, title: "Cross-Linking Procedure", description: "Performed by a corneal surgeon we coordinate with. The corneal surface is prepared, riboflavin drops applied for 30 minutes, then UV-A light activates the cross-linking process for 30 minutes.", time: "~60 min" },
    { step: 4, title: "Post-Procedure Recovery", description: "Bandage contact lens placed, prescription drops provided. Follow-up at 1 week, 1 month, 3 months, 6 months, and 12 months with corneal topography at each visit.", time: "3–6 months to full stabilization" },
];

export default function CornealCrosslinkingContent() {
    return (
        <LandingLayout>
            {/* Hero */}
            <LandingHero
                headline="Corneal Cross-Linking (CXL)"
                subheadline="The only FDA-approved treatment to stop keratoconus progression. Cross-linking strengthens the cornea using UV light and riboflavin, preventing further thinning in 94% of patients. Early treatment preserves vision."
                benefits={[
                    "FDA-Approved Since 2016",
                    "94% Success Rate",
                    "60-Minute Outpatient Procedure",
                    "Insurance Typically Covers",
                    "Stops Progression Permanently",
                    "Coordinated With Top Surgeons"
                ]}
                ctaText="Get Evaluated for CXL"
                ctaLink="#contact-form"
                imageSrc="/images/keratoconus-main.webp"
                phoneNumber="(714) 558-0641"
            />

            {/* What Is CXL */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            <div>
                                <p className="text-eyecare-blue font-bold text-sm tracking-widest uppercase mb-3">Medically Reviewed by Dr. Alexander Bonakdar, O.D.</p>
                                <h2 className="text-3xl md:text-4xl font-bold text-eyecare-navy font-serif mb-6">What Is Corneal Cross-Linking?</h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Corneal cross-linking (CXL) is a minimally invasive procedure that uses UV-A light and riboflavin (vitamin B2) drops to create new bonds between collagen fibers in the cornea. These new &ldquo;cross-links&rdquo; strengthen the corneal structure, preventing the progressive thinning and bulging that defines keratoconus.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Approved by the FDA in 2016 (Avedro iLink system), cross-linking is the <strong>only treatment that stops keratoconus from getting worse</strong>. Clinical trials showed a 94% success rate in halting progression, with approximately 50% of patients experiencing modest vision improvement as the cornea stabilizes.
                                </p>
                                <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl">
                                    <p className="text-amber-900 font-medium">
                                        <strong>Important:</strong> Cross-linking stops progression but does not correct existing vision loss. For vision restoration, <Link href="/lp/keratoconus-scleral" className="text-eyecare-blue hover:underline">scleral contact lenses</Link> are fitted after the cornea stabilizes (typically 3–6 months post-CXL).
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-eyecare-lighter-blue/30 rounded-2xl p-8 border border-eyecare-blue/10">
                                    <h3 className="text-xl font-bold text-eyecare-navy mb-4">CXL Key Facts</h3>
                                    <div className="space-y-4">
                                        {[
                                            { label: "Success Rate", value: "94% halt progression" },
                                            { label: "Procedure Time", value: "~60 minutes" },
                                            { label: "FDA Approved", value: "2016 (Avedro iLink)" },
                                            { label: "Recovery", value: "1–2 weeks initial, 3–6 months full" },
                                            { label: "Cost", value: "$2,500–$4,000/eye" },
                                            { label: "Insurance", value: "Most major plans cover" },
                                            { label: "Anesthesia", value: "Topical (numbing drops only)" },
                                            { label: "Age Range", value: "9+ years old" },
                                        ].map((fact, i) => (
                                            <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                                                <span className="text-gray-600 text-sm">{fact.label}</span>
                                                <span className="text-eyecare-navy font-bold text-sm">{fact.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Who Needs CXL */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-eyecare-navy font-serif mb-12 text-center">Who Needs Corneal Cross-Linking?</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-green-500">
                                <h3 className="text-xl font-bold text-eyecare-navy mb-4">Good Candidates</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Documented progressive keratoconus on topography",
                                        "Corneal thickness ≥ 400 microns",
                                        "Age 9 and older",
                                        "Not pregnant or nursing",
                                        "No significant corneal scarring",
                                        "Newly diagnosed teenagers (proactive treatment)",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-green-500 font-bold mt-0.5">✓</span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-red-400">
                                <h3 className="text-xl font-bold text-eyecare-navy mb-4">May Not Be Candidates</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Cornea thinner than 400 microns",
                                        "Significant corneal scarring",
                                        "Pregnant or nursing",
                                        "Active herpes simplex keratitis",
                                        "Stable keratoconus with no progression in 2+ years",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-red-400 font-bold mt-0.5">✗</span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* The CXL Process */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-eyecare-navy font-serif mb-4">The Cross-Linking Process</h2>
                            <p className="text-lg text-gray-600">From evaluation to stabilization — here is what to expect.</p>
                        </div>
                        <div className="space-y-8">
                            {PROCESS_STEPS.map((step) => (
                                <div key={step.step} className="flex gap-6 items-start">
                                    <div className="w-12 h-12 bg-eyecare-navy text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">{step.step}</div>
                                    <div className="flex-1 bg-gray-50 rounded-xl p-6 border border-gray-100">
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                                            <h3 className="text-xl font-bold text-eyecare-navy">{step.title}</h3>
                                            <span className="text-sm text-eyecare-blue font-medium bg-eyecare-lighter-blue/50 px-3 py-1 rounded-full whitespace-nowrap">{step.time}</span>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CXL + Scleral Lenses */}
            <section className="py-16 md:py-24 bg-eyecare-navy text-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold font-serif mb-6">Cross-Linking + Scleral Lenses: The Complete Approach</h2>
                        <p className="text-lg text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
                            Cross-linking stops keratoconus from getting worse. Scleral lenses restore the clear vision you have lost. Together, they form the gold-standard treatment plan that helps 90%+ of keratoconus patients avoid corneal transplant surgery.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <div className="bg-white/10 rounded-xl p-6 border border-white/10">
                                <p className="text-3xl font-bold text-eyecare-light-blue mb-2">Step 1</p>
                                <h3 className="text-lg font-bold mb-2">Evaluate</h3>
                                <p className="text-blue-100 text-sm">Corneal topography confirms keratoconus diagnosis and determines if progression is occurring.</p>
                            </div>
                            <div className="bg-white/10 rounded-xl p-6 border border-white/10">
                                <p className="text-3xl font-bold text-eyecare-light-blue mb-2">Step 2</p>
                                <h3 className="text-lg font-bold mb-2">Stabilize</h3>
                                <p className="text-blue-100 text-sm">Cross-linking halts progression. The cornea strengthens over 3–6 months.</p>
                            </div>
                            <div className="bg-white/10 rounded-xl p-6 border border-white/10">
                                <p className="text-3xl font-bold text-eyecare-light-blue mb-2">Step 3</p>
                                <h3 className="text-lg font-bold mb-2">Restore</h3>
                                <p className="text-blue-100 text-sm"><Link href="/lp/keratoconus-scleral" className="text-white underline hover:text-eyecare-light-blue">Scleral lenses</Link> are fitted to the stabilized cornea, restoring 20/20 functional vision.</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Cost & Insurance */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-eyecare-navy font-serif mb-12 text-center">Cross-Linking Cost & Insurance</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl shadow-md p-8">
                                <h3 className="text-xl font-bold text-eyecare-navy mb-4">Cost Range</h3>
                                <p className="text-4xl font-bold text-eyecare-blue mb-2">$2,500–$4,000</p>
                                <p className="text-gray-500 mb-6">per eye (before insurance)</p>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-2"><span className="text-eyecare-blue">•</span> Pre-operative evaluation and topography</li>
                                    <li className="flex items-start gap-2"><span className="text-eyecare-blue">•</span> Riboflavin solution and UV-A treatment</li>
                                    <li className="flex items-start gap-2"><span className="text-eyecare-blue">•</span> Post-operative follow-up visits (12 months)</li>
                                    <li className="flex items-start gap-2"><span className="text-eyecare-blue">•</span> Bandage contact lens and prescription drops</li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-xl shadow-md p-8">
                                <h3 className="text-xl font-bold text-eyecare-navy mb-4">Insurance Coverage</h3>
                                <p className="text-lg text-gray-700 mb-6">Most major medical insurance plans cover corneal cross-linking for documented progressive keratoconus since FDA approval in 2016.</p>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span> Blue Cross / Blue Shield</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span> Aetna</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span> Cigna</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span> United Healthcare</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span> HSA / FSA Eligible</li>
                                    <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span> CareCredit Accepted</li>
                                </ul>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* Insurance */}
            <InsuranceSection />

            {/* Lead Form */}
            <section id="lead-form" className="py-16 md:py-24 bg-eyecare-lighter-blue/30">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
                            <div className="p-8 md:p-12 bg-eyecare-navy text-white flex flex-col justify-center">
                                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">Is Cross-Linking Right for You?</h2>
                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    Schedule a keratoconus evaluation to determine if corneal cross-linking can stop your progression. Same-week appointments available.
                                </p>
                                <p className="text-gray-300">
                                    Or call now: <a href="tel:+17145580641" className="text-white font-bold hover:text-eyecare-light-blue">(714) 558-0641</a>
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
