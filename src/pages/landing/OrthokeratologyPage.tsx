import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Moon, 
  Sun, 
  Eye, 
  CheckCircle, 
  Star, 
  Phone, 
  MapPin, 
  Clock,
  Award,
  Users,
  Shield,
  Glasses,
  Baby
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const OrthokeratologyPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    childAge: '',
    currentCorrection: '',
    prescription: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Track conversion events
  useEffect(() => {
    // Google Analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_title: 'Orthokeratology Landing Page',
        page_location: window.location.href
      });
    }
    
    // Facebook Pixel
    if (typeof fbq !== 'undefined') {
      fbq('track', 'ViewContent', {
        content_name: 'Orthokeratology Landing Page'
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
          event_label: 'Orthokeratology Consultation'
        });
      }

      if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
          content_name: 'Orthokeratology Consultation',
          value: 300,
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

  const benefits = [
    {
      icon: <Sun className="h-8 w-8 text-primary" />,
      title: "Daytime Freedom",
      description: "No glasses or contacts needed during the day - perfect for sports, swimming, and active lifestyles"
    },
    {
      icon: <Baby className="h-8 w-8 text-primary" />,
      title: "Myopia Control for Kids",
      description: "Clinically proven to slow nearsightedness progression in children by up to 50%"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Safe & Reversible",
      description: "FDA-approved treatment that's completely reversible - stop wearing lenses and vision returns to original state"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer K.",
      location: "Irvine, CA",
      relationship: "Mother of 12-year-old",
      text: "Ortho-K has been life-changing for my son. His myopia has stabilized, and he loves not wearing glasses for sports!",
      rating: 5
    },
    {
      name: "Michael S.",
      location: "Newport Beach, CA", 
      relationship: "Adult Patient",
      text: "I wake up every morning with perfect vision. No more contacts or glasses during the day - it's amazing freedom!",
      rating: 5
    },
    {
      name: "Lisa M.",
      location: "Costa Mesa, CA",
      relationship: "Mother of 10-year-old",
      text: "Dr. Bonakdar explained everything perfectly. My daughter's myopia progression has slowed dramatically.",
      rating: 5
    }
  ];

  const faqData = [
    {
      question: "How does Orthokeratology work?",
      answer: "Ortho-K uses specially designed contact lenses worn overnight to gently reshape the cornea. This temporary reshaping corrects refractive errors, providing clear vision during the day without glasses or contacts."
    },
    {
      question: "Is Ortho-K safe for children?",
      answer: "Yes, Ortho-K is FDA-approved and considered very safe for children when properly fitted and monitored. It's actually one of the most effective treatments for slowing myopia progression in kids."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most patients see significant vision improvement within the first few nights. Full effect is typically achieved within 1-2 weeks of consistent wear."
    },
    {
      question: "What happens if I stop wearing the lenses?",
      answer: "Ortho-K is completely reversible. If you stop wearing the lenses, your cornea will gradually return to its original shape, and your vision will return to what it was before treatment."
    },
    {
      question: "Who is a good candidate for Ortho-K?",
      answer: "Ortho-K works best for people with mild to moderate nearsightedness (-1.00 to -6.00 D) and small amounts of astigmatism. It's excellent for children, athletes, and anyone who wants daytime freedom from glasses and contacts."
    }
  ];

  const candidateProfile = [
    "Children with progressing myopia",
    "Athletes and active individuals",
    "People who can't wear daytime contacts",
    "Those considering LASIK but too young",
    "Dry eye sufferers",
    "Jobs requiring sharp vision without glasses"
  ];

  const myopiaFacts = [
    "Myopia affects 1 in 4 Americans",
    "Childhood myopia often worsens yearly",
    "High myopia increases risk of eye diseases",
    "Traditional glasses don't slow progression",
    "Ortho-K can reduce progression by 32-63%"
  ];

  return (
    <>
      <Helmet>
        <title>Orthokeratology (Ortho-K) | Night Lenses for Myopia Control | Dr. Bonakdar</title>
        <meta name="description" content="Revolutionary night contact lenses that correct vision while you sleep. FDA-approved Ortho-K for myopia control in children and daytime freedom for adults. Orange County's orthokeratology specialist." />
        <meta name="keywords" content="orthokeratology, ortho-k, night lenses, myopia control, corneal reshaping, children myopia, overnight contacts" />
        <link rel="canonical" href="https://eyecarecenteroc.com/landing/orthokeratology" />
        <meta property="og:title" content="Orthokeratology (Ortho-K) | Night Lenses for Vision Correction" />
        <meta property="og:description" content="Revolutionary night contact lenses that correct vision while you sleep. Perfect for children's myopia control and adult freedom from glasses." />
        <meta property="og:image" content="https://eyecarecenteroc.com/images/treatments/orthokeratology-hero.jpg" />
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
                  Sleep Your Way to Perfect Vision
                </h1>
                <p className="text-xl mb-8 text-gray-100">
                  Revolutionary overnight contact lenses that correct your vision while you sleep. Wake up with crystal clear sight - no glasses or contacts needed all day.
                </p>
                <div className="flex items-center gap-4 mb-8 p-4 bg-green-600 rounded-lg">
                  <Baby className="h-8 w-8" />
                  <div>
                    <div className="font-semibold">Perfect for Kids</div>
                    <div className="text-sm">Slows myopia progression by up to 50%</div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-gray-100"
                    onClick={() => document.getElementById('ortho-k-consultation')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Free Ortho-K Consultation
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
                  src="/images/treatments/orthokeratology-hero.jpg" 
                  alt="Orthokeratology night lenses" 
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-2">
                    <Moon className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-gray-900">FDA Approved</span>
                  </div>
                  <div className="text-sm text-gray-600">Safe & Effective</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Orthokeratology Works
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Simple, safe, and revolutionary - correct your vision while you sleep
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="text-center">
                    <Moon className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">1. Wear at Night</h3>
                  </div>
                  <p className="text-gray-600 text-left">
                    Wear specially designed contact lenses while you sleep. They gently reshape your cornea overnight.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8">
                  <div className="text-center">
                    <Eye className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">2. Cornea Reshapes</h3>
                  </div>
                  <p className="text-gray-600 text-left">
                    The lenses temporarily and safely reshape the front surface of your eye for clear vision.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-8">
                  <div className="text-center">
                    <Sun className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-3">3. Perfect Day Vision</h3>
                  </div>
                  <p className="text-gray-600 text-left">
                    Remove lenses in the morning and enjoy clear vision all day without glasses or contacts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Award className="h-12 w-12 text-primary mb-2" />
                <div className="text-2xl font-bold text-gray-900">FDA</div>
                <div className="text-gray-600">Approved</div>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-12 w-12 text-primary mb-2" />
                <div className="text-2xl font-bold text-gray-900">3000+</div>
                <div className="text-gray-600">Patients Fitted</div>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="h-12 w-12 text-primary mb-2" />
                <div className="text-2xl font-bold text-gray-900">50%</div>
                <div className="text-gray-600">Myopia Reduction</div>
              </div>
              <div className="flex flex-col items-center">
                <Star className="h-12 w-12 text-primary mb-2" />
                <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                <div className="text-gray-600">Patient Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Orthokeratology?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience freedom from glasses and contacts while protecting your vision for the future
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

        {/* Myopia Control Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Protect Your Child's Vision Future
                </h2>
                <p className="text-xl mb-8 text-blue-100">
                  Childhood myopia (nearsightedness) is an epidemic. Without intervention, it often worsens every year, leading to high myopia and serious eye diseases later in life.
                </p>
                <div className="space-y-4">
                  {myopiaFacts.map((fact, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-200" />
                      <span>{fact}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Clinical Results
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Myopia Progression Reduction</span>
                        <span className="font-bold text-primary">32-63%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '60%'}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Patient Satisfaction</span>
                        <span className="font-bold text-primary">95%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '95%'}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700">Vision Improvement</span>
                        <span className="font-bold text-primary">20/20 or Better</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{width: '90%'}}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ideal Candidates */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Are You an Ideal Candidate?
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-green-600 mb-6">Perfect For:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {candidateProfile.map((candidate, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{candidate}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Real Ortho-K Success Stories
              </h2>
              <p className="text-gray-600">
                See how Orthokeratology has transformed lives
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
                        <div className="text-sm text-primary font-medium">{testimonial.relationship}</div>
                      </div>
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
                Life Before and After Ortho-K
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-red-600 flex items-center gap-3">
                  <Glasses className="h-6 w-6" />
                  Before Ortho-K
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Dependent on glasses or contacts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Restricted sports and activities</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Worsening myopia every year (kids)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Dry eyes from contacts</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>Lost or broken glasses</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-green-600 flex items-center gap-3">
                  <Sun className="h-6 w-6" />
                  After Ortho-K
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Perfect vision all day without correction</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Freedom for all sports and activities</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Slowed myopia progression (kids)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>No more dry eye issues</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>No worries about lost/broken glasses</span>
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
                Orthokeratology Questions Answered
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
        <section id="ortho-k-consultation" className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  Start Your Ortho-K Journey Today
                </h2>
                <p className="text-gray-100">
                  Discover if Orthokeratology is right for you or your child. Schedule a comprehensive evaluation with Orange County's Ortho-K specialist.
                </p>
              </div>
              
              {hasSubmitted ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Consultation Scheduled!</h3>
                    <p className="text-gray-600">
                      We'll contact you within 24 hours to schedule your Ortho-K evaluation and discuss if you're a candidate.
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
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="childAge" className="text-gray-700">Patient Age</Label>
                          <Input
                            id="childAge"
                            name="childAge"
                            value={formData.childAge}
                            onChange={handleInputChange}
                            placeholder="Age (if for a child)"
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="currentCorrection" className="text-gray-700">Current Vision Correction</Label>
                          <select
                            id="currentCorrection"
                            name="currentCorrection"
                            value={formData.currentCorrection}
                            onChange={handleInputChange}
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md"
                          >
                            <option value="">Select current correction</option>
                            <option value="glasses">Glasses only</option>
                            <option value="contacts">Contact lenses</option>
                            <option value="both">Both glasses and contacts</option>
                            <option value="none">No correction currently</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="prescription" className="text-gray-700">Current Prescription (if known)</Label>
                        <Input
                          id="prescription"
                          name="prescription"
                          value={formData.prescription}
                          onChange={handleInputChange}
                          placeholder="e.g., -2.50, -1.75, etc."
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-gray-700">Goals and Questions</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="mt-1"
                          placeholder="Tell us about your goals for Ortho-K and any questions you have..."
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full bg-secondary text-white hover:bg-secondary-dark"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Schedule Free Ortho-K Consultation'}
                      </Button>
                      
                      <p className="text-center text-sm text-gray-100">
                        Comprehensive evaluation includes candidacy assessment and custom fitting
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
                <h3 className="font-semibold mb-2">Ortho-K Hotline</h3>
                <p>(949) 441-5444</p>
                <p className="text-sm text-gray-400">Specialists available</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2">Ortho-K Centers</h3>
                <p>Irvine, CA & Newport Beach, CA</p>
              </div>
              <div className="flex flex-col items-center">
                <Clock className="h-8 w-8 mb-4" />
                <h3 className="font-semibold mb-2">Consultation Hours</h3>
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

export default OrthokeratologyPage;