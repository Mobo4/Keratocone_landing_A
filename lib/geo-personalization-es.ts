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

export function getPersonalizationEs(city: string): GeoPersonalization {
  if (!city) return getDefaultEs();

  const ocMatch = cityMatch(city, OC_CITIES);
  if (ocMatch) {
    return {
      badge: `Atendemos pacientes de ${ocMatch}`,
      headline: `Especialista en Queratocono cerca de ${ocMatch}`,
      subhead: "Estamos a minutos de su ubicación — citas esta semana, seguro aceptado.",
      urgency: "Reserve esta semana — (714) 558-0641",
      socialProof: `500+ pacientes de queratocono en Orange County`,
      competitorAngle: "No espere 6 meses en UCLA/UCI — vea al especialista esta semana",
    };
  }

  const laMatch = cityMatch(city, LA_CITIES);
  if (laMatch) {
    return {
      badge: `${laMatch} → Orange County`,
      headline: `Pacientes de ${laMatch} nos eligen`,
      subhead: "Un viaje corto es mejor que 6 meses de espera — acceso directo al especialista.",
      urgency: "Citas esta semana disponibles",
      socialProof: "Pacientes viajan desde todo el condado de LA",
      competitorAngle: "Sin residentes — usted ve al especialista directamente",
    };
  }

  const ieMatch = cityMatch(city, IE_CITIES);
  if (ieMatch) {
    return {
      badge: `Pacientes viajan desde ${ieMatch}`,
      headline: `Pacientes de ${ieMatch} confían en nosotros`,
      subhead: "500+ casos tratados — vale la pena el viaje por experiencia especializada.",
      urgency: "Citas esta semana — Seguro aceptado",
      socialProof: "Referidos por doctores de CHOC y UCI",
      competitorAngle: "Especialista con 35+ años de experiencia corneal",
    };
  }

  const sdMatch = cityMatch(city, SD_CITIES);
  if (sdMatch) {
    return {
      badge: "Experto en Queratocono del Sur de California",
      headline: `Pacientes viajan desde ${sdMatch} para nuestra atención`,
      subhead: "Cuando su visión importa, la distancia no — 500+ casos tratados.",
      urgency: "Coordinamos sus visitas para minimizar viajes",
      socialProof: "Lentes esclerales + coordinación de cross-linking en un centro",
      competitorAngle: "Acceso directo al especialista — no un hospital universitario",
    };
  }

  return getDefaultEs();
}

function getDefaultEs(): GeoPersonalization {
  return {
    badge: '',
    headline: "Especialista en Queratocono de Orange County",
    subhead: "500+ casos tratados. Citas esta semana. Acceso directo al especialista. Hablamos español. Seguro aceptado.",
    urgency: "Reserve su consulta — (714) 558-0641",
    socialProof: "Referidos por doctores de CHOC y UCI, entrenado en Bascom Palmer",
    competitorAngle: "Acceso directo — no espere 6 meses en la universidad",
  };
}
