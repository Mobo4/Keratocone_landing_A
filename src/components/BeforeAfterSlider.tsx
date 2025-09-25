
import React from 'react';

interface BeforeAfterSliderProps {
  image: string;
  beforeLabel?: string;
  afterLabel?: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  image,
  beforeLabel = 'Before',
  afterLabel = 'After'
}) => {
  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <img src={image} alt="Treatment comparison" className="w-full h-[300px] sm:h-[400px] object-cover" />
        
        {/* Before Label - Left Side */}
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded">
          {beforeLabel}
        </div>
        
        {/* After Label - Right Side */}
        <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded">
          {afterLabel}
        </div>
        
        {/* Divider Line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white bg-opacity-70"></div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
