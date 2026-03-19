import React from 'react';
import { Settings2, ArrowRight, Cpu, Activity, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServiceHero() {
  return (
    <section className="relative pt-32 pb-16 px-6 lg:px-20 bg-white overflow-hidden border-b border-gray-50">
      {/* Background Technical Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#064E3B 0.5px, transparent 0.5px)', 
          backgroundSize: '24px 24px' 
        }} 
      />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: Core Narrative (8 Columns) */}
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-3 py-1 bg-emerald-50 border border-emerald-100 text-[#064E3B] text-[9px] font-black uppercase tracking-[0.4em] mb-12 shadow-sm"
            >
              <Settings2 size={12} strokeWidth={2.5} />
              Capability Protocol // 2026.03
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-light text-gray-900 leading-[0.95] tracking-tighter mb-12 max-w-4xl"
            >
              The technical bridge to <br />
              <span className="text-gray-400 italic font-serif">global production.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-500 text-[11px] md:text-xs leading-relaxed max-w-lg font-bold uppercase tracking-widest border-l border-gray-100 pl-8"
            >
              We eliminate the friction of international machinery procurement through 
              on-ground technical audits, direct OEM integration, and DDP logistics management.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-16 flex items-center gap-8"
            >
              <button className="px-10 py-4 bg-[#064E3B] text-white rounded-full text-[9px] font-black uppercase tracking-[0.3em] shadow-xl shadow-emerald-900/20 hover:scale-105 transition-all">
                Submit Requirement
              </button>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-12 h-px bg-gray-100" />
                <span className="text-[8px] font-black uppercase tracking-widest">Scroll to Explore</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Technical Intelligence Sidebar (4 Columns) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 hidden lg:block"
          >
            <div className="bg-gray-50 border border-gray-100 rounded-[32px] p-8 shadow-sm">
              <div className="flex justify-between items-center mb-10">
                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">
                  Active Corridor Status
                </span>
                <Activity size={14} className="text-emerald-500 animate-pulse" />
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm border border-gray-100">
                    <Globe size={14} className="text-[#064E3B]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-900 uppercase leading-none mb-1">Shanghai HQ</div>
                    <div className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">Verified Sourcing Active</div>
                  </div>
                </div>

                <div className="w-full h-px bg-gray-200/50" />

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm border border-gray-100">
                    <Cpu size={14} className="text-[#064E3B]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-black text-gray-900 uppercase leading-none mb-1">Technical Audit</div>
                    <div className="text-[9px] font-bold text-gray-400 uppercase tracking-tighter">50-Point Protocol Online</div>
                  </div>
                </div>
              </div>

              {/* Bottom "Live Update" Panel */}
              <div className="mt-12 p-6 bg-white rounded-2xl border border-gray-100 group cursor-pointer hover:border-emerald-200 transition-colors">
                <div className="text-[8px] font-black text-gray-300 uppercase tracking-widest mb-3">Latest Verification</div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-gray-900 italic">CNC-8821 // DDP Clear</span>
                  <ArrowRight size={14} className="text-emerald-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}