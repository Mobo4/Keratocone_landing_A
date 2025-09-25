// Enhanced form validation utilities
export class FormValidation {
  // Comprehensive name validation
  static validateName(name: string): { isValid: boolean; error?: string } {
    if (!name || typeof name !== 'string') {
      return { isValid: false, error: 'Name is required' };
    }
    
    const trimmed = name.trim();
    
    if (trimmed.length < 2) {
      return { isValid: false, error: 'Name must be at least 2 characters' };
    }
    
    if (trimmed.length > 50) {
      return { isValid: false, error: 'Name must be less than 50 characters' };
    }
    
    // Allow letters, spaces, hyphens, apostrophes, and common international characters
    const namePattern = /^[a-zA-ZÀ-ÿ\u0100-\u017F\u0180-\u024F\u1E00-\u1EFF\s\-'\.]+$/;
    
    if (!namePattern.test(trimmed)) {
      return { isValid: false, error: 'Name contains invalid characters' };
    }
    
    return { isValid: true };
  }
  
  // Age validation
  static validateAge(age: string | number): { isValid: boolean; error?: string } {
    const ageNum = typeof age === 'string' ? parseInt(age, 10) : age;
    
    if (isNaN(ageNum)) {
      return { isValid: false, error: 'Age must be a valid number' };
    }
    
    if (ageNum < 0 || ageNum > 150) {
      return { isValid: false, error: 'Please enter a valid age' };
    }
    
    return { isValid: true };
  }
  
  // Message/textarea validation
  static validateMessage(message: string): { isValid: boolean; error?: string } {
    if (!message || typeof message !== 'string') {
      return { isValid: false, error: 'Message is required' };
    }
    
    const trimmed = message.trim();
    
    if (trimmed.length < 10) {
      return { isValid: false, error: 'Message must be at least 10 characters' };
    }
    
    if (trimmed.length > 2000) {
      return { isValid: false, error: 'Message must be less than 2000 characters' };
    }
    
    // Check for suspicious patterns (multiple URLs, excessive special characters)
    const urlCount = (trimmed.match(/https?:\/\/[^\s]+/g) || []).length;
    if (urlCount > 2) {
      return { isValid: false, error: 'Message contains too many links' };
    }
    
    return { isValid: true };
  }
  
  // Date validation for appointments
  static validateAppointmentDate(date: string): { isValid: boolean; error?: string } {
    if (!date) {
      return { isValid: false, error: 'Date is required' };
    }
    
    const selectedDate = new Date(date);
    const today = new Date();
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 6); // 6 months in future
    
    if (isNaN(selectedDate.getTime())) {
      return { isValid: false, error: 'Invalid date format' };
    }
    
    if (selectedDate < today) {
      return { isValid: false, error: 'Date cannot be in the past' };
    }
    
    if (selectedDate > maxDate) {
      return { isValid: false, error: 'Date cannot be more than 6 months in the future' };
    }
    
    // Check if it's a weekend (optional business rule)
    const dayOfWeek = selectedDate.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      return { isValid: false, error: 'Please select a weekday' };
    }
    
    return { isValid: true };
  }
  
  // Insurance validation
  static validateInsurance(insurance: string): { isValid: boolean; error?: string } {
    if (!insurance || typeof insurance !== 'string') {
      return { isValid: false, error: 'Insurance information is required' };
    }
    
    const trimmed = insurance.trim();
    
    if (trimmed.length < 2) {
      return { isValid: false, error: 'Insurance name must be at least 2 characters' };
    }
    
    return { isValid: true };
  }
}