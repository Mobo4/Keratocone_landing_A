'use client';

import React from 'react';
import Link from 'next/link';
import Script from 'next/script';
import { MapPin, CheckCircle, Clock, Phone, Shield, Star, Eye, ArrowRight, Calendar, CreditCard, Waves } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import LeadForm from '@/components/LeadForm';

const newportFAQs = [
    {
        question: "Where is the nearest keratoconus specialist to Newport Beach?",
        answer: "Dr. Alexander Bonakdar at the Keratoconus Vision Center in Santa Ana is the closest dedicated keratoconus specialist to Newport Beach. The office is located at 801 N Tustin Ave #401, Santa Ana, CA 92705, approximately 20 minutes from most Newport Beach neighborhoods via the SR-55 north or the 73 Toll Road. Dr. Bonakdar has treated over 500 keratoconus patients with specialty contact lenses over 35+ years of practice."
    },
    {
        question: "Can I wear scleral lenses for water sports and beach activities?",
        answer: "Scleral lenses offer some advantages for active Newport Beach lifestyles. Because they vault over the cornea and rest on the sclera, they are more stable than smaller lenses during physical activity and are less likely to dislodge. However, it is generally recommended to avoid swimming or water sports while wearing any contact lenses due to infection risk. Dr. Bonakdar can discuss strategies for managing keratoconus vision correction around your Newport Beach lifestyle, including daily lens care routines that accommodate beach and outdoor activities."
    },
    {
        question: "How long is the drive from Newport Beach to the Keratoconus Vision Center?",
        answer: "Most Newport Beach residents reach our Santa Ana office in approximately 18 to 25 minutes. Patients from Corona del Mar, Newport Coast, and Fashion Island typically take the SR-73 Toll Road north to the SR-55 or the surface streets through Costa Mesa. Those from Balboa Island and Balboa Peninsula often take PCH to the SR-55 north. Free parking is available directly adjacent to the building."
    },
    {
        question: "Do you offer premium scleral lens options for Newport Beach patients?",
        answer: "Yes. We fit a range of scleral lens designs from leading manufacturers, including custom-designed lenses that optimize both visual acuity and comfort for individual corneal shapes. The lens selection is based on your specific corneal topography, not on a \"premium vs. standard\" tier. Every keratoconus patient at our practice receives the lens that best matches their corneal morphology and visual demands, using state-of-the-art diagnostic imaging."
    },
    {
        question: "What insurance plans do Newport Beach patients typically use for keratoconus?",
        answer: "Many Newport Beach patients carry medical insurance through private employers or individual plans. We accept Blue Shield of California, Anthem Blue Cross, United Healthcare, Cigna, Aetna, and Medicare, as well as vision plans including VSP and EyeMed. Scleral lenses for keratoconus are classified as medically necessary by most insurers, which may provide coverage through medical insurance even when vision plan benefits are limited. We verify your coverage before your first visit."
    },
    {
        question: "How soon can I get a keratoconus appointment from Newport Beach?",
        answer: "Same-week appointments are available at the Keratoconus Vision Center. While university-based eye centers such as UCI Health may have wait times of 3 to 6 months for keratoconus consultations, Dr. Bonakdar offers direct specialist access with no extended wait. Call (714) 558-0641 to schedule your evaluation."
    }
];

export default function SiloNewport() {
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
                    "name": "Newport Beach",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Newport Beach",
                        "addressRegion": "CA",
                        "addressCountry": "US"
                    }
                },
                "url": "https://keratocones.com/locations/newport-beach"
            },
            {
                "@type": "FAQPage",
                "mainEntity": newportFAQs.map(faq => ({
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
                id="newport-silo-schema"
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
                            Serving Patients in Newport Beach, CA
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 max-w-4xl">
                            Keratoconus Treatment for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Newport Beach</span> Residents
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-4 leading-relaxed">
                            Newport Beach is one of Orange County's most distinguished coastal communities, known for its harbor, world-class dining, and active outdoor lifestyle. With a population that values health, precision, and quality of care, Newport Beach residents expect the highest standard from their medical providers, including their eye care specialists.
                        </p>
                        <p className="text-lg text-gray-400 max-w-3xl mb-8 leading-relaxed">
                            For residents who spend time sailing, surfing, playing golf, or simply enjoying the coastal environment, clear and reliable vision is not optional. Keratoconus can profoundly affect distance acuity, depth perception, and tolerance to bright light and glare, all of which are critical for the activities that define life in Newport Beach. The sun reflecting off water, the shifting light conditions along the coast, and the demand for sharp vision during recreation make proper keratoconus management especially important for this community.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="#appointment" className="inline-flex justify-center items-center px-8 py-4 bg-white text-eyecare-navy rounded-full font-bold hover:bg-blue-50 transition-colors">
                                Book Newport Beach Consultation
                            </Link>
                            <Link href="tel:7145580641" className="inline-flex justify-center items-center px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-colors">
                                Call (714) 558-0641
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ──────────────────────────────────────────────────────────────── */}
            {/* Section 2: Dr. Bonakdar's Service to Newport Beach              */}
            {/* ──────────────────────────────────────────────────────────────── */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <FadeIn>
                            <div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mb-6">
                                    Serving Newport Beach Patients with Precision and Expertise
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Dr. Alexander Bonakdar has provided keratoconus evaluation and specialty contact lens management to Newport Beach patients for over 35 years. His practice in central Santa Ana is approximately 20 minutes from most Newport Beach neighborhoods, and he has become a trusted name among families across the Newport-Costa Mesa corridor who require expert corneal care.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    Many Newport Beach patients are referred by their primary optometrists or ophthalmologists after standard contact lenses fail to provide adequate vision correction. Dr. Bonakdar's practice functions as a regional referral center, receiving complex cases from both CHOC (Children's Hospital of Orange County) and UCI Medical Center. The depth of experience this provides is unmatched in the region.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                    From Corona del Mar, the most direct route is the SR-73 Toll Road north to the SR-55 northbound, exiting at Edinger or 1st Street. From Balboa Peninsula and Fashion Island, the SR-55 north to Tustin Avenue is typically the fastest path. Free parking is available immediately adjacent to the building.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-eyecare-lighter-blue/50 p-4 rounded-xl text-center">
                                        <p className="text-3xl font-bold text-eyecare-blue">~20</p>
                                        <p className="text-sm text-gray-600 mt-1">Minutes from Newport</p>
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
                                        title="Map from Newport Beach to Keratoconus Vision Center in Santa Ana"
                                    />
                                </div>
                                <div className="mt-4 px-2 pb-2">
                                    <div className="flex items-start gap-3 mb-3">
                                        <MapPin className="w-5 h-5 text-eyecare-blue shrink-0 mt-0.5" />
                                        <div>
                                            <p className="font-bold text-eyecare-navy text-sm">801 N Tustin Ave #401, Santa Ana, CA 92705</p>
                                            <p className="text-xs text-gray-500 mt-1">From Newport Beach: SR-73 or SR-55 North to Tustin Ave</p>
                                        </div>
                                    </div>
                                    <a
                                        href="https://www.google.com/maps/dir/Newport+Beach,+CA/801+N+Tustin+Ave+%23401,+Santa+Ana,+CA+92705"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full py-3 bg-eyecare-navy text-white text-center rounded-lg text-sm font-bold hover:bg-eyecare-blue transition-colors"
                                    >
                                        Get Directions from Newport Beach
                                    </a>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ──────────────────────────────────────────────────────────────── */}
            {/* Newport Beach Neighborhoods Served                              */}
            {/* ──────────────────────────────────────────────────────────────── */}
            <section className="py-16 bg-gray-50 border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <FadeIn>
                        <h2 className="text-3xl font-serif font-bold text-eyecare-navy mb-4 text-center">
                            Serving Newport Beach Communities
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-10">
                            From the harbor to the bluffs, we provide expert keratoconus care to patients throughout Newport Beach's distinctive coastal neighborhoods.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                            {['Corona del Mar', 'Balboa Island', 'Lido Isle', 'Newport Coast', 'Fashion Island', 'Balboa Peninsula', 'Newport Heights', 'Eastbluff', 'Harbor View'].map((neighborhood) => (
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
                            Keratoconus and Coastal Living: What Newport Beach Residents Should Know
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-8">
                            Keratoconus is a progressive eye condition in which the cornea thins and deforms into a cone-like shape, distorting how light enters the eye. This produces blurred, doubled, or ghosted vision that glasses and standard soft contact lenses cannot fully correct. For Newport Beach residents, the condition presents particular challenges: intense coastal sunlight, water glare, and the visual demands of an active outdoor lifestyle all amplify the functional impact of irregular corneal astigmatism.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="mb-12">
                            <h3 className="text-2xl font-bold text-eyecare-navy mb-4">Recognizing Keratoconus Symptoms</h3>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Keratoconus symptoms often develop gradually and can initially be mistaken for ordinary near-sightedness or astigmatism. Newport Beach residents frequently first notice vision problems during outdoor activities, driving along PCH at dusk, or when reading in bright, variable lighting conditions. Common symptoms include:
                            </p>
                            <ul className="space-y-3 text-gray-700 text-lg">
                                {[
                                    "Blurred or warped vision that worsens despite new glasses prescriptions",
                                    "Significant glare sensitivity, especially on the water or in bright sunlight",
                                    "Halos, streaking, or starburst patterns around headlights and streetlights",
                                    "Difficulty judging distance, a challenge during boating, golf, or tennis",
                                    "Rapidly changing eyeglass prescriptions over short periods",
                                    "Eye strain and fatigue, especially toward the end of the day",
                                    "Ghost images or double vision in one eye"
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
                            <h3 className="text-2xl font-bold text-eyecare-navy mb-4">How Keratoconus Progresses</h3>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Keratoconus typically begins in the late teens or early twenties and progresses at varying rates. In many patients, the condition stabilizes by the mid-30s to 40s, though this is not universal. The four recognized stages are:
                            </p>
                            <div className="space-y-4">
                                {[
                                    { stage: "Early (Forme Fruste)", desc: "Mild corneal irregularity visible only on topographic imaging. Vision may remain adequate with glasses. Often discovered incidentally during routine eye exams." },
                                    { stage: "Moderate", desc: "Noticeable corneal steepening and increasing irregular astigmatism. Glasses no longer provide satisfactory correction. Specialty contact lenses become necessary for functional vision." },
                                    { stage: "Advanced", desc: "Significant corneal thinning and distortion. Scleral lenses are typically required for visual rehabilitation. Cross-linking may be recommended to prevent further progression." },
                                    { stage: "Severe", desc: "Corneal scarring may develop, reducing best-corrected acuity. Contact lens fitting is more complex. Corneal transplantation becomes a consideration when lenses can no longer provide adequate vision." }
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
                                Why Early Detection Is Critical
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                For Newport Beach residents, early detection can mean the difference between manageable keratoconus and a condition that limits your lifestyle. Corneal cross-linking, when performed before significant thinning has occurred, can halt progression and preserve the cornea's structural integrity for decades. A single diagnostic visit with corneal topography can identify keratoconus at a stage when intervention is most effective. If you or a family member has been diagnosed with keratoconus, or if you are experiencing unexplained vision changes, a comprehensive corneal evaluation can provide clarity and a path forward.
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
                            Keratoconus Treatment Options for Newport Beach Patients
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-10">
                            Treatment selection is based on the stage and severity of your keratoconus, the shape of your cornea, and your specific visual needs. Newport Beach patients often require lenses that perform well in bright, high-glare environments and support the visual demands of active outdoor lifestyles. Dr. Bonakdar tailors every treatment plan accordingly.
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
                                            Scleral lenses are the gold standard for moderate to advanced keratoconus management. These large-diameter rigid gas permeable lenses vault over the entire cornea, resting on the sclera and creating a fluid reservoir that produces a smooth, consistent optical surface. For Newport Beach patients, scleral lenses offer particular advantages: the fluid layer keeps the eye hydrated in dry, windy coastal conditions, and the stable optics reduce glare sensitivity during outdoor activities. The lens provides all-day comfort and consistent visual clarity from morning to evening.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.15}>
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-bold text-eyecare-navy mb-3">Hybrid Contact Lenses</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Hybrid lenses combine a rigid gas permeable center with a soft outer skirt, offering a balance between optical clarity and comfort. They can be an appropriate option for Newport Beach patients with mild to moderate keratoconus who want good vision quality with the comfort profile closer to a soft lens. The soft skirt also provides lens stability during physical activity, making them a reasonable choice for patients who are not yet candidates for full scleral lenses.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-bold text-eyecare-navy mb-3">Rigid Gas Permeable (RGP) Lenses</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    RGP lenses are small, rigid lenses that rest on the cornea and provide excellent optical correction for early to moderate keratoconus. They create a smooth refracting surface over the irregular cornea. While effective, some patients find them less comfortable in the dry, windy conditions common along the coast. For patients who tolerate them well, RGP lenses remain a proven and cost-effective treatment option.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.25}>
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-bold text-eyecare-navy mb-3">Corneal Cross-Linking Co-Management</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    Corneal cross-linking uses riboflavin (vitamin B2) drops and controlled ultraviolet light to strengthen collagen bonds in the cornea, slowing or halting keratoconus progression. Dr. Bonakdar co-manages cross-linking cases with corneal surgeons, handling pre-operative evaluation, post-procedure monitoring, and ongoing contact lens management. For Newport Beach patients diagnosed with progressive keratoconus, cross-linking can preserve corneal structure and protect against the need for more invasive procedures in the future.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-bold text-eyecare-navy mb-3">Surgical Alternatives</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    When contact lenses can no longer provide adequate correction, or when significant corneal scarring has developed, surgical options including intracorneal ring segments (Intacs) and corneal transplantation may be considered. Dr. Bonakdar works closely with corneal surgeons throughout Orange County and provides post-operative contact lens fitting and management for patients who have undergone corneal transplantation. Many post-surgical patients achieve excellent vision with scleral lenses fitted over the transplant.
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
                                Why Newport Beach Patients Trust Dr. Bonakdar
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
                                Newport Beach residents expect excellence. When it comes to a condition as complex as keratoconus, there is no substitute for deep clinical experience and personalized attention.
                            </p>
                        </FadeIn>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: <Star className="w-6 h-6" />,
                                    title: "500+ Keratoconus Cases Treated",
                                    desc: "More than 500 successful keratoconus cases over 35+ years. Many of the most complex corneal cases in Orange County are referred to Dr. Bonakdar's practice."
                                },
                                {
                                    icon: <Shield className="w-6 h-6" />,
                                    title: "35+ Years Corneal Specialty",
                                    desc: "Three decades of focused experience in corneal disease management and specialty contact lens fitting. This depth of expertise cannot be replicated by general optometry practices."
                                },
                                {
                                    icon: <Clock className="w-6 h-6" />,
                                    title: "Same-Week Appointments",
                                    desc: "No 3-6 month wait like university eye centers. Newport Beach patients can typically schedule their initial keratoconus evaluation within the same week of calling."
                                },
                                {
                                    icon: <Eye className="w-6 h-6" />,
                                    title: "One Doctor, Every Visit",
                                    desc: "You see Dr. Bonakdar personally at every appointment. Your care is never handed off to rotating residents or fellows. Consistency is the foundation of precise lens fitting."
                                },
                                {
                                    icon: <CheckCircle className="w-6 h-6" />,
                                    title: "Hospital Referral Center",
                                    desc: "CHOC and UCI Medical Center refer their most challenging keratoconus cases to our practice. This speaks to the level of clinical capability Newport Beach patients have access to."
                                },
                                {
                                    icon: <Waves className="w-6 h-6" />,
                                    title: "Coastal Lifestyle Expertise",
                                    desc: "Dr. Bonakdar understands the visual demands of coastal living. Lens selection accounts for glare sensitivity, outdoor activity, and the bright, variable lighting conditions of the coast."
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
                                Insurance & Payment Options for Newport Beach Patients
                            </h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-10">
                                We accept most major insurance plans and offer transparent pricing. Scleral lenses for keratoconus are classified as medically necessary by most insurers, which often provides coverage beyond standard vision plan benefits.
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
                                    <p className="text-sm text-gray-600">Use pre-tax health savings for keratoconus treatment and medically necessary lenses.</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm text-center">
                                    <h4 className="font-bold text-eyecare-navy mb-2">CareCredit Financing</h4>
                                    <p className="text-sm text-gray-600">0% interest financing available to make specialty lens treatment accessible.</p>
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
                            Frequently Asked Questions: Keratoconus Care Near Newport Beach
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
                            Answers to common questions from Newport Beach residents about keratoconus treatment, lifestyle considerations, and access to care.
                        </p>
                    </FadeIn>
                    <dl className="space-y-6">
                        {newportFAQs.map((faq, index) => (
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
                                Schedule Your Keratoconus Consultation
                            </h2>
                            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                                Same-week appointments available for Newport Beach residents. Experience the difference that 35+ years of keratoconus expertise and 500+ successful cases make in your visual outcome.
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
                                    ~20 minutes from Newport Beach via SR-73 or SR-55
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
