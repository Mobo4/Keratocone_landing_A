import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTranslation } from 'react-i18next';
import { 
  AlignStartVertical, 
  EyeIcon, 
  Microscope, 
  Droplet, 
  FlaskConical, 
  TestTube, 
  Gauge,
  Stethoscope,
  Scan,
  Layers,
  Thermometer,
  Clipboard,
  Calendar,
  Clock
} from 'lucide-react';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';

const DiagnosticProcess = () => {
  const isMobile = useIsMobile();
  const { t, i18n } = useTranslation();
  
  // Default data in English
  const defaultTests = [
    {
      name: "Comprehensive Eye Examination",
      description: "Our evaluation begins with a complete eye examination to understand your overall eye health and assess any underlying conditions that may contribute to dry eye symptoms.",
      icon: <EyeIcon className="h-8 w-8 text-eyecare-blue" />
    },
    {
      name: "Meibomian Gland Imaging",
      description: "Advanced imaging technology allows us to examine the structure and function of your meibomian glands, identifying any dysfunction, blockages, or atrophy that may be contributing to your dry eye symptoms.",
      icon: <Scan className="h-8 w-8 text-eyecare-blue" />
    },
    {
      name: "Tear Film Analysis",
      description: "We use specialized equipment to evaluate tear quality, quantity, and evaporation rate to determine the specific type of dry eye you're experiencing and tailor treatment accordingly.",
      icon: <Droplet className="h-8 w-8 text-eyecare-blue" />
    },
    {
      name: "MMP9 InflammaDry",
      description: "This biomarker test helps identify inflammation markers in your tears that may be contributing to dry eye symptoms, allowing us to target treatments specifically to reduce inflammation.",
      icon: <TestTube className="h-8 w-8 text-eyecare-blue" />
    },
    {
      name: "Osmolarity Testing",
      description: "Measures the salt concentration in your tears which can indicate dry eye disease when elevated. This objective measurement helps track your progress during treatment.",
      icon: <FlaskConical className="h-8 w-8 text-eyecare-blue" />
    },
    {
      name: "Tear Meniscus Testing",
      description: "Evaluates the height of the tear film pool along the lower eyelid to assess tear volume. Lower than normal measurements indicate inadequate tear production.",
      icon: <AlignStartVertical className="h-8 w-8 text-eyecare-blue" />
    },
    {
      name: "Tear Break-up Time Testing",
      description: "Determines how quickly your tear film becomes unstable or breaks up on your eye surface, providing critical information about tear film stability and evaporation rate.",
      icon: <Gauge className="h-8 w-8 text-eyecare-blue" />
    },
    {
      name: "Evaluation for SPK and Demodex",
      description: "We check for superficial punctate keratitis (SPK) which indicates corneal damage and examine for demodex blepharitis (eyelash mites) that can significantly contribute to dry eye symptoms.",
      icon: <Microscope className="h-8 w-8 text-eyecare-blue" />
    },
    {
      name: "TearLab Assessment",
      description: "Advanced tear analysis using TearLab technology provides precise measurements of tear osmolarity, helping us determine the severity of your dry eye condition.",
      icon: <Layers className="h-8 w-8 text-eyecare-blue" />
    },
    {
      name: "Meibography",
      description: "Specialized imaging of the meibomian glands helps us visualize their structure and function, identifying any areas of dropout or blockage that require targeted treatment.",
      icon: <Thermometer className="h-8 w-8 text-eyecare-blue" />
    },
    {
      name: "Schirmer Test",
      description: "This classic diagnostic test measures tear production by placing small strips of filter paper under your lower eyelids to determine if you produce enough tears.",
      icon: <Clipboard className="h-8 w-8 text-eyecare-blue" />
    },
    {
      name: "Anterior Segment OCT",
      description: "This advanced imaging technique provides cross-sectional images of the eye's surface tissues and tear film, helping us assess corneal health and tear film structure.",
      icon: <Stethoscope className="h-8 w-8 text-eyecare-blue" />
    }
  ];
  
  const defaultTestimonials = [
    {
      quote: "After struggling with dry eyes for years and trying countless over-the-counter remedies, the comprehensive testing at Eye Care Center of OC finally pinpointed my specific problem. Now with targeted treatment, I'm experiencing relief I didn't think was possible!",
      author: "Jennifer R."
    },
    {
      quote: "The diagnostic process was thorough and educational. Dr. Bonakdar took the time to explain each test and what the results meant for my treatment plan. For the first time, I understand my condition and feel hopeful about managing it.",
      author: "Michael T."
    },
    {
      quote: "I was impressed by how advanced the testing equipment was. They didn't just tell me I had dry eyes like my previous doctor – they showed me exactly what was happening with my tear film and meibomian glands, then created a personalized treatment plan.",
      author: "Sarah L."
    },
    {
      quote: "The level of detail in their diagnostic process was remarkable. Each test built on the previous one to create a complete picture of my condition. It's no wonder their treatments are so effective!",
      author: "David K."
    }
  ];

  const defaultProcessSteps = [
    {
      title: "Initial Consultation",
      description: "Your journey begins with a comprehensive discussion about your symptoms, medical history, and previous treatments. We take the time to understand how dry eye is affecting your daily life.",
      icon: <Calendar className="h-8 w-8 text-eyecare-blue" />
    },
    {
      title: "Diagnostic Testing",
      description: "Using our state-of-the-art equipment, we conduct a series of specialized tests to evaluate all aspects of your tear production, quality, and ocular surface health.",
      icon: <Clipboard className="h-8 w-8 text-eyecare-blue" />
    },
    {
      title: "Treatment Planning",
      description: "Based on your diagnostic results, we create a personalized treatment plan targeting the specific causes of your dry eye symptoms, explaining each recommendation in detail.",
      icon: <TestTube className="h-8 w-8 text-eyecare-blue" />
    },
    {
      title: "Follow-up Care",
      description: "Regular follow-up appointments allow us to monitor your progress, make any necessary adjustments to your treatment plan, and ensure you're experiencing symptom relief.",
      icon: <Clock className="h-8 w-8 text-eyecare-blue" />
    }
  ];
  
  // Get translations with fallbacks
  const testsTranslation = t('dryEye.diagnostics.tests', { returnObjects: true });
  const testimonialsTranslation = t('dryEye.diagnostics.testimonials', { returnObjects: true });
  const processStepsTranslation = t('dryEye.diagnostics.processSteps', { returnObjects: true });
  
  const diagnosticTests = Array.isArray(testsTranslation) && testsTranslation.length > 0
    ? testsTranslation
    : defaultTests;
    
  const testimonials = Array.isArray(testimonialsTranslation) && testimonialsTranslation.length > 0
    ? testimonialsTranslation
    : defaultTestimonials;
    
  const processSteps = Array.isArray(processStepsTranslation) && processStepsTranslation.length > 0
    ? processStepsTranslation
    : defaultProcessSteps;

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-white relative overflow-hidden">
      <AnimatedBackground colorScheme="purple" numberOfCircles={10} />
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Section Title with Decorative Elements */}
        <div className="text-center mb-12 relative">
          <div className="absolute -top-10 -left-10 w-20 h-20 border-2 border-eyecare-blue rounded-full opacity-10 hidden md:block"></div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative inline-block">
            <span className="text-eyecare-blue">{t('dryEye.diagnostics.titleHighlight', 'Advanced')}</span> {t('dryEye.diagnostics.titleRest', 'Dry Eye Diagnosis')}
            <div className="h-1 w-32 bg-eyecare-blue mx-auto mt-3"></div>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl mb-2">
            {t('dryEye.diagnostics.subtitle', 'Our advanced diagnostic approach allows us to precisely identify the cause and severity of your dry eye condition.')}
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto">
            {t('dryEye.diagnostics.description', 'No more generic treatments. Our comprehensive testing reveals the exact factors contributing to your dry eye symptoms, allowing for truly personalized care.')}
          </p>
          <div className="absolute top-20 -right-10 w-16 h-16 bg-eyecare-light-purple rounded-full opacity-20 hidden md:block"></div>
        </div>
        
        {/* What to Expect Section - Enhanced and Expanded */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center bg-gradient-to-r from-eyecare-blue to-eyecare-dark-blue text-white py-4 rounded-lg shadow-lg">
            {t('dryEye.diagnostics.whatToExpectTitle', 'What to Expect During Your Comprehensive Evaluation')}
          </h3>
          
          {/* Introduction to the diagnostic process */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-12 border-l-4 border-eyecare-blue">
            <h4 className="text-xl font-semibold mb-4 text-eyecare-blue">{t('dryEye.diagnostics.pathToReliefTitle', 'Your Path to Dry Eye Relief')}</h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('dryEye.diagnostics.pathToReliefDescription', 'At Eye Care Center of OC, we believe that accurate diagnosis is the foundation of effective dry eye treatment. Our state-of-the-art diagnostic process combines the latest technology with clinical expertise to identify the specific factors contributing to your dry eye symptoms.')}
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              During your evaluation, Dr. Bonakdar will conduct a series of specialized tests designed to evaluate 
              all aspects of your tear production, tear quality, and ocular surface health. This comprehensive approach 
              allows us to develop a customized treatment plan targeted to your specific needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Understanding the exact cause of your dry eye is crucial for effective treatment. Our diagnostic process 
              goes beyond simply confirming that you have dry eye syndrome—it reveals WHY you have it and WHAT specific 
              treatments will be most effective for your unique situation.
            </p>
          </div>
          
          {/* Process Steps */}
          <div className="mb-16">
            <h4 className="text-xl md:text-2xl font-semibold mb-8 text-center">
              <span className="bg-eyecare-lighter-blue text-eyecare-blue px-6 py-2 rounded-full inline-block">
                {t('dryEye.diagnostics.processTitle', 'Our Diagnostic Journey')}
              </span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-eyecare-blue flex flex-col items-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-eyecare-lighter-blue rounded-full mb-4">
                    {step.icon || <Calendar className="h-8 w-8 text-eyecare-blue" />}
                  </div>
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full bg-eyecare-blue text-white flex items-center justify-center font-bold mr-2">
                      {index + 1}
                    </div>
                    <h5 className="font-semibold text-lg text-eyecare-blue">{step.title}</h5>
                  </div>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced Diagnostic Tests Section */}
          <div className="mb-16">
            <h4 className="text-xl md:text-2xl font-semibold mb-8 text-center">
              <span className="bg-eyecare-lighter-blue text-eyecare-blue px-6 py-2 rounded-full inline-block">
                {t('dryEye.diagnostics.testsTitle', 'Our Comprehensive Testing Suite')}
              </span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {diagnosticTests.map((test, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-eyecare-blue transform hover:-translate-y-1"
                >
                  <div className="flex flex-col items-center mb-4">
                    {test.icon || getIconForTest(index)}
                    <h4 className="font-semibold text-lg mt-3 mb-2 text-center text-eyecare-blue">{test.name}</h4>
                  </div>
                  <p className="text-gray-600 text-center">{test.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Patient Testimonials - Enhanced Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            <span className="bg-eyecare-lighter-blue text-eyecare-blue px-6 py-2 rounded-full inline-block">
              {t('dryEye.diagnostics.testimonialTitle', 'Patient Experiences')}
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-eyecare-blue relative"
              >
                <div className="absolute -top-3 -left-3 bg-eyecare-blue text-white w-8 h-8 flex items-center justify-center rounded-full">
                  "
                </div>
                <p className="italic text-gray-600 mb-4">"{item.quote}"</p>
                <p className="font-medium text-right text-eyecare-blue">- {item.author}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="mt-16 text-center bg-eyecare-lighter-blue p-8 rounded-lg shadow-md">
          <h4 className="text-2xl font-bold mb-4 text-eyecare-blue">Ready to Experience Advanced Dry Eye Care?</h4>
          <p className="text-lg mb-6">Take the first step toward lasting relief with our comprehensive diagnostic process.</p>
          <AppointmentRequestDialog>
            <button className="inline-block bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-4 rounded-md transition-all duration-300 text-lg font-medium hover:scale-105 transform shadow-lg">
              Schedule Your Comprehensive Evaluation
            </button>
          </AppointmentRequestDialog>
        </div>
      </div>
    </section>
  );
};

// Helper function for backward compatibility
const getIconForTest = (index: number) => {
  const icons = [
    <EyeIcon className="h-8 w-8 text-eyecare-blue" />,
    <Droplet className="h-8 w-8 text-eyecare-blue" />,
    <TestTube className="h-8 w-8 text-eyecare-blue" />,
    <FlaskConical className="h-8 w-8 text-eyecare-blue" />,
    <AlignStartVertical className="h-8 w-8 text-eyecare-blue" />,
    <Gauge className="h-8 w-8 text-eyecare-blue" />,
    <Microscope className="h-8 w-8 text-eyecare-blue" />
  ];
  
  return icons[index % icons.length];
};

export default DiagnosticProcess;
