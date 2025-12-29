'use client';

import React from 'react';
import FadeIn from '@/components/FadeIn';
import LeadForm from '@/components/LeadForm';
import { Award, BookOpen, UserCheck, Heart } from 'lucide-react';
import enMessages from '@/messages/en.json';

function t(key: string) {
    const keys = ('About.' + key).split('.');
    let value: any = enMessages;
    for (const k of keys) {
        value = value?.[k as keyof typeof value];
    }
    return (value as string) || key;
}

export default function AboutPageContent() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-eyecare-navy text-white py-20">
                <FadeIn>
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t('Hero.headline')}</h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            {t('Hero.subheadline')}
                        </p>
                    </div>
                </FadeIn>
            </section>

            {/* Bio Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
                        {/* Image */}
                        <FadeIn className="w-full md:w-1/2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-eyecare-blue/10 transform translate-x-4 translate-y-4 rounded-3xl"></div>
                                <img
                                    src="/images/drbonakdar.webp"
                                    alt="Dr. Alexander Bonakdar"
                                    className="relative rounded-3xl shadow-xl w-full object-cover"
                                />
                            </div>
                        </FadeIn>

                        {/* Content */}
                        <FadeIn delay={0.2} className="w-full md:w-1/2">
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
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Philosophy of Care Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold text-eyecare-navy font-serif mb-6">My Philosophy of Care</h2>
                            <div className="w-24 h-1 bg-eyecare-blue mx-auto rounded-full"></div>
                        </div>
                    </FadeIn>

                    <div className="space-y-12">
                        <FadeIn delay={0.1}>
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-2xl shrink-0">
                                    🔬
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-eyecare-navy mb-3">Precision is not Optional</h3>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        "In keratoconus treatment, 'good enough' is not enough. A difference of a few microns in a scleral lens fit can mean the difference between tolerating a lens for 4 hours versus 14 hours. I invest heavily in the most advanced topographers and profilometers because my patients deserve the highest possible standard of vision restoration."
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-2xl shrink-0">
                                    🤝
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-eyecare-navy mb-3">A Partnership for Life</h3>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        "Keratoconus is a lifelong condition, and I view my relationship with patients as a lifelong partnership. I am not just fitting a lens; I am monitoring your corneal health year after year. My goal is to ensure that you maintain functional, comfortable vision for decades to come, preventing the need for transplant whenever possible."
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-2xl shrink-0">
                                    🎓
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-eyecare-navy mb-3">Educate to Empower</h3>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        "I believe that an informed patient is a successful patient. I take the time to explain exactly what is happening with your eyes, showing you your own corneal maps and explaining the 'why' behind every treatment decision. When you understand your condition, you can advocate for your own vision health better."
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-eyecare-lighter-blue py-24">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <FadeIn>
                        <h2 className="text-3xl font-bold text-eyecare-navy font-serif mb-6">{t('CTA.title')}</h2>
                        <p className="text-xl text-gray-600 mb-12">
                            {t('CTA.description')}
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="bg-white p-8 rounded-3xl shadow-xl">
                            <LeadForm />
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}
