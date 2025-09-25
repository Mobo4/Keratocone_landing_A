import { useLocation } from 'react-router-dom';

export const useCallRailPhone = () => {
  const location = useLocation();
  
  const getPhoneNumber = () => {
    const pathname = location.pathname.toLowerCase();
    
    if (pathname.includes('/keratoconus')) {
      return '(949) 575-8811';
    }
    
    if (pathname.includes('/dry-eye') || pathname.includes('/dryeye')) {
      return '(949) 997-3927';
    }
    
    if (pathname.includes('/ortho-k') || pathname.includes('/orthok')) {
      return '(949) 208-9886';
    }
    
    if (pathname.includes('/headache')) {
      return '(949) 776-0726';
    }
    
    // Default for all other pages
    return '(949) 658-2372';
  };
  
  const getPhoneHref = () => {
    return `tel:${getPhoneNumber().replace(/[^\d]/g, '')}`;
  };
  
  return {
    phoneNumber: getPhoneNumber(),
    phoneHref: getPhoneHref()
  };
};