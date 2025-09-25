import React from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  width,
  height,
  onError
}) => {
  // Convert images to WebP format if supported
  const getOptimizedSrc = (originalSrc: string) => {
    // Check if it's already an optimized image
    if (originalSrc.includes('.webp') || originalSrc.includes('.avif')) {
      return originalSrc;
    }
    
    // For uploaded images, try WebP version first
    if (originalSrc.includes('/lovable-uploads/') || originalSrc.includes('/images/')) {
      const webpSrc = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      return webpSrc;
    }
    
    return originalSrc;
  };

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Fallback to original image if WebP fails
    const img = e.currentTarget;
    if (img.src !== src) {
      img.src = src;
    }
    
    if (onError) {
      onError(e);
    }
  };

  return (
    <img
      src={getOptimizedSrc(src)}
      alt={alt}
      className={className}
      loading={loading}
      width={width}
      height={height}
      onError={handleError}
    />
  );
};

export default LazyImage;