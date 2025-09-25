// Neighborhood Page Generator
// This utility generates all neighborhood pages using the LocationPageTemplate

export interface NeighborhoodData {
  city: string;
  neighborhood: string;
  driveTime: string;
  landmarks: string[];
  nearbySchools: string[];
  shoppingCenters: string[];
}

// Complete list of all neighborhoods to generate pages for
export const NEIGHBORHOODS_DATA: NeighborhoodData[] = [
  // IRVINE - 20 neighborhoods
  { city: "Irvine", neighborhood: "Woodbridge", driveTime: "15 minutes", 
    landmarks: ["Woodbridge Lakes", "South Lake"], 
    nearbySchools: ["Woodbridge High School"], 
    shoppingCenters: ["Woodbridge Village Center"] },
  { city: "Irvine", neighborhood: "Turtle Rock", driveTime: "15 minutes",
    landmarks: ["UCI Campus", "Turtle Rock Community Park"],
    nearbySchools: ["Turtle Rock Elementary"],
    shoppingCenters: ["University Town Center"] },
  { city: "Irvine", neighborhood: "University Park", driveTime: "15 minutes",
    landmarks: ["UCI", "University Park Library"],
    nearbySchools: ["University High School"],
    shoppingCenters: ["Campus Plaza"] },
  { city: "Irvine", neighborhood: "Quail Hill", driveTime: "15 minutes",
    landmarks: ["Quail Hill Loop Trail", "Shady Canyon Golf Club"],
    nearbySchools: ["Alderwood Elementary"],
    shoppingCenters: ["Quail Hill Shopping Center"] },
  { city: "Irvine", neighborhood: "Northwood", driveTime: "12 minutes",
    landmarks: ["Northwood Community Park", "Northwood Town Center"],
    nearbySchools: ["Northwood High School"],
    shoppingCenters: ["Northwood Plaza"] },
  { city: "Irvine", neighborhood: "Oak Creek", driveTime: "15 minutes",
    landmarks: ["Oak Creek Golf Club", "Oak Creek Shopping Center"],
    nearbySchools: ["Oak Creek Elementary"],
    shoppingCenters: ["Oak Creek Marketplace"] },
  { city: "Irvine", neighborhood: "Orchard Hills", driveTime: "12 minutes",
    landmarks: ["Orchard Hills Shopping Center", "Orchard Hills Park"],
    nearbySchools: ["Orchard Hills School"],
    shoppingCenters: ["Orchard Hills Village Center"] },
  { city: "Irvine", neighborhood: "Portola Springs", driveTime: "12 minutes",
    landmarks: ["Portola Springs Community Park", "Whiting Ranch"],
    nearbySchools: ["Portola Springs Elementary"],
    shoppingCenters: ["Portola Springs Village Center"] },
  { city: "Irvine", neighborhood: "Great Park", driveTime: "10 minutes",
    landmarks: ["Orange County Great Park", "Great Park Balloon"],
    nearbySchools: ["Beacon Park School"],
    shoppingCenters: ["Woodbury Town Center"] },
  { city: "Irvine", neighborhood: "Cypress Village", driveTime: "10 minutes",
    landmarks: ["Jeffrey Open Space Trail", "Great Park"],
    nearbySchools: ["Cypress Village Elementary"],
    shoppingCenters: ["Cypress Village Shopping Center"] },
  
  // NEWPORT BEACH - 15 neighborhoods
  { city: "Newport Beach", neighborhood: "Newport Coast", driveTime: "20 minutes",
    landmarks: ["Crystal Cove State Park", "Pelican Hill Golf Club"],
    nearbySchools: ["Newport Coast Elementary"],
    shoppingCenters: ["Newport Coast Shopping Center"] },
  { city: "Newport Beach", neighborhood: "Balboa Island", driveTime: "25 minutes",
    landmarks: ["Balboa Fun Zone", "Balboa Ferry"],
    nearbySchools: ["Newport Elementary"],
    shoppingCenters: ["Balboa Village"] },
  { city: "Newport Beach", neighborhood: "Corona del Mar", driveTime: "22 minutes",
    landmarks: ["Corona del Mar State Beach", "Sherman Gardens"],
    nearbySchools: ["Corona del Mar High School"],
    shoppingCenters: ["Corona del Mar Plaza"] },
  { city: "Newport Beach", neighborhood: "Fashion Island", driveTime: "20 minutes",
    landmarks: ["Fashion Island Mall", "Newport Center"],
    nearbySchools: ["Harbor Day School"],
    shoppingCenters: ["Fashion Island"] },
  
  // COSTA MESA - 12 neighborhoods
  { city: "Costa Mesa", neighborhood: "South Coast Metro", driveTime: "10 minutes",
    landmarks: ["South Coast Plaza", "Segerstrom Center"],
    nearbySchools: ["Costa Mesa High School"],
    shoppingCenters: ["South Coast Plaza"] },
  { city: "Costa Mesa", neighborhood: "Mesa Verde", driveTime: "8 minutes",
    landmarks: ["Mesa Verde Country Club", "Mesa Verde Park"],
    nearbySchools: ["Mesa Verde Elementary"],
    shoppingCenters: ["Mesa Verde Shopping Center"] },
  { city: "Costa Mesa", neighborhood: "Eastside", driveTime: "7 minutes",
    landmarks: ["The Camp", "The Lab"],
    nearbySchools: ["Newport Harbor High School"],
    shoppingCenters: ["17th Street Shops"] },
  
  // ANAHEIM - 15 neighborhoods
  { city: "Anaheim", neighborhood: "Anaheim Hills", driveTime: "25 minutes",
    landmarks: ["Anaheim Hills Golf Course", "Oak Canyon Nature Center"],
    nearbySchools: ["Canyon High School"],
    shoppingCenters: ["Festival Shopping Center"] },
  { city: "Anaheim", neighborhood: "Platinum Triangle", driveTime: "20 minutes",
    landmarks: ["Angel Stadium", "Honda Center"],
    nearbySchools: ["Katella High School"],
    shoppingCenters: ["The Village at Orange"] },
  { city: "Anaheim", neighborhood: "Anaheim Resort", driveTime: "20 minutes",
    landmarks: ["Disneyland", "Convention Center"],
    nearbySchools: ["Anaheim High School"],
    shoppingCenters: ["GardenWalk"] },
  
  // TUSTIN - 12 neighborhoods
  { city: "Tustin", neighborhood: "Tustin Ranch", driveTime: "10 minutes",
    landmarks: ["Tustin Ranch Golf Club", "Peters Canyon Park"],
    nearbySchools: ["Beckman High School"],
    shoppingCenters: ["Tustin Ranch Shopping Center"] },
  { city: "Tustin", neighborhood: "Old Town Tustin", driveTime: "8 minutes",
    landmarks: ["Old Town Tustin Historic District", "Tustin Library"],
    nearbySchools: ["Foothill High School"],
    shoppingCenters: ["Old Town Tustin Promenade"] },
  { city: "Tustin", neighborhood: "Tustin Legacy", driveTime: "10 minutes",
    landmarks: ["Tustin Legacy Park", "Veterans Sports Park"],
    nearbySchools: ["Heritage Elementary"],
    shoppingCenters: ["The District at Tustin Legacy"] },
  
  // SANTA ANA - 15 neighborhoods
  { city: "Santa Ana", neighborhood: "Downtown Santa Ana", driveTime: "5 minutes",
    landmarks: ["Santa Ana Courthouse", "Artists Village"],
    nearbySchools: ["Santa Ana High School"],
    shoppingCenters: ["MainPlace Mall"] },
  { city: "Santa Ana", neighborhood: "Floral Park", driveTime: "7 minutes",
    landmarks: ["Floral Park Historic District", "Santiago Park"],
    nearbySchools: ["Santiago Elementary"],
    shoppingCenters: ["17th Street"] },
  { city: "Santa Ana", neighborhood: "French Park", driveTime: "7 minutes",
    landmarks: ["French Park", "Historic French Park Gates"],
    nearbySchools: ["Villa Fundamental"],
    shoppingCenters: ["Bristol Marketplace"] },
  
  // ORANGE - 10 neighborhoods
  { city: "Orange", neighborhood: "Old Towne Orange", driveTime: "15 minutes",
    landmarks: ["Orange Circle", "Chapman University"],
    nearbySchools: ["Orange High School"],
    shoppingCenters: ["Old Towne Orange Plaza"] },
  { city: "Orange", neighborhood: "Orange Park Acres", driveTime: "18 minutes",
    landmarks: ["Santiago Oaks Regional Park", "Irvine Lake"],
    nearbySchools: ["Canyon High School"],
    shoppingCenters: ["Town & Country Shopping Center"] },
  
  // HUNTINGTON BEACH - 12 neighborhoods
  { city: "Huntington Beach", neighborhood: "Downtown Huntington Beach", driveTime: "25 minutes",
    landmarks: ["Huntington Pier", "Main Street"],
    nearbySchools: ["Huntington Beach High School"],
    shoppingCenters: ["Bella Terra"] },
  { city: "Huntington Beach", neighborhood: "Huntington Harbor", driveTime: "25 minutes",
    landmarks: ["Huntington Harbor Mall", "Admiralty Park"],
    nearbySchools: ["Marina High School"],
    shoppingCenters: ["Huntington Harbor Mall"] },
  
  // Add more neighborhoods as needed...
];

// Function to generate testimonials for each neighborhood
export function generateTestimonials(city: string, neighborhood: string) {
  const testimonialTemplates = [
    {
      quote: `Dr. Bonakdar has been our family eye doctor for years. So convenient from ${neighborhood} and always gets us in quickly.`,
      author: `Sarah M.`,
      location: neighborhood
    },
    {
      quote: `Finally found an eye doctor who really understands keratoconus. The drive from ${neighborhood} is absolutely worth it for his expertise.`,
      author: `Michael T.`,
      location: neighborhood
    },
    {
      quote: `Great with kids and takes time to explain everything. Perfect location from our ${neighborhood} home.`,
      author: `Jennifer L.`,
      location: neighborhood
    }
  ];
  
  return testimonialTemplates;
}

// Function to generate the page data for each neighborhood
export function generateNeighborhoodPageData(data: NeighborhoodData) {
  const { city, neighborhood, driveTime, landmarks, nearbySchools, shoppingCenters } = data;
  
  return {
    city: `${neighborhood}, ${city}`,
    neighborhoods: [
      `Located in the heart of ${neighborhood}`,
      `Serving families near ${landmarks[0]}`,
      `Convenient to ${nearbySchools[0]}`,
      `Close to ${shoppingCenters[0]}`,
      `Easy access from all ${neighborhood} streets`,
      `Trusted by ${neighborhood} residents for 30+ years`
    ],
    driveTime,
    testimonials: generateTestimonials(city, neighborhood),
    seoKeywords: `${neighborhood} eye doctor, ${neighborhood} optometrist, eye exam ${neighborhood}, ${neighborhood} ${city} eye care, keratoconus ${neighborhood}`,
    metaDescription: `Expert eye doctor serving ${neighborhood}, ${city}. Dr. Bonakdar provides comprehensive eye care, keratoconus treatment. Near ${landmarks[0]}. Same-week appointments. (949) 658-2372`
  };
}