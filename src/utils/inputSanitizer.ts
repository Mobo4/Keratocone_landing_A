
// Input sanitization utility to prevent XSS attacks
export class InputSanitizer {
  // Basic HTML sanitization - removes potentially dangerous tags and attributes
  static sanitizeHtml(input: string): string {
    if (typeof input !== 'string') return '';
    
    // Remove script tags and their content
    let sanitized = input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    
    // Remove dangerous attributes
    sanitized = sanitized.replace(/\s*(on\w+|javascript:|data:)\s*=\s*["'][^"']*["']/gi, '');
    
    // Remove dangerous tags
    const dangerousTags = ['script', 'iframe', 'object', 'embed', 'form', 'input', 'button', 'textarea'];
    dangerousTags.forEach(tag => {
      const regex = new RegExp(`<\\/?${tag}\\b[^>]*>`, 'gi');
      sanitized = sanitized.replace(regex, '');
    });
    
    return sanitized.trim();
  }
  
  // Sanitize text input for forms
  static sanitizeInput(input: string): string {
    if (typeof input !== 'string') return '';
    
    return input
      .trim()
      .replace(/[<>]/g, '') // Remove angle brackets
      .slice(0, 1000); // Limit length to prevent DoS
  }
  
  // Legacy alias for backward compatibility
  static sanitizeText(input: string): string {
    if (typeof input !== 'string') return '';
    
    return input
      .trim()
      .replace(/[<>]/g, '') // Remove angle brackets
      .slice(0, 1000); // Limit length to prevent DoS
  }
  
  // Enhanced email validation with pattern matching
  static sanitizeEmail(email: string): string {
    if (typeof email !== 'string') return '';
    
    const sanitized = email
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9@._-]/g, '') // Only allow valid email characters
      .slice(0, 254); // RFC 5321 email length limit
    
    // Additional validation pattern
    const emailPattern = /^[a-z0-9]([a-z0-9._-]*[a-z0-9])?@[a-z0-9]([a-z0-9.-]*[a-z0-9])?\.[a-z]{2,}$/;
    
    return emailPattern.test(sanitized) ? sanitized : '';
  }
  
  // Validate email format without sanitization
  static validateEmail(email: string): boolean {
    if (typeof email !== 'string') return false;
    
    const emailPattern = /^[a-zA-Z0-9]([a-zA-Z0-9._-]*[a-zA-Z0-9])?@[a-zA-Z0-9]([a-zA-Z0-9.-]*[a-zA-Z0-9])?\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email.trim()) && email.length <= 254;
  }
  
  // Enhanced phone number validation with pattern matching
  static sanitizePhone(phone: string): string {
    if (typeof phone !== 'string') return '';
    
    const sanitized = phone
      .trim()
      .replace(/[^0-9+\-\s().]/g, '') // Only allow valid phone characters
      .slice(0, 20); // Reasonable phone number length
    
    // Additional validation for common phone formats
    const phonePattern = /^[\+]?[1-9]?[\d\s\-\(\)\.]{10,18}$/;
    
    return phonePattern.test(sanitized) ? sanitized : sanitized.replace(/[^\d]/g, '');
  }
  
  // Validate phone number format
  static validatePhone(phone: string): boolean {
    if (typeof phone !== 'string') return false;
    
    const cleaned = phone.replace(/[^\d+]/g, '');
    // Allow international format (+1234567890) or domestic (1234567890)
    const phonePattern = /^(\+?1?)?[2-9]\d{2}[2-9]\d{2}\d{4}$/;
    
    return phonePattern.test(cleaned) && cleaned.length >= 10 && cleaned.length <= 15;
  }
  
  // Format phone number for display
  static formatPhone(phone: string): string {
    const cleaned = phone.replace(/[^\d]/g, '');
    
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    } else if (cleaned.length === 11 && cleaned[0] === '1') {
      return `+1 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
    }
    
    return phone; // Return original if can't format
  }
  
  // Validate and sanitize URLs
  static sanitizeUrl(url: string): string {
    if (typeof url !== 'string') return '';
    
    try {
      const urlObj = new URL(url);
      // Only allow http and https protocols
      if (!['http:', 'https:'].includes(urlObj.protocol)) {
        return '';
      }
      return urlObj.toString();
    } catch {
      return '';
    }
  }
}
