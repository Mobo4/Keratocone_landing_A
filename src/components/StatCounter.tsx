import React, { useState, useEffect, useRef } from 'react';

interface StatCounterProps {
  endValue: number;
  label: string;
  duration?: number;
  suffix?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ 
  endValue, 
  label, 
  duration = 1200,
  suffix = ''
}) => {
  const [count, setCount] = useState(0);
  const [isScrambling, setIsScrambling] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);
  
  
  // Random number generator for scrambling effect
  const generateRandomNumber = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      
      if (entry.isIntersecting && !hasStarted) {
        setHasStarted(true);
        
        // Start scrambling effect
        setIsScrambling(true);
        
        const start = 0;
        const end = endValue;
        
        // Pre-scrambling phase (random numbers) - 10% of total duration
        const scramblingDuration = duration * 0.1;
        const scramblingInterval = 30;
        const numScramblingSteps = scramblingDuration / scramblingInterval;
        let scramblingStep = 0;
        
        const scramblingTimer = setInterval(() => {
          scramblingStep++;
          setCount(generateRandomNumber(end * 1.5));
          
          if (scramblingStep >= numScramblingSteps) {
            clearInterval(scramblingTimer);
            setIsScrambling(false);
            
            // Counting phase - use different strategies based on number size
            if (end > 100) {
              // For larger numbers, use fewer steps to keep timing consistent
              const totalSteps = 30;
              const stepSize = end / totalSteps;
              const stepDuration = (duration * 0.9) / totalSteps;
              let step = 0;
              
              const timer = setInterval(() => {
                step++;
                const newValue = Math.round(step * stepSize);
                setCount(newValue);
                
                if (step === totalSteps) {
                  setCount(end); // Ensure we land exactly on the end value
                  clearInterval(timer);
                                  }
              }, stepDuration);
            } else {
              // Original approach for smaller numbers
              const stepTime = (duration * 0.9) / end;
              let current = start;
              
              const timer = setInterval(() => {
                current++;
                setCount(current);
                
                if (current === end) {
                  clearInterval(timer);
                                  }
              }, stepTime);
            }
          }
        }, scramblingInterval);
        
        return () => {
          clearInterval(scramblingTimer);
        };
      }
    };
    
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.3 // Increased threshold to ensure better detection
    });
    
    const currentRef = counterRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [endValue, duration, hasStarted]);
  
  return (
    <div className="text-center" ref={counterRef}>
      <div className={`text-5xl font-bold mb-2 transition-all ${isScrambling ? 'blur-sm scale-105' : ''}`}>
        {count}{suffix}
      </div>
      {label && <div className="text-gray-700">{label}</div>}
    </div>
  );
};

export default StatCounter;
