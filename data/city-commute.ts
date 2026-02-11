/**
 * FILE: data/city-commute.ts
 * PURPOSE: Commute data and driving directions for keratocones.com city pages
 * AUTHOR: Claude Code
 * CREATED: 2026-02-10
 *
 * CONTEXT: Each city page needs specific driving/commute information to:
 * 1. Differentiate pages (anti-doorway SEO)
 * 2. Reduce friction for patients considering travel to our office
 * 3. Provide local SEO value (freeway names, landmarks, neighborhoods)
 *
 * OFFICE LOCATION: 801 N Tustin Ave #401, Santa Ana, CA 92705
 * COORDINATES: 33.7599, -117.8359
 *
 * Distance is calculated using the Haversine formula (straight-line),
 * then adjusted with a 1.3x road factor for Southern California freeway routing.
 * Driving times are estimated at 35 mph average (accounting for SoCal traffic).
 */

import { soCalCities } from './cities';

export interface CommuteData {
  distanceMiles: number;        // Approximate driving distance in miles
  driveTimeMinutes: number;     // Estimated drive time in minutes (average traffic)
  primaryFreeway: string;       // Main freeway route
  directions: string;           // Narrative driving directions (2-3 sentences)
  landmarks: string;            // Nearby landmarks for wayfinding
  parking: string;              // Parking information
}

// Office coordinates
const OFFICE_LAT = 33.7599;
const OFFICE_LNG = -117.8359;

/**
 * Haversine formula: calculates straight-line distance in miles between two coordinates.
 */
function haversineDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 3958.8; // Earth's radius in miles
  const dLat = toRadians(lat2 - lat1);
  const dLng = toRadians(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

/**
 * Convert straight-line distance to estimated driving distance.
 * SoCal road factor: 1.3x for urban grid + freeway routing.
 */
function estimateDrivingDistance(straightLine: number): number {
  return Math.round(straightLine * 1.3 * 10) / 10;
}

/**
 * Estimate driving time at average SoCal freeway speed (35 mph accounting for traffic).
 */
function estimateDriveTime(drivingDistance: number): number {
  return Math.round((drivingDistance / 35) * 60);
}

/**
 * City-specific freeway routes and directions.
 * Implemented for initial set of cities; remaining cities use auto-generated fallback.
 */
const cityCommuteDetails: Record<string, Omit<CommuteData, 'distanceMiles' | 'driveTimeMinutes'>> = {
  // --- Orange County Core ---
  'irvine': {
    primaryFreeway: 'I-5 North or SR-55 North',
    directions: 'Take I-5 North to SR-55 North. Exit at 1st Street and turn right. Turn left on Tustin Ave. The office is on the right at 801 N Tustin Ave, Suite 401, just past the 17th Street intersection.',
    landmarks: 'Near Tustin Marketplace and the intersection of SR-55 and I-5',
    parking: 'Free parking available in the building lot directly adjacent to 801 N Tustin Ave.',
  },
  'newport-beach': {
    primaryFreeway: 'SR-55 North',
    directions: 'Take SR-55 North from Newport Beach. Exit at 1st Street and turn right. Turn left on Tustin Ave. The office is at 801 N Tustin Ave, Suite 401.',
    landmarks: 'Approximately 20 minutes from Fashion Island, near Tustin Marketplace',
    parking: 'Free parking available in the building lot directly adjacent to the office.',
  },
  'santa-ana': {
    primaryFreeway: 'Tustin Ave (local)',
    directions: 'Our office is centrally located in Santa Ana at 801 N Tustin Ave, Suite 401. From Downtown Santa Ana, take Tustin Ave north past 17th Street. The building is on the right.',
    landmarks: 'At the intersection of Tustin Ave and Memory Lane, near Tustin Marketplace',
    parking: 'Free parking available in the building lot. The entrance is off Tustin Ave.',
  },
  'anaheim': {
    primaryFreeway: 'SR-55 South or I-5 South',
    directions: 'Take SR-55 South from Anaheim. Exit at 1st Street, turn left. Turn left on Tustin Ave. The office is at 801 N Tustin Ave, Suite 401. Alternatively, take I-5 South to SR-55 South.',
    landmarks: 'About 15 minutes south of Disneyland Resort, near the SR-55/I-5 interchange',
    parking: 'Free parking available in the building lot directly adjacent to the office.',
  },
  'costa-mesa': {
    primaryFreeway: 'SR-55 North',
    directions: 'Take SR-55 North from Costa Mesa. Exit at 1st Street and turn right. Turn left on Tustin Ave. The office is at 801 N Tustin Ave, Suite 401.',
    landmarks: 'About 15 minutes from South Coast Plaza, near Tustin Marketplace',
    parking: 'Free parking available in the building lot directly adjacent to the office.',
  },
  'huntington-beach': {
    primaryFreeway: 'SR-55 North',
    directions: 'Take Beach Blvd or Brookhurst to SR-55 North. Exit at 1st Street and turn right. Turn left on Tustin Ave to reach 801 N Tustin Ave, Suite 401.',
    landmarks: 'Approximately 25 minutes from downtown Huntington Beach Pier area',
    parking: 'Free parking available in the building lot.',
  },
  'tustin': {
    primaryFreeway: 'Tustin Ave (local) or SR-55',
    directions: 'Our office is in the Tustin area of Santa Ana. From Old Town Tustin, head south on Tustin Ave. The office is at 801 N Tustin Ave, Suite 401, just south of the Tustin city limit.',
    landmarks: 'Near Tustin Marketplace and Tustin Legacy development',
    parking: 'Free parking available in the building lot directly adjacent to the office.',
  },
  'orange': {
    primaryFreeway: 'SR-55 South or Tustin Ave South',
    directions: 'From the City of Orange, take SR-55 South to the 1st Street exit. Turn left on 1st Street, then left on Tustin Ave. Or take Tustin Ave directly south. The office is at 801 N Tustin Ave, Suite 401.',
    landmarks: 'About 10 minutes from Old Towne Orange, near Tustin Marketplace',
    parking: 'Free parking available in the building lot.',
  },
  'laguna-beach': {
    primaryFreeway: 'SR-133 North to SR-55 North',
    directions: 'Take SR-133 (Laguna Canyon Road) north to I-405 or SR-55. Take SR-55 North to the 1st Street exit. Turn right, then left on Tustin Ave to 801 N Tustin Ave, Suite 401.',
    landmarks: 'Approximately 30 minutes from Laguna Village area',
    parking: 'Free parking available in the building lot.',
  },
  'mission-viejo': {
    primaryFreeway: 'I-5 North to SR-55 North',
    directions: 'Take I-5 North from Mission Viejo. Merge onto SR-55 North. Exit at 1st Street and turn right. Turn left on Tustin Ave. The office is at 801 N Tustin Ave, Suite 401.',
    landmarks: 'About 25 minutes from Lake Mission Viejo area',
    parking: 'Free parking available in the building lot.',
  },
  'long-beach': {
    primaryFreeway: 'I-405 South to SR-55 South',
    directions: 'Take I-405 South from Long Beach. Exit onto SR-55 South toward Newport Beach. Exit at 1st Street and turn left. Turn left on Tustin Ave. The office is at 801 N Tustin Ave, Suite 401.',
    landmarks: 'Approximately 30-40 minutes from downtown Long Beach, depending on traffic',
    parking: 'Free parking available in the building lot.',
  },
  'pasadena': {
    primaryFreeway: 'SR-210 to SR-57 South to SR-55 South',
    directions: 'Take SR-210 West to SR-57 South. Merge onto SR-55 South. Exit at 1st Street, turn left, then left on Tustin Ave to 801 N Tustin Ave, Suite 401. Allow extra time during rush hour.',
    landmarks: 'Approximately 50-60 minutes from Old Town Pasadena',
    parking: 'Free parking available in the building lot.',
  },
  'riverside': {
    primaryFreeway: 'SR-91 West to SR-55 South',
    directions: 'Take SR-91 West from Riverside. Exit onto SR-55 South. Exit at 1st Street, turn left, then left on Tustin Ave. The office is at 801 N Tustin Ave, Suite 401.',
    landmarks: 'Approximately 45-55 minutes from downtown Riverside',
    parking: 'Free parking available in the building lot.',
  },
  'san-diego': {
    primaryFreeway: 'I-5 North',
    directions: 'Take I-5 North from San Diego. Exit at SR-55 North (Costa Mesa Freeway). Exit at 1st Street and turn right. Turn left on Tustin Ave. The office is at 801 N Tustin Ave, Suite 401.',
    landmarks: 'Approximately 80-90 minutes from downtown San Diego',
    parking: 'Free parking available in the building lot.',
  },
  'corona': {
    primaryFreeway: 'SR-91 West to SR-55 South',
    directions: 'Take SR-91 West from Corona. Exit onto SR-55 South toward Newport Beach. Exit at 1st Street, turn left, then left on Tustin Ave to 801 N Tustin Ave, Suite 401.',
    landmarks: 'Approximately 35-45 minutes from central Corona',
    parking: 'Free parking available in the building lot.',
  },
};

/**
 * Generate a generic commute description for cities without specific routing.
 */
function generateGenericCommute(cityName: string, county: string): Omit<CommuteData, 'distanceMiles' | 'driveTimeMinutes'> {
  const freewayByCounty: Record<string, string> = {
    'Orange County': 'SR-55 or I-5',
    'Los Angeles County': 'I-5 South or I-405 South to SR-55',
    'Riverside County': 'SR-91 West to SR-55 South',
    'San Bernardino County': 'SR-57 South to SR-55 South',
    'San Diego County': 'I-5 North',
  };

  return {
    primaryFreeway: freewayByCounty[county] || 'I-5 or SR-55',
    directions: `From ${cityName}, take ${freewayByCounty[county] || 'the nearest freeway toward Santa Ana'}. Our office is at 801 N Tustin Ave, Suite 401, Santa Ana, CA 92705, easily accessible from the SR-55 (1st Street exit) or I-5.`,
    landmarks: `Our office is located near Tustin Marketplace in Santa Ana, accessible from ${cityName} via major freeways`,
    parking: 'Free parking available in the building lot directly adjacent to 801 N Tustin Ave.',
  };
}

/**
 * Get complete commute data for a city.
 * Uses city-specific routing when available, otherwise generates from coordinates.
 */
export function getCommuteData(citySlug: string): CommuteData | null {
  const city = soCalCities.find(c => c.slug === citySlug);
  if (!city) return null;

  const straightLine = haversineDistance(
    city.coordinates.lat,
    city.coordinates.lng,
    OFFICE_LAT,
    OFFICE_LNG
  );
  const drivingDistance = estimateDrivingDistance(straightLine);
  const driveTime = estimateDriveTime(drivingDistance);

  const specificDetails = cityCommuteDetails[citySlug];
  const details = specificDetails || generateGenericCommute(city.name, city.county);

  return {
    distanceMiles: drivingDistance,
    driveTimeMinutes: driveTime,
    ...details,
  };
}

/**
 * Get a formatted commute summary string for display.
 */
export function getCommuteSummary(citySlug: string, cityName: string): string {
  const data = getCommuteData(citySlug);
  if (!data) return `Our office is conveniently located in Santa Ana, easily accessible from ${cityName}.`;

  return `${cityName} is approximately ${data.distanceMiles} miles from our office—about a ${data.driveTimeMinutes}-minute drive via ${data.primaryFreeway}. ${data.parking}`;
}

/**
 * Get Google Maps directions URL for a specific city.
 */
export function getDirectionsUrl(citySlug: string): string {
  const city = soCalCities.find(c => c.slug === citySlug);
  if (!city) return 'https://www.google.com/maps/dir/?api=1&destination=801+N+Tustin+Ave+%23401,+Santa+Ana,+CA+92705';

  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(city.name + ', CA')}&destination=801+N+Tustin+Ave+%23401,+Santa+Ana,+CA+92705`;
}
