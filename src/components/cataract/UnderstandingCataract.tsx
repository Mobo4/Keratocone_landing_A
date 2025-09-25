
import React from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTranslation } from 'react-i18next';

const UnderstandingCataract = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  
  // Safe translation handling for title parts
  const mainTitle = t('cataract.understanding.title', 'Understanding');
  const highlightTitle = t('cataract.understanding.highlight', 'Cataracts');
  
  return (
    <section className="py-16 bg-gradient-to-r from-white to-amber-50/20 relative overflow-hidden">
      <AnimatedBackground colorScheme="purple" numberOfCircles={10} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">
              {mainTitle} <span className="text-eyecare-blue">{highlightTitle}</span>
            </h2>
            <p className="text-gray-700 mb-4">
              A cataract is a clouding of the normally clear lens of your eye. For people who have cataracts, seeing through cloudy lenses is a bit like looking through a frosty or fogged-up window. Clouded vision caused by cataracts can make it more difficult to read, drive a car or see the expression on a friend's face.
            </p>
            <p className="text-gray-700 mb-4">
              Most cataracts develop slowly and don't disturb your eyesight early on. But with time, cataracts will eventually interfere with your vision. At first, stronger lighting and eyeglasses can help you deal with cataracts. But if impaired vision interferes with your usual activities, you might need cataract surgery.
            </p>
            <p className="text-gray-700">
              Fortunately, cataract surgery is generally a safe, effective procedure. During surgery, the cloudy lens is removed and replaced with a clear artificial lens called an intraocular lens (IOL). Most people experience dramatically improved vision after cataract surgery.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-amber-100 rounded-full opacity-50 z-0 animate-pulse"></div>
              <img src="/lovable-uploads/3f6b71df-0758-438f-aa02-4b9e50e90049.png" alt="Cataract Eye Illustration" className="rounded-lg shadow-lg w-full h-auto hover:scale-[1.02] transition-transform duration-500 relative z-10" />
              <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-amber-100 rounded-full opacity-50 z-0 animate-pulse" style={{animationDelay: '1s'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnderstandingCataract;
