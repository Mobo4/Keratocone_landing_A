import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  sizes?: string;
  quality?: number;
  onLoad?: () => void;
  onError?: () => void;
}

/**
 * Optimized LazyImage component with modern image formats, lazy loading, and responsive sizing
 * Features:
 * - WebP/AVIF format support with fallbacks
 * - Intersection Observer lazy loading
 * - Responsive image sizing
 * - Blur placeholder support
 * - Priority loading for above-the-fold images
 */
const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  placeholder = 'blur',
  blurDataURL,
  sizes,
  quality = 85,
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate optimized image URLs
  const getOptimizedImageUrl = (originalSrc: string, format?: 'webp' | 'avif') => {
    // If it's already an optimized format or external URL, return as-is
    if (originalSrc.includes('http') || originalSrc.includes('.webp') || originalSrc.includes('.avif')) {
      return originalSrc;
    }

    const extension = originalSrc.split('.').pop()?.toLowerCase();
    if (!extension || !['jpg', 'jpeg', 'png'].includes(extension)) {
      return originalSrc;
    }

    const basePath = originalSrc.replace(/\.[^/.]+$/, '');
    
    if (format === 'avif') {
      return `${basePath}.avif`;
    } else if (format === 'webp') {
      return `${basePath}.webp`;
    }
    
    return originalSrc;
  };

  // Generate responsive sizes string
  const getResponsiveSizes = () => {
    if (sizes) return sizes;
    
    // Default responsive sizes based on common breakpoints
    return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
  };

  // Generate srcSet for responsive images
  const generateSrcSet = (baseUrl: string, format?: 'webp' | 'avif') => {
    const optimizedUrl = getOptimizedImageUrl(baseUrl, format);
    
    // For different screen densities
    return [
      `${optimizedUrl} 1x`,
      `${optimizedUrl} 2x`
    ].join(', ');
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority) return; // Skip lazy loading for priority images

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Generate default blur data URL if not provided
  const defaultBlurDataURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiNmM2Y0ZjYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNlNWU3ZWIiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNnKSIvPjwvc3ZnPg==';

  // Render placeholder while not in view or loading
  if (!isInView) {
    return (
      <div
        ref={imgRef}
        className={cn(
          'bg-gray-200 animate-pulse',
          className
        )}
        style={{ width, height }}
        aria-label={`Loading ${alt}`}
      />
    );
  }

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Blur placeholder */}
      {placeholder === 'blur' && !isLoaded && (
        <img
          src={blurDataURL || defaultBlurDataURL}
          alt=""
          className={cn(
            'absolute inset-0 w-full h-full object-cover filter blur-sm scale-110 transition-opacity duration-300',
            isLoaded ? 'opacity-0' : 'opacity-100'
          )}
          aria-hidden="true"
        />
      )}

      {/* Loading skeleton */}
      {!isLoaded && placeholder === 'empty' && (
        <div
          className={cn(
            'absolute inset-0 bg-gray-200 animate-pulse transition-opacity duration-300',
            isLoaded ? 'opacity-0' : 'opacity-100'
          )}
        />
      )}

      {/* Main image with modern format support */}
      <picture>
        {/* AVIF format (best compression) */}
        <source
          srcSet={generateSrcSet(src, 'avif')}
          sizes={getResponsiveSizes()}
          type="image/avif"
        />
        
        {/* WebP format (widely supported) */}
        <source
          srcSet={generateSrcSet(src, 'webp')}
          sizes={getResponsiveSizes()}
          type="image/webp"
        />
        
        {/* Fallback to original format */}
        <img
          ref={imgRef}
          src={hasError ? '/placeholder.svg' : src}
          alt={alt}
          width={width}
          height={height}
          sizes={getResponsiveSizes()}
          className={cn(
            'w-full h-full object-cover transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0',
            className
          )}
          onLoad={handleLoad}
          onError={handleError}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      </picture>

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
          Failed to load image
        </div>
      )}
    </div>
  );
};

export default LazyImage;