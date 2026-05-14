import { Trek } from '../types';

export const treks: Trek[] = [
  {
    id: 'k2-base-camp',
    name: 'K2 Base Camp & Gondogoro La',
    region: 'Pakistan',
    duration: '20 Days',
    maxAltitude: '5,588m',
    grade: 'Strenuous',
    groupSize: '6-12',
    bestSeason: 'July – August',
    accommodation: 'Camping',
    price: '$2,450',
    description: 'The journey of a lifetime to the base of the world’s most savage mountain. This trek takes you into the heart of the Karakoram, crossing the high Gondogoro La pass for a panoramic view of four 8,000m peaks.',
    highlights: [
      'Concordia - The Throne Room of the Mountain Gods',
      'K2 Base Camp expedition atmosphere',
      'Crossing Gondogoro La (5,588m)',
      'Views of Broad Peak, Gasherbrum I & II'
    ],
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80',
    itinerary: [
      { day: 1, activity: 'Arrival in Skardu', description: 'Meet the team and gear check.' },
      { day: 2, activity: 'Jeep drive to Askole', description: 'Entrance to the high Karakoram.' },
      { day: 10, activity: 'Reach Concordia', altitude: '4,600m', description: 'Camp at the junction of Baltoro and Godwin-Austen glaciers.' },
      { day: 12, activity: 'K2 Base Camp', altitude: '5,100m', description: 'Full day excursion to the base of K2.' }
    ]
  },
  {
    id: 'snow-lake',
    name: 'Snow Lake & Biafo-Hispar',
    region: 'Pakistan',
    duration: '16 Days',
    maxAltitude: '5,150m',
    grade: 'Technical',
    groupSize: '6-12',
    bestSeason: 'July – August',
    accommodation: 'Camping',
    price: '$1,900',
    description: 'A wilderness epic crossing the longest continuous glacier system outside the poles. Real remote exploration.',
    highlights: [
      'Snow Lake (Lukpe Lawo) plateau',
      'Biafo & Hispar glacier traverse',
      'Pristine high-altitude wilderness',
      'Challenging technical terrain'
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80',
    itinerary: []
  },
  {
    id: 'everest-base-camp',
    name: 'Everest Base Camp',
    region: 'Nepal',
    duration: '14 Days',
    maxAltitude: '5,545m',
    grade: 'Moderate',
    groupSize: '6-12',
    bestSeason: 'March–May / Sept–Nov',
    accommodation: 'Tea House',
    price: '$1,650',
    description: 'The legendary trek to the base of the world’s highest peak. Expanding to Nepal in 2026.',
    highlights: [
      'Kala Patthar sunrise views',
      'Sherpa culture and monasteries',
      'Namche Bazaar atmosphere',
      'Khumbu Glacier trek'
    ],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80',
    itinerary: []
  }
];
