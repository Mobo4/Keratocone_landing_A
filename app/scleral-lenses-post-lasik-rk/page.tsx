import { Metadata } from 'next';
import LandingLayout from '@/components/LandingLayout';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import LeadForm from '@/components/LeadForm';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Scleral Lenses for LASIK & RK Complications | Orange County',
    description: 'Failed LASIK or radial keratotomy? Scleral lenses vault over the irregular corneal surface — restoring sharp, stable vision when glasses and regular contacts can\'t. Specialist fitting in Orange County.',
    keywords: [
        'scleral lenses after LASIK',
        'scleral lenses radial keratotomy',
        'scleral lenses post LASIK complications',
        'scleral lenses RK surgery',
        'scleral contact lenses orange county',
        'irregular astigmatism contact lenses',
        'post-LASIK vision correction',
        'scleral lenses ectasia',
        'specialty contact lenses LASIK',
        'scleral lens fitting specialist',
    ],
    alternates: {
        canonical: 'https://www.keratocones.com/scleral-lenses-post-lasik-rk',
        languages: {
            'en': 'https://www.keratocones.com/scleral-lenses-post-lasik-rk',
            'x-default': 'https://www.keratocones.com/scleral-lenses-post-lasik-rk',
        },
    },
    openGraph: {
        title: 'Scleral Lenses for LASIK & RK Complications | Orange County',
        description: 'Scleral lenses vault over irregular corneas — the solution when LASIK or RK complications leave you with unstable, distorted vision.',
        url: 'https://www.keratocones.com/scleral-lenses-post-lasik-rk',
        siteName: 'Keratoconus Vision Center',
        locale: 'en_US',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Scleral Lenses for Post-LASIK and RK Complications',
        description: 'When surgery creates an irregular cornea, scleral lenses create the smooth optical surface that glasses and regular contacts cannot.',
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Scleral Lenses for Post-LASIK and Radial Keratotomy Patients",
    "description": "Comprehensive guide to scleral lens fitting for patients with LASIK complications, corneal ectasia, and long-term radial keratotomy problems.",
    "url": "https://www.keratocones.com/scleral-lenses-post-lasik-rk",
    "inLanguage": "en-US",
    "about": [
        { "@type": "MedicalDevice", "name": "Scleral Contact Lenses" },
        { "@type": "MedicalCondition", "name": "Post-LASIK Corneal Complications" }
    ],
    "author": {
        "@type": "Physician",
        "name": "Dr. Alexander Bonakdar",
        "jobTitle": "Keratoconus & Specialty Lens Specialist",
        "url": "https://keratocones.com/about"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Keratoconus Vision Center",
        "url": "https://keratocones.com"
    },
    "datePublished": "2026-02-28",
    "dateModified": "2026-02-28",
    "medicalAudience": [
        { "@type": "MedicalAudience", "audienceType": "Patient" }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How do scleral lenses work for LASIK or RK complications?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Scleral lenses are large-diameter rigid gas-permeable lenses that rest on the sclera (white of the eye) and vault completely over the cornea. The space between the lens and the cornea is filled with sterile saline solution. This fluid-filled chamber creates a smooth, regular refracting surface regardless of the underlying corneal irregularities created by LASIK or RK. Light entering the eye refracts through the smooth front surface of the lens — bypassing the irregular cornea entirely."
            }
        },
        {
            "@type": "Question",
            "name": "Will scleral lenses be comfortable to wear all day?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most patients are surprised by how comfortable scleral lenses are. Because the lens rests on the relatively insensitive scleral tissue and doesn't touch the sensitive cornea, they are often more comfortable than standard contact lenses that sit directly on the cornea. The fluid reservoir also provides continuous moisture — making them particularly comfortable for patients with dry eyes from LASIK. Most patients wear them 12–14 hours per day."
            }
        },
        {
            "@type": "Question",
            "name": "How long does scleral lens fitting take for post-LASIK patients?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Fitting scleral lenses for post-LASIK or RK patients requires more visits than fitting for a regular prescription. Typical fitting involves 2–4 visits over several weeks. During this time, we map the corneal surface with topography, select trial lenses based on the corneal shape, assess the fit and vault height over the cornea, and refine the prescription. The complexity of your corneal irregularity determines the number of fitting visits needed."
            }
        },
        {
            "@type": "Question",
            "name": "Does insurance cover scleral lenses for LASIK or RK complications?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "In many cases, yes. When scleral lenses are required due to a medical condition — irregular astigmatism, corneal ectasia, or documented failure of standard contact lenses — they are often covered under medical insurance rather than vision plans. Diagnoses such as H52.1 (irregular astigmatism) or H18.6 (keratoconus) or post-surgical corneal complications support medical billing. We recommend pre-authorization and will help verify your benefits."
            }
        }
    ]
};

export default function ScleralLensesPostLasikRkPage() {
    return (
        <LandingLayout>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <BreadcrumbSchema items={[
                { name: 'Home', url: 'https://keratocones.com' },
                { name: 'LASIK Complications', url: 'https://keratocones.com/lasik-complications' },
                { name: 'Scleral Lenses for Post-LASIK & RK' },
            ]} />

            {/* Hero */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-eyecare-navy to-eyecare-dark-blue text-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="text-center">
                            <p className="text-eyecare-lighter-blue font-semibold text-sm uppercase tracking-widest mb-4">Specialty Lens Fitting</p>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                                Scleral Lenses for Post-LASIK<br className="hidden md:block" /> and Radial Keratotomy Patients
                            </h1>
                            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                                When refractive surgery leaves behind an irregular cornea, glasses and standard contacts cannot give you sharp, stable vision. Scleral lenses create a new optical surface — vaulting completely over the corneal irregularities that are making your vision blurry, distorted, or unstable.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="#lead-form" className="bg-white text-eyecare-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                    Schedule Fitting Evaluation
                                </a>
                                <a href="tel:+17145580641" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                                    (714) 558-0641
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Patient Transformation */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-eyecare-navy mb-6">
                                    What Patients Say After Getting Scleral Lenses
                                </h2>
                                <div className="space-y-5">
                                    {[
                                        "I got my life back. I was told I'd just have to live with the blurry vision.",
                                        "I can drive at night again for the first time in years. The halos are completely gone.",
                                        "I wake up, put in my scleral lenses, and my vision is perfect all day. My prescription doesn't shift like it used to.",
                                        "I was skeptical — I thought it was just contacts. They are completely different from anything I've ever worn.",
                                    ].map((quote, i) => (
                                        <div key={i} className="border-l-4 border-eyecare-blue pl-4">
                                            <p className="text-gray-700 italic leading-relaxed">"{quote}"</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-eyecare-lighter-blue rounded-2xl p-8">
                                <h3 className="font-bold text-eyecare-navy text-xl mb-6">Who Benefits Most from Scleral Lenses</h3>
                                <ul className="space-y-4">
                                    {[
                                        { label: "Post-LASIK ectasia", desc: "Cornea weakened and deformed after LASIK, causing progressive vision distortion" },
                                        { label: "Irregular LASIK ablation", desc: "Uneven laser treatment creating higher-order aberrations glasses can't correct" },
                                        { label: "Long-term RK patients", desc: "Hyperopic shift, diurnal variation, and irregular incision healing" },
                                        { label: "Chronic post-LASIK dry eye", desc: "Fluid reservoir provides continuous moisture throughout the day" },
                                        { label: "Post-RK cataract patients", desc: "Residual irregular astigmatism after cataract surgery in an RK eye" },
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="text-eyecare-blue font-bold mt-0.5">✓</span>
                                            <div>
                                                <p className="font-semibold text-eyecare-navy">{item.label}</p>
                                                <p className="text-gray-600 text-sm">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* How They Work */}
            <section className="py-16 md:py-20 bg-eyecare-lighter-blue">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-eyecare-navy mb-4 text-center">
                            How Scleral Lenses Work — and Why They Succeed Where Others Fail
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            The physics of scleral lenses make them uniquely effective for post-surgical irregular corneas.
                        </p>
                        <div className="grid md:grid-cols-2 gap-10">
                            <div>
                                <h3 className="font-bold text-eyecare-navy text-xl mb-6">Standard Lenses: Follow the Problem</h3>
                                <div className="space-y-4">
                                    <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                                        <h4 className="font-semibold text-red-800 mb-2">Glasses</h4>
                                        <p className="text-red-700 text-sm">Correct for a single prescription — useless when that prescription shifts 3 diopters between morning and afternoon (RK diurnal variation). Cannot correct higher-order aberrations causing halos and starbursts.</p>
                                    </div>
                                    <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                                        <h4 className="font-semibold text-red-800 mb-2">Soft Contact Lenses</h4>
                                        <p className="text-red-700 text-sm">Drape over and conform to the irregular corneal surface, inheriting its distortions. They correct the refractive error but not the irregularity — providing only modest improvement for post-LASIK or RK patients.</p>
                                    </div>
                                    <div className="bg-red-50 border border-red-100 rounded-xl p-5">
                                        <h4 className="font-semibold text-red-800 mb-2">Standard RGP Lenses</h4>
                                        <p className="text-red-700 text-sm">Sit directly on the cornea — often uncomfortable on irregular post-surgical surfaces, and their small size may not fully vault the treatment zone of an RK or LASIK cornea.</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-eyecare-navy text-xl mb-6">Scleral Lenses: Bypass the Problem</h3>
                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-eyecare-blue/20 h-full flex flex-col justify-between">
                                    <div>
                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            A scleral lens is a large-diameter rigid lens that spans the entire cornea, resting gently on the sclera. The dome-shaped space between the lens and cornea fills with preservative-free saline.
                                        </p>
                                        <p className="text-gray-700 leading-relaxed mb-6">
                                            Light entering the eye refracts through the smooth front surface of the lens — <em>not</em> the irregular cornea. The saline behind the lens has nearly the same refractive index as the cornea, so the corneal irregularity is optically neutralized.
                                        </p>
                                    </div>
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-eyecare-navy">The result:</h4>
                                        {[
                                            "Sharp, high-contrast vision regardless of corneal shape",
                                            "No diurnal prescription shift (the lens vaults the whole cornea)",
                                            "Elimination of higher-order aberrations causing halos",
                                            "Continuous moisture for dry, post-LASIK eyes",
                                            "Comfortable 12–14 hour daily wear",
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <span className="text-eyecare-blue font-bold mt-0.5">✓</span>
                                                <span className="text-gray-700 text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Fitting Process */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-eyecare-navy mb-4 text-center">
                            The Fitting Process for Post-Surgical Patients
                        </h2>
                        <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
                            Fitting scleral lenses for post-LASIK or RK corneas requires specialized expertise and typically 2–4 visits. The goal is precision — a lens that fits properly is comfortable, provides excellent vision, and maintains corneal health.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    step: "Step 1",
                                    title: "Comprehensive Corneal Evaluation",
                                    desc: "Corneal topography and tomography map the shape of your cornea in detail. For post-LASIK or RK patients, this reveals the specific irregularities that need to be vaulted, the degree of ectasia if present, and the available area of scleral tissue for lens landing."
                                },
                                {
                                    step: "Step 2",
                                    title: "Trial Lens Selection",
                                    desc: "Based on your topography, an appropriate trial scleral lens is selected from our fitting set. Parameters include diameter (16–24mm), base curve, vault height, and landing zone geometry. Post-LASIK and RK corneas often require custom lens designs not available in standard fitting sets."
                                },
                                {
                                    step: "Step 3",
                                    title: "Fit Assessment & Refraction",
                                    desc: "With the trial lens in place, we assess the clearance over the cornea (ensuring adequate vault without excessive saline thickness), the landing on the sclera (no pressure on the limbus), and centration. Refraction over the trial lens determines the final prescription."
                                },
                                {
                                    step: "Step 4",
                                    title: "Lens Delivery & Training",
                                    desc: "Custom lenses are ordered and returned in 1–3 weeks. We teach insertion and removal techniques, care protocols, and troubleshooting. Follow-up visits at 1 week and 1 month confirm fit, vision, and corneal health."
                                },
                            ].map((item, i) => (
                                <div key={i} className="bg-eyecare-lighter-blue rounded-xl p-6">
                                    <p className="text-eyecare-blue font-bold text-sm uppercase tracking-wide mb-1">{item.step}</p>
                                    <h3 className="font-bold text-eyecare-navy text-lg mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Insurance */}
            <section className="py-10 bg-eyecare-lighter-blue">
                <div className="container mx-auto px-4 max-w-3xl">
                    <FadeIn>
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
                            <h3 className="font-bold text-green-800 text-lg mb-2">Insurance Coverage for Scleral Lenses</h3>
                            <p className="text-green-700 mb-4">
                                When scleral lenses are medically necessary due to irregular astigmatism, post-surgical corneal complications, or documented failure of standard contact lenses, they are often covered under <strong>medical insurance</strong> — not just vision plans. Most major medical insurers recognize scleral lenses as medically necessary for post-LASIK ectasia, RK complications, and similar diagnoses.
                            </p>
                            <p className="text-green-700 text-sm">
                                We assist with pre-authorization documentation and work with your insurance to maximize coverage.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* About Dr. Bonakdar */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        <div className="bg-eyecare-lighter-blue rounded-2xl p-8 md:p-12">
                            <h2 className="text-2xl font-serif font-bold text-eyecare-navy mb-6 text-center">
                                35+ Years Fitting Specialty Lenses for Complex Corneal Cases
                            </h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Dr. Alexander Bonakdar has specialized in scleral and specialty contact lens fitting for over three decades. His practice receives referrals from CHOC (Children's Hospital of Orange County) and UCI Medical Center for patients who cannot be managed with standard correction.
                                    </p>
                                    <p className="text-gray-700 leading-relaxed">
                                        Post-LASIK and RK patients represent a significant portion of our complex lens fitting caseload. We understand the frustration of these patients — many of whom have been told by multiple providers that nothing more can be done — and the profound difference that well-fitted scleral lenses make.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-eyecare-navy mb-4">Our Specialty Lens Capabilities</h3>
                                    <ul className="space-y-3">
                                        {[
                                            "Scleral lens fitting (16–24mm diameter)",
                                            "Mini-scleral and corneoscleral lenses",
                                            "Custom scleral designs for highly irregular corneas",
                                            "Corneal topography and wavefront analysis",
                                            "Post-cataract scleral lens fitting for RK patients",
                                            "Dry eye evaluation and management",
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-eyecare-blue font-bold mt-0.5">✓</span>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
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
                                    q: "How do scleral lenses work for LASIK or RK complications?",
                                    a: "Scleral lenses are large-diameter rigid gas-permeable lenses that rest on the sclera and vault completely over the cornea. The fluid-filled space between the lens and cornea creates a smooth, regular refracting surface — bypassing the corneal irregularities created by LASIK or RK. Light refracts through the smooth front surface of the lens rather than the irregular cornea."
                                },
                                {
                                    q: "Will scleral lenses be comfortable to wear all day?",
                                    a: "Most patients are surprised by the comfort. Because scleral lenses rest on the insensitive scleral tissue (not the sensitive cornea), they are often more comfortable than standard contacts. The fluid reservoir also provides continuous moisture — ideal for post-LASIK dry eye. Most patients wear them 12–14 hours per day."
                                },
                                {
                                    q: "How long does fitting take for post-LASIK patients?",
                                    a: "Post-LASIK and RK fitting typically requires 2–4 visits over several weeks. We map the corneal surface with topography, select trial lenses based on corneal shape, assess the vault and fit, and refine the prescription. The complexity of your corneal irregularity determines the number of visits."
                                },
                                {
                                    q: "Does insurance cover scleral lenses for LASIK or RK complications?",
                                    a: "In many cases, yes. When scleral lenses are medically necessary for irregular astigmatism, corneal ectasia, or documented failure of standard correction, they are often covered under medical insurance. We assist with pre-authorization documentation and insurance verification."
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
                        <h2 className="text-xl font-bold text-eyecare-navy mb-6 text-center">Related Conditions We Treat</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Link href="/lasik-complications" className="block bg-eyecare-lighter-blue rounded-xl p-5 hover:shadow-md transition-shadow border border-eyecare-blue/10">
                                <h3 className="font-bold text-eyecare-navy mb-2">LASIK Complications</h3>
                                <p className="text-gray-600 text-sm">Overview of LASIK complications and who can be helped with specialty lenses.</p>
                            </Link>
                            <Link href="/halos-after-lasik" className="block bg-eyecare-lighter-blue rounded-xl p-5 hover:shadow-md transition-shadow border border-eyecare-blue/10">
                                <h3 className="font-bold text-eyecare-navy mb-2">Halos & Glare After LASIK</h3>
                                <p className="text-gray-600 text-sm">Nighttime halos, starbursts, and glare — how scleral lenses help.</p>
                            </Link>
                            <Link href="/radial-keratotomy-problems" className="block bg-eyecare-lighter-blue rounded-xl p-5 hover:shadow-md transition-shadow border border-eyecare-blue/10">
                                <h3 className="font-bold text-eyecare-navy mb-2">Radial Keratotomy Problems</h3>
                                <p className="text-gray-600 text-sm">Long-term RK complications and the role of scleral lenses in managing them.</p>
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
                            Schedule a Scleral Lens Evaluation
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Most post-LASIK and RK patients are seen within the same week. Bring any prior topography or records if available — but we can start fresh with our own evaluation.
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
