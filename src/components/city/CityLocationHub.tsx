import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Users, ArrowRight } from 'lucide-react';
import { citiesData, getTier1Cities, getTier2Cities, getTier3Cities } from '@/data/cityData';

const CityLocationHub: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';
  
  const tier1Cities = getTier1Cities();
  const tier2Cities = getTier2Cities();
  const tier3Cities = getTier3Cities();
  
  const CityCard: React.FC<{ city: any, tier: number }> = ({ city, tier }) => (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-blue-600" />
            {city.name}
          </span>
          <span className={`text-xs px-2 py-1 rounded-full ${
            tier === 1 ? 'bg-green-100 text-green-800' :
            tier === 2 ? 'bg-yellow-100 text-yellow-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {city.distance} {isSpanish ? 'mi' : 'miles'}
          </span>
        </CardTitle>
        <CardDescription className="flex items-center">
          <Users className="h-4 w-4 mr-1" />
          {city.population.toLocaleString()} {isSpanish ? 'residentes' : 'residents'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <h4 className="font-medium text-sm text-gray-700 mb-1">
              {isSpanish ? 'Vecindarios:' : 'Neighborhoods:'}
            </h4>
            <p className="text-sm text-gray-600">
              {city.neighborhoods.slice(0, 3).join(', ')}
              {city.neighborhoods.length > 3 && '...'}
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-sm text-gray-700 mb-1">
              {isSpanish ? 'Puntos de Referencia:' : 'Landmarks:'}
            </h4>
            <p className="text-sm text-gray-600">
              {city.landmarks.slice(0, 2).join(', ')}
              {city.landmarks.length > 2 && '...'}
            </p>
          </div>
          
          <Button asChild variant="outline" size="sm" className="w-full mt-4">
            <Link to={`${isSpanish ? '/es' : ''}/locations/${city.slug}`} className="flex items-center justify-center">
              {isSpanish ? 'Ver Servicios' : 'View Services'}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
  
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isSpanish 
              ? 'Ubicaciones de Servicio en el Condado de Orange'
              : 'Orange County Service Locations'
            }
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {isSpanish
              ? 'Sirviendo comunidades en todo el Condado de Orange con cuidado ocular experto. Encuentre información específica para su ciudad.'
              : 'Serving communities throughout Orange County with expert eye care. Find city-specific information for your area.'
            }
          </p>
        </div>
        
        {/* Tier 1 Cities - Primary Markets */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            {isSpanish ? 'Ciudades Principales' : 'Primary Cities'}
            <span className="text-sm font-normal text-gray-500 ml-2">
              ({isSpanish ? 'Más cercanas' : 'Closest locations'})
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tier1Cities.map((city, index) => (
              <CityCard key={index} city={city} tier={1} />
            ))}
          </div>
        </div>
        
        {/* Tier 2 Cities - Secondary Markets */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">
            {isSpanish ? 'Ciudades Secundarias' : 'Secondary Cities'}
            <span className="text-sm font-normal text-gray-500 ml-2">
              ({isSpanish ? 'Fácil acceso' : 'Easy access'})
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tier2Cities.map((city, index) => (
              <CityCard key={index} city={city} tier={2} />
            ))}
          </div>
        </div>
        
        {/* Tier 3 Cities - Extended Service Area */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">
            {isSpanish ? 'Área de Servicio Extendida' : 'Extended Service Area'}
            <span className="text-sm font-normal text-gray-500 ml-2">
              ({isSpanish ? 'También servimos' : 'Also serving'})
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tier3Cities.map((city, index) => (
              <CityCard key={index} city={city} tier={3} />
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center bg-blue-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">
            {isSpanish 
              ? '¿No Ve Su Ciudad en la Lista?'
              : 'Don\'t See Your City Listed?'
            }
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            {isSpanish
              ? 'Servimos a toda el área del Condado de Orange. Contáctenos para confirmar que podemos atender su ubicación.'
              : 'We serve the entire Orange County area. Contact us to confirm we can serve your location.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact" className="flex items-center">
                {isSpanish ? 'Contáctenos' : 'Contact Us'}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:714-558-1182" className="flex items-center">
                {isSpanish ? 'Llamar Ahora' : 'Call Now'}: (714) 558-1182
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityLocationHub;