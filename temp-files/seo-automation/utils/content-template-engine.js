/**
 * CONTENT TEMPLATE ENGINE
 * 
 * Dynamic content generation system for Dr. Bonakdar's website
 * Handles template-based page generation, variable substitution,
 * and content pipeline automation
 */

import fs from 'fs/promises';
import path from 'path';
import { Logger } from './logger.js';

class ContentTemplateEngine {
  constructor(config) {
    this.config = config;
    this.logger = new Logger('ContentTemplateEngine');
    this.templates = new Map();
    this.variables = new Map();
    this.templateDir = path.join(process.cwd(), 'seo-automation/templates');
  }

  async initialize() {
    this.logger.info('Initializing Content Template Engine');
    
    // Load templates
    await this.loadTemplates();
    
    // Load global variables
    await this.loadGlobalVariables();
    
    this.logger.info('Content Template Engine initialized');
  }

  /**
   * Load all templates from the templates directory
   */
  async loadTemplates() {
    try {
      await fs.mkdir(this.templateDir, { recursive: true });
      
      const files = await fs.readdir(this.templateDir);
      
      for (const file of files) {
        if (file.endsWith('.html') || file.endsWith('.md')) {
          const templateName = file.replace(/\.(html|md)$/, '');
          const templatePath = path.join(this.templateDir, file);
          const templateContent = await fs.readFile(templatePath, 'utf8');
          
          this.templates.set(templateName, {
            content: templateContent,
            type: file.endsWith('.html') ? 'html' : 'markdown',
            lastModified: (await fs.stat(templatePath)).mtime
          });
          
          this.logger.debug(`Loaded template: ${templateName}`);
        }
      }
      
      // Create default templates if none exist
      if (this.templates.size === 0) {
        await this.createDefaultTemplates();
      }
      
    } catch (error) {
      this.logger.error('Failed to load templates:', error);
      await this.createDefaultTemplates();
    }
  }

  /**
   * Load global variables for template substitution
   */
  async loadGlobalVariables() {
    this.variables.set('businessName', this.config.website.businessName);
    this.variables.set('baseUrl', this.config.website.baseUrl);
    this.variables.set('domain', this.config.website.domain);
    this.variables.set('phone', '+1-949-123-4567');
    this.variables.set('email', 'info@eyecarecenteroc.com');
    this.variables.set('address', '123 Medical Center Drive, Newport Beach, CA 92660');
    this.variables.set('doctorName', 'Dr. Bonakdar');
    this.variables.set('currentYear', new Date().getFullYear().toString());
    this.variables.set('currentDate', new Date().toLocaleDateString());
    
    // Location-specific variables
    this.variables.set('primaryLocation', 'Newport Beach');
    this.variables.set('serviceArea', 'Orange County, California');
    
    // SEO variables
    this.variables.set('primaryKeyword', 'eye doctor orange county');
    this.variables.set('secondaryKeywords', 'ophthalmologist, eye care, cataract surgery');
  }

  /**
   * Generate service location page
   */
  async generateServiceLocationPage(combination) {
    this.logger.info(`Generating page for ${combination.service} in ${combination.location}`);
    
    const template = this.templates.get('service-location') || this.templates.get('default-service');
    
    if (!template) {
      throw new Error('No service location template found');
    }

    // Prepare page-specific variables
    const pageVariables = new Map([
      ...this.variables,
      ['serviceName', combination.service],
      ['serviceDisplayName', this.humanizeServiceName(combination.service)],
      ['location', combination.location],
      ['locationDisplayName', this.humanizeLocationName(combination.location)],
      ['targetKeywords', combination.targetKeywords.join(', ')],
      ['metaTitle', this.generateMetaTitle(combination)],
      ['metaDescription', this.generateMetaDescription(combination)],
      ['h1Title', this.generateH1Title(combination)],
      ['serviceDescription', this.getServiceDescription(combination.service)],
      ['locationDescription', this.getLocationDescription(combination.location)],
      ['nearbyLandmarks', this.getNearbyLandmarks(combination.location)],
      ['localReviews', this.getLocalReviews(combination.location)],
      ['faqContent', this.generateServiceFAQ(combination.service)],
      ['relatedServices', this.getRelatedServices(combination.service)],
      ['localDirectory', this.generateLocalDirectory(combination.location)]
    ]);

    // Process template with variables
    const processedContent = this.processTemplate(template.content, pageVariables);
    
    return {
      content: processedContent,
      type: template.type,
      variables: Object.fromEntries(pageVariables),
      metadata: {
        title: pageVariables.get('metaTitle'),
        description: pageVariables.get('metaDescription'),
        keywords: combination.targetKeywords,
        canonical: `${this.config.website.baseUrl}/services/${combination.service}/${this.slugify(combination.location)}`
      }
    };
  }

  /**
   * Process template by substituting variables
   */
  processTemplate(templateContent, variables) {
    let processedContent = templateContent;
    
    // Replace all variables in format {{variableName}}
    for (const [key, value] of variables) {
      const regex = new RegExp(`{{${key}}}`, 'g');
      processedContent = processedContent.replace(regex, value || '');
    }
    
    // Process conditional blocks {{#if condition}}...{{/if}}
    processedContent = this.processConditionals(processedContent, variables);
    
    // Process loops {{#each array}}...{{/each}}
    processedContent = this.processLoops(processedContent, variables);
    
    // Process includes {{>templateName}}
    processedContent = this.processIncludes(processedContent, variables);
    
    return processedContent;
  }

  /**
   * Process conditional blocks in templates
   */
  processConditionals(content, variables) {
    const conditionalRegex = /{{#if\s+(\w+)}}([\s\S]*?){{\/if}}/g;
    
    return content.replace(conditionalRegex, (match, condition, block) => {
      const value = variables.get(condition);
      return value ? block : '';
    });
  }

  /**
   * Process loop blocks in templates
   */
  processLoops(content, variables) {
    const loopRegex = /{{#each\s+(\w+)}}([\s\S]*?){{\/each}}/g;
    
    return content.replace(loopRegex, (match, arrayName, block) => {
      const array = variables.get(arrayName);
      if (!Array.isArray(array)) return '';
      
      return array.map(item => {
        let processedBlock = block;
        if (typeof item === 'object') {
          for (const [key, value] of Object.entries(item)) {
            processedBlock = processedBlock.replace(new RegExp(`{{${key}}}`, 'g'), value);
          }
        } else {
          processedBlock = processedBlock.replace(/{{this}}/g, item);
        }
        return processedBlock;
      }).join('');
    });
  }

  /**
   * Process template includes
   */
  processIncludes(content, variables) {
    const includeRegex = /{{>(\w+)}}/g;
    
    return content.replace(includeRegex, (match, templateName) => {
      const includeTemplate = this.templates.get(templateName);
      if (!includeTemplate) return '';
      
      return this.processTemplate(includeTemplate.content, variables);
    });
  }

  /**
   * Generate meta title for service location page
   */
  generateMetaTitle(combination) {
    const service = this.humanizeServiceName(combination.service);
    const location = this.humanizeLocationName(combination.location);
    
    return `${service} in ${location} | ${this.config.website.businessName}`;
  }

  /**
   * Generate meta description for service location page
   */
  generateMetaDescription(combination) {
    const service = this.humanizeServiceName(combination.service);
    const location = this.humanizeLocationName(combination.location);
    
    return `Expert ${service.toLowerCase()} services in ${location}. ${this.config.website.businessName} provides comprehensive eye care with advanced technology. Schedule your consultation today.`;
  }

  /**
   * Generate H1 title for service location page
   */
  generateH1Title(combination) {
    const service = this.humanizeServiceName(combination.service);
    const location = this.humanizeLocationName(combination.location);
    
    return `${service} in ${location}`;
  }

  /**
   * Get service description
   */
  getServiceDescription(service) {
    const descriptions = {
      'cataract-surgery': 'Advanced cataract surgery using the latest phacoemulsification techniques and premium intraocular lenses to restore clear vision. Our experienced surgeon performs hundreds of successful procedures annually.',
      'glaucoma-treatment': 'Comprehensive glaucoma care including early detection, medical management, and surgical intervention when necessary. We use advanced diagnostic technology to monitor and preserve your vision.',
      'diabetic-retinopathy': 'Specialized care for diabetic eye complications including regular monitoring, laser treatment, and anti-VEGF injections to prevent vision loss and maintain eye health.',
      'macular-degeneration': 'Expert treatment for age-related macular degeneration including anti-VEGF therapy, nutritional counseling, and low vision rehabilitation services.',
      'eye-exam': 'Comprehensive eye examinations including vision testing, prescription updates, and screening for eye diseases. Early detection is key to maintaining healthy vision.',
      'dry-eye-treatment': 'Advanced dry eye therapy including punctal plugs, prescription eye drops, and lifestyle modifications to provide lasting relief from dry eye symptoms.'
    };
    
    return descriptions[service] || 'Comprehensive eye care services provided by experienced ophthalmologists using state-of-the-art technology and personalized treatment plans.';
  }

  /**
   * Get location description
   */
  getLocationDescription(location) {
    const descriptions = {
      'newport-beach': 'Located in the heart of Newport Beach, our practice serves patients throughout Orange County with convenient access and ample parking.',
      'irvine': 'Serving the Irvine community and surrounding areas with comprehensive eye care in a modern, comfortable setting.',
      'costa-mesa': 'Conveniently located in Costa Mesa, providing accessible eye care services to residents of Central Orange County.',
      'huntington-beach': 'Proudly serving Huntington Beach and the surrounding coastal communities with expert eye care services.',
      'laguna-beach': 'Providing specialized eye care to the beautiful community of Laguna Beach and nearby areas.'
    };
    
    return descriptions[location] || `Serving the ${this.humanizeLocationName(location)} area with comprehensive eye care services and personalized patient care.`;
  }

  /**
   * Get nearby landmarks for location context
   */
  getNearbyLandmarks(location) {
    const landmarks = {
      'newport-beach': ['Newport Center', 'Fashion Island', 'Balboa Island', 'Newport Harbor'],
      'irvine': ['University of California Irvine', 'Irvine Spectrum', 'John Wayne Airport'],
      'costa-mesa': ['South Coast Plaza', 'Orange County Fair', 'Segerstrom Center'],
      'huntington-beach': ['Huntington Pier', 'Main Street', 'Huntington State Beach'],
      'laguna-beach': ['Main Beach', 'Laguna Art Museum', 'Crystal Cove State Park']
    };
    
    return landmarks[location] || [];
  }

  /**
   * Generate service-specific FAQ content
   */
  generateServiceFAQ(service) {
    const faqs = {
      'cataract-surgery': [
        {
          question: 'How do I know if I need cataract surgery?',
          answer: 'If cataracts are interfering with your daily activities such as reading, driving, or watching TV, surgery may be recommended.'
        },
        {
          question: 'Is cataract surgery covered by insurance?',
          answer: 'Most insurance plans, including Medicare, cover basic cataract surgery when medically necessary.'
        }
      ],
      'glaucoma-treatment': [
        {
          question: 'Can glaucoma be cured?',
          answer: 'While glaucoma cannot be cured, it can be effectively managed with proper treatment to prevent further vision loss.'
        },
        {
          question: 'How often should I have my eye pressure checked?',
          answer: 'Patients with glaucoma typically need eye pressure monitoring every 3-6 months, depending on the severity.'
        }
      ]
    };
    
    return faqs[service] || [];
  }

  /**
   * Get related services
   */
  getRelatedServices(service) {
    const related = {
      'cataract-surgery': ['eye-exam', 'glaucoma-treatment', 'diabetic-retinopathy'],
      'glaucoma-treatment': ['eye-exam', 'cataract-surgery', 'diabetic-retinopathy'],
      'diabetic-retinopathy': ['eye-exam', 'macular-degeneration', 'glaucoma-treatment'],
      'macular-degeneration': ['eye-exam', 'diabetic-retinopathy', 'dry-eye-treatment']
    };
    
    return related[service] || ['eye-exam', 'cataract-surgery', 'glaucoma-treatment'];
  }

  /**
   * Generate local directory information
   */
  generateLocalDirectory(location) {
    return {
      hospitals: ['Hoag Hospital', 'UC Irvine Medical Center'],
      pharmacies: ['CVS Pharmacy', 'Walgreens', 'Rite Aid'],
      transportation: ['Orange County Transportation Authority', 'Uber', 'Lyft'],
      parking: 'Free parking available on-site'
    };
  }

  /**
   * Create default templates
   */
  async createDefaultTemplates() {
    this.logger.info('Creating default templates');
    
    const defaultServiceTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{metaTitle}}</title>
    <meta name="description" content="{{metaDescription}}">
    <meta name="keywords" content="{{targetKeywords}}">
    <link rel="canonical" href="{{baseUrl}}/services/{{serviceName}}/{{location}}">
</head>
<body>
    <header>
        <h1>{{h1Title}}</h1>
        <nav>
            <a href="{{baseUrl}}">Home</a>
            <a href="{{baseUrl}}/services">Services</a>
            <a href="{{baseUrl}}/about">About</a>
            <a href="{{baseUrl}}/contact">Contact</a>
        </nav>
    </header>
    
    <main>
        <section class="hero">
            <h1>{{h1Title}}</h1>
            <p>{{serviceDescription}}</p>
            <button onclick="location.href='{{baseUrl}}/contact'">Schedule Consultation</button>
        </section>
        
        <section class="service-details">
            <h2>{{serviceDisplayName}} Services</h2>
            <p>{{serviceDescription}}</p>
            
            <h3>Why Choose {{businessName}}?</h3>
            <ul>
                <li>Board-certified ophthalmologist</li>
                <li>State-of-the-art technology</li>
                <li>Personalized treatment plans</li>
                <li>Comprehensive follow-up care</li>
            </ul>
        </section>
        
        <section class="location-info">
            <h2>Serving {{locationDisplayName}}</h2>
            <p>{{locationDescription}}</p>
            
            {{#if nearbyLandmarks}}
            <h3>Near Popular Locations</h3>
            <ul>
                {{#each nearbyLandmarks}}
                <li>{{this}}</li>
                {{/each}}
            </ul>
            {{/if}}
        </section>
        
        <section class="faq">
            <h2>Frequently Asked Questions</h2>
            {{#each faqContent}}
            <div class="faq-item">
                <h3>{{question}}</h3>
                <p>{{answer}}</p>
            </div>
            {{/each}}
        </section>
        
        <section class="related-services">
            <h2>Related Services</h2>
            <ul>
                {{#each relatedServices}}
                <li><a href="{{../baseUrl}}/services/{{this}}">{{this}}</a></li>
                {{/each}}
            </ul>
        </section>
        
        <section class="contact-cta">
            <h2>Schedule Your Consultation</h2>
            <p>Contact {{businessName}} today to schedule your {{serviceDisplayName}} consultation in {{locationDisplayName}}.</p>
            <p>Phone: {{phone}}</p>
            <p>Email: {{email}}</p>
            <button onclick="location.href='{{baseUrl}}/contact'">Contact Us</button>
        </section>
    </main>
    
    <footer>
        <p>&copy; {{currentYear}} {{businessName}}. All rights reserved.</p>
        <p>{{address}}</p>
    </footer>
</body>
</html>`;

    const templatePath = path.join(this.templateDir, 'service-location.html');
    await fs.writeFile(templatePath, defaultServiceTemplate);
    
    this.templates.set('service-location', {
      content: defaultServiceTemplate,
      type: 'html',
      lastModified: new Date()
    });
  }

  /**
   * Helper methods
   */
  humanizeServiceName(service) {
    const names = {
      'cataract-surgery': 'Cataract Surgery',
      'glaucoma-treatment': 'Glaucoma Treatment',
      'diabetic-retinopathy': 'Diabetic Retinopathy Care',
      'macular-degeneration': 'Macular Degeneration Treatment',
      'eye-exam': 'Comprehensive Eye Exam',
      'dry-eye-treatment': 'Dry Eye Treatment'
    };
    
    return names[service] || service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  humanizeLocationName(location) {
    return location.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  slugify(text) {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  }

  getLocalReviews(location) {
    // This would typically fetch real reviews from Google My Business or other sources
    return [
      {
        author: 'Local Patient',
        rating: 5,
        text: `Excellent care at the ${this.humanizeLocationName(location)} location. Professional and caring staff.`
      }
    ];
  }

  async healthCheck() {
    return {
      status: 'healthy',
      templatesLoaded: this.templates.size,
      globalVariables: this.variables.size
    };
  }
}

export { ContentTemplateEngine };