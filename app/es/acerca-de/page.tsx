import { Metadata } from 'next';
import LandingLayout from '@/components/LandingLayout';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Dr. Alexander Bonakdar | Especialista en Queratocono',
    description: 'Conoce al Dr. Bonakdar, experto en queratocono con 20+ años de experiencia. Referencia de confianza de CHOC y UCI para casos complejos.',
    openGraph: {
        title: 'Dr. Bonakdar | Especialista en Queratocono',
        description: 'Más de 20 años de experiencia en tratamiento de queratocono y lentes esclerales.',
        locale: 'es_MX',
    },
    alternates: {
        canonical: 'https://keratocones.com/es/acerca-de',
        languages: {
            'en': 'https://keratocones.com/about',
            'es': 'https://keratocones.com/es/acerca-de',
        },
    },
};

export default function AboutPageEs() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "name": "Perfil del Dr. Alexander Bonakdar",
        "inLanguage": "es-MX",
        "mainEntity": {
            "@type": "Person",
            "name": "Dr. Alexander Bonakdar",
            "jobTitle": "Optometrista",
            "medicalSpecialty": "Especialista en Queratocono",
            "worksFor": {
                "@type": "MedicalBusiness",
                "name": "Centro de Visión para Queratocono"
            },
            "description": "Especialista líder en Orange County en restauración de visión no quirúrgica para Queratocono con más de 20 años de experiencia."
        }
    };

    return (
        <LandingLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <div className="bg-white py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        {/* Hero Section */}
                        <div className="text-center mb-16">
                            <span className="text-eyecare-blue font-bold tracking-widest uppercase text-sm mb-4 block">Conoce a Tu Especialista</span>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-eyecare-navy mb-6">
                                Dr. Alexander Bonakdar, O.D.
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                Especialista en Queratocono y Lentes Esclerales con Más de 20 Años de Experiencia
                            </p>
                        </div>

                        {/* Doctor Image and Bio */}
                        <div className="grid md:grid-cols-3 gap-12 mb-16">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-eyecare-navy mb-6 shadow-2xl">
                                    <img
                                        src="/images/drbonakdar.webp"
                                        alt="Dr. Alexander Bonakdar"
                                        className="w-full h-full object-cover"
                                        style={{ objectPosition: 'center 30%' }}
                                    />
                                </div>
                                <h2 className="text-2xl font-bold mb-2 font-serif text-eyecare-navy">Dr. Alexander Bonakdar</h2>
                                <p className="text-eyecare-blue font-medium">Doctor en Optometría</p>
                            </div>

                            <div className="md:col-span-2 space-y-6">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    El Dr. Alexander Bonakdar ha dedicado su carrera a ayudar a pacientes con condiciones corneales complejas
                                    a recuperar su visión. Como especialista líder en queratocono en el Condado de Orange, ha ajustado exitosamente
                                    miles de lentes esclerales para pacientes a quienes se les dijo que no tenían opciones.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Su experiencia le ha ganado la confianza de las principales instituciones médicas de la región.
                                    CHOC (Hospital de Niños del Condado de Orange) y UCI Medical Center refieren regularmente sus casos
                                    más desafiantes de queratocono al Dr. Bonakdar, sabiendo que sus pacientes recibirán atención del más alto nivel.
                                </p>
                            </div>
                        </div>

                        {/* Credentials */}
                        <div className="grid md:grid-cols-4 gap-6 mb-16">
                            {[
                                { stat: '20+', label: 'Años de Experiencia' },
                                { stat: 'CHOC', label: 'Fuente de Referencia' },
                                { stat: 'UCI', label: 'Consultor Médico' },
                                { stat: '99%', label: 'Tasa de Éxito' },
                            ].map((item, idx) => (
                                <div key={idx} className="text-center p-6 bg-eyecare-lighter-blue rounded-2xl">
                                    <p className="text-3xl font-bold text-eyecare-navy mb-2">{item.stat}</p>
                                    <p className="text-sm text-gray-600 font-medium">{item.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Why Patients Travel */}
                        <div className="bg-gradient-to-r from-eyecare-navy to-blue-900 text-white rounded-3xl p-8 md:p-12 mb-16">
                            <h2 className="text-2xl font-bold mb-6 font-serif">Por Qué los Pacientes Viajan para Ver al Dr. Bonakdar</h2>
                            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                                Lo que distingue al Dr. Bonakdar es su compromiso de mantenerse a la vanguardia de la tecnología de lentes esclerales.
                                Asiste regularmente a seminarios de capacitación avanzada, mantiene relaciones cercanas con los principales fabricantes
                                de lentes y ha invertido en equipos de diagnóstico de última generación que la mayoría de las prácticas de optometría
                                general no tienen.
                            </p>
                            <p className="text-lg text-blue-100 leading-relaxed">
                                Esta dedicación significa que cuando vienes a nuestra práctica, no solo recibes un ajuste de lentes de contacto—
                                estás accediendo a las últimas innovaciones en rehabilitación corneal.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-eyecare-navy mb-4 font-serif">¿Listo para Ver con Claridad?</h2>
                            <p className="text-gray-600 mb-8">Agenda una consulta con el Dr. Bonakdar hoy.</p>
                            <Link
                                href="/es#lead-form"
                                className="inline-block bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-4 rounded-xl font-bold transition-colors"
                            >
                                Agendar Consulta
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </LandingLayout>
    );
}
