'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Calendar, CheckCircle } from 'lucide-react';

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

// Custom Center/Tech Badge Component
const CenterBadge = ({ centered = false, darkText = false }: { centered?: boolean, darkText?: boolean }) => (
    <div className={`flex items-center gap-3 md:gap-4 mb-6 md:mb-8 animate-fade-in-up-delay-1 ${centered ? 'justify-center' : ''}`}>
        <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shrink-0 shadow-lg border-[1px] ${darkText ? 'bg-eyecare-blue/5 border-eyecare-blue/20' : 'bg-white/10 backdrop-blur-md border-white/30'}`}>
            <CheckCircle className={`w-6 h-6 md:w-7 md:h-7 ${darkText ? 'text-eyecare-blue' : 'text-white'}`} />
        </div>
        <div>
            <p className={`text-xs md:text-sm uppercase tracking-wider font-medium ${darkText ? 'text-eyecare-light-navy' : 'text-white/70'}`}>Official Designation</p>
            <p className={`text-sm md:text-base font-bold ${darkText ? 'text-eyecare-navy' : 'text-white'}`}>Keratoconus Vision Center</p>
        </div>
    </div>
);

// --- Mobile Hero (Light Theme // 2025 Best Practices) ---
function MobileHero({
    headline,
    subheadline,
    imageSrc,
    ctaText,
    ctaLink,
    benefits,
    phoneNumber,
    phoneHref
}: HeroProps) {
    return (
        <section className="relative w-full bg-gradient-to-b from-blue-50 to-white overflow-hidden pb-48 pt-40 md:hidden">
            <div className="container mx-auto px-4">

                {/* 1. Header & Trust (Top of Thumb Zone) */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold text-eyecare-navy mb-3 leading-tight font-serif tracking-tight">
                        {headline}
                    </h1>
                    <CenterBadge centered darkText />
                </div>

                {/* 2. Visual Anchor (Middle, constrained height) */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl mb-6 border-4 border-white">
                    <Image
                        src={imageSrc}
                        alt="Keratoconus Treatment Context"
                        fill
                        className="object-cover"
                        style={{ objectPosition: '75% center' }}
                        priority
                    />
                    {/* Floating Badge - Technology Focus */}
                    <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur px-3 py-2 rounded-lg shadow-md border border-gray-100 flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                            <CheckCircle className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-xs font-bold text-eyecare-navy">Advanced Scleral Tech</span>
                    </div>
                </div>

                {/* 3. Availability & Benefits Alert (New Content) */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8">
                    <p className="text-sm font-bold text-amber-800 mb-1">⚠️ Limited New Patient Availability</p>
                    <p className="text-xs text-amber-700 leading-relaxed">
                        Don't let your benefits expire. Take advantage of our financing specials before end of year.
                    </p>
                </div>

                {/* 4. Value Proposition (Scannable list) */}
                {benefits && benefits.length > 0 && (
                    <ul className="grid grid-cols-1 gap-2 mb-8 px-2">
                        {benefits.slice(0, 4).map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2.5 text-eyecare-light-navy">
                                <CheckCircle className="w-4 h-4 text-eyecare-blue shrink-0" />
                                <span className="text-sm font-medium">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* 4. Action Area (Bottom of Thumb Zone) */}
                <div className="flex flex-col gap-3">
                    <Link
                        href={ctaLink || "#appointment"}
                        className="flex items-center justify-center bg-eyecare-blue text-white w-full py-4 rounded-xl font-bold text-lg shadow-lg active:scale-[0.98] transition-all"
                    >
                        <Calendar className="w-5 h-5 mr-2" />
                        {ctaText}
                    </Link>

                    <a
                        href={phoneHref}
                        className="flex items-center justify-center bg-white text-eyecare-navy border-2 border-gray-200 w-full py-3.5 rounded-xl font-bold text-base active:bg-gray-50 transition-all"
                    >
                        <Phone className="w-4 h-4 mr-2" />
                        {phoneNumber}
                    </a>
                </div>

                {/* Subheadline as reassuring footer text */}
                <p className="mt-6 text-sm text-center text-gray-500 leading-relaxed px-2">
                    {subheadline}
                </p>

            </div>
        </section>
    );
}


// --- Desktop Hero (Dark Theme // Existing Immersive) ---
function DesktopHero({
    headline,
    subheadline,
    imageSrc,
    ctaText,
    ctaLink,
    benefits,
    phoneNumber,
    phoneHref
}: HeroProps) {
    return (
        <section className="relative hidden md:block md:h-[600px] lg:h-[700px] overflow-hidden group">
            {/* Background Image with Overlay and Slow Zoom */}
            <div className="absolute inset-0 overflow-hidden">
                <Image
                    src={imageSrc}
                    alt="Keratoconus Treatment"
                    fill
                    className="object-cover animate-slow-zoom"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30 md:to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                <div className="max-w-xl lg:max-w-2xl">
                    <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up font-serif tracking-tight">
                        {headline}
                    </h1>
                    <p className="text-2xl text-white/90 mb-8 leading-relaxed animate-fade-in-up-delay-1 font-light">
                        {subheadline}
                    </p>

                    <CenterBadge />

                    {benefits && benefits.length > 0 && (
                        <ul className="grid grid-cols-2 gap-3 mb-10 animate-fade-in-up-delay-2">
                            {benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-center gap-2.5 text-white/95">
                                    <CheckCircle className="w-5 h-5 text-green-400 shrink-0 drop-shadow-md" />
                                    <span className="text-base font-medium">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    <div className="flex gap-4 animate-fade-in-up-delay-2">
                        <a
                            href={phoneHref}
                            className="inline-flex items-center justify-center bg-white text-eyecare-blue px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                        >
                            <Phone className="w-5 h-5 mr-2.5" />
                            {phoneNumber}
                        </a>
                        <Link
                            href={ctaLink || "#appointment"}
                            className="inline-flex items-center justify-center bg-eyecare-blue/90 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg hover:bg-eyecare-blue hover:scale-105 transition-all duration-300 shadow-lg"
                        >
                            <Calendar className="w-5 h-5 mr-2.5" />
                            {ctaText}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function LandingHero(props: HeroProps) {
    return (
        <>
            <MobileHero {...props} />
            <DesktopHero {...props} />
        </>
    );
}
