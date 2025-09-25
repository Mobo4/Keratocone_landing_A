import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, AlertCircle, Heart, Activity, Eye, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';
import { useCallRailPhone } from '@/hooks/useCallRailPhone';

const ComputerVisionSyndromePage: React.FC = () => {
  const { phoneNumber, phoneHref } = useCallRailPhone();

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Eye Conditions', path: '/conditions' },
    { name: 'Binocular Vision', path: '/conditions/binocular-vision' },
    { name: 'Computer Vision Syndrome', path: '/conditions/binocular-vision/computer-vision-syndrome' }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": "Computer Vision Syndrome",
    "alternateName": ["Digital Eye Strain", "CVS", "Computer Eye Strain"],
    "description": "Computer Vision Syndrome is a group of eye and vision-related problems resulting from prolonged computer, tablet, e-reader and cell phone use. Symptoms include eyestrain, headaches, blurred vision, dry eyes and neck pain.",
    "symptom": [
      "Eye strain and fatigue",
      "Dry or watery eyes",
      "Blurred or double vision",
      "Headaches",
      "Neck and shoulder pain"
    ],
    "cause": [
      "Reduced blink rate during screen use",
      "Blue light exposure",
      "Poor screen positioning",
      "Uncorrected vision problems",
      "Poor lighting conditions"
    ],
    "possibleTreatment": [
      {
        "@type": "MedicalProcedure",
        "name": "Computer Glasses",
        "description": "Specialized lenses with blue light filtering and anti-reflective coating"
      },
      {
        "@type": "MedicalProcedure", 
        "name": "Vision Therapy",
        "description": "Exercises to improve focusing and eye coordination for digital device use"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Ergonomic Adjustments",
        "description": "Optimizing workspace setup and viewing habits"
      }
    ],
    "riskFactor": ["Prolonged screen time", "Poor posture", "Dry environments", "Uncorrected refractive errors", "Age over 40"],
    "epidemiology": "Affects 50-90% of computer workers, increasingly common with remote work and digital device use"
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Computer Vision Syndrome Treatment - Digital Eye Strain Relief | Eyecare Center OC"
        description="Expert treatment for computer vision syndrome and digital eye strain. Blue light glasses, vision therapy, and ergonomic solutions in Orange County."
        keywords="computer vision syndrome, digital eye strain, blue light glasses, computer glasses, eye strain treatment, Orange County CVS specialist"
        canonicalUrl="https://eyecarecenteroc.com/conditions/binocular-vision/computer-vision-syndrome"
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
                <span className="font-medium">Binocular Vision</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Computer Vision Syndrome
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Computer Vision Syndrome affects millions of digital device users daily. Our comprehensive approach combines specialized lenses, vision therapy, and ergonomic solutions to reduce eye strain and improve your digital comfort and productivity.
              </p>
              <div className="flex flex-wrap gap-4">
                <AppointmentRequestDialog>
                  <button className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-3 rounded-md transition-colors font-medium flex items-center">
                    Schedule CVS Evaluation <Calendar className="ml-2 h-5 w-5" />
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
                  Quick Facts About Computer Vision Syndrome
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Common Symptoms:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Eye strain and fatigue</li>
                      <li>• Headaches</li>
                      <li>• Blurred vision</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Main Causes:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Reduced blinking</li>
                      <li>• Blue light exposure</li>
                      <li>• Poor screen positioning</li>
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
                    Understanding Computer Vision Syndrome
                  </h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-4">
                      Computer Vision Syndrome (CVS), also known as Digital Eye Strain, encompasses the physical discomfort felt after prolonged use of digital devices. As screen time increases, so does the prevalence of CVS, affecting 50-90% of computer workers and digital device users.
                    </p>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                      <p className="text-gray-700"><strong>Key Point:</strong> CVS is not a single condition but a collection of symptoms resulting from the unique visual demands of digital device use, requiring comprehensive management approaches.</p>
                    </div>
                  </div>
                </div>

                {/* Symptoms Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <Heart className="h-8 w-8 mr-3 text-eyecare-blue" />
                    Symptoms & Impact
                  </h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-4">
                      CVS symptoms can significantly impact work productivity, learning ability, and overall quality of life, especially for those who spend 2+ hours daily on digital devices.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Visual Symptoms</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Eye strain and fatigue</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Dry or watery eyes</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Blurred or double vision</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Light sensitivity</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Difficulty focusing</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Physical Symptoms</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Headaches and migraines</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Neck and shoulder pain</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Back pain from poor posture</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">General fatigue</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Difficulty concentrating</span>
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
                    Causes & Contributing Factors
                  </h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-4">
                      Multiple factors contribute to CVS, often working together to create the perfect storm of visual stress and discomfort.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Reduced blink rate:</strong> Normal blinking decreases by 60% during screen use, leading to dry eyes</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Blue light exposure:</strong> High-energy visible light from screens can contribute to eye strain and sleep disruption</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Focusing demands:</strong> Constant accommodation and convergence stress for near work</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Poor screen positioning:</strong> Improper viewing distance and angles strain eye muscles</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Uncorrected vision problems:</strong> Even mild refractive errors become problematic with prolonged use</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Environmental factors:</strong> Glare, poor lighting, and dry air worsen symptoms</span>
                      </li>
                      <li className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700"><strong>Age-related changes:</strong> Presbyopia and decreased tear production increase CVS risk</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Treatment Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Comprehensive Treatment Solutions</h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-6">
                      Our multi-pronged approach addresses all contributing factors of CVS through specialized eyewear, vision therapy, and ergonomic optimization for lasting relief.
                    </p>
                    <div className="space-y-6">
                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Computer Vision Glasses</h3>
                        <p className="text-gray-700 mb-3">Specialized lenses designed to reduce eye strain and optimize visual comfort during digital device use.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Blue light filtering technology (415-455nm range)</li>
                          <li>• Anti-reflective coating to reduce glare</li>
                          <li>• Slight magnification for near work (+0.25 to +1.00)</li>
                          <li>• Progressive lenses for multifocal needs</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Vision Therapy</h3>
                        <p className="text-gray-700 mb-3">Customized exercises to improve eye coordination, focusing ability, and visual efficiency for digital work.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Focusing flexibility training</li>
                          <li>• Eye movement coordination exercises</li>
                          <li>• Binocular vision strengthening</li>
                          <li>• Visual processing speed improvement</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Ergonomic Workspace Optimization</h3>
                        <p className="text-gray-700 mb-3">Professional assessment and recommendations for optimal computer workstation setup.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Monitor positioning and viewing distance (20-26 inches)</li>
                          <li>• Screen angle and height optimization</li>
                          <li>• Lighting assessment and glare reduction</li>
                          <li>• Chair and desk positioning for posture support</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Dry Eye Management</h3>
                        <p className="text-gray-700 mb-3">Targeted treatments for the dry eye component of CVS to restore tear film stability.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Preservative-free artificial tears</li>
                          <li>• Punctal plugs for tear retention</li>
                          <li>• Omega-3 supplementation</li>
                          <li>• Environmental humidity control</li>
                        </ul>
                      </div>

                      <div className="border-l-4 border-eyecare-blue pl-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Behavioral Modifications</h3>
                        <p className="text-gray-700 mb-3">Evidence-based habits and techniques to minimize digital eye strain throughout the workday.</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• 20-20-20 rule implementation (every 20 min, look 20 feet away for 20 sec)</li>
                          <li>• Conscious blinking exercises</li>
                          <li>• Screen break scheduling and timing</li>
                          <li>• Sleep hygiene for digital device use</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 20-20-20 Rule Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">The 20-20-20 Rule and Prevention</h2>
                  <div className="bg-green-50 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">20-20-20 Rule Implementation</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Every 20 minutes, take a 20-second break</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Look at something 20 feet away or farther</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Blink deliberately 20 times during break</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Use smartphone apps or computer reminders</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Additional Prevention Tips</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Adjust screen brightness to match surroundings</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Increase text size to reduce eye strain</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Position screen slightly below eye level</span>
                          </li>
                          <li className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">Keep screen clean and dust-free</span>
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
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Do blue light glasses really work for computer vision syndrome?</h3>
                      <p className="text-gray-700">Studies show that blue light filtering glasses can reduce eye strain and improve sleep quality when used consistently. However, they work best as part of a comprehensive approach including proper ergonomics and regular breaks.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">How long does it take to see improvement with treatment?</h3>
                      <p className="text-gray-700">Most patients notice some improvement within 1-2 weeks of implementing proper eyewear and ergonomic changes. Full benefits from vision therapy may take 6-12 weeks, while behavioral modifications show gradual improvement with consistent practice.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Can children develop computer vision syndrome?</h3>
                      <p className="text-gray-700">Yes, children are increasingly affected by CVS due to educational technology and recreational screen time. Their developing visual systems are particularly susceptible, making early intervention and screen time limits especially important.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">Is computer vision syndrome permanent?</h3>
                      <p className="text-gray-700">CVS symptoms are typically reversible with proper treatment and lifestyle modifications. However, continued poor digital habits can lead to persistent symptoms and potentially worsen underlying vision problems.</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">What's the ideal screen distance for computer work?</h3>
                      <p className="text-gray-700">The optimal viewing distance is 20-26 inches (arm's length) with the top of the screen at or slightly below eye level. This reduces accommodation stress and promotes better posture for extended computer use.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Self-Assessment */}
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-blue-800">CVS Self-Assessment</h3>
                  <p className="text-blue-700 font-semibold mb-4">Do you experience these symptoms after 2+ hours of screen time?</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Eye strain or fatigue</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Headaches during or after screen use</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Blurred or double vision</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Dry or watery eyes</span>
                    </li>
                    <li className="flex items-start">
                      <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">Neck or shoulder pain</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <AppointmentRequestDialog>
                      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-md transition-colors font-medium">
                        Schedule CVS Evaluation
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
                        to="/conditions/binocular-vision/convergence-insufficiency"
                        className="text-eyecare-blue hover:text-eyecare-dark-blue flex items-center"
                      >
                        Convergence Insufficiency
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </li>
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
                        to="/conditions/refractive-errors/presbyopia"
                        className="text-eyecare-blue hover:text-eyecare-dark-blue flex items-center"
                      >
                        Presbyopia
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/conditions/headaches/headache-eye-fatigue"
                        className="text-eyecare-blue hover:text-eyecare-dark-blue flex items-center"
                      >
                        Headache & Eye Fatigue
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* CTA Card */}
                <div className="bg-eyecare-lighter-blue rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Digital Comfort Solutions</h3>
                  <p className="text-gray-700 mb-4">
                    Stop letting computer vision syndrome impact your productivity and comfort. Our specialized treatments provide lasting relief for digital eye strain.
                  </p>
                  <AppointmentRequestDialog>
                    <button className="w-full bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-4 py-3 rounded-md transition-colors font-medium">
                      Get CVS Treatment
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

export default ComputerVisionSyndromePage;