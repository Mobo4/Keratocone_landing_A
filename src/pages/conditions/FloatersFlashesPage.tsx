import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, AlertCircle, Heart, Activity, Eye, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';
import { useCallRailPhone } from '@/hooks/useCallRailPhone';

const FloatersFlashesPage: React.FC = () => {
  const { phoneNumber, phoneHref } = useCallRailPhone();

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Eye Conditions', path: '/conditions' },
    { name: 'Retinal Conditions', path: '/conditions/retinal-conditions' },
    { name: 'Floaters and Flashes', path: '/conditions/retinal-conditions/floaters-flashes' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Eye Floaters and Flashes",
    "alternateName": ["Vitreous Floaters", "Photopsia", "Visual Flashes"],
    "description": "Eye floaters are small spots or strings that drift through your field of vision. Flashes are brief sparkles of light. While usually benign, sudden onset can indicate serious retinal problems requiring immediate attention.",
    "symptom": [
      "Dark spots moving in vision",
      "Cobweb-like strings",
      "Brief flashes of light",
      "Sudden shower of floaters",
      "Curtain-like shadow in vision"
    ],
    "cause": [
      "Age-related vitreous changes",
      "Posterior vitreous detachment",
      "Retinal tear or detachment",
      "Vitreous hemorrhage",
      "Inflammation"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Observation",
        "description": "Monitoring for benign floaters that don't require treatment"
      },
      {
        "@type": "MedicalProcedure", 
        "name": "YAG Laser Vitreolysis",
        "description": "Laser treatment to break up problematic floaters"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Emergency Retinal Treatment",
        "description": "Immediate intervention for retinal tears or detachment"
      }
    ],
    "riskFactor": ["Age over 50", "Myopia", "Eye trauma", "Previous eye surgery", "Diabetes"],
    "epidemiology": "Affects 70% of people by age 70, more common with myopia and after age 50"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Retinal Floaters & Flashes Orange County | Retinal Specialist | Dr. Bonakdar"
        description="Expert retinal evaluation Orange County. Urgent floaters & flashes assessment. Retinal detachment screening, laser vitreolysis treatment. Same-day ophthalmology care. Call now."
        keywords="retinal floaters Orange County, retinal flashes Orange County, retinal specialist Orange County, retinal detachment Orange County, vitreous detachment Orange County, laser vitreolysis Orange County, retinal emergency Orange County, sudden floaters Orange County, vitreous hemorrhage Orange County, ophthalmologist Orange County, Dr. Bonakdar retinal"
        canonicalUrl="https://eyecarecenteroc.com/conditions/retinal-conditions/floaters-flashes"
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
                <span className="font-medium">Retinal Conditions</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Retinal Floaters & Flashes Orange County
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Floaters and flashes are common visual phenomena that affect most people as they age. While usually benign, sudden onset of these symptoms can signal serious retinal problems requiring immediate attention to prevent vision loss.
              </p>
              <div className="flex flex-wrap gap-4">
                <AppointmentRequestDialog>
                  <button className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-3 rounded-md transition-colors font-medium flex items-center">
                    Schedule Eye Exam <Calendar className="ml-2 h-5 w-5" />
                  </button>
                </AppointmentRequestDialog>
                <a href={phoneHref} className="bg-white text-eyecare-blue border-2 border-eyecare-blue hover:bg-eyecare-lighter-blue px-8 py-3 rounded-md transition-colors font-medium callrail-phone">
                  Call {phoneNumber}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Alert */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4 flex items-center text-red-800">
                  <AlertCircle className="h-6 w-6 mr-2 text-red-600" />
                  Emergency Warning Signs
                </h2>
                <p className="text-red-700 font-semibold mb-4">Seek IMMEDIATE medical attention if you experience:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Sudden shower of floaters</li>
                    <li>• Curtain or shadow in peripheral vision</li>
                    <li>• Sudden onset of flashing lights</li>
                  </ul>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Sudden vision loss</li>
                    <li>• Large increase in floater number</li>
                    <li>• Dark shadow moving across vision</li>
                  </ul>
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
                    Understanding Floaters and Flashes
                  </h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-4">
                      The vitreous is a clear, gel-like substance that fills the inside of your eye. As we age, this gel gradually liquefies and can develop clumps or strands that cast shadows on the retina, creating the perception of floaters.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="border-l-4 border-blue-400 pl-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Floaters</h3>
                        <p className="text-sm text-gray-600">Small dark spots, lines, or cobweb-like shapes that move with your eye movements and seem to dart away when you try to look at them directly.</p>
                      </div>
                      <div className="border-l-4 border-yellow-400 pl-4">
                        <h3 className="font-semibold text-gray-900 mb-2">Flashes</h3>
                        <p className="text-sm text-gray-600">Brief sparkles or lightning-like streaks of light, often seen in peripheral vision, caused by vitreous tugging on the retina.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Types and Symptoms */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <Heart className="h-8 w-8 mr-3 text-eyecare-blue" />
                    Types & Symptoms
                  </h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Benign Floaters</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Gradually developing over time</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Few in number and stable</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">More noticeable against bright backgrounds</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">No associated vision loss</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-red-700 mb-3">Concerning Symptoms</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Sudden onset of many new floaters</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Bright flashes of light</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Shadow or curtain in peripheral vision</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Partial vision loss</span>
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
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Age-related vitreous changes:</strong> Normal aging causes vitreous to liquefy and separate from retina</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Posterior vitreous detachment (PVD):</strong> Complete separation of vitreous from retina, common after age 60</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Myopia (nearsightedness):</strong> Elongated eyes more prone to vitreous changes and retinal problems</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Eye trauma:</strong> Injury can cause immediate vitreous changes and retinal damage</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Previous eye surgery:</strong> Cataract surgery can accelerate vitreous changes</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Diabetic retinopathy:</strong> Diabetes can cause vitreous hemorrhage and floaters</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Retinal tear or detachment:</strong> Serious conditions requiring immediate treatment</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Diagnosis Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <Eye className="h-8 w-8 mr-3 text-eyecare-blue" />
                    Comprehensive Eye Examination
                  </h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-4">
                      Prompt evaluation is crucial to distinguish benign floaters from serious retinal conditions that threaten vision.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Detailed symptom history:</strong> Onset, duration, and characteristics of floaters/flashes</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Dilated fundus examination:</strong> Complete retinal evaluation with pupil dilation</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Slit-lamp biomicroscopy:</strong> Detailed vitreous and retinal assessment</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Indirect ophthalmoscopy:</strong> Wide-field view of peripheral retina</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Optical coherence tomography (OCT):</strong> High-resolution retinal imaging</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Ultrasound imaging:</strong> If retina cannot be visualized due to dense floaters</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Treatment Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Treatment Options</h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-6">
                      Treatment depends on the underlying cause and severity of symptoms. Most floaters are benign and require only observation, while others may benefit from intervention.
                    </p>
                    <div className="space-y-6">
                      <div className="border-l-4 border-green-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Observation (Most Common)</h3>
                        <p className="text-gray-700 mb-3">Benign floaters often become less noticeable over time as the brain adapts.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Brain adaptation reduces awareness over weeks to months</li>
                          <li>• Regular monitoring to ensure no changes</li>
                          <li>• Patient education about when to seek urgent care</li>
                          <li>• Most cost-effective approach for benign floaters</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">YAG Laser Vitreolysis</h3>
                        <p className="text-gray-700 mb-3">Precise laser treatment to break up problematic floaters without surgery.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Outpatient procedure with no incisions</li>
                          <li>• Effective for large, dense floaters</li>
                          <li>• 70-90% patient satisfaction rates</li>
                          <li>• Minimal recovery time and side effects</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-orange-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Vitrectomy Surgery</h3>
                        <p className="text-gray-700 mb-3">Surgical removal of vitreous gel for severe, debilitating floaters.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Reserved for severe cases affecting quality of life</li>
                          <li>• 95%+ success rate for floater removal</li>
                          <li>• Small risk of complications (cataract, retinal detachment)</li>
                          <li>• Considered when conservative treatments fail</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-red-500 pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Emergency Treatment</h3>
                        <p className="text-gray-700 mb-3">Immediate intervention for retinal tears or detachment.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Laser photocoagulation for retinal tears</li>
                          <li>• Pneumatic retinopexy for small detachments</li>
                          <li>• Vitrectomy surgery for complex detachments</li>
                          <li>• Time-critical to prevent permanent vision loss</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* When to Worry */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">When Floaters and Flashes Are Dangerous</h2>
                  <div className="bg-red-50 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-red-800 mb-3">Retinal Detachment Warning Signs</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Sudden curtain or shadow across vision</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Shower of new floaters</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Bright flashing lights</span>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Progressive vision loss</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-red-800 mb-3">Immediate Action Required</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Call eye doctor immediately</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Go to emergency room if after hours</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Avoid vigorous activity or head movement</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Treatment within hours prevents blindness</span>
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
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Will my floaters go away on their own?</h3>
                      <p className="text-gray-700">Many people find their floaters become less noticeable over time as the brain learns to ignore them. However, floaters themselves rarely disappear completely. The key is distinguishing normal, stable floaters from new ones that might indicate serious problems.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Are floaters more common in nearsighted people?</h3>
                      <p className="text-gray-700">Yes, people with myopia (nearsightedness) are at higher risk for floaters and related complications because their elongated eyes create more vitreous movement and earlier posterior vitreous detachment. They should be especially vigilant about new symptoms.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Can I prevent floaters from developing?</h3>
                      <p className="text-gray-700">Age-related floaters are largely unavoidable, but you can reduce risk of serious complications by maintaining good overall health, controlling diabetes, protecting eyes from trauma, and having regular eye exams, especially if you're nearsighted or over 50.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">How do I know if I need urgent care?</h3>
                      <p className="text-gray-700">Seek immediate care for sudden onset of many new floaters, bright flashing lights, loss of peripheral vision, or a curtain-like shadow. These can indicate retinal detachment, which requires emergency treatment within hours to prevent permanent vision loss.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Emergency Card */}
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-red-800">Emergency Symptoms</h3>
                  <p className="text-red-700 font-semibold mb-4">Call immediately if you have:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Sudden shower of floaters</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Bright flashing lights</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Shadow or curtain in vision</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Sudden vision loss</span>
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
                        to="/conditions/retinal-conditions/posterior-vitreous-detachment"
                        className="text-eyecare-blue hover:text-eyecare-dark-blue flex items-center"
                      >
                        Posterior Vitreous Detachment
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/conditions/retinal-conditions/retinal-detachment"
                        className="text-eyecare-blue hover:text-eyecare-dark-blue flex items-center"
                      >
                        Retinal Detachment
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/conditions/retinal-conditions/retinal-tear"
                        className="text-eyecare-blue hover:text-eyecare-dark-blue flex items-center"
                      >
                        Retinal Tear
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/conditions/refractive-errors/myopia"
                        className="text-eyecare-blue hover:text-eyecare-dark-blue flex items-center"
                      >
                        Myopia (Nearsightedness)
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-eyecare-lighter-blue rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Expert Retinal Care</h3>
                  <p className="text-gray-700 mb-4">
                    Don't ignore new floaters or flashes. Early evaluation can prevent serious complications and preserve your vision.
                  </p>
                  <AppointmentRequestDialog>
                    <button className="w-full bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-4 py-3 rounded-md transition-colors font-medium">
                      Schedule Urgent Exam
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

export default FloatersFlashesPage;