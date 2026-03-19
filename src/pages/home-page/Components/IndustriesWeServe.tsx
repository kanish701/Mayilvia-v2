import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box, Cpu, Zap, Settings, Scissors, HardHat, Plus } from 'lucide-react';

const sectors = [
  { name: "Packaging", id: "01", icon: Box, img: "https://www.mindquad.com/wp-content/uploads/2021/02/Packaging-Industry.jpg", tech: "High-Speed Rotary" },
  { name: "Precision CNC", id: "02", icon: Cpu, img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=compress&w=800", tech: "5-Axis Sync" },
  { name: "Processing", id: "03", icon: Zap, img: "https://www.cad-schroer.com/wp-content/uploads/2024/08/Verfahrenstechnik.jpg", tech: "Aseptic Flow" },
  { name: "Textiles Machines", id: "04", icon: Scissors, img: "https://vietextile.com/wp-content/uploads/2025/02/cau-tao-may-det-khi-avt-1024x629.jpg", tech: "Air-Jet Weaving" },
  { name: "Laser Tech", id: "05", icon: Settings, img: "https://image.made-in-china.com/202f0j00mVhqAOzMfUrG/Qbh-Welding-Optical-Fiber-D80-High-Power-Optical-Fiber.webp", tech: "Fiber-Optic Source" },
  { name: "Construction", id: "06", icon: HardHat, img: "https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2025/07/10/b2a9cbf4-d216-469f-baba-44f7b7792c5a_f7578b38.jpg", tech: "Machines" },
];

export default function ArchitecturalIndustries() {
  return (
    <section className="bg-white py-16 px-6 lg:px-20 border-t border-gray-50">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Header: Minimalist & Spaced */}
        <header className="flex flex-col md:flex-row justify-between items-start mb-24">
          <div className="flex gap-4 items-start">
            <span className="text-[10px] font-black text-[#064E3B] rotate-180 [writing-mode:vertical-lr] tracking-[0.5em] border-l border-emerald-100 pl-4">
              CAPABILITIES
            </span>
            <h2 className="text-6xl md:text-8xl font-light text-gray-900 tracking-tighter leading-[0.85]">
              Market <br />
              <span className="text-gray-300 italic font-serif">Intelligence.</span>
            </h2>
          </div>
          <div className="mt-8 md:mt-0 text-right">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-4">
              Verified Verticals 2026
            </p>
            <div className="flex justify-end gap-1">
               {[...Array(6)].map((_, i) => <div key={i} className="w-1 h-6 bg-emerald-900/10" />)}
            </div>
          </div>
        </header>

        {/* The Monograph Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.id}
              className={`group relative h-[500px] border-gray-100 overflow-hidden flex flex-col justify-end
                ${i < 3 ? 'border-b' : ''} 
                ${i % 3 !== 2 ? 'md:border-r' : ''}
              `}
            >
              {/* Background Technical Reveal */}
              <div className="absolute inset-0 z-0 bg-gray-50 transition-transform duration-700 ease-in-out group-hover:-translate-y-full">
                <div className="h-full w-full flex items-center justify-center grayscale opacity-10">
                   <sector.icon size={120} strokeWidth={0.5} />
                </div>
              </div>

              {/* Image Slide-Up Overlay */}
              <div className="absolute inset-0 z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
                <img src={sector.img} className="w-full h-full object-cover grayscale" alt={sector.name} />
                <div className="absolute inset-0 bg-[#064E3B]/80 mix-blend-multiply" />
              </div>

              {/* Static Content (Always Visible) */}
              <div className="relative z-20 p-12 transition-colors duration-500 group-hover:text-white">
                <div className="flex justify-between items-end">
                   <div>
                      <div className="text-[10px] font-black tracking-[0.4em] mb-4 opacity-40 group-hover:opacity-100">
                        {sector.id} // SEC
                      </div>
                      <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">
                        {sector.name}
                      </h3>
                   </div>
                   <Plus className="mb-2 opacity-20 group-hover:opacity-100 transition-transform group-hover:rotate-90" size={24} />
                </div>

                {/* Technical Hidden Details (Reveal on Hover) */}
                <div className="h-0 group-hover:h-16 overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100">
                   <div className="pt-4 border-t border-white/20 mt-4 flex justify-between items-center">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-white/60">
                         {sector.tech}
                      </span>
                      <ArrowRight size={16} />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Footer */}
        <footer className="mt-20 flex flex-col md:flex-row justify-between items-center opacity-40">
           <div className="text-[9px] font-black tracking-[0.5em] uppercase">
             Infrastructure Audit Complete
           </div>
           <div className="h-px flex-1 bg-gray-100 mx-10 hidden md:block" />
           <div className="flex items-center gap-4 text-[9px] font-black tracking-[0.3em] uppercase">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Sourcing Corridor Active
           </div>
        </footer>
      </div>
    </section>
  );
}