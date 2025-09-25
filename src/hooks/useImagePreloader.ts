import { useEffect } from 'react';

interface ImagePreloadConfig {
  src: string;
  priority: 'high' | 'medium' | 'low';
  format?: 'avif' | 'webp' | 'original';
}

/**
 * Hook to preload critical images for better performance
 * Prioritizes modern formats (AVIF > WebP > original)
 */
export const useImagePreloader = (images: ImagePreloadConfig[]) => {
  useEffect(() => {
    // Only preload on client side
    if (typeof window === 'undefined') return;

    const preloadImage = (config: ImagePreloadConfig) => {
      // Generate optimized image URLs based on format preference
      const getOptimizedUrl = (originalSrc: string, preferredFormat?: string) => {
        if (originalSrc.includes('http') || originalSrc.includes('.webp') || originalSrc.includes('.avif')) {
          return originalSrc;
        }

        const extension = originalSrc.split('.').pop()?.toLowerCase();
        if (!extension || !['jpg', 'jpeg', 'png'].includes(extension)) {
          return originalSrc;
        }

        const basePath = originalSrc.replace(/\.[^/.]+$/, '');
        
        if (preferredFormat === 'avif') {
          return `${basePath}.avif`;
        } else if (preferredFormat === 'webp') {
          return `${basePath}.webp`;
        }
        
        return originalSrc;
      };

      // Try to preload the most optimized format first
      const formats = config.format ? [config.format] : ['avif', 'webp', 'original'];
      const cleanups: (() => void)[] = [];
      
      formats.forEach((format, index) => {
        const url = getOptimizedUrl(config.src, format === 'original' ? undefined : format);
        
        // Create link element for preloading
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = url;
        
        // Set priority hint
        if (config.priority === 'high') {
          link.setAttribute('fetchpriority', 'high');
        } else if (config.priority === 'low') {
          link.setAttribute('fetchpriority', 'low');
        }

        // Add format-specific type for better browser optimization
        if (format === 'avif') {
          link.type = 'image/avif';
        } else if (format === 'webp') {
          link.type = 'image/webp';
        }

        // Only add to head if not already present
        const existing = document.querySelector(`link[href="${url}"]`);
        if (!existing) {
          document.head.appendChild(link);
        }

        // Store cleanup function for this specific link
        cleanups.push(() => {
          if (link.parentNode) {
            link.parentNode.removeChild(link);
          }
        });
      });
      
      return cleanups;
    };

    // Sort by priority and preload
    const sortedImages = [...images].sort((a, b) => {
      const priorityOrder = { high: 0, medium: 1, low: 2 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    const cleanupFunctions: (() => void)[] = [];
    sortedImages.forEach(config => {
      const cleanups = preloadImage(config);
      if (Array.isArray(cleanups)) {
        cleanupFunctions.push(...cleanups);
      }
    });

    // Cleanup function
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, [images]);
};

/**
 * Preload critical images for a specific page
 */
export const usePageImagePreloader = (pageName: string) => {
  const criticalImages: Record<string, ImagePreloadConfig[]> = {
    home: [
      { src: '/images/staff/drbonakdar.png', priority: 'high', format: 'avif' },
      { src: '/images/logos/Logo_Rayban.jpg', priority: 'medium', format: 'avif' },
      { src: '/images/logos/Logo_Prada.jpg', priority: 'medium', format: 'avif' },
    ],
    keratoconus: [
      { src: '/lovable-uploads/Keratoconus_eye.png', priority: 'high', format: 'avif' },
      { src: '/lovable-uploads/Scleral_lens_01.png', priority: 'high', format: 'avif' },
    ],
    services: [
      { src: '/lovable-uploads/IPL_01.png', priority: 'high', format: 'avif' },
      { src: '/lovable-uploads/Corneal_cross_linking.png', priority: 'medium', format: 'avif' },
    ],
    dryeye: [
      { src: '/lovable-uploads/Dryeye_01.png', priority: 'high', format: 'avif' },
      { src: '/lovable-uploads/IPL_01.png', priority: 'high', format: 'avif' },
    ],
    contact: [
      // Contact page typically doesn't have heavy images
    ],
  };

  const pageImages = criticalImages[pageName] || [];
  useImagePreloader(pageImages);
};

export default useImagePreloader;