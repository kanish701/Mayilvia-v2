import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Plane, Video, Calculator, 
  ShieldCheck, Ship, FileText, Home, 
  ArrowUpRight, Globe, CheckCircle2 
} from 'lucide-react';

const coreServices = [
  {
    id: "01",
    category: "PROCUREMENT",
    title: "Direct Factory Sourcing",
    desc: "Bypassing traders to establish direct OEM channels. High-spec machinery at original factory pricing.",
    icon: Search,
    features: ["Verified Manufacturers", "0% Middleman Commission"]
  },
  {
    id: "02",
    category: "ON-GROUND",
    title: "China Visit & Digital Sync",
    desc: "Complete travel concierge (Visa, Flight, Hotel, Translator) or high-fidelity 4K live video audits if remote.",
    icon: Plane,
    videoIcon: Video,
    features: ["Visa & Stay Support", "Live Factory Tours"]
  },
  {
    id: "03",
    category: "FINANCIAL",
    title: "Strategic Negotiation",
    desc: "Bilingual technical experts negotiating contract terms, component specs, and final pricing directly with owners.",
    icon: Calculator,
    features: ["Cost Optimization", "Legal Contract Review"]
  },
  {
    id: "04",
    category: "TECHNICAL",
    title: "Quality Inspection",
    desc: "Rigorous 50-point physical testing and functional validation before the asset is cleared for port delivery.",
    icon: ShieldCheck,
    features: ["Pre-shipment Audit", "Spec-match Guarantee"]
  },
  {
    id: "05",
    category: "LOGISTICS",
    title: "Shipping & Insurance",
    desc: "Full-scale maritime and air freight management. We handle documentation and comprehensive cargo insurance.",
    icon: Ship,
    features: ["Sea/Air Freight", "Transit Risk Coverage"]
  },
  {
    id: "06",
    category: "COMPLIANCE",
    title: "Customs & Door Delivery",
    desc: "Professional HSN classification and 100% legal import handling. Last-mile delivery to your facility floor in India.",
    icon: Home,
    features: ["HSN Logic", "DDP Final Delivery"]
  }
];

export default function ServiceMatrix() {
  return (
    <section className="bg-[#FCFCFD] py-32 px-6 lg:px-20">
      <div className="max-w-[1440px] mx-auto">
        
        {/* --- Section Header --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 pb-10 border-b border-gray-100">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[9px] font-black tracking-[0.5em] text-[#064E3B] uppercase">Service Capabilities</span>
              <div className="h-px w-12 bg-emerald-100" />
            </div>
            <h2 className="text-5xl font-light text-gray-900 tracking-tighter leading-none">
              End-to-End <br />
              <span className="text-gray-400 italic font-serif">Sourcing Infrastructure.</span>
            </h2>
          </div>
          <div className="hidden lg:block text-right">
             <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-2 font-mono">STATUS: 24/7 ACTIVE</div>
             <div className="flex gap-1 justify-end">
                {[...Array(5)].map((_, i) => <div key={i} className="w-1 h-4 bg-emerald-900" />)}
             </div>
          </div>
        </div>

        {/* --- The Technical Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 overflow-hidden rounded-[32px]">
          {coreServices.map((service, index) => (
            <motion.div 
              key={service.id}
              whileHover={{ backgroundColor: '#ffffff' }}
              className="bg-white p-12 flex flex-col justify-between group transition-all duration-500"
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#064E3B] group-hover:text-white transition-all duration-500 shadow-sm">
                    <service.icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-[8px] font-black text-gray-300 uppercase tracking-[0.4em] leading-none">
                    {service.category} // {service.id}
                  </span>
                </div>

                <h3 className="text-xl font-black text-gray-900 uppercase tracking-tighter mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[11px] text-gray-500 font-medium leading-relaxed mb-8 max-w-xs uppercase tracking-tighter">
                  {service.desc}
                </p>

                {/* Micro-feature list */}
                <div className="space-y-3 mb-10">
                   {service.features.map((feature, fIndex) => (
                     <div key={fIndex} className="flex items-center gap-3">
                        <CheckCircle2 size={12} className="text-emerald-500" />
                        <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{feature}</span>
                     </div>
                   ))}
                </div>
              </div>

              <div className="pt-8 border-t border-gray-50 flex justify-between items-center">
                <div className="flex items-center gap-2">
                   <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Protocol Active</span>
                </div>
                <button className="text-gray-300 group-hover:text-gray-900 transition-colors">
                   <ArrowUpRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Global Action Meta --- */}
        <div className="mt-20 flex flex-col md:flex-row justify-center items-center gap-8 opacity-40">
           <div className="flex items-center gap-4">
              <Globe size={14} className="text-gray-900" />
              <span className="text-[9px] font-black tracking-[0.4em] text-gray-900 uppercase">China Sourcing HQ</span>
           </div>
           <div className="w-12 h-px bg-gray-200 hidden md:block" />
           <div className="flex items-center gap-4">
              <Home size={14} className="text-gray-900" />
              <span className="text-[9px] font-black tracking-[0.4em] text-gray-900 uppercase">Indian Distribution</span>
           </div>
        </div>

      </div>
    </section>
  );
}