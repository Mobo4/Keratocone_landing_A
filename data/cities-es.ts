
export interface CityDataEs {
    slug: string;
    name: string;
    county: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    neighborhoods?: string[];
}

export const soCalCitiesEs: CityDataEs[] = [
    // Orange County (Core) - CON VECINDARIOS
    { slug: 'irvine', name: 'Irvine', county: 'Condado de Orange', coordinates: { lat: 33.6846, lng: -117.8265 }, neighborhoods: ['Woodbridge', 'Northwood', 'University Park'] },
    { slug: 'newport-beach', name: 'Newport Beach', county: 'Condado de Orange', coordinates: { lat: 33.6189, lng: -117.9289 }, neighborhoods: ['Corona del Mar', 'Balboa Island', 'Lido Isle'] },
    { slug: 'santa-ana', name: 'Santa Ana', county: 'Condado de Orange', coordinates: { lat: 33.7455, lng: -117.8677 }, neighborhoods: ['Centro', 'Floral Park', 'French Park'] },
    { slug: 'anaheim', name: 'Anaheim', county: 'Condado de Orange', coordinates: { lat: 33.8366, lng: -117.9143 }, neighborhoods: ['Anaheim Hills', 'Centro de Anaheim', 'Platinum Triangle'] },
    { slug: 'costa-mesa', name: 'Costa Mesa', county: 'Condado de Orange', coordinates: { lat: 33.6411, lng: -117.9187 }, neighborhoods: ['Eastside', 'Westside', 'South Coast Metro'] },
    { slug: 'huntington-beach', name: 'Huntington Beach', county: 'Condado de Orange', coordinates: { lat: 33.6595, lng: -117.9988 }, neighborhoods: ['Centro', 'Huntington Harbour', 'Sunset Beach'] },
    { slug: 'laguna-beach', name: 'Laguna Beach', county: 'Condado de Orange', coordinates: { lat: 33.5427, lng: -117.7854 }, neighborhoods: ['Village', 'Top of the World', 'South Laguna'] },
    { slug: 'mission-viejo', name: 'Mission Viejo', county: 'Condado de Orange', coordinates: { lat: 33.6000, lng: -117.6719 }, neighborhoods: ['Lake Mission Viejo', 'Oso Creek', 'Casta del Sol'] },
    { slug: 'lake-forest', name: 'Lake Forest', county: 'Condado de Orange', coordinates: { lat: 33.6471, lng: -117.6892 }, neighborhoods: ['Foothill Ranch', 'Portola Hills', 'Baker Ranch'] },
    { slug: 'tustin', name: 'Tustin', county: 'Condado de Orange', coordinates: { lat: 33.7458, lng: -117.8262 }, neighborhoods: ['Old Town', 'Tustin Ranch', 'Tustin Legacy'] },
    { slug: 'orange', name: 'Orange', county: 'Condado de Orange', coordinates: { lat: 33.7879, lng: -117.8531 }, neighborhoods: ['Old Towne', 'Orange Park Acres', 'East Orange'] },
    { slug: 'villa-park', name: 'Villa Park', county: 'Condado de Orange', coordinates: { lat: 33.8144, lng: -117.8131 } },
    { slug: 'placentia', name: 'Placentia', county: 'Condado de Orange', coordinates: { lat: 33.8710, lng: -117.8628 } },
    { slug: 'brea', name: 'Brea', county: 'Condado de Orange', coordinates: { lat: 33.9166, lng: -117.9000 } },
    { slug: 'fullerton', name: 'Fullerton', county: 'Condado de Orange', coordinates: { lat: 33.8704, lng: -117.9242 }, neighborhoods: ['Centro', 'Sunny Hills', 'Amerige Heights'] },
    { slug: 'cypress', name: 'Cypress', county: 'Condado de Orange', coordinates: { lat: 33.8169, lng: -118.0374 } },
    { slug: 'los-alamitos', name: 'Los Alamitos', county: 'Condado de Orange', coordinates: { lat: 33.8031, lng: -118.0728 } },
    { slug: 'garden-grove', name: 'Garden Grove', county: 'Condado de Orange', coordinates: { lat: 33.7743, lng: -117.9379 } },
    { slug: 'buena-park', name: 'Buena Park', county: 'Condado de Orange', coordinates: { lat: 33.8674, lng: -117.9981 } },
    { slug: 'westminster', name: 'Westminster', county: 'Condado de Orange', coordinates: { lat: 33.7513, lng: -117.9939 } },
    { slug: 'fountain-valley', name: 'Fountain Valley', county: 'Condado de Orange', coordinates: { lat: 33.7090, lng: -117.9544 } },
    { slug: 'yorba-linda', name: 'Yorba Linda', county: 'Condado de Orange', coordinates: { lat: 33.8885, lng: -117.8133 } },
    { slug: 'san-clemente', name: 'San Clemente', county: 'Condado de Orange', coordinates: { lat: 33.4274, lng: -117.6120 }, neighborhoods: ['North Beach', 'Pier Bowl', 'Talega'] },
    { slug: 'dana-point', name: 'Dana Point', county: 'Condado de Orange', coordinates: { lat: 33.4665, lng: -117.6981 } },
    { slug: 'laguna-niguel', name: 'Laguna Niguel', county: 'Condado de Orange', coordinates: { lat: 33.5225, lng: -117.7076 } },
    { slug: 'aliso-viejo', name: 'Aliso Viejo', county: 'Condado de Orange', coordinates: { lat: 33.5750, lng: -117.7256 } },
    { slug: 'rancho-santa-margarita', name: 'Rancho Santa Margarita', county: 'Condado de Orange', coordinates: { lat: 33.6409, lng: -117.6028 } },

    // Los Angeles County (Sur/Este)
    { slug: 'long-beach', name: 'Long Beach', county: 'Condado de Los Ángeles', coordinates: { lat: 33.7701, lng: -118.1937 } },
    { slug: 'torrance', name: 'Torrance', county: 'Condado de Los Ángeles', coordinates: { lat: 33.8358, lng: -118.3406 } },
    { slug: 'pasadena', name: 'Pasadena', county: 'Condado de Los Ángeles', coordinates: { lat: 34.1478, lng: -118.1445 } },
    { slug: 'downey', name: 'Downey', county: 'Condado de Los Ángeles', coordinates: { lat: 33.9401, lng: -118.1332 } },
    { slug: 'whittier', name: 'Whittier', county: 'Condado de Los Ángeles', coordinates: { lat: 33.9744, lng: -118.0308 } },
    { slug: 'cerritos', name: 'Cerritos', county: 'Condado de Los Ángeles', coordinates: { lat: 33.8658, lng: -118.0829 } },
    { slug: 'lakewood', name: 'Lakewood', county: 'Condado de Los Ángeles', coordinates: { lat: 33.8536, lng: -118.1340 } },
    { slug: 'los-angeles', name: 'Los Ángeles', county: 'Condado de Los Ángeles', coordinates: { lat: 34.0522, lng: -118.2437 } },

    // Inland Empire (Riverside / San Bernardino)
    { slug: 'riverside', name: 'Riverside', county: 'Condado de Riverside', coordinates: { lat: 33.9806, lng: -117.3755 } },
    { slug: 'corona', name: 'Corona', county: 'Condado de Riverside', coordinates: { lat: 33.8753, lng: -117.5664 } },
    { slug: 'moreno-valley', name: 'Moreno Valley', county: 'Condado de Riverside', coordinates: { lat: 33.9425, lng: -117.2297 } },
    { slug: 'san-bernardino', name: 'San Bernardino', county: 'Condado de San Bernardino', coordinates: { lat: 34.1083, lng: -117.2898 } },
    { slug: 'ontario', name: 'Ontario', county: 'Condado de San Bernardino', coordinates: { lat: 34.0633, lng: -117.6509 } },
    { slug: 'rancho-cucamonga', name: 'Rancho Cucamonga', county: 'Condado de San Bernardino', coordinates: { lat: 34.1064, lng: -117.5931 } },
    { slug: 'fontana', name: 'Fontana', county: 'Condado de San Bernardino', coordinates: { lat: 34.0922, lng: -117.4350 } },
    { slug: 'chino', name: 'Chino', county: 'Condado de San Bernardino', coordinates: { lat: 34.0122, lng: -117.6889 } },
    { slug: 'chino-hills', name: 'Chino Hills', county: 'Condado de San Bernardino', coordinates: { lat: 33.9898, lng: -117.7326 } },

    // San Diego County (Norte)
    { slug: 'oceanside', name: 'Oceanside', county: 'Condado de San Diego', coordinates: { lat: 33.1959, lng: -117.3795 } },
    { slug: 'carlsbad', name: 'Carlsbad', county: 'Condado de San Diego', coordinates: { lat: 33.1581, lng: -117.3506 } },
    { slug: 'encinitas', name: 'Encinitas', county: 'Condado de San Diego', coordinates: { lat: 33.0370, lng: -117.2920 } },
    { slug: 'san-diego', name: 'San Diego', county: 'Condado de San Diego', coordinates: { lat: 32.7157, lng: -117.1611 } },
    { slug: 'vista', name: 'Vista', county: 'Condado de San Diego', coordinates: { lat: 33.2000, lng: -117.2425 } },
    { slug: 'san-marcos', name: 'San Marcos', county: 'Condado de San Diego', coordinates: { lat: 33.1434, lng: -117.1661 } },
    { slug: 'escondido', name: 'Escondido', county: 'Condado de San Diego', coordinates: { lat: 33.1192, lng: -117.0864 } },
];
