
import Link from 'next/link';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { articles } from '@/data/articles';

export const metadata = {
    title: 'Keratoconus Resource Library | Dr. Bonakdar',
    description: 'Expert articles, guides, and research on Keratoconus, Scleral Lenses, and vision restoration options. The hidden library for advanced patients.',
};

export default function ResourcesPage() {
    // Featured Article (The First One)
    const featuredArticle = articles[0];
    const recentArticles = articles.slice(1);

    return (
        {/* Category 1: Understanding the Condition */ }
        < div className = "group block p-6 border border-gray-100 rounded-xl hover:border-eyecare-blue/30 hover:shadow-md transition-all" >
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-eyecare-blue mb-4">
                        <Activity className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-eyecare-navy mb-2 group-hover:text-eyecare-blue transition-colors">Understanding Keratoconus</h2>
                    <p className="text-sm text-gray-500 mb-4">Symptoms, causes, and progression stages.</p>
                    <ul className="space-y-2">
                        <li><Link href="#" className="text-sm text-gray-700 hover:text-eyecare-blue hover:underline">What are the 4 stages?</Link></li>
                        <li><Link href="#" className="text-sm text-gray-700 hover:text-eyecare-blue hover:underline">Genetic causes explained</Link></li>
                        <li><Link href="#" className="text-sm text-gray-700 hover:text-eyecare-blue hover:underline">Early signs to watch for</Link></li>
                    </ul>
                </div >

        {/* Category 2: Treatment & Lenses */ }
        < div className = "group block p-6 border border-gray-100 rounded-xl hover:border-eyecare-blue/30 hover:shadow-md transition-all" >
                    <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-4">
                        <Layers className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-eyecare-navy mb-2 group-hover:text-eyecare-blue transition-colors">Advanced Treatments</h2>
                    <p className="text-sm text-gray-500 mb-4">Scleral lenses, Cross-linking (CXL), and surgeries.</p>
                    <ul className="space-y-2">
                        <li><Link href="#" className="text-sm text-gray-700 hover:text-eyecare-blue hover:underline">Scleral Lenses vs. RGP</Link></li>
                        <li><Link href="#" className="text-sm text-gray-700 hover:text-eyecare-blue hover:underline">Is CXL right for me?</Link></li>
                        <li><Link href="#" className="text-sm text-gray-700 hover:text-eyecare-blue hover:underline">Insurance Guide</Link></li>
                    </ul>
                </div >

            </div >

        <div className="mt-12 p-8 bg-eyecare-navy text-white rounded-2xl">
            <h3 className="text-2xl font-serif font-bold mb-3">Not sure where to start?</h3>
            <p className="text-gray-300 mb-6">
                Every keratoconus case is unique. The best way to understand your options is a comprehensive corneal analysis.
            </p>
            <Link href="/#lead-form" className="inline-flex items-center bg-white text-eyecare-navy px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                Book Consultation <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
        </div>

        </div >
    );
}
