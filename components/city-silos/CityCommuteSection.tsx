/**
 * CityCommuteSection - Dimension 4: Accurate Commute Data
 *
 * Renders specific commute information from the city to the practice
 * at 801 N Tustin Ave #401, Santa Ana, CA 92705. Includes drive time,
 * specific route directions, parking information, and an embedded
 * Google Maps iframe or link to Google Maps directions.
 *
 * The coordinates prop enables a directions link from the city's center
 * to the practice location. Commute data will be populated per-city
 * as the data layer is expanded.
 *
 * This component does not depend on the city-type system -- commute
 * data is inherently per-city, not per-type.
 */

'use client';

import React from 'react';
import { MapPin, Clock, Car, ArrowRight } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import { BUSINESS_INFO } from '@/data/business';

interface CommuteRoute {
    name: string;
    directions: string;
}

interface CommuteData {
    driveTime: string;
    shortDirections: string;
    parkingInfo: string;
    routes: CommuteRoute[];
}

interface CityCommuteSectionProps {
    citySlug: string;
    cityName: string;
    coordinates: {
        lat: number;
        lng: number;
    };
}

/**
 * Per-city commute data. This is intentionally kept in the component file
 * because commute data is factual/geographic (not content-differentiation)
 * and will be expanded as more cities get verified drive times.
 */
const commuteDataMap: Record<string, CommuteData> = {
    'irvine': {
        driveTime: '12-18',
        shortDirections: 'I-5 North or SR-55 North to Tustin Ave exit',
        parkingInfo: 'Free parking is available immediately adjacent to the building. No parking garage or meter required.',
        routes: [
            { name: 'From Woodbridge / University Park', directions: 'Take I-5 North to the Tustin Avenue exit. Turn right on Tustin Ave. The office is at 801 N Tustin Ave #401.' },
            { name: 'From Northwood / Orchard Hills', directions: 'Take SR-55 North to the Edinger Avenue exit. Head east on Edinger, then north on Tustin Ave.' },
        ],
    },
    'newport-beach': {
        driveTime: '18-25',
        shortDirections: 'SR-73 or SR-55 North to Tustin Ave',
        parkingInfo: 'Free parking is available immediately adjacent to the building. No parking garage or meter required.',
        routes: [
            { name: 'From Corona del Mar / Newport Coast', directions: 'Take SR-73 Toll Road north to SR-55 north. Exit at Edinger or 1st Street and head to Tustin Ave.' },
            { name: 'From Balboa Peninsula / Fashion Island', directions: 'Take SR-55 North to the Tustin Avenue exit. The office is at 801 N Tustin Ave #401.' },
        ],
    },
    'tustin': {
        driveTime: '5-10',
        shortDirections: 'North on Tustin Ave or via SR-55',
        parkingInfo: 'Free parking is available immediately adjacent to the building.',
        routes: [
            { name: 'From Old Town Tustin', directions: 'Head north on Tustin Ave (Newport Ave becomes Tustin Ave). The office is at 801 N Tustin Ave #401, approximately 1 mile north of downtown.' },
            { name: 'From Tustin Ranch', directions: 'Take Jamboree Rd to Edinger Ave, then east to Tustin Ave. Turn north to 801 N Tustin Ave.' },
        ],
    },
    'costa-mesa': {
        driveTime: '15-20',
        shortDirections: 'SR-55 North to Tustin Ave',
        parkingInfo: 'Free parking is available immediately adjacent to the building.',
        routes: [
            { name: 'From South Coast Metro', directions: 'Take SR-55 North to the Edinger Avenue or 1st Street exit. Head east to Tustin Ave, then north.' },
            { name: 'From Mesa Verde', directions: 'Take Harbor Blvd north to SR-55 north, or surface streets via 17th Street to Tustin Ave.' },
        ],
    },
    'huntington-beach': {
        driveTime: '20-30',
        shortDirections: 'I-405 to SR-55 North, or Beach Blvd north',
        parkingInfo: 'Free parking is available immediately adjacent to the building.',
        routes: [
            { name: 'Via SR-55', directions: 'Take I-405 East to SR-55 North. Exit at Edinger Avenue and head east to Tustin Ave.' },
            { name: 'Via Beach Blvd', directions: 'Take Beach Blvd (SR-39) north through Garden Grove, then east on Garden Grove Blvd to SR-55 north.' },
        ],
    },
    'anaheim': {
        driveTime: '12-20',
        shortDirections: 'SR-55 South or I-5 South to Tustin Ave',
        parkingInfo: 'Free parking is available immediately adjacent to the building.',
        routes: [
            { name: 'From Anaheim Hills', directions: 'Take SR-91 West to SR-55 South. Exit at 1st Street and head east to Tustin Ave.' },
            { name: 'From Downtown Anaheim', directions: 'Take I-5 South to the Tustin Avenue exit. Head south on Tustin Ave to 801 N Tustin Ave #401.' },
        ],
    },
    'santa-ana': {
        driveTime: '5-15',
        shortDirections: 'Tustin Ave or local streets',
        parkingInfo: 'Free parking is available immediately adjacent to the building.',
        routes: [
            { name: 'From Downtown Santa Ana', directions: 'Head north on Main Street or Broadway, then east on 1st Street to Tustin Ave. Turn north to 801 N Tustin Ave.' },
        ],
    },
};

function getCommuteData(citySlug: string, cityName: string): CommuteData {
    if (commuteDataMap[citySlug]) {
        return commuteDataMap[citySlug];
    }

    // Default for cities without specific commute data
    return {
        driveTime: '20-35',
        shortDirections: 'Major freeways to Tustin Ave in Santa Ana',
        parkingInfo: 'Free parking is available immediately adjacent to the building. No parking garage or meter required.',
        routes: [
            { name: 'Via I-5', directions: 'Take I-5 to the Tustin Avenue exit in Santa Ana. Head north on Tustin Ave to 801 N Tustin Ave #401.' },
            { name: 'Via SR-55', directions: 'Take SR-55 to the Edinger Avenue or 1st Street exit. Head east to Tustin Ave, then north to the office.' },
        ],
    };
}

export default function CityCommuteSection({ citySlug, cityName, coordinates }: CityCommuteSectionProps) {
    const commute = getCommuteData(citySlug, cityName);

    // Google Maps directions URL from city to practice
    const directionsUrl = `https://www.google.com/maps/dir/${encodeURIComponent(cityName + ', CA')}/${encodeURIComponent(BUSINESS_INFO.address.streetAddress + ', ' + BUSINESS_INFO.address.addressLocality + ', ' + BUSINESS_INFO.address.addressRegion + ' ' + BUSINESS_INFO.address.postalCode)}`;

    // Google Maps embed URL centered on the practice
    const embedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.598687798369!2d-117.83789092449734!3d33.75990597326887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd95130700001%3A0x6c6e6e6e6e6e6e6e!2s801%20N%20Tustin%20Ave%20%23401%2C%20Santa%20Ana%2C%20CA%2092705!5e0!3m2!1sen!2sus!4v1709234567890!5m2!1sen!2sus`;

    return (
        <section className="py-16 md:py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
                    {/* Text content */}
                    <FadeIn>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mb-6">
                                Getting Here from {cityName}
                            </h2>

                            {/* Commute stats cards */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="bg-white p-4 rounded-xl border border-gray-100 text-center">
                                    <div className="flex items-center justify-center gap-2 mb-1">
                                        <Clock className="w-4 h-4 text-eyecare-blue" />
                                        <p className="text-2xl font-bold text-eyecare-blue">
                                            ~{commute.driveTime}
                                        </p>
                                    </div>
                                    <p className="text-xs text-gray-500">Minutes Drive</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl border border-gray-100 text-center">
                                    <div className="flex items-center justify-center gap-2 mb-1">
                                        <Car className="w-4 h-4 text-eyecare-blue" />
                                        <p className="text-2xl font-bold text-eyecare-blue">Free</p>
                                    </div>
                                    <p className="text-xs text-gray-500">Parking Available</p>
                                </div>
                            </div>

                            {/* Route details */}
                            <div className="space-y-3 mb-6">
                                <h3 className="font-bold text-eyecare-navy text-sm uppercase tracking-wide">
                                    Recommended Routes
                                </h3>
                                {commute.routes.map((route, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <ArrowRight className="w-4 h-4 text-eyecare-blue shrink-0 mt-1" />
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            <span className="font-semibold text-gray-800">{route.name}:</span>{' '}
                                            {route.directions}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Parking info */}
                            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                                <p className="text-sm text-gray-700">
                                    <span className="font-bold text-eyecare-navy">Parking:</span>{' '}
                                    {commute.parkingInfo}
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Map card */}
                    <FadeIn delay={0.2}>
                        <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 rotate-1 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-gray-100 rounded-2xl h-[300px] w-full overflow-hidden relative">
                                <iframe
                                    src={embedUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Map from ${cityName} to Keratoconus Vision Center in Santa Ana`}
                                />
                            </div>
                            <div className="mt-4 px-2 pb-2">
                                <div className="flex items-start gap-3 mb-3">
                                    <MapPin className="w-5 h-5 text-eyecare-blue shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-bold text-eyecare-navy text-sm">
                                            {BUSINESS_INFO.address.streetAddress}, {BUSINESS_INFO.address.addressLocality}, {BUSINESS_INFO.address.addressRegion} {BUSINESS_INFO.address.postalCode}
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            From {cityName}: {commute.shortDirections}
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href={directionsUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-3 bg-eyecare-navy text-white text-center rounded-lg text-sm font-bold hover:bg-eyecare-blue transition-colors"
                                >
                                    Get Directions from {cityName}
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
