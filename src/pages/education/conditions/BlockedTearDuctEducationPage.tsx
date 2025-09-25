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
  Droplets,
  Shield,
  CheckCircle,
  XCircle,
  Calendar,
  Baby,
  Users,
  Zap,
  Wind
} from 'lucide-react';

const BlockedTearDuctEducationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Blocked Tear Duct",
    "alternateName": ["Nasolacrimal Duct Obstruction", "Dacryostenosis", "Epiphora"],
    "description": "A condition where tears cannot drain normally from the eye due to a blocked or narrowed tear drainage system, causing excessive tearing and potential infections.",
    "symptom": [
      "Excessive tearing (epiphora)",
      "Mucous discharge from the eye",
      "Recurrent eye infections",
      "Crusting around the eyelids",
      "Swelling near the inner corner of the eye",
      "Blurred vision from excessive tears"
    ],
    "possibleCause": [
      "Congenital blockage in newborns",
      "Age-related narrowing",
      "Chronic inflammation",
      "Previous eye or nasal surgery",
      "Trauma to the face or nose",
      "Chronic sinus problems"
    ],
    "riskFactor": [
      "Advanced age",
      "Previous eye surgery",
      "Chronic eye infections",
      "Use of certain eye medications",
      "Nasal or sinus problems",
      "Previous chemotherapy"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Tear duct massage",
        "description": "Gentle massage to help open blocked ducts in infants"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Tear duct probing",
        "description": "Minor procedure to open blocked tear ducts"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Dacryocystorhinostomy (DCR)",
        "description": "Surgical procedure to create a new pathway for tear drainage"
      }
    ]
  };

  const symptoms = [
    { icon: Droplets, title: "Excessive Tearing", description: "Constant watering of the eyes, even when not crying" },
    { icon: Eye, title: "Mucous Discharge", description: "Yellow or green discharge from the eye" },
    { icon: Zap, title: "Recurrent Infections", description: "Frequent episodes of conjunctivitis or eye infections" },
    { icon: Eye, title: "Crusting", description: "Dried discharge causing eyelids to stick together" },
    { icon: Wind, title: "Swelling", description: "Puffiness near the inner corner of the eye" },
    { icon: Eye, title: "Blurred Vision", description: "Temporary vision problems due to excess tears" }
  ];

  const causes = [
    { 
      category: "Congenital (Present at Birth)", 
      description: "Most common in newborns and infants",
      items: ["Underdeveloped tear duct system", "Membrane covering the duct opening", "Narrow or missing tear ducts"] 
    },
    { 
      category: "Acquired (Develops Later)", 
      description: "Develops due to various factors throughout life",
      items: ["Age-related narrowing", "Chronic inflammation", "Eye or nasal surgery complications", "Trauma to face or nose"] 
    },
    { 
      category: "Medical Conditions", 
      description: "Health conditions that can contribute to blockages",
      items: ["Chronic sinusitis", "Nasal polyps", "Autoimmune conditions", "Previous chemotherapy treatment"] 
    }
  ];

  const treatments = [
    {
      category: "Conservative Treatment",
      treatments: [
        "Warm compresses",
        "Gentle tear duct massage",
        "Antibiotic eye drops for infections",
        "Artificial tears for comfort",
        "Regular cleaning of discharge"
      ]
    },
    {
      category: "Minor Procedures",
      treatments: [
        "Tear duct probing (for children)",
        "Balloon catheter dilation",
        "Temporary stent placement",
        "Punctal dilation",
        "Silicone tube insertion"
      ]
    },
    {
      category: "Surgical Options",
      treatments: [
        "Dacryocystorhinostomy (DCR)",
        "Conjunctivodacryocystorhinostomy",
        "External DCR approach",
        "Endoscopic DCR approach",
        "Balloon dacryoplasty"
      ]
    }
  ];

  const whenToSeeDoctor = [
    "Persistent excessive tearing for more than a few days",
    "Yellow or green discharge from the eye",
    "Recurrent eye infections",
    "Swelling or redness near the inner corner of the eye",
    "Pain or tenderness around the tear duct area",
    "Vision problems due to excessive tearing"
  ];

  const prevention = [
    "Practice good eye hygiene",
    "Avoid touching or rubbing eyes excessively",
    "Treat underlying conditions like sinusitis",
    "Use protective eyewear during sports or work",
    "Seek prompt treatment for eye infections",
    "Follow up regularly if you have chronic conditions"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Blocked Tear Duct: Symptoms, Causes, and Treatment Options | Patient Education"
        description="Learn about blocked tear ducts, a condition causing excessive tearing and eye infections. Comprehensive guide to symptoms, causes, and treatment options from massage to surgery."
        keywords="blocked tear duct, dacryostenosis, epiphora, excessive tearing, tear duct surgery, Orange County"
        canonicalUrl="https://eyecarecenteroc.com/education/conditions/blocked-tear-duct"
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
              <span className="text-gray-900">Blocked Tear Duct</span>
            </nav>
          </div>
        </section>

        {/* Header */}
        <section className="bg-gradient-to-r from-blue-50 to-teal-50 py-12">
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
                  <Droplets className="w-8 h-8 text-teal-500" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Blocked Tear Duct
                  </h1>
                  <p className="text-xl text-gray-600 mb-6 max-w-3xl">
                    Understanding this condition that prevents normal tear drainage, 
                    causing excessive tearing, discharge, and potential eye infections.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Badge className="bg-teal-100 text-teal-800 flex items-center gap-1">
                      <Baby className="w-3 h-3" />
                      Common in Infants
                    </Badge>
                    <Badge className="bg-yellow-100 text-yellow-800 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      7 min read
                    </Badge>
                    <Badge className="bg-green-100 text-green-800">
                      Highly Treatable
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  <h3 className="text-lg font-semibold">Experiencing Persistent Tearing?</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  If you have excessive tearing, discharge, or recurrent eye infections, 
                  especially if symptoms persist for more than a few days, prompt evaluation is recommended.
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

        {/* What is a Blocked Tear Duct */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">What is a Blocked Tear Duct?</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  A blocked tear duct, medically known as nasolacrimal duct obstruction or 
                  dacryostenosis, occurs when the normal drainage pathway for tears becomes 
                  blocked or narrowed. Normally, tears produced by your tear glands drain from 
                  the surface of your eye through small openings in your eyelids, down through 
                  tiny tubes, and finally into your nose.
                </p>
                
                <p className="text-gray-600 mb-6">
                  When this drainage system is blocked, tears accumulate on the eye's surface, 
                  causing excessive tearing (epiphora), discharge, and potentially leading to 
                  infections. The condition can affect one or both eyes and can occur at any 
                  age, though it's most common in newborns and older adults.
                </p>
                
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-3 text-teal-900">Did You Know?</h3>
                  <p className="text-teal-800">
                    About 5% of newborns are born with blocked tear ducts, but most resolve 
                    naturally within the first year. In adults, blocked tear ducts are more 
                    commonly acquired due to aging, infection, or injury.
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
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-yellow-900">
                  Distinguishing from Other Conditions
                </h3>
                <p className="text-yellow-800">
                  While excessive tearing can be a symptom of dry eyes (paradoxically), blocked 
                  tear ducts typically also involve discharge, crusting, and recurrent infections. 
                  The tearing is usually constant rather than episodic.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Causes */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">What Causes Blocked Tear Ducts?</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
              <h2 className="text-3xl font-bold mb-8 text-center">Treatment Options</h2>
              
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
                  Specialized Tear Duct Care
                </h3>
                <p className="text-gray-700 mb-4">
                  Treatment for blocked tear ducts requires proper diagnosis to determine the 
                  best approach. We work with specialized oculoplastic surgeons when surgical 
                  intervention is needed and provide comprehensive pre- and post-treatment care.
                </p>
                <Link 
                  to="/conditions/dry-eye"
                  className="text-eyecare-blue font-semibold hover:text-eyecare-dark-blue transition-colors"
                >
                  Learn more about our tear-related treatments →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* When to See a Doctor */}
        <section className="py-12 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">When to Seek Medical Care</h2>
              
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

        {/* Prevention and Care */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Prevention and Care Tips</h2>
              
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
            <h2 className="text-3xl font-bold mb-4">Don't Let Blocked Tear Ducts Affect Your Comfort</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Get proper diagnosis and treatment for blocked tear ducts. Our experienced team 
              can evaluate your condition and recommend the most appropriate treatment approach.
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
              <span>Prompt evaluation available for tear duct problems</span>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlockedTearDuctEducationPage;