'use client';

import Link from 'next/link';
import { ArrowRight, BookOpen, Code } from 'lucide-react';
import FadeIn from './FadeIn';

const STATS = [
    { value: '1 in 375', label: 'Estimated Prevalence', source: 'Godefrooij et al., Acta Ophthalmol 2017' },
    { value: '10–25', label: 'Typical Age of Onset (years)', source: 'Rabinowitz, Surv Ophthalmol 1998' },
    { value: '90%', label: 'Avoid Surgery with Scleral Lenses', source: 'Schornack et al., Eye Contact Lens 2014' },
    { value: '10–20%', label: 'Eventually Need Corneal Transplant', source: 'Romero-Jiménez et al., Cont Lens Anterior Eye 2010' },
    { value: '2×', label: 'Higher Risk with Eye Rubbing', source: 'Bawazeer et al., Cornea 2000' },
    { value: '15–67%', label: 'Family History Link Reported', source: 'Wang et al., Annu Rev Vis Sci 2022' },
];

const SECTIONS = [
    {
        id: 'prevalence',
        heading: 'How Common Is Keratoconus?',
        content: `Keratoconus was historically estimated to affect roughly 1 in 2,000 people. However, modern corneal tomography screening has revealed the condition is far more common. A 2017 meta-analysis published in <em>Acta Ophthalmologica</em> estimated a prevalence of approximately 1 in 375 people worldwide. The condition is more frequently diagnosed in populations of South Asian, Middle Eastern, and Hispanic descent. Because early-stage keratoconus often goes undetected with standard eye exams, many cases remain undiagnosed until the cornea has already changed shape significantly.`,
        source: 'Godefrooij DA et al. "Age-specific incidence and prevalence of keratoconus." Acta Ophthalmol. 2017;95(3):222-231.',
    },
    {
        id: 'age-onset',
        heading: 'When Does Keratoconus Typically Start?',
        content: `Keratoconus usually begins during puberty or early adulthood, most often between the ages of 10 and 25. The condition tends to progress for 10 to 20 years before the corneal shape stabilizes. Younger patients at diagnosis are more likely to experience faster progression, making early detection and intervention especially important. Pediatric cases diagnosed before age 15 often represent the most aggressive form of the disease.`,
        source: 'Rabinowitz YS. "Keratoconus." Surv Ophthalmol. 1998;42(4):297-319.',
    },
    {
        id: 'risk-factors',
        heading: 'What Causes Keratoconus?',
        content: `The exact cause of keratoconus is not fully understood, but research points to a combination of genetic susceptibility and environmental triggers. Chronic eye rubbing is consistently identified as one of the strongest modifiable risk factors. Atopic conditions such as asthma, eczema, and allergic conjunctivitis are associated with higher keratoconus rates—likely because they increase the tendency to rub the eyes. Studies report that 15% to 67% of keratoconus patients have a first-degree relative with the condition, suggesting a significant hereditary component. Sleep position (face-down sleeping) and floppy eyelid syndrome have also been linked to keratoconus development.`,
        source: 'Wang Y et al. "Genetic and Environmental Factors in Keratoconus." Annu Rev Vis Sci. 2022;8:505-526.',
    },
    {
        id: 'treatment-outcomes',
        heading: 'How Is Keratoconus Treated?',
        content: `Treatment depends on the stage of the disease. In early stages, glasses or soft contact lenses may still provide adequate vision. As the cornea becomes more irregular, rigid gas permeable (RGP) lenses or scleral lenses are used to create a smooth optical surface over the cone. Scleral lenses vault over the entire cornea and rest on the sclera (white of the eye), making them the most effective non-surgical option for moderate to advanced keratoconus. Approximately 90% of keratoconus patients who are fitted with scleral lenses achieve functional vision and avoid the need for corneal transplant surgery. Corneal cross-linking (CXL), an FDA-approved procedure since 2016, can slow or halt progression by strengthening the collagen bonds within the cornea.`,
        source: 'Schornack MM et al. "Scleral Lenses in the Management of Keratoconus." Eye Contact Lens. 2014;40(3):185-189.',
    },
    {
        id: 'surgery',
        heading: 'How Often Does Keratoconus Require Surgery?',
        content: `Between 10% and 20% of keratoconus patients eventually require corneal transplant surgery (penetrating keratoplasty or deep anterior lamellar keratoplasty). The rate of transplant has decreased over the past two decades due to advances in specialty contact lens design and the availability of corneal cross-linking. Corneal transplant for keratoconus has a high success rate—over 90% graft survival at 10 years—but the procedure requires prolonged recovery (12 to 18 months) and lifelong follow-up to monitor for graft rejection.`,
        source: 'Romero-Jiménez M et al. "Keratoconus: A review." Cont Lens Anterior Eye. 2010;33(4):157-166.',
    },
    {
        id: 'progression',
        heading: 'Is Keratoconus Progressive?',
        content: `Yes. Keratoconus is a progressive condition, meaning the cornea continues to thin and steepen over time without intervention. Progression is typically fastest in the teenage years and twenties, and usually stabilizes naturally by the mid-30s to 40s. However, the degree and rate of progression vary significantly between individuals. Serial corneal topography (mapping) every 6 to 12 months is the standard method for monitoring progression. Corneal cross-linking can be performed when progression is documented to prevent further corneal weakening.`,
        source: 'Gordon-Shaag A et al. "The Genetic and Environmental Factors for Keratoconus." Biomed Res Int. 2015;2015:795738.',
    },
];

export default function KeratoconusFactsContent() {
    const embedCode = `<blockquote cite="https://keratocones.com/keratoconus-facts"><p><strong>Keratoconus affects approximately 1 in 375 people</strong> — far more common than previously estimated. 90% of patients achieve functional vision with scleral lenses and avoid corneal transplant surgery.</p><footer>— <a href="https://keratocones.com/keratoconus-facts">Keratoconus Facts &amp; Statistics</a>, Keratoconus Vision Center</footer></blockquote>`;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b border-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <FadeIn>
                        <span className="text-eyecare-blue font-bold tracking-widest uppercase text-sm mb-2 block">Evidence-Based Reference</span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-eyecare-navy mb-6">
                            Keratoconus Facts &amp; Statistics
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                            Peer-reviewed prevalence data, risk factors, treatment outcomes, and prognosis for keratoconus. All statistics sourced from published ophthalmology research.
                        </p>
                    </FadeIn>
                </div>
            </div>

            {/* Key Stats Grid */}
            <div className="container mx-auto px-4 py-16">
                <FadeIn>
                    <h2 className="text-2xl font-bold text-eyecare-navy font-serif mb-10 text-center">Key Statistics at a Glance</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
                        {STATS.map((stat, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center">
                                <p className="text-4xl font-bold text-eyecare-blue mb-2">{stat.value}</p>
                                <p className="font-semibold text-eyecare-navy mb-2">{stat.label}</p>
                                <p className="text-xs text-gray-400">{stat.source}</p>
                            </div>
                        ))}
                    </div>
                </FadeIn>

                {/* Detailed Sections */}
                <div className="max-w-3xl mx-auto space-y-16">
                    {SECTIONS.map((section) => (
                        <FadeIn key={section.id}>
                            <section id={section.id}>
                                <h2 className="text-2xl font-bold text-eyecare-navy font-serif mb-4">{section.heading}</h2>
                                <div
                                    className="text-lg text-gray-700 leading-relaxed mb-4"
                                    dangerouslySetInnerHTML={{ __html: section.content }}
                                />
                                <p className="text-sm text-gray-400 border-l-2 border-gray-200 pl-4 italic">
                                    {section.source}
                                </p>
                            </section>
                        </FadeIn>
                    ))}
                </div>

                {/* Embed / Share Section */}
                <FadeIn>
                    <div className="max-w-3xl mx-auto mt-20 bg-white rounded-2xl border border-gray-100 p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <Code className="w-5 h-5 text-eyecare-blue" />
                            <h2 className="text-xl font-bold text-eyecare-navy">Cite or Embed These Statistics</h2>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Healthcare professionals, writers, and patient advocates are welcome to cite this page. Use the embed code below to include a summary on your own site:
                        </p>
                        <div className="bg-gray-50 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-xs text-gray-600 whitespace-pre-wrap break-all">{embedCode}</pre>
                        </div>
                        <p className="text-xs text-gray-400 mt-3">
                            Please link back to <span className="font-medium">keratocones.com/keratoconus-facts</span> when citing.
                        </p>
                    </div>
                </FadeIn>

                {/* Internal Links */}
                <FadeIn>
                    <div className="max-w-3xl mx-auto mt-16 grid md:grid-cols-2 gap-6">
                        <Link href="/keratoconus-resources" className="group block bg-white rounded-2xl p-6 border border-gray-100 hover:border-eyecare-blue/30 hover:shadow-lg transition-all">
                            <div className="flex items-center gap-3 mb-2">
                                <BookOpen className="w-5 h-5 text-eyecare-blue" />
                                <h3 className="font-bold text-eyecare-navy group-hover:text-eyecare-blue transition-colors">Patient Resource Library</h3>
                            </div>
                            <p className="text-sm text-gray-600 mb-3">In-depth guides on keratoconus stages, treatment options, and living with the condition.</p>
                            <span className="inline-flex items-center text-sm font-bold text-eyecare-blue">
                                Browse Articles <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                        <Link href="#lead-form" className="group block bg-eyecare-navy rounded-2xl p-6 text-white hover:shadow-lg transition-all">
                            <h3 className="font-bold mb-2">Have Questions?</h3>
                            <p className="text-sm text-blue-100 mb-3">Schedule a consultation with a keratoconus specialist to discuss your specific case.</p>
                            <span className="inline-flex items-center text-sm font-bold text-white">
                                Request Appointment <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
}
