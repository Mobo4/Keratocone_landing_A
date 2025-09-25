
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Detect language from URL or localStorage
  const [language, setLanguage] = useState<Language>(() => {
    // First check URL path for language indicator
    if (location.pathname.startsWith('/es/') || location.pathname === '/es') {
      return 'es';
    }
    
    // Fall back to localStorage or default to English
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'en';
  });

  // Update i18n language and localStorage when language changes
  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  }, [language, i18n]);
  
  // Handle URL path when language changes
  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    
    // Update URL to match the language
    let newPath = location.pathname;
    if (lang === 'es' && !location.pathname.startsWith('/es')) {
      // Add es prefix
      newPath = `/es${location.pathname}`;
    } else if (lang === 'en' && location.pathname.startsWith('/es')) {
      // Remove es prefix
      newPath = location.pathname.replace(/^\/es/, '');
      if (newPath === '') newPath = '/';
    }
    
    // Only navigate if path actually changed
    if (newPath !== location.pathname) {
      navigate(newPath);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
