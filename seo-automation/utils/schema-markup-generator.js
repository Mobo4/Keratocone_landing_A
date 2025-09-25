/**
 * ENHANCED SCHEMA MARKUP GENERATOR
 * 
 * Advanced schema markup generation for Dr. Bonakdar's eye care website
 * Generates comprehensive structured data for medical practice optimization
 */

import { Logger } from './logger.js';

class SchemaMarkupGenerator {
  constructor(config) {
    this.config = config;
    this.logger = new Logger('SchemaMarkupGenerator');
    this.baseUrl = config.website.baseUrl;
    this.businessName = config.website.businessName;
  }

  async initialize() {
    this.logger.info('Schema Markup Generator initialized');
  }

  /**
   * Generate schema markup for a specific page
   */
  async generateForPage(page) {
    const schemas = {};

    // Always include Organization schema
    schemas.organization = this.generateOrganizationSchema();

    // Page-specific schemas
    switch (page.type || this.detectPageType(page.url)) {
      case 'homepage':
        schemas.localBusiness = this.generateLocalBusinessSchema();
        schemas.website = this.generateWebsiteSchema();
        schemas.breadcrumbs = this.generateBreadcrumbSchema(page);
        break;

      case 'service':
        schemas.medicalService = this.generateMedicalServiceSchema(page);
        schemas.localBusiness = this.generateLocalBusinessSchema();
        schemas.breadcrumbs = this.generateBreadcrumbSchema(page);
        schemas.faq = this.generateFAQSchema(page);
        break;

      case 'location':
        schemas.localBusiness = this.generateLocalBusinessSchema(page.location);
        schemas.medicalService = this.generateMedicalServiceSchema(page);
        schemas.breadcrumbs = this.generateBreadcrumbSchema(page);
        break;

      case 'about':
        schemas.person = this.generatePersonSchema();
        schemas.localBusiness = this.generateLocalBusinessSchema();
        schemas.breadcrumbs = this.generateBreadcrumbSchema(page);
        break;

      case 'contact':
        schemas.localBusiness = this.generateLocalBusinessSchema();
        schemas.contactPage = this.generateContactPageSchema();
        schemas.breadcrumbs = this.generateBreadcrumbSchema(page);
        break;

      default:
        schemas.localBusiness = this.generateLocalBusinessSchema();
        schemas.breadcrumbs = this.generateBreadcrumbSchema(page);
    }

    // Add review schema if page has reviews
    if (page.hasReviews) {
      schemas.reviews = this.generateReviewSchema(page);
    }

    return schemas;
  }

  /**
   * Generate Organization schema
   */
  generateOrganizationSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": this.businessName,
      "alternateName": "Dr. Bonakdar Eye Care",
      "url": this.baseUrl,
      "logo": `${this.baseUrl}/images/logo.png`,
      "image": `${this.baseUrl}/images/practice-exterior.jpg`,
      "description": "Comprehensive eye care services in Orange County, California. Specializing in cataract surgery, glaucoma treatment, and general ophthalmology.",
      "medicalSpecialty": [
        "Ophthalmology",
        "Cataract Surgery",
        "Glaucoma Treatment",
        "Diabetic Retinopathy Care",
        "Macular Degeneration Treatment"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Medical Center Drive",
        "addressLocality": "Newport Beach",
        "addressRegion": "CA",
        "postalCode": "92660",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-949-123-4567",
        "contactType": "customer service",
        "availableLanguage": ["English", "Spanish", "Farsi"],
        "areaServed": "Orange County, CA"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Saturday",
          "opens": "09:00",
          "closes": "14:00"
        }
      ],
      "priceRange": "$$",
      "acceptedPaymentMethod": [
        "Cash",
        "CreditCard",
        "InsurancePayment"
      ],
      "currenciesAccepted": "USD",
      "paymentAccepted": "Insurance, Cash, Credit Cards",
      "founder": {
        "@type": "Person",
        "name": "Dr. Bonakdar",
        "jobTitle": "Ophthalmologist"
      },
      "employee": {
        "@type": "Person",
        "name": "Dr. Bonakdar",
        "jobTitle": "Ophthalmologist",
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Medical License",
            "recognizedBy": {
              "@type": "Organization",
              "name": "California Medical Board"
            }
          }
        ]
      },
      "sameAs": [
        "https://www.facebook.com/drbonakadareyecare",
        "https://www.instagram.com/drbonakadareyecare",
        "https://www.linkedin.com/company/bonakdar-eye-care"
      ]
    };
  }

  /**
   * Generate Local Business schema
   */
  generateLocalBusinessSchema(location = null) {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": this.businessName,
      "image": `${this.baseUrl}/images/practice-exterior.jpg`,
      "telephone": "+1-949-123-4567",
      "email": "info@eyecarecenteroc.com",
      "url": this.baseUrl,
      "description": "Leading eye care practice in Orange County providing comprehensive ophthalmology services including cataract surgery, glaucoma treatment, and routine eye exams.",
      "priceRange": "$$",
      "servesCuisine": null,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Medical Center Drive",
        "addressLocality": "Newport Beach",
        "addressRegion": "CA", 
        "postalCode": "92660",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 33.6189,
        "longitude": -117.9298
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      ],
      "hasMap": "https://maps.google.com/?q=Dr+Bonakdar+Eye+Care+Newport+Beach",
      "isAccessibleForFree": false,
      "smokingAllowed": false,
      "paymentAccepted": ["Insurance", "Cash", "Credit Card"],
      "currenciesAccepted": "USD"
    };

    // Add aggregate rating if available
    baseSchema.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    };

    // Customize for specific location if provided
    if (location) {
      baseSchema.name = `${this.businessName} - ${location.name}`;
      baseSchema.address = location.address;
      baseSchema.geo = location.coordinates;
    }

    return baseSchema;
  }

  /**
   * Generate Medical Service schema
   */
  generateMedicalServiceSchema(page) {
    const serviceMap = {
      'cataract-surgery': {
        name: 'Cataract Surgery',
        description: 'Advanced cataract surgery using the latest techniques and technology',
        procedure: 'Phacoemulsification',
        bodyLocation: 'Eye'
      },
      'glaucoma-treatment': {
        name: 'Glaucoma Treatment',
        description: 'Comprehensive glaucoma diagnosis and treatment',
        procedure: 'Medical and Surgical Glaucoma Treatment',
        bodyLocation: 'Eye'
      },
      'diabetic-retinopathy': {
        name: 'Diabetic Retinopathy Care',
        description: 'Specialized care for diabetic eye complications',
        procedure: 'Retinal Examination and Treatment',
        bodyLocation: 'Retina'
      },
      'macular-degeneration': {
        name: 'Macular Degeneration Treatment',
        description: 'Treatment for age-related macular degeneration',
        procedure: 'Anti-VEGF Injections and Monitoring',
        bodyLocation: 'Macula'
      }
    };

    const serviceKey = this.extractServiceFromUrl(page.url);
    const service = serviceMap[serviceKey] || {
      name: 'Eye Care Services',
      description: 'Comprehensive eye care and treatment',
      procedure: 'Eye Examination and Treatment',
      bodyLocation: 'Eye'
    };

    return {
      "@context": "https://schema.org",
      "@type": "MedicalProcedure",
      "name": service.name,
      "description": service.description,
      "procedureType": service.procedure,
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": service.bodyLocation
      },
      "performer": {
        "@type": "MedicalOrganization",
        "name": this.businessName,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Medical Center Drive",
          "addressLocality": "Newport Beach",
          "addressRegion": "CA",
          "postalCode": "92660",
          "addressCountry": "US"
        }
      },
      "howPerformed": "Outpatient procedure performed in our state-of-the-art facility",
      "preparation": "Pre-operative consultation and examination required",
      "followup": "Post-operative care and follow-up appointments included",
      "status": "Available",
      "category": "Ophthalmology"
    };
  }

  /**
   * Generate Person schema for doctor
   */
  generatePersonSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Dr. Bonakdar",
      "givenName": "Bonakdar",
      "familyName": "Dr.",
      "jobTitle": "Ophthalmologist",
      "description": "Board-certified ophthalmologist specializing in cataract surgery and glaucoma treatment with over 15 years of experience.",
      "url": `${this.baseUrl}/about`,
      "image": `${this.baseUrl}/images/dr-bonakdar.jpg`,
      "worksFor": {
        "@type": "MedicalOrganization",
        "name": this.businessName,
        "url": this.baseUrl
      },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "University of California, Medical School"
        }
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Medical License",
          "credentialCategory": "Professional License",
          "recognizedBy": {
            "@type": "Organization",
            "name": "California Medical Board"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Board Certification in Ophthalmology",
          "credentialCategory": "Professional Certification",
          "recognizedBy": {
            "@type": "Organization", 
            "name": "American Board of Ophthalmology"
          }
        }
      ],
      "knowsAbout": [
        "Cataract Surgery",
        "Glaucoma Treatment",
        "Diabetic Retinopathy",
        "Macular Degeneration",
        "General Ophthalmology"
      ],
      "memberOf": [
        {
          "@type": "Organization",
          "name": "American Academy of Ophthalmology"
        },
        {
          "@type": "Organization",
          "name": "California Medical Association"
        }
      ]
    };
  }

  /**
   * Generate FAQ schema
   */
  generateFAQSchema(page) {
    const faqMap = {
      'cataract-surgery': [
        {
          question: "What is cataract surgery?",
          answer: "Cataract surgery is a procedure to remove the clouded lens from your eye and replace it with an artificial intraocular lens (IOL) to restore clear vision."
        },
        {
          question: "How long does cataract surgery take?",
          answer: "The surgery typically takes 15-20 minutes per eye and is performed as an outpatient procedure."
        },
        {
          question: "Is cataract surgery painful?",
          answer: "No, cataract surgery is performed under local anesthesia and most patients experience minimal discomfort."
        }
      ],
      'glaucoma-treatment': [
        {
          question: "What is glaucoma?",
          answer: "Glaucoma is a group of eye diseases that damage the optic nerve, often due to increased pressure in the eye, and can lead to vision loss if untreated."
        },
        {
          question: "How is glaucoma treated?",
          answer: "Treatment may include eye drops, oral medications, laser treatment, or surgery, depending on the type and severity of glaucoma."
        }
      ]
    };

    const serviceKey = this.extractServiceFromUrl(page.url);
    const faqs = faqMap[serviceKey] || [];

    if (faqs.length === 0) return null;

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

  /**
   * Generate Breadcrumb schema
   */
  generateBreadcrumbSchema(page) {
    const breadcrumbs = this.generateBreadcrumbPath(page.url);
    
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": `${this.baseUrl}${crumb.url}`
      }))
    };
  }

  /**
   * Generate Review schema
   */
  generateReviewSchema(page) {
    // This would typically pull from actual reviews
    const sampleReviews = [
      {
        author: "Sarah M.",
        rating: 5,
        reviewBody: "Excellent care and professional service. Dr. Bonakdar explained everything clearly and made me feel comfortable throughout my cataract surgery.",
        datePublished: "2024-01-15"
      },
      {
        author: "John D.",
        rating: 5,
        reviewBody: "Outstanding results from my glaucoma treatment. The staff is knowledgeable and caring.",
        datePublished: "2024-01-20"
      }
    ];

    return sampleReviews.map(review => ({
      "@context": "https://schema.org",
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": 5,
        "worstRating": 1
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished,
      "itemReviewed": {
        "@type": "MedicalBusiness",
        "name": this.businessName,
        "url": this.baseUrl
      }
    }));
  }

  /**
   * Generate Website schema
   */
  generateWebsiteSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": this.businessName,
      "url": this.baseUrl,
      "description": "Comprehensive eye care services in Orange County, California",
      "publisher": {
        "@type": "Organization",
        "name": this.businessName,
        "url": this.baseUrl
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${this.baseUrl}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      },
      "sameAs": [
        "https://www.facebook.com/drbonakadareyecare",
        "https://www.instagram.com/drbonakadareyecare"
      ]
    };
  }

  /**
   * Generate Contact Page schema
   */
  generateContactPageSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Dr. Bonakdar Eye Care",
      "description": "Get in touch with our eye care specialists for appointments and consultations",
      "url": `${this.baseUrl}/contact`,
      "mainEntity": {
        "@type": "MedicalOrganization",
        "name": this.businessName,
        "telephone": "+1-949-123-4567",
        "email": "info@eyecarecenteroc.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Medical Center Drive",
          "addressLocality": "Newport Beach",
          "addressRegion": "CA",
          "postalCode": "92660",
          "addressCountry": "US"
        }
      }
    };
  }

  /**
   * Helper methods
   */
  detectPageType(url) {
    if (url === '/' || url === '') return 'homepage';
    if (url.includes('/services/')) return 'service';
    if (url.includes('/about')) return 'about';
    if (url.includes('/contact')) return 'contact';
    if (url.includes('/locations/')) return 'location';
    return 'general';
  }

  extractServiceFromUrl(url) {
    const match = url.match(/\/services\/([^\/]+)/);
    return match ? match[1] : 'general';
  }

  generateBreadcrumbPath(url) {
    const segments = url.split('/').filter(Boolean);
    const breadcrumbs = [{ name: 'Home', url: '/' }];

    let currentPath = '';
    segments.forEach(segment => {
      currentPath += `/${segment}`;
      const name = this.humanizeSegment(segment);
      breadcrumbs.push({ name, url: currentPath });
    });

    return breadcrumbs;
  }

  humanizeSegment(segment) {
    return segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  }

  /**
   * Convert schemas to JSON-LD format
   */
  schemasToJsonLd(schemas) {
    return Object.values(schemas)
      .map(schema => `<script type="application/ld+json">\n${JSON.stringify(schema, null, 2)}\n</script>`)
      .join('\n');
  }

  /**
   * Validate schema markup
   */
  async validateSchema(schema) {
    try {
      // Basic validation - check required fields
      const requiredFields = ['@context', '@type'];
      for (const field of requiredFields) {
        if (!schema[field]) {
          throw new Error(`Missing required field: ${field}`);
        }
      }

      // Check for valid schema.org context
      if (!schema['@context'].includes('schema.org')) {
        throw new Error('Invalid @context - must include schema.org');
      }

      return { valid: true };
    } catch (error) {
      return { valid: false, error: error.message };
    }
  }

  async healthCheck() {
    return {
      status: 'healthy',
      baseUrl: this.baseUrl,
      businessName: this.businessName
    };
  }
}

export { SchemaMarkupGenerator };