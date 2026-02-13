import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { articlesEs } from '@/data/articles-es';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

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
        title: `${article.metaTitle || article.title} | 500+ Casos`,
        description: `${article.metaDescription || article.description} 500+ casos. Hablamos español. (714) 558-0641`,
        keywords: ['queratocono', 'lentes esclerales', 'tratamiento córnea', article.category.toLowerCase()],
        openGraph: {
            title: article.metaTitle || article.title,
            description: article.metaDescription || article.description,
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

    // Article Schema — upgraded to MedicalScholarlyArticle for rich results
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalScholarlyArticle",
        "headline": article.title,
        "image": "https://keratocones.com/images/keratoconus-main.webp",
        "description": article.description,
        "datePublished": article.publishDate,
        "author": {
            "@type": "Physician",
            "name": "Dr. Alexander Bonakdar",
            "jobTitle": "Especialista en Queratocono",
            "url": "https://keratocones.com/es/acerca-de"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Centro de Visión para Queratocono",
            "url": "https://keratocones.com/es",
            "logo": {
                "@type": "ImageObject",
                "url": "https://keratocones.com/images/logo.png"
            }
        },
        "inLanguage": "es-MX"
    };

    // Related articles (exclude current, pick up to 3)
    const relatedArticles = articlesEs.filter((a) => a.slug !== resolvedParams.slug).slice(0, 3);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <BreadcrumbSchema items={[
                { name: 'Inicio', url: 'https://keratocones.com/es' },
                { name: 'Recursos', url: 'https://keratocones.com/es/recursos-queratocono' },
                { name: article.title },
            ]} />

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

                        {/* Related Articles */}
                        <div className="mb-16">
                            <h2 className="text-2xl font-bold text-eyecare-navy font-serif mb-8">Seguir Leyendo</h2>
                            <div className="grid md:grid-cols-3 gap-6">
                                {relatedArticles.map((related) => (
                                    <Link key={related.slug} href={`/es/recursos-queratocono/${related.slug}`} className="group">
                                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-eyecare-blue/30 hover:shadow-lg transition-all h-full flex flex-col">
                                            <span className="text-xs text-eyecare-blue font-medium mb-2">{related.category}</span>
                                            <h3 className="font-bold text-eyecare-navy group-hover:text-eyecare-blue transition-colors mb-3 text-sm leading-snug flex-1">
                                                {related.title}
                                            </h3>
                                            <span className="inline-flex items-center text-xs font-bold text-eyecare-blue">
                                                Leer <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

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
