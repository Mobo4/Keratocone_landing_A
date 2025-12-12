
import React from 'react';
import LandingLayout from '@/components/LandingLayout';
import LeadForm from '@/components/LeadForm';
import { Award, BookOpen, UserCheck, Heart } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
    title: 'About Dr. Alexander Bonakdar | Keratoconus Specialist',
    description: 'Meet the specialist trusted by CHOC and UCI Medical Center. Dr. Bonakdar has dedicated 20+ years to treating complex corneal conditions with scleral lenses.',
};

export default function AboutPage() {
    return (
        <LandingLayout>
            {/* Hero Section */}
            <section className="bg-eyecare-navy text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Meet Your Specialist</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Dr. Alexander Bonakdar is Orange County's leading expert in non-surgical vision restoration for Keratoconus.
                    </p>
                </div>
            </section>

            {/* Bio Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
                        {/* Image */}
                        <div className="w-full md:w-1/2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-eyecare-blue/10 transform translate-x-4 translate-y-4 rounded-3xl"></div>
                                <img
                                    src="/images/drbonakdar.webp"
                                    alt="Dr. Alexander Bonakdar"
                                    className="relative rounded-3xl shadow-xl w-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl font-serif font-bold text-eyecare-navy mb-6">Dr. Alexander Bonakdar, O.D.</h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                For over 20 years, Dr. Bonakdar has dedicated his practice to the "impossible" cases. While many eye doctors shy away from complex corneas, Dr. Bonakdar runs toward them.
                            </p>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                He is a trusted referral source for <strong>CHOC (Children's Hospital of Orange County)</strong> and <strong>UCI Medical Center</strong>, who send him their most difficult keratoconus and post-surgical patients. His philosophy is simple: <em>"If there is a way to restore vision, we will find it."</em>
                            </p>

                            <div className="grid grid-cols-2 gap-6">
                                <div className="flex items-start gap-3">
                                    <Award className="w-6 h-6 text-eyecare-blue mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-eyecare-navy">Scleral Specialist</h4>
                                        <p className="text-sm text-gray-600">Advanced custom lens fitting</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <UserCheck className="w-6 h-6 text-eyecare-blue mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-eyecare-navy">20+ Years</h4>
                                        <p className="text-sm text-gray-600">Clinical experience</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <BookOpen className="w-6 h-6 text-eyecare-blue mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-eyecare-navy">Educator</h4>
                                        <p className="text-sm text-gray-600">Lectures on corneal disease</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Heart className="w-6 h-6 text-eyecare-blue mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-eyecare-navy">Patient Focused</h4>
                                        <p className="text-sm text-gray-600">Personalized 1-on-1 care</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-eyecare-lighter-blue py-24">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-eyecare-navy font-serif mb-6">Why Trust Anyone Else?</h2>
                    <p className="text-xl text-gray-600 mb-12">
                        Your vision is too important to risk. Schedule a consultation with a true specialist.
                    </p>
                    <div className="bg-white p-8 rounded-3xl shadow-xl">
                        <LeadForm />
                    </div>
                </div>
            </section>
        </LandingLayout>
    );
}
