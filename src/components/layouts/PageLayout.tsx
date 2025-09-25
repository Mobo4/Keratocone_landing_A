import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO, { SEOProps } from '@/components/SEO';

interface PageLayoutProps {
  children: React.ReactNode;
  seo: SEOProps;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, seo, className = "" }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO {...seo} />
      <Header />
      <main className={`flex-1 ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;