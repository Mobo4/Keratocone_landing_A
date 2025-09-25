import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Brain, 
  Eye, 
  Monitor, 
  CheckCircle, 
  Star, 
  Phone, 
  MapPin, 
  Clock,
  AlertTriangle,
  Users,
  Zap,
  Heart
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HeadacheEyeFatiguePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    symptoms: '',
    workType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Track conversion events
  useEffect(() => {
    // Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_title: 'Headache Eye Fatigue Treatment Landing Page',
        page_location: window.location.href
      });
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
      fbq('track', 'ViewContent', {
        content_name: 'Headache Eye Fatigue Treatment Landing Page'
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
          event_label: 'Headache Eye Fatigue Consultation'
        });
      }

      if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
          content_name: 'Headache Eye Fatigue Consultation',
          value: 200,
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

  const solutions = [
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Computer Vision Syndrome Treatment",
      description: "Specialized lenses and therapies to reduce digital eye strain and screen-related fatigue"
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Vision-Related Headache Relief",
      description: "Comprehensive evaluation to identify and treat eye problems causing chronic headaches"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Blue Light Protection",
      description: "Advanced blue light filtering and ergonomic solutions for digital device users"
    }
  ];

  const testimonials = [
    {
      name: "Emily R.",
      location: "Irvine, CA",
      job: "Software Developer",
      text: "My daily headaches disappeared after Dr. Bonakdar fitted me with computer glasses. I can work 8+ hours without pain now!",
      rating: 5
    },
    {
      name: "Robert T.",
      location: "Newport Beach, CA", 
      job: "Graphic Designer",
      text: "I thought headaches were just part of my job. Dr. Bonakdar found the vision problem causing them - life-changing treatment!",
      rating: 5
    },
    {
      name: "Lisa M.",
      location: "Costa Mesa, CA",
      job: "Executive Assistant",
      text: "No more afternoon eye strain and headaches. The specialized computer lenses made all the difference in my productivity.",
      rating: 5
    }
  ];

  const faqData = [
    {
      question: "Can eye problems really cause headaches?",
      answer: "Absolutely. Vision problems like uncorrected refractive errors, eye muscle imbalances, and digital eye strain are common causes of chronic headaches. Many patients find relief once their vision issues are properly addressed."
    },
    {
      question: "What is Computer Vision Syndrome?",
      answer: "Computer Vision Syndrome (CVS) is a group of eye and vision-related problems resulting from prolonged computer, tablet, and smartphone use. Symptoms include eye strain, headaches, blurred vision, and neck pain."
    },
    {
      question: "How effective are computer glasses?",
      answer: "Computer glasses with anti-reflective coating and blue light filtering can significantly reduce eye strain and headaches for digital device users. Many patients see improvement within days of wearing them."
    },
    {
      question: "How long does treatment take?",
      answer: "Many patients experience relief within 1-2 weeks of starting treatment. The exact timeline depends on the underlying cause and severity of symptoms."
    },
    {
      question: "Will insurance cover the evaluation?",
      answer: "Most insurance plans cover comprehensive eye exams. We'll verify your coverage and help you understand your benefits."
    }
  ];

  const commonSymptoms = [
    "Daily headaches or migraines",
    "Eye strain and fatigue",
    "Blurred or double vision",
    "Neck and shoulder tension",
    "Difficulty concentrating",
    "Light sensitivity",
    "Dry, burning eyes",
    "Trouble focusing between distances"
  ];

  const riskFactors = [
    "Extended computer use (>2 hours daily)",
    "Poor lighting conditions",
    "Improper screen distance",
    "Uncorrected vision problems",
    "Poor posture while working",
    "Excessive smartphone/tablet use"
  ];

  return (
    <>
      <Helmet>
        <title>Headache & Eye Fatigue Treatment | Computer Vision Syndrome | Dr. Bonakdar</title>
        <meta name="description" content="Stop chronic headaches caused by eye strain. Expert treatment for computer vision syndrome, digital eye fatigue, and vision-related headaches. Relief in days, not months." />
        <meta name="keywords" content="eye strain headaches, computer vision syndrome, digital eye strain, vision therapy, blue light glasses" />
        <link rel="canonical" href="https://eyecarecenteroc.com/landing/headache-eye-fatigue" />
        <meta property="og:title" content="Headache & Eye Fatigue Treatment | Dr. Bonakdar Eye Care Center" />
        <meta property="og:description" content="Stop chronic headaches caused by eye strain. Expert treatment for computer vision syndrome and digital eye fatigue." />
        <meta property="og:image" content="https://eyecarecenteroc.com/images/conditions/eye-strain-headache.jpg" />
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
                  Stop Chronic Headaches Caused by Eye Strain
                </h1>
                <p className="text-xl mb-8 text-gray-100">
                  If you suffer from daily headaches while working on computers or digital devices, your eyes might be the problem. Get relief in days, not months.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-gray-100"
                    onClick={() => document.getElementById('headache-evaluation')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Headache Evaluation
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
                  src="/images/conditions/eye-strain-hero.jpg" 
                  alt="Computer vision syndrome treatment" 
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-red-500" />
                    <span className="font-semibold text-gray-900">Relief in Days</span>
                  </div>
                  <div className="text-sm text-gray-600">Not Months</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Warning Section */}
        <section className="py-12 bg-yellow-50 border-l-4 border-yellow-400">
          <div className="container mx-auto px-4">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-yellow-800 mb-2">
                  Don't Ignore These Warning Signs
                </h3>
                <p className="text-yellow-700">
                  Daily headaches, especially those that occur after computer work or improve on weekends, 
                  may indicate a treatable vision problem. Early intervention prevents worsening symptoms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Symptoms Check */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Do You Experience These Symptoms?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                If you have 3 or more of these symptoms, you likely have vision-related eye strain that's causing your headaches.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="border-2 border-red-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-3">
                    <Brain className="h-6 w-6" />
                    Common Symptoms
                  </h3>
                  <ul className="space-y-4">
                    {commonSymptoms.map((symptom, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-red-500" />
                        <span className="text-gray-700">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-orange-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-orange-600 mb-6 flex items-center gap-3">
                    <Monitor className="h-6 w-6" />
                    Risk Factors
                  </h3>
                  <ul className="space-y-4">
                    {riskFactors.map((factor, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-500" />
                        <span className="text-gray-700">{factor}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Brain className="h-12 w-12 text-primary mb-2" />
                <div className="text-2xl font-bold text-gray-900">90%</div>
                <div className="text-gray-600">Headache Relief Rate</div>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-12 w-12 text-primary mb-2" />
                <div className="text-2xl font-bold text-gray-900">2,000+</div>
                <div className="text-gray-600">Patients Helped</div>
              </div>
              <div className="flex flex-col items-center">
                <Zap className="h-12 w-12 text-primary mb-2" />
                <div className="text-2xl font-bold text-gray-900">3-7</div>
                <div className="text-gray-600">Days to Relief</div>
              </div>
              <div className="flex flex-col items-center">
                <Star className="h-12 w-12 text-primary mb-2" />
                <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                <div className="text-gray-600">Patient Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Proven Solutions for Eye Strain Headaches
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We use evidence-based treatments to eliminate the root cause of your vision-related headaches.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex justify-center mb-4">
                        {solution.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-center">{solution.title}</h3>
                      <p className="text-gray-600 text-left">{solution.description}</p>
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
                Transform Your Workday
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-red-600">Before Treatment</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Daily headaches by afternoon</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Constant eye strain and fatigue</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Reduced productivity and focus</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Relying on pain medication</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Avoiding computer work when possible</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-green-600">After Treatment</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Headache-free workdays</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Comfortable all-day computer use</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Increased productivity and focus</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>No more pain medication needed</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Energy at end of workday</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Real Results from Real Professionals
              </h2>
              <p className="text-gray-600">
                See how we've helped professionals eliminate headaches and eye strain
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
                        <div className="text-sm text-primary font-medium">{testimonial.job}</div>
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
                Common Questions About Eye Strain Headaches
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

        {/* Evaluation Form */}
        <section id="headache-evaluation" className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Get Your Headache & Eye Strain Evaluation
                </h2>
                <p className="text-gray-100">
                  Stop suffering from daily headaches. Get a comprehensive evaluation to identify and treat the vision problems causing your discomfort.
                </p>
              </div>
              
              {hasSubmitted ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Evaluation Scheduled!</h3>
                    <p className="text-gray-600">
                      We'll contact you within 24 hours to schedule your comprehensive headache evaluation.
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
                        <Label htmlFor="workType" className="text-gray-700">Type of work/screen time</Label>
                        <select
                          id="workType"
                          name="workType"
                          value={formData.workType}
                          onChange={handleInputChange}
                          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                        >
                          <option value="">Select your primary work type</option>
                          <option value="office">Office/Computer work (6+ hours)</option>
                          <option value="programming">Programming/Development</option>
                          <option value="design">Graphic Design/Creative</option>
                          <option value="finance">Finance/Data Analysis</option>
                          <option value="student">Student</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <Label htmlFor="symptoms" className="text-gray-700">Describe your headaches and eye strain</Label>
                        <Textarea
                          id="symptoms"
                          name="symptoms"
                          value={formData.symptoms}
                          onChange={handleInputChange}
                          rows={4}
                          className="mt-1"
                          placeholder="When do headaches occur? How severe? What makes them better/worse?"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-gray-700">Additional questions or concerns</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={3}
                          className="mt-1"
                          placeholder="Any other symptoms or concerns..."
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-secondary text-white hover:bg-secondary-dark"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Schedule Headache Evaluation'}
                      </Button>
                      
                      <p className="text-center text-sm text-gray-100">
                        Most patients see relief within 3-7 days of treatment
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
                <h3 className="font-semibold mb-2">Call for Relief</h3>
                <p>(949) 441-5444</p>
                <p className="text-sm text-gray-400">Same-day appointments available</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2">Convenient Locations</h3>
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

export default HeadacheEyeFatiguePage;