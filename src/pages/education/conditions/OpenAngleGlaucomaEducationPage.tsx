import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';
import TrustSignals from '@/components/TrustSignals';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Eye, 
  AlertTriangle, 
  Clock, 
  ArrowLeft,
  Calendar
} from 'lucide-react';

const OpenAngleGlaucomaEducationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Open-Angle Glaucoma",
    "description": "The most common form of glaucoma, developing slowly over time with gradual vision loss from the periphery inward.",
    "symptom": [
      "Gradual loss of peripheral vision",
      "Tunnel vision in advanced stages",
      "Usually no early symptoms"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Eye drops",
        "description": "Medications to reduce eye pressure"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Open-Angle Glaucoma: The Silent Thief of Sight | Patient Education"
        description="Learn about open-angle glaucoma, the most common form of glaucoma. Early detection and treatment are crucial for preserving vision."
        keywords="open-angle glaucoma, glaucoma types, eye pressure, vision loss, patient education"
        canonicalUrl="https://eyecarecenteroc.com/education/conditions/open-angle-glaucoma"
        ogType="article"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        <section className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-eyecare-blue">Home</Link>
              <span>/</span>
              <Link to="/patient-education" className="hover:text-eyecare-blue">Patient Education</Link>
              <span>/</span>
              <span className="text-gray-900">Open-Angle Glaucoma</span>
            </nav>
          </div>
        </section>

        <section className="bg-gradient-to-r from-green-50 to-blue-50 py-12">
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
                  <Eye className="w-8 h-8 text-green-500" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Open-Angle Glaucoma
                  </h1>
                  <p className="text-xl text-gray-600 mb-6 max-w-3xl">
                    The most common form of glaucoma, often called the "silent thief of sight" 
                    because it develops slowly without early symptoms.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      Most Common Type
                    </Badge>
                    <Badge className="bg-yellow-100 text-yellow-800 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      12 min read
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800">
                      Manageable with Treatment
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  <h3 className="text-lg font-semibold">Regular Eye Exams are Critical</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Open-angle glaucoma typically has no early warning signs. Regular comprehensive 
                  eye exams are the only way to detect this condition early when treatment is most effective.
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
                      Schedule Glaucoma Screening
                    </Button>
                  </AppointmentRequestDialog>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustSignals className="py-8 bg-gray-50" />

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">What is Open-Angle Glaucoma?</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  Open-angle glaucoma is the most common form of glaucoma, accounting for about 90% 
                  of all glaucoma cases. It occurs when the drainage angle of the eye becomes less 
                  efficient over time, leading to a gradual increase in eye pressure that can 
                  damage the optic nerve.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Unlike angle-closure glaucoma, which can be sudden and painful, open-angle glaucoma 
                  develops slowly and painlessly. Vision loss typically begins with peripheral (side) 
                  vision and progresses gradually toward the center.
                </p>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-3 text-green-900">Early Detection Saves Sight</h3>
                  <p className="text-green-800">
                    With early detection and proper treatment, most people with open-angle glaucoma 
                    can maintain useful vision throughout their lives. The key is catching it before 
                    significant vision loss occurs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-eyecare-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Protect Your Vision with Regular Screenings</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Early detection is your best defense against glaucoma. Schedule a comprehensive 
              eye exam to assess your risk and protect your vision.
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
                  Schedule Screening
                </Button>
              </AppointmentRequestDialog>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-purple-100">
              <Calendar className="w-4 h-4" />
              <span>Comprehensive glaucoma evaluations available</span>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OpenAngleGlaucomaEducationPage;