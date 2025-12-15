import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { articlesEs } from '@/data/articles-es';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return articlesEs.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const article = articlesEs.find((a) => a.slug === resolvedParams.slug);
    if (!article) return {};

    return {
        title: `${article.title} | Centro de Visión para Queratocono`,
        description: article.description,
        keywords: ['queratocono', 'lentes esclerales', 'tratamiento córnea', article.category.toLowerCase()],
        openGraph: {
            title: article.title,
            description: article.description,
            type: 'article',
            publishedTime: article.publishDate,
            locale: 'es_MX',
        },
        alternates: {
            canonical: `https://keratocones.com/es/recursos-queratocono/${article.slug}`,
        },
    };
}

export default async function SpanishArticlePage({ params }: Props) {
    const resolvedParams = await params;
    const article = articlesEs.find((a) => a.slug === resolvedParams.slug);

    if (!article) {
        notFound();
    }

    // Article Schema
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.title,
        "description": article.description,
        "datePublished": article.publishDate,
        "author": {
            "@type": "Person",
            "name": "Dr. Alexander Bonakdar",
            "jobTitle": "Especialista en Queratocono"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Centro de Visión para Queratocono",
            "url": "https://keratocones.com/es"
        },
        "inLanguage": "es-MX"
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <div className="bg-white border-b border-gray-100 py-8">
                    <div className="container mx-auto px-4">
                        <Link href="/es/recursos-queratocono" className="inline-flex items-center text-eyecare-blue hover:underline mb-6">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Volver a Recursos
                        </Link>
                    </div>
                </div>

                {/* Article Content */}
                <article className="py-12">
                    <div className="container mx-auto px-4 max-w-3xl">
                        {/* Article Header */}
                        <header className="mb-12">
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">{article.category}</span>
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {article.readTime}</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl font-serif font-bold text-eyecare-navy mb-6 leading-tight">
                                {article.title}
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                {article.description}
                            </p>
                        </header>

                        {/* Author */}
                        <div className="flex items-center gap-4 p-6 bg-eyecare-lighter-blue rounded-2xl mb-12 border border-eyecare-blue/10">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-eyecare-navy shrink-0">
                                <img
                                    src="/images/drbonakdar.webp"
                                    alt="Dr. Alexander Bonakdar"
                                    className="w-full h-full object-cover"
                                    style={{ objectPosition: 'center 30%' }}
                                />
                            </div>
                            <div>
                                <p className="font-bold text-eyecare-navy">Dr. Alexander Bonakdar</p>
                                <p className="text-sm text-gray-600">Especialista en Queratocono • Más de 20 años de experiencia</p>
                            </div>
                        </div>

                        {/* Article Body */}
                        <div
                            className="prose prose-lg prose-blue max-w-none mb-16"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />

                        {/* CTA */}
                        <div className="bg-eyecare-navy text-white rounded-3xl p-8 md:p-12 text-center">
                            <h2 className="text-2xl font-bold mb-4 font-serif">¿Tienes Preguntas Sobre el Queratocono?</h2>
                            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                                Agenda una consulta con el Dr. Bonakdar para discutir tus opciones de tratamiento.
                            </p>
                            <Link
                                href="/es#lead-form"
                                className="inline-block bg-white text-eyecare-navy px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors"
                            >
                                Agendar Consulta
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
}
