
import React, { useEffect, useRef, useState } from 'react';
import BrandLogo from '@/components/BrandLogo';
import { useIsMobile } from '@/hooks/use-mobile';

interface VendorLogoCarouselProps {
  title?: string;
  description?: string;
  category?: string;
  fixedPosition?: boolean;
}

const VendorLogoCarousel: React.FC<VendorLogoCarouselProps> = ({ 
  title = "Our Trusted Partners",  
  description = "We partner with industry-leading brands to provide the highest quality care and products.",
  category,
  fixedPosition = false
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [isScrolling, setIsScrolling] = useState(false);
  
  // Define brands with valid logo files in the public folder
  const knownWorkingLogos = [
    'Johnson & Johnson',
    'Ray-Ban',
    'Bausch Lomb',
    'Tom Ford',
    'CooperVision',
    'Acuvue',
    'Hoya',
    'Essilor',
    'Oakley',
    'Prada',
    'Alcon',
    'Transitions',
    'Visionary Optics',
    'ABBA',
    'Blanchard',
    'Zeiss',
    'Art Optical',
    'Barton Perreira',
    'Varilux',
    'Crizal',
    'Versace',
    'Dior',
    'Chloe'
  ];
  
  // Define our valid brand lists with proper naming - using only brands with valid logos
  const lensManufacturers = [
    'CooperVision',
    'Johnson & Johnson',
    'Acuvue',
    'Bausch Lomb',
    'Alcon',
    'Transitions',
    'Hoya',
    'Essilor',
    'Zeiss'
  ];
  
  const frameManufacturers = [
    'Ray-Ban',
    'Tom Ford',
    'Oakley',
    'Prada',
    'Barton Perreira',
    'Versace',
    'Dior',
    'Chloe'
  ];
  
  // Updated list with companies that definitely have available logos
  const keratoconusTreatment = [
    'Bausch Lomb',
    'Johnson & Johnson', 
    'CooperVision',
    'Visionary Optics',
    'ABBA',
    'Blanchard',
    'Art Optical'
  ];
  
  // Cataract and LASIK brands with valid logos
  const cataractLasikBrands = [
    'Johnson & Johnson',
    'Bausch Lomb',
    'Alcon',
    'Zeiss'
  ];
  
  // Determine which brands to display based on category
  let brandsToDisplay: string[] = [];
  
  switch(category) {
    case 'lenses':
      brandsToDisplay = lensManufacturers;
      break;
    case 'frames':
      brandsToDisplay = frameManufacturers;
      break;
    case 'keratoconus':
      brandsToDisplay = keratoconusTreatment;
      break;
    case 'cataract':
    case 'lasik':
      brandsToDisplay = cataractLasikBrands;
      break;
    default:
      // If no category specified, show a combination of different brands with reliable logos
      brandsToDisplay = [
        'Johnson & Johnson', 
        'Ray-Ban', 
        'Bausch Lomb', 
        'Tom Ford',
        'CooperVision',
        'Essilor'
      ];
  }

  // Make sure we have at least a few brands to display
  if (brandsToDisplay.length < 3) {
    brandsToDisplay = knownWorkingLogos.slice(0, 6);
  }

  // Auto-scrolling functionality
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    
    // Start with carousel scrolled to the end for right-to-left scrolling
    carousel.scrollLeft = carousel.scrollWidth - carousel.clientWidth;
    
    let animationId: number;
    const scrollSpeed = -1; // Negative value for right-to-left scrolling
    
    const scroll = () => {
      if (carousel) {
        carousel.scrollLeft += scrollSpeed;
        
        // Reset scroll position when reaching the beginning
        if (carousel.scrollLeft <= 10) {
          carousel.scrollLeft = carousel.scrollWidth - carousel.clientWidth;
          setIsScrolling(true);
        }
      }
      
      animationId = requestAnimationFrame(scroll);
    };
    
    // Start scrolling after a small delay to ensure content is loaded
    const timeoutId = setTimeout(() => {
      setIsScrolling(true);
      animationId = requestAnimationFrame(scroll);
    }, 1000);
    
    // Pause on hover for better user experience
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
      setIsScrolling(false);
    };
    
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
      setIsScrolling(true);
    };
    
    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationId);
      if (carousel) {
        carousel.removeEventListener('mouseenter', handleMouseEnter);
        carousel.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  
  return (
    <section className={`py-10 bg-gray-50 border-t border-gray-200 ${fixedPosition ? 'fixed bottom-0 left-0 right-0 z-50' : ''}`}>
      <div className="container mx-auto px-4">
        {title && (
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">{title}</h2>
            {description && <p className="text-gray-600 mt-2">{description}</p>}
          </div>
        )}
        
        <div className="overflow-hidden bg-white rounded-lg shadow-md p-4 hover:shadow-xl hover:bg-eyecare-lighter-blue/10 transition-all duration-300">
          <div 
            ref={carouselRef} 
            className="flex whitespace-nowrap overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Duplicate items to create infinite scroll effect */}
            {[...brandsToDisplay, ...brandsToDisplay].map((brand, index) => (
              <div 
                key={index} 
                className={`inline-flex items-center justify-center p-4 ${isMobile ? 'w-1/3' : 'w-1/6'} flex-shrink-0`}
              >
                <BrandLogo alt={brand} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VendorLogoCarousel;
