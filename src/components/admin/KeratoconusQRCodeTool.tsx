import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QrCode } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

/**
 * Admin tool component for accessing the Keratoconus QR Code generator
 * Displays in the admin tools dashboard and links to the QR code generator page
 */
const KeratoconusQRCodeTool = () => {
  const navigate = useNavigate();
  
  return (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 pb-6">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-gray-900">Keratoconus QR Code</CardTitle>
          <div className="p-2 bg-blue-600 rounded-md">
            <QrCode className="w-5 h-5 text-white" />
          </div>
        </div>
        <CardDescription className="text-blue-700 mt-2">
          Generate QR codes for keratoconus referral cards
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6">
        <p className="text-gray-700 mb-4">
          Create and print QR codes that link to the dedicated Keratoconus landing page for referred patients.
        </p>
        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1 mb-6">
          <li>Generate high-quality QR codes</li>
          <li>Print directly from browser</li>
          <li>Download as PNG image</li>
          <li>Include on referral cards</li>
        </ul>
      </CardContent>
      
      <CardFooter className="border-t pt-4">
        <Button 
          onClick={() => navigate('/admin/keratoconus-qr')} 
          className="w-full bg-blue-600 hover:bg-blue-700"
        >
          Generate QR Code
        </Button>
      </CardFooter>
    </Card>
  );
};

export default KeratoconusQRCodeTool;