/**
 * Comprehensive SEO Fix Script
 * Fixes ALL issues found by Semrush Clone including minor ones
 */

import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();

// Fix 1: Broken link in Footer (sitemap.xml)
function fixBrokenLink() {
    const footerPath = path.join(projectRoot, 'components/Footer.tsx');
    let content = fs.readFileSync(footerPath, 'utf-8');

    // Replace /sitemap.xml with /sitemap (Next.js generates this)
    content = content.replace('"/sitemap.xml"', '"/sitemap"');

    fs.writeFileSync(footerPath, content);
    console.log('✅ Fixed broken sitemap link in Footer');
}

// Fix 2: Add missing canonicals
function addMissingCanonicals() {
    const fixes = [
        { file: 'app/financing/page.tsx', url: 'https://eyecarecenteroc.com/financing' },
        { file: 'app/lp/headaches-cvs/page.tsx', url: 'https://eyecarecenteroc.com/lp/headaches-cvs' },
        { file: 'app/privacy-policy/page.tsx', url: 'https://eyecarecenteroc.com/privacy-policy' },
        { file: 'app/services/contact-lenses/hybrid/page.tsx', url: 'https://eyecarecenteroc.com/services/contact-lenses/hybrid' },
        { file: 'app/services/contact-lenses/rgp/page.tsx', url: 'https://eyecarecenteroc.com/services/contact-lenses/rgp' },
        { file: 'app/services/contact-lenses/scleral/page.tsx', url: 'https://eyecarecenteroc.com/services/contact-lenses/scleral' },
        { file: 'app/services/contact-lenses/soft/page.tsx', url: 'https://eyecarecenteroc.com/services/contact-lenses/soft' },
        { file: 'app/services/diagnostic-technology/page.tsx', url: 'https://eyecarecenteroc.com/services/diagnostic-technology' },
        { file: 'app/services/faa-color-vision-testing/page.tsx', url: 'https://eyecarecenteroc.com/services/faa-color-vision-testing' },
        { file: 'app/services/ortho-k-adults/page.tsx', url: 'https://eyecarecenteroc.com/services/ortho-k-adults' },
        { file: 'app/services/pediatric-keratoconus/page.tsx', url: 'https://eyecarecenteroc.com/services/pediatric-keratoconus' },
    ];

    for (const fix of fixes) {
        const fullPath = path.join(projectRoot, fix.file);
        if (!fs.existsSync(fullPath)) continue;

        let content = fs.readFileSync(fullPath, 'utf-8');

        if (content.includes('alternates') || content.includes('canonical')) {
            console.log(`  ✓ Canonical exists: ${fix.file}`);
            continue;
        }

        // Find metadata block and add canonical
        const metadataMatch = content.match(/export const metadata: Metadata = \{[\s\S]+?\n\};/);
        if (metadataMatch) {
            const metadataBlock = metadataMatch[0];
            const closingBrace = metadataBlock.lastIndexOf('}');
            const beforeClosing = metadataBlock.slice(0, closingBrace);
            const canonical = `,\n  alternates: {\n    canonical: '${fix.url}',\n  }\n`;
            const newMetadata = beforeClosing + canonical + metadataBlock.slice(closingBrace);
            content = content.replace(metadataBlock, newMetadata);
            fs.writeFileSync(fullPath, content);
            console.log(`✅ Added canonical to: ${fix.file}`);
        }
    }
}

// Fix 3: Fix description lengths
function fixDescriptions() {
    const fixes = [
        {
            file: 'app/blog/page.tsx',
            newDesc: 'Expert eye care insights from Dr. Bonakdar. Learn about keratoconus, dry eye, LASIK, contact lenses, and comprehensive eye health in Orange County.'
        },
        {
            file: 'app/fsa-hsa-eye-care/page.tsx',
            newDesc: 'Maximize your FSA and HSA benefits for eye care. Comprehensive eye exams, contact lenses, glasses, and treatments covered. Use benefits before they expire in Orange County.'
        },
        {
            file: 'app/insurance/page.tsx',
            newDesc: 'We accept VSP, EyeMed, Medicare, and most vision insurance. Expert eye care with comprehensive coverage in Orange County. Call for benefits verification.'
        },
        {
            file: 'app/insurance-coverage/page.tsx',
            newDesc: 'Understand your vision insurance coverage. We accept most major plans including VSP, EyeMed, Medicare. Expert eye care in Orange County with insurance help.'
        },
        {
            file: 'app/medical-disclaimer/page.tsx',
            newDesc: 'Medical disclaimer for EyeCare Center of Orange County. Information provided is for educational purposes only. Always consult your eye care professional.'
        },
        {
            file: 'app/privacy-policy/page.tsx',
            newDesc: 'Privacy policy for EyeCare Center of Orange County. Learn how we protect your personal health information and maintain HIPAA compliance.'
        },
        {
            file: 'app/services/contact-lenses/soft/page.tsx',
            newDesc: 'Premium soft contact lenses: daily disposables, monthly, toric for astigmatism, multifocal. Expert fitting and care in Orange County.'
        },
        {
            file: 'app/services/faa-color-vision-testing/page.tsx',
            newDesc: 'FAA-approved color vision testing for pilots. Expert medical examinations for aviation certification. Comprehensive testing in Orange County.'
        },
        {
            file: 'app/services/page.tsx',
            newDesc: 'Comprehensive eye care services: keratoconus treatment, scleral lenses, LASIK, dry eye therapy, contact lenses. Expert care in Orange County.'
        },
        {
            file: 'app/terms-of-service/page.tsx',
            newDesc: 'Terms of service for EyeCare Center of Orange County. Website usage terms, privacy policies, and patient rights information.'
        },
    ];

    for (const fix of fixes) {
        const fullPath = path.join(projectRoot, fix.file);
        if (!fs.existsSync(fullPath)) continue;

        let content = fs.readFileSync(fullPath, 'utf-8');
        const descRegex = /description:\s*['"`]([^'"`]+)['"`]/;

        if (descRegex.test(content)) {
            content = content.replace(descRegex, `description: '${fix.newDesc}'`);
            fs.writeFileSync(fullPath, content);
            console.log(`✅ Fixed description: ${fix.file}`);
        }
    }
}

// Fix 4: Expand short titles (LOW priority but requested)
function expandShortTitles() {
    const fixes = [
        {
            file: 'app/icons-preview/page.tsx',
            newTitle: 'Icon Preview | EyeCare Center OC Design System'
        },
        {
            file: 'app/lp/designer-frames/page.tsx',
            newTitle: 'Designer Eyewear Frames | Luxury Glasses | OC'
        },
        {
            file: 'app/lp/dry-eye-ipl/page.tsx',
            newTitle: 'IPL Dry Eye Treatment | Orange County'
        },
    ];

    for (const fix of fixes) {
        const fullPath = path.join(projectRoot, fix.file);
        if (!fs.existsSync(fullPath)) continue;

        let content = fs.readFileSync(fullPath, 'utf-8');
        const titleRegex = /title:\s*['"`]([^'"`]+)['"`]/;

        if (titleRegex.test(content)) {
            content = content.replace(titleRegex, `title: '${fix.newTitle}'`);
            fs.writeFileSync(fullPath, content);
            console.log(`✅ Expanded title: ${fix.file}`);
        }
    }
}

// Fix 5: Add missing schema to landing pages
function addMissingSchema() {
    const pages = [
        'app/about/page.tsx',
        'app/conditions/page.tsx',
        'app/insurance/page.tsx',
        'app/lp/designer-frames/page.tsx',
        'app/lp/dry-eye-ipl/page.tsx',
        'app/lp/headaches-cvs/page.tsx',
        'app/lp/surgical-consult/page.tsx',
    ];

    for (const page of pages) {
        const fullPath = path.join(projectRoot, page);
        if (!fs.existsSync(fullPath)) continue;

        let content = fs.readFileSync(fullPath, 'utf-8');

        // Check if already has schema
        if (content.includes('JsonLd') || content.includes('application/ld+json')) {
            console.log(`  ✓ Schema exists: ${page}`);
            continue;
        }

        // Add imports
        if (!content.includes('generateLocalBusinessSchema')) {
            const importLine = "import { generateLocalBusinessSchema } from '@/lib/schema';";
            const lastImport = content.match(/import .+ from .+;/g)?.pop();
            if (lastImport) {
                content = content.replace(lastImport, `${lastImport}\n${importLine}`);
            }
        }

        if (!content.includes('JsonLd')) {
            const jsonLdImport = "import JsonLd from '@/components/JsonLd';";
            const lastImport = content.match(/import .+ from .+;/g)?.pop();
            if (lastImport) {
                content = content.replace(lastImport, `${lastImport}\n${jsonLdImport}`);
            }
        }

        // Add schema in component
        const componentMatch = content.match(/export default (async )?function \w+/);
        if (componentMatch) {
            const schemaCode = `\n    const businessSchema = generateLocalBusinessSchema();\n`;
            const insertPoint = content.indexOf('{', componentMatch.index!) + 1;
            content = content.slice(0, insertPoint) + schemaCode + content.slice(insertPoint);

            // Add JsonLd in return
            const returnMatch = content.match(/return \(/);
            if (returnMatch) {
                const insertPoint = content.indexOf('>', returnMatch.index!) + 1;
                const jsonLdComponent = `\n            <JsonLd data={businessSchema} id="business-schema" />`;
                content = content.slice(0, insertPoint) + jsonLdComponent + content.slice(insertPoint);
            }
        }

        fs.writeFileSync(fullPath, content);
        console.log(`✅ Added schema to: ${page}`);
    }
}

// Run all fixes
console.log('🚀 Starting comprehensive SEO fixes...\n');

console.log('1️⃣ Fixing broken links...');
fixBrokenLink();

console.log('\n2️⃣ Adding missing canonical tags...');
addMissingCanonicals();

console.log('\n3️⃣ Fixing description lengths...');
fixDescriptions();

console.log('\n4️⃣ Expanding short titles...');
expandShortTitles();

console.log('\n5️⃣ Adding missing schema...');
addMissingSchema();

console.log('\n✨ All fixes complete! Re-run Semrush Clone to verify.');
