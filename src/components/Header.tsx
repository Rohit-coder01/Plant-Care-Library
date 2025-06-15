import React from 'react';
import { Leaf, Heart, BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-sage-200 sticky top-0 z-50 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-forest-600 to-forest-800 p-2 rounded-lg shadow-soft">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-display font-semibold text-forest-900">Plant Library</h1>
              <p className="text-xs text-sage-600 font-medium">Your Digital Garden Companion</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="flex items-center space-x-2 text-forest-700 hover:text-forest-900 transition-colors duration-200">
              <BookOpen className="h-4 w-4" />
              <span className="font-medium">Care Guides</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-forest-700 hover:text-forest-900 transition-colors duration-200">
              <Heart className="h-4 w-4" />
              <span className="font-medium">My Plants</span>
            </a>
            <button className="bg-gradient-to-r from-forest-600 to-forest-700 text-white px-4 py-2 rounded-lg font-medium hover:from-forest-700 hover:to-forest-800 transition-all duration-200 shadow-soft hover:shadow-glow">
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;