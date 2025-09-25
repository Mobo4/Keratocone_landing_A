import React from 'react';

/**
 * QR Code Generator Component for Keratoconus Referrals
 * 
 * This component displays a QR code image that links to the keratoconus
 * referral landing page. The image is designed to be easily printed on
 * business cards or referral slips.
 */
const KeratoconusQRCode = () => {
  // Base URL for the site - in production this would be the actual domain
  const baseUrl = process.env.NODE_ENV === 'production' 
    ? 'https://eyecarecenteroc.com' 
    : 'http://localhost:8080';
  
  // Full URL to the keratoconus landing page
  const landingPageUrl = `${baseUrl}/keratoconus-referral`;
  
  // Generate QR code URL using QR code API
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(landingPageUrl)}&color=5966C8&bgcolor=FFFFFF`;
  
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md max-w-sm mx-auto">
      <h2 className="text-xl font-bold text-gray-900 mb-2">Keratoconus Specialist</h2>
      <p className="text-sm text-gray-600 mb-4 text-center">
        Scan this code to visit our dedicated keratoconus treatment page
      </p>
      
      <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-200">
        <img 
          src={qrCodeUrl} 
          alt="QR Code for Keratoconus Referral" 
          className="w-48 h-48"
        />
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm font-bold text-blue-600">Dr. Alexander Bonakdar</p>
        <p className="text-xs text-gray-600">Keratoconus & Corneal Disease Management</p>
        <p className="text-xs text-gray-600 mt-1">(714) 558-1182</p>
        <p className="text-xs text-gray-600">801 N. Tustin Ave #404, Santa Ana, CA 92705</p>
      </div>
      
      <div className="mt-4 text-center">
        <a 
          href={landingPageUrl}
          className="text-xs text-blue-600 hover:underline"
          target="_blank" 
          rel="noopener noreferrer"
        >
          {landingPageUrl}
        </a>
      </div>
    </div>
  );
};

export default KeratoconusQRCode;