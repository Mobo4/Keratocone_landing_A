import { Metadata } from 'next';
import LandingLayout from '@/components/LandingLayout';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import LeadForm from '@/components/LeadForm';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Radial Keratotomy (RK) Problems Years Later | Orange County Specialist',
    description: 'Had RK in the 80s or 90s? Unstable vision, progressive farsightedness, and fluctuating vision throughout the day are common long-term RK complications. Dr. Bonakdar in Orange County specializes in scleral lenses and comprehensive care for RK patients.',
    keywords: [
        'radial keratotomy problems',
        'RK surgery complications',
        'radial keratotomy long-term problems',
        'unstable vision after RK',
        'hyperopic shift after RK',
        'RK surgery orange county',
        'radial keratotomy specialist',
        'diurnal variation RK',
        'vision fluctuation after radial keratotomy',
        'scleral lenses radial keratotomy',
    ],
    alternates: {
        canonical: 'https://www.keratocones.com/radial-keratotomy-problems',
        languages: {
            'en': 'https://www.keratocones.com/radial-keratotomy-problems',
            'x-default': 'https://www.keratocones.com/radial-keratotomy-problems',
        },
    },
    openGraph: {
        title: 'Radial Keratotomy (RK) Problems Years Later | Orange County Specialist',
        description: 'Long-term RK complications: hyperopic shift, diurnal variation, and unstable refraction explained — and how scleral lenses help.',
        url: 'https://www.keratocones.com/radial-keratotomy-problems',
        siteName: 'Keratoconus Vision Center',
        locale: 'en_US',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Radial Keratotomy (RK) Problems Years Later',
        description: 'Unstable vision, hyperopic shift, and diurnal variation — long-term RK complications and what actually helps.',
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Radial Keratotomy (RK) Long-Term Complications",
    "description": "Comprehensive guide to long-term radial keratotomy complications including hyperopic shift, diurnal variation, and scleral lens management.",
    "url": "https://www.keratocones.com/radial-keratotomy-problems",
    "inLanguage": "en-US",
    "about": {
        "@type": "MedicalCondition",
        "name": "Radial Keratotomy Complications",
        "code": {
            "@type": "MedicalCode",
            "codeValue": "H52.1",
            "codingSystem": "ICD-10-CM"
        }
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
            "name": "Why is my vision worse in the morning after RK surgery?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "This is called diurnal variation, and it is extremely common in RK patients. While you sleep, intraocular pressure (IOP) is higher. The RK incisions weaken the corneal structure, so the elevated overnight IOP causes the cornea to steepen — producing myopia (nearsightedness) in the morning. As IOP drops during the day, the cornea flattens again, shifting vision toward hyperopia (farsightedness). Some patients experience 2–4 diopters of shift between morning and afternoon."
            }
        },
        {
            "@type": "Question",
            "name": "What is hyperopic shift after radial keratotomy?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Hyperopic shift is a progressive, cumulative farsightedness that develops in RK patients over years or decades after surgery. RK was designed to flatten the cornea to correct myopia. Over time, the cornea continues to flatten — often beyond the intended correction — causing patients who were once nearsighted to become increasingly farsighted. This effect can worsen every decade and often cannot be corrected with standard glasses or contact lenses."
            }
        },
        {
            "@type": "Question",
            "name": "Can I get LASIK to fix my RK complications?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "LASIK on an RK-treated cornea is high-risk and generally not recommended. The radial incisions that weakened the cornea for RK also make the cornea unstable for laser treatments. Most corneal surgeons will not perform LASIK on an RK cornea due to the risk of ectasia, unpredictable outcomes, and further destabilization. Scleral contact lenses are typically the safest and most effective management option."
            }
        },
        {
            "@type": "Question",
            "name": "Will my RK vision keep getting worse?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Many RK patients experience slow progressive changes over their lifetime. The hyperopic shift often continues gradually, and diurnal fluctuation can increase. Cataract surgery planning is also more complex for RK patients. The important thing is regular monitoring — and fitting scleral lenses early, before changes become severe, typically provides the best outcomes."
            }
        },
        {
            "@type": "Question",
            "name": "Do scleral lenses work for RK patients?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes — scleral lenses are often the best vision correction option for RK patients. Scleral lenses vault completely over the irregular corneal surface (created by the RK incisions) and rest on the less-affected sclera. This eliminates the optical impact of the corneal irregularities and provides a smooth, stable refracting surface. Most RK patients achieve dramatically better vision with scleral lenses than with glasses or standard contacts."
            }
        }
    ]
};

export default function RadialKeratotomyProblemsPage() {
    return (
        <LandingLayout>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <BreadcrumbSchema items={[
                { name: 'Home', url: 'https://keratocones.com' },
                { name: 'LASIK Complications', url: 'https://keratocones.com/lasik-complications' },
                { name: 'Radial Keratotomy Problems' },
            ]} />

            {/* Hero */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-eyecare-navy to-eyecare-dark-blue text-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="text-center">
                            <p className="text-eyecare-lighter-blue font-semibold text-sm uppercase tracking-widest mb-4">Long-Term RK Complications</p>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                                Radial Keratotomy (RK) Problems<br className="hidden md:block" /> Years — or Decades — Later
                            </h1>
                            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                                You had RK in the 1980s or 1990s and it worked — for a while. Now your vision fluctuates through the day, reading glasses keep getting stronger, and your prescription changes every year. This is not unusual. It is what RK does over time.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="#lead-form" className="bg-white text-eyecare-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg">
                                    Schedule Evaluation
                                </a>
                                <a href="tel:+17145580641" className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                                    (714) 558-0641
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Patient Experience Validation */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-eyecare-navy mb-8 text-center">
                            Does This Sound Familiar?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { quote: "I wake up in the morning and the world is a blur. By noon, I can see clearly. By 4pm it's blurry again.", label: "Diurnal fluctuation" },
                                { quote: "My prescription changes every year and nothing I'm given actually works. Glasses help for a while, then they stop.", label: "Progressive hyperopic shift" },
                                { quote: "My doctor told me I'd be done with glasses after RK. Now I can't function without them and they barely work.", label: "RK overcorrection" },
                                { quote: "I was told my eyes were healthy and this would just go away. That was 15 years ago.", label: "Unaddressed long-term changes" },
                            ].map((item, i) => (
                                <div key={i} className="bg-eyecare-lighter-blue rounded-xl p-6 border-l-4 border-eyecare-blue">
                                    <p className="text-gray-700 italic mb-3 text-lg leading-relaxed">"{item.quote}"</p>
                                    <p className="text-eyecare-blue font-semibold text-sm uppercase tracking-wide">{item.label}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-gray-600 mt-8 text-lg">
                            These are not signs that your RK surgery was done wrong. They are the predictable long-term consequences of how radial keratotomy changes the cornea — changes that become more apparent with age.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Medical Explanation */}
            <section className="py-16 md:py-20 bg-eyecare-lighter-blue">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-eyecare-navy mb-4 text-center">
                            What RK Does to the Cornea — and Why It Changes Over Time
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Radial keratotomy was the LASIK of its era: a genuine breakthrough that helped millions. But the structural changes it creates are permanent and continue to evolve.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <div className="w-12 h-12 bg-eyecare-blue rounded-full flex items-center justify-center mb-4">
                                    <span className="text-white font-bold text-lg">1</span>
                                </div>
                                <h3 className="font-bold text-eyecare-navy text-lg mb-3">The Incisions Weaken the Cornea</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    RK involved making 4–16 radial cuts into the cornea — like pie slices — to flatten it and correct nearsightedness. These incisions reduce the cornea's structural integrity permanently. They never fully heal to their original strength.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <div className="w-12 h-12 bg-eyecare-blue rounded-full flex items-center justify-center mb-4">
                                    <span className="text-white font-bold text-lg">2</span>
                                </div>
                                <h3 className="font-bold text-eyecare-navy text-lg mb-3">Hyperopic Shift: Progressive Farsightedness</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Over years and decades, the weakened cornea continues to flatten beyond the original correction. Patients who were once nearsighted find themselves progressively more farsighted. This hyperopic drift often continues throughout life and accelerates after age 40–50 as the eye's natural lens loses flexibility.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <div className="w-12 h-12 bg-eyecare-blue rounded-full flex items-center justify-center mb-4">
                                    <span className="text-white font-bold text-lg">3</span>
                                </div>
                                <h3 className="font-bold text-eyecare-navy text-lg mb-3">Diurnal Variation: The Day/Night Prescription Shift</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Intraocular pressure (IOP) is higher when you sleep. With a weakened cornea, higher IOP causes the cornea to steepen overnight — making the eye more myopic in the morning. As IOP drops through the day, the cornea flattens, shifting toward hyperopia. Many RK patients have prescriptions that vary by 2–4 diopters from morning to afternoon.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Why Standard Solutions Fail */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-eyecare-navy mb-4 text-center">
                            Why Your Current Glasses or Contacts May Not Be Working
                        </h2>
                        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                            Standard vision correction is designed for normal corneas. RK creates an irregular corneal surface that standard optics cannot compensate for.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                                        <span className="text-red-600 font-bold">✕</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-eyecare-navy mb-1">Glasses correct for one moment in time</h3>
                                        <p className="text-gray-600">With diurnal variation, your corneal shape and prescription change throughout the day. A single glasses prescription cannot accommodate a prescription that shifts from −2.00 to +1.50 between morning and afternoon.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                                        <span className="text-red-600 font-bold">✕</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-eyecare-navy mb-1">Soft contacts follow the irregular surface</h3>
                                        <p className="text-gray-600">Soft contact lenses drape over the cornea and conform to its irregular shape. This means they inherit the irregularity rather than correcting it — providing only a modest improvement in vision quality.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                                        <span className="text-red-600 font-bold">✕</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-eyecare-navy mb-1">Re-treatment carries serious risks</h3>
                                        <p className="text-gray-600">LASIK or PRK on an RK-treated cornea risks corneal ectasia and further structural instability. Most surgeons decline to perform laser vision correction on RK corneas. Cataract surgery is more complex and outcomes less predictable in RK patients.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-eyecare-lighter-blue to-white rounded-2xl p-8 border border-eyecare-blue/20">
                                <h3 className="font-bold text-eyecare-navy text-xl mb-4">What Works: Scleral Lenses</h3>
                                <p className="text-gray-700 leading-relaxed mb-6">
                                    Scleral contact lenses vault completely over the irregular corneal surface — bridging from the sclera (white of the eye) across the cornea without touching it. The fluid-filled space between the lens and cornea creates a smooth, regular refracting surface regardless of the corneal irregularities.
                                </p>
                                <ul className="space-y-3">
                                    {[
                                        "Eliminate the optical impact of RK incisions",
                                        "Provide stable, high-quality vision throughout the day",
                                        "Comfortable to wear for 12–14 hours",
                                        "Work even with significant corneal irregularity",
                                        "No surgery required",
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-eyecare-blue font-bold mt-0.5">✓</span>
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/scleral-lenses-post-lasik-rk" className="mt-6 inline-block text-eyecare-blue font-semibold hover:underline">
                                    Learn more about scleral lenses for RK patients →
                                </Link>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* RK & Cataract Surgery */}
            <section className="py-16 md:py-20 bg-eyecare-lighter-blue">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-eyecare-navy mb-6 text-center">
                            RK and Cataract Surgery: A Complex Combination
                        </h2>
                        <div className="bg-white rounded-2xl p-8 shadow-sm">
                            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                                As RK patients enter their 50s, 60s, and 70s, cataract development is a common concern. Cataract surgery in an RK eye is significantly more complex than in a standard eye — and the outcomes are less predictable.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-bold text-eyecare-navy mb-3">The Challenge</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex gap-2"><span className="text-eyecare-blue">•</span> IOL power calculations are less accurate due to altered corneal shape</li>
                                        <li className="flex gap-2"><span className="text-eyecare-blue">•</span> Historical RK data affects biometry assumptions</li>
                                        <li className="flex gap-2"><span className="text-eyecare-blue">•</span> Residual refractive error after cataract surgery is more likely</li>
                                        <li className="flex gap-2"><span className="text-eyecare-blue">•</span> Post-surgical vision quality may still require specialty lens fitting</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-eyecare-navy mb-3">How We Help</h3>
                                    <ul className="space-y-2 text-gray-600">
                                        <li className="flex gap-2"><span className="text-green-600">✓</span> Pre-cataract topography and consultation</li>
                                        <li className="flex gap-2"><span className="text-green-600">✓</span> Post-cataract scleral lens fitting for residual error</li>
                                        <li className="flex gap-2"><span className="text-green-600">✓</span> Coordination with cataract surgeons experienced in RK eyes</li>
                                        <li className="flex gap-2"><span className="text-green-600">✓</span> Ongoing monitoring as vision continues to evolve</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Insurance Note */}
            <section className="py-10 bg-white">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <FadeIn>
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                            <h3 className="font-bold text-green-800 text-lg mb-2">Insurance Coverage for RK Complications</h3>
                            <p className="text-green-700">
                                Unlike elective vision correction, treatment for RK complications (including scleral lenses) is often covered under <strong>medical insurance</strong>, not just vision plans. Diagnoses such as irregular astigmatism, corneal ectasia, and residual refractive error after keratorefractive surgery support medical billing. Our team will help verify your coverage.
                            </p>
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
                                    q: "Why is my vision worse in the morning after RK surgery?",
                                    a: "This is called diurnal variation, and it is extremely common in RK patients. While you sleep, intraocular pressure (IOP) is higher, and the RK incisions allow the cornea to steepen under that pressure — producing myopia (nearsightedness) in the morning. As IOP drops during the day, the cornea flattens again, shifting toward hyperopia (farsightedness). Some patients experience 2–4 diopters of shift between morning and afternoon."
                                },
                                {
                                    q: "What is hyperopic shift after radial keratotomy?",
                                    a: "Hyperopic shift is a progressive, cumulative farsightedness that develops in RK patients over years or decades. RK was designed to flatten the cornea to correct myopia. Over time, the cornea continues to flatten — often beyond the intended correction — causing patients who were once nearsighted to become increasingly farsighted. This effect can worsen every decade."
                                },
                                {
                                    q: "Can I get LASIK to fix my RK complications?",
                                    a: "LASIK on an RK-treated cornea is high-risk and generally not recommended. The radial incisions that weakened the cornea for RK also make the cornea unstable for laser treatments. Most corneal surgeons will not perform LASIK on an RK cornea due to the risk of ectasia and unpredictable outcomes. Scleral contact lenses are typically the safest and most effective management option."
                                },
                                {
                                    q: "Will my RK vision keep getting worse?",
                                    a: "Many RK patients experience slow progressive changes throughout their lifetime. The hyperopic shift often continues gradually, and diurnal fluctuation can increase. Cataract surgery planning is also more complex for RK patients. Regular monitoring — and fitting scleral lenses early — provides the best outcomes over time."
                                },
                                {
                                    q: "Do scleral lenses work for RK patients?",
                                    a: "Yes — scleral lenses are often the best vision correction option for RK patients. Scleral lenses vault completely over the irregular corneal surface (created by the RK incisions) and rest on the less-affected sclera. This eliminates the optical impact of the corneal irregularities and provides a smooth, stable refracting surface. Most RK patients achieve dramatically better vision with scleral lenses than with glasses or standard contacts."
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
                                <p className="text-gray-600 text-sm">Understanding the full spectrum of refractive surgery complications and your options.</p>
                            </Link>
                            <Link href="/halos-after-lasik" className="block bg-eyecare-lighter-blue rounded-xl p-5 hover:shadow-md transition-shadow border border-eyecare-blue/10">
                                <h3 className="font-bold text-eyecare-navy mb-2">Halos & Glare After LASIK</h3>
                                <p className="text-gray-600 text-sm">Nighttime halos, starbursts, and glare — causes and what can be done.</p>
                            </Link>
                            <Link href="/scleral-lenses-post-lasik-rk" className="block bg-eyecare-lighter-blue rounded-xl p-5 hover:shadow-md transition-shadow border border-eyecare-blue/10">
                                <h3 className="font-bold text-eyecare-navy mb-2">Scleral Lenses for LASIK/RK</h3>
                                <p className="text-gray-600 text-sm">How scleral lenses restore stable vision after failed LASIK or RK surgery.</p>
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
                            Get a Specialist Evaluation for Your RK Complications
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Dr. Bonakdar has 35+ years of experience with complex corneal cases, including long-term RK patients. Most patients are seen within the same week.
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
