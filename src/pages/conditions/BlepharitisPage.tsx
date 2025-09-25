import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, AlertCircle, Heart, Activity, Eye, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';
import { useCallRailPhone } from '@/hooks/useCallRailPhone';

const BlepharitisPage: React.FC = () => {
  const { phoneNumber, phoneHref } = useCallRailPhone();

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Eye Conditions', path: '/conditions' },
    { name: 'Eyelid Conditions', path: '/conditions/eyelid-conditions' },
    { name: 'Blepharitis', path: '/conditions/eyelid-conditions/blepharitis' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Blepharitis",
    "alternateName": ["Eyelid Inflammation", "Anterior Blepharitis", "Posterior Blepharitis"],
    "description": "Blepharitis is a common inflammatory condition affecting the eyelids, characterized by redness, scaling, and irritation along the eyelid margins. It often involves dysfunction of the oil glands in the eyelids.",
    "symptom": [
      "Red, swollen eyelids",
      "Itchy, burning sensation",
      "Crusty, flaky eyelid margins", 
      "Dry, gritty feeling in eyes",
      "Excessive tearing"
    ],
    "cause": [
      "Bacterial overgrowth",
      "Meibomian gland dysfunction",
      "Seborrheic dermatitis",
      "Rosacea",
      "Allergic reactions"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Eyelid Hygiene",
        "description": "Daily cleaning routine with warm compresses and gentle lid scrubs"
      },
      {
        "@type": "MedicalProcedure", 
        "name": "IPL Therapy",
        "description": "Intense Pulsed Light therapy to treat meibomian gland dysfunction"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Prescription Medications",
        "description": "Topical antibiotics, anti-inflammatory drops, or oral medications"
      }
    ],
    "riskFactor": ["Rosacea", "Seborrheic dermatitis", "Age over 50", "Contact lens wear", "Poor eyelid hygiene"],
    "epidemiology": "Affects up to 47% of ophthalmology patients, more common with advancing age"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Blepharitis Treatment - Eyelid Inflammation Relief | Eyecare Center OC"
        description="Expert blepharitis treatment for red, inflamed eyelids. Advanced therapies including IPL, warm compresses, and specialized eyelid care in Orange County."
        keywords="blepharitis, eyelid inflammation, meibomian gland dysfunction, eyelid hygiene, IPL therapy, Orange County blepharitis treatment"
        canonicalUrl="https://eyecarecenteroc.com/conditions/eyelid-conditions/blepharitis"
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
                <span className="font-medium">Eyelid Conditions</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Blepharitis
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Blepharitis is a chronic inflammatory condition affecting the eyelids, causing redness, scaling, and discomfort. Our comprehensive treatment approach targets both symptoms and underlying causes for lasting relief and improved eye comfort.
              </p>
              <div className="flex flex-wrap gap-4">
                <AppointmentRequestDialog>
                  <button className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-3 rounded-md transition-colors font-medium flex items-center">
                    Schedule Consultation <Calendar className="ml-2 h-5 w-5" />
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
                  Quick Facts About Blepharitis
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Common Symptoms:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Red, swollen eyelids</li>
                      <li>• Crusty, flaky eyelashes</li>
                      <li>• Burning, itchy sensation</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Main Causes:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Bacterial overgrowth</li>
                      <li>• Oil gland dysfunction</li>
                      <li>• Skin conditions like rosacea</li>
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
                    Understanding Blepharitis
                  </h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-4">
                      Blepharitis is one of the most common eye conditions, affecting millions of people worldwide. It involves inflammation of the eyelid margins where the eyelashes grow, often due to bacterial overgrowth or dysfunction of the tiny oil glands (meibomian glands) in the eyelids.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border-l-4 border-blue-400 pl-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Anterior Blepharitis</h3>
                        <p className="text-sm text-gray-600">Affects the outer front edge of the eyelid where eyelashes are attached. Usually caused by bacteria or seborrheic dermatitis.</p>
                      </div>
                      <div className="border-l-4 border-green-400 pl-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Posterior Blepharitis</h3>
                        <p className="text-sm text-gray-600">Affects the inner edge of the eyelid that touches the eye. Caused by dysfunction of meibomian oil glands.</p>
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
                      Blepharitis symptoms can vary in severity and may be intermittent or chronic. Early recognition and treatment can prevent complications and provide relief.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Primary Symptoms</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Red, swollen eyelid margins</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Crusty, flaky scales along eyelashes</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Burning, stinging, or itching sensation</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Gritty, sandy feeling in the eyes</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Excessive tearing or watery eyes</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Additional Signs</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Light sensitivity (photophobia)</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Eyelash loss or misdirected growth</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Foam or bubbles at eyelid corners</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Difficulty wearing contact lenses</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Recurrent styes or chalazia</span>
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
                      Blepharitis can result from various factors, often involving a combination of bacterial overgrowth, oil gland dysfunction, and underlying skin conditions.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Bacterial overgrowth:</strong> Normal skin bacteria (Staphylococcus) multiply excessively on eyelid margins</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Meibomian gland dysfunction:</strong> Oil glands become blocked or produce poor-quality oils</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Seborrheic dermatitis:</strong> Skin condition causing dandruff and scaly patches</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Rosacea:</strong> Inflammatory skin condition affecting face and eyelids</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Allergic reactions:</strong> To cosmetics, contact lenses, or eye medications</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Hormonal changes:</strong> Particularly during menopause affecting oil production</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Environmental factors:</strong> Dust, pollution, wind, and dry air exposure</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Diagnosis Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <Eye className="h-8 w-8 mr-3 text-eyecare-blue" />
                    Diagnosis & Evaluation
                  </h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-4">
                      Proper diagnosis involves a comprehensive examination to identify the type of blepharitis and any contributing factors, allowing for targeted treatment.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Detailed medical history:</strong> Assessment of symptoms, duration, and potential triggers</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Slit-lamp examination:</strong> Magnified inspection of eyelid margins, lashes, and oil glands</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Meibomian gland evaluation:</strong> Assessment of gland blockage and oil quality</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Tear film analysis:</strong> Evaluation of tear stability and composition</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Bacterial culture:</strong> If infection is suspected or treatment is not responding</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Skin condition assessment:</strong> Evaluation for associated dermatologic conditions</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Treatment Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Treatment Options</h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-6">
                      Blepharitis treatment focuses on reducing inflammation, controlling bacterial overgrowth, and improving oil gland function. Most patients require ongoing management rather than a one-time cure.
                    </p>
                    <div className="space-y-6">
                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Eyelid Hygiene (Foundation of Treatment)</h3>
                        <p className="text-gray-700 mb-3">Daily eyelid cleaning routine to remove bacteria, debris, and improve oil gland function.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Warm compresses for 10-15 minutes twice daily</li>
                          <li>• Gentle lid scrubs with baby shampoo or specialized cleansers</li>
                          <li>• Eyelid massage to express blocked oil glands</li>
                          <li>• Makeup removal and clean cosmetic application</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Intense Pulsed Light (IPL) Therapy</h3>
                        <p className="text-gray-700 mb-3">Advanced treatment using light energy to reduce inflammation and stimulate healthy oil gland function.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Targets abnormal blood vessels causing inflammation</li>
                          <li>• Improves meibomian gland function and oil quality</li>
                          <li>• Series of 3-4 treatments for optimal results</li>
                          <li>• Minimal downtime with long-lasting benefits</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Prescription Medications</h3>
                        <p className="text-gray-700 mb-3">Targeted therapies to control bacterial growth and reduce inflammation.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Topical antibiotics (erythromycin, azithromycin)</li>
                          <li>• Anti-inflammatory drops (cyclosporine, lifitegrast)</li>
                          <li>• Oral antibiotics for severe cases (doxycycline, minocycline)</li>
                          <li>• Steroid drops for acute flare-ups (short-term use)</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Treatments</h3>
                        <p className="text-gray-700 mb-3">In-office procedures for stubborn or severe blepharitis cases.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• LipiFlow thermal pulsation treatment</li>
                          <li>• BlephEx eyelid margin debridement</li>
                          <li>• Meibomian gland expression</li>
                          <li>• TearCare heating and expression therapy</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Lifestyle Modifications</h3>
                        <p className="text-gray-700 mb-3">Environmental and behavioral changes to support treatment and prevent recurrence.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Use humidifiers in dry environments</li>
                          <li>• Omega-3 fatty acid supplementation</li>
                          <li>• Frequent cleaning of pillowcases and towels</li>
                          <li>• Avoid eye makeup during acute flares</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Home Care Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Home Care Instructions</h2>
                  <div className="bg-blue-50 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Daily Eyelid Hygiene Routine</h3>
                        <ol className="space-y-2 text-sm text-gray-700">
                          <li><strong>1.</strong> Apply warm, moist compress for 10-15 minutes</li>
                          <li><strong>2.</strong> Gently massage closed eyelids in circular motions</li>
                          <li><strong>3.</strong> Clean eyelid margins with diluted baby shampoo</li>
                          <li><strong>4.</strong> Rinse thoroughly with warm water</li>
                          <li><strong>5.</strong> Pat dry with clean towel</li>
                          <li><strong>6.</strong> Apply prescribed medications if recommended</li>
                        </ol>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Tips for Success</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">Be consistent - daily hygiene is essential</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">Use clean hands and materials each time</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">Replace eye makeup regularly</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">Avoid touching or rubbing eyes</span>
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
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Is blepharitis contagious?</h3>
                      <p className="text-gray-700">No, blepharitis is not contagious. While it may involve bacterial overgrowth, it's caused by dysfunction of your own eyelid glands and skin conditions, not by infectious agents that spread from person to person.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">How long does blepharitis treatment take to work?</h3>
                      <p className="text-gray-700">Most patients notice improvement within 2-4 weeks of consistent treatment. However, blepharitis is often a chronic condition requiring ongoing management. Complete resolution may take 2-3 months, and maintenance therapy is usually needed to prevent recurrence.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Can I wear makeup if I have blepharitis?</h3>
                      <p className="text-gray-700">During acute flares, it's best to avoid eye makeup. Once symptoms improve, you can gradually reintroduce makeup, but choose hypoallergenic, fragrance-free products. Replace mascara and eyeliner frequently, and always remove makeup thoroughly before bed.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Will blepharitis cause permanent damage to my eyes?</h3>
                      <p className="text-gray-700">With proper treatment, blepharitis rarely causes permanent eye damage. However, chronic untreated blepharitis can lead to complications such as styes, chalazia, corneal problems, or chronic dry eyes. Early and consistent treatment prevents these complications.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Can contact lenses worsen blepharitis?</h3>
                      <p className="text-gray-700">Yes, contact lenses can worsen blepharitis by trapping bacteria and debris against the eye. During active blepharitis, switching to glasses temporarily is often recommended. Once symptoms are controlled, you may be able to resume contact lens wear with proper hygiene.</p>
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
                      <span className="text-gray-700 text-sm">Persistent eyelid redness or swelling</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Burning or itching that interferes with daily activities</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Recurring styes or eyelid bumps</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Vision changes or severe light sensitivity</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Home treatments not providing relief</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <AppointmentRequestDialog>
                      <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-md transition-colors font-medium">
                        Schedule Eye Examination
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
                        to="/conditions/eyelid-conditions/stye"
                        className="text-eyecare-blue hover:text-eyecare-dark-blue flex items-center"
                      >
                        Stye (Hordeolum)
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/conditions/eyelid-conditions/chalazion"
                        className="text-eyecare-blue hover:text-eyecare-dark-blue flex items-center"
                      >
                        Chalazion
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
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-eyecare-lighter-blue rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Expert Blepharitis Care</h3>
                  <p className="text-gray-700 mb-4">
                    Don't let chronic eyelid inflammation affect your comfort and quality of life. Our comprehensive treatment approach provides lasting relief.
                  </p>
                  <AppointmentRequestDialog>
                    <button className="w-full bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-4 py-3 rounded-md transition-colors font-medium">
                      Start Treatment Today
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

export default BlepharitisPage;