
import React from 'react';
import { useTranslation } from 'react-i18next';
import AnimatedBackground from '@/components/AnimatedBackground';

const PreventionTips = () => {
  const { t } = useTranslation();
  
  const tips = [
    {
      title: t('headache.prevention.tips.rule2020.title', 'The 20-20-20 Rule'),
      description: t('headache.prevention.tips.rule2020.description', 'Every 20 minutes, look at something 20 feet away for at least 20 seconds to reduce eye strain during extended screen time.'),
      icon: (
        <svg className="w-8 h-8 text-eyecare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: t('headache.prevention.tips.lighting.title', 'Proper Lighting'),
      description: t('headache.prevention.tips.lighting.description', 'Ensure your workspace has adequate, non-glare lighting that doesn\'t create reflections on your screen or cause you to squint.'),
      icon: (
        <svg className="w-8 h-8 text-eyecare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: t('headache.prevention.tips.ergonomic.title', 'Ergonomic Setup'),
      description: t('headache.prevention.tips.ergonomic.description', 'Position your screen about arm\'s length away and slightly below eye level. Use an ergonomic chair that supports good posture.'),
      icon: (
        <svg className="w-8 h-8 text-eyecare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: t('headache.prevention.tips.hydration.title', 'Stay Hydrated'),
      description: t('headache.prevention.tips.hydration.description', 'Drinking plenty of water helps maintain moisture in your eyes and can reduce symptoms of eye fatigue.'),
      icon: (
        <svg className="w-8 h-8 text-eyecare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: t('headache.prevention.tips.blinking.title', 'Regular Blinking'),
      description: t('headache.prevention.tips.blinking.description', 'Consciously remind yourself to blink regularly during screen time, as we tend to blink less when focusing on digital devices.'),
      icon: (
        <svg className="w-8 h-8 text-eyecare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: t('headache.prevention.tips.screenSettings.title', 'Screen Settings'),
      description: t('headache.prevention.tips.screenSettings.description', 'Adjust brightness, contrast, and text size on your devices to comfortable levels. Enable blue light filters, especially in the evening.'),
      icon: (
        <svg className="w-8 h-8 text-eyecare-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-white relative overflow-hidden">
      <AnimatedBackground colorScheme="blue" numberOfCircles={8} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('headache.prevention.title', 'Prevention')} <span className="text-eyecare-blue">{t('headache.prevention.highlight', 'Tips')}</span></h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            {t('headache.prevention.description', 'Implement these practical strategies in your daily routine to reduce eye fatigue and prevent related headaches.')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-start h-full"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 text-eyecare-blue mb-4">
                {tip.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{tip.title}</h3>
              <p className="text-gray-700">{tip.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-3">{t('headache.prevention.eyewear.title', 'Specialized Eyewear Solutions')}</h3>
              <p className="text-gray-700 mb-4">
                {t('headache.prevention.eyewear.description', 'Consider specialized eyewear solutions like computer glasses with blue light filtering, anti-reflective coatings, and optimized prescriptions specifically for digital device use. Our opticians can help you find the perfect eyewear to reduce strain and prevent headaches.')}
              </p>
              <a 
                href="https://promo.eyecarecenteroc.com/lead-magnet-page-6841-9006-6616-2060" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-eyecare-blue hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors inline-block hover:scale-105 transform duration-300"
              >
                {t('headache.prevention.eyewear.button', 'Explore Eyewear Options')}
              </a>
            </div>
            <div className="hidden md:block">
              <div className="w-20 h-20 bg-blue-100 rounded-full opacity-70 mx-auto animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreventionTips;
