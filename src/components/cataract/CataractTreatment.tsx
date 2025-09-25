
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Eye, Clock, Shield } from 'lucide-react';

const CataractTreatment = () => {
  const { t } = useTranslation();

  const treatments = [
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Advanced Surgical Techniques",
      description: "State-of-the-art phacoemulsification surgery with precision and minimal invasion."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Quick Recovery",
      description: "Most patients experience improved vision within days of the procedure."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Safe & Proven",
      description: "Cataract surgery is one of the most successful procedures in medicine."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('cataract.treatment.title')} <span className="text-eyecare-blue">{t('cataract.treatment.highlight')}</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            {t('cataract.treatment.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((treatment, index) => (
            <div key={index} className="text-center p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-blue-600">
                  {treatment.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{treatment.title}</h3>
              <p className="text-gray-600">{treatment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CataractTreatment;
