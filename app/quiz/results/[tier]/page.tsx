import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

// ─── Valid tiers ──────────────────────────────────────────────────────────────
const VALID_TIERS = ['hot', 'warm', 'nurture', 'general'] as const;
type Tier = (typeof VALID_TIERS)[number];

export async function generateStaticParams() {
    return VALID_TIERS.map((tier) => ({ tier }));
}

export const metadata: Metadata = {
    robots: { index: false, follow: false },
};

// ─── Copy tables ──────────────────────────────────────────────────────────────
const KC_COPY: Record<Tier, { headline: string; body: string; primaryCta: string; primaryHref: string; secondaryCta?: string; secondaryHref?: string }> = {
    hot: {
        headline: 'Your Symptoms Match Advanced Keratoconus — Act Before It Gets Worse',
        body: 'KC is a progressive condition. Your answers describe a pattern where early specialist intervention prevents permanent vision loss. Dr. Bonakdar has treated 2,000+ KC patients, including many told nothing could be done. Same-week appointments available.',
        primaryCta: 'Call Now (714) 558-0641',
        primaryHref: 'tel:+17145580641',
        secondaryCta: 'Request Appointment',
        secondaryHref: '/#contact-form',
    },
    warm: {
        headline: "Your Vision Changes Are Worth a Specialist's Opinion",
        body: 'The pattern you described — changing prescriptions, difficulties correcting vision — is exactly what a KC specialist evaluates. Most patients wait too long. A single 60-minute evaluation with Dr. Bonakdar gives you a clear diagnosis and a treatment plan.',
        primaryCta: 'Book a Consultation',
        primaryHref: '/#contact-form',
        secondaryCta: '(714) 558-0641',
        secondaryHref: 'tel:+17145580641',
    },
    nurture: {
        headline: 'Early Awareness Is Your Best Advantage',
        body: 'Your symptoms are early-stage — the best time to establish a baseline. KC caught early often requires no surgery, just specialized contact lenses or preventive treatment. Come in now so you\'re not playing catch-up in 2 years.',
        primaryCta: 'Schedule a Free Screening',
        primaryHref: '/#contact-form',
    },
    general: {
        headline: "We'd Love to Help You",
        body: "We had trouble processing your quiz results — but that's no reason to wait. Dr. Bonakdar's team is available to answer your questions directly. Same-week appointments available; most insurance accepted.",
        primaryCta: 'Call (714) 558-0641',
        primaryHref: 'tel:+17145580641',
    },
};

const ORTHOK_COPY: Record<Tier, { headline: string; body: string; primaryCta: string; primaryHref: string; secondaryCta?: string; secondaryHref?: string }> = {
    hot: {
        headline: 'Your Child Is a Strong Ortho-K Candidate — Now Is the Right Window',
        body: 'The age range and prescription pattern you described is exactly when ortho-K has the strongest scientific evidence for slowing myopia. Waiting a year means a year of preventable progression. We have evaluation appointments available this week.',
        primaryCta: 'Call Now (714) 558-0641',
        primaryHref: 'tel:+17145580641',
        secondaryCta: 'Book Evaluation',
        secondaryHref: '/#contact-form',
    },
    warm: {
        headline: 'Ortho-K Is Worth Discussing for Your Child',
        body: "Based on your answers, your child's situation is a reasonable candidate for ortho-K. A 45-minute consultation will tell you definitively whether it's the right fit — including insurance coverage and realistic expectations.",
        primaryCta: 'Book a Consultation',
        primaryHref: '/#contact-form',
    },
    nurture: {
        headline: 'Good Time to Establish a Baseline',
        body: "Your child's myopia may not need aggressive intervention yet — but monitoring with a specialist who knows ortho-K means you'll act at exactly the right moment. No pressure; just clarity.",
        primaryCta: 'Schedule a Monitoring Visit',
        primaryHref: '/#contact-form',
    },
    general: {
        headline: "We'd Love to Help You",
        body: "We had trouble processing your quiz results — but that's no reason to wait. Dr. Bonakdar's team is available to answer your questions directly. Same-week appointments available; most insurance accepted.",
        primaryCta: 'Call (714) 558-0641',
        primaryHref: 'tel:+17145580641',
    },
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function ResultsPage({
    params,
    searchParams,
}: {
    params: Promise<{ tier: string }>;
    searchParams: Promise<{ type?: string }>;
}) {
    const { tier } = await params;
    const { type } = await searchParams;

    if (!VALID_TIERS.includes(tier as Tier)) {
        notFound();
    }

    const typedTier = tier as Tier;
    const isOrthoK = type === 'orthok';
    const copy = isOrthoK ? ORTHOK_COPY[typedTier] : KC_COPY[typedTier];
    const retakeHref = isOrthoK ? '/quiz/ortho-k' : '/quiz';

    // Urgency color: hot = amber, warm = sky, nurture/general = slate
    const accentColor = typedTier === 'hot'
        ? 'amber'
        : typedTier === 'warm'
            ? 'sky'
            : 'slate';

    const accentClasses = {
        amber: { badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20', btn: 'bg-amber-500 hover:bg-amber-400' },
        sky: { badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20', btn: 'bg-sky-500 hover:bg-sky-400' },
        slate: { badge: 'bg-slate-500/10 text-slate-400 border-slate-500/20', btn: 'bg-slate-600 hover:bg-slate-500' },
    }[accentColor];

    const tierLabel = { hot: 'Priority Case', warm: 'Good Candidate', nurture: 'Early Stage', general: 'General Inquiry' }[typedTier];

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-xl">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider ${accentClasses.badge}`}>
                        {tierLabel}
                    </span>
                </div>

                {/* Card */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-xl text-center">
                    <h1 className="text-2xl font-bold text-white leading-snug mb-4">
                        {copy.headline}
                    </h1>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8">
                        {copy.body}
                    </p>

                    {/* Primary CTA */}
                    <a
                        href={copy.primaryHref}
                        className={`inline-block w-full text-white font-semibold py-3.5 rounded-xl transition-colors text-sm mb-3 ${accentClasses.btn}`}
                    >
                        {copy.primaryCta}
                    </a>

                    {/* Secondary CTA (optional) */}
                    {'secondaryCta' in copy && copy.secondaryCta && copy.secondaryHref && (
                        <a
                            href={copy.secondaryHref}
                            className="inline-block w-full text-slate-300 hover:text-white border border-slate-600 hover:border-slate-500 font-medium py-3.5 rounded-xl transition-colors text-sm mb-6"
                        >
                            {copy.secondaryCta}
                        </a>
                    )}

                    {/* Retake link */}
                    <p className="text-xs text-slate-500 mt-4">
                        Want to revisit your answers?{' '}
                        <Link href={retakeHref} className="text-slate-400 underline hover:text-white">
                            Retake the quiz
                        </Link>
                    </p>
                </div>

                <p className="text-center text-xs text-slate-600 mt-6">
                    Dr. Alexander Bonakdar · Keratoconus Vision Center · Santa Ana, CA
                </p>
            </div>
        </div>
    );
}
