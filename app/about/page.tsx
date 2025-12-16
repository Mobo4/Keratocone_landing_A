
import React from 'react';
import LandingLayout from '@/components/LandingLayout';
import LeadForm from '@/components/LeadForm';
import { Award, BookOpen, UserCheck, Heart } from 'lucide-react';
import { Metadata } from 'next';
import enMessages from '@/messages/en.json';

function t(key: string) {
    const keys = ('About.' + key).split('.');
    let value: any = enMessages;
    for (const k of keys) {
        value = value?.[k as keyof typeof value];
    }
    return (value as string) || key;
}

export const metadata: Metadata = {
    title: t('Metadata.title'),
    description: t('Metadata.description'),
    alternates: {
        canonical: 'https://keratocones.com/about',
    },
};

export default function AboutPage() {

    // Schema remains static or can be translated if needed, keeping English for schema is often safer/standard unless localized schema is desired.
    // The prompt asked to replace UI text. I will leave schema hardcoded for now or translate it if I have keys. 
    // I didn't create keys for schema specifically, only Metadata.
    // However, I will translate the visible text.

    const schema = {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "mainEntity": {
            "@type": "Person",
            "name": "Dr. Alexander Bonakdar",
            "jobTitle": "Optometrist",
            "medicalSpecialty": "Keratoconus Specialist",
            "worksFor": {
                "@type": "MedicalBusiness",
                "name": "Keratoconus Vision Center"
            },
            "description": "Orange County's leading expert in non-surgical vision restoration for Keratoconus with 20+ years of experience."
        }
    };

    return (
        <LandingLayout>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            {/* Hero Section */}
            <section className="bg-eyecare-navy text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t('Hero.headline')}</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        {t('Hero.subheadline')}
                    </p>
                </div>
            </section>

            {/* Bio Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
                        {/* Image */}
                        <div className="w-full md:w-1/2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-eyecare-blue/10 transform translate-x-4 translate-y-4 rounded-3xl"></div>
                                <img
                                    src="/images/drbonakdar.webp"
                                    alt="Dr. Alexander Bonakdar"
                                    className="relative rounded-3xl shadow-xl w-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl font-serif font-bold text-eyecare-navy mb-6">{t('Bio.name')}</h2>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                {t('Bio.p1')}
                            </p>
                            <p
                                className="text-lg text-gray-700 mb-6 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: t('Bio.p2') }}
                            />
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                {t('Bio.p3')}
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="flex items-start gap-3">
                                    <Award className="w-6 h-6 text-eyecare-blue mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-eyecare-navy">{t('Stats.specialistTitle')}</h4>
                                        <p className="text-sm text-gray-600">{t('Stats.specialistDesc')}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <UserCheck className="w-6 h-6 text-eyecare-blue mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-eyecare-navy">{t('Stats.experienceTitle')}</h4>
                                        <p className="text-sm text-gray-600">{t('Stats.experienceDesc')}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <BookOpen className="w-6 h-6 text-eyecare-blue mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-eyecare-navy">{t('Stats.educatorTitle')}</h4>
                                        <p className="text-sm text-gray-600">{t('Stats.educatorDesc')}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Heart className="w-6 h-6 text-eyecare-blue mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-eyecare-navy">{t('Stats.patientTitle')}</h4>
                                        <p className="text-sm text-gray-600">{t('Stats.patientDesc')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-eyecare-lighter-blue/30 p-6 rounded-xl border border-eyecare-blue/10">
                                <h3 className="font-bold text-eyecare-navy mb-3">{t('Travel.title')}</h3>
                                <p className="text-gray-700 leading-relaxed">
                                    {t('Travel.description')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-eyecare-lighter-blue py-24">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-eyecare-navy font-serif mb-6">{t('CTA.title')}</h2>
                    <p className="text-xl text-gray-600 mb-12">
                        {t('CTA.description')}
                    </p>
                    <div className="bg-white p-8 rounded-3xl shadow-xl">
                        <LeadForm />
                    </div>
                </div>
            </section>
        </LandingLayout>
    );
}
