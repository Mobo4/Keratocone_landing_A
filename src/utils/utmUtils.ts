
export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
}

export const getUTMParams = (): UTMParams => {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    utm_source: urlParams.get('utm_source') || undefined,
    utm_medium: urlParams.get('utm_medium') || undefined,
    utm_campaign: urlParams.get('utm_campaign') || undefined,
    utm_term: urlParams.get('utm_term') || undefined,
    utm_content: urlParams.get('utm_content') || undefined,
  };
};

export const getPageContext = (): { pageName: string; defaultVisitType: string; emailSubject: string } => {
  const path = window.location.pathname;
  const utmParams = getUTMParams();
  
  // Remove language prefix for matching
  const cleanPath = path.replace(/^\/es\//, '/').replace(/^\/es$/, '/');
  
  // Determine page context
  if (cleanPath.includes('/conditions/dry-eye')) {
    return {
      pageName: 'Dry Eye Treatment',
      defaultVisitType: 'dry-eye',
      emailSubject: 'Dry Eye Treatment Appointment Request'
    };
  } else if (cleanPath.includes('/conditions/keratoconus')) {
    return {
      pageName: 'Keratoconus Treatment',
      defaultVisitType: 'keratoconus',
      emailSubject: 'Keratoconus Consultation Appointment Request'
    };
  } else if (cleanPath.includes('/conditions/lasik')) {
    return {
      pageName: 'LASIK Consultation',
      defaultVisitType: 'lasik',
      emailSubject: 'LASIK Consultation Appointment Request'
    };
  } else if (cleanPath.includes('/conditions/cataract')) {
    return {
      pageName: 'Cataract Consultation',
      defaultVisitType: 'cataract',
      emailSubject: 'Cataract Consultation Appointment Request'
    };
  } else if (cleanPath.includes('/conditions/ortho-k')) {
    return {
      pageName: 'Ortho-K Consultation',
      defaultVisitType: 'ortho-k',
      emailSubject: 'Ortho-K Consultation Appointment Request'
    };
  } else if (cleanPath.includes('/conditions/headache-eye-fatigue')) {
    return {
      pageName: 'Headache & Eye Fatigue',
      defaultVisitType: 'headache-fatigue',
      emailSubject: 'Headache & Eye Fatigue Consultation Request'
    };
  } else if (cleanPath.includes('/eyewear')) {
    return {
      pageName: 'Eyewear Consultation',
      defaultVisitType: 'eyewear',
      emailSubject: 'Eyewear Consultation Appointment Request'
    };
  } else if (cleanPath.includes('/fashion')) {
    return {
      pageName: 'Designer Eyewear Consultation',
      defaultVisitType: 'designer-eyewear',
      emailSubject: 'Designer Eyewear Consultation Appointment Request'
    };
  } else if (cleanPath.includes('/about')) {
    return {
      pageName: 'About Us',
      defaultVisitType: 'comprehensive',
      emailSubject: 'General Appointment Request - About Page'
    };
  } else if (cleanPath.includes('/services')) {
    return {
      pageName: 'Services',
      defaultVisitType: 'comprehensive',
      emailSubject: 'Services Consultation Appointment Request'
    };
  } else if (cleanPath.includes('/contact')) {
    return {
      pageName: 'Contact Page',
      defaultVisitType: 'comprehensive',
      emailSubject: 'General Appointment Request'
    };
  }
  
  // Default for home page and other pages
  let subject = 'Appointment Request - Eyecare Center of OC';
  if (utmParams.utm_source) {
    subject = `Appointment Request from ${utmParams.utm_source} - Eyecare Center of OC`;
  }
  
  return {
    pageName: 'General',
    defaultVisitType: 'comprehensive',
    emailSubject: subject
  };
};

export const formatUTMForEmail = (utmParams: UTMParams): string => {
  const params = Object.entries(utmParams)
    .filter(([_, value]) => value)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');
    
  return params ? `\nREFERRAL SOURCE:\n${params}` : '';
};
