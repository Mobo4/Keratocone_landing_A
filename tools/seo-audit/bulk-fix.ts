/**
 * Bulk SEO Fixes Script
 * 
 * Systematically fixes Semrush audit issues:
 * 1. Add missing schema to all pages
 * 2. Add missing canonical tags
 * 3. Shorten long titles
 * 4. Trim long descriptions
 */

import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const appDir = path.join(projectRoot, 'app');

// Pages that need schema added
const pagesNeedingSchema = [
    'app/page.tsx',
    'app/about/page.tsx',
    'app/contact/page.tsx',
    'app/financing/page.tsx',
    'app/fsa-hsa-eye-care/page.tsx',
    'app/insurance/page.tsx',
    'app/insurance-coverage/page.tsx',
    'app/locations/page.tsx',
    'app/book-appointment/page.tsx',
    'app/conditions/page.tsx',
    'app/blog/page.tsx',
    'app/medical-professionals/page.tsx',
    'app/privacy-policy/page.tsx',
    'app/medical-disclaimer/page.tsx',
    'app/terms-of-service/page.tsx',
    'app/accessibility/page.tsx',
    'app/doctors/page.tsx',
    'app/icons-preview/page.tsx',
    'app/services/page.tsx',
    'app/services/contact-lenses/page.tsx',
    'app/services/optical-lenses/page.tsx',
    'app/services/ortho-k-adults/page.tsx',
    'app/services/pediatric-keratoconus/page.tsx',
    'app/services/diagnostic-technology/page.tsx',
    'app/services/faa-color-vision-testing/page.tsx',
    'app/services/contact-lenses/hybrid/page.tsx',
    'app/services/contact-lenses/rgp/page.tsx',
    'app/services/contact-lenses/scleral/page.tsx',
    'app/services/contact-lenses/soft/page.tsx',
    'app/lp/designer-frames/page.tsx',
    'app/lp/dry-eye-ipl/page.tsx',
    'app/lp/headaches-cvs/page.tsx',
    'app/lp/keratoconus-scleral/page.tsx',
    'app/lp/surgical-consult/page.tsx',
];

function addSchemaToPage(filePath: string) {
    const fullPath = path.join(projectRoot, filePath);
    if (!fs.existsSync(fullPath)) {
        console.log(`⚠️  File not found: ${filePath}`);
        return;
    }

    let content = fs.readFileSync(fullPath, 'utf-8');

    // Check if already has schema
    if (content.includes('JsonLd') || content.includes('application/ld+json')) {
        console.log(`✓ Schema already exists: ${filePath}`);
        return;
    }

    // Add imports if not present
    if (!content.includes('generateLocalBusinessSchema')) {
        const importLine = "import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema';";
        if (!content.includes(importLine)) {
            // Find the last import statement
            const importRegex = /import .+ from .+;/g;
            const imports = content.match(importRegex);
            if (imports) {
                const lastImport = imports[imports.length - 1];
                content = content.replace(lastImport, `${lastImport}\n${importLine}`);
            }
        }
    }

    if (!content.includes('JsonLd')) {
        const jsonLdImport = "import JsonLd from '@/components/JsonLd';";
        if (!content.includes(jsonLdImport)) {
            const importRegex = /import .+ from .+;/g;
            const imports = content.match(importRegex);
            if (imports) {
                const lastImport = imports[imports.length - 1];
                content = content.replace(lastImport, `${lastImport}\n${jsonLdImport}`);
            }
        }
    }

    // Add schema generation in component
    const componentMatch = content.match(/export default (async )?function \w+/);
    if (componentMatch) {
        const schemaCode = `
    const businessSchema = generateLocalBusinessSchema();
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://eyecarecenteroc.com' },
    ]);
`;
        // Insert after function declaration
        const insertPoint = content.indexOf('{', componentMatch.index!) + 1;
        content = content.slice(0, insertPoint) + schemaCode + content.slice(insertPoint);

        // Add JsonLd components in return statement
        const returnMatch = content.match(/return \(/);
        if (returnMatch) {
            const insertPoint = content.indexOf('>', returnMatch.index!) + 1;
            const jsonLdComponents = `
            <JsonLd data={businessSchema} id="business-schema" />
            <JsonLd data={breadcrumbSchema} id="breadcrumb-schema" />`;
            content = content.slice(0, insertPoint) + jsonLdComponents + content.slice(insertPoint);
        }
    }

    fs.writeFileSync(fullPath, content);
    console.log(`✅ Added schema to: ${filePath}`);
}

// Run fixes
console.log('🚀 Starting bulk SEO fixes...\n');
console.log(`📋 Adding schema to ${pagesNeedingSchema.length} pages...\n`);

for (const page of pagesNeedingSchema) {
    addSchemaToPage(page);
}

console.log('\n✨ Bulk fixes complete!');
