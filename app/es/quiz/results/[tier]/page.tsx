import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

const VALID_TIERS = ['hot', 'warm', 'nurture', 'general'] as const;
type Tier = (typeof VALID_TIERS)[number];

export async function generateStaticParams() {
    return VALID_TIERS.map((tier) => ({ tier }));
}

export const metadata: Metadata = {
    robots: { index: false, follow: false },
};

const KC_COPY: Record<Tier, { headline: string; body: string; primaryCta: string; primaryHref: string; secondaryCta?: string; secondaryHref?: string }> = {
    hot: {
        headline: 'Sus síntomas coinciden con queratocono avanzado — actúe antes de que empeore',
        body: 'El queratocono es una condición progresiva. Sus respuestas describen un patrón donde la intervención temprana de un especialista previene la pérdida permanente de visión. El Dr. Bonakdar ha tratado a más de 2,000 pacientes con QC, incluidos muchos a quienes les dijeron que nada podía hacerse. Hay citas disponibles esta semana.',
        primaryCta: 'Llame Ahora (714) 558-0641',
        primaryHref: 'tel:+17145580641',
        secondaryCta: 'Solicitar Cita',
        secondaryHref: '/es#formulario-contacto',
    },
    warm: {
        headline: 'Sus cambios de visión merecen la opinión de un especialista',
        body: 'El patrón que describió — prescripciones cambiantes, dificultad para corregir la visión — es exactamente lo que evalúa un especialista en QC. La mayoría de los pacientes esperan demasiado. Una evaluación de 60 minutos con el Dr. Bonakdar le dará un diagnóstico claro y un plan de tratamiento.',
        primaryCta: 'Solicitar una Consulta',
        primaryHref: '/es#formulario-contacto',
        secondaryCta: '(714) 558-0641',
        secondaryHref: 'tel:+17145580641',
    },
    nurture: {
        headline: 'La detección temprana es su mayor ventaja',
        body: 'Sus síntomas son de etapa temprana — el mejor momento para establecer una línea de base. El QC detectado a tiempo generalmente no requiere cirugía, solo lentes de contacto especializados o tratamiento preventivo. Venga ahora para no tener que ponerse al día en 2 años.',
        primaryCta: 'Programar una Revisión Gratuita',
        primaryHref: '/es#formulario-contacto',
    },
    general: {
        headline: 'Nos encantaría ayudarle',
        body: 'Tuvimos un problema al procesar sus resultados — pero eso no es razón para esperar. El equipo del Dr. Bonakdar está disponible para responder sus preguntas directamente. Hay citas disponibles esta semana; se acepta la mayoría de los seguros.',
        primaryCta: 'Llame al (714) 558-0641',
        primaryHref: 'tel:+17145580641',
    },
};

const tierLabel: Record<Tier, string> = {
    hot: 'Caso Prioritario',
    warm: 'Buen Candidato',
    nurture: 'Etapa Temprana',
    general: 'Consulta General',
};

export default async function ResultsEsPage({
    params,
    searchParams,
}: {
    params: Promise<{ tier: string }>;
    searchParams: Promise<{ type?: string }>;
}) {
    const { tier } = await params;
    await searchParams; // consumed but not used — KC only for Spanish quiz

    if (!VALID_TIERS.includes(tier as Tier)) {
        notFound();
    }

    const typedTier = tier as Tier;
    const copy = KC_COPY[typedTier];

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

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-xl">

                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider ${accentClasses.badge}`}>
                        {tierLabel[typedTier]}
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

                    {/* Secondary CTA */}
                    {'secondaryCta' in copy && copy.secondaryCta && copy.secondaryHref && (
                        <a
                            href={copy.secondaryHref}
                            className="inline-block w-full text-slate-300 hover:text-white border border-slate-600 hover:border-slate-500 font-medium py-3.5 rounded-xl transition-colors text-sm mb-6"
                        >
                            {copy.secondaryCta}
                        </a>
                    )}

                    {/* Retake */}
                    <p className="text-xs text-slate-500 mt-4">
                        ¿Desea revisar sus respuestas?{' '}
                        <Link href="/es/quiz" className="text-slate-400 underline hover:text-white">
                            Repetir la evaluación
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
