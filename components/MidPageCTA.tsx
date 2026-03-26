import Link from 'next/link';
import { Phone } from 'lucide-react';
import FadeIn from './FadeIn';

interface MidPageCTAProps {
    headline: string;
    subtext?: string;
    ctaText?: string;
    ctaLink?: string;
    phoneNumber?: string;
    variant?: 'navy' | 'blue';
}

const variantStyles = {
    navy: 'bg-eyecare-navy',
    blue: 'bg-eyecare-blue',
} as const;

export default function MidPageCTA({
    headline,
    subtext,
    ctaText = "Schedule Your Consultation",
    ctaLink = "#contact-form",
    phoneNumber = "(714) 558-0641",
    variant = 'navy',
}: MidPageCTAProps) {
    const phoneHref = `tel:${phoneNumber.replace(/\D/g, '')}`;

    return (
        <section className={`w-full ${variantStyles[variant]} py-10`}>
            <FadeIn>
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                        {headline}
                    </h2>

                    {subtext && (
                        <p className="text-blue-100 text-sm mt-2">
                            {subtext}
                        </p>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                        <Link
                            href={ctaLink}
                            className="inline-flex items-center justify-center bg-white text-eyecare-navy px-8 py-3 rounded-lg font-bold transition-all hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            {ctaText}
                        </Link>

                        <a
                            href={phoneHref}
                            className="inline-flex items-center justify-center border border-white text-white px-8 py-3 rounded-lg font-bold transition-all hover:bg-white/10"
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            {phoneNumber}
                        </a>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
