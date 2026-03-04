'use client';

import React from 'react';
import LandingLayout from '@/components/LandingLayout';
import LandingHero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import InsuranceSection from '@/components/InsuranceSection';
import LeadForm from '@/components/LeadForm';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';

const WARNING_SIGNS = [
    { sign: "Frequent prescription changes", detail: "New glasses or contacts needed every few months — the most common early indicator in children." },
    { sign: "Chronic eye rubbing", detail: "Present in over 90% of pediatric keratoconus cases. Often linked to allergies or habitual behavior." },
    { sign: "Squinting or head tilting", detail: "Children compensate for distorted vision by changing their viewing angle." },
    { sign: "Difficulty seeing the whiteboard", detail: "Teachers may notice the child struggling before parents do. Academic performance often declines." },
    { sign: "Light sensitivity", detail: "Complaints about bright lights, glare from screens, or difficulty with outdoor activities." },
    { sign: "One eye significantly worse", detail: "Asymmetric vision — one eye may need a much stronger prescription than the other." },
];

export default function PediatricKeratoconusContent() {
    return (
        <LandingLayout>
            {/* Hero */}
            <LandingHero
                headline="Keratoconus in Children & Teenagers"
                subheadline="Pediatric keratoconus progresses faster and more aggressively than adult-onset cases. Early detection and treatment prevents years of vision loss. CHOC and UCI Medical Center referral center."
                benefits={[
                    "CHOC Referral Center",
                    "Pediatric Scleral Lens Fitting",
                    "Cross-Linking Coordination",
                    "Ages 8+ Treated",
                    "35+ Years Experience",
                    "Insurance Accepted"
                ]}
                ctaText="Schedule Pediatric Evaluation"
                ctaLink="#contact-form"
                imageSrc="/images/keratoconus-main.webp"
                phoneNumber="(714) 558-0641"
            />

            {/* Why Pediatric KC Is Different */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <p className="text-eyecare-blue font-bold text-sm tracking-widest uppercase mb-3">Medically Reviewed by Dr. Alexander Bonakdar, O.D.</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-eyecare-navy font-serif mb-6">Why Keratoconus in Children Requires Urgent Attention</h2>
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Keratoconus typically begins during puberty (ages 10–15) and progresses most rapidly during the teenage years. In children, the disease is often <strong>more aggressive</strong> than in adults — corneal thinning and steepening can advance quickly, sometimes within months rather than years.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Research published in the <em>British Journal of Ophthalmology</em> found that patients diagnosed before age 15 have a significantly higher risk of requiring corneal transplant if cross-linking is not performed early. Children also face a unique challenge: they may not realize their vision is abnormal because they have never experienced normal sight.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    At the Keratoconus Vision Center, Dr. Bonakdar regularly treats pediatric patients referred from <strong>CHOC (Children&apos;s Hospital of Orange County)</strong> and <strong>UCI Medical Center</strong> — families who need a specialist experienced in fitting scleral lenses on young eyes and coordinating early cross-linking.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-red-50 border border-red-100 rounded-2xl p-8">
                                    <h3 className="text-xl font-bold text-red-800 mb-4">Pediatric vs. Adult Keratoconus</h3>
                                    <div className="space-y-4">
                                        {[
                                            { factor: "Progression speed", child: "Rapid (months)", adult: "Gradual (years)" },
                                            { factor: "Transplant risk (untreated)", child: "Higher", adult: "Lower" },
                                            { factor: "Cross-linking urgency", child: "Immediate", adult: "Based on progression" },
                                            { factor: "Eye rubbing prevalence", child: ">90%", adult: "~50%" },
                                            { factor: "Self-reporting symptoms", child: "Unlikely", adult: "Common" },
                                        ].map((row, i) => (
                                            <div key={i} className="grid grid-cols-3 gap-2 text-sm border-b border-red-100 pb-3 last:border-0 last:pb-0">
                                                <span className="text-gray-700 font-medium">{row.factor}</span>
                                                <span className="text-red-700 font-bold">{row.child}</span>
                                                <span className="text-gray-500">{row.adult}</span>
                                            </div>
                                        ))}
                                        <div className="grid grid-cols-3 gap-2 text-xs text-gray-400 pt-2">
                                            <span></span><span>Children</span><span>Adults</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Warning Signs */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-eyecare-navy font-serif mb-4">Warning Signs Parents Should Watch For</h2>
                            <p className="text-lg text-gray-600">If your child shows any of these signs, a keratoconus screening is recommended.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {WARNING_SIGNS.map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-eyecare-blue">
                                    <h3 className="font-bold text-eyecare-navy mb-2">{item.sign}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.detail}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
                            <p className="text-amber-900 font-medium">
                                <strong>Family history matters:</strong> If a parent has keratoconus, each child has a ~10% chance of developing it. Screening with corneal topography should begin by age 10.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Treatment Approach */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-eyecare-navy font-serif mb-12 text-center">Treatment Approach for Children</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center p-8 bg-eyecare-lighter-blue/30 rounded-2xl border border-eyecare-blue/10">
                                <div className="w-16 h-16 bg-eyecare-navy text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                                <h3 className="text-lg font-bold text-eyecare-navy mb-3">Detect Early</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Corneal topography screening identifies keratoconus before significant vision loss occurs. Recommended for all children with risk factors by age 10.
                                </p>
                            </div>
                            <div className="text-center p-8 bg-eyecare-lighter-blue/30 rounded-2xl border border-eyecare-blue/10">
                                <div className="w-16 h-16 bg-eyecare-navy text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                                <h3 className="text-lg font-bold text-eyecare-navy mb-3">Stop Progression</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    <Link href="/corneal-crosslinking" className="text-eyecare-blue hover:underline">Corneal cross-linking</Link> halts keratoconus in its tracks. In children, early CXL preserves more corneal tissue and prevents the need for transplant.
                                </p>
                            </div>
                            <div className="text-center p-8 bg-eyecare-lighter-blue/30 rounded-2xl border border-eyecare-blue/10">
                                <div className="w-16 h-16 bg-eyecare-navy text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                                <h3 className="text-lg font-bold text-eyecare-navy mb-3">Restore Vision</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    <Link href="/lp/keratoconus-scleral" className="text-eyecare-blue hover:underline">Scleral lenses</Link> fitted to the stabilized cornea restore clear vision — allowing children to read, play sports, and succeed in school.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Eye Rubbing */}
            <section className="py-16 md:py-24 bg-eyecare-navy text-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        <h2 className="text-3xl font-bold font-serif mb-8 text-center">The Eye Rubbing Connection</h2>
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <p className="text-lg text-blue-100 leading-relaxed mb-6">
                                    Chronic eye rubbing is present in <strong className="text-white">over 90%</strong> of pediatric keratoconus patients. The mechanical force weakens corneal collagen fibers and accelerates thinning.
                                </p>
                                <p className="text-lg text-blue-100 leading-relaxed mb-6">
                                    Children rub their eyes for many reasons: allergies (itchy eyes), eczema, habitual behavior, screen fatigue, or sleeping face-down. Managing the underlying cause is a critical part of treatment.
                                </p>
                                <h3 className="text-xl font-bold mb-4">What Parents Can Do</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Treat allergies aggressively (antihistamine drops, oral medication)",
                                        "Teach the \"press, don't rub\" technique for itchy eyes",
                                        "Monitor and gently redirect eye rubbing behavior",
                                        "Address eczema around the eyes with dermatology support",
                                        "Encourage back-sleeping instead of face-down",
                                    ].map((tip, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-eyecare-light-blue font-bold">•</span>
                                            <span className="text-blue-100">{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white/10 rounded-2xl p-8 border border-white/10">
                                <p className="text-5xl font-bold text-eyecare-light-blue mb-2">90%+</p>
                                <p className="text-white font-medium mb-4">of pediatric keratoconus patients rub their eyes chronically</p>
                                <p className="text-sm text-blue-200 italic">Source: Navel et al., Clinical Ophthalmology, 2019</p>
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
                                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">Concerned About Your Child&apos;s Vision?</h2>
                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    Schedule a pediatric keratoconus evaluation. Corneal topography screening takes 15 minutes and can detect keratoconus before vision is significantly affected.
                                </p>
                                <p className="text-gray-300">
                                    Call us: <a href="tel:+17145580641" className="callrail-phone text-white font-bold hover:text-eyecare-light-blue">(714) 558-0641</a>
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
