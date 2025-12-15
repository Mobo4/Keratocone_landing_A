import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import { MapPin, CheckCircle, Phone, Clock, CreditCard } from 'lucide-react';
import { soCalCitiesEs } from '@/data/cities-es';
import LandingLayout from '@/components/LandingLayout';
import LeadForm from '@/components/LeadForm';
import InsuranceSection from '@/components/InsuranceSection';
import FadeIn from '@/components/FadeIn';

interface Props {
    params: Promise<{
        ciudad: string;
    }>;
}

// Generate static paths for all cities
export async function generateStaticParams() {
    return soCalCitiesEs.map((city) => ({
        ciudad: city.slug,
    }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const city = soCalCitiesEs.find((c) => c.slug === resolvedParams.ciudad);
    if (!city) return {};

    return {
        title: `Especialista en Queratocono en ${city.name} | Dr. Bonakdar`,
        description: `Tratamiento experto de queratocono y ajuste de lentes esclerales para pacientes de ${city.name}, ${city.county}. Más de 20 años de experiencia. Hablamos español. Agende su consulta hoy.`,
        keywords: [`queratocono ${city.name.toLowerCase()}`, `lentes esclerales ${city.name.toLowerCase()}`, `doctor ojos ${city.name.toLowerCase()}`, `especialista córnea ${city.county.toLowerCase()}`],
        openGraph: {
            title: `Especialista en Queratocono en ${city.name}`,
            description: `Tratamiento experto de queratocono para pacientes de ${city.name}. Hablamos español.`,
            locale: 'es_MX',
        },
        alternates: {
            canonical: `https://keratocones.com/es/ubicaciones/${city.slug}`,
            languages: {
                'en': `https://keratocones.com/locations/${city.slug}`,
                'es': `https://keratocones.com/es/ubicaciones/${city.slug}`,
            },
        },
    };
}

export default async function SpanishCityPage({ params }: Props) {
    const resolvedParams = await params;
    const city = soCalCitiesEs.find((c) => c.slug === resolvedParams.ciudad);

    if (!city) {
        notFound();
    }

    // Schema markup for local SEO
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        "name": `Centro de Visión para Queratocono - ${city.name}`,
        "description": `Especialista en queratocono sirviendo a pacientes de ${city.name}, ${city.county}. Ajuste experto de lentes esclerales y restauración de visión.`,
        "url": `https://keratocones.com/es/ubicaciones/${city.slug}`,
        "telephone": "+1-714-558-0641",
        "image": "https://keratocones.com/images/drbonakdar.webp",
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
            "latitude": city.coordinates.lat,
            "longitude": city.coordinates.lng
        },
        "areaServed": {
            "@type": "City",
            "name": city.name
        },
        "inLanguage": "es-MX"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `¿Hay un especialista en queratocono cerca de ${city.name}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Sí, el Dr. Alexander Bonakdar es un especialista en queratocono que atiende pacientes de ${city.name} y todo el ${city.county}. Nuestra clínica está convenientemente ubicada en Santa Ana, a corta distancia de ${city.name}.`
                }
            },
            {
                "@type": "Question",
                "name": `¿Cuánto cuestan los lentes esclerales en ${city.name}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "El costo de los lentes esclerales varía según la complejidad de su caso. Aceptamos muchos planes de seguro de visión y ofrecemos opciones de financiamiento a través de CareCredit. Contáctenos para una consulta y estimación de costos."
                }
            }
        ]
    };

    const combinedSchema = [localBusinessSchema, faqSchema];

    return (
        <>
            <Script
                id="city-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
            />

            {/* City Hero */}
            <section className="relative bg-eyecare-navy text-white py-20 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
                <div className="absolute inset-0 z-0 opacity-40">
                    <div className="w-full h-full bg-[url('/images/corneal-topography-blue.webp')] bg-cover bg-center" />
                </div>

                <div className="container mx-auto px-4 relative z-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6 tracking-wide backdrop-blur-sm">
                        Atendiendo Pacientes en {city.name}, CA
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 max-w-4xl">
                        Tratamiento de Queratocono de Clase Mundial para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">{city.name}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                        No tienes que viajar lejos para recibir atención experta. El Dr. Bonakdar es un especialista reconocido a nivel nacional que trata casos complejos de córnea para pacientes de todo el {city.county}.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="#appointment" className="inline-flex justify-center items-center px-8 py-4 bg-white text-eyecare-navy rounded-full font-bold hover:bg-blue-50 transition-colors">
                            Agendar Consulta en {city.name}
                        </Link>
                        <Link href="tel:7145580641" className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors">
                            Llamar (714) 558-0641
                        </Link>
                    </div>
                </div>
            </section>

            {/* Neighborhoods Section */}
            {city.neighborhoods && city.neighborhoods.length > 0 && (
                <section className="py-16 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-serif font-bold text-eyecare-navy mb-6 text-center">Sirviendo Vecindarios en Todo {city.name}</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
                            Ya sea que vivas en {city.neighborhoods[0]}, {city.neighborhoods[1]}, o cualquier otra parte de {city.name}, nuestra atención especializada para queratocono está a solo un corto viaje de distancia.
                            Entendemos que encontrar un verdadero especialista en lentes esclerales puede ser difícil—muchos pacientes de {city.name} han escuchado "solo tienes que vivir con eso" de optometristas generales.
                            La práctica del Dr. Bonakdar existe específicamente para casos complejos de córnea, y pacientes de todo el {city.county} confían en nosotros para su viaje de restauración de visión.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            {city.neighborhoods.map((neighborhood) => (
                                <div key={neighborhood} className="bg-eyecare-lighter-blue/30 p-6 rounded-xl border border-eyecare-blue/10 text-center hover:border-eyecare-blue/30 transition-colors">
                                    <h3 className="font-bold text-eyecare-navy mb-2">{neighborhood}</h3>
                                    <p className="text-sm text-gray-600">Atención experta de queratocono para residentes de {neighborhood}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-600 max-w-3xl mx-auto text-center mt-12 leading-relaxed">
                            Vivir con queratocono en {city.name} no significa que tengas que conformarte con una visión deficiente. Mientras muchos doctores de ojos en el {city.county} pueden diagnosticar la condición,
                            muy pocos tienen el entrenamiento especializado y el equipo requerido para el ajuste avanzado de lentes esclerales. Nuestra práctica ha invertido en sistemas de topografía corneal de última generación
                            y mantiene relaciones con los principales fabricantes de lentes esclerales para asegurar que obtengas el mejor resultado posible. Los pacientes de {city.name} aprecian que nos tomamos el tiempo
                            para perfeccionar cada ajuste—esto no es un enfoque de "talla única". Tu córnea es única, y tu tratamiento también debería serlo.
                        </p>
                    </div>
                </section>
            )}

            {/* Why Travel Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-eyecare-navy mb-6">Por Qué los Pacientes de {city.name} Nos Eligen</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-eyecare-blue shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-1">Ubicación Conveniente en el Centro de OC</h3>
                                        <p className="text-gray-600">
                                            Somos un destino de confianza para pacientes de {city.name}. El ajuste experto de lentes esclerales requiere precisión, no solo proximidad. Vale la pena el viaje para el ajuste correcto.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                        <CheckCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-1">99% de Tasa de Éxito</h3>
                                        <p className="text-gray-600">
                                            Muchos de nuestros pacientes vienen de {city.name} después de fallar ajustes en otros lugares. Nos especializamos en los casos "imposibles".
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Visual */}
                        <div className="bg-white p-2 rounded-2xl shadow-lg -rotate-1">
                            <div className="bg-gray-200 rounded-xl h-[400px] flex items-center justify-center relative overflow-hidden">
                                <div className="text-center p-8">
                                    <MapPin className="w-12 h-12 text-eyecare-blue mx-auto mb-4" />
                                    <p className="font-bold text-eyecare-navy text-lg mb-2">Se Aceptan Pacientes de {city.name}</p>
                                    <p className="text-gray-600">Ubicados en Santa Ana, sirviendo a todo el {city.county}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Insurance */}
            <InsuranceSection />

            {/* CTA Section */}
            <section id="appointment" className="py-24 bg-eyecare-lighter-blue">
                <div className="container mx-auto px-4">
                    <FadeIn>
                        <div className="max-w-4xl mx-auto text-center mb-12">
                            <h2 className="text-3xl font-bold text-eyecare-navy font-serif mb-4">Agenda Tu Consulta en {city.name}</h2>
                            <p className="text-xl text-gray-600">
                                Da el primer paso hacia una visión clara. Nos especializamos en casos que otros doctores rechazan.
                            </p>
                        </div>
                        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden p-8 border border-eyecare-blue/10">
                            <LeadForm />
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
