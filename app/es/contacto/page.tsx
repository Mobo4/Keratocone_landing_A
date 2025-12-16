import { Metadata } from 'next';
import LandingLayout from '@/components/LandingLayout';
import LeadForm from '@/components/LeadForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contacto | Centro de Visión para Queratocono',
    description: 'Agende su consulta de queratocono en Santa Ana, CA. Hablamos español. Llame al (714) 558-0641 para atención experta y recupere su visión hoy mismo.',
    openGraph: {
        title: 'Contacto | Centro de Visión para Queratocono',
        description: 'Hablamos español. Agende su consulta de queratocono hoy.',
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
            <div className="bg-white py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <span className="text-eyecare-blue font-bold tracking-widest uppercase text-sm mb-4 block">Contáctenos</span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-eyecare-navy mb-6">
                            Agenda Tu Consulta
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Da el primer paso hacia una visión clara. Nuestro equipo habla español y está listo para ayudarte.
                        </p>
                        <div className="mt-4 inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold text-sm">
                            🇲🇽 ¡Hablamos Español!
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            {/* Address */}
                            <div className="bg-eyecare-lighter-blue rounded-2xl p-8 border border-eyecare-blue/10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-eyecare-blue/10 flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6 text-eyecare-blue" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-eyecare-navy mb-2">Dirección</h3>
                                        <p className="text-gray-600">
                                            801 N Tustin Ave #401<br />
                                            Santa Ana, CA 92705
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="bg-eyecare-lighter-blue rounded-2xl p-8 border border-eyecare-blue/10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-eyecare-blue/10 flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6 text-eyecare-blue" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-eyecare-navy mb-2">Teléfono</h3>
                                        <a href="tel:+17145580641" className="text-eyecare-blue font-bold text-lg hover:underline">
                                            (714) 558-0641
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Hours */}
                            <div className="bg-eyecare-lighter-blue rounded-2xl p-8 border border-eyecare-blue/10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-eyecare-blue/10 flex items-center justify-center shrink-0">
                                        <Clock className="w-6 h-6 text-eyecare-blue" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-eyecare-navy mb-2">Horario de Oficina</h3>
                                        <div className="text-gray-600 space-y-1 text-sm">
                                            <p><span className="font-medium">Lunes - Jueves:</span> 9:00 AM - 6:00 PM</p>
                                            <p><span className="font-medium">Viernes:</span> 9:00 AM - 5:00 PM</p>
                                            <p><span className="font-medium">Sábado:</span> 9:00 AM - 2:00 PM</p>
                                            <p><span className="font-medium">Domingo:</span> Cerrado</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Directions */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-200">
                                <h3 className="font-bold text-eyecare-navy mb-4">Cómo Llegar Desde Áreas Principales</h3>
                                <div className="space-y-3 text-sm text-gray-600">
                                    <p><strong>Desde Irvine:</strong> Tome la I-5 Norte hacia CA-55 Norte. Salga en 17th Street y gire a la derecha. Gire a la izquierda en N Tustin Ave. Nuestra oficina está a la derecha.</p>
                                    <p><strong>Desde Newport Beach:</strong> Tome CA-55 Norte hacia Santa Ana. Salga en 17th Street y siga las indicaciones anteriores.</p>
                                    <p><strong>Desde Los Ángeles:</strong> Tome la I-5 Sur hacia CA-55 Sur. Salga en 17th Street y gire a la izquierda. Gire a la izquierda en N Tustin Ave.</p>
                                    <p className="text-xs text-gray-500 mt-4">Estacionamiento: Hay estacionamiento gratuito disponible en el lote del edificio. Suite 401 está en el 4to piso.</p>
                                </div>
                            </div>
                        </div>

                        {/* Lead Form */}
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-eyecare-blue/10 p-8">
                            <h2 className="text-2xl font-bold text-eyecare-navy mb-6 font-serif">Solicitar Cita</h2>
                            <LeadForm />
                        </div>
                    </div>

                    {/* Map */}
                    <div className="mt-16">
                        <div className="bg-gray-200 rounded-2xl h-[400px] overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.5!2d-117.8357!3d33.7599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sus!4v1"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación de Oficina"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </LandingLayout>
    );
}
