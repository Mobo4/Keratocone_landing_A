import FadeIn from './FadeIn';

const testimonials = [
    {
        name: 'Sarah M.',
        quote:
            'After years of struggling with blurry vision and a 6-month waitlist at UCI, I found Dr. Bonakdar. He completely restored my vision with scleral lenses.',
    },
    {
        name: 'David L.',
        quote:
            'I went from barely being able to drive at night to 20/20 corrected vision. Dr. Bonakdar got me in within days, not months.',
    },
    {
        name: 'Brian H.',
        quote:
            'CHOC referred us to Dr. Bonakdar for our son\u2019s keratoconus. He went from failing eye exams to reading the board perfectly.',
    },
];

function Stars() {
    return (
        <div className="flex gap-0.5" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm" aria-hidden="true">
                    &#9733;
                </span>
            ))}
        </div>
    );
}

export default function TestimonialQuotes() {
    return (
        <FadeIn>
            <section className="bg-gray-50 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-eyecare-navy font-serif text-center mb-8">
                        What Our Patients Say
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {testimonials.map((t) => (
                            <div
                                key={t.name}
                                className="bg-white rounded-xl p-6 shadow-sm flex flex-col justify-between"
                            >
                                <div>
                                    <span
                                        className="text-4xl leading-none text-eyecare-blue opacity-30 select-none"
                                        aria-hidden="true"
                                    >
                                        &ldquo;
                                    </span>
                                    <p className="text-gray-700 text-sm italic mt-1 mb-4">
                                        {t.quote}
                                    </p>
                                </div>

                                <div className="border-t border-gray-100 pt-3 mt-auto">
                                    <Stars />
                                    <p className="text-sm font-medium text-gray-900 mt-1">
                                        &mdash; {t.name}
                                    </p>
                                    <p className="text-xs text-gray-400">Verified Google Review</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <a
                            href="#reviews"
                            className="text-eyecare-blue font-medium text-sm hover:underline"
                        >
                            Read more Google Reviews &rarr;
                        </a>
                    </div>
                </div>
            </section>
        </FadeIn>
    );
}
