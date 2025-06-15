export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  category: 'flowering' | 'foliage' | 'succulent' | 'tree' | 'herb' | 'fern';
  difficulty: 'easy' | 'medium' | 'hard';
  light: 'low' | 'medium' | 'bright' | 'direct';
  water: 'low' | 'medium' | 'high';
  humidity: 'low' | 'medium' | 'high';
  temperature: string;
  soil: string;
  description: string;
  careInstructions: {
    watering: string;
    lighting: string;
    fertilizing: string;
    pruning: string;
  };
  benefits: string[];
  toxicity: 'pet-safe' | 'toxic' | 'mildly-toxic';
  image: string;
  origin: string;
  size: string;
  bloomTime?: string;
}