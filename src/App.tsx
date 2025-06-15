import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PlantGrid from './components/PlantGrid';
import PlantModal from './components/PlantModal';
import Footer from './components/Footer';
import { plants } from './data/plants';
import { Plant } from './types/Plant';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [filteredPlants, setFilteredPlants] = useState(plants);

  useEffect(() => {
    let filtered = plants.filter(plant => {
      const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           plant.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || plant.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'all' || plant.difficulty === selectedDifficulty;
      
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
    
    setFilteredPlants(filtered);
  }, [searchTerm, selectedCategory, selectedDifficulty]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest-50 via-white to-sage-50">
      <Header />
      <Hero 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedDifficulty={selectedDifficulty}
        setSelectedDifficulty={setSelectedDifficulty}
      />
      <PlantGrid 
        plants={filteredPlants}
        onPlantSelect={setSelectedPlant}
      />
      {selectedPlant && (
        <PlantModal 
          plant={selectedPlant}
          onClose={() => setSelectedPlant(null)}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;