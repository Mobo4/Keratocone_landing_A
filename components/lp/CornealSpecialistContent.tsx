'use client';

import React from 'react';
import LandingLayout from '@/components/LandingLayout';
import LandingHero from '@/components/Hero';
import VisionSimulator from '@/components/VisionSimulator';
import Testimonials from '@/components/Testimonials';
import InsuranceSection from '@/components/InsuranceSection';
import LeadForm from '@/components/LeadForm';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';
import GeoBadge from '@/components/GeoBadge';

interface CornealSpecialistContentProps {
    geoHeadline?: string;
    geoSubhead?: string;
    geoBadge?: string;
}

const CONDITIONS = [
    {
        name: "Keratoconus",
        description: "Progressive corneal thinning and steepening that distorts vision. Our cornea specialist has treated 500+ keratoconus cases with scleral lenses.",
    },
    {
        name: "Pellucid Marginal Degeneration",
        description: "A rare corneal thinning disorder affecting the lower cornea. Requires a cornea specialist experienced in irregular cornea management.",
    },
    {
        name: "Post-Surgical Corneal Irregularity",
        description: "Vision problems after LASIK, RK, or corneal transplant. Our cornea specialist fits lenses over complex post-surgical corneas.",
    },
    {
        name: "Corneal Ectasia",
        description: "Corneal weakening that can occur after refractive surgery. Treated with specialty lenses by an experienced cornea specialist.",
    },
];

export default function CornealSpecialistContent({ geoHeadline, geoSubhead, geoBadge }: CornealSpecialistContentProps) {
    return (
        <LandingLayout>
            {/* Geo Badge */}
            {geoBadge && <GeoBadge text={geoBadge} />}
            {/* Hero */}
            <LandingHero
                headline={geoHeadline || "Cornea Specialist in Orange County"}
                subheadline={geoSubhead || "Dr. Alexander Bonakdar is an Orange County cornea specialist with 35+ years of experience treating keratoconus, corneal disease, and complex corneal conditions. Referral center for CHOC and UCI Medical Center."}
                benefits={[
                    "35+ Years Cornea Experience",
                    "500+ Complex Cases Treated",
                    "Advanced Corneal Imaging",
                    "Scleral Lens Specialist",
                    "Insurance Accepted",
                    "Same-Week Appointments"
                ]}
                ctaText="See the Cornea Specialist"
                ctaLink="#contact-form"
                imageSrc="/images/keratoconus-main.webp"
                phoneNumber="(714) 558-0641"
            />

            {/* Why Choose This Cornea Specialist */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-eyecare-navy font-serif mb-4">Why Choose Our Cornea Specialist</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Not all eye doctors specialize in corneal conditions. As a dedicated cornea specialist in Orange County, Dr. Bonakdar focuses exclusively on the most challenging corneal cases.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-eyecare-lighter-blue/30 rounded-2xl p-8 border border-eyecare-blue/10">
                                <h3 className="text-xl font-bold text-eyecare-navy mb-4">Cornea Specialist Expertise</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Fellowship-level training in corneal disease management",
                                        "Advanced corneal topography and tomography on-site",
                                        "Referral center for CHOC & UCI Medical Center",
                                        "Published research in corneal treatment approaches",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 bg-eyecare-blue rounded-full mt-2.5 shrink-0" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-eyecare-lighter-blue/30 rounded-2xl p-8 border border-eyecare-blue/10">
                                <h3 className="text-xl font-bold text-eyecare-navy mb-4">Patient-Centered Approach</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Same-week appointments for urgent corneal concerns",
                                        "Personalized treatment plans for each corneal condition",
                                        "Ongoing monitoring to track corneal health over time",
                                        "Coordination with corneal surgeons when needed",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 bg-eyecare-blue rounded-full mt-2.5 shrink-0" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Corneal Conditions Treated */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-eyecare-navy font-serif mb-4">Corneal Conditions We Treat</h2>
                            <p className="text-lg text-gray-600">
                                As a cornea specialist, Dr. Bonakdar treats the full spectrum of corneal disease in Orange County.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {CONDITIONS.map((condition, i) => (
                                <div key={i} className="bg-white p-8 rounded-xl shadow-md border-l-4 border-eyecare-blue">
                                    <h3 className="text-xl font-bold text-eyecare-navy mb-3">{condition.name}</h3>
                                    <p className="text-gray-600 leading-relaxed">{condition.description}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Diagnostic Technology */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-eyecare-navy font-serif mb-6">Advanced Corneal Diagnostics</h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    Accurate diagnosis is the foundation of effective corneal treatment. Our cornea specialist uses the latest diagnostic technology to map your corneal surface with micron-level precision.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-eyecare-blue rounded-full"></div>
                                        <span className="text-gray-700 font-medium">Corneal Topography (Surface Curvature Mapping)</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-eyecare-blue rounded-full"></div>
                                        <span className="text-gray-700 font-medium">Corneal Tomography (Full Thickness Analysis)</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-eyecare-blue rounded-full"></div>
                                        <span className="text-gray-700 font-medium">Pachymetry (Corneal Thickness Measurement)</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-eyecare-blue rounded-full"></div>
                                        <span className="text-gray-700 font-medium">Anterior Segment OCT Imaging</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative">
                                <div className="bg-white p-4 rounded-2xl shadow-xl border border-eyecare-blue/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <div className="aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden relative">
                                        <img
                                            src="https://res.cloudinary.com/broadcastmed/image/fetch/q_auto,f_auto/dpr_auto/https://ophthalmologymanagement.com/media/bx5jmelz/omd_jun_6301.jpg"
                                            alt="Corneal topography map used by our cornea specialist to diagnose keratoconus and other corneal conditions"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-center mt-4 text-sm font-bold text-eyecare-navy">Corneal Topography: Precision Mapping by Our Cornea Specialist</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Vision Simulator */}
            <section className="py-20 bg-eyecare-navy">
                <div className="container mx-auto px-4">
                    <FadeIn>
                        <div className="text-center mb-12 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">See the Difference a Cornea Specialist Makes</h2>
                            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                                Experience how treatment from an experienced cornea specialist can transform vision affected by corneal disease.
                            </p>
                        </div>
                        <VisionSimulator />
                    </FadeIn>
                </div>
            </section>

            {/* About the Cornea Specialist */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-[#faf9f6] via-[#f0eadd] to-[#e6dfd1]">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="grid md:grid-cols-3 gap-12 items-center">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-eyecare-navy mb-6 shadow-2xl">
                                    <img
                                        src="/images/drbonakdar.webp"
                                        alt="Dr. Alexander Bonakdar - Cornea Specialist, Orange County, California"
                                        className="w-full h-full object-cover"
                                        style={{ objectPosition: 'center 30%' }}
                                    />
                                </div>
                                <h3 className="text-2xl font-bold mb-1 font-serif text-eyecare-navy">Dr. Alexander Bonakdar, O.D.</h3>
                                <p className="text-base md:text-sm text-gray-700">Cornea Specialist</p>
                                <p className="text-base md:text-sm text-gray-700">35+ Years Clinical Experience</p>
                            </div>
                            <div className="md:col-span-2 space-y-6">
                                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                                    Dr. Bonakdar is an Orange County cornea specialist who has dedicated his career to treating patients with keratoconus and other corneal diseases. As a cornea specialist, he provides advanced corneal evaluation, scleral lens fitting, and ongoing corneal health management at the Keratoconus Vision Center in Santa Ana, California.
                                </p>
                                <p className="text-base md:text-lg text-gray-800 leading-relaxed">
                                    The practice receives referrals from CHOC (Children&apos;s Hospital of Orange County) and UCI Medical Center for complex corneal cases that require the expertise of an experienced cornea specialist.
                                </p>
                                <div className="bg-white/60 rounded-xl p-6 border border-gray-200">
                                    <p className="text-gray-800 font-medium mb-2">Keratoconus Vision Center</p>
                                    <p className="text-gray-600">801 North Tustin Ave, Suite 401</p>
                                    <p className="text-gray-600">Santa Ana, CA 92705</p>
                                    <p className="text-gray-600 mt-2">Phone: <a href="tel:+17145580641" className="text-eyecare-blue hover:underline">(714) 558-0641</a></p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Testimonials */}
            <Testimonials />

            {/* Insurance */}
            <InsuranceSection />

            {/* Serving Orange County */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-eyecare-navy font-serif mb-6">Cornea Specialist Serving All of Orange County</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Patients travel from across Orange County and Southern California to see our cornea specialist. Located in Santa Ana with easy access from Irvine, Newport Beach, Anaheim, Huntington Beach, Costa Mesa, Tustin, and surrounding communities.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500">
                            {['Irvine', 'Newport Beach', 'Anaheim', 'Huntington Beach', 'Costa Mesa', 'Tustin', 'Fullerton', 'Mission Viejo', 'Lake Forest', 'Laguna Beach', 'Orange', 'Yorba Linda'].map((city) => (
                                <span key={city} className="bg-white px-4 py-2 rounded-full border border-gray-200">{city}</span>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Lead Form */}
            <section id="lead-form" className="py-16 md:py-24 bg-eyecare-lighter-blue/30">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
                            <div className="p-8 md:p-12 bg-eyecare-navy text-white flex flex-col justify-center">
                                <h2 className="text-2xl md:text-3xl font-bold font-serif mb-4">See the Cornea Specialist</h2>
                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    Schedule your evaluation with Orange County&apos;s trusted cornea specialist. Same-week appointments available.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-eyecare-light-blue">1</div>
                                        <span className="font-medium">Request Appointment</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-eyecare-light-blue">2</div>
                                        <span className="font-medium">Comprehensive Corneal Exam</span>
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
