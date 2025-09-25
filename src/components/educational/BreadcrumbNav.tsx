/**
 * FILE: BreadcrumbNav.tsx
 * VERSION: 2.0.0
 * PURPOSE: Hierarchical breadcrumb navigation for educational content with schema markup
 * 
 * AUTHOR: Claude
 * CREATED: 2025-01-16
 * 
 * CONTEXT:
 * - Provides clear navigation hierarchy for educational content
 * - Supports schema markup for enhanced SEO
 * - Improves user experience and accessibility
 * 
 * DEPENDENCIES:
 * - Lucide icons for navigation elements
 * - React Link component for navigation
 * 
 * ARCHITECTURE NOTES:
 * - Schema.org BreadcrumbList markup
 * - Keyboard navigation support
 * - Mobile-responsive design
 * 
 * SEO BENEFITS:
 * - Rich snippet breadcrumb display
 * - Clear site hierarchy for crawlers
 * - Enhanced user navigation signals
 */

import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  showHome?: boolean;
  className?: string;
}

const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ 
  items, 
  showHome = true,
  className = ""
}) => {
  // Ensure we have a home item if showHome is true
  const breadcrumbItems = showHome 
    ? [{ name: 'Home', url: '/' }, ...items]
    : items;

  return (
    <nav 
      className={`flex items-center space-x-1 text-sm text-gray-500 mb-6 overflow-x-auto ${className}`}
      aria-label="Breadcrumb navigation"
      itemScope
      itemType="https://schema.org/BreadcrumbList"
    >
      <div className="flex items-center space-x-1 min-w-0">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          const isHome = index === 0 && showHome;
          
          return (
            <div 
              key={index}
              className="flex items-center space-x-1 min-w-0"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {/* Breadcrumb Item */}
              <div className="flex items-center min-w-0">
                {isLast ? (
                  <span 
                    className="font-medium text-gray-900 truncate"
                    itemProp="name"
                    aria-current="page"
                  >
                    {isHome && <Home className="w-4 h-4 mr-1 flex-shrink-0" />}
                    {item.name}
                  </span>
                ) : (
                  <a
                    href={item.url}
                    className="hover:text-blue-600 transition-colors duration-150 flex items-center min-w-0"
                    itemProp="item"
                  >
                    {isHome && <Home className="w-4 h-4 mr-1 flex-shrink-0" />}
                    <span className="truncate" itemProp="name">{item.name}</span>
                  </a>
                )}
                
                {/* Hidden schema data */}
                <span style={{ display: 'none' }} itemProp="position">{index + 1}</span>
                {!isLast && (
                  <span style={{ display: 'none' }} itemProp="item" itemScope itemType="https://schema.org/WebPage">
                    <span itemProp="url">{item.url}</span>
                  </span>
                )}
              </div>

              {/* Separator */}
              {!isLast && (
                <ChevronRight 
                  className="w-3 h-3 text-gray-400 flex-shrink-0 mx-1" 
                  aria-hidden="true" 
                />
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

// Enhanced breadcrumb component with category support
interface EnhancedBreadcrumbNavProps extends BreadcrumbNavProps {
  contentType?: 'faq' | 'guide' | 'blog';
  category?: string;
  subcategory?: string;
}

export const EnhancedBreadcrumbNav: React.FC<EnhancedBreadcrumbNavProps> = ({
  items,
  contentType,
  category,
  subcategory,
  showHome = true,
  className = ""
}) => {
  // Build enhanced breadcrumb trail based on content type
  const buildEnhancedBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [];
    
    // Add content type level
    if (contentType) {
      const typeMap = {
        faq: { name: 'FAQ', url: '/education/faq' },
        guide: { name: 'Guides', url: '/education/guides' },  
        blog: { name: 'Blog', url: '/education/blog' }
      };
      breadcrumbs.push(typeMap[contentType]);
    }
    
    // Add category level
    if (category) {
      breadcrumbs.push({
        name: category,
        url: `${contentType ? `/education/${contentType}` : ''}/category/${category.toLowerCase().replace(/\s+/g, '-')}`
      });
    }
    
    // Add subcategory level  
    if (subcategory) {
      breadcrumbs.push({
        name: subcategory,
        url: `${contentType ? `/education/${contentType}` : ''}/category/${category?.toLowerCase().replace(/\s+/g, '-')}/${subcategory.toLowerCase().replace(/\s+/g, '-')}`
      });
    }
    
    // Add provided items
    return [...breadcrumbs, ...items];
  };

  const enhancedItems = buildEnhancedBreadcrumbs();

  return (
    <BreadcrumbNav
      items={enhancedItems}
      showHome={showHome}
      className={className}
    />
  );
};

export default BreadcrumbNav;