import { CheckCircle } from 'lucide-react';

const signals = {
    en: [
        'Same-week appointments available',
        '5,000+ keratoconus patients treated',
        'Bascom Palmer trained',
        'Most insurance accepted',
    ],
    es: [
        'Citas disponibles esta semana',
        '5,000+ pacientes con queratocono tratados',
        'Entrenado en Bascom Palmer',
        'Aceptamos la mayoría de seguros',
    ],
};

export default function TrustSignals({ locale = 'en' }: { locale?: 'en' | 'es' }) {
    const items = signals[locale];

    return (
        <div className="grid grid-cols-2 gap-3 mb-6">
            {items.map((signal, i) => (
                <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 font-medium">{signal}</span>
                </div>
            ))}
        </div>
    );
}
