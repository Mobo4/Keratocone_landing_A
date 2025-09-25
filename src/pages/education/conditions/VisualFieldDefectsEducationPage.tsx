import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
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
  Brain,
  MapPin,
  Scan,
  Shield,
  CheckCircle,
  XCircle,
  Calendar,
  Activity
} from 'lucide-react';

const VisualFieldDefectsEducationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Visual Field Defects",
    "alternateName": ["Blind Spots", "Scotomas", "Visual Field Loss"],
    "description": "Loss of vision in specific areas of the visual field, which can indicate various eye or neurological conditions.",
    "symptom": [
      "Missing areas of vision",
      "Blind spots in field of vision",
      "Tunnel vision",
      "Difficulty with peripheral vision",
      "Problems navigating in space",
      "Difficulty reading or driving"
    ],
    "possibleCause": [
      "Glaucoma",
      "Stroke or brain injury",
      "Retinal detachment",
      "Optic nerve damage",
      "Brain tumors",
      "Migraine with aura"
    ],
    "riskFactor": [
      "Glaucoma",
      "Diabetes",
      "High blood pressure",
      "Previous stroke",
      "Family history",
      "Head trauma"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Visual field testing",
        "description": "Comprehensive perimetry to map field defects"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Treatment of underlying cause",
        "description": "Addressing the root condition causing field loss"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Vision rehabilitation",
        "description": "Training to maximize remaining vision"
      }
    ]
  };

  const symptoms = [
    { icon: Eye, title: "Missing Areas of Vision", description: "Blank or dark spots in your field of view" },
    { icon: Scan, title: "Tunnel Vision", description: "Loss of peripheral (side) vision" },
    { icon: MapPin, title: "Navigation Difficulty", description: "Problems judging distances or moving through space" },
    { icon: Activity, title: "Reading Problems", description: "Letters or words disappearing while reading" },
    { icon: Brain, title: "Headaches", description: "May occur with certain types of field defects" },
    { icon: Eye, title: "Light Sensitivity", description: "Increased sensitivity in affected areas" }
  ];

  const types = [
    { 
      category: "Central Defects", 
      description: "Loss of central vision",
      conditions: ["Macular degeneration", "Optic neuritis", "Macular hole"] 
    },
    { 
      category: "Peripheral Defects", 
      description: "Loss of side vision",
      conditions: ["Glaucoma", "Retinitis pigmentosa", "Brain injury"] 
    },
    { 
      category: "Hemianopia", 
      description: "Loss of half the visual field",
      conditions: ["Stroke", "Brain tumor", "Traumatic brain injury"] 
    },
    { 
      category: "Quadrantanopia", 
      description: "Loss of one quarter of visual field",
      conditions: ["Partial stroke", "Optic radiation damage", "Occipital lobe lesions"] 
    }
  ];

  const diagnosticTests = [
    {
      name: "Automated Perimetry",
      description: "Computerized test to map your entire visual field",
      duration: "15-30 minutes per eye"
    },
    {
      name: "Confrontation Visual Field Test",
      description: "Quick screening test during eye exam",
      duration: "2-5 minutes"
    },
    {
      name: "Amsler Grid",
      description: "Simple grid test for central vision defects",
      duration: "1-2 minutes"
    },
    {
      name: "OCT Imaging",
      description: "Detailed imaging of retina and optic nerve",
      duration: "5-10 minutes"
    }
  ];

  const whenToSeek = [
    "Sudden loss of vision in any area",
    "New blind spots or dark areas",
    "Progressive narrowing of vision",
    "Difficulty with daily activities",
    "Vision changes after head injury",
    "Flashing lights or new floaters"
  ];

  const managementStrategies = [
    "Regular monitoring with visual field tests",
    "Treatment of underlying conditions",
    "Vision rehabilitation therapy",
    "Adaptive techniques for daily living",
    "Proper lighting and contrast enhancement",
    "Use of assistive devices when needed"
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Visual Field Defects - Understanding Blind Spots & Vision Loss | Dr. Bonakdar"
        description="Learn about visual field defects, including blind spots, tunnel vision, and other types of vision loss. Expert diagnosis and treatment at Eyecare Center of Orange County."
        keywords="visual field defects, blind spots, scotomas, tunnel vision, peripheral vision loss, hemianopia, visual field test, perimetry, Orange County eye doctor"
        canonicalUrl="https://eyecarecenteroc.com/education/conditions/visual-field-defects"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main>
        {/* Hero Section with consistent design */}
        <Hero 
          title="Visual Field Defects"
          subtitle="Understanding vision loss in specific areas of your visual field"
          buttonText="Schedule Visual Field Test"
          backgroundClass="bg-gradient-to-r from-red-50 to-orange-50"
          colorScheme="purple"
        />

        {/* Breadcrumb */}
        <section className="bg-white py-4 border-b">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-eyecare-blue">Home</Link>
              <span>/</span>
              <Link to="/patient-education" className="hover:text-eyecare-blue">Patient Education</Link>
              <span>/</span>
              <span className="text-gray-900">Visual Field Defects</span>
            </nav>
          </div>
        </section>

        <TrustSignals className="py-8 bg-gray-50" />

        {/* Main Content */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Overview */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-6 h-6 text-red-500" />
                      Understanding Visual Field Defects
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700">
                      Visual field defects are areas of reduced or absent vision within your normal field of view. 
                      These "blind spots" or areas of vision loss can vary in size, shape, and location, and may 
                      indicate problems with the eye, optic nerve, or brain.
                    </p>
                    <p className="text-gray-700">
                      While everyone has a natural blind spot where the optic nerve connects to the eye, 
                      abnormal field defects can significantly impact daily activities and quality of life. 
                      Early detection and treatment of the underlying cause is crucial.
                    </p>
                    
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-amber-900 mb-1">Important Note</h4>
                          <p className="text-sm text-amber-800">
                            Sudden vision loss or new blind spots require immediate medical attention. 
                            These can be signs of serious conditions like retinal detachment or stroke.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Symptoms */}
                <Card>
                  <CardHeader>
                    <CardTitle>Common Symptoms</CardTitle>
                    <CardDescription>Visual field defects can present in various ways</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {symptoms.map((symptom, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                          <symptom.icon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-sm">{symptom.title}</h4>
                            <p className="text-xs text-gray-600 mt-1">{symptom.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Types of Field Defects */}
                <Card>
                  <CardHeader>
                    <CardTitle>Types of Visual Field Defects</CardTitle>
                    <CardDescription>Different patterns indicate different conditions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {types.map((type, index) => (
                      <div key={index} className="border-l-4 border-red-500 pl-4 py-2">
                        <h4 className="font-semibold text-lg">{type.category}</h4>
                        <p className="text-sm text-gray-600 mt-1">{type.description}</p>
                        <div className="mt-2">
                          <span className="text-xs font-medium text-gray-500">Common causes: </span>
                          <span className="text-xs text-gray-700">{type.conditions.join(", ")}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Diagnostic Tests */}
                <Card>
                  <CardHeader>
                    <CardTitle>Diagnostic Tests</CardTitle>
                    <CardDescription>How we evaluate your visual field</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {diagnosticTests.map((test, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <h4 className="font-semibold">{test.name}</h4>
                            <p className="text-sm text-gray-600 mt-1">{test.description}</p>
                            <p className="text-xs text-gray-500 mt-1">
                              <Clock className="w-3 h-3 inline mr-1" />
                              {test.duration}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Management */}
                <Card>
                  <CardHeader>
                    <CardTitle>Management & Treatment</CardTitle>
                    <CardDescription>Comprehensive approach to visual field defects</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {managementStrategies.map((strategy, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Shield className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-700">{strategy}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Quick Action Card */}
                <Card className="border-2 border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                      When to Seek Help
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {whenToSeek.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-sm">{item}</p>
                      </div>
                    ))}
                    
                    <Separator className="my-4" />
                    
                    <div className="space-y-3">
                      <AppointmentRequestDialog>
                        <Button className="w-full bg-eyecare-blue hover:bg-eyecare-dark-blue">
                          <Calendar className="w-4 h-4 mr-2" />
                          Schedule Visual Field Test
                        </Button>
                      </AppointmentRequestDialog>
                      <a 
                        href="tel:9499973927"
                        className="flex items-center justify-center gap-2 w-full bg-white border-2 border-eyecare-blue text-eyecare-blue hover:bg-eyecare-blue hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors callrail-phone"
                      >
                        Call: (949) 997-3927
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Risk Factors */}
                <Card>
                  <CardHeader>
                    <CardTitle>Risk Factors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-sm">Glaucoma or family history</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-sm">Diabetes or high blood pressure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-sm">Previous stroke or TIA</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-sm">Head trauma or brain injury</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-sm">Certain medications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-sm">Age over 60</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Related Conditions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Related Conditions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Link 
                        to="/education/conditions/open-angle-glaucoma"
                        className="block p-2 hover:bg-gray-50 rounded transition-colors text-sm text-eyecare-blue hover:text-eyecare-dark-blue"
                      >
                        → Glaucoma
                      </Link>
                      <Link 
                        to="/education/conditions/retinal-detachment"
                        className="block p-2 hover:bg-gray-50 rounded transition-colors text-sm text-eyecare-blue hover:text-eyecare-dark-blue"
                      >
                        → Retinal Detachment
                      </Link>
                      <Link 
                        to="/education/conditions/optic-neuritis"
                        className="block p-2 hover:bg-gray-50 rounded transition-colors text-sm text-eyecare-blue hover:text-eyecare-dark-blue"
                      >
                        → Optic Neuritis
                      </Link>
                      <Link 
                        to="/education/conditions/macular-degeneration"
                        className="block p-2 hover:bg-gray-50 rounded transition-colors text-sm text-eyecare-blue hover:text-eyecare-dark-blue"
                      >
                        → Macular Degeneration
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default VisualFieldDefectsEducationPage;