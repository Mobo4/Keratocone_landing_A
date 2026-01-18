'use client';

import Script from 'next/script';
import FadeIn from './FadeIn';

const VIDEO_ID = 'jGBsy13yk7c';

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": "Keratoconus Explained: Scleral Lenses Treatment in Orange County",
  "description": "Dr. Alexander Bonakdar, Orange County's leading keratoconus specialist, explains keratoconus and how scleral lenses restore vision without surgery. Learn about non-surgical keratoconus treatment options.",
  "thumbnailUrl": `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
  "uploadDate": "2024-01-01T08:00:00-08:00",
  "duration": "PT2M30S",
  "contentUrl": `https://www.youtube.com/watch?v=${VIDEO_ID}`,
  "embedUrl": `https://www.youtube.com/embed/${VIDEO_ID}`,
  "publisher": {
    "@type": "Organization",
    "name": "Keratoconus Vision Center - Dr. Alexander Bonakdar",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.keratocones.com/images/logo.png"
    }
  },
  "author": {
    "@type": "Person",
    "name": "Dr. Alexander Bonakdar",
    "jobTitle": "Keratoconus Specialist",
    "worksFor": {
      "@type": "MedicalBusiness",
      "name": "Keratoconus Vision Center",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Orange County",
        "addressRegion": "CA"
      }
    }
  }
};

export default function VideoSection() {
  return (
    <>
      {/* VideoObject Schema for SEO */}
      <Script
        id="video-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-10">
                <p className="text-xs md:text-sm text-eyecare-blue font-bold tracking-widest uppercase mb-3">
                  Watch & Learn
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-eyecare-navy font-serif mb-4">
                  What Is Keratoconus?
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Dr. Bonakdar explains keratoconus and how scleral lenses can restore your vision without surgery.
                </p>
              </div>

              {/* Video Embed Container */}
              <div className="relative bg-eyecare-navy rounded-2xl overflow-hidden shadow-2xl">
                {/* Aspect Ratio Container */}
                <div className="relative pt-[56.25%]">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
                    title="Keratoconus Explained by Dr. Bonakdar - Orange County Keratoconus Specialist"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Video Caption / CTA */}
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Have questions about keratoconus treatment? Our specialist is here to help.
                </p>
                <a
                  href="#lead-form"
                  className="inline-flex items-center gap-2 bg-eyecare-blue hover:bg-eyecare-dark-blue text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Schedule Your Consultation
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
