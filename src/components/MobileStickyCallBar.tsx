import React from 'react';
import { useCallRailPhone } from '@/hooks/useCallRailPhone';
import { useIsMobile } from '@/hooks/use-mobile';

const MobileStickyCallBar = () => {
  const { phoneNumber, phoneHref } = useCallRailPhone();
  const isMobile = useIsMobile();

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-eyecare-blue text-white p-4 text-center z-50 shadow-lg md:hidden">
      <a 
        href={phoneHref}
        className="text-white text-xl font-bold no-underline callrail-phone flex items-center justify-center gap-2"
      >
        <span>📞</span>
        <span>Call Now: {phoneNumber}</span>
      </a>
    </div>
  );
};

export default MobileStickyCallBar;