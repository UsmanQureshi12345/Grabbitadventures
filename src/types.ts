export interface Trek {
  id: string;
  name: string;
  region: 'Pakistan' | 'Nepal';
  duration: string;
  maxAltitude: string;
  grade: 'Moderate' | 'Strenuous' | 'Technical';
  groupSize: string;
  bestSeason: string;
  accommodation: string;
  description: string;
  highlights: string[];
  itinerary: { day: number; activity: string; altitude?: string; description: string }[];
  price: string;
  image: string;
}

export interface Equipment {
  id: string;
  name: string;
  brand: string;
  dailyRate: number;
  weeklyRate: number;
  requiredFor: string[];
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  image: string;
}
