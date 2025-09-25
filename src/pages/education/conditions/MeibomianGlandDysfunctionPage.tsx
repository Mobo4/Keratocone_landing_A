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
  Droplets,
  Zap,
  Shield,
  CheckCircle,
  XCircle,
  Calendar,
  Flame,
  Sparkles,
  Activity
} from 'lucide-react';

const MeibomianGlandDysfunctionPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Meibomian Gland Dysfunction",
    "alternateName": ["MGD", "Posterior Blepharitis", "Meibomitis", "Evaporative Dry Eye"],
    "description": "A chronic condition where the meibomian glands in the eyelids don't produce enough oil or produce poor quality oil, leading to evaporative dry eye and discomfort.",
    "symptom": [
      "Burning or stinging sensation",
      "Gritty feeling in eyes",
      "Blurred vision that improves with blinking",
      "Red or inflamed eyelid margins",
      "Crusty eyelids in the morning",
      "Watery eyes",
      "Light sensitivity",
      "Contact lens discomfort"
    ],
    "possibleCause": [
      "Age-related changes",
      "Hormonal changes",
      "Rosacea",
      "Demodex mites",
      "Computer use and reduced blinking",
      "Contact lens wear",
      "Medications",
      "Environmental factors"
    ],
    "riskFactor": [
      "Age over 40",
      "Female gender",
      "Rosacea or seborrheic dermatitis",
      "Contact lens wear",
      "Computer work",
      "Hormonal changes",
      "Autoimmune conditions"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "IPL (Intense Pulsed Light) Therapy",
        "description": "Advanced light therapy that treats the root causes of MGD by reducing inflammation and improving gland function"
      },
      {
        "@type": "MedicalProcedure",
        "name": "LipiFlow",
        "description": "Thermal pulsation treatment that unblocks meibomian glands"
      },
      {
        "@type": "MedicalProcedure",
        "name": "iLux",
        "description": "Light-based thermal treatment for meibomian gland expression"
      },
      {
        "@type": "MedicalProcedure",
        "name": "BlephEx",
        "description": "Microblepharoexfoliation to clean eyelid margins"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Warm Compresses",
        "description": "Daily warm compress therapy to improve oil flow"
      },
      {
        "@type": "Drug",
        "name": "Omega-3 Supplements",
        "description": "Essential fatty acids to improve oil quality"
      }
    ]
  };

  const symptoms = [
    { icon: Flame, title: "Burning Sensation", description: "Persistent burning or stinging feeling in the eyes" },
    { icon: Eye, title: "Blurred Vision", description: "Vision that fluctuates and improves with blinking" },
    { icon: Droplets, title: "Watery Eyes", description: "Paradoxical tearing due to poor tear quality" },
    { icon: Activity, title: "Eyelid Inflammation", description: "Red, swollen, or crusty eyelid margins" },
    { icon: Sparkles, title: "Light Sensitivity", description: "Increased sensitivity to bright lights" },
    { icon: Shield, title: "Contact Lens Problems", description: "Difficulty wearing contacts comfortably" }
  ];

  const advancedTreatments = [
    {
      name: "IPL (Intense Pulsed Light) Therapy",
      description: "Revolutionary treatment using pulses of light to:",
      benefits: [
        "Reduce inflammation in eyelids and glands",
        "Eliminate Demodex mites",
        "Improve meibomian gland function",
        "Treat underlying rosacea",
        "Provide long-lasting relief"
      ],
      sessions: "Typically 4-6 sessions",
      icon: Zap
    },
    {
      name: "LipiFlow Thermal Pulsation",
      description: "FDA-approved treatment that:",
      benefits: [
        "Applies precise heat to eyelids",
        "Massages blocked glands",
        "Restores natural oil production",
        "Single 12-minute treatment",
        "Results last 6-12 months"
      ],
      sessions: "Single treatment, may repeat annually",
      icon: Flame
    },
    {
      name: "iLux Device",
      description: "Light-based warming treatment that:",
      benefits: [
        "Directly visualizes gland blockages",
        "Applies targeted heat therapy",
        "Expresses glands under direct view",
        "Customizable treatment zones",
        "Immediate relief possible"
      ],
      sessions: "Single treatment, repeat as needed",
      icon: Sparkles
    }
  ];

  const homeManagement = [
    "Warm compresses for 10-15 minutes twice daily",
    "Lid hygiene with gentle cleansers",
    "Omega-3 fatty acid supplements (2000-3000mg daily)",
    "Blinking exercises during computer use",
    "Humidifier use in dry environments",
    "Preservative-free artificial tears",
    "Avoid eye makeup on lid margins",
    "Stay hydrated"
  ];

  const stages = [
    {
      stage: "Stage 1 - Minimal",
      description: "No symptoms, minimal gland changes",
      treatment: "Preventive care, warm compresses"
    },
    {
      stage: "Stage 2 - Mild",
      description: "Mild symptoms, some gland dropout",
      treatment: "Warm compresses, omega-3s, lid hygiene"
    },
    {
      stage: "Stage 3 - Moderate",
      description: "Moderate symptoms, significant gland changes",
      treatment: "IPL therapy, LipiFlow, prescription medications"
    },
    {
      stage: "Stage 4 - Severe",
      description: "Severe symptoms, extensive gland loss",
      treatment: "Combination therapies, frequent monitoring"
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Meibomian Gland Dysfunction (MGD) Treatment - IPL & Advanced Therapy | Orange County"
        description="Expert MGD treatment with IPL therapy, LipiFlow, and iLux in Orange County. Dr. Bonakdar specializes in advanced meibomian gland dysfunction treatments for lasting dry eye relief."
        keywords="meibomian gland dysfunction, MGD treatment, IPL therapy eyes, LipiFlow Orange County, iLux treatment, evaporative dry eye, posterior blepharitis, meibomitis, oil gland dysfunction, dry eye specialist, Dr. Bonakdar, Santa Ana eye doctor, Orange County MGD expert, advanced dry eye treatment"
        canonicalUrl="https://eyecarecenteroc.com/education/conditions/meibomian-gland-dysfunction"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <Hero 
          title="Meibomian Gland Dysfunction (MGD)"
          subtitle="Advanced treatments including IPL therapy for lasting dry eye relief"
          buttonText="Schedule MGD Consultation"
          backgroundClass="bg-gradient-to-r from-amber-50 to-orange-50"
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
              <span className="text-gray-900">Meibomian Gland Dysfunction</span>
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
                      <Eye className="w-6 h-6 text-amber-500" />
                      Understanding Meibomian Gland Dysfunction
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-700">
                      Meibomian Gland Dysfunction (MGD) is the leading cause of dry eye disease, affecting 
                      over 85% of dry eye patients. These specialized glands in your eyelids produce the 
                      oil layer of your tears, which prevents tear evaporation and keeps your eyes comfortable.
                    </p>
                    <p className="text-gray-700">
                      When these glands become blocked or dysfunctional, the oil quality deteriorates or 
                      production stops, leading to rapid tear evaporation and chronic dry eye symptoms. 
                      Without proper treatment, MGD can progressively worsen, leading to permanent gland loss.
                    </p>
                    
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                      <div className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-amber-900 mb-1">Good News: Advanced Treatments Available</h4>
                          <p className="text-sm text-amber-800">
                            Modern treatments like IPL therapy and LipiFlow can restore gland function and 
                            provide long-lasting relief. Early treatment prevents permanent gland damage.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Symptoms */}
                <Card>
                  <CardHeader>
                    <CardTitle>Common Symptoms of MGD</CardTitle>
                    <CardDescription>Symptoms often worsen throughout the day</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {symptoms.map((symptom, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                          <symptom.icon className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-sm">{symptom.title}</h4>
                            <p className="text-xs text-gray-600 mt-1">{symptom.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Advanced Treatments */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-6 h-6 text-blue-500" />
                      Advanced Treatment Options
                    </CardTitle>
                    <CardDescription>State-of-the-art therapies for lasting relief</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {advancedTreatments.map((treatment, index) => (
                      <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                        <div className="flex items-start gap-3">
                          <treatment.icon className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg mb-2">{treatment.name}</h4>
                            <p className="text-sm text-gray-600 mb-3">{treatment.description}</p>
                            <ul className="space-y-1 mb-2">
                              {treatment.benefits.map((benefit, bIndex) => (
                                <li key={bIndex} className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-sm">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                            <Badge className="bg-blue-100 text-blue-800">
                              {treatment.sessions}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Disease Stages */}
                <Card>
                  <CardHeader>
                    <CardTitle>MGD Stages & Treatment</CardTitle>
                    <CardDescription>Treatment varies based on disease severity</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {stages.map((stage, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold
                            ${index === 0 ? 'bg-green-500' : 
                              index === 1 ? 'bg-yellow-500' : 
                              index === 2 ? 'bg-orange-500' : 'bg-red-500'}`}>
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">{stage.stage}</h4>
                            <p className="text-sm text-gray-600 mt-1">{stage.description}</p>
                            <p className="text-sm text-blue-600 mt-1">
                              <strong>Treatment:</strong> {stage.treatment}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Home Management */}
                <Card>
                  <CardHeader>
                    <CardTitle>Home Management Strategies</CardTitle>
                    <CardDescription>Daily care to support professional treatment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {homeManagement.map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Shield className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <p className="text-sm text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* CTA Card */}
                <Card className="border-2 border-amber-200 bg-amber-50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-amber-600" />
                      Get Advanced MGD Treatment
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm">
                      Don't let MGD control your life. Our advanced treatments including IPL therapy 
                      can provide lasting relief and restore your quality of life.
                    </p>
                    
                    <div className="space-y-3">
                      <AppointmentRequestDialog>
                        <Button className="w-full bg-eyecare-blue hover:bg-eyecare-dark-blue">
                          <Calendar className="w-4 h-4 mr-2" />
                          Schedule IPL Consultation
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

                {/* Why Early Treatment */}
                <Card>
                  <CardHeader>
                    <CardTitle>Why Early Treatment Matters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Prevents permanent gland damage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Better response to treatment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Avoids chronic inflammation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Maintains tear film stability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">Preserves vision quality</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Risk Factors */}
                <Card>
                  <CardHeader>
                    <CardTitle>Risk Factors for MGD</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span className="text-sm">Age over 40 years</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span className="text-sm">Female gender (hormonal)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span className="text-sm">Rosacea or skin conditions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span className="text-sm">Computer/screen use</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span className="text-sm">Contact lens wear</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span className="text-sm">Certain medications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span className="text-sm">Autoimmune conditions</span>
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
                        to="/education/conditions/dry-eye-syndrome"
                        className="block p-2 hover:bg-gray-50 rounded transition-colors text-sm text-eyecare-blue hover:text-eyecare-dark-blue"
                      >
                        → Dry Eye Syndrome
                      </Link>
                      <Link 
                        to="/education/conditions/blepharitis"
                        className="block p-2 hover:bg-gray-50 rounded transition-colors text-sm text-eyecare-blue hover:text-eyecare-dark-blue"
                      >
                        → Blepharitis
                      </Link>
                      <Link 
                        to="/education/conditions/demodex-blepharitis"
                        className="block p-2 hover:bg-gray-50 rounded transition-colors text-sm text-eyecare-blue hover:text-eyecare-dark-blue"
                      >
                        → Demodex Blepharitis
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

export default MeibomianGlandDysfunctionPage;