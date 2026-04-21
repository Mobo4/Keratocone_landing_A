import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Keratoconus Self-Assessment Quiz | Am I A Candidate for Scleral Lenses?",
    description: "Take the 2-minute keratoconus quiz. Find out if scleral lenses could restore your vision. 2,000+ keratoconus cases treated by Dr. Bonakdar. (714) 558-0641",
    keywords: ["keratoconus quiz", "keratoconus self-assessment", "am I a candidate for scleral lenses", "keratoconus symptoms checker", "scleral lens candidate quiz"],
    alternates: {
        canonical: 'https://www.keratocones.com/quiz',
        languages: {
            'en': 'https://www.keratocones.com/quiz',
            'es': 'https://www.keratocones.com/es/quiz',
            'x-default': 'https://www.keratocones.com/quiz',
        },
    },
    openGraph: {
        title: "Keratoconus Self-Assessment Quiz | Scleral Lens Candidate Check",
        description: "Take the 2-minute keratoconus quiz. Find out if scleral lenses could restore your vision. Orange County's leading keratoconus specialist.",
        url: 'https://www.keratocones.com/quiz',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function QuizLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
