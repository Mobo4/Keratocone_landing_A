import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, AlertTriangle, Eye, Calendar, Shield, MessageCircle, FileText, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import TrustSignals from '../../components/TrustSignals';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';

const HerpesSimplexKeratitisPage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Herpes Simplex Keratitis",
    "alternateName": ["HSK", "Viral Keratitis", "Herpes Eye Infection"],
    "description": "Herpes simplex keratitis is a viral infection of the cornea caused by herpes simplex virus, which can lead to vision loss if not treated promptly.",
    "symptom": [
      {
        "@type": "MedicalSymptom",
        "name": "Eye pain",
        "description": "Severe eye pain that may worsen with light exposure"
      },
      {
        "@type": "MedicalSymptom", 
        "name": "Tearing",
        "description": "Excessive tearing and discharge from the affected eye"
      },
      {
        "@type": "MedicalSymptom",
        "name": "Blurred vision",
        "description": "Decreased vision due to corneal involvement"
      },
      {
        "@type": "MedicalSymptom",
        "name": "Photophobia",
        "description": "Sensitivity to light causing discomfort"
      }
    ],
    "cause": [
      "Herpes simplex virus type 1 (HSV-1)",
      "Herpes simplex virus type 2 (HSV-2)",
      "Reactivation of latent virus",
      "Immunosuppression",
      "Stress or trauma"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalTherapy",
        "name": "Antiviral medications",
        "description": "Oral and topical antiviral drugs to control viral replication"
      },
      {
        "@type": "MedicalTherapy",
        "name": "Steroid therapy",
        "description": "Anti-inflammatory treatment for stromal keratitis"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Debridement",
        "description": "Removal of infected corneal epithelium"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Herpes Simplex Keratitis Treatment | HSK Eye Infection Care | Dr. Alexander Bonakdar</title>
        <meta name="description" content="Expert treatment of herpes simplex keratitis (HSK) with advanced antiviral therapy. Emergency and chronic herpes eye infection management." />
        <meta name="keywords" content="herpes simplex keratitis, HSK, viral keratitis, herpes eye infection, antiviral treatment, corneal infection, Orange County ophthalmologist" />
        <link rel="canonical" href="https://drbonakdar.com/conditions/infections/herpes-simplex-keratitis" />
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
              <Link to="/conditions/infections" className="hover:text-eyecare-blue transition-colors">Infections</Link>
              <span>/</span>
              <span className="text-eyecare-blue font-medium">Herpes Simplex Keratitis</span>
            </nav>
          </div>
        </div>

        <Hero
          title="Herpes Simplex Keratitis Treatment"
          subtitle="Expert management of viral corneal infections with advanced antiviral therapy"
          backgroundImage="/images/hero-backgrounds/corneal-care.jpg"
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
                    <h3 className="text-lg font-semibold text-red-800 mb-2">Urgent Medical Attention Required</h3>
                    <div className="text-red-700 space-y-1">
                      <p>• Herpes keratitis can cause permanent vision loss</p>
                      <p>• Early treatment is critical to prevent scarring</p>
                      <p>• Delay in treatment may lead to corneal perforation</p>
                      <p>• Immediate antiviral therapy is essential</p>
                    </div>
                    <p className="mt-3 text-red-800 font-medium">
                      Call immediately if you have eye pain, vision changes, or suspected herpes eye infection!
                    </p>
                  </div>
                </div>
              </Card>

              {/* Understanding HSK */}
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="h-6 w-6 text-eyecare-blue mr-3" />
                  <h2 className="text-2xl font-bold text-eyecare-800">Understanding Herpes Simplex Keratitis</h2>
                </div>
                <div className="prose prose-lg max-w-none text-eyecare-700">
                  <p className="mb-4">
                    Herpes simplex keratitis (HSK) is a viral infection of the cornea caused by the herpes simplex 
                    virus (HSV), most commonly type 1. This virus can remain dormant in the trigeminal nerve and 
                    reactivate during times of stress, illness, or immunosuppression, causing recurrent eye infections.
                  </p>
                  <p className="mb-4">
                    HSK is one of the leading infectious causes of corneal blindness worldwide. The infection can 
                    affect different layers of the cornea, with epithelial keratitis being the most common form. 
                    Without proper treatment, the virus can cause permanent scarring, corneal perforation, and 
                    significant vision loss.
                  </p>
                  <p>
                    The condition is highly treatable when diagnosed early and managed appropriately with antiviral 
                    medications. However, recurrences are common, and some patients may require long-term suppressive 
                    therapy to prevent repeated episodes.
                  </p>
                </div>
              </Card>

              {/* Types of HSK */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Types of Herpes Simplex Keratitis</h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">Epithelial Keratitis (Most Common)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-blue-700 mb-2">Characteristics:</p>
                        <ul className="text-sm text-blue-600 space-y-1">
                          <li>• Involves surface layer of cornea</li>
                          <li>• Classic dendritic (branching) ulcers</li>
                          <li>• Usually unilateral (one eye)</li>
                          <li>• Responds well to antivirals</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-blue-700 mb-2">Symptoms:</p>
                        <ul className="text-sm text-blue-600 space-y-1">
                          <li>• Foreign body sensation</li>
                          <li>• Tearing and discharge</li>
                          <li>• Mild to moderate pain</li>
                          <li>• Photophobia</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-amber-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-amber-800 mb-3">Stromal Keratitis (More Severe)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-amber-700 mb-2">Characteristics:</p>
                        <ul className="text-sm text-amber-600 space-y-1">
                          <li>• Affects deeper corneal layers</li>
                          <li>• Immune-mediated inflammation</li>
                          <li>• Can cause significant scarring</li>
                          <li>• Requires steroid treatment</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-amber-700 mb-2">Types:</p>
                        <ul className="text-sm text-amber-600 space-y-1">
                          <li>• Necrotizing stromal keratitis</li>
                          <li>• Immune stromal keratitis</li>
                          <li>• Mixed presentations</li>
                          <li>• Secondary bacterial infection</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-800 mb-3">Endothelial Keratitis (Rare but Serious)</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-red-700 mb-2">Features:</p>
                        <ul className="text-sm text-red-600 space-y-1">
                          <li>• Affects innermost corneal layer</li>
                          <li>• Causes corneal edema</li>
                          <li>• May increase eye pressure</li>
                          <li>• Risk of corneal decompensation</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-red-700 mb-2">Complications:</p>
                        <ul className="text-sm text-red-600 space-y-1">
                          <li>• Secondary glaucoma</li>
                          <li>• Corneal perforation</li>
                          <li>• Need for corneal transplant</li>
                          <li>• Permanent vision loss</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Symptoms */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Signs and Symptoms</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-eyecare-blue">Early Symptoms</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Eye pain or discomfort
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Foreign body sensation
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Excessive tearing
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Light sensitivity (photophobia)
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                        Blurred vision
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-red-600">Advanced Symptoms</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Severe eye pain
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Significant vision loss
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Corneal cloudiness
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Eye discharge
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                        Corneal perforation (rare)
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Triggers and Risk Factors */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Triggers and Risk Factors</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Common Triggers</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li>• Physical or emotional stress</li>
                      <li>• Fever or illness</li>
                      <li>• Sun exposure (UV light)</li>
                      <li>• Menstruation</li>
                      <li>• Immunosuppression</li>
                      <li>• Eye trauma or surgery</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Risk Factors</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li>• Previous HSK episodes</li>
                      <li>• Oral herpes history</li>
                      <li>• Compromised immune system</li>
                      <li>• Contact lens wear</li>
                      <li>• Atopic dermatitis</li>
                      <li>• Certain medications</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Prevention Strategies</h3>
                    <ul className="space-y-2 text-eyecare-700">
                      <li>• UV protection (sunglasses)</li>
                      <li>• Stress management</li>
                      <li>• Prophylactic antivirals</li>
                      <li>• Avoid eye trauma</li>
                      <li>• Regular eye exams</li>
                      <li>• Immune system support</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Diagnosis */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Comprehensive Diagnosis</h2>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Clinical Examination</h3>
                      <ul className="space-y-3 text-eyecare-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Slit lamp examination:</strong> Detailed view of corneal changes</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Fluorescein staining:</strong> Reveals dendritic ulcers</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Rose bengal staining:</strong> Shows viral cytopathic effects</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Intraocular pressure:</strong> Check for secondary glaucoma</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Laboratory Testing</h3>
                      <ul className="space-y-3 text-eyecare-700">
                        <li className="flex items-start">
                          <Eye className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>PCR testing:</strong> Definitive viral identification</span>
                        </li>
                        <li className="flex items-start">
                          <Eye className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Viral culture:</strong> Traditional diagnostic method</span>
                        </li>
                        <li className="flex items-start">
                          <Eye className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Antigen detection:</strong> Rapid testing available</span>
                        </li>
                        <li className="flex items-start">
                          <Eye className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          <span><strong>Confocal microscopy:</strong> Advanced imaging technique</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">Classic Signs of HSK</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium text-blue-700 mb-2">Dendritic Ulcers:</p>
                        <ul className="text-sm text-blue-600 space-y-1">
                          <li>• Branching, tree-like pattern</li>
                          <li>• Terminal bulbs at branch ends</li>
                          <li>• Fluorescein staining positive</li>
                          <li>• Usually single but can be multiple</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-blue-700 mb-2">Geographic Ulcers:</p>
                        <ul className="text-sm text-blue-600 space-y-1">
                          <li>• Larger, amoeba-like shape</li>
                          <li>• May develop from dendritic ulcers</li>
                          <li>• Associated with antiviral treatment</li>
                          <li>• Heals more slowly</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Treatment */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Advanced Treatment Options</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-eyecare-blue mb-4">Antiviral Therapy</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-3">Topical Antivirals</h4>
                        <ul className="space-y-2 text-green-700">
                          <li><strong>Trifluridine (Viroptic):</strong> Gold standard</li>
                          <li><strong>Ganciclovir gel:</strong> Better penetration</li>
                          <li><strong>Acyclovir ointment:</strong> Good for epithelial disease</li>
                          <li><strong>Dosing:</strong> Every 2 hours while awake</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-3">Oral Antivirals</h4>
                        <ul className="space-y-2 text-green-700">
                          <li><strong>Acyclovir:</strong> 400mg 5 times daily</li>
                          <li><strong>Valacyclovir:</strong> 1g 3 times daily</li>
                          <li><strong>Famciclovir:</strong> 250mg 3 times daily</li>
                          <li><strong>Duration:</strong> 7-10 days typically</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-eyecare-blue mb-4">Stromal Keratitis Management</h3>
                    <div className="bg-amber-50 border-l-4 border-l-amber-500 p-4 mb-4">
                      <p className="text-amber-800 mb-2">
                        <strong>Critical Rule:</strong> Always use antivirals with steroids to prevent viral replication
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-eyecare-blue mb-3">Anti-inflammatory Treatment</h4>
                        <ul className="space-y-2 text-eyecare-700">
                          <li>• Prednisolone acetate 1%</li>
                          <li>• Start with frequent dosing</li>
                          <li>• Gradual tapering over months</li>
                          <li>• Monitor for increased IOP</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-eyecare-blue mb-3">Concurrent Antiviral Cover</h4>
                        <ul className="space-y-2 text-eyecare-700">
                          <li>• Continue topical or oral antivirals</li>
                          <li>• Prevent viral reactivation</li>
                          <li>• Usually oral agents preferred</li>
                          <li>• Continue throughout steroid course</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-eyecare-blue mb-4">Surgical Interventions</h3>
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-3">Debridement</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="font-medium text-blue-700">Indications:</p>
                            <ul className="text-sm text-blue-600 space-y-1">
                              <li>• Large epithelial defects</li>
                              <li>• Poor response to antivirals</li>
                              <li>• Geographic ulceration</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium text-blue-700">Technique:</p>
                            <ul className="text-sm text-blue-600 space-y-1">
                              <li>• Gentle epithelial removal</li>
                              <li>• Cotton-tip applicator</li>
                              <li>• Remove infected cells</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-3">Corneal Transplantation</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="font-medium text-red-700">Indications:</p>
                            <ul className="text-sm text-red-600 space-y-1">
                              <li>• Corneal perforation</li>
                              <li>• Dense central scarring</li>
                              <li>• Failed medical therapy</li>
                              <li>• Visual rehabilitation needs</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium text-red-700">Timing:</p>
                            <ul className="text-sm text-red-600 space-y-1">
                              <li>• Wait for inactive disease</li>
                              <li>• 3-6 months of quiescence</li>
                              <li>• Prophylactic antivirals</li>
                              <li>• Higher rejection risk</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Suppressive Therapy */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-eyecare-800 mb-6">Prevention of Recurrence</h2>
                <div className="space-y-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-800 mb-3">Long-term Suppressive Therapy</h3>
                    <p className="text-green-700 mb-3">
                      Prophylactic antiviral therapy significantly reduces the risk of HSK recurrence and is 
                      recommended for patients with frequent episodes.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Indications for Suppression</h3>
                      <ul className="space-y-2 text-eyecare-700">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          Two or more episodes per year
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          Stromal keratitis history
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          Geographic ulceration
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          Vision-threatening episodes
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-eyecare-blue mt-1 mr-2 flex-shrink-0" />
                          Only functioning eye
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-eyecare-blue mb-3">Suppressive Regimens</h3>
                      <ul className="space-y-2 text-eyecare-700">
                        <li><strong>Acyclovir:</strong> 400mg twice daily</li>
                        <li><strong>Valacyclovir:</strong> 500mg daily</li>
                        <li><strong>Duration:</strong> Minimum 1 year</li>
                        <li><strong>Monitoring:</strong> Kidney function tests</li>
                        <li><strong>Effectiveness:</strong> 45% reduction in recurrence</li>
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
                  <h3 className="text-xl font-bold mb-2">Emergency HSK Treatment</h3>
                  <p className="mb-4 text-eyecare-100">
                    Immediate evaluation and treatment of herpes simplex keratitis to prevent vision loss.
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-white text-eyecare-blue hover:bg-eyecare-50 font-semibold"
                  >
                    Emergency Care
                  </Button>
                  <p className="text-sm text-eyecare-200 mt-2">
                    Same-day appointments for viral keratitis
                  </p>
                </div>
              </Card>

              {/* Quick Facts */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  HSK Quick Facts
                </h3>
                <div className="space-y-3 text-sm text-eyecare-700">
                  <div className="flex justify-between items-center py-1">
                    <span>Recurrence rate:</span>
                    <span className="font-medium">10-15% per year</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Treatment duration:</span>
                    <span className="font-medium">7-14 days</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Healing time:</span>
                    <span className="font-medium">1-3 weeks</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span>Vision recovery:</span>
                    <span className="font-medium">Days to weeks</span>
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
                    <p className="font-medium">For HSK emergencies:</p>
                    <p className="text-lg font-bold text-eyecare-blue">(949) 441-5444</p>
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-red-600">Call immediately for:</p>
                    <ul className="mt-2 space-y-1">
                      <li>• Severe eye pain</li>
                      <li>• Sudden vision decrease</li>
                      <li>• Light sensitivity with pain</li>
                      <li>• Suspected herpes eye infection</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Prevention Tips */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-4">Prevention Tips</h3>
                <div className="space-y-3 text-sm text-eyecare-700">
                  <div>
                    <p className="font-medium text-green-600">Reduce Triggers:</p>
                    <ul className="mt-2 space-y-1">
                      <li>• Wear UV-protective sunglasses</li>
                      <li>• Manage stress effectively</li>
                      <li>• Avoid excessive sun exposure</li>
                      <li>• Get adequate sleep</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-blue-600">For Recurrent HSK:</p>
                    <ul className="mt-2 space-y-1">
                      <li>• Consider suppressive therapy</li>
                      <li>• Regular follow-up visits</li>
                      <li>• Keep antiviral medication available</li>
                      <li>• Early recognition of symptoms</li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Treatment Timeline */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-eyecare-blue mb-4">Treatment Timeline</h3>
                <div className="space-y-3 text-sm text-eyecare-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Day 1-3:</p>
                      <p>Start antivirals, pain management</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Week 1-2:</p>
                      <p>Epithelial healing, symptom improvement</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="font-medium">Week 2-4:</p>
                      <p>Complete healing, vision recovery</p>
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
                    <li>• Emergency HSK evaluation</li>
                    <li>• Antiviral medications</li>
                    <li>• Follow-up care</li>
                    <li>• Suppressive therapy</li>
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

export default HerpesSimplexKeratitisPage;