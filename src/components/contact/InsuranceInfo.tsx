
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useIsMobile } from '@/hooks/use-mobile';
import { CreditCard, FileText, DollarSign, HelpCircle, Shield, Wallet, Building2, Heart } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const InsuranceInfo = () => {
  const isMobile = useIsMobile();
  
  const insuranceProviders = [
    "VSP (Vision Service Plan)",
    "EyeMed",
    "Davis Vision",
    "Spectera",
    "Medicare",
    "Blue Cross Blue Shield",
    "Aetna",
    "United Healthcare",
    "Cigna",
    "Humana"
  ];
  
  const faqs = [
    {
      question: "What if my insurance isn't listed?",
      answer: "We accept many other insurance plans not listed here. Please contact our office to verify your specific coverage."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment options and financing plans for procedures that aren't fully covered by insurance."
    },
    {
      question: "Are premium procedures covered by insurance?",
      answer: "Basic cataract surgery is typically covered, but premium options like multifocal lenses usually involve out-of-pocket costs. LASIK is considered elective and not typically covered by insurance."
    },
    {
      question: "What about FSA and HSA accounts?",
      answer: "Most of our services qualify for Flexible Spending Account (FSA) and Health Savings Account (HSA) reimbursement."
    }
  ];

  return (
    <div className="space-y-8">
      {/* Payment Methods Cards */}
      <div>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-eyecare-blue">Payment</span> & Insurance Options
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Multiple convenient payment options to make your eye care affordable and accessible
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Insurance Coverage</h3>
            <p className="text-gray-600">
              We file claims with most major vision and medical insurance plans
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm text-green-600 font-medium">Direct Billing Available</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Wallet className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Self-Pay Options</h3>
            <p className="text-gray-600">
              Cash, credit cards, and personal checks accepted
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm text-blue-600 font-medium">Flexible Payment Plans</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Healthcare Financing</h3>
            <p className="text-gray-600">
              CareCredit® and other financing options available
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm text-purple-600 font-medium">0% Interest Plans Available</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-gray-900 mb-3 text-lg">FSA & HSA</h3>
            <p className="text-gray-600">
              Flexible Spending Account and Health Savings Account cards accepted
            </p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-sm text-orange-600 font-medium">Tax-Free Benefits</p>
            </div>
          </div>
        </div>
      </div>

      {/* Insurance Plans Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center">
            <FileText className="w-6 h-6 text-eyecare-blue mr-3" />
            Accepted Insurance Plans
          </h3>
          <p className="text-gray-600">We work with most major insurance providers to maximize your benefits</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          {insuranceProviders.map((provider, index) => (
            <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="w-3 h-3 rounded-full bg-eyecare-blue mr-3 flex-shrink-0"></div>
              <span className="text-gray-700 text-sm font-medium">{provider}</span>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-to-r from-eyecare-blue/10 to-eyecare-light-purple/10 p-4 rounded-lg border border-eyecare-blue/20">
          <p className="text-sm text-gray-600 text-center">
            <strong>Don't see your plan listed?</strong> This list is not comprehensive. Please call our office to verify your specific plan coverage.
          </p>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <HelpCircle className="w-5 h-5 text-eyecare-blue mr-2" />
            Frequently Asked Questions
          </h4>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100">
                <AccordionTrigger className="text-left font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default InsuranceInfo;
