
import React from 'react';
import SEO from '@/components/SEO';

const NonLocalPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <SEO 
        title="Eye Care Services - General Information"
        description="General eye care information and resources. Find qualified eye care professionals in your area."
        keywords="eye care, optometry, vision care, eye doctor, eye exam"
        canonicalUrl="https://eyecare-general.com/"
      />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Eye Care Information Center
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your vision is important. Find qualified eye care professionals in your area.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Regular Eye Exams</h3>
              <p className="text-gray-600">
                Schedule comprehensive eye exams to maintain optimal eye health and catch issues early.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Vision Correction</h3>
              <p className="text-gray-600">
                Explore options for correcting vision problems including glasses, contacts, and surgery.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Eye Health Tips</h3>
              <p className="text-gray-600">
                Learn about protecting your eyes from strain, UV damage, and age-related conditions.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Find an Eye Care Professional</h2>
            <p className="text-gray-600 mb-6">
              Use these resources to locate qualified eye care professionals in your area:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a 
                href="https://www.aoa.org/doctor-locator" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                American Optometric Association
              </a>
              <a 
                href="https://www.aao.org/find-an-ophthalmologist" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                American Academy of Ophthalmology
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonLocalPage;
