'use client';

import React from 'react';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import StickyCTA from './StickyCTA';

interface LandingLayoutProps {
    children: React.ReactNode;
}

export default function LandingLayout({ children }: LandingLayoutProps) {
    const phoneNumber = "(714) 558-0641";
    const phoneHref = "tel:+17145580641";

    return (
        <div className="min-h-screen flex flex-col bg-white font-sans">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
                <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 bg-eyecare-blue rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300 shadow-md">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="w-6 h-6 text-white"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                <circle cx="12" cy="12" r="3" />
                            </svg>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-eyecare-navy leading-none tracking-tight font-serif">
                                Keratoconus Vision Center
                            </span>
                            <span className="text-xs font-medium text-eyecare-blue tracking-widest uppercase mt-0.5">
                                Dr. Alexander Bonakdar
                            </span>
                        </div>
                    </Link>

                    {/* Right Side Actions */}
                    <div className="flex items-center gap-6">
                        <a
                            href={phoneHref}
                            className="hidden md:flex items-center text-eyecare-navy hover:text-eyecare-blue font-semibold transition-colors"
                        >
                            <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-100 transition-colors">
                                <Phone className="w-4 h-4 text-eyecare-blue" />
                            </div>
                            <span className="text-lg">{phoneNumber}</span>
                        </a>
                        <Link
                            href="#lead-form"
                            className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Book Consultation
                        </Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-eyecare-navy text-white py-12 border-t border-white/10 pb-24 lg:pb-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
                        <div>
                            <p className="font-bold text-lg mb-2 font-serif">Keratoconus Vision Center</p>
                            <p className="text-white/60 text-sm">
                                801 N Tustin Ave #401<br />
                                Santa Ana, CA 92705
                            </p>
                        </div>
                        <div className="flex flex-col items-center md:items-end gap-2">
                            <a
                                href={phoneHref}
                                className="text-xl font-bold hover:text-eyecare-blue transition-colors"
                            >
                                {phoneNumber}
                            </a>
                            <p className="text-white/40 text-xs">
                                © {new Date().getFullYear()} Dr. Alexander Bonakdar. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>

            <StickyCTA phoneNumber={phoneNumber} phoneHref={phoneHref} />
        </div>
    );
}
