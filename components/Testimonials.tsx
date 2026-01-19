'use client';

import React from 'react';
import FadeIn from './FadeIn';
import Script from 'next/script';

export default function Testimonials() {
    const videoId = 'jGBsy13yk7c';

    // VideoObject schema for SEO
    const videoSchema = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        "name": "Understanding Your Keratoconus Diagnosis - What You Need to Know",
        "description": "Dr. Alexander Bonakdar explains keratoconus diagnosis, treatment options, and how scleral lenses can restore clear vision. Learn what to expect from your keratoconus specialist in Orange County, CA.",
        "thumbnailUrl": `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        "uploadDate": "2024-01-01T00:00:00-08:00",
        "contentUrl": `https://www.youtube.com/watch?v=${videoId}`,
        "embedUrl": `https://www.youtube.com/embed/${videoId}`,
        "publisher": {
            "@type": "Organization",
            "name": "Keratoconus Vision Center",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.keratocones.com/images/logo.png"
            }
        }
    };

    return (
        <section className="py-24 bg-white overflow-hidden">
            <Script
                id="video-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
            />
            <div className="container mx-auto px-4">
                <FadeIn>
                    <div className="lg:text-center mb-12">
                        <h2 className="text-4xl font-bold text-eyecare-navy font-serif mb-6">Real Patient Stories</h2>
                        <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
                            See the life-changing results for yourself. Hear from patients who were told their vision couldn't be saved.
                        </p>
                    </div>

                    {/* Centered YouTube Video */}
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                                    title="Understanding Your Keratoconus Diagnosis - What You Need to Know"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        <p className="text-center mt-4 text-gray-600 text-sm">
                            Understanding Your Keratoconus Diagnosis: Causes, Symptoms & Treatment Options
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
