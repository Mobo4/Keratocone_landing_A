
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { articles } from '@/data/articles';
import { articlesEs } from '@/data/articles-es';
import LeadForm from '@/components/LeadForm';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, Calendar, Tag } from 'lucide-react';
import Script from 'next/script';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

interface Props {
    params: Promise<{
        slug: string;
    }>;
}

// 1. Static Generation (SSG) for SEO speed
export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

// 2. Dynamic Metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);
    if (!article) return {};

    // Map EN article slug to ES equivalent by index
    const enIndex = articles.findIndex((a) => a.slug === slug);
    const esSlug = enIndex >= 0 && enIndex < articlesEs.length ? articlesEs[enIndex].slug : null;

    return {
        title: article.metaTitle || article.title,
        description: `${article.metaDescription || article.description} Call (714) 558-0641`,
        alternates: {
            canonical: `https://www.keratocones.com/keratoconus-resources/${slug}`,
            languages: {
                'en': `https://www.keratocones.com/keratoconus-resources/${slug}`,
                ...(esSlug ? { 'es': `https://www.keratocones.com/es/recursos-queratocono/${esSlug}` } : {}),
                'x-default': `https://www.keratocones.com/keratoconus-resources/${slug}`,
            },
        },
        openGraph: {
            title: article.metaTitle || article.title,
            description: article.metaDescription || article.description,
            type: 'article',
            publishedTime: article.publishDate,
            authors: ['Dr. Alexander Bonakdar'],
        },
    };
}

// 3. Article Component
export default async function ArticlePage({ params }: Props) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        notFound();
    }

    // Article Schema
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalScholarlyArticle",
        "headline": article.title,
        "image": "https://keratocones.com/images/keratoconus-main.webp",
        "author": {
            "@type": "Physician",
            "name": "Dr. Alexander Bonakdar",
            "url": "https://keratocones.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Keratoconus Vision Center",
            "logo": {
                "@type": "ImageObject",
                "url": "https://keratocones.com/images/logo.png"
            }
        },
        "datePublished": article.publishDate,
        "description": article.description
    };

    // Related articles (exclude current, pick up to 3)
    const relatedArticles = articles.filter((a) => a.slug !== slug).slice(0, 3);

    return (
        <main className="min-h-screen bg-white">
            <Script
                id="article-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <BreadcrumbSchema items={[
                { name: 'Home', url: 'https://keratocones.com' },
                { name: 'Resources', url: 'https://keratocones.com/keratoconus-resources' },
                { name: article.title },
            ]} />

            {/* Global Header/Nav is handled by Layout, but we want a Hero-like header here */}
            <div className="bg-eyecare-navy text-white pt-32 pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <Link href="/keratoconus-resources" className="inline-flex items-center text-blue-200 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Resources
                    </Link>

                    <div className="flex items-center gap-4 text-sm text-blue-200 mb-6">
                        <span className="bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30 flex items-center gap-2">
                            <Tag className="w-3 h-3" />
                            {article.category}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="w-3 h-3" />
                            {article.readTime}
                        </span>
                        <span className="flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            {article.publishDate}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight">
                        {article.title}
                    </h1>
                </div>
            </div>

            <article className="container mx-auto px-4 max-w-4xl py-16">
                {/* Content Body */}
                <div
                    className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:text-eyecare-navy prose-a:text-eyecare-blue hover:prose-a:text-eyecare-dark-blue"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                />

                {/* Author Bio (SEO Trust Signal) */}
                <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-100 flex gap-6 items-start">
                    <img
                        src="/images/drbonakdar.webp"
                        alt="Dr. Bonakdar"
                        className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <div>
                        <h3 className="text-xl font-bold text-eyecare-navy font-serif mb-2">About the Author</h3>
                        <p className="text-gray-600 mb-4">
                            Dr. Alexander Bonakdar is a specialist in complex contact lens fitting for keratoconus. With over 20 years of experience, he is a trusted referral source for CHOC and UCI Medical Center.
                        </p>
                        <Link href="/contact" className="text-eyecare-blue font-bold hover:underline">
                            Book an Appointment &rarr;
                        </Link>
                    </div>
                </div>
            </article>

            {/* Related Articles */}
            <section className="bg-white py-16 border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold text-eyecare-navy font-serif mb-8">Continue Reading</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {relatedArticles.map((related) => (
                            <Link key={related.slug} href={`/keratoconus-resources/${related.slug}`} className="group">
                                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-eyecare-blue/30 hover:shadow-lg transition-all h-full flex flex-col">
                                    <span className="text-xs text-eyecare-blue font-medium mb-2">{related.category}</span>
                                    <h3 className="font-bold text-eyecare-navy group-hover:text-eyecare-blue transition-colors mb-3 text-sm leading-snug flex-1">
                                        {related.title}
                                    </h3>
                                    <span className="inline-flex items-center text-xs font-bold text-eyecare-blue">
                                        Read <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-eyecare-lighter-blue py-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold text-eyecare-navy font-serif mb-4">Still Have Questions?</h2>
                        <p className="text-xl text-gray-600">
                            Reading is good, but seeing is believing. Schedule a consultation to see what Scleral Lenses can do for your specific case.
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden p-8 border border-eyecare-blue/10">
                        <LeadForm />
                    </div>
                </div>
            </section>
        </main>
    );
}
