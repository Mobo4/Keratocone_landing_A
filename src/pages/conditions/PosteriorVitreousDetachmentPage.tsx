import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, AlertTriangle, Eye, Calendar, Shield, MessageCircle, FileText, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import TrustSignals from '../../components/TrustSignals';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';

const PosteriorVitreousDetachmentPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Posterior Vitreous Detachment",
    "alternateName": ["PVD", "Vitreous Detachment"],
    "description": "Posterior vitreous detachment occurs when the vitreous gel separates from the retina, commonly causing floaters and flashes in vision.",
    "symptom": [
      {
        "@type": "MedicalSymptom",
        "name": "Floaters",
        "description": "New or increased dark spots, strings, or cobweb-like shapes in vision"
      },
      {
        "@type": "MedicalSymptom", 
        "name": "Light flashes",
        "description": "Brief flashing lights, especially in peripheral vision"
      },
      {
        "@type": "MedicalSymptom",
        "name": "Visual field defects",
        "description": "Sudden appearance of a curtain or shadow in peripheral vision"
      }
    ],
    "riskFactor": [
      "Age over 50",
      "Myopia (nearsightedness)",
      "Previous eye surgery",
      "Eye trauma",
      "Diabetic retinopathy"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalTherapy",
        "name": "Observation and monitoring",
        "description": "Regular follow-up examinations to ensure no retinal complications"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Emergency evaluation",
        "description": "Immediate examination if new symptoms develop"
      }
    ],
    "diagnosis": [
      {
        "@type": "MedicalTest",
        "name": "Dilated fundus examination",
        "description": "Comprehensive retinal examination to assess vitreous and retinal status"
      },
      {
        "@type": "MedicalTest",
        "name": "OCT imaging",
        "description": "Optical coherence tomography to evaluate retinal structure"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Posterior Vitreous Detachment (PVD) Treatment | Dr. Alexander Bonakdar</title>
        <meta name="description" content="Expert diagnosis and management of posterior vitreous detachment (PVD). Learn about floaters, flashes, and when emergency care is needed. Schedule your consultation today." />
        <meta name="keywords" content="posterior vitreous detachment, PVD, floaters, flashes, retinal detachment, vitreous, eye emergency, Orange County ophthalmologist" />
        <link rel="canonical" href="https://drbonakdar.com/conditions/retina/posterior-vitreous-detachment" />
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
              <Link to="/conditions/retina" className="hover:text-eyecare-blue transition-colors">Retina</Link>
              <span>/</span>
              <span className="text-eyecare-blue font-medium">Posterior Vitreous Detachment</span>
            </nav>
          </div>
        </div>

        <Hero
          title="Posterior Vitreous Detachment (PVD)"
          subtitle="Expert diagnosis and management of vitreous detachment with comprehensive retinal evaluation"
          backgroundImage="/images/hero-backgrounds/retina-care.jpg"
          height="medium"
        />

        <TrustSignals />

        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content - Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Emergency Warning */}
              <Card className="p-6 border-l-4 border-l-red-500 bg-red-50">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-red-800 mb-2">Emergency Warning Signs</h3>
                    <div className="text-red-700 space-y-1">
                      <p>• Sudden increase in floaters or flashes</p>
                      <p>• Curtain or shadow in your peripheral vision</p>
                      <p>• Loss of side vision</p>
                      <p>• Sudden decrease in central vision</p>
                    </div>
                    <p className="mt-3 text-red-800 font-medium">
                      These symptoms may indicate retinal detachment - seek immediate medical attention!
                    </p>
                  </div>
                </div>
              </Card>

              {/* Understanding PVD */}
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-6 w-6 text-eyecare-blue mr-3" />
                  <h2 className="text-2xl font-bold text-eyecare-800">Understanding Posterior Vitreous Detachment</h2>
                </div>
                <div className="prose prose-lg max-w-none text-eyecare-700">
                  <p className="mb-4">
                    Posterior vitreous detachment (PVD) is a common, typically age-related condition where the vitreous gel 
                    inside your eye separates from the retina. The vitreous is a clear, jelly-like substance that fills 
                    the back of your eye and helps maintain its shape.
                  </p>
                  <p className="mb-4">
                    As we age, the vitreous naturally becomes more liquid and can pull away from the retina. While PVD 
                    itself is usually harmless, the process can sometimes cause complications such as retinal tears or 
                    retinal detachment, which require immediate treatment.
                  </p>
                  <p>
                    Most people with PVD experience new floaters and flashes, but these symptoms typically improve over 
                    time as the brain adapts. However, it's crucial to have a comprehensive dilated eye examination to 
                    ensure no retinal complications have occurred.
                  </p>
                </div>
              </Card>

              {/* Symptoms */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Common PVD Symptoms</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-eyecare-blue">Primary Symptoms</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        New or increased floaters (dark spots, strings, cobwebs)
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Light flashes, especially in peripheral vision
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Occasional blurred vision
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Ring-shaped floater (Weiss ring)
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-red-600">Warning Signs</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Sudden shower of new floaters
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Curtain or shadow in peripheral vision
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Decrease in central vision
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Loss of side vision
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Risk Factors */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Risk Factors for PVD</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Age-Related</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li>• Age over 50</li>
                      <li>• Age over 65 (higher risk)</li>
                      <li>• Natural vitreous aging</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Eye Conditions</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li>• Myopia (nearsightedness)</li>
                      <li>• Diabetic retinopathy</li>
                      <li>• Previous eye inflammation</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Other Factors</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li>• Previous eye surgery</li>
                      <li>• Eye trauma or injury</li>
                      <li>• Family history</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Diagnosis */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Comprehensive PVD Evaluation</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Diagnostic Tests</h3>
                      <ul className="space-y-3 text-eyecare-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Dilated fundus examination:</strong> Comprehensive retinal evaluation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Optical coherence tomography (OCT):</strong> High-resolution retinal imaging</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Visual field testing:</strong> Assessment of peripheral vision</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>B-scan ultrasonography:</strong> When view is obscured</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-3">What We Look For</h3>
                      <ul className="space-y-3 text-eyecare-700">
                        <li className="flex items-start">
                          <Eye className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span>Vitreous separation from retina</span>
                        </li>
                        <li className="flex items-start">
                          <Eye className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span>Retinal tears or holes</span>
                        </li>
                        <li className="flex items-start">
                          <Eye className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span>Signs of retinal detachment</span>
                        </li>
                        <li className="flex items-start">
                          <Eye className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span>Vitreous hemorrhage</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Management and Monitoring */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">PVD Management & Monitoring</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-eyecare-blue mb-4">Observation Protocol</h3>
                    <div className="bg-eyecare-50 p-4 rounded-lg mb-4">
                      <p className="text-eyecare-700 mb-2">
                        <strong>Most PVD cases require only careful monitoring.</strong> The vitreous detachment itself 
                        typically does not need treatment, but regular follow-up is essential to watch for complications.
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-eyecare-blue mb-3">Follow-up Schedule</h4>
                        <ul className="space-y-2 text-eyecare-700">
                          <li>• Immediate: Within 24-48 hours</li>
                          <li>• 2-4 weeks: First follow-up</li>
                          <li>• 3 months: Extended follow-up</li>
                          <li>• 6-12 months: Long-term monitoring</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-eyecare-blue mb-3">Patient Education</h4>
                        <ul className="space-y-2 text-eyecare-700">
                          <li>• Warning sign recognition</li>
                          <li>• When to seek emergency care</li>
                          <li>• Adaptation to floaters</li>
                          <li>• Activity modifications if needed</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Living with PVD */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Living with PVD</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Adapting to Floaters</h3>
                    <div className="bg-eyecare-50 p-4 rounded-lg">
                      <ul className="space-y-2 text-eyecare-700">
                        <li>• Move your eyes up and down to shift floaters out of central vision</li>
                        <li>• Most floaters become less noticeable over time</li>
                        <li>• Avoid fixating on floaters - try to ignore them when possible</li>
                        <li>• Use good lighting when reading or doing detailed work</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-eyecare-blue mb-3">When to Call Immediately</h3>
                    <div className="bg-red-50 border-l-4 border-l-red-500 p-4">
                      <ul className="space-y-2 text-red-700">
                        <li>• Sudden increase in the number of floaters</li>
                        <li>• New flashing lights</li>
                        <li>• A shadow or curtain in your peripheral vision</li>
                        <li>• Any decrease in your vision</li>
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
                  <h3 className="text-xl font-bold mb-2">Schedule Your PVD Evaluation</h3>
                  <p className="mb-4 text-eyecare-100">
                    Expert diagnosis and monitoring of posterior vitreous detachment with comprehensive retinal examination.
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-eyecare-blue hover:bg-eyecare-50 font-semibold"
                  >
                    Book Appointment
                  </Button>
                  <p className="text-sm text-eyecare-200 mt-2">
                    Same-day emergency appointments available
                  </p>
                </div>
              </Card>

              {/* Quick Facts */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  PVD Quick Facts
                </h3>
                <div className="space-y-3 text-sm text-eyecare-700">
                  <div className="flex justify-between items-center py-1">
                    <span>Most common age:</span>
                    <span className="font-medium">60-70 years</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Prevalence over 65:</span>
                    <span className="font-medium">65%</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Risk of retinal tear:</span>
                    <span className="font-medium">10-15%</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Symptoms improve:</span>
                    <span className="font-medium">3-6 months</span>
                  </div>
                </div>
              </Card>

              {/* Contact Information */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-4 flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Emergency Contact
                </h3>
                <div className="space-y-3 text-eyecare-700">
                  <div>
                    <p className="font-medium">For PVD emergencies:</p>
                    <p className="text-lg font-bold text-eyecare-blue">(949) 441-5444</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-red-600">Call immediately if you experience:</p>
                    <ul className="mt-2 space-y-1">
                      <li>• Sudden vision loss</li>
                      <li>• Curtain in vision</li>
                      <li>• Shower of new floaters</li>
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
                    <li>• PVD diagnostic evaluation</li>
                    <li>• Dilated eye examinations</li>
                    <li>• OCT imaging</li>
                    <li>• Emergency retinal evaluations</li>
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

export default PosteriorVitreousDetachmentPage;