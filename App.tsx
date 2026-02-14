
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { AnnouncementBar } from './components/AnnouncementBar';
import { ProductCard } from './components/ProductCard';
import { CartDrawer } from './components/CartDrawer';
import { AIAssistant } from './components/AIAssistant';
import { PRODUCTS, CATEGORIES } from './constants';
import { Product, CartItem, View } from './types';
import { ArrowRight, Star, Heart, Wind, Moon, Sun, X } from 'lucide-react';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathText, setBreathText] = useState('Breathe In');

  useEffect(() => {
    let interval: any;
    if (isBreathing) {
      interval = setInterval(() => {
        setBreathText(prev => prev === 'Breathe In' ? 'Breathe Out' : 'Breathe In');
      }, 4000);
      
      const timer = setTimeout(() => {
        setIsBreathing(false);
      }, 16000);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, [isBreathing]);

  const addToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateCartQty = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const openProduct = (p: Product) => {
    setSelectedProduct(p);
    setView('product');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-cashmere/30 selection:text-softdark">
      <AnnouncementBar />
      <Header 
        cartCount={cartItems.length} 
        onCartClick={() => setIsCartOpen(true)} 
        onHomeClick={() => setView('home')}
        onPauseClick={() => setIsBreathing(true)}
      />

      {isBreathing && (
        <div className="fixed inset-0 z-[100] bg-cloud/95 backdrop-blur-md flex flex-col items-center justify-center animate-in fade-in duration-1000">
           <button onClick={() => setIsBreathing(false)} className="absolute top-8 right-8 p-4 hover:rotate-90 transition-transform">
             <X size={24} className="text-sage" />
           </button>
           <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-cashmere/20 animate-breathe flex items-center justify-center">
             <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-cashmere/40" />
           </div>
           <p className="mt-12 font-serif text-3xl text-sage animate-pulse">{breathText}</p>
           <p className="mt-4 text-[10px] uppercase tracking-[0.3em] text-softdark/40">Conscious Stillness Session</p>
        </div>
      )}

      <main className="flex-1">
        {view === 'home' && (
          <>
            {/* Hero Section */}
            <section className="relative h-[85vh] bg-cloud overflow-hidden flex items-center">
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop" 
                  className="w-full h-full object-cover opacity-60 scale-105" 
                  alt="Still life of comfort"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cloud via-cloud/40 to-transparent" />
              </div>
              <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl">
                  <div className="flex items-center space-x-3 text-sage mb-6">
                    <span className="h-px w-8 bg-sage" />
                    <span className="text-[10px] uppercase font-bold tracking-[0.3em]">The Art of Conscious Stillness</span>
                  </div>
                  <h2 className="font-serif text-5xl md:text-8xl text-softdark mb-8 leading-[1.1]">
                    Find your <br /><span className="italic font-light">soft landing</span>.
                  </h2>
                  <p className="text-lg text-softdark/70 mb-12 max-w-md leading-relaxed italic">
                    Rest is not a luxury. It is a radical, necessary act of self-care. Discover rituals to reclaim your peace.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="bg-softdark text-white px-10 py-5 text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-sage transition-all transform hover:-translate-y-1 shadow-xl">
                      Shop The Collection
                    </button>
                    <button onClick={() => setIsBreathing(true)} className="bg-white text-softdark px-10 py-5 text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-cloud border border-cashmere transition-all flex items-center justify-center space-x-2">
                      <Wind size={16} />
                      <span>Take a Breath</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Brand Essence Section */}
            <section className="py-24 bg-white">
              <div className="container mx-auto px-4 text-center max-w-3xl">
                <FlowerIcon className="mx-auto mb-8 text-cashmere h-12 w-12" />
                <h2 className="font-serif text-3xl md:text-4xl text-softdark mb-6 italic">Softness is your strength.</h2>
                <p className="text-gray-500 leading-relaxed text-lg">
                  We actively fight hustle culture by giving you explicit permission to stop, breathe, and do nothing without guilt. Love Soft Life is your sanctuary in a loud world.
                </p>
              </div>
            </section>

            {/* Collections Grid */}
            <section className="pb-24 container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {CATEGORIES.map((cat) => (
                  <div key={cat.name} className="relative aspect-[4/5] group overflow-hidden cursor-pointer rounded-3xl shadow-sm border border-cashmere/10">
                    <img src={cat.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={cat.name} />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-softdark/30 transition-all duration-500" />
                    <div className="absolute bottom-8 left-0 w-full px-6 flex flex-col items-center text-white">
                      <span className="text-[10px] uppercase tracking-[0.4em] mb-2 opacity-80">{cat.icon} Ritual</span>
                      <h3 className="font-serif text-2xl mb-4 group-hover:translate-y-[-4px] transition-transform">{cat.name}</h3>
                      <div className="h-px w-0 group-hover:w-12 bg-white transition-all duration-500" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Section */}
            <section className="py-24 bg-cloud">
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 space-y-6 md:space-y-0">
                  <div className="text-center md:text-left">
                    <h2 className="font-serif text-4xl text-softdark italic mb-2">Rest is your reset.</h2>
                    <p className="text-sage text-[10px] uppercase tracking-[0.3em] font-bold">Tools for intentional living</p>
                  </div>
                  <a href="#" className="text-[10px] uppercase tracking-[0.3em] font-bold text-softdark border-b border-softdark/20 pb-1 hover:text-sage hover:border-sage transition-all">
                    Explore All Tools
                  </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                  {PRODUCTS.slice(0, 4).map(p => (
                    <ProductCard key={p.id} product={p} onClick={openProduct} />
                  ))}
                </div>
              </div>
            </section>

            {/* Value Props */}
            <section className="py-16 bg-white border-y border-cashmere/10">
              <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col items-center text-center space-y-4">
                   <div className="bg-cloud p-5 rounded-full text-sage">
                    <Moon size={24} strokeWidth={1} />
                   </div>
                   <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold">Permission to Pause</h4>
                   <p className="text-sm text-gray-500 max-w-[220px]">Explicitly stop without the weight of guilt.</p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                   <div className="bg-cloud p-5 rounded-full text-sage">
                    <Sun size={24} strokeWidth={1} />
                   </div>
                   <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold">The Digital Sunset</h4>
                   <p className="text-sm text-gray-500 max-w-[220px]">Products curated for your transition into rest.</p>
                </div>
                <div className="flex flex-col items-center text-center space-y-4">
                   <div className="bg-cloud p-5 rounded-full text-sage">
                    <Heart size={24} strokeWidth={1} />
                   </div>
                   <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold">Conscious Stillness</h4>
                   <p className="text-sm text-gray-500 max-w-[220px]">Tools to build resilience through calm.</p>
                </div>
              </div>
            </section>
          </>
        )}

        {view === 'product' && selectedProduct && (
          <section className="py-16 md:py-24 container mx-auto px-4 animate-in fade-in duration-700">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                <div className="relative group">
                  <div className="aspect-[4/5] bg-white rounded-[3rem] overflow-hidden shadow-sm border border-cashmere/10">
                    <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cashmere rounded-full mix-blend-multiply opacity-20 animate-pulse" />
                </div>
                <div className="flex flex-col space-y-10">
                  <nav className="text-[9px] uppercase tracking-[0.4em] text-sage/60 font-bold flex items-center space-x-3">
                    <button onClick={() => setView('home')} className="hover:text-softdark">Home</button>
                    <span>/</span>
                    <span>{selectedProduct.category}</span>
                  </nav>
                  
                  <div className="space-y-6">
                    <h1 className="font-serif text-5xl md:text-6xl text-softdark leading-tight italic">
                      {selectedProduct.name}
                    </h1>
                    <div className="flex items-center space-x-3">
                      <div className="flex text-honey">
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-gray-400">Trusted by many</span>
                    </div>
                    <p className="text-3xl font-light text-sage italic">
                      ${selectedProduct.price.toFixed(2)}
                    </p>
                  </div>

                  <p className="text-gray-500 leading-relaxed text-lg italic">
                    {selectedProduct.description}
                  </p>

                  <div className="space-y-8 pt-10 border-t border-cashmere/10">
                    <div className="flex flex-col space-y-5">
                      <label className="text-[10px] uppercase font-bold tracking-[0.3em] text-softdark/50">Your preference</label>
                      <div className="flex flex-wrap gap-3">
                        {['Natural', 'Earthy', 'Ethereal'].map(v => (
                          <button key={v} className="px-8 py-3.5 border border-cashmere/30 text-[10px] uppercase tracking-widest font-bold hover:border-sage transition-all focus:bg-sage focus:text-white rounded-full">
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button 
                      onClick={() => addToCart(selectedProduct)}
                      className="w-full bg-softdark text-white py-6 text-[11px] uppercase tracking-[0.4em] font-bold hover:bg-sage transition-all shadow-xl rounded-full transform active:scale-95"
                    >
                      Begin Ritual — ${selectedProduct.price.toFixed(2)}
                    </button>
                  </div>
                </div>
             </div>
          </section>
        )}
      </main>

      <footer className="bg-cloud pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="space-y-8">
              <h3 className="font-serif text-2xl text-softdark italic">lovesoftlife.com</h3>
              <p className="text-sm text-gray-400 leading-loose">
                An artful curation of conscious stillness. We equip you with rituals for the intentional life you deserve.
              </p>
            </div>
            <div className="space-y-8">
              <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-sage">Sanctuary Care</h4>
              <ul className="space-y-5 text-[12px] text-gray-500 uppercase tracking-widest">
                <li><a href="#" className="hover:text-sage transition-colors">Our Ethos</a></li>
                <li><a href="#" className="hover:text-sage transition-colors">Shipping Rituals</a></li>
                <li><a href="#" className="hover:text-sage transition-colors">Soft Returns</a></li>
                <li><a href="#" className="hover:text-sage transition-colors">Connect</a></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-sage">Movement</h4>
              <ul className="space-y-5 text-[12px] text-gray-500 uppercase tracking-widest">
                <li><a href="#" className="hover:text-sage transition-colors">The Soft Library</a></li>
                <li><a href="#" className="hover:text-sage transition-colors">Audio Rests</a></li>
                <li><a href="#" className="hover:text-sage transition-colors">Membership</a></li>
                <li><a href="#" className="hover:text-sage transition-colors">Retreats</a></li>
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-sage">Claim your rest</h4>
              <p className="text-sm text-gray-400 italic">Join our community and get 15% off your first sanctuary addition.</p>
              <div className="flex border-b border-cashmere pb-3">
                <input type="email" placeholder="Email for peace" className="flex-1 text-sm bg-transparent outline-none italic" />
                <button className="text-sage hover:translate-x-2 transition-transform"><ArrowRight size={18} /></button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-cashmere/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[9px] uppercase tracking-[0.4em] text-gray-400">
            <div>© 2026 Love Soft Life. Find your soft landing.</div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-sage">Privacy</a>
              <a href="#" className="hover:text-sage">Terms</a>
              <a href="#" className="hover:text-sage">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onUpdateQty={updateCartQty}
        onRemove={removeFromCart}
      />
      <AIAssistant />
    </div>
  );
};

const FlowerIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 10C12 10 12 10 12 10C12 10 12 10 12 10Z" />
    <path d="M12 2C12 2 15 5 15 8C15 11 12 12 12 12C12 12 9 11 9 8C9 5 12 2 12 2Z" />
    <path d="M12 22C12 22 15 19 15 16C15 13 12 12 12 12C12 12 9 13 9 16C9 19 12 22 12 22Z" />
    <path d="M22 12C22 12 19 15 16 15C13 15 12 12 12 12C12 12 13 9 16 9C19 9 22 12 22 12Z" />
    <path d="M2 12C2 12 5 15 8 15C11 15 12 12 12 12C12 12 11 9 8 9C5 9 2 12 2 12Z" />
  </svg>
);

export default App;
