'use client';

import React, { useState } from 'react';
import { CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

export default function KeratoconusQuiz() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [showResult, setShowResult] = useState(false);

    const questions = [
        {
            id: 1,
            question: "How does your vision affect your daily life?",
            options: [
                "It's annoying but manageable with glasses",
                "I struggle with night driving and halos",
                "I can't see clearly even with glasses/contacts",
                "It's severely limiting my independence"
            ]
        },
        {
            id: 2,
            question: "What treatments have you tried so far?",
            options: [
                "Just glasses",
                "Soft contact lenses",
                "RGP (Hard) lenses",
                "Corneal Cross-linking or Intacs"
            ]
        },
        {
            id: 3,
            question: "Have you been told your case is 'difficult'?",
            options: [
                "No, not specifically",
                "Yes, by one doctor",
                "Yes, by multiple doctors",
                "I've been told I need a transplant"
            ]
        }
    ];

    const handleOptionClick = (option: string) => {
        setAnswers({ ...answers, [step]: option });
        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            setShowResult(true);
        }
    };

    return (
        <section className="py-20 bg-eyecare-lighter-blue px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-white/50">
                    {!showResult ? (
                        <div className="p-8 md:p-12">
                            <div className="mb-8">
                                <span className="text-eyecare-blue font-bold tracking-wider uppercase text-sm">Free Assessment</span>
                                <h2 className="text-3xl font-bold text-eyecare-navy mt-2">Am I A Candidate for Scleral Lenses?</h2>
                                <div className="w-full bg-gray-100 h-2 rounded-full mt-6">
                                    <div
                                        className="bg-eyecare-blue h-2 rounded-full transition-all duration-300"
                                        style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xl font-semibold text-eyecare-navy">
                                    {questions[step].question}
                                </h3>
                                <div className="grid gap-4">
                                    {questions[step].options.map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleOptionClick(option)}
                                            className="text-left p-5 rounded-xl border-2 border-gray-100 hover:border-eyecare-blue hover:bg-eyecare-lighter-blue/50 transition-all duration-200 flex items-center justify-between group"
                                        >
                                            <span className="font-medium text-eyecare-light-navy group-hover:text-eyecare-blue">{option}</span>
                                            <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-eyecare-blue opacity-0 group-hover:opacity-100 transition-all" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="p-8 md:p-12 text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-8 h-8 text-green-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-eyecare-navy mb-4">You Are A High-Priority Candidate</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Based on your answers, you are likely a perfect candidate for our advanced Scleral Lens program. Don't wait until your vision degrades further.
                            </p>

                            <div className="bg-eyecare-lighter-blue p-6 rounded-xl border border-eyecare-blue/20 mb-8 text-left">
                                <h4 className="font-bold text-eyecare-navy mb-2 flex items-center gap-2">
                                    <AlertCircle className="w-5 h-5 text-eyecare-blue" />
                                    Why you should act now:
                                </h4>
                                <ul className="space-y-2 text-eyecare-light-navy text-sm">
                                    <li>• Your symptoms indicate potential for significant vision improvement.</li>
                                    <li>• Complex cases require specialized care to prevent progression.</li>
                                    <li>• We have limited new patient slots available this month.</li>
                                </ul>
                            </div>

                            <a
                                href="#appointment"
                                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-eyecare-blue hover:bg-eyecare-dark-blue md:py-4 md:text-lg md:px-10 shadow-lg hover:shadow-xl transition-all"
                            >
                                Schedule Your Expert Consultation
                            </a>
                            <p className="mt-4 text-sm text-gray-500">
                                Or call us directly: <a href="tel:+17145580641" className="text-eyecare-blue font-bold hover:underline">(714) 558-0641</a>
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
