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
  Heart, 
  CheckCircle, 
  Star, 
  Phone, 
  MapPin, 
  Clock,
  Award,
  Users,
  ThumbsUp
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DryEyeTreatmentPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredTime: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Track conversion events
  useEffect(() => {
    // Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_title: 'Dry Eye Treatment Landing Page',
        page_location: window.location.href
      });
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
      fbq('track', 'ViewContent', {
        content_name: 'Dry Eye Treatment Landing Page'
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
          event_label: 'Dry Eye Treatment Consultation'
        });
      }

      if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
          content_name: 'Dry Eye Treatment Consultation',
          value: 250,
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const benefits = [
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Advanced IPL Technology",
      description: "State-of-the-art Intense Pulsed Light therapy to treat meibomian gland dysfunction"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "FDA-Approved Treatments",
      description: "Only the safest, clinically proven treatments for lasting dry eye relief"
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Personalized Care Plans",
      description: "Custom treatment protocols tailored to your specific dry eye condition"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Irvine, CA",
      text: "After years of constant eye irritation, Dr. Bonakdar's treatment gave me my life back. No more burning, no more constant drops!",
      rating: 5
    },
    {
      name: "Michael R.",
      location: "Newport Beach, CA", 
      text: "The IPL treatment was a game-changer. I can work on my computer all day without the painful dryness I used to experience.",
      rating: 5
    },
    {
      name: "Jennifer L.",
      location: "Costa Mesa, CA",
      text: "Professional, caring staff and incredible results. I wish I had found Dr. Bonakdar sooner!",
      rating: 5
    }
  ];

  const faqData = [
    {
      question: "How long does dry eye treatment take?",
      answer: "Most patients see significant improvement within 2-4 weeks of starting treatment. IPL therapy typically requires 3-4 sessions spaced 2-3 weeks apart for optimal results."
    },
    {
      question: "Is the treatment covered by insurance?",
      answer: "Many insurance plans cover dry eye evaluation and treatment. We'll verify your coverage and work with you to maximize your benefits."
    },
    {
      question: "What causes chronic dry eyes?",
      answer: "Dry eyes can be caused by meibomian gland dysfunction, hormonal changes, environmental factors, certain medications, and underlying autoimmune conditions."
    },
    {
      question: "Are there any side effects?",
      answer: "Our treatments are very safe with minimal side effects. Some patients may experience mild redness or sensitivity immediately after IPL treatment, which resolves quickly."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Advanced Dry Eye Treatment | Dr. Bonakdar Eye Care Center | Orange County</title>
        <meta name="description" content="Stop suffering from chronic dry eyes. Dr. Bonakdar offers advanced IPL therapy and personalized treatment plans. Book your consultation today - Orange County's leading dry eye specialist." />
        <meta name="keywords" content="dry eye treatment, IPL therapy, meibomian gland dysfunction, chronic dry eyes, Orange County eye doctor" />
        <link rel="canonical" href="https://eyecarecenteroc.com/landing/dry-eye-treatment" />
        <meta property="og:title" content="Advanced Dry Eye Treatment | Dr. Bonakdar Eye Care Center" />
        <meta property="og:description" content="Stop suffering from chronic dry eyes. Advanced IPL therapy and personalized treatment plans available." />
        <meta property="og:image" content="https://eyecarecenteroc.com/images/conditions/dry-eye-treatment.jpg" />
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
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                  Stop Suffering From Chronic Dry Eyes
                </h1>
                <p className="text-xl mb-8 text-gray-100">
                  Advanced IPL therapy and personalized treatment plans provide lasting relief from burning, irritation, and constant eye drops.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-gray-100"
                    onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Free Consultation
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
                  src="/images/conditions/dry-eye-hero.jpg" 
                  alt="Advanced dry eye treatment" 
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">4.9/5</span>
                    <span className="text-gray-600">Patient Rating</span>
                  </div>
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
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-12 w-12 text-primary mb-2" />
                <div className="text-2xl font-bold text-gray-900">5,000+</div>
                <div className="text-gray-600">Patients Treated</div>
              </div>
              <div className="flex flex-col items-center">
                <ThumbsUp className="h-12 w-12 text-primary mb-2" />
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="h-12 w-12 text-primary mb-2" />
                <div className="text-2xl font-bold text-gray-900">FDA</div>
                <div className="text-gray-600">Approved Treatments</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our Dry Eye Treatment?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We use the latest technology and personalized care to provide lasting relief from dry eye symptoms.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-center">{benefit.title}</h3>
                      <p className="text-gray-600 text-left">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Before/After Comparison */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                See the Difference Our Treatment Makes
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-red-600">Before Treatment</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Constant burning and irritation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Using eye drops every hour</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Difficulty working on computer</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Blurry vision and fatigue</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-green-600">After Treatment</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Comfortable, hydrated eyes all day</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Minimal or no eye drops needed</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Productive work without discomfort</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Clear vision and energy</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Our Patients Say
              </h2>
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
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
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

        {/* Consultation Form */}
        <section id="consultation-form" className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Schedule Your Free Consultation
                </h2>
                <p className="text-gray-100">
                  Take the first step toward lasting dry eye relief. Our expert team will evaluate your condition and create a personalized treatment plan.
                </p>
              </div>
              
              {hasSubmitted ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-600">
                      We'll contact you within 24 hours to schedule your consultation.
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
                        <Label htmlFor="preferredTime" className="text-gray-700">Preferred Time</Label>
                        <Input
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          placeholder="e.g., Morning, Afternoon, Evening"
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-gray-700">Tell us about your symptoms</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="mt-1"
                          placeholder="Describe your dry eye symptoms..."
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-secondary text-white hover:bg-secondary-dark"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Schedule Free Consultation'}
                      </Button>
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
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p>(949) 441-5444</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p>Irvine, CA & Newport Beach, CA</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2">Hours</h3>
                <p>Mon-Fri: 8AM-5PM<br />Sat: 9AM-2PM</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default DryEyeTreatmentPage;