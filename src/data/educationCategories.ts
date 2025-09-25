/**
 * Education Categories Data Structure
 * Based on Wills Eye Manual chapters and common eye conditions
 */

export interface Condition {
  id: string;
  name: string;
  description: string;
  slug: string;
  severity: 'common' | 'serious' | 'urgent';
  estimatedReadTime: number;
  lastUpdated: string;
  featured?: boolean;
}

export interface EducationCategory {
  id: string;
  name: string;
  description: string;
  slug: string;
  icon: string;
  color: string;
  conditions: Condition[];
}

export const educationCategories: EducationCategory[] = [
  {
    id: 'cornea-external',
    name: 'Cornea & External Disease',
    description: 'Conditions affecting the cornea, conjunctiva, and front surface of the eye',
    slug: 'cornea-external-disease',
    icon: '👁️',
    color: 'bg-blue-100 text-blue-800',
    conditions: [
      {
        id: 'dry-eye',
        name: 'Dry Eye Syndrome',
        description: 'When tears aren\'t able to provide adequate lubrication for your eyes',
        slug: 'dry-eye-syndrome',
        severity: 'common',
        estimatedReadTime: 8,
        lastUpdated: '2024-09-16',
        featured: true
      },
      {
        id: 'keratoconus',
        name: 'Keratoconus',
        description: 'Progressive thinning and cone-shaped bulging of the cornea',
        slug: 'keratoconus',
        severity: 'serious',
        estimatedReadTime: 10,
        lastUpdated: '2024-09-16'
      },
      {
        id: 'corneal-abrasion',
        name: 'Corneal Abrasion',
        description: 'Scratch or scrape on the cornea, the clear front surface of the eye',
        slug: 'corneal-abrasion',
        severity: 'urgent',
        estimatedReadTime: 6,
        lastUpdated: '2024-09-16'
      },
      {
        id: 'conjunctivitis',
        name: 'Conjunctivitis (Pink Eye)',
        description: 'Inflammation of the thin tissue covering the white part of the eye',
        slug: 'conjunctivitis',
        severity: 'common',
        estimatedReadTime: 7,
        lastUpdated: '2024-09-16'
      }
    ]
  },
  {
    id: 'glaucoma',
    name: 'Glaucoma',
    description: 'Group of eye diseases that damage the optic nerve, often due to high pressure',
    slug: 'glaucoma',
    icon: '🔍',
    color: 'bg-green-100 text-green-800',
    conditions: [
      {
        id: 'open-angle-glaucoma',
        name: 'Open-Angle Glaucoma',
        description: 'Most common form of glaucoma, develops slowly over time',
        slug: 'open-angle-glaucoma',
        severity: 'serious',
        estimatedReadTime: 12,
        lastUpdated: '2024-09-16',
        featured: true
      },
      {
        id: 'angle-closure-glaucoma',
        name: 'Angle-Closure Glaucoma',
        description: 'Medical emergency where eye pressure rises suddenly',
        slug: 'angle-closure-glaucoma',
        severity: 'urgent',
        estimatedReadTime: 8,
        lastUpdated: '2024-09-16'
      },
      {
        id: 'normal-tension-glaucoma',
        name: 'Normal-Tension Glaucoma',
        description: 'Optic nerve damage despite normal eye pressure',
        slug: 'normal-tension-glaucoma',
        severity: 'serious',
        estimatedReadTime: 9,
        lastUpdated: '2024-09-16'
      }
    ]
  },
  {
    id: 'retina',
    name: 'Retina',
    description: 'Conditions affecting the retina and macula at the back of the eye',
    slug: 'retina',
    icon: '🎯',
    color: 'bg-purple-100 text-purple-800',
    conditions: [
      {
        id: 'macular-degeneration',
        name: 'Macular Degeneration',
        description: 'Deterioration of the central part of the retina, affecting central vision',
        slug: 'macular-degeneration',
        severity: 'serious',
        estimatedReadTime: 11,
        lastUpdated: '2024-09-16',
        featured: true
      },
      {
        id: 'diabetic-retinopathy',
        name: 'Diabetic Retinopathy',
        description: 'Diabetes complication that affects blood vessels in the retina',
        slug: 'diabetic-retinopathy',
        severity: 'serious',
        estimatedReadTime: 13,
        lastUpdated: '2024-09-16',
        featured: true
      },
      {
        id: 'retinal-detachment',
        name: 'Retinal Detachment',
        description: 'Medical emergency where the retina pulls away from underlying tissue',
        slug: 'retinal-detachment',
        severity: 'urgent',
        estimatedReadTime: 9,
        lastUpdated: '2024-09-16'
      },
      {
        id: 'macular-hole',
        name: 'Macular Hole',
        description: 'Small break in the macula causing blurred central vision',
        slug: 'macular-hole',
        severity: 'serious',
        estimatedReadTime: 8,
        lastUpdated: '2024-09-16'
      }
    ]
  },
  {
    id: 'pediatric',
    name: 'Pediatric',
    description: 'Eye conditions that commonly affect children and infants',
    slug: 'pediatric',
    icon: '👶',
    color: 'bg-yellow-100 text-yellow-800',
    conditions: [
      {
        id: 'lazy-eye',
        name: 'Lazy Eye (Amblyopia)',
        description: 'Reduced vision in one eye due to abnormal visual development',
        slug: 'lazy-eye-amblyopia',
        severity: 'serious',
        estimatedReadTime: 9,
        lastUpdated: '2024-09-16'
      },
      {
        id: 'crossed-eyes',
        name: 'Crossed Eyes (Strabismus)',
        description: 'Misalignment of the eyes where they point in different directions',
        slug: 'crossed-eyes-strabismus',
        severity: 'serious',
        estimatedReadTime: 10,
        lastUpdated: '2024-09-16'
      },
      {
        id: 'childhood-myopia',
        name: 'Childhood Myopia',
        description: 'Nearsightedness in children, often progressive',
        slug: 'childhood-myopia',
        severity: 'common',
        estimatedReadTime: 8,
        lastUpdated: '2024-09-16'
      }
    ]
  },
  {
    id: 'neuro-ophthalmology',
    name: 'Neuro-ophthalmology',
    description: 'Conditions affecting the visual pathways and brain connections to the eyes',
    slug: 'neuro-ophthalmology',
    icon: '🧠',
    color: 'bg-red-100 text-red-800',
    conditions: [
      {
        id: 'optic-neuritis',
        name: 'Optic Neuritis',
        description: 'Inflammation of the optic nerve causing vision loss',
        slug: 'optic-neuritis',
        severity: 'urgent',
        estimatedReadTime: 8,
        lastUpdated: '2024-09-16'
      },
      {
        id: 'double-vision',
        name: 'Double Vision (Diplopia)',
        description: 'Seeing two images of a single object',
        slug: 'double-vision-diplopia',
        severity: 'serious',
        estimatedReadTime: 9,
        lastUpdated: '2024-09-16'
      },
      {
        id: 'visual-field-defects',
        name: 'Visual Field Defects',
        description: 'Loss of vision in specific areas of the visual field',
        slug: 'visual-field-defects',
        severity: 'serious',
        estimatedReadTime: 10,
        lastUpdated: '2024-09-16'
      }
    ]
  },
  {
    id: 'oculoplastics',
    name: 'Oculoplastics',
    description: 'Conditions affecting the eyelids, tear ducts, and surrounding structures',
    slug: 'oculoplastics',
    icon: '💧',
    color: 'bg-teal-100 text-teal-800',
    conditions: [
      {
        id: 'ptosis',
        name: 'Ptosis (Drooping Eyelid)',
        description: 'Drooping of the upper eyelid that can affect vision',
        slug: 'ptosis-drooping-eyelid',
        severity: 'common',
        estimatedReadTime: 7,
        lastUpdated: '2024-09-16'
      },
      {
        id: 'chalazion-stye',
        name: 'Chalazion & Stye',
        description: 'Bumps on the eyelid caused by blocked oil glands or infection',
        slug: 'chalazion-stye',
        severity: 'common',
        estimatedReadTime: 6,
        lastUpdated: '2024-09-16'
      },
      {
        id: 'blocked-tear-duct',
        name: 'Blocked Tear Duct',
        description: 'Obstruction preventing tears from draining normally',
        slug: 'blocked-tear-duct',
        severity: 'common',
        estimatedReadTime: 7,
        lastUpdated: '2024-09-16'
      }
    ]
  },
  {
    id: 'lens-cataract',
    name: 'Lens & Cataract',
    description: 'Conditions affecting the natural lens of the eye',
    slug: 'lens-cataract',
    icon: '🔍',
    color: 'bg-indigo-100 text-indigo-800',
    conditions: [
      {
        id: 'cataracts',
        name: 'Cataracts',
        description: 'Clouding of the natural lens causing blurred vision',
        slug: 'cataracts',
        severity: 'common',
        estimatedReadTime: 10,
        lastUpdated: '2024-09-16',
        featured: true
      },
      {
        id: 'presbyopia',
        name: 'Presbyopia',
        description: 'Age-related difficulty focusing on close objects',
        slug: 'presbyopia',
        severity: 'common',
        estimatedReadTime: 7,
        lastUpdated: '2024-09-16'
      }
    ]
  }
];

// Helper functions
export const getFeaturedConditions = (): Condition[] => {
  return educationCategories
    .flatMap(category => category.conditions)
    .filter(condition => condition.featured);
};

export const getPopularConditions = (): Condition[] => {
  // Return conditions that are either featured or common
  return educationCategories
    .flatMap(category => category.conditions)
    .filter(condition => condition.featured || condition.severity === 'common')
    .sort((a, b) => {
      // Featured conditions first, then by name
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return a.name.localeCompare(b.name);
    });
};

export const searchConditions = (query: string): Condition[] => {
  const lowercaseQuery = query.toLowerCase();
  return educationCategories
    .flatMap(category => category.conditions)
    .filter(condition => 
      condition.name.toLowerCase().includes(lowercaseQuery) ||
      condition.description.toLowerCase().includes(lowercaseQuery)
    );
};

export const getConditionBySlug = (slug: string): Condition | undefined => {
  return educationCategories
    .flatMap(category => category.conditions)
    .find(condition => condition.slug === slug);
};

export const getCategoryBySlug = (slug: string): EducationCategory | undefined => {
  return educationCategories.find(category => category.slug === slug);
};