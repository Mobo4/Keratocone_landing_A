const OC_CITIES = [
  'Irvine', 'Tustin', 'Costa Mesa', 'Newport Beach', 'Santa Ana',
  'Anaheim', 'Orange', 'Huntington Beach', 'Laguna Beach',
  'Laguna Niguel', 'Mission Viejo', 'Lake Forest', 'Dana Point',
  'Fullerton', 'Garden Grove', 'Westminster', 'Fountain Valley',
  'Aliso Viejo', 'San Clemente', 'Yorba Linda', 'Brea', 'Placentia',
  'Rancho Santa Margarita', 'San Juan Capistrano', 'Ladera Ranch',
  'Cypress', 'Buena Park', 'La Habra', 'Villa Park', 'Los Alamitos',
];

const LA_CITIES = [
  'Los Angeles', 'Long Beach', 'Torrance', 'Downey', 'Whittier',
  'Pasadena', 'Burbank', 'Glendale', 'Pomona', 'West Covina',
  'Lakewood', 'Cerritos', 'Norwalk', 'Bellflower', 'Compton',
];

const IE_CITIES = [
  'Riverside', 'San Bernardino', 'Ontario', 'Corona', 'Fontana',
  'Rancho Cucamonga', 'Moreno Valley', 'Temecula', 'Murrieta',
  'Chino', 'Chino Hills',
];

const SD_CITIES = [
  'San Diego', 'Oceanside', 'Carlsbad', 'Escondido', 'Chula Vista',
  'El Cajon', 'Vista', 'Encinitas', 'San Marcos',
];

export type GeoPersonalization = {
  badge: string;
  headline: string;
  subhead: string;
  urgency: string;
  socialProof: string;
  competitorAngle: string;
};

function cityMatch(city: string, list: string[]): string | null {
  const lower = city.toLowerCase();
  return list.find(c => lower.includes(c.toLowerCase())) || null;
}

export function getPersonalization(city: string): GeoPersonalization {
  if (!city) return getDefault();

  const ocMatch = cityMatch(city, OC_CITIES);
  if (ocMatch) {
    return {
      badge: `Serving ${ocMatch} Patients`,
      headline: `Keratoconus Specialist Near ${ocMatch}`,
      subhead: "We're minutes from your location — same-week appointments, easy parking, insurance accepted.",
      urgency: "Book This Week — We Have Openings",
      socialProof: `Join 500+ keratoconus patients from ${ocMatch} and Orange County`,
      competitorAngle: "Skip the 6-month wait at UCI/UCLA — see a specialist this week",
    };
  }

  const laMatch = cityMatch(city, LA_CITIES);
  if (laMatch) {
    return {
      badge: `${laMatch} → Orange County`,
      headline: `${laMatch} Patients Choose Us Over UCLA`,
      subhead: "A short drive beats a 6-month wait — direct specialist access, not residents.",
      urgency: "Same-Week Appointments Available",
      socialProof: "Patients drive from across LA County for direct specialist access",
      competitorAngle: "No residents, no rotating doctors — you see the specialist directly",
    };
  }

  const ieMatch = cityMatch(city, IE_CITIES);
  if (ieMatch) {
    return {
      badge: `Patients Travel from ${ieMatch}`,
      headline: `Keratoconus Patients from ${ieMatch} Trust Our Care`,
      subhead: "500+ cases treated — worth the drive for specialized expertise.",
      urgency: "Same-Week Appointments — Insurance Accepted",
      socialProof: "Referred by CHOC and UCI doctors for complex keratoconus cases",
      competitorAngle: "Bascom Palmer trained specialist with 35+ years of corneal expertise",
    };
  }

  const sdMatch = cityMatch(city, SD_CITIES);
  if (sdMatch) {
    return {
      badge: "Southern California's KC Expert",
      headline: `Patients Travel from ${sdMatch} for Our Keratoconus Care`,
      subhead: "When your vision matters, distance doesn't — 500+ cases treated.",
      urgency: "We Coordinate Your Visits to Minimize Trips",
      socialProof: "Scleral lens fitting + cross-linking coordination in one center",
      competitorAngle: "Direct specialist access — not a teaching hospital",
    };
  }

  return getDefault();
}

function getDefault(): GeoPersonalization {
  return {
    badge: '',
    headline: "Orange County's Keratoconus Specialist",
    subhead: "500+ keratoconus cases treated. Same-week appointments. Direct specialist access — not residents. Insurance accepted.",
    urgency: "Book Your Consultation — (714) 558-0641",
    socialProof: "Referred by CHOC & UCI doctors, Bascom Palmer trained",
    competitorAngle: "Direct specialist access — skip the 6-month university wait",
  };
}
