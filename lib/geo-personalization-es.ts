import type { GeoPersonalization } from './geo-personalization';

const OC_CITIES = [
  'Irvine', 'Tustin', 'Costa Mesa', 'Newport Beach', 'Santa Ana',
  'Anaheim', 'Orange', 'Huntington Beach', 'Laguna Beach',
  'Laguna Niguel', 'Mission Viejo', 'Lake Forest', 'Dana Point',
  'Fullerton', 'Garden Grove', 'Westminster', 'Fountain Valley',
  'Aliso Viejo', 'San Clemente', 'Yorba Linda', 'Brea', 'Placentia',
  'Rancho Santa Margarita',
];

const LA_CITIES = [
  'Los Angeles', 'Long Beach', 'Torrance', 'Downey', 'Whittier',
  'Pasadena', 'Lakewood', 'Cerritos',
];

const IE_CITIES = [
  'Riverside', 'San Bernardino', 'Ontario', 'Corona', 'Fontana',
  'Rancho Cucamonga', 'Moreno Valley',
];

const SD_CITIES = [
  'San Diego', 'Oceanside', 'Carlsbad', 'Escondido', 'Vista', 'Encinitas',
];

function cityMatch(city: string, list: string[]): string | null {
  const lower = city.toLowerCase();
  return list.find(c => lower.includes(c.toLowerCase())) || null;
}

export function getPersonalizationEs(
  city: string,
  keyword?: string,
  utmSource?: string,
): GeoPersonalization {

  // Keyword intent
  if (keyword) {
    const kw = keyword.toLowerCase();
    if (kw.includes('scleral') || kw.includes('escleral'))
      return {
        badge: 'Experto en Lentes Esclerales',
        headline: 'Ajuste de Lentes Esclerales para Queratocono',
        subhead: '2,000+ ajustes — restaure su visión clara y cómoda.',
        urgency: 'Reserve su Consulta de Lentes Esclerales',
        socialProof: 'Pacientes viajan desde toda California por nuestra experiencia',
      };
    if (kw.includes('cross') || kw.includes('cxl'))
      return {
        badge: 'Centro de Cross-Linking',
        headline: 'Detenga el Queratocono con Cross-Linking',
        subhead: 'Coordinación de CXL + lentes esclerales — un solo centro especializado.',
        urgency: 'Pregunte Sobre Cross-Linking',
        socialProof: 'Referidos por CHOC y UCI para casos complejos',
      };
    if (kw.includes('niño') || kw.includes('child') || kw.includes('pediatr'))
      return {
        badge: 'Queratocono Pediátrico',
        headline: 'Tratamiento de Queratocono para Niños y Adolescentes',
        subhead: 'Centro de referencia CHOC — ajuste suave de lentes esclerales para mayores de 10 años.',
        urgency: 'Agende una Consulta Pediátrica',
        socialProof: 'Confianza de padres en todo Orange County',
      };
  }

  // UTM source
  if (utmSource === 'facebook')
    return {
      badge: '',
      headline: 'Lo Que Todo Paciente de Queratocono Necesita Saber',
      subhead: '2,000+ casos tratados por un especialista entrenado en Bascom Palmer. Seguro aceptado.',
      urgency: 'Aprenda Más — Reserve una Consulta',
      socialProof: 'Confianza de CHOC y UCI Medical Center',
    };

  // Geo
  if (!city) return getDefaultEs();

  const ocMatch = cityMatch(city, OC_CITIES);
  if (ocMatch) {
    return {
      badge: `Atendemos pacientes de ${ocMatch}`,
      headline: `Especialista en Queratocono en ${ocMatch}`,
      subhead: 'Citas esta semana — estamos a minutos de su ubicación.',
      urgency: 'Reserve esta semana — (714) 558-0641',
      socialProof: `2,000+ pacientes de queratocono en Orange County`,
    };
  }

  const laMatch = cityMatch(city, LA_CITIES);
  if (laMatch) {
    return {
      badge: `${laMatch} → Orange County`,
      headline: `Pacientes de ${laMatch} nos eligen sobre UCLA`,
      subhead: '30 minutos en coche mejor que 6 meses de espera — acceso directo al especialista.',
      urgency: 'Citas esta semana disponibles',
      socialProof: 'Pacientes viajan desde todo el condado de LA',
    };
  }

  const ieMatch = cityMatch(city, IE_CITIES);
  if (ieMatch) {
    return {
      badge: `Pacientes viajan desde ${ieMatch}`,
      headline: `Pacientes de ${ieMatch} confían en nosotros`,
      subhead: '2,000+ casos tratados — experiencia especializada que vale el viaje.',
      urgency: 'Seguro aceptado — Reserve esta semana',
      socialProof: 'Referidos por doctores de CHOC y UCI',
    };
  }

  const sdMatch = cityMatch(city, SD_CITIES);
  if (sdMatch) {
    return {
      badge: 'Experto en Queratocono del Sur de California',
      headline: `Pacientes viajan desde ${sdMatch} para nuestra atención`,
      subhead: 'Cuando su visión importa — 2,000+ casos, entrenado en Bascom Palmer.',
      urgency: 'Coordinamos sus visitas para minimizar viajes',
      socialProof: 'Lentes esclerales + coordinación de cross-linking en un centro',
    };
  }

  return getDefaultEs();
}

function getDefaultEs(): GeoPersonalization {
  return {
    badge: '',
    headline: 'Especialista Líder en Queratocono en California',
    subhead: '2,000+ casos, citas esta semana, acceso directo al especialista. Seguro aceptado.',
    urgency: 'Reserve su consulta — (714) 558-0641',
    socialProof: 'Entrenado en Bascom Palmer, referidos por CHOC y UCI',
  };
}
