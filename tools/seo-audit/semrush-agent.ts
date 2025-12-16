/**
 * Semrush-Style SEO Agent
 * 
 * An autonomous agent that performs deep SEO analysis on Next.js projects.
 * Mimics Semrush's "Site Audit" capabilities.
 */

import fs from 'fs';
import path from 'path';
import { CONFIG } from './agent-config';
import { LinkChecker } from './link-checker';

// Types
interface Issue {
    category: string;
    severity: 'HIGH' | 'MEDIUM' | 'LOW';
    file: string;
    message: string;
    details?: any;
}

interface AuditResult {
    score: number;
    timestamp: string;
    pagesScanned: number;
    issues: Issue[];
}

class SemrushAgent {
    private projectRoot: string;
    private issues: Issue[] = [];
    private pagesScanned = 0;
    private linkChecker: LinkChecker;

    constructor() {
        this.projectRoot = process.cwd();
        this.linkChecker = new LinkChecker();
    }

    /**
     * Main execution entry point
     */
    public async run() {
        console.log('🚀 Semrush Agent: Starting Deep Audit...');

        // 1. Scan File System
        const pageFiles = this.getAllFiles(path.join(this.projectRoot, CONFIG.appDir), 'page.tsx');
        this.pagesScanned = pageFiles.length;

        // Build valid routes set
        const validRoutes = new Set<string>();
        for (const file of pageFiles) {
            const rel = path.relative(path.join(this.projectRoot, CONFIG.appDir), file);
            let route = '/' + rel.replace('/page.tsx', '').replace('page.tsx', '');
            if (route === '/') route = '/';
            // Normalize dynamic segments for matching logic if needed, 
            // but for now strict set is useful for LinkChecker's regex logic.
            validRoutes.add(route);
        }

        // 2. Analyze Each Page
        for (const file of pageFiles) {
            await this.analyzePage(file, validRoutes);
        }

        // 3. Analyze Global Files
        this.checkGlobalFiles();

        // 4. Generate Report
        this.generateReport();
    }

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

    private async analyzePage(filePath: string, validRoutes: Set<string>) {
        const content = fs.readFileSync(filePath, 'utf-8');
        const relativePath = path.relative(this.projectRoot, filePath);

        // A. Metadata Analysis
        this.checkMetadata(content, relativePath);

        // B. H1 Analysis
        this.checkStructure(content, relativePath);

        // C. Content Quality
        this.checkContentQuality(content, relativePath);

        // D. Link Analysis
        const brokenLinks = this.linkChecker.checkLinks(content, validRoutes);
        for (const link of brokenLinks) {
            this.addIssue('Link Health', 'HIGH', relativePath, `Broken internal link: ${link}`);
        }

        // E. Schema Validation
        this.validateSchema(content, relativePath);
    }

    private checkMetadata(content: string, file: string) {
        // Extract metadata export
        const metaMatch = content.match(/export const metadata: Metadata = ({[\s\S]+?});/);

        if (!metaMatch) {
            // Check for generateMetadata
            if (!content.includes('generateMetadata')) {
                this.addIssue('Metadata', 'HIGH', file, 'Missing metadata export or generateMetadata function.');
            }
            return;
        }

        const metaStr = metaMatch[1];

        // Title Length
        const titleMatch = metaStr.match(/title:\s*['"`](.*?)['"`]/);
        if (titleMatch) {
            const len = titleMatch[1].length;
            if (len < CONFIG.validation.titleMin) this.addIssue('Metadata', 'LOW', file, `Title too short (${len} chars).`);
            if (len > CONFIG.validation.titleMax) this.addIssue('Metadata', 'MEDIUM', file, `Title too long (${len} chars). Semrush limit is ~60.`);
        }

        // Description Length
        const descMatch = metaStr.match(/description:\s*['"`](.*?)['"`]/);
        if (descMatch) {
            const len = descMatch[1].length;
            if (len < CONFIG.validation.descMin) this.addIssue('Metadata', 'LOW', file, `Description too short (${len} chars).`);
            if (len > CONFIG.validation.descMax) this.addIssue('Metadata', 'MEDIUM', file, `Description too long (${len} chars).`);
        }

        // Canonical
        if (!metaStr.includes('canonical') && !metaStr.includes('alternates')) {
            this.addIssue('Metadata', 'MEDIUM', file, 'Missing canonical tag.');
        }
    }

    private checkStructure(content: string, file: string) {
        const h1Count = (content.match(/<h1/g) || []).length;
        const heroUsage = (content.match(/<[a-zA-Z]*Hero/g) || []).length;

        if (h1Count === 0 && heroUsage === 0) {
            this.addIssue('Structure', 'HIGH', file, 'No H1 tag found directly or via Hero component.');
        } else if (h1Count > 1) {
            this.addIssue('Structure', 'MEDIUM', file, `Found ${h1Count} H1 tags. Should only have one.`);
        }
    }

    private checkContentQuality(content: string, file: string) {
        // Simple Keyword Density
        const lowerContent = content.toLowerCase();
        let foundKeywords = 0;

        for (const kw of CONFIG.targetKeywords) {
            if (lowerContent.includes(kw.toLowerCase())) foundKeywords++;
        }

        if (foundKeywords === 0) {
            this.addIssue('Content', 'LOW', file, 'Page content does not appear to contain any target keywords.');
        }

        // Text/HTML Ratio Check
        this.checkTextHTMLRatio(content, file);

        // Word Count Check
        this.checkWordCount(content, file);
    }

    private checkTextHTMLRatio(content: string, file: string) {
        // Remove all HTML tags and count remaining text
        const textOnly = content
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove scripts
            .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '') // Remove styles
            .replace(/<[^>]+>/g, '') // Remove all HTML tags
            .replace(/\s+/g, ' ') // Normalize whitespace
            .trim();

        const textLength = textOnly.length;
        const htmlLength = content.length;
        const ratio = htmlLength > 0 ? textLength / htmlLength : 0;

        if (ratio < CONFIG.validation.contentRatioMin) {
            this.addIssue('Content Quality', 'HIGH', file,
                `Low text/HTML ratio (${(ratio * 100).toFixed(1)}%). Page has too much markup vs content. Target: >${(CONFIG.validation.contentRatioMin * 100)}%`);
        }
    }

    private checkWordCount(content: string, file: string) {
        // For page.tsx files that import components, skip word count check
        // as the actual content is in the component
        if (file.includes('page.tsx') && content.includes('import') && content.includes('Content')) {
            return; // Component-based page, actual content elsewhere
        }

        // Extract text and count words - less aggressive stripping
        const textOnly = content
            .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
            .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
            .replace(/<[^>]+>/g, ' ') // Replace tags with spaces
            .replace(/import .+;/g, '') // Remove imports
            .replace(/export .+;/g, '') // Remove exports
            .replace(/\s+/g, ' ')
            .trim();

        const words = textOnly.split(/\s+/).filter(w => w.length > 2); // Filter very short words
        const wordCount = words.length;

        // Only flag if significantly under 300
        if (wordCount < 250) {
            this.addIssue('Content Quality', 'MEDIUM', file,
                `Low word count (${wordCount} words). Minimum recommended: 300 words for SEO.`);
        }
    }

    private validateSchema(content: string, file: string) {
        // Find all JSON-LD script tags
        const schemaRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
        let match;
        let schemaCount = 0;

        while ((match = schemaRegex.exec(content)) !== null) {
            schemaCount++;
            try {
                const schemaData = JSON.parse(match[1]);

                // Basic validation: check for @type and required fields
                if (!schemaData['@type']) {
                    this.addIssue('Schema', 'HIGH', file, 'Schema missing @type field.');
                }

                // Validate LocalBusiness/MedicalBusiness schemas
                if (schemaData['@type'] === 'LocalBusiness' || schemaData['@type'] === 'MedicalBusiness') {
                    const requiredFields = ['name', 'address', 'telephone'];
                    for (const field of requiredFields) {
                        if (!schemaData[field]) {
                            this.addIssue('Schema', 'HIGH', file, `Schema missing required field: ${field}`);
                        }
                    }
                }

                // Validate BreadcrumbList
                if (schemaData['@type'] === 'BreadcrumbList') {
                    if (!schemaData.itemListElement || !Array.isArray(schemaData.itemListElement)) {
                        this.addIssue('Schema', 'HIGH', file, 'BreadcrumbList missing itemListElement array.');
                    }
                }

            } catch (e) {
                this.addIssue('Schema', 'HIGH', file, `Invalid JSON-LD: ${(e as Error).message}`);
            }
        }

        // Check if critical pages have schema
        const isCriticalPage = CONFIG.criticalPages.some(cp => file.includes(cp));
        if (isCriticalPage && schemaCount === 0) {
            this.addIssue('Schema', 'MEDIUM', file, 'Critical page missing structured data (JSON-LD).');
        }
    }

    private checkGlobalFiles() {
        const required = ['robots.txt', 'sitemap.xml', 'favicon.ico'];
        const publicDir = path.join(this.projectRoot, 'public');

        for (const req of required) {
            // Check public/ or app/ (for .ts equivalents)
            const exists = fs.existsSync(path.join(publicDir, req)) ||
                fs.existsSync(path.join(this.projectRoot, 'app', req.replace('.xml', '.ts').replace('.txt', '.ts')));

            if (!exists) {
                this.addIssue('Global', 'HIGH', 'ROOT', `Missing critical SEO file: ${req}`);
            }
        }
    }

    private addIssue(category: string, severity: 'HIGH' | 'MEDIUM' | 'LOW', file: string, message: string) {
        this.issues.push({ category, severity, file, message });
    }

    private generateReport() {
        const reportPath = path.join(this.projectRoot, CONFIG.outputPath);

        let md = `# Semrush-Style SEO Audit Report\n`;
        md += `**Date**: ${new Date().toLocaleString()} | **Pages Scanned**: ${this.pagesScanned}\n\n`;

        // Calculate Score
        const highIssues = this.issues.filter(i => i.severity === 'HIGH').length;
        const medIssues = this.issues.filter(i => i.severity === 'MEDIUM').length;
        const score = Math.max(0, 100 - (highIssues * 5) - (medIssues * 2));

        // Color-coded Score
        const scoreColor = score > 90 ? '🟢' : score > 70 ? '🟡' : '🔴';
        md += `## Site Health Score: ${scoreColor} ${score}/100\n\n`;

        // Summary Table
        md += `| Severity | Count |\n|---|---|\n`;
        md += `| 🔴 HIGH | ${highIssues} |\n`;
        md += `| 🟡 MEDIUM | ${medIssues} |\n`;
        md += `| 🟢 LOW | ${this.issues.filter(i => i.severity === 'LOW').length} |\n\n`;

        // Issues List
        md += `## 📋 Detailed Issues\n\n`;

        if (this.issues.length === 0) {
            md += `🎉 No critical SEO issues found! Good job.`;
        } else {
            // Group by Category
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

        fs.writeFileSync(reportPath, md);
        console.log(`✅ Audit Complete. Report saved to: ${reportPath}`);
    }
}

// Run Agent
new SemrushAgent().run().catch(console.error);
