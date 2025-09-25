/**
 * FILE: FAQSection.tsx
 * VERSION: 2.0.0
 * PURPOSE: Optimized FAQ section component for rich snippet capture and enhanced user experience
 * 
 * AUTHOR: Claude
 * CREATED: 2025-01-16
 * 
 * CONTEXT:
 * - Specialized component for FAQ content with schema markup optimization
 * - Supports accordion-style interaction for better UX
 * - Optimized for Google's "People Also Ask" feature
 * 
 * DEPENDENCIES:
 * - Lucide icons for expand/collapse indicators
 * - React hooks for state management
 * 
 * ARCHITECTURE NOTES:
 * - Microdata markup for enhanced SEO
 * - Keyboard navigation support
 * - Progressive disclosure pattern
 * 
 * SEO OPTIMIZATIONS:
 * - Question format optimized for featured snippets
 * - Proper HTML structure for rich snippets
 * - Schema.org Question/Answer markup
 */

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle, User } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  contentType: 'faq' | 'guide' | 'blog';
  showCategories?: boolean;
  maxInitialDisplay?: number;
}

const FAQSection: React.FC<FAQSectionProps> = ({ 
  faqs, 
  contentType,
  showCategories = true,
  maxInitialDisplay = 5
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([0])); // First FAQ expanded by default
  const [showAll, setShowAll] = useState(faqs.length <= maxInitialDisplay);

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  const displayedFAQs = showAll ? faqs : faqs.slice(0, maxInitialDisplay);
  const categorizedFAQs = showCategories ? 
    displayedFAQs.reduce((acc, faq, index) => {
      const category = faq.category || 'General';
      if (!acc[category]) acc[category] = [];
      acc[category].push({ ...faq, originalIndex: index });
      return acc;
    }, {} as Record<string, Array<FAQ & { originalIndex: number }>>) :
    { 'All Questions': displayedFAQs.map((faq, index) => ({ ...faq, originalIndex: index })) };

  const getSectionTitle = () => {
    switch (contentType) {
      case 'faq':
        return 'Frequently Asked Questions';
      case 'guide':
        return 'Common Questions About This Topic';
      case 'blog':
        return 'Questions You Might Have';
      default:
        return 'Questions & Answers';
    }
  };

  return (
    <section className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <MessageCircle className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900">{getSectionTitle()}</h2>
        </div>
        <p className="text-gray-600 mt-2">
          Get expert answers from Dr. Alexander Bonakdar about your eye health concerns.
        </p>
      </div>

      <div className="divide-y divide-gray-200">
        {Object.entries(categorizedFAQs).map(([category, categoryFAQs]) => (
          <div key={category} className="p-6">
            {showCategories && Object.keys(categorizedFAQs).length > 1 && (
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {category}
              </h3>
            )}
            
            <div className="space-y-4">
              {categoryFAQs.map((faq, index) => {
                const globalIndex = faq.originalIndex;
                const isExpanded = expandedItems.has(globalIndex);
                
                return (
                  <div
                    key={globalIndex}
                    className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors duration-200"
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    {/* Question Header */}
                    <button
                      onClick={() => toggleExpanded(globalIndex)}
                      className="w-full px-4 py-4 bg-gray-50 hover:bg-gray-100 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                      aria-expanded={isExpanded}
                      aria-controls={`faq-answer-${globalIndex}`}
                    >
                      <h4 
                        className="text-lg font-medium text-gray-900 pr-4"
                        itemProp="name"
                      >
                        {faq.question}
                      </h4>
                      
                      <div className="flex-shrink-0">
                        {isExpanded ? (
                          <ChevronUp className="h-5 w-5 text-blue-600" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                    </button>

                    {/* Answer Content */}
                    {isExpanded && (
                      <div
                        id={`faq-answer-${globalIndex}`}
                        className="px-4 py-4 bg-white border-t border-gray-100"
                        itemProp="acceptedAnswer"
                        itemScope
                        itemType="https://schema.org/Answer"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <User className="w-4 h-4 text-blue-600" />
                            </div>
                          </div>
                          
                          <div className="flex-grow">
                            <div className="mb-2">
                              <span className="text-sm font-medium text-blue-600">Dr. Alexander Bonakdar</span>
                              <span className="text-xs text-gray-500 ml-2">Doctor of Optometry</span>
                            </div>
                            
                            <div 
                              className="prose prose-gray max-w-none"
                              itemProp="text"
                              dangerouslySetInnerHTML={{ __html: faq.answer }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Show More/Less Toggle */}
      {faqs.length > maxInitialDisplay && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {showAll ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" />
                Show Fewer Questions
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" />
                Show {faqs.length - maxInitialDisplay} More Questions
              </>
            )}
          </button>
        </div>
      )}

      {/* Call-to-Action Footer */}
      <div className="px-6 py-4 bg-blue-50 border-t border-blue-200">
        <div className="text-center">
          <p className="text-sm text-blue-700 mb-2">
            Can't find the answer you're looking for?
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Ask Dr. Bonakdar
            </a>
            <span className="hidden sm:inline text-blue-400">•</span>
            <a
              href="tel:+1-714-558-1182"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline"
            >
              📞 Call (714) 558-1182
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;