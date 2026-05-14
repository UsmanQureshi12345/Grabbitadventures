import { Equipment } from '../types';

export const equipmentList: Equipment[] = [
  {
    id: 'sleeping-bag',
    name: 'Sleeping Bag (-18°C)',
    brand: 'Mammut / North Face',
    dailyRate: 5,
    weeklyRate: 30,
    requiredFor: ['All treks']
  },
  {
    id: 'crampons',
    name: 'Technical Crampons',
    brand: 'Petzl / Black Diamond',
    dailyRate: 4,
    weeklyRate: 24,
    requiredFor: ['K2', 'Snow Lake']
  },
  {
    id: 'harness',
    name: 'Climbing Harness',
    brand: 'Black Diamond',
    dailyRate: 3,
    weeklyRate: 18,
    requiredFor: ['K2', 'Snow Lake']
  },
  {
    id: 'helmet',
    name: 'Climbing Helmet',
    brand: 'Mammut',
    dailyRate: 2,
    weeklyRate: 12,
    requiredFor: ['K2', 'Snow Lake']
  },
  {
    id: 'trekking-poles',
    name: 'Trekking Poles',
    brand: 'Leki / Black Diamond',
    dailyRate: 2,
    weeklyRate: 12,
    requiredFor: ['All treks']
  },
  {
    id: 'head-torch',
    name: 'High-Beam Headlamp',
    brand: 'Petzl (300+ Lumens)',
    dailyRate: 2,
    weeklyRate: 12,
    requiredFor: ['All treks']
  }
];
