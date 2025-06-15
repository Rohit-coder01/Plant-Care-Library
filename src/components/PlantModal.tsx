import React from 'react';
import { X, Heart, AlertTriangle, CheckCircle, Droplets, Sun, Thermometer, Scissors } from 'lucide-react';
import { Plant } from '../types/Plant';

interface PlantModalProps {
  plant: Plant;
  onClose: () => void;
}

const PlantModal: React.FC<PlantModalProps> = ({ plant, onClose }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800 border-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'hard': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getToxicityInfo = (toxicity: string) => {
    switch (toxicity) {
      case 'pet-safe':
        return { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50', text: 'Pet Safe' };
      case 'toxic':
        return { icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-50', text: 'Toxic to Pets' };
      case 'mildly-toxic':
        return { icon: AlertTriangle, color: 'text-yellow-600', bg: 'bg-yellow-50', text: 'Mildly Toxic' };
      default:
        return { icon: AlertTriangle, color: 'text-gray-600', bg: 'bg-gray-50', text: 'Unknown' };
    }
  };

  const toxicityInfo = getToxicityInfo(plant.toxicity);
  const ToxicityIcon = toxicityInfo.icon;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-black bg-opacity-50 backdrop-blur-sm" onClick={onClose}></div>

        <div className="inline-block w-full max-w-4xl my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl sm:align-middle">
          {/* Header */}
          <div className="relative">
            <img 
              src={plant.image} 
              alt={plant.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-200"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>

            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(plant.difficulty)}`}>
                    {plant.difficulty}
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm capitalize">
                    {plant.category}
                  </span>
                </div>
                <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-200">
                  <Heart className="h-5 w-5 text-white" />
                </button>
              </div>
              <h2 className="text-3xl font-display font-bold text-white mb-1">{plant.name}</h2>
              <p className="text-sage-200 italic">{plant.scientificName}</p>
            </div>
          </div>

          <div className="p-6">
            {/* Plant Info Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Basic Information */}
              <div>
                <h3 className="text-xl font-display font-semibold text-forest-900 mb-4">Plant Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-sage-100">
                    <span className="text-sage-600">Origin</span>
                    <span className="font-medium text-forest-900">{plant.origin}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-sage-100">
                    <span className="text-sage-600">Size</span>
                    <span className="font-medium text-forest-900">{plant.size}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-sage-100">
                    <span className="text-sage-600">Temperature</span>
                    <span className="font-medium text-forest-900">{plant.temperature}</span>
                  </div>
                  {plant.bloomTime && (
                    <div className="flex items-center justify-between py-2 border-b border-sage-100">
                      <span className="text-sage-600">Bloom Time</span>
                      <span className="font-medium text-forest-900">{plant.bloomTime}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sage-600">Pet Safety</span>
                    <div className={`flex items-center space-x-2 px-3 py-1 rounded-full ${toxicityInfo.bg}`}>
                      <ToxicityIcon className={`h-4 w-4 ${toxicityInfo.color}`} />
                      <span className={`text-sm font-medium ${toxicityInfo.color}`}>{toxicityInfo.text}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Care Requirements */}
              <div>
                <h3 className="text-xl font-display font-semibold text-forest-900 mb-4">Care Requirements</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-sage-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Sun className="h-5 w-5 text-yellow-500" />
                      <span className="font-medium text-forest-900">Light</span>
                    </div>
                    <p className="text-sm text-sage-600 capitalize">{plant.light}</p>
                  </div>
                  
                  <div className="bg-sage-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Droplets className="h-5 w-5 text-blue-500" />
                      <span className="font-medium text-forest-900">Water</span>
                    </div>
                    <p className="text-sm text-sage-600 capitalize">{plant.water}</p>
                  </div>
                  
                  <div className="bg-sage-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Thermometer className="h-5 w-5 text-red-500" />
                      <span className="font-medium text-forest-900">Humidity</span>
                    </div>
                    <p className="text-sm text-sage-600 capitalize">{plant.humidity}</p>
                  </div>
                  
                  <div className="bg-sage-50 p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg">🌱</span>
                      <span className="font-medium text-forest-900">Soil</span>
                    </div>
                    <p className="text-sm text-sage-600">{plant.soil}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-display font-semibold text-forest-900 mb-3">About This Plant</h3>
              <p className="text-sage-700 leading-relaxed">{plant.description}</p>
            </div>

            {/* Care Instructions */}
            <div className="mb-8">
              <h3 className="text-xl font-display font-semibold text-forest-900 mb-4">Care Instructions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-sage-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Droplets className="h-5 w-5 text-blue-600" />
                    <h4 className="font-semibold text-forest-900">Watering</h4>
                  </div>
                  <p className="text-sage-700 text-sm">{plant.careInstructions.watering}</p>
                </div>
                
                <div className="border border-sage-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Sun className="h-5 w-5 text-yellow-600" />
                    <h4 className="font-semibold text-forest-900">Lighting</h4>
                  </div>
                  <p className="text-sage-700 text-sm">{plant.careInstructions.lighting}</p>
                </div>
                
                <div className="border border-sage-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-lg">🌿</span>
                    <h4 className="font-semibold text-forest-900">Fertilizing</h4>
                  </div>
                  <p className="text-sage-700 text-sm">{plant.careInstructions.fertilizing}</p>
                </div>
                
                <div className="border border-sage-200 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Scissors className="h-5 w-5 text-green-600" />
                    <h4 className="font-semibold text-forest-900">Pruning</h4>
                  </div>
                  <p className="text-sage-700 text-sm">{plant.careInstructions.pruning}</p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-xl font-display font-semibold text-forest-900 mb-4">Benefits</h3>
              <div className="flex flex-wrap gap-2">
                {plant.benefits.map((benefit, index) => (
                  <span 
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-forest-100 text-forest-800"
                  >
                    ✨ {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantModal;