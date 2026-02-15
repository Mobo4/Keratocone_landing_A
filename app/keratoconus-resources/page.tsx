
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { articles } from '@/data/articles';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Keratoconus Guides & Resources | 500+ Cases Treated',
    description: 'Learn stages, treatments & how to avoid surgery from a specialist with 500+ keratoconus cases. Free guides. Book consult: (714) 558-0641',
    alternates: {
        canonical: 'https://www.keratocones.com/keratoconus-resources',
        languages: {
            'en': 'https://www.keratocones.com/keratoconus-resources',
            'es': 'https://www.keratocones.com/es/recursos-queratocono',
            'x-default': 'https://www.keratocones.com/keratoconus-resources',
        },
    },
};

export default function ResourcesPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Keratoconus Resources & Articles",
        "description": "Comprehensive library of articles about Keratoconus, Scleral Lenses, and non-surgical treatment options.",
        "url": "https://keratocones.com/keratoconus-resources",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": articles.slice(0, 5).map((article, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `https://keratocones.com/keratoconus-resources/${article.slug}`,
                "name": article.title
            }))
        }
    };

    // Featured Article (The First One)
    const featuredArticle = articles[0];
    const recentArticles = articles.slice(1);

    return (
        <div className="min-h-screen bg-gray-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <BreadcrumbSchema items={[
                { name: 'Home', url: 'https://keratocones.com' },
                { name: 'Keratoconus Resources' },
            ]} />
            {/* Header */}
            <div className="bg-white border-b border-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <span className="text-eyecare-blue font-bold tracking-widest uppercase text-sm mb-2 block">The Knowledge Hub</span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-eyecare-navy mb-6">
                        Keratoconus Resources
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                        Deep dives into the condition, the myths, and the modern treatments that are changing lives.
                    </p>
                </div>
            </div>

            {/* Educational Intro Section */}
            <div className="bg-white border-b border-gray-100 py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Living with keratoconus can feel isolating, especially when you're told that "nothing more can be done" or that you'll eventually need a corneal transplant.
                        The truth is that modern scleral lens technology has revolutionized treatment for this progressive corneal condition. Our resource library is designed to empower you
                        with the knowledge you need to make informed decisions about your vision care.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Each article in this library is written from Dr. Bonakdar's 20+ years of clinical experience fitting complex corneal cases. You'll find evidence-based information
                        on everything from understanding the 4 stages of keratoconus progression to navigating insurance coverage for medically necessary contact lenses. We cut through the myths
                        and provide you with actionable insights that can help you avoid unnecessary surgery and achieve the clear vision you deserve.
                    </p>
                    <p className="text-gray-600 italic">
                        Whether you're newly diagnosed or have been struggling with keratoconus for years, this knowledge hub is your starting point for understanding what's possible with modern treatment.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                {/* Featured Post */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-eyecare-navy mb-8 flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-eyecare-blue" />
                        Featured Guide
                    </h2>
                    <Link href={`/keratoconus-resources/${featuredArticle.slug}`} className="group block">
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 grid md:grid-cols-2">
                            <div className="relative h-64 md:h-auto bg-eyecare-navy overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-900/40 mix-blend-overlay z-10" />
                                {/* Abstract Geometric Pattern since we don't have distinct images for each yet */}
                                <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-white/10">
                                    <BookOpen className="w-32 h-32" />
                                </div>
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">{featuredArticle.category}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {featuredArticle.readTime}</span>
                                </div>
                                <h3 className="text-3xl font-serif font-bold text-eyecare-navy mb-4 group-hover:text-eyecare-blue transition-colors">
                                    {featuredArticle.title}
                                </h3>
                                <p className="text-gray-600 mb-6 text-lg line-clamp-3">
                                    {featuredArticle.description}
                                </p>
                                <span className="inline-flex items-center font-bold text-eyecare-blue group-hover:translate-x-2 transition-transform">
                                    Read Full Guide <ArrowRight className="w-5 h-5 ml-2" />
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Article Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentArticles.map((article) => (
                        <Link key={article.slug} href={`/keratoconus-resources/${article.slug}`} className="group">
                            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col">
                                <div className="p-8 flex-1">
                                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                                        <span className="bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full font-medium">{article.category}</span>
                                        <span>•</span>
                                        <span>{article.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-eyecare-navy mb-3 group-hover:text-eyecare-blue transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {article.description}
                                    </p>
                                </div>
                                <div className="px-8 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between text-sm font-medium text-eyecare-navy">
                                    <span>Read Article</span>
                                    <ArrowRight className="w-4 h-4 text-eyecare-blue group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
