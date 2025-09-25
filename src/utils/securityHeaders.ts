
// Security headers and validation utility
class SecurityHeaders {
  // Add security meta tags to document head
  static addSecurityHeaders(): void {
    const head = document.head;
    
    // Generate a nonce for inline scripts
    const nonce = this.generateNonce();
    window.__CSP_NONCE__ = nonce;
    
    // Content Security Policy with nonce-based inline script support and Google Maps + Vercel
    const cspMeta = document.createElement('meta');
    cspMeta.httpEquiv = 'Content-Security-Policy';
    cspMeta.content = `default-src 'self' *.vercel.app; script-src 'self' 'nonce-${nonce}' 'unsafe-inline' *.vercel.app https://www.googletagmanager.com https://connect.facebook.net https://analytics.ahrefs.com https://ipapi.co https://ws-api.runware.ai https://maps.googleapis.com https://maps.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: https: blob: https://maps.googleapis.com https://maps.gstatic.com *.googleusercontent.com; connect-src 'self' *.vercel.app https://ipapi.co https://ws-api.runware.ai wss://ws-api.runware.ai https://www.google-analytics.com https://analytics.google.com https://maps.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; frame-src 'self' *.vercel.app https://www.google.com; frame-ancestors 'self' *.vercel.app; base-uri 'self'; object-src 'none';`;
    head.appendChild(cspMeta);
    
    // X-Content-Type-Options
    const noSniffMeta = document.createElement('meta');
    noSniffMeta.httpEquiv = 'X-Content-Type-Options';
    noSniffMeta.content = 'nosniff';
    head.appendChild(noSniffMeta);
    
    // X-Frame-Options - Allow same origin for Vercel compatibility
    const frameOptionsMeta = document.createElement('meta');
    frameOptionsMeta.httpEquiv = 'X-Frame-Options';
    frameOptionsMeta.content = 'SAMEORIGIN';
    head.appendChild(frameOptionsMeta);
    
    // Referrer Policy
    const referrerMeta = document.createElement('meta');
    referrerMeta.name = 'referrer';
    referrerMeta.content = 'strict-origin-when-cross-origin';
    head.appendChild(referrerMeta);
    
    // Additional security headers
    this.addPermissionsPolicyHeader();
    this.addStrictTransportSecurityHeader();
  }
  
  // Generate cryptographically secure nonce for CSP
  static generateNonce(): string {
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);
    return btoa(String.fromCharCode(...array)).replace(/[+/=]/g, '');
  }
  
  // Add Permissions Policy header
  static addPermissionsPolicyHeader(): void {
    const permissionsMeta = document.createElement('meta');
    permissionsMeta.httpEquiv = 'Permissions-Policy';
    permissionsMeta.content = 'geolocation=(), microphone=(), camera=(), payment=(), usb=(), magnetometer=(), gyroscope=(), speaker=()';
    document.head.appendChild(permissionsMeta);
  }
  
  // Add Strict Transport Security header
  static addStrictTransportSecurityHeader(): void {
    const stsMeta = document.createElement('meta');
    stsMeta.httpEquiv = 'Strict-Transport-Security';
    stsMeta.content = 'max-age=31536000; includeSubDomains; preload';
    document.head.appendChild(stsMeta);
  }
  
  // Check if HTTPS is being used
  static enforceHTTPS(): void {
    if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
      console.warn('Security Warning: Site should be served over HTTPS');
    }
  }
  
  // Validate that we're on the expected domain
  static validateDomain(allowedDomains: string[]): boolean {
    const currentDomain = window.location.hostname;
    return allowedDomains.some(domain => 
      currentDomain === domain || currentDomain.endsWith('.' + domain)
    );
  }
}

export default SecurityHeaders;
