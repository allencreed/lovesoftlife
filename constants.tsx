
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Silk Sleep Sanctuary Mask',
    price: 45.00,
    category: 'Sleep',
    image: 'https://images.unsplash.com/photo-1582234372722-50d7ccc30eba?q=80&w=800&auto=format&fit=crop',
    description: '100% mulberry silk to protect your delicate skin while you claim your right to rest.',
    badges: ['Bestseller']
  },
  {
    id: '2',
    name: 'Cashmere & Sandalwood Candle',
    price: 38.00,
    category: 'Rituals',
    image: 'https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?q=80&w=800&auto=format&fit=crop',
    description: 'A warm, nurturing glow to light up your evening digital sunset ritual.',
  },
  {
    id: '3',
    name: 'Weighted Linen Throw',
    price: 185.00,
    category: 'Sanctuary',
    image: 'https://images.unsplash.com/photo-1512418490979-92798ccc1380?q=80&w=800&auto=format&fit=crop',
    description: '8lbs of gentle pressure for conscious stillness. Your soft landing starts here.',
    badges: ['Essential']
  },
  {
    id: '4',
    name: 'The Soft Life Journal',
    price: 32.00,
    category: 'Journaling',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop',
    description: 'A dedicated space to document your rituals and celebrate small moments of peace.',
    badges: ['New']
  },
  {
    id: '5',
    name: 'Chamomile & Honey Bath Soak',
    price: 24.00,
    category: 'Body',
    image: 'https://images.unsplash.com/photo-1608303588026-884930af25ba?q=80&w=800&auto=format&fit=crop',
    description: 'Nourish your body and soothe your mind with this organic botanical blend.',
  },
  {
    id: '6',
    name: 'Ceramic Ritual Spoon',
    price: 18.00,
    category: 'Rituals',
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4586c55c?q=80&w=800&auto=format&fit=crop',
    description: 'Hand-crafted ceramic for measuring your morning herbs or tea leaves with intention.',
  }
];

export const CATEGORIES = [
  { name: 'Sleep', icon: '🌙', image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800&auto=format&fit=crop' },
  { name: 'Rituals', icon: '🕯️', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop' },
  { name: 'Sanctuary', icon: '🏠', image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=800&auto=format&fit=crop' },
  { name: 'Body', icon: '🛁', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop' }
];

export const CAROUSEL_IMAGES = [
  'https://images.unsplash.com/photo-1490604001847-b712b0c2f967?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1528712306091-ed0763094c98?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1445510861639-5651173bc5d5?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800&auto=format&fit=crop',
];
