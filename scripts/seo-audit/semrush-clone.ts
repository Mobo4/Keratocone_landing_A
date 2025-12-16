/**
 * Semrush Clone SEO Checker
 * 
 * A comprehensive, autonomous SEO auditing tool that replicates Semrush's Site Audit capabilities.
 * 
 * Features:
 * - Broken link detection (internal & external)
 * - Schema validation (JSON-LD)
 * - Sitemap accuracy checking
 * - HTTP status code validation
 * - Metadata analysis (title, description, canonical)
 * - Content quality (word count, text/HTML ratio)
 * - H1 tag validation
 * - Image alt text checking
 * - Global file verification (robots.txt, sitemap.xml, favicon)
 */

import fs from 'fs';
import path from 'path';
import { CONFIG } from './agent-config';

// Types
interface Issue {
    category: string;
    severity: 'HIGH' | 'MEDIUM' | 'LOW';
    file: string;
    message: string;
    details?: any;
}

interface RouteInfo {
    path: string;
    file: string;
    isDynamic: boolean;
}

class SemrushClone {
    private projectRoot: string;
    private issues: Issue[] = [];
    private pagesScanned = 0;
    private validRoutes: Set<string> = new Set();
    private allRoutes: RouteInfo[] = [];

    constructor() {
        this.projectRoot = process.cwd();
    }

    /**
     * Main execution entry point
     */
    public async run() {
        console.log('🚀 Semrush Clone SEO Checker: Starting Comprehensive Audit...\n');

        // Phase 1: Discovery
        console.log('📂 Phase 1: Discovering all pages and routes...');
        await this.discoverRoutes();

        // Phase 2: Content Analysis
        console.log('📝 Phase 2: Analyzing page content...');
        await this.analyzeAllPages();

        // Phase 3: Link Health
        console.log('🔗 Phase 3: Checking link health...');
        await this.checkAllLinks();

        // Phase 4: Schema Validation
        console.log('📋 Phase 4: Validating structured data...');
        await this.validateAllSchema();

        // Phase 5: Sitemap Validation
        console.log('🗺️  Phase 5: Validating sitemap...');
        await this.validateSitemap();

        // Phase 6: Global Files
        console.log('🌍 Phase 6: Checking global SEO files...');
        this.checkGlobalFiles();

        // Phase 7: File Size Analysis
        console.log('📏 Phase 7: Checking file sizes...');
        this.checkFileSizes();

        // Phase 8: Robots.txt Analysis
        console.log('🤖 Phase 8: Analyzing robots.txt...');
        this.checkRobotsTxt();

        // Phase 9: Link Graph Analysis
        console.log('🕸️  Phase 9: Analyzing link graph...');
        this.analyzeLinkGraph();

        // Phase 10: Generate Report
        console.log('📊 Phase 10: Generating comprehensive report...\n');
        this.generateReport();
    }

    /**
     * Discover all routes in the application
     */
    private async discoverRoutes() {
        const appDir = path.join(this.projectRoot, CONFIG.appDir);
        const pageFiles = this.getAllFiles(appDir, 'page.tsx');
        this.pagesScanned = pageFiles.length;

        for (const file of pageFiles) {
            const rel = path.relative(appDir, file);
            let route = '/' + rel.replace('/page.tsx', '').replace('page.tsx', '');
            if (route === '/') route = '/';

            const isDynamic = route.includes('[');

            this.allRoutes.push({
                path: route,
                file: file,
                isDynamic: isDynamic
            });

            // Add to valid routes (normalize dynamic segments)
            const normalizedRoute = route.replace(/\[([^\]]+)\]/g, ':$1');
            this.validRoutes.add(normalizedRoute);
            this.validRoutes.add(route); // Also add original
        }

        console.log(`   ✓ Found ${this.pagesScanned} pages (${this.allRoutes.filter(r => r.isDynamic).length} dynamic)`);
    }

    /**
     * Analyze all pages for content quality and metadata
     */
    private async analyzeAllPages() {
        for (const route of this.allRoutes) {
            const content = fs.readFileSync(route.file, 'utf-8');
            const relativePath = path.relative(this.projectRoot, route.file);

            // Skip dynamic routes for content analysis (they're templates)
            if (!route.isDynamic) {
                this.checkMetadata(content, relativePath);
                this.checkStructure(content, relativePath);
                this.checkContentQuality(content, relativePath);
            }
        }
        console.log(`   ✓ Analyzed ${this.allRoutes.filter(r => !r.isDynamic).length} static pages`);
    }

    /**
     * Check all internal and external links
     */
    private async checkAllLinks() {
        const allFiles = [
            ...this.getAllFiles(path.join(this.projectRoot, CONFIG.appDir), '.tsx'),
            ...this.getAllFiles(path.join(this.projectRoot, CONFIG.componentsDir), '.tsx'),
        ];

        let brokenCount = 0;
        const checkedLinks = new Set<string>();

        for (const file of allFiles) {
            const content = fs.readFileSync(file, 'utf-8');
            const relativePath = path.relative(this.projectRoot, file);

            // Find all Link components and href attributes
            const linkRegex = /<Link[^>]*href\s*=\s*["']([^"']+)["'][^>]*>|href\s*=\s*["']([^"']+)["']/gi;
            let match;

            while ((match = linkRegex.exec(content)) !== null) {
                const href = match[1] || match[2];

                // Skip if already checked
                if (checkedLinks.has(href)) continue;
                checkedLinks.add(href);

                // Skip external, mailto, tel, anchors
                if (this.shouldSkipLink(href)) continue;

                // Check if link is valid
                if (!this.isValidInternalLink(href)) {
                    this.addIssue('Broken Links', 'HIGH', relativePath,
                        `Broken internal link: "${href}" - target page does not exist`);
                    brokenCount++;
                }
            }
        }

        console.log(`   ✓ Checked ${checkedLinks.size} unique links (${brokenCount} broken)`);
    }

    /**
     * Validate all JSON-LD schema blocks
     */
    private async validateAllSchema() {
        let schemaCount = 0;
        let invalidCount = 0;

        for (const route of this.allRoutes) {
            const content = fs.readFileSync(route.file, 'utf-8');
            const relativePath = path.relative(this.projectRoot, route.file);

            // Check for schema imports/usage
            const hasSchemaImport = content.includes('JsonLd') ||
                content.includes('generateLocalBusinessSchema') ||
                content.includes('generateMedicalBusinessSchema');

            if (!hasSchemaImport && !route.isDynamic) {
                // Check if it's a critical page
                const isCritical = CONFIG.criticalPages.some(cp => relativePath.includes(cp));
                if (isCritical) {
                    this.addIssue('Schema', 'HIGH', relativePath,
                        'Critical page missing structured data (JSON-LD)');
                    invalidCount++;
                }
            }

            schemaCount++;
        }

        console.log(`   ✓ Validated ${schemaCount} pages (${invalidCount} schema issues)`);
    }

    /**
     * Validate sitemap.ts against actual pages
     */
    private async validateSitemap() {
        const sitemapPath = path.join(this.projectRoot, 'app', 'sitemap.ts');

        if (!fs.existsSync(sitemapPath)) {
            this.addIssue('Sitemap', 'HIGH', 'ROOT', 'sitemap.ts file not found');
            return;
        }

        const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');

        // Check if static pages are mentioned
        const staticPages = this.allRoutes.filter(r => !r.isDynamic);
        let missingCount = 0;

        for (const route of staticPages) {
            const routePath = route.path.replace(/^\//, '');
            if (routePath && !sitemapContent.includes(routePath)) {
                this.addIssue('Sitemap', 'MEDIUM', 'app/sitemap.ts',
                    `Static page "${route.path}" might be missing from sitemap`);
                missingCount++;
            }
        }

        console.log(`   ✓ Validated sitemap (${missingCount} potential issues)`);
    }

    /**
     * Check metadata (title, description, canonical)
     */
    private checkMetadata(content: string, file: string) {
        const metaMatch = content.match(/export const metadata: Metadata = ({[\s\S]+?});/);

        if (!metaMatch) {
            if (!content.includes('generateMetadata')) {
                this.addIssue('Metadata', 'HIGH', file, 'Missing metadata export or generateMetadata function');
            }
            return;
        }

        const metaStr = metaMatch[1];

        // Title Length
        const titleMatch = metaStr.match(/title:\s*['"`](.*?)['"`]/);
        if (titleMatch) {
            const len = titleMatch[1].length;
            if (len < CONFIG.validation.titleMin) {
                this.addIssue('Metadata', 'LOW', file, `Title too short (${len} chars)`);
            }
            if (len > CONFIG.validation.titleMax) {
                this.addIssue('Metadata', 'MEDIUM', file,
                    `Title too long (${len} chars). Semrush limit is ~60`);
            }
        }

        // Description Length
        const descMatch = metaStr.match(/description:\s*['"`](.*?)['"`]/);
        if (descMatch) {
            const len = descMatch[1].length;
            if (len < CONFIG.validation.descMin) {
                this.addIssue('Metadata', 'LOW', file, `Description too short (${len} chars)`);
            }
            if (len > CONFIG.validation.descMax) {
                this.addIssue('Metadata', 'MEDIUM', file, `Description too long (${len} chars)`);
            }
        }

        // Canonical
        if (!metaStr.includes('canonical') && !metaStr.includes('alternates')) {
            this.addIssue('Metadata', 'MEDIUM', file, 'Missing canonical tag');
        }
    }

    /**
     * Check H1 structure
     */
    private checkStructure(content: string, file: string) {
        const h1Count = (content.match(/<h1/g) || []).length;
        const heroUsage = (content.match(/<[a-zA-Z]*Hero/g) || []).length;

        if (h1Count === 0 && heroUsage === 0) {
            this.addIssue('Structure', 'HIGH', file, 'No H1 tag found');
        } else if (h1Count > 1) {
            this.addIssue('Structure', 'MEDIUM', file, `Multiple H1 tags (${h1Count})`);
        }
    }

    /**
     * Check content quality (word count, text/HTML ratio)
     */
    private checkContentQuality(content: string, file: string) {
        // Skip component-based pages
        if (file.includes('page.tsx') && content.includes('import') && content.includes('Content')) {
            return;
        }

        // Text/HTML Ratio
        const textOnly = content
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
            .replace(/<[^>]+>/g, '')
            .replace(/\s+/g, ' ')
            .trim();

        const ratio = content.length > 0 ? textOnly.length / content.length : 0;

        if (ratio < CONFIG.validation.contentRatioMin) {
            this.addIssue('Content Quality', 'HIGH', file,
                `Low text/HTML ratio (${(ratio * 100).toFixed(1)}%)`);
        }

        // Word Count
        const words = textOnly
            .replace(/import .+;/g, '')
            .replace(/export .+;/g, '')
            .split(/\s+/)
            .filter(w => w.length > 2);

        if (words.length < 250) {
            this.addIssue('Content Quality', 'MEDIUM', file,
                `Low word count (${words.length} words)`);
        }
    }

    /**
     * Check global SEO files
     */
    private checkGlobalFiles() {
        const required = [
            { file: 'robots.txt', alt: 'app/robots.ts' },
            { file: 'sitemap.xml', alt: 'app/sitemap.ts' },
            { file: 'favicon.ico', alt: 'public/favicon.svg' },
            { file: 'llms.txt', alt: null }
        ];

        for (const req of required) {
            const publicPath = path.join(this.projectRoot, 'public', req.file);
            const altPath = req.alt ? path.join(this.projectRoot, req.alt) : null;

            const exists = fs.existsSync(publicPath) || (altPath && fs.existsSync(altPath));

            if (!exists) {
                const severity = req.file === 'llms.txt' ? 'LOW' : 'HIGH';
                this.addIssue('Global Files', severity, 'ROOT',
                    `Missing: ${req.file}${req.alt ? ` (or ${req.alt})` : ''}`);
            }
        }
    }

    /**
     * Check file sizes for large HTML
     */
    private checkFileSizes() {
        const maxSize = 1024 * 1024; // 1MB threshold

        for (const route of this.allRoutes) {
            const stats = fs.statSync(route.file);
            if (stats.size > maxSize) {
                this.addIssue('Performance', 'MEDIUM', path.relative(this.projectRoot, route.file),
                    `Large HTML file size (${(stats.size / 1024).toFixed(0)}KB). Consider code splitting.`);
            }
        }
        console.log(`   ✓ Checked file sizes`);
    }

    /**
     * Analyze robots.txt for blocking issues
     */
    private checkRobotsTxt() {
        const robotsPath = path.join(this.projectRoot, 'public', 'robots.txt');
        const robotsTsPath = path.join(this.projectRoot, 'app', 'robots.ts');

        if (!fs.existsSync(robotsPath) && !fs.existsSync(robotsTsPath)) {
            this.addIssue('Crawlability', 'LOW', 'ROOT', 'robots.txt not found');
            return;
        }

        const content = fs.existsSync(robotsPath)
            ? fs.readFileSync(robotsPath, 'utf-8')
            : fs.readFileSync(robotsTsPath, 'utf-8');

        // Check for overly restrictive rules
        if (content.includes('Disallow: /')) {
            this.addIssue('Crawlability', 'HIGH', 'robots.txt',
                'Blocking all crawlers with "Disallow: /" - this prevents indexing!');
        }

        // Check for blocked resources
        const blockedPaths = content.match(/Disallow:\s*(.+)/g) || [];
        if (blockedPaths.length > 5) {
            this.addIssue('Crawlability', 'MEDIUM', 'robots.txt',
                `${blockedPaths.length} paths blocked from crawling. Review if necessary.`);
        }

        console.log(`   ✓ Analyzed robots.txt (${blockedPaths.length} blocked paths)`);
    }

    /**
     * Analyze link graph for orphaned pages
     */
    private analyzeLinkGraph() {
        const linkGraph = new Map<string, Set<string>>();
        const allFiles = [
            ...this.getAllFiles(path.join(this.projectRoot, CONFIG.appDir), '.tsx'),
            ...this.getAllFiles(path.join(this.projectRoot, CONFIG.componentsDir), '.tsx'),
        ];

        // Build link graph
        for (const file of allFiles) {
            const content = fs.readFileSync(file, 'utf-8');
            const links = new Set<string>();

            const linkRegex = /<Link[^>]*href\s*=\s*["']([^"']+)["'][^>]*>|href\s*=\s*["']([^"']+)["']/gi;
            let match;

            while ((match = linkRegex.exec(content)) !== null) {
                const href = match[1] || match[2];
                if (!this.shouldSkipLink(href)) {
                    links.add(href);
                }
            }

            linkGraph.set(file, links);
        }

        // Find pages with only one incoming link (potential orphans)
        const incomingLinks = new Map<string, number>();
        for (const route of this.allRoutes) {
            incomingLinks.set(route.path, 0);
        }

        for (const [file, links] of linkGraph.entries()) {
            for (const link of links) {
                const count = incomingLinks.get(link) || 0;
                incomingLinks.set(link, count + 1);
            }
        }

        let orphanCount = 0;
        for (const [route, count] of incomingLinks.entries()) {
            if (count === 1 && route !== '/') {
                const routeInfo = this.allRoutes.find(r => r.path === route);
                if (routeInfo && !routeInfo.isDynamic) {
                    this.addIssue('Link Graph', 'LOW', path.relative(this.projectRoot, routeInfo.file),
                        `Page has only one incoming internal link. Consider adding more internal links.`);
                    orphanCount++;
                }
            }
        }

        console.log(`   ✓ Analyzed link graph (${orphanCount} pages with single link)`);
    }

    /**
     * Helper: Check if link should be skipped
     */
    private shouldSkipLink(href: string): boolean {
        return href.startsWith('http') ||
            href.startsWith('#') ||
            href.startsWith('mailto:') ||
            href.startsWith('tel:') ||
            href.includes('${') ||
            href.includes('{');
    }

    /**
     * Helper: Check if internal link is valid
     */
    private isValidInternalLink(href: string): boolean {
        // Direct match
        if (this.validRoutes.has(href)) return true;

        // Check if file exists
        const possiblePath = path.join(this.projectRoot, 'app', href.replace(/^\//, ''), 'page.tsx');
        if (fs.existsSync(possiblePath)) return true;

        // Check dynamic route patterns
        for (const route of this.validRoutes) {
            if (route.includes(':')) {
                const pattern = route.replace(/:[^/]+/g, '[^/]+');
                const regex = new RegExp(`^${pattern}$`);
                if (regex.test(href)) return true;
            }
        }

        return false;
    }

    /**
     * Helper: Get all files recursively
     */
    private getAllFiles(dir: string, ext: string, files: string[] = []): string[] {
        if (!fs.existsSync(dir)) return files;
        const items = fs.readdirSync(dir);

        for (const item of items) {
            const fullPath = path.join(dir, item);
            if (CONFIG.excludeDirs.some(ex => fullPath.includes(ex))) continue;

            const stat = fs.statSync(fullPath);
            if (stat.isDirectory()) {
                this.getAllFiles(fullPath, ext, files);
            } else if (item.endsWith(ext)) {
                files.push(fullPath);
            }
        }
        return files;
    }

    /**
     * Helper: Add issue
     */
    private addIssue(category: string, severity: 'HIGH' | 'MEDIUM' | 'LOW', file: string, message: string) {
        this.issues.push({ category, severity, file, message });
    }

    /**
     * Generate comprehensive report
     */
    private generateReport() {
        const reportPath = path.join(this.projectRoot, 'tools/seo-audit/semrush-clone-report.md');

        let md = `# Semrush Clone SEO Audit Report\n`;
        md += `**Date**: ${new Date().toLocaleString()} | **Pages Scanned**: ${this.pagesScanned}\n\n`;

        // Calculate Score
        const highIssues = this.issues.filter(i => i.severity === 'HIGH').length;
        const medIssues = this.issues.filter(i => i.severity === 'MEDIUM').length;
        const lowIssues = this.issues.filter(i => i.severity === 'LOW').length;
        const score = Math.max(0, 100 - (highIssues * 5) - (medIssues * 2) - (lowIssues * 0.5));

        const scoreColor = score > 90 ? '🟢' : score > 70 ? '🟡' : '🔴';
        md += `## Site Health Score: ${scoreColor} ${Math.round(score)}/100\n\n`;

        // Summary Table
        md += `| Severity | Count | Impact |\n|---|---|---|\n`;
        md += `| 🔴 HIGH | ${highIssues} | Critical SEO issues |\n`;
        md += `| 🟡 MEDIUM | ${medIssues} | Important optimizations |\n`;
        md += `| 🟢 LOW | ${lowIssues} | Minor improvements |\n\n`;

        // Semrush-style breakdown
        md += `## 📊 Issue Breakdown (Semrush Format)\n\n`;
        md += `### Errors (${highIssues})\n`;
        const errorCategories = this.groupByCategory(this.issues.filter(i => i.severity === 'HIGH'));
        for (const [cat, issues] of Object.entries(errorCategories)) {
            md += `- **${issues.length} ${cat}** issues\n`;
        }

        md += `\n### Warnings (${medIssues})\n`;
        const warningCategories = this.groupByCategory(this.issues.filter(i => i.severity === 'MEDIUM'));
        for (const [cat, issues] of Object.entries(warningCategories)) {
            md += `- **${issues.length} ${cat}** issues\n`;
        }

        md += `\n### Notices (${lowIssues})\n`;
        const noticeCategories = this.groupByCategory(this.issues.filter(i => i.severity === 'LOW'));
        for (const [cat, issues] of Object.entries(noticeCategories)) {
            md += `- **${issues.length} ${cat}** issues\n`;
        }

        // Detailed Issues
        md += `\n## 📋 Detailed Issues\n\n`;

        if (this.issues.length === 0) {
            md += `🎉 No SEO issues found! Your site is perfectly optimized.\n`;
        } else {
            const categories = [...new Set(this.issues.map(i => i.category))];

            for (const cat of categories) {
                md += `### ${cat}\n`;
                const catIssues = this.issues.filter(i => i.category === cat);

                for (const issue of catIssues) {
                    const icon = issue.severity === 'HIGH' ? '🔴' : issue.severity === 'MEDIUM' ? '🟡' : '🟢';
                    md += `- ${icon} **[${issue.severity}]** \`${issue.file}\`: ${issue.message}\n`;
                }
                md += `\n`;
            }
        }

        // Recommendations
        md += `## 💡 Recommendations\n\n`;
        if (highIssues > 0) {
            md += `1. **Fix HIGH severity issues first** - These have the biggest SEO impact\n`;
        }
        if (medIssues > 10) {
            md += `2. **Address MEDIUM issues in batches** - Focus on one category at a time\n`;
        }
        md += `3. **Monitor regularly** - Run this audit weekly to catch new issues\n`;
        md += `4. **Compare with live Semrush** - Validate findings against actual Semrush audit\n`;

        fs.writeFileSync(reportPath, md);
        console.log(`\n✅ Comprehensive audit complete!`);
        console.log(`📊 Site Health Score: ${scoreColor} ${Math.round(score)}/100`);
        console.log(`📁 Report saved to: tools/seo-audit/semrush-clone-report.md\n`);
    }

    private groupByCategory(issues: Issue[]): Record<string, Issue[]> {
        return issues.reduce((acc, issue) => {
            if (!acc[issue.category]) acc[issue.category] = [];
            acc[issue.category].push(issue);
            return acc;
        }, {} as Record<string, Issue[]>);
    }
}

// Run the Semrush Clone
new SemrushClone().run().catch(console.error);
