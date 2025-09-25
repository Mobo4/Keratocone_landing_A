import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import VendorLogoCarousel from '@/components/VendorLogoCarousel';
import SEO from '@/components/SEO';
import { Phone, MapPin, Clock, Calendar } from 'lucide-react';

interface LocationPageProps {
  city: string;
  neighborhoods: string[];
  driveTime: string;
  testimonials: {
    quote: string;
    author: string;
    location: string;
  }[];
  seoKeywords?: string;
  metaDescription?: string;
}

const LocationPageTemplate: React.FC<LocationPageProps> = ({
  city,
  neighborhoods,
  driveTime,
  testimonials,
  seoKeywords,
  metaDescription
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": `EyeCare Center of Orange County - ${city} Vision Center`,
    "description": metaDescription || `Leading eye care center serving ${city}, CA. EyeCare Center of Orange County provides advanced comprehensive eye care, specialized keratoconus treatment, contact lenses. Same-week appointments available.`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "801 North Tustin Avenue, Suite 404",
      "addressLocality": "Santa Ana",
      "addressRegion": "CA",
      "postalCode": "92705"
    },
    "telephone": "(949) 658-2372",
    "url": `https://eyecarecenteroc.com/locations/${city.toLowerCase().replace(/\s+/g, '-')}-eye-doctor`,
    "areaServed": [city, ...neighborhoods]
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={`${city} Eye Care Center CA | EyeCare Center of Orange County`}
        description={metaDescription || `Leading eye care center serving ${city}, CA. EyeCare Center of Orange County provides advanced comprehensive eye care, specialized keratoconus treatment. Same-week appointments. (949) 658-2372`}
        keywords={seoKeywords || `${city} eye care center, EyeCare Center ${city}, ${city} vision center, ${city} optometrist, eye doctor ${city}, ${city} eye exam, comprehensive eye care ${city}, ${city} keratoconus specialist, dry eye treatment ${city}, ${city} contact lenses, LASIK consultation ${city}, ${city} cataract evaluation, pediatric eye care ${city}, ${city} glaucoma specialist, diabetic eye care ${city}, ${city} emergency eye care, vision therapy ${city}, ${city} low vision, scleral lenses ${city}, ${city} Ortho-K, myopia control ${city}, ${city} astigmatism treatment, presbyopia solutions ${city}, ${city} progressive lenses, bifocal glasses ${city}, ${city} designer frames, eye care near me, best eye doctor ${city}, ${city} vision insurance, VSP ${city}, EyeMed ${city}, Blue Cross vision ${city}, same day eye exam ${city}, ${city} Spanish eye doctor, bilingual optometrist ${city}`}
        canonicalUrl={`https://eyecarecenteroc.com/locations/${city.toLowerCase().replace(/\s+/g, '-')}-eye-doctor`}
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* STANDARDIZED HERO - SAME FOR ALL PAGES */}
        <Hero 
          title={`${city}'s Premier Eye Care Center - EyeCare Center of Orange County`}
          subtitle={`Advanced Vision Solutions & Specialized Medical Eye Care Serving ${city} Families`}
          buttonText={`Schedule Your ${city} Eye Exam`}
          buttonLink="https://promo.eyecarecenteroc.com/lead-magnet-page-6841-9006-6616-2060"
          backgroundClass="bg-gradient-to-r from-blue-100 to-eyecare-lighter-blue"
          colorScheme="blue"
        />

        {/* STANDARDIZED SERVICES SECTION - SAME FOR ALL PAGES */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Services for {city} Residents</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Comprehensive Eye Exams"
                description={`Complete eye examinations for ${city} families with same-week appointments available.`}
                icon="eye"
              />
              <ServiceCard
                title="Keratoconus Treatment"
                description="Specialized keratoconus treatment with 3000+ successful scleral lens fittings."
                icon="microscope"
              />
              <ServiceCard
                title="Contact Lens Fittings"
                description="Expert contact lens fittings for all types including specialty lenses."
                icon="glasses"
              />
              <ServiceCard
                title="Dry Eye Treatment"
                description="Advanced dry eye therapy and management for lasting relief."
                icon="droplet"
              />
              <ServiceCard
                title="Children's Vision Care"
                description="Comprehensive pediatric eye care for infants through teenagers."
                icon="baby"
              />
              <ServiceCard
                title="Emergency Eye Care"
                description="Same-day emergency appointments for urgent eye care needs."
                icon="activity"
              />
            </div>
          </div>
        </section>

        {/* STANDARDIZED WHY CHOOSE SECTION - SAME FOR ALL PAGES */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why {city} Chooses EyeCare Center of Orange County</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Advanced Medical Technology</h3>
                <p className="text-gray-600">State-of-the-art diagnostic equipment and cutting-edge treatment technologies for superior patient outcomes.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Keratoconus Excellence Center</h3>
                <p className="text-gray-600">3000+ successful specialized treatments with advanced scleral lens fitting expertise and comprehensive care protocols.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Same-Week Appointments</h3>
                <p className="text-gray-600">Convenient scheduling for busy {city} families and professionals.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{driveTime} from {city}</h3>
                <p className="text-gray-600">Convenient central Orange County location with easy freeway access.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">All Insurance Accepted</h3>
                <p className="text-gray-600">VSP, EyeMed, Blue Cross, and medical insurance accepted.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Bilingual Staff</h3>
                <p className="text-gray-600">English and Spanish speaking staff for diverse {city} community.</p>
              </div>
            </div>
          </div>
        </section>

        {/* LOCATION SPECIFIC CONTENT - CUSTOMIZED PER CITY */}
        <section className="py-16 bg-eyecare-lighter-blue">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Serving {city} & Surrounding Areas</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">Proudly Serving {city} Since 1990</h3>
                  <ul className="space-y-2 text-gray-600">
                    {neighborhoods.map((neighborhood, index) => (
                      <li key={index}>• {neighborhood}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    <MapPin className="inline-block w-5 h-5 mr-2 text-eyecare-blue" />
                    Convenient Location & Access
                  </h3>
                  <p className="font-semibold text-gray-900">From {city}:</p>
                  <p className="text-gray-600">Easy access via major freeways</p>
                  <p className="text-sm text-gray-500 mt-2">Approximate drive time: {driveTime}</p>
                  <div className="mt-4">
                    <p className="font-semibold text-gray-900">Office Hours:</p>
                    <p className="text-gray-600">Mon-Fri: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS - CUSTOMIZED PER CITY */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What {city} Patients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  location={testimonial.location}
                  rating={5}
                />
              ))}
            </div>
          </div>
        </section>

        {/* STANDARDIZED CTA SECTION - SAME FOR ALL PAGES */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Schedule Your {city} Eye Exam Today</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of satisfied {city} patients who trust Dr. Bonakdar for their eye care needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:(949)658-2372"
                  className="inline-flex items-center justify-center bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (949) 658-2372
                </a>
                <a
                  href="https://promo.eyecarecenteroc.com/lead-magnet-page-6841-9006-6616-2060"
                  className="inline-flex items-center justify-center border-2 border-eyecare-blue text-eyecare-blue hover:bg-eyecare-blue hover:text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Online
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* STANDARDIZED VENDOR CAROUSEL - SAME FOR ALL PAGES */}
        <VendorLogoCarousel 
          title="Trusted Eye Care Partners" 
          description={`We work with leading manufacturers to provide the best care for ${city} patients`}
          category="general"
          fixedPosition={false}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default LocationPageTemplate;