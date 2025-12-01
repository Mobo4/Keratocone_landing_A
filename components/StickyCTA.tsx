'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';

interface StickyCTAProps {
    phoneNumber?: string;
    phoneHref?: string;
    bookLink?: string;
}

export default function StickyCTA({
    phoneNumber = '(714) 558-0641',
    phoneHref = 'tel:+17145580641',
    bookLink = '#lead-form'
}: StickyCTAProps) {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 lg:hidden z-50 flex gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <a
                href={phoneHref}
                className="flex-1 flex items-center justify-center bg-white border-2 border-eyecare-blue text-eyecare-blue py-3 rounded-lg font-bold transition-colors hover:bg-blue-50"
            >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
            </a>
            <Link
                href={bookLink}
                className="flex-1 flex items-center justify-center bg-eyecare-blue text-white py-3 rounded-lg font-bold transition-colors hover:bg-eyecare-dark-blue"
            >
                <Calendar className="w-5 h-5 mr-2" />
                Book Now
            </Link>
        </div>
    );
}
