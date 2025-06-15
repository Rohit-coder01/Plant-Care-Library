import React from 'react';
import { Leaf, Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-forest-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-sage-400 to-sage-600 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-display font-semibold">Plant Library</h3>
                <p className="text-sm text-sage-300">Digital Garden Companion</p>
              </div>
            </div>
            <p className="text-sage-300 mb-6 leading-relaxed">
              Your trusted companion for plant care, featuring comprehensive guides and expert tips 
              to help your green friends thrive.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-sage-600 hover:bg-sage-500 p-2 rounded-lg transition-colors duration-200">
                <Heart className="h-5 w-5" />
              </a>
              <a href="#" className="bg-sage-600 hover:bg-sage-500 p-2 rounded-lg transition-colors duration-200">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Plant Care Guides', 'Beginner Tips', 'Plant Identification', 'Seasonal Care', 'Common Problems'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-sage-300 hover:text-white transition-colors duration-200 text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Plant Categories</h4>
            <ul className="space-y-3">
              {['Flowering Plants', 'Foliage Plants', 'Succulents', 'Trees & Shrubs', 'Herbs & Edibles'].map((category) => (
                <li key={category}>
                  <a href="#" className="text-sage-300 hover:text-white transition-colors duration-200 text-sm">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-sage-400" />
                <span className="text-sage-300 text-sm">hello@plantlibrary.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-sage-400" />
                <span className="text-sage-300 text-sm">8791272107</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-sage-400" />
                <span className="text-sage-300 text-sm">Green Valley</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-medium mb-3">Stay Updated</h5>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email.."
                  className="flex-1 px-3 py-2 bg-forest-800 border border-forest-700 rounded-l-lg focus:outline-none focus:border-sage-500 text-sm"
                />
                <button className="px-4 py-2 bg-sage-600 hover:bg-sage-500 rounded-r-lg transition-colors duration-200 text-sm font-medium">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-forest-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sage-400 text-sm">
              Plant Library. Made with {' '}
              <Heart className="inline h-4 w-4 text-terracotta-400 mx-1" />
              for plant lovers.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sage-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-sage-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-sage-400 hover:text-white text-sm transition-colors duration-200">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;