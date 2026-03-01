import { Metadata } from 'next';
import LandingLayout from '@/components/LandingLayout';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import LeadForm from '@/components/LeadForm';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'LASIK Complications Specialist Orange County | Dr. Bonakdar',
    description: 'Halos after LASIK, unstable vision from radial keratotomy, or persistent dry eye that won\'t resolve — Dr. Bonakdar in Orange County specializes in treating the complications that other providers don\'t know how to fix.',
    keywords: [
        'LASIK complications specialist',
        'LASIK complications orange county',
        'failed LASIK specialist',
        'LASIK side effects treatment',
        'post LASIK problems',
        'LASIK complications doctor',
        'corneal ectasia LASIK',
        'LASIK dry eye treatment',
        'radial keratotomy complications',
        'post-surgical corneal specialist',
    ],
    alternates: {
        canonical: 'https://www.keratocones.com/lasik-complications',
        languages: {
            'en': 'https://www.keratocones.com/lasik-complications',
            'x-default': 'https://www.keratocones.com/lasik-complications',
        },
    },
    openGraph: {
        title: 'LASIK Complications Specialist Orange County | Dr. Bonakdar',
        description: 'Halos, dry eye, unstable vision after LASIK or RK — specialist care when standard solutions have failed.',
        url: 'https://www.keratocones.com/lasik-complications',
        siteName: 'Keratoconus Vision Center',
        locale: 'en_US',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'LASIK Complications Specialist Orange County',
        description: 'When LASIK or RK leaves you worse off — specialist evaluation and scleral lens solutions in Orange County.',
    },
};

const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "LASIK and Refractive Surgery Complications",
    "description": "Specialist care for LASIK complications including halos, ectasia, dry eye, and radial keratotomy long-term problems in Orange County.",
    "url": "https://www.keratocones.com/lasik-complications",
    "inLanguage": "en-US",
    "about": {
        "@type": "MedicalCondition",
        "name": "Post-Refractive Surgery Complications"
    },
    "author": {
        "@type": "Physician",
        "name": "Dr. Alexander Bonakdar",
        "jobTitle": "Corneal & Specialty Lens Specialist",
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

const complications = [
    {
        href: "/halos-after-lasik",
        title: "Halos & Glare After LASIK",
        desc: "Nighttime halos, starbursts around headlights, ghost images, and glare that persist long after LASIK. Caused by small optical zones, irregular healing, or early ectasia.",
        symptoms: ["Halos around lights at night", "Starbursts from headlights", "Ghost images or double vision", "Difficulty driving after dark"],
        urgent: false,
    },
    {
        href: "/radial-keratotomy-problems",
        title: "Radial Keratotomy (RK) Long-Term Problems",
        desc: "Patients who had RK surgery in the 1980s or 1990s often experience progressive farsightedness and dramatic vision fluctuation from morning to afternoon — decades after their surgery.",
        symptoms: ["Blurry vision in the morning", "Vision shifts throughout the day", "Progressive need for reading glasses", "Prescription changes every year"],
        urgent: false,
    },
    {
        href: "/scleral-lenses-post-lasik-rk",
        title: "Scleral Lens Fitting for Post-Surgical Corneas",
        desc: "When refractive surgery leaves an irregular cornea, scleral lenses create a new smooth optical surface — restoring sharp, stable vision that glasses and standard contacts cannot achieve.",
        symptoms: ["Unstable or distorted vision", "Best corrected vision still poor", "Multiple glasses not working", "Irregular astigmatism diagnosis"],
        urgent: false,
    },
    {
        href: "#lead-form",
        title: "Corneal Ectasia After LASIK",
        desc: "A serious but manageable complication where the cornea progressively weakens and deforms after LASIK — causing worsening vision, distortion, and halos. Requires urgent specialty evaluation.",
        symptoms: ["Vision getting progressively worse", "Glasses prescription changing frequently", "Increasing distortion or halos", "Told cornea is 'bulging' or 'thinning'"],
        urgent: true,
    },
];

export default function LasikComplicationsPage() {
    return (
        <LandingLayout>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <BreadcrumbSchema items={[
                { name: 'Home', url: 'https://keratocones.com' },
                { name: 'LASIK Complications' },
            ]} />

            {/* Hero */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-eyecare-navy to-eyecare-dark-blue text-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="text-center">
                            <p className="text-eyecare-lighter-blue font-semibold text-sm uppercase tracking-widest mb-4">Post-Surgical Corneal Care</p>
                            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                                LASIK & Refractive Surgery<br className="hidden md:block" /> Complications Specialist
                            </h1>
                            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8 leading-relaxed">
                                Halos that won't go away. Vision that shifts from morning to afternoon. A prescription that changes every year. If you've been told "it's normal" or "nothing can be done" — you deserve a second opinion from a specialist who actually treats these conditions every day.
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

            {/* Who We Help */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-eyecare-navy mb-4 text-center">
                            Who Comes to Us
                        </h2>
                        <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
                            Our patients typically arrive after years of frustration — having been told their symptoms are normal, untreatable, or something they have to live with. They are not.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { icon: "👁️", desc: "People who had LASIK 5–20 years ago and have never fully recovered satisfactory vision" },
                                { icon: "🌙", desc: "Patients who cannot drive at night due to halos and starbursts around every light source" },
                                { icon: "📅", desc: "RK patients from the 1980s and 90s whose vision has been declining for years" },
                                { icon: "😓", desc: "Patients with chronic dry eye that started after LASIK and never fully resolved" },
                                { icon: "🔍", desc: "Individuals whose prescription changes significantly every year with no explanation" },
                                { icon: "🏥", desc: "Patients who have been evaluated by their LASIK surgeon and told nothing can be done" },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 bg-eyecare-lighter-blue rounded-xl p-5">
                                    <span className="text-2xl shrink-0">{item.icon}</span>
                                    <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Complication Cards */}
            <section className="py-16 md:py-20 bg-eyecare-lighter-blue">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-eyecare-navy mb-4 text-center">
                            Conditions We Specialize In
                        </h2>
                        <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
                            Select the condition that best describes what you're experiencing to learn more.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {complications.map((comp, i) => (
                                <Link
                                    key={i}
                                    href={comp.href}
                                    className={`block bg-white rounded-2xl p-7 shadow-sm border-2 hover:shadow-lg transition-all group ${comp.urgent ? 'border-red-300 hover:border-red-500' : 'border-eyecare-blue/10 hover:border-eyecare-blue'}`}
                                >
                                    {comp.urgent && (
                                        <span className="inline-block bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wide rounded-full px-3 py-1 mb-3">
                                            Urgent Evaluation Recommended
                                        </span>
                                    )}
                                    <h3 className={`font-bold text-xl mb-3 group-hover:text-eyecare-blue transition-colors ${comp.urgent ? 'text-red-800' : 'text-eyecare-navy'}`}>
                                        {comp.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">{comp.desc}</p>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold mb-2">Common symptoms:</p>
                                        <ul className="space-y-1">
                                            {comp.symptoms.map((s, j) => (
                                                <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                                                    <span className={`font-bold mt-0.5 ${comp.urgent ? 'text-red-500' : 'text-eyecare-blue'}`}>•</span>
                                                    {s}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className={`mt-5 font-semibold text-sm group-hover:underline ${comp.urgent ? 'text-red-700' : 'text-eyecare-blue'}`}>
                                        {comp.urgent ? 'Request urgent evaluation →' : 'Learn more →'}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Why Us */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-eyecare-navy mb-6">
                                    Why Patients Come to Dr. Bonakdar After Trying Elsewhere
                                </h2>
                                <div className="space-y-5">
                                    <div>
                                        <h3 className="font-bold text-eyecare-navy mb-2">35+ Years of Corneal Specialty Experience</h3>
                                        <p className="text-gray-600">Dr. Bonakdar has been fitting specialty contact lenses for complex corneal cases since before LASIK existed. He has managed patients through LASIK's entire history — including the early optical zone issues of the 1990s and the long-term progression of RK from the same era.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-eyecare-navy mb-2">Referral Center for UCI Medical Center and CHOC</h3>
                                        <p className="text-gray-600">Complex corneal cases are referred here from OC's major medical institutions. Post-surgical complications that are beyond the scope of standard optometry or ophthalmology practices are exactly what we handle.</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-eyecare-navy mb-2">No Surgery. No Wait Lists. Most Seen Same Week.</h3>
                                        <p className="text-gray-600">Our approach for most post-LASIK and RK patients is non-surgical: comprehensive evaluation, precise diagnosis, and scleral lens fitting. Appointments are typically available within the same week.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-eyecare-lighter-blue rounded-2xl p-8">
                                <h3 className="font-bold text-eyecare-navy text-xl mb-6">What Your Evaluation Includes</h3>
                                <ul className="space-y-4">
                                    {[
                                        { title: "Corneal Topography", desc: "Complete mapping of your corneal surface to identify irregularities, ectasia, or abnormal patterns" },
                                        { title: "Wavefront Analysis", desc: "Measures higher-order aberrations causing halos, starbursts, and glare that glasses cannot correct" },
                                        { title: "Tear Film Assessment", desc: "Evaluates dry eye severity and its contribution to your visual symptoms" },
                                        { title: "Scleral Lens Trial", desc: "If appropriate, you will try a scleral lens during the visit to experience the improvement firsthand" },
                                        { title: "Full Records Review", desc: "We review your pre-LASIK or pre-RK data if available for comparison" },
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-3">
                                            <span className="text-eyecare-blue font-bold mt-0.5">✓</span>
                                            <div>
                                                <p className="font-semibold text-eyecare-navy">{item.title}</p>
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

            {/* Important Note for Ectasia */}
            <section className="py-10 bg-red-50 border-t border-b border-red-200">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <FadeIn>
                        <h3 className="font-bold text-red-800 text-xl mb-3">If You Suspect Corneal Ectasia After LASIK — Act Promptly</h3>
                        <p className="text-red-700 leading-relaxed">
                            Corneal ectasia is a progressive condition that can be stabilized with cross-linking if caught early. If your vision has been getting progressively worse since LASIK — with increasing distortion, irregular astigmatism on topography, or a bulging-shaped corneal map — please schedule urgently. Early intervention improves outcomes significantly.
                        </p>
                        <a href="tel:+17145580641" className="mt-4 inline-block bg-red-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-800 transition-colors">
                            Call (714) 558-0641 for Urgent Appointment
                        </a>
                    </FadeIn>
                </div>
            </section>

            {/* Lead Form */}
            <section id="lead-form" className="py-12 md:py-24 bg-eyecare-lighter-blue">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-eyecare-navy mb-4">
                            Request Your Post-LASIK or RK Evaluation
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Most patients are seen within the same week. If you have prior topography or records from your LASIK or RK provider, bring them — but we can complete a full evaluation without them.
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
