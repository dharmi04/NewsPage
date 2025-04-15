import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrendingSidebar from './components/TrendingSidebar';
import NewsletterSignup from './components/NewsletterSignup';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';

// Mock function for different pages - in a real app, you would use React Router
const HomePage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Navbar />
      
      <main>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <HeroSection />
            </div>
            <div className="lg:col-span-1">
              <TrendingSidebar />
            </div>
          </div>
          
          <div className="my-16">
            <NewsletterSignup />
          </div>
        </div>
      </main>
      
      <Footer />
      <DarkModeToggle />
    </div>
  );
};

export default HomePage;