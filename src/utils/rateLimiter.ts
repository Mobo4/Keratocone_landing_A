
// Enhanced rate limiting utility with exponential backoff and IP tracking
export class RateLimiter {
  private static attempts: Map<string, number[]> = new Map();
  private static ipAttempts: Map<string, number[]> = new Map();
  private static backoffPenalties: Map<string, number> = new Map();
  
  static canMakeRequest(identifier: string, maxAttempts: number = 5, windowMs: number = 60000): boolean {
    const now = Date.now();
    
    // Check for exponential backoff penalty
    const penalty = this.backoffPenalties.get(identifier) || 0;
    if (penalty > now) {
      return false;
    }
    
    const windowStart = now - windowMs;
    
    // Get existing attempts for this identifier
    const existing = this.attempts.get(identifier) || [];
    
    // Filter out attempts outside the time window
    const recentAttempts = existing.filter(timestamp => timestamp > windowStart);
    
    // Check if under the limit
    if (recentAttempts.length >= maxAttempts) {
      // Apply exponential backoff: 2^(attempts-limit) * base delay
      const excessAttempts = recentAttempts.length - maxAttempts + 1;
      const backoffMs = Math.min(Math.pow(2, excessAttempts) * 1000, 300000); // Max 5 minutes
      this.backoffPenalties.set(identifier, now + backoffMs);
      return false;
    }
    
    // Add current attempt
    recentAttempts.push(now);
    this.attempts.set(identifier, recentAttempts);
    
    return true;
  }
  
  // Enhanced IP-based rate limiting
  static canMakeRequestByIP(ip: string, maxAttempts: number = 10, windowMs: number = 60000): boolean {
    const now = Date.now();
    const windowStart = now - windowMs;
    
    const existing = this.ipAttempts.get(ip) || [];
    const recentAttempts = existing.filter(timestamp => timestamp > windowStart);
    
    if (recentAttempts.length >= maxAttempts) {
      return false;
    }
    
    recentAttempts.push(now);
    this.ipAttempts.set(ip, recentAttempts);
    
    return true;
  }
  
  // Check if request can be made (alias for backward compatibility)
  static checkLimit(identifier: string, maxAttempts: number = 5, windowMs: number = 60000): boolean {
    return this.canMakeRequest(identifier, maxAttempts, windowMs);
  }
  
  static getRemainingTime(identifier: string, windowMs: number = 60000): number {
    const attempts = this.attempts.get(identifier) || [];
    if (attempts.length === 0) return 0;
    
    const oldestAttempt = Math.min(...attempts);
    const timeElapsed = Date.now() - oldestAttempt;
    return Math.max(0, windowMs - timeElapsed);
  }
  
  static reset(identifier: string): void {
    this.attempts.delete(identifier);
    this.backoffPenalties.delete(identifier);
  }
  
  // Reset IP-based attempts
  static resetIP(ip: string): void {
    this.ipAttempts.delete(ip);
  }
  
  // Get current backoff time remaining
  static getBackoffTime(identifier: string): number {
    const penalty = this.backoffPenalties.get(identifier) || 0;
    return Math.max(0, penalty - Date.now());
  }
  
  // Check if identifier is currently in backoff
  static isInBackoff(identifier: string): boolean {
    const penalty = this.backoffPenalties.get(identifier) || 0;
    return penalty > Date.now();
  }
}
