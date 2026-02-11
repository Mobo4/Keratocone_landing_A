'use client';

import { useState, useEffect, useCallback } from 'react';
import FadeIn from './FadeIn';
import Script from 'next/script';

interface Review {
  id: number;
  author: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
  source: string;
}

interface ReviewSummary {
  averageRating: number;
  totalReviews: number;
  distribution: Record<string, number>;
}

interface ReviewData {
  reviews: Review[];
  summary: ReviewSummary;
}

function StarRating({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClass = size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-6 h-6' : 'w-5 h-5';
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${sizeClass} ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" aria-label="Google">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const formattedDate = new Date(review.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
  });

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-eyecare-blue/20 transition-all duration-300 flex flex-col h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-eyecare-blue rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
            {review.author.charAt(0)}
          </div>
          <div>
            <p className="font-bold text-gray-800 text-sm">{review.author}</p>
            <div className="flex items-center gap-2">
              <p className="text-gray-400 text-xs">{formattedDate}</p>
              {review.verified && (
                <span className="inline-flex items-center gap-0.5 text-xs text-green-600">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Verified
                </span>
              )}
            </div>
          </div>
        </div>
        <StarRating rating={review.rating} size="sm" />
      </div>
      <p className="text-gray-600 leading-relaxed text-sm flex-grow">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center gap-1.5 mt-4 pt-3 border-t border-gray-50">
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
        <span className="text-xs text-gray-400">Posted on Google</span>
      </div>
    </div>
  );
}

export default function ReviewWidget() {
  const [reviewData, setReviewData] = useState<ReviewData | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const reviewsPerPage = 3;

  useEffect(() => {
    fetch('/data/reviews.json')
      .then((res) => res.json())
      .then((data: ReviewData) => setReviewData(data))
      .catch((err) => console.error('Failed to load reviews:', err));
  }, []);

  const totalPages = reviewData
    ? Math.ceil(reviewData.reviews.length / reviewsPerPage)
    : 0;

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying || totalPages <= 1) return;
    const timer = setInterval(nextPage, 8000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, totalPages, nextPage]);

  if (!reviewData) {
    return (
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto"></div>
              <div className="h-4 bg-gray-200 rounded w-48 mx-auto"></div>
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-48 bg-gray-200 rounded-xl"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const currentReviews = reviewData.reviews.slice(
    currentPage * reviewsPerPage,
    currentPage * reviewsPerPage + reviewsPerPage
  );

  // Build Schema.org Review markup
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Keratoconus Vision Center",
    "image": "https://www.keratocones.com/images/drbonakdar.webp",
    "url": "https://www.keratocones.com",
    "telephone": "(714) 558-0641",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "801 N Tustin Ave #401",
      "addressLocality": "Santa Ana",
      "addressRegion": "CA",
      "postalCode": "92705",
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": String(reviewData.summary.averageRating),
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": String(reviewData.summary.totalReviews),
      "reviewCount": String(reviewData.reviews.length)
    },
    "review": reviewData.reviews.map((review) => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "datePublished": review.date,
      "reviewBody": review.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": String(review.rating),
        "bestRating": "5",
        "worstRating": "1"
      }
    }))
  };

  // Calculate filled percentage for rating bar
  const ratingBarWidth = (count: number) => {
    const total = Object.values(reviewData.summary.distribution).reduce((a, b) => a + b, 0);
    return total > 0 ? (count / total) * 100 : 0;
  };

  return (
    <>
      <Script
        id="review-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <section className="py-16 md:py-24 bg-gray-50" id="reviews">
        <div className="container mx-auto px-4">
          <FadeIn>
            {/* Header with Google branding and summary */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <GoogleLogo />
                <h2 className="text-3xl font-bold text-eyecare-navy font-serif">Patient Reviews</h2>
              </div>

              {/* Rating Summary */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
                {/* Left: Big rating number */}
                <div className="text-center">
                  <div className="text-5xl font-bold text-eyecare-navy">{reviewData.summary.averageRating}</div>
                  <StarRating rating={Math.round(reviewData.summary.averageRating)} size="lg" />
                  <p className="text-gray-500 text-sm mt-1">
                    {reviewData.summary.totalReviews.toLocaleString()}+ reviews
                  </p>
                </div>

                {/* Right: Distribution bars */}
                <div className="w-64">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <div key={stars} className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-gray-500 w-3 text-right">{stars}</span>
                      <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-yellow-400 rounded-full transition-all duration-500"
                          style={{ width: `${ratingBarWidth(reviewData.summary.distribution[String(stars)] || 0)}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-400 w-8">
                        {reviewData.summary.distribution[String(stars)] || 0}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Review Cards Carousel */}
            <div
              className="max-w-6xl mx-auto mb-8"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <div className="grid md:grid-cols-3 gap-6">
                {currentReviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>

              {/* Carousel Controls */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-8">
                  <button
                    onClick={prevPage}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-eyecare-blue hover:text-eyecare-blue transition-colors"
                    aria-label="Previous reviews"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Page Dots */}
                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentPage(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          idx === currentPage
                            ? 'bg-eyecare-blue w-6'
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to page ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextPage}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-eyecare-blue hover:text-eyecare-blue transition-colors"
                    aria-label="Next reviews"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
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
    </>
  );
}
