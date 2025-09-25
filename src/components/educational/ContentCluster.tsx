/**
 * FILE: ContentCluster.tsx
 * VERSION: 2.0.0  
 * PURPOSE: Related content recommendations component for topical authority and internal linking
 * 
 * AUTHOR: Claude
 * CREATED: 2025-01-16
 * 
 * CONTEXT:
 * - Creates content clusters to boost topical authority
 * - Provides intelligent related content recommendations  
 * - Optimizes internal linking for SEO value
 * 
 * DEPENDENCIES:
 * - Lucide icons for visual elements
 * - React components for structure
 * 
 * ARCHITECTURE NOTES:
 * - Categorized content grouping
 * - Relevance-based content matching
 * - Mobile-responsive card layouts
 * 
 * SEO BENEFITS:
 * - Internal link building
 * - Topical authority signals
 * - Enhanced user engagement
 * - Reduced bounce rates
 */

import React from 'react';
import { 
  BookOpen, 
  MessageCircle, 
  FileText, 
  ArrowRight, 
  Clock,
  Eye,
  Tag
} from 'lucide-react';

interface RelatedContent {
  title: string;
  url: string;
  description: string;
  category: 'faq' | 'guide' | 'blog';
  readTime?: number;
  popularity?: 'high' | 'medium' | 'low';
  tags?: string[];
}

interface ContentClusterProps {
  relatedContent: RelatedContent[];
  currentContentType: 'faq' | 'guide' | 'blog';
  maxDisplay?: number;
  showPopular?: boolean;
  title?: string;
}

const ContentCluster: React.FC<ContentClusterProps> = ({
  relatedContent,
  currentContentType,
  maxDisplay = 6,
  showPopular = true,
  title
}) => {
  // Content type configurations
  const contentTypeConfig = {
    faq: {
      icon: MessageCircle,
      color: 'blue',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-800',
      label: 'FAQ'
    },
    guide: {
      icon: BookOpen,
      color: 'green', 
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-800',
      label: 'Guide'
    },
    blog: {
      icon: FileText,
      color: 'purple',
      bgColor: 'bg-purple-50', 
      borderColor: 'border-purple-200',
      textColor: 'text-purple-800',
      label: 'Article'
    }
  };

  // Group content by type and prioritize different types from current
  const groupedContent = relatedContent.reduce((acc, content) => {
    const type = content.category;
    if (!acc[type]) acc[type] = [];
    acc[type].push(content);
    return acc;
  }, {} as Record<string, RelatedContent[]>);

  // Prioritize content types (different from current type first)
  const prioritizedTypes = Object.keys(groupedContent).sort((a, b) => {
    if (a === currentContentType) return 1;
    if (b === currentContentType) return -1;
    return 0;
  });

  // Get popular content if requested
  const popularContent = showPopular 
    ? relatedContent
        .filter(content => content.popularity === 'high')
        .slice(0, 2)
    : [];

  // Build final content list
  let displayContent: RelatedContent[] = [];
  
  // Add popular content first
  if (popularContent.length > 0) {
    displayContent = [...popularContent];
  }
  
  // Add remaining content by priority
  prioritizedTypes.forEach(type => {
    const typeContent = groupedContent[type].filter(
      content => !popularContent.includes(content)
    );
    displayContent = [...displayContent, ...typeContent];
  });

  // Limit to maxDisplay
  displayContent = displayContent.slice(0, maxDisplay);

  const getDefaultTitle = () => {
    switch (currentContentType) {
      case 'faq':
        return 'Related Questions & Resources';
      case 'guide':  
        return 'Additional Learning Resources';
      case 'blog':
        return 'You Might Also Like';
      default:
        return 'Related Content';
    }
  };

  if (displayContent.length === 0) {
    return null;
  }

  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Section Header */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <Eye className="w-6 h-6 text-gray-600 mr-2" />
          {title || getDefaultTitle()}
        </h2>
        <p className="text-gray-600 mt-1">
          Continue your eye health education with these related resources
        </p>
      </div>

      {/* Popular Content Highlight */}
      {popularContent.length > 0 && showPopular && (
        <div className="px-6 py-4 bg-yellow-50 border-b border-yellow-200">
          <h3 className="font-semibold text-yellow-800 mb-2 flex items-center">
            <Tag className="w-4 h-4 mr-1" />
            Most Popular
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {popularContent.map((content, index) => (
              <ContentCard key={`popular-${index}`} content={content} isPopular={true} />
            ))}
          </div>
        </div>
      )}

      {/* Main Content Grid */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {displayContent
            .filter(content => !popularContent.includes(content))
            .map((content, index) => (
              <ContentCard key={index} content={content} />
            ))}
        </div>
      </div>

      {/* Browse More CTA */}
      {relatedContent.length > maxDisplay && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-center">
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <a
              href="/education/faq"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
            >
              Browse All FAQs
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="/education/guides"  
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-600 hover:text-green-700 hover:underline"
            >
              View All Guides
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="/education/blog"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-purple-600 hover:text-purple-700 hover:underline"
            >
              Read Our Blog
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

// Individual content card component
interface ContentCardProps {
  content: RelatedContent;
  isPopular?: boolean;
}

const ContentCard: React.FC<ContentCardProps> = ({ content, isPopular = false }) => {
  const config = {
    faq: {
      icon: MessageCircle,
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200', 
      textColor: 'text-blue-800',
      hoverColor: 'hover:border-blue-300',
      label: 'FAQ'
    },
    guide: {
      icon: BookOpen,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-800', 
      hoverColor: 'hover:border-green-300',
      label: 'Guide'
    },
    blog: {
      icon: FileText,
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-800',
      hoverColor: 'hover:border-purple-300', 
      label: 'Article'
    }
  }[content.category];

  const IconComponent = config.icon;

  return (
    <a
      href={content.url}
      className={`block p-4 rounded-lg border-2 ${config.borderColor} ${config.hoverColor} ${isPopular ? 'ring-2 ring-yellow-300' : ''} transition-all duration-200 hover:shadow-md group`}
    >
      {/* Content Type Badge */}
      <div className="flex items-center justify-between mb-3">
        <div className={`inline-flex items-center px-2 py-1 rounded-full ${config.bgColor} ${config.textColor} text-xs font-medium`}>
          <IconComponent className="w-3 h-3 mr-1" />
          {config.label}
        </div>
        {isPopular && (
          <span className="text-xs font-medium text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">
            Popular
          </span>
        )}
      </div>

      {/* Content Title */}
      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2 line-clamp-2">
        {content.title}
      </h4>

      {/* Content Description */}
      <p className="text-sm text-gray-600 mb-3 line-clamp-3">
        {content.description}
      </p>

      {/* Content Metadata */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center space-x-3">
          {content.readTime && (
            <span className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {content.readTime} min read
            </span>
          )}
        </div>
        
        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200" />
      </div>

      {/* Tags */}
      {content.tags && content.tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {content.tags.slice(0, 2).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
};

export default ContentCluster;