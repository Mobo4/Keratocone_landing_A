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
  Target,
  Shield,
  CheckCircle,
  XCircle,
  Calendar,
  Users,
  Zap
} from 'lucide-react';

const MacularDegenerationEducationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Macular Degeneration",
    "alternateName": ["Age-related Macular Degeneration", "AMD", "ARMD"],
    "description": "A progressive eye disease affecting the macula, the central part of the retina, leading to loss of central vision while peripheral vision remains intact.",
    "symptom": [
      "Blurred or fuzzy central vision",
      "Straight lines appearing wavy",
      "Dark or empty areas in central vision",
      "Difficulty recognizing faces",
      "Problems with reading or fine detail work",
      "Need for brighter light when reading"
    ],
    "possibleCause": [
      "Age (primary factor)",
      "Genetics and family history",
      "Smoking",
      "High blood pressure",
      "High cholesterol",
      "Obesity"
    ],
    "riskFactor": [
      "Age over 50",
      "Family history",
      "Smoking",
      "Caucasian ethnicity",
      "Female gender",
      "Light eye color"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Anti-VEGF injections",
        "description": "Medications injected into the eye to stop abnormal blood vessel growth"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Nutritional supplements",
        "description": "AREDS2 formula to slow progression in intermediate stages"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Low vision aids",
        "description": "Devices and training to help maximize remaining vision"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Macular Degeneration: Causes, Symptoms, and Treatment | Patient Education"
        description="Learn about age-related macular degeneration (AMD), its symptoms, causes, and treatment options. Comprehensive patient education from Orange County specialists."
        keywords="macular degeneration, AMD, central vision loss, retina, patient education, Orange County"
        canonicalUrl="https://eyecarecenteroc.com/education/conditions/macular-degeneration"
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
              <span className="text-gray-900">Macular Degeneration</span>
            </nav>
          </div>
        </section>

        {/* Header */}
        <section className="bg-gradient-to-r from-purple-50 to-pink-50 py-12">
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
                  <Target className="w-8 h-8 text-purple-500" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Macular Degeneration
                  </h1>
                  <p className="text-xl text-gray-600 mb-6 max-w-3xl">
                    Understanding age-related macular degeneration (AMD), a leading cause of vision loss 
                    in people over 50 that affects central vision.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Badge className="bg-orange-100 text-orange-800 flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      Age-Related
                    </Badge>
                    <Badge className="bg-yellow-100 text-yellow-800 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      11 min read
                    </Badge>
                    <Badge className="bg-green-100 text-green-800">
                      Treatment Available
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-5 h-5 text-purple-500" />
                  <h3 className="text-lg font-semibold">Central Vision Impact</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Macular degeneration affects your central vision - the sharp, detailed vision you use for 
                  reading, driving, and recognizing faces. Early detection and treatment can help preserve vision.
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
                      Schedule Retina Exam
                    </Button>
                  </AppointmentRequestDialog>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustSignals className="py-8 bg-gray-50" />

        {/* What is Macular Degeneration */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">What is Macular Degeneration?</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  Age-related macular degeneration (AMD) is a progressive eye disease that affects the macula, 
                  the small central area of the retina responsible for sharp, detailed central vision. 
                  It's the leading cause of severe vision loss in people over 50 in developed countries.
                </p>
                
                <p className="text-gray-600 mb-6">
                  While AMD affects central vision, it typically doesn't cause complete blindness because 
                  peripheral (side) vision is usually not affected. However, the loss of central vision 
                  can significantly impact daily activities like reading, driving, and recognizing faces.
                </p>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-3 text-purple-900">Key Facts About AMD</h3>
                  <ul className="text-purple-800 space-y-2">
                    <li>• AMD affects over 11 million people in the United States</li>
                    <li>• It's the leading cause of blindness in Americans over 65</li>
                    <li>• Early detection can help preserve vision</li>
                    <li>• There are two types: dry AMD (90%) and wet AMD (10%)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types and Symptoms */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Types of Macular Degeneration</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="w-5 h-5 text-blue-500" />
                      Dry AMD
                    </CardTitle>
                    <CardDescription>90% of cases - slower progression</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Caused by the gradual breakdown of light-sensitive cells in the macula and 
                      the formation of yellow deposits called drusen.
                    </p>
                    <h4 className="font-semibold mb-2">Symptoms:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Gradual central vision loss</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Need for brighter light when reading</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Difficulty adapting to low light</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Blurriness in central vision</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                      Wet AMD
                    </CardTitle>
                    <CardDescription>10% of cases - rapid progression, more severe</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Abnormal blood vessels grow under the retina and leak blood and fluid, 
                      causing rapid central vision loss.
                    </p>
                    <h4 className="font-semibold mb-2">Symptoms:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Sudden central vision loss</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Straight lines appear wavy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Dark or empty area in center of vision</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Objects appear smaller than normal</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Treatment Options</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Dry AMD Treatment</CardTitle>
                    <CardDescription>Focus on slowing progression</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">AREDS2 nutritional supplements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Lifestyle modifications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Regular monitoring</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Shield className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Low vision aids</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Zap className="w-5 h-5 text-red-500" />
                      Wet AMD Treatment
                    </CardTitle>
                    <CardDescription>Active treatment to prevent vision loss</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Anti-VEGF injections (Lucentis, Avastin, Eylea)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Regular monitoring and injections</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Photodynamic therapy (in some cases)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-eyecare-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Protect Your Central Vision</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Early detection and treatment of macular degeneration can help preserve your vision. 
              Schedule a comprehensive retinal examination today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:9499973927"
                className="bg-white text-eyecare-blue hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300 callrail-phone"
              >
                Call Now: (949) 997-3927
              </a>
              
              <AppointmentRequestDialog>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-eyecare-blue px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300">
                  Schedule Exam
                </Button>
              </AppointmentRequestDialog>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MacularDegenerationEducationPage;