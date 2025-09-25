import React, { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import KeratoconusQRCode from '@/components/keratoconus/KeratoconusQRCode';
import { Button } from '@/components/ui/button';
import { Download, Printer } from 'lucide-react';
import html2canvas from 'html2canvas';
import SEO from '@/components/SEO';

/**
 * Page for generating and viewing QR codes for keratoconus referrals
 * This page allows staff to preview, print, and download QR codes for
 * printing on referral business cards.
 */
const KeratoconusQRCodePage = () => {
  const qrCodeRef = useRef<HTMLDivElement>(null);
  
  // Function to download the QR code as an image
  const handleDownload = async () => {
    if (!qrCodeRef.current) return;
    
    try {
      const canvas = await html2canvas(qrCodeRef.current, {
        backgroundColor: '#ffffff',
        scale: 2 // Higher quality
      });
      
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'keratoconus-referral-qr-code.png';
      link.click();
    } catch (error) {
      console.error('Error generating QR code image:', error);
      alert('There was an error generating the QR code image. Please try again.');
    }
  };
  
  // Function to print the QR code
  const handlePrint = () => {
    window.print();
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Keratoconus Referral QR Code Generator | Administrative Tools"
        description="Generate and print QR codes for keratoconus patient referrals. Professional tool for healthcare providers to create referral materials."
        keywords="QR code generator, keratoconus referral, medical referral tools, patient referral system"
        canonicalUrl="https://eyecarecenteroc.com/admin/keratoconus-qr"
        noIndex={true}
      />
      
      <Header />
      
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Keratoconus Referral QR Code Generator
          </h1>
          
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <p className="text-gray-700 mb-6">
              This QR code links directly to our dedicated Keratoconus landing page designed for referred patients.
              Print this QR code on referral cards to provide a seamless experience for patients referred by other doctors.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <Button 
                onClick={handleDownload}
                className="bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2"
              >
                <Download className="h-5 w-5" />
                Download QR Code
              </Button>
              
              <Button 
                onClick={handlePrint}
                variant="outline"
                className="flex items-center justify-center gap-2"
              >
                <Printer className="h-5 w-5" />
                Print QR Code
              </Button>
            </div>
            
            <div className="print:p-0 p-6 bg-gray-50 rounded-xl flex justify-center">
              <div ref={qrCodeRef} className="print:shadow-none">
                <KeratoconusQRCode />
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md">
            <h2 className="text-xl font-bold mb-2 text-blue-800">Printing Instructions</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Use high-quality card stock paper for best results</li>
              <li>Ensure the printer is set to high quality / photo mode</li>
              <li>Test scan the QR code after printing to verify it works correctly</li>
              <li>The recommended size for business cards is 3.5 × 2 inches</li>
              <li>For custom branded cards, download the image and include it in your design</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Print-specific styles */}
      <style>{`
        @media print {
          header, footer, .no-print {
            display: none !important;
          }
          body, html {
            background-color: white !important;
          }
          main {
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default KeratoconusQRCodePage;