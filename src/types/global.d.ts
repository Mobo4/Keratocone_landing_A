// Global type declarations
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    dataLayer: any[];
    CallRail?: {
      startSwap: () => void;
      startFormTracking: (config: any) => void;
      track: (event: string, data: any) => void;
    };
  }
}

export {};
