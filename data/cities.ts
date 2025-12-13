
export interface CityData {
    slug: string;
    name: string;
    county: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    neighborhoods?: string[]; // Optional array of major neighborhoods
}

export const soCalCities: CityData[] = [
    // Orange County (Core) - WITH NEIGHBORHOODS
    { slug: 'irvine', name: 'Irvine', county: 'Orange County', coordinates: { lat: 33.6846, lng: -117.8265 }, neighborhoods: ['Woodbridge', 'Northwood', 'University Park'] },
    { slug: 'newport-beach', name: 'Newport Beach', county: 'Orange County', coordinates: { lat: 33.6189, lng: -117.9289 }, neighborhoods: ['Corona del Mar', 'Balboa Island', 'Lido Isle'] },
    { slug: 'santa-ana', name: 'Santa Ana', county: 'Orange County', coordinates: { lat: 33.7455, lng: -117.8677 }, neighborhoods: ['Downtown', 'Floral Park', 'French Park'] },
    { slug: 'anaheim', name: 'Anaheim', county: 'Orange County', coordinates: { lat: 33.8366, lng: -117.9143 }, neighborhoods: ['Anaheim Hills', 'Downtown Anaheim', 'Platinum Triangle'] },
    { slug: 'costa-mesa', name: 'Costa Mesa', county: 'Orange County', coordinates: { lat: 33.6411, lng: -117.9187 }, neighborhoods: ['Eastside', 'Westside', 'South Coast Metro'] },
    { slug: 'huntington-beach', name: 'Huntington Beach', county: 'Orange County', coordinates: { lat: 33.6595, lng: -117.9988 }, neighborhoods: ['Downtown', 'Huntington Harbour', 'Sunset Beach'] },
    { slug: 'laguna-beach', name: 'Laguna Beach', county: 'Orange County', coordinates: { lat: 33.5427, lng: -117.7854 }, neighborhoods: ['Village', 'Top of the World', 'South Laguna'] },
    { slug: 'mission-viejo', name: 'Mission Viejo', county: 'Orange County', coordinates: { lat: 33.6000, lng: -117.6719 }, neighborhoods: ['Lake Mission Viejo', 'Oso Creek', 'Casta del Sol'] },
    { slug: 'lake-forest', name: 'Lake Forest', county: 'Orange County', coordinates: { lat: 33.6471, lng: -117.6892 }, neighborhoods: ['Foothill Ranch', 'Portola Hills', 'Baker Ranch'] },
    { slug: 'tustin', name: 'Tustin', county: 'Orange County', coordinates: { lat: 33.7458, lng: -117.8262 }, neighborhoods: ['Old Town', 'Tustin Ranch', 'Tustin Legacy'] },
    { slug: 'orange', name: 'Orange', county: 'Orange County', coordinates: { lat: 33.7879, lng: -117.8531 }, neighborhoods: ['Old Towne', 'Orange Park Acres', 'East Orange'] },
    { slug: 'villa-park', name: 'Villa Park', county: 'Orange County', coordinates: { lat: 33.8144, lng: -117.8131 } },
    { slug: 'placentia', name: 'Placentia', county: 'Orange County', coordinates: { lat: 33.8710, lng: -117.8628 } },
    { slug: 'brea', name: 'Brea', county: 'Orange County', coordinates: { lat: 33.9166, lng: -117.9000 } },
    { slug: 'fullerton', name: 'Fullerton', county: 'Orange County', coordinates: { lat: 33.8704, lng: -117.9242 }, neighborhoods: ['Downtown', 'Sunny Hills', 'Amerige Heights'] },
    { slug: 'cypress', name: 'Cypress', county: 'Orange County', coordinates: { lat: 33.8169, lng: -118.0374 } },
    { slug: 'los-alamitos', name: 'Los Alamitos', county: 'Orange County', coordinates: { lat: 33.8031, lng: -118.0728 } },
    { slug: 'garden-grove', name: 'Garden Grove', county: 'Orange County', coordinates: { lat: 33.7743, lng: -117.9379 } },
    { slug: 'buena-park', name: 'Buena Park', county: 'Orange County', coordinates: { lat: 33.8674, lng: -117.9981 } },
    { slug: 'westminster', name: 'Westminster', county: 'Orange County', coordinates: { lat: 33.7513, lng: -117.9939 } },
    { slug: 'fountain-valley', name: 'Fountain Valley', county: 'Orange County', coordinates: { lat: 33.7090, lng: -117.9544 } },
    { slug: 'yorba-linda', name: 'Yorba Linda', county: 'Orange County', coordinates: { lat: 33.8885, lng: -117.8133 } },
    { slug: 'san-clemente', name: 'San Clemente', county: 'Orange County', coordinates: { lat: 33.4274, lng: -117.6120 }, neighborhoods: ['North Beach', 'Pier Bowl', 'Talega'] },
    { slug: 'dana-point', name: 'Dana Point', county: 'Orange County', coordinates: { lat: 33.4665, lng: -117.6981 } },
    { slug: 'laguna-niguel', name: 'Laguna Niguel', county: 'Orange County', coordinates: { lat: 33.5225, lng: -117.7076 } },
    { slug: 'aliso-viejo', name: 'Aliso Viejo', county: 'Orange County', coordinates: { lat: 33.5750, lng: -117.7256 } },
    { slug: 'rancho-santa-margarita', name: 'Rancho Santa Margarita', county: 'Orange County', coordinates: { lat: 33.6409, lng: -117.6028 } },

    // Los Angeles County (South/East)
    { slug: 'long-beach', name: 'Long Beach', county: 'Los Angeles County', coordinates: { lat: 33.7701, lng: -118.1937 } },
    { slug: 'torrance', name: 'Torrance', county: 'Los Angeles County', coordinates: { lat: 33.8358, lng: -118.3406 } },
    { slug: 'pasadena', name: 'Pasadena', county: 'Los Angeles County', coordinates: { lat: 34.1478, lng: -118.1445 } },
    { slug: 'downey', name: 'Downey', county: 'Los Angeles County', coordinates: { lat: 33.9401, lng: -118.1332 } },
    { slug: 'whittier', name: 'Whittier', county: 'Los Angeles County', coordinates: { lat: 33.9744, lng: -118.0308 } },
    { slug: 'cerritos', name: 'Cerritos', county: 'Los Angeles County', coordinates: { lat: 33.8658, lng: -118.0829 } },
    { slug: 'lakewood', name: 'Lakewood', county: 'Los Angeles County', coordinates: { lat: 33.8536, lng: -118.1340 } },
    { slug: 'los-angeles', name: 'Los Angeles', county: 'Los Angeles County', coordinates: { lat: 34.0522, lng: -118.2437 } },

    // Inland Empire (Riverside / San Bernardino)
    { slug: 'riverside', name: 'Riverside', county: 'Riverside County', coordinates: { lat: 33.9806, lng: -117.3755 } },
    { slug: 'corona', name: 'Corona', county: 'Riverside County', coordinates: { lat: 33.8753, lng: -117.5664 } },
    { slug: 'moreno-valley', name: 'Moreno Valley', county: 'Riverside County', coordinates: { lat: 33.9425, lng: -117.2297 } },
    { slug: 'san-bernardino', name: 'San Bernardino', county: 'San Bernardino County', coordinates: { lat: 34.1083, lng: -117.2898 } },
    { slug: 'ontario', name: 'Ontario', county: 'San Bernardino County', coordinates: { lat: 34.0633, lng: -117.6509 } },
    { slug: 'rancho-cucamonga', name: 'Rancho Cucamonga', county: 'San Bernardino County', coordinates: { lat: 34.1064, lng: -117.5931 } },
    { slug: 'fontana', name: 'Fontana', county: 'San Bernardino County', coordinates: { lat: 34.0922, lng: -117.4350 } },
    { slug: 'chino', name: 'Chino', county: 'San Bernardino County', coordinates: { lat: 34.0122, lng: -117.6889 } },
    { slug: 'chino-hills', name: 'Chino Hills', county: 'San Bernardino County', coordinates: { lat: 33.9898, lng: -117.7326 } },

    // San Diego County (North)
    { slug: 'oceanside', name: 'Oceanside', county: 'San Diego County', coordinates: { lat: 33.1959, lng: -117.3795 } },
    { slug: 'carlsbad', name: 'Carlsbad', county: 'San Diego County', coordinates: { lat: 33.1581, lng: -117.3506 } },
    { slug: 'encinitas', name: 'Encinitas', county: 'San Diego County', coordinates: { lat: 33.0370, lng: -117.2920 } },
    { slug: 'san-diego', name: 'San Diego', county: 'San Diego County', coordinates: { lat: 32.7157, lng: -117.1611 } },
    { slug: 'vista', name: 'Vista', county: 'San Diego County', coordinates: { lat: 33.2000, lng: -117.2425 } },
    { slug: 'san-marcos', name: 'San Marcos', county: 'San Diego County', coordinates: { lat: 33.1434, lng: -117.1661 } },
    { slug: 'escondido', name: 'Escondido', county: 'San Diego County', coordinates: { lat: 33.1192, lng: -117.0864 } },
];
