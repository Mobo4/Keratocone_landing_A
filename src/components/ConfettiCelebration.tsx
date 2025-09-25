
import React from 'react';
import { ConfettiButton } from '@/components/ui/confetti';
import { PartyPopper } from 'lucide-react';

interface ConfettiCelebrationProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  link: string;
}

const ConfettiCelebration = ({ title, subtitle, buttonText, link }: ConfettiCelebrationProps) => {
  return (
    <div className="rounded-lg bg-gradient-to-r from-eyecare-blue/10 to-eyecare-blue-50/30 p-6 text-center">
      <h3 className="text-2xl font-bold mb-2 text-eyecare-blue">{title}</h3>
      {subtitle && <p className="mb-4 text-gray-700">{subtitle}</p>}
      <ConfettiButton 
        options={{
          particleCount: 100,
          spread: 90,
          colors: ['#9333ea', '#8b5cf6', '#a855f7', '#d946ef', '#4f46e5'],
        }}
        onClick={() => {
          if (link) {
            window.location.href = link;
          }
        }}
        className="bg-eyecare-blue hover:bg-eyecare-dark-blue inline-flex items-center gap-2"
      >
        <PartyPopper className="h-5 w-5" />
        {buttonText}
      </ConfettiButton>
    </div>
  );
};

export default ConfettiCelebration;
