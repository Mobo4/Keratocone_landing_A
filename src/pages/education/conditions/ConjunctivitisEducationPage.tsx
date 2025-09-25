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
import { Separator } from '@/components/ui/separator';
import { 
  Eye, 
  AlertTriangle, 
  Clock, 
  ArrowLeft,
  Droplets,
  Shield,
  CheckCircle,
  XCircle,
  Calendar,
  Users
} from 'lucide-react';

const ConjunctivitisEducationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Conjunctivitis",
    "alternateName": ["Pink Eye", "Red Eye"],
    "description": "Inflammation of the conjunctiva, the thin tissue that covers the white part of the eye and inner eyelids, causing redness, irritation, and discharge.",
    "symptom": [
      "Red or pink eyes",
      "Eye discharge",
      "Itchy or burning eyes",
      "Tearing",
      "Gritty feeling in eyes",
      "Swollen eyelids"
    ],
    "possibleCause": [
      "Viral infection",
      "Bacterial infection",
      "Allergic reaction",
      "Chemical irritants",
      "Foreign objects",
      "Contact lens problems"
    ],
    "riskFactor": [
      "Contact with infected person",
      "Allergies",
      "Contact lens wear",
      "Weakened immune system",
      "Exposure to irritants"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Antibiotic eye drops",
        "description": "For bacterial conjunctivitis"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Antihistamine drops",
        "description": "For allergic conjunctivitis"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Supportive care",
        "description": "For viral conjunctivitis"
      }
    ]
  };

  const symptoms = [
    { icon: Eye, title: "Red or Pink Eyes", description: "The hallmark sign giving pink eye its name" },
    { icon: Droplets, title: "Eye Discharge", description: "May be watery, mucus-like, or thick yellow/green" },
    { icon: Eye, title: "Itchy or Burning Eyes", description: "Uncomfortable sensation and irritation" },
    { icon: Droplets, title: "Excessive Tearing", description: "Watery eyes as an inflammatory response" },
    { icon: Eye, title: "Gritty Feeling", description: "Sensation of sand or foreign matter in eyes" },
    { icon: Eye, title: "Swollen Eyelids", description: "Puffy, swollen appearance around the eyes" }
  ];

  const types = [
    { 
      category: "Viral Conjunctivitis", 
      description: "Most common type, highly contagious",
      items: ["Watery discharge", "Often starts in one eye", "May spread to other eye", "Usually resolves in 7-14 days"],
      color: "blue"
    },
    { 
      category: "Bacterial Conjunctivitis", 
      description: "Thick discharge, responds to antibiotics",
      items: ["Yellow or green discharge", "Eyes may be 'glued shut' in morning", "Can affect one or both eyes", "Improves with antibiotic treatment"],
      color: "red"
    },
    { 
      category: "Allergic Conjunctivitis", 
      description: "Not contagious, triggered by allergens",
      items: ["Intense itching", "Clear, watery discharge", "Usually affects both eyes", "Associated with other allergy symptoms"],
      color: "green"
    }
  ];

  const treatments = [
    {
      category: "Viral Conjunctivitis",
      treatments: [
        "Cool compresses for comfort",
        "Artificial tears for lubrication",
        "Rest and supportive care",
        "Avoid contact lens wear",
        "Prevention of spread to others"
      ]
    },
    {
      category: "Bacterial/Allergic",
      treatments: [
        "Prescription antibiotic drops (bacterial)",
        "Antihistamine drops (allergic)",
        "Oral medications if needed",
        "Cool compresses",
        "Gentle eyelid cleaning"
      ]
    }
  ];

  const whenToSeeDoctor = [
    "Moderate to severe eye pain",
    "Vision changes or light sensitivity",
    "Thick, purulent discharge",
    "Symptoms worsen after 2-3 days",
    "Recurrent episodes",
    "Newborn with any eye discharge"
  ];

  const prevention = [
    "Wash hands frequently and thoroughly",
    "Avoid touching or rubbing eyes",
    "Don't share personal items (towels, pillows)",
    "Replace eye makeup and contact lenses",
    "Stay home when contagious",
    "Clean surfaces with disinfectant"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Conjunctivitis (Pink Eye): Symptoms, Types, and Treatment | Patient Education"
        description="Learn about conjunctivitis (pink eye) - causes, symptoms, treatment options, and prevention. Understanding viral, bacterial, and allergic conjunctivitis."
        keywords="conjunctivitis, pink eye, red eye, eye infection, viral conjunctivitis, bacterial conjunctivitis, allergic conjunctivitis"
        canonicalUrl="https://eyecarecenteroc.com/education/conditions/conjunctivitis"
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
              <span className="text-gray-900">Conjunctivitis (Pink Eye)</span>
            </nav>
          </div>
        </section>

        {/* Header */}
        <section className="bg-gradient-to-r from-pink-50 to-red-50 py-12">
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
                  <Users className="w-8 h-8 text-pink-500" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Conjunctivitis (Pink Eye)
                  </h1>
                  <p className="text-xl text-gray-600 mb-6 max-w-3xl">
                    Common eye condition causing inflammation of the conjunctiva, 
                    resulting in red, irritated eyes with possible discharge.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Badge className="bg-pink-100 text-pink-800 flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      Often Contagious
                    </Badge>
                    <Badge className="bg-yellow-100 text-yellow-800 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      7 min read
                    </Badge>
                    <Badge className="bg-green-100 text-green-800">
                      Usually Treatable
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  <h3 className="text-lg font-semibold">Is it Contagious?</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Viral and bacterial conjunctivitis are highly contagious. Allergic conjunctivitis 
                  is not contagious. It's important to determine the type for proper treatment and prevention.
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
                      Schedule Evaluation
                    </Button>
                  </AppointmentRequestDialog>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustSignals className="py-8 bg-gray-50" />

        {/* What is Conjunctivitis */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">What is Conjunctivitis?</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  Conjunctivitis, commonly known as "pink eye," is inflammation of the conjunctiva - 
                  the thin, transparent tissue that covers the white part of your eye and lines 
                  the inside of your eyelids. This inflammation causes the blood vessels to become 
                  more visible, giving the eye its characteristic pink or red appearance.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Pink eye is one of the most common eye conditions, especially in children, 
                  and can be caused by infections, allergies, or irritants. While often uncomfortable, 
                  most cases resolve with appropriate treatment.
                </p>
                
                <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-3 text-pink-900">Quick Facts</h3>
                  <ul className="text-pink-800 space-y-2">
                    <li>• Pink eye affects millions of people annually</li>
                    <li>• Children and adults in close contact are at higher risk</li>
                    <li>• Most cases resolve within 1-2 weeks</li>
                    <li>• Proper hygiene can prevent spread</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Symptoms */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Common Symptoms</h2>
              
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
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-yellow-900">
                  When to Stay Home
                </h3>
                <p className="text-yellow-800">
                  If you have viral or bacterial conjunctivitis, stay home from work, school, 
                  or daycare until symptoms improve or you've been on antibiotic treatment 
                  for 24 hours (if bacterial).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Conjunctivitis */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Types of Conjunctivitis</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {types.map((type, index) => (
                  <Card key={index} className={`border-${type.color}-200`}>
                    <CardHeader>
                      <CardTitle className={`text-xl text-${type.color}-800`}>{type.category}</CardTitle>
                      <CardDescription className="text-gray-600">{type.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {type.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <CheckCircle className={`w-4 h-4 text-${type.color}-500 mt-1 flex-shrink-0`} />
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
              <h2 className="text-3xl font-bold mb-8 text-center">Treatment Options</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
              
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-900">
                  Home Care Tips
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-blue-800">
                  <div>• Apply cool or warm compresses</div>
                  <div>• Use preservative-free artificial tears</div>
                  <div>• Gently clean eyelids with mild soap</div>
                  <div>• Avoid wearing contact lenses</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When to See a Doctor */}
        <section className="py-12 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">When to See an Eye Doctor</h2>
              
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-800">
                    <AlertTriangle className="w-5 h-5" />
                    Seek Professional Care If You Experience:
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

        {/* Prevention */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Prevention Tips</h2>
              
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
            <h2 className="text-3xl font-bold mb-4">Red, Irritated Eyes? Get Expert Care</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Don't let conjunctivitis disrupt your life. Get proper diagnosis and treatment 
              to feel better faster and prevent spread to others.
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
                  Schedule Appointment
                </Button>
              </AppointmentRequestDialog>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-purple-100">
              <Calendar className="w-4 h-4" />
              <span>Same-day appointments for urgent cases</span>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ConjunctivitisEducationPage;