
export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Sleep' | 'Rituals' | 'Sanctuary' | 'Body' | 'Journaling';
  image: string;
  description: string;
  variants?: string[];
  badges?: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedVariant?: string;
}

export type View = 'home' | 'collection' | 'product' | 'journal';
