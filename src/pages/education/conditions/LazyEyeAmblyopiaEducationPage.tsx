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
  Baby,
  Shield,
  CheckCircle,
  XCircle,
  Calendar
} from 'lucide-react';

const LazyEyeAmblyopiaEducationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Amblyopia",
    "alternateName": ["Lazy Eye"],
    "description": "A vision development disorder where one eye fails to achieve normal visual acuity, typically developing in early childhood.",
    "symptom": [
      "Poor vision in one eye",
      "Eyes that turn in or out",
      "Head tilting",
      "Squinting or shutting one eye",
      "Poor depth perception"
    ],
    "possibleCause": [
      "Strabismus (crossed eyes)",
      "Refractive errors",
      "Visual deprivation",
      "Congenital cataracts"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Eye patching",
        "description": "Covering the stronger eye to force the weaker eye to work"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Corrective glasses",
        "description": "Glasses to correct refractive errors"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Vision therapy",
        "description": "Exercises to improve visual function"
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Lazy Eye (Amblyopia) in Children: Early Detection & Treatment"
        description="Learn about amblyopia (lazy eye) in children - causes, symptoms, and treatment options. Early detection is crucial for successful treatment."
        keywords="lazy eye, amblyopia, children vision, pediatric eye care, eye patching, vision therapy"
        canonicalUrl="https://eyecarecenteroc.com/education/conditions/lazy-eye-amblyopia"
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
              <span className="text-gray-900">Lazy Eye (Amblyopia)</span>
            </nav>
          </div>
        </section>

        {/* Header */}
        <section className="bg-gradient-to-r from-yellow-50 to-orange-50 py-12">
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
                  <Baby className="w-8 h-8 text-yellow-500" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Lazy Eye (Amblyopia)
                  </h1>
                  <p className="text-xl text-gray-600 mb-6 max-w-3xl">
                    A vision development disorder where one eye doesn't develop normal vision, 
                    typically occurring in early childhood and requiring prompt treatment.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Badge className="bg-yellow-100 text-yellow-800 flex items-center gap-1">
                      <Baby className="w-3 h-3" />
                      Childhood Condition
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-800 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Early Treatment Critical
                    </Badge>
                    <Badge className="bg-green-100 text-green-800">
                      Highly Treatable if Caught Early
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  <h3 className="text-lg font-semibold text-yellow-800">Early Detection is Crucial</h3>
                </div>
                <p className="text-yellow-700 mb-4">
                  Amblyopia is most treatable before age 7-8. Early childhood eye exams are 
                  essential for detecting and treating this condition effectively.
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
                      Schedule Child's Eye Exam
                    </Button>
                  </AppointmentRequestDialog>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustSignals className="py-8 bg-gray-50" />

        {/* What is Amblyopia */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">What is Amblyopia (Lazy Eye)?</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  Amblyopia, commonly called "lazy eye," is a vision development disorder where 
                  one eye fails to achieve normal visual acuity, even with prescription glasses 
                  or contact lenses. It's the most common cause of vision problems in children, 
                  affecting about 2-3% of the population.
                </p>
                
                <p className="text-gray-600 mb-6">
                  The condition develops when the brain favors one eye over the other, eventually 
                  "ignoring" signals from the weaker eye. This happens during the critical period 
                  of visual development in early childhood, typically before age 8.
                </p>
                
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-3 text-yellow-900">Why Early Treatment Matters</h3>
                  <p className="text-yellow-800">
                    The visual system is most adaptable during childhood. After age 8-9, it becomes 
                    much more difficult to improve vision in the amblyopic eye. Early detection and 
                    treatment offer the best chance for normal vision development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-eyecare-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Protect Your Child's Vision Development</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Early childhood eye exams can detect amblyopia when treatment is most effective. 
              Don't wait - schedule your child's comprehensive eye examination today.
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
                  Schedule Pediatric Exam
                </Button>
              </AppointmentRequestDialog>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-purple-100">
              <Calendar className="w-4 h-4" />
              <span>Specialized pediatric eye care available</span>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LazyEyeAmblyopiaEducationPage;