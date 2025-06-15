import React from 'react';
import { Heart, Droplets, Sun, Thermometer } from 'lucide-react';
import { Plant } from '../types/Plant';

interface PlantCardProps {
  plant: Plant;
  onClick: () => void;
  index: number;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant, onClick, index }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLightIcon = (light: string) => {
    switch (light) {
      case 'low': return '🌙';
      case 'medium': return '⛅';
      case 'bright': return '☀️';
      case 'direct': return '🔆';
      default: return '☀️';
    }
  };

  const getWaterLevel = (water: string) => {
    switch (water) {
      case 'low': return '💧';
      case 'medium': return '💧💧';
      case 'high': return '💧💧💧';
      default: return '💧';
    }
  };

  return (
    <div 
      className="group bg-white rounded-2xl shadow-soft hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden animate-fade-in border border-sage-100 hover:border-forest-200 hover:-translate-y-1"
      onClick={onClick}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={plant.image} 
          alt={plant.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Difficulty Badge */}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(plant.difficulty)} backdrop-blur-sm`}>
            {plant.difficulty}
          </span>
        </div>

        {/* Heart Icon */}
        <button className="absolute top-3 left-3 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110">
          <Heart className="h-4 w-4 text-forest-600" />
        </button>
      </div>

      <div className="p-5">
        <div className="mb-3">
          <h3 className="font-display font-semibold text-lg text-forest-900 mb-1 group-hover:text-forest-700 transition-colors duration-200">
            {plant.name}
          </h3>
          <p className="text-sage-600 text-sm italic">{plant.scientificName}</p>
        </div>

        <p className="text-sage-700 text-sm mb-4 line-clamp-2 leading-relaxed">
          {plant.description}
        </p>

        {/* Care Icons */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1">
            <span className="text-lg">{getLightIcon(plant.light)}</span>
            <span className="text-sage-600 capitalize">{plant.light}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <span className="text-lg">{getWaterLevel(plant.water)}</span>
            <span className="text-sage-600 capitalize">{plant.water}</span>
          </div>

          <div className="flex items-center space-x-1">
            <Thermometer className="h-4 w-4 text-sage-500" />
            <span className="text-sage-600 text-xs">{plant.temperature.split(' ')[0]}</span>
          </div>
        </div>

        {/* Category Tag */}
        <div className="mt-4 pt-3 border-t border-sage-100">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-forest-100 text-forest-800 capitalize">
            {plant.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;