
// CSRF protection utility for forms
class CSRFProtection {
  private static readonly TOKEN_KEY = 'csrf_token';
  
  // Generate a random CSRF token
  static generateToken(): string {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
  }
  
  // Store CSRF token in session storage
  static storeToken(token: string): void {
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }
  
  // Get stored CSRF token
  static getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }
  
  // Validate CSRF token
  static validateToken(submittedToken: string): boolean {
    const storedToken = this.getToken();
    return storedToken === submittedToken && storedToken !== null;
  }
  
  // Generate and store a new token
  static initializeToken(): string {
    const token = this.generateToken();
    this.storeToken(token);
    return token;
  }
  
  // Clear token (call after successful form submission)
  static clearToken(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
  }
}

export default CSRFProtection;
