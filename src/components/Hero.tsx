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
    <section className={`py-20 ${backgroundClass} relative overflow-hidden`} style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}>
      <AnimatedBackground colorScheme={colorScheme} />
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
          {renderTitle()}
        </h1>

        <p className="text-xl md:text-2xl mb-4 text-gray-700 max-w-4xl mx-auto">
          {heroSubtitle}
        </p>

        {/* Trust indicators */}
        <div className="mb-8">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
            <span className="flex items-center">
              ✓ Orange County's Leading Practice Since 1995
            </span>
            <span className="flex items-center">
              ✓ 50,000+ OC Residents Treated
            </span>
            <span className="flex items-center">
              ✓ UCI & CHOC Referral Partner
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Primary CTA - Make Appointment */}
          <AppointmentRequestDialog>
            <button className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300">
              {heroButtonText}
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 inline" />
            </button>
          </AppointmentRequestDialog>

          {/* Secondary CTA - Call Now */}
          <a
            href={phoneHref}
            className="bg-white border-2 border-eyecare-blue text-eyecare-blue hover:bg-eyecare-blue hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300 callrail-phone"
          >
            <Phone className="mr-2 w-5 h-5 inline" />
            Call {phoneNumber}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;