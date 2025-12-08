
import React from 'react';
import Link from 'next/link';
import { ChevronRight, BookOpen } from 'lucide-react';
import LandingLayout from '@/components/LandingLayout';

export default function ResourcesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <LandingLayout>
            <div className="bg-gray-50 min-h-screen py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8">

                        {/* Sidebar Navigation */}
                        <aside className="w-full lg:w-64 shrink-0">
                            <nav className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
                                <div className="flex items-center gap-2 mb-6 text-eyecare-navy">
                                    <BookOpen className="w-5 h-5" />
                                    <h3 className="font-bold text-lg font-serif">Library</h3>
                                </div>

                                <ul className="space-y-1">
                                    <li>
                                        <Link href="/keratoconus-resources" className="flex items-center justify-between text-sm py-2 px-3 rounded-lg bg-blue-50 text-eyecare-blue font-medium">
                                            Overview
                                            <ChevronRight className="w-4 h-4" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="flex items-center justify-between text-sm py-2 px-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-eyecare-blue transition-colors">
                                            What is Keratoconus?
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="flex items-center justify-between text-sm py-2 px-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-eyecare-blue transition-colors">
                                            Treatment Options
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="flex items-center justify-between text-sm py-2 px-3 rounded-lg text-gray-600 hover:bg-gray-50 hover:text-eyecare-blue transition-colors">
                                            Scleral Lenses 101
                                        </Link>
                                    </li>
                                    <div className="h-px bg-gray-100 my-2" />
                                    <li>
                                        <Link href="/" className="flex items-center text-xs py-2 px-3 text-gray-400 hover:text-eyecare-blue transition-colors">
                                            ← Back to Home
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </aside>

                        {/* Main Content Area */}
                        <main className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-8 lg:p-12 min-h-[600px]">
                            {children}
                        </main>

                    </div>
                </div>
            </div>
        </LandingLayout>
    );
}
