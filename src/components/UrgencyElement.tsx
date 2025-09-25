import React from 'react';

interface UrgencyElementProps {
  message?: string;
  className?: string;
}

const UrgencyElement: React.FC<UrgencyElementProps> = ({ 
  message = "Limited same-day appointments - Call now",
  className = ""
}) => {
  return (
    <div className={`bg-red-50 border border-red-200 rounded-lg p-3 ${className}`}>
      <div className="flex items-center justify-center gap-2">
        <span className="text-red-600">⚡</span>
        <p className="text-red-700 font-semibold text-sm md:text-base">
          {message}
        </p>
      </div>
    </div>
  );
};

export default UrgencyElement;