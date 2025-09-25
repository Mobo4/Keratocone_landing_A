
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageGenerator from '@/components/admin/ImageGenerator';
import SitemapGenerator from '@/components/SitemapGenerator';
import KeratoconusQRCodeTool from '@/components/admin/KeratoconusQRCodeTool';
import AnalyticsDashboard from '@/components/admin/AnalyticsDashboard';
import GeoAccessDashboard from '@/components/admin/GeoAccessDashboard';
import SEO from '@/components/SEO';

const AdminToolsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Admin Tools | Website Management | Eyecare Center OC"
        description="Administrative tools for managing the Eyecare Center of Orange County website including image generation and sitemap management."
        keywords="admin tools, website management, sitemap generator, image generator, website administration"
        canonicalUrl="https://eyecarecenteroc.com/admin/tools"
      />
      
      <Header />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Website <span className="text-eyecare-blue">Admin Tools</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Administrative tools for managing website content and functionality
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <ImageGenerator />
            <SitemapGenerator />
            <KeratoconusQRCodeTool />
            <GeoAccessDashboard />
          </div>
          
          <div className="max-w-5xl mx-auto">
            <AnalyticsDashboard />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminToolsPage;
