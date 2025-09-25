import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, AlertCircle, Heart, Activity, Eye, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';
import { useCallRailPhone } from '@/hooks/useCallRailPhone';

export interface ConditionPageProps {
  condition: {
    name: string;
    slug: string;
    category: string;
    categorySlug: string;
    description: string;
    symptoms: string[];
    causes: string[];
    diagnosis: string[];
    treatments: string[];
    prevention?: string[];
    whenToSeeDr: string[];
    complications?: string[];
    relatedConditions?: { name: string; slug: string }[];
    faqs?: { question: string; answer: string }[];
    references?: { title: string; source: string; link?: string }[];
  };
}

const ConditionPageTemplate: React.FC<ConditionPageProps> = ({ condition }) => {
  const { phoneNumber, phoneHref } = useCallRailPhone();

  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Eye Conditions', path: '/conditions' },
    { name: condition.category, path: `/conditions/${condition.categorySlug}` },
    { name: condition.name, path: `/conditions/${condition.categorySlug}/${condition.slug}` }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={`${condition.name} - Symptoms, Causes & Treatment | Eyecare Center OC`}
        description={`Learn about ${condition.name}: symptoms, causes, diagnosis, and treatment options. Expert eye care information from Dr. Bonakdar in Orange County.`}
        keywords={`${condition.name}, ${condition.name} symptoms, ${condition.name} treatment, ${condition.name} Orange County, eye condition ${condition.name}`}
        canonicalUrl={`https://eyecarecenteroc.com/conditions/${condition.categorySlug}/${condition.slug}`}
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
                <span className="font-medium">{condition.category}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {condition.name}
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                {condition.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <AppointmentRequestDialog>
                  <button className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-3 rounded-md transition-colors font-medium flex items-center">
                    Schedule Consultation <Calendar className="ml-2 h-5 w-5" />
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
                  Quick Facts About {condition.name}
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Common Symptoms:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {condition.symptoms.slice(0, 3).map((symptom, i) => (
                        <li key={i}>• {symptom}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-2">Main Causes:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {condition.causes.slice(0, 3).map((cause, i) => (
                        <li key={i}>• {cause}</li>
                      ))}
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
                {/* Symptoms Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <Heart className="h-8 w-8 mr-3 text-eyecare-blue" />
                    Symptoms & Signs
                  </h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-4">
                      Recognizing the symptoms of {condition.name} early can lead to better treatment outcomes.
                    </p>
                    <ul className="space-y-3">
                      {condition.symptoms.map((symptom, index) => (
                        <li key={index} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Causes Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <Activity className="h-8 w-8 mr-3 text-eyecare-blue" />
                    Causes & Risk Factors
                  </h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-4">
                      Understanding what causes {condition.name} can help in prevention and management.
                    </p>
                    <ul className="space-y-3">
                      {condition.causes.map((cause, index) => (
                        <li key={index} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{cause}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Diagnosis Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6 flex items-center">
                    <Eye className="h-8 w-8 mr-3 text-eyecare-blue" />
                    Diagnosis
                  </h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-4">
                      Our comprehensive eye examination includes several tests to accurately diagnose {condition.name}.
                    </p>
                    <ul className="space-y-3">
                      {condition.diagnosis.map((test, index) => (
                        <li key={index} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-eyecare-blue mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{test}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Treatment Section */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Treatment Options</h2>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <p className="text-gray-700 mb-4">
                      Treatment for {condition.name} varies based on severity and individual needs. Our personalized approach includes:
                    </p>
                    <div className="space-y-4">
                      {condition.treatments.map((treatment, index) => (
                        <div key={index} className="border-l-4 border-eyecare-blue pl-4">
                          <p className="text-gray-700">{treatment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Prevention Section */}
                {condition.prevention && condition.prevention.length > 0 && (
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Prevention</h2>
                    <div className="bg-green-50 rounded-lg p-6">
                      <ul className="space-y-3">
                        {condition.prevention.map((tip, index) => (
                          <li key={index} className="flex items-start">
                            <ArrowRight className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* FAQs Section */}
                {condition.faqs && condition.faqs.length > 0 && (
                  <div>
                    <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                      {condition.faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6">
                          <h3 className="font-semibold text-lg text-gray-900 mb-2">{faq.question}</h3>
                          <p className="text-gray-700">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* References Section */}
                {condition.references && condition.references.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">References</h2>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <ol className="text-sm text-gray-600 space-y-2">
                        {condition.references.map((ref, index) => (
                          <li key={index}>
                            {index + 1}. {ref.title}. {ref.source}.
                            {ref.link && (
                              <a href={ref.link} target="_blank" rel="noopener noreferrer" className="text-eyecare-blue hover:underline ml-1">
                                View source
                              </a>
                            )}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* When to See a Doctor */}
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-red-800">When to See a Doctor</h3>
                  <ul className="space-y-2">
                    {condition.whenToSeeDr.map((reason, index) => (
                      <li key={index} className="flex items-start">
                        <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{reason}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <AppointmentRequestDialog>
                      <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-md transition-colors font-medium">
                        Schedule Urgent Appointment
                      </button>
                    </AppointmentRequestDialog>
                  </div>
                </div>

                {/* Related Conditions */}
                {condition.relatedConditions && condition.relatedConditions.length > 0 && (
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-4">Related Conditions</h3>
                    <ul className="space-y-2">
                      {condition.relatedConditions.map((related, index) => (
                        <li key={index}>
                          <Link 
                            to={`/conditions/${condition.categorySlug}/${related.slug}`}
                            className="text-eyecare-blue hover:text-eyecare-dark-blue flex items-center"
                          >
                            {related.name}
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Card */}
                <div className="bg-eyecare-lighter-blue rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">Need Expert Care?</h3>
                  <p className="text-gray-700 mb-4">
                    Dr. Bonakdar specializes in treating {condition.name} with advanced diagnostic tools and personalized treatment plans.
                  </p>
                  <AppointmentRequestDialog>
                    <button className="w-full bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-4 py-3 rounded-md transition-colors font-medium">
                      Book Consultation
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

export default ConditionPageTemplate;