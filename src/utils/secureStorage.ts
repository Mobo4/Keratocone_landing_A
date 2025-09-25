
// Utility for secure client-side storage with encryption
class SecureStorage {
  private static readonly STORAGE_KEY = 'eyecare_secure_data';
  private static readonly ENCRYPTION_KEY = 'eyecare_encryption_salt';

  // Simple encryption using browser's built-in crypto (for client-side protection)
  private static async encrypt(text: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    
    // Generate a random salt
    const salt = crypto.getRandomValues(new Uint8Array(16));
    
    // Create a key from our static key + salt
    const keyMaterial = await crypto.subtle.importKey(
      'raw',
      encoder.encode(this.ENCRYPTION_KEY),
      { name: 'PBKDF2' },
      false,
      ['deriveBits', 'deriveKey']
    );
    
    const key = await crypto.subtle.deriveKey(
      {
        name: 'PBKDF2',
        salt: salt,
        iterations: 100000,
        hash: 'SHA-256',
      },
      keyMaterial,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt']
    );
    
    // Generate random IV
    const iv = crypto.getRandomValues(new Uint8Array(12));
    
    // Encrypt the data
    const encrypted = await crypto.subtle.encrypt(
      { name: 'AES-GCM', iv: iv },
      key,
      data
    );
    
    // Combine salt + iv + encrypted data
    const combined = new Uint8Array(salt.length + iv.length + encrypted.byteLength);
    combined.set(salt, 0);
    combined.set(iv, salt.length);
    combined.set(new Uint8Array(encrypted), salt.length + iv.length);
    
    // Convert to base64 for storage
    return btoa(String.fromCharCode(...combined));
  }
  
  private static async decrypt(encryptedData: string): Promise<string> {
    try {
      const encoder = new TextEncoder();
      const decoder = new TextDecoder();
      
      // Convert from base64
      const combined = new Uint8Array(
        atob(encryptedData).split('').map(char => char.charCodeAt(0))
      );
      
      // Extract salt, iv, and encrypted data
      const salt = combined.slice(0, 16);
      const iv = combined.slice(16, 28);
      const encrypted = combined.slice(28);
      
      // Recreate the key
      const keyMaterial = await crypto.subtle.importKey(
        'raw',
        encoder.encode(this.ENCRYPTION_KEY),
        { name: 'PBKDF2' },
        false,
        ['deriveBits', 'deriveKey']
      );
      
      const key = await crypto.subtle.deriveKey(
        {
          name: 'PBKDF2',
          salt: salt,
          iterations: 100000,
          hash: 'SHA-256',
        },
        keyMaterial,
        { name: 'AES-GCM', length: 256 },
        false,
        ['decrypt']
      );
      
      // Decrypt the data
      const decrypted = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: iv },
        key,
        encrypted
      );
      
      return decoder.decode(decrypted);
    } catch (error) {
      console.error('Decryption failed:', error);
      return '';
    }
  }
  
  static async setApiKey(apiKey: string): Promise<void> {
    const timestamp = Date.now();
    const data = JSON.stringify({
      apiKey,
      timestamp,
      expiresAt: timestamp + (7 * 24 * 60 * 60 * 1000) // 7 days
    });
    
    const encrypted = await this.encrypt(data);
    localStorage.setItem(this.STORAGE_KEY, encrypted);
  }
  
  static async getApiKey(): Promise<string | null> {
    const encrypted = localStorage.getItem(this.STORAGE_KEY);
    if (!encrypted) return null;
    
    const decrypted = await this.decrypt(encrypted);
    if (!decrypted) return null;
    
    try {
      const data = JSON.parse(decrypted);
      
      // Check if expired
      if (Date.now() > data.expiresAt) {
        this.clearApiKey();
        return null;
      }
      
      return data.apiKey;
    } catch (error) {
      console.error('Failed to parse stored API key data:', error);
      this.clearApiKey();
      return null;
    }
  }
  
  static clearApiKey(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
  
  static async isApiKeyExpired(): Promise<boolean> {
    const encrypted = localStorage.getItem(this.STORAGE_KEY);
    if (!encrypted) return true;
    
    const decrypted = await this.decrypt(encrypted);
    if (!decrypted) return true;
    
    try {
      const data = JSON.parse(decrypted);
      return Date.now() > data.expiresAt;
    } catch {
      return true;
    }
  }
}

export default SecureStorage;
