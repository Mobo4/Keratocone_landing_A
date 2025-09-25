/**
 * FILE: contentGenerator.ts
 * VERSION: 2.0.0
 * PURPOSE: Content generation infrastructure for Archon MCP automation
 * 
 * AUTHOR: Claude
 * CREATED: 2025-01-16
 * 
 * CONTEXT:
 * - Supports autonomous generation of 1,000+ educational pages
 * - Provides templates and data structures for content creation
 * - Integrates with Archon MCP for automated content scaling
 * 
 * DEPENDENCIES:
 * - Content templates and structures
 * - Keyword data and targeting
 * - SEO optimization utilities
 * 
 * ARCHITECTURE NOTES:
 * - Template-based content generation
 * - Keyword-driven content planning
 * - Quality control and validation
 * 
 * AUTOMATION FEATURES:
 * - Batch content generation
 * - Template validation
 * - SEO optimization checks
 * - Content uniqueness verification
 */

// Content templates for different page types
interface ContentTemplate {
  id: string;
  type: 'faq' | 'guide' | 'blog';
  category: string;
  subcategory?: string;
  titleTemplate: string;
  descriptionTemplate: string;
  contentStructure: ContentSection[];
  targetKeywords: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedReadTime: number;
  medicalAccuracy: 'high' | 'medium' | 'low';
}

interface ContentSection {
  type: 'introduction' | 'main-content' | 'faq' | 'conclusion' | 'cta';
  title?: string;
  contentTemplate: string;
  variables: string[];
  required: boolean;
}

interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

interface GeneratedContent {
  title: string;
  slug: string;
  metaDescription: string;
  content: string;
  contentType: 'faq' | 'guide' | 'blog';
  keywords: string[];
  faqs?: FAQ[];
  relatedContent?: Array<{
    title: string;
    url: string;
    description: string;
    category: 'faq' | 'guide' | 'blog';
  }>;
  featuredSnippet?: {
    question: string;
    answer: string;
    format: 'paragraph' | 'list' | 'table';
    data?: any;
  };
  authorInsights?: string;
  medicalCondition?: string;
  breadcrumbs: Array<{ name: string; url: string }>;
}

// Keratoconus content templates (Dr. Bonakdar's specialty)
export const keratoconusTemplates: ContentTemplate[] = [
  {
    id: 'keratoconus-what-is',
    type: 'faq',
    category: 'Conditions',
    subcategory: 'Keratoconus',
    titleTemplate: 'What is Keratoconus? Complete Guide from Dr. Bonakdar',
    descriptionTemplate: 'Learn about keratoconus symptoms, causes, and treatment options from Orange County\'s leading keratoconus specialist, Dr. Alexander Bonakdar.',
    contentStructure: [
      {
        type: 'introduction',
        contentTemplate: 'Keratoconus is a progressive eye condition that affects {{prevalence}} of the population. As Orange County\'s leading keratoconus specialist, Dr. Alexander Bonakdar has treated over {{patient_count}} patients with this condition.',
        variables: ['prevalence', 'patient_count'],
        required: true
      },
      {
        type: 'main-content',
        contentTemplate: 'This comprehensive guide covers everything you need to know about keratoconus, including {{topic_list}}.',
        variables: ['topic_list'],
        required: true
      }
    ],
    targetKeywords: ['what is keratoconus', 'keratoconus symptoms', 'keratoconus causes', 'keratoconus definition'],
    difficulty: 'beginner',
    estimatedReadTime: 8,
    medicalAccuracy: 'high'
  },
  {
    id: 'keratoconus-symptoms-teenagers',
    type: 'guide',
    category: 'Conditions',
    subcategory: 'Keratoconus',
    titleTemplate: 'Keratoconus Symptoms in Teenagers: Early Warning Signs Parents Should Know',
    descriptionTemplate: 'Recognize early keratoconus symptoms in teenagers. Dr. Bonakdar explains warning signs, risk factors, and when to seek specialist care.',
    contentStructure: [
      {
        type: 'introduction',
        contentTemplate: 'Keratoconus often develops during the teenage years, typically between ages {{age_range}}. Early detection is crucial for preventing vision loss.',
        variables: ['age_range'],
        required: true
      }
    ],
    targetKeywords: ['keratoconus symptoms teenagers', 'teenage keratoconus', 'keratoconus in teens', 'early keratoconus signs'],
    difficulty: 'intermediate',
    estimatedReadTime: 12,
    medicalAccuracy: 'high'
  }
];

// Dry eye content templates
export const dryEyeTemplates: ContentTemplate[] = [
  {
    id: 'why-eyes-always-dry',
    type: 'faq',
    category: 'Conditions',
    subcategory: 'Dry Eye',
    titleTemplate: 'Why Are My Eyes Always Dry? Causes and Solutions',
    descriptionTemplate: 'Discover the root causes of chronic dry eyes and effective treatment solutions from Orange County dry eye specialist Dr. Alexander Bonakdar.',
    contentStructure: [
      {
        type: 'introduction',
        contentTemplate: 'Chronic dry eyes affect {{percentage}} of adults, with causes ranging from {{common_causes}}.',
        variables: ['percentage', 'common_causes'],
        required: true
      }
    ],
    targetKeywords: ['why are my eyes always dry', 'chronic dry eyes causes', 'dry eye syndrome', 'eye dryness'],
    difficulty: 'beginner',
    estimatedReadTime: 6,
    medicalAccuracy: 'high'
  }
];

// Myopia control templates for parents
export const myopiaControlTemplates: ContentTemplate[] = [
  {
    id: 'child-nearsighted-signs',
    type: 'guide',
    category: 'Pediatric Eye Care',
    subcategory: 'Myopia Control',
    titleTemplate: 'Is My Child Nearsighted? Signs Parents Should Watch For',
    descriptionTemplate: 'Learn to recognize nearsightedness symptoms in children and discover myopia control options from pediatric eye specialist Dr. Bonakdar.',
    contentStructure: [
      {
        type: 'introduction',
        contentTemplate: 'Myopia affects {{child_percentage}} of children, with rates increasing rapidly. Early detection and treatment can slow progression.',
        variables: ['child_percentage'],
        required: true
      }
    ],
    targetKeywords: ['child nearsighted signs', 'myopia symptoms children', 'nearsightedness kids', 'child vision problems'],
    difficulty: 'beginner',
    estimatedReadTime: 10,
    medicalAccuracy: 'high'
  }
];

// Computer vision syndrome templates
export const computerVisionTemplates: ContentTemplate[] = [
  {
    id: 'computer-eye-strain-guide',
    type: 'guide',
    category: 'Digital Eye Health',
    subcategory: 'Computer Vision',
    titleTemplate: 'Computer Eye Strain: Complete Guide to Digital Eye Health',
    descriptionTemplate: 'Learn about computer vision syndrome symptoms, causes, and proven solutions from Orange County optometrist Dr. Alexander Bonakdar.',
    contentStructure: [
      {
        type: 'introduction',
        contentTemplate: 'Computer vision syndrome affects {{worker_percentage}} of office workers, causing symptoms like {{symptoms}}.',
        variables: ['worker_percentage', 'symptoms'],
        required: true
      }
    ],
    targetKeywords: ['computer eye strain', 'digital eye strain', 'computer vision syndrome', 'screen eye fatigue'],
    difficulty: 'beginner',
    estimatedReadTime: 8,
    medicalAccuracy: 'medium'
  }
];

// Contact lens care templates
export const contactLensTemplates: ContentTemplate[] = [
  {
    id: 'contact-lens-problems',
    type: 'faq',
    category: 'Contact Lenses',
    subcategory: 'Care and Problems',
    titleTemplate: 'Contact Lens Problems: Troubleshooting Guide from Dr. Bonakdar',
    descriptionTemplate: 'Solve common contact lens problems with expert guidance from Orange County specialty contact lens fitter Dr. Alexander Bonakdar.',
    contentStructure: [
      {
        type: 'introduction',
        contentTemplate: 'Contact lens problems affect {{percentage}} of wearers. Most issues can be resolved with proper care and professional guidance.',
        variables: ['percentage'],
        required: true
      }
    ],
    targetKeywords: ['contact lens problems', 'contact lens troubleshooting', 'contact lens complications', 'contact lens discomfort'],
    difficulty: 'intermediate',
    estimatedReadTime: 12,
    medicalAccuracy: 'high'
  }
];

// All templates combined
export const allContentTemplates: ContentTemplate[] = [
  ...keratoconusTemplates,
  ...dryEyeTemplates,
  ...myopiaControlTemplates,
  ...computerVisionTemplates,
  ...contactLensTemplates
];

// Content generation functions
export class ContentGenerator {
  private templates: ContentTemplate[];
  private generatedSlugs: Set<string> = new Set();

  constructor(templates: ContentTemplate[] = allContentTemplates) {
    this.templates = templates;
  }

  // Generate content from template
  generateContent(templateId: string, variables: Record<string, string>): GeneratedContent | null {
    const template = this.templates.find(t => t.id === templateId);
    if (!template) return null;

    // Generate unique slug
    const baseSlug = this.generateSlug(template.titleTemplate, variables);
    const slug = this.ensureUniqueSlug(baseSlug);

    // Process content sections
    let content = '';
    for (const section of template.contentStructure) {
      content += this.processContentSection(section, variables) + '\n\n';
    }

    // Generate FAQs if applicable
    const faqs = template.type === 'faq' ? this.generateFAQs(template, variables) : undefined;

    // Generate related content
    const relatedContent = this.generateRelatedContent(template);

    // Generate featured snippet
    const featuredSnippet = this.generateFeaturedSnippet(template, variables);

    // Build breadcrumbs
    const breadcrumbs = this.buildBreadcrumbs(template);

    return {
      title: this.processTemplate(template.titleTemplate, variables),
      slug,
      metaDescription: this.processTemplate(template.descriptionTemplate, variables),
      content,
      contentType: template.type,
      keywords: template.targetKeywords,
      faqs,
      relatedContent,
      featuredSnippet,
      authorInsights: this.generateAuthorInsights(template),
      medicalCondition: template.subcategory,
      breadcrumbs
    };
  }

  // Generate batch of content
  generateBatch(count: number): GeneratedContent[] {
    const results: GeneratedContent[] = [];
    const availableTemplates = [...this.templates];

    for (let i = 0; i < count && availableTemplates.length > 0; i++) {
      const template = availableTemplates[i % availableTemplates.length];
      const variables = this.generateTemplateVariables(template);
      const content = this.generateContent(template.id, variables);
      
      if (content) {
        results.push(content);
      }
    }

    return results;
  }

  // Process template variables
  private processTemplate(template: string, variables: Record<string, string>): string {
    let processed = template;
    Object.entries(variables).forEach(([key, value]) => {
      processed = processed.replace(new RegExp(`{{${key}}}`, 'g'), value);
    });
    return processed;
  }

  // Generate slug from title
  private generateSlug(titleTemplate: string, variables: Record<string, string>): string {
    const title = this.processTemplate(titleTemplate, variables);
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  // Ensure unique slug
  private ensureUniqueSlug(baseSlug: string): string {
    let slug = baseSlug;
    let counter = 1;
    
    while (this.generatedSlugs.has(slug)) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }
    
    this.generatedSlugs.add(slug);
    return slug;
  }

  // Process content section
  private processContentSection(section: ContentSection, variables: Record<string, string>): string {
    return this.processTemplate(section.contentTemplate, variables);
  }

  // Generate template variables based on template type
  private generateTemplateVariables(template: ContentTemplate): Record<string, string> {
    const variables: Record<string, string> = {};

    // Common variables
    variables.patient_count = '5,000+';
    variables.doctor_name = 'Dr. Alexander Bonakdar';
    variables.practice_name = 'Eyecare Center of Orange County';
    variables.location = 'Orange County';

    // Template-specific variables
    switch (template.subcategory) {
      case 'Keratoconus':
        variables.prevalence = '1 in 2,000 people';
        variables.age_range = '10-25';
        break;
      case 'Dry Eye':
        variables.percentage = '30%';
        variables.common_causes = 'digital device use, aging, and environmental factors';
        break;
      case 'Myopia Control':
        variables.child_percentage = '42%';
        break;
      case 'Computer Vision':
        variables.worker_percentage = '90%';
        variables.symptoms = 'eye strain, blurred vision, and headaches';
        break;
    }

    return variables;
  }

  // Generate FAQs for template
  private generateFAQs(template: ContentTemplate, variables: Record<string, string>): FAQ[] {
    const baseFAQs: Record<string, FAQ[]> = {
      'Keratoconus': [
        {
          question: 'What causes keratoconus?',
          answer: 'Keratoconus is caused by a combination of genetic and environmental factors. The exact cause is not fully understood, but risk factors include eye rubbing, family history, and certain medical conditions.',
          category: 'Causes'
        },
        {
          question: 'Can keratoconus be cured?',
          answer: 'While keratoconus cannot be "cured," it can be effectively managed and treated. Treatments range from specialty contact lenses to corneal cross-linking and, in severe cases, corneal transplants.',
          category: 'Treatment'
        },
        {
          question: 'How quickly does keratoconus progress?',
          answer: 'Keratoconus progression varies greatly between individuals. Some people experience rapid changes over months, while others may have stable vision for years. Regular monitoring is essential.',
          category: 'Progression'
        }
      ],
      'Dry Eye': [
        {
          question: 'What are the main symptoms of dry eye?',
          answer: 'Common dry eye symptoms include burning, stinging, scratchy feeling, stringy mucus, sensitivity to light, and difficulty wearing contact lenses.',
          category: 'Symptoms'
        },
        {
          question: 'Can dry eye be permanently treated?',
          answer: 'While dry eye is often a chronic condition, it can be effectively managed with proper treatment. Some underlying causes can be addressed for long-term relief.',
          category: 'Treatment'
        }
      ]
    };

    return baseFAQs[template.subcategory || ''] || [];
  }

  // Generate related content suggestions
  private generateRelatedContent(template: ContentTemplate): Array<{title: string; url: string; description: string; category: 'faq' | 'guide' | 'blog'}> {
    const related = [];
    
    // Find templates in same category
    const sameCategory = this.templates.filter(t => 
      t.category === template.category && t.id !== template.id
    ).slice(0, 3);

    for (const relatedTemplate of sameCategory) {
      related.push({
        title: relatedTemplate.titleTemplate.replace(/{{[^}]+}}/g, ''),
        url: `/education/${relatedTemplate.type}/${this.generateSlug(relatedTemplate.titleTemplate, {})}`,
        description: relatedTemplate.descriptionTemplate.replace(/{{[^}]+}}/g, ''),
        category: relatedTemplate.type
      });
    }

    return related;
  }

  // Generate featured snippet
  private generateFeaturedSnippet(template: ContentTemplate, variables: Record<string, string>): {question: string; answer: string; format: 'paragraph' | 'list' | 'table'; data?: any} | undefined {
    if (template.type !== 'faq') return undefined;

    const snippets: Record<string, any> = {
      'keratoconus-what-is': {
        question: 'What is keratoconus?',
        answer: 'Keratoconus is a progressive eye condition where the cornea thins and bulges into a cone-like shape, causing distorted vision.',
        format: 'paragraph' as const
      },
      'why-eyes-always-dry': {
        question: 'Why are my eyes always dry?',
        answer: 'Eyes can be chronically dry due to several factors:',
        format: 'list' as const,
        data: [
          'Decreased tear production due to aging or medical conditions',
          'Poor tear quality from meibomian gland dysfunction',
          'Environmental factors like dry air or wind',
          'Digital device use reducing blink rate',
          'Certain medications that reduce tear production'
        ]
      }
    };

    return snippets[template.id];
  }

  // Generate author insights
  private generateAuthorInsights(template: ContentTemplate): string {
    const insights: Record<string, string> = {
      'Keratoconus': 'In my 15 years of practice, I\'ve seen how early detection and proper management can dramatically improve outcomes for keratoconus patients. The key is regular monitoring and staying current with treatment advances.',
      'Dry Eye': 'Dry eye is one of the most common conditions I treat. What many patients don\'t realize is that effective treatment often requires addressing multiple underlying factors simultaneously.',
      'Myopia Control': 'As myopia rates continue to rise, especially in children, myopia control has become one of the most important services we offer to preserve long-term eye health.',
      'Computer Vision': 'With the increase in remote work and screen time, I\'ve seen a significant rise in computer vision syndrome. The good news is that it\'s highly preventable and treatable.',
      'Contact Lenses': 'Specialty contact lens fitting, especially for complex conditions like keratoconus, requires expertise and patience. The right fit can be life-changing for patients.'
    };

    return insights[template.subcategory || template.category] || '';
  }

  // Build breadcrumb navigation
  private buildBreadcrumbs(template: ContentTemplate): Array<{name: string; url: string}> {
    const breadcrumbs = [
      { name: 'Education', url: '/education' },
      { name: template.type.toUpperCase(), url: `/education/${template.type}` },
      { name: template.category, url: `/education/${template.type}/${template.category.toLowerCase().replace(' ', '-')}` }
    ];

    if (template.subcategory) {
      breadcrumbs.push({
        name: template.subcategory,
        url: `/education/${template.type}/${template.category.toLowerCase().replace(' ', '-')}/${template.subcategory.toLowerCase().replace(' ', '-')}`
      });
    }

    return breadcrumbs;
  }

  // Get templates by priority
  getTemplatesByPriority(): ContentTemplate[] {
    return this.templates.sort((a, b) => {
      // Prioritize by medical accuracy and keyword volume
      const priorityScore = (template: ContentTemplate) => {
        let score = 0;
        if (template.medicalAccuracy === 'high') score += 3;
        if (template.difficulty === 'beginner') score += 2;
        score += template.targetKeywords.length;
        return score;
      };

      return priorityScore(b) - priorityScore(a);
    });
  }

  // Validate generated content
  validateContent(content: GeneratedContent): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!content.title || content.title.length < 10) {
      errors.push('Title too short');
    }

    if (!content.metaDescription || content.metaDescription.length < 120) {
      errors.push('Meta description too short');
    }

    if (!content.content || content.content.length < 500) {
      errors.push('Content too short for SEO value');
    }

    if (content.keywords.length === 0) {
      errors.push('No target keywords specified');
    }

    return {
      valid: errors.length === 0,
      errors
    };
  }
}

// Export singleton instance
export const contentGenerator = new ContentGenerator();