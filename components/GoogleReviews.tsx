'use client';

import FadeIn from './FadeIn';

const reviews = [
    {
        name: "Sarah M.",
        rating: 5,
        date: "2025",
        text: "Dr. Bonakdar is amazing. He took the time to explain everything to me and made sure I understood my options. His attention to detail and patient care is outstanding.",
        source: "Google"
    },
    {
        name: "David L.",
        rating: 5,
        date: "2025",
        text: "His expertise in keratoconus management has significantly improved my vision and quality of life. After years of struggling with other doctors, Dr. Bonakdar provided solutions that actually worked for me.",
        source: "Google"
    },
    {
        name: "Jennifer K.",
        rating: 5,
        date: "2024",
        text: "I was referred to Dr. Bonakdar after being told by two other doctors that nothing more could be done for my keratoconus. He fitted me with scleral lenses and I can see clearly for the first time in years.",
        source: "Google"
    },
    {
        name: "Michael R.",
        rating: 5,
        date: "2024",
        text: "The Ortho-K treatment has been life-changing for my daughter. She no longer needs to wear glasses during the day. Dr. Bonakdar's expertise and gentle approach made the whole process comfortable for her.",
        source: "Google"
    }
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function GoogleReviews() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-4">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            <h2 className="text-3xl font-bold text-eyecare-navy font-serif">Patient Reviews</h2>
                        </div>
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <StarRating rating={5} />
                            <span className="text-lg font-bold text-gray-800">4.9</span>
                            <span className="text-gray-500">out of 5</span>
                        </div>
                        <p className="text-gray-500 text-sm">Based on Google and verified patient reviews</p>
                    </div>

                    {/* Reviews Grid */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
                        {reviews.map((review, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-eyecare-blue/20 transition-colors">
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-eyecare-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-800 text-sm">{review.name}</p>
                                            <p className="text-gray-400 text-xs">{review.date}</p>
                                        </div>
                                    </div>
                                    <StarRating rating={review.rating} />
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    &ldquo;{review.text}&rdquo;
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Google Review CTA */}
                    <div className="text-center">
                        <a
                            href="https://search.google.com/local/reviews?placeid=ChIJp2P0fFvf3IARqSfz9zJNDSk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-eyecare-blue hover:text-eyecare-dark-blue font-medium transition-colors"
                        >
                            See all reviews on Google
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
