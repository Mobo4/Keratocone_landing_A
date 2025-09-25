#!/usr/bin/env node

/**
 * Translation Verification Script
 * 
 * This script verifies that all translation keys are consistent across language files.
 * It's designed to be run as part of the build process to prevent deployments with incomplete translations.
 */

// This is an ESM module as indicated by "type": "module" in package.json
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { enforceTranslationVerification } from '../src/utils/translationVerifier.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🔍 Verifying translations...');

try {
  enforceTranslationVerification();
  console.log('✅ Translation verification passed! All keys are consistent between language files.');
  process.exit(0);
} catch (error) {
  console.error('❌ Translation verification failed!');
  console.error(error.message);
  process.exit(1); // Non-zero exit code will stop the build process
}