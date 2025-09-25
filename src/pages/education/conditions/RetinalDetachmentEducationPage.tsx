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
  Zap,
  Shield,
  CheckCircle,
  XCircle,
  Calendar
} from 'lucide-react';

const RetinalDetachmentEducationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Retinal Detachment",
    "alternateName": ["Detached Retina"],
    "description": "A serious eye emergency where the retina pulls away from the underlying tissue, potentially causing permanent vision loss if not treated immediately.",
    "symptom": [
      "Sudden flashes of light",
      "Shower of floaters",
      "Shadow or curtain in vision",
      "Sudden vision loss",
      "Distorted vision"
    ],
    "possibleCause": [
      "Age-related changes",
      "Severe myopia",
      "Eye trauma",
      "Previous eye surgery",
      "Family history",
      "Diabetic retinopathy"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Vitrectomy",
        "description": "Surgical removal of vitreous gel and reattachment of retina"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Pneumatic retinopexy",
        "description": "Gas bubble injection to push retina back in place"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Scleral buckle",
        "description": "Silicone band placed around eye to support retina"
      }
    ]
  };

  const symptoms = [
    { icon: Zap, title: "Sudden Light Flashes", description: "Brief flashes of light, especially in peripheral vision" },
    { icon: Eye, title: "Shower of Floaters", description: "Sudden increase in dark spots or strings in vision" },
    { icon: Eye, title: "Vision Curtain/Shadow", description: "Dark shadow or curtain moving across field of vision" },
    { icon: AlertTriangle, title: "Sudden Vision Loss", description: "Rapid loss of vision in part or all of visual field" },
    { icon: Eye, title: "Distorted Vision", description: "Straight lines appearing wavy or bent" }
  ];

  const emergencySymptoms = [
    "Sudden onset of flashing lights",
    "Sudden shower of new floaters",
    "Shadow or curtain in peripheral vision",
    "Sudden loss of central or side vision",
    "Any combination of above symptoms"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Retinal Detachment: Emergency Eye Condition | Patient Education"
        description="Learn about retinal detachment - a serious eye emergency requiring immediate treatment. Symptoms, causes, and treatment options explained."
        keywords="retinal detachment, detached retina, eye emergency, sudden vision loss, flashing lights, floaters"
        canonicalUrl="https://eyecarecenteroc.com/education/conditions/retinal-detachment"
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
              <span className="text-gray-900">Retinal Detachment</span>
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
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Retinal Detachment
                  </h1>
                  <p className="text-xl text-gray-600 mb-6 max-w-3xl">
                    A serious eye emergency where the retina separates from underlying tissue, 
                    requiring immediate medical attention to prevent permanent vision loss.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Badge className="bg-red-100 text-red-800 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      Medical Emergency
                    </Badge>
                    <Badge className="bg-yellow-100 text-yellow-800 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      9 min read
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800">
                      Time-Sensitive Treatment
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <h3 className="text-lg font-semibold text-red-800">MEDICAL EMERGENCY</h3>
                </div>
                <p className="text-red-700 mb-4">
                  Retinal detachment is a sight-threatening emergency. If you experience sudden 
                  flashes, floaters, or vision loss, seek immediate medical attention.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="tel:9499973927"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors callrail-phone"
                  >
                    EMERGENCY: (949) 997-3927
                  </a>
                  <AppointmentRequestDialog>
                    <Button className="bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Urgent Care Needed
                    </Button>
                  </AppointmentRequestDialog>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustSignals className="py-8 bg-gray-50" />

        {/* Emergency Symptoms */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-red-800">Emergency Warning Signs</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {symptoms.map((symptom, index) => (
                  <Card key={index} className="border-red-200">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <symptom.icon className="w-6 h-6 text-red-600" />
                        <CardTitle className="text-lg">{symptom.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{symptom.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-red-900">
                  SEEK IMMEDIATE CARE FOR:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {emergencySymptoms.map((symptom, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-red-800 font-medium">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What is Retinal Detachment */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">What is Retinal Detachment?</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  Retinal detachment occurs when the retina - the light-sensitive tissue at 
                  the back of your eye - separates from the underlying layer of blood vessels 
                  that nourish it. Without this blood supply, the retinal cells cannot function 
                  properly and begin to die, leading to permanent vision loss.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Think of the retina like wallpaper peeling away from a wall. Once detached, 
                  the affected area cannot detect light properly, creating blind spots or 
                  complete vision loss in that area.
                </p>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-3 text-orange-900">Critical Timeline</h3>
                  <p className="text-orange-800">
                    The sooner a detached retina is reattached, the better the chances of 
                    preserving vision. Delays in treatment often result in permanent vision loss.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't Wait - Vision Loss May Be Permanent</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Retinal detachment is a true eye emergency. Every minute counts when it comes 
              to preserving your vision. Contact us immediately.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a 
                href="tel:9499973927"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300 callrail-phone"
              >
                EMERGENCY: (949) 997-3927
              </a>
              
              <AppointmentRequestDialog>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300">
                  Immediate Care Request
                </Button>
              </AppointmentRequestDialog>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-red-100">
              <Calendar className="w-4 h-4" />
              <span>24/7 emergency retinal care available</span>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default RetinalDetachmentEducationPage;