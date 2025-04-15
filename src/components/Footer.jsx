import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-white">NewsHub</span>
            </div>
            <p className="mb-4 text-gray-400">
              Delivering accurate, timely, and engaging news from around the globe. 
              Your trusted source for staying informed on what matters most.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="/category/politics" className="hover:text-white transition duration-300">Politics</a></li>
              <li><a href="/category/technology" className="hover:text-white transition duration-300">Technology</a></li>
              <li><a href="/category/sports" className="hover:text-white transition duration-300">Sports</a></li>
              <li><a href="/category/entertainment" className="hover:text-white transition duration-300">Entertainment</a></li>
              <li><a href="/category/business" className="hover:text-white transition duration-300">Business</a></li>
              <li><a href="/category/world" className="hover:text-white transition duration-300">World News</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-white transition duration-300">About Us</a></li>
              <li><a href="/team" className="hover:text-white transition duration-300">Our Team</a></li>
              <li><a href="/careers" className="hover:text-white transition duration-300">Careers</a></li>
              <li><a href="/contact" className="hover:text-white transition duration-300">Contact Us</a></li>
              <li><a href="/advertise" className="hover:text-white transition duration-300">Advertise</a></li>
              <li><a href="/ethics" className="hover:text-white transition duration-300">Ethics Policy</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/faq" className="hover:text-white transition duration-300">FAQ</a></li>
              <li><a href="/terms" className="hover:text-white transition duration-300">Terms of Service</a></li>
              <li><a href="/privacy" className="hover:text-white transition duration-300">Privacy Policy</a></li>
              <li><a href="/cookies" className="hover:text-white transition duration-300">Cookie Policy</a></li>
              <li><a href="/sitemap" className="hover:text-white transition duration-300">Sitemap</a></li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter Mini Form */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center mb-8">
            <h4 className="text-white text-lg font-medium mb-3">Subscribe to Our Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition duration-300">
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-500">
          <p>&copy; {currentYear} NewsHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;