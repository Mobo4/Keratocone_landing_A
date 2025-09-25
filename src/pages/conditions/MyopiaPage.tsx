import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, AlertCircle, Heart, Activity, Eye, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';
import { useCallRailPhone } from '@/hooks/useCallRailPhone';

const MyopiaPage: React.FC = () => {
  const { phoneNumber, phoneHref } = useCallRailPhone();

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Eye Conditions', path: '/conditions' },
    { name: 'Refractive Errors', path: '/conditions/refractive-errors' },
    { name: 'Myopia & Myopia Control', path: '/conditions/refractive-errors/myopia' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Myopia",
    "alternateName": ["Nearsightedness", "Short-sightedness"],
    "description": "Myopia is a common refractive error where distant objects appear blurry while close objects are seen clearly. It occurs when the eye grows too long or the cornea is too curved.",
    "symptom": [
      "Blurry distance vision",
      "Squinting to see distant objects",
      "Frequent headaches",
      "Eye strain and fatigue",
      "Difficulty seeing the board at school"
    ],
    "cause": [
      "Genetics and family history",
      "Excessive near work",
      "Limited outdoor time",
      "Environmental factors"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Myopia Control Contact Lenses",
        "description": "Specialized contact lenses designed to slow myopia progression in children"
      },
      {
        "@type": "MedicalProcedure", 
        "name": "Orthokeratology",
        "description": "Overnight corneal reshaping lenses that correct vision and control myopia progression"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Atropine Eye Drops",
        "description": "Low-dose atropine drops to slow myopia progression"
      }
    ],
    "riskFactor": ["Family history", "Excessive near work", "Limited outdoor activity", "Asian ethnicity"],
    "epidemiology": "Affects over 2.6 billion people worldwide, with prevalence increasing rapidly especially in children"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Myopia & Myopia Control - Treatment for Nearsightedness | Eyecare Center OC"
        description="Expert myopia treatment and myopia control for children and adults. Advanced options including orthokeratology, specialty contact lenses, and atropine therapy in Orange County."
        keywords="myopia, nearsightedness, myopia control, orthokeratology, myopia management, children myopia, Orange County myopia treatment, myopia progression"
        canonicalUrl="https://eyecarecenteroc.com/conditions/refractive-errors/myopia"
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
                <span className="font-medium">Refractive Errors</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Myopia & Myopia Control
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Myopia (nearsightedness) is a growing global concern, especially in children. Our comprehensive myopia management program combines advanced treatments to correct vision and slow progression, protecting your child's future eye health.
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
                  Quick Facts About Myopia
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Common Symptoms:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Blurry distance vision</li>
                      <li>• Squinting to see far objects</li>
                      <li>• Frequent headaches</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Main Risk Factors:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Family history of myopia</li>
                      <li>• Excessive near work</li>
                      <li>• Limited outdoor activity</li>
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
                {/* Symptoms Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <Heart className="h-8 w-8 mr-3 text-eyecare-blue" />
                    Symptoms & Signs
                  </h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-4">
                      Myopia symptoms often develop gradually and can significantly impact daily activities, especially in children's academic performance.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Blurry vision when looking at distant objects (road signs, TV, classroom board)</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Squinting or partially closing eyes to see distant objects clearly</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Frequent headaches from eye strain</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Eye fatigue after activities requiring distance vision</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Sitting closer to the TV or front of the classroom</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Difficulty seeing while driving, especially at night</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Poor performance in sports requiring distance vision</span>
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
                      Myopia develops when the eye grows too long or the cornea becomes too curved, causing light to focus in front of the retina rather than directly on it.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Genetics:</strong> Family history is the strongest predictor - children with one myopic parent have 3x higher risk</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Excessive near work:</strong> Prolonged reading, computer use, and close-up activities</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Limited outdoor time:</strong> Less than 2 hours daily outdoors increases myopia risk</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Environmental factors:</strong> Urban living, higher education levels, and lifestyle changes</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Age of onset:</strong> Early onset myopia (before age 10) progresses more rapidly</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Ethnicity:</strong> Higher prevalence in East Asian populations</span>
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
                      Our comprehensive myopia evaluation goes beyond basic vision testing to assess progression risk and develop personalized treatment plans.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Visual acuity testing:</strong> Comprehensive distance and near vision assessment</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Refraction testing:</strong> Precise measurement of myopia degree (-1.00D to -6.00D+ range)</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Axial length measurement:</strong> IOLMaster technology to track eye growth over time</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Corneal topography:</strong> Detailed mapping of corneal shape and curvature</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Peripheral refraction testing:</strong> Assessment of retinal defocus patterns</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Family history evaluation:</strong> Risk stratification based on genetic factors</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Lifestyle assessment:</strong> Analysis of near work habits and outdoor activity</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Treatment Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Myopia Control Treatment Options</h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-6">
                      Our evidence-based myopia control program can slow progression by 30-60%, reducing lifetime risk of sight-threatening complications. Treatment plans are personalized based on age, progression rate, and lifestyle factors.
                    </p>
                    <div className="space-y-6">
                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Orthokeratology (Ortho-K)</h3>
                        <p className="text-gray-700 mb-2">Overnight corneal reshaping lenses that provide clear vision during the day without glasses or contacts, while slowing myopia progression by 32-63%.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Ideal for active children and teens</li>
                          <li>• FDA-approved for overnight wear</li>
                          <li>• Reversible treatment option</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Myopia Control Contact Lenses</h3>
                        <p className="text-gray-700 mb-2">Specialized daily disposable lenses with dual-focus or multifocal designs that reduce peripheral hyperopic defocus.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• MiSight® 1 day lenses (FDA-approved)</li>
                          <li>• CooperVision Biofinity Energys</li>
                          <li>• 25-52% reduction in myopia progression</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Low-Dose Atropine Therapy</h3>
                        <p className="text-gray-700 mb-2">Dilute atropine eye drops (0.01-0.05%) applied nightly to slow axial elongation with minimal side effects.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 30-77% reduction in progression</li>
                          <li>• Minimal impact on near vision</li>
                          <li>• Can be combined with other treatments</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Myopia Control Spectacles</h3>
                        <p className="text-gray-700 mb-2">Advanced lens designs with peripheral defocus management technology for children who prefer glasses.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Essilor Stellest™ lenses</li>
                          <li>• ZEISS MyoVision® Pro</li>
                          <li>• 20-40% progression reduction</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Lifestyle Modifications</h3>
                        <p className="text-gray-700 mb-2">Evidence-based recommendations to support myopia control treatment effectiveness.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Increase outdoor time to 2+ hours daily</li>
                          <li>• Follow 20-20-20 rule for near work</li>
                          <li>• Maintain appropriate reading distance</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Prevention Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Prevention Strategies</h2>
                  <div className="bg-green-50 rounded-lg p-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Encourage at least 2 hours of outdoor activity daily - natural light exposure reduces myopia risk</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Limit continuous near work - take 20-second breaks every 20 minutes to look 20 feet away</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Maintain proper reading distance - hold books and devices at arm's length (14-16 inches)</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Ensure adequate lighting for reading and homework to reduce eye strain</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Schedule regular eye exams starting by age 6 for early detection and intervention</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">Monitor and limit excessive screen time, especially for young children</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* FAQs Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">At what age should myopia control treatment begin?</h3>
                      <p className="text-gray-700">Myopia control is most effective when started early, ideally as soon as myopia is diagnosed. Children between ages 6-12 show the best response to treatment as their eyes are still actively growing. Starting treatment early can significantly reduce the final level of myopia.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">How effective is myopia control treatment?</h3>
                      <p className="text-gray-700">Studies show myopia control treatments can slow progression by 30-60% on average. Orthokeratology and specialty contact lenses typically achieve 40-60% reduction, while low-dose atropine can achieve 30-77% reduction depending on concentration. Results vary by individual and treatment compliance.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Is myopia control treatment safe for children?</h3>
                      <p className="text-gray-700">Yes, all FDA-approved myopia control treatments have excellent safety profiles when properly fitted and monitored. Orthokeratology has been safely used for decades, specialty contact lenses are designed for daily disposal, and low-dose atropine has minimal side effects compared to traditional concentrations.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Will my child eventually not need glasses if they use myopia control?</h3>
                      <p className="text-gray-700">Myopia control slows progression but doesn't reverse existing myopia. The goal is to prevent or reduce the amount of myopia that would have developed without treatment. However, orthokeratology can provide clear vision during the day without glasses or contacts, giving children freedom for activities.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">How long does myopia control treatment need to continue?</h3>
                      <p className="text-gray-700">Treatment typically continues until eye growth stabilizes, usually around age 16-18. Some children may need treatment into their early twenties. Regular monitoring every 6 months helps determine when treatment can be safely discontinued without significant myopia progression.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Why is controlling myopia progression important?</h3>
                      <p className="text-gray-700">High myopia (greater than -6.00D) significantly increases the risk of serious eye conditions later in life, including retinal detachment, glaucoma, cataracts, and myopic macular degeneration. Every diopter of myopia prevented reduces these risks and preserves long-term eye health.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* When to See a Doctor */}
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-red-800">When to Seek Myopia Evaluation</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Child squints frequently or sits close to TV/board</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Family history of myopia, especially high myopia</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Declining academic performance or sports difficulties</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Frequent headaches or eye strain symptoms</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Rapid prescription changes in existing myopia</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <AppointmentRequestDialog>
                      <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-md transition-colors font-medium">
                        Schedule Myopia Consultation
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
                        to="/conditions/refractive-errors/astigmatism"
                        className="text-eyecare-blue hover:text-eyecare-dark-blue flex items-center"
                      >
                        Astigmatism
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/conditions/refractive-errors/hyperopia"
                        className="text-eyecare-blue hover:text-eyecare-dark-blue flex items-center"
                      >
                        Hyperopia (Farsightedness)
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/conditions/refractive-errors/presbyopia"
                        className="text-eyecare-blue hover:text-eyecare-dark-blue flex items-center"
                      >
                        Presbyopia
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/conditions/binocular-vision/convergence-insufficiency"
                        className="text-eyecare-blue hover:text-eyecare-dark-blue flex items-center"
                      >
                        Convergence Insufficiency
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-eyecare-lighter-blue rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Expert Myopia Management</h3>
                  <p className="text-gray-700 mb-4">
                    Dr. Bonakdar offers the latest evidence-based myopia control treatments to protect your child's vision and eye health for life.
                  </p>
                  <AppointmentRequestDialog>
                    <button className="w-full bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-4 py-3 rounded-md transition-colors font-medium">
                      Start Myopia Control Program
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

export default MyopiaPage;