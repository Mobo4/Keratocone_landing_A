import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, AlertCircle, Heart, Activity, Eye, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';
import { useCallRailPhone } from '@/hooks/useCallRailPhone';

const OcularSurfaceDiseasePage: React.FC = () => {
  const { phoneNumber, phoneHref } = useCallRailPhone();

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Eye Conditions', path: '/conditions' },
    { name: 'Ocular Surface', path: '/conditions/ocular-surface' },
    { name: 'Ocular Surface Disease', path: '/conditions/ocular-surface/ocular-surface-disease' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Ocular Surface Disease",
    "alternateName": ["OSD", "Dry Eye Disease", "Tear Film Dysfunction"],
    "description": "Ocular Surface Disease is a multifactorial condition affecting the tear film and eye surface, causing discomfort, visual disturbance, and potential damage to the cornea and conjunctiva.",
    "symptom": [
      "Dry, gritty feeling",
      "Burning or stinging sensation",
      "Blurred vision",
      "Eye fatigue",
      "Light sensitivity"
    ],
    "cause": [
      "Tear film instability",
      "Meibomian gland dysfunction",
      "Environmental factors",
      "Hormonal changes",
      "Medications"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Artificial Tears",
        "description": "Lubricating eye drops to supplement natural tear production"
      },
      {
        "@type": "MedicalProcedure", 
        "name": "IPL Therapy",
        "description": "Intense Pulsed Light therapy for meibomian gland dysfunction"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Punctal Plugs",
        "description": "Small devices to block tear drainage and preserve moisture"
      }
    ],
    "riskFactor": ["Age over 50", "Female gender", "Computer use", "Contact lens wear", "Autoimmune conditions"],
    "epidemiology": "Affects up to 16 million Americans, more common in women and increasing with age"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Ocular Surface Disease Treatment - Comprehensive Dry Eye Care | Eyecare Center OC"
        description="Expert treatment for ocular surface disease and dry eyes. Advanced therapies including IPL, punctal plugs, and specialized treatments in Orange County."
        keywords="ocular surface disease, dry eye treatment, tear film dysfunction, IPL therapy, punctal plugs, Orange County dry eye specialist"
        canonicalUrl="https://eyecarecenteroc.com/conditions/ocular-surface/ocular-surface-disease"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb Navigation */}
        <div className="bg-gray-50 py-3">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <ChevronRight className="h-4 w-4 text-gray-400" />}
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-gray-600">{crumb.name}</span>
                  ) : (
                    <Link to={crumb.path} className="text-eyecare-blue hover:text-eyecare-dark-blue">
                      {crumb.name}
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-eyecare-lighter-blue to-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-eyecare-blue mb-4">
                <BookOpen className="h-5 w-5" />
                <span className="font-medium">Ocular Surface</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ocular Surface Disease
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Ocular Surface Disease encompasses a spectrum of conditions affecting the tear film and eye surface. Our comprehensive approach addresses underlying causes with advanced treatments to restore comfort and protect your vision.
              </p>
              <div className="flex flex-wrap gap-4">
                <AppointmentRequestDialog>
                  <button className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-3 rounded-md transition-colors font-medium flex items-center">
                    Schedule Evaluation <Calendar className="ml-2 h-5 w-5" />
                  </button>
                </AppointmentRequestDialog>
                <a href={phoneHref} className="bg-white text-eyecare-blue border-2 border-eyecare-blue hover:bg-eyecare-lighter-blue px-8 py-3 rounded-md transition-colors font-medium callrail-phone">
                  Call {phoneNumber}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts Card */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-50 border-l-4 border-eyecare-blue p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4 flex items-center">
                  <AlertCircle className="h-6 w-6 mr-2 text-eyecare-blue" />
                  Quick Facts About Ocular Surface Disease
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Common Symptoms:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Dry, scratchy feeling</li>
                      <li>• Burning or stinging</li>
                      <li>• Blurred or fluctuating vision</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Main Causes:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Tear film instability</li>
                      <li>• Oil gland dysfunction</li>
                      <li>• Environmental factors</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Understanding Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <Eye className="h-8 w-8 mr-3 text-eyecare-blue" />
                    Understanding Ocular Surface Disease
                  </h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-4">
                      Ocular Surface Disease (OSD) is a chronic, multifactorial condition that disrupts the delicate balance of the tear film and ocular surface. This complex disorder affects millions of people and can significantly impact quality of life when left untreated.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                      <p className="text-gray-700"><strong>Key Point:</strong> OSD is not just "dry eyes" - it's a complex inflammatory condition affecting the entire ocular surface ecosystem, requiring comprehensive management.</p>
                    </div>
                  </div>
                </div>

                {/* Symptoms Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <Heart className="h-8 w-8 mr-3 text-eyecare-blue" />
                    Symptoms & Signs
                  </h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-4">
                      OSD symptoms can be variable and may worsen throughout the day or in certain environments. Early recognition leads to better treatment outcomes.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Dry, gritty, or sandy sensation in the eyes</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Burning, stinging, or itching sensation</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Blurred or fluctuating vision, especially with reading or computer use</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Excessive tearing or watery eyes (paradoxical response)</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Light sensitivity (photophobia)</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Eye fatigue and strain</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Difficulty wearing contact lenses</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Red, inflamed eyelids or eye surface</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Causes Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <Activity className="h-8 w-8 mr-3 text-eyecare-blue" />
                    Causes & Risk Factors
                  </h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-4">
                      OSD results from multiple interconnected factors affecting tear production, composition, and distribution across the eye surface.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Meibomian gland dysfunction:</strong> Blocked or malfunctioning oil glands leading to tear film instability</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Aqueous tear deficiency:</strong> Reduced tear production from lacrimal glands</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Environmental factors:</strong> Low humidity, wind, air conditioning, and pollution</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Digital eye strain:</strong> Reduced blink rate during computer and device use</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Hormonal changes:</strong> Menopause, pregnancy, and hormonal medications</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Autoimmune conditions:</strong> Sjögren's syndrome, rheumatoid arthritis, lupus</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Medications:</strong> Antihistamines, decongestants, antidepressants, blood pressure medications</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Age-related changes:</strong> Decreased tear production and gland function with aging</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Diagnosis Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <Eye className="h-8 w-8 mr-3 text-eyecare-blue" />
                    Comprehensive Evaluation
                  </h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-4">
                      Our thorough diagnostic approach identifies the specific type and severity of OSD to develop personalized treatment plans.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Symptom questionnaires:</strong> OSDI and DEQ-5 validated assessments</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Tear break-up time (TBUT):</strong> Measures tear film stability</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Schirmer test:</strong> Quantifies aqueous tear production</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Corneal staining:</strong> Reveals surface damage from dryness</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Meibomian gland evaluation:</strong> Assessment of oil gland structure and function</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Tear osmolarity testing:</strong> Measures tear film concentration</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Inflammatory marker testing:</strong> MMP-9 and lactoferrin levels</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Treatment Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Advanced Treatment Options</h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-6">
                      Our comprehensive treatment approach addresses all aspects of OSD using the latest evidence-based therapies tailored to your specific condition.
                    </p>
                    <div className="space-y-6">
                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Artificial Tears & Lubricants</h3>
                        <p className="text-gray-700 mb-3">Foundation therapy to supplement natural tears and provide immediate symptom relief.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Preservative-free formulations for frequent use</li>
                          <li>• Lipid-enhanced drops for oil layer deficiency</li>
                          <li>• Overnight ointments for severe cases</li>
                          <li>• Prescription drops for enhanced lubrication</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Anti-Inflammatory Therapy</h3>
                        <p className="text-gray-700 mb-3">Targeted treatments to reduce inflammation and restore healthy tear film function.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Cyclosporine A (Restasis®, Cequa®) for immune modulation</li>
                          <li>• Lifitegrast (Xiidra®) for lymphocyte function inhibition</li>
                          <li>• Corticosteroid drops for acute inflammatory episodes</li>
                          <li>• Autologous serum tears for severe cases</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Punctal Occlusion</h3>
                        <p className="text-gray-700 mb-3">Minimally invasive procedure to preserve natural and artificial tears on the eye surface.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Temporary collagen plugs for trial therapy</li>
                          <li>• Semi-permanent silicone plugs for long-term effect</li>
                          <li>• Intracanalicular plugs for invisible comfort</li>
                          <li>• Reversible option with immediate effect</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Intense Pulsed Light (IPL) Therapy</h3>
                        <p className="text-gray-700 mb-3">Advanced treatment targeting meibomian gland dysfunction and inflammatory blood vessels.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Reduces abnormal blood vessels causing inflammation</li>
                          <li>• Improves meibomian gland function and oil quality</li>
                          <li>• Series of 3-4 treatments for optimal results</li>
                          <li>• Long-lasting improvement in symptoms</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Thermal Pulsation Treatments</h3>
                        <p className="text-gray-700 mb-3">In-office procedures to clear blocked meibomian glands and restore oil layer function.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• LipiFlow® thermal pulsation treatment</li>
                          <li>• TearCare® heating and expression system</li>
                          <li>• Significant improvement in gland function</li>
                          <li>• Minimal discomfort with immediate results</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Neurostimulation Therapy</h3>
                        <p className="text-gray-700 mb-3">FDA-approved device therapy to stimulate natural tear production.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• TrueTear® intranasal neurostimulation</li>
                          <li>• Stimulates trigeminal nerve pathways</li>
                          <li>• Drug-free option for tear production</li>
                          <li>• Patient-controlled treatment sessions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQs Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Is ocular surface disease the same as dry eye?</h3>
                      <p className="text-gray-700">Ocular Surface Disease is a broader term encompassing various conditions affecting the eye surface, including dry eye disease. It represents a more comprehensive understanding of the complex interactions between tears, eyelids, and the ocular surface.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Can ocular surface disease be cured?</h3>
                      <p className="text-gray-700">While OSD is typically a chronic condition requiring ongoing management, many patients achieve excellent symptom control and improved quality of life with appropriate treatment. Early intervention can prevent progression and complications.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">How long does treatment take to work?</h3>
                      <p className="text-gray-700">Response to treatment varies by individual and therapy type. Artificial tears provide immediate relief, while anti-inflammatory treatments may take 6-12 weeks for full effect. Advanced therapies like IPL show gradual improvement over 2-3 months.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Will I need to use eye drops forever?</h3>
                      <p className="text-gray-700">Treatment plans are individualized based on your specific condition. Some patients can reduce dependence on drops with advanced treatments, while others benefit from long-term maintenance therapy. Our goal is to minimize symptoms with the least invasive approach.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Can lifestyle changes help with OSD?</h3>
                      <p className="text-gray-700">Yes, lifestyle modifications can significantly improve symptoms. These include using humidifiers, taking breaks from digital devices, staying hydrated, omega-3 supplements, and protecting eyes from wind and dust with wraparound sunglasses.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* When to See a Doctor */}
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-red-800">When to Seek Treatment</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Persistent dry, gritty sensation lasting weeks</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Vision changes or fluctuating blur</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Difficulty with daily activities due to eye discomfort</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Over-the-counter drops not providing relief</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Eye pain, redness, or light sensitivity</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <AppointmentRequestDialog>
                      <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-md transition-colors font-medium">
                        Schedule OSD Evaluation
                      </button>
                    </AppointmentRequestDialog>
                  </div>
                </div>

                {/* Related Conditions */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">Related Conditions</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link 
                        to="/conditions/eyelid-conditions/blepharitis"
                        className="text-eyecare-blue hover:text-eyecare-dark-blue flex items-center"
                      >
                        Blepharitis
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/conditions/ocular-surface/meibomian-gland-dysfunction"
                        className="text-eyecare-blue hover:text-eyecare-dark-blue flex items-center"
                      >
                        Meibomian Gland Dysfunction
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/conditions/binocular-vision/computer-vision-syndrome"
                        className="text-eyecare-blue hover:text-eyecare-dark-blue flex items-center"
                      >
                        Computer Vision Syndrome
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/conditions/conjunctival/allergic-conjunctivitis"
                        className="text-eyecare-blue hover:text-eyecare-dark-blue flex items-center"
                      >
                        Allergic Conjunctivitis
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-eyecare-lighter-blue rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Advanced OSD Treatment</h3>
                  <p className="text-gray-700 mb-4">
                    Don't let ocular surface disease compromise your vision and comfort. Our comprehensive approach provides lasting relief and protection.
                  </p>
                  <AppointmentRequestDialog>
                    <button className="w-full bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-4 py-3 rounded-md transition-colors font-medium">
                      Start Treatment Plan
                    </button>
                  </AppointmentRequestDialog>
                  <a 
                    href={phoneHref} 
                    className="block w-full text-center mt-3 text-eyecare-blue hover:text-eyecare-dark-blue font-medium callrail-phone"
                  >
                    Or Call {phoneNumber}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default OcularSurfaceDiseasePage;