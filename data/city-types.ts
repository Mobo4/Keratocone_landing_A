/**
 * FILE: data/city-types.ts
 * PURPOSE: City type classification system for anti-doorway content differentiation
 * AUTHOR: Claude Code
 * CREATED: 2026-02-10
 *
 * CONTEXT: Google penalizes doorway pages (near-identical content with city name swaps).
 * This file classifies 51 Southern California cities into 10 demographic/geographic types,
 * enabling unique keratoconus-specific content per city type across all city pages.
 *
 * TYPES ARE KERATOCONUS-RELEVANT:
 * - coastal-affluent: UV exposure, outdoor lifestyle, premium care expectations
 * - coastal-active: Surf/beach culture, active lifestyle lens needs
 * - tech-university: Screen time, myopia prevalence, young professional demographics
 * - family-suburban: Pediatric keratoconus, school-age progression concerns
 * - affluent-residential: Premium scleral lens options, concierge-level care
 * - urban-diverse: Insurance access, bilingual needs, community health
 * - suburban-commuter: Driving vision demands, convenience-focused care
 * - inland-growing: Growing communities, travel distance considerations
 * - north-county-sd: San Diego North County, distance patients, worth-the-drive messaging
 * - la-gateway: LA County border cities, freeway commute, metro accessibility
 */

export type CityType =
  | 'coastal-affluent'
  | 'coastal-active'
  | 'tech-university'
  | 'family-suburban'
  | 'affluent-residential'
  | 'urban-diverse'
  | 'suburban-commuter'
  | 'inland-growing'
  | 'north-county-sd'
  | 'la-gateway';

export interface CityTypeMetadata {
  label: string;
  characteristics: string[];
  keratoconusRelevance: string;
}

/**
 * Complete mapping of all 51 Southern California cities to their demographic type.
 * Based on geographic location, demographics, median income, lifestyle patterns,
 * and keratoconus-relevant environmental factors.
 */
export const cityTypeMap: Record<string, CityType> = {
  // --- coastal-affluent (3 cities) ---
  // High-income coastal communities with outdoor lifestyle and premium care expectations
  'newport-beach': 'coastal-affluent',
  'laguna-beach': 'coastal-affluent',
  'dana-point': 'coastal-affluent',

  // --- coastal-active (2 cities) ---
  // Beach culture, surf lifestyle, active outdoor vision demands
  'huntington-beach': 'coastal-active',
  'san-clemente': 'coastal-active',

  // --- tech-university (3 cities) ---
  // Tech corridors, university communities, high screen time demographics
  'irvine': 'tech-university',
  'costa-mesa': 'tech-university',
  'fullerton': 'tech-university',

  // --- family-suburban (5 cities) ---
  // Family-oriented planned communities, excellent schools, pediatric focus
  'mission-viejo': 'family-suburban',
  'lake-forest': 'family-suburban',
  'aliso-viejo': 'family-suburban',
  'rancho-santa-margarita': 'family-suburban',
  'laguna-niguel': 'family-suburban',

  // --- affluent-residential (3 cities) ---
  // High-income residential enclaves, premium service expectations
  'villa-park': 'affluent-residential',
  'yorba-linda': 'affluent-residential',
  'brea': 'affluent-residential',

  // --- urban-diverse (6 cities) ---
  // Diverse urban centers, multilingual populations, insurance accessibility
  'santa-ana': 'urban-diverse',
  'anaheim': 'urban-diverse',
  'garden-grove': 'urban-diverse',
  'westminster': 'urban-diverse',
  'buena-park': 'urban-diverse',
  'fountain-valley': 'urban-diverse',

  // --- suburban-commuter (8 cities) ---
  // Bedroom communities, freeway commuters, convenience-driven
  'tustin': 'suburban-commuter',
  'orange': 'suburban-commuter',
  'placentia': 'suburban-commuter',
  'cypress': 'suburban-commuter',
  'los-alamitos': 'suburban-commuter',
  'chino': 'suburban-commuter',
  'chino-hills': 'suburban-commuter',
  'corona': 'suburban-commuter',

  // --- inland-growing (9 cities) ---
  // Inland Empire growth corridors, younger demographics, distance patients
  'riverside': 'inland-growing',
  'moreno-valley': 'inland-growing',
  'san-bernardino': 'inland-growing',
  'ontario': 'inland-growing',
  'rancho-cucamonga': 'inland-growing',
  'fontana': 'inland-growing',
  'torrance': 'inland-growing',
  'downey': 'inland-growing',
  'whittier': 'inland-growing',

  // --- north-county-sd (7 cities) ---
  // San Diego North County, significant travel, worth-the-drive patients
  'oceanside': 'north-county-sd',
  'carlsbad': 'north-county-sd',
  'encinitas': 'north-county-sd',
  'san-diego': 'north-county-sd',
  'vista': 'north-county-sd',
  'san-marcos': 'north-county-sd',
  'escondido': 'north-county-sd',

  // --- la-gateway (5 cities) ---
  // LA County border cities, freeway hub access, metro commuters
  'long-beach': 'la-gateway',
  'pasadena': 'la-gateway',
  'cerritos': 'la-gateway',
  'lakewood': 'la-gateway',
  'los-angeles': 'la-gateway',
};

/**
 * Metadata for each city type describing characteristics and keratoconus relevance.
 * Used for content generation guidance and editorial reference.
 */
export const cityTypeMetadata: Record<CityType, CityTypeMetadata> = {
  'coastal-affluent': {
    label: 'Coastal Affluent',
    characteristics: [
      'High median household income ($120K+)',
      'Outdoor ocean lifestyle year-round',
      'Strong UV exposure from water reflection',
      'Premium healthcare expectations',
    ],
    keratoconusRelevance:
      'Intense UV and glare demand high-performance scleral lenses with UV blocking. Patients expect premium materials, unhurried appointments, and concierge communication.',
  },
  'coastal-active': {
    label: 'Coastal Active',
    characteristics: [
      'Surf culture and beach sports lifestyle',
      'High outdoor activity rates',
      'Wind and sand exposure',
      'Active young adult demographics',
    ],
    keratoconusRelevance:
      'Sports vision demands require stable scleral lens fits that perform in wind, water, and high-movement activities. Eye rubbing from allergies and sand exposure is a key risk factor discussion point.',
  },
  'tech-university': {
    label: 'Tech & University',
    characteristics: [
      'Major tech employers (UCI, Broadcom, Blizzard)',
      'University student populations',
      'Extended screen time (8-14 hrs/day)',
      'Young professional demographics',
    ],
    keratoconusRelevance:
      'High screen time exacerbates keratoconus symptoms (glare, halos). University-age is peak progression period. Scleral lenses optimized for digital comfort are a key differentiator.',
  },
  'family-suburban': {
    label: 'Family Suburban',
    characteristics: [
      'Top-rated school districts',
      'High youth sports participation',
      'Family-oriented planned communities',
      'Median age skews younger (families with children)',
    ],
    keratoconusRelevance:
      'Keratoconus typically onset is ages 10-25. Parents need education on progression risk, eye rubbing cessation, and cross-linking timing. Pediatric scleral lens fitting expertise matters.',
  },
  'affluent-residential': {
    label: 'Affluent Residential',
    characteristics: [
      'High-income residential enclaves',
      'Expectation of premium healthcare',
      'Low population density, quiet neighborhoods',
      'Well-educated patient population',
    ],
    keratoconusRelevance:
      'Patients research extensively before choosing a specialist. They value credentials, technology investment, and personalized care plans. Premium scleral lens materials and custom designs resonate.',
  },
  'urban-diverse': {
    label: 'Urban Diverse',
    characteristics: [
      'Ethnically diverse populations',
      'Spanish and Vietnamese speaking communities',
      'Insurance accessibility is primary concern',
      'Higher population density',
    ],
    keratoconusRelevance:
      'Keratoconus prevalence is higher in certain ethnic groups (Hispanic, Middle Eastern, South Asian). Insurance navigation and payment plans are critical. Bilingual care builds trust.',
  },
  'suburban-commuter': {
    label: 'Suburban Commuter',
    characteristics: [
      'Freeway-dependent commuters',
      'Driving vision is critical daily need',
      'Value convenience and efficiency',
      'Middle-income working professionals',
    ],
    keratoconusRelevance:
      'Night driving with keratoconus is dangerous (halos, glare, ghosting). Scleral lenses restore safe driving vision. Appointment efficiency matters for busy commuters.',
  },
  'inland-growing': {
    label: 'Inland Growing',
    characteristics: [
      'Rapidly growing communities',
      'Younger median age',
      'Limited local specialty care options',
      'Longer commute distance to office',
    ],
    keratoconusRelevance:
      'Inland Empire has few keratoconus specialists. Worth-the-drive messaging is key. Patients often diagnosed late due to limited local access. Consolidating visits (exam + fitting same day) adds value.',
  },
  'north-county-sd': {
    label: 'North County San Diego',
    characteristics: [
      'San Diego County residents',
      '60-90 mile travel distance',
      'Coastal and inland mix',
      'Limited local keratoconus specialists',
    ],
    keratoconusRelevance:
      'SD patients travel specifically for Dr. Bonakdar\'s expertise. Building trust before visit is essential. Telehealth pre-consultations and efficient multi-step visit planning reduce total trips.',
  },
  'la-gateway': {
    label: 'LA Gateway',
    characteristics: [
      'LA County border cities',
      'Major freeway hub access (I-5, I-405, I-710)',
      'Large metro population catchment',
      'Diverse professional demographics',
    ],
    keratoconusRelevance:
      'LA patients have many ophthalmology options but few true scleral lens specialists. Differentiation through 500+ keratoconus cases and 35+ years experience. Freeway proximity makes Santa Ana accessible.',
  },
};

/**
 * Get the city type for a given city slug.
 * Returns 'suburban-commuter' as a safe default for any unmapped city,
 * since it provides the most broadly applicable content.
 */
export function getCityType(slug: string): CityType {
  return cityTypeMap[slug] || 'suburban-commuter';
}

/**
 * Get metadata for a city type.
 */
export function getCityTypeInfo(type: CityType): CityTypeMetadata {
  return cityTypeMetadata[type];
}
