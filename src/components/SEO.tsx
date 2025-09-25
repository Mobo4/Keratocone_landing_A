
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLanguage } from '@/contexts/LanguageContext';
import { generateLocalBusinessSchema, combineSchemas } from '@/utils/schemaMarkupGenerator';

interface HreflangLink {
  lang: string;
  url: string;
}
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string | string[];
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  structuredData?: Record<string, unknown>;
  pageType?: 'home' | 'about' | 'services' | 'treatment' | 'eyewear' | 'contact';
  schemaData?: Record<string, unknown> | any[];
  noIndex?: boolean;
  hreflang?: HreflangLink[];
  googleVerification?: string;
  bingVerification?: string;
  yandexVerification?: string;
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogType = "website",
  ogImage = "https://eyecarecenteroc.com/images/og-image.jpg",
  structuredData,
  pageType = 'home',
  schemaData,
  hreflang,
  googleVerification,
  bingVerification,
  yandexVerification,
  children
}) => {
  const { language } = useLanguage();
  
  // Build proper hreflang links with x-default
  const buildHreflangLinks = (): HreflangLink[] => {
    if (hreflang) return hreflang;
    
    if (!canonicalUrl) return [];
    
    const url = new URL(canonicalUrl);
    const baseDomain = `${url.protocol}//${url.host}`;
    const path = url.pathname.replace(/^\/es/, '');
    
    return [
      { lang: "en", url: `${baseDomain}${path}` },
      { lang: "es", url: `${baseDomain}/es${path === '/' ? '' : path}` },
      { lang: "x-default", url: `${baseDomain}${path}` }
    ];
  };
  
  const hreflangLinks = buildHreflangLinks();
  
  // Enhanced local SEO keywords for California/Orange County
  const getLocalKeywords = (): string => {
    const baseLocalKeywords = language === 'es' ? 
      "Orange County California, Santa Ana CA, Irvine optometrista, Newport Beach oculista, Tustin examen visual, Costa Mesa cuidado ocular, Huntington Beach doctor ojos, Anaheim vision, Garden Grove oftalmología, Fountain Valley optometría, Mission Viejo ojos, Lake Forest vision, Laguna Hills optometrista, Aliso Viejo oculista, Yorba Linda examen ocular, Placentia cuidado visual, Fullerton optometría, Buena Park ojos, La Habra Heights vision, Cypress optometrista, Stanton oculista, Westminster examen ocular, Seal Beach cuidado ojos, Los Alamitos optometría, Rossmoor vision, Villa Park ojos, North Tustin optometrista, East Irvine oculista, South Coast Metro vision, John Wayne Airport área, UC Irvine cerca, Disneyland área, Knott's Berry Farm cerca, Crystal Cathedral área, South Coast Plaza cerca, Fashion Island Newport, Irvine Spectrum área, The District Tustin, MainPlace Mall Santa Ana, Seguro médico aceptado, VSP, EyeMed, Blue Cross, Aetna, Cigna, United Healthcare, Kaiser Permanente, urgencia ocular, emergencia ojos, mismo día cita, fin de semana disponible, noches disponible, Medicare aceptado, Medi-Cal aceptado, sin seguro opciones, planes pago, financiamiento disponible, habla español, bilingüe, familia completa, niños bienvenidos, personas mayores especialidad, diabéticos cuidado, hipertensión ocular, glaucoma tratamiento, retinopatía diabética, degeneración macular, cataratas cirugía, LASIK consulta, córnea trasplante, ojo seco severo, síndrome Sjögren, blefaritis crónica, queratocono avanzado, lentes contacto especialidad, Ortho-K niños, miopía control, astigmatismo irregular, presbicia soluciones, bifocales progresivos, lentes sol prescripción, gafas deportivas, lentes trabajo, protección blue light, anteojos lectura, lentes transición, anti-reflejo coating, lentes alta definición, marcos diseñador, Prada, Gucci, Tom Ford, Ray-Ban, Oakley, Versace, Dior, Chloe, Barton Perreira, tecnología avanzada, topografía corneal, tomografía coherencia óptica, campo visual automated, retinografía digital, medición presión ocular, paquimetría corneal, aberrometría, microscopía especular, angiografía fluoresceína, electrorretinografía, potenciales evocados visuales, terapia IPL, LipiFlow treatment, BlephEx limpieza, punctal plugs, suero autólogo, lentes esclerales, cross-linking corneal, Intacs implantes, terapia visual, ejercicios oculares, coordinación ojo-mano, procesamiento visual, dislexia visual, estrabismo treatment, ambliopía therapy, prismas correctivos, baja visión aids, lupas electrónicas, telescopios, filtros especiales, entrenamiento magnificación, rehabilitación visual" :
      "Orange County California, Santa Ana CA, Irvine optometrist, Newport Beach eye doctor, Tustin vision care, Costa Mesa eye exam, Huntington Beach optometry, Anaheim vision center, Garden Grove eye care, Fountain Valley optometrist, Mission Viejo eye doctor, Lake Forest vision, Laguna Hills optometry, Aliso Viejo eye care, Yorba Linda eye exam, Placentia vision care, Fullerton optometry, Buena Park eye doctor, La Habra Heights vision, Cypress optometrist, Stanton eye care, Westminster eye exam, Seal Beach vision, Los Alamitos optometry, Rossmoor eye doctor, Villa Park vision, North Tustin optometrist, East Irvine eye care, South Coast Metro vision, John Wayne Airport area, UC Irvine nearby, Disneyland area, Knott's Berry Farm nearby, Crystal Cathedral area, South Coast Plaza nearby, Fashion Island Newport, Irvine Spectrum area, The District Tustin, MainPlace Mall Santa Ana, insurance accepted, VSP, EyeMed, Blue Cross, Aetna, Cigna, United Healthcare, Kaiser Permanente, eye emergency, urgent eye care, same day appointment, weekend available, evening hours, Medicare accepted, Medi-Cal accepted, no insurance options, payment plans, financing available, Spanish speaking, bilingual, whole family, children welcome, seniors specialty, diabetic eye care, ocular hypertension, glaucoma treatment, diabetic retinopathy, macular degeneration, cataract surgery, LASIK consultation, corneal transplant, severe dry eye, Sjögren's syndrome, chronic blepharitis, advanced keratoconus, specialty contact lenses, Ortho-K children, myopia control, irregular astigmatism, presbyopia solutions, progressive bifocals, prescription sunglasses, sports eyewear, computer glasses, blue light protection, reading glasses, transition lenses, anti-reflective coating, high definition lenses, designer frames, Prada, Gucci, Tom Ford, Ray-Ban, Oakley, Versace, Dior, Chloe, Barton Perreira, advanced technology, corneal topography, optical coherence tomography, automated visual field, digital retinal imaging, intraocular pressure measurement, corneal pachymetry, aberrometry, specular microscopy, fluorescein angiography, electroretinography, visual evoked potentials, IPL therapy, LipiFlow treatment, BlephEx cleaning, punctal plugs, autologous serum, scleral lenses, corneal cross-linking, Intacs implants, vision therapy, eye exercises, hand-eye coordination, visual processing, visual dyslexia, strabismus treatment, amblyopia therapy, corrective prisms, low vision aids, electronic magnifiers, telescopes, special filters, magnification training, visual rehabilitation";
    
    return keywords ? `${keywords}, ${baseLocalKeywords}` : baseLocalKeywords;
  };
  
  const finalKeywords = Array.isArray(keywords) ? `${keywords.join(', ')}, ${getLocalKeywords()}` : getLocalKeywords();
  // Generate enhanced structured data using our schema generator
  const generateSchemas = () => {
    // If custom structured data is provided, use it directly
    if (structuredData) {
      return JSON.stringify(structuredData);
    }
    
    // Generate schemas based on page type
    const url = canonicalUrl || "https://eyecarecenteroc.com/";
    
    // Generate appropriate schemas based on page type
    const schemas = [generateLocalBusinessSchema(language)];
    
    // Add breadcrumb schema
    const breadcrumbItems = [{ name: 'Home', url: 'https://eyecarecenteroc.com/' }];
    
    if (pageType !== 'home' && title) {
      breadcrumbItems.push({ name: title, url });
    }
    
    // If additional schema data is provided, use it for more specific schemas
    if (schemaData) {
      // Add schemas from schemaData based on page type
      // This would use our other generator functions based on needs
    }
    
    return combineSchemas(schemas);
  };
  
  // Generate the schema JSON
  const schemaJson = generateSchemas();

  return (
    <Helmet>
      {/* Basic SEO tags */}
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Search engine verification tags */}
      {googleVerification && <meta name="google-site-verification" content={googleVerification} />}
      {bingVerification && <meta name="msvalidate.01" content={bingVerification} />}
      {yandexVerification && <meta name="yandex-verification" content={yandexVerification} />}
      
      {/* Enhanced robots meta */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Geographic targeting */}
      <meta name="geo.region" content="US-CA" />
      <meta name="geo.placename" content="Orange County, California" />
      <meta name="geo.position" content="33.7455;-117.8677" />
      <meta name="ICBM" content="33.7455, -117.8677" />
      <meta name="locality" content="Santa Ana" />
      <meta name="region" content="California" />
      <meta name="country" content="United States" />
      
      {/* Enhanced Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Eyecare Center of Orange County" />
      <meta property="og:locale" content={language === 'en' ? 'en_US' : 'es_ES'} />
      <meta property="og:locale:alternate" content={language === 'en' ? 'es_ES' : 'en_US'} />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Enhanced hreflang attributes */}
      {hreflangLinks.map((link) => (
        <link 
          key={link.lang} 
          rel="alternate" 
          hrefLang={link.lang} 
          href={link.url} 
        />
      ))}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {schemaJson}
      </script>
      
      {/* Additional meta tags for better SEO */}
      <meta name="author" content="Dr. Alexander Bonakdar, Eyecare Center of Orange County" />
      <meta name="copyright" content="© 2024 Eyecare Center of Orange County" />
      <meta name="revisit-after" content="7 days" />
      <meta name="language" content={language === 'en' ? 'English' : 'Spanish'} />
      
      {children}
    </Helmet>
  );
};

export default SEO;
