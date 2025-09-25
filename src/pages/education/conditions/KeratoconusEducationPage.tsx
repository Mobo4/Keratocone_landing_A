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
  Zap,
  Shield,
  CheckCircle,
  XCircle,
  Calendar,
  Triangle
} from 'lucide-react';

const KeratoconusEducationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Keratoconus",
    "alternateName": ["KC", "Corneal Ectasia"],
    "description": "A progressive eye disease where the cornea thins and bulges into a cone-like shape, causing distorted vision and sensitivity to light.",
    "symptom": [
      "Blurred or distorted vision",
      "Increased sensitivity to light",
      "Frequent prescription changes",
      "Difficulty driving at night",
      "Eye strain and headaches",
      "Seeing halos around lights"
    ],
    "possibleCause": [
      "Genetic predisposition",
      "Eye rubbing",
      "Allergies",
      "UV exposure",
      "Collagen disorders"
    ],
    "riskFactor": [
      "Family history",
      "Chronic eye rubbing",
      "Down syndrome",
      "Ehlers-Danlos syndrome",
      "Retinitis pigmentosa"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Specialty contact lenses",
        "description": "Hard contact lenses or scleral lenses to improve vision"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Corneal cross-linking",
        "description": "Treatment to strengthen the cornea and halt progression"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Corneal transplant",
        "description": "Surgical replacement of damaged corneal tissue"
      }
    ]
  };

  const symptoms = [
    { icon: Eye, title: "Blurred or Distorted Vision", description: "Vision becomes increasingly blurry and distorted" },
    { icon: Zap, title: "Light Sensitivity", description: "Increased sensitivity to bright lights and glare" },
    { icon: Eye, title: "Frequent Prescription Changes", description: "Regular need for new glasses or contact lenses" },
    { icon: Eye, title: "Night Vision Problems", description: "Difficulty seeing clearly in low light conditions" },
    { icon: Clock, title: "Eye Strain and Headaches", description: "Tired eyes and headaches from straining to see" },
    { icon: Triangle, title: "Halos Around Lights", description: "Seeing rings or halos around bright lights" }
  ];

  const causes = [
    { category: "Genetic Factors", items: ["Family history of keratoconus", "Inherited collagen disorders", "Genetic predisposition"] },
    { category: "Environmental", items: ["Chronic eye rubbing", "UV light exposure", "Contact lens wear (chronic)", "Eye trauma"] },
    { category: "Associated Conditions", items: ["Down syndrome", "Ehlers-Danlos syndrome", "Marfan syndrome", "Retinitis pigmentosa"] },
    { category: "Other Factors", items: ["Allergic eye disease", "Atopic dermatitis", "Sleep apnea", "Hormonal changes"] }
  ];

  const treatments = [
    {
      category: "Early Stage Treatment",
      treatments: [
        "Updated eyeglass prescriptions",
        "Soft contact lenses",
        "Corneal cross-linking (CXL)",
        "Monitoring and observation"
      ]
    },
    {
      category: "Advanced Treatment",
      treatments: [
        "Rigid gas permeable (RGP) contact lenses",
        "Scleral contact lenses",
        "Intacs corneal inserts",
        "Corneal transplant (severe cases)"
      ]
    }
  ];

  const whenToSeeDoctor = [
    "Sudden changes in vision quality",
    "Increasing difficulty with glasses or contacts",
    "Severe light sensitivity",
    "Frequent headaches or eye strain",
    "Family history of keratoconus",
    "Chronic eye rubbing habits"
  ];

  const prevention = [
    "Avoid rubbing your eyes vigorously",
    "Treat allergies to reduce eye irritation",
    "Wear UV-protective sunglasses",
    "Regular comprehensive eye exams",
    "Gentle eye care and hygiene",
    "Address underlying conditions promptly"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Keratoconus: Symptoms, Causes, and Treatment | Patient Education"
        description="Learn about keratoconus, a progressive corneal condition causing vision distortion. Comprehensive information on symptoms, treatments, and management options."
        keywords="keratoconus, corneal disease, progressive vision, contact lenses, corneal cross-linking, patient education"
        canonicalUrl="https://eyecarecenteroc.com/education/conditions/keratoconus"
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
              <span className="text-gray-900">Keratoconus</span>
            </nav>
          </div>
        </section>

        {/* Header */}
        <section className="bg-gradient-to-r from-orange-50 to-red-50 py-12">
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
                  <Triangle className="w-8 h-8 text-orange-500" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Keratoconus
                  </h1>
                  <p className="text-xl text-gray-600 mb-6 max-w-3xl">
                    A progressive eye condition where the cornea thins and bulges into a cone-like shape, 
                    causing distorted vision and light sensitivity.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Badge className="bg-orange-100 text-orange-800 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      Progressive Condition
                    </Badge>
                    <Badge className="bg-yellow-100 text-yellow-800 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      10 min read
                    </Badge>
                    <Badge className="bg-green-100 text-green-800">
                      Early Treatment Important
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  <h3 className="text-lg font-semibold">Early Detection is Key</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Keratoconus is progressive, meaning it worsens over time. Early detection and treatment 
                  can help slow progression and preserve vision quality.
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
                      Schedule Screening
                    </Button>
                  </AppointmentRequestDialog>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustSignals className="py-8 bg-gray-50" />

        {/* What is Keratoconus */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">What is Keratoconus?</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  Keratoconus is a progressive eye disease that affects the cornea, the clear front 
                  surface of your eye. In a healthy eye, the cornea is dome-shaped. With keratoconus, 
                  the cornea gradually thins and begins to bulge outward into a cone-like shape.
                </p>
                
                <p className="text-gray-600 mb-6">
                  This irregular shape prevents light from focusing properly on the retina, causing 
                  distorted and blurred vision. The condition typically affects both eyes, though 
                  one eye may be more severely affected than the other.
                </p>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-3 text-orange-900">Important Facts</h3>
                  <ul className="text-orange-800 space-y-2">
                    <li>• Keratoconus affects about 1 in 2,000 people</li>
                    <li>• It typically begins in the teenage years or early twenties</li>
                    <li>• The condition usually stabilizes after age 40</li>
                    <li>• Early treatment can significantly slow progression</li>
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
                  Progression Signs
                </h3>
                <p className="text-yellow-800">
                  If you notice frequent changes in your prescription, increasing difficulty with 
                  contact lenses, or worsening night vision, these may be signs of keratoconus 
                  progression. Early intervention is crucial.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Causes */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">What Causes Keratoconus?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {causes.map((cause, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-xl">{cause.category}</CardTitle>
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
              
              <div className="mt-8 bg-eyecare-blue bg-opacity-10 border border-eyecare-blue border-opacity-20 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-eyecare-blue">
                  Advanced Keratoconus Care
                </h3>
                <p className="text-gray-700 mb-4">
                  Our practice offers comprehensive keratoconus management, including corneal 
                  cross-linking therapy, specialty contact lens fittings, and coordination 
                  with corneal specialists when needed.
                </p>
                <Link 
                  to="/conditions"
                  className="text-eyecare-blue font-semibold hover:text-eyecare-dark-blue transition-colors"
                >
                  Learn more about our corneal treatments →
                </Link>
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
              <h2 className="text-3xl font-bold mb-8 text-center">Prevention and Management</h2>
              
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
            <h2 className="text-3xl font-bold mb-4">Early Detection Can Preserve Your Vision</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              If you suspect you may have keratoconus or have a family history, schedule a 
              comprehensive eye examination for early detection and treatment.
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
                  Schedule Consultation
                </Button>
              </AppointmentRequestDialog>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-purple-100">
              <Calendar className="w-4 h-4" />
              <span>Comprehensive corneal evaluations available</span>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default KeratoconusEducationPage;