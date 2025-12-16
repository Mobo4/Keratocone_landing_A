'use client';

import React from 'react';
import LandingLayout from '@/components/LandingLayout';
import LandingHero from '@/components/Hero';
import LeadForm from '@/components/LeadForm';
import VisionSimulator from '@/components/VisionSimulator';
import KeratoconusQuiz from '@/components/KeratoconusQuiz';
import InsuranceSection from '@/components/InsuranceSection';
import Testimonials from '@/components/Testimonials';
import FadeIn from '@/components/FadeIn';

export default function SpanishHomeContent() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Centro de Visión para Queratocono",
        "description": "Centro líder en tratamiento de queratocono en Orange County. Lentes esclerales, restauración de visión sin cirugía.",
        "url": "https://keratocones.com/es",
        "inLanguage": "es-MX",
        "mainEntity": {
            "@type": "MedicalSpecialty",
            "name": "Tratamiento de Queratocono",
            "medicalCode": "ICD-10-CM H18.6"
        }
    };

    return (
        <LandingLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <LandingHero
                headline="Vuelve a Ver la Vida con Claridad"
                subheadline="Atención Experta para Queratocono y Lentes Esclerales. Cuando Otros Dicen No, Nosotros Decimos Sí. Confianza de CHOC y UCI Medical Center."
                benefits={[
                    "Tecnología Avanzada de Lentes Esclerales",
                    "Restauración de Visión Sin Cirugía",
                    "Especialistas en Casos Complejos",
                    "Más de 20 Años de Experiencia",
                    "Resultados Comprobados",
                    "Aceptamos Seguros"
                ]}
                ctaText="Agendar Consulta"
                ctaLink="#lead-form"
                imageSrc="/images/keratoconus-main.webp"
                phoneNumber="(714) 558-0641"
                priority={true}
            />

            {/* Credenciales y Autoridad */}
            <section className="py-24 bg-gradient-to-br from-[#faf9f6] via-[#f0eadd] to-[#e6dfd1]">
                <div className="container mx-auto px-4">
                    <FadeIn>
                        <div className="max-w-5xl mx-auto">
                            <div className="grid md:grid-cols-3 gap-12 items-center">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-eyecare-navy mb-6 shadow-2xl">
                                        <img
                                            src="/images/drbonakdar.webp"
                                            alt="Dr. Alexander Bonakdar"
                                            className="w-full h-full object-cover"
                                            style={{ objectPosition: 'center 30%' }}
                                        />
                                    </div>
                                    <p className="text-base md:text-sm text-eyecare-navy font-bold tracking-widest uppercase mb-2">Centro de Visión para Queratocono</p>
                                    <h3 className="text-2xl font-bold mb-1 font-serif text-eyecare-navy">Dr. Alexander Bonakdar</h3>
                                    <p className="text-base md:text-sm text-gray-700">Más de 20 Años de Experiencia</p>
                                </div>

                                <div className="md:col-span-2 space-y-6">
                                    <div className="flex items-start gap-3 md:gap-4">
                                        <div className="w-2 h-2 bg-eyecare-navy rounded-full mt-2 md:mt-2.5 shrink-0"></div>
                                        <p className="text-base md:text-lg text-gray-800 leading-relaxed"><span className="text-eyecare-navy font-bold">Fuente de Referencia Médica de Confianza</span> para CHOC (Hospital de Niños del Condado de Orange) y UCI Medical Center para casos complejos de queratocono</p>
                                    </div>
                                    <div className="flex items-start gap-3 md:gap-4">
                                        <div className="w-2 h-2 bg-eyecare-navy rounded-full mt-2 md:mt-2.5 shrink-0"></div>
                                        <p className="text-base md:text-lg text-gray-800 leading-relaxed"><span className="text-eyecare-navy font-bold">Tecnología Avanzada:</span> Topografía corneal y equipo de diagnóstico de última generación para los ajustes más desafiantes</p>
                                    </div>
                                    <div className="flex items-start gap-3 md:gap-4">
                                        <div className="w-2 h-2 bg-eyecare-navy rounded-full mt-2 md:mt-2.5 shrink-0"></div>
                                        <p className="text-base md:text-lg text-gray-800 leading-relaxed"><span className="text-eyecare-navy font-bold">Experiencia Especializada:</span> Cuando otros doctores dicen que tu caso es "demasiado difícil," ahí es donde comienza nuestra experiencia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Sección Problema/Agitación */}
            <section id="learn-more" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <FadeIn>
                    <div className="lg:text-center mb-16">
                        <h2 className="text-xs md:text-sm text-red-600 font-bold tracking-widest uppercase mb-3">¿Te Han Dicho Que Tu Caso Es Demasiado Difícil?</h2>
                        <p className="text-3xl md:text-4xl leading-tight font-bold text-eyecare-navy sm:text-5xl font-serif mb-4 md:mb-6">
                            No Has Agotado Tus Opciones
                        </p>
                        <p className="max-w-3xl text-lg md:text-xl text-gray-600 lg:mx-auto leading-relaxed">
                            Si te han dicho "no hay nada más que podamos hacer" o "tus córneas son demasiado irregulares," has llegado al lugar correcto. Nos especializamos en los casos que otros rechazan.
                        </p>
                    </div>

                    <div className="mt-16">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-12">
                            <div className="relative bg-red-50 p-6 md:p-10 rounded-3xl border border-red-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <dt>
                                    <p className="text-xl md:text-2xl leading-8 font-bold text-eyecare-navy font-serif mb-3 md:mb-4">La Realidad del Queratocono Avanzado</p>
                                </dt>
                                <dd className="text-base md:text-lg text-gray-600 leading-relaxed">
                                    Tu córnea se ha adelgazado y abultado en forma de cono, dispersando la luz y causando distorsión severa. Los lentes de contacto regulares se resbalan. Los anteojos apenas ayudan. Te han dicho que "esperes un trasplante."
                                </dd>
                            </div>
                            <div className="relative bg-eyecare-lighter-blue p-6 md:p-10 rounded-3xl border border-eyecare-blue/20 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <dt>
                                    <p className="text-xl md:text-2xl leading-8 font-bold text-eyecare-navy font-serif mb-3 md:mb-4">La Solución: Experiencia en Lentes Esclerales</p>
                                </dt>
                                <dd className="text-base md:text-lg text-gray-600 leading-relaxed">
                                    Los lentes esclerales personalizados se arquean sobre tu córnea irregular, creando una superficie óptica perfectamente lisa. Con nuestra tecnología avanzada de ajuste y experiencia en casos difíciles, logramos visión clara cuando otros han fallado.
                                </dd>
                            </div>
                        </dl>
                    </div>
                </FadeIn>
            </section>

            {/* Testimonios */}
            <Testimonials />

            {/* Tecnología Avanzada */}
            <section className="py-24 bg-eyecare-lighter-blue">
                <div className="container mx-auto px-4">
                    <FadeIn>
                        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                            <div>
                                <h2 className="text-3xl font-bold text-eyecare-navy font-serif mb-6">Tecnología de Mapeo de Precisión</h2>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    No adivinamos. Mapeamos tu córnea con precisión microscópica usando topografía avanzada. Esto nos permite diseñar un lente que se arquea sobre la forma irregular de "cono" de tu ojo, proporcionando una nueva superficie óptica perfectamente lisa.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-eyecare-blue rounded-full"></div>
                                        <span className="text-gray-700 font-medium">Mapas Detallados de Elevación Corneal</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-eyecare-blue rounded-full"></div>
                                        <span className="text-gray-700 font-medium">Óptica de Frente de Onda Personalizada</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-eyecare-blue rounded-full"></div>
                                        <span className="text-gray-700 font-medium">Precisión de Ajuste Sub-Micrón</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative">
                                <div className="bg-white p-4 rounded-2xl shadow-xl border border-eyecare-blue/10 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                                    <div className="aspect-[4/3] bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden relative">
                                        <img
                                            src="/images/topography.jpg"
                                            alt="Topografía Corneal"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <p className="text-center mt-4 text-sm font-bold text-eyecare-navy">Mapeo Diagnóstico Avanzado</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Sección de Seguros */}
            <InsuranceSection />

            {/* Why Choose Us */}
            <section className="bg-gradient-to-r from-white to-eyecare-lighter-blue/30 py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <FadeIn>
                        <div className="lg:text-center mb-16">
                            <h2 className="text-4xl font-bold text-eyecare-navy font-serif mb-6">Centro de Visión para Queratocono</h2>
                            <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
                                Pacientes viajan desde todo el país para ver al Dr. Bonakdar. Cuando CHOC y UCI Medical Center encuentran casos complejos, nos refieren a nosotros.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                { title: "Especialista en Ajustes Difíciles", desc: "Sobresalimos donde otros luchan. Queratocono severo, córneas post-quirúrgicas y astigmatismo irregular—estos casos 'imposibles' son nuestra especialidad.", border: "border-eyecare-blue" },
                                { title: "Tecnología de Diagnóstico Avanzada", desc: "Sistemas de topografía y mapeo corneal de última generación proporcionan precisión microscópica para el diseño de lentes esclerales personalizados.", border: "border-eyecare-blue" },
                                { title: "Red de Referencia Médica", desc: "Confianza de CHOC y UCI Medical Center. Cuando sus pacientes con queratocono necesitan ajuste experto de lentes, nos los envían.", border: "border-eyecare-blue" },
                                { title: "Historial Comprobado", desc: "Más de 20 años de ajustes exitosos. Pacientes a quienes se les dijo 'no hay nada más que hacer' logran visión 20/20 o mejor.", border: "border-green-600" },
                                { title: "Atención Integral", desc: "Desde la consulta inicial hasta el monitoreo continuo, aseguramos el éxito a largo plazo y la salud corneal con cada ajuste.", border: "border-green-600" },
                                { title: "⚠️ Disponibilidad Limitada", desc: "Debido a la complejidad de los casos que manejamos, aceptamos un número limitado de nuevos pacientes cada mes. Agenda tu consulta ahora.", border: "border-green-600", font: "font-semibold" }
                            ].map((item, idx) => (
                                <div key={idx} className={`bg-white overflow-hidden shadow-xl rounded-2xl border-t-4 ${item.border} hover:-translate-y-1 transition-transform duration-300`}>
                                    <div className="px-8 py-10">
                                        <h3 className="text-xl font-bold text-eyecare-navy mb-4 font-serif">{item.title}</h3>
                                        <p className={`text-base text-gray-600 leading-relaxed ${item.font || ''}`}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Quiz Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <FadeIn>
                        <KeratoconusQuiz />
                    </FadeIn>
                </div>
            </section>

            {/* Formulario de Contacto */}
            <section id="lead-form" className="py-12 md:py-24 bg-eyecare-lighter-blue">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn>
                        <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-eyecare-blue/10 max-w-3xl mx-auto">
                            <div className="p-6 md:p-12 lg:p-16">
                                <LeadForm />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </LandingLayout>
    );
}
