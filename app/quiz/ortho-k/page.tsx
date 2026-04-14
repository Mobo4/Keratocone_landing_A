'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { captureAndGetTracking, getStoredTracking } from '@/lib/utm-tracking';

// ─── Ortho-K Quiz questions ───────────────────────────────────────────────────
const QUESTIONS = [
    {
        question: "How has your child's glasses prescription changed over the past year?",
        options: [
            { label: "Stable — no significant change", points: 1 },
            { label: "Slight change — a little stronger", points: 2 },
            { label: "Moderately stronger each visit", points: 3 },
            { label: "Significantly stronger every 6–12 months", points: 4 },
        ],
    },
    {
        question: "How old is your child?",
        options: [
            { label: "Under 6", points: 1 },
            { label: "6–8 years old", points: 3 },
            { label: "9–14 years old", points: 4 },
            { label: "15–18 years old", points: 3 },
        ],
    },
    {
        question: "Does your child play sports or have activities where glasses are an issue?",
        options: [
            { label: "No — glasses are fine for their activities", points: 1 },
            { label: "Sometimes inconvenient but manageable", points: 2 },
            { label: "Sports where glasses cause real problems", points: 3 },
            { label: "Has had injury or lost glasses due to activities", points: 4 },
        ],
    },
    {
        question: "How concerned are you about their vision continuing to worsen?",
        options: [
            { label: "Not very — we're monitoring for now", points: 1 },
            { label: "Somewhat — want to keep an eye on it", points: 2 },
            { label: "Actively looking for ways to slow it down", points: 3 },
            { label: "Very concerned — want to act now", points: 4 },
        ],
    },
    {
        question: "Has your child's eye doctor mentioned myopia control or overnight contact lenses?",
        options: [
            { label: "No — I found this on my own", points: 2 },
            { label: "Mentioned fast progression but offered no solution", points: 3 },
            { label: "Suggested myopia control but not ortho-K specifically", points: 3 },
            { label: "Specifically recommended ortho-K or overnight lenses", points: 4 },
        ],
    },
];

type Step = 'quiz' | 'contact' | 'submitting';

interface Answer {
    question: string;
    answer: string;
    points: number;
}

export default function OrthoKQuizPage() {
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

        const quizType = 'orthok';
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
                    ...tracking,
                }),
            });

            const data = await response.json() as { success: boolean; tier?: string };
            const tier = data.tier || 'general';
            router.push(`/quiz/results/${tier}?type=${quizType}`);
        } catch {
            // Soft-fail — always redirect, never leave user on spinner
            router.push(`/quiz/results/general?type=${quizType}`);
        }
    }

    // ── Progress bar ──────────────────────────────────────────────────────────
    const progress = step === 'quiz'
        ? Math.round((currentQuestion / QUESTIONS.length) * 100)
        : 100;

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center px-4 py-12">
            <div className="w-full max-w-2xl">

                {/* Header */}
                <div className="text-center mb-8">
                    <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-2">
                        2-Minute Assessment
                    </p>
                    <h1 className="text-3xl font-bold text-white">
                        Is Ortho-K Right for Your Child?
                    </h1>
                    <p className="text-slate-400 mt-2 text-sm">
                        Answer 5 questions to find out if your child is a candidate for overnight vision correction.
                    </p>
                </div>

                {/* Progress bar */}
                <div className="mb-6">
                    <div className="flex justify-between text-xs text-slate-500 mb-1">
                        <span>{step === 'quiz' ? `Question ${currentQuestion + 1} of ${QUESTIONS.length}` : 'Almost done'}</span>
                        <span>{progress}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-emerald-500 rounded-full transition-all duration-300"
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
                                        className="w-full text-left px-5 py-4 rounded-xl border border-slate-600 text-slate-200 hover:border-emerald-500 hover:bg-slate-700 transition-all duration-150 text-sm"
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
                                Where should we send the results?
                            </h2>
                            <p className="text-slate-400 text-sm mb-6">
                                We&apos;ll tell you if your child qualifies and what the next step looks like.
                            </p>

                            {/* Honeypot — hidden from humans, visible to bots */}
                            <div
                                style={{ display: 'none' }}
                                aria-hidden="true"
                            >
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
                                    <label className="block text-sm text-slate-400 mb-1" htmlFor="orthok-firstName">
                                        First Name <span className="text-emerald-400">*</span>
                                    </label>
                                    <input
                                        id="orthok-firstName"
                                        type="text"
                                        required
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                                        placeholder="Jane"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-slate-400 mb-1" htmlFor="orthok-lastName">
                                        Last Name <span className="text-emerald-400">*</span>
                                    </label>
                                    <input
                                        id="orthok-lastName"
                                        type="text"
                                        required
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                                        placeholder="Smith"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-sm text-slate-400 mb-1" htmlFor="orthok-phone">
                                    Phone <span className="text-emerald-400">*</span>
                                </label>
                                <input
                                    id="orthok-phone"
                                    type="tel"
                                    required
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                                    placeholder="(714) 555-0100"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-sm text-slate-400 mb-1" htmlFor="orthok-email">
                                    Email <span className="text-slate-500 text-xs">(optional — we can email you a copy)</span>
                                </label>
                                <input
                                    id="orthok-email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 text-sm"
                                    placeholder="jane@example.com"
                                />
                            </div>

                            <div className="mb-6 flex items-start gap-3">
                                <input
                                    id="orthok-sms"
                                    type="checkbox"
                                    checked={smsConsent}
                                    onChange={(e) => setSmsConsent(e.target.checked)}
                                    className="mt-0.5 h-4 w-4 rounded border-slate-600 text-emerald-500"
                                />
                                <label htmlFor="orthok-sms" className="text-xs text-slate-400 leading-relaxed">
                                    I agree to receive text messages from Dr. Bonakdar&apos;s office about my child&apos;s results and appointment options. Message and data rates may apply. Reply STOP to opt out.
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-3.5 rounded-xl transition-colors text-sm"
                            >
                                See My Child&apos;s Results →
                            </button>

                            <p className="text-center text-xs text-slate-500 mt-4">
                                No spam, ever. Your info is only shared with Dr. Bonakdar&apos;s office.
                            </p>
                        </form>
                    )}

                    {/* Submitting state */}
                    {step === 'submitting' && (
                        <div className="text-center py-8">
                            <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                            <p className="text-slate-400 text-sm">Reviewing your answers…</p>
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
