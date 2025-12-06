'use client';

import React from 'react';
import FadeIn from './FadeIn';

const testimonials = [
    {
        quote: "I can see my kids' faces again",
        author: "Maria S.",
        role: "Keratoconus Patient",
        image: null // Placeholder for now
    },
    {
        quote: "Dr. Bonakdar: 'We Don't Give Up'",
        author: "James T.",
        role: "Scleral Lens Patient",
        image: null
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="lg:text-center mb-12">
                        <h2 className="text-4xl font-bold text-eyecare-navy font-serif mb-6">Real Patient Stories</h2>
                        <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
                            See the life-changing results for yourself. Hear from patients who were told their vision couldn't be saved.
                        </p>
                    </div>

                    {/* Mobile: Horizontal Scroll / Desktop: Grid */}
                    <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 max-w-5xl mx-auto scrollbar-hide -mx-4 px-4 md:mx-auto md:px-0">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="min-w-[85vw] md:min-w-0 snap-center">
                                <div className="bg-gray-100 rounded-2xl aspect-video flex items-center justify-center relative group cursor-pointer overflow-hidden shadow-lg border border-gray-200 transform transition-transform hover:scale-[1.02] active:scale-95">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform z-10">
                                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-eyecare-blue border-b-8 border-b-transparent ml-1"></div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                        <p className="text-white font-bold text-lg drop-shadow-md">"{t.quote}"</p>
                                        <p className="text-white/80 text-sm mt-1">{t.author}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Add a "More" card for mobile scroll hint if needed, or just CSS hint */}
                    </div>

                    {/* Mobile Scroll Hint */}
                    <div className="md:hidden flex justify-center gap-2 mt-4">
                        <div className="w-2 h-2 rounded-full bg-eyecare-blue"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
