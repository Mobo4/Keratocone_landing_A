#!/usr/bin/env python3

import os
import re
from collections import Counter
import json

def extract_all_base_keywords():
    """Extract both English and Spanish base keyword sets from SEO component"""
    seo_file = "/Users/alex/Documents/Documents - MacMiniM4/VSCode_Apps/bonakdar_net_Lovable/src/components/SEO.tsx"
    
    try:
        with open(seo_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract the two massive keyword strings
        # The keywords are in a ternary operator: language === 'es' ? "spanish keywords" : "english keywords"
        
        # Find the pattern starting from the ternary
        pattern = r'language === \'es\' \?\s*"([^"]*?)"\s*:\s*"([^"]*?)"'
        match = re.search(pattern, content, re.DOTALL)
        
        if match:
            spanish_keywords_str = match.group(1)
            english_keywords_str = match.group(2)
            
            # Split by comma and clean up
            spanish_keywords = [kw.strip() for kw in spanish_keywords_str.split(',') if kw.strip()]
            english_keywords = [kw.strip() for kw in english_keywords_str.split(',') if kw.strip()]
            
            return spanish_keywords, english_keywords
        else:
            print("Could not find keyword strings in SEO component")
            return [], []
    except Exception as e:
        print(f"Error processing SEO component: {e}")
        return [], []

def extract_keywords_from_file(file_path):
    """Extract keywords from a React component file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Look for keywords in SEO component
        keyword_pattern = r'keywords="([^"]*)"'
        match = re.search(keyword_pattern, content)
        
        if match:
            keywords_string = match.group(1)
            keywords = [kw.strip() for kw in keywords_string.split(',') if kw.strip()]
            return keywords
        else:
            return []
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return []

def analyze_final_keyword_count():
    """Final comprehensive keyword analysis"""
    
    print("="*100)
    print("FINAL COMPREHENSIVE KEYWORD COUNT - EYECARE CENTER OC")
    print("="*100)
    
    # Extract base keywords
    print("Extracting base keywords from SEO component...")
    spanish_base, english_base = extract_all_base_keywords()
    
    print(f"Spanish base keywords: {len(spanish_base)}")
    print(f"English base keywords: {len(english_base)}")
    
    # Combine both language sets
    all_base_keywords = spanish_base + english_base
    unique_base_keywords = list(set(all_base_keywords))
    
    print(f"Total base keywords (both languages): {len(all_base_keywords)}")
    print(f"Unique base keywords: {len(unique_base_keywords)}")
    
    # Get condition pages
    conditions_dir = "/Users/alex/Documents/Documents - MacMiniM4/VSCode_Apps/bonakdar_net_Lovable/src/pages/conditions"
    main_pages_dir = "/Users/alex/Documents/Documents - MacMiniM4/VSCode_Apps/bonakdar_net_Lovable/src/pages"
    
    condition_files = []
    if os.path.exists(conditions_dir):
        for file in os.listdir(conditions_dir):
            if file.endswith('.tsx') and file != 'index.tsx':
                condition_files.append(os.path.join(conditions_dir, file))
    
    # Eye condition related pages in main directory
    for file in os.listdir(main_pages_dir):
        if file.endswith('.tsx') and any(term in file.lower() for term in ['dry', 'eye', 'cataract', 'lasik', 'ortho', 'keratoconus', 'headache']):
            condition_files.append(os.path.join(main_pages_dir, file))
    
    # Extract page-specific keywords
    page_keywords = {}
    all_page_keywords = []
    
    for file_path in condition_files:
        file_name = os.path.basename(file_path)
        keywords = extract_keywords_from_file(file_path)
        if keywords:
            page_keywords[file_name] = keywords
            all_page_keywords.extend(keywords)
    
    unique_page_keywords = list(set(all_page_keywords))
    
    # Calculate totals
    all_keywords_combined = all_base_keywords + all_page_keywords
    unique_keywords_total = list(set(all_keywords_combined))
    
    print("\n" + "="*100)
    print("COMPREHENSIVE KEYWORD COUNT RESULTS")
    print("="*100)
    
    print(f"📊 BASE KEYWORDS:")
    print(f"   - Spanish base keywords: {len(spanish_base):,}")
    print(f"   - English base keywords: {len(english_base):,}")
    print(f"   - Total base keywords: {len(all_base_keywords):,}")
    print(f"   - Unique base keywords: {len(unique_base_keywords):,}")
    
    print(f"\n📄 PAGE-SPECIFIC KEYWORDS:")
    print(f"   - Pages analyzed: {len(condition_files)}")
    print(f"   - Pages with keywords: {len(page_keywords)}")
    print(f"   - Total page keywords: {len(all_page_keywords):,}")
    print(f"   - Unique page keywords: {len(unique_page_keywords):,}")
    
    print(f"\n🎯 FINAL TOTALS:")
    print(f"   - TOTAL KEYWORDS (all instances): {len(all_keywords_combined):,}")
    print(f"   - UNIQUE KEYWORDS: {len(unique_keywords_total):,}")
    
    # Calculate per-page totals (each page gets base + its specific keywords)
    total_keywords_per_page = []
    for page, specific_keywords in page_keywords.items():
        page_total = len(unique_base_keywords) + len(specific_keywords)
        total_keywords_per_page.append(page_total)
    
    # Pages without specific keywords still get all base keywords
    pages_without_keywords = len(condition_files) - len(page_keywords)
    for _ in range(pages_without_keywords):
        total_keywords_per_page.append(len(unique_base_keywords))
    
    print(f"\n📈 PER-PAGE ANALYSIS:")
    print(f"   - Average keywords per page: {sum(total_keywords_per_page)/len(total_keywords_per_page):.1f}")
    print(f"   - Maximum keywords on a page: {max(total_keywords_per_page)}")
    print(f"   - Minimum keywords on a page: {min(total_keywords_per_page)}")
    
    # Detailed breakdown by category (enhanced)
    categories = {
        'geographic_locations': [],
        'eye_conditions': [],
        'treatments_procedures': [],
        'symptoms': [],
        'insurance_financial': [],
        'technology_equipment': [],
        'languages_cultural': [],
        'business_services': [],
        'brands_products': [],
        'demographics': [],
        'other': []
    }
    
    # Enhanced categorization terms
    geo_terms = ['orange county', 'santa ana', 'irvine', 'newport', 'tustin', 'costa mesa', 'anaheim', 'riverside', 'huntington', 'garden grove', 'fountain valley', 'mission viejo', 'lake forest', 'laguna hills', 'yorba linda', 'placentia', 'fullerton', 'buena park', 'cypress', 'stanton', 'westminster', 'seal beach', 'los alamitos', 'villa park', 'california', 'ca', 'disneyland', 'spectrum', 'plaza', 'airport', 'mall']
    
    condition_terms = ['conjunctivitis', 'blepharitis', 'syndrome', 'dystrophy', 'keratitis', 'myopia', 'angles', 'disease', 'pterygium', 'detachment', 'hemorrhage', 'uveitis', 'iritis', 'erosion', 'cataracts', 'glaucoma', 'macular', 'retinopathy', 'keratoconus', 'astigmatism', 'presbyopia', 'amblyopia', 'strabismus', 'floaters', 'flashes', 'dry eye', 'allergies', 'diabetic', 'hypertension']
    
    treatment_terms = ['treatment', 'therapy', 'surgery', 'consultation', 'management', 'care', 'drops', 'medication', 'lasik', 'cross-linking', 'transplant', 'ipl', 'lipiflow', 'blephen', 'intacs', 'ortho-k', 'scleral', 'punctal', 'serum']
    
    symptom_terms = ['itchy', 'red', 'watery', 'burning', 'pain', 'vision', 'blurry', 'dry', 'irritation', 'strain', 'headache', 'fatigue', 'emergency', 'urgent']
    
    insurance_terms = ['vsp', 'eyemed', 'blue cross', 'aetna', 'cigna', 'united healthcare', 'kaiser', 'medicare', 'medi-cal', 'insurance', 'payment', 'financing', 'seguro', 'planes pago']
    
    tech_terms = ['topography', 'tomography', 'oct', 'visual field', 'imaging', 'aberrometry', 'microscopy', 'angiography', 'electroretinography', 'digital', 'technology', 'advanced', 'automated']
    
    language_terms = ['español', 'spanish', 'bilingual', 'oculista', 'oftalmología', 'optometrista', 'examen', 'cuidado', 'visión', 'tratamiento']
    
    business_terms = ['appointment', 'exam', 'evaluation', 'center', 'clinic', 'doctor', 'optometrist', 'optometry', 'eye care', 'vision care', 'available', 'hours', 'weekend', 'evening', 'same day']
    
    brand_terms = ['prada', 'gucci', 'tom ford', 'ray-ban', 'oakley', 'versace', 'dior', 'chloe', 'barton perreira', 'designer']
    
    demographic_terms = ['children', 'kids', 'pediatric', 'seniors', 'elderly', 'family', 'diabetic', 'whole family', 'niños', 'personas mayores']
    
    # Categorize all unique keywords
    for keyword in unique_keywords_total:
        keyword_lower = keyword.lower()
        categorized = False
        
        if any(term in keyword_lower for term in geo_terms):
            categories['geographic_locations'].append(keyword)
            categorized = True
        if any(term in keyword_lower for term in condition_terms):
            categories['eye_conditions'].append(keyword)
            categorized = True
        if any(term in keyword_lower for term in treatment_terms):
            categories['treatments_procedures'].append(keyword)
            categorized = True
        if any(term in keyword_lower for term in symptom_terms):
            categories['symptoms'].append(keyword)
            categorized = True
        if any(term in keyword_lower for term in insurance_terms):
            categories['insurance_financial'].append(keyword)
            categorized = True
        if any(term in keyword_lower for term in tech_terms):
            categories['technology_equipment'].append(keyword)
            categorized = True
        if any(term in keyword_lower for term in language_terms):
            categories['languages_cultural'].append(keyword)
            categorized = True
        if any(term in keyword_lower for term in business_terms):
            categories['business_services'].append(keyword)
            categorized = True
        if any(term in keyword_lower for term in brand_terms):
            categories['brands_products'].append(keyword)
            categorized = True
        if any(term in keyword_lower for term in demographic_terms):
            categories['demographics'].append(keyword)
            categorized = True
        
        if not categorized:
            categories['other'].append(keyword)
    
    print(f"\n📋 KEYWORD BREAKDOWN BY CATEGORY:")
    for category, keywords in categories.items():
        print(f"   - {category.replace('_', ' ').title()}: {len(keywords):,} keywords")
    
    # Top keyword frequencies
    keyword_counter = Counter(all_keywords_combined)
    print(f"\n🔝 TOP 10 MOST FREQUENT KEYWORDS:")
    for i, (keyword, count) in enumerate(keyword_counter.most_common(10), 1):
        print(f"   {i:2d}. {count:3d}x: {keyword}")
    
    # Save complete results
    results = {
        'final_counts': {
            'spanish_base_keywords': len(spanish_base),
            'english_base_keywords': len(english_base),
            'total_base_keywords': len(all_base_keywords),
            'unique_base_keywords': len(unique_base_keywords),
            'total_page_keywords': len(all_page_keywords),
            'unique_page_keywords': len(unique_page_keywords),
            'total_all_keywords': len(all_keywords_combined),
            'unique_all_keywords': len(unique_keywords_total),
            'pages_analyzed': len(condition_files),
            'pages_with_keywords': len(page_keywords)
        },
        'per_page_stats': {
            'average_keywords_per_page': sum(total_keywords_per_page)/len(total_keywords_per_page),
            'max_keywords_per_page': max(total_keywords_per_page),
            'min_keywords_per_page': min(total_keywords_per_page)
        },
        'categories': {k: len(v) for k, v in categories.items()},
        'top_keywords': dict(keyword_counter.most_common(20)),
        'spanish_base_keywords': spanish_base,
        'english_base_keywords': english_base,
        'page_specific_keywords': page_keywords
    }
    
    output_file = "/Users/alex/Documents/Documents - MacMiniM4/VSCode_Apps/bonakdar_net_Lovable/final_keyword_count_results.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    
    print(f"\n💾 Complete analysis saved to: {output_file}")
    
    # Final eye-catching summary
    print("\n" + "="*100)
    print("🎯 FINAL KEYWORD COUNT SUMMARY")
    print("="*100)
    print(f"🌟 TOTAL UNIQUE KEYWORDS ACROSS ALL EYE CONDITION PAGES: {len(unique_keywords_total):,}")
    print(f"📊 TOTAL KEYWORD INSTANCES: {len(all_keywords_combined):,}")
    print(f"👁️  EYE CONDITION PAGES ANALYZED: {len(condition_files)}")
    print(f"🗺️  GEOGRAPHIC KEYWORDS: {len(categories['geographic_locations']):,}")
    print(f"⚕️  MEDICAL CONDITION KEYWORDS: {len(categories['eye_conditions']):,}")
    print(f"💊 TREATMENT KEYWORDS: {len(categories['treatments_procedures']):,}")
    print(f"🌍 BILINGUAL COVERAGE: {len(categories['languages_cultural']):,} multi-language keywords")
    print("="*100)

if __name__ == "__main__":
    analyze_final_keyword_count()