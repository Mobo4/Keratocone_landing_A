'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, User, Stethoscope, Globe, MapPin, Clock, Mail, ChevronDown } from 'lucide-react';
import StickyCTA from './StickyCTA';
import LanguageSwitcher from './LanguageSwitcher';

interface LandingLayoutProps {
    children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
    const phoneNumber = "(714) 558-0641";
    const phoneHref = "tel:+17145580641";
    const [moreMenuOpen, setMoreMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-white font-sans">
            {/* Top Utility Bar - Simplified on mobile */}
            <div className="bg-eyecare-blue text-white text-xs md:text-sm py-1.5 md:py-2 border-b border-eyecare-dark-blue">
                <div className="container mx-auto px-4 flex justify-between md:justify-end items-center gap-3 md:gap-4">
                    {/* Phone - Always Visible, prominent on mobile */}
                    <a
                        href={phoneHref}
                        className="flex items-center hover:text-eyecare-lighter-blue transition-colors"
                    >
                        <Phone className="h-3.5 w-3.5 mr-1.5" />
                        <span className="font-semibold">{phoneNumber}</span>
                    </a>
                    {/* Language Switcher */}
                    <div className="text-eyecare-navy">
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>

            {/* Main Header - Mobile optimized */}
            <header className="bg-white shadow-sm sticky top-0 z-50">
                <div className="container mx-auto px-3 sm:px-4">
                    <div className="flex justify-between items-center h-16 md:h-20 lg:h-24">
                        {/* Logo - Compact on mobile */}
                        <Link
                            href="/"
                            className="flex items-center space-x-2 md:space-x-3 group flex-shrink-0 max-w-[60%] md:max-w-none"
                        >
                            <div className="bg-eyecare-blue p-1.5 md:p-2 rounded-lg group-hover:bg-eyecare-dark-blue transition-colors shrink-0">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="h-5 w-5 md:h-7 md:w-7 lg:h-8 lg:w-8 text-white"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                            </div>
                            <div className="flex flex-col min-w-0">
                                <span className="text-sm md:text-lg lg:text-2xl font-serif font-bold text-eyecare-navy leading-tight tracking-tight group-hover:text-eyecare-blue transition-colors truncate">
                                    Keratoconus Vision Center
                                </span>
                                <span className="text-[10px] md:text-xs lg:text-sm text-eyecare-light-navy tracking-wider uppercase">
                                    Orange County
                                </span>
                            </div>
                        </Link>

                        {/* Right Side - CTA */}
                        <div className="flex items-center gap-2 md:gap-4">
                            <a
                                href={phoneHref}
                                className="hidden md:flex items-center text-eyecare-navy hover:text-eyecare-blue font-semibold transition-colors"
                            >
                                <Phone className="w-4 h-4 lg:w-5 lg:h-5 mr-2 text-eyecare-blue" />
                                <span className="text-sm lg:text-base">{phoneNumber}</span>
                            </a>
                            <Link
                                href="#lead-form"
                                className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-3 md:px-5 lg:px-6 py-2 md:py-2.5 rounded-lg font-semibold text-xs md:text-sm transition-all shadow-md hover:shadow-lg"
                            >
                                <span className="hidden sm:inline">Request </span>Appointment
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer - Compact on mobile */}
            {/* Footer removed found in RootLayout */}

            <StickyCTA phoneNumber={phoneNumber} phoneHref={phoneHref} />
        </div>
    );
}
