import { Metadata } from 'next';
import LandingLayout from '@/components/LandingLayout';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import LeadForm from '@/components/LeadForm';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Halos & Glare After LASIK | Orange County Specialist',
    description: 'Halos, starbursts, and glare after LASIK — especially at night — are caused by irregular corneal healing and enlarged optical zones. Dr. Bonakdar in Orange County offers expert evaluation and scleral lens options for persistent LASIK visual disturbances.',
    keywords: [
        'halos after LASIK',
        'glare after LASIK',
        'starbursts after LASIK',
        'LASIK night vision problems',
        'LASIK visual disturbances',
        'ghost images after LASIK',
        'LASIK complications orange county',
        'dysphotopsia after LASIK',
        'irregular astigmatism LASIK',
        'scleral lenses LASIK complications',
    ],
    alternates: {
        canonical: 'https://www.keratocones.com/halos-after-lasik',
        languages: {
            'en': 'https://www.keratocones.com/halos-after-lasik',
            'x-default': 'https://www.keratocones.com/halos-after-lasik',
        },
    },
    openGraph: {
        title: 'Halos & Glare After LASIK | Orange County Specialist',
        description: 'Nighttime halos, starbursts, and glare after LASIK: what causes them, when they resolve, and what to do when they don\'t.',
        url: 'https://www.keratocones.com/halos-after-lasik',
        siteName: 'Keratoconus Vision Center',
        locale: 'en_US',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Halos & Glare After LASIK',
        description: 'Nighttime halos, starbursts, and glare that persist after LASIK — causes, realistic prognosis, and what actually helps.',
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Halos and Glare After LASIK Surgery",
    "description": "Comprehensive guide to halos, glare, and visual disturbances after LASIK, including causes, prognosis, and scleral lens management.",
    "url": "https://www.keratocones.com/halos-after-lasik",
    "inLanguage": "en-US",
    "about": {
        "@type": "MedicalCondition",
        "name": "Post-LASIK Dysphotopsia",
        "alternateName": "LASIK Visual Disturbances"
    },
    "author": {
        "@type": "Physician",
        "name": "Dr. Alexander Bonakdar",
        "jobTitle": "Keratoconus & Corneal Specialist",
        "url": "https://keratocones.com/about"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Keratoconus Vision Center",
        "url": "https://keratocones.com"
    },
    "datePublished": "2026-02-28",
    "dateModified": "2026-02-28",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Will halos after LASIK go away on their own?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Many patients see halos and glare improve during the first 3–6 months after LASIK as the cornea heals and the tear film stabilizes. However, if halos persist beyond 6–12 months, they are unlikely to resolve completely without intervention. The persistence of symptoms indicates structural changes — irregular healing, a small optical zone, or early ectasia — that do not self-correct."
            }
        },
        {
            "@type": "Question",
            "name": "What causes halos and starbursts after LASIK?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "The most common causes are: (1) An optical zone smaller than the pupil diameter in low light — when the pupil dilates beyond the treated zone, light passes through both corrected and uncorrected tissue simultaneously, creating halos. (2) Irregular corneal surface from incomplete healing, causing scatter and aberrations. (3) Dry eye from severed corneal nerves disrupting tear film quality. (4) Early corneal ectasia — where the cornea has weakened and begun to deform. Each cause has different implications for treatment."
            }
        },
        {
            "@type": "Question",
            "name": "Can LASIK enhancement fix my halos?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sometimes. If halos are caused by a small optical zone and there is sufficient corneal tissue remaining, an enhancement that widens the treatment zone may reduce them. However, enhancements carry risks, require adequate remaining corneal thickness, and may not be appropriate if there are signs of irregular healing or early ectasia. Not all candidates qualify, and enhancements do not always resolve the issue."
            }
        },
        {
            "@type": "Question",
            "name": "Are scleral lenses helpful for halos after LASIK?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, for many patients. Scleral lenses create a new, smooth optical surface over the irregular cornea. For halos caused by corneal surface irregularity or ectasia (rather than purely optical zone size), scleral lenses can dramatically reduce visual aberrations. They are particularly helpful for patients with significant corneal irregularity who are not candidates for further laser treatment."
            }
        }
    ]
};

export default function HalosAfterLasikPage() {
    return (
        <LandingLayout>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <BreadcrumbSchema items={[
                { name: 'Home', url: 'https://keratocones.com' },
                { name: 'LASIK Complications', url: 'https://keratocones.com/lasik-complications' },
                { name: 'Halos & Glare After LASIK' },
            ]} />

            {/* Hero */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-eyecare-navy to-eyecare-dark-blue text-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="text-center">
                            <p className="text-eyecare-lighter-blue font-semibold text-sm uppercase tracking-widest mb-4">LASIK Visual Complications</p>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                                Halos, Starbursts & Glare<br className="hidden md:block" /> After LASIK Surgery
                            </h1>
                            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                                You were promised crisp, clear vision. Now every headlight at night has a rainbow burst around it, street signs have ghost images, and driving after dark has become stressful. You were told it would go away. It didn't.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="#lead-form" className="bg-white text-eyecare-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                    Get Evaluated
                                </a>
                                <a href="tel:+17145580641" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                                    (714) 558-0641
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Patient Validation */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-eyecare-navy mb-8 text-center">
                            What Patients With Persistent LASIK Halos Describe
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { quote: "Every headlight at night has a huge rainbow burst around it. I can barely drive after dark.", label: "Nighttime glare & halos" },
                                { quote: "I see like I'm looking through a dirty window — things are almost clear, but never quite sharp.", label: "Irregular optical aberrations" },
                                { quote: "I can see 20/20 on the chart but my vision quality is terrible. The test doesn't capture what I experience.", label: "Quality vs. acuity discrepancy" },
                                { quote: "My surgeon said it would go away. That was three years ago.", label: "Unresolved chronic symptoms" },
                            ].map((item, i) => (
                                <div key={i} className="bg-eyecare-lighter-blue rounded-xl p-6 border-l-4 border-eyecare-blue">
                                    <p className="text-gray-700 italic mb-3 text-lg leading-relaxed">"{item.quote}"</p>
                                    <p className="text-eyecare-blue font-semibold text-sm uppercase tracking-wide">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Causes */}
            <section className="py-16 md:py-20 bg-eyecare-lighter-blue">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-eyecare-navy mb-4 text-center">
                            What Causes Halos and Glare After LASIK?
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Not all post-LASIK visual disturbances have the same cause — and identifying the cause determines what can help.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h3 className="font-bold text-eyecare-navy text-lg mb-3">Small Optical Zone</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    LASIK reshapes a central zone of the cornea. When the pupil dilates in low light, it may extend beyond the treated area. Light passing through both the corrected and uncorrected corneal tissue simultaneously creates halos and starbursts.
                                </p>
                                <p className="text-sm text-eyecare-blue font-medium">Most common in earlier LASIK procedures (pre-2000s)</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h3 className="font-bold text-eyecare-navy text-lg mb-3">Corneal Surface Irregularity</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    If the LASIK flap healed unevenly, or if ablation was irregular, the corneal surface creates higher-order aberrations — visual distortions that standard glasses cannot correct. These include coma, trefoil, and spherical aberration, which manifest as halos, starbursts, and ghost images.
                                </p>
                                <p className="text-sm text-eyecare-blue font-medium">Identifiable via corneal wavefront analysis</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h3 className="font-bold text-eyecare-navy text-lg mb-3">Dry Eye After LASIK</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    LASIK severs corneal nerves, disrupting the reflex arc that maintains tear production. A compromised tear film scatters light before it reaches the cornea, producing visual disturbances that worsen throughout the day or in dry environments.
                                </p>
                                <p className="text-sm text-eyecare-blue font-medium">Often treatable — but frequently underdiagnosed</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <h3 className="font-bold text-eyecare-navy text-lg mb-3">Corneal Ectasia</h3>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    In a small percentage of patients, the cornea becomes structurally unstable after LASIK and progressively deforms — a condition called corneal ectasia. This causes irregular astigmatism, distorted vision, and worsening halos. It can develop months to years post-LASIK and requires specialty care.
                                </p>
                                <p className="text-sm text-red-600 font-medium">Requires urgent evaluation if suspected</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Timeline and What Helps */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-eyecare-navy mb-4 text-center">
                            Will Halos After LASIK Go Away?
                        </h2>
                        <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
                            The answer depends on how long you've had them and what's causing them.
                        </p>
                        <div className="grid md:grid-cols-3 gap-6 mb-12">
                            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                                <h3 className="font-bold text-green-800 text-lg mb-3">0–6 Months Post-LASIK</h3>
                                <p className="text-green-700 leading-relaxed">
                                    Halos are common and expected. Corneal healing, inflammation, and tear film instability all contribute. Most early-onset halos improve significantly during this period.
                                </p>
                                <p className="text-green-800 font-semibold mt-3">Likely to improve on their own</p>
                            </div>
                            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                                <h3 className="font-bold text-yellow-800 text-lg mb-3">6–12 Months Post-LASIK</h3>
                                <p className="text-yellow-700 leading-relaxed">
                                    Persistent halos at this stage suggest structural factors beyond normal healing. Evaluation is warranted. Some improvement may still occur, but intervention may be needed.
                                </p>
                                <p className="text-yellow-800 font-semibold mt-3">Evaluation recommended</p>
                            </div>
                            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                                <h3 className="font-bold text-red-800 text-lg mb-3">12+ Months Post-LASIK</h3>
                                <p className="text-red-700 leading-relaxed">
                                    Halos that persist beyond one year are unlikely to resolve without treatment. The cause is structural and requires evaluation of the corneal surface, wavefront aberrations, and potential ectasia.
                                </p>
                                <p className="text-red-800 font-semibold mt-3">Specialist evaluation needed</p>
                            </div>
                        </div>

                        <div className="bg-eyecare-lighter-blue rounded-2xl p-8 border border-eyecare-blue/20">
                            <h3 className="font-bold text-eyecare-navy text-xl mb-6">What Can Help</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-semibold text-eyecare-navy mb-3">For Dry Eye-Related Halos</h4>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex gap-2"><span className="text-eyecare-blue">•</span> Preservative-free artificial tears</li>
                                        <li className="flex gap-2"><span className="text-eyecare-blue">•</span> Punctal plugs (to retain natural tears)</li>
                                        <li className="flex gap-2"><span className="text-eyecare-blue">•</span> Anti-inflammatory drops (cyclosporine, lifitegrast)</li>
                                        <li className="flex gap-2"><span className="text-eyecare-blue">•</span> Scleral lenses (provide constant tear reservoir)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-eyecare-navy mb-3">For Structural/Optical Zone Issues</h4>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex gap-2"><span className="text-eyecare-blue">•</span> Scleral lenses (eliminate surface irregularity)</li>
                                        <li className="flex gap-2"><span className="text-eyecare-blue">•</span> Wavefront-guided enhancement (if tissue allows)</li>
                                        <li className="flex gap-2"><span className="text-eyecare-blue">•</span> Corneal cross-linking (if ectasia is present)</li>
                                        <li className="flex gap-2"><span className="text-eyecare-blue">•</span> Ongoing monitoring for ectasia progression</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 md:py-20 bg-eyecare-lighter-blue">
                <div className="container mx-auto px-4 max-w-3xl">
                    <FadeIn>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-eyecare-navy mb-10 text-center">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: "Will halos after LASIK go away on their own?",
                                    a: "Many patients see halos and glare improve during the first 3–6 months after LASIK as the cornea heals. However, if halos persist beyond 6–12 months, they are unlikely to resolve completely without intervention. Persistence indicates structural changes — irregular healing, a small optical zone, or early ectasia — that do not self-correct."
                                },
                                {
                                    q: "What causes halos and starbursts after LASIK?",
                                    a: "The most common causes are: (1) An optical zone smaller than the pupil diameter in low light — creating halos when the pupil dilates beyond the treated zone. (2) Irregular corneal surface causing scatter and aberrations. (3) Dry eye from severed corneal nerves disrupting tear film. (4) Early corneal ectasia — progressive corneal deformation. Each cause has different implications for treatment."
                                },
                                {
                                    q: "Can LASIK enhancement fix my halos?",
                                    a: "Sometimes. If halos are caused by a small optical zone and there is sufficient remaining corneal tissue, a wavefront-guided enhancement may reduce them. However, enhancements are not always possible and do not always resolve the issue. A thorough evaluation of corneal thickness, topography, and wavefront is needed first."
                                },
                                {
                                    q: "Are scleral lenses helpful for halos after LASIK?",
                                    a: "Yes, for many patients. Scleral lenses create a new, smooth optical surface over the irregular cornea. For halos caused by corneal surface irregularity or ectasia, scleral lenses can dramatically reduce visual aberrations — particularly for patients with significant corneal irregularity who are not candidates for further laser treatment."
                                },
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                                    <h3 className="font-bold text-eyecare-navy mb-3">{item.q}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Related Pages */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        <h2 className="text-xl font-bold text-eyecare-navy mb-6 text-center">Related Information</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Link href="/lasik-complications" className="block bg-eyecare-lighter-blue rounded-xl p-5 hover:shadow-md transition-shadow border border-eyecare-blue/10">
                                <h3 className="font-bold text-eyecare-navy mb-2">LASIK Complications Overview</h3>
                                <p className="text-gray-600 text-sm">Understanding the full spectrum of refractive surgery complications.</p>
                            </Link>
                            <Link href="/radial-keratotomy-problems" className="block bg-eyecare-lighter-blue rounded-xl p-5 hover:shadow-md transition-shadow border border-eyecare-blue/10">
                                <h3 className="font-bold text-eyecare-navy mb-2">Radial Keratotomy Problems</h3>
                                <p className="text-gray-600 text-sm">Long-term RK complications: hyperopic shift, diurnal variation, and instability.</p>
                            </Link>
                            <Link href="/scleral-lenses-post-lasik-rk" className="block bg-eyecare-lighter-blue rounded-xl p-5 hover:shadow-md transition-shadow border border-eyecare-blue/10">
                                <h3 className="font-bold text-eyecare-navy mb-2">Scleral Lenses for LASIK/RK</h3>
                                <p className="text-gray-600 text-sm">How scleral lenses restore stable vision when surgery leaves complications.</p>
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Lead Form */}
            <section id="lead-form" className="py-12 md:py-24 bg-eyecare-lighter-blue">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-eyecare-navy mb-4">
                            Get Expert Evaluation for Your Post-LASIK Symptoms
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Persistent halos and glare after LASIK deserve proper investigation, not reassurance. Dr. Bonakdar evaluates corneal topography, wavefront aberrations, and tear film to find the actual cause.
                        </p>
                    </div>
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
