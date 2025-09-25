
import React, { useState } from 'react';
import LazyImage from '@/components/ui/LazyImage';

interface BrandLogoProps {
  alt: string;
  src?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ alt, src }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  // Special handling for specific logos that should use paths to public folder
  const getLogoSource = () => {
    // Mapping with correct paths to public folder logos
    const specialLogos: Record<string, string> = {
      'Johnson & Johnson': '/images/logos/Logo_JohnsonJohnson.jpg',
      'Ray-Ban': '/images/logos/Logo_Rayban.jpg',
      'BostonSight': '/lovable-uploads/4bcc1574-aebc-4a51-a42f-6fb00f0ba226.png', // Using placeholder for missing
      'Bausch Lomb': '/images/logos/Logo_Bausch Lomb.jpg',
      'Tom Ford': '/images/logos/Logo_Tomford.jpg',
      'CooperVision': '/images/logos/Logo_CooperVision.jpg',
      'Acuvue': '/images/logos/Logo_Acuvue.jpg',
      'Hoya': '/images/logos/Logo_Hoya.jpg',
      'Essilor': '/images/logos/Logo_Essilor.jpg',
      'Oakley': '/images/logos/Logo_Oakley.jpg',
      'Gucci': '/lovable-uploads/4bcc1574-aebc-4a51-a42f-6fb00f0ba226.png', // Using placeholder for missing
      'Prada': '/images/logos/Logo_Prada.jpg',
      'ABBA': '/images/logos/Logo_ABBA.jpg',
      'SynergEyes': '/lovable-uploads/4bcc1574-aebc-4a51-a42f-6fb00f0ba226.png', // Using placeholder for missing
      'Blanchard': '/images/logos/Logo_Blanchard.jpg',
      'Valley Contax': '/lovable-uploads/4bcc1574-aebc-4a51-a42f-6fb00f0ba226.png', // Using placeholder for missing
      'Alcon': '/images/logos/Logo_Alcon.jpg',
      'Transitions': '/images/logos/Logo_Transitions.jpg',
      'GP Specialist': '/lovable-uploads/4bcc1574-aebc-4a51-a42f-6fb00f0ba226.png', // Using placeholder for missing
      'Visionary Optics': '/images/logos/Logo_Visionary Optics.jpg',
      'Contamac': '/lovable-uploads/4bcc1574-aebc-4a51-a42f-6fb00f0ba226.png', // Using placeholder for missing
      'Zeiss': '/images/logos/Logo_Zeiss.jpg',
      'Art Optical': '/images/logos/Logo_Art Optical.jpg',
      'Barton Perreira': '/images/logos/Logo_Barton Perreira.jpg',
      'Varilux': '/images/logos/Logo_Varilux.jpg',
      'Crizal': '/images/logos/Logo_Crizal.jpg',
      'Versace': '/images/logos/Logo_Versace.jpg',
      'Dior': '/images/logos/Logo_Dior.jpg',
      'Chloe': '/images/logos/Logo_Chloe.jpg'
    };

    // If the brand has a special logo mapping, use that instead of the default src
    if (specialLogos[alt]) {
      return specialLogos[alt];
    }
    
    // If no special mapping exists, use the provided src or generate a fallback path
    if (src) {
      return src;
    }
    
    // Return a default placeholder for missing logos
    return '/lovable-uploads/4bcc1574-aebc-4a51-a42f-6fb00f0ba226.png'; // Using uploaded image as fallback
  };

  // Handle image errors - show brand name text if image fails to load
  const handleImageError = () => {
    setImageError(true);
  };

  // Handle successful image loading
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // If image failed to load, display the brand name as text
  if (imageError) {
    return (
      <div className="flex items-center justify-center px-4">
        <div className="h-12 w-[140px] bg-gray-100 rounded-md flex items-center justify-center">
          <span className="text-gray-600 text-sm font-medium">{alt}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center px-4 filter grayscale hover:grayscale-0 transition-all duration-300">
      <div className="relative hover:scale-110 transition-transform duration-300">
        <LazyImage
          src={getLogoSource()}
          alt={`${alt} logo`}
          width={140}
          height={48}
          className="h-12 max-w-[140px] object-contain"
          onError={handleImageError}
          onLoad={handleImageLoad}
          sizes="140px"
          quality={90}
        />
      </div>
    </div>
  );
};

export default BrandLogo;
