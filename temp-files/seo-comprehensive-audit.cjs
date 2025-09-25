#!/usr/bin/env node

/**
 * Comprehensive SEO Validation and Link Checking Script
 * 
 * This script performs:
 * 1. SEO compliance checks for all condition pages
 * 2. Link validation for eye-conditions page
 * 3. Structured data validation
 * 4. Heading hierarchy analysis
 * 5. Image alt text validation
 * 6. Internal linking structure analysis
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Configuration
const PROJECT_ROOT = process.cwd();
const CONDITIONS_DIR = path.join(PROJECT_ROOT, 'src/pages/education/conditions');
const REPORT_DIR = path.join(PROJECT_ROOT, 'seo-audit-reports');
const TIMESTAMP = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);

// Ensure report directory exists
if (!fs.existsSync(REPORT_DIR)) {
    fs.mkdirSync(REPORT_DIR, { recursive: true });
}

// SEO validation criteria and weights
const SEO_CRITERIA = {
    title: { weight: 20, required: true },
    description: { weight: 20, required: true },
    keywords: { weight: 10, required: false },
    canonicalUrl: { weight: 15, required: true },
    structuredData: { weight: 20, required: true },
    h1Tag: { weight: 10, required: true },
    headingHierarchy: { weight: 5, required: true },
    imageAltText: { weight: 5, required: false },
    internalLinks: { weight: 5, required: false }
};

class SEOAuditor {
    constructor() {
        this.results = {
            conditionPages: [],
            eyeConditionsPage: null,
            summary: {
                totalPages: 0,
                passedPages: 0,
                averageScore: 0,
                criticalIssues: [],
                recommendations: []
            }
        };
    }

    /**
     * Get all condition page files
     */
    getConditionFiles() {
        try {
            const files = fs.readdirSync(CONDITIONS_DIR)
                .filter(file => file.endsWith('.tsx'))
                .map(file => path.join(CONDITIONS_DIR, file));
            
            console.log(`Found ${files.length} condition page files`);
            return files;
        } catch (error) {
            console.error('Error reading conditions directory:', error.message);
            return [];
        }
    }

    /**
     * Parse React component file for SEO elements
     */
    parseComponentFile(filePath) {
        try {
            const content = fs.readFileSync(filePath, 'utf-8');
            const fileName = path.basename(filePath, '.tsx');
            
            const analysis = {
                file: fileName,
                path: filePath,
                seo: this.extractSEOData(content),
                structure: this.analyzeStructure(content),
                issues: [],
                score: 0
            };

            return analysis;
        } catch (error) {
            console.error(`Error parsing file ${filePath}:`, error.message);
            return null;
        }
    }

    /**
     * Extract SEO data from component content
     */
    extractSEOData(content) {
        const seo = {
            title: null,
            description: null,
            keywords: null,
            canonicalUrl: null,
            ogType: null,
            structuredData: null,
            hasSEOComponent: false
        };

        // Check for SEO component import
        seo.hasSEOComponent = /import\s+SEO\s+from/.test(content);

        // Extract SEO component props
        const seoMatch = content.match(/<SEO\s+([\s\S]*?)\/?>(?:[\s\S]*?<\/SEO>)?/);
        if (seoMatch) {
            const props = seoMatch[1];
            
            // Extract individual props
            const titleMatch = props.match(/title=["']([^"']+)["']/);
            if (titleMatch) seo.title = titleMatch[1];

            const descMatch = props.match(/description=["']([^"']+)["']/);
            if (descMatch) seo.description = descMatch[1];

            const keywordsMatch = props.match(/keywords=["']([^"']+)["']/);
            if (keywordsMatch) seo.keywords = keywordsMatch[1];

            const canonicalMatch = props.match(/canonicalUrl=["']([^"']+)["']/);
            if (canonicalMatch) seo.canonicalUrl = canonicalMatch[1];

            const ogTypeMatch = props.match(/ogType=["']([^"']+)["']/);
            if (ogTypeMatch) seo.ogType = ogTypeMatch[1];

            // Check for structured data
            seo.structuredData = /structuredData=\{/.test(props);
        }

        return seo;
    }

    /**
     * Analyze component structure for SEO elements
     */
    analyzeStructure(content) {
        const structure = {
            h1Tags: [],
            headings: [],
            images: [],
            links: [],
            headingHierarchy: true
        };

        // Extract H1 tags
        const h1Matches = content.match(/<h1[^>]*>(.*?)<\/h1>/gi);
        if (h1Matches) {
            structure.h1Tags = h1Matches.map(match => {
                const textMatch = match.match(/>([^<]+)</);
                return textMatch ? textMatch[1].trim() : '';
            });
        }

        // Extract all headings
        const headingMatches = content.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi);
        if (headingMatches) {
            structure.headings = headingMatches.map(match => {
                const levelMatch = match.match(/<h([1-6])/);
                const textMatch = match.match(/>([^<]+)</);
                return {
                    level: levelMatch ? parseInt(levelMatch[1]) : 0,
                    text: textMatch ? textMatch[1].trim() : ''
                };
            });

            // Check heading hierarchy
            structure.headingHierarchy = this.validateHeadingHierarchy(structure.headings);
        }

        // Extract images
        const imgMatches = content.match(/<img[^>]*>/gi);
        if (imgMatches) {
            structure.images = imgMatches.map(match => {
                const altMatch = match.match(/alt=["']([^"']*)["']/);
                const srcMatch = match.match(/src=["']([^"']*)["']/);
                return {
                    src: srcMatch ? srcMatch[1] : '',
                    alt: altMatch ? altMatch[1] : '',
                    hasAlt: !!altMatch
                };
            });
        }

        // Extract internal links
        const linkMatches = content.match(/<Link[^>]*to=["']([^"']+)["'][^>]*>(.*?)<\/Link>/gi);
        if (linkMatches) {
            structure.links = linkMatches.map(match => {
                const toMatch = match.match(/to=["']([^"']+)["']/);
                const textMatch = match.match(/>([^<]+)</);
                return {
                    to: toMatch ? toMatch[1] : '',
                    text: textMatch ? textMatch[1].trim() : ''
                };
            });
        }

        return structure;
    }

    /**
     * Validate heading hierarchy (H1 -> H2 -> H3, etc.)
     */
    validateHeadingHierarchy(headings) {
        if (headings.length === 0) return true;

        let previousLevel = 0;
        for (const heading of headings) {
            if (heading.level > previousLevel + 1) {
                return false; // Skipped a level
            }
            previousLevel = heading.level;
        }
        return true;
    }

    /**
     * Calculate SEO score for a page
     */
    calculateSEOScore(analysis) {
        let score = 0;
        const issues = [];

        // Check each SEO criterion
        Object.entries(SEO_CRITERIA).forEach(([criterion, config]) => {
            let passed = false;

            switch (criterion) {
                case 'title':
                    passed = !!analysis.seo.title;
                    if (!passed && config.required) {
                        issues.push('Missing page title');
                    } else if (analysis.seo.title && analysis.seo.title.length > 60) {
                        issues.push('Title too long (>60 chars)');
                        passed = false;
                    }
                    break;

                case 'description':
                    passed = !!analysis.seo.description;
                    if (!passed && config.required) {
                        issues.push('Missing meta description');
                    } else if (analysis.seo.description && analysis.seo.description.length > 160) {
                        issues.push('Description too long (>160 chars)');
                        passed = false;
                    }
                    break;

                case 'keywords':
                    passed = !!analysis.seo.keywords;
                    if (!passed && !config.required) {
                        passed = true; // Optional
                    }
                    break;

                case 'canonicalUrl':
                    passed = !!analysis.seo.canonicalUrl;
                    if (!passed && config.required) {
                        issues.push('Missing canonical URL');
                    }
                    break;

                case 'structuredData':
                    passed = !!analysis.seo.structuredData;
                    if (!passed && config.required) {
                        issues.push('Missing structured data');
                    }
                    break;

                case 'h1Tag':
                    passed = analysis.structure.h1Tags.length === 1;
                    if (analysis.structure.h1Tags.length === 0) {
                        issues.push('Missing H1 tag');
                    } else if (analysis.structure.h1Tags.length > 1) {
                        issues.push('Multiple H1 tags found');
                    }
                    break;

                case 'headingHierarchy':
                    passed = analysis.structure.headingHierarchy;
                    if (!passed) {
                        issues.push('Improper heading hierarchy');
                    }
                    break;

                case 'imageAltText':
                    const imagesWithoutAlt = analysis.structure.images.filter(img => !img.hasAlt);
                    passed = imagesWithoutAlt.length === 0;
                    if (!passed) {
                        issues.push(`${imagesWithoutAlt.length} images missing alt text`);
                    }
                    break;

                case 'internalLinks':
                    passed = analysis.structure.links.length > 0;
                    if (!passed) {
                        issues.push('No internal links found');
                    }
                    break;
            }

            if (passed) {
                score += config.weight;
            }
        });

        analysis.issues = issues;
        analysis.score = score;

        return analysis;
    }

    /**
     * Validate links in the eye-conditions page
     */
    async validateEyeConditionsLinks() {
        const eyeConditionsPath = path.join(PROJECT_ROOT, 'src/pages/EyeConditionsPage.tsx');
        
        if (!fs.existsSync(eyeConditionsPath)) {
            console.log('EyeConditionsPage.tsx not found');
            return null;
        }

        const content = fs.readFileSync(eyeConditionsPath, 'utf-8');
        const links = this.extractLinksFromEyeConditionsPage(content);
        
        const validation = {
            totalLinks: links.length,
            validLinks: [],
            brokenLinks: [],
            categoryLinks: [],
            conditionLinks: []
        };

        // Validate each link
        for (const link of links) {
            const isValid = await this.validateLink(link);
            if (isValid) {
                validation.validLinks.push(link);
                
                // Categorize links
                if (link.to.includes('/education/conditions/')) {
                    validation.conditionLinks.push(link);
                } else if (link.to.includes('/education/categories/')) {
                    validation.categoryLinks.push(link);
                }
            } else {
                validation.brokenLinks.push(link);
            }
        }

        return validation;
    }

    /**
     * Extract links from EyeConditionsPage
     */
    extractLinksFromEyeConditionsPage(content) {
        const links = [];
        
        // Extract Link components
        const linkMatches = content.match(/<Link[^>]*to=["']([^"']+)["'][^>]*>/g);
        if (linkMatches) {
            linkMatches.forEach(match => {
                const toMatch = match.match(/to=["']([^"']+)["']/);
                if (toMatch) {
                    links.push({
                        to: toMatch[1],
                        type: 'internal',
                        source: 'Link component'
                    });
                }
            });
        }

        // Extract template literals that might contain dynamic links
        const templateMatches = content.match(/`\/education\/conditions\/\$\{[^}]+\}`/g);
        if (templateMatches) {
            templateMatches.forEach(match => {
                links.push({
                    to: match,
                    type: 'dynamic',
                    source: 'Template literal'
                });
            });
        }

        return links;
    }

    /**
     * Validate if a link resolves to an existing file
     */
    async validateLink(link) {
        if (link.type === 'dynamic') {
            // For dynamic links, we'll check if the pattern is valid
            return true; // Assume dynamic links are valid for now
        }

        // Check if it's an internal condition link
        if (link.to.startsWith('/education/conditions/')) {
            const slug = link.to.replace('/education/conditions/', '');
            const expectedFiles = [
                path.join(CONDITIONS_DIR, `${slug}.tsx`),
                path.join(CONDITIONS_DIR, `${this.slugToPascalCase(slug)}.tsx`),
                path.join(CONDITIONS_DIR, `${this.slugToPascalCase(slug)}Page.tsx`),
                path.join(CONDITIONS_DIR, `${this.slugToPascalCase(slug)}EducationPage.tsx`)
            ];

            return expectedFiles.some(file => fs.existsSync(file));
        }

        // For other internal links, assume they're valid
        return true;
    }

    /**
     * Convert slug to PascalCase
     */
    slugToPascalCase(slug) {
        return slug
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join('');
    }

    /**
     * Run the complete SEO audit
     */
    async runAudit() {
        console.log('🔍 Starting comprehensive SEO audit...\n');

        // Get all condition files
        const conditionFiles = this.getConditionFiles();
        this.results.summary.totalPages = conditionFiles.length;

        // Analyze each condition page
        console.log('📄 Analyzing condition pages...');
        for (const file of conditionFiles) {
            console.log(`   Analyzing: ${path.basename(file)}`);
            const analysis = this.parseComponentFile(file);
            
            if (analysis) {
                const scoredAnalysis = this.calculateSEOScore(analysis);
                this.results.conditionPages.push(scoredAnalysis);
                
                if (scoredAnalysis.score >= 80) {
                    this.results.summary.passedPages++;
                }
            }
        }

        // Validate eye-conditions page links
        console.log('\n🔗 Validating eye-conditions page links...');
        this.results.eyeConditionsPage = await this.validateEyeConditionsLinks();

        // Calculate summary statistics
        this.calculateSummaryStats();

        // Generate report
        await this.generateReport();

        console.log('\n✅ SEO audit completed!');
        console.log(`📊 Average SEO score: ${this.results.summary.averageScore.toFixed(1)}%`);
        console.log(`📈 Passed pages: ${this.results.summary.passedPages}/${this.results.summary.totalPages}`);
    }

    /**
     * Calculate summary statistics
     */
    calculateSummaryStats() {
        const scores = this.results.conditionPages.map(page => page.score);
        this.results.summary.averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;

        // Collect critical issues
        this.results.conditionPages.forEach(page => {
            page.issues.forEach(issue => {
                if (issue.includes('Missing') || issue.includes('Multiple H1')) {
                    this.results.summary.criticalIssues.push({
                        page: page.file,
                        issue: issue
                    });
                }
            });
        });

        // Generate recommendations
        this.generateRecommendations();
    }

    /**
     * Generate SEO recommendations
     */
    generateRecommendations() {
        const recommendations = [];
        const issueFrequency = {};

        // Count issue frequencies
        this.results.conditionPages.forEach(page => {
            page.issues.forEach(issue => {
                issueFrequency[issue] = (issueFrequency[issue] || 0) + 1;
            });
        });

        // Generate recommendations based on most common issues
        Object.entries(issueFrequency)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 5)
            .forEach(([issue, count]) => {
                let recommendation = '';
                
                if (issue.includes('Missing page title')) {
                    recommendation = 'Add descriptive page titles to all condition pages';
                } else if (issue.includes('Missing meta description')) {
                    recommendation = 'Add compelling meta descriptions (120-160 characters)';
                } else if (issue.includes('Missing canonical URL')) {
                    recommendation = 'Implement canonical URLs for all pages';
                } else if (issue.includes('Missing structured data')) {
                    recommendation = 'Add medical condition structured data to all pages';
                } else if (issue.includes('Missing H1 tag')) {
                    recommendation = 'Ensure each page has exactly one H1 tag';
                } else if (issue.includes('images missing alt text')) {
                    recommendation = 'Add descriptive alt text to all images';
                } else {
                    recommendation = `Address: ${issue}`;
                }

                recommendations.push({
                    issue: issue,
                    affectedPages: count,
                    recommendation: recommendation,
                    priority: count > this.results.summary.totalPages * 0.5 ? 'High' : 'Medium'
                });
            });

        this.results.summary.recommendations = recommendations;
    }

    /**
     * Generate comprehensive report
     */
    async generateReport() {
        const reportData = {
            timestamp: new Date().toISOString(),
            summary: this.results.summary,
            detailedResults: this.results.conditionPages,
            linkValidation: this.results.eyeConditionsPage,
            scoring: SEO_CRITERIA
        };

        // Generate JSON report
        const jsonReport = path.join(REPORT_DIR, `seo-audit-${TIMESTAMP}.json`);
        fs.writeFileSync(jsonReport, JSON.stringify(reportData, null, 2));

        // Generate human-readable report
        const htmlReport = path.join(REPORT_DIR, `seo-audit-${TIMESTAMP}.html`);
        const htmlContent = this.generateHTMLReport(reportData);
        fs.writeFileSync(htmlReport, htmlContent);

        // Generate CSV summary
        const csvReport = path.join(REPORT_DIR, `seo-audit-summary-${TIMESTAMP}.csv`);
        const csvContent = this.generateCSVReport(reportData);
        fs.writeFileSync(csvReport, csvContent);

        console.log(`\n📋 Reports generated:`);
        console.log(`   JSON: ${jsonReport}`);
        console.log(`   HTML: ${htmlReport}`);
        console.log(`   CSV:  ${csvReport}`);
    }

    /**
     * Generate HTML report
     */
    generateHTMLReport(data) {
        return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SEO Audit Report - ${data.timestamp}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { text-align: center; margin-bottom: 30px; }
        .summary { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .metric { background: #f8f9fa; padding: 20px; border-radius: 8px; text-align: center; }
        .metric-value { font-size: 2em; font-weight: bold; color: #007bff; }
        .metric-label { color: #666; margin-top: 5px; }
        .section { margin-bottom: 30px; }
        .section h2 { color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px; }
        table { width: 100%; border-collapse: collapse; margin-top: 15px; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background-color: #f8f9fa; font-weight: bold; }
        .score { font-weight: bold; }
        .score.high { color: #28a745; }
        .score.medium { color: #ffc107; }
        .score.low { color: #dc3545; }
        .issues { max-width: 300px; word-wrap: break-word; }
        .recommendations { background: #e3f2fd; padding: 15px; border-radius: 8px; margin-bottom: 15px; }
        .priority.high { border-left: 4px solid #dc3545; }
        .priority.medium { border-left: 4px solid #ffc107; }
        .priority.low { border-left: 4px solid #28a745; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>SEO Audit Report</h1>
            <p>Generated on ${new Date(data.timestamp).toLocaleString()}</p>
        </div>

        <div class="summary">
            <div class="metric">
                <div class="metric-value">${data.summary.averageScore.toFixed(1)}%</div>
                <div class="metric-label">Average SEO Score</div>
            </div>
            <div class="metric">
                <div class="metric-value">${data.summary.passedPages}/${data.summary.totalPages}</div>
                <div class="metric-label">Pages Passed (≥80%)</div>
            </div>
            <div class="metric">
                <div class="metric-value">${data.summary.criticalIssues.length}</div>
                <div class="metric-label">Critical Issues</div>
            </div>
            <div class="metric">
                <div class="metric-value">${data.linkValidation ? data.linkValidation.validLinks.length : 0}</div>
                <div class="metric-label">Valid Links</div>
            </div>
        </div>

        <div class="section">
            <h2>📊 SEO Scoring Criteria</h2>
            <table>
                <thead>
                    <tr>
                        <th>Criterion</th>
                        <th>Weight</th>
                        <th>Required</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    ${Object.entries(data.scoring).map(([criterion, config]) => `
                        <tr>
                            <td>${criterion}</td>
                            <td>${config.weight}%</td>
                            <td>${config.required ? 'Yes' : 'No'}</td>
                            <td>${this.getCriterionDescription(criterion)}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        <div class="section">
            <h2>🎯 Recommendations</h2>
            ${data.summary.recommendations.map(rec => `
                <div class="recommendations priority ${rec.priority.toLowerCase()}">
                    <h4>${rec.recommendation}</h4>
                    <p><strong>Issue:</strong> ${rec.issue}</p>
                    <p><strong>Affected Pages:</strong> ${rec.affectedPages}</p>
                    <p><strong>Priority:</strong> ${rec.priority}</p>
                </div>
            `).join('')}
        </div>

        <div class="section">
            <h2>📄 Detailed Page Results</h2>
            <table>
                <thead>
                    <tr>
                        <th>Page</th>
                        <th>Score</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Issues</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.detailedResults.map(page => `
                        <tr>
                            <td>${page.file}</td>
                            <td class="score ${page.score >= 80 ? 'high' : page.score >= 60 ? 'medium' : 'low'}">${page.score}%</td>
                            <td>${page.seo.title || 'Missing'}</td>
                            <td>${page.seo.description ? (page.seo.description.length > 50 ? page.seo.description.substring(0, 50) + '...' : page.seo.description) : 'Missing'}</td>
                            <td class="issues">${page.issues.join(', ') || 'None'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>

        ${data.linkValidation ? `
        <div class="section">
            <h2>🔗 Link Validation Results</h2>
            <div class="summary">
                <div class="metric">
                    <div class="metric-value">${data.linkValidation.totalLinks}</div>
                    <div class="metric-label">Total Links</div>
                </div>
                <div class="metric">
                    <div class="metric-value">${data.linkValidation.validLinks.length}</div>
                    <div class="metric-label">Valid Links</div>
                </div>
                <div class="metric">
                    <div class="metric-value">${data.linkValidation.brokenLinks.length}</div>
                    <div class="metric-label">Broken Links</div>
                </div>
                <div class="metric">
                    <div class="metric-value">${data.linkValidation.conditionLinks.length}</div>
                    <div class="metric-label">Condition Links</div>
                </div>
            </div>
            
            ${data.linkValidation.brokenLinks.length > 0 ? `
            <h3>❌ Broken Links</h3>
            <table>
                <thead>
                    <tr>
                        <th>Link</th>
                        <th>Type</th>
                        <th>Source</th>
                    </tr>
                </thead>
                <tbody>
                    ${data.linkValidation.brokenLinks.map(link => `
                        <tr>
                            <td>${link.to}</td>
                            <td>${link.type}</td>
                            <td>${link.source}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            ` : '<p>✅ No broken links found!</p>'}
        </div>
        ` : ''}
    </div>
</body>
</html>`;
    }

    /**
     * Generate CSV report
     */
    generateCSVReport(data) {
        const headers = ['Page', 'Score', 'Title', 'Description', 'Keywords', 'Canonical URL', 'Structured Data', 'H1 Count', 'Issues'];
        const rows = [headers.join(',')];

        data.detailedResults.forEach(page => {
            const row = [
                page.file,
                page.score,
                `"${page.seo.title || ''}"`,
                `"${page.seo.description || ''}"`,
                `"${page.seo.keywords || ''}"`,
                `"${page.seo.canonicalUrl || ''}"`,
                page.seo.structuredData ? 'Yes' : 'No',
                page.structure.h1Tags.length,
                `"${page.issues.join('; ')}"`
            ];
            rows.push(row.join(','));
        });

        return rows.join('\n');
    }

    /**
     * Get description for SEO criterion
     */
    getCriterionDescription(criterion) {
        const descriptions = {
            title: 'Page title tag (should be 50-60 characters)',
            description: 'Meta description (should be 120-160 characters)',
            keywords: 'Meta keywords (optional but helpful)',
            canonicalUrl: 'Canonical URL to prevent duplicate content',
            structuredData: 'Structured data markup for search engines',
            h1Tag: 'Exactly one H1 tag per page',
            headingHierarchy: 'Proper heading structure (H1→H2→H3)',
            imageAltText: 'Alt text for all images',
            internalLinks: 'Internal links to related content'
        };
        return descriptions[criterion] || '';
    }
}

// Run the audit
const auditor = new SEOAuditor();
auditor.runAudit().catch(console.error);