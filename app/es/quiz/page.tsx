'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { captureAndGetTracking, getStoredTracking } from '@/lib/utm-tracking';

// ─── KC Quiz preguntas en español ─────────────────────────────────────────────
const QUESTIONS = [
    {
        question: "¿Su prescripción de anteojos o lentes de contacto ha cambiado en los últimos 2 años?",
        options: [
            { label: "Estable — la misma prescripción desde hace tiempo", points: 1 },
            { label: "Pequeño cambio — un poco más fuerte", points: 2 },
            { label: "Cambio notable — significativamente más fuerte", points: 3 },
            { label: "Ha cambiado varias veces y todavía no se siente bien", points: 4 },
        ],
    },
    {
        question: "¿Cómo es su visión al manejar de noche o con poca luz?",
        options: [
            { label: "Bien — sin problemas", points: 1 },
            { label: "Algo de deslumbramiento, pero manejable", points: 2 },
            { label: "Halos o destellos — evito manejar de noche", points: 3 },
            { label: "Ya no manejo de noche — es muy peligroso", points: 4 },
        ],
    },
    {
        question: "Cuando usa anteojos, ¿qué tan bien le corrigen la visión?",
        options: [
            { label: "Los anteojos me funcionan bien", points: 1 },
            { label: "Ligeramente borroso incluso con prescripción nueva", points: 2 },
            { label: "Borroso y distorsionado — los anteojos ayudan poco", points: 3 },
            { label: "Los anteojos casi no ayudan — me dijeron que no hay más corrección", points: 4 },
        ],
    },
    {
        question: "¿Ha consultado a un médico o especialista por sus problemas de visión?",
        options: [
            { label: "No, todavía no", points: 1 },
            { label: "Sí — me dijeron que es leve, solo monitorear", points: 2 },
            { label: "Sí — probé varias soluciones, ninguna funcionó", points: 3 },
            { label: "Sí — me dijeron que mi caso es complejo o podría necesitar trasplante", points: 4 },
        ],
    },
    {
        question: "¿Le han dicho que tiene queratocono o que su córnea tiene una forma inusual?",
        options: [
            { label: "Problemas de visión sin explicación, sin diagnóstico", points: 2 },
            { label: "Posiblemente — nunca recibí un diagnóstico formal", points: 3 },
            { label: "Sí — diagnosticado con queratocono o irregularidad corneal", points: 4 },
            { label: "Me hice LASIK y mi visión ha empeorado desde entonces", points: 3 },
        ],
    },
    {
        question: "¿Qué es lo más importante para usted ahora mismo?",
        options: [
            { label: "Solo investigando — sin urgencia todavía", points: 1 },
            { label: "Quiero entender mis opciones", points: 2 },
            { label: "Quiero algo que funcione — llevo demasiado tiempo con este problema", points: 3 },
            { label: "Necesito actuar ahora — está afectando mi trabajo, manejo o vida diaria", points: 4 },
        ],
    },
];

type Step = 'quiz' | 'contact' | 'submitting';

interface Answer {
    question: string;
    answer: string;
    points: number;
}

export default function KCQuizEsPage() {
    const router = useRouter();
    const [step, setStep] = useState<Step>('quiz');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Answer[]>([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [smsConsent, setSmsConsent] = useState(false);
    const [website, setWebsite] = useState(''); // honeypot

    useEffect(() => {
        captureAndGetTracking();
    }, []);

    function handleAnswer(option: { label: string; points: number }) {
        const newAnswers = [
            ...answers,
            {
                question: QUESTIONS[currentQuestion].question,
                answer: option.label,
                points: option.points,
            },
        ];
        setAnswers(newAnswers);

        if (currentQuestion < QUESTIONS.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setStep('contact');
        }
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStep('submitting');

        const quizType = 'kc';
        const tracking = getStoredTracking();

        try {
            const response = await fetch('/api/quiz', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: firstName.trim(),
                    lastName: lastName.trim(),
                    phone: phone.trim(),
                    email: email.trim(),
                    quizType,
                    answers,
                    smsConsent,
                    website,
                    language: 'es',
                    ...tracking,
                }),
            });

            const data = await response.json() as { success: boolean; tier?: string };
            const tier = data.tier || 'general';
            router.push(`/es/quiz/results/${tier}?type=${quizType}`);
        } catch {
            router.push(`/es/quiz/results/general?type=${quizType}`);
        }
    }

    const progress = step === 'quiz'
        ? Math.round((currentQuestion / QUESTIONS.length) * 100)
        : 100;

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-2xl">

                {/* Header */}
                <div className="text-center mb-8">
                    <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-2">
                        Evaluación de 2 Minutos
                    </p>
                    <h1 className="text-3xl font-bold text-white">
                        ¿Podría Tener Queratocono?
                    </h1>
                    <p className="text-slate-400 mt-2 text-sm">
                        Responda 6 preguntas para saber si sus síntomas coinciden con QC — y qué hacer a continuación.
                    </p>
                </div>

                {/* Progress bar */}
                <div className="mb-6">
                    <div className="flex justify-between text-xs text-slate-500 mb-1">
                        <span>
                            {step === 'quiz'
                                ? `Pregunta ${currentQuestion + 1} de ${QUESTIONS.length}`
                                : 'Casi listo'}
                        </span>
                        <span>{progress}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-sky-500 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                {/* Card */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 shadow-xl">

                    {/* Quiz step */}
                    {step === 'quiz' && (
                        <div>
                            <h2 className="text-xl font-semibold text-white mb-6">
                                {QUESTIONS[currentQuestion].question}
                            </h2>
                            <div className="space-y-3">
                                {QUESTIONS[currentQuestion].options.map((option) => (
                                    <button
                                        key={option.label}
                                        onClick={() => handleAnswer(option)}
                                        className="w-full text-left px-5 py-4 rounded-xl border border-slate-600 text-slate-200 hover:border-sky-500 hover:bg-slate-700 transition-all duration-150 text-sm"
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Contact step */}
                    {step === 'contact' && (
                        <form onSubmit={handleSubmit} noValidate>
                            <h2 className="text-xl font-semibold text-white mb-2">
                                ¿A dónde enviamos sus resultados?
                            </h2>
                            <p className="text-slate-400 text-sm mb-6">
                                Le mostraremos exactamente qué significan sus respuestas y qué hacer a continuación.
                            </p>

                            {/* Honeypot */}
                            <div style={{ display: 'none' }} aria-hidden="true">
                                <input
                                    name="website"
                                    type="text"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    value={website}
                                    onChange={(e) => setWebsite(e.target.value)}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm text-slate-400 mb-1" htmlFor="quiz-firstName">
                                        Nombre <span className="text-sky-400">*</span>
                                    </label>
                                    <input
                                        id="quiz-firstName"
                                        type="text"
                                        required
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 text-sm"
                                        placeholder="María"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-slate-400 mb-1" htmlFor="quiz-lastName">
                                        Apellido <span className="text-sky-400">*</span>
                                    </label>
                                    <input
                                        id="quiz-lastName"
                                        type="text"
                                        required
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 text-sm"
                                        placeholder="García"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm text-slate-400 mb-1" htmlFor="quiz-phone">
                                    Teléfono <span className="text-sky-400">*</span>
                                </label>
                                <input
                                    id="quiz-phone"
                                    type="tel"
                                    required
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 text-sm"
                                    placeholder="(714) 555-0100"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm text-slate-400 mb-1" htmlFor="quiz-email">
                                    Correo electrónico <span className="text-slate-500 text-xs">(opcional — le enviamos una copia)</span>
                                </label>
                                <input
                                    id="quiz-email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 text-sm"
                                    placeholder="maria@ejemplo.com"
                                />
                            </div>

                            <div className="mb-6 flex items-start gap-3">
                                <input
                                    id="quiz-sms"
                                    type="checkbox"
                                    checked={smsConsent}
                                    onChange={(e) => setSmsConsent(e.target.checked)}
                                    className="mt-0.5 h-4 w-4 rounded border-slate-600 text-sky-500"
                                />
                                <label htmlFor="quiz-sms" className="text-xs text-slate-400 leading-relaxed">
                                    Acepto recibir mensajes de texto del consultorio del Dr. Bonakdar sobre mis resultados y opciones de cita. Se pueden aplicar tarifas de mensajes y datos. Responda STOP para cancelar.
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-sky-500 hover:bg-sky-400 text-white font-semibold py-3.5 rounded-xl transition-colors text-sm"
                            >
                                Ver Mis Resultados →
                            </button>

                            <p className="text-center text-xs text-slate-500 mt-4">
                                Sin spam. Su información solo se comparte con el consultorio del Dr. Bonakdar.
                            </p>
                        </form>
                    )}

                    {/* Submitting state */}
                    {step === 'submitting' && (
                        <div className="text-center py-8">
                            <div className="w-8 h-8 border-2 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                            <p className="text-slate-400 text-sm">Revisando sus respuestas…</p>
                        </div>
                    )}
                </div>

                <p className="text-center text-xs text-slate-600 mt-6">
                    Dr. Alexander Bonakdar · Keratoconus Vision Center · Santa Ana, CA
                </p>
            </div>
        </div>
    );
}
