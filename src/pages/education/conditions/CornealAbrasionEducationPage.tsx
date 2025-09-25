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
  Scissors
} from 'lucide-react';

const CornealAbrasionEducationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Corneal Abrasion",
    "alternateName": ["Scratched Cornea", "Corneal Scratch"],
    "description": "A painful scratch or scrape on the cornea, the clear front surface of the eye, often caused by foreign objects or trauma.",
    "symptom": [
      "Severe eye pain",
      "Feeling like something is in the eye",
      "Tearing and redness",
      "Sensitivity to light",
      "Blurred vision",
      "Headache"
    ],
    "possibleCause": [
      "Foreign object in eye",
      "Fingernail scratch",
      "Contact lens injury",
      "Chemical exposure",
      "Sports injury",
      "Workplace accident"
    ],
    "riskFactor": [
      "Contact lens wear",
      "Sports participation",
      "Workplace hazards",
      "Eye makeup use",
      "Gardening activities"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Antibiotic eye drops",
        "description": "Prevent infection while healing"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Pain medication",
        "description": "Manage discomfort during healing"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Eye patching",
        "description": "Protect the eye during initial healing"
      }
    ]
  };

  const symptoms = [
    { icon: Zap, title: "Severe Eye Pain", description: "Sharp, intense pain that may worsen with blinking" },
    { icon: Eye, title: "Foreign Body Sensation", description: "Feeling like sand or grit is in your eye" },
    { icon: Eye, title: "Excessive Tearing", description: "Watery eyes as a protective response" },
    { icon: Zap, title: "Light Sensitivity", description: "Discomfort or pain when exposed to bright lights" },
    { icon: Eye, title: "Blurred Vision", description: "Difficulty seeing clearly from the affected eye" },
    { icon: Clock, title: "Headache", description: "Pain around the eye and forehead area" }
  ];

  const causes = [
    { category: "Common Accidents", items: ["Fingernail scratches", "Paper cuts to eye", "Tree branches or twigs", "Pet scratches"] },
    { category: "Contact Lens Related", items: ["Torn contact lens", "Dirty contact lens", "Improper insertion/removal", "Sleeping in contacts"] },
    { category: "Workplace Hazards", items: ["Metal shavings", "Wood particles", "Chemical splashes", "Dust and debris"] },
    { category: "Sports Injuries", items: ["Ball to the face", "Equipment contact", "Opponent's finger", "Court/field debris"] }
  ];

  const treatments = [
    {
      category: "Immediate Care",
      treatments: [
        "Do NOT rub the eye",
        "Flush with clean water if debris present",
        "Remove contact lens if possible",
        "Cover eye with sterile gauze",
        "Seek immediate medical attention"
      ]
    },
    {
      category: "Medical Treatment",
      treatments: [
        "Antibiotic eye drops",
        "Pain medication",
        "Lubricating eye drops",
        "Bandage contact lens (if needed)",
        "Follow-up examination"
      ]
    }
  ];

  const emergencySymptoms = [
    "Severe, persistent pain",
    "Large or deep abrasion",
    "Embedded foreign object",
    "Chemical exposure to eye",
    "Signs of infection (pus, fever)",
    "No improvement after 24 hours"
  ];

  const prevention = [
    "Wear safety glasses during risky activities",
    "Be careful with fingernails around eyes",
    "Proper contact lens hygiene",
    "Use protective eyewear in sports",
    "Keep work areas clean and well-lit",
    "Be cautious around children and pets"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Corneal Abrasion: Emergency Eye Injury Treatment | Patient Education"
        description="Learn about corneal abrasions - scratches on the eye surface. Get immediate care information, symptoms, treatment, and prevention tips."
        keywords="corneal abrasion, scratched cornea, eye injury, emergency eye care, foreign object in eye, patient education"
        canonicalUrl="https://eyecarecenteroc.com/education/conditions/corneal-abrasion"
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
              <span className="text-gray-900">Corneal Abrasion</span>
            </nav>
          </div>
        </section>

        {/* Header */}
        <section className="bg-gradient-to-r from-red-50 to-pink-50 py-12">
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
                  <Scissors className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Corneal Abrasion
                  </h1>
                  <p className="text-xl text-gray-600 mb-6 max-w-3xl">
                    A scratch or scrape on the cornea (clear front surface of the eye) 
                    that can cause severe pain and requires prompt medical attention.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Badge className="bg-red-100 text-red-800 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      Urgent Care Needed
                    </Badge>
                    <Badge className="bg-yellow-100 text-yellow-800 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      6 min read
                    </Badge>
                    <Badge className="bg-green-100 text-green-800">
                      Usually Heals Well
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <h3 className="text-lg font-semibold text-red-800">Seek Immediate Care</h3>
                </div>
                <p className="text-red-700 mb-4">
                  Corneal abrasions can be serious and may lead to infection if not treated promptly. 
                  Contact us immediately if you suspect a corneal abrasion.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="tel:9499973927"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors callrail-phone"
                  >
                    Emergency: (949) 997-3927
                  </a>
                  <AppointmentRequestDialog>
                    <Button className="bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Urgent Appointment
                    </Button>
                  </AppointmentRequestDialog>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustSignals className="py-8 bg-gray-50" />

        {/* What is Corneal Abrasion */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">What is a Corneal Abrasion?</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  A corneal abrasion is a scratch or scrape on the cornea, which is the clear, 
                  protective front layer of your eye. The cornea is extremely sensitive, containing 
                  more nerve endings per square inch than almost any other part of your body.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Even a small scratch can cause significant pain and discomfort. While most corneal 
                  abrasions heal relatively quickly with proper treatment, they require immediate 
                  medical attention to prevent complications such as infection.
                </p>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-3 text-red-900">Important Warning</h3>
                  <p className="text-red-800">
                    NEVER attempt to remove an object that appears embedded in the eye. 
                    Cover the eye gently and seek immediate emergency medical care.
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
              <h2 className="text-3xl font-bold mb-8 text-center">Emergency Symptoms</h2>
              
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
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-yellow-900">
                  What NOT to Do
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-yellow-800">
                  <div>• Don't rub or touch the eye</div>
                  <div>• Don't try to remove embedded objects</div>
                  <div>• Don't use eye makeup or drops</div>
                  <div>• Don't delay seeking medical care</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Causes */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Common Causes</h2>
              
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
                            <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
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
              <h2 className="text-3xl font-bold mb-8 text-center">Treatment and Care</h2>
              
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
              
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-900">
                  Healing Timeline
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-blue-800">
                  <div>
                    <strong>24-48 hours:</strong> Most small abrasions begin healing
                  </div>
                  <div>
                    <strong>2-3 days:</strong> Significant improvement in pain
                  </div>
                  <div>
                    <strong>3-5 days:</strong> Complete healing for most cases
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Care */}
        <section className="py-12 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">When to Seek Emergency Care</h2>
              
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-800">
                    <AlertTriangle className="w-5 h-5" />
                    Seek Immediate Medical Attention If:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {emergencySymptoms.map((symptom, index) => (
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
              <h2 className="text-3xl font-bold mb-8 text-center">Prevention Tips</h2>
              
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
            <h2 className="text-3xl font-bold mb-4">Eye Emergency? Get Immediate Care</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Corneal abrasions require prompt medical attention to prevent complications. 
              Don't wait - contact us immediately for urgent eye care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a 
                href="tel:9499973927"
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300 callrail-phone"
              >
                Emergency: (949) 997-3927
              </a>
              
              <AppointmentRequestDialog>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300">
                  Urgent Care Request
                </Button>
              </AppointmentRequestDialog>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-red-100">
              <Calendar className="w-4 h-4" />
              <span>Emergency eye care available</span>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CornealAbrasionEducationPage;