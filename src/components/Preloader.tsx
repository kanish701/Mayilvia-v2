import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/mayilvia.png';

const Preloader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-white"
    >
      <div className="relative flex flex-col items-center gap-12">
        {/* Animated Brand Identity */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          <img 
            src={logo} 
            alt="Mayilvia Logo" 
            className="h-20 w-auto object-contain brightness-110" 
          />
          {/* Subtle Technical Pulse */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-4 bg-emerald-500/5 rounded-full blur-2xl"
          />
        </motion.div>

        {/* Technical Loading Status */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-black text-[#064E3B] uppercase tracking-[0.5em] leading-none">
              Welcome to Mayilvia
            </span>
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-1 h-1 rounded-full bg-emerald-500"
                />
              ))}
            </div>
          </div>

          {/* Minimalist Progress Bar */}
          <div className="w-48 h-[1px] bg-gray-100 relative overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "0%" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-emerald-600"
            />
          </div>
          
          <div className="text-[8px] font-bold text-gray-300 uppercase tracking-widest mt-2">
            Start Your Journey with us
          </div>
        </div>
      </div>

      {/* Background Micro-Details */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#064E3B 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
      
      <div className="absolute bottom-12 left-12 flex items-center gap-4 opacity-10">
         <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#064E3B]">Ver 2.0.26</span>
         <div className="h-px w-8 bg-[#064E3B]" />
         <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#064E3B]">Core Engine</span>
      </div>
    </motion.div>
  );
};

export default Preloader;
