'use client';

import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { MapPin, CheckCircle, Clock, Phone, Shield, Star, Eye, ArrowRight, Calendar, CreditCard, Users } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import LeadForm from '@/components/LeadForm';

const tustinFAQs = [
    {
        question: "Is there a keratoconus specialist in Tustin or nearby?",
        answer: "Yes. Dr. Alexander Bonakdar at the Keratoconus Vision Center is located in Santa Ana at 801 N Tustin Ave #401, which is directly adjacent to Tustin. Most Tustin residents reach the office in approximately 8 to 12 minutes. Dr. Bonakdar has treated over 500 keratoconus patients with specialty contact lenses over 35+ years of practice and receives referrals from CHOC and UCI Medical Center for complex corneal cases."
    },
    {
        question: "Can children and teenagers in Tustin be evaluated for keratoconus?",
        answer: "Yes. Keratoconus is most commonly diagnosed in the teenage years, and early detection is critical for preventing progression. Dr. Bonakdar regularly evaluates adolescents from Tustin and throughout Orange County. Children's Hospital of Orange County (CHOC) refers pediatric keratoconus cases to our practice. If your child has been told they have rapidly changing prescriptions or irregular astigmatism, a corneal topography evaluation can determine whether keratoconus is present."
    },
    {
        question: "How long is the drive from Tustin to the Keratoconus Vision Center?",
        answer: "The Keratoconus Vision Center is approximately 8 to 12 minutes from most Tustin neighborhoods. From Old Town Tustin, head north on Tustin Avenue; the office is located at the corner of Tustin Avenue and 17th Street. From Tustin Ranch, take the SR-55 to the Edinger Avenue or 1st Street exit. Free parking is available immediately adjacent to the building."
    },
    {
        question: "My child was recently diagnosed with keratoconus. What should I do first?",
        answer: "Schedule a comprehensive corneal evaluation as soon as possible. Early detection allows for interventions that can slow or halt progression, including corneal cross-linking and specialty contact lens fitting. Dr. Bonakdar provides detailed corneal topography mapping to establish a baseline, discusses management options appropriate for your child's age and stage of keratoconus, and creates a monitoring schedule to track any changes over time. Call (714) 558-0641 to schedule."
    },
    {
        question: "Does the Keratoconus Vision Center accept insurance from Tustin families?",
        answer: "Yes. We accept most major vision and medical insurance plans used by Tustin families, including VSP, EyeMed, Blue Shield of California, Anthem Blue Cross, United Healthcare, Cigna, Aetna, Medicare, and Tricare. Scleral lenses for keratoconus are typically classified as medically necessary, which provides broader coverage than standard contact lens benefits. We verify your coverage before the first visit."
    },
    {
        question: "What is the wait time for a keratoconus appointment from Tustin?",
        answer: "Same-week appointments are available. Unlike university eye centers where keratoconus consultations can require a 3 to 6 month wait, Dr. Bonakdar offers direct specialist access with minimal wait times. Given our proximity to Tustin, many patients are able to schedule and attend their initial evaluation within days of calling. Phone: (714) 558-0641."
    }
];

export default function SiloTustin() {
    const faqSchema = {
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
                    "name": "Tustin",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Tustin",
                        "addressRegion": "CA",
                        "addressCountry": "US"
                    }
                },
                "url": "https://keratocones.com/locations/tustin"
            },
            {
                "@type": "FAQPage",
                "mainEntity": tustinFAQs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            }
        ]
    };

    return (
        <>
            <Script
                id="tustin-silo-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* ──────────────────────────────────────────────────────────────── */}
            {/* Section 1: City-Specific Keratoconus Overview                   */}
            {/* ──────────────────────────────────────────────────────────────── */}
            <section className="relative bg-eyecare-navy text-white py-20 lg:py-28 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />
                <div className="absolute inset-0 z-0 opacity-30">
                    <div className="w-full h-full bg-[url('/images/corneal-topography-blue.webp')] bg-cover bg-center" />
                </div>

                <div className="container mx-auto px-4 relative z-20">
                    <FadeIn>
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6 tracking-wide backdrop-blur-sm">
                            Serving Patients in Tustin, CA
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 max-w-4xl">
                            Keratoconus Treatment for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Tustin</span> Families
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-4 leading-relaxed">
                            Tustin is a family-oriented community of approximately 80,000 residents in the heart of Orange County. With its blend of historic neighborhoods like Old Town Tustin and newer master-planned developments such as Tustin Ranch and Tustin Legacy, the city draws families with school-age children and young professionals who value accessible, high-quality healthcare.
                        </p>
                        <p className="text-lg text-gray-400 max-w-3xl mb-8 leading-relaxed">
                            Keratoconus is most commonly diagnosed in teenagers and young adults, making family awareness and early detection particularly important for the Tustin community. Parents who notice their children squinting, complaining about night vision, or requiring frequent prescription changes should consider a corneal evaluation. The Keratoconus Vision Center is located directly adjacent to Tustin on North Tustin Avenue, making it one of the most accessible specialty eye care practices for Tustin families.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="#appointment" className="inline-flex justify-center items-center px-8 py-4 bg-white text-eyecare-navy rounded-full font-bold hover:bg-blue-50 transition-colors">
                                Book Tustin Consultation
                            </Link>
                            <Link href="tel:7145580641" className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors">
                                Call (714) 558-0641
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ──────────────────────────────────────────────────────────────── */}
            {/* Section 2: Dr. Bonakdar's Service to Tustin                     */}
            {/* ──────────────────────────────────────────────────────────────── */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <FadeIn>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mb-6">
                                    Your Tustin Neighbor: Expert Keratoconus Care Minutes Away
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Dr. Alexander Bonakdar's practice at 801 N Tustin Avenue is located at the Tustin-Santa Ana border, making it the closest dedicated keratoconus center to the Tustin community. Most Tustin residents reach the office in under 10 minutes, with free parking available directly adjacent to the building. For families managing children's after-school schedules, this proximity makes regular monitoring appointments practical and convenient.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Dr. Bonakdar has served Tustin-area families for over 35 years, treating more than 500 keratoconus patients with specialty contact lenses and corneal management. His practice receives referrals from Children's Hospital of Orange County (CHOC) for pediatric keratoconus cases, and from UCI Medical Center for complex adult corneal disease. Tustin families trust his practice because of the combination of deep expertise, personal attention, and genuine accessibility.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                    From Old Town Tustin, drive north on Tustin Avenue approximately two miles. From Tustin Ranch, take the SR-55 south to the Edinger or 1st Street exit and head east on Tustin Avenue. From Tustin Legacy, head north on Red Hill Avenue to Tustin Avenue.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-eyecare-lighter-blue/50 p-4 rounded-xl text-center">
                                        <p className="text-3xl font-bold text-eyecare-blue">~10</p>
                                        <p className="text-sm text-gray-600 mt-1">Minutes from Tustin</p>
                                    </div>
                                    <div className="bg-eyecare-lighter-blue/50 p-4 rounded-xl text-center">
                                        <p className="text-3xl font-bold text-eyecare-blue">Same</p>
                                        <p className="text-sm text-gray-600 mt-1">Week Appointments</p>
                                    </div>
                                    <div className="bg-eyecare-lighter-blue/50 p-4 rounded-xl text-center">
                                        <p className="text-3xl font-bold text-eyecare-blue">500+</p>
                                        <p className="text-sm text-gray-600 mt-1">Keratoconus Cases</p>
                                    </div>
                                    <div className="bg-eyecare-lighter-blue/50 p-4 rounded-xl text-center">
                                        <p className="text-3xl font-bold text-eyecare-blue">35+</p>
                                        <p className="text-sm text-gray-600 mt-1">Years Experience</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="bg-white p-4 rounded-3xl shadow-xl border border-gray-100 rotate-1 hover:rotate-0 transition-transform duration-500">
                                <div className="bg-gray-100 rounded-2xl h-[300px] w-full overflow-hidden relative">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.598687798369!2d-117.83789092449734!3d33.75990597326887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd95130700001%3A0x6c6e6e6e6e6e6e6e!2s801%20N%20Tustin%20Ave%20%23401%2C%20Santa%20Ana%2C%20CA%2092705!5e0!3m2!1sen!2sus!4v1709234567890!5m2!1sen!2sus"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Map from Tustin to Keratoconus Vision Center in Santa Ana"
                                    />
                                </div>
                                <div className="mt-4 px-2 pb-2">
                                    <div className="flex items-start gap-3 mb-3">
                                        <MapPin className="w-5 h-5 text-eyecare-blue shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-bold text-eyecare-navy text-sm">801 N Tustin Ave #401, Santa Ana, CA 92705</p>
                                            <p className="text-xs text-gray-500 mt-1">From Tustin: North on Tustin Ave or SR-55 to Edinger/1st St</p>
                                        </div>
                                    </div>
                                    <a
                                        href="https://www.google.com/maps/dir/Tustin,+CA/801+N+Tustin+Ave+%23401,+Santa+Ana,+CA+92705"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full py-3 bg-eyecare-navy text-white text-center rounded-lg text-sm font-bold hover:bg-eyecare-blue transition-colors"
                                    >
                                        Get Directions from Tustin
                                    </a>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ──────────────────────────────────────────────────────────────── */}
            {/* Tustin Neighborhoods Served                                     */}
            {/* ──────────────────────────────────────────────────────────────── */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <FadeIn>
                        <h2 className="text-3xl font-serif font-bold text-eyecare-navy mb-4 text-center">
                            Serving Tustin Neighborhoods and Families
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-10">
                            From the historic tree-lined streets of Old Town to the new developments at Tustin Legacy, we provide dedicated keratoconus care to families across every Tustin neighborhood.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                            {['Old Town Tustin', 'Tustin Ranch', 'Tustin Legacy', 'Tustin Meadows', 'Laurelwood', 'Red Hill', 'Browning', 'Foothill', 'Cowan Heights'].map((neighborhood) => (
                                <div key={neighborhood} className="bg-white p-5 rounded-xl border border-eyecare-blue/10 text-center hover:border-eyecare-blue/30 hover:shadow-md transition-all">
                                    <h3 className="font-bold text-eyecare-navy text-sm">{neighborhood}</h3>
                                    <p className="text-xs text-gray-500 mt-1">Keratoconus care available</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ──────────────────────────────────────────────────────────────── */}
            {/* Section 3: Keratoconus Education                                */}
            {/* ──────────────────────────────────────────────────────────────── */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mb-6">
                            Keratoconus Education for Tustin Families
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            Keratoconus is a progressive corneal condition in which the normally round cornea thins and bulges into an irregular cone shape. This distorts how light is focused on the retina, producing blurred, ghosted, or doubled vision that glasses and standard soft contact lenses cannot adequately correct. Because keratoconus most commonly begins during the teenage years, parental awareness and early screening are among the most important factors in preventing long-term visual impairment.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-eyecare-navy mb-4">Signs Parents Should Watch For</h3>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                As a family-centered community, Tustin has a high proportion of school-age children and adolescents, the age group most vulnerable to keratoconus onset. Parents and caregivers should be aware of the following warning signs, especially if there is a family history of keratoconus or frequent eye rubbing:
                            </p>
                            <ul className="space-y-3 text-gray-700 text-lg">
                                {[
                                    "Frequent complaints about blurry or distorted vision, especially at school",
                                    "Needing new glasses prescriptions every few months",
                                    "Difficulty seeing the board or screen clearly from a normal distance",
                                    "Sensitivity to bright lights or fluorescent classroom lighting",
                                    "Squinting, head tilting, or sitting very close to screens",
                                    "Complaints about halos or streaks around lights during evening activities",
                                    "Rubbing eyes frequently, which can accelerate keratoconus progression"
                                ].map((symptom, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-eyecare-blue rounded-full mt-2.5 shrink-0" />
                                        {symptom}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-eyecare-navy mb-4">Understanding the Four Stages</h3>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Keratoconus is classified into four progressive stages. Understanding where your child or family member falls on this spectrum helps guide treatment decisions and monitoring frequency:
                            </p>
                            <div className="space-y-4">
                                {[
                                    { stage: "Stage 1 - Early (Forme Fruste)", desc: "Subtle corneal irregularity detected by topographic imaging, often before symptoms become noticeable. This is the most important stage for early intervention. Glasses may still provide reasonable vision." },
                                    { stage: "Stage 2 - Moderate", desc: "Corneal steepening becomes more pronounced. Glasses are no longer adequate for clear vision. Specialty contact lenses are introduced, and corneal cross-linking should be strongly considered to prevent further progression." },
                                    { stage: "Stage 3 - Advanced", desc: "Significant thinning and distortion of the cornea. Scleral lenses become the primary method of visual rehabilitation. The cornea may begin to show early scarring in some patients." },
                                    { stage: "Stage 4 - Severe", desc: "Marked corneal scarring and structural compromise. Contact lens fitting is technically difficult. Corneal transplantation may be necessary if lens-based correction cannot restore functional vision." }
                                ].map((item, i) => (
                                    <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                        <h4 className="font-bold text-eyecare-navy mb-2">{item.stage}</h4>
                                        <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                            <h3 className="text-xl font-bold text-eyecare-navy mb-3 flex items-center gap-2">
                                <Eye className="w-6 h-6 text-eyecare-blue" />
                                Why Early Detection Matters for Tustin Families
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                The single most important factor in keratoconus outcomes is how early the condition is identified. When detected at Stage 1 or early Stage 2, corneal cross-linking can strengthen the corneal tissue and prevent progression to advanced disease. This is especially critical for teenagers, whose keratoconus is most likely to progress rapidly. For Tustin families, the proximity of our practice means that regular monitoring appointments are easy to schedule around school and extracurricular activities. A baseline corneal topography takes less than 30 minutes and can provide years of peace of mind.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ──────────────────────────────────────────────────────────────── */}
            {/* Section 4: Treatment Options                                    */}
            {/* ──────────────────────────────────────────────────────────────── */}
            <section className="py-20 bg-eyecare-lighter-blue">
                <div className="max-w-4xl mx-auto px-4">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mb-4">
                            Treatment Options for Tustin Keratoconus Patients
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-10">
                            Every keratoconus patient receives an individualized treatment plan based on their corneal shape, stage of disease, age, and visual requirements. For Tustin families with children or teenagers, treatment planning also considers the likelihood of progression and the importance of protecting the cornea during the years of most active change.
                        </p>
                    </FadeIn>

                    <div className="space-y-6">
                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-eyecare-blue shrink-0">
                                        <Star className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-eyecare-navy mb-3">Scleral Contact Lenses (Primary Treatment)</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Scleral lenses are large-diameter rigid gas permeable lenses that vault over the entire cornea and rest on the sclera. The fluid reservoir between the lens and cornea creates a uniform optical surface that corrects the irregular astigmatism caused by keratoconus. For Tustin patients of all ages, scleral lenses provide stable, clear vision throughout the day. They are well-tolerated by teenagers and adults alike, and the large diameter means they are less likely to dislodge during sports or physical activity compared to smaller lenses.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.15}>
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-bold text-eyecare-navy mb-3">Hybrid Contact Lenses</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Hybrid lenses feature a rigid gas permeable center surrounded by a soft outer skirt. They offer good optical correction with a comfort level that some patients, particularly younger wearers, prefer over full rigid lenses. Hybrids can be a good transitional option for teenagers who are new to specialty contact lenses and may need time to adjust to the concept of lens wear before moving to scleral lenses if their condition progresses.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-bold text-eyecare-navy mb-3">Rigid Gas Permeable (RGP) Lenses</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    RGP lenses are small, rigid lenses that sit on the cornea and create a smooth optical surface for light refraction. They are effective for early to moderate keratoconus and offer clear optics at a lower cost than scleral lenses. For Tustin families managing treatment costs, RGP lenses can be an appropriate first-line option when the keratoconus is mild enough to permit corneal contact.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.25}>
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-eyecare-navy mb-3">Corneal Cross-Linking Co-Management</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Corneal cross-linking is especially important for younger patients whose keratoconus is still progressing. The procedure uses riboflavin and controlled UV light to strengthen corneal collagen, slowing or halting the thinning process. Dr. Bonakdar co-manages cross-linking patients with corneal surgeons, providing pre-operative corneal mapping, post-operative care, and ongoing contact lens management. For Tustin families with teenagers diagnosed with progressive keratoconus, cross-linking is often the most impactful intervention available.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-bold text-eyecare-navy mb-3">Surgical Alternatives</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    When contact lenses can no longer provide adequate visual rehabilitation, surgical options including intracorneal ring segments (Intacs) and corneal transplantation may be discussed. Dr. Bonakdar coordinates with corneal surgeons throughout Orange County and provides post-surgical contact lens management, including fitting scleral lenses over corneal transplants. The goal of surgical intervention is to restore the corneal shape sufficiently to allow effective lens-based correction.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ──────────────────────────────────────────────────────────────── */}
            {/* Section 5: Why Choose Dr. Bonakdar                              */}
            {/* ──────────────────────────────────────────────────────────────── */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <FadeIn>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mb-6 text-center">
                                Why Tustin Families Choose Dr. Bonakdar
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
                                Families managing keratoconus need a specialist who combines clinical expertise with genuine accessibility. For Tustin residents, Dr. Bonakdar's practice offers both.
                            </p>
                        </FadeIn>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: <Star className="w-6 h-6" />,
                                    title: "500+ Keratoconus Cases",
                                    desc: "Over 500 keratoconus patients successfully treated with specialty contact lenses, including many of the most complex pediatric and adult cases in Orange County."
                                },
                                {
                                    icon: <Shield className="w-6 h-6" />,
                                    title: "35+ Years Experience",
                                    desc: "More than three decades of dedicated corneal specialty practice. This depth of experience is particularly important for managing keratoconus in children and teenagers."
                                },
                                {
                                    icon: <Clock className="w-6 h-6" />,
                                    title: "Same-Week Scheduling",
                                    desc: "No 3-6 month university wait. Tustin families can typically schedule initial evaluations within the same week, minimizing disruption to school and work schedules."
                                },
                                {
                                    icon: <Users className="w-6 h-6" />,
                                    title: "CHOC Referral Center",
                                    desc: "Children's Hospital of Orange County refers pediatric keratoconus cases to our practice. Parents can be confident their child is receiving the highest level of specialized care."
                                },
                                {
                                    icon: <Eye className="w-6 h-6" />,
                                    title: "One Doctor, Every Visit",
                                    desc: "Dr. Bonakdar personally sees every patient at every appointment. For families, this consistency means your child builds a relationship with a single trusted specialist."
                                },
                                {
                                    icon: <MapPin className="w-6 h-6" />,
                                    title: "Minutes from Tustin",
                                    desc: "Located on North Tustin Avenue at the Tustin-Santa Ana border. Most Tustin families reach the office in under 10 minutes, making regular monitoring appointments practical."
                                }
                            ].map((item, i) => (
                                <FadeIn key={i} delay={i * 0.1}>
                                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-eyecare-blue/30 transition-colors h-full">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-eyecare-blue mb-4">
                                            {item.icon}
                                        </div>
                                        <h3 className="font-bold text-lg text-eyecare-navy mb-2">{item.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ──────────────────────────────────────────────────────────────── */}
            {/* Section 6: Insurance & Cost                                     */}
            {/* ──────────────────────────────────────────────────────────────── */}
            <section className="py-16 bg-eyecare-warm border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <FadeIn>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl font-serif font-bold text-eyecare-navy mb-4 text-center">
                                Insurance & Payment Options for Tustin Families
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-10">
                                We understand that managing keratoconus treatment costs is a concern for families. We accept most major insurance plans and offer flexible payment options. Scleral lenses for keratoconus are classified as medically necessary by most insurers, often providing broader coverage than standard contact lens benefits.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-bold text-eyecare-blue mb-4">Vision Plans</h3>
                                    <ul className="space-y-3">
                                        {["VSP (Vision Service Plan)", "EyeMed", "Davis Vision", "Spectera", "Superior Vision", "Avesis"].map((plan, i) => (
                                            <li key={i} className="flex items-center text-gray-700">
                                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                                <span className="font-medium">{plan}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                    <h3 className="text-xl font-bold text-eyecare-navy mb-4">Medical Plans</h3>
                                    <ul className="space-y-3">
                                        {["Medicare", "Blue Shield of California", "Anthem Blue Cross", "United Healthcare", "Cigna", "Aetna", "Tricare"].map((plan, i) => (
                                            <li key={i} className="flex items-center text-gray-700">
                                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                                                <span className="font-medium">{plan}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center">
                                    <h4 className="font-bold text-eyecare-navy mb-2">HSA & FSA Accepted</h4>
                                    <p className="text-sm text-gray-600">Pre-tax health savings can cover keratoconus evaluations and medically necessary lenses for the whole family.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                                    <h4 className="font-bold text-eyecare-navy mb-2">CareCredit Financing</h4>
                                    <p className="text-sm text-gray-600">0% interest financing through CareCredit helps families manage treatment costs over time.</p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 text-center">
                                    <h4 className="font-bold text-eyecare-navy mb-2">Major Cards Accepted</h4>
                                    <div className="flex justify-center gap-3 mt-2">
                                        <span className="font-bold text-slate-500 text-sm">VISA</span>
                                        <span className="font-bold text-slate-500 text-sm">MC</span>
                                        <span className="font-bold text-slate-500 text-sm">AMEX</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ──────────────────────────────────────────────────────────────── */}
            {/* Section 7: FAQ                                                  */}
            {/* ──────────────────────────────────────────────────────────────── */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <FadeIn>
                        <h2 className="text-3xl font-serif font-bold text-eyecare-navy mb-4 text-center">
                            Frequently Asked Questions: Keratoconus Care Near Tustin
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
                            Common questions from Tustin families about keratoconus screening, treatment, and scheduling for children and adults.
                        </p>
                    </FadeIn>
                    <dl className="space-y-6">
                        {tustinFAQs.map((faq, index) => (
                            <FadeIn key={index} delay={index * 0.08}>
                                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-eyecare-blue/30 transition-colors">
                                    <dt className="text-lg font-bold text-eyecare-navy mb-3">{faq.question}</dt>
                                    <dd className="text-gray-600 leading-relaxed">{faq.answer}</dd>
                                </div>
                            </FadeIn>
                        ))}
                    </dl>
                </div>
            </section>

            {/* ──────────────────────────────────────────────────────────────── */}
            {/* Section 8: Schedule Appointment CTA                             */}
            {/* ──────────────────────────────────────────────────────────────── */}
            <section className="py-20 bg-gradient-to-br from-eyecare-navy to-eyecare-dark-blue text-white">
                <div className="container mx-auto px-4">
                    <FadeIn>
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                                Book Your Family's Keratoconus Evaluation
                            </h2>
                            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                                Same-week appointments available for Tustin families. Whether you need a first-time evaluation for your teenager or ongoing management for an adult family member, we are here to help. Our office is less than 10 minutes from most Tustin neighborhoods.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <a href="tel:7145580641" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-eyecare-navy rounded-full font-bold hover:bg-blue-50 transition-colors">
                                    <Phone className="w-5 h-5" />
                                    (714) 558-0641
                                </a>
                                <Link href="#appointment" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors">
                                    <Calendar className="w-5 h-5" />
                                    Book Online
                                </Link>
                            </div>
                            <div className="text-sm text-gray-400 space-y-1">
                                <p className="flex items-center justify-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    801 N Tustin Ave #401, Santa Ana, CA 92705
                                </p>
                                <p className="flex items-center justify-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    Mon-Fri 9:00 AM - 5:00 PM | Sat by appointment
                                </p>
                                <p className="flex items-center justify-center gap-2">
                                    <ArrowRight className="w-4 h-4" />
                                    ~10 minutes from Tustin via Tustin Ave or SR-55
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Lead Form */}
            <section id="appointment" className="py-12 md:py-24 bg-eyecare-lighter-blue">
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
        </>
    );
}
