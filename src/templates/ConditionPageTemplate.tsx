import React from 'react';
import PageLayout from '@/components/layouts/PageLayout';
import { Card } from '@/components/ui/card';
import { Shield, AlertCircle, Phone, Calendar, CheckCircle2, Activity, Eye, Clock, Heart, Stethoscope, Info, ChevronRight, Microscope, Zap, Users, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { generateMedicalConditionSchema } from '@/utils/schemaMarkupGenerator';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';

interface ConditionPageTemplateProps {
  // SEO & Meta Data
  title: string;
  metaDescription: string;
  keywords: string;
  canonicalUrl: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroImage?: string;
  
  // Condition Details
  conditionName: string;
  alternateNames?: string[];
  description: string;
  detailedDescription?: string;
  
  // Medical Information
  symptoms: string[];
  causes?: string[];
  riskFactors?: string[];
  complications?: string[];
  
  // Treatment Information
  treatments: Array<{
    name: string;
    description: string;
    effectiveness: string;
    icon: React.ReactNode;
  }>;
  
  // Prevention & Management
  preventionTips?: Array<{
    tip: string;
    detail: string;
  }>;
  
  // When to seek care
  whenToSeekCare: string[];
  emergencySigns?: string[];
  
  // Related conditions
  relatedConditions?: Array<{
    name: string;
    url: string;
  }>;
  
  // Advanced treatments offered
  advancedTreatments?: string[];
  
  // Patient testimonial
  testimonial?: {
    quote: string;
    author: string;
    location: string;
  };
  
  // Comparison data (optional)
  comparisonData?: Array<{
    aspect: string;
    values: { [key: string]: string };
  }>;
  
  // Anatomical structure for schema
  anatomicalStructure: string;
}

const ConditionPageTemplate: React.FC<ConditionPageTemplateProps> = ({
  title,
  metaDescription,
  keywords,
  canonicalUrl,
  heroTitle,
  heroSubtitle,
  heroImage = "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  conditionName,
  alternateNames = [],
  description,
  detailedDescription,
  symptoms,
  causes = [],
  riskFactors = [],
  complications = [],
  treatments,
  preventionTips = [],
  whenToSeekCare,
  emergencySigns = [],
  relatedConditions = [],
  advancedTreatments = [],
  testimonial,
  comparisonData = [],
  anatomicalStructure
}) => {
  // Generate structured data for enhanced SEO
  const structuredData = generateMedicalConditionSchema({
    name: conditionName,
    alternateName: alternateNames,
    description: description,
    anatomicalStructure: anatomicalStructure,
    symptoms: symptoms,
    causes: causes,
    riskFactors: riskFactors,
    treatments: treatments.map(treatment => ({
      name: treatment.name,
      description: treatment.description,
      type: 'MedicalTherapy' as const // Most treatments are therapy-based
    })),
    complications: complications,
    prevention: preventionTips?.map(tip => tip.tip),
    url: canonicalUrl
  });

  return (
    <PageLayout
      seo={{
        title: title,
        description: metaDescription,
        keywords: keywords,
        canonicalUrl: canonicalUrl,
        ogType: "article",
        ogImage: heroImage || "https://eyecarecenteroc.com/images/conditions/default.jpg",
        structuredData: structuredData
      }}
    >
      <SEO 
        title={title}
        description={metaDescription}
        keywords={keywords}
        canonicalUrl={canonicalUrl}
        ogType="article"
        structuredData={structuredData}
        pageType="treatment"
      />

      {/* Hero Section */}
      <Hero 
        title={heroTitle}
        subtitle={heroSubtitle}
        backgroundImage={heroImage}
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        
        {/* Introduction */}
        <Card className="p-8 shadow-lg">
          <h1 className="text-3xl font-bold mb-6">Understanding {conditionName}</h1>
          <div className="prose prose-gray max-w-none space-y-4">
            <p className="text-lg leading-relaxed">
              {description}
            </p>
            {detailedDescription && (
              <p className="text-lg leading-relaxed">
                {detailedDescription}
              </p>
            )}
          </div>
        </Card>

        {/* Comparison Table (if provided) */}
        {comparisonData.length > 0 && (
          <Card className="p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Microscope className="mr-3 text-primary" />
              Condition Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Characteristic
                    </th>
                    {Object.keys(comparisonData[0]?.values || {}).map((key) => (
                      <th key={key} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {comparisonData.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {item.aspect}
                      </td>
                      {Object.values(item.values).map((value, i) => (
                        <td key={i} className="px-6 py-4 text-sm text-gray-700">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {/* Symptoms */}
        <Card className="p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Eye className="mr-3 text-primary" />
            Signs and Symptoms
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {symptoms.map((symptom, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{symptom}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Causes (if provided) */}
        {causes.length > 0 && (
          <Card className="p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Target className="mr-3 text-primary" />
              Causes
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {causes.map((cause, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{cause}</span>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Treatment Options */}
        <Card className="p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Treatment Options</h2>
          <div className="space-y-6">
            {treatments.map((treatment, index) => (
              <div key={index} className="border-l-4 border-primary pl-6">
                <div className="flex items-start space-x-3">
                  {treatment.icon}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{treatment.name}</h3>
                    <p className="text-gray-700 mb-2">{treatment.description}</p>
                    <p className="text-sm text-gray-600 italic">{treatment.effectiveness}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Risk Factors (if provided) */}
        {riskFactors.length > 0 && (
          <Card className="p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <AlertCircle className="mr-3 text-primary" />
              Risk Factors
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {riskFactors.map((factor, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <ChevronRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{factor}</span>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Prevention Tips (if provided) */}
        {preventionTips.length > 0 && (
          <Card className="p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Shield className="mr-3 text-primary" />
              Prevention Strategies
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {preventionTips.map((item, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">{item.tip}</h3>
                  <p className="text-gray-600 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* When to Seek Care */}
        <Card className="p-8 shadow-lg border-2 border-red-100">
          <h2 className="text-3xl font-bold mb-6 flex items-center text-red-700">
            <Phone className="mr-3" />
            When to Seek Professional Care
          </h2>
          <div className="space-y-4">
            {whenToSeekCare.map((reason, index) => (
              <div key={index} className="flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{reason}</span>
              </div>
            ))}
          </div>
          {emergencySigns.length > 0 && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-900 font-semibold">
                Emergency Care Needed If:
              </p>
              <ul className="mt-2 space-y-1 text-red-800">
                {emergencySigns.map((sign, index) => (
                  <li key={index}>• {sign}</li>
                ))}
              </ul>
            </div>
          )}
        </Card>

        {/* Advanced Treatment Info */}
        <Card className="p-8 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <Stethoscope className="mr-3 text-primary" />
            Advanced Treatment at Eye Care Center OC
          </h2>
          <div className="space-y-4">
            <p className="text-lg">
              At Eye Care Center OC, we offer comprehensive treatment for {conditionName.toLowerCase()}, including:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span><strong>Same-day evaluation</strong> for urgent eye conditions</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span><strong>Advanced diagnostic imaging</strong> for accurate diagnosis</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span><strong>State-of-the-art treatments</strong> including the latest therapies</span>
              </li>
              {advancedTreatments.map((treatment, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                  <span><strong>{treatment}</strong></span>
                </li>
              ))}
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                <span><strong>Comprehensive follow-up care</strong> to ensure optimal outcomes</span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Patient Testimonial (if provided) */}
        {testimonial && (
          <Card className="p-8 shadow-lg bg-gray-50">
            <div className="flex items-start space-x-4">
              <Info className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Patient Success Story</h3>
                <p className="text-gray-700 italic">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm text-gray-600 mt-2">- {testimonial.author}, {testimonial.location}</p>
              </div>
            </div>
          </Card>
        )}

        {/* CTA Section */}
        <div className="mt-12">
          <CTASection />
        </div>

        {/* Related Conditions */}
        {relatedConditions.length > 0 && (
          <Card className="p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Related Conditions</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {relatedConditions.map((condition, index) => (
                <Link key={index} to={condition.url} className="text-primary hover:underline flex items-center">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  {condition.name}
                </Link>
              ))}
            </div>
          </Card>
        )}
      </div>
    </PageLayout>
  );
};

export default ConditionPageTemplate;