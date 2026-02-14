
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (p: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="group cursor-pointer flex flex-col space-y-4"
      onClick={() => onClick(product)}
    >
      <div className="relative overflow-hidden aspect-[4/5] bg-white rounded-[2rem] shadow-sm border border-cashmere/10">
        <img 
          src={product.image} 
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-[1.5s] group-hover:scale-105"
        />
        {product.badges?.map(badge => (
          <span key={badge} className="absolute top-5 left-5 bg-cashmere text-white text-[9px] uppercase py-1 px-3 tracking-[0.2em] font-bold rounded-full">
            {badge}
          </span>
        ))}
        <div className="absolute inset-0 bg-sage/0 group-hover:bg-sage/10 transition-colors duration-500" />
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 w-[85%] translate-y-2 group-hover:translate-y-0">
          <button className="w-full bg-white/95 text-softdark py-3.5 text-[9px] uppercase font-bold tracking-[0.2em] hover:bg-softdark hover:text-white transition-all rounded-full shadow-lg">
            Add to Sanctuary
          </button>
        </div>
      </div>
      <div className="text-center px-2">
        <h3 className="text-[13px] font-bold text-softdark/80 group-hover:text-sage transition-colors tracking-wide">
          {product.name}
        </h3>
        <p className="text-[12px] text-sage mt-1 italic font-light">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
