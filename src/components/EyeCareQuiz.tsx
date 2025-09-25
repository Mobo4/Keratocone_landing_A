
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Eye, Calendar } from 'lucide-react';
import { useConfetti } from '@/hooks/use-confetti';

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    result: 'dry-eye' | 'keratoconus' | 'eye-fatigue' | 'general-checkup';
    icon: React.ReactNode;
  }[];
}

const EyeCareQuiz = () => {
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { fireConfetti } = useConfetti();
  
  const questions: Question[] = [
    {
      id: 1,
      text: "What symptoms are you experiencing most frequently?",
      options: [
        {
          text: "Dryness, burning, or itchy eyes",
          result: 'dry-eye',
          icon: <Droplet className="h-5 w-5 text-eyecare-blue" />
        },
        {
          text: "Blurry vision or increased sensitivity to light",
          result: 'keratoconus',
          icon: <Eye className="h-5 w-5 text-eyecare-blue" />
        },
        {
          text: "Headaches after screen time or reading",
          result: 'eye-fatigue',
          icon: <Eye className="h-5 w-5 text-eyecare-blue" />
        },
        {
          text: "Just need a regular check-up",
          result: 'general-checkup',
          icon: <Calendar className="h-5 w-5 text-eyecare-blue" />
        }
      ]
    }
  ];
  
  const resultInfo = {
    'dry-eye': {
      title: "Dry Eye Treatment",
      description: "Your symptoms suggest you may be experiencing dry eye syndrome. Our advanced IPL therapy and personalized treatment plans can provide relief.",
      link: "/conditions/dry-eye"
    },
    'keratoconus': {
      title: "Keratoconus Management",
      description: "Your symptoms could indicate keratoconus. We offer specialized treatment options including scleral lenses and cross-linking therapy.",
      link: "/conditions/keratoconus"
    },
    'eye-fatigue': {
      title: "Digital Eye Strain Solutions",
      description: "You may be experiencing digital eye strain or computer vision syndrome. Our Neurolens technology can help alleviate these symptoms.",
      link: "/conditions/headache-eye-fatigue"
    },
    'general-checkup': {
      title: "Comprehensive Eye Exam",
      description: "Regular eye exams are important for maintaining optimal vision health. Schedule your comprehensive eye examination today.",
      link: "/services"
    }
  };
  
  const handleSelection = (result: 'dry-eye' | 'keratoconus' | 'eye-fatigue' | 'general-checkup') => {
    setResult(result);
    setShowResult(true);
    
    // Fire confetti when showing the result
    setTimeout(() => {
      fireConfetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.3 },
        colors: ['#9333ea', '#4f46e5', '#06b6d4', '#14b8a6']
      });
    }, 300);
  };
  
  const resetQuiz = () => {
    setShowResult(false);
    setResult(null);
    setCurrentQuestion(0);
  };
  
  const currentQ = questions[currentQuestion];
  
  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg animate-fade-in">
      <CardHeader className="bg-eyecare-lighter-blue rounded-t-xl">
        <CardTitle className="text-2xl text-center text-eyecare-blue">Eye Health Quiz</CardTitle>
        <CardDescription className="text-center text-gray-700">
          Find the best treatment options for your vision needs
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        {!showResult ? (
          <div className="space-y-4">
            <h3 className="text-xl font-medium text-center mb-6">{currentQ.text}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentQ.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelection(option.result)}
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-eyecare-lighter-blue hover:border-eyecare-blue hover:shadow-md transition-all duration-200 text-left"
                >
                  <div className="mr-3 bg-white p-2 rounded-full">
                    {option.icon}
                  </div>
                  <span>{option.text}</span>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="py-4 text-center">
            <h3 className="text-2xl font-bold text-eyecare-blue mb-3">
              {result && resultInfo[result as keyof typeof resultInfo].title}
            </h3>
            <p className="mb-6 text-gray-700">
              {result && resultInfo[result as keyof typeof resultInfo].description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href={result ? resultInfo[result as keyof typeof resultInfo].link : "/services"} 
                className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-6 py-3 rounded-md transition-colors inline-block"
              >
                Learn More
              </a>
              <a 
                href="https://promo.eyecarecenteroc.com/lead-magnet-page-6841-9006-6616-2060" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white border border-eyecare-blue text-eyecare-blue hover:bg-eyecare-lighter-blue px-6 py-3 rounded-md transition-colors inline-block"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        )}
      </CardContent>
      {showResult && (
        <CardFooter className="flex justify-center pb-6">
          <Button 
            variant="outline" 
            onClick={resetQuiz}
            className="text-eyecare-blue border-eyecare-blue hover:bg-eyecare-lighter-blue"
          >
            Start Over
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default EyeCareQuiz;
