
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { soCalCities } from '@/data/cities';
import LeadForm from '@/components/LeadForm';
import { MapPin, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';

interface Props {
    params: Promise<{
        city: string;
    }>;
}

// 1. Generate Static Params for all cities (SSG)
export async function generateStaticParams() {
    return soCalCities.map((city) => ({
        city: city.slug,
    }));
}

// 2. Dynamic Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const city = soCalCities.find((c) => c.slug === resolvedParams.city);
    if (!city) return {};

    return {
        title: `Especialista en Queratocono en ${city.name}, CA | Lentes Esclerales`,
        description: `Tratamiento experto de queratocono en ${city.name}, CA. El Dr. Bonakdar se especializa en lentes esclerales para pacientes en ${city.name} y ${city.county}.`,
        alternates: {
            canonical: `https://keratocones.com/es/locations/${city.slug}`,
            languages: {
                'en': `https://keratocones.com/locations/${city.slug}`,
                'es': `https://keratocones.com/es/locations/${city.slug}`,
            },
        },
        openGraph: {
            title: `Especialista en Queratocono sirviendo a ${city.name} | Dr. Bonakdar`,
            description: `No deje que el queratocono limite su visión. Ajuste experto de lentes esclerales y tratamiento para pacientes en ${city.name}.`,
            locale: 'es_MX',
        },
    };
}

// 3. Page Component
export default async function CityPageEs({ params }: Props) {
    const resolvedParams = await params;
    const city = soCalCities.find((c) => c.slug === resolvedParams.city);

    if (!city) {
        notFound();
    }

    // Schema: LocalBusiness + FAQPage (Spanish)
    const combinedSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MedicalBusiness",
                "name": "Centro de Visión para Queratocono | Dr. Alexander Bonakdar",
                "image": "https://keratocones.com/images/drbonakdar.webp",
                "priceRange": "$$",
                "telephone": "(714) 558-0641",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "801 N Tustin Ave #401",
                    "addressLocality": "Santa Ana",
                    "addressRegion": "CA",
                    "postalCode": "92705",
                    "addressCountry": "US"
                },
                "areaServed": {
                    "@type": "City",
                    "name": city.name,
                    "address": {
                        "@type": "PostalAddress",
                        "addressRegion": "CA",
                        "addressCountry": "US"
                    }
                },
                "url": `https://keratocones.com/es/locations/${city.slug}`
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": `¿Hay un especialista en queratocono cerca de ${city.name}?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `Sí. El Dr. Alexander Bonakdar crea lentes esclerales personalizados para pacientes en ${city.name}. Mientras que muchos optometristas generales en ${city.county} diagnostican la condición, el Dr. Bonakdar se especializa en la restauración visual compleja.`
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "¿El seguro cubre los lentes esclerales?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "La mayoría de los lentes de contacto médicamente necesarios para el queratocono están cubiertos por los principales planes de visión. Nuestra oficina coordina beneficios para pacientes que viajan desde áreas como Irvine, Newport Beach y el gran Los Ángeles."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <>
            <Script
                id="city-schema-es"
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
                        No tiene que viajar lejos para recibir atención experta. El Dr. Bonakdar es un especialista reconocido nacionalmente que trata casos complejos de córnea para pacientes en todo {city.county}.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="#appointment" className="inline-flex justify-center items-center px-8 py-4 bg-white text-eyecare-navy rounded-full font-bold hover:bg-blue-50 transition-colors">
                            Reservar Consulta en {city.name}
                        </Link>
                        <Link href="tel:7145580641" className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors">
                            Llamar (714) 558-0641
                        </Link>
                    </div>
                </div>
            </section>

            {/* Neighborhoods Section (if applicable) */}
            {city.neighborhoods && city.neighborhoods.length > 0 && (
                <section className="py-16 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-serif font-bold text-eyecare-navy mb-6 text-center">Sirviendo Vecindarios en Todo {city.name}</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
                            Ya sea que viva en {city.neighborhoods[0]}, {city.neighborhoods[1]} o en cualquier otro lugar de {city.name}, nuestra atención especializada para queratocono está a solo un corto viaje.
                            Entendemos que encontrar un verdadero especialista en lentes esclerales puede ser un desafío; a muchos pacientes de {city.name} los optometristas generales les han dicho que "simplemente vivan con ello".
                            La práctica del Dr. Bonakdar existe específicamente para casos corneales complejos, y pacientes de todo {city.county} confían en nosotros para su viaje de restauración visual.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            {city.neighborhoods.map((neighborhood) => (
                                <div key={neighborhood} className="bg-eyecare-lighter-blue/30 p-6 rounded-xl border border-eyecare-blue/10 text-center hover:border-eyecare-blue/30 transition-colors">
                                    <h3 className="font-bold text-eyecare-navy mb-2">{neighborhood}</h3>
                                    <p className="text-sm text-gray-600">Atención experta de queratocono para residentes de {neighborhood}</p>
                                </div>
                            ))}
                        </div>
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
                                        <h3 className="font-bold text-lg text-gray-900 mb-1">Ubicación Central en OC</h3>
                                        <p className="text-gray-600">
                                            Somos un destino de confianza para pacientes de {city.name}. El ajuste experto de lentes esclerales requiere precisión, no solo proximidad. Vale la pena el viaje por el ajuste correcto.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                        <CheckCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-1">99% Tasa de Éxito</h3>
                                        <p className="text-gray-600">
                                            Muchos de nuestros pacientes vienen de {city.name} después de ajustes fallidos en otros lugares. Nos especializamos en los casos "imposibles".
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map & Commute Info Card */}
                        <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 rotate-1 hover:rotate-0 transition-transform duration-500">
                            <div className="bg-gray-100 rounded-2xl h-[300px] w-full overflow-hidden relative mb-6">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.598687798369!2d-117.83789092449734!3d33.75990597326887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd95130700001%3A0x6c6e6e6e6e6e6e6e!2s801%20N%20Tustin%20Ave%20%23401%2C%20Santa%20Ana%2C%20CA%2092705!5e0!3m2!1sen!2sus!4v1709234567890!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={`Mapa desde ${city.name} al Centro de Visión para Queratocono`}
                                ></iframe>
                            </div>

                            <div className="space-y-4 px-2 pb-2">
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-eyecare-blue shrink-0 mt-1">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-eyecare-navy text-sm">Fácil Acceso desde {city.name}</h4>
                                        <p className="text-xs text-gray-600 mt-1">
                                            Ubicado cerca de las autopistas I-5 y SR-55, nuestra oficina es de fácil acceso desde {city.name}.
                                            Contamos con estacionamiento gratuito.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-eyecare-blue shrink-0 mt-1">
                                        <CheckCircle className="w-4 h-4" /> {/* Reusing CheckCircle as ArrowRight wasn't imported, but MapPin was. Or I can assume ArrowRight is available or import it. */}
                                    </div>
                                    <div className="w-full">
                                        <h4 className="font-bold text-eyecare-navy text-sm">Dirección e Indicaciones</h4>
                                        <p className="text-xs text-gray-600 mt-1">
                                            801 N Tustin Ave #401, Santa Ana, CA 92705
                                        </p>
                                        <a
                                            href="https://www.google.com/maps/dir/?api=1&destination=801+N+Tustin+Ave+%23401,+Santa+Ana,+CA+92705"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full mt-3 py-2 bg-eyecare-navy text-white text-center rounded-lg text-xs font-bold hover:bg-eyecare-blue transition-colors"
                                        >
                                            Obtener Indicaciones
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Insurance & Financing Section */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif font-bold text-eyecare-navy mb-4">Opciones Flexibles de Pago y Seguro</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                        Creemos que una visión clara debe ser accesible. Nuestra oficina acepta planes de visión PPO y ofrece soluciones de financiamiento para lentes esclerales.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {/* Card 1: HSA/FSA */}
                        <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl text-eyecare-navy mb-2">HSA y FSA Aceptados</h3>
                            <p className="text-sm text-gray-600">
                                Use los dólares antes de impuestos de su Cuenta de Ahorros para la Salud (HSA) o Cuenta de Gastos Flexibles (FSA) para lentes de contacto médicamente necesarios.
                            </p>
                        </div>

                        {/* Card 2: Financing */}
                        <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="font-bold text-xl text-eyecare-navy mb-2">Financiamiento CareCredit</h3>
                            <p className="text-sm text-gray-600">
                                Ofrecemos opciones de financiamiento con 0% de interés a través de CareCredit® para ayudar a que su tratamiento de queratocono sea asequible.
                            </p>
                        </div>

                        {/* Card 3: Credit Cards */}
                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                            <h3 className="font-bold text-xl text-eyecare-navy mb-2">Se Aceptan Tarjetas Principales</h3>
                            <div className="flex justify-center gap-3 mt-3 opacity-70">
                                <span className="font-bold text-slate-500">VISA</span>
                                <span className="font-bold text-slate-500">MC</span>
                                <span className="font-bold text-slate-500">AMEX</span>
                                <span className="font-bold text-slate-500">DISCOVER</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <LeadForm />

        </>
    );
}
