'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Star, Phone, ArrowRight } from 'lucide-react';

interface HeroProps {
    headline: string;
    subheadline: string;
    imageSrc: string;
    ctaText?: string;
    ctaLink?: string;
    benefits?: string[];
    phoneNumber?: string;
    phoneHref?: string;
}

export default function LandingHero({
    headline,
    subheadline,
    imageSrc,
    ctaText = "Schedule Your Assessment",
    ctaLink = "#appointment",
    benefits = [],
    phoneNumber = '(714) 558-0641',
    phoneHref = 'tel:+17145580641'
}: HeroProps) {
    return (
        <section className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                            </span>
                            Limited New Patients This Month
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                            {headline}
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            {subheadline}
                        </p>

                        {benefits.length > 0 && (
                            <ul className="space-y-3 mb-8">
                                {benefits.map((benefit, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                        )}

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href={ctaLink}
                                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-1 transition-all"
                            >
                                {ctaText}
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <a
                                href={phoneHref}
                                className="inline-flex items-center justify-center bg-white text-slate-900 border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all"
                            >
                                <Phone className="mr-2 w-5 h-5" />
                                {phoneNumber}
                            </a>
                        </div>

                        <div className="mt-8 flex items-center gap-4 text-sm text-gray-500">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden">
                                        <span className="text-xs">👤</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col">
                                <div className="flex text-yellow-400">
                                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <span>Trusted by 10,000+ Patients</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-600/5 rounded-[2rem] transform rotate-3 scale-105"></div>
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src={imageSrc}
                                alt="Treatment result"
                                width={600}
                                height={500}
                                className="w-full h-full object-cover"
                                priority
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur px-6 py-4 rounded-xl shadow-lg border border-gray-100 max-w-xs">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                        <CheckCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900">Proven Results</p>
                                        <p className="text-xs text-gray-500">FDA-Approved Technology</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
