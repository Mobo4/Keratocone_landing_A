import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import VendorLogoCarousel from '@/components/VendorLogoCarousel';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CityData } from '@/data/cityData';
import { 
  Phone, 
  Calendar, 
  MapPin, 
  Eye, 
  Droplet, 
  Brain, 
  Baby, 
  Glasses,
  Star,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

interface CityPageTemplateProps {
  cityData: CityData;
  language: 'en' | 'es';
}

const CityPageTemplate: React.FC<CityPageTemplateProps> = ({ cityData, language }) => {
  const { t } = useTranslation();
  const isSpanish = language === 'es';
  
  // Generate SEO data
  const generateSEOData = () => {
    const cityName = isSpanish ? cityData.spanishName || cityData.name : cityData.name;
    const baseTitle = isSpanish 
      ? `Optometrista en ${cityName} | Dr. Alexander Bonakdar | Centro de Cuidado Ocular`
      : `${cityName} Optometrist | Dr. Alexander Bonakdar | Eye Care Center`;
    
    const baseDescription = isSpanish
      ? `Cuidado ocular experto en ${cityName}, CA. Tratamiento de ojo seco, manejo de queratocono, optometría pediátrica, control de miopía. Dr. Alexander Bonakdar, especialista en ${cityName}.`
      : `Expert eye care in ${cityName}, CA. Dry eye treatment, keratoconus management, pediatric optometry, myopia control. Dr. Alexander Bonakdar, ${cityName} specialist.`;
    
    const keywords = isSpanish ? [
      `optometrista ${cityName}`,
      `doctor ojos ${cityName}`,
      `examen vista ${cityName}`,
      `tratamiento ojo seco ${cityName}`,
      `especialista queratocono ${cityName}`,
      `optometría pediátrica ${cityName}`,
      `control miopía ${cityName}`,
      `orto-k ${cityName}`,
      `dolor cabeza ojos ${cityName}`,
      ...cityData.keywordModifiers.map(mod => `${mod} optometrista`),
      ...cityData.neighborhoods.map(n => `optometrista ${n}`),
      ...cityData.zipCodes.map(zip => `optometrista ${zip}`)
    ] : [
      `${cityName} optometrist`,
      `eye doctor ${cityName}`,
      `${cityName} eye exam`,
      `${cityName} dry eye treatment`, 
      `${cityName} keratoconus specialist`,
      `${cityName} pediatric optometrist`,
      `${cityName} myopia management`,
      `${cityName} ortho-k`,
      `${cityName} headache eye doctor`,
      `optometrist near ${cityName}`,
      `eye care ${cityName}`,
      ...cityData.keywordModifiers.map(mod => `${mod} optometrist`),
      ...cityData.neighborhoods.map(n => `${n} eye doctor`),
      ...cityData.zipCodes.map(zip => `optometrist ${zip}`)
    ];
    
    return {
      title: baseTitle,
      description: baseDescription,
      keywords: keywords.join(', '),
      canonicalUrl: `https://eyecarecenteroc.com/${isSpanish ? 'es/' : ''}locations/${cityData.slug}`
    };
  };

  const seoData = generateSEOData();
  
  // Service data with city-specific keywords
  const services = [
    {
      icon: <Eye className="h-8 w-8 text-blue-600" />,
      title: isSpanish ? 'Exámenes Completos de la Vista' : 'Comprehensive Eye Exams',
      description: isSpanish 
        ? `Exámenes completos de la vista en ${cityData.name} utilizando tecnología avanzada para detectar problemas tempranos.`
        : `Comprehensive eye exams in ${cityData.name} using advanced technology to detect early vision problems.`,
      keywords: isSpanish ? [`examen vista ${cityData.name}`, 'revisión ocular completa'] : [`${cityData.name} eye exam`, 'comprehensive vision test']
    },
    {
      icon: <Droplet className="h-8 w-8 text-cyan-600" />,
      title: isSpanish ? 'Tratamiento de Ojo Seco' : 'Dry Eye Treatment',
      description: isSpanish
        ? `Tratamiento avanzado de ojo seco en ${cityData.name} incluyendo terapia IPL y LipiFlow para alivio duradero.`
        : `Advanced dry eye treatment in ${cityData.name} including IPL therapy and LipiFlow for lasting relief.`,
      keywords: isSpanish ? [`tratamiento ojo seco ${cityData.name}`, 'síndrome ojo seco'] : [`${cityData.name} dry eye treatment`, 'dry eye syndrome']
    },
    {
      icon: <Eye className="h-8 w-8 text-purple-600" />,
      title: isSpanish ? 'Especialista en Queratocono' : 'Keratoconus Specialist',
      description: isSpanish
        ? `Manejo experto de queratocono en ${cityData.name} con lentes esclerales y opciones de tratamiento avanzadas.`
        : `Expert keratoconus management in ${cityData.name} with scleral lenses and advanced treatment options.`,
      keywords: isSpanish ? [`especialista queratocono ${cityData.name}`, 'lentes esclerales'] : [`${cityData.name} keratoconus specialist`, 'scleral lenses']
    },
    {
      icon: <Baby className="h-8 w-8 text-green-600" />,
      title: isSpanish ? 'Optometría Pediátrica' : 'Pediatric Optometry',
      description: isSpanish
        ? `Cuidado ocular especializado para niños en ${cityData.name}. Exámenes amigables y control de miopía.`
        : `Specialized eye care for children in ${cityData.name}. Kid-friendly exams and myopia control.`,
      keywords: isSpanish ? [`optometría pediátrica ${cityData.name}`, 'doctor ojos niños'] : [`${cityData.name} pediatric optometrist`, 'children eye doctor']
    },
    {
      icon: <Glasses className="h-8 w-8 text-indigo-600" />,
      title: isSpanish ? 'Control de Miopía' : 'Myopia Management',
      description: isSpanish
        ? `Control avanzado de miopía en ${cityData.name} con Ortho-K y otras opciones para detener la progresión.`
        : `Advanced myopia management in ${cityData.name} with Ortho-K and other options to slow progression.`,
      keywords: isSpanish ? [`control miopía ${cityData.name}`, 'orto-k'] : [`${cityData.name} myopia management`, 'ortho-k']
    },
    {
      icon: <Brain className="h-8 w-8 text-red-600" />,
      title: isSpanish ? 'Dolores de Cabeza y Fatiga Ocular' : 'Headaches & Eye Strain',
      description: isSpanish
        ? `Tratamiento de dolores de cabeza relacionados con la vista y fatiga ocular en ${cityData.name}.`
        : `Treatment for vision-related headaches and eye strain in ${cityData.name}.`,
      keywords: isSpanish ? [`dolor cabeza ojos ${cityData.name}`, 'fatiga visual'] : [`${cityData.name} headache eye doctor`, 'eye strain treatment']
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        canonicalUrl={seoData.canonicalUrl}
        pageType="treatment"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": `Eyecare Center of Orange County - ${cityData.name}`,
          "description": seoData.description,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": cityData.name,
            "addressRegion": "CA",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.7455",
            "longitude": "-117.8677"
          },
          "telephone": "+17145581182",
          "areaServed": cityData.name,
          "paymentAccepted": "Cash, Credit Card, Insurance",
          "priceRange": "$$"
        }}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                <span className="text-lg font-medium text-blue-600">
                  {isSpanish ? 'Sirviendo' : 'Serving'} {cityData.name}, {cityData.county}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {isSpanish ? (
                  <>
                    <span className="text-blue-600">Optometrista</span> en {cityData.name}
                  </>
                ) : (
                  <>
                    <span className="text-blue-600">{cityData.name}</span> Optometrist
                  </>
                )}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                {isSpanish 
                  ? `Dr. Alexander Bonakdar brinda cuidado ocular experto a pacientes en ${cityData.name} y áreas circundantes. Especializado en ojo seco, queratocono, optometría pediátrica y control de miopía.`
                  : `Dr. Alexander Bonakdar provides expert eye care to patients in ${cityData.name} and surrounding areas. Specializing in dry eye, keratoconus, pediatric optometry, and myopia management.`
                }
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <a href="/contact" className="flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    {isSpanish ? 'Programar Cita' : 'Schedule Appointment'}
                  </a>
                </Button>
                
                <Button asChild variant="outline" size="lg">
                  <a href="tel:714-558-1182" className="flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    (714) 558-1182
                  </a>
                </Button>
              </div>
              
              <div className="text-sm text-gray-500">
                {isSpanish ? 'Distancia desde Santa Ana:' : 'Distance from Santa Ana:'} {cityData.distance} {isSpanish ? 'millas' : 'miles'} | 
                {isSpanish ? 'Población:' : 'Population:'} {cityData.population.toLocaleString()}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {isSpanish 
                  ? `Servicios de Cuidado Ocular en ${cityData.name}`
                  : `Eye Care Services in ${cityData.name}`
                }
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {isSpanish
                  ? `Ofrecemos servicios completos de cuidado ocular para residentes de ${cityData.name} y áreas vecinas.`
                  : `We offer comprehensive eye care services for residents of ${cityData.name} and neighboring areas.`
                }
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center mb-4">
                      {service.description}
                    </CardDescription>
                    <div className="text-center">
                      <Button asChild variant="outline" size="sm">
                        <a href="/contact" className="flex items-center">
                          {isSpanish ? 'Más Información' : 'Learn More'}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Local Area Information */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                {isSpanish 
                  ? `Sirviendo ${cityData.name} y Áreas Vecinas`
                  : `Serving ${cityData.name} and Surrounding Areas`
                }
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                      {isSpanish ? 'Vecindarios que Servimos' : 'Neighborhoods We Serve'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {cityData.neighborhoods.map((neighborhood, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          {neighborhood}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Star className="h-5 w-5 mr-2 text-blue-600" />
                      {isSpanish ? 'Puntos de Referencia Locales' : 'Local Landmarks'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {cityData.landmarks.map((landmark, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                          {landmark}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center bg-blue-50 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">
                  {isSpanish 
                    ? `¿Vive en ${cityData.name}? ¡Estamos Aquí para Ayudar!`
                    : `Live in ${cityData.name}? We're Here to Help!`
                  }
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {isSpanish
                    ? `Solo a ${cityData.distance} millas de nuestro consultorio en Santa Ana. Fácil acceso desde ${cityData.name}.`
                    : `Just ${cityData.distance} miles from our Santa Ana office. Easy access from ${cityData.name}.`
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg">
                    <a href="/contact" className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      {isSpanish ? 'Programar Consulta' : 'Schedule Consultation'}
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="https://maps.google.com/?q=801+N+Tustin+Ave+%23404,+Santa+Ana,+CA+92705" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      {isSpanish ? 'Ver Direcciones' : 'Get Directions'}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for City */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-12">
                {isSpanish 
                  ? `¿Por Qué Elegir Nuestro Centro de Cuidado Ocular para Residentes de ${cityData.name}?`
                  : `Why Choose Our Eye Care Center for ${cityData.name} Residents?`
                }
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {isSpanish ? 'Fácil Acceso' : 'Easy Access'}
                  </h3>
                  <p className="text-gray-600">
                    {isSpanish 
                      ? `Solo ${cityData.distance} millas desde ${cityData.name}. Conveniente para todos los residentes del área.`
                      : `Just ${cityData.distance} miles from ${cityData.name}. Convenient for all area residents.`
                    }
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {isSpanish ? 'Tecnología Avanzada' : 'Advanced Technology'}
                  </h3>
                  <p className="text-gray-600">
                    {isSpanish 
                      ? 'Equipos de diagnóstico de última generación para el mejor cuidado posible.'
                      : 'State-of-the-art diagnostic equipment for the best possible care.'
                    }
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {isSpanish ? 'Cuidado Especializado' : 'Specialized Care'}
                  </h3>
                  <p className="text-gray-600">
                    {isSpanish 
                      ? 'Expertos en condiciones complejas como queratocono y ojo seco.'
                      : 'Experts in complex conditions like keratoconus and dry eye.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vendor Logos */}
        <VendorLogoCarousel 
          title={isSpanish ? 'Marcas de Confianza' : 'Trusted Brands'}
          category="all"
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default CityPageTemplate;