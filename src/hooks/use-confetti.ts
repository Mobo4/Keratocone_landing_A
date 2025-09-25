
import { useCallback } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiOptions {
  particleCount?: number;
  spread?: number;
  startVelocity?: number;
  decay?: number;
  gravity?: number;
  ticks?: number;
  origin?: {
    x?: number;
    y?: number;
  };
  colors?: string[];
  shapes?: ('square' | 'circle')[];
  scalar?: number;
  zIndex?: number;
  disableForReducedMotion?: boolean;
  useWorker?: boolean;
}

export const useConfetti = () => {
  const fireConfetti = useCallback((options?: ConfettiOptions) => {
    try {
      const defaultOptions = {
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      };

      confetti({
        ...defaultOptions,
        ...options
      });
    } catch (error) {
      console.error("Error firing confetti:", error);
    }
  }, []);

  const fireConfettiFromElement = useCallback((element: HTMLElement, options?: ConfettiOptions) => {
    try {
      const rect = element.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      
      const defaultOptions = {
        particleCount: 100,
        spread: 70,
      };

      confetti({
        ...defaultOptions,
        ...options,
        origin: {
          x: x / window.innerWidth,
          y: y / window.innerHeight,
        }
      });
    } catch (error) {
      console.error("Error firing confetti from element:", error);
    }
  }, []);

  const fireSchoolPride = useCallback(() => {
    const end = Date.now() + 1500;
    
    const colors = ['#C64191', '#31A9B8']; // Eye center brand colors

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.65 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.65 },
        colors: colors
      });
      
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    
    frame();
  }, []);

  return {
    fireConfetti,
    fireConfettiFromElement,
    fireSchoolPride
  };
};
