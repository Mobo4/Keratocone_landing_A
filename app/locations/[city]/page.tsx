
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { soCalCities, CityData } from '@/data/cities';
import LeadForm from '@/components/LeadForm';
import { MapPin, CheckCircle, ArrowRight } from 'lucide-react';
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
export default async function CityPage({ params }: Props) {
    const resolvedParams = await params;
    const city = soCalCities.find((c) => c.slug === resolvedParams.city);

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

            {/* Neighborhoods Section (if applicable) */}
            {city.neighborhoods && city.neighborhoods.length > 0 && (
                <section className="py-16 bg-white border-t border-gray-100">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-serif font-bold text-eyecare-navy mb-6 text-center">Serving Neighborhoods Throughout {city.name}</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
                            Whether you live in {city.neighborhoods[0]}, {city.neighborhoods[1]}, or anywhere else in {city.name}, our specialized keratoconus care is just a short drive away.
                            We understand that finding a true scleral lens specialist can be challenging—many patients from {city.name} have been told to "just live with it" by general optometrists.
                            Dr. Bonakdar's practice exists specifically for complex corneal cases, and patients from across {city.county} trust us with their vision restoration journey.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            {city.neighborhoods.map((neighborhood) => (
                                <div key={neighborhood} className="bg-eyecare-lighter-blue/30 p-6 rounded-xl border border-eyecare-blue/10 text-center hover:border-eyecare-blue/30 transition-colors">
                                    <h3 className="font-bold text-eyecare-navy mb-2">{neighborhood}</h3>
                                    <p className="text-sm text-gray-600">Expert keratoconus care for {neighborhood} residents</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-600 max-w-3xl mx-auto text-center mt-12 leading-relaxed">
                            Living with keratoconus in {city.name} doesn't mean you have to settle for subpar vision. While many eye doctors in {city.county} can diagnose the condition,
                            very few have the specialized training and equipment required for advanced scleral lens fitting. Our practice has invested in state-of-the-art corneal topography systems
                            and maintains relationships with the leading scleral lens manufacturers to ensure you get the best possible outcome. Patients from {city.name} appreciate that we take the time
                            to perfect each fit—this isn't a "one size fits all" approach. Your cornea is unique, and your treatment should be too.
                        </p>
                    </div>
                </section>
            )}

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
                                    title={`Map from ${city.name} to Keratoconus Vision Center`}
                                ></iframe>
                            </div>

                            <div className="space-y-4 px-2 pb-2">
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-eyecare-blue shrink-0 mt-1">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-eyecare-navy text-sm">Easy Commute from {city.name}</h4>
                                        <p className="text-xs text-gray-600 mt-1">
                                            Located just off the I-5 and SR-55 freeways, our office is a straightforward drive from {city.name}.
                                            Free parking is available immediately adjacent to the building.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-eyecare-blue shrink-0 mt-1">
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                    <div className="w-full">
                                        <h4 className="font-bold text-eyecare-navy text-sm">Address & Directions</h4>
                                        <p className="text-xs text-gray-600 mt-1">
                                            801 N Tustin Ave #401, Santa Ana, CA 92705
                                        </p>
                                        <a
                                            href="https://www.google.com/maps/dir/?api=1&destination=801+N+Tustin+Ave+%23401,+Santa+Ana,+CA+92705"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full mt-3 py-2 bg-eyecare-navy text-white text-center rounded-lg text-xs font-bold hover:bg-eyecare-blue transition-colors"
                                        >
                                            Get Driving Directions
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
