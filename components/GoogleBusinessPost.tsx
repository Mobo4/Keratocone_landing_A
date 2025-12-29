import React from 'react';
import { ExternalLink, Calendar } from 'lucide-react';

export default function GoogleBusinessPost() {
    // This data would come from the Google Business Profile API if credentials were available.
    // For now, we use a static "Featured Update" which is better for SEO and performance than a client-side fetch.
    const post = {
        image: "/images/scleral-lens-fitting.jpg", // Ensure this image exists or use a generic one
        date: "Dec 12, 2024",
        text: "Did you know that Scleral Lenses can restore 20/20 vision even for advanced Keratoconus? We are now accepting new patients for 2025. Use your end-of-year FSA/HSA benefits before they expire!",
        link: "https://g.page/r/Cbbmbma1zdSAEBM/review", // Direct link to GBP or specific post
        cta: "Book Consultation"
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden max-w-sm mx-auto my-8">
            <div className="bg-[#4285F4] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                        <path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" />
                    </svg>
                    <span className="text-white font-medium text-sm">Latest from Google</span>
                </div>
                <a
                    href="https://www.google.com/search?q=Keratoconus+Vision+Center+Santa+Ana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition-colors"
                >
                    <ExternalLink className="w-4 h-4" />
                </a>
            </div>

            <div className="p-5">
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {post.text}
                </p>

                <div className="flex flex-col gap-3">
                    {/* Placeholder for local image if we had one from the post */}
                    {/* <img src={post.image} alt="Clinic Update" className="w-full h-48 object-cover rounded-lg" /> */}

                    <a
                        href="#appointment"
                        className="block w-full py-2 bg-blue-50 text-eyecare-blue text-center rounded-lg text-sm font-bold hover:bg-blue-100 transition-colors"
                    >
                        {post.cta}
                    </a>
                </div>
            </div>
        </div>
    );
}
