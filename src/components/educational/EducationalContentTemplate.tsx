/**
 * FILE: EducationalContentTemplate.tsx
 * VERSION: 2.0.0
 * PURPOSE: Comprehensive template for educational content pages optimized for SEO and conversions
 * 
 * AUTHOR: Claude
 * CREATED: 2025-01-16
 * 
 * CONTEXT:
 * - Core component for Dr. Bonakdar's Phase 3 SEO expansion
 * - Generates 1,000+ educational pages targeting 15,000 keywords
 * - Optimized for featured snippets and voice search
 * 
 * DEPENDENCIES:
 * - React components for UI
 * - Schema markup generators for SEO
 * - SEO component for meta tags
 * 
 * ARCHITECTURE NOTES:
 * - Modular design supports FAQ, guides, and blog content
 * - Schema markup for medical content and FAQs
 * - Conversion-optimized with authority signals
 * 
 * FUTURE IMPROVEMENTS:
 * - A/B testing for conversion optimization
 * - Dynamic content personalization
 * - Advanced analytics integration
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import SEO from '../SEO';
import Header from '../Header';
import Footer from '../Footer';
import FAQSection from './FAQSection';
import AuthoritySignals from './AuthoritySignals';
import ContentCluster from './ContentCluster';
import BreadcrumbNav from './BreadcrumbNav';
import { generateFAQSchema, generateMedicalServiceSchema, generateBreadcrumbSchema } from '@/utils/schemaMarkupGenerator';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Phone, Calendar, MessageCircle } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

interface RelatedContent {
  title: string;
  url: string;
  description: string;
  category: 'faq' | 'guide' | 'blog';
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface EducationalContentProps {
  // Core Content
  title: string;
  metaDescription: string;
  content: string;
  contentType: 'faq' | 'guide' | 'blog';
  
  // SEO & Schema
  keywords: string[];
  canonicalUrl: string;
  breadcrumbs: BreadcrumbItem[];
  lastModified?: string;
  
  // Content Structure
  faqs?: FAQ[];
  relatedContent?: RelatedContent[];
  
  // Medical/Authority Content
  condition?: string;
  treatment?: string;
  authorInsights?: string;
  
  // Conversion Elements
  primaryCta?: {
    text: string;
    action: 'schedule' | 'call' | 'contact';
  };
  secondaryCta?: {
    text: string;
    url: string;
  };
  
  // Featured Snippet Optimization
  featuredSnippet?: {
    question: string;
    answer: string;
    format: 'paragraph' | 'list' | 'table';
    data?: any;
  };
}

const EducationalContentTemplate: React.FC<EducationalContentProps> = ({
  title,
  metaDescription,
  content,
  contentType,
  keywords,
  canonicalUrl,
  breadcrumbs,
  lastModified,
  faqs,
  relatedContent,
  condition,
  treatment,
  authorInsights,
  primaryCta,
  secondaryCta,
  featuredSnippet
}) => {
  const { t, language } = useLanguage();

  // Generate schema markup
  const schemas = [];
  
  // Breadcrumb schema
  schemas.push(generateBreadcrumbSchema(breadcrumbs));
  
  // FAQ schema for rich snippets
  if (faqs && faqs.length > 0) {
    schemas.push(generateFAQSchema(faqs));
  }
  
  // Medical service schema if applicable
  if (condition || treatment) {
    schemas.push(generateMedicalServiceSchema(
      condition || treatment || title,
      metaDescription,
      canonicalUrl,
      language
    ));
  }

  const handlePrimaryCta = () => {
    switch (primaryCta?.action) {
      case 'schedule':
        // Trigger appointment booking
        window.open('https://eyecarecenteroc.com/contact', '_blank');
        break;
      case 'call':
        window.location.href = 'tel:+1-714-558-1182';
        break;
      case 'contact':
        window.location.href = '/contact';
        break;
    }
  };

  const renderFeaturedSnippet = () => {
    if (!featuredSnippet) return null;

    const { question, answer, format, data } = featuredSnippet;

    return (
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
        <h2 className="text-xl font-semibold text-blue-900 mb-3">{question}</h2>
        
        {format === 'paragraph' && (
          <p className="text-blue-800 leading-relaxed">{answer}</p>
        )}
        
        {format === 'list' && data && (
          <div className="text-blue-800">
            <p className="mb-3">{answer}</p>
            <ul className="list-disc list-inside space-y-1">
              {data.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
        
        {format === 'table' && data && (
          <div className="text-blue-800">
            <p className="mb-3">{answer}</p>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-blue-200">
                <thead>
                  <tr className="bg-blue-100">
                    {data.headers.map((header: string, index: number) => (
                      <th key={index} className="border border-blue-200 px-4 py-2 text-left">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.rows.map((row: string[], index: number) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-blue-25'}>
                      {row.map((cell: string, cellIndex: number) => (
                        <td key={cellIndex} className="border border-blue-200 px-4 py-2">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* SEO and Meta Tags */}
      <SEO
        title={title}
        description={metaDescription}
        canonicalUrl={canonicalUrl}
        keywords={keywords}
        ogType="article"
        schemaData={schemas}
      />
      
      <Helmet>
        {lastModified && <meta property="article:modified_time" content={lastModified} />}
        <meta name="author" content="Dr. Alexander Bonakdar" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Enhanced Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(schemas)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Breadcrumb Navigation */}
          <BreadcrumbNav items={breadcrumbs} />
          
          {/* Content Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            
            {/* Content Type Badge */}
            <div className="flex items-center space-x-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                contentType === 'faq' ? 'bg-blue-100 text-blue-800' :
                contentType === 'guide' ? 'bg-green-100 text-green-800' :
                'bg-purple-100 text-purple-800'
              }`}>
                {contentType === 'faq' ? 'FAQ' : 
                 contentType === 'guide' ? 'Educational Guide' : 'Blog Article'}
              </span>
              
              {lastModified && (
                <span className="text-sm text-gray-500">
                  Updated: {new Date(lastModified).toLocaleDateString()}
                </span>
              )}
            </div>
          </header>

          {/* Featured Snippet Optimization */}
          {renderFeaturedSnippet()}

          {/* Authority Signals */}
          <AuthoritySignals 
            expertise={condition || treatment}
            insights={authorInsights}
          />

          {/* Main Content */}
          <article className="prose prose-lg max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </article>

          {/* FAQ Section */}
          {faqs && faqs.length > 0 && (
            <section className="mb-12">
              <FAQSection faqs={faqs} contentType={contentType} />
            </section>
          )}

          {/* Conversion CTAs */}
          <section className="bg-white rounded-lg shadow-md p-8 mb-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {contentType === 'faq' ? 'Still have questions?' :
               contentType === 'guide' ? 'Ready to take the next step?' :
               'Learn more about your eye health'}
            </h2>
            
            <p className="text-gray-600 mb-6 text-lg">
              {contentType === 'faq' ? 
                'Dr. Bonakdar provides personalized answers to your specific concerns during your consultation.' :
                contentType === 'guide' ?
                'Schedule your comprehensive eye examination with Dr. Bonakdar to discuss your specific needs.' :
                'Stay informed about the latest advances in eye care and treatment options.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {primaryCta && (
                <Button 
                  size="lg" 
                  onClick={handlePrimaryCta}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  {primaryCta.action === 'schedule' && <Calendar className="mr-2 h-5 w-5" />}
                  {primaryCta.action === 'call' && <Phone className="mr-2 h-5 w-5" />}
                  {primaryCta.action === 'contact' && <MessageCircle className="mr-2 h-5 w-5" />}
                  {primaryCta.text}
                </Button>
              )}
              
              {secondaryCta && (
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.location.href = secondaryCta.url}
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
                >
                  {secondaryCta.text}
                </Button>
              )}
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <p>📞 Call: <a href="tel:+1-714-558-1182" className="text-blue-600 hover:underline">(714) 558-1182</a></p>
              <p>📍 Located in Santa Ana, serving Orange County</p>
              <p>🕒 Evening and Saturday appointments available</p>
            </div>
          </section>

          {/* Related Content */}
          {relatedContent && relatedContent.length > 0 && (
            <ContentCluster 
              relatedContent={relatedContent}
              currentContentType={contentType}
            />
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default EducationalContentTemplate;