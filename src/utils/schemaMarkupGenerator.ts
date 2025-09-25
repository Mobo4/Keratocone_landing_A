/**
 * Schema Markup Generator
 * 
 * This utility generates structured data (JSON-LD) for various page types
 * to improve how search engines understand the website content.
 */
import { getLastModifiedDate } from './contentTracker';
import { getProtectedEmail } from './emailProtection';

// Base organization information that's consistent across schemas
const baseOrganization = {
  "@type": ["MedicalBusiness", "LocalBusiness", "Optometrist", "HealthAndBeautyBusiness"],
  "name": "Eyecare Center of Orange County",
  "alternateName": "Centro de Cuidado Ocular de Orange County",
  "url": "https://eyecarecenteroc.com/",
  "telephone": "+1-949-658-2372",
  "email": getProtectedEmail(),
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Check, Credit Card, Insurance",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "801 North Tustin Ave #404",
    "addressLocality": "Santa Ana",
    "addressRegion": "CA",
    "postalCode": "92705",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.7455",
    "longitude": "-117.8677"
  },
  "openingHours": [
    "Mo-Th 09:00-18:00",
    "Fr 09:00-17:00",
    "Sa 09:00-14:00"
  ],
  "hasMap": "https://maps.google.com/?cid=123456789",
  "founder": {
    "@type": "Person",
    "name": "Dr. Alexander Bonakdar",
    "jobTitle": "Doctor of Optometry",
    "alumniOf": "UC Berkeley School of Optometry"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Santa Ana",
      "containedInPlace": {
        "@type": "State",
        "name": "California"
      }
    },
    {
      "@type": "City",
      "name": "Irvine",
      "containedInPlace": {
        "@type": "State",
        "name": "California"
      }
    },
    {
      "@type": "City",
      "name": "Newport Beach",
      "containedInPlace": {
        "@type": "State",
        "name": "California"
      }
    },
    {
      "@type": "City",
      "name": "Tustin",
      "containedInPlace": {
        "@type": "State",
        "name": "California"
      }
    },
    {
      "@type": "City",
      "name": "Costa Mesa",
      "containedInPlace": {
        "@type": "State",
        "name": "California"
      }
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150",
    "bestRating": "5"
  }
};

// Basic local business schema
export function generateLocalBusinessSchema(language: string = 'en'): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    ...baseOrganization,
    "name": language === 'es' ? "Centro de Cuidado Ocular de Orange County" : "Eyecare Center of Orange County",
    "description": language === 'es' ?
      "Centro líder de cuidado ocular en Orange County, California. Dr. Alexander Bonakdar ofrece exámenes oculares completos, tratamiento de ojo seco, manejo de queratocono, consultas LASIK y lentes de contacto especializados." :
      "Leading eye care center in Orange County, California. Dr. Alexander Bonakdar provides comprehensive eye exams, dry eye treatment, keratoconus management, LASIK consultations, and specialty contact lenses."
  };
}

// Schema for medical services/treatments
export function generateMedicalServiceSchema(
  serviceName: string,
  serviceDescription: string,
  url: string,
  language: string = 'en'
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": serviceName,
    "description": serviceDescription,
    "url": url,
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Ophthalmology"
    },
    "procedureType": "Diagnostic",
    "howPerformed": "Physical examination using specialized medical equipment",
    "followup": "Regular follow-up appointments to monitor progress",
    "preparation": "No special preparation required",
    "status": "Available",
    "provider": {
      "@type": "MedicalOrganization",
      "name": language === 'es' ? "Centro de Cuidado Ocular de Orange County" : "Eyecare Center of Orange County",
      "url": "https://eyecarecenteroc.com/",
      "telephone": "+1-949-658-2372",
      "email": getProtectedEmail(),
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "801 North Tustin Ave #404",
        "addressLocality": "Santa Ana",
        "addressRegion": "CA",
        "postalCode": "92705",
        "addressCountry": "US"
      }
    },
    "datePublished": getLastModifiedDate(url.replace("https://eyecarecenteroc.com", "")),
    "dateModified": getLastModifiedDate(url.replace("https://eyecarecenteroc.com", ""))
  };
}

// Schema for FAQs related to a specific treatment/service
export function generateFAQSchema(faqs: Array<{ question: string, answer: string }>): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Schema for a breadcrumb trail
export function generateBreadcrumbSchema(items: Array<{ name: string, url: string }>): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

// Schema for product (eyewear, lenses, etc.)
export function generateProductSchema(
  name: string, 
  description: string, 
  imageUrl: string, 
  price?: number,
  priceCurrency: string = 'USD'
): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": imageUrl,
    "brand": {
      "@type": "Brand",
      "name": "Eyecare Center of Orange County"
    }
  };

  // Only add price if specified
  if (price !== undefined) {
    schema.offers = {
      "@type": "Offer",
      "price": price.toString(),
      "priceCurrency": priceCurrency,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Eyecare Center of Orange County"
      }
    };
  }

  return schema;
}

// Schema for reviews 
export function generateReviewSchema(
  itemReviewed: string,
  reviews: Array<{ author: string, rating: number, text: string, datePublished: string }>
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": itemReviewed,
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "reviewBody": review.text,
      "datePublished": review.datePublished
    }))
  };
}

// Generate multiple schema objects for a page
export function generatePageSchemas(
  pageType: 'home' | 'about' | 'services' | 'treatment' | 'eyewear' | 'contact',
  url: string,
  title: string,
  description: string,
  language: string = 'en',
  additionalData?: Record<string, unknown>
): Record<string, unknown>[] {
  const schemas: Record<string, unknown>[] = [];
  
  // Always include local business schema
  schemas.push(generateLocalBusinessSchema(language));
  
  // Add breadcrumbs
  const breadcrumbItems = [{ name: 'Home', url: 'https://eyecarecenteroc.com/' }];
  
  if (pageType !== 'home') {
    breadcrumbItems.push({ name: title, url });
  }
  
  schemas.push(generateBreadcrumbSchema(breadcrumbItems));
  
  // Add page-specific schemas
  if (pageType === 'treatment' && additionalData) {
    schemas.push(generateMedicalServiceSchema(
      title,
      description,
      url,
      language
    ));
    
    // Add FAQ schema if FAQs are provided
    if (additionalData.faqs && Array.isArray(additionalData.faqs)) {
      schemas.push(generateFAQSchema(additionalData.faqs as Array<{ question: string, answer: string }>));
    }
  }
  
  if (pageType === 'eyewear' && additionalData?.products && Array.isArray(additionalData.products)) {
    // Add product schemas for featured eyewear
    (additionalData.products as Array<{ name: string; description: string; image: string; price?: number }>).forEach((product) => {
      schemas.push(generateProductSchema(
        product.name,
        product.description,
        product.image,
        product.price,
        'USD'
      ));
    });
  }
  
  return schemas;
}

// Enhanced FAQ schema with medical authority
export function generateMedicalFAQSchema(
  faqs: Array<{ question: string, answer: string }>,
  medicalCondition?: string
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "about": medicalCondition ? {
      "@type": "MedicalCondition",
      "name": medicalCondition
    } : undefined,
    "author": {
      "@type": "Person",
      "name": "Dr. Alexander Bonakdar",
      "jobTitle": "Doctor of Optometry",
      "worksFor": {
        "@type": "MedicalOrganization",
        "name": "Eyecare Center of Orange County"
      }
    },
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "author": {
          "@type": "Person",
          "name": "Dr. Alexander Bonakdar",
          "jobTitle": "Doctor of Optometry"
        }
      }
    }))
  };
}

// Educational article schema for guides and blog posts
export function generateMedicalArticleSchema(
  title: string,
  description: string,
  content: string,
  url: string,
  datePublished: string,
  dateModified?: string,
  medicalCondition?: string,
  keywords?: string[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": title,
    "description": description,
    "text": content,
    "url": url,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "keywords": keywords,
    "about": medicalCondition ? {
      "@type": "MedicalCondition",
      "name": medicalCondition
    } : undefined,
    "author": {
      "@type": "Person",
      "name": "Dr. Alexander Bonakdar",
      "jobTitle": "Doctor of Optometry",
      "worksFor": {
        "@type": "MedicalOrganization",
        "name": "Eyecare Center of Orange County"
      },
      "alumniOf": "UC Berkeley School of Optometry"
    },
    "publisher": {
      "@type": "MedicalOrganization",
      "name": "Eyecare Center of Orange County",
      "url": "https://eyecarecenteroc.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://eyecarecenteroc.com/logo.png"
      }
    },
    "mainEntity": {
      "@type": "MedicalWebPage",
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", ".featured-snippet"]
      }
    }
  };
}

// HowTo schema for treatment and procedure guides
export function generateHowToSchema(
  name: string,
  description: string,
  steps: Array<{ name: string, text: string }>,
  totalTime?: string,
  supply?: string[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    "totalTime": totalTime,
    "supply": supply?.map(item => ({
      "@type": "HowToSupply",
      "name": item
    })),
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    })),
    "author": {
      "@type": "Person",
      "name": "Dr. Alexander Bonakdar",
      "jobTitle": "Doctor of Optometry"
    }
  };
}

// Schema for featured snippets optimization
export function generateFeaturedSnippetSchema(
  question: string,
  answer: string,
  format: 'paragraph' | 'list' | 'table',
  data?: any
): Record<string, unknown> {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "Question",
    "name": question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": answer,
      "author": {
        "@type": "Person",
        "name": "Dr. Alexander Bonakdar",
        "jobTitle": "Doctor of Optometry"
      }
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".featured-snippet"]
    }
  };

  // Add structured data for lists and tables
  if (format === 'list' && data) {
    baseSchema.acceptedAnswer.text += '\n' + data.map((item: string, index: number) => `${index + 1}. ${item}`).join('\n');
  }

  return baseSchema;
}

// Content cluster schema for topical authority
export function generateContentClusterSchema(
  mainTopic: string,
  relatedContent: Array<{ title: string, url: string, description: string }>
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${mainTopic} - Related Resources`,
    "description": `Comprehensive resources about ${mainTopic} from Dr. Alexander Bonakdar`,
    "numberOfItems": relatedContent.length,
    "itemListElement": relatedContent.map((content, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "WebPage",
        "name": content.title,
        "url": content.url,
        "description": content.description
      }
    }))
  };
}

// Voice search optimization schema
export function generateVoiceSearchSchema(
  questions: string[],
  answers: string[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "SpeakableSpecification",
    "cssSelector": [".voice-search-optimized"],
    "xpath": ["//div[@class='voice-search-optimized']"],
    "contentProperty": questions.map((question, index) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": answers[index]
      }
    }))
  };
}

// Enhanced page schemas for educational content
export function generateEducationalPageSchemas(
  pageType: 'faq' | 'guide' | 'blog',
  title: string,
  description: string,
  url: string,
  content: string,
  faqs?: Array<{ question: string, answer: string }>,
  medicalCondition?: string,
  keywords?: string[],
  relatedContent?: Array<{ title: string, url: string, description: string }>,
  featuredSnippet?: { question: string, answer: string, format: 'paragraph' | 'list' | 'table', data?: any }
): Record<string, unknown>[] {
  const schemas: Record<string, unknown>[] = [];
  
  // Add base organization schema
  schemas.push(generateLocalBusinessSchema());
  
  // Add page-specific schemas
  const datePublished = new Date().toISOString();
  
  if (pageType === 'faq' && faqs) {
    schemas.push(generateMedicalFAQSchema(faqs, medicalCondition));
  } else {
    schemas.push(generateMedicalArticleSchema(
      title,
      description, 
      content,
      url,
      datePublished,
      undefined,
      medicalCondition,
      keywords
    ));
  }
  
  // Add featured snippet schema
  if (featuredSnippet) {
    schemas.push(generateFeaturedSnippetSchema(
      featuredSnippet.question,
      featuredSnippet.answer,
      featuredSnippet.format,
      featuredSnippet.data
    ));
  }
  
  // Add content cluster schema for related content
  if (relatedContent && relatedContent.length > 0) {
    schemas.push(generateContentClusterSchema(
      medicalCondition || title,
      relatedContent
    ));
  }
  
  return schemas;
}

// Helper to combine multiple schema objects into a single script tag content
export function combineSchemas(schemas: Record<string, unknown>[]): string {
  return JSON.stringify(schemas);
}