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
  Droplets,
  Wind,
  Sun,
  Shield,
  CheckCircle,
  XCircle,
  Calendar
} from 'lucide-react';

const DryEyeEducationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Dry Eye Syndrome",
    "alternateName": ["Dry Eye Disease", "Keratoconjunctivitis Sicca"],
    "description": "A common condition that occurs when your tears aren't able to provide adequate lubrication for your eyes, causing discomfort and potential vision problems.",
    "symptom": [
      "Scratchy or gritty feeling in eyes",
      "Burning or stinging sensation",
      "Excessive tearing",
      "Blurred vision",
      "Eye fatigue",
      "Difficulty wearing contact lenses"
    ],
    "possibleCause": [
      "Age-related changes",
      "Environmental factors",
      "Medical conditions",
      "Medications",
      "Hormonal changes",
      "Digital eye strain"
    ],
    "riskFactor": [
      "Age over 50",
      "Female gender",
      "Certain medications",
      "Medical conditions like diabetes",
      "Environmental factors",
      "Contact lens wear"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Artificial tears",
        "description": "Over-the-counter eye drops to supplement natural tears"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Prescription eye drops",
        "description": "Medications to reduce inflammation and increase tear production"
      },
      {
        "@type": "MedicalProcedure",
        "name": "IPL Therapy",
        "description": "Intense Pulsed Light therapy to treat meibomian gland dysfunction"
      }
    ]
  };

  const symptoms = [
    { icon: Eye, title: "Scratchy or Gritty Feeling", description: "Like having sand in your eyes" },
    { icon: Droplets, title: "Burning or Stinging", description: "Painful sensation, especially in wind or air conditioning" },
    { icon: Eye, title: "Excessive Tearing", description: "Paradoxically, dry eyes often produce reflex tears" },
    { icon: Eye, title: "Blurred Vision", description: "Vision that comes and goes, especially when reading" },
    { icon: Clock, title: "Eye Fatigue", description: "Tired feeling eyes, especially after screen time" },
    { icon: Shield, title: "Contact Lens Discomfort", description: "Difficulty wearing contacts for normal periods" }
  ];

  const causes = [
    { category: "Age-Related", items: ["Natural aging process", "Hormonal changes", "Decreased tear production"] },
    { category: "Environmental", items: ["Wind and dry air", "Air conditioning", "Smoke and pollution", "High altitude"] },
    { category: "Medical Conditions", items: ["Diabetes", "Thyroid disorders", "Autoimmune diseases", "Vitamin A deficiency"] },
    { category: "Lifestyle Factors", items: ["Prolonged screen time", "Contact lens wear", "Certain medications", "LASIK surgery"] }
  ];

  const treatments = [
    {
      category: "At-Home Care",
      treatments: [
        "Artificial tears (preservative-free preferred)",
        "Warm compresses",
        "Eyelid hygiene",
        "Humidifier use",
        "Omega-3 supplements"
      ]
    },
    {
      category: "Professional Treatments",
      treatments: [
        "Prescription eye drops (Restasis, Xiidra)",
        "Punctal plugs",
        "IPL (Intense Pulsed Light) therapy",
        "LipiFlow treatment",
        "Specialty contact lenses"
      ]
    }
  ];

  const whenToSeeDoctor = [
    "Persistent eye discomfort lasting more than a few days",
    "Severe burning, stinging, or scratchiness",
    "Significant vision changes",
    "Eyes that are red and irritated despite treatment",
    "Inability to wear contact lenses",
    "Symptoms that interfere with daily activities"
  ];

  const prevention = [
    "Take regular breaks from screens (20-20-20 rule)",
    "Use a humidifier in dry environments",
    "Wear wraparound sunglasses in wind",
    "Stay hydrated",
    "Avoid direct air flow from fans or vents",
    "Consider omega-3 rich foods"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Dry Eye Syndrome: Symptoms, Causes, and Treatment | Patient Education"
        description="Learn about dry eye syndrome symptoms, causes, and treatment options. Comprehensive patient education from Orange County eye care specialists."
        keywords="dry eye syndrome, dry eyes, eye symptoms, eye treatment, patient education, Orange County"
        canonicalUrl="https://eyecarecenteroc.com/education/conditions/dry-eye-syndrome"
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
              <span className="text-gray-900">Dry Eye Syndrome</span>
            </nav>
          </div>
        </section>

        {/* Header */}
        <section className="bg-gradient-to-r from-blue-50 to-cyan-50 py-12">
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
                  <Droplets className="w-8 h-8 text-blue-500" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Dry Eye Syndrome
                  </h1>
                  <p className="text-xl text-gray-600 mb-6 max-w-3xl">
                    Understanding this common condition that affects millions of people, 
                    causing discomfort and potentially impacting vision quality.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Badge className="bg-blue-100 text-blue-800 flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      Common Condition
                    </Badge>
                    <Badge className="bg-yellow-100 text-yellow-800 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      8 min read
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
                  <h3 className="text-lg font-semibold">Quick Action Needed?</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  If you're experiencing severe eye pain, sudden vision changes, or persistent symptoms 
                  that interfere with daily activities, schedule an appointment promptly.
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

        {/* What is Dry Eye Syndrome */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">What is Dry Eye Syndrome?</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  Dry eye syndrome, also known as dry eye disease or keratoconjunctivitis sicca, 
                  is a common condition that occurs when your tears aren't able to provide adequate 
                  lubrication for your eyes. This can happen for several reasons: you might not 
                  produce enough tears, or the tears you produce might be of poor quality.
                </p>
                
                <p className="text-gray-600 mb-6">
                  Your tears are essential for maintaining the health of the front surface of your eye 
                  and for providing clear vision. They wash away foreign matter, provide nutrients, 
                  and create a smooth optical surface. When this tear system doesn't work properly, 
                  you may experience discomfort and vision problems.
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-3 text-blue-900">Did You Know?</h3>
                  <p className="text-blue-800">
                    Dry eye syndrome affects approximately 16 million Americans and is more common 
                    in women than men. It's also more frequent as we age, affecting nearly 
                    20% of people over 65.
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
              <h2 className="text-3xl font-bold mb-8 text-center">Common Symptoms</h2>
              
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
                  Important Note About Excessive Tearing
                </h3>
                <p className="text-yellow-800">
                  It might seem contradictory, but dry eyes often produce excessive tears. 
                  This happens because the eye tries to compensate for the lack of quality 
                  tears by producing more reflex tears, which don't provide the same protection.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Causes */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">What Causes Dry Eye Syndrome?</h2>
              
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

        {/* Diagnosis */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">How is Dry Eye Syndrome Diagnosed?</h2>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-600 mb-6">
                  Diagnosing dry eye syndrome involves a comprehensive eye examination. 
                  Your eye doctor will evaluate your symptoms, examine your eyes, and 
                  may perform specific tests to determine the cause and severity of your condition.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="w-5 h-5 text-eyecare-blue" />
                      Comprehensive Eye Exam
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Medical history review</li>
                      <li>• External eye examination</li>
                      <li>• Evaluation of blink quality</li>
                      <li>• Assessment of tear film stability</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Droplets className="w-5 h-5 text-blue-500" />
                      Specialized Tests
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Tear production measurement</li>
                      <li>• Tear film break-up time</li>
                      <li>• Meibomian gland evaluation</li>
                      <li>• Corneal surface assessment</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment Options */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Treatment Options</h2>
              
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
              
              <div className="mt-8 bg-eyecare-blue bg-opacity-10 border border-eyecare-blue border-opacity-20 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-eyecare-blue">
                  Professional Treatment at Our Office
                </h3>
                <p className="text-gray-700 mb-4">
                  We offer advanced treatments including IPL (Intense Pulsed Light) therapy and 
                  LipiFlow treatment for meibomian gland dysfunction. Our comprehensive approach 
                  ensures you get the most effective treatment for your specific condition.
                </p>
                <Link 
                  to="/conditions/dry-eye"
                  className="text-eyecare-blue font-semibold hover:text-eyecare-dark-blue transition-colors"
                >
                  Learn more about our dry eye treatments →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* When to See a Doctor */}
        <section className="py-12 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">When to See an Eye Doctor</h2>
              
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-800">
                    <AlertTriangle className="w-5 h-5" />
                    Seek Professional Care If You Experience:
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
        <section className="py-16 bg-eyecare-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't Let Dry Eyes Affect Your Quality of Life</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Schedule a comprehensive dry eye evaluation with our experienced team. 
              We'll identify the cause and create a personalized treatment plan.
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
              <span>Same-day appointments available for urgent cases</span>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DryEyeEducationPage;