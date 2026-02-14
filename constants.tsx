
import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Silk Sleep Sanctuary Mask',
    price: 45.00,
    category: 'Sleep',
    image: 'https://images.unsplash.com/photo-1583074312521-360773d6b059?q=80&w=800&auto=format&fit=crop',
    description: '100% mulberry silk to protect your delicate skin while you claim your right to rest.',
    badges: ['Bestseller']
  },
  {
    id: '2',
    name: 'Cashmere & Sandalwood Candle',
    price: 38.00,
    category: 'Rituals',
    image: 'https://images.unsplash.com/photo-1602873145311-482a51069595?q=80&w=800&auto=format&fit=crop',
    description: 'A warm, nurturing glow to light up your evening digital sunset ritual.',
  },
  {
    id: '3',
    name: 'Weighted Linen Throw',
    price: 185.00,
    category: 'Sanctuary',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop',
    description: '8lbs of gentle pressure for conscious stillness. Your soft landing starts here.',
    badges: ['Essential']
  },
  {
    id: '4',
    name: 'The Soft Life Journal',
    price: 32.00,
    category: 'Journaling',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop',
    description: 'A dedicated space to document your rituals and celebrate small moments of peace.',
    badges: ['New']
  },
  {
    id: '5',
    name: 'Chamomile & Honey Bath Soak',
    price: 24.00,
    category: 'Body',
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=800&auto=format&fit=crop',
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
