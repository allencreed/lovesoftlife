
import React from 'react';
import { Search, User, ShoppingBag, Menu, Wind } from 'lucide-react';

interface HeaderProps {
  onCartClick: () => void;
  onHomeClick: () => void;
  onPauseClick: () => void;
  cartCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onCartClick, onHomeClick, onPauseClick, cartCount }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-cashmere/20">
      <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <button className="lg:hidden p-2 text-softdark">
            <Menu size={20} />
          </button>
          <nav className="hidden lg:flex space-x-8 text-[11px] font-bold uppercase tracking-[0.2em] text-softdark/70">
            <a href="#" className="hover:text-sage transition-colors">Sleep</a>
            <a href="#" className="hover:text-sage transition-colors">Rituals</a>
            <a href="#" className="hover:text-sage transition-colors">Sanctuary</a>
            <a href="#" className="hover:text-sage transition-colors">Journal</a>
          </nav>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer flex flex-col items-center" onClick={onHomeClick}>
          <h1 className="font-serif text-xl md:text-2xl tracking-tighter text-softdark">
            lovesoft<span className="italic font-light">life</span>.com
          </h1>
          <div className="h-0.5 w-8 bg-cashmere mt-0.5 rounded-full" />
        </div>

        <div className="flex items-center space-x-1 md:space-x-4">
          <button 
            onClick={onPauseClick}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-cloud border border-cashmere/30 text-[10px] uppercase tracking-widest text-sage hover:bg-cashmere/10 transition-colors mr-2 hidden sm:flex"
          >
            <Wind size={14} />
            <span>Pause</span>
          </button>
          <button className="p-2 text-softdark/70 hover:text-softdark transition-colors">
            <Search size={20} strokeWidth={1.2} />
          </button>
          <button className="p-2 text-softdark/70 hover:text-softdark transition-colors relative" onClick={onCartClick}>
            <ShoppingBag size={20} strokeWidth={1.2} />
            {cartCount > 0 && (
              <span className="absolute top-1.5 right-1.5 bg-sage text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
