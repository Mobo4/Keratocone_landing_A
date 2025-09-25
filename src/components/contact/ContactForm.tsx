import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Check, Send, Calendar, Phone, Mail, Clock } from 'lucide-react';
import { useConfetti } from '@/hooks/use-confetti';
import { useTranslation } from 'react-i18next';
import { InputSanitizer } from '@/utils/inputSanitizer';
import { RateLimiter } from '@/utils/rateLimiter';
import CSRFProtection from '@/utils/csrfProtection';
import ProtectedEmail from '@/components/ui/protected-email';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';
import { useCallRailPhone } from '@/hooks/useCallRailPhone';

const ContactForm = () => {
  const { toast } = useToast();
  const { fireConfetti } = useConfetti();
  const { t } = useTranslation();
  const { phoneNumber, phoneHref } = useCallRailPhone();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [csrfToken, setCsrfToken] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Bot detection field
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    reason: 'general'
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  // Initialize CSRF token on component mount
  useEffect(() => {
    const token = CSRFProtection.initializeToken();
    setCsrfToken(token);
  }, []);

  // Protected email display
  const [showFullEmail, setShowFullEmail] = useState(false);

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
      errors.bot = 'Bot detected';
      return false;
    }
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.length > 100) {
      errors.name = 'Name must be less than 100 characters';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-()+.]{10,20}$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.length > 1000) {
      errors.message = 'Message must be less than 1000 characters';
    }
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Handle honeypot field separately
    if (name === 'website') {
      setHoneypot(value);
      return;
    }
    
    // Sanitize input based on field type
    let sanitizedValue = value;
    switch (name) {
      case 'name':
        sanitizedValue = InputSanitizer.sanitizeText(value);
        break;
      case 'email':
        sanitizedValue = InputSanitizer.sanitizeEmail(value);
        break;
      case 'phone':
        sanitizedValue = InputSanitizer.sanitizePhone(value);
        break;
      case 'message':
        sanitizedValue = InputSanitizer.sanitizeText(value);
        break;
      default:
        sanitizedValue = InputSanitizer.sanitizeText(value);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
    
    // Clear validation error for this field
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // CSRF validation
    if (!CSRFProtection.validateToken(csrfToken)) {
      toast({
        title: "Security Error",
        description: "Invalid security token. Please refresh the page.",
        variant: "destructive"
      });
      return;
    }
    
    // Validate form
    if (!validateForm()) {
      toast({
        title: "Please correct the errors",
        description: "Check the form for validation errors.",
        variant: "destructive"
      });
      return;
    }
    
    // Rate limiting check
    const clientId = 'contact-form';
    if (!RateLimiter.canMakeRequest(clientId, 3, 300000)) {
      const remainingTime = Math.ceil(RateLimiter.getRemainingTime(clientId, 300000) / 60000);
      toast({
        title: "Too many attempts",
        description: `Please wait ${remainingTime} minutes before submitting again.`,
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission with enhanced security logging
    setTimeout(() => {
      // Form submission logging only in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Secure form submitted:', {
          ...formData,
          timestamp: new Date().toISOString(),
          csrfValidated: true,
          userAgent: navigator.userAgent.substring(0, 50) // Limited for privacy
        });
      }
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Clear CSRF token after successful submission
      CSRFProtection.clearToken();
      // Generate new token for potential next submission
      const newToken = CSRFProtection.initializeToken();
      setCsrfToken(newToken);
      
      fireConfetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.3, x: 0.5 },
        colors: ['#9333ea', '#8b5cf6', '#a855f7', '#d946ef', '#4f46e5']
      });
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        reason: 'general'
      });
      
      // Reset success state after a delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };
  return (
    <div className="flex flex-col space-y-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-100 to-blue-50 rounded-xl shadow-md p-8">
        <h2 className="text-3xl font-bold mb-3 text-center text-gray-900">Contact Our Eye Care Team</h2>
        <p className="text-lg text-center text-gray-700 mb-2 max-w-3xl mx-auto">
          We're dedicated to providing exceptional eye care services to patients throughout
          Orange County. Contact us today to schedule your appointment or learn more about
          our services.
        </p>
      </div>
      
      {/* Map Section - Full Width */}
      <div className="w-full shadow-lg rounded-xl overflow-hidden">
        <div className="h-[450px] w-full bg-gray-200 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3318.944911769163!2d-117.86990162414198!3d33.74550297259654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcd9c2a3a4ef5b%3A0x2f2b8ffe34805da9!2s801%20N%20Tustin%20Ave%20%23404%2C%20Santa%20Ana%2C%20CA%2092705!5e0!3m2!1sen!2sus!4v1710937254980!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Eyecare Center of Orange County Location"
            aria-label="Map showing Eyecare Center of Orange County at 801 North Tustin Ave #404, Santa Ana, CA 92705"
          ></iframe>
        </div>
      </div>
      
      {/* Contact Information Section */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column - Schedule and Call */}
          <div className="space-y-6">
            {/* Schedule Online */}
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 flex-shrink-0 mr-3">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-purple-800">Schedule Online</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Book your appointment through our secure online system.
              </p>
              <AppointmentRequestDialog>
                <button className="w-full bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-md transition-colors font-medium flex items-center justify-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Appointment
                </button>
              </AppointmentRequestDialog>
            </div>

            {/* Call Directly */}
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mr-3">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-blue-800">Call Directly</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Speak with our team for immediate assistance.
              </p>
              <a
                href={phoneHref}
                className="w-full bg-white border-2 border-blue-500 text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md transition-colors inline-block text-center font-medium callrail-phone"
              >
                {phoneNumber}
              </a>
            </div>
          </div>

          {/* Right Column - Email, Emergency, Hours */}
          <div className="space-y-6">
            {/* Email */}
            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0 mr-3">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-indigo-800">Email Us</h3>
              </div>
              <p className="text-gray-700 mb-2">
                Email: <ProtectedEmail asLink={showFullEmail} text={showFullEmail ? "eyecarecenteroc@gmail.com" : "eye***@gmail.com"} />
              </p>
              {!showFullEmail && (
                <button
                  onClick={() => setShowFullEmail(true)}
                  className="text-indigo-600 text-sm hover:underline font-medium"
                >
                  Show full email address
                </button>
              )}
            </div>

            {/* Eye Emergency */}
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-red-800">Eye Emergency</h3>
              </div>
              <p className="text-gray-700 mb-3">
                For urgent eye care needs, please call us immediately.
              </p>
              <a
                href={phoneHref}
                className="text-red-600 font-semibold hover:underline text-lg flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (714) 558-1182
              </a>
            </div>

            {/* Office Hours */}
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 flex-shrink-0 mr-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold text-amber-800">Office Hours</h3>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Thursday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday:</span>
                  <span className="font-medium">9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">By Appointment</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
