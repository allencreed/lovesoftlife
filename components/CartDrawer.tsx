
import React from 'react';
import { X, ShoppingBag, Trash2, Minus, Plus, Heart } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onUpdateQty, onRemove }) => {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div className="absolute inset-0 bg-softdark/20 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-500 rounded-l-[3rem]">
        <div className="p-8 border-b border-cashmere/10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Heart size={20} className="text-cashmere" />
            <h2 className="font-serif text-2xl italic text-softdark">Your Sanctuary ({items.length})</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-cloud rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 hide-scrollbar">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-20 h-20 bg-cloud rounded-full flex items-center justify-center">
                 <ShoppingBag size={30} className="text-cashmere" strokeWidth={1} />
              </div>
              <p className="text-gray-400 italic font-serif text-lg">Your sanctuary is waiting for its first item...</p>
              <button 
                onClick={onClose}
                className="bg-softdark text-white px-10 py-4 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full hover:bg-sage transition-all"
              >
                Begin Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {items.map((item) => (
                <div key={item.id} className="flex space-x-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="w-24 h-28 flex-shrink-0 bg-cloud rounded-2xl overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm font-bold text-softdark/80">{item.name}</h3>
                        <button onClick={() => onRemove(item.id)} className="text-cashmere/60 hover:text-red-400 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-[10px] text-sage uppercase tracking-widest mt-1 font-bold">{item.category}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center bg-cloud rounded-full border border-cashmere/10">
                        <button 
                          onClick={() => onUpdateQty(item.id, -1)}
                          className="p-1.5 hover:text-sage transition-colors disabled:opacity-20"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-xs font-bold text-softdark">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQty(item.id, 1)}
                          className="p-1.5 hover:text-sage transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <p className="text-sm font-bold text-softdark">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-8 bg-cloud/50 border-t border-cashmere/10 space-y-6">
            <div className="flex justify-between items-end">
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-sage font-bold mb-1">Subtotal</span>
                <span className="font-serif text-3xl italic text-softdark">${subtotal.toFixed(2)}</span>
              </div>
              <div className="text-[10px] text-gray-400 uppercase tracking-widest text-right">
                Taxes & shipping <br /> calculated at checkout
              </div>
            </div>
            <button className="w-full bg-softdark text-white py-6 text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-sage transition-all rounded-full shadow-lg">
              Complete Ritual
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
