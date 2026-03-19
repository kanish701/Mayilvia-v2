import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, ArrowUpRight } from 'lucide-react';

export default function VerifiedWhatsApp() {
  const [showPopup, setShowPopup] = useState(false);
  const whatsappNumber = "+910000000000"; // Replace with your actual number
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I'm interested in your services.")}`;

  useEffect(() => {
    // 1. Initial professional delay (5s)
    const initialDelay = setTimeout(() => setShowPopup(true), 5000);

    // 2. Continuous professional loop (4s visible, 10s hidden)
    const interval = setInterval(() => {
      setShowPopup(true);
      
      setTimeout(() => {
        setShowPopup(false);
      }, 4000); // 4 seconds visible
      
    }, 14000); // 10s hidden + 4s visible = 14s cycle

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  const openWhatsApp = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-10 right-10 z-[300] flex flex-col items-end gap-5 pointer-events-none selection:bg-[#128C7E]/20">
      
      {/* --- The Technical "Sourcing Assistant" Popup --- */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 30, scale: 0.9 }}
            className="pointer-events-auto bg-white border border-gray-100 shadow-[0_40px_100px_-20px_rgba(18,140,126,0.06)] rounded-[32px] p-8 w-[320px] relative overflow-hidden group"
          >
            {/* Background "Blueprint" Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(#128C7E 0.5px, transparent 0.5px)', backgroundSize: '16px 16px' }} />
            
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-6 right-6 text-gray-200 hover:text-gray-900 transition-colors z-20"
            >
              <X size={14} />
            </button>

            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#128C7E] animate-pulse" />
                <span className="text-[9px] font-black text-gray-300 uppercase tracking-[0.4em] leading-none">
                  Verified Industrial Node
                </span>
              </div>

              <h4 className="text-xl font-black text-gray-900 uppercase tracking-tighter leading-none">
                Initializing Sourcing? <br />
                <span className="text-[#128C7E] italic font-serif text-sm capitalize">How can I assist you?</span>
              </h4>

              <div className="border-t border-gray-50 pt-6">
                 <button 
                  onClick={openWhatsApp}
                  className="flex items-center justify-between w-full bg-gray-50 hover:bg-[#128C7E] hover:text-white px-5 py-4 rounded-xl transition-all duration-500 group/btn"
                >
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">
                      Connect to Sourcing Expert
                    </span>
                    <span className="text-[8px] font-bold text-gray-300 uppercase tracking-tighter group-hover/btn:text-white/60">
                      Response: Within 24 Operational Hours
                    </span>
                  </div>
                  <ArrowUpRight size={16} className="text-gray-200 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- The Verified Communication Toggle --- */}
      <motion.button
        onClick={openWhatsApp}
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        className="pointer-events-auto w-16 h-16 bg-[#128C7E] text-white rounded-full shadow-2xl shadow-[#128C7E]/30 flex items-center justify-center group relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#064E3B]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* OFFICIAL WHATSAPP ICON (Using Simple SVG format) */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-7 h-7 fill-current relative z-10 transition-transform group-hover:rotate-12 group-hover:scale-110">
           <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-117zm-157 338.7h-.1c-33.2 0-65.7-8.9-93.9-25.7l-6.7-4-69.8 18.3L72 356.5l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-11.2-5.6-23.7-14.9-33.8-24.1-8.2-7.3-13.8-16.2-15.3-21.7-1.5-5.5-.2-8.5 2.6-11.3 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.5 5.5-9.3 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>

        {/* Global Connection Light */}
        <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 border-2 border-[#128C7E] rounded-full" />
      </motion.button>

    </div>
  );
}