// City-specific data for local SEO optimization
export interface CityData {
  name: string;
  slug: string;
  county: string;
  zipCodes: string[];
  distance: number; // miles from Santa Ana (92705)
  population: number;
  landmarks: string[];
  neighborhoods: string[];
  tier: 1 | 2 | 3; // Priority tier for SEO
  spanishName?: string;
  keywordModifiers: string[];
  localCompetitors?: string[];
}

export const citiesData: CityData[] = [
  // Tier 1 - High Priority Cities
  {
    name: "Irvine",
    slug: "irvine",
    county: "Orange County",
    zipCodes: ["92602", "92603", "92604", "92606", "92612", "92614", "92617", "92618", "92619", "92620"],
    distance: 8,
    population: 307670,
    landmarks: ["UC Irvine", "Irvine Spectrum Center", "John Wayne Airport", "Irvine Business Complex"],
    neighborhoods: ["Woodbridge", "Northwood", "University Park", "Turtle Rock", "Quail Hill", "Shady Canyon"],
    tier: 1,
    spanishName: "Irvine",
    keywordModifiers: ["near UCI", "Spectrum area", "South County", "East Irvine", "North Irvine"],
    localCompetitors: ["Kaiser Permanente Irvine", "UCI Health Eye Center"]
  },
  {
    name: "Tustin",
    slug: "tustin",
    county: "Orange County", 
    zipCodes: ["92780", "92782"],
    distance: 3,
    population: 80276,
    landmarks: ["Tustin Legacy", "The District", "Tustin Ranch"],
    neighborhoods: ["North Tustin", "Old Town Tustin", "Tustin Ranch", "Tustin Legacy"],
    tier: 1,
    spanishName: "Tustin",
    keywordModifiers: ["North Tustin", "Tustin Ranch", "Legacy area", "near The District"],
    localCompetitors: ["Tustin Eye Center", "North Tustin Vision"]
  },
  {
    name: "Orange",
    slug: "orange",
    county: "Orange County",
    zipCodes: ["92856", "92857", "92865", "92866", "92867", "92868", "92869"],
    distance: 5,
    population: 140289,
    landmarks: ["Chapman University", "Orange Circle", "Angel Stadium vicinity"],
    neighborhoods: ["Old Towne Orange", "Orange Park Acres", "Villa Park area"],
    tier: 1,
    spanishName: "Orange",
    keywordModifiers: ["Old Town Orange", "Chapman University area", "Orange Circle"],
    localCompetitors: ["Orange Coast Eye Center", "Chapman Eye Care"]
  },
  {
    name: "Newport Beach",
    slug: "newport-beach", 
    county: "Orange County",
    zipCodes: ["92625", "92659", "92660", "92661", "92662", "92663"],
    distance: 12,
    population: 87068,
    landmarks: ["Fashion Island", "Balboa Peninsula", "Newport Harbor", "John Wayne Airport"],
    neighborhoods: ["Balboa Island", "Corona del Mar", "Newport Coast", "Lido Isle"],
    tier: 1,
    spanishName: "Newport Beach",
    keywordModifiers: ["Fashion Island area", "Corona del Mar", "Newport Coast", "Balboa"],
    localCompetitors: ["Newport Beach Eye Surgery", "Fashion Island Eye Care"]
  },
  {
    name: "Costa Mesa",
    slug: "costa-mesa",
    county: "Orange County",
    zipCodes: ["92626", "92627", "92628"],
    distance: 6,
    population: 114353,
    landmarks: ["South Coast Plaza", "OC Fair & Event Center", "Segerstrom Center"],
    neighborhoods: ["Mesa Verde", "Harbor View", "South Coast Metro"],
    tier: 1,
    spanishName: "Costa Mesa",
    keywordModifiers: ["South Coast Plaza", "Mesa Verde", "Harbor area", "South Coast Metro"],
    localCompetitors: ["South Coast Eye Institute", "Mesa Vision Care"]
  },
  {
    name: "Anaheim",
    slug: "anaheim",
    county: "Orange County",
    zipCodes: ["92801", "92802", "92803", "92804", "92805", "92806", "92807", "92808"],
    distance: 10,
    population: 346824,
    landmarks: ["Disneyland Resort", "Angel Stadium", "Honda Center", "Anaheim Convention Center"],
    neighborhoods: ["Anaheim Hills", "Downtown Anaheim", "West Anaheim", "East Anaheim"],
    tier: 1,
    spanishName: "Anaheim",
    keywordModifiers: ["Anaheim Hills", "near Disneyland", "Angel Stadium area", "Convention Center"],
    localCompetitors: ["Anaheim Eye Institute", "Disneyland area Eye Care"]
  },

  // Tier 2 - Medium Priority Cities
  {
    name: "Huntington Beach",
    slug: "huntington-beach",
    county: "Orange County",
    zipCodes: ["92605", "92615", "92646", "92647", "92648", "92649"],
    distance: 15,
    population: 198711,
    landmarks: ["Huntington Pier", "Main Street", "Bella Terra"],
    neighborhoods: ["Sunset Beach", "Surfside", "Downtown HB"],
    tier: 2,
    spanishName: "Huntington Beach",
    keywordModifiers: ["near beach", "Main Street area", "Bella Terra"],
    localCompetitors: ["Huntington Beach Vision Center"]
  },
  {
    name: "Garden Grove",
    slug: "garden-grove",
    county: "Orange County",
    zipCodes: ["92840", "92841", "92842", "92843", "92844", "92845"],
    distance: 7,
    population: 175140,
    landmarks: ["Garden Grove Park", "The Garden Grove", "Christ Cathedral"],
    neighborhoods: ["West Garden Grove", "East Garden Grove"],
    tier: 2,
    spanishName: "Garden Grove",
    keywordModifiers: ["Crystal Cathedral area", "Garden Grove Blvd"],
    localCompetitors: ["Garden Grove Optometry"]
  },
  {
    name: "Fullerton",
    slug: "fullerton",
    county: "Orange County",
    zipCodes: ["92831", "92832", "92833", "92834", "92835", "92836", "92837", "92838"],
    distance: 12,
    population: 143617,
    landmarks: ["Cal State Fullerton", "Downtown Fullerton", "Fullerton Arboretum"],
    neighborhoods: ["North Fullerton", "South Fullerton", "West Fullerton"],
    tier: 2,
    spanishName: "Fullerton",
    keywordModifiers: ["CSUF area", "Downtown Fullerton", "North Fullerton"],
    localCompetitors: ["Fullerton Eye Associates"]
  },
  {
    name: "Mission Viejo",
    slug: "mission-viejo", 
    county: "Orange County",
    zipCodes: ["92691", "92692", "92694"],
    distance: 18,
    population: 94381,
    landmarks: ["Mission Viejo Mall", "Oso Creek Trail", "Lake Mission Viejo"],
    neighborhoods: ["North Mission Viejo", "South Mission Viejo"],
    tier: 2,
    spanishName: "Mission Viejo",
    keywordModifiers: ["Mission Viejo Mall area", "Lake area", "South County"],
    localCompetitors: ["Mission Viejo Eye Care"]
  },
  {
    name: "Lake Forest",
    slug: "lake-forest",
    county: "Orange County", 
    zipCodes: ["92609", "92610", "92630"],
    distance: 20,
    population: 85858,
    landmarks: ["Lake Forest Sports Park", "Etnies Skatepark", "Heritage Hill"],
    neighborhoods: ["Baker Ranch", "Portola Hills area"],
    tier: 2,
    spanishName: "Lake Forest",
    keywordModifiers: ["Baker Ranch", "Sports Park area", "South County"],
    localCompetitors: ["Lake Forest Vision Center"]
  },

  // Tier 3 - Lower Priority Cities  
  {
    name: "Westminster",
    slug: "westminster",
    county: "Orange County",
    zipCodes: ["92683", "92684"],
    distance: 13,
    population: 90857,
    landmarks: ["Westminster Mall", "Little Saigon"],
    neighborhoods: ["Little Saigon", "West Westminster"],
    tier: 3,
    spanishName: "Westminster", 
    keywordModifiers: ["Little Saigon area", "Westminster Mall"],
    localCompetitors: ["Westminster Eye Clinic"]
  },
  {
    name: "Fountain Valley",
    slug: "fountain-valley",
    county: "Orange County",
    zipCodes: ["92708", "92728"],
    distance: 8,
    population: 57047,
    landmarks: ["Mile Square Park", "Fountain Valley Hospital"],
    neighborhoods: ["East Fountain Valley", "West Fountain Valley"],
    tier: 3,
    spanishName: "Fountain Valley",
    keywordModifiers: ["Mile Square area", "Hospital district"],
    localCompetitors: ["Fountain Valley Optometry"]
  },
  {
    name: "Laguna Hills",
    slug: "laguna-hills",
    county: "Orange County",
    zipCodes: ["92653", "92654"],
    distance: 22,
    population: 31415,
    landmarks: ["Laguna Hills Mall", "Aliso Viejo area"],
    neighborhoods: ["East Laguna Hills", "West Laguna Hills"],
    tier: 3,
    spanishName: "Laguna Hills",
    keywordModifiers: ["Laguna Hills Mall", "South County", "near Aliso Viejo"],
    localCompetitors: ["Laguna Hills Vision"]
  },
  {
    name: "Buena Park",
    slug: "buena-park",
    county: "Orange County",
    zipCodes: ["90620", "90621", "90622", "90624"],
    distance: 15,
    population: 84034,
    landmarks: ["Knott's Berry Farm", "Medieval Times", "Buena Park Mall"],
    neighborhoods: ["East Buena Park", "West Buena Park"],
    tier: 3,
    spanishName: "Buena Park",
    keywordModifiers: ["Knott's Berry Farm area", "Beach Blvd corridor"],
    localCompetitors: ["Buena Park Eye Center"]
  },
  {
    name: "Cypress",
    slug: "cypress",
    county: "Orange County",
    zipCodes: ["90630"],
    distance: 12,
    population: 50151,
    landmarks: ["Cypress College", "Los Alamitos Race Course area"],
    neighborhoods: ["North Cypress", "South Cypress"],
    tier: 3,
    spanishName: "Cypress",
    keywordModifiers: ["Cypress College area", "Los Alamitos border"],
    localCompetitors: ["Cypress Vision Care"]
  }
];

// Helper functions for generating city-specific content
export const getCityBySlug = (slug: string): CityData | undefined => {
  return citiesData.find(city => city.slug === slug);
};

export const getCitiesByTier = (tier: 1 | 2 | 3): CityData[] => {
  return citiesData.filter(city => city.tier === tier);
};

export const getTier1Cities = (): CityData[] => getCitiesByTier(1);
export const getTier2Cities = (): CityData[] => getCitiesByTier(2);
export const getTier3Cities = (): CityData[] => getCitiesByTier(3);

export const getAllCitySlugs = (): string[] => {
  return citiesData.map(city => city.slug);
};