import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';
import TrustSignals from '@/components/TrustSignals';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Eye, 
  AlertTriangle, 
  Clock, 
  ArrowLeft,
  Sun,
  Shield,
  CheckCircle,
  XCircle,
  Calendar,
  Lightbulb,
  Camera,
  Users,
  Zap
} from 'lucide-react';

const CataractsEducationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Cataracts",
    "alternateName": ["Cataract", "Lens Opacity"],
    "description": "A clouding of the natural lens of the eye that affects vision, most commonly occurring with age but can also result from injury, certain medications, or medical conditions.",
    "symptom": [
      "Cloudy or blurry vision",
      "Increased difficulty with vision at night",
      "Sensitivity to light and glare",
      "Seeing halos around lights",
      "Frequent changes in eyeglass prescription",
      "Fading or yellowing of colors"
    ],
    "possibleCause": [
      "Aging (most common)",
      "Diabetes",
      "Eye injury or trauma",
      "Prolonged steroid use",
      "Excessive UV exposure",
      "Smoking"
    ],
    "riskFactor": [
      "Age over 60",
      "Diabetes",
      "Smoking",
      "Excessive alcohol consumption",
      "Prolonged sun exposure",
      "Previous eye injury or surgery"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Cataract Surgery",
        "description": "Outpatient procedure to remove the cloudy lens and replace it with an artificial intraocular lens (IOL)"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Premium IOL Options",
        "description": "Advanced lens implants that can correct vision at multiple distances"
      }
    ]
  };

  const symptoms = [
    { icon: Eye, title: "Cloudy or Blurry Vision", description: "Like looking through a foggy window" },
    { icon: Sun, title: "Light Sensitivity", description: "Increased sensitivity to bright lights and glare" },
    { icon: Camera, title: "Seeing Halos", description: "Halos or starbursts around lights, especially at night" },
    { icon: Lightbulb, title: "Night Vision Problems", description: "Difficulty seeing clearly in low light conditions" },
    { icon: Eye, title: "Color Changes", description: "Colors may appear faded, yellowed, or less vibrant" },
    { icon: Eye, title: "Frequent Prescription Changes", description: "Need for frequent updates to eyeglasses or contacts" }
  ];

  const causes = [
    { 
      category: "Age-Related (Most Common)", 
      description: "Natural aging process causes proteins in the lens to break down and clump together",
      items: ["Protein breakdown in lens", "Normal aging process", "Usually develops slowly over years"] 
    },
    { 
      category: "Medical Conditions", 
      description: "Certain health conditions can accelerate cataract development",
      items: ["Diabetes", "High blood pressure", "Previous eye inflammation", "Previous eye surgery"] 
    },
    { 
      category: "Lifestyle Factors", 
      description: "Environmental and lifestyle choices that increase risk",
      items: ["Smoking", "Excessive alcohol consumption", "Prolonged UV exposure", "Poor nutrition"] 
    },
    { 
      category: "Other Causes", 
      description: "Less common but significant causes",
      items: ["Eye injury or trauma", "Prolonged steroid use", "Radiation exposure", "Congenital factors"] 
    }
  ];

  const cataractTypes = [
    {
      type: "Nuclear Cataracts",
      description: "Form in the center of the lens, causing nearsightedness initially",
      commonIn: "Most common in age-related cataracts"
    },
    {
      type: "Cortical Cataracts",
      description: "Begin at the edges and work toward the center in spoke-like patterns",
      commonIn: "Common in people with diabetes"
    },
    {
      type: "Posterior Subcapsular",
      description: "Form at the back of the lens, often affecting reading vision",
      commonIn: "Associated with steroid use and diabetes"
    }
  ];

  const surgeryBenefits = [
    "Improved vision clarity",
    "Better color perception",
    "Reduced glare sensitivity",
    "Enhanced night vision",
    "Potential reduction in glasses dependence",
    "Improved quality of life"
  ];

  const whenToSeeDoctor = [
    "Noticeable changes in vision quality",
    "Difficulty with daily activities like driving or reading",
    "Increased sensitivity to light",
    "Seeing halos around lights",
    "Double vision in one eye",
    "Frequent changes in eyeglass prescription"
  ];

  const prevention = [
    "Wear UV-protective sunglasses",
    "Maintain healthy blood sugar levels (if diabetic)",
    "Don't smoke or quit smoking",
    "Limit alcohol consumption",
    "Eat a diet rich in antioxidants",
    "Get regular comprehensive eye exams"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Cataracts: Symptoms, Causes, and Treatment | Patient Education"
        description="Learn about cataracts, including symptoms, causes, and treatment options. Comprehensive patient education from Orange County cataract specialists."
        keywords="cataracts, cataract surgery, cloudy vision, lens replacement, patient education, Orange County"
        canonicalUrl="https://eyecarecenteroc.com/education/conditions/cataracts"
        ogType="article"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <nav className="flex items-center space-x-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-eyecare-blue">Home</Link>
              <span>/</span>
              <Link to="/patient-education" className="hover:text-eyecare-blue">Patient Education</Link>
              <span>/</span>
              <span className="text-gray-900">Cataracts</span>
            </nav>
          </div>
        </section>

        {/* Header */}
        <section className="bg-gradient-to-r from-indigo-50 to-purple-50 py-12">
          <div className="container mx-auto px-4">
            <Link 
              to="/patient-education"
              className="inline-flex items-center text-eyecare-blue hover:text-eyecare-dark-blue mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Education Center
            </Link>
            
            <div className="max-w-4xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-white rounded-full p-3 shadow-lg">
                  <Eye className="w-8 h-8 text-indigo-500" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Cataracts
                  </h1>
                  <p className="text-xl text-gray-600 mb-6 max-w-3xl">
                    Understanding this common age-related condition that causes clouding of the eye's natural lens, 
                    affecting millions of people worldwide.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Badge className="bg-blue-100 text-blue-800 flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      Very Common
                    </Badge>
                    <Badge className="bg-yellow-100 text-yellow-800 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      10 min read
                    </Badge>
                    <Badge className="bg-green-100 text-green-800">
                      Highly Treatable
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-800">
                      Surgery Available
                    </Badge>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                  <h3 className="text-lg font-semibold">Good News About Cataracts</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Cataract surgery is one of the most successful and commonly performed surgeries in the United States, 
                  with over 95% success rate in improving vision. Most people experience significant improvement in their quality of life.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a 
                    href="tel:9499973927"
                    className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-lg font-semibold transition-colors callrail-phone"
                  >
                    Call: (949) 997-3927
                  </a>
                  <AppointmentRequestDialog>
                    <Button className="bg-white border-2 border-eyecare-blue text-eyecare-blue hover:bg-eyecare-blue hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Schedule Consultation
                    </Button>
                  </AppointmentRequestDialog>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustSignals className="py-8 bg-gray-50" />

        {/* What are Cataracts */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">What are Cataracts?</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 mb-6">
                  A cataract is a clouding of the natural lens of your eye. The lens, located behind the iris 
                  and pupil, works much like a camera lens to focus light onto the retina at the back of the eye. 
                  It also adjusts the eye's focus, letting us see things clearly both up close and far away.
                </p>
                
                <p className="text-gray-600 mb-6">
                  When we're young, the lens is clear and flexible. As we age, proteins in the lens begin to 
                  break down and clump together, clouding small areas of the lens. Over time, the clouding 
                  may grow larger and distort more of the lens, making it harder to see clearly.
                </p>
                
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-3 text-indigo-900">Fast Facts About Cataracts</h3>
                  <ul className="text-indigo-800 space-y-2">
                    <li>• More than half of Americans have cataracts by age 80</li>
                    <li>• Cataracts are the leading cause of blindness worldwide</li>
                    <li>• They're completely treatable with surgery</li>
                    <li>• Cataract surgery takes about 15 minutes and is outpatient</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Cataracts */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Types of Cataracts</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cataractTypes.map((type, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{type.type}</CardTitle>
                      <CardDescription className="text-sm text-gray-500">{type.commonIn}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{type.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Symptoms */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Common Symptoms</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {symptoms.map((symptom, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <symptom.icon className="w-6 h-6 text-eyecare-blue" />
                        <CardTitle className="text-lg">{symptom.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{symptom.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-yellow-900">
                  Cataracts Develop Gradually
                </h3>
                <p className="text-yellow-800">
                  Cataract symptoms usually develop slowly over months or years. You might not notice 
                  vision changes at first because only a small part of the lens may be affected. 
                  As the cataract grows larger, vision problems become more noticeable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Causes */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">What Causes Cataracts?</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {causes.map((cause, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-xl">{cause.category}</CardTitle>
                      <CardDescription>{cause.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {cause.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Diagnosis */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">How are Cataracts Diagnosed?</h2>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-600 mb-6">
                  Cataracts are diagnosed through a comprehensive dilated eye examination. 
                  Your eye doctor will examine your eyes and perform several tests to 
                  determine if you have cataracts and how much they're affecting your vision.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="w-5 h-5 text-eyecare-blue" />
                      Visual Acuity Test
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">
                      This eye chart test measures how well you see at various distances.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Reading letters from an eye chart</li>
                      <li>• Testing both near and distance vision</li>
                      <li>• Comparing vision between eyes</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-yellow-500" />
                      Dilated Eye Exam
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-3">
                      Eye drops are used to widen the pupils for a better view of the lens.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Direct examination of the lens</li>
                      <li>• Assessment of cataract location and density</li>
                      <li>• Evaluation of overall eye health</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Treatment */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Treatment Options</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Early Stage Management</CardTitle>
                    <CardDescription>When cataracts are mild and not significantly affecting vision</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Updated eyeglass prescription</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Better lighting for reading and activities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Anti-glare sunglasses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">Magnifying lenses for reading</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Zap className="w-5 h-5 text-blue-500" />
                      Cataract Surgery
                    </CardTitle>
                    <CardDescription>When cataracts significantly interfere with daily activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      The only effective treatment for cataracts is surgical removal of the cloudy lens 
                      and replacement with an artificial intraocular lens (IOL).
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Outpatient procedure (15-20 minutes)</li>
                      <li>• Local anesthesia with minimal discomfort</li>
                      <li>• Over 95% success rate</li>
                      <li>• Quick recovery (days to weeks)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <Card className="bg-eyecare-blue bg-opacity-10 border-eyecare-blue border-opacity-20">
                <CardHeader>
                  <CardTitle className="text-xl text-eyecare-blue">Benefits of Cataract Surgery</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {surgeryBenefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link 
                      to="/conditions/cataract"
                      className="text-eyecare-blue font-semibold hover:text-eyecare-dark-blue transition-colors"
                    >
                      Learn more about our cataract surgery options →
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* When to See a Doctor */}
        <section className="py-12 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">When to See an Eye Doctor</h2>
              
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-800">
                    <AlertTriangle className="w-5 h-5" />
                    Schedule an Eye Exam If You Experience:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {whenToSeeDoctor.map((symptom, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{symptom}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-red-100 rounded-lg">
                    <p className="text-red-800 font-medium">
                      Remember: Even if you don't have symptoms, regular eye exams are important, 
                      especially after age 60, to detect cataracts early.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Prevention */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Prevention and Risk Reduction</h2>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-gray-600 mb-6">
                  While aging is the primary cause of cataracts and can't be prevented, 
                  you can take steps to slow their development and reduce your risk.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {prevention.map((tip, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-600">{tip}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-eyecare-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Clear Vision is Within Reach</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Don't let cataracts cloud your world. Our experienced surgeons have helped thousands 
              of patients regain clear, vibrant vision through safe, effective cataract surgery.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <a 
                href="tel:9499973927"
                className="bg-white text-eyecare-blue hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300 callrail-phone"
              >
                Call Now: (949) 997-3927
              </a>
              
              <AppointmentRequestDialog>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-eyecare-blue px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300">
                  Request Consultation
                </Button>
              </AppointmentRequestDialog>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-purple-100">
              <Calendar className="w-4 h-4" />
              <span>Free cataract evaluation available</span>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CataractsEducationPage;