/**
 * Content Tracker Utility
 * 
 * This utility tracks when content was last modified and provides
 * this information for the sitemap generation to ensure search engines
 * are aware of the most recent content updates.
 */

interface PageModification {
  url: string;
  lastModified: Date;
}

// In a real implementation, this would be loaded from a database or CMS
// For now, we'll create a static mapping that could be updated during builds
const pageModifications: Record<string, PageModification> = {
  '/': {
    url: '/',
    lastModified: new Date('2024-06-15')
  },
  '/about': {
    url: '/about',
    lastModified: new Date('2024-06-20')
  },
  '/services': {
    url: '/services',
    lastModified: new Date('2024-06-18')
  },
  '/contact': {
    url: '/contact',
    lastModified: new Date('2024-06-25')
  },
  '/eyewear': {
    url: '/eyewear',
    lastModified: new Date('2024-06-22')
  },
  '/fashion': {
    url: '/fashion',
    lastModified: new Date('2024-06-17')
  },
  '/conditions/keratoconus': {
    url: '/conditions/keratoconus',
    lastModified: new Date('2024-06-23')
  },
  '/conditions/dry-eye': {
    url: '/conditions/dry-eye',
    lastModified: new Date('2024-06-19')
  },
  '/conditions/headache-eye-fatigue': {
    url: '/conditions/headache-eye-fatigue',
    lastModified: new Date('2024-06-21')
  },
  '/conditions/ortho-k': {
    url: '/conditions/ortho-k',
    lastModified: new Date('2024-06-16')
  },
  '/conditions/lasik': {
    url: '/conditions/lasik',
    lastModified: new Date('2024-06-24')
  },
  '/conditions/cataract': {
    url: '/conditions/cataract',
    lastModified: new Date('2024-06-14')
  }
};

/**
 * Gets the last modification date for a specific URL
 * Falls back to current date if no record exists
 */
export function getLastModifiedDate(url: string): string {
  // Strip language prefix for matching
  const cleanUrl = url.replace(/^\/es/, '');
  
  // Format as YYYY-MM-DD
  if (pageModifications[cleanUrl]) {
    return pageModifications[cleanUrl].lastModified.toISOString().split('T')[0];
  }
  
  // Default to today if no record exists
  return new Date().toISOString().split('T')[0];
}

/**
 * Updates the last modification date for a specific URL
 * This would typically be called when content is modified through a CMS
 */
export function updateLastModifiedDate(url: string): void {
  // Strip language prefix for matching
  const cleanUrl = url.replace(/^\/es/, '');
  
  if (pageModifications[cleanUrl]) {
    pageModifications[cleanUrl].lastModified = new Date();
  } else {
    pageModifications[cleanUrl] = {
      url: cleanUrl,
      lastModified: new Date()
    };
  }
}

/**
 * Gets all tracked pages with their last modification dates
 */
export function getAllPageModifications(): PageModification[] {
  return Object.values(pageModifications);
}