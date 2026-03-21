import { Metadata } from 'next';
import { headers } from 'next/headers';
import SpanishHomeContent from '@/components/es/SpanishHomeContent';
import { getPersonalizationEs } from '@/lib/geo-personalization-es';

export const metadata: Metadata = {
    title: 'Tratamiento Queratocono Orange County | Hablamos Español',
    description: 'Deje de vivir con visión borrosa. 500+ casos, citas esta semana, acceso directo al especialista. Hablamos español. Seguro aceptado. (714) 558-0641',
    keywords: ['queratocono tratamiento', 'lentes esclerales', 'especialista queratocono', 'doctor queratocono orange county', 'córnea irregular', 'lentes de contacto especializados', 'queratocono en español', 'doctor ojos habla español'],
    openGraph: {
        title: 'Tratamiento Queratocono Orange County | Hablamos Español',
        description: 'Deje de vivir con visión borrosa. 500+ casos, citas esta semana, hablamos español. Seguro aceptado. (714) 558-0641',
        locale: 'es_MX',
        type: 'website',
    },
    alternates: {
        canonical: 'https://www.keratocones.com/es',
        languages: {
            'en': 'https://www.keratocones.com',
            'es': 'https://www.keratocones.com/es',
            'x-default': 'https://www.keratocones.com',
        },
    },
};

export default async function SpanishLandingPage() {
    const headersList = await headers();
    const city = headersList.get('x-visitor-city') || '';
    const keyword = headersList.get('x-keyword') || '';
    const utmSource = headersList.get('x-utm-source') || '';
    const geo = getPersonalizationEs(city, keyword || undefined, utmSource || undefined);
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Centro de Visión para Queratocono",
        "description": "Especialista líder en queratocono en Orange County. Ajuste avanzado de lentes esclerales y restauración de visión no quirúrgica.",
        "url": "https://keratocones.com/es",
        "inLanguage": "es-MX",
        "mainEntity": {
            "@type": "MedicalSpecialty",
            "name": "Tratamiento de Queratocono",
            "medicalCode": "ICD-10-CM H18.6"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <SpanishHomeContent geoHeadline={geo.headline} geoSubhead={geo.subhead} geoBadge={geo.badge} geoCta={geo.urgency} />
        </>
    );
}
