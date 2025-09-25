
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Microscope, Scan, Eye } from 'lucide-react';

const CataractDiagnostics = () => {
  const { t } = useTranslation();

  const diagnostics = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Comprehensive Eye Exam",
      description: "Detailed evaluation of your overall eye health and vision."
    },
    {
      icon: <Scan className="h-6 w-6" />,
      title: "IOL Master Measurements",
      description: "Precise measurements to determine the perfect lens power for your eyes."
    },
    {
      icon: <Microscope className="h-6 w-6" />,
      title: "Corneal Topography",
      description: "Advanced mapping of your cornea's surface for optimal surgical planning."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('cataract.diagnostics.title')} <span className="text-eyecare-blue">{t('cataract.diagnostics.highlight')}</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t('cataract.diagnostics.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {diagnostics.map((diagnostic, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-blue-600">
                  {diagnostic.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-3">{diagnostic.title}</h3>
              <p className="text-gray-600">{diagnostic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CataractDiagnostics;
