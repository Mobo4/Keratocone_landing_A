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

// Star Rating Badge — pill-style Google review badge (matches eyecarecenteroc.com)
const StarBadge = ({ darkText = false, centered = false }: { darkText?: boolean, centered?: boolean }) => (
    <a
        href="#reviews"
        className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-5 ${
            darkText
                ? 'bg-white shadow-md border border-gray-100'
                : 'bg-white/15 backdrop-blur-sm border border-white/20'
        } group transition-all hover:shadow-lg ${centered ? 'mx-auto' : ''}`}
    >
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <div className="flex gap-0.5" aria-label="4.9 out of 5 stars">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
        <span className={`text-sm font-bold ${darkText ? 'text-gray-900' : 'text-white'}`}>4.9</span>
        <span className={`text-xs ${darkText ? 'text-gray-500' : 'text-blue-100'} group-hover:underline`}>on Google</span>
    </a>
);

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
    ctaLink = "#contact-form",
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
                        alt="Keratoconus specialist Dr. Bonakdar fitting scleral lenses at Orange County keratoconus center"
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
                <div className="px-6 py-10 pb-12">
                    <div className="flex flex-col items-center mb-6">
                        <TrustBadge darkText={true} centered />
                        <StarBadge darkText={true} centered />
                    </div>

                    <p role="heading" aria-level={1} className="text-3xl font-bold text-eyecare-navy leading-tight mb-4 font-serif text-center">
                        {headline}
                    </p>

                    <p className="text-lg text-gray-600 leading-relaxed mb-8 text-center font-light">
                        {subheadline}
                    </p>

                    {/* Mobile Actions */}
                    <div className="flex flex-col gap-3 mb-8">
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
                        alt="Orange County keratoconus specialist - scleral lens fitting for vision restoration"
                        fill
                        className="object-cover animate-slow-zoom"
                        style={{ objectPosition: '80% center' }}
                        priority={priority}
                        sizes="100vw"
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
                </div>

                {/* Desktop Content */}
                <div className="relative z-10 container mx-auto px-6 lg:px-8">
                    <div className="max-w-2xl text-white">
                        <TrustBadge />
                        <StarBadge />

                        <h1 className="text-5xl lg:text-6xl font-bold font-serif leading-tight mb-6 drop-shadow-lg animate-fade-in-up">
                            {headline}
                        </h1>

                        <p className="text-xl lg:text-2xl text-gray-100 font-light leading-relaxed mb-10 max-w-xl drop-shadow-md animate-fade-in-up-delay-1">
                            {subheadline}
                        </p>

                        <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up-delay-1">
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
