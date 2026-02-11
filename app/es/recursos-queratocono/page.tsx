import Link from 'next/link';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { articlesEs } from '@/data/articles-es';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Guías Queratocono en Español | 500+ Casos Tratados',
    description: 'Etapas, tratamientos y cómo evitar cirugía. Guías escritas por un especialista con 500+ casos. En español. (714) 558-0641',
    keywords: ['queratocono información', 'lentes esclerales guía', 'tratamiento queratocono', 'recursos queratocono español'],
    openGraph: {
        title: 'Guías Queratocono en Español | 500+ Casos Tratados',
        description: 'Etapas, tratamientos y cómo evitar cirugía. Guías de un especialista con 500+ casos. En español.',
        locale: 'es_MX',
    },
    alternates: {
        canonical: 'https://keratocones.com/es/recursos-queratocono',
        languages: {
            'en': 'https://keratocones.com/keratoconus-resources',
            'es': 'https://keratocones.com/es/recursos-queratocono',
        },
    },
};

export default function ResourcesPageEs() {
    const featuredArticle = articlesEs[0];
    const recentArticles = articlesEs.slice(1);

    const schema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Recursos de Queratocono",
        "description": "Biblioteca completa de artículos sobre Queratocono, Lentes Esclerales y opciones de tratamiento.",
        "url": "https://keratocones.com/es/recursos-queratocono",
        "inLanguage": "es-MX",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": articlesEs.slice(0, 5).map((article, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `https://keratocones.com/es/recursos-queratocono/${article.slug}`,
                "name": article.title
            }))
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            {/* Header */}
            <div className="bg-white border-b border-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <span className="text-eyecare-blue font-bold tracking-widest uppercase text-sm mb-2 block">Centro de Conocimiento</span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-eyecare-navy mb-6">
                        Recursos de Queratocono
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                        Información profunda sobre la condición, los mitos y los tratamientos modernos que están cambiando vidas.
                    </p>
                </div>
            </div>

            {/* Educational Intro */}
            <div className="bg-white border-b border-gray-100 py-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Vivir con queratocono puede sentirse aislante, especialmente cuando te dicen que "no hay nada más que se pueda hacer"
                        o que eventualmente necesitarás un trasplante de córnea. La verdad es que la tecnología moderna de lentes esclerales
                        ha revolucionado el tratamiento para esta condición corneal progresiva. Nuestra biblioteca de recursos está diseñada
                        para empoderarte con el conocimiento que necesitas para tomar decisiones informadas sobre tu cuidado visual.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Cada artículo en esta biblioteca está escrito basándose en los más de 20 años de experiencia clínica del Dr. Bonakdar
                        ajustando casos corneales complejos. Encontrarás información basada en evidencia sobre todo, desde entender las 4 etapas
                        de la progresión del queratocono hasta navegar la cobertura de seguros para lentes de contacto médicamente necesarios.
                    </p>
                    <p className="text-gray-600 italic">
                        Ya sea que estés recién diagnosticado o hayas estado luchando con queratocono por años, este centro de conocimiento
                        es tu punto de partida para entender lo que es posible con el tratamiento moderno.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                {/* Featured Post */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-eyecare-navy mb-8 flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-eyecare-blue" />
                        Guía Destacada
                    </h2>
                    <Link href={`/es/recursos-queratocono/${featuredArticle.slug}`} className="group block">
                        <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 grid md:grid-cols-2">
                            <div className="relative h-64 md:h-auto bg-eyecare-navy overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-900/40 mix-blend-overlay z-10" />
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
                                    Leer Guía Completa <ArrowRight className="w-5 h-5 ml-2" />
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Article Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentArticles.map((article) => (
                        <Link key={article.slug} href={`/es/recursos-queratocono/${article.slug}`} className="group">
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
                                    <span>Leer Artículo</span>
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
