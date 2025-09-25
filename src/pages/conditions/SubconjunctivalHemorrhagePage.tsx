import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, AlertTriangle, Eye, Calendar, Shield, MessageCircle, FileText, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import TrustSignals from '../../components/TrustSignals';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';

const SubconjunctivalHemorrhagePage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Subconjunctival Hemorrhage",
    "alternateName": ["Broken Blood Vessel in Eye", "Eye Bleeding"],
    "description": "A subconjunctival hemorrhage occurs when small blood vessels break beneath the conjunctiva, causing a bright red patch on the white of the eye.",
    "symptom": [
      {
        "@type": "MedicalSymptom",
        "name": "Red patch on eye",
        "description": "Bright red area covering part or all of the white of the eye"
      },
      {
        "@type": "MedicalSymptom", 
        "name": "No pain",
        "description": "Typically painless condition despite dramatic appearance"
      },
      {
        "@type": "MedicalSymptom",
        "name": "Normal vision",
        "description": "No effect on vision or visual clarity"
      }
    ],
    "cause": [
      "Sudden increase in blood pressure",
      "Coughing or sneezing",
      "Heavy lifting or straining",
      "Blood thinning medications",
      "Eye rubbing or trauma"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalTherapy",
        "name": "Observation",
        "description": "Most subconjunctival hemorrhages resolve on their own within 1-2 weeks"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Artificial tears",
        "description": "For comfort if mild irritation is present"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Subconjunctival Hemorrhage Treatment | Broken Blood Vessel in Eye | Dr. Alexander Bonakdar</title>
        <meta name="description" content="Expert evaluation of subconjunctival hemorrhage (broken blood vessel in eye). Learn when this dramatic-looking but usually harmless condition needs medical attention." />
        <meta name="keywords" content="subconjunctival hemorrhage, broken blood vessel eye, red eye, eye bleeding, blood spot eye, Orange County ophthalmologist" />
        <link rel="canonical" href="https://drbonakdar.com/conditions/surface/subconjunctival-hemorrhage" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-eyecare-50 to-eyecare-100">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-eyecare-200">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center space-x-2 text-sm text-eyecare-600">
              <Link to="/" className="hover:text-eyecare-blue transition-colors">Home</Link>
              <span>/</span>
              <Link to="/conditions" className="hover:text-eyecare-blue transition-colors">Eye Conditions</Link>
              <span>/</span>
              <Link to="/conditions/surface" className="hover:text-eyecare-blue transition-colors">Surface</Link>
              <span>/</span>
              <span className="text-eyecare-blue font-medium">Subconjunctival Hemorrhage</span>
            </nav>
          </div>
        </div>

        <Hero
          title="Subconjunctival Hemorrhage"
          subtitle="Expert evaluation of broken blood vessels in the eye with comprehensive assessment"
          backgroundImage="/images/hero-backgrounds/eye-surface.jpg"
          height="medium"
        />

        <TrustSignals />

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Reassurance Message */}
              <Card className="p-6 border-l-4 border-l-green-500 bg-green-50">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-green-800 mb-2">Usually Harmless</h3>
                    <div className="text-green-700 space-y-1">
                      <p>• Most subconjunctival hemorrhages are painless and harmless</p>
                      <p>• They typically resolve on their own within 1-2 weeks</p>
                      <p>• Vision is not affected by this condition</p>
                      <p>• No treatment is usually needed</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* When to Seek Care */}
              <Card className="p-6 border-l-4 border-l-amber-500 bg-amber-50">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Seek Medical Care If:</h3>
                    <div className="text-amber-700 space-y-1">
                      <p>• You have pain, vision changes, or discharge</p>
                      <p>• The hemorrhage covers the entire white of the eye</p>
                      <p>• You have recurrent episodes</p>
                      <p>• You're on blood thinners and have frequent bleeding</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Understanding Subconjunctival Hemorrhage */}
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-6 w-6 text-eyecare-blue mr-3" />
                  <h2 className="text-2xl font-bold text-eyecare-800">Understanding Subconjunctival Hemorrhage</h2>
                </div>
                <div className="prose prose-lg max-w-none text-eyecare-700">
                  <p className="mb-4">
                    A subconjunctival hemorrhage occurs when one of the small blood vessels breaks just underneath 
                    the conjunctiva (the clear surface that covers the white of your eye). Because the conjunctiva 
                    cannot absorb blood very quickly, the blood gets trapped and creates a bright red patch.
                  </p>
                  <p className="mb-4">
                    Despite its dramatic appearance, a subconjunctival hemorrhage is usually painless and does not 
                    affect your vision. It's similar to a bruise on your skin, except it happens on the white part 
                    of your eye. The condition is quite common and typically resolves without any treatment.
                  </p>
                  <p>
                    The blood may initially appear bright red, but as it begins to be absorbed, it may change colors 
                    similar to a bruise, turning yellow or green before completely disappearing. This process usually 
                    takes 1-2 weeks.
                  </p>
                </div>
              </Card>

              {/* Appearance and Symptoms */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">What You'll See and Feel</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-eyecare-blue">Typical Appearance</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Bright red patch on white of eye
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        May cover small area or entire white portion
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Sharp, well-defined edges
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Changes color as it heals (red → yellow → green)
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-eyecare-blue">What You Won't Experience</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        No pain or discomfort
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        No vision changes or blurriness
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        No discharge from the eye
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                        No light sensitivity
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Common Causes */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Common Causes</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Sudden Pressure Changes</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li>• Violent coughing or sneezing</li>
                      <li>• Heavy lifting or straining</li>
                      <li>• Vomiting</li>
                      <li>• Sudden blood pressure spike</li>
                      <li>• Intense physical exercise</li>
                      <li>• Childbirth labor</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Other Common Causes</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li>• Eye rubbing or trauma</li>
                      <li>• Blood thinning medications</li>
                      <li>• High blood pressure</li>
                      <li>• Blood clotting disorders</li>
                      <li>• Eye infections</li>
                      <li>• Sometimes no obvious cause</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Risk Factors */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Who's at Higher Risk</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Medical Conditions</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li>• High blood pressure</li>
                      <li>• Diabetes</li>
                      <li>• Blood clotting disorders</li>
                      <li>• Acute conjunctivitis</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Medications</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li>• Blood thinners (Warfarin)</li>
                      <li>• Aspirin</li>
                      <li>• NSAIDs</li>
                      <li>• Fish oil supplements</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Age & Activities</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li>• Older adults</li>
                      <li>• Contact lens wearers</li>
                      <li>• Athletes (weight lifting)</li>
                      <li>• People with allergies</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* When to See a Doctor */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">When Professional Care Is Needed</h2>
                <div className="space-y-6">
                  <div className="bg-red-50 border-l-4 border-l-red-500 p-4">
                    <h3 className="text-lg font-semibold text-red-800 mb-3">Seek Immediate Care If:</h3>
                    <ul className="space-y-2 text-red-700">
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        You experience pain or changes in vision
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        There's discharge or the eye feels irritated
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        You have light sensitivity or headache
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        The hemorrhage occurred after eye trauma
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-amber-50 border-l-4 border-l-amber-500 p-4">
                    <h3 className="text-lg font-semibold text-amber-800 mb-3">Schedule an Appointment If:</h3>
                    <ul className="space-y-2 text-amber-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                        You have recurrent subconjunctival hemorrhages
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                        The hemorrhage covers the entire white of your eye
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                        You're on blood thinners and have frequent episodes
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-amber-500 mt-1 mr-2 flex-shrink-0" />
                        You want reassurance about the condition
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Evaluation Process */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">What to Expect During Your Visit</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Medical History</h3>
                      <ul className="space-y-2 text-eyecare-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          Recent activities or trauma
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          Current medications
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          Blood pressure history
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          Previous episodes
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Physical Examination</h3>
                      <ul className="space-y-2 text-eyecare-700">
                        <li className="flex items-start">
                          <Eye className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          Visual acuity testing
                        </li>
                        <li className="flex items-start">
                          <Eye className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          Slit lamp examination
                        </li>
                        <li className="flex items-start">
                          <Eye className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          Intraocular pressure check
                        </li>
                        <li className="flex items-start">
                          <Eye className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          Blood pressure measurement
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Treatment and Management */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Treatment & Management</h2>
                <div className="space-y-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold text-eyecare-blue mb-4">Typical Course</h3>
                    <p className="text-eyecare-700 mb-4">
                      Most subconjunctival hemorrhages require no treatment and resolve naturally as your body 
                      reabsorbs the blood. The process typically takes 1-2 weeks.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Home Care</h3>
                      <ul className="space-y-3 text-eyecare-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Artificial tears:</strong> For comfort if eye feels dry</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Avoid rubbing:</strong> Don't rub or touch the affected eye</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>No hot compresses:</strong> Heat may worsen bleeding</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Continue normal activities:</strong> No restrictions needed</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Prevention Tips</h3>
                      <ul className="space-y-3 text-eyecare-700">
                        <li className="flex items-start">
                          <Shield className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Protect eyes:</strong> Wear safety glasses during sports</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Manage blood pressure:</strong> Control hypertension</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Avoid straining:</strong> Use proper lifting techniques</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Monitor medications:</strong> Discuss blood thinners with doctor</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Recovery Timeline */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">What to Expect During Healing</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-eyecare-50 rounded-lg">
                    <div className="w-3 h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-eyecare-blue">Days 1-3: Bright Red</p>
                      <p className="text-eyecare-700">Blood appears bright red and well-defined</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-eyecare-50 rounded-lg">
                    <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-eyecare-blue">Days 4-7: Color Change</p>
                      <p className="text-eyecare-700">Blood begins to change color, becoming orange-red</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-eyecare-50 rounded-lg">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-eyecare-blue">Days 8-12: Yellow Phase</p>
                      <p className="text-eyecare-700">Blood becomes yellow-green as it's reabsorbed</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-eyecare-50 rounded-lg">
                    <div className="w-3 h-3 bg-white border-2 border-eyecare-300 rounded-full flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold text-eyecare-blue">Days 10-14: Resolution</p>
                      <p className="text-eyecare-700">Blood completely disappears, eye returns to normal</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar - Right Column */}
            <div className="space-y-6">
              {/* CTA Card */}
              <Card className="p-6 bg-gradient-to-br from-eyecare-blue to-eyecare-blue text-white">
                <div className="text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-white" />
                  <h3 className="text-xl font-bold mb-2">Need Reassurance?</h3>
                  <p className="mb-4 text-eyecare-100">
                    Schedule an evaluation for proper diagnosis and peace of mind about your eye condition.
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-eyecare-blue hover:bg-eyecare-50 font-semibold"
                  >
                    Book Consultation
                  </Button>
                  <p className="text-sm text-eyecare-200 mt-2">
                    Same-day appointments available
                  </p>
                </div>
              </Card>

              {/* Quick Facts */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Quick Facts
                </h3>
                <div className="space-y-3 text-sm text-eyecare-700">
                  <div className="flex justify-between items-center py-1">
                    <span>Healing time:</span>
                    <span className="font-medium">1-2 weeks</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Pain level:</span>
                    <span className="font-medium">Usually none</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Vision impact:</span>
                    <span className="font-medium">None</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Treatment needed:</span>
                    <span className="font-medium">Usually none</span>
                  </div>
                </div>
              </Card>

              {/* Contact Information */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-4 flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  When to Call
                </h3>
                <div className="space-y-3 text-eyecare-700">
                  <div>
                    <p className="font-medium">Office: (949) 441-5444</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-amber-600">Call if you develop:</p>
                    <ul className="mt-2 space-y-1">
                      <li>• Eye pain or vision changes</li>
                      <li>• Discharge or irritation</li>
                      <li>• Light sensitivity</li>
                      <li>• Recurrent episodes</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Myth Busters */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-4">Common Myths</h3>
                <div className="space-y-4 text-sm text-eyecare-700">
                  <div>
                    <p className="font-medium text-red-600">❌ Myth:</p>
                    <p className="text-eyecare-600">"It's caused by high blood pressure"</p>
                    <p className="font-medium text-green-600">✅ Truth:</p>
                    <p>Usually caused by minor pressure spikes, not chronic hypertension</p>
                  </div>
                  <div>
                    <p className="font-medium text-red-600">❌ Myth:</p>
                    <p className="text-eyecare-600">"It will damage my vision"</p>
                    <p className="font-medium text-green-600">✅ Truth:</p>
                    <p>No effect on vision - purely cosmetic issue</p>
                  </div>
                  <div>
                    <p className="font-medium text-red-600">❌ Myth:</p>
                    <p className="text-eyecare-600">"I need immediate treatment"</p>
                    <p className="font-medium text-green-600">✅ Truth:</p>
                    <p>Usually resolves on its own without treatment</p>
                  </div>
                </div>
              </Card>

              {/* Insurance */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  Insurance Coverage
                </h3>
                <div className="text-eyecare-700 space-y-2">
                  <p>Most insurance plans cover:</p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• Diagnostic eye examination</li>
                    <li>• Evaluation of eye bleeding</li>
                    <li>• Blood pressure screening</li>
                  </ul>
                  <p className="text-sm text-eyecare-600 mt-3">
                    We accept most major insurance plans including Medicare and VSP.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubconjunctivalHemorrhagePage;