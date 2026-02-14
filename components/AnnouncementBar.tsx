
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const announcements = [
  "Permission to pause: Free shipping on orders over $65",
  "Rest is your reset: Join the Soft Life movement today",
  "Discover your digital sanctuary at lovesoftlife.com"
];

export const AnnouncementBar: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % announcements.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-sage text-white text-[11px] font-medium py-2.5 px-4 flex items-center justify-between uppercase tracking-[0.15em]">
      <button onClick={() => setIndex((index - 1 + announcements.length) % announcements.length)} className="opacity-70 hover:opacity-100">
        <ChevronLeft size={14} />
      </button>
      <div className="text-center overflow-hidden h-4 flex items-center justify-center flex-1 mx-4">
        <p key={index} className="animate-in fade-in slide-in-from-right-4 duration-700">
          {announcements[index]}
        </p>
      </div>
      <button onClick={() => setIndex((index + 1) % announcements.length)} className="opacity-70 hover:opacity-100">
        <ChevronRight size={14} />
      </button>
    </div>
  );
};
