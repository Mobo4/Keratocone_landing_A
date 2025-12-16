import { Metadata } from 'next';
import SpanishHomeContent from '@/components/es/SpanishHomeContent';

export const metadata: Metadata = {
    title: 'Especialista en Queratocono OC | Dr. Bonakdar',
    description: 'Líder en tratamiento de queratocono en Orange County. Lentes esclerales y restauración de visión sin cirugía. 20+ años exp. Hablamos español.',
    keywords: ['queratocono tratamiento', 'lentes esclerales', 'especialista queratocono', 'doctor queratocono orange county', 'córnea irregular', 'lentes de contacto especializados', 'queratocono en español', 'doctor ojos habla español'],
    openGraph: {
        title: 'Especialista en Queratocono OC | Dr. Bonakdar',
        description: 'Centro líder en tratamiento de queratocono. Lentes esclerales y restauración de visión sin cirugía. Hablamos español.',
        locale: 'es_MX',
        type: 'website',
    },
    alternates: {
        canonical: 'https://keratocones.com/es',
        languages: {
            'en': 'https://keratocones.com',
            'es': 'https://keratocones.com/es',
        },
    },
};

export default function SpanishLandingPage() {
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
            <SpanishHomeContent />
        </>
    );
}
