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
  Calendar,
  Users,
  Activity,
  Phone
} from 'lucide-react';

const AngleClosureGlaucomaEducationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Angle-Closure Glaucoma",
    "alternateName": ["Acute Angle-Closure Glaucoma", "Narrow-Angle Glaucoma", "Closed-Angle Glaucoma"],
    "description": "A serious eye emergency where the eye's drainage angle becomes suddenly blocked, causing a rapid increase in eye pressure that can lead to permanent vision loss if not treated immediately.",
    "symptom": [
      "Sudden severe eye pain",
      "Intense headache",
      "Nausea and vomiting",
      "Blurred vision",
      "Halos around lights",
      "Sudden vision loss",
      "Eye redness",
      "Hard, firm eyeball"
    ],
    "possibleCause": [
      "Anatomically narrow drainage angle",
      "Pupil dilation",
      "Dim lighting conditions",
      "Certain medications",
      "Emotional stress",
      "Age-related lens changes"
    ],
    "riskFactor": [
      "Age over 60",
      "Asian or Inuit ethnicity",
      "Female gender",
      "Family history of angle-closure glaucoma",
      "Farsightedness (hyperopia)",
      "Cataracts"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Emergency eye pressure reduction",
        "description": "Immediate medications to rapidly lower eye pressure"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Laser peripheral iridotomy",
        "description": "Laser procedure to create a small hole in the iris to improve drainage"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Emergency surgery",
        "description": "Surgical intervention if laser treatment is not sufficient"
      }
    ]
  };

  const symptoms = [
    { icon: Zap, title: "Severe Eye Pain", description: "Sudden, intense pain in and around the affected eye", urgent: true },
    { icon: AlertTriangle, title: "Intense Headache", description: "Severe headache, often on the same side as the affected eye", urgent: true },
    { icon: XCircle, title: "Nausea & Vomiting", description: "May be mistaken for other conditions like migraine", urgent: true },
    { icon: Eye, title: "Vision Changes", description: "Sudden blurred vision or vision loss", urgent: true },
    { icon: Eye, title: "Halos Around Lights", description: "Seeing rainbow-colored rings around light sources", urgent: false },
    { icon: Eye, title: "Red Eye", description: "Severe redness of the white part of the eye", urgent: false }
  ];

  const riskFactors = [
    { 
      category: "Demographic Factors", 
      description: "Who is most at risk for angle-closure glaucoma",
      items: ["Age over 60", "Female gender", "Asian or Inuit ethnicity", "Family history of glaucoma"] 
    },
    { 
      category: "Eye Anatomy", 
      description: "Physical eye characteristics that increase risk",
      items: ["Farsightedness (hyperopia)", "Small eye size", "Shallow anterior chamber", "Thick, forward-positioned lens"] 
    },
    { 
      category: "Triggers", 
      description: "Conditions that can precipitate an attack",
      items: ["Dim lighting", "Pupil-dilating medications", "Emotional stress", "Certain cold medications"] 
    }
  ];

  const treatments = [
    {
      category: "Emergency Treatment",
      treatments: [
        "IV medications to rapidly lower eye pressure",
        "Topical eye pressure-lowering drops",
        "Oral carbonic anhydrase inhibitors",
        "Osmotic agents (mannitol or glycerin)",
        "Pain management medications"
      ]
    },
    {
      category: "Definitive Treatment",
      treatments: [
        "Laser peripheral iridotomy (LPI)",
        "Lens extraction if cataract is contributing",
        "Peripheral iridectomy (surgical)",
        "Goniosynechialysis",
        "Trabeculectomy in severe cases"
      ]
    },
    {
      category: "Preventive Treatment",
      treatments: [
        "Prophylactic laser iridotomy in at-risk eyes",
        "Regular monitoring of narrow angles",
        "Avoidance of trigger medications",
        "Patient education about symptoms",
        "Treatment of the fellow eye"
      ]
    }
  ];

  const emergencySymptoms = [
    "Sudden severe eye pain",
    "Rapid vision loss",
    "Seeing halos around lights",
    "Nausea and vomiting with eye pain",
    "Headache with eye symptoms",
    "Hard, firm feeling eyeball"
  ];

  const prevention = [
    "Regular comprehensive eye exams, especially after age 40",
    "Know your risk factors and family history",
    "Avoid medications that can trigger attacks",
    "Seek immediate care for sudden eye symptoms",
    "Consider preventive laser treatment if at high risk",
    "Maintain good overall eye health"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Angle-Closure Glaucoma: Emergency Eye Condition | Patient Education"
        description="Learn about angle-closure glaucoma, a serious eye emergency requiring immediate treatment. Comprehensive guide to symptoms, risk factors, and urgent treatment options."
        keywords="angle-closure glaucoma, acute glaucoma, eye emergency, sudden eye pain, vision loss, Orange County"
        canonicalUrl="https://eyecarecenteroc.com/education/conditions/angle-closure-glaucoma"
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
              <span className="text-gray-900">Angle-Closure Glaucoma</span>
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
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Angle-Closure Glaucoma
                  </h1>
                  <p className="text-xl text-gray-600 mb-6 max-w-3xl">
                    A sight-threatening eye emergency requiring immediate medical attention. 
                    Understanding the symptoms and risk factors can help prevent permanent vision loss.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Badge className="bg-red-100 text-red-800 flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      Medical Emergency
                    </Badge>
                    <Badge className="bg-yellow-100 text-yellow-800 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      9 min read
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-800">
                      Urgent Treatment Required
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-100 border border-red-300 rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-5 h-5 text-red-600" />
                  <h3 className="text-lg font-semibold text-red-800">MEDICAL EMERGENCY</h3>
                </div>
                <p className="text-red-700 mb-4 font-semibold">
                  If you experience sudden severe eye pain, vision loss, or nausea with eye symptoms, 
                  seek immediate emergency medical care or call 911. Time is critical to prevent permanent vision loss.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="tel:911"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Emergency: Call 911
                  </a>
                  <a 
                    href="tel:9499973927"
                    className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-lg font-semibold transition-colors callrail-phone"
                  >
                    Office: (949) 997-3927
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustSignals className="py-8 bg-gray-50" />

        {/* What is Angle-Closure Glaucoma */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">What is Angle-Closure Glaucoma?</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  Angle-closure glaucoma, also called acute angle-closure glaucoma or narrow-angle 
                  glaucoma, is a serious eye emergency that occurs when the drainage angle of the 
                  eye becomes suddenly and completely blocked. This blockage prevents the normal 
                  flow of fluid (aqueous humor) out of the eye, causing eye pressure to rise 
                  rapidly and dangerously.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Unlike open-angle glaucoma which develops slowly over years, angle-closure 
                  glaucoma can develop within hours and cause permanent vision loss if not 
                  treated immediately. The rapid increase in eye pressure can damage the 
                  optic nerve quickly and irreversibly.
                </p>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-3 text-red-900">Critical Timing</h3>
                  <p className="text-red-800">
                    Angle-closure glaucoma is considered an ocular emergency. Permanent vision 
                    loss can occur within hours if the condition is not treated promptly. 
                    Immediate medical attention can often preserve vision and prevent complications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Symptoms */}
        <section className="py-12 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-red-800">EMERGENCY SYMPTOMS - Seek Immediate Care</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {symptoms.map((symptom, index) => (
                  <Card key={index} className={symptom.urgent ? "border-red-300 bg-red-50" : "border-orange-300 bg-orange-50"}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <symptom.icon className={`w-6 h-6 ${symptom.urgent ? 'text-red-600' : 'text-orange-600'}`} />
                        <CardTitle className={`text-lg ${symptom.urgent ? 'text-red-800' : 'text-orange-800'}`}>
                          {symptom.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className={symptom.urgent ? 'text-red-700' : 'text-orange-700'}>{symptom.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="bg-red-600 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  CALL 911 IMMEDIATELY If You Experience:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {emergencySymptoms.map((symptom, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-200 flex-shrink-0" />
                      <span className="text-red-100">{symptom}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Risk Factors */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Risk Factors</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {riskFactors.map((factor, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-xl">{factor.category}</CardTitle>
                      <CardDescription>{factor.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {factor.items.map((item, itemIndex) => (
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

        {/* Treatment */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Treatment Approaches</h2>
              
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
                  Emergency and Specialized Care
                </h3>
                <p className="text-gray-700 mb-4">
                  Treatment of angle-closure glaucoma requires immediate emergency care followed 
                  by specialized glaucoma treatment. We work closely with emergency departments 
                  and glaucoma specialists to ensure rapid, appropriate care.
                </p>
                <Link 
                  to="/conditions/keratoconus"
                  className="text-eyecare-blue font-semibold hover:text-eyecare-dark-blue transition-colors"
                >
                  Learn about our comprehensive eye care →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Prevention */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Prevention and Risk Reduction</h2>
              
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
        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Know the Signs - Save Your Sight</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Angle-closure glaucoma is a preventable cause of blindness when caught early. 
              Regular eye exams can identify risk factors before an emergency occurs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <AppointmentRequestDialog>
                <Button className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300">
                  Schedule Preventive Exam
                </Button>
              </AppointmentRequestDialog>
              
              <a 
                href="tel:9499973927"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300 callrail-phone"
              >
                Call: (949) 997-3927
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-red-100">
              <Calendar className="w-4 h-4" />
              <span>Emergency consultations available - know your risk</span>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AngleClosureGlaucomaEducationPage;