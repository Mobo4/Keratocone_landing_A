#!/usr/bin/env python3

import os
import re
from collections import Counter
import json

def extract_base_keywords():
    """Extract the massive base keyword set from SEO component"""
    seo_file = "/Users/alex/Documents/Documents - MacMiniM4/VSCode_Apps/bonakdar_net_Lovable/src/components/SEO.tsx"
    
    try:
        with open(seo_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find the English base keywords (longer string)
        # Look for the pattern that starts with "Orange County California, Santa Ana CA..."
        english_pattern = r'"Orange County California, Santa Ana CA[^"]*"'
        match = re.search(english_pattern, content)
        
        if match:
            keywords_string = match.group(0).strip('"')
            # Split by comma and clean up
            keywords = [kw.strip() for kw in keywords_string.split(',') if kw.strip()]
            return keywords
        else:
            return []
    except Exception as e:
        print(f"Error processing SEO component: {e}")
        return []

def extract_keywords_from_file(file_path):
    """Extract keywords from a React component file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Look for keywords in SEO component
        # Pattern: keywords="..."
        keyword_pattern = r'keywords="([^"]*)"'
        match = re.search(keyword_pattern, content)
        
        if match:
            keywords_string = match.group(1)
            # Split by comma and clean up
            keywords = [kw.strip() for kw in keywords_string.split(',') if kw.strip()]
            return keywords
        else:
            return []
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return []

def analyze_complete_keywords():
    """Analyze all keywords including base keywords from SEO component"""
    
    print("="*80)
    print("COMPLETE KEYWORD ANALYSIS FOR EYECARE CENTER OC")
    print("="*80)
    
    # First, get base keywords from SEO component
    print("Extracting base keywords from SEO component...")
    base_keywords = extract_base_keywords()
    print(f"Found {len(base_keywords)} base keywords in SEO component")
    
    # Base directory for condition pages
    conditions_dir = "/Users/alex/Documents/Documents - MacMiniM4/VSCode_Apps/bonakdar_net_Lovable/src/pages/conditions"
    
    # Get all condition files
    condition_files = []
    if os.path.exists(conditions_dir):
        for file in os.listdir(conditions_dir):
            if file.endswith('.tsx') and file != 'index.tsx':
                condition_files.append(os.path.join(conditions_dir, file))
    
    # Also check main pages directory for other condition-related pages
    main_pages_dir = "/Users/alex/Documents/Documents - MacMiniM4/VSCode_Apps/bonakdar_net_Lovable/src/pages"
    
    # Look for eye condition related pages in main directory
    for file in os.listdir(main_pages_dir):
        if file.endswith('.tsx') and any(term in file.lower() for term in ['dry', 'eye', 'cataract', 'lasik', 'ortho', 'keratoconus', 'headache']):
            condition_files.append(os.path.join(main_pages_dir, file))
    
    print(f"Found {len(condition_files)} condition-related files to analyze")
    
    # Extract page-specific keywords
    page_specific_keywords = []
    page_keywords = {}
    
    for file_path in condition_files:
        file_name = os.path.basename(file_path)
        keywords = extract_keywords_from_file(file_path)
        
        if keywords:
            page_keywords[file_name] = keywords
            page_specific_keywords.extend(keywords)
    
    # Combine all keywords
    all_keywords = base_keywords + page_specific_keywords
    
    # Count frequencies
    keyword_counts = Counter(all_keywords)
    
    print("\n" + "="*80)
    print("COMPREHENSIVE KEYWORD ANALYSIS RESULTS")
    print("="*80)
    
    print(f"Base keywords (from SEO component): {len(base_keywords)}")
    print(f"Page-specific keywords: {len(page_specific_keywords)}")
    print(f"Unique page-specific keywords: {len(set(page_specific_keywords))}")
    print(f"Total keywords across all pages: {len(all_keywords)}")
    print(f"Unique keywords total: {len(set(all_keywords))}")
    print(f"Pages with custom keywords: {len(page_keywords)}")
    
    # Calculate the total for each page (base + page-specific)
    total_per_page = len(base_keywords) + (len(page_specific_keywords) / len(page_keywords) if page_keywords else 0)
    print(f"Average total keywords per page: {total_per_page:.1f}")
    
    # Enhanced categorization
    categories = {
        'medical_conditions': [],
        'treatments_procedures': [],
        'geographic_locations': [],
        'symptoms_problems': [],
        'technologies_equipment': [],
        'insurance_business': [],
        'languages_accessibility': [],
        'specialties_services': [],
        'brands_products': [],
        'general_eye_care': []
    }
    
    # Define comprehensive category terms
    condition_terms = ['conjunctivitis', 'blepharitis', 'syndrome', 'dystrophy', 'keratitis', 'myopia', 'angles', 'disease', 'pterygium', 'detachment', 'hemorrhage', 'uveitis', 'iritis', 'erosion', 'cataracts', 'glaucoma', 'macular', 'retinopathy', 'keratoconus', 'astigmatism', 'presbyopia', 'amblyopia', 'strabismus', 'floaters', 'flashes']
    
    treatment_terms = ['treatment', 'therapy', 'drops', 'medication', 'surgery', 'management', 'relief', 'care', 'stabilizers', 'antihistamine', 'evaluation', 'consultation', 'LASIK', 'cross-linking', 'transplant', 'LipiFlow', 'IPL', 'BlephEx', 'punctal plugs', 'Intacs', 'Ortho-K']
    
    location_terms = ['orange county', 'santa ana', 'irvine', 'newport beach', 'tustin', 'costa mesa', 'california', 'ca', 'anaheim', 'garden grove', 'fountain valley', 'mission viejo', 'lake forest', 'laguna hills', 'yorba linda', 'placentia', 'fullerton', 'cypress', 'westminster', 'seal beach', 'villa park', 'riverside', 'disneyland', 'airport', 'spectrum', 'plaza']
    
    symptom_terms = ['itchy', 'red', 'watery', 'burning', 'pain', 'vision', 'blurry', 'dry', 'irritation', 'discomfort', 'swollen', 'headache', 'fatigue', 'strain', 'emergency', 'urgent']
    
    tech_terms = ['topography', 'tomography', 'OCT', 'visual field', 'retinal imaging', 'aberrometry', 'microscopy', 'angiography', 'electroretinography', 'potentials evoked', 'digital', 'technology', 'advanced', 'high definition']
    
    insurance_terms = ['VSP', 'EyeMed', 'Blue Cross', 'Aetna', 'Cigna', 'United Healthcare', 'Kaiser', 'Medicare', 'Medi-Cal', 'insurance', 'no insurance', 'payment plans', 'financing']
    
    language_terms = ['español', 'Spanish', 'bilingual', 'habla español', 'oculista', 'oftalmología', 'optometrista', 'examen visual', 'cuidado ocular']
    
    specialty_terms = ['pediatric', 'children', 'seniors', 'diabetic', 'specialty', 'contact lens', 'low vision', 'vision therapy', 'sports', 'occupational']
    
    brand_terms = ['Prada', 'Gucci', 'Tom Ford', 'Ray-Ban', 'Oakley', 'Versace', 'Dior', 'Chloe', 'Barton Perreira', 'designer']
    
    # Categorize all unique keywords
    for keyword in set(all_keywords):
        keyword_lower = keyword.lower()
        categorized = False
        
        if any(term in keyword_lower for term in condition_terms):
            categories['medical_conditions'].append(keyword)
            categorized = True
        if any(term in keyword_lower for term in treatment_terms):
            categories['treatments_procedures'].append(keyword)
            categorized = True
        if any(term in keyword_lower for term in location_terms):
            categories['geographic_locations'].append(keyword)
            categorized = True
        if any(term in keyword_lower for term in symptom_terms):
            categories['symptoms_problems'].append(keyword)
            categorized = True
        if any(term in keyword_lower for term in tech_terms):
            categories['technologies_equipment'].append(keyword)
            categorized = True
        if any(term in keyword_lower for term in insurance_terms):
            categories['insurance_business'].append(keyword)
            categorized = True
        if any(term in keyword_lower for term in language_terms):
            categories['languages_accessibility'].append(keyword)
            categorized = True
        if any(term in keyword_lower for term in specialty_terms):
            categories['specialties_services'].append(keyword)
            categorized = True
        if any(term in keyword_lower for term in brand_terms):
            categories['brands_products'].append(keyword)
            categorized = True
        
        if not categorized:
            categories['general_eye_care'].append(keyword)
    
    print("\n" + "="*80)
    print("KEYWORD BREAKDOWN BY CATEGORY")
    print("="*80)
    
    total_categorized = 0
    for category, keywords in categories.items():
        count = len(keywords)
        total_categorized += count
        print(f"{category.replace('_', ' ').title()}: {count:,} keywords")
        if keywords and count <= 10:
            print(f"  All keywords: {', '.join(keywords[:10])}")
        elif keywords:
            print(f"  Sample: {', '.join(keywords[:5])}... (+{count-5} more)")
    
    print(f"\nTotal categorized keywords: {total_categorized:,}")
    print(f"Total unique keywords: {len(set(all_keywords)):,}")
    
    print("\n" + "="*80)
    print("TOP 30 MOST FREQUENT KEYWORDS")
    print("="*80)
    for i, (keyword, count) in enumerate(keyword_counts.most_common(30), 1):
        print(f"{i:2d}. {count:3d}x: {keyword}")
    
    print("\n" + "="*80)
    print("GEOGRAPHIC COVERAGE ANALYSIS")
    print("="*80)
    
    geographic_keywords = categories['geographic_locations']
    cities = set()
    neighborhoods = set()
    landmarks = set()
    
    for geo_keyword in geographic_keywords:
        geo_lower = geo_keyword.lower()
        if any(term in geo_lower for term in ['hills', 'park', 'grove', 'valley', 'beach', 'mesa', 'ranch', 'heights', 'towne', 'coast', 'spectrum', 'plaza']):
            if 'hills' in geo_lower or 'park' in geo_lower or 'grove' in geo_lower or 'heights' in geo_lower:
                neighborhoods.add(geo_keyword)
            elif 'plaza' in geo_lower or 'spectrum' in geo_lower or 'airport' in geo_lower or 'disneyland' in geo_lower:
                landmarks.add(geo_keyword)
        elif any(term in geo_lower for term in ['irvine', 'santa ana', 'newport', 'tustin', 'anaheim', 'costa mesa', 'orange', 'riverside', 'garden grove', 'fountain valley']):
            cities.add(geo_keyword)
    
    print(f"Cities covered: {len(cities)}")
    print(f"Neighborhoods/Areas: {len(neighborhoods)}")
    print(f"Landmarks/Locations: {len(landmarks)}")
    
    print("\n" + "="*80)
    print("TREATMENT KEYWORD COVERAGE")
    print("="*80)
    
    treatment_keywords = categories['treatments_procedures']
    surgical = [kw for kw in treatment_keywords if any(term in kw.lower() for term in ['surgery', 'surgical', 'lasik', 'transplant', 'cross-linking', 'intacs'])]
    medical = [kw for kw in treatment_keywords if any(term in kw.lower() for term in ['drops', 'medication', 'therapy', 'treatment', 'management'])]
    diagnostic = [kw for kw in treatment_keywords if any(term in kw.lower() for term in ['exam', 'evaluation', 'consultation', 'screening', 'test'])]
    
    print(f"Surgical procedures: {len(surgical)}")
    print(f"Medical treatments: {len(medical)}")
    print(f"Diagnostic services: {len(diagnostic)}")
    
    # Save comprehensive results
    results = {
        'summary': {
            'total_pages_analyzed': len(condition_files),
            'pages_with_custom_keywords': len(page_keywords),
            'base_keywords_count': len(base_keywords),
            'page_specific_keywords_count': len(page_specific_keywords),
            'unique_page_keywords': len(set(page_specific_keywords)),
            'total_keywords_all_pages': len(all_keywords),
            'unique_keywords_total': len(set(all_keywords)),
            'average_total_per_page': total_per_page
        },
        'categories': {k: len(v) for k, v in categories.items()},
        'category_details': categories,
        'keyword_frequency': dict(keyword_counts.most_common(100)),  # Top 100
        'base_keywords': base_keywords,
        'page_keywords': page_keywords,
        'geographic_analysis': {
            'cities': len(cities),
            'neighborhoods': len(neighborhoods),
            'landmarks': len(landmarks)
        },
        'treatment_analysis': {
            'surgical': len(surgical),
            'medical': len(medical),
            'diagnostic': len(diagnostic)
        }
    }
    
    # Save to file
    output_file = "/Users/alex/Documents/Documents - MacMiniM4/VSCode_Apps/bonakdar_net_Lovable/complete_keyword_analysis_results.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    
    print(f"\n\nComplete analysis saved to: {output_file}")
    
    # Final summary
    print("\n" + "="*80)
    print("FINAL SUMMARY")
    print("="*80)
    print(f"🔍 TOTAL UNIQUE KEYWORDS: {len(set(all_keywords)):,}")
    print(f"📄 TOTAL KEYWORD INSTANCES: {len(all_keywords):,}")
    print(f"🏥 EYE CONDITION PAGES: {len([f for f in condition_files if 'conditions/' in f])}")
    print(f"🏢 LOCATION PAGES: {len([f for f in condition_files if 'Eye Doctor' in f])}")
    print(f"⚕️  OTHER MEDICAL PAGES: {len(condition_files) - len([f for f in condition_files if 'conditions/' in f or 'Eye Doctor' in f])}")
    print(f"🌍 GEOGRAPHIC COVERAGE: {len(categories['geographic_locations'])} location-based keywords")
    print(f"💊 TREATMENT OPTIONS: {len(categories['treatments_procedures'])} treatment keywords")
    print(f"🔬 MEDICAL CONDITIONS: {len(categories['medical_conditions'])} condition keywords")
    
    return results

if __name__ == "__main__":
    analyze_complete_keywords()