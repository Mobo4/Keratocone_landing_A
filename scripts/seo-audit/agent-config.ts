export const CONFIG = {
    appDir: 'app',
    componentsDir: 'components',
    outputPath: 'tools/seo-audit/semrush-report.md',
    excludeDirs: ['node_modules', '.next', '.git', 'dist', 'build'],

    // SEO Thresholds
    validation: {
        titleMin: 30,
        titleMax: 60, // Semrush often flags > 60
        descMin: 120,
        descMax: 160,
        contentRatioMin: 0.1, // Text to HTML ratio
    },

    // Keywords to track (can be extended safely)
    targetKeywords: [
        'eye care', 'ophthalmologist', 'optometrist',
        'keratoconus', 'scleral lenses', 'lasik',
        'cataract surgery', 'dry eye', 'orange county'
    ],

    // Critical pages that MUST have full Schema
    criticalPages: [
        'page.tsx', // Home
        'services/keratoconus-treatment/page.tsx',
        'services/scleral-lenses/page.tsx'
    ]
};
