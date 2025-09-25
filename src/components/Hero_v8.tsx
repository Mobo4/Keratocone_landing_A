import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';
import { useTranslation } from 'react-i18next';
import AppointmentRequestDialog from './AppointmentRequestDialog';
import { useCallRailPhone } from '@/hooks/useCallRailPhone';

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
  const { phoneNumber, phoneHref } = useCallRailPhone();

  // Use provided text or fallback to reasonable defaults
  const heroTitle = title || (translationKey ? t(`${translationKey}.title`, 'Advanced Eye Care Solutions') : 'Advanced Eye Care Solutions');
  const heroSubtitle = subtitle || (translationKey ? t(`${translationKey}.subtitle`, 'Comprehensive vision care for the entire family') : 'Comprehensive vision care for the entire family');
  const heroButtonText = ctaText || buttonText || 'Make Appointment';
  const heroButtonLink = ctaLink || buttonLink || '/contact';

  const renderButtons = () => {
    return (
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-start w-full">
        {/* Primary CTA - Make Appointment */}
        <AppointmentRequestDialog>
          <button className="w-full sm:w-auto inline-flex items-center justify-center bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform group animate-fade-in shadow-lg"
            style={{animationDelay: '0.4s'}}>
            {heroButtonText}
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </AppointmentRequestDialog>

        {/* Secondary CTA - Call Now */}
        <a
          href={phoneHref}
          className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-gray-50 text-eyecare-blue border-2 border-eyecare-blue px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform animate-fade-in shadow-lg callrail-phone"
          style={{animationDelay: '0.6s'}}
        >
          <Phone className="mr-2 w-5 h-5" />
          Call {phoneNumber}
        </a>
      </div>
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
    <section className={`py-16 md:py-24 ${backgroundClass} relative overflow-hidden`} style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}>
      <AnimatedBackground colorScheme={colorScheme} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 border-2 border-eyecare-blue rounded-full opacity-10 hidden md:block animate-pulse"></div>
          <div className="absolute top-20 -right-10 w-16 h-16 bg-eyecare-light-purple rounded-full opacity-20 hidden md:block animate-pulse" style={{ animationDelay: '1s' }}></div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 animate-fade-in leading-tight">
            {renderTitle()}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 animate-fade-in max-w-2xl mx-auto" style={{animationDelay: '0.2s'}}>
            {heroSubtitle}
          </p>

          {/* Premium keratoconus trust indicators */}
          <div className="mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-gray-700">
              <span className="flex items-center bg-blue-100 px-4 py-2 rounded-full border border-blue-300">
                👨‍⚕️ 5,000+ Scleral Lens Fittings
              </span>
              <span className="flex items-center bg-purple-100 px-4 py-2 rounded-full border border-purple-300">
                🏆 FDA-Approved Crosslinking
              </span>
              <span className="flex items-center bg-green-100 px-4 py-2 rounded-full border border-green-300">
                ⭐ 98% Success Rate
              </span>
            </div>
          </div>

          {renderButtons()}
        </div>
      </div>
    </section>
  );
};

export default Hero;