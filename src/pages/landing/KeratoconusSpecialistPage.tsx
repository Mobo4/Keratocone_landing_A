import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Eye, 
  Shield, 
  Microscope, 
  CheckCircle, 
  Star, 
  Phone, 
  MapPin, 
  Clock,
  Award,
  Users,
  Zap,
  BookOpen
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const KeratoconusSpecialistPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    currentTreatment: '',
    urgency: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Track conversion events
  useEffect(() => {
    // Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_title: 'Keratoconus Specialist Landing Page',
        page_location: window.location.href
      });
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
      fbq('track', 'ViewContent', {
        content_name: 'Keratoconus Specialist Landing Page'
      });
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Track conversion
      if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
          send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
          event_category: 'Form Submission',
          event_label: 'Keratoconus Specialist Consultation'
        });
      }

      if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
          content_name: 'Keratoconus Specialist Consultation',
          value: 350,
          currency: 'USD'
        });
      }

      // Here you would integrate with your form handler
      console.log('Form submitted:', formData);
      setHasSubmitted(true);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const treatments = [
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Scleral Contact Lenses",
      description: "Custom-fitted lenses that vault over the cornea for superior comfort and vision correction"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Corneal Cross-Linking",
      description: "FDA-approved procedure to strengthen corneal tissue and halt keratoconus progression"
    },
    {
      icon: <Microscope className="h-8 w-8 text-primary" />,
      title: "Advanced Diagnostics",
      description: "Pentacam and corneal topography for precise mapping and treatment planning"
    }
  ];

  const testimonials = [
    {
      name: "David K.",
      location: "Irvine, CA",
      text: "Dr. Bonakdar saved my vision. The scleral lenses he fitted completely changed my life - I can see clearly again!",
      rating: 5,
      condition: "Advanced Keratoconus"
    },
    {
      name: "Maria S.",
      location: "Newport Beach, CA", 
      text: "After struggling with glasses and regular contacts, Dr. Bonakdar's expertise with keratoconus gave me hope and clear vision.",
      rating: 5,
      condition: "Moderate Keratoconus"
    },
    {
      name: "James L.",
      location: "Costa Mesa, CA",
      text: "The corneal cross-linking stopped my keratoconus from getting worse. Dr. Bonakdar is truly a specialist who understands this condition.",
      rating: 5,
      condition: "Progressive Keratoconus"
    }
  ];

  const faqData = [
    {
      question: "What is keratoconus and how serious is it?",
      answer: "Keratoconus is a progressive eye condition where the cornea thins and bulges into a cone shape. While serious, it's very treatable with proper specialist care. Early detection and treatment can preserve vision and prevent progression."
    },
    {
      question: "How effective are scleral contact lenses?",
      answer: "Scleral lenses are highly effective for keratoconus, often providing 20/20 vision or better. They're comfortable to wear and protect the cornea while providing excellent vision correction."
    },
    {
      question: "Is corneal cross-linking painful?",
      answer: "The procedure itself is painless due to numbing drops. Some patients experience mild discomfort for 24-48 hours afterward, which is easily managed with medication."
    },
    {
      question: "How long does treatment take?",
      answer: "Scleral lens fitting typically takes 2-3 visits over several weeks. Cross-linking is a single procedure, with follow-up visits to monitor healing and stability."
    },
    {
      question: "Does insurance cover keratoconus treatment?",
      answer: "Most insurance plans cover keratoconus diagnosis and medical treatment including cross-linking. We'll verify your coverage and help maximize your benefits."
    }
  ];

  const riskFactors = [
    "Family history of keratoconus",
    "Chronic eye rubbing",
    "Certain genetic conditions",
    "Previous eye injuries",
    "Allergic eye disease"
  ];

  const symptoms = [
    "Blurred or distorted vision",
    "Frequent prescription changes",
    "Light sensitivity and glare",
    "Eye strain and headaches",
    "Difficulty with night vision"
  ];

  return (
    <>
      <Helmet>
        <title>Keratoconus Specialist | Dr. Bonakdar Eye Care Center | Orange County</title>
        <meta name="description" content="Orange County's leading keratoconus specialist. Advanced scleral lens fitting, corneal cross-linking, and expert care. Don't let keratoconus steal your vision - get specialized treatment today." />
        <meta name="keywords" content="keratoconus specialist, scleral contact lenses, corneal cross-linking, keratoconus treatment, Orange County" />
        <link rel="canonical" href="https://eyecarecenteroc.com/landing/keratoconus-specialist" />
        <meta property="og:title" content="Keratoconus Specialist | Dr. Bonakdar Eye Care Center" />
        <meta property="og:description" content="Expert keratoconus treatment including scleral lenses and corneal cross-linking. Preserve your vision with specialized care." />
        <meta property="og:image" content="https://eyecarecenteroc.com/images/conditions/keratoconus-treatment.jpg" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-red-600 text-white px-4 py-2 rounded-lg inline-block mb-4">
                  <span className="font-semibold">Don't Wait - Keratoconus Progresses</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Orange County's Leading Keratoconus Specialist
                </h1>
                <p className="text-xl mb-8 text-gray-100">
                  Expert diagnosis, advanced scleral lens fitting, and corneal cross-linking to preserve your vision. Don't let keratoconus steal your sight.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-gray-100"
                    onClick={() => document.getElementById('specialist-consultation')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Emergency Consultation
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-primary"
                    onClick={() => window.open('tel:+1-949-441-5444', '_self')}
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: (949) 441-5444
                  </Button>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <img 
                  src="/images/conditions/keratoconus-hero.jpg" 
                  alt="Keratoconus specialist treatment" 
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-gray-900">Keratoconus Expert</span>
                  </div>
                  <div className="text-sm text-gray-600">20+ Years Experience</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Award className="h-12 w-12 text-primary mb-2" />
                <div className="text-2xl font-bold text-gray-900">20+</div>
                <div className="text-gray-600">Years Specializing</div>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-12 w-12 text-primary mb-2" />
                <div className="text-2xl font-bold text-gray-900">1,000+</div>
                <div className="text-gray-600">Keratoconus Patients</div>
              </div>
              <div className="flex flex-col items-center">
                <Eye className="h-12 w-12 text-primary mb-2" />
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-gray-600">Vision Improvement</div>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="h-12 w-12 text-primary mb-2" />
                <div className="text-2xl font-bold text-gray-900">FDA</div>
                <div className="text-gray-600">Approved Treatments</div>
              </div>
            </div>
          </div>
        </section>

        {/* Urgency Section */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Time is Critical with Keratoconus
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Keratoconus is progressive - it gets worse over time. Early treatment can halt progression and preserve your vision. Don't wait until it's too late.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100"
              onClick={() => document.getElementById('specialist-consultation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Expert Evaluation Now
            </Button>
          </div>
        </section>

        {/* Symptoms and Risk Factors */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Do You Have These Symptoms?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Early detection is crucial. If you experience any of these symptoms, you need a keratoconus specialist evaluation.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="border-2 border-red-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-red-600 mb-6">Warning Signs</h3>
                  <ul className="space-y-4">
                    {symptoms.map((symptom, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-gray-700">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-orange-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-orange-600 mb-6">Risk Factors</h3>
                  <ul className="space-y-4">
                    {riskFactors.map((factor, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-700">{factor}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Advanced Keratoconus Treatments
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer the most advanced treatments available to halt progression and restore clear vision.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {treatments.map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        {treatment.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-center">{treatment.title}</h3>
                      <p className="text-gray-600 text-left">{treatment.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Real Success Stories
              </h2>
              <p className="text-gray-600">
                See how Dr. Bonakdar has helped patients with keratoconus regain clear vision
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.location}</div>
                        <div className="text-sm text-primary font-medium">{testimonial.condition}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Results */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Life-Changing Results
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-red-600">Before Specialist Treatment</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Severe vision distortion and blur</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Inability to drive or work effectively</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Constant prescription changes</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Fear of progressive vision loss</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-green-600">After Expert Treatment</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Clear, crisp vision (often 20/20)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Return to normal activities</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Stable, predictable vision</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Halted disease progression</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Keratoconus Questions Answered
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {faqData.map((faq, index) => (
                <Card key={index} className="mb-4">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specialist Consultation Form */}
        <section id="specialist-consultation" className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Get Expert Keratoconus Evaluation
                </h2>
                <p className="text-gray-100">
                  Don't let keratoconus progress. Get a specialist evaluation and personalized treatment plan to preserve your vision.
                </p>
              </div>
              
              {hasSubmitted ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Priority Consultation Scheduled!</h3>
                    <p className="text-gray-600">
                      We'll contact you within 4 hours to schedule your urgent keratoconus evaluation.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-gray-700">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-gray-700">Phone *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-gray-700">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="urgency" className="text-gray-700">How urgent is your need?</Label>
                        <select
                          id="urgency"
                          name="urgency"
                          value={formData.urgency}
                          onChange={handleInputChange}
                          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                        >
                          <option value="">Select urgency level</option>
                          <option value="emergency">Emergency - Vision getting worse quickly</option>
                          <option value="urgent">Urgent - Need appointment this week</option>
                          <option value="routine">Routine - Can wait 1-2 weeks</option>
                        </select>
                      </div>
                      
                      <div>
                        <Label htmlFor="currentTreatment" className="text-gray-700">Current Treatment</Label>
                        <Input
                          id="currentTreatment"
                          name="currentTreatment"
                          value={formData.currentTreatment}
                          onChange={handleInputChange}
                          placeholder="e.g., Hard contacts, No treatment, etc."
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-gray-700">Describe your symptoms</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="mt-1"
                          placeholder="Tell us about your vision problems..."
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-secondary text-white hover:bg-secondary-dark"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Get Priority Specialist Consultation'}
                      </Button>
                      
                      <p className="text-center text-sm text-gray-100">
                        Emergency cases seen within 24 hours
                      </p>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2">Emergency Line</h3>
                <p>(949) 441-5444</p>
                <p className="text-sm text-gray-400">24/7 for urgent cases</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2">Specialist Clinics</h3>
                <p>Irvine, CA & Newport Beach, CA</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2">Emergency Hours</h3>
                <p>Mon-Fri: 8AM-5PM<br />Sat: 9AM-2PM<br />Emergency: On-call</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default KeratoconusSpecialistPage;