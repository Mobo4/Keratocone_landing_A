'use client';

import { BUSINESS_INFO } from '@/data/business';

export default function BusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Optician",
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
        "medicalSpecialty": "Optometry",
        "isAcceptingNewPatients": true,
        "paymentAccepted": ["Cash", "Credit Card", "Insurance"],
        "image": [
            `${BUSINESS_INFO.url}/images/drbonakdar.webp`,
            `${BUSINESS_INFO.url}/images/keratoconus-main.webp`
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
