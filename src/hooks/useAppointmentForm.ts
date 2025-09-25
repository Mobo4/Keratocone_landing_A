
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useConfetti } from '@/hooks/use-confetti';
import { getUTMParams, getPageContext, formatUTMForEmail } from '@/utils/utmUtils';
import CSRFProtection from '@/utils/csrfProtection';
import { InputSanitizer } from '@/utils/inputSanitizer';
import { RateLimiter } from '@/utils/rateLimiter';
import { useAppointmentAnalytics } from '@/hooks/useAnalytics';

interface AppointmentFormData {
  fullName: string;
  dateOfBirth: string;
  phoneNumber: string;
  emailAddress: string;
  insuranceProvider: string;
  insuranceId: string;
  referringDoctor: string;
  preferredDays: string[];
  preferredTime: string;
  visitType: string;
  otherVisitType: string;
  contactMethod: string;
  contactTime: string;
  currentProblems: string;
  currentMedications: string;
  specialRequests: string;
}

export const useAppointmentForm = (onClose: () => void) => {
  const { fireSchoolPride } = useConfetti();
  const form = useForm<AppointmentFormData>();
  const { trackAppointmentStart, trackAppointmentComplete } = useAppointmentAnalytics();
  
  const [preferredDays, setPreferredDays] = useState<string[]>([]);
  const [pageContext, setPageContext] = useState(getPageContext());
  const [utmParams, setUtmParams] = useState(getUTMParams());
  const [csrfToken] = useState(() => CSRFProtection.initializeToken());

  useEffect(() => {
    if (pageContext.defaultVisitType) {
      form.setValue('visitType', pageContext.defaultVisitType);
    }
    // Track appointment form opened
    trackAppointmentStart(pageContext.pageName);
  }, [pageContext.defaultVisitType, pageContext.pageName, form, trackAppointmentStart]);

  const handleDayChange = (day: string, checked: boolean) => {
    if (checked) {
      setPreferredDays([...preferredDays, day]);
    } else {
      setPreferredDays(preferredDays.filter(d => d !== day));
    }
  };

  const createEmailBody = (data: AppointmentFormData) => {
    const utmInfo = formatUTMForEmail(utmParams);
    
    // Sanitize all form inputs
    const sanitizedData = {
      fullName: InputSanitizer.sanitizeInput(data.fullName),
      dateOfBirth: InputSanitizer.sanitizeInput(data.dateOfBirth),
      phoneNumber: InputSanitizer.sanitizeInput(data.phoneNumber),
      emailAddress: InputSanitizer.sanitizeInput(data.emailAddress),
      insuranceProvider: InputSanitizer.sanitizeInput(data.insuranceProvider),
      insuranceId: InputSanitizer.sanitizeInput(data.insuranceId),
      referringDoctor: InputSanitizer.sanitizeInput(data.referringDoctor),
      preferredTime: InputSanitizer.sanitizeInput(data.preferredTime),
      visitType: InputSanitizer.sanitizeInput(data.visitType),
      otherVisitType: InputSanitizer.sanitizeInput(data.otherVisitType),
      contactMethod: InputSanitizer.sanitizeInput(data.contactMethod),
      contactTime: InputSanitizer.sanitizeInput(data.contactTime),
      currentProblems: InputSanitizer.sanitizeText(data.currentProblems),
      currentMedications: InputSanitizer.sanitizeText(data.currentMedications),
      specialRequests: InputSanitizer.sanitizeText(data.specialRequests),
    };
    
    return `APPOINTMENT REQUEST FORM
Eyecare Center of Orange County

PATIENT INFORMATION:
Full Name: ${sanitizedData.fullName || '[Not provided]'}
Date of Birth: ${sanitizedData.dateOfBirth || '[Not provided]'}
Phone Number: ${sanitizedData.phoneNumber || '[Not provided]'}
Email Address: ${sanitizedData.emailAddress || '[Not provided]'}

INSURANCE & MEDICAL:
Insurance Provider: ${sanitizedData.insuranceProvider || '[Not provided]'}
Insurance ID Number: ${sanitizedData.insuranceId || '[Not provided]'}
Referring Doctor: ${sanitizedData.referringDoctor || '[Not provided]'}

APPOINTMENT PREFERENCES:
Preferred Days: ${preferredDays.length > 0 ? preferredDays.join(', ') : '[Not selected]'}
Preferred Time: ${sanitizedData.preferredTime || '[Not selected]'}

Type of Visit: ${sanitizedData.visitType || '[Not selected]'}${sanitizedData.visitType === 'Other' ? ` - ${sanitizedData.otherVisitType || ''}` : ''}

CONTACT PREFERENCES:
Best way to contact you: ${sanitizedData.contactMethod || '[Not selected]'}
Best time to contact you: ${sanitizedData.contactTime || '[Not selected]'}

ADDITIONAL INFORMATION:
Current Eye Problems: ${sanitizedData.currentProblems || '[Not provided]'}
Current Medications: ${sanitizedData.currentMedications || '[Not provided]'}
Special Requests: ${sanitizedData.specialRequests || '[Not provided]'}

REQUEST SOURCE:
Page: ${pageContext.pageName}
URL: ${window.location.href}${utmInfo}

OUR LOCATION:
Eyecare Center of Orange County
801 North Tustin Ave #404
Santa Ana, CA 92705
Phone: (714) 558-1182
Email: eyecarecenteroc@gmail.com

OFFICE HOURS:
Monday - Thursday: 9:00 AM - 6:00 PM
Friday: 9:00 AM - 5:00 PM
Sunday: Closed

We'll respond within 24 hours to confirm your appointment time.`;
  };

  const handleSubmit = (data: AppointmentFormData) => {
    // Check rate limiting
    if (!RateLimiter.checkLimit('appointment')) {
      alert('Too many requests. Please wait a moment before trying again.');
      return;
    }
    
    // Validate CSRF token
    if (!CSRFProtection.validateToken(csrfToken)) {
      alert('Security validation failed. Please refresh the page and try again.');
      return;
    }
    
    fireSchoolPride();
    
    // Track successful appointment request
    trackAppointmentComplete(data.visitType || 'General');
    
    const subject = encodeURIComponent(pageContext.emailSubject);
    const emailBody = createEmailBody(data);
    const mailtoLink = `mailto:eyecarecenteroc@gmail.com?subject=${subject}&body=${encodeURIComponent(emailBody)}`;
    
    setTimeout(() => {
      window.location.href = mailtoLink;
      CSRFProtection.clearToken();
      onClose();
    }, 1000);
  };

  return {
    form,
    preferredDays,
    pageContext,
    handleDayChange,
    handleSubmit
  };
};
