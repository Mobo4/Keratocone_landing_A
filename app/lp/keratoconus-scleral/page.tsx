'use client';

import React from 'react';
import LandingLayout from '@/components/LandingLayout';
import LandingHero from '@/components/Hero';
import VisionSimulator from '@/components/VisionSimulator';
import Testimonials from '@/components/Testimonials';
import InsuranceSection from '@/components/InsuranceSection';
import LeadForm from '@/components/LeadForm';
import KeratoconusQuiz from '@/components/KeratoconusQuiz';
import FadeIn from '@/components/FadeIn';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Keratoconus Scleral Lenses | Expert Fitting in Orange County",
    description: "Scleral lens specialists for difficult keratoconus cases. Non-surgical vision restoration when other contacts fail. Book your consultation.",
    alternates: {
        canonical: 'https://keratocones.com/lp/keratoconus-scleral',
    },
};

export default function KeratoconusScleralPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Keratoconus Scleral Lens Treatment",
        "description": "Specialized scleral lens fitting for keratoconus patients in Orange County.",
        "url": "https://keratocones.com/lp/keratoconus-scleral",
        "mainEntity": {
            "@type": "MedicalSpecialty",
            "name": "Scleral Lenses",
            "medicalCode": "HCPCS V2531"
        }
    };

    return (
        <LandingLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            {/* 1. Hero Section */}
            <LandingHero
                headline="Keratoconus Treatment in Orange County"
                subheadline="Specialty Scleral Lenses & Expert Care. 35+ Years of Experience Helping Patients See Clearly Again."
                benefits={[
                    "Advanced Scleral Lens Technology",
                    "Non-Surgical Vision Restoration",
                    "Complex Case Specialists",
                    "Most Insurance Accepted",
                    "Free Consultation Available"
                ]}
                ctaText="Book Consultation"
                ctaLink="#lead-form"
                imageSrc="/images/keratoconus-main.webp" // Reusing working image for now
                phoneNumber="(714) 558-0641"
            />

            {/* 2. Introduction: Understanding & Benefits */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        <div className="mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-eyecare-navy font-serif mb-6">Understanding Keratoconus</h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Keratoconus is a progressive eye condition where the cornea thins and bulges into a cone-like shape, causing blurred vision, light sensitivity, and difficulty with everyday activities. At EyeCare Center of Orange County, we specialize in comprehensive keratoconus management.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Our keratoconus specialist, Dr. Alexander Bonakdar, has over 35 years of experience fitting scleral contact lenses and managing complex corneal conditions. We've helped thousands of patients who were told they had no options achieve remarkable improvements in their vision and quality of life.
                            </p>
                        </div>

                        <div className="bg-eyecare-lighter-blue/30 rounded-2xl p-8 md:p-10 border border-eyecare-blue/20">
                            <h3 className="text-2xl font-bold text-eyecare-navy font-serif mb-6">Benefits of Keratoconus Treatment</h3>
                            <ul className="grid md:grid-cols-2 gap-4">
                                {[
                                    "Clear vision restoration with specialized lenses",
                                    "Non-surgical treatment options available",
                                    "Same-day consultations for new patients",
                                    "Advanced diagnostic imaging",
                                    "Coordinated care for cross-linking",
                                    "Flexible payment options and insurance accepted"
                                ].map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 bg-eyecare-blue rounded-full mt-2.5 shrink-0" />
                                        <span className="text-gray-700 font-medium">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 3. The Keratoconus Process */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-eyecare-navy font-serif mb-4">The Keratoconus Process</h2>
                            <p className="text-lg text-gray-600">A dedicated pathway to restoring your vision.</p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 relative">
                            {[
                                {
                                    title: "Comprehensive Evaluation",
                                    text: "Advanced corneal imaging and detailed eye examination to assess your keratoconus severity."
                                },
                                {
                                    title: "Treatment Planning",
                                    text: "Reviewing your options including scleral lenses or hybrid lenses to create a personalized plan."
                                },
                                {
                                    title: "Lens Fitting & Trial",
                                    text: "Custom fitting with multiple trial lenses to ensure optimal comfort and immediate vision improvement."
                                },
                                {
                                    title: "Follow-Up Care",
                                    text: "Regular monitoring appointments to track progression and ensure long-term eye health."
                                }
                            ].map((step, i) => (
                                <div key={i} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-eyecare-blue relative z-10">
                                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-eyecare-navy text-white rounded-full flex items-center justify-center font-bold shadow-lg">
                                        {i + 1}
                                    </div>
                                    <h3 className="text-lg font-bold text-eyecare-navy mb-3 mt-2">{step.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{step.text}</p>
                                </div>
                            ))}
                            {/* Connecting line for desktop */}
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-0 transform -translate-y-1/2"></div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 4. Vision Simulator (Integrated as High-Value Feature) */}
            <section className="py-20 bg-eyecare-navy">
                <div className="container mx-auto px-4">
                    <FadeIn>
                        <div className="text-center mb-12 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">See the Difference</h2>
                            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                                Experience how Scleral Lenses can transform typical Keratoconus vision into clear sight using our interactive simulator.
                            </p>
                        </div>
                        <VisionSimulator />
                    </FadeIn>
                </div>
            </section>

            {/* 5. Candidates & Quiz */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <h2 className="text-3xl font-bold text-eyecare-navy font-serif mb-6">Is Keratoconus Treatment Right for You?</h2>
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-bold text-eyecare-blue mb-2">Good Candidates</h3>
                                        <ul className="space-y-2">
                                            {[
                                                "Diagnosed with keratoconus or corneal ectasia",
                                                "Dissatisfied with vision in glasses",
                                                "Contacts are uncomfortable or pop out",
                                                "Experience glare, halos, or ghosting"
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-2 text-gray-700">
                                                    <span className="text-green-500 font-bold">✓</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                                        <p className="text-sm text-orange-800 font-medium">
                                            Note: Even if you've been told you are a "difficult fit," our specialized technology can often help.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-eyecare-lighter-blue p-1 rounded-2xl shadow-xl">
                                <KeratoconusQuiz />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* 6. Testimonials */}
            <Testimonials />

            {/* 7. Cost & Insurance */}
            <InsuranceSection />

            {/* 8. CTA / Lead Form */}
            <section id="lead-form" className="py-16 md:py-24 bg-eyecare-lighter-blue/30">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
                            <div className="p-8 md:p-12 bg-eyecare-navy text-white flex flex-col justify-center">
                                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">Start Your Journey</h2>
                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    Don't let keratoconus define your vision. Schedule your consultation with Dr. Bonakdar today.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-eyecare-light-blue">1</div>
                                        <span className="font-medium">Request Appointment</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-eyecare-light-blue">2</div>
                                        <span className="font-medium">Comprehensive Exam</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-eyecare-light-blue">3</div>
                                        <span className="font-medium">Custom Treatment Plan</span>
                                    </div>
                                </div>
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
