import { Metadata } from 'next';
import LandingLayout from '@/components/LandingLayout';
import ContactoPageContent from '@/components/es/ContactoPageContent';

export const metadata: Metadata = {
    title: 'Agendar Cita Queratocono | Esta Semana | Español',
    description: 'Cansado de esperar meses? Agende esta semana. 500+ casos, 35+ años experiencia, hablamos español. Seguro aceptado. (714) 558-0641',
    openGraph: {
        title: 'Agendar Cita Queratocono | Esta Semana | Español',
        description: 'Agende esta semana. 500+ casos, 35+ años experiencia, hablamos español. (714) 558-0641',
        locale: 'es_MX',
    },
    alternates: {
        canonical: 'https://keratocones.com/es/contacto',
        languages: {
            'en': 'https://keratocones.com/contact',
            'es': 'https://keratocones.com/es/contacto',
        },
    },
};

export default function ContactPageEs() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contacto Centro de Visión para Queratocono",
        "description": "Información de contacto, ubicación y horarios del Dr. Alexander Bonakdar en Santa Ana, CA.",
        "url": "https://keratocones.com/es/contacto",
        "inLanguage": "es-MX",
        "mainEntity": {
            "@type": "MedicalBusiness",
            "name": "Centro de Visión para Queratocono",
            "telephone": "+1-714-558-0641",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "801 N Tustin Ave #401",
                "addressLocality": "Santa Ana",
                "addressRegion": "CA",
                "postalCode": "92705",
                "addressCountry": "US"
            }
        }
    };

    return (
        <LandingLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <ContactoPageContent />
        </LandingLayout>
    );
}
