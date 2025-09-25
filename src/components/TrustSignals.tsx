import React from 'react';
import { useTranslation } from 'react-i18next';

interface TrustSignalsProps {
  variant?: 'horizontal' | 'vertical';
  className?: string;
}

const TrustSignals: React.FC<TrustSignalsProps> = ({ variant = 'horizontal', className = '' }) => {
  const { t } = useTranslation();

  const trustItems = [
    {
      icon: '🏆',
      title: '30+ Years Experience',
      subtitle: 'Trusted expertise'
    },
    {
      icon: '👥',
      title: '10,000+ Patients Helped',
      subtitle: 'Proven results'
    },
    {
      icon: '🏥',
      title: 'Most Insurance Accepted',
      subtitle: 'VSP, EyeMed & more'
    }
  ];

  const layoutClasses = variant === 'horizontal' 
    ? 'grid grid-cols-1 sm:grid-cols-3 gap-6' 
    : 'space-y-4';

  return (
    <div className={`${className}`}>
      <div className={layoutClasses}>
        {trustItems.map((item, index) => (
          <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border">
            <div className="text-3xl mb-2">{item.icon}</div>
            <h3 className="font-bold text-lg text-eyecare-blue mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustSignals;