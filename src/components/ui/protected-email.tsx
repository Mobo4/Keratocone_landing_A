import React from 'react';

interface ProtectedEmailProps {
  /**
   * Whether to display as a mailto link
   */
  asLink?: boolean;
  
  /**
   * Optional text to display instead of the masked email
   */
  text?: string;
  
  /**
   * Optional CSS class to apply to the element
   */
  className?: string;
}

/**
 * ProtectedEmail Component
 *
 * Renders an email address with simple masking to prevent scraping
 */
export const ProtectedEmail: React.FC<ProtectedEmailProps> = ({
  asLink = false,
  text,
  className = ''
}) => {
  const email = "eyecarecenteroc@gmail.com";
  
  // Create masked version of the email
  const createMaskedEmail = () => {
    const [username, domain] = email.split('@');
    if (username.length <= 3) return email;
    
    const visiblePart = username.substring(0, 3);
    const maskedPart = '*'.repeat(username.length - 3);
    return `${visiblePart}${maskedPart}@${domain}`;
  };
  
  const maskedEmail = createMaskedEmail();
  const displayText = text || maskedEmail;
  
  if (asLink) {
    return (
      <a
        href={`mailto:${email}`}
        className={className}
        rel="nofollow"
      >
        {displayText}
      </a>
    );
  }
  
  return (
    <span className={className}>
      {displayText}
    </span>
  );
};

export default ProtectedEmail;