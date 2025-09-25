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
  Heart,
  Zap,
  Target
} from 'lucide-react';

const DiabeticRetinopathyEducationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Diabetic Retinopathy",
    "alternateName": ["Diabetic Eye Disease", "DR"],
    "description": "A diabetes complication that affects the blood vessels in the retina, potentially leading to vision loss and blindness if left untreated.",
    "symptom": [
      "Blurred or fluctuating vision",
      "Dark or empty areas in vision",
      "Floaters",
      "Difficulty seeing at night",
      "Colors appearing faded",
      "Vision loss"
    ],
    "possibleCause": [
      "High blood sugar levels",
      "High blood pressure",
      "Duration of diabetes",
      "Poor blood sugar control",
      "Pregnancy",
      "High cholesterol"
    ],
    "riskFactor": [
      "Duration of diabetes",
      "Poor blood sugar control",
      "High blood pressure",
      "High cholesterol",
      "Pregnancy",
      "Smoking"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Blood sugar control",
        "description": "Maintaining proper blood glucose levels to slow progression"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Anti-VEGF injections",
        "description": "Medications to reduce swelling and prevent abnormal blood vessel growth"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Laser treatment",
        "description": "Laser therapy to seal leaking blood vessels"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Diabetic Retinopathy: Diabetes Eye Complications | Patient Education"
        description="Learn about diabetic retinopathy, a serious diabetes complication affecting the eyes. Understand symptoms, causes, and treatment options."
        keywords="diabetic retinopathy, diabetes eye disease, blood sugar, retina, patient education, Orange County"
        canonicalUrl="https://eyecarecenteroc.com/education/conditions/diabetic-retinopathy"
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
              <span className="text-gray-900">Diabetic Retinopathy</span>
            </nav>
          </div>
        </section>

        {/* Header */}
        <section className="bg-gradient-to-r from-red-50 to-orange-50 py-12">
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
                  <Activity className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Diabetic Retinopathy
                  </h1>
                  <p className="text-xl text-gray-600 mb-6 max-w-3xl">
                    Understanding this serious diabetes complication that affects the blood vessels 
                    in your retina and can lead to vision loss if not properly managed.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Badge className="bg-red-100 text-red-800 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      Serious Condition
                    </Badge>
                    <Badge className="bg-yellow-100 text-yellow-800 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      13 min read
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 flex items-center gap-1">
                      <Heart className="w-3 h-3" />
                      Diabetes-Related
                    </Badge>
                    <Badge className="bg-green-100 text-green-800">
                      Preventable
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-5 h-5 text-red-500" />
                  <h3 className="text-lg font-semibold text-red-900">Important for People with Diabetes</h3>
                </div>
                <p className="text-red-800 mb-4">
                  If you have diabetes, regular dilated eye exams are crucial for detecting diabetic retinopathy 
                  early, when treatment is most effective. Don't wait for symptoms - they often appear too late.
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
                      Schedule Diabetic Eye Exam
                    </Button>
                  </AppointmentRequestDialog>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustSignals className="py-8 bg-gray-50" />

        {/* What is Diabetic Retinopathy */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">What is Diabetic Retinopathy?</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  Diabetic retinopathy is a diabetes complication that affects the blood vessels in the retina, 
                  the light-sensitive tissue at the back of the eye. High blood sugar levels damage the tiny 
                  blood vessels in the retina, causing them to leak fluid or bleed.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Anyone with type 1 or type 2 diabetes can develop diabetic retinopathy. The longer you've 
                  had diabetes and the less controlled your blood sugar, the more likely you are to develop 
                  this eye complication. However, with proper management, diabetic retinopathy can often be prevented.
                </p>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-3 text-red-900">Critical Facts</h3>
                  <ul className="text-red-800 space-y-2">
                    <li>• Diabetic retinopathy is the leading cause of blindness in working-age adults</li>
                    <li>• It affects 1 in 3 people with diabetes</li>
                    <li>• Early stages often have no symptoms</li>
                    <li>• Annual eye exams can detect it before vision loss occurs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stages */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Stages of Diabetic Retinopathy</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="w-5 h-5 text-yellow-500" />
                      Non-Proliferative (Early)
                    </CardTitle>
                    <CardDescription>Mild to severe stages with blood vessel damage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Blood vessels in the retina weaken and may leak fluid into the surrounding tissue, 
                      causing swelling (macular edema).
                    </p>
                    <h4 className="font-semibold mb-2">Symptoms (often none in early stages):</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span>Mild blurred vision</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span>Difficulty reading</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span>Fluctuating vision</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                      Proliferative (Advanced)
                    </CardTitle>
                    <CardDescription>Severe stage with new blood vessel growth</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      The retina grows new blood vessels that are fragile and can bleed into the eye, 
                      causing severe vision loss or blindness.
                    </p>
                    <h4 className="font-semibold mb-2">Symptoms:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Floaters or dark spots</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Severe vision loss</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>Blank or dark areas in vision</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Factors and Prevention */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Risk Factors and Prevention</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Risk Factors You Can't Control</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Duration of diabetes (longer = higher risk)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Type 1 diabetes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Pregnancy (if diabetic)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Genetics and family history</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-500" />
                      Prevention Steps You Can Take
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Control blood sugar levels (A1C below 7%)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Manage blood pressure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Control cholesterol levels</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Don't smoke</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Get annual dilated eye exams</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Treatment Options</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-blue-500" />
                      Blood Sugar Control
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">
                      The most important treatment is controlling diabetes through:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Medication compliance</li>
                      <li>• Healthy diet</li>
                      <li>• Regular exercise</li>
                      <li>• Blood sugar monitoring</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-yellow-500" />
                      Laser Treatment
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">
                      Laser therapy to seal leaking blood vessels and reduce swelling:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Focal laser treatment</li>
                      <li>• Scatter laser treatment</li>
                      <li>• Outpatient procedure</li>
                      <li>• Helps prevent further vision loss</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="w-5 h-5 text-green-500" />
                      Injectable Medications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">
                      Anti-VEGF injections to reduce swelling and stop abnormal blood vessel growth:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Avastin, Lucentis, Eylea</li>
                      <li>• Monthly or as-needed injections</li>
                      <li>• Can improve vision</li>
                      <li>• Prevents further damage</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Exam Schedule */}
        <section className="py-12 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Recommended Eye Exam Schedule for Diabetics</h2>
              
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-center text-blue-900">How Often Should You Have Eye Exams?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-900">Type 1 Diabetes</h4>
                      <ul className="space-y-2 text-blue-800">
                        <li className="flex items-start gap-2">
                          <Calendar className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Within 5 years of diagnosis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Calendar className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Then annually</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-900">Type 2 Diabetes</h4>
                      <ul className="space-y-2 text-blue-800">
                        <li className="flex items-start gap-2">
                          <Calendar className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>At time of diagnosis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Calendar className="w-4 h-4 mt-1 flex-shrink-0" />
                          <span>Then annually</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                    <p className="text-blue-900 font-medium text-center">
                      More frequent exams may be needed if diabetic retinopathy is detected
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-eyecare-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Protect Your Vision with Regular Diabetic Eye Exams</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Don't let diabetes steal your sight. Early detection and treatment can prevent vision loss 
              from diabetic retinopathy. Schedule your comprehensive diabetic eye exam today.
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
                  Schedule Diabetic Eye Exam
                </Button>
              </AppointmentRequestDialog>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-purple-100">
              <Heart className="w-4 h-4" />
              <span>Specialized diabetic eye care available</span>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DiabeticRetinopathyEducationPage;