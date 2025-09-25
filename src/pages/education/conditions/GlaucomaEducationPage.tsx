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
  Activity,
  Shield,
  CheckCircle,
  XCircle,
  Calendar,
  Search,
  Gauge,
  Target
} from 'lucide-react';

const GlaucomaEducationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Glaucoma",
    "alternateName": ["Open-angle Glaucoma", "Angle-closure Glaucoma", "The Silent Thief of Sight"],
    "description": "A group of eye diseases that damage the optic nerve, often due to abnormally high pressure in the eye, leading to gradual vision loss that can result in blindness if untreated.",
    "symptom": [
      "Gradual loss of peripheral vision",
      "Tunnel vision in advanced stages",
      "Severe eye pain (acute angle-closure)",
      "Blurred vision",
      "Halos around lights",
      "Eye redness"
    ],
    "possibleCause": [
      "High intraocular pressure",
      "Poor blood flow to optic nerve",
      "Age over 60",
      "Family history",
      "Certain medical conditions",
      "Previous eye injury"
    ],
    "riskFactor": [
      "Age over 60",
      "African American ancestry",
      "Family history of glaucoma",
      "Diabetes",
      "High blood pressure",
      "Severe nearsightedness"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Eye drops",
        "description": "Medications to lower eye pressure and slow progression"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Laser therapy",
        "description": "Procedures to improve fluid drainage from the eye"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Surgery",
        "description": "Creating new drainage pathways to lower eye pressure"
      }
    ]
  };

  const symptoms = {
    openAngle: [
      { title: "Gradual Vision Loss", description: "Slow loss of side (peripheral) vision, usually in both eyes" },
      { title: "Tunnel Vision", description: "Advanced stages may cause tunnel vision" },
      { title: "No Early Symptoms", description: "Often called 'silent thief of sight' because early stages have no symptoms" }
    ],
    angleClosure: [
      { title: "Severe Eye Pain", description: "Sudden, intense eye pain that requires immediate attention" },
      { title: "Nausea and Vomiting", description: "Often accompanies severe eye pain" },
      { title: "Blurred Vision", description: "Sudden blurred or decreased vision" },
      { title: "Halos Around Lights", description: "Seeing colorful halos around lights" },
      { title: "Red Eye", description: "Eye becomes red and feels very hard" }
    ]
  };

  const riskFactors = [
    { category: "Age", factors: ["Being over 60 years old", "Risk increases with each decade"] },
    { category: "Ethnicity", factors: ["African Americans over 40", "Hispanic Americans over 60", "Asian Americans"] },
    { category: "Family History", factors: ["Parents or siblings with glaucoma", "Genetic predisposition"] },
    { category: "Medical Conditions", factors: ["Diabetes", "High blood pressure", "Heart disease", "Hypothyroidism"] },
    { category: "Eye Factors", factors: ["High eye pressure", "Thin corneas", "Severe nearsightedness", "Previous eye injury"] }
  ];

  const treatments = {
    medications: [
      "Prostaglandin analogs (first-line treatment)",
      "Beta blockers",
      "Alpha agonists", 
      "Carbonic anhydrase inhibitors",
      "Combination eye drops"
    ],
    procedures: [
      "Laser trabeculoplasty (SLT)",
      "Laser iridotomy",
      "Trabeculectomy surgery",
      "Glaucoma drainage devices",
      "Minimally invasive glaucoma surgery (MIGS)"
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Glaucoma: The Silent Thief of Sight | Patient Education"
        description="Learn about glaucoma symptoms, causes, and treatment. Early detection and treatment can prevent vision loss from this 'silent' eye disease."
        keywords="glaucoma, eye pressure, optic nerve, vision loss, patient education, Orange County"
        canonicalUrl="https://eyecarecenteroc.com/education/conditions/glaucoma"
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
              <span className="text-gray-900">Glaucoma</span>
            </nav>
          </div>
        </section>

        {/* Header */}
        <section className="bg-gradient-to-r from-green-50 to-emerald-50 py-12">
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
                  <Search className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Glaucoma
                  </h1>
                  <p className="text-xl text-gray-600 mb-6 max-w-3xl">
                    Understanding the "silent thief of sight" - a group of eye diseases that can cause 
                    permanent vision loss without early warning signs.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Badge className="bg-red-100 text-red-800 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      Serious Condition
                    </Badge>
                    <Badge className="bg-yellow-100 text-yellow-800 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      12 min read
                    </Badge>
                    <Badge className="bg-green-100 text-green-800">
                      Early Detection Critical
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <h3 className="text-lg font-semibold text-red-900">Why Early Detection Matters</h3>
                </div>
                <p className="text-red-800 mb-4">
                  Glaucoma often has no early symptoms, but vision loss can be prevented with early detection 
                  and treatment. Regular eye exams are crucial, especially if you're over 40 or have risk factors.
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
                      Schedule Eye Exam
                    </Button>
                  </AppointmentRequestDialog>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustSignals className="py-8 bg-gray-50" />

        {/* What is Glaucoma */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">What is Glaucoma?</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  Glaucoma is not just one disease, but a group of eye diseases that gradually steal sight 
                  without warning. It's often called the "silent thief of sight" because most types of 
                  glaucoma typically cause no symptoms until significant vision loss has occurred.
                </p>
                
                <p className="text-gray-600 mb-6">
                  All types of glaucoma involve damage to the optic nerve, which connects your eye to your brain. 
                  This damage is often, but not always, associated with increased pressure inside the eye. 
                  As nerve fibers are damaged, blind spots develop in your visual field.
                </p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-3 text-green-900">Key Facts About Glaucoma</h3>
                  <ul className="text-green-800 space-y-2">
                    <li>• Glaucoma is the second leading cause of blindness worldwide</li>
                    <li>• Over 3 million Americans have glaucoma, but only half know it</li>
                    <li>• Vision loss from glaucoma is irreversible, but progression can be stopped</li>
                    <li>• Early detection and treatment can prevent most glaucoma blindness</li>
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
              <h2 className="text-3xl font-bold mb-8 text-center">Types of Glaucoma and Their Symptoms</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="w-5 h-5 text-blue-500" />
                      Open-Angle Glaucoma
                    </CardTitle>
                    <CardDescription>Most common type (90% of cases) - develops slowly</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {symptoms.openAngle.map((symptom, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Eye className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-gray-700">{symptom.title}</span>
                            <p className="text-sm text-gray-600">{symptom.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                      Angle-Closure Glaucoma
                    </CardTitle>
                    <CardDescription>Medical emergency - requires immediate treatment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {symptoms.angleClosure.map((symptom, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-gray-700">{symptom.title}</span>
                            <p className="text-sm text-gray-600">{symptom.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Factors */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Who is at Risk?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {riskFactors.map((category, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.factors.map((factor, factorIndex) => (
                          <li key={factorIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{factor}</span>
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

        {/* Diagnosis */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">How is Glaucoma Diagnosed?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gauge className="w-5 h-5 text-blue-500" />
                      Eye Pressure Test
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">
                      Measures intraocular pressure (IOP) using tonometry.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Normal pressure: 12-22 mmHg</li>
                      <li>• High pressure increases glaucoma risk</li>
                      <li>• Some people develop glaucoma with normal pressure</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-green-500" />
                      Optic Nerve Examination
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">
                      Direct examination of the optic nerve for signs of damage.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Dilated eye examination</li>
                      <li>• Optic nerve photography</li>
                      <li>• OCT (optical coherence tomography)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Visual Field Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Comprehensive testing to detect blind spots in peripheral vision that may indicate glaucoma damage. 
                    This test maps your entire field of vision and can detect even small areas of vision loss.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 text-sm">
                      <strong>Note:</strong> Visual field tests are repeated regularly to monitor progression 
                      and ensure treatment is effective.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Treatment */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Treatment Options</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Medications (Eye Drops)</CardTitle>
                    <CardDescription>First-line treatment to lower eye pressure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {treatments.medications.map((med, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{med}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
                      <p className="text-yellow-800 text-sm">
                        <strong>Important:</strong> Eye drops must be used daily as prescribed to be effective.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Laser Therapy & Surgery</CardTitle>
                    <CardDescription>When medications are not sufficient</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {treatments.procedures.map((procedure, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{procedure}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-xl text-green-900">Treatment Goals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-green-900">Lower Eye Pressure</h4>
                      <p className="text-green-800 text-sm">Reduce pressure to prevent further damage</p>
                    </div>
                    <div className="text-center">
                      <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-green-900">Preserve Vision</h4>
                      <p className="text-green-800 text-sm">Prevent additional vision loss</p>
                    </div>
                    <div className="text-center">
                      <Eye className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <h4 className="font-semibold text-green-900">Maintain Quality of Life</h4>
                      <p className="text-green-800 text-sm">Keep functional vision for daily activities</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* When to Seek Care */}
        <section className="py-12 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">When to Seek Immediate Care</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-800">
                      <AlertTriangle className="w-5 h-5" />
                      Emergency Symptoms
                    </CardTitle>
                    <CardDescription>Seek immediate medical attention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-red-700">Severe eye pain</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-red-700">Sudden vision changes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-red-700">Nausea and vomiting with eye pain</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-red-700">Halos around lights</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-orange-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-orange-800">
                      <Calendar className="w-5 h-5" />
                      Regular Screening
                    </CardTitle>
                    <CardDescription>Recommended exam frequency</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Age 40-54: Every 3-5 years</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Age 55-64: Every 1-3 years</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">Age 65+: Every 1-2 years</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">High risk: Annual exams</span>
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
            <h2 className="text-3xl font-bold mb-4">Protect Your Vision with Early Detection</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Don't wait for symptoms - they may never come. Regular comprehensive eye exams 
              can detect glaucoma early when treatment is most effective.
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
                  Schedule Glaucoma Screening
                </Button>
              </AppointmentRequestDialog>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-purple-100">
              <Shield className="w-4 h-4" />
              <span>Comprehensive glaucoma evaluation available</span>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default GlaucomaEducationPage;