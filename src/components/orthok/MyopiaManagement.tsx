
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const MyopiaManagement = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Myopia Management</h2>
          <p className="text-lg text-gray-700">
            Myopia (nearsightedness) is increasing globally at an alarming rate, especially in children. Our comprehensive myopia management program helps slow its progression.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src="/images/treatments/myopia-management.jpg" 
                  alt="Child receiving myopia management care" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800";
                    console.error("Original image source failed, using placeholder");
                  }}
                />
              </div>
            </CardContent>
          </Card>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Why Myopia Control Matters</h3>
            <p className="mb-4 text-gray-700">
              Myopia isn't just about needing stronger glasses. Higher levels of myopia increase the risk of serious eye conditions later in life, including:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-1">
                  <span className="text-eyecare-blue font-bold">•</span>
                </div>
                <span>Retinal detachment</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-1">
                  <span className="text-eyecare-blue font-bold">•</span>
                </div>
                <span>Glaucoma</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-1">
                  <span className="text-eyecare-blue font-bold">•</span>
                </div>
                <span>Myopic maculopathy</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-1">
                  <span className="text-eyecare-blue font-bold">•</span>
                </div>
                <span>Early cataracts</span>
              </li>
            </ul>
            <p className="text-gray-700">
              Our comprehensive myopia management program combines Ortho-K with lifestyle modifications and regular monitoring to effectively slow myopia progression and protect long-term eye health.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-4 text-center">Our Myopia Management Approach</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4 text-eyecare-blue">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-2 text-center">Comprehensive Assessment</h4>
              <p className="text-gray-700 text-left">
                Detailed eye exams, corneal mapping, and assessment of risk factors to create a personalized treatment plan.
              </p>
            </div>

            <div className="p-4">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4 text-eyecare-blue">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-2 text-center">Regular Monitoring</h4>
              <p className="text-gray-700 text-left">
                Frequent check-ups to track progression and make necessary adjustments to your treatment plan.
              </p>
            </div>

            <div className="p-4">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4 text-eyecare-blue">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold mb-2 text-center">Multi-Faceted Approach</h4>
              <p className="text-gray-700 text-left">
                Combining Ortho-K with lifestyle recommendations, including increased outdoor time and proper reading habits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyopiaManagement;
