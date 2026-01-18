'use client';

import FadeIn from './FadeIn';

const VIDEO_ID = 'jGBsy13yk7c';

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

                    {/* Video Embed */}
                    <div className="max-w-4xl mx-auto">
                        <div className="relative bg-eyecare-navy rounded-2xl overflow-hidden shadow-2xl">
                            <div className="relative pt-[56.25%]">
                                <iframe
                                    className="absolute inset-0 w-full h-full border-0"
                                    src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
                                    title="Keratoconus Patient Stories - Dr. Bonakdar"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
