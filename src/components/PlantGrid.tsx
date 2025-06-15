import React from 'react';
import PlantCard from './PlantCard';
import { Plant } from '../types/Plant';

interface PlantGridProps {
  plants: Plant[];
  onPlantSelect: (plant: Plant) => void;
}

const PlantGrid: React.FC<PlantGridProps> = ({ plants, onPlantSelect }) => {
  if (plants.length === 0) {
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">🌱</span>
              </div>
              <h3 className="text-2xl font-display font-semibold text-forest-900 mb-2">No plants found</h3>
              <p className="text-sage-600 max-w-md mx-auto">
                Try adjusting your search terms or filters to discover more plants.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-display font-semibold text-forest-900 mb-4">
            Discover {plants.length} Amazing Plant{plants.length !== 1 ? 's' : ''}
          </h3>
          <p className="text-sage-600 max-w-2xl mx-auto">
            Each plant in our collection comes with detailed care instructions and growing tips 
            to help you succeed in your gardening journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {plants.map((plant, index) => (
            <PlantCard 
              key={plant.id} 
              plant={plant} 
              onClick={() => onPlantSelect(plant)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantGrid;