import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import AppointmentRequestDialog from '@/components/AppointmentRequestDialog';
import TrustSignals from '@/components/TrustSignals';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { educationCategories, getPopularConditions, searchConditions, type Condition } from '@/data/educationCategories';
import { Search, Clock, AlertTriangle, Info, ChevronRight, Eye, BookOpen } from 'lucide-react';

const EyeConditionsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const popularConditions = useMemo(() => getPopularConditions(), []);
  const searchResults = useMemo(() => {
    return searchQuery.trim() ? searchConditions(searchQuery) : [];
  }, [searchQuery]);

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'urgent':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'serious':
        return <Info className="w-4 h-4 text-orange-500" />;
      default:
        return <Eye className="w-4 h-4 text-blue-500" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'urgent':
        return 'bg-red-100 text-red-800';
      case 'serious':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Eye Conditions Guide - Wills Eye Manual Structure",
    "description": "Comprehensive guide to eye conditions organized by the Wills Eye Manual chapter structure. Expert information from Dr. Bonakdar's Eye Care Center.",
    "publisher": {
      "@type": "Organization",
      "name": "Eye Care Center of Orange County",
      "url": "https://eyecarecenteroc.com"
    },
    "mainEntity": {
      "@type": "MedicalWebPage",
      "about": "Eye Diseases and Conditions",
      "audience": "Patient"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Eye Conditions Guide | Comprehensive Eye Health Information"
        description="Learn about eye conditions organized by specialty areas. Expert educational resources from Dr. Bonakdar's Eye Care Center in Orange County following Wills Eye Manual structure."
        keywords="eye conditions, eye diseases, wills eye manual, eye health, cornea, retina, glaucoma, cataracts, Orange County"
        canonicalUrl="https://eyecarecenteroc.com/eye-conditions"
        ogType="website"
        structuredData={structuredData}
      />
      
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-cyan-50 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white rounded-full p-4 shadow-lg">
                <BookOpen className="w-12 h-12 text-eyecare-blue" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-eyecare-blue">Eye Conditions</span> Guide
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive information about eye conditions organized by specialty areas. 
              Learn from Orange County's trusted eye care professionals using the Wills Eye Manual structure.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Search eye conditions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 py-3 text-lg"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:9499973927"
                className="bg-eyecare-blue hover:bg-eyecare-dark-blue text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300 callrail-phone"
              >
                Call: (949) 997-3927
              </a>
              
              <AppointmentRequestDialog>
                <Button className="bg-white border-2 border-eyecare-blue text-eyecare-blue hover:bg-eyecare-blue hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300">
                  Schedule Consultation
                </Button>
              </AppointmentRequestDialog>
            </div>
          </div>
        </section>

        <TrustSignals className="py-12 bg-gray-50" />

        {/* Search Results */}
        {searchQuery.trim() && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-6">
                Search Results for "{searchQuery}" ({searchResults.length} found)
              </h2>
              
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {searchResults.map((condition) => (
                    <ConditionCard key={condition.id} condition={condition} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Eye className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-600 text-lg">
                    No conditions found matching your search. Try different keywords or browse our categories below.
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Popular Conditions - Show when not searching */}
        {!searchQuery.trim() && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Popular Eye Conditions</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Learn about the most common eye conditions we treat and their symptoms, causes, and treatments.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {popularConditions.map((condition) => (
                  <ConditionCard key={condition.id} condition={condition} featured />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Categories - Show when not searching */}
        {!searchQuery.trim() && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Browse by Specialty Area</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Explore eye conditions organized by the area of the eye they affect, following the Wills Eye Manual structure.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {educationCategories.map((category) => (
                  <Card key={category.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{category.icon}</span>
                        <Badge className={category.color}>
                          {category.conditions.length} conditions
                        </Badge>
                      </div>
                      <CardTitle className="group-hover:text-eyecare-blue transition-colors">
                        {category.name}
                      </CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {category.conditions.slice(0, 3).map((condition) => (
                          <div key={condition.id} className="flex items-center justify-between">
                            <Link
                              to={`/conditions/${condition.slug}`}
                              className="text-sm text-gray-600 hover:text-eyecare-blue transition-colors flex items-center gap-2"
                            >
                              {getSeverityIcon(condition.severity)}
                              {condition.name}
                            </Link>
                          </div>
                        ))}
                        {category.conditions.length > 3 && (
                          <Link
                            to={`/conditions/categories/${category.slug}`}
                            className="text-sm text-eyecare-blue hover:text-eyecare-dark-blue font-medium flex items-center gap-1"
                          >
                            View all {category.conditions.length} conditions
                            <ChevronRight className="w-3 h-3" />
                          </Link>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-eyecare-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Have Questions About Your Eye Health?</h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Our experienced eye care team is here to help. Schedule a comprehensive eye exam today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="tel:9499973927"
                className="bg-white text-eyecare-blue hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300 callrail-phone"
              >
                Call Now: (949) 997-3927
              </a>
              
              <AppointmentRequestDialog>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-eyecare-blue px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 transform duration-300">
                  Request Appointment
                </Button>
              </AppointmentRequestDialog>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Reusable condition card component
const ConditionCard: React.FC<{ condition: Condition; featured?: boolean }> = ({ condition, featured = false }) => {
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'urgent':
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'serious':
        return <Info className="w-4 h-4 text-orange-500" />;
      default:
        return <Eye className="w-4 h-4 text-blue-500" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'urgent':
        return 'bg-red-100 text-red-800';
      case 'serious':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <Link to={`/conditions/${condition.slug}`}>
      <Card className={`h-full hover:shadow-lg transition-all duration-300 group cursor-pointer ${featured ? 'ring-2 ring-eyecare-blue ring-opacity-20' : ''}`}>
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <Badge className={getSeverityColor(condition.severity)}>
              <div className="flex items-center gap-1">
                {getSeverityIcon(condition.severity)}
                {condition.severity}
              </div>
            </Badge>
            {condition.featured && (
              <Badge className="bg-eyecare-blue text-white">Popular</Badge>
            )}
          </div>
          <CardTitle className="group-hover:text-eyecare-blue transition-colors">
            {condition.name}
          </CardTitle>
          <CardDescription>{condition.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {condition.estimatedReadTime} min read
            </div>
            <div className="text-gray-400">
              Updated {new Date(condition.lastUpdated).toLocaleDateString()}
            </div>
          </div>
          <div className="mt-4 flex items-center text-eyecare-blue font-medium group-hover:gap-2 transition-all">
            Learn more
            <ChevronRight className="w-4 h-4 ml-1 group-hover:ml-0 transition-all" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default EyeConditionsPage;