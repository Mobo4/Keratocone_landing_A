
import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode | string;
  link?: string;
  highlighted?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 hover:border-eyecare-lighter-blue group animate-fade-in">
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-eyecare-lighter-blue text-eyecare-blue mb-4 group-hover:scale-110 transition-transform duration-300">
        {typeof icon === 'string' ? <span aria-hidden="true">★</span> : icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-eyecare-blue transition-colors">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      {link && (
        <Link 
          to={link} 
          className="flex items-center text-eyecare-blue hover:text-eyecare-dark-blue font-medium group"
        >
          <span className="story-link">{t('common.learnMore')}</span>
          <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;
