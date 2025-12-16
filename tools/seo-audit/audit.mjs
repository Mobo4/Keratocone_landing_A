/**
 * Local SEO Audit Script - "Mini Semrush"
 * 
 * This script scans the Next.js codebase for common SEO issues:
 * 1. Missing metadata exports in page.tsx files
 * 2. Missing alt text on images
 * 3. Missing JSON-LD Schema blocks
 * 4. Broken internal links (href to non-existent routes)
 * 5. Keyword density analysis
 * 
 * Usage: node tools/seo-audit/audit.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CONFIG } from './config.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..', '..');

// Resolve paths from config
const appDir = path.join(projectRoot, CONFIG.appDir);
const componentsDir = path.join(projectRoot, CONFIG.componentsDir);
const outputPath = path.join(projectRoot, CONFIG.outputPath);

// Results storage
const results = {
    timestamp: new Date().toISOString(),
    projectRoot: projectRoot,
    pagesScanned: 0,
    componentsScanned: 0,
    issues: {
        missingMetadata: [],
        missingAltText: [],
        missingSchema: [],
        brokenLinks: [],
        keywordGaps: [],
        h1Usage: [],
        metadataQuality: [],
        brokenImages: [],
        globalFiles: [],
        sitemapCoverage: [],
    },
    summary: {},
};

// Helper: Recursively get all files with extension
function getAllFiles(dir, ext, files = []) {
    if (!fs.existsSync(dir)) return files;

    const items = fs.readdirSync(dir);
    for (const item of items) {
        const fullPath = path.join(dir, item);
        if (CONFIG.excludeDirs.some(ex => fullPath.includes(ex))) continue;

        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            getAllFiles(fullPath, ext, files);
        } else if (item.endsWith(ext)) {
            files.push(fullPath);
        }
    }
    return files;
}

// Check 1: Missing Metadata
function checkMissingMetadata() {
    console.log('\n🔍 Checking for missing metadata exports...');
    const pageFiles = getAllFiles(appDir, 'page.tsx');

    for (const file of pageFiles) {
        const content = fs.readFileSync(file, 'utf-8');
        const relativePath = path.relative(projectRoot, file);

        // Check for metadata export or generateMetadata function
        const hasMetadata =
            content.includes('export const metadata') ||
            content.includes('export async function generateMetadata') ||
            content.includes('export function generateMetadata');

        if (!hasMetadata) {
            results.issues.missingMetadata.push({
                file: relativePath,
                severity: 'HIGH',
                message: 'Page is missing metadata export. This affects SEO title and description.',
            });
        }
        results.pagesScanned++;
    }
}

// Check 2: Missing Alt Text
function checkMissingAltText() {
    console.log('🔍 Checking for missing alt text on images...');
    const allFiles = [
        ...getAllFiles(appDir, '.tsx'),
        ...getAllFiles(componentsDir, '.tsx'),
    ];

    for (const file of allFiles) {
        const content = fs.readFileSync(file, 'utf-8');
        const relativePath = path.relative(projectRoot, file);

        // Find all <img> and <Image> tags
        const imgTagRegex = /<(?:img|Image)[^>]*>/gi;
        const matches = content.match(imgTagRegex) || [];

        for (const match of matches) {
            // Check if alt attribute exists and is not empty
            const hasAlt = /alt\s*=\s*["'][^"']+["']/.test(match) ||
                /alt\s*=\s*\{[^}]+\}/.test(match);
            const emptyAlt = /alt\s*=\s*["']\s*["']/.test(match);

            if (!hasAlt || emptyAlt) {
                results.issues.missingAltText.push({
                    file: relativePath,
                    severity: 'MEDIUM',
                    tag: match.substring(0, 80) + (match.length > 80 ? '...' : ''),
                    message: 'Image is missing alt text. This affects accessibility and image SEO.',
                });
            }
        }
        results.componentsScanned++;
    }
}

// Check 3: Missing Schema
function checkMissingSchema() {
    console.log('🔍 Checking for missing JSON-LD Schema...');
    const pageFiles = getAllFiles(appDir, 'page.tsx');

    for (const file of pageFiles) {
        const content = fs.readFileSync(file, 'utf-8');
        const relativePath = path.relative(projectRoot, file);

        // Check for JSON-LD script tags or Schema component imports
        const hasSchema =
            content.includes('application/ld+json') ||
            content.includes('Schema') ||
            content.includes('generateMedicalBusinessSchema') ||
            content.includes('generateLocalBusinessSchema') ||
            content.includes('generateBreadcrumbSchema');

        // Only flag as HIGH if it's a critical page
        const isCritical = CONFIG.criticalPagesForSchema.some(cp => relativePath.includes(cp.replace('app/', '')));

        if (!hasSchema && isCritical) {
            results.issues.missingSchema.push({
                file: relativePath,
                severity: 'HIGH',
                message: 'Critical page is missing JSON-LD Schema. This affects rich snippets in search results.',
            });
        } else if (!hasSchema && relativePath.includes('locations/')) {
            results.issues.missingSchema.push({
                file: relativePath,
                severity: 'MEDIUM',
                message: 'Location page is missing LocalBusiness Schema.',
            });
        }
    }
}

// Check 4: Broken Internal Links
function checkBrokenLinks() {
    console.log('🔍 Checking for potentially broken internal links...');

    // Build a list of all valid routes
    const validRoutes = new Set(['/']);
    const pageFiles = getAllFiles(appDir, 'page.tsx');

    for (const file of pageFiles) {
        const relativePath = path.relative(appDir, file);
        // Convert file path to route
        let route = '/' + relativePath
            .replace('/page.tsx', '')
            .replace('page.tsx', '')
            .replace(/\[([^\]]+)\]/g, ':$1'); // [slug] -> :slug

        if (route === '/') route = '/';
        validRoutes.add(route);
    }

    // Add known static routes
    ['/sitemap.xml', '/robots.txt', '/favicon.ico'].forEach(r => validRoutes.add(r));

    // Scan all files for Link href
    const allFiles = [
        ...getAllFiles(appDir, '.tsx'),
        ...getAllFiles(componentsDir, '.tsx'),
    ];

    for (const file of allFiles) {
        const content = fs.readFileSync(file, 'utf-8');
        const relativePath = path.relative(projectRoot, file);

        // Find all href attributes in Link components
        const linkRegex = /<Link[^>]*href\s*=\s*["']([^"']+)["'][^>]*>/gi;
        let match;

        while ((match = linkRegex.exec(content)) !== null) {
            const href = match[1];

            // Skip external links, anchors, and dynamic routes
            if (href.startsWith('http') || href.startsWith('#') || href.startsWith('tel:') || href.startsWith('mailto:')) continue;
            if (href.includes('${') || href.includes('{')) continue; // Template literals

            // Check if static file exists for simple routes
            const staticPath = path.join(appDir, href.replace(/^\//, ''), 'page.tsx');
            const staticExists = fs.existsSync(staticPath);

            // Check if it's a valid dynamic route pattern
            const isDynamicRoute = [...validRoutes].some(r => {
                if (!r.includes(':')) return false;
                const pattern = r.replace(/:[^/]+/g, '[^/]+');
                return new RegExp(`^${pattern}$`).test(href);
            });

            if (!staticExists && !isDynamicRoute && !href.includes(':')) {
                // Double-check by looking for the file
                const possiblePath = path.join(appDir, href.replace(/^\//, ''), 'page.tsx');
                if (!fs.existsSync(possiblePath) && !validRoutes.has(href)) {
                    results.issues.brokenLinks.push({
                        file: relativePath,
                        severity: 'HIGH',
                        href: href,
                        message: `Link to "${href}" may be broken. No matching page.tsx found.`,
                    });
                }
            }
        }
    }
}

// Check 5: H1 Tag Validation
function checkH1Usage() {
    console.log('🔍 Checking for H1 tag usage...');
    const pageFiles = getAllFiles(appDir, 'page.tsx');

    for (const file of pageFiles) {
        const content = fs.readFileSync(file, 'utf-8');
        const relativePath = path.relative(projectRoot, file);

        // Find h1 tags
        const h1Regex = /<h1[^>]*>/gi;
        const h1Matches = content.match(h1Regex) || [];

        // Check for Hero components which likely contain H1s
        const heroRegex = /<[a-zA-Z]*Hero/gi;
        const heroMatches = content.match(heroRegex) || [];

        if (h1Matches.length === 0 && heroMatches.length === 0) {
            results.issues.h1Usage.push({
                file: relativePath,
                severity: 'HIGH',
                message: 'Page is missing an <h1> tag. Every page should have exactly one main heading.',
            });
        } else if (h1Matches.length > 1) {
            results.issues.h1Usage.push({
                file: relativePath,
                severity: 'MEDIUM',
                message: `Page has ${h1Matches.length} <h1> tags. Multiple H1 tags can confuse search engines.`,
            });
        }
    }
}

// Check 6: Metadata Validation (Length, Canonical, OpenGraph)
function checkMetadataValidation() {
    console.log('🔍 Validating metadata quality (Length, OG, Canonicals)...');
    const pageFiles = getAllFiles(appDir, 'page.tsx');

    for (const file of pageFiles) {
        const content = fs.readFileSync(file, 'utf-8');
        const relativePath = path.relative(projectRoot, file);

        // Extract metadata object (simplified regex approach)
        // This is a rough extraction and might need AST for robust parsing, but works for standard Next.js patterns
        const metadataMatch = content.match(/export const metadata: Metadata = ({[\s\S]+?});/);

        if (metadataMatch) {
            const metadataStr = metadataMatch[1];

            // 1. Check Title Length
            const titleMatch = metadataStr.match(/title:\s*['"`](.*?)['"`]/);
            if (titleMatch) {
                const title = titleMatch[1];
                if (title.length < CONFIG.validation.titleMin) {
                    results.issues.metadataQuality.push({
                        file: relativePath,
                        severity: 'LOW',
                        message: `Title is too short (${title.length} chars). Recommended: ${CONFIG.validation.titleMin}-${CONFIG.validation.titleMax} chars.`,
                    });
                } else if (title.length > CONFIG.validation.titleMax) {
                    results.issues.metadataQuality.push({
                        file: relativePath,
                        severity: 'MEDIUM',
                        message: `Title is too long (${title.length} chars). Recommended: ${CONFIG.validation.titleMin}-${CONFIG.validation.titleMax} chars.`,
                    });
                }
            }

            // 2. Check Description Length
            const descMatch = metadataStr.match(/description:\s*['"`](.*?)['"`]/);
            if (descMatch) {
                const desc = descMatch[1];
                if (desc.length < CONFIG.validation.descMin) {
                    results.issues.metadataQuality.push({
                        file: relativePath,
                        severity: 'LOW',
                        message: `Description is too short (${desc.length} chars). Recommended: 120-160 chars.`,
                    });
                } else if (desc.length > CONFIG.validation.descMax) {
                    results.issues.metadataQuality.push({
                        file: relativePath,
                        severity: 'MEDIUM',
                        message: `Description is too long (${desc.length} chars). Recommended: 120-160 chars.`,
                    });
                }
            }

            // 3. Check Canonical
            if (!metadataStr.includes('canonical') && !metadataStr.includes('alternates')) {
                results.issues.metadataQuality.push({
                    file: relativePath,
                    severity: 'MEDIUM',
                    message: `Missing canonical tag. Define 'alternates.canonical' to prevent duplicate content issues.`,
                });
            }

            // 4. Check Open Graph
            if (!metadataStr.includes('openGraph')) {
                results.issues.metadataQuality.push({
                    file: relativePath,
                    severity: 'LOW',
                    message: `Missing Open Graph social sharing data.`,
                });
            }
        }
    }
}

// Check 7: Keyword Density Analysis (Renamed from Check 5)
function checkKeywordDensity() {
    console.log('🔍 Analyzing keyword presence on key pages...');

    const keyPages = [
        path.join(appDir, 'page.tsx'),
        path.join(appDir, 'layout.tsx'),
    ];

    for (const file of keyPages) {
        if (!fs.existsSync(file)) continue;

        const content = fs.readFileSync(file, 'utf-8').toLowerCase();
        const relativePath = path.relative(projectRoot, file);
        const missingKeywords = [];

        for (const keyword of CONFIG.requiredKeywords) {
            if (!content.includes(keyword.toLowerCase())) {
                missingKeywords.push(keyword);
            }
        }

        if (missingKeywords.length > 0) {
            results.issues.keywordGaps.push({
                file: relativePath,
                severity: 'LOW',
                missingKeywords: missingKeywords,
                message: `Missing ${missingKeywords.length} target keywords in file content or metadata.`,
            });
        }
    }
}

// Generate Report
function generateReport() {
    console.log('\n' + '='.repeat(60));
    console.log('📊 SEO AUDIT REPORT');
    console.log('='.repeat(60));
    console.log(`📄 Pages Scanned: ${results.pagesScanned}`);
    console.log(`🧩 Components Scanned: ${results.componentsScanned}`);
    console.log('');

    const categories = [
        { key: 'missingMetadata', label: '❌ Missing Metadata', emoji: '📝' },
        { key: 'missingAltText', label: '🖼️  Missing Alt Text', emoji: '🖼' },
        { key: 'missingSchema', label: '📋 Missing Schema', emoji: '📋' },
        { key: 'h1Usage', label: '🏷️ H1 Tag Issues', emoji: '🏷️ ' },
        { key: 'metadataQuality', label: '✨ Metadata Quality', emoji: '✨' },
        { key: 'brokenImages', label: '🖼️ Broken Images (Local)', emoji: '🖼️' },
        { key: 'brokenLinks', label: '🔗 Potential Broken Links', emoji: '🔗' },
        { key: 'globalFiles', label: '🌍 Global SEO Files', emoji: '🌍' },
        { key: 'sitemapCoverage', label: '🗺️ Sitemap Coverage', emoji: '🗺️' },
        { key: 'keywordGaps', label: '🔑 Keyword Gaps', emoji: '🔑' },
    ];

    let totalIssues = 0;
    let highCount = 0;
    let mediumCount = 0;
    let lowCount = 0;

    for (const cat of categories) {
        const issues = results.issues[cat.key];
        totalIssues += issues.length;

        console.log(`\n${cat.label}: ${issues.length} issue(s)`);
        console.log('-'.repeat(40));

        if (issues.length === 0) {
            console.log('  ✅ No issues found!');
        } else {
            for (const issue of issues.slice(0, CONFIG.maxIssuesPerCategory)) {
                const severityIcon = issue.severity === 'HIGH' ? '🔴' : issue.severity === 'MEDIUM' ? '🟡' : '🟢';
                console.log(`  ${severityIcon} [${issue.severity}] ${issue.file}`);
                console.log(`     └─ ${issue.message}`);
                if (issue.href) console.log(`     └─ href: ${issue.href}`);
                if (issue.missingKeywords) console.log(`     └─ Missing: ${issue.missingKeywords.join(', ')}`);

                if (issue.severity === 'HIGH') highCount++;
                else if (issue.severity === 'MEDIUM') mediumCount++;
                else lowCount++;
            }
            if (issues.length > CONFIG.maxIssuesPerCategory) {
                console.log(`  ... and ${issues.length - CONFIG.maxIssuesPerCategory} more`);
            }
        }
    }

    // Update summary
    results.summary = {
        totalIssues,
        high: highCount,
        medium: mediumCount,
        low: lowCount,
    };

    console.log('\n' + '='.repeat(60));
    console.log('📈 SUMMARY');
    console.log('='.repeat(60));
    console.log(`Total Issues Found: ${totalIssues}`);
    console.log(`  🔴 HIGH:   ${highCount}`);
    console.log(`  🟡 MEDIUM: ${mediumCount}`);
    console.log(`  🟢 LOW:    ${lowCount}`);
    console.log('');

    if (totalIssues === 0) {
        console.log('🎉 Congratulations! Your site has no detected SEO issues.');
    } else if (highCount > 0) {
        console.log('⚠️  You have HIGH severity issues that should be fixed immediately.');
    } else {
        console.log('✅ No critical issues. Consider addressing MEDIUM/LOW items for best results.');
    }

    // Ensure output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log(`\n📁 Full report saved to: ${CONFIG.outputPath}`);
    fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
}

// Check 8: Broken Images (Local)
function checkBrokenImages() {
    console.log('🔍 Checking for broken local images...');
    const allFiles = [
        ...getAllFiles(appDir, '.tsx'),
        ...getAllFiles(componentsDir, '.tsx'),
    ];

    const publicDir = path.join(projectRoot, 'public');

    for (const file of allFiles) {
        const content = fs.readFileSync(file, 'utf-8');
        const relativePath = path.relative(projectRoot, file);

        // Match src="..." attributes (static strings only)
        const srcRegex = /src=["']([^"']+)["']/g;
        let match;

        while ((match = srcRegex.exec(content)) !== null) {
            const src = match[1];

            // Only check local absolute paths (starting with /)
            if (!src.startsWith('/') || src.startsWith('//')) continue;

            // Skip probable dynamic paths
            if (src.includes('${') || src.includes('{')) continue;

            const localPath = path.join(publicDir, src);
            if (!fs.existsSync(localPath)) {
                results.issues.brokenImages.push({
                    file: relativePath,
                    severity: 'HIGH',
                    message: `Image source "${src}" not found in public directory.`,
                });
            }
        }
    }
}

// Check 9: Global Files (Robots, Favicon)
function checkGlobalFiles() {
    console.log('🔍 Checking for global SEO files...');

    // Check public/robots.txt or app/robots.ts
    const hasRobots = fs.existsSync(path.join(projectRoot, 'public', 'robots.txt')) ||
        fs.existsSync(path.join(projectRoot, 'app', 'robots.ts'));

    if (!hasRobots) {
        results.issues.globalFiles.push({
            file: 'ROOT',
            severity: 'HIGH',
            message: 'Missing robots.txt (or app/robots.ts). Search engines may not crawl correctly.',
        });
    }

    // Check favicon
    const hasFavicon = fs.existsSync(path.join(projectRoot, 'public', 'favicon.ico')) ||
        fs.existsSync(path.join(projectRoot, 'app', 'favicon.ico'));

    if (!hasFavicon) {
        results.issues.globalFiles.push({
            file: 'ROOT',
            severity: 'MEDIUM',
            message: 'Missing favicon.ico. This affects brand visibility in search tabs.',
        });
    }

    // Check sitemap
    const hasSitemap = fs.existsSync(path.join(projectRoot, 'public', 'sitemap.xml')) ||
        fs.existsSync(path.join(projectRoot, 'app', 'sitemap.ts'));

    if (!hasSitemap) {
        results.issues.globalFiles.push({
            file: 'ROOT',
            severity: 'HIGH',
            message: 'Missing sitemap.xml (or app/sitemap.ts). Search engines need this to discover pages.',
        });
    }
}

// Check 10: Sitemap Coverage (Basic)
function checkSitemapCoverage() {
    console.log('🔍 Checking sitemap coverage (Static Pages)...');

    // Attempt to read app/sitemap.ts if it exists to see if it includes basic static logic
    const sitemapPath = path.join(appDir, 'sitemap.ts');
    if (!fs.existsSync(sitemapPath)) return; // Already flagged by globalFiles check

    const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');

    // Identify top-level static pages in app/
    const staticPages = getAllFiles(appDir, 'page.tsx')
        .map(f => {
            const rel = path.relative(appDir, f);
            let route = '/' + rel
                .replace('/page.tsx', '')
                .replace('page.tsx', '');
            if (route === '/') route = '/';
            return route;
        })
        .filter(r => !r.includes('[') && !r.includes('_')); // Filter out dynamic and system routes

    // Check if these static routes are likely "mentioned" in sitemap.ts (Heuristic)
    // We look for the route string or some programatic inclusion evidence.

    for (const route of staticPages) {
        if (route === '/') continue; // Usually handled

        // Remove leading slash for matching (e.g., 'about' or '/about')
        const routeName = route.replace(/^\//, '');

        // Very basic check: does the sitemap code mention this route name?
        // This finds strict deficiencies in manual sitemaps.
        if (!sitemapContent.includes(routeName) && !sitemapContent.includes('routes')) {
            results.issues.sitemapCoverage.push({
                file: 'app/sitemap.ts',
                severity: 'LOW',
                message: `Static page "${route}" might be missing from sitemap.ts. (Manual verification recommended).`,
            });
        }
    }
}
// Main Execution
console.log('🚀 Starting Local SEO Audit...');
console.log(`📂 Project Root: ${projectRoot}`);

checkMissingMetadata();
checkMissingAltText();
checkMissingSchema();
checkH1Usage();
checkMetadataValidation();
checkBrokenImages();
checkGlobalFiles();
checkSitemapCoverage();
checkBrokenLinks();
checkKeywordDensity();
generateReport();

console.log('\n✨ Audit Complete!\n');
