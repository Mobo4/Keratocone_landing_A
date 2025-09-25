// Geographic Access Control Service for Southern California
import AnalyticsService from './analyticsService';

interface GeoLocation {
  country: string;
  region: string;
  city: string;
  latitude: number;
  longitude: number;
  timezone: string;
  ip: string;
}

// Southern California boundaries (approximate)
const SOCAL_BOUNDS = {
  north: 35.8, // North of Bakersfield
  south: 32.5, // Mexican border
  east: -114.1, // Arizona border
  west: -121.0 // Pacific Ocean
};

// List of Southern California counties
const SOCAL_COUNTIES = [
  'Los Angeles',
  'Orange', 
  'San Diego',
  'San Bernardino',
  'Riverside',
  'Ventura',
  'Santa Barbara',
  'Imperial',
  'Kern' // Southern part
];

// Major SoCal cities for additional validation
const SOCAL_CITIES = [
  'Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno',
  'Long Beach', 'Anaheim', 'Santa Ana', 'Riverside', 'Irvine',
  'San Bernardino', 'Fontana', 'Oxnard', 'Moreno Valley', 'Glendale',
  'Huntington Beach', 'Ontario', 'Rancho Cucamonga', 'Oceanside',
  'Garden Grove', 'Palmdale', 'Corona', 'Torrance', 'Pomona',
  'Escondido', 'Sunnyvale', 'Pasadena', 'Fullerton', 'Orange',
  'Thousand Oaks', 'Simi Valley', 'Victorville', 'Ventura', 'Santa Barbara',
  'Newport Beach', 'Costa Mesa', 'Tustin', 'Laguna Beach', 'Mission Viejo'
];

class GeoAccessService {
  private static instance: GeoAccessService;
  private cachedLocation: GeoLocation | null = null;
  private locationPromise: Promise<GeoLocation> | null = null;

  private constructor() {}

  static getInstance(): GeoAccessService {
    if (!GeoAccessService.instance) {
      GeoAccessService.instance = new GeoAccessService();
    }
    return GeoAccessService.instance;
  }

  async getLocation(): Promise<GeoLocation> {
    // Return cached location if available
    if (this.cachedLocation) {
      return this.cachedLocation;
    }

    // Return existing promise if location fetch is in progress
    if (this.locationPromise) {
      return this.locationPromise;
    }

    // Fetch new location
    this.locationPromise = this.fetchLocation();
    
    try {
      this.cachedLocation = await this.locationPromise;
      return this.cachedLocation;
    } finally {
      this.locationPromise = null;
    }
  }

  private async fetchLocation(): Promise<GeoLocation> {
    try {
      // Using ipapi.co for geolocation (free tier available)
      const response = await fetch('https://ipapi.co/json/', {
        headers: {
          'Accept': 'application/json',
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch location');
      }

      const data = await response.json();

      return {
        country: data.country_name || 'Unknown',
        region: data.region || 'Unknown',
        city: data.city || 'Unknown',
        latitude: data.latitude || 0,
        longitude: data.longitude || 0,
        timezone: data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
        ip: data.ip || 'Unknown'
      };
    } catch (error) {
      console.error('Error fetching location:', error);
      
      // Return default location on error
      return {
        country: 'Unknown',
        region: 'Unknown',
        city: 'Unknown',
        latitude: 0,
        longitude: 0,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        ip: 'Unknown'
      };
    }
  }

  async isInServiceArea(): Promise<boolean> {
    const location = await this.getLocation();

    // Track the access attempt
    const analytics = AnalyticsService.getInstance();
    analytics.trackEvent('geo_access_check', {
      country: location.country,
      region: location.region,
      city: location.city,
      latitude: location.latitude,
      longitude: location.longitude
    });

    // Check if in USA
    if (location.country !== 'United States') {
      analytics.trackEvent('geo_access_denied', {
        reason: 'non_usa',
        country: location.country
      });
      return false;
    }

    // Check if in California
    if (location.region !== 'California') {
      analytics.trackEvent('geo_access_denied', {
        reason: 'non_california',
        state: location.region
      });
      return false;
    }

    // Check if in Southern California by coordinates
    const inSoCalBounds = 
      location.latitude <= SOCAL_BOUNDS.north &&
      location.latitude >= SOCAL_BOUNDS.south &&
      location.longitude >= SOCAL_BOUNDS.west &&
      location.longitude <= SOCAL_BOUNDS.east;

    if (!inSoCalBounds) {
      analytics.trackEvent('geo_access_denied', {
        reason: 'outside_socal_bounds',
        city: location.city,
        coordinates: `${location.latitude},${location.longitude}`
      });
      return false;
    }

    // Additional validation by city name
    const cityInSoCal = SOCAL_CITIES.some(city => 
      location.city.toLowerCase().includes(city.toLowerCase())
    );

    if (cityInSoCal) {
      analytics.trackEvent('geo_access_granted', {
        city: location.city,
        coordinates: `${location.latitude},${location.longitude}`
      });
      return true;
    }

    // If city not in list but within bounds, still allow
    analytics.trackEvent('geo_access_granted', {
      city: location.city,
      coordinates: `${location.latitude},${location.longitude}`,
      note: 'within_bounds_unknown_city'
    });
    
    return true;
  }

  async checkAccess(): Promise<{
    allowed: boolean;
    location: GeoLocation;
    reason?: string;
  }> {
    const location = await this.getLocation();
    const allowed = await this.isInServiceArea();

    let reason: string | undefined;
    
    if (!allowed) {
      if (location.country !== 'United States') {
        reason = 'outside_usa';
      } else if (location.region !== 'California') {
        reason = 'outside_california';
      } else {
        reason = 'outside_service_area';
      }
    }

    return {
      allowed,
      location,
      reason
    };
  }

  // Override for development/testing
  async setTestLocation(location: Partial<GeoLocation>): Promise<void> {
    this.cachedLocation = {
      country: location.country || 'United States',
      region: location.region || 'California',
      city: location.city || 'Santa Ana',
      latitude: location.latitude || 33.7455,
      longitude: location.longitude || -117.8677,
      timezone: location.timezone || 'America/Los_Angeles',
      ip: location.ip || 'test'
    };
  }

  clearCache(): void {
    this.cachedLocation = null;
  }
}

export default GeoAccessService;