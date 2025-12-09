'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Phone, User, Stethoscope, Globe, MapPin, Clock, Mail, ChevronDown } from 'lucide-react';
import StickyCTA from './StickyCTA';

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
            <footer className="bg-eyecare-navy text-white py-8 md:py-12 pb-20 lg:pb-12">
                <div className="container mx-auto px-4">
                    {/* Mobile: Simplified 2-column layout */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
                        {/* About - Full width on mobile */}
                        <div className="col-span-2 md:col-span-1">
                            <div className="flex items-center space-x-2 mb-3">
                                <div className="bg-eyecare-blue p-1 rounded">
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="h-4 w-4 text-white"
                                        stroke="currentColor"
                                        strokeWidth="2"
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
                        <footer className="bg-eyecare-navy text-white py-8 md:py-12 pb-20 lg:pb-12">
                            <div className="container mx-auto px-4">
                                {/* Mobile: Simplified 2-column layout */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
                                    {/* About - Full width on mobile */}
                                    <div className="col-span-2 md:col-span-1">
                                        <div className="flex items-center space-x-2 mb-3">
                                            <div className="bg-eyecare-blue p-1 rounded">
                                                <svg
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    className="h-4 w-4 text-white"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                >
                                                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                                </svg>
                                            </div>
                                            <span className="text-sm md:text-base font-serif font-bold">Keratoconus Vision Center</span>
                                        </div>
                                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                                            Orange County's premier keratoconus treatment center.
                                        </p>
                                    </div>

                                    {/* Contact */}
                                    <div>
                                        <h3 className="text-sm md:text-base font-semibold mb-2 md:mb-3">Contact</h3>
                                        <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                                            <li className="flex items-start gap-1.5">
                                                <MapPin className="w-3 h-3 md:w-4 md:h-4 text-eyecare-light-blue mt-0.5 shrink-0" />
                                                <span className="text-gray-300 text-xs">801 N Tustin Ave #401<br />Santa Ana, CA 92705</span>
                                            </li>
                                            <li className="flex items-center gap-1.5">
                                                <Phone className="w-3 h-3 md:w-4 md:h-4 text-eyecare-light-blue shrink-0" />
                                                <a href={phoneHref} className="text-gray-300 hover:text-eyecare-light-blue font-semibold text-xs md:text-sm">
                                                    {phoneNumber}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Hours */}
                                    <div>
                                        <h3 className="text-sm md:text-base font-semibold mb-2 md:mb-3">Hours</h3>
                                        <ul className="space-y-0.5 md:space-y-1 text-xs text-gray-300">
                                            <li>Mon-Thu: 9am-6pm</li>
                                            <li>Fri: 9am-5pm</li>
                                            <li>Sat: By Appt</li>
                                        </ul>
                                    </div>

                                    {/* Hidden on mobile, shown on md+ */}
                                    <div className="hidden md:block">
                                        <h3 className="text-base font-semibold mb-3">Quick Links</h3>
                                        <ul className="space-y-1.5 text-sm">
                                            <li><a href="#learn-more" className="text-gray-300 hover:text-eyecare-light-blue">About Keratoconus</a></li>
                                            <li><a href="#testimonials" className="text-gray-300 hover:text-eyecare-light-blue">Patient Stories</a></li>
                                            <li><a href="#lead-form" className="text-gray-300 hover:text-eyecare-light-blue">Book Consultation</a></li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Bottom Bar */}
                                <div className="pt-4 md:pt-6 border-t border-gray-800 text-center text-gray-400 text-xs">
                                    <p>© {new Date().getFullYear()} Dr. Alexander Bonakdar. All rights reserved.</p>
                                </div>
                            </div>
                        </footer>

                        <StickyCTA phoneNumber={phoneNumber} phoneHref={phoneHref} />
                    </div>
                    );
}
