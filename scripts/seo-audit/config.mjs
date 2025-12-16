/**
 * SEO Audit Configuration
 */

export const CONFIG = {
    // Directories to scan
    appDir: 'app',
    componentsDir: 'components',
    dataDir: 'data',

    // Directories to exclude
    excludeDirs: ['node_modules', '.next', '.git', 'public', 'tools'],

    // Keywords to check for in content/metadata (Case-insensitive)
    requiredKeywords: [
        'scleral lens',
    ],

    // Critical pages that MUST have Schema markup
    criticalPagesForSchema: [
        'app/page.tsx',           // Homepage
        'app/about/page.tsx',     // About
        'app/contact/page.tsx',   // Contact
        'app/services/page.tsx',  // Services index
    ],

    // Output settings
    outputPath: 'docs/seo-audit-report.json',
    maxIssuesPerCategory: 20,

    // Validation Limits
    validation: {
        titleMin: 30,
        titleMax: 60,
        descMin: 120,
        descMax: 160,
    }
};
