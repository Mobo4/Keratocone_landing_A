import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, AlertCircle, Heart, Activity, Eye, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';
import { useCallRailPhone } from '@/hooks/useCallRailPhone';

const AllergicConjunctivitisPage: React.FC = () => {
  const { phoneNumber, phoneHref } = useCallRailPhone();

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Eye Conditions', path: '/conditions' },
    { name: 'Conjunctival Conditions', path: '/conditions/conjunctival' },
    { name: 'Allergic Conjunctivitis', path: '/conditions/conjunctival/allergic-conjunctivitis' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Allergic Conjunctivitis",
    "alternateName": ["Eye Allergies", "Seasonal Allergic Conjunctivitis", "Perennial Allergic Conjunctivitis"],
    "description": "Allergic conjunctivitis is inflammation of the conjunctiva caused by allergens like pollen, dust mites, or pet dander. It causes red, itchy, watery eyes and is often seasonal.",
    "symptom": [
      "Itchy, red eyes",
      "Watery discharge",
      "Swollen eyelids",
      "Burning sensation",
      "Light sensitivity"
    ],
    "cause": [
      "Pollen allergens",
      "Dust mites",
      "Pet dander",
      "Mold spores",
      "Contact allergens"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Antihistamine Eye Drops",
        "description": "Topical medications to block allergic reactions in the eyes"
      },
      {
        "@type": "MedicalProcedure", 
        "name": "Mast Cell Stabilizers",
        "description": "Preventive medications to reduce allergic response"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Allergen Avoidance",
        "description": "Environmental controls to minimize exposure to triggers"
      }
    ],
    "riskFactor": ["Personal history of allergies", "Family history of allergies", "Asthma", "Eczema", "Environmental exposures"],
    "epidemiology": "Affects 15-20% of the population, more common in spring and fall seasons"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Allergic Conjunctivitis Treatment - Eye Allergy Relief | Eyecare Center OC"
        description="Expert treatment for allergic conjunctivitis and eye allergies. Comprehensive allergy management including antihistamine drops and prevention strategies in Orange County."
        keywords="allergic conjunctivitis, eye allergies, seasonal allergies, antihistamine eye drops, Orange County allergy treatment, itchy eyes"
        canonicalUrl="https://eyecarecenteroc.com/conditions/conjunctival/allergic-conjunctivitis"
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
                <span className="font-medium">Conjunctival Conditions</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Allergic Conjunctivitis
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Allergic conjunctivitis affects millions during allergy season and year-round. Our comprehensive approach combines effective medications with environmental control strategies to provide lasting relief from itchy, red, watery eyes.
              </p>
              <div className="flex flex-wrap gap-4">
                <AppointmentRequestDialog>
                  <button className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-3 rounded-md transition-colors font-medium flex items-center">
                    Schedule Allergy Evaluation <Calendar className="ml-2 h-5 w-5" />
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
                  Quick Facts About Allergic Conjunctivitis
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Common Symptoms:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Itchy, red eyes</li>
                      <li>• Watery discharge</li>
                      <li>• Swollen eyelids</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Common Triggers:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Pollen (trees, grass, weeds)</li>
                      <li>• Dust mites</li>
                      <li>• Pet dander</li>
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
                    Understanding Allergic Conjunctivitis
                  </h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-4">
                      Allergic conjunctivitis occurs when the immune system overreacts to normally harmless substances, causing inflammation of the conjunctiva (the clear membrane covering the white part of the eye and inner eyelids).
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border-l-4 border-green-400 pl-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Seasonal Allergic Conjunctivitis</h3>
                        <p className="text-sm text-gray-600">Most common type, triggered by outdoor allergens like pollen. Symptoms occur during specific seasons.</p>
                      </div>
                      <div className="border-l-4 border-blue-400 pl-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Perennial Allergic Conjunctivitis</h3>
                        <p className="text-sm text-gray-600">Year-round symptoms caused by indoor allergens like dust mites, pet dander, and mold.</p>
                      </div>
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
                      Allergic conjunctivitis symptoms can range from mild to severe and often affect both eyes simultaneously.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Intense itching of the eyes and eyelids</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Red, bloodshot eyes</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Watery, clear discharge from eyes</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Swollen, puffy eyelids</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Burning or stinging sensation</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Light sensitivity (photophobia)</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Dark circles under eyes (allergic shiners)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Causes and Triggers */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <Activity className="h-8 w-8 mr-3 text-eyecare-blue" />
                    Common Allergens & Triggers
                  </h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Outdoor Allergens</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Tree pollen (spring)</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Grass pollen (late spring/summer)</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Weed pollen (fall)</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Outdoor mold spores</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Indoor Allergens</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Dust mites</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Pet dander (cats, dogs)</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Indoor mold</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Cockroach allergens</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Treatment Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Comprehensive Treatment Options</h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-6">
                      Effective allergic conjunctivitis treatment combines medications to control symptoms with environmental strategies to reduce allergen exposure.
                    </p>
                    <div className="space-y-6">
                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Antihistamine Eye Drops</h3>
                        <p className="text-gray-700 mb-3">First-line treatment to block allergic reactions and provide rapid symptom relief.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Olopatadine (Pataday®, Patanol®)</li>
                          <li>• Ketotifen (Zaditor®, Alaway®)</li>
                          <li>• Azelastine (Optivar®)</li>
                          <li>• Fast-acting relief within 15 minutes</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Mast Cell Stabilizers</h3>
                        <p className="text-gray-700 mb-3">Preventive medications that reduce allergic response when used before exposure.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Cromolyn sodium (Crolom®)</li>
                          <li>• Nedocromil (Alocril®)</li>
                          <li>• Start 2-4 weeks before allergy season</li>
                          <li>• Best for prevention rather than acute treatment</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Combination Medications</h3>
                        <p className="text-gray-700 mb-3">Dual-action drops combining antihistamine and mast cell stabilizer effects.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Epinastine (Elestat®)</li>
                          <li>• Alcaftadine (Lastacaft®)</li>
                          <li>• Immediate and long-term relief</li>
                          <li>• Once or twice daily dosing</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Oral Medications</h3>
                        <p className="text-gray-700 mb-3">Systemic treatment for severe cases or when multiple allergy symptoms are present.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Oral antihistamines (cetirizine, loratadine)</li>
                          <li>• For systemic allergic symptoms</li>
                          <li>• May help with concurrent nasal allergies</li>
                          <li>• Consider for patients with multiple allergies</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Environmental Control</h3>
                        <p className="text-gray-700 mb-3">Strategies to reduce allergen exposure and prevent symptoms.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• HEPA air filters and purifiers</li>
                          <li>• Allergen-proof bedding covers</li>
                          <li>• Regular cleaning and vacuuming</li>
                          <li>• Keeping windows closed during high pollen days</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Prevention Tips */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Prevention Strategies</h2>
                  <div className="bg-green-50 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">During Allergy Season</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Check daily pollen counts</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Wear wraparound sunglasses outdoors</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Keep car windows closed, use AC</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Shower after outdoor activities</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Year-Round Prevention</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Use dust mite-proof bedding</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Maintain low indoor humidity (30-50%)</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Regular HVAC filter changes</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Avoid rubbing eyes with hands</span>
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
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">How can I tell if my eye symptoms are from allergies or infection?</h3>
                      <p className="text-gray-700">Allergic conjunctivitis typically affects both eyes with intense itching and clear discharge, while infections often start in one eye with thick, colored discharge and less itching. Allergic symptoms also coincide with known allergen exposure.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">When should I start using allergy eye drops?</h3>
                      <p className="text-gray-700">For seasonal allergies, start preventive treatments 2-4 weeks before your typical allergy season begins. For immediate relief of active symptoms, antihistamine drops can be used as soon as symptoms appear.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Can allergic conjunctivitis cause permanent eye damage?</h3>
                      <p className="text-gray-700">Simple allergic conjunctivitis rarely causes permanent damage. However, chronic severe cases or vernal keratoconjunctivitis can potentially affect the cornea. Proper treatment prevents complications and maintains eye health.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Are over-the-counter allergy eye drops safe for long-term use?</h3>
                      <p className="text-gray-700">Most modern antihistamine eye drops are safe for extended use during allergy seasons. However, avoid decongestant drops ("gets the red out") for more than 3 days, as they can cause rebound redness. Consult your eye doctor for chronic symptoms.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Seasonal Alert */}
                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-yellow-800">Allergy Season Alert</h3>
                  <p className="text-yellow-700 font-semibold mb-4">Peak allergy times in Orange County:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Spring: Tree pollen (March-May)</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Summer: Grass pollen (May-July)</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Fall: Weed pollen (August-October)</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Year-round: Dust mites, pet dander</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <AppointmentRequestDialog>
                      <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-3 rounded-md transition-colors font-medium">
                        Get Allergy Treatment
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
                        to="/conditions/ocular-surface/dry-eye-syndrome"
                        className="text-eyecare-blue hover:text-eyecare-dark-blue flex items-center"
                      >
                        Dry Eye Syndrome
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </li>
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
                        to="/conditions/conjunctival/viral-conjunctivitis"
                        className="text-eyecare-blue hover:text-eyecare-dark-blue flex items-center"
                      >
                        Viral Conjunctivitis
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
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-eyecare-lighter-blue rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Allergy Relief Solutions</h3>
                  <p className="text-gray-700 mb-4">
                    Don't let eye allergies impact your daily activities. Our targeted treatments provide effective relief and prevention strategies.
                  </p>
                  <AppointmentRequestDialog>
                    <button className="w-full bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-4 py-3 rounded-md transition-colors font-medium">
                      Start Allergy Treatment
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

export default AllergicConjunctivitisPage;