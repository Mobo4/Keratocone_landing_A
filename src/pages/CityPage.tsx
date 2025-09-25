import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import CityPageTemplate from '@/components/city/CityPageTemplate';
import { getCityBySlug } from '@/data/cityData';

const CityPage: React.FC = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const { language } = useLanguage();
  
  if (!citySlug) {
    return <Navigate to="/404" replace />;
  }
  
  const cityData = getCityBySlug(citySlug);
  
  if (!cityData) {
    return <Navigate to="/404" replace />;
  }
  
  return (
    <CityPageTemplate 
      cityData={cityData} 
      language={language as 'en' | 'es'} 
    />
  );
};

export default CityPage;