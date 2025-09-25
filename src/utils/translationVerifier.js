/**
 * Translation Verification Utility
 * 
 * This utility compares translation files to identify missing or inconsistent keys
 * between different language files.
 */

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read translation files
const enTranslations = JSON.parse(readFileSync(resolve(__dirname, '../i18n/locales/en.json'), 'utf8'));
const esTranslations = JSON.parse(readFileSync(resolve(__dirname, '../i18n/locales/es.json'), 'utf8'));

/**
 * Recursively flattens nested translation objects into dot-notation paths
 * e.g. { nav: { home: "Home" } } becomes { "nav.home": "Home" }
 */
function flattenTranslations(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, key) => {
    const prefixedKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      Object.assign(acc, flattenTranslations(obj[key], prefixedKey));
    } else {
      acc[prefixedKey] = obj[key];
    }
    
    return acc;
  }, {});
}

/**
 * Compares translations to find missing keys in either language
 */
export function verifyTranslations() {
  const flattenedEn = flattenTranslations(enTranslations);
  const flattenedEs = flattenTranslations(esTranslations);
  
  const enKeys = Object.keys(flattenedEn);
  const esKeys = Object.keys(flattenedEs);
  
  const missingInEs = enKeys.filter(key => !esKeys.includes(key));
  const missingInEn = esKeys.filter(key => !enKeys.includes(key));
  
  const missingKeys = [];
  
  if (missingInEs.length > 0) {
    missingKeys.push({
      language: 'Spanish',
      keys: missingInEs
    });
  }
  
  if (missingInEn.length > 0) {
    missingKeys.push({
      language: 'English',
      keys: missingInEn
    });
  }
  
  return {
    missingKeys,
    isValid: missingKeys.length === 0
  };
}

/**
 * Logs translation verification results to console
 */
export function logTranslationVerification() {
  const { missingKeys, isValid } = verifyTranslations();
  
  if (!isValid) {
    console.error('Translation verification failed!');
    
    missingKeys.forEach(({ language, keys }) => {
      console.error(`\nMissing translations in ${language}:`);
      keys.forEach(key => console.error(`  - ${key}`));
    });
    
    return false;
  }
  
  console.log('Translation verification passed! All keys are present in both languages.');
  return true;
}

/**
 * Throws an error if translation verification fails
 * This can be used in build scripts to prevent deployments with incomplete translations
 */
export function enforceTranslationVerification() {
  const { missingKeys, isValid } = verifyTranslations();
  
  if (!isValid) {
    const missingKeysDetails = missingKeys
      .map(({ language, keys }) => 
        `${language}: ${keys.slice(0, 5).join(', ')}${keys.length > 5 ? ` and ${keys.length - 5} more` : ''}`)
      .join('; ');
    
    throw new Error(`Translation verification failed! Missing keys in: ${missingKeysDetails}`);
  }
}

// Add this line to execute verification during development
if (process.env.NODE_ENV === 'development') {
  logTranslationVerification();
}