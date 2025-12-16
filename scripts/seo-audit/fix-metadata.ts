/**
 * Comprehensive Metadata Fixer
 * 
 * Fixes all metadata issues:
 * 1. Shortens titles to ≤60 chars
 * 2. Trims descriptions to ≤160 chars
 * 3. Adds missing canonical tags
 */

import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();

interface MetadataFix {
    file: string;
    newTitle?: string;
    newDescription?: string;
    needsCanonical?: boolean;
    canonicalUrl?: string;
}

// Define fixes for each problematic page
const fixes: MetadataFix[] = [
    {
        file: 'app/financing/page.tsx',
        newTitle: 'Eye Care Financing | CareCredit & Payment Plans | OC',
        newDescription: 'Flexible financing options for eye care. CareCredit, payment plans, and insurance accepted. Make vision care affordable in Orange County.',
        needsCanonical: true,
        canonicalUrl: 'https://eyecarecenteroc.com/financing'
    },
    {
        file: 'app/fsa-hsa-eye-care/page.tsx',
        newTitle: 'FSA & HSA Eye Care | Use Benefits Before Expiry | OC',
    },
    {
        file: 'app/page.tsx',
        newTitle: 'EyeCare Center OC | Top Ophthalmologist & Eye Exams',
        newDescription: 'Premier eye care in Orange County. Dr. Bonakdar specializes in Keratoconus, LASIK, Cataracts. Comprehensive exams. Call today!',
    },
    {
        file: 'app/medical-professionals/page.tsx',
        newTitle: 'Medical Professional Referrals | EyeCare Center OC',
        newDescription: 'Trusted eye care partner for medical professionals. Expert consultations, advanced diagnostics, seamless patient care in Orange County.',
    },
    {
        file: 'app/privacy-policy/page.tsx',
        newTitle: 'Privacy Policy | EyeCare Center of Orange County',
        needsCanonical: true,
        canonicalUrl: 'https://eyecarecenteroc.com/privacy-policy'
    },
    {
        file: 'app/services/contact-lenses/hybrid/page.tsx',
        newTitle: 'Hybrid Contact Lenses | SynergEyes | Orange County',
        newDescription: 'Advanced hybrid contact lenses combining RGP clarity with soft lens comfort. Perfect for keratoconus, astigmatism. Expert fitting in OC.',
        needsCanonical: true,
        canonicalUrl: 'https://eyecarecenteroc.com/services/contact-lenses/hybrid'
    },
    {
        file: 'app/services/contact-lenses/rgp/page.tsx',
        newTitle: 'RGP Contact Lenses | Gas Permeable Lenses | OC',
        newDescription: 'Rigid gas permeable contact lenses for superior vision. Ideal for keratoconus, high astigmatism. Expert fitting in Orange County.',
        needsCanonical: true,
        canonicalUrl: 'https://eyecarecenteroc.com/services/contact-lenses/rgp'
    },
    {
        file: 'app/services/contact-lenses/scleral/page.tsx',
        newTitle: 'Scleral Contact Lenses | Keratoconus Expert | OC',
        newDescription: 'Custom scleral lenses for keratoconus, dry eye, post-LASIK. Life-changing comfort and vision. Expert fitting in Orange County.',
        needsCanonical: true,
        canonicalUrl: 'https://eyecarecenteroc.com/services/contact-lenses/scleral'
    },
    {
        file: 'app/services/contact-lenses/soft/page.tsx',
        newTitle: 'Soft Contact Lenses | Daily & Monthly | Orange County',
        newDescription: 'Premium soft contact lenses: daily disposables, monthly, toric, multifocal. Expert fitting and care in Orange County.',
        needsCanonical: true,
        canonicalUrl: 'https://eyecarecenteroc.com/services/contact-lenses/soft'
    },
    {
        file: 'app/services/diagnostic-technology/page.tsx',
        newTitle: 'Advanced Eye Diagnostic Technology | Orange County',
        newDescription: 'State-of-the-art diagnostic equipment: OCT, topography, visual fields. Precise diagnosis and treatment planning in Orange County.',
        needsCanonical: true,
        canonicalUrl: 'https://eyecarecenteroc.com/services/diagnostic-technology'
    },
    {
        file: 'app/services/faa-color-vision-testing/page.tsx',
        newTitle: 'FAA Color Vision Testing | Pilot Medical Exams | OC',
        newDescription: 'FAA-approved color vision testing for pilots. Expert medical examinations for aviation certification in Orange County.',
        needsCanonical: true,
        canonicalUrl: 'https://eyecarecenteroc.com/services/faa-color-vision-testing'
    },
    {
        file: 'app/services/optical-lenses/page.tsx',
        newTitle: 'Premium Optical Lenses | Varilux & Crizal | OC',
        newDescription: 'Advanced lens technology: Varilux progressives, Crizal coatings, digital lenses. Superior vision and comfort in Orange County.',
    },
    {
        file: 'app/services/ortho-k-adults/page.tsx',
        newTitle: 'Ortho-K for Adults | Non-Surgical Vision Correction',
        newDescription: 'Orthokeratology for adults: overnight vision correction without surgery. Wake up with clear vision. Expert fitting in Orange County.',
        needsCanonical: true,
        canonicalUrl: 'https://eyecarecenteroc.com/services/ortho-k-adults'
    },
    {
        file: 'app/services/pediatric-keratoconus/page.tsx',
        newTitle: 'Pediatric Keratoconus Treatment | Kids Eye Care | OC',
        newDescription: 'Specialized keratoconus treatment for children: cross-linking, scleral lenses, myopia control. Expert pediatric care in Orange County.',
        needsCanonical: true,
        canonicalUrl: 'https://eyecarecenteroc.com/services/pediatric-keratoconus'
    },
    {
        file: 'app/lp/headaches-cvs/page.tsx',
        newTitle: 'Headache & Computer Vision Relief | Orange County',
        newDescription: 'Expert treatment for headaches and computer vision syndrome. Digital eye strain relief, specialized lenses. Orange County.',
        needsCanonical: true,
        canonicalUrl: 'https://eyecarecenteroc.com/lp/headaches-cvs'
    },
];

// Pages needing only canonical tags
const canonicalOnlyFixes = [
    { file: 'app/book-appointment/page.tsx', url: 'https://eyecarecenteroc.com/book-appointment' },
    { file: 'app/conditions/page.tsx', url: 'https://eyecarecenteroc.com/conditions' },
    { file: 'app/icons-preview/page.tsx', url: 'https://eyecarecenteroc.com/icons-preview' },
    { file: 'app/locations/page.tsx', url: 'https://eyecarecenteroc.com/locations' },
    { file: 'app/lp/designer-frames/page.tsx', url: 'https://eyecarecenteroc.com/lp/designer-frames' },
    { file: 'app/lp/dry-eye-ipl/page.tsx', url: 'https://eyecarecenteroc.com/lp/dry-eye-ipl' },
    { file: 'app/lp/keratoconus-scleral/page.tsx', url: 'https://eyecarecenteroc.com/lp/keratoconus-scleral' },
    { file: 'app/lp/surgical-consult/page.tsx', url: 'https://eyecarecenteroc.com/lp/surgical-consult' },
    { file: 'app/medical-disclaimer/page.tsx', url: 'https://eyecarecenteroc.com/medical-disclaimer' },
    { file: 'app/services/contact-lenses/page.tsx', url: 'https://eyecarecenteroc.com/services/contact-lenses' },
    { file: 'app/services/page.tsx', url: 'https://eyecarecenteroc.com/services' },
    { file: 'app/terms-of-service/page.tsx', url: 'https://eyecarecenteroc.com/terms-of-service' },
];

function applyFix(fix: MetadataFix) {
    const fullPath = path.join(projectRoot, fix.file);
    if (!fs.existsSync(fullPath)) {
        console.log(`⚠️  File not found: ${fix.file}`);
        return;
    }

    let content = fs.readFileSync(fullPath, 'utf-8');
    let changes = [];

    // Fix title
    if (fix.newTitle) {
        const titleRegex = /title:\s*['"`]([^'"`]+)['"`]/;
        if (titleRegex.test(content)) {
            content = content.replace(titleRegex, `title: '${fix.newTitle}'`);
            changes.push('title');
        }
    }

    // Fix description
    if (fix.newDescription) {
        const descRegex = /description:\s*['"`]([^'"`]+)['"`]/;
        if (descRegex.test(content)) {
            content = content.replace(descRegex, `description: '${fix.newDescription}'`);
            changes.push('description');
        }
    }

    // Add canonical
    if (fix.needsCanonical && fix.canonicalUrl) {
        if (!content.includes('alternates') && !content.includes('canonical')) {
            // Find the closing of openGraph or keywords
            const insertPoint = content.indexOf('},', content.indexOf('openGraph'));
            if (insertPoint > 0) {
                const canonical = `,\n  alternates: {\n    canonical: '${fix.canonicalUrl}',\n  }`;
                content = content.slice(0, insertPoint + 2) + canonical + content.slice(insertPoint + 2);
                changes.push('canonical');
            }
        }
    }

    if (changes.length > 0) {
        fs.writeFileSync(fullPath, content);
        console.log(`✅ Fixed ${fix.file}: ${changes.join(', ')}`);
    } else {
        console.log(`ℹ️  No changes needed: ${fix.file}`);
    }
}

function addCanonicalOnly(file: string, url: string) {
    const fullPath = path.join(projectRoot, file);
    if (!fs.existsSync(fullPath)) {
        console.log(`⚠️  File not found: ${file}`);
        return;
    }

    let content = fs.readFileSync(fullPath, 'utf-8');

    if (content.includes('alternates') || content.includes('canonical')) {
        console.log(`✓ Canonical exists: ${file}`);
        return;
    }

    // Find metadata export
    const metadataMatch = content.match(/export const metadata: Metadata = \{[\s\S]+?\n\};/);
    if (metadataMatch) {
        const metadataBlock = metadataMatch[0];
        const closingBrace = metadataBlock.lastIndexOf('}');
        const beforeClosing = metadataBlock.slice(0, closingBrace);
        const canonical = `,\n  alternates: {\n    canonical: '${url}',\n  }\n`;
        const newMetadata = beforeClosing + canonical + metadataBlock.slice(closingBrace);
        content = content.replace(metadataBlock, newMetadata);
        fs.writeFileSync(fullPath, content);
        console.log(`✅ Added canonical to: ${file}`);
    }
}

// Run fixes
console.log('🚀 Starting comprehensive metadata fixes...\n');

console.log('📝 Fixing titles, descriptions, and canonicals...\n');
for (const fix of fixes) {
    applyFix(fix);
}

console.log('\n🔗 Adding missing canonical tags...\n');
for (const item of canonicalOnlyFixes) {
    addCanonicalOnly(item.file, item.url);
}

console.log('\n✨ Metadata fixes complete!');
