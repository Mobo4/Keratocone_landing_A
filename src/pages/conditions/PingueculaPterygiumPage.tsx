import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, AlertTriangle, Eye, Calendar, Shield, MessageCircle, FileText, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import TrustSignals from '../../components/TrustSignals';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';

const PingueculaPterygiumPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Pinguecula and Pterygium",
    "alternateName": ["Surfer's Eye", "Eye Growth"],
    "description": "Pinguecula and pterygium are growths on the conjunctiva caused by UV exposure, wind, and dust. Pterygium can grow onto the cornea affecting vision.",
    "symptom": [
      {
        "@type": "MedicalSymptom",
        "name": "Visible growth",
        "description": "Yellowish bump (pinguecula) or triangular growth (pterygium) on the white of the eye"
      },
      {
        "@type": "MedicalSymptom", 
        "name": "Eye irritation",
        "description": "Feeling of something in the eye, dryness, or burning sensation"
      },
      {
        "@type": "MedicalSymptom",
        "name": "Redness",
        "description": "Inflammation and redness around the growth"
      },
      {
        "@type": "MedicalSymptom",
        "name": "Vision changes",
        "description": "Blurred vision when pterygium grows onto the cornea"
      }
    ],
    "cause": [
      "Ultraviolet (UV) light exposure",
      "Wind and dust exposure", 
      "Dry eye conditions",
      "Environmental irritants",
      "Genetic predisposition"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalTherapy",
        "name": "Artificial tears",
        "description": "Lubricating eye drops for symptom relief"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Anti-inflammatory drops",
        "description": "Steroid drops for inflammation during flare-ups"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Surgical excision",
        "description": "Removal of growth when vision is affected or symptoms are severe"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Pinguecula & Pterygium Treatment | Surfer's Eye Removal | Dr. Alexander Bonakdar</title>
        <meta name="description" content="Expert treatment of pinguecula and pterygium (surfer's eye) with advanced surgical options. UV protection education and comprehensive eye surface care." />
        <meta name="keywords" content="pinguecula, pterygium, surfer's eye, eye growth, eye surface, UV damage, pterygium surgery, Orange County ophthalmologist" />
        <link rel="canonical" href="https://drbonakdar.com/conditions/surface/pinguecula-pterygium" />
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
              <span className="text-eyecare-blue font-medium">Pinguecula & Pterygium</span>
            </nav>
          </div>
        </div>

        <Hero
          title="Pinguecula & Pterygium Treatment"
          subtitle="Advanced treatment of UV-related eye growths with comprehensive prevention strategies"
          backgroundImage="/images/hero-backgrounds/eye-surface.jpg"
          height="medium"
        />

        <TrustSignals />

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Important Notice */}
              <Card className="p-6 border-l-4 border-l-amber-500 bg-amber-50">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Prevention is Key</h3>
                    <div className="text-amber-700 space-y-1">
                      <p>• UV protection is essential to prevent growth and recurrence</p>
                      <p>• These growths are often called "surfer's eye" due to sun exposure</p>
                      <p>• Early treatment prevents vision complications</p>
                      <p>• Regular monitoring is important for larger growths</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Understanding Pinguecula & Pterygium */}
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-6 w-6 text-eyecare-blue mr-3" />
                  <h2 className="text-2xl font-bold text-eyecare-800">Understanding Pinguecula & Pterygium</h2>
                </div>
                <div className="prose prose-lg max-w-none text-eyecare-700">
                  <p className="mb-4">
                    Pinguecula and pterygium are growths that develop on the conjunctiva (the clear tissue covering 
                    the white of your eye) due to prolonged exposure to ultraviolet light, wind, dust, and dry conditions. 
                    These conditions are particularly common in sunny, windy climates like Southern California.
                  </p>
                  <p className="mb-4">
                    A <strong>pinguecula</strong> is a yellowish, raised bump that typically appears on the nasal 
                    side of the white part of the eye. It does not grow onto the cornea and usually causes minimal symptoms.
                  </p>
                  <p>
                    A <strong>pterygium</strong> is a triangular, fleshy growth that starts on the conjunctiva but 
                    can extend onto the cornea (the clear front surface of the eye). When it grows onto the cornea, 
                    it can cause vision problems and requires treatment.
                  </p>
                </div>
              </Card>

              {/* Differences Between Conditions */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Pinguecula vs. Pterygium</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-eyecare-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-eyecare-blue mb-4">Pinguecula</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Yellowish, raised bump
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Stays on the conjunctiva
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Does not affect vision
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Often asymptomatic
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        May cause mild irritation
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Usually bilateral (both eyes)
                      </li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-red-600 mb-4">Pterygium</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Triangular, fleshy growth
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Grows onto the cornea
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Can cause vision problems
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        More symptomatic
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        May cause astigmatism
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Often unilateral (one eye)
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Symptoms */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Common Symptoms</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-eyecare-blue">Early Symptoms</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Visible growth on white of eye
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Feeling of something in the eye
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Mild eye irritation
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Dryness or burning sensation
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Occasional redness
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-red-600">Advanced Symptoms (Pterygium)</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Blurred or distorted vision
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Astigmatism (irregular cornea shape)
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Persistent irritation
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Chronic redness
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Cosmetic concerns
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Risk Factors */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Risk Factors</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Environmental</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li>• Excessive UV exposure</li>
                      <li>• Sunny, windy climates</li>
                      <li>• Outdoor occupations</li>
                      <li>• Beach/mountain activities</li>
                      <li>• Dust and sand exposure</li>
                      <li>• Air pollution</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Personal Factors</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li>• Age 30-50 years</li>
                      <li>• Male gender (slightly higher)</li>
                      <li>• Light skin color</li>
                      <li>• Dry eye syndrome</li>
                      <li>• Contact lens wear</li>
                      <li>• Family history</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Activities</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li>• Surfing and water sports</li>
                      <li>• Skiing and snowboarding</li>
                      <li>• Golf and tennis</li>
                      <li>• Farming and landscaping</li>
                      <li>• Construction work</li>
                      <li>• Motorcycle riding</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Diagnosis */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Comprehensive Eye Examination</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Diagnostic Tests</h3>
                      <ul className="space-y-3 text-eyecare-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Visual acuity testing:</strong> Check for vision changes</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Slit lamp examination:</strong> Detailed view of growth</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Corneal topography:</strong> Map cornea shape and astigmatism</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Photography:</strong> Document size and progression</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Assessment Criteria</h3>
                      <ul className="space-y-3 text-eyecare-700">
                        <li className="flex items-start">
                          <Eye className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span>Size and extent of growth</span>
                        </li>
                        <li className="flex items-start">
                          <Eye className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span>Distance from pupil center</span>
                        </li>
                        <li className="flex items-start">
                          <Eye className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span>Signs of active growth</span>
                        </li>
                        <li className="flex items-start">
                          <Eye className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span>Impact on tear film</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Treatment Options */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Treatment Options</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-eyecare-blue mb-4">Conservative Treatment</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-eyecare-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-eyecare-blue mb-3">Artificial Tears</h4>
                        <ul className="space-y-2 text-eyecare-700">
                          <li>• Preservative-free lubricants</li>
                          <li>• Used 4-6 times daily</li>
                          <li>• Reduces irritation and dryness</li>
                          <li>• May slow progression</li>
                        </ul>
                      </div>
                      <div className="bg-eyecare-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-eyecare-blue mb-3">Anti-inflammatory Drops</h4>
                        <ul className="space-y-2 text-eyecare-700">
                          <li>• Short-term steroid drops</li>
                          <li>• For inflammatory flare-ups</li>
                          <li>• Reduces redness and irritation</li>
                          <li>• Usually 1-2 week courses</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-eyecare-blue mb-4">Surgical Treatment</h3>
                    <div className="bg-red-50 border-l-4 border-l-red-500 p-4 mb-4">
                      <p className="text-red-700 mb-2">
                        <strong>Surgery is recommended when:</strong>
                      </p>
                      <ul className="space-y-1 text-red-600">
                        <li>• Vision is affected (pterygium on cornea)</li>
                        <li>• Persistent symptoms despite medical treatment</li>
                        <li>• Significant cosmetic concerns</li>
                        <li>• Restriction of eye movement</li>
                        <li>• Contact lens intolerance</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-eyecare-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-eyecare-blue mb-3">Pterygium Excision with Conjunctival Autograft</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <p className="font-medium text-eyecare-700">Procedure</p>
                            <ul className="text-sm text-eyecare-600 space-y-1">
                              <li>• Remove pterygium</li>
                              <li>• Cover defect with healthy tissue</li>
                              <li>• Use tissue glue or sutures</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium text-eyecare-700">Benefits</p>
                            <ul className="text-sm text-eyecare-600 space-y-1">
                              <li>• Lowest recurrence rate (2-5%)</li>
                              <li>• Best cosmetic result</li>
                              <li>• Preserves normal eye surface</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium text-eyecare-700">Recovery</p>
                            <ul className="text-sm text-eyecare-600 space-y-1">
                              <li>• Outpatient procedure</li>
                              <li>• 2-4 weeks healing</li>
                              <li>• Gradual vision improvement</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-eyecare-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-eyecare-blue mb-3">Advanced Techniques</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="font-medium text-eyecare-700">Tissue Adhesive</p>
                            <ul className="text-sm text-eyecare-600 space-y-1">
                              <li>• No sutures required</li>
                              <li>• Reduced post-op discomfort</li>
                              <li>• Faster visual recovery</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium text-eyecare-700">Anti-metabolite Therapy</p>
                            <ul className="text-sm text-eyecare-600 space-y-1">
                              <li>• Mitomycin-C application</li>
                              <li>• Reduces recurrence risk</li>
                              <li>• For high-risk cases</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Prevention Strategies */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Prevention & Protection</h2>
                <div className="space-y-6">
                  <div className="bg-amber-50 border-l-4 border-l-amber-500 p-4">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">UV Protection is Critical</h3>
                    <p className="text-amber-700">
                      Preventing further UV damage is essential whether you have early growths or have had surgery. 
                      Protection reduces progression and prevents recurrence.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Eye Protection</h3>
                      <ul className="space-y-3 text-eyecare-700">
                        <li className="flex items-start">
                          <Shield className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>UV-blocking sunglasses:</strong> 100% UV-A and UV-B protection</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Wraparound style:</strong> Blocks UV from all angles</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Wide-brimmed hat:</strong> Additional shade for face and eyes</span>
                        </li>
                        <li className="flex items-start">
                          <Shield className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Protective eyewear:</strong> Safety glasses for dusty environments</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Environmental Measures</h3>
                      <ul className="space-y-3 text-eyecare-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Avoid peak UV hours:</strong> 10 AM to 4 PM</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Use artificial tears:</strong> Keep eyes moist in dry conditions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Indoor humidity:</strong> Use humidifier in dry climates</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Wind protection:</strong> Avoid direct wind exposure</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Post-Surgery Care */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Post-Surgery Recovery</h2>
                <div className="space-y-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">What to Expect</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-green-700 mb-2">First Week:</p>
                        <ul className="text-sm text-green-600 space-y-1">
                          <li>• Mild discomfort and tearing</li>
                          <li>• Red appearance of surgical site</li>
                          <li>• Blurred vision initially</li>
                          <li>• Light sensitivity</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-green-700 mb-2">Weeks 2-4:</p>
                        <ul className="text-sm text-green-600 space-y-1">
                          <li>• Gradual comfort improvement</li>
                          <li>• Vision begins to clear</li>
                          <li>• Reduced redness</li>
                          <li>• Return to normal activities</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Post-Op Care</h3>
                      <ul className="space-y-2 text-eyecare-700">
                        <li>• Antibiotic and steroid drops</li>
                        <li>• Avoid rubbing the eye</li>
                        <li>• Wear protective eyewear</li>
                        <li>• Attend all follow-up visits</li>
                        <li>• Use artificial tears as needed</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Long-term Care</h3>
                      <ul className="space-y-2 text-eyecare-700">
                        <li>• Lifelong UV protection</li>
                        <li>• Regular eye examinations</li>
                        <li>• Monitor for recurrence</li>
                        <li>• Manage dry eye symptoms</li>
                        <li>• Protect from wind and dust</li>
                      </ul>
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
                  <h3 className="text-xl font-bold mb-2">Advanced Pterygium Care</h3>
                  <p className="mb-4 text-eyecare-100">
                    Expert evaluation and treatment of pinguecula and pterygium with advanced surgical techniques.
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-eyecare-blue hover:bg-eyecare-50 font-semibold"
                  >
                    Schedule Consultation
                  </Button>
                  <p className="text-sm text-eyecare-200 mt-2">
                    Comprehensive eye surface evaluation
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
                    <span>Most common age:</span>
                    <span className="font-medium">30-50 years</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Surgery success rate:</span>
                    <span className="font-medium">95-98%</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Recurrence with graft:</span>
                    <span className="font-medium">2-5%</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Recovery time:</span>
                    <span className="font-medium">2-4 weeks</span>
                  </div>
                </div>
              </Card>

              {/* UV Protection Guide */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2" />
                  UV Protection Guide
                </h3>
                <div className="space-y-3 text-eyecare-700">
                  <div>
                    <p className="font-medium text-amber-600">Essential Protection:</p>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>• 100% UV-A and UV-B blocking sunglasses</li>
                      <li>• Wraparound style for side protection</li>
                      <li>• Wide-brimmed hat (4+ inch brim)</li>
                      <li>• Avoid peak sun: 10 AM - 4 PM</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 p-3 rounded">
                    <p className="font-medium text-amber-800">Remember:</p>
                    <p className="text-sm text-amber-700">
                      UV reflects off water, sand, and snow, increasing exposure even on cloudy days.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Contact Information */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-4 flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Consultation Info
                </h3>
                <div className="space-y-3 text-eyecare-700">
                  <div>
                    <p className="font-medium">Office: (949) 441-5444</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Consultation includes:</p>
                    <ul className="mt-2 space-y-1">
                      <li>• Comprehensive eye examination</li>
                      <li>• Growth measurement and photography</li>
                      <li>• Treatment recommendations</li>
                      <li>• UV protection education</li>
                    </ul>
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
                    <li>• Diagnostic evaluation</li>
                    <li>• Medically necessary pterygium surgery</li>
                    <li>• Post-operative care</li>
                    <li>• Vision-threatening cases</li>
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

export default PingueculaPterygiumPage;