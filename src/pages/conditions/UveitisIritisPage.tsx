import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, AlertTriangle, Eye, Calendar, Shield, MessageCircle, FileText, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import TrustSignals from '../../components/TrustSignals';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';

const UveitisIritisPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Uveitis",
    "alternateName": ["Iritis", "Anterior Uveitis", "Intermediate Uveitis", "Posterior Uveitis"],
    "description": "Uveitis is inflammation of the uvea, the middle layer of the eye, which can affect different parts including the iris (iritis), ciliary body, and choroid.",
    "symptom": [
      {
        "@type": "MedicalSymptom",
        "name": "Eye pain",
        "description": "Deep, aching pain in the affected eye"
      },
      {
        "@type": "MedicalSymptom", 
        "name": "Photophobia",
        "description": "Sensitivity to light, especially bright lights"
      },
      {
        "@type": "MedicalSymptom",
        "name": "Blurred vision",
        "description": "Decreased visual clarity and focus"
      },
      {
        "@type": "MedicalSymptom",
        "name": "Red eye",
        "description": "Redness around the iris and conjunctiva"
      }
    ],
    "cause": [
      "Autoimmune disorders",
      "Infections (viral, bacterial, parasitic)",
      "Systemic inflammatory diseases",
      "Eye trauma",
      "Certain medications"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalTherapy",
        "name": "Corticosteroid eye drops",
        "description": "Anti-inflammatory medication to reduce uveal inflammation"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Cycloplegic drops",
        "description": "Medications to dilate the pupil and reduce pain"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Immunosuppressive therapy",
        "description": "Systemic medications for chronic or severe cases"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Uveitis & Iritis Treatment | Expert Eye Inflammation Care | Dr. Alexander Bonakdar</title>
        <meta name="description" content="Comprehensive treatment of uveitis and iritis with advanced anti-inflammatory therapy. Emergency and chronic uveitis management. Schedule your evaluation today." />
        <meta name="keywords" content="uveitis treatment, iritis, eye inflammation, anterior uveitis, posterior uveitis, eye pain, photophobia, Orange County ophthalmologist" />
        <link rel="canonical" href="https://drbonakdar.com/conditions/inflammation/uveitis-iritis" />
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
              <Link to="/conditions/inflammation" className="hover:text-eyecare-blue transition-colors">Inflammation</Link>
              <span>/</span>
              <span className="text-eyecare-blue font-medium">Uveitis & Iritis</span>
            </nav>
          </div>
        </div>

        <Hero
          title="Uveitis & Iritis Treatment"
          subtitle="Expert diagnosis and management of eye inflammation with advanced anti-inflammatory therapy"
          backgroundImage="/images/hero-backgrounds/eye-inflammation.jpg"
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
                    <h3 className="text-lg font-semibold text-red-800 mb-2">Seek Immediate Care If You Experience:</h3>
                    <div className="text-red-700 space-y-1">
                      <p>• Severe eye pain with light sensitivity</p>
                      <p>• Sudden decrease in vision</p>
                      <p>• Severe headache with eye pain</p>
                      <p>• Nausea or vomiting with eye symptoms</p>
                    </div>
                    <p className="mt-3 text-red-800 font-medium">
                      Uveitis can cause permanent vision loss without prompt treatment!
                    </p>
                  </div>
                </div>
              </Card>

              {/* Understanding Uveitis */}
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-6 w-6 text-eyecare-blue mr-3" />
                  <h2 className="text-2xl font-bold text-eyecare-800">Understanding Uveitis & Iritis</h2>
                </div>
                <div className="prose prose-lg max-w-none text-eyecare-700">
                  <p className="mb-4">
                    Uveitis is inflammation of the uvea, the middle layer of the eye that contains most of the blood vessels. 
                    The uvea consists of three parts: the iris (colored part of the eye), the ciliary body (which controls 
                    the lens), and the choroid (which nourishes the retina).
                  </p>
                  <p className="mb-4">
                    Iritis, also called anterior uveitis, is the most common form and affects the iris and surrounding tissues. 
                    This condition can develop suddenly (acute) or gradually (chronic) and requires immediate medical attention 
                    to prevent complications such as glaucoma, cataracts, or permanent vision loss.
                  </p>
                  <p>
                    Uveitis can be caused by autoimmune disorders, infections, trauma, or sometimes occurs without a known 
                    cause (idiopathic). Proper diagnosis and treatment are essential for preserving vision and preventing 
                    recurrence.
                  </p>
                </div>
              </Card>

              {/* Types of Uveitis */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Types of Uveitis</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-eyecare-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-2">Anterior Uveitis (Iritis)</h3>
                      <ul className="text-eyecare-700 space-y-1">
                        <li>• Most common form (75-90%)</li>
                        <li>• Affects iris and ciliary body</li>
                        <li>• Often sudden onset</li>
                        <li>• Typically responds well to treatment</li>
                      </ul>
                    </div>
                    <div className="bg-eyecare-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-2">Intermediate Uveitis</h3>
                      <ul className="text-eyecare-700 space-y-1">
                        <li>• Affects vitreous and peripheral retina</li>
                        <li>• Often chronic condition</li>
                        <li>• May cause floaters</li>
                        <li>• More common in young adults</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-eyecare-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-2">Posterior Uveitis</h3>
                      <ul className="text-eyecare-700 space-y-1">
                        <li>• Affects choroid and retina</li>
                        <li>• Often vision-threatening</li>
                        <li>• May be associated with systemic disease</li>
                        <li>• Requires aggressive treatment</li>
                      </ul>
                    </div>
                    <div className="bg-eyecare-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-2">Panuveitis</h3>
                      <ul className="text-eyecare-700 space-y-1">
                        <li>• Affects entire uveal tract</li>
                        <li>• Most severe form</li>
                        <li>• Often systemic cause</li>
                        <li>• Requires comprehensive workup</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Symptoms */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Uveitis Symptoms</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-eyecare-blue">Anterior Uveitis Symptoms</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Deep, aching eye pain
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Severe light sensitivity (photophobia)
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Redness around the iris
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Blurred or decreased vision
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Small or irregular pupil
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Excessive tearing
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-eyecare-blue">Posterior Uveitis Symptoms</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Floaters in vision
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Gradual vision loss
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Central or peripheral blind spots
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Distorted vision
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Usually painless
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        May have minimal redness
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Causes */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Common Causes of Uveitis</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Autoimmune Causes</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li>• Ankylosing spondylitis</li>
                      <li>• Inflammatory bowel disease</li>
                      <li>• Behçet's disease</li>
                      <li>• Sarcoidosis</li>
                      <li>• Rheumatoid arthritis</li>
                      <li>• Psoriatic arthritis</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Infectious Causes</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li>• Herpes simplex virus</li>
                      <li>• Varicella zoster virus</li>
                      <li>• Cytomegalovirus</li>
                      <li>• Toxoplasmosis</li>
                      <li>• Syphilis</li>
                      <li>• Tuberculosis</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Other Causes</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li>• Eye trauma or injury</li>
                      <li>• Post-surgical inflammation</li>
                      <li>• Certain medications</li>
                      <li>• Sympathetic ophthalmia</li>
                      <li>• Vogt-Koyanagi-Harada disease</li>
                      <li>• Idiopathic (unknown cause)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Diagnosis */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Comprehensive Uveitis Evaluation</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Eye Examination</h3>
                      <ul className="space-y-3 text-eyecare-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Slit lamp examination:</strong> Detailed view of anterior eye structures</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Dilated fundus exam:</strong> Examination of posterior structures</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Intraocular pressure:</strong> Check for secondary glaucoma</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Visual field testing:</strong> Assess peripheral vision</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Advanced Imaging</h3>
                      <ul className="space-y-3 text-eyecare-700">
                        <li className="flex items-start">
                          <Eye className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>OCT imaging:</strong> Detailed retinal and macular analysis</span>
                        </li>
                        <li className="flex items-start">
                          <Eye className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Fluorescein angiography:</strong> Blood flow and leak detection</span>
                        </li>
                        <li className="flex items-start">
                          <Eye className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Fundus photography:</strong> Documentation of retinal findings</span>
                        </li>
                        <li className="flex items-start">
                          <Eye className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>B-scan ultrasonography:</strong> When view is limited</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Laboratory Testing</h3>
                    <div className="bg-eyecare-50 p-4 rounded-lg">
                      <p className="text-eyecare-700 mb-2">
                        Depending on presentation, we may recommend blood tests to identify underlying systemic conditions:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-1 text-eyecare-700">
                          <li>• Complete blood count (CBC)</li>
                          <li>• ESR and CRP (inflammation markers)</li>
                          <li>• HLA-B27 genetic testing</li>
                          <li>• ANA and rheumatoid factor</li>
                        </ul>
                        <ul className="space-y-1 text-eyecare-700">
                          <li>• Syphilis testing (RPR/VDRL)</li>
                          <li>• Tuberculosis screening</li>
                          <li>• Lyme disease testing</li>
                          <li>• Chest X-ray or CT scan</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Treatment */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Advanced Uveitis Treatment</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-eyecare-blue mb-4">First-Line Treatment</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-eyecare-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-eyecare-blue mb-3">Corticosteroid Eye Drops</h4>
                        <ul className="space-y-2 text-eyecare-700">
                          <li>• Prednisolone acetate 1%</li>
                          <li>• Difluprednate (Durezol)</li>
                          <li>• Frequent dosing initially</li>
                          <li>• Gradual tapering over weeks</li>
                        </ul>
                      </div>
                      <div className="bg-eyecare-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-eyecare-blue mb-3">Cycloplegic Agents</h4>
                        <ul className="space-y-2 text-eyecare-700">
                          <li>• Atropine or homatropine</li>
                          <li>• Pupil dilation for comfort</li>
                          <li>• Prevents iris adhesions</li>
                          <li>• Reduces ciliary spasm pain</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-eyecare-blue mb-4">Advanced Treatment Options</h3>
                    <div className="space-y-4">
                      <div className="bg-eyecare-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-eyecare-blue mb-3">Steroid Injections</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <p className="font-medium text-eyecare-700">Subconjunctival</p>
                            <ul className="text-sm text-eyecare-600 space-y-1">
                              <li>• Quick onset</li>
                              <li>• Minimal systemic effects</li>
                              <li>• For anterior uveitis</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium text-eyecare-700">Intravitreal</p>
                            <ul className="text-sm text-eyecare-600 space-y-1">
                              <li>• For posterior uveitis</li>
                              <li>• Long-lasting effect</li>
                              <li>• Triamcinolone or dexamethasone implant</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium text-eyecare-700">Systemic Steroids</p>
                            <ul className="text-sm text-eyecare-600 space-y-1">
                              <li>• For severe bilateral disease</li>
                              <li>• Oral prednisone</li>
                              <li>• Short-term use</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-eyecare-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-eyecare-blue mb-3">Immunosuppressive Therapy</h4>
                        <p className="text-eyecare-700 mb-2">For chronic or recurrent cases:</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <ul className="space-y-1 text-eyecare-700">
                            <li>• Methotrexate</li>
                            <li>• Azathioprine</li>
                            <li>• Mycophenolate mofetil</li>
                          </ul>
                          <ul className="space-y-1 text-eyecare-700">
                            <li>• Anti-TNF agents (Adalimumab)</li>
                            <li>• Cyclosporine</li>
                            <li>• Tacrolimus</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Complications */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Potential Complications</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-red-600 mb-3">Without Treatment</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Permanent vision loss
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Secondary glaucoma
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Cataract formation
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Retinal detachment
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Macular edema
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Prevention Strategies</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Early recognition and treatment
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Regular follow-up examinations
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Management of underlying conditions
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Medication compliance
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Prompt treatment of recurrences
                      </li>
                    </ul>
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
                  <h3 className="text-xl font-bold mb-2">Emergency Uveitis Care</h3>
                  <p className="mb-4 text-eyecare-100">
                    Immediate evaluation and treatment of eye inflammation to prevent vision loss.
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-eyecare-blue hover:bg-eyecare-50 font-semibold"
                  >
                    Emergency Appointment
                  </Button>
                  <p className="text-sm text-eyecare-200 mt-2">
                    Same-day appointments for acute uveitis
                  </p>
                </div>
              </Card>

              {/* Quick Facts */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Uveitis Quick Facts
                </h3>
                <div className="space-y-3 text-sm text-eyecare-700">
                  <div className="flex justify-between items-center py-1">
                    <span>Most common type:</span>
                    <span className="font-medium">Anterior (75-90%)</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Peak age group:</span>
                    <span className="font-medium">20-50 years</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Recurrence rate:</span>
                    <span className="font-medium">30-50%</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Treatment duration:</span>
                    <span className="font-medium">6-8 weeks</span>
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
                    <p className="font-medium">For uveitis emergencies:</p>
                    <p className="text-lg font-bold text-eyecare-blue">(949) 441-5444</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-red-600">Call immediately if you have:</p>
                    <ul className="mt-2 space-y-1">
                      <li>• Severe eye pain with light sensitivity</li>
                      <li>• Sudden vision decrease</li>
                      <li>• Headache with eye pain</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Treatment Timeline */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-4">Treatment Timeline</h3>
                <div className="space-y-3 text-sm text-eyecare-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-eyecare-blue rounded-full"></div>
                    <div>
                      <p className="font-medium">Day 1-3:</p>
                      <p>Intensive steroid drops, pain relief</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-eyecare-blue rounded-full"></div>
                    <div>
                      <p className="font-medium">Week 1-2:</p>
                      <p>Symptom improvement, gradual tapering</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-eyecare-blue rounded-full"></div>
                    <div>
                      <p className="font-medium">Week 4-8:</p>
                      <p>Complete tapering, monitoring for recurrence</p>
                    </div>
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
                    <li>• Emergency uveitis evaluation</li>
                    <li>• Anti-inflammatory medications</li>
                    <li>• Follow-up examinations</li>
                    <li>• Advanced imaging when needed</li>
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

export default UveitisIritisPage;