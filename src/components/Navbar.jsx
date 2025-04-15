import React, { useState } from 'react';
import { Search, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">NewsHub</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-blue-300 transition duration-300">Home</a>
            <a href="/categories" className="hover:text-blue-300 transition duration-300">Categories</a>
            <a href="/about" className="hover:text-blue-300 transition duration-300">About</a>
            <a href="/contact" className="hover:text-blue-300 transition duration-300">Contact</a>
          </div>
          
          {/* Search and User */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-blue-800 text-white rounded-full py-1 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-1.5 h-4 w-4 text-blue-300" />
            </div>
            
            <button className="bg-blue-700 hover:bg-blue-600 rounded-full p-2 transition duration-300">
              <User className="h-5 w-5" />
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a href="/" className="block hover:bg-blue-800 px-3 py-2 rounded-md">Home</a>
            <a href="/categories" className="block hover:bg-blue-800 px-3 py-2 rounded-md">Categories</a>
            <a href="/about" className="block hover:bg-blue-800 px-3 py-2 rounded-md">About</a>
            <a href="/contact" className="block hover:bg-blue-800 px-3 py-2 rounded-md">Contact</a>
            
            <div className="relative mt-3">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-blue-800 text-white rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute right-3 top-2.5 h-4 w-4 text-blue-300" />
            </div>
            
            <button className="w-full mt-3 flex items-center justify-center bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
              <User className="h-5 w-5 mr-2" />
              <span>Login / Sign Up</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;