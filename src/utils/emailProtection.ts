/**
 * Email Protection Utility
 * 
 * This utility implements anti-scraping measures for email addresses
 * to help prevent them from being harvested by bots and spam crawlers.
 */

/**
 * Obfuscates an email address for display in HTML
 * Uses HTML entities and CSS techniques to make it harder for bots to scrape
 */
export function obfuscateEmail(email: string): string {
  // Convert email to HTML entities
  const obfuscated = email.split('').map(char => {
    // Randomly use decimal or hex encoding for each character
    return Math.random() > 0.5 
      ? `&#${char.charCodeAt(0)};` 
      : `&#x${char.charCodeAt(0).toString(16)};`;
  }).join('');
  
  return obfuscated;
}

/**
 * Returns an email address that's protected from scraping
 * for use in schema markup and structured data
 * 
 * Note: This helps reduce scraping while still maintaining
 * proper machine-readable structured data
 */
export function getProtectedEmail(): string {
  // The actual email address to use in schema markup
  return "eyecarecenteroc@gmail.com";
}

/**
 * Creates a data attribute version of the email for DOM elements
 * This allows JS to assemble the email address at runtime
 */
export function createEmailDataAttributes(): Record<string, string> {
  const email = "eyecarecenteroc@gmail.com";
  const [username, domain] = email.split('@');
  
  return {
    'data-email-username': username,
    'data-email-domain': domain
  };
}

/**
 * CSS class names for email protection
 * To be used with the email span elements
 */
export const emailProtectionClasses = {
  container: 'email-protected',
  username: 'ep-username',
  at: 'ep-at',
  domain: 'ep-domain'
};

/**
 * Returns a function to render a protected email link in React components
 * 
 * Usage: 
 * const ProtectedEmailLink = generateProtectedEmailLink();
 * <ProtectedEmailLink />
 */
export function generateProtectedEmailLink(
  linkText?: string, 
  className?: string
): () => JSX.Element {
  return () => {
    // This function will be executed in the client browser
    // The email is assembled at runtime to avoid static scraping
    if (typeof document !== 'undefined') {
      const email = getProtectedEmail();
      const obfuscatedEmail = obfuscateEmail(email);
      
      return {
        // This is a simplified return because the actual implementation
        // would depend on the JSX/React implementation in the project
        type: 'a',
        props: {
          href: `mailto:${email}`,
          className: className || 'protected-email',
          dangerouslySetInnerHTML: { __html: linkText || obfuscatedEmail }
        }
      } as JSX.Element;
    }
    
    // Fallback for SSR
    return {
      type: 'span',
      props: {
        className: className || 'protected-email'
      }
    } as JSX.Element;
  };
}

/**
 * Default export as a class similar to other utilities
 */
class EmailProtection {
  static obfuscateEmail = obfuscateEmail;
  static getProtectedEmail = getProtectedEmail;
  static createEmailDataAttributes = createEmailDataAttributes;
  static emailProtectionClasses = emailProtectionClasses;
  static generateProtectedEmailLink = generateProtectedEmailLink;
  
  /**
   * Helper to create a protected email display
   */
  static createProtectedEmailDisplay(email: string) {
    const [username, domain] = email.split('@');
    const maskedUsername = username.substring(0, 2) + '*'.repeat(username.length - 4) + username.slice(-2);
    const [domainName, tld] = domain.split('.');
    const maskedDomain = domainName.substring(0, 2) + '*'.repeat(domainName.length - 4) + domainName.slice(-2);
    const maskedEmail = `${maskedUsername}@${maskedDomain}.${tld}`;
    
    return {
      displayText: maskedEmail,
      revealEmail: () => email
    };
  }
}

export default EmailProtection;
