import React from 'react';
import { Search, Filter, Sparkles } from 'lucide-react';

interface HeroProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedDifficulty: string;
  setSelectedDifficulty: (difficulty: string) => void;
}

const Hero: React.FC<HeroProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedDifficulty,
  setSelectedDifficulty
}) => {
  const categories = [
    { value: 'all', label: 'All Plants' },
    { value: 'flowering', label: 'Flowering' },
    { value: 'foliage', label: 'Foliage' },
    { value: 'succulent', label: 'Succulents' },
    { value: 'tree', label: 'Trees' },
    { value: 'herb', label: 'Herbs' },
    { value: 'fern', label: 'Ferns' }
  ];

  const difficulties = [
    { value: 'all', label: 'All Levels' },
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Expert' }
  ];

  return (
    <section className="relative bg-gradient-to-br from-forest-600 via-forest-700 to-forest-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-forest-600/50 to-transparent"></div>
      
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-16 h-16 bg-sage-400/20 rounded-full blur-sm"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-terracotta-400/20 rounded-full blur-sm"></div>
      </div>
      <div className="absolute bottom-20 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-20 h-20 bg-sage-300/20 rounded-full blur-sm"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-8 w-8 text-sage-300 mr-3 animate-bounce-gentle" />
            <span className="text-sage-300 font-medium tracking-wide uppercase text-sm">Discover Nature's Beauty</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
            Your Plant Journey
            <span className="block text-sage-300">Starts Here</span>
          </h2>
          <p className="text-xl text-sage-100 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive collection of plants with detailed care guides, 
            growing tips, and everything you need to create your perfect green space.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Search Input */}
              <div className="md:col-span-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sage-500 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search plants..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-sage-50 border border-sage-200 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-200 text-forest-900 placeholder-sage-500"
                  />
                </div>
              </div>
    
              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-sage-50 border border-sage-200 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-200 text-forest-900 appearance-none cursor-pointer"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sage-500 h-5 w-5 pointer-events-none" />
              </div>

              {/* Difficulty Filter */}
              <div className="relative">
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-4 py-3 bg-sage-50 border border-sage-200 rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-transparent transition-all duration-200 text-forest-900 appearance-none cursor-pointer"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty.value} value={difficulty.value}>
                      {difficulty.label}
                    </option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sage-500 h-5 w-5 pointer-events-none" />
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-sage-600 text-sm">
                <span className="font-medium">💡 Pro tip:</span> Use filters to find plants perfect for your space and experience level
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;