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
};

function cityMatch(city: string, list: string[]): string | null {
  const lower = city.toLowerCase();
  return list.find(c => lower.includes(c.toLowerCase())) || null;
}

export function getPersonalization(
  city: string,
  keyword?: string,
  utmCampaign?: string,
  utmSource?: string,
): GeoPersonalization {

  // 1. Keyword intent (highest priority — visitor searched for something specific)
  if (keyword) {
    const kw = keyword.toLowerCase();
    if (kw.includes('scleral'))
      return {
        badge: 'Scleral Lens Expert',
        headline: 'Custom Scleral Lens Fitting for Keratoconus',
        subhead: '5,000+ fittings — restore clear, comfortable vision.',
        urgency: 'Book Your Scleral Lens Consultation',
        socialProof: 'Patients travel from across California for our scleral expertise',
      };
    if (kw.includes('cross') || kw.includes('cxl'))
      return {
        badge: 'Cross-Linking Center',
        headline: 'Stop Keratoconus Progression with Cross-Linking',
        subhead: 'CXL coordination + scleral lens fitting — one specialist center.',
        urgency: 'Ask About Cross-Linking',
        socialProof: 'Referred by CHOC & UCI for complex KC cases',
      };
    if (kw.includes('child') || kw.includes('kid') || kw.includes('pediatric'))
      return {
        badge: 'Pediatric KC Care',
        headline: 'Keratoconus Treatment for Children & Teens',
        subhead: 'CHOC referral center — gentle scleral fitting for ages 10+.',
        urgency: 'Schedule a Pediatric Consultation',
        socialProof: 'Trusted by parents across Orange County',
      };
    if (kw.includes('second opinion') || kw.includes('alternative'))
      return {
        badge: 'Second Opinion Center',
        headline: 'Get a Keratoconus Second Opinion This Week',
        subhead: 'Not satisfied with your current care? 5,000+ cases, Bascom Palmer trained.',
        urgency: 'Book Your Second Opinion',
        socialProof: 'Many of our patients came for a second opinion and stayed',
      };
  }

  // 2. UTM campaign intent (visitor came from a specific ad)
  if (utmCampaign) {
    const camp = utmCampaign.toLowerCase();
    if (camp.includes('kc_maxclicks') || camp.includes('keratoconus'))
      return {
        badge: '',
        headline: "You Searched for Keratoconus — You're in the Right Place",
        subhead: '5,000+ cases treated. Same-week appointments. Direct specialist access.',
        urgency: 'Book Your Consultation Today',
        socialProof: 'Bascom Palmer trained, referred by CHOC & UCI doctors',
      };
  }
  if (utmSource === 'facebook')
    return {
      badge: '',
      headline: "Here's What Every Keratoconus Patient Needs to Know",
      subhead: '5,000+ cases treated by a Bascom Palmer trained specialist. Insurance accepted.',
      urgency: 'Learn More — Book a Consultation',
      socialProof: 'Trusted by CHOC and UCI Medical Center for complex cases',
    };

  // 3. Geo personalization (visitor location)
  if (!city) return getDefault();

  const ocMatch = cityMatch(city, OC_CITIES);
  if (ocMatch) {
    return {
      badge: `Serving ${ocMatch}`,
      headline: `Keratoconus Specialist Near ${ocMatch}`,
      subhead: "Same-week appointments — we're minutes from you.",
      urgency: 'Book This Week',
      socialProof: `5,000+ keratoconus patients from ${ocMatch} and Orange County`,
    };
  }

  const laMatch = cityMatch(city, LA_CITIES);
  if (laMatch) {
    return {
      badge: `${laMatch} → Orange County`,
      headline: `Why ${laMatch} Patients Choose Us Over UCLA`,
      subhead: "A short drive beats a 6-month wait — see the specialist directly, not residents.",
      urgency: 'Same-Week Appointments Available',
      socialProof: 'Patients drive from across LA County for direct specialist access',
    };
  }

  const ieMatch = cityMatch(city, IE_CITIES);
  if (ieMatch) {
    return {
      badge: `Patients from ${ieMatch}`,
      headline: `Keratoconus Specialist Near ${ieMatch} — Worth the Drive`,
      subhead: '5,000+ cases treated — specialized expertise near you.',
      urgency: 'Insurance Accepted — Book This Week',
      socialProof: 'Referred by CHOC and UCI doctors for complex cases',
    };
  }

  const sdMatch = cityMatch(city, SD_CITIES);
  if (sdMatch) {
    return {
      badge: "SoCal's KC Expert",
      headline: `Patients Travel from ${sdMatch} for Our Keratoconus Care`,
      subhead: 'When your vision matters — 5,000+ cases, Bascom Palmer trained.',
      urgency: 'We Coordinate Visits to Minimize Trips',
      socialProof: 'Scleral lenses + cross-linking coordination in one center',
    };
  }

  return getDefault();
}

function getDefault(): GeoPersonalization {
  return {
    badge: '',
    headline: "California's Leading Keratoconus Specialist",
    subhead: 'Most clinics see 10 keratoconus patients a year. We\u2019ve treated 5,000+. Same-week appointments near you.',
    urgency: 'Book Your Consultation — (714) 558-0641',
    socialProof: 'Bascom Palmer trained, referred by CHOC & UCI doctors',
  };
}
