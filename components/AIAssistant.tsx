
import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, Flower, Heart } from 'lucide-react';
import { getArtisanAdvice } from '../services/geminiService';

export const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string}[]>([
    { role: 'ai', text: "Welcome to your soft landing. I'm your Guide. How can I help you find peace in your day today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    const aiResponse = await getArtisanAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white w-[350px] sm:w-[380px] h-[520px] rounded-[2rem] shadow-2xl flex flex-col border border-cashmere/20 animate-in zoom-in-95 duration-300 origin-bottom-right">
          <div className="bg-cloud p-5 rounded-t-[2rem] flex items-center justify-between border-b border-cashmere/10">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-cashmere rounded-full flex items-center justify-center">
                <Flower size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-softdark">Soft Life Guide</h3>
                <p className="text-[10px] text-sage italic uppercase tracking-wider">A space for stillness</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-cashmere/20 p-2 rounded-full transition-colors">
              <X size={18} className="text-softdark" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-5 hide-scrollbar bg-[#ffffff]" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-sage text-white rounded-[1.5rem] rounded-br-none shadow-sm' 
                  : 'bg-cloud text-softdark rounded-[1.5rem] rounded-bl-none italic'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-cloud p-4 rounded-full flex space-x-2">
                  <div className="w-1.5 h-1.5 bg-cashmere rounded-full animate-bounce" />
                  <div className="w-1.5 h-1.5 bg-cashmere rounded-full animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 bg-cashmere rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          <div className="p-5 border-t border-cashmere/10">
            <div className="flex items-center space-x-3 bg-cloud rounded-full px-5 py-3 border border-cashmere/20">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="How do you feel?"
                className="flex-1 bg-transparent border-none focus:outline-none text-sm placeholder:italic"
              />
              <button onClick={handleSend} disabled={isLoading} className="text-sage hover:scale-110 transition-transform disabled:opacity-30">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative w-16 h-16 bg-white text-sage rounded-full flex items-center justify-center shadow-lg border border-cashmere/30 hover:shadow-xl transition-all hover:-translate-y-1"
        >
          <Flower size={28} className="group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cashmere opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-cashmere"></span>
          </span>
        </button>
      )}
    </div>
  );
};
