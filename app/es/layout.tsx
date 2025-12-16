import type { Metadata } from "next";
import { Poppins, Playfair_Display } from 'next/font/google';
import "../globals.css";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import GoogleTag from "@/components/GoogleTag";
import TrackingScripts from "@/components/TrackingScripts";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-poppins',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-playfair',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Centro de Visión para Queratocono | Dr. Alexander Bonakdar",
    description: "Centro líder en Orange County para tratamiento de queratocono. Ajuste experto de lentes esclerales y restauración de visión sin cirugía.",
    keywords: ["queratocono tratamiento", "lentes esclerales", "especialista queratocono", "doctor queratocono orange county", "córnea irregular", "lentes de contacto especializados"],
};

export default function SpanishLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    // Schema: Spanish "Specialty Site" Configuration
    const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "@id": "https://keratocones.com/es/#organization",
        "name": "Centro de Visión para Queratocono",
        "alternateName": "Dr. Alexander Bonakdar - Especialista en Queratocono",
        "description": "Centro líder en Orange County para tratamiento de queratocono. Ajuste experto de lentes esclerales, consultas de cross-linking corneal y atención especializada para pacientes con queratocono.",
        "url": "https://keratocones.com/es",
        "inLanguage": "es-MX",
        "availableLanguage": ["en", "es"],
        "logo": "https://keratocones.com/images/icon.png",
        "image": "https://keratocones.com/images/drbonakdar.webp",
        "telephone": "+1-714-558-0641",
        "email": "info@eyecarecenteroc.com",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "801 N Tustin Ave #401",
            "addressLocality": "Santa Ana",
            "addressRegion": "CA",
            "postalCode": "92705",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "33.7599",
            "longitude": "-117.8357"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
                "opens": "09:00",
                "closes": "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Friday",
                "opens": "09:00",
                "closes": "17:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "14:00"
            }
        ],
        "medicalSpecialty": [
            "Optometría",
            "Enfermedades de la Córnea y Superficie Ocular"
        ],
        "availableService": [
            { "@type": "MedicalProcedure", "name": "Diagnóstico de Queratocono" },
            { "@type": "MedicalProcedure", "name": "Tratamiento de Queratocono" },
            { "@type": "MedicalProcedure", "name": "Ajuste de Lentes Esclerales" },
            { "@type": "MedicalProcedure", "name": "Consulta de Cross-Linking Corneal" },
            { "@type": "MedicalProcedure", "name": "Topografía Corneal" },
            { "@type": "MedicalProcedure", "name": "Atención de Emergencia para Queratocono" }
        ],
        "areaServed": [
            { "@type": "City", "name": "Irvine" },
            { "@type": "City", "name": "Newport Beach" },
            { "@type": "City", "name": "Costa Mesa" },
            { "@type": "City", "name": "Tustin" },
            { "@type": "City", "name": "Santa Ana" },
            { "@type": "City", "name": "Orange" },
            { "@type": "county", "name": "Condado de Orange, California" }
        ],
        "paymentAccepted": ["Efectivo", "Tarjeta de Crédito", "VSP", "Seguro Médico", "CareCredit"],
        "currenciesAccepted": "USD",
        "sameAs": [
            "https://www.facebook.com/eyecarecenteroc",
            "https://www.instagram.com/eyecarecenteroc",
            "https://www.yelp.com/biz/alexander-bonakdar-od-santa-ana"
        ],
        "parentOrganization": {
            "@type": "MedicalBusiness",
            "name": "Eye Care Center of Orange County",
            "url": "https://eyecarecenteroc.com",
            "@id": "https://eyecarecenteroc.com/#organization"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            {children}
        </>
    );
}
