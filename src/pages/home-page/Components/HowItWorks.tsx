import React from 'react';
import { motion } from 'framer-motion';
import { Fingerprint, Box, Zap, ShieldCheck, Cpu, ArrowDownRight } from 'lucide-react';

const corePillars = [
  {
    id: "01",
    title: "Direct OEM Integration",
    desc: "We eliminate the middleman. Your supply chain connects directly to Tier-1 Chinese manufacturers for 30% capital efficiency.",
    icon: Cpu,
    metric: "0% Commission"
  },
  {
    id: "02",
    title: "Technical Risk Mitigation",
    desc: "On-ground engineers perform 50-point physical audits and live 4K verification before any asset leaves the factory floor.",
    icon: ShieldCheck,
    metric: "100% Audit Rate"
  },
  {
    id: "03",
    title: "Full-Scale DDP Logistics",
    desc: "From Shanghai to your facility in India. We handle HSN classification, customs, insurance, and last-mile delivery.",
    icon: Box,
    metric: "Door-to-Door"
  }
];

export default function WhatWeDo() {
  return (
    <section className="bg-white py-16 px-6 lg:px-20 border-t border-gray-50">
      <div className="max-w-[1440px] mx-auto">
        
        {/* --- Header: High-Density Meta --- */}
        <div className="grid lg:grid-cols-12 gap-12 mb-24 items-end">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-black tracking-[0.4em] text-[#064E3B] uppercase">Operational Scope</span>
              <div className="h-px w-12 bg-emerald-100" />
            </div>
            <h2 className="text-5xl md:text-7xl font-light text-gray-900 tracking-tighter leading-none">
              Engineering the <br />
              <span className="text-gray-300 italic font-serif">Sourcing Loop.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 border-l border-gray-100 pl-8 hidden lg:block">
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest leading-relaxed">
              We provide the intelligence layer between <br /> Indian industries and global manufacturing.
            </p>
          </div>
        </div>

        {/* --- The Strategy Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-[40px] overflow-hidden">
          {corePillars.map((pillar, i) => (
            <motion.div 
              key={pillar.id}
              whileHover={{ backgroundColor: "#F9FAFB" }}
              className="bg-white p-12 flex flex-col justify-between group transition-all duration-700 min-h-[450px]"
            >
              <div>
                <div className="flex justify-between items-start mb-16">
                  <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-[#064E3B] group-hover:text-white transition-all duration-500">
                    <pillar.icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-[9px] font-black text-gray-200 uppercase tracking-[0.3em]">
                    PHASE // {pillar.id}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-6 leading-none group-hover:text-emerald-900">
                  {pillar.title}
                </h3>
                <p className="text-[11px] text-gray-500 font-medium leading-relaxed uppercase tracking-tighter max-w-xs">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-10 border-t border-gray-50 flex justify-between items-end">
                <div>
                  <div className="text-[8px] font-black text-gray-300 uppercase tracking-widest mb-2">Protocol Benchmark</div>
                  <div className="text-xs font-black text-emerald-600 uppercase tracking-widest italic">{pillar.metric}</div>
                </div>
                <ArrowDownRight size={20} className="text-gray-200 group-hover:text-gray-900 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Micro-Detail Footer --- */}
        {/* <div className="mt-16 flex flex-wrap justify-between items-center gap-8 opacity-40">
           <div className="flex items-center gap-4">
              <Fingerprint size={14} className="text-gray-900" />
              <span className="text-[9px] font-black tracking-[0.4em] text-gray-900 uppercase">Verification ID: MV-PROTOCOL-2026</span>
           </div>
           <div className="flex items-center gap-4">
              <Zap size={14} className="text-gray-900" />
              <span className="text-[9px] font-black tracking-[0.4em] text-gray-900 uppercase">Live Sourcing Corridor Active</span>
           </div>
        </div> */}

      </div>
    </section>
  );
}