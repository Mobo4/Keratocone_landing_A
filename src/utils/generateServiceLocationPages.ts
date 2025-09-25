// Service Location Page Generator
// This utility generates service × location combination pages using the ServiceLocationTemplate

export interface ServiceData {
  name: string;
  slug: string;
  description: string;
  benefits: string[];
  expertise: string;
  icon: string;
  relatedServices: string[];
  targetAudience: string;
  searchVolume: 'high' | 'medium' | 'low';
}

export interface ServiceLocationData {
  service: ServiceData;
  city: string;
  driveTime: string;
  neighborhoods: string[];
}

// PRIORITY SERVICES - Based on Nvision analysis and competitive gaps
export const PRIORITY_SERVICES: ServiceData[] = [
  // "NEAR ME" SERVICES - Critical Gap (Nvision doesn't have these!)
  {
    name: "Optometrist Near Me",
    slug: "optometrist-near-me",
    description: "Looking for a trusted optometrist near you? Dr. Bonakdar provides comprehensive eye care with same-week appointments and 30+ years of experience serving Orange County families.",
    benefits: [
      "Same-week appointments available",
      "30+ years of trusted eye care experience",
      "Comprehensive eye exams and vision care",
      "Convenient Orange County location",
      "All major insurance plans accepted",
      "Bilingual staff for diverse communities"
    ],
    expertise: "Dr. Bonakdar has been providing comprehensive optometry services to Orange County for over 30 years, with expertise in routine eye exams, contact lens fittings, and vision correction.",
    icon: "eye",
    relatedServices: ["Comprehensive Eye Exams", "Contact Lens Fittings", "Vision Correction"],
    targetAudience: "families",
    searchVolume: "high"
  },
  {
    name: "Dry Eye Doctor Near Me",
    slug: "dry-eye-doctor-near-me", 
    description: "Suffering from dry, irritated eyes? Find relief with Dr. Bonakdar's advanced dry eye treatments. Specialized care for chronic dry eye syndrome with lasting results.",
    benefits: [
      "Advanced dry eye diagnostic technology",
      "Personalized treatment plans",
      "Multiple treatment options available",
      "30+ years of dry eye management experience",
      "Same-week consultations",
      "Insurance coverage for medical dry eye"
    ],
    expertise: "Dr. Bonakdar specializes in comprehensive dry eye management using the latest diagnostic tools and treatment methods, including punctal plugs, prescription eye drops, and lifestyle modifications.",
    icon: "droplet",
    relatedServices: ["Comprehensive Eye Exams", "Contact Lens Fittings", "Eye Allergies"],
    targetAudience: "adults",
    searchVolume: "high"
  },
  {
    name: "Keratoconus Specialist Near Me",
    slug: "keratoconus-specialist-near-me",
    description: "Expert keratoconus treatment with 500+ successful scleral lens fittings. Dr. Bonakdar specializes in advanced keratoconus management and specialty contact lenses.",
    benefits: [
      "500+ successful keratoconus treatments",
      "Scleral lens fitting expertise", 
      "Advanced corneal mapping technology",
      "Personalized treatment protocols",
      "Ongoing management and follow-up",
      "Insurance coverage for medical conditions"
    ],
    expertise: "Dr. Bonakdar is recognized as a keratoconus specialist with over 500 successful scleral lens fittings. He uses advanced corneal topography and custom scleral lens designs to restore vision.",
    icon: "microscope",
    relatedServices: ["Scleral Lens Fittings", "Corneal Cross-Linking", "Specialty Contact Lenses"],
    targetAudience: "specialty",
    searchVolume: "medium"
  },
  {
    name: "Scleral Lens Specialist Near Me", 
    slug: "scleral-lens-specialist-near-me",
    description: "Expert scleral lens fittings for keratoconus, irregular corneas, and severe dry eye. Dr. Bonakdar has successfully fitted 500+ patients with custom scleral lenses.",
    benefits: [
      "500+ successful scleral lens fittings",
      "Custom lens design and fabrication",
      "Advanced fitting technology",
      "Comprehensive follow-up care",
      "Insurance coverage available",
      "Improved vision and comfort"
    ],
    expertise: "Dr. Bonakdar is an expert in scleral lens technology with over 500 successful fittings. He uses advanced diagnostic equipment to create custom lenses for optimal vision and comfort.",
    icon: "glasses",
    relatedServices: ["Keratoconus Treatment", "Dry Eye Therapy", "Specialty Contact Lenses"],
    targetAudience: "specialty",
    searchVolume: "medium"
  },

  // SPECIALTY SERVICES - Dr. Bonakdar's Advantages
  {
    name: "Myopia Control",
    slug: "myopia-control",
    description: "Slow down childhood myopia progression with proven treatments. Dr. Bonakdar offers advanced myopia control options including orthokeratology and specialty contact lenses.",
    benefits: [
      "Proven myopia progression control",
      "Multiple treatment options available",
      "Orthokeratology (Ortho-K) expertise",
      "Specialty contact lens fittings",
      "Comprehensive pediatric eye care",
      "Long-term vision health protection"
    ],
    expertise: "Dr. Bonakdar specializes in myopia control using the latest evidence-based treatments including orthokeratology, specialty soft lenses, and environmental modifications to slow myopia progression in children.",
    icon: "baby",
    relatedServices: ["Orthokeratology", "Children's Vision Care", "Contact Lens Fittings"],
    targetAudience: "families",
    searchVolume: "medium"
  },
  {
    name: "Orthokeratology",
    slug: "orthokeratology",
    description: "See clearly without glasses or contacts during the day. Orthokeratology (Ortho-K) reshapes your cornea overnight for clear daytime vision.",
    benefits: [
      "Clear vision without daytime glasses/contacts",
      "FDA-approved overnight treatment", 
      "Ideal for active lifestyles and sports",
      "Reversible vision correction",
      "Myopia control for children",
      "Custom lens design for optimal results"
    ],
    expertise: "Dr. Bonakdar is certified in orthokeratology with extensive experience fitting Ortho-K lenses for both vision correction and myopia control in children and adults.",
    icon: "moon",
    relatedServices: ["Myopia Control", "Specialty Contact Lenses", "Sports Vision"],
    targetAudience: "sports",
    searchVolume: "low"
  },
  {
    name: "Headache and Eye Fatigue",
    slug: "headache-eye-fatigue",
    description: "Frequent headaches or eye strain? Digital eye strain and vision problems can cause headaches. Get relief with comprehensive vision evaluation and treatment.",
    benefits: [
      "Comprehensive headache evaluation",
      "Digital eye strain assessment",
      "Computer vision syndrome treatment",
      "Blue light protection options",
      "Ergonomic vision assessments",
      "Prescription solutions available"
    ],
    expertise: "Dr. Bonakdar evaluates vision-related headaches and eye strain, providing targeted treatments for computer vision syndrome, uncorrected refractive errors, and binocular vision problems.",
    icon: "activity",
    relatedServices: ["Computer Vision", "Comprehensive Eye Exams", "Vision Therapy"],
    targetAudience: "professionals",
    searchVolume: "medium"
  }
];

// TARGET NEIGHBORHOODS FOR EACH SERVICE TYPE
export const SERVICE_TARGET_NEIGHBORHOODS = {
  "near-me": [
    // High-density residential areas (40 neighborhoods)
    "Irvine - Woodbridge", "Irvine - Turtle Rock", "Irvine - University Park", "Irvine - Quail Hill",
    "Irvine - Northwood", "Irvine - Oak Creek", "Irvine - Orchard Hills", "Irvine - Portola Springs",
    "Irvine - Great Park", "Irvine - Cypress Village", "Newport Beach - Newport Coast", "Newport Beach - Balboa Island",
    "Newport Beach - Corona del Mar", "Newport Beach - Fashion Island", "Costa Mesa - South Coast Metro",
    "Costa Mesa - Mesa Verde", "Costa Mesa - Eastside", "Anaheim - Anaheim Hills", "Anaheim - Platinum Triangle",
    "Anaheim - Anaheim Resort", "Tustin - Tustin Ranch", "Tustin - Old Town Tustin", "Tustin - Tustin Legacy",
    "Santa Ana - Downtown Santa Ana", "Santa Ana - Floral Park", "Santa Ana - French Park",
    "Orange - Old Towne Orange", "Orange - Orange Park Acres", "Huntington Beach - Downtown Huntington Beach",
    "Huntington Beach - Huntington Harbor", "Garden Grove - Downtown", "Garden Grove - West Garden Grove",
    "Fountain Valley - Mile Square", "Fountain Valley - Southwest", "Westminster - Little Saigon",
    "Westminster - East Westminster", "Fullerton - Downtown Fullerton", "Fullerton - North Fullerton",
    "Brea - Downtown Brea", "Brea - Carbon Canyon", "Yorba Linda - East Yorba Linda"
  ],
  "families": [
    // Family-focused neighborhoods (20 areas)
    "Irvine - Woodbridge", "Irvine - Turtle Rock", "Irvine - Northwood", "Irvine - Great Park",
    "Tustin - Tustin Ranch", "Tustin - Tustin Legacy", "Orange - Orange Park Acres", "Anaheim - Anaheim Hills",
    "Costa Mesa - Mesa Verde", "Newport Beach - Newport Coast", "Fountain Valley - Mile Square",
    "Garden Grove - West Garden Grove", "Fullerton - North Fullerton", "Brea - Carbon Canyon",
    "Yorba Linda - East Yorba Linda", "Santa Ana - Floral Park", "Huntington Beach - Huntington Harbor",
    "Westminster - East Westminster", "Costa Mesa - South Coast Metro", "Irvine - Portola Springs"
  ],
  "sports": [
    // Sports-oriented communities (20 areas)
    "Irvine - University Park", "Irvine - Quail Hill", "Irvine - Oak Creek", "Newport Beach - Newport Coast",
    "Newport Beach - Corona del Mar", "Anaheim - Anaheim Hills", "Tustin - Tustin Ranch", "Orange - Orange Park Acres",
    "Huntington Beach - Downtown Huntington Beach", "Costa Mesa - Mesa Verde", "Fountain Valley - Southwest",
    "Fullerton - Downtown Fullerton", "Brea - Downtown Brea", "Yorba Linda - East Yorba Linda",
    "Garden Grove - Downtown", "Westminster - Little Saigon", "Santa Ana - French Park",
    "Irvine - Orchard Hills", "Irvine - Cypress Village", "Newport Beach - Fashion Island"
  ],
  "professionals": [
    // Professional/business areas (20 areas)
    "Newport Beach - Fashion Island", "Costa Mesa - South Coast Metro", "Irvine - University Park",
    "Santa Ana - Downtown Santa Ana", "Anaheim - Platinum Triangle", "Orange - Old Towne Orange",
    "Tustin - Old Town Tustin", "Fullerton - Downtown Fullerton", "Brea - Downtown Brea",
    "Huntington Beach - Downtown Huntington Beach", "Irvine - Turtle Rock", "Costa Mesa - Eastside",
    "Garden Grove - Downtown", "Westminster - Little Saigon", "Fountain Valley - Mile Square",
    "Newport Beach - Corona del Mar", "Irvine - Quail Hill", "Anaheim - Anaheim Resort",
    "Santa Ana - Floral Park", "Irvine - Woodbridge"
  ]
};

// Function to get drive times for each area
export function getDriveTime(neighborhood: string): string {
  // Extract city from neighborhood string
  const city = neighborhood.split(' - ')[0];
  
  const driveTimes: { [key: string]: string } = {
    "Irvine": "12-15 minutes",
    "Newport Beach": "20-25 minutes", 
    "Costa Mesa": "8-12 minutes",
    "Anaheim": "20-25 minutes",
    "Tustin": "8-12 minutes",
    "Santa Ana": "5-8 minutes",
    "Orange": "15-18 minutes",
    "Huntington Beach": "25-30 minutes",
    "Garden Grove": "10-15 minutes",
    "Fountain Valley": "15-20 minutes",
    "Westminster": "15-20 minutes",
    "Fullerton": "20-25 minutes",
    "Brea": "25-30 minutes",
    "Yorba Linda": "30-35 minutes"
  };
  
  return driveTimes[city] || "15-20 minutes";
}

// Function to generate service-specific testimonials
export function generateServiceTestimonials(service: ServiceData, neighborhood: string) {
  const baseTestimonials = {
    "optometrist-near-me": [
      {
        quote: `Dr. Bonakdar has been our family eye doctor for over 10 years. So convenient from ${neighborhood} and he always takes time to explain everything thoroughly.`,
        author: "Sarah M.",
        location: neighborhood,
        service: "Comprehensive Eye Care"
      },
      {
        quote: `Finally found an optometrist who really listens. The office is easy to get to from ${neighborhood} and they got me in the same week I called.`,
        author: "Michael T.", 
        location: neighborhood,
        service: "Eye Exam"
      },
      {
        quote: `Great with my kids and takes time to make them comfortable. Perfect location from our ${neighborhood} home.`,
        author: "Jennifer L.",
        location: neighborhood,
        service: "Children's Eye Care"
      }
    ],
    "dry-eye-doctor-near-me": [
      {
        quote: `Suffered with dry eyes for years until I found Dr. Bonakdar. His treatment plan has given me complete relief. Worth the drive from ${neighborhood}!`,
        author: "Robert K.",
        location: neighborhood,
        service: "Dry Eye Treatment"
      },
      {
        quote: `The dry eye evaluation was so thorough. Dr. Bonakdar explained exactly what was causing my symptoms and the treatment is working perfectly.`,
        author: "Linda S.",
        location: neighborhood,
        service: "Dry Eye Therapy"
      },
      {
        quote: `I can finally wear contacts again thanks to Dr. Bonakdar's dry eye treatment. Convenient location from ${neighborhood}.`,
        author: "David W.",
        location: neighborhood,
        service: "Contact Lens Care"
      }
    ],
    "keratoconus-specialist-near-me": [
      {
        quote: `Dr. Bonakdar changed my life with scleral lenses. My vision is better than it's been in years. True keratoconus expert.`,
        author: "Emily R.",
        location: neighborhood,
        service: "Keratoconus Treatment"
      },
      {
        quote: `After being told nothing could help my keratoconus, Dr. Bonakdar fitted me with scleral lenses. Amazing results!`,
        author: "James H.",
        location: neighborhood,
        service: "Scleral Lens Fitting"
      },
      {
        quote: `The keratoconus care here is exceptional. Dr. Bonakdar really understands this condition and has the expertise to help.`,
        author: "Maria G.",
        location: neighborhood,
        service: "Specialty Contact Lenses"
      }
    ],
    "scleral-lens-specialist-near-me": [
      {
        quote: `The scleral lens fitting process was so professional. Dr. Bonakdar's expertise shows - perfect fit and incredible vision improvement.`,
        author: "Kevin P.",
        location: neighborhood,
        service: "Scleral Lens Fitting"
      },
      {
        quote: `Best decision ever was getting scleral lenses from Dr. Bonakdar. My vision and comfort are better than I ever imagined possible.`,
        author: "Susan M.",
        location: neighborhood,
        service: "Specialty Contact Lenses"
      },
      {
        quote: `Dr. Bonakdar is a true scleral lens expert. The fitting was precise and the results are life-changing.`,
        author: "Richard T.",
        location: neighborhood,
        service: "Keratoconus Care"
      }
    ],
    "myopia-control": [
      {
        quote: `My daughter's myopia progression has slowed significantly with Dr. Bonakdar's myopia control program. So grateful we found him.`,
        author: "Amy L.",
        location: neighborhood,
        service: "Myopia Control"
      },
      {
        quote: `The ortho-k lenses have been amazing for my son. He can play sports without glasses and his prescription hasn't gotten worse.`,
        author: "Mark D.",
        location: neighborhood,
        service: "Orthokeratology"
      },
      {
        quote: `Dr. Bonakdar explained myopia control so well. The treatment is working and we're protecting our child's future vision.`,
        author: "Lisa C.",
        location: neighborhood,
        service: "Children's Eye Care"
      }
    ],
    "orthokeratology": [
      {
        quote: `Ortho-k has been life-changing for my athletic teenager. Clear vision all day without contacts or glasses during sports.`,
        author: "Coach Miller",
        location: neighborhood,
        service: "Orthokeratology"
      },
      {
        quote: `Love my ortho-k lenses! I can swim, surf, and play volleyball without worrying about contacts. Dr. Bonakdar is an expert.`,
        author: "Jessica A.",
        location: neighborhood,
        service: "Sports Vision"
      },
      {
        quote: `The ortho-k fitting was so professional. Perfect vision during the day and slowing my child's myopia progression too.`,
        author: "Tom R.",
        location: neighborhood,
        service: "Myopia Control"
      }
    ],
    "headache-eye-fatigue": [
      {
        quote: `My computer-related headaches are gone thanks to Dr. Bonakdar's vision assessment. He found the exact cause and fixed it.`,
        author: "Rachel B.",
        location: neighborhood,
        service: "Computer Vision"
      },
      {
        quote: `Years of eye strain and headaches resolved with the right prescription. Dr. Bonakdar really understands vision-related headaches.`,
        author: "Alex P.",
        location: neighborhood,
        service: "Eye Strain Treatment"
      },
      {
        quote: `The comprehensive evaluation found vision problems I didn't know I had. No more afternoon headaches at work!`,
        author: "Michelle K.",
        location: neighborhood,
        service: "Vision Correction"
      }
    ]
  };
  
  return baseTestimonials[service.slug as keyof typeof baseTestimonials] || baseTestimonials["optometrist-near-me"];
}

// Function to generate page data for service × location combinations
export function generateServiceLocationPageData(service: ServiceData, neighborhood: string) {
  const city = neighborhood.split(' - ')[0];
  const area = neighborhood.split(' - ')[1] || neighborhood;
  const driveTime = getDriveTime(neighborhood);
  
  return {
    service,
    location: {
      city: area,
      driveTime,
      neighborhoods: [
        `Located in ${area}`,
        `Serving families throughout ${city}`,
        `Convenient to major ${city} landmarks`,
        `Easy freeway access from ${area}`,
        `Trusted by ${area} residents since 1990`,
        `Professional ${service.name.toLowerCase()} care near ${area}`
      ]
    },
    testimonials: generateServiceTestimonials(service, area),
    seoKeywords: `${service.slug} ${area}, ${area} ${service.slug}, ${service.name} ${area}, ${area} eye doctor, ${service.slug} near me`,
    metaDescription: `Expert ${service.name.toLowerCase()} in ${area}, ${city}. Dr. Bonakdar provides specialized ${service.name.toLowerCase()} treatment. Same-week appointments. ${driveTime} from ${area}. (949) 658-2372`
  };
}

// Function to get target neighborhoods for a service
export function getTargetNeighborhoods(service: ServiceData): string[] {
  if (service.slug.includes('near-me')) {
    return SERVICE_TARGET_NEIGHBORHOODS["near-me"];
  }
  
  return SERVICE_TARGET_NEIGHBORHOODS[service.targetAudience] || SERVICE_TARGET_NEIGHBORHOODS["near-me"];
}

// Generate all service × location combinations
export function generateAllServiceLocationCombinations() {
  const combinations: any[] = [];
  
  PRIORITY_SERVICES.forEach(service => {
    const targetNeighborhoods = getTargetNeighborhoods(service);
    
    targetNeighborhoods.forEach(neighborhood => {
      combinations.push(generateServiceLocationPageData(service, neighborhood));
    });
  });
  
  return combinations;
}

// Get total page count
export function getTotalPageCount() {
  let total = 0;
  
  PRIORITY_SERVICES.forEach(service => {
    const targetNeighborhoods = getTargetNeighborhoods(service);
    total += targetNeighborhoods.length;
  });
  
  return total;
}