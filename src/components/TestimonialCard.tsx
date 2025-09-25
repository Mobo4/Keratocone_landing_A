import React from 'react';
import { useTranslation } from 'react-i18next';

interface TestimonialCardProps {
  quote?: string;
  text?: string;
  name?: string;
  author?: string;
  date?: string;
  location?: string;
  rating?: number;
  imageSrc?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, text, name, author, date, location, rating = 5, imageSrc }) => {
  const { t } = useTranslation();

  const displayName = name || author || t('testimonials.anonymous', 'Patient');
  const displayQuote = quote || text || '';
  const displayDate = date || '';
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-5 h-5 ${i < (rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
          </svg>
        ))}
      </div>
      {imageSrc && (
        <div className="flex justify-center mb-4">
          <img 
            src={imageSrc} 
            alt={`${displayName} ${t('testimonials.profileImage')}`} 
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>
      )}
      <div className="text-gray-700 italic mb-4">"{displayQuote}"</div>
      <div className="flex justify-between items-center">
        <div>
          <div className="font-medium text-eyecare-blue">{displayName}</div>
          {location && <div className="text-sm text-gray-600">{location}</div>}
        </div>
        {displayDate && <div className="text-sm text-gray-500">{displayDate}</div>}
      </div>
    </div>
  );
};

export default TestimonialCard;
