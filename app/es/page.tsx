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
    return <SpanishHomeContent />;
}
