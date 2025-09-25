
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      es: {
        translation: esTranslation
      }
    },
    fallbackLng: 'en',
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      lookupFromPathIndex: 0,
      caches: ['localStorage'],
      lookupLocalStorage: 'language'
    },
    interpolation: {
      escapeValue: false // React already escapes by default
    },
    react: {
      useSuspense: false // Prevents issues with SSR and loading flickering
    },
    returnEmptyString: false,
    returnNull: false,
    // Configure fallback behavior for missing translations
    missingKeyHandler: (lng, ns, key, fallbackValue) => {
      console.warn(`Missing translation key: ${key} for language: ${lng}`);
    },
    saveMissing: false, // Changed from true to prevent showing keys when translations are missing
    // This ensures nested objects are merged correctly
    keySeparator: '.',
    nsSeparator: ':',
    // Always return a value even if translation is missing
    // to prevent displaying raw translation keys
    parseMissingKeyHandler: (key) => {
      // Return english value if it exists instead of formatted key
      const englishValue = i18n.getResource('en', 'translation', key);
      if (englishValue) {
        return englishValue;
      }
      
      // Otherwise try to make the key more readable
      const cleanedKey = key.split('.').pop() || key;
      return cleanedKey
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase());
    },
    // Ensure proper fallback for missing nested keys
    returnObjects: true,
    // Add security check to prevent prototype pollution
    ignoreJSONStructure: true
  });

// Handle URL path detection for language
// This helps with language detection from URL paths like /es/page
const currentPath = window.location.pathname;
if (currentPath.startsWith('/es/') || currentPath === '/es') {
  i18n.changeLanguage('es');
  localStorage.setItem('language', 'es');
} else {
  // Check if we have a stored preference, otherwise use browser default
  const storedLang = localStorage.getItem('language');
  if (!storedLang || (storedLang !== 'en' && storedLang !== 'es')) {
    const browserLang = navigator.language.startsWith('es') ? 'es' : 'en';
    i18n.changeLanguage(browserLang);
    localStorage.setItem('language', browserLang);
  }
}

// Ensure all pages get properly translated when language changes
i18n.on('languageChanged', () => {
  document.documentElement.lang = i18n.language;
  document.title = i18n.t('seo.title', 'Eye Care Center of OC');
});

export default i18n;
