import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Home, Search, Phone } from "lucide-react";
import { useCallRailPhone } from '@/hooks/useCallRailPhone';

const NotFound = () => {
  const { phoneNumber, phoneHref } = useCallRailPhone();
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
      <SEO 
        title="Page Not Found - 404 Error | Eyecare Center of Orange County"
        description="The page you're looking for doesn't exist. Navigate back to our homepage or contact us for assistance with your eye care needs."
        keywords="404 error, page not found, eye care, optometrist, Orange County"
        canonicalUrl={`https://eyecarecenteroc.com${location.pathname}`}
        noIndex={true}
      />
      
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-600 mb-8">
            We're sorry, but the page you're looking for doesn't exist. The URL might be incorrect, 
            or the page may have been moved or deleted.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="text-sm text-gray-500 mb-6">
            <p>Common pages you might be looking for:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>LASIK and vision correction services</li>
              <li>Dry eye treatment options</li>
              <li>Keratoconus specialty care</li>
              <li>Contact lens fittings</li>
              <li>Designer eyewear collection</li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <a href="/" className="flex items-center">
                <Home className="w-4 h-4 mr-2" />
                Return to Homepage
              </a>
            </Button>
            
            <Button asChild variant="outline">
              <a href="/services" className="flex items-center">
                <Search className="w-4 h-4 mr-2" />
                Browse Services
              </a>
            </Button>
            
            <Button asChild variant="outline">
              <a href="/contact" className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </a>
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Need immediate assistance? Call us at{" "}
              <a href={phoneHref} className="text-blue-600 hover:text-blue-800 font-semibold callrail-phone">
                {phoneNumber}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
