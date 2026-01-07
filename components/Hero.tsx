'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Calendar, CheckCircle, X, ZoomIn } from 'lucide-react';

interface HeroProps {
    headline: string;
    subheadline: string;
    imageSrc: string;
    ctaText?: string;
    ctaLink?: string;
    benefits?: string[];
    phoneNumber?: string;
    phoneHref?: string;
    priority?: boolean;
}

// Reusable Trust Badge
const TrustBadge = ({ darkText = false, centered = false }: { darkText?: boolean, centered?: boolean }) => (
    <div className={`flex items-center gap-3 mb-6 ${centered ? 'justify-center' : ''}`}>
        <div className={`flex items-center justify-center w-10 h-10 rounded-full border ${darkText ? 'bg-blue-50 border-blue-100 text-eyecare-blue' : 'bg-white/10 border-white/20 text-white shadow-lg'}`}>
            <CheckCircle className="w-5 h-5" />
        </div>
        <div className="flex flex-col">
            <span className={`text-[10px] uppercase tracking-wider font-bold ${darkText ? 'text-eyecare-light-navy' : 'text-blue-100'}`}>
                Official Designation
            </span>
            <span className={`text-sm font-bold leading-tight ${darkText ? 'text-eyecare-navy' : 'text-white'}`}>
                Keratoconus Vision Center
            </span>
        </div>
    </div>
);

export default function Hero({
    headline,
    subheadline,
    imageSrc,
    ctaText = "Book Consultation",
    ctaLink = "#lead-form",
    benefits = [],
    phoneNumber = "(714) 558-0641",
    phoneHref = "tel:+17145580641",
    priority = true
}: HeroProps) {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);



    return (
        <>
            {/* ==================================================================
                MOBILE LAYOUT (< md) - Panoramic Strip (Top) -> Content (Bottom)
               ================================================================== */}
            <section className="flex flex-col md:hidden bg-gradient-to-b from-blue-50 to-white">
                {/* 1. Mobile Hero Banner (Click to Expand Inline) */}
                <div
                    className={`relative w-full transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] bg-gray-100 cursor-zoom-in overflow-hidden ${isLightboxOpen ? 'aspect-[16/9]' : 'aspect-[21/9]'}`}
                    onClick={() => setIsLightboxOpen(!isLightboxOpen)}
                    role="button"
                    aria-label={isLightboxOpen ? "Collapse image" : "Expand image"}
                >
                    <Image
                        src={imageSrc}
                        alt="Keratoconus Treatment"
                        fill
                        className="object-cover transition-transform duration-700"
                        style={{ objectPosition: '80% 35%' }}
                        priority={priority}
                        sizes="100vw"
                    />

                    {/* Subtle White Gradient Overlay for transition */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-50 transition-opacity duration-700 ${isLightboxOpen ? 'opacity-0' : 'opacity-50'}`} />

                    {/* Zoom/Collapse Hint (Minimalist) */}
                    <div className={`absolute bottom-3 right-3 text-white/90 transition-opacity duration-300 ${isLightboxOpen ? 'opacity-0' : 'opacity-100'}`}>
                        <div className="bg-black/30 backdrop-blur-sm p-1.5 rounded-full">
                            <ZoomIn className="w-4 h-4 shadow-sm" />
                        </div>
                    </div>
                </div>

                {/* 2. Mobile Content Area (Strictly Below Image) */}
                <div className="px-5 py-8">
                    <TrustBadge darkText={true} centered />

                    <span className="block text-3xl font-bold text-eyecare-navy leading-tight mb-4 font-serif text-center drop-shadow-sm" aria-hidden="true">
                        {headline}
                    </span>

                    <p className="text-lg text-gray-600 leading-relaxed mb-6 text-center font-light">
                        {subheadline}
                    </p>

                    {/* Mobile Actions */}
                    <div className="flex flex-col gap-3 mb-6">
                        <Link
                            href={ctaLink}
                            className="flex items-center justify-center w-full bg-eyecare-blue text-white font-bold py-4 rounded-xl shadow-lg active:scale-[0.98] transition-transform"
                        >
                            <Calendar className="w-5 h-5 mr-2" />
                            {ctaText}
                        </Link>
                        <a
                            href={phoneHref}
                            className="flex items-center justify-center w-full bg-white text-eyecare-navy border-2 border-eyecare-navy/10 font-bold py-3.5 rounded-xl active:bg-blue-50 transition-colors"
                        >
                            <Phone className="w-5 h-5 mr-2 text-eyecare-blue" />
                            {phoneNumber}
                        </a>
                    </div>

                    {/* Mobile Benefits (Compact Grid) */}
                    {benefits.length > 0 && (
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-blue-100 pt-6">
                            {benefits.slice(0, 6).map((benefit, i) => (
                                <li key={i} className="flex items-start gap-2 text-eyecare-navy text-xs font-medium">
                                    <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>

            {/* ==================================================================
                DESKTOP LAYOUT (md+) - Immersive Overlay
                Structure: Full Background Image -> Overlay Content
               ================================================================== */}
            {/* ==================================================================
                DESKTOP LAYOUT (md+) - Immersive Overlay
                Structure: Fixed Height (Does NOT scale vertically with width)
               ================================================================== */}
            <section className="relative hidden md:flex w-full h-[700px] items-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={imageSrc}
                        alt="Keratoconus Treatment"
                        fill
                        className="object-cover animate-slow-zoom"
                        style={{ objectPosition: '80% center' }}
                        priority={priority}
                        sizes="100vw"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                </div>

                {/* Desktop Content */}
                <div className="relative z-10 container mx-auto px-4 lg:px-8">
                    <div className="max-w-2xl text-white pt-20 pb-20">
                        <TrustBadge />

                        <h1 className="text-5xl lg:text-6xl font-bold font-serif leading-tight mb-6 drop-shadow-sm animate-fade-in-up">
                            {headline}
                        </h1>

                        <p className="text-xl lg:text-2xl text-blue-50 font-light leading-relaxed mb-10 max-w-xl animate-fade-in-up-delay-1">
                            {subheadline}
                        </p>

                        <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up-delay-1">
                            <Link
                                href={ctaLink}
                                className="inline-flex items-center bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                            >
                                <Calendar className="w-5 h-5 mr-2" />
                                {ctaText}
                            </Link>
                            <a
                                href={phoneHref}
                                className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all"
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                {phoneNumber}
                            </a>
                        </div>

                        {/* Desktop Benefits grid */}
                        {benefits.length > 0 && (
                            <div className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-lg animate-fade-in-up-delay-2">
                                {benefits.map((benefit, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-medium text-white/90">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                                        {benefit}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
