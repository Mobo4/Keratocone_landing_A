import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, AlertCircle, Heart, Activity, Eye, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';
import { useCallRailPhone } from '@/hooks/useCallRailPhone';

const NarrowAnglesPage: React.FC = () => {
  const { phoneNumber, phoneHref } = useCallRailPhone();

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Eye Conditions', path: '/conditions' },
    { name: 'Glaucoma', path: '/conditions/glaucoma' },
    { name: 'Narrow Angles & Laser Treatment', path: '/conditions/glaucoma/narrow-angles' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Narrow Angle Glaucoma",
    "alternateName": ["Angle-Closure Glaucoma", "Closed-Angle Glaucoma", "Primary Angle-Closure"],
    "description": "Narrow angles occur when the drainage system of the eye becomes blocked, potentially leading to dangerous pressure increases. Laser iridotomy and iridoplasty are preventive treatments that create new drainage pathways.",
    "symptom": [
      "Sudden severe eye pain",
      "Rapid vision loss",
      "Nausea and vomiting",
      "Seeing halos around lights",
      "Red, painful eye"
    ],
    "cause": [
      "Anatomically narrow drainage angles",
      "Lens swelling with age",
      "Pupil dilation in dark environments",
      "Certain medications"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Laser Peripheral Iridotomy",
        "description": "Laser creates a small hole in the iris to improve fluid drainage and prevent pressure spikes"
      },
      {
        "@type": "MedicalProcedure", 
        "name": "Laser Iridoplasty",
        "description": "Laser treatment that reshapes the peripheral iris to widen the drainage angle"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Emergency Medical Treatment",
        "description": "Immediate pressure-lowering medications for acute angle-closure attacks"
      }
    ],
    "riskFactor": ["Asian ethnicity", "Family history", "Female gender", "Age over 40", "Hyperopia"],
    "epidemiology": "More common in Asian populations and women, typically affects people over 40"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Narrow Angles & Laser Iridotomy Treatment | Prevent Glaucoma | Eyecare Center OC"
        description="Expert treatment for narrow angles with laser iridotomy and iridoplasty. Prevent angle-closure glaucoma attacks with advanced laser procedures in Orange County."
        keywords="narrow angles, laser iridotomy, iridoplasty, angle-closure glaucoma, preventive laser treatment, Orange County glaucoma, laser eye surgery"
        canonicalUrl="https://eyecarecenteroc.com/conditions/glaucoma/narrow-angles"
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
                <span className="font-medium">Glaucoma</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Narrow Angles & Laser Treatment
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Narrow drainage angles put you at risk for sudden, sight-threatening pressure spikes. Our advanced laser treatments - iridotomy and iridoplasty - create safer drainage pathways to prevent angle-closure glaucoma attacks before they occur.
              </p>
              <div className="flex flex-wrap gap-4">
                <AppointmentRequestDialog>
                  <button className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-3 rounded-md transition-colors font-medium flex items-center">
                    Schedule Glaucoma Screening <Calendar className="ml-2 h-5 w-5" />
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
                  Quick Facts About Narrow Angles
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Warning Signs:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Sudden severe eye pain</li>
                      <li>• Halos around lights</li>
                      <li>• Rapid vision loss</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Risk Factors:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Family history of glaucoma</li>
                      <li>• Asian or Inuit ethnicity</li>
                      <li>• Farsightedness (hyperopia)</li>
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
                    Understanding Narrow Angles
                  </h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-4">
                      The drainage angle is the space between the iris and cornea where aqueous fluid normally exits the eye. When this angle becomes narrow or blocked, eye pressure can rise rapidly to dangerous levels, potentially causing permanent vision loss within hours.
                    </p>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                      <p className="text-gray-700"><strong>Critical Point:</strong> Narrow angles often show no symptoms until a sudden attack occurs. Early detection through comprehensive eye exams is essential for prevention.</p>
                    </div>
                  </div>
                </div>

                {/* Symptoms Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <Heart className="h-8 w-8 mr-3 text-eyecare-blue" />
                    Symptoms & Warning Signs
                  </h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-red-700 mb-3">Acute Attack Symptoms (Emergency)</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Sudden, severe eye pain</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Rapid vision loss or blurriness</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Nausea and vomiting</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Red, swollen eye</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Fixed, dilated pupil</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-orange-700 mb-3">Early Warning Signs</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Seeing halos around lights</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Intermittent eye pain or discomfort</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Blurred vision in dim lighting</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Mild headaches around the eyes</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-orange-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Eye discomfort in movie theaters</span>
                          </li>
                        </ul>
                      </div>
                    </div>
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
                      Narrow angles result from anatomical features that limit drainage space. Understanding your risk factors helps determine if preventive treatment is needed.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Anatomical predisposition:</strong> Smaller, shorter eyes with crowded anterior segments</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Ethnicity:</strong> Higher risk in Asian, Inuit, and Hispanic populations</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Age-related changes:</strong> Lens thickening with age reduces drainage space</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Hyperopia (farsightedness):</strong> Shorter eyes are more prone to narrow angles</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Family history:</strong> Genetic predisposition to narrow drainage angles</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Gender:</strong> Women are 2-4 times more likely to develop angle-closure</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Medications:</strong> Certain drugs can trigger pupil dilation and angle closure</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Diagnosis Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <Eye className="h-8 w-8 mr-3 text-eyecare-blue" />
                    Diagnosis & Assessment
                  </h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-4">
                      Specialized testing identifies narrow angles before symptoms develop, allowing for preventive treatment to avoid emergency situations.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Gonioscopy:</strong> Direct visualization of drainage angles using specialized contact lens</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Anterior segment OCT:</strong> High-resolution imaging of angle anatomy and depth</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Ultrasound biomicroscopy:</strong> Detailed imaging of ciliary body and lens position</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Dark room provocative testing:</strong> Assessment of angle closure risk in dim lighting</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Intraocular pressure monitoring:</strong> Baseline and post-dilation pressure measurements</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Optic nerve evaluation:</strong> Assessment for existing glaucoma damage</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Treatment Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Laser Treatment Options</h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-6">
                      Preventive laser treatments are the gold standard for managing narrow angles, creating permanent drainage pathways to prevent dangerous pressure spikes.
                    </p>
                    <div className="space-y-6">
                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Laser Peripheral Iridotomy (LPI)</h3>
                        <p className="text-gray-700 mb-3">A microscopic hole is created in the peripheral iris using YAG laser, allowing aqueous fluid to bypass the natural drainage route.</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Procedure Details:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• 5-10 minute outpatient procedure</li>
                              <li>• Topical anesthesia only</li>
                              <li>• Immediate relief of angle closure risk</li>
                              <li>• 95%+ success rate</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Prevents acute angle-closure attacks</li>
                              <li>• Minimal discomfort during procedure</li>
                              <li>• Permanent solution</li>
                              <li>• Quick recovery time</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Laser Peripheral Iridoplasty</h3>
                        <p className="text-gray-700 mb-3">Argon laser is used to contract peripheral iris tissue, mechanically widening the drainage angle in cases where iridotomy alone is insufficient.</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">When Used:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Plateau iris configuration</li>
                              <li>• Persistent angle closure after LPI</li>
                              <li>• Lens-induced angle closure</li>
                              <li>• Thick peripheral iris</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Advantages:</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Widens drainage angles mechanically</li>
                              <li>• Can be repeated if needed</li>
                              <li>• Effective for complex cases</li>
                              <li>• Minimal post-operative care</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-red-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Treatment</h3>
                        <p className="text-gray-700 mb-3">Acute angle-closure attacks require immediate medical intervention to prevent permanent vision loss.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• IV acetazolamide and topical pressure-lowering drops</li>
                          <li>• Hyperosmotic agents (mannitol) to rapidly reduce pressure</li>
                          <li>• Emergency laser iridotomy once pressure is controlled</li>
                          <li>• Prophylactic treatment of the unaffected eye</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Post-Treatment Care */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Post-Treatment Care & Recovery</h2>
                  <div className="bg-green-50 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Immediate Recovery (First 24 Hours)</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Mild eye discomfort and light sensitivity normal</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Use prescribed anti-inflammatory drops</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Avoid rubbing or pressing on treated eye</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Return to normal activities same day</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Long-term Follow-up</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">1-week post-treatment examination</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">6-month gonioscopy to confirm angle opening</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Annual glaucoma monitoring</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Lifetime protection from angle-closure attacks</span>
                          </li>
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
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Is laser iridotomy painful?</h3>
                      <p className="text-gray-700">The procedure is performed with topical anesthesia and causes minimal discomfort. Most patients describe feeling only a slight pinching sensation or brief flash of light. Any discomfort typically resolves within hours.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">How effective is laser treatment for preventing angle-closure?</h3>
                      <p className="text-gray-700">Laser peripheral iridotomy has a success rate exceeding 95% for preventing angle-closure attacks. The procedure creates a permanent bypass route for aqueous drainage, providing lifelong protection in most cases.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Will I need the procedure in both eyes?</h3>
                      <p className="text-gray-700">Narrow angles typically affect both eyes, though often asymmetrically. If you have narrow angles in one eye, the other eye usually has similar anatomy and benefits from prophylactic treatment to prevent future problems.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Are there any side effects from laser iridotomy?</h3>
                      <p className="text-gray-700">Side effects are rare and usually minor. Some patients may notice a small visual spot initially or see halos around lights temporarily. These effects typically diminish over time as the brain adapts to the small hole in the iris.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Can narrow angles be detected before symptoms develop?</h3>
                      <p className="text-gray-700">Yes, narrow angles are typically identified during comprehensive eye examinations through gonioscopy and advanced imaging. This allows for preventive treatment before an acute attack occurs, which is ideal for preserving vision.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Emergency Warning */}
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-red-800">Emergency Symptoms</h3>
                  <p className="text-red-700 font-semibold mb-4">Seek IMMEDIATE medical attention if you experience:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Sudden severe eye pain</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Rapid vision loss</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Nausea with eye pain</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Seeing halos around lights</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <a 
                      href={phoneHref}
                      className="w-full block text-center bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-md transition-colors font-medium callrail-phone"
                    >
                      Call Emergency Line
                    </a>
                  </div>
                </div>

                {/* Related Conditions */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">Related Conditions</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link 
                        to="/conditions/glaucoma/open-angle-glaucoma"
                        className="text-eyecare-blue hover:text-eyecare-dark-blue flex items-center"
                      >
                        Open-Angle Glaucoma
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/conditions/glaucoma/secondary-glaucoma"
                        className="text-eyecare-blue hover:text-eyecare-dark-blue flex items-center"
                      >
                        Secondary Glaucoma
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/conditions/retinal/retinal-detachment"
                        className="text-eyecare-blue hover:text-eyecare-dark-blue flex items-center"
                      >
                        Retinal Detachment
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-eyecare-lighter-blue rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Protect Your Vision</h3>
                  <p className="text-gray-700 mb-4">
                    Early detection and preventive laser treatment can protect you from sight-threatening angle-closure attacks. Schedule your comprehensive glaucoma screening today.
                  </p>
                  <AppointmentRequestDialog>
                    <button className="w-full bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-4 py-3 rounded-md transition-colors font-medium">
                      Schedule Glaucoma Screening
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

export default NarrowAnglesPage;