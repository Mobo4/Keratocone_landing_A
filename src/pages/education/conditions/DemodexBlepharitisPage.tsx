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
  Bug,
  Zap,
  Shield,
  CheckCircle,
  XCircle,
  Calendar,
  Microscope,
  Sparkles,
  Activity,
  Pill
} from 'lucide-react';

const DemodexBlepharitisPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Demodex Blepharitis",
    "alternateName": ["Demodex Infestation", "Mite-Related Blepharitis", "Ocular Demodicosis"],
    "description": "A common eyelid condition caused by Demodex mites that live in eyelash follicles, causing inflammation, irritation, and dry eye symptoms. Now treatable with Xdemvy, the first FDA-approved treatment.",
    "symptom": [
      "Itchy eyelids, especially in the morning",
      "Red, inflamed eyelid margins",
      "Cylindrical dandruff at lash base",
      "Burning or stinging sensation",
      "Foreign body sensation",
      "Crusty debris on lashes",
      "Recurrent styes",
      "Loss of eyelashes",
      "Blurred vision"
    ],
    "possibleCause": [
      "Demodex folliculorum mites",
      "Demodex brevis mites",
      "Age-related increase in mites",
      "Weakened immune system",
      "Rosacea",
      "Poor eyelid hygiene",
      "Oily skin"
    ],
    "riskFactor": [
      "Age over 60",
      "Rosacea",
      "Weakened immune system",
      "Diabetes",
      "Poor hygiene",
      "Oily skin type",
      "Contact lens wear"
    ],
    "possibleTreatment": [
      {
        "@type": "Drug",
        "name": "Xdemvy (lotilaner ophthalmic solution)",
        "description": "First FDA-approved treatment specifically for Demodex blepharitis - kills mites directly"
      },
      {
        "@type": "MedicalProcedure",
        "name": "IPL Therapy",
        "description": "Intense Pulsed Light reduces mite population and inflammation"
      },
      {
        "@type": "MedicalProcedure",
        "name": "BlephEx Treatment",
        "description": "Deep cleaning of eyelid margins to remove mite habitat"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Tea Tree Oil Cleansers",
        "description": "Natural mite-killing properties in controlled concentrations"
      }
    ]
  };

  const symptoms = [
    { icon: Bug, title: "Itchy Eyelids", description: "Especially worse in the morning or after sleep" },
    { icon: Eye, title: "Cylindrical Dandruff", description: "Collar-like scales around eyelash base - pathognomonic sign" },
    { icon: Activity, title: "Red Lid Margins", description: "Chronic inflammation and irritation of eyelid edges" },
    { icon: Sparkles, title: "Crusty Debris", description: "Accumulation of mite waste and dead skin cells" },
    { icon: Shield, title: "Recurrent Styes", description: "Frequent chalazia and hordeola from blocked glands" },
    { icon: XCircle, title: "Lash Loss", description: "Madarosis - loss of eyelashes from follicle damage" }
  ];

  const xdemvyTreatment = {
    name: "XDEMVY® (lotilaner ophthalmic solution) 0.25%",
    breakthrough: "First & Only FDA-Approved Treatment for Demodex Blepharitis",
    mechanism: "Paralyzes and eradicates Demodex mites by inhibiting GABA-gated chloride channels",
    benefits: [
      "Directly kills Demodex mites",
      "Significant improvement in 4-6 weeks",
      "Reduces collarettes (cylindrical dandruff)",
      "Improves eyelid redness and irritation",
      "Well-tolerated with minimal side effects",
      "Convenient twice-daily dosing"
    ],
    protocol: {
      duration: "6 weeks",
      dosing: "One drop in each eye twice daily",
      frequency: "Morning and evening, 12 hours apart",
      completion: "Use entire 6-week course even if symptoms improve"
    },
    clinicalResults: [
      "81% of patients achieved complete collarette cure",
      "89% showed significant mite reduction",
      "Improvement seen as early as 2 weeks",
      "Effects maintained at follow-up"
    ]
  };

  const otherTreatments = [
    {
      name: "IPL (Intense Pulsed Light) Therapy",
      description: "Reduces mite population and treats associated rosacea",
      benefits: [
        "Kills mites with heat and light",
        "Reduces inflammation",
        "Improves meibomian gland function",
        "Treats facial rosacea simultaneously"
      ],
      frequency: "3-4 sessions, 3-4 weeks apart"
    },
    {
      name: "BlephEx® In-Office Treatment",
      description: "Mechanical debridement of eyelid margins",
      benefits: [
        "Removes mite habitat",
        "Exfoliates accumulated debris",
        "Disrupts biofilm",
        "Immediate symptom relief"
      ],
      frequency: "Every 4-6 months"
    },
    {
      name: "Tea Tree Oil Products",
      description: "Natural acaricidal properties",
      benefits: [
        "Kills mites naturally",
        "Anti-inflammatory effects",
        "Available in cleansers and wipes",
        "Can be used at home"
      ],
      frequency: "Daily, ongoing"
    }
  ];

  const diagnosticMethods = [
    {
      method: "Slit Lamp Examination",
      description: "Direct visualization of cylindrical dandruff and mites"
    },
    {
      method: "Lash Sampling",
      description: "Epilated lashes examined under microscope for mite counting"
    },
    {
      method: "In-Vivo Confocal Microscopy",
      description: "Real-time visualization of mites in follicles"
    },
    {
      method: "Clinical Signs",
      description: "Collarettes, lid margin inflammation, lash loss patterns"
    }
  ];

  const preventionTips = [
    "Daily eyelid hygiene with appropriate cleansers",
    "Wash face and eyelids before bed",
    "Clean pillowcases and towels regularly",
    "Avoid sharing eye makeup",
    "Remove makeup thoroughly every night",
    "Manage rosacea if present",
    "Regular eye exams for early detection",
    "Maintain good overall hygiene"
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Demodex Blepharitis Treatment - Xdemvy & IPL Therapy | Dr. Bonakdar Orange County"
        description="Expert Demodex blepharitis treatment with Xdemvy, the first FDA-approved medication, plus IPL therapy. Dr. Bonakdar specializes in eliminating Demodex mites for lasting relief in Orange County."
        keywords="Demodex blepharitis, Xdemvy treatment, Demodex mites, lotilaner eye drops, IPL therapy Demodex, cylindrical dandruff, mite blepharitis, ocular demodicosis, eyelash mites treatment, tea tree oil eyes, BlephEx treatment, Dr. Bonakdar, Orange County eye doctor, Santa Ana Demodex specialist"
        canonicalUrl="https://eyecarecenteroc.com/education/conditions/demodex-blepharitis"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero 
          title="Demodex Blepharitis"
          subtitle="Revolutionary treatment with Xdemvy - the first FDA-approved medication for Demodex mites"
          buttonText="Schedule Demodex Consultation"
          backgroundClass="bg-gradient-to-r from-red-50 to-pink-50"
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
              <span className="text-gray-900">Demodex Blepharitis</span>
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
                      <Bug className="w-6 h-6 text-red-500" />
                      Understanding Demodex Blepharitis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700">
                      Demodex blepharitis is caused by microscopic mites (Demodex folliculorum and Demodex brevis) 
                      that live in the hair follicles of your eyelashes. While these mites are present on most 
                      adults' skin, an overpopulation can cause significant eye problems.
                    </p>
                    <p className="text-gray-700">
                      Studies show that Demodex is present in 84% of people over 60 and is responsible for 
                      over 50% of blepharitis cases. The mites feed on skin cells and oils, causing inflammation, 
                      irritation, and the characteristic cylindrical dandruff at the base of eyelashes.
                    </p>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                      <div className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-green-900 mb-1">Breakthrough Treatment Available!</h4>
                          <p className="text-sm text-green-800">
                            Xdemvy® is the first FDA-approved prescription treatment specifically designed to 
                            kill Demodex mites. Clinical studies show remarkable improvement in just 4-6 weeks.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Xdemvy Treatment Section */}
                <Card className="border-2 border-green-200">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="flex items-center gap-2">
                      <Pill className="w-6 h-6 text-green-600" />
                      {xdemvyTreatment.name}
                    </CardTitle>
                    <Badge className="bg-green-100 text-green-800 w-fit">
                      {xdemvyTreatment.breakthrough}
                    </Badge>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <div>
                      <h4 className="font-semibold mb-2">How Xdemvy Works:</h4>
                      <p className="text-sm text-gray-700">{xdemvyTreatment.mechanism}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Treatment Benefits:</h4>
                      <ul className="space-y-2">
                        {xdemvyTreatment.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Treatment Protocol:</h4>
                      <div className="space-y-2">
                        <p className="text-sm"><strong>Duration:</strong> {xdemvyTreatment.protocol.duration}</p>
                        <p className="text-sm"><strong>Dosing:</strong> {xdemvyTreatment.protocol.dosing}</p>
                        <p className="text-sm"><strong>Frequency:</strong> {xdemvyTreatment.protocol.frequency}</p>
                        <p className="text-sm text-gray-600">{xdemvyTreatment.protocol.completion}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Clinical Study Results:</h4>
                      <ul className="space-y-1">
                        {xdemvyTreatment.clinicalResults.map((result, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Activity className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Symptoms */}
                <Card>
                  <CardHeader>
                    <CardTitle>Signs & Symptoms of Demodex Infestation</CardTitle>
                    <CardDescription>Key indicators of Demodex blepharitis</CardDescription>
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

                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        <strong>Pathognomonic Sign:</strong> Cylindrical dandruff (collarettes) at the base of 
                        eyelashes is the most specific sign of Demodex infestation.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Other Treatment Options */}
                <Card>
                  <CardHeader>
                    <CardTitle>Additional Treatment Options</CardTitle>
                    <CardDescription>Complementary therapies for comprehensive care</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {otherTreatments.map((treatment, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                        <h4 className="font-semibold text-lg mb-2">{treatment.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{treatment.description}</p>
                        <ul className="space-y-1 mb-2">
                          {treatment.benefits.map((benefit, bIndex) => (
                            <li key={bIndex} className="flex items-start gap-2">
                              <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                              <span className="text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                        <Badge variant="outline" className="text-xs">
                          {treatment.frequency}
                        </Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Diagnostic Methods */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Microscope className="w-6 h-6 text-blue-500" />
                      Diagnostic Methods
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {diagnosticMethods.map((diagnostic, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-semibold text-blue-600">{index + 1}</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm">{diagnostic.method}</h4>
                            <p className="text-xs text-gray-600 mt-1">{diagnostic.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* CTA Card */}
                <Card className="border-2 border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Pill className="w-5 h-5 text-green-600" />
                      Get Xdemvy Treatment
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm">
                      Don't let Demodex mites control your comfort. Schedule a consultation to see if 
                      Xdemvy, the breakthrough FDA-approved treatment, is right for you.
                    </p>
                    
                    <div className="space-y-3">
                      <AppointmentRequestDialog>
                        <Button className="w-full bg-eyecare-blue hover:bg-eyecare-dark-blue">
                          <Calendar className="w-4 h-4 mr-2" />
                          Schedule Xdemvy Consultation
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

                {/* Prevention Tips */}
                <Card>
                  <CardHeader>
                    <CardTitle>Prevention & Hygiene</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {preventionTips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Shield className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Risk Factors */}
                <Card>
                  <CardHeader>
                    <CardTitle>Who's at Risk?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-sm">Adults over 60 (84% prevalence)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-sm">People with rosacea</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-sm">Immunocompromised individuals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-sm">Diabetic patients</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-sm">Those with oily skin</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-sm">Contact lens wearers</span>
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
                        to="/education/conditions/blepharitis"
                        className="block p-2 hover:bg-gray-50 rounded transition-colors text-sm text-eyecare-blue hover:text-eyecare-dark-blue"
                      >
                        → Blepharitis
                      </Link>
                      <Link 
                        to="/education/conditions/meibomian-gland-dysfunction"
                        className="block p-2 hover:bg-gray-50 rounded transition-colors text-sm text-eyecare-blue hover:text-eyecare-dark-blue"
                      >
                        → Meibomian Gland Dysfunction
                      </Link>
                      <Link 
                        to="/education/conditions/dry-eye-syndrome"
                        className="block p-2 hover:bg-gray-50 rounded transition-colors text-sm text-eyecare-blue hover:text-eyecare-dark-blue"
                      >
                        → Dry Eye Syndrome
                      </Link>
                      <Link 
                        to="/education/conditions/ocular-rosacea"
                        className="block p-2 hover:bg-gray-50 rounded transition-colors text-sm text-eyecare-blue hover:text-eyecare-dark-blue"
                      >
                        → Ocular Rosacea
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

export default DemodexBlepharitisPage;