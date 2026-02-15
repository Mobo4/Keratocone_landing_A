'use client';

import { BUSINESS_INFO } from '@/data/business';

export default function BusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "@id": `${BUSINESS_INFO.url}/#organization`,
        "name": BUSINESS_INFO.name,
        "alternateName": BUSINESS_INFO.alternateName,
        "description": BUSINESS_INFO.description,
        "url": BUSINESS_INFO.url,
        "telephone": BUSINESS_INFO.telephone,
        "email": BUSINESS_INFO.email,
        "priceRange": BUSINESS_INFO.priceRange,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": BUSINESS_INFO.address.streetAddress,
            "addressLocality": BUSINESS_INFO.address.addressLocality,
            "addressRegion": BUSINESS_INFO.address.addressRegion,
            "postalCode": BUSINESS_INFO.address.postalCode,
            "addressCountry": BUSINESS_INFO.address.addressCountry
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": BUSINESS_INFO.geo.latitude,
            "longitude": BUSINESS_INFO.geo.longitude
        },
        "sameAs": BUSINESS_INFO.sameAs,
        "openingHoursSpecification": BUSINESS_INFO.openingHours.map(hours => {
            const [day, time] = hours.split(' ');
            const [opens, closes] = time.split('-');

            const dayMap: { [key: string]: string } = {
                'Mo': 'Monday',
                'Tu': 'Tuesday',
                'We': 'Wednesday',
                'Th': 'Thursday',
                'Fr': 'Friday',
                'Sa': 'Saturday',
                'Su': 'Sunday'
            };

            return {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": dayMap[day],
                "opens": opens,
                "closes": closes
            };
        }),
        "medicalSpecialty": ["Ophthalmology", "Keratoconus Treatment", "Corneal Disease", "Scleral Lens Fitting"],
        "availableService": [
            {
                "@type": "MedicalProcedure",
                "name": "Keratoconus Treatment",
                "description": "Non-surgical treatment for keratoconus using advanced scleral lens technology"
            },
            {
                "@type": "MedicalProcedure",
                "name": "Scleral Lens Fitting",
                "description": "Custom scleral lens design and fitting for irregular corneas"
            },
            {
                "@type": "MedicalProcedure",
                "name": "Corneal Topography",
                "description": "Advanced corneal mapping and diagnostic imaging"
            }
        ],
        "isAcceptingNewPatients": true,
        "paymentAccepted": ["Cash", "Credit Card", "Insurance", "HSA", "FSA"],
        "currenciesAccepted": "USD",
        "image": [
            `${BUSINESS_INFO.url}/images/drbonakdar.webp`,
            `${BUSINESS_INFO.url}/images/keratoconus-main.webp`
        ],
        "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Medical Specialty",
            "name": "Keratoconus Specialist"
        },
        "parentOrganization": {
            "@type": "MedicalBusiness",
            "name": "Eye Care Center of Orange County",
            "url": "https://www.eyecarecenteroc.com"
        },
        "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": BUSINESS_INFO.geo.latitude,
                "longitude": BUSINESS_INFO.geo.longitude
            },
            "geoRadius": "50 miles"
        },
        "knowsAbout": ["Keratoconus", "Scleral Lenses", "Corneal Disease", "Irregular Astigmatism", "Post-Surgical Corneas"],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": "127",
            "reviewCount": "89"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
