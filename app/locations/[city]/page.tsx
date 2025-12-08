
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { soCalCities, CityData } from '@/data/cities';
import LeadForm from '@/components/LeadForm';
import { MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';

interface Props {
    params: {
        city: string;
    };
}

// 1. Generate Static Params for all cities (SSG)
export async function generateStaticParams() {
    return soCalCities.map((city) => ({
        city: city.slug,
    }));
}

// 2. Dynamic Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const city = soCalCities.find((c) => c.slug === params.city);
    if (!city) return {};

    return {
        title: `Best Keratoconus Specialist in ${city.name}, CA | Scleral Lenses`,
        description: `Expert keratoconus treatment in ${city.name}, CA. Dr. Bonakdar specializes in advanced scleral lens fitting for patients in ${city.name} and ${city.county}. Schedule your consultation today.`,
        alternates: {
            canonical: `https://keratocones.com/locations/${city.slug}`,
        },
        openGraph: {
            title: `Keratoconus Specialist Serving ${city.name} | Dr. Bonakdar`,
            description: `Don't let keratoconus limit your vision. Expert scleral lens fitting and treatment for patients in ${city.name}.`,
        },
    };
}

// 3. Page Component
export default function CityPage({ params }: Props) {
    const city = soCalCities.find((c) => c.slug === params.city);

    if (!city) {
        notFound();
    }

    // Schema: LocalBusiness + FAQPage (2025 SEO Best Practice for Rich Snippets)
    const combinedSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "MedicalBusiness",
                "name": "Keratoconus Vision Center | Dr. Alexander Bonakdar",
                "telephone": "(714) 558-0641",
                "areaServed": {
                    "@type": "City",
                    "name": city.name,
                    "address": {
                        "@type": "PostalAddress",
                        "addressRegion": "CA",
                        "addressCountry": "US"
                    }
                },
                "url": `https://keratocones.com/locations/${city.slug}`
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": `Is there a keratoconus specialist near ${city.name}?`,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": `Yes. Dr. Alexander Bonakdar creates custom scleral lenses for patients in ${city.name}. While many general optometrists in ${city.county} diagnose the condition, Dr. Bonakdar specializes in complex visual restoration.`
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does insurance cover scleral lenses?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most medically necessary contact lenses for keratoconus are covered by major vision plans. Our office coordinates benefits for patients traveling from areas like Irvine, Newport Beach, and greater Los Angeles."
                        }
                    }
                ]
            }
        ]
    };

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
                    {/* Fallback pattern if no specific city image. In future, could map specific images per city. */}
                    <div className="w-full h-full bg-[url('/images/corneal-topography-blue.webp')] bg-cover bg-center" />
                </div>

                <div className="container mx-auto px-4 relative z-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6 tracking-wide backdrop-blur-sm">
                        Serving Patients in {city.name}, CA
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 max-w-4xl">
                        World-Class Keratoconus Treatment for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">{city.name}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8 leading-relaxed">
                        You don't have to travel far for expert care. Dr. Bonakdar is a nationally recognized specialist treating complex cornea cases for patients across {city.county}.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="#appointment" className="inline-flex justify-center items-center px-8 py-4 bg-white text-eyecare-navy rounded-full font-bold hover:bg-blue-50 transition-colors">
                            Book {city.name} Consultation
                        </Link>
                        <Link href="tel:7145580641" className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors">
                            Call (714) 558-0641
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why Travel Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-eyecare-navy mb-6">Why {city.name} Patients Choose Us</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-eyecare-blue shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-1">Conveniently Located in Central OC</h3>
                                        <p className="text-gray-600">
                                            We are a trusted destination for patients from {city.name}. Expert scleral lens fitting requires precision, not just proximity. It's worth the trip for the right fit.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                        <CheckCircle className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 mb-1">99% Success Rate</h3>
                                        <p className="text-gray-600">
                                            Many of our patients come from {city.name} after failing fits elsewhere. We specialize in the "impossible" cases.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map / Visual Placeholder */}
                        <div className="bg-white p-2 rounded-2xl shadow-lg -rotate-1">
                            <div className="bg-gray-200 rounded-xl h-[400px] flex items-center justify-center relative overflow-hidden">
                                {/* Placeholder for Dynamic Map showing route from City to Clinic */}
                                <div className="text-center p-8">
                                    <p className="font-bold text-xl text-gray-400 mb-2">Map from {city.name}</p>
                                    <p className="text-sm text-gray-400">801 N Tustin Ave #401, Santa Ana, CA 92705</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Insurance & Financing Section */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif font-bold text-eyecare-navy mb-4">Flexible Payment & Insurance Options</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
                        We believe clear vision should be accessible. Our office accepts PPO Vision Plans and offers financing solutions for scleral lenses.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {/* Card 1: HSA/FSA */}
                        <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                            <h3 className="font-bold text-xl text-eyecare-navy mb-2">HSA & FSA Accepted</h3>
                            <p className="text-sm text-gray-600">
                                Use your Health Savings Account (HSA) or Flexible Spending Account (FSA) pre-tax dollars for medically necessary contact lenses.
                            </p>
                        </div>

                        {/* Card 2: Financing */}
                        <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
                            <h3 className="font-bold text-xl text-eyecare-navy mb-2">CareCredit Financing</h3>
                            <p className="text-sm text-gray-600">
                                We offer 0% interest financing options through CareCredit® to help make your dedicated keratoconus treatment affordable.
                            </p>
                        </div>

                        {/* Card 3: Credit Cards */}
                        <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                            <h3 className="font-bold text-xl text-eyecare-navy mb-2">Major Cards Accepted</h3>
                            <div className="flex justify-center gap-3 mt-3 opacity-70">
                                {/* Text representation for SEO, icons can be added if available */}
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
