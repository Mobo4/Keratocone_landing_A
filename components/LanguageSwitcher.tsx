'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
    const pathname = usePathname();
    const router = useRouter();
    const [isSpanish, setIsSpanish] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsSpanish(pathname.startsWith('/es'));
    }, [pathname]);

    const switchLanguage = (lang: 'en' | 'es') => {
        // Set cookie for language preference
        document.cookie = `preferred-language=${lang};path=/;max-age=${60 * 60 * 24 * 365}`;

        if (lang === 'es' && !pathname.startsWith('/es')) {
            // Switch to Spanish
            const newPath = pathname === '/' ? '/es' : `/es${pathname}`;
            router.push(newPath);
        } else if (lang === 'en' && pathname.startsWith('/es')) {
            // Switch to English
            const newPath = pathname.replace('/es', '') || '/';
            router.push(newPath);
        }
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-eyecare-blue transition-colors rounded-lg hover:bg-gray-100"
                aria-label="Select language"
            >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{isSpanish ? 'ES' : 'EN'}</span>
                <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-100 z-50 overflow-hidden">
                        <button
                            onClick={() => switchLanguage('en')}
                            className={`w-full px-4 py-3 text-left text-sm flex items-center gap-3 hover:bg-gray-50 transition-colors ${!isSpanish ? 'bg-eyecare-lighter-blue text-eyecare-navy font-medium' : 'text-gray-700'}`}
                        >
                            <span className="text-lg">🇺🇸</span>
                            <span>English</span>
                            {!isSpanish && <span className="ml-auto text-eyecare-blue">✓</span>}
                        </button>
                        <button
                            onClick={() => switchLanguage('es')}
                            className={`w-full px-4 py-3 text-left text-sm flex items-center gap-3 hover:bg-gray-50 transition-colors ${isSpanish ? 'bg-eyecare-lighter-blue text-eyecare-navy font-medium' : 'text-gray-700'}`}
                        >
                            <span className="text-lg">🇲🇽</span>
                            <span>Español</span>
                            {isSpanish && <span className="ml-auto text-eyecare-blue">✓</span>}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
