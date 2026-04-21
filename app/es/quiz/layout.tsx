import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cuestionario de Queratocono | ¿Soy Candidato para Lentes Esclerales?",
    description: "Cuestionario de 2 minutos sobre queratocono. Descubra si las lentes esclerales pueden restaurar su visión. 2,000+ casos tratados. (714) 558-0641",
    keywords: ["cuestionario queratocono", "test queratocono", "candidato lentes esclerales", "síntomas queratocono", "especialista queratocono orange county"],
    alternates: {
        canonical: 'https://www.keratocones.com/es/quiz',
        languages: {
            'en': 'https://www.keratocones.com/quiz',
            'es': 'https://www.keratocones.com/es/quiz',
            'x-default': 'https://www.keratocones.com/quiz',
        },
    },
    openGraph: {
        title: "Cuestionario de Queratocono | Candidato para Lentes Esclerales",
        description: "Cuestionario de 2 minutos sobre queratocono. Descubra si las lentes esclerales pueden restaurar su visión.",
        url: 'https://www.keratocones.com/es/quiz',
        type: 'website',
        locale: 'es_MX',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function QuizLayoutEs({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
