
// Centralized security utilities
export class SecurityUtils {
  // Generate a secure random string
  static generateSecureToken(length: number = 32): string {
    const array = new Uint8Array(length);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }
  
  // Check if running in secure context (HTTPS)
  static isSecureContext(): boolean {
    return window.isSecureContext;
  }
  
  // Log security events without exposing sensitive data
  static logSecurityEvent(event: string, details?: Record<string, unknown>): void {
    const sanitizedDetails = details ? Object.keys(details).reduce((acc, key) => {
      // Never log sensitive fields
      if (['password', 'token', 'apiKey', 'secret'].some(sensitive => 
        key.toLowerCase().includes(sensitive))) {
        acc[key] = '[REDACTED]';
      } else {
        acc[key] = details[key];
      }
      return acc;
    }, {} as Record<string, unknown>) : {};
    
    // Security events logged only in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[SECURITY] ${event}`, sanitizedDetails);
    }
  }
  
  // Validate Content Security Policy compliance
  static validateCSP(): void {
    if (!this.isSecureContext()) {
      if (process.env.NODE_ENV === 'development') {
      console.warn('[SECURITY] Application is not running in a secure context (HTTPS)');
    }
    }
    
    // Check for dangerous inline scripts (development warning)
    const inlineScripts = document.querySelectorAll('script:not([src])');
    if (inlineScripts.length > 0) {
    if (process.env.NODE_ENV === 'development') {
        console.warn(`[SECURITY] Found ${inlineScripts.length} inline scripts. Consider moving to external files for better CSP compliance.`);
      }
    }
  }
  
  // Check for security headers (client-side detection)
  static checkSecurityHeaders(): void {
    // This would typically be done server-side, but we can check what's visible client-side
    const meta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    if (!meta) {
    if (process.env.NODE_ENV === 'development') {
        console.warn('[SECURITY] No Content-Security-Policy meta tag found. Consider adding security headers.');
      }
    }
  }
}

// Initialize security checks in development
if (process.env.NODE_ENV === 'development') {
  SecurityUtils.validateCSP();
  SecurityUtils.checkSecurityHeaders();
  SecurityUtils.logSecurityEvent('Security utilities initialized');
}
