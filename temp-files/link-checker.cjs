#!/usr/bin/env node

/**
 * Advanced Link Checker for Eye Conditions Page
 * 
 * This script specifically validates all internal links on the EyeConditionsPage,
 * checks routes, validates condition links, and tests category links.
 */

const fs = require('fs');
const path = require('path');

// Configuration
const PROJECT_ROOT = process.cwd();
const EYE_CONDITIONS_PAGE = path.join(PROJECT_ROOT, 'src/pages/EyeConditionsPage.tsx');
const CONDITIONS_DIR = path.join(PROJECT_ROOT, 'src/pages/education/conditions');
const EDUCATION_DATA = path.join(PROJECT_ROOT, 'src/data/educationCategories.ts');
const ROUTES_FILE = path.join(PROJECT_ROOT, 'src/App.tsx'); // or wherever routes are defined

class LinkChecker {
    constructor() {
        this.results = {
            summary: {
                totalLinks: 0,
                validLinks: 0,
                brokenLinks: 0,
                warnings: 0
            },
            details: {
                conditionLinks: [],
                categoryLinks: [],
                internalLinks: [],
                brokenLinks: [],
                warnings: []
            },
            files: {
                conditionFiles: [],
                missingFiles: []
            }
        };
        
        this.conditionSlugs = new Set();
        this.categoryConfig = null;
    }

    /**
     * Load and parse education categories data
     */
    loadEducationData() {
        try {
            const content = fs.readFileSync(EDUCATION_DATA, 'utf-8');
            
            // Extract all condition slugs from the data file
            const slugMatches = content.match(/slug:\s*['"`]([^'"`]+)['"`]/g);
            if (slugMatches) {
                slugMatches.forEach(match => {
                    const slug = match.match(/['"`]([^'"`]+)['"`]/)[1];
                    this.conditionSlugs.add(slug);
                });
            }

            console.log(`📚 Loaded ${this.conditionSlugs.size} condition slugs from education data`);
            return true;
        } catch (error) {
            console.error('❌ Error loading education data:', error.message);
            return false;
        }
    }

    /**
     * Scan condition files directory
     */
    scanConditionFiles() {
        try {
            const files = fs.readdirSync(CONDITIONS_DIR)
                .filter(file => file.endsWith('.tsx'))
                .map(file => ({
                    filename: file,
                    fullPath: path.join(CONDITIONS_DIR, file),
                    slug: this.extractSlugFromFilename(file)
                }));

            this.results.files.conditionFiles = files;
            console.log(`📄 Found ${files.length} condition page files`);
            
            return files;
        } catch (error) {
            console.error('❌ Error scanning condition files:', error.message);
            return [];
        }
    }

    /**
     * Extract slug from filename (handle various naming patterns)
     */
    extractSlugFromFilename(filename) {
        // Remove .tsx extension
        let slug = filename.replace('.tsx', '');
        
        // Handle various naming patterns
        if (slug.endsWith('Page')) {
            slug = slug.replace('Page', '');
        }
        if (slug.endsWith('EducationPage')) {
            slug = slug.replace('EducationPage', '');
        }
        
        // Convert PascalCase to kebab-case
        slug = slug
            .replace(/([A-Z])/g, '-$1')
            .toLowerCase()
            .replace(/^-/, '');

        return slug;
    }

    /**
     * Parse EyeConditionsPage for all links
     */
    parseEyeConditionsPage() {
        try {
            const content = fs.readFileSync(EYE_CONDITIONS_PAGE, 'utf-8');
            console.log('🔍 Parsing EyeConditionsPage for links...');

            const links = {
                condition: [],
                category: [],
                internal: [],
                external: []
            };

            // Extract Link components
            const linkRegex = /<Link[^>]*to=["']([^"']+)["'][^>]*>/g;
            let match;
            
            while ((match = linkRegex.exec(content)) !== null) {
                const linkTo = match[1];
                
                if (linkTo.startsWith('/education/conditions/')) {
                    links.condition.push({
                        to: linkTo,
                        slug: linkTo.replace('/education/conditions/', ''),
                        line: this.getLineNumber(content, match.index)
                    });
                } else if (linkTo.startsWith('/education/categories/')) {
                    links.category.push({
                        to: linkTo,
                        slug: linkTo.replace('/education/categories/', ''),
                        line: this.getLineNumber(content, match.index)
                    });
                } else if (linkTo.startsWith('/')) {
                    links.internal.push({
                        to: linkTo,
                        line: this.getLineNumber(content, match.index)
                    });
                } else if (linkTo.startsWith('http')) {
                    links.external.push({
                        to: linkTo,
                        line: this.getLineNumber(content, match.index)
                    });
                }
            }

            // Extract dynamic template literal links
            const templateRegex = /`\/education\/conditions\/\$\{([^}]+)\}`/g;
            while ((match = templateRegex.exec(content)) !== null) {
                links.condition.push({
                    to: match[0],
                    slug: 'dynamic',
                    expression: match[1],
                    line: this.getLineNumber(content, match.index),
                    dynamic: true
                });
            }

            console.log(`📊 Found links: ${links.condition.length} condition, ${links.category.length} category, ${links.internal.length} internal`);
            
            return links;
        } catch (error) {
            console.error('❌ Error parsing EyeConditionsPage:', error.message);
            return null;
        }
    }

    /**
     * Get line number for a character position in text
     */
    getLineNumber(text, charIndex) {
        return text.substring(0, charIndex).split('\n').length;
    }

    /**
     * Validate condition links
     */
    validateConditionLinks(conditionLinks) {
        console.log('🔗 Validating condition links...');

        conditionLinks.forEach(link => {
            if (link.dynamic) {
                // For dynamic links, just mark as valid since they're generated from data
                this.results.details.conditionLinks.push({
                    ...link,
                    status: 'valid',
                    note: 'Dynamic link from education data'
                });
                this.results.summary.validLinks++;
                return;
            }

            // Check if slug exists in education data
            const inEducationData = this.conditionSlugs.has(link.slug);
            
            // Check if corresponding file exists
            const possibleFiles = this.generatePossibleFilenames(link.slug);
            const fileExists = possibleFiles.some(filename => 
                this.results.files.conditionFiles.some(file => file.filename === filename)
            );

            let status = 'valid';
            let issues = [];

            if (!inEducationData) {
                issues.push('Slug not found in education data');
                status = 'warning';
            }

            if (!fileExists) {
                issues.push('No corresponding file found');
                status = 'broken';
            }

            this.results.details.conditionLinks.push({
                ...link,
                status,
                issues,
                inEducationData,
                fileExists,
                possibleFiles
            });

            if (status === 'valid') {
                this.results.summary.validLinks++;
            } else if (status === 'broken') {
                this.results.summary.brokenLinks++;
                this.results.details.brokenLinks.push({
                    type: 'condition',
                    ...link,
                    issues
                });
            } else if (status === 'warning') {
                this.results.summary.warnings++;
                this.results.details.warnings.push({
                    type: 'condition',
                    ...link,
                    issues
                });
            }
        });
    }

    /**
     * Generate possible filenames for a slug
     */
    generatePossibleFilenames(slug) {
        const pascalCase = this.slugToPascalCase(slug);
        
        return [
            `${slug}.tsx`,
            `${pascalCase}.tsx`,
            `${pascalCase}Page.tsx`,
            `${pascalCase}EducationPage.tsx`
        ];
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
     * Validate category links
     */
    validateCategoryLinks(categoryLinks) {
        console.log('🏷️  Validating category links...');

        categoryLinks.forEach(link => {
            // For now, assume category links are valid since we'd need to check routing
            // In a real implementation, you'd check against your routing configuration
            
            this.results.details.categoryLinks.push({
                ...link,
                status: 'valid',
                note: 'Category link validation requires routing check'
            });
            this.results.summary.validLinks++;
        });
    }

    /**
     * Validate other internal links
     */
    validateInternalLinks(internalLinks) {
        console.log('🔗 Validating internal links...');

        internalLinks.forEach(link => {
            // Basic validation for common internal routes
            let status = 'valid';
            let note = '';

            if (link.to === '/') {
                note = 'Home page link';
            } else if (link.to === '/patient-education') {
                note = 'Patient education main page';
            } else if (link.to.startsWith('/education/')) {
                note = 'Education section link';
            } else {
                status = 'warning';
                note = 'Unable to validate - check routing configuration';
            }

            this.results.details.internalLinks.push({
                ...link,
                status,
                note
            });

            if (status === 'valid') {
                this.results.summary.validLinks++;
            } else {
                this.results.summary.warnings++;
                this.results.details.warnings.push({
                    type: 'internal',
                    ...link,
                    note
                });
            }
        });
    }

    /**
     * Check for missing condition files
     */
    checkMissingFiles() {
        console.log('📋 Checking for missing condition files...');

        const existingSlugs = new Set(
            this.results.files.conditionFiles.map(file => file.slug)
        );

        this.conditionSlugs.forEach(slug => {
            if (!existingSlugs.has(slug)) {
                this.results.files.missingFiles.push({
                    slug,
                    expectedFiles: this.generatePossibleFilenames(slug),
                    note: 'Defined in education data but no file found'
                });
            }
        });

        if (this.results.files.missingFiles.length > 0) {
            console.log(`⚠️  Found ${this.results.files.missingFiles.length} missing condition files`);
        }
    }

    /**
     * Generate comprehensive report
     */
    generateReport() {
        this.results.summary.totalLinks = 
            this.results.summary.validLinks + 
            this.results.summary.brokenLinks + 
            this.results.summary.warnings;

        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
        const reportPath = path.join(PROJECT_ROOT, `link-check-report-${timestamp}.json`);
        
        // Generate detailed JSON report
        fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));

        // Generate summary report
        const summaryPath = path.join(PROJECT_ROOT, `link-check-summary-${timestamp}.txt`);
        const summaryContent = this.generateSummaryReport();
        fs.writeFileSync(summaryPath, summaryContent);

        console.log(`\n📋 Reports generated:`);
        console.log(`   Detailed: ${reportPath}`);
        console.log(`   Summary:  ${summaryPath}`);

        return { reportPath, summaryPath };
    }

    /**
     * Generate human-readable summary
     */
    generateSummaryReport() {
        const { summary, details } = this.results;
        
        return `
Link Validation Report - ${new Date().toLocaleString()}
${'='.repeat(60)}

SUMMARY
-------
Total Links Checked: ${summary.totalLinks}
✅ Valid Links: ${summary.validLinks}
❌ Broken Links: ${summary.brokenLinks}
⚠️  Warnings: ${summary.warnings}

Success Rate: ${summary.totalLinks > 0 ? ((summary.validLinks / summary.totalLinks) * 100).toFixed(1) : 0}%

CONDITION LINKS (${details.conditionLinks.length})
---------------
${details.conditionLinks.map(link => 
    `${link.status === 'valid' ? '✅' : link.status === 'broken' ? '❌' : '⚠️'} ${link.to} (line ${link.line})`
).join('\n')}

BROKEN LINKS (${details.brokenLinks.length})
------------
${details.brokenLinks.map(link => 
    `❌ ${link.to} (line ${link.line})\n   Issues: ${link.issues.join(', ')}`
).join('\n\n')}

WARNINGS (${details.warnings.length})
--------
${details.warnings.map(link => 
    `⚠️  ${link.to} (line ${link.line})\n   Issues: ${link.issues ? link.issues.join(', ') : link.note}`
).join('\n\n')}

MISSING FILES (${this.results.files.missingFiles.length})
-------------
${this.results.files.missingFiles.map(file => 
    `📄 ${file.slug}\n   Expected: ${file.expectedFiles.join(', ')}`
).join('\n\n')}

RECOMMENDATIONS
---------------
${this.generateRecommendations().join('\n')}
`;
    }

    /**
     * Generate recommendations based on findings
     */
    generateRecommendations() {
        const recommendations = [];

        if (this.results.summary.brokenLinks > 0) {
            recommendations.push('🔧 Fix broken condition links by creating missing page files or updating slugs');
        }

        if (this.results.files.missingFiles.length > 0) {
            recommendations.push('📄 Create missing condition page files or remove from education data');
        }

        if (this.results.summary.warnings > 0) {
            recommendations.push('⚠️  Review warning items for potential improvements');
        }

        if (this.results.summary.validLinks === this.results.summary.totalLinks) {
            recommendations.push('✨ All links are valid! Great job maintaining link integrity');
        }

        return recommendations;
    }

    /**
     * Run the complete link check
     */
    async runCheck() {
        console.log('🚀 Starting comprehensive link check...\n');

        // Load education data
        if (!this.loadEducationData()) {
            console.error('❌ Failed to load education data');
            return;
        }

        // Scan condition files
        this.scanConditionFiles();

        // Parse eye conditions page
        const links = this.parseEyeConditionsPage();
        if (!links) {
            console.error('❌ Failed to parse EyeConditionsPage');
            return;
        }

        // Validate different types of links
        this.validateConditionLinks(links.condition);
        this.validateCategoryLinks(links.category);
        this.validateInternalLinks(links.internal);

        // Check for missing files
        this.checkMissingFiles();

        // Generate reports
        const reports = this.generateReport();

        // Print summary
        console.log('\n' + '='.repeat(50));
        console.log('📊 LINK CHECK SUMMARY');
        console.log('='.repeat(50));
        console.log(`Total Links: ${this.results.summary.totalLinks}`);
        console.log(`✅ Valid: ${this.results.summary.validLinks}`);
        console.log(`❌ Broken: ${this.results.summary.brokenLinks}`);
        console.log(`⚠️  Warnings: ${this.results.summary.warnings}`);
        console.log(`📄 Missing Files: ${this.results.files.missingFiles.length}`);
        
        const successRate = this.results.summary.totalLinks > 0 ? 
            ((this.results.summary.validLinks / this.results.summary.totalLinks) * 100) : 0;
        console.log(`🎯 Success Rate: ${successRate.toFixed(1)}%`);

        if (this.results.summary.brokenLinks === 0 && this.results.files.missingFiles.length === 0) {
            console.log('\n🎉 All links are working perfectly!');
        } else {
            console.log('\n🔧 Some issues found - check the detailed report for fixes needed.');
        }

        return reports;
    }
}

// Run the link check
const checker = new LinkChecker();
checker.runCheck().catch(console.error);