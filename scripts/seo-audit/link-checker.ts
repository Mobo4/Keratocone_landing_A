/**
 * Link Checker Utility
 * Scans for 404s and broken internal references.
 */

import fs from 'fs';
import path from 'path';
import { CONFIG } from './agent-config';

export class LinkChecker {
    private projectRoot: string;

    constructor() {
        this.projectRoot = process.cwd();
    }

    public checkLinks(fileContent: string, validRoutes: Set<string>): string[] {
        const brokenLinks: string[] = [];
        const linkRegex = /<Link[^>]*href\s*=\s*["']([^"']+)["'][^>]*>/gi;
        let match;

        while ((match = linkRegex.exec(fileContent)) !== null) {
            const href = match[1];

            if (this.shouldIgnore(href)) continue;

            if (!this.isValidRoute(href, validRoutes)) {
                brokenLinks.push(href);
            }
        }
        return brokenLinks;
    }

    private shouldIgnore(href: string): boolean {
        return href.startsWith('http') ||
            href.startsWith('#') ||
            href.startsWith('mailto:') ||
            href.startsWith('tel:') ||
            href.includes('${');
    }

    private isValidRoute(href: string, validRoutes: Set<string>): boolean {
        // Direct match
        if (validRoutes.has(href)) return true;

        // Dynamic match
        // e.g., /services/foo matches /services/[slug]
        for (const route of validRoutes) {
            if (route.includes('[') || route.includes(':')) {
                const pattern = route
                    .replace(/\[\.\.\.[^\]]+\]/g, '.*') // catch-all
                    .replace(/\[[^\]]+\]/g, '[^/]+');  // slug

                const regex = new RegExp(`^${pattern}$`);
                if (regex.test(href)) return true;
            }
        }
        return false;
    }
}
