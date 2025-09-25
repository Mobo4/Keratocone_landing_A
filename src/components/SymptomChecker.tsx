
import React, { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

const SymptomChecker = () => {
  const { t } = useTranslation();
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const symptoms = [
    { id: 'blurry', label: t('symptomChecker.symptoms.blurry') },
    { id: 'dryness', label: t('symptomChecker.symptoms.dryness') },
    { id: 'light', label: t('symptomChecker.symptoms.light') },
    { id: 'night', label: t('symptomChecker.symptoms.night') },
    { id: 'halos', label: t('symptomChecker.symptoms.halos') },
    { id: 'prescription', label: t('symptomChecker.symptoms.prescription') }
  ];

  const handleSymptomChange = (symptomId: string) => {
    setSelectedSymptoms(prev => {
      if (prev.includes(symptomId)) {
        return prev.filter(id => id !== symptomId);
      } else {
        return [...prev, symptomId];
      }
    });
  };

  const checkSymptoms = () => {
    if (selectedSymptoms.length === 0) {
      toast({
        title: t('symptomChecker.errors.noSelection.title'),
        description: t('symptomChecker.errors.noSelection.description'),
        variant: "destructive"
      });
      return;
    }
    
    let condition = "";
    
    if (selectedSymptoms.includes('blurry') && selectedSymptoms.includes('prescription')) {
      condition = "keratoconus";
    } else if (selectedSymptoms.includes('dryness') && selectedSymptoms.includes('light')) {
      condition = "dry eye";
    } else if (selectedSymptoms.includes('night') && selectedSymptoms.includes('halos')) {
      condition = "cataracts";
    } else if (selectedSymptoms.includes('blurry') && selectedSymptoms.includes('light')) {
      condition = "multiple conditions";
    } else {
      condition = "general";
    }
    
    setResult(t(`symptomChecker.results.${condition}`));
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 max-w-3xl mx-auto">
      <h3 className="text-2xl font-semibold text-center mb-6">{t('symptomChecker.title')}</h3>
      <p className="text-gray-600 mb-6 text-center">{t('symptomChecker.subtitle')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {symptoms.map((symptom) => (
          <div key={symptom.id} className="flex items-center">
            <input
              type="checkbox"
              id={symptom.id}
              checked={selectedSymptoms.includes(symptom.id)}
              onChange={() => handleSymptomChange(symptom.id)}
              className="w-5 h-5 text-eyecare-blue border-gray-300 rounded focus:ring-eyecare-blue"
            />
            <label htmlFor={symptom.id} className="ml-2 text-gray-700">
              {symptom.label}
            </label>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <button
          onClick={checkSymptoms}
          className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white font-medium py-2 px-6 rounded-md transition-colors hover-scale"
        >
          {t('symptomChecker.checkButton')}
        </button>
      </div>
      
      {result && (
        <div className="mt-8 p-4 bg-eyecare-lighter-blue rounded-lg animate-fade-in shadow-md">
          <h4 className="font-semibold mb-2">{t('symptomChecker.resultTitle')}:</h4>
          <p>{result}</p>
          <div className="mt-4 text-center">
            <a 
              href="https://promo.eyecarecenteroc.com/lead-magnet-page-6841-9006-6616-2060" 
              className="inline-block bg-eyecare-blue text-white px-5 py-2 rounded-md hover:bg-eyecare-dark-blue transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('symptomChecker.scheduleButton')}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;
