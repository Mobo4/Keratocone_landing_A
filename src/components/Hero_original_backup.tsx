
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import { useTranslation } from 'react-i18next';
import AppointmentRequestDialog from './AppointmentRequestDialog';

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundClass?: string;
  colorScheme?: 'purple' | 'blue' | 'green' | 'teal';
  translationKey?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  buttonText,
  buttonLink,
  backgroundClass = "bg-gradient-to-r from-eyecare-lighter-blue to-purple-200",
  colorScheme = 'purple',
  translationKey = 'hero',
  backgroundImage,
  ctaText,
  ctaLink
}) => {
  const { t } = useTranslation();
  
  // Use provided text or fallback to reasonable defaults
  const heroTitle = title || (translationKey ? t(`${translationKey}.title`, 'Advanced Eye Care Solutions') : 'Advanced Eye Care Solutions');
  const heroSubtitle = subtitle || (translationKey ? t(`${translationKey}.subtitle`, 'Comprehensive vision care for the entire family') : 'Comprehensive vision care for the entire family');
  const heroButtonText = ctaText || buttonText || 'Make Appointment';
  const heroButtonLink = ctaLink || buttonLink || '/contact';

  const renderButton = () => {
    // Always use the appointment dialog for consistency
    return (
      <AppointmentRequestDialog>
        <button className="inline-flex items-center bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-3 rounded-md text-lg font-medium transition-colors hover:scale-105 transform group animate-fade-in"
          style={{animationDelay: '0.4s'}}>
          {heroButtonText}
          <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </AppointmentRequestDialog>
    );
  };

  // Safe title splitting that handles both translated and direct strings
  const renderTitle = () => {
    if (!heroTitle) return null;
    
    const titleWords = heroTitle.split(' ');
    if (titleWords.length > 1) {
      return (
        <>
          <span className="text-eyecare-blue">{titleWords[0]}</span>{' '}
          {titleWords.slice(1).join(' ')}
        </>
      );
    }
    return heroTitle;
  };

  return (
    <section className={`py-24 ${backgroundClass} relative overflow-hidden`} style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}>
      <AnimatedBackground colorScheme={colorScheme} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 border-2 border-eyecare-blue rounded-full opacity-10 hidden md:block animate-pulse"></div>
          <div className="absolute top-20 -right-10 w-16 h-16 bg-eyecare-light-purple rounded-full opacity-20 hidden md:block animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            {renderTitle()}
          </h1>
          <p className="text-xl mb-8 text-gray-700 animate-fade-in" style={{animationDelay: '0.2s'}}>
            {heroSubtitle}
          </p>
          {renderButton()}
        </div>
      </div>
    </section>
  );
};

export default Hero;
