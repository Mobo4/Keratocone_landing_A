import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';
import TrustSignals from '@/components/TrustSignals';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Eye, 
  AlertTriangle, 
  Clock, 
  ArrowLeft,
  Book,
  Shield,
  CheckCircle,
  XCircle,
  Calendar,
  Users,
  Search,
  Smartphone,
  Glasses
} from 'lucide-react';

const PresbyopiaEducationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Presbyopia",
    "alternateName": ["Age-related farsightedness", "Reading vision difficulty"],
    "description": "A natural, age-related condition where the eye's lens loses flexibility, making it difficult to focus on close-up objects and requiring reading glasses or bifocals.",
    "symptom": [
      "Difficulty reading small print",
      "Need to hold reading material farther away",
      "Eyestrain when doing close work",
      "Headaches after reading or close work",
      "Difficulty seeing in dim light",
      "Blurred vision at normal reading distance"
    ],
    "possibleCause": [
      "Natural aging of the lens",
      "Loss of lens flexibility",
      "Changes in lens proteins",
      "Hardening of the lens"
    ],
    "riskFactor": [
      "Age over 40",
      "Previous hyperopia (farsightedness)",
      "Certain medications",
      "Medical conditions like diabetes"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Reading glasses",
        "description": "Simple magnifying lenses for close work"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Bifocal or progressive lenses",
        "description": "Glasses with multiple prescriptions for distance and near vision"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Multifocal contact lenses",
        "description": "Contact lenses designed to correct both distance and near vision"
      }
    ]
  };

  const symptoms = [
    { icon: Book, title: "Reading Difficulties", description: "Difficulty reading small print or doing close work" },
    { icon: Search, title: "Arm's Length Reading", description: "Need to hold reading material farther away to see clearly" },
    { icon: Eye, title: "Eyestrain", description: "Tired, strained feeling in eyes during close work" },
    { icon: AlertTriangle, title: "Headaches", description: "Headaches after reading or doing detailed work" },
    { icon: Eye, title: "Dim Light Problems", description: "Increased difficulty seeing in low light conditions" },
    { icon: Smartphone, title: "Phone Screen Issues", description: "Trouble reading text messages or phone screens" }
  ];

  const causes = [
    { 
      category: "Natural Aging Process", 
      description: "The primary cause of presbyopia is the natural aging of the eye's lens",
      items: ["Lens loses flexibility", "Lens proteins change structure", "Ciliary muscles weaken", "Lens continues to grow throughout life"] 
    },
    { 
      category: "Risk Factors", 
      description: "Factors that can influence when presbyopia develops",
      items: ["Age (typically after 40)", "Previous refractive errors", "Certain medications", "Medical conditions like diabetes"] 
    }
  ];

  const treatments = [
    {
      category: "Non-Prescription Options",
      treatments: [
        "Over-the-counter reading glasses",
        "Computer glasses with slight magnification",
        "Good lighting for close work",
        "Large print books and materials"
      ]
    },
    {
      category: "Prescription Solutions",
      treatments: [
        "Single vision reading glasses",
        "Bifocal glasses (lined or no-line)",
        "Progressive addition lenses",
        "Trifocal lenses for multiple distances",
        "Multifocal contact lenses",
        "Monovision contact lenses"
      ]
    },
    {
      category: "Advanced Options",
      treatments: [
        "Presbyopia-correcting IOLs",
        "Corneal inlays",
        "LASIK monovision",
        "Conductive keratoplasty"
      ]
    }
  ];

  const whenToSeeDoctor = [
    "Sudden onset of reading difficulties",
    "Severe headaches or eyestrain",
    "Changes in distance vision along with near vision problems",
    "Unable to perform daily tasks requiring close vision",
    "Previous eye surgery or injury",
    "Family history of eye diseases"
  ];

  const prevention = [
    "Regular comprehensive eye exams after age 40",
    "Good lighting when reading or doing close work",
    "Take frequent breaks during close work",
    "Maintain overall health and manage diabetes",
    "Protect eyes from UV damage",
    "Stay hydrated and maintain good nutrition"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Presbyopia: Age-Related Reading Vision Changes | Patient Education"
        description="Learn about presbyopia, the natural age-related condition affecting near vision. Comprehensive guide to symptoms, causes, and treatment options including reading glasses and multifocal lenses."
        keywords="presbyopia, reading glasses, bifocals, progressive lenses, age-related vision, near vision, Orange County"
        canonicalUrl="https://eyecarecenteroc.com/education/conditions/presbyopia"
        ogType="article"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-eyecare-blue">Home</Link>
              <span>/</span>
              <Link to="/patient-education" className="hover:text-eyecare-blue">Patient Education</Link>
              <span>/</span>
              <span className="text-gray-900">Presbyopia</span>
            </nav>
          </div>
        </section>

        {/* Header */}
        <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-12">
          <div className="container mx-auto px-4">
            <Link 
              to="/patient-education"
              className="inline-flex items-center text-eyecare-blue hover:text-eyecare-dark-blue mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Education Center
            </Link>
            
            <div className="max-w-4xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-white rounded-full p-3 shadow-lg">
                  <Glasses className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Presbyopia
                  </h1>
                  <p className="text-xl text-gray-600 mb-6 max-w-3xl">
                    Understanding the natural age-related changes that affect near vision, 
                    typically beginning around age 40, and the various correction options available.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Badge className="bg-purple-100 text-purple-800 flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      Affects Everyone After 40
                    </Badge>
                    <Badge className="bg-yellow-100 text-yellow-800 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      7 min read
                    </Badge>
                    <Badge className="bg-green-100 text-green-800">
                      Easily Corrected
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  <h3 className="text-lg font-semibold">Need Vision Correction?</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  If you're experiencing difficulty reading or focusing on close objects, 
                  especially if you're over 40, schedule a comprehensive eye exam to explore your options.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="tel:9499973927"
                    className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-lg font-semibold transition-colors callrail-phone"
                  >
                    Call: (949) 997-3927
                  </a>
                  <AppointmentRequestDialog>
                    <Button className="bg-white border-2 border-eyecare-blue text-eyecare-blue hover:bg-eyecare-blue hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Schedule Appointment
                    </Button>
                  </AppointmentRequestDialog>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustSignals className="py-8 bg-gray-50" />

        {/* What is Presbyopia */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">What is Presbyopia?</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  Presbyopia is a natural, age-related condition that affects your ability to see 
                  objects clearly at close range. The word "presbyopia" comes from Greek words 
                  meaning "old eye," but don't let that concern you – it's a completely normal 
                  part of aging that affects nearly everyone, typically beginning in their early to mid-40s.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Inside your eye, there's a clear, flexible lens that changes shape to help you 
                  focus on objects at different distances. As we age, this lens gradually becomes 
                  less flexible and the muscles that control it weaken. This makes it increasingly 
                  difficult to focus on close-up objects like books, phones, or computer screens.
                </p>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-3 text-purple-900">Universal Condition</h3>
                  <p className="text-purple-800">
                    Presbyopia affects virtually everyone as they age. By age 50, nearly 100% of 
                    people have some degree of presbyopia, even if they've never needed glasses before. 
                    It's not a disease or eye health problem – it's simply a natural part of the aging process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Symptoms */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Common Signs and Symptoms</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {symptoms.map((symptom, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <symptom.icon className="w-6 h-6 text-eyecare-blue" />
                        <CardTitle className="text-lg">{symptom.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{symptom.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-900">
                  The "Arm's Length" Test
                </h3>
                <p className="text-blue-800">
                  One of the most common early signs of presbyopia is finding yourself holding 
                  reading material farther away to see it clearly. If you notice you need to 
                  extend your arms to read a menu, book, or your phone, it's likely presbyopia beginning to develop.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Causes */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">What Causes Presbyopia?</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {causes.map((cause, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-xl">{cause.category}</CardTitle>
                      <CardDescription>{cause.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {cause.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Treatment and Correction Options</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {treatments.map((treatment, index) => (
                  <Card key={index} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-xl">{treatment.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {treatment.treatments.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 bg-eyecare-blue bg-opacity-10 border border-eyecare-blue border-opacity-20 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-eyecare-blue">
                  Professional Fitting and Consultation
                </h3>
                <p className="text-gray-700 mb-4">
                  With so many presbyopia correction options available, a comprehensive eye exam 
                  and professional consultation is essential to determine the best solution for 
                  your lifestyle, work demands, and visual needs.
                </p>
                <Link 
                  to="/eyewear"
                  className="text-eyecare-blue font-semibold hover:text-eyecare-dark-blue transition-colors"
                >
                  Explore our eyewear options →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* When to See a Doctor */}
        <section className="py-12 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">When to Schedule an Eye Exam</h2>
              
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-800">
                    <AlertTriangle className="w-5 h-5" />
                    Schedule an Appointment If You Experience:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {whenToSeeDoctor.map((symptom, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{symptom}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Prevention and Management */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Managing Presbyopia</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {prevention.map((tip, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-600">{tip}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-eyecare-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to See Clearly Again?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Don't let presbyopia limit your activities. We offer comprehensive presbyopia 
              evaluations and a full range of correction options to meet your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a 
                href="tel:9499973927"
                className="bg-white text-eyecare-blue hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300 callrail-phone"
              >
                Call Now: (949) 997-3927
              </a>
              
              <AppointmentRequestDialog>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-eyecare-blue px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300">
                  Request Appointment
                </Button>
              </AppointmentRequestDialog>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-purple-100">
              <Calendar className="w-4 h-4" />
              <span>Comprehensive presbyopia evaluations available</span>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PresbyopiaEducationPage;