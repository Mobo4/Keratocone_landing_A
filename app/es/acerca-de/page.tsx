
import { Metadata } from 'next';
import LandingLayout from '@/components/LandingLayout';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import esMessages from '@/messages/es.json';

function t(key: string) {
    const keys = ('About.' + key).split('.');
    let value: any = esMessages;
    for (const k of keys) {
        value = value?.[k as keyof typeof value];
    }
    return (value as string) || key;
}

export const metadata: Metadata = {
    title: t('Metadata.title'),
    description: t('Metadata.description'),
    openGraph: {
        title: t('Metadata.title'),
        description: t('Metadata.description'),
        locale: 'es_MX',
    },
    alternates: {
        canonical: 'https://www.keratocones.com/es/acerca-de',
        languages: {
            'en': 'https://www.keratocones.com/about',
            'es': 'https://www.keratocones.com/es/acerca-de',
            'x-default': 'https://www.keratocones.com/about',
        },
    },
};

export default function AboutPageEs() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "name": "Perfil del Dr. Alexander Bonakdar",
        "inLanguage": "es-MX",
        "mainEntity": {
            "@type": "Person",
            "name": "Dr. Alexander Bonakdar",
            "jobTitle": "Optometrista",
            "medicalSpecialty": "Especialista en Queratocono",
            "worksFor": {
                "@type": "MedicalBusiness",
                "name": "Centro de Visión para Queratocono"
            },
            "description": "Especialista líder en Orange County en restauración de visión no quirúrgica para Queratocono con más de 20 años de experiencia."
        }
    };

    return (
        <LandingLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <BreadcrumbSchema items={[
                { name: 'Inicio', url: 'https://keratocones.com/es' },
                { name: 'Acerca del Dr. Bonakdar' },
            ]} />
            <div className="bg-white py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <FadeIn>
                        {/* Hero Section */}
                        <div className="text-center mb-16">
                            <span className="text-eyecare-blue font-bold tracking-widest uppercase text-sm mb-4 block">{t('Hero.label')}</span>
                            <h1 className="text-4xl md:text-5xl font-serif font-bold text-eyecare-navy mb-6">
                                {t('Hero.headline')}
                            </h1>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                                {t('Hero.subheadline')}
                            </p>
                        </div>

                        {/* Doctor Image and Bio */}
                        <div className="grid md:grid-cols-3 gap-12 mb-16">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-eyecare-navy mb-6 shadow-2xl">
                                    <img
                                        src="/images/drbonakdar.webp"
                                        alt="Dr. Alexander Bonakdar"
                                        className="w-full h-full object-cover"
                                        style={{ objectPosition: 'center 30%' }}
                                    />
                                </div>
                                <h2 className="text-2xl font-bold mb-2 font-serif text-eyecare-navy">{t('Bio.name')}</h2>
                                <p className="text-eyecare-blue font-medium">{t('Bio.title')}</p>
                            </div>

                            <div className="md:col-span-2 space-y-6">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {t('Bio.p1')}
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {t('Bio.p2')}
                                </p>
                            </div>
                        </div>

                        {/* Credentials */}
                        <div className="grid md:grid-cols-4 gap-6 mb-16">
                            {[
                                { stat: t('Stats.experienceStat'), label: t('Stats.experienceLabel') },
                                { stat: t('Stats.referralStat'), label: t('Stats.referralLabel') },
                                { stat: t('Stats.consultantStat'), label: t('Stats.consultantLabel') },
                                { stat: t('Stats.successStat'), label: t('Stats.successLabel') },
                            ].map((item, idx) => (
                                <div key={idx} className="text-center p-6 bg-eyecare-lighter-blue rounded-2xl">
                                    <p className="text-3xl font-bold text-eyecare-navy mb-2">{item.stat}</p>
                                    <p className="text-sm text-gray-600 font-medium">{item.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Why Patients Travel */}
                        <div className="bg-gradient-to-r from-eyecare-navy to-blue-900 text-white rounded-3xl p-8 md:p-12 mb-16">
                            <h2 className="text-2xl font-bold mb-6 font-serif">{t('Travel.title')}</h2>
                            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                                {t('Travel.p1')}
                            </p>
                            <p className="text-lg text-blue-100 leading-relaxed">
                                {t('Travel.p2')}
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-eyecare-navy mb-4 font-serif">{t('CTA.title')}</h2>
                            <p className="text-gray-600 mb-8">{t('CTA.description')}</p>
                            <Link
                                href="/es#lead-form"
                                className="inline-block bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-4 rounded-xl font-bold transition-colors"
                            >
                                {t('CTA.button')}
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </LandingLayout>
    );
}
