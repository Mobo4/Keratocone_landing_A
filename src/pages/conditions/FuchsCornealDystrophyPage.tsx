import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, AlertTriangle, Eye, Calendar, Shield, MessageCircle, FileText, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import TrustSignals from '../../components/TrustSignals';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';

const FuchsCornealDystrophyPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Fuchs Corneal Dystrophy",
    "alternateName": ["Fuchs Endothelial Dystrophy", "Corneal Dystrophy"],
    "description": "Fuchs corneal dystrophy is a progressive eye condition affecting the corneal endothelium, leading to corneal swelling, vision loss, and potentially requiring corneal transplantation.",
    "symptom": [
      {
        "@type": "MedicalSymptom",
        "name": "Morning vision blur",
        "description": "Vision that is worse upon waking and improves throughout the day"
      },
      {
        "@type": "MedicalSymptom", 
        "name": "Light sensitivity",
        "description": "Increased sensitivity to bright lights and glare"
      },
      {
        "@type": "MedicalSymptom",
        "name": "Corneal edema",
        "description": "Swelling of the cornea causing vision distortion"
      },
      {
        "@type": "MedicalSymptom",
        "name": "Halos around lights",
        "description": "Seeing rings or halos around light sources"
      }
    ],
    "cause": [
      "Genetic predisposition",
      "Age-related endothelial cell loss",
      "Dysfunction of corneal endothelial pump mechanism",
      "Progressive corneal decompensation"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalTherapy",
        "name": "Hypertonic saline drops",
        "description": "Salt solutions to reduce corneal swelling"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Corneal transplantation",
        "description": "DSEK, DMEK, or penetrating keratoplasty for advanced cases"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Bandage contact lenses",
        "description": "Therapeutic contact lenses for epithelial protection"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Fuchs Corneal Dystrophy Treatment | DSEK & DMEK Surgery | Dr. Alexander Bonakdar</title>
        <meta name="description" content="Advanced treatment of Fuchs corneal dystrophy with modern corneal transplantation techniques including DSEK and DMEK. Comprehensive corneal care and evaluation." />
        <meta name="keywords" content="Fuchs corneal dystrophy, corneal transplant, DSEK, DMEK, corneal endothelium, corneal edema, Orange County corneal specialist" />
        <link rel="canonical" href="https://drbonakdar.com/conditions/cornea/fuchs-corneal-dystrophy" />
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
              <Link to="/conditions/cornea" className="hover:text-eyecare-blue transition-colors">Cornea</Link>
              <span>/</span>
              <span className="text-eyecare-blue font-medium">Fuchs Corneal Dystrophy</span>
            </nav>
          </div>
        </div>

        <Hero
          title="Fuchs Corneal Dystrophy Treatment"
          subtitle="Advanced corneal care with modern transplantation techniques and comprehensive management"
          backgroundImage="/images/hero-backgrounds/corneal-care.jpg"
          height="medium"
        />

        <TrustSignals />

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Important Notice */}
              <Card className="p-6 border-l-4 border-l-blue-500 bg-blue-50">
                <div className="flex items-start space-x-3">
                  <Eye className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Early Detection is Key</h3>
                    <div className="text-blue-700 space-y-1">
                      <p>• Fuchs dystrophy progresses slowly over many years</p>
                      <p>• Early stages may be asymptomatic but detectable on examination</p>
                      <p>• Modern surgical techniques offer excellent outcomes</p>
                      <p>• Family members should be screened due to genetic component</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Understanding Fuchs Corneal Dystrophy */}
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-6 w-6 text-eyecare-blue mr-3" />
                  <h2 className="text-2xl font-bold text-eyecare-800">Understanding Fuchs Corneal Dystrophy</h2>
                </div>
                <div className="prose prose-lg max-w-none text-eyecare-700">
                  <p className="mb-4">
                    Fuchs corneal dystrophy is a progressive eye condition that affects the corneal endothelium, 
                    the thin layer of cells on the inside surface of the cornea. These cells act as a pump system, 
                    maintaining the proper water content in the cornea to keep it clear and transparent.
                  </p>
                  <p className="mb-4">
                    In Fuchs dystrophy, the endothelial cells gradually deteriorate and die, compromising the 
                    cornea's ability to maintain proper hydration. This leads to corneal swelling (edema), which 
                    causes vision to become cloudy and distorted. The condition typically affects both eyes, 
                    though one eye may be more severely affected than the other.
                  </p>
                  <p>
                    The disease progresses through several stages, from early asymptomatic changes visible only 
                    on examination to advanced stages requiring corneal transplantation. With modern surgical 
                    techniques like DSEK and DMEK, outcomes are excellent and recovery is faster than traditional 
                    methods.
                  </p>
                </div>
              </Card>

              {/* Stages of Disease */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Stages of Fuchs Corneal Dystrophy</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div>
                      <h3 className="font-semibold text-green-800">Stage 1: Early/Asymptomatic</h3>
                      <p className="text-green-700 mt-1">Corneal guttata (small bumps) visible on examination. No symptoms. Normal vision and corneal thickness.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-yellow-50 rounded-lg">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div>
                      <h3 className="font-semibold text-yellow-800">Stage 2: Mild Symptoms</h3>
                      <p className="text-yellow-700 mt-1">Morning vision blur that improves during the day. Mild corneal thickening. Light sensitivity may begin.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-orange-50 rounded-lg">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div>
                      <h3 className="font-semibold text-orange-800">Stage 3: Moderate Disease</h3>
                      <p className="text-orange-700 mt-1">Persistent vision problems throughout the day. Noticeable corneal swelling. Halos around lights.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div>
                      <h3 className="font-semibold text-red-800">Stage 4: Advanced Disease</h3>
                      <p className="text-red-700 mt-1">Significant vision impairment. Corneal epithelial breakdown. Pain and discomfort. Surgery typically needed.</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Symptoms */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Symptoms by Stage</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-eyecare-blue">Early Symptoms</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Morning vision blur that clears during day
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Mild light sensitivity
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Occasional glare from bright lights
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Feeling of "film" over eyes in morning
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-red-600">Advanced Symptoms</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Constant blurred or cloudy vision
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Significant light sensitivity
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Halos around lights at night
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Eye pain and foreign body sensation
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Difficulty with night driving
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
                    <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Genetic Factors</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li>• Family history of Fuchs dystrophy</li>
                      <li>• Genetic mutations (COL8A2, SLC4A11)</li>
                      <li>• Hereditary pattern (autosomal dominant)</li>
                      <li>• Northern European ancestry</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Demographics</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li>• Age over 50 years</li>
                      <li>• Female gender (3:1 ratio)</li>
                      <li>• Postmenopausal women</li>
                      <li>• Light-colored eyes</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Associated Conditions</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li>• Previous eye surgery</li>
                      <li>• Diabetes mellitus</li>
                      <li>• Hypertension</li>
                      <li>• Smoking history</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Diagnosis */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Comprehensive Corneal Evaluation</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Specialized Testing</h3>
                      <ul className="space-y-3 text-eyecare-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Corneal pachymetry:</strong> Measure corneal thickness</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Specular microscopy:</strong> Count endothelial cells</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Corneal topography:</strong> Map corneal surface</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Anterior segment OCT:</strong> Cross-sectional corneal imaging</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Clinical Findings</h3>
                      <ul className="space-y-3 text-eyecare-700">
                        <li className="flex items-start">
                          <Eye className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span>Corneal guttata (endothelial bumps)</span>
                        </li>
                        <li className="flex items-start">
                          <Eye className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span>Increased corneal thickness</span>
                        </li>
                        <li className="flex items-start">
                          <Eye className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span>Decreased endothelial cell count</span>
                        </li>
                        <li className="flex items-start">
                          <Eye className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span>Epithelial bullae (advanced cases)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Treatment Options */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Advanced Treatment Options</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-eyecare-blue mb-4">Medical Management</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-eyecare-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-eyecare-blue mb-3">Early Stage Treatment</h4>
                        <ul className="space-y-2 text-eyecare-700">
                          <li>• Hypertonic saline drops (5%)</li>
                          <li>• Hair dryer technique (warm air)</li>
                          <li>• Frequent artificial tears</li>
                          <li>• UV protection</li>
                        </ul>
                      </div>
                      <div className="bg-eyecare-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-eyecare-blue mb-3">Symptomatic Relief</h4>
                        <ul className="space-y-2 text-eyecare-700">
                          <li>• Bandage contact lenses</li>
                          <li>• Anti-inflammatory drops</li>
                          <li>• Pain management</li>
                          <li>• Low-sodium diet</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-eyecare-blue mb-4">Modern Surgical Options</h3>
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-blue-800 mb-3">DSEK (Descemet Stripping Endothelial Keratoplasty)</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <p className="font-medium text-blue-700">Procedure</p>
                            <ul className="text-sm text-blue-600 space-y-1">
                              <li>• Replace only diseased endothelium</li>
                              <li>• Preserve patient's corneal structure</li>
                              <li>• Small incision technique</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium text-blue-700">Benefits</p>
                            <ul className="text-sm text-blue-600 space-y-1">
                              <li>• Faster visual recovery</li>
                              <li>• Lower rejection risk</li>
                              <li>• Stronger eye integrity</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium text-blue-700">Recovery</p>
                            <ul className="text-sm text-blue-600 space-y-1">
                              <li>• 3-6 months for best vision</li>
                              <li>• 95%+ success rate</li>
                              <li>• Outpatient procedure</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-green-800 mb-3">DMEK (Descemet Membrane Endothelial Keratoplasty)</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <p className="font-medium text-green-700">Advantages</p>
                            <ul className="text-sm text-green-600 space-y-1">
                              <li>• Most natural anatomy</li>
                              <li>• Thinnest possible graft</li>
                              <li>• Best visual outcomes</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium text-green-700">Results</p>
                            <ul className="text-sm text-green-600 space-y-1">
                              <li>• 20/20 vision possible</li>
                              <li>• Fastest recovery</li>
                              <li>• Lowest rejection rate</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium text-green-700">Considerations</p>
                            <ul className="text-sm text-green-600 space-y-1">
                              <li>• Most technically demanding</li>
                              <li>• Higher skill requirement</li>
                              <li>• Specialized training needed</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-amber-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-amber-800 mb-3">Traditional Penetrating Keratoplasty (PKP)</h4>
                        <p className="text-amber-700 mb-2">Reserved for cases with:</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <ul className="space-y-1 text-amber-700">
                            <li>• Significant corneal scarring</li>
                            <li>• Previous failed endothelial transplants</li>
                            <li>• Concurrent corneal surface disease</li>
                          </ul>
                          <ul className="space-y-1 text-amber-700">
                            <li>• Longer recovery time</li>
                            <li>• Higher astigmatism risk</li>
                            <li>• More suture-related complications</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Post-Surgical Care */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Post-Transplant Care</h2>
                <div className="space-y-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">Recovery Timeline</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-green-700 mb-2">First Month:</p>
                        <ul className="text-sm text-green-600 space-y-1">
                          <li>• Gradual vision improvement</li>
                          <li>• Eye protection essential</li>
                          <li>• Frequent follow-up visits</li>
                          <li>• Steroid drops as prescribed</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-green-700 mb-2">Long-term:</p>
                        <ul className="text-sm text-green-600 space-y-1">
                          <li>• Best vision at 3-6 months</li>
                          <li>• Lifelong rejection surveillance</li>
                          <li>• Potential for 20/20 vision</li>
                          <li>• Return to normal activities</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Critical Care Points</h3>
                      <ul className="space-y-2 text-eyecare-700">
                        <li>• Never miss steroid drop doses</li>
                        <li>• Protect eye from trauma</li>
                        <li>• Attend all follow-up appointments</li>
                        <li>• Report any vision changes immediately</li>
                        <li>• Avoid eye rubbing</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-red-600 mb-3">Warning Signs of Rejection</h3>
                      <ul className="space-y-2 text-eyecare-700">
                        <li className="flex items-start">
                          <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                          Sudden decrease in vision
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                          Eye pain or sensitivity
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                          Increased redness
                        </li>
                        <li className="flex items-start">
                          <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                          New onset of cloudiness
                        </li>
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
                  <h3 className="text-xl font-bold mb-2">Advanced Corneal Care</h3>
                  <p className="mb-4 text-eyecare-100">
                    Comprehensive Fuchs dystrophy evaluation with modern transplant options including DSEK and DMEK.
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-eyecare-blue hover:bg-eyecare-50 font-semibold"
                  >
                    Schedule Consultation
                  </Button>
                  <p className="text-sm text-eyecare-200 mt-2">
                    Corneal specialist evaluation
                  </p>
                </div>
              </Card>

              {/* Quick Facts */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Fuchs Dystrophy Facts
                </h3>
                <div className="space-y-3 text-sm text-eyecare-700">
                  <div className="flex justify-between items-center py-1">
                    <span>Female predominance:</span>
                    <span className="font-medium">3:1 ratio</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Typical onset age:</span>
                    <span className="font-medium">50-60 years</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>DSEK success rate:</span>
                    <span className="font-medium">95%+</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Visual recovery:</span>
                    <span className="font-medium">3-6 months</span>
                  </div>
                </div>
              </Card>

              {/* Surgical Timeline */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-4">Surgery Decision Timeline</h3>
                <div className="space-y-3 text-sm text-eyecare-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Early Stage:</p>
                      <p>Medical management, monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Moderate Stage:</p>
                      <p>Consider quality of life impact</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Advanced Stage:</p>
                      <p>Surgery typically recommended</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Contact Information */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-4 flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Corneal Specialist
                </h3>
                <div className="space-y-3 text-eyecare-700">
                  <div>
                    <p className="font-medium">Office: (949) 441-5444</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium">Specialized services:</p>
                    <ul className="mt-2 space-y-1">
                      <li>• DSEK and DMEK transplantation</li>
                      <li>• Corneal endothelial evaluation</li>
                      <li>• Family screening programs</li>
                      <li>• Advanced corneal imaging</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Genetics Information */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-4">Family Screening</h3>
                <div className="text-eyecare-700 space-y-2">
                  <p className="font-medium text-blue-600">Fuchs dystrophy is hereditary:</p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• 50% chance of passing to children</li>
                    <li>• Earlier onset in subsequent generations</li>
                    <li>• Screening recommended for relatives</li>
                    <li>• Early detection allows better planning</li>
                  </ul>
                  <div className="bg-blue-50 p-3 rounded mt-3">
                    <p className="text-sm text-blue-700">
                      We recommend family members over age 40 have a baseline corneal evaluation.
                    </p>
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
                    <li>• Corneal dystrophy evaluation</li>
                    <li>• Corneal transplant surgery</li>
                    <li>• Post-operative care</li>
                    <li>• Specialized corneal testing</li>
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

export default FuchsCornealDystrophyPage;