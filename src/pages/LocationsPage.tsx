import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import CityLocationHub from '@/components/city/CityLocationHub';
import { useLanguage } from '@/contexts/LanguageContext';

const LocationsPage: React.FC = () => {
  const { language } = useLanguage();
  const isSpanish = language === 'es';
  
  const seoData = {
    title: isSpanish 
      ? 'Ubicaciones de Servicio | Condado de Orange | Centro de Cuidado Ocular'
      : 'Service Locations | Orange County | Eyecare Center',
    description: isSpanish
      ? 'Servimos Irvine, Tustin, Newport Beach, Costa Mesa, Anaheim y más ciudades del Condado de Orange. Cuidado ocular experto cerca de usted.'
      : 'Serving Irvine, Tustin, Newport Beach, Costa Mesa, Anaheim and more Orange County cities. Expert eye care near you.',
    keywords: isSpanish ? [
      'ubicaciones servicio condado orange',
      'optometrista irvine tustin newport',
      'ciudades servimos condado orange',
      'cuidado ocular cerca de mi',
      'doctor ojos condado orange',
      'optometria areas servicio'
    ].join(', ') : [
      'orange county service locations',
      'optometrist irvine tustin newport',
      'eye doctor orange county cities',
      'eye care near me orange county',
      'orange county optometry locations',
      'service areas orange county'
    ].join(', ')
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={`https://eyecarecenteroc.com${isSpanish ? '/es' : ''}/locations`}
        pageType="about"
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {isSpanish ? (
                <>
                  <span className="text-blue-600">Ubicaciones</span> de Servicio
                </>
              ) : (
                <>
                  <span className="text-blue-600">Service</span> Locations
                </>
              )}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {isSpanish 
                ? 'Sirviendo comunidades en todo el Condado de Orange con cuidado ocular experto. Encuentre información específica para su ciudad y área local.'
                : 'Serving communities throughout Orange County with expert eye care. Find specific information for your city and local area.'
              }
            </p>
            <div className="text-lg text-blue-600 font-medium">
              {isSpanish ? 'Más de 15 ciudades atendidas' : 'Serving 15+ Cities'} | 
              {isSpanish ? 'Radio de 25 millas' : '25-Mile Service Radius'}
            </div>
          </div>
        </section>
        
        {/* City Hub */}
        <CityLocationHub />
      </main>
      
      <Footer />
    </div>
  );
};

export default LocationsPage;