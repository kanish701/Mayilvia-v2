import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Globe, Quote } from 'lucide-react';

const testimonials = [
  {
    company: "Industrial Group Ltd.",
    location: "Mumbai, IN",
    quote: "The transparency Mayilvia provides via live factory audits is unmatched. We sourced $2M in CNC machinery with zero defects.",
    author: "Rajesh Khanna",
    role: "COO",
    id: "VER-0882"
  },
  {
    company: "Heritage Furnishings",
    location: "Dubai, UAE",
    quote: "Sourcing premium furniture from China used to be a gamble. With on-ground verification, we've cut our QC issues by 95%.",
    author: "Sarah Al-Maktoum",
    role: "Lead Procurement",
    id: "VER-1149"
  },
  {
    company: "Apex Tech Solutions",
    location: "Singapore",
    quote: "Their DDP logistics handled everything. The transition from Shanghai to our facility was seamless and ahead of schedule.",
    author: "Chen Wei",
    role: "Supply Director",
    id: "VER-9921"
  },
  {
    company: "Textile Corpe",
    location: "Chennai, IN",
    quote: "Highly efficient technical vetting. They identified motor spec mismatches before we even paid the deposit.",
    author: "Arun Kumar",
    role: "Technical Head",
    id: "VER-4402"
  }
];

// Duplicate for seamless looping
const duplicatedTestimonials = [...testimonials, ...testimonials];

export default function AutoScrollTestimonials() {
  return (
    <section className="bg-white py-16 border-t border-gray-50 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 mb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[9px] font-black tracking-[0.4em] text-emerald-600 uppercase">Verification Stream</span>
          <div className="h-px w-12 bg-emerald-100" />
        </div>
        <h2 className="text-4xl md:text-6xl font-light text-gray-900 tracking-tighter leading-none">
          Live Industrial <br />
          <span className="text-gray-400 italic font-serif text-3xl md:text-5xl">Validation logs.</span>
        </h2>
      </div>

      {/* --- The Infinite Auto-Scroll Track --- */}
      <div className="relative flex overflow-hidden group">
        <motion.div 
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 35, 
            repeat: Infinity 
          }}
          // Pause on hover for better UX
          whileHover={{ animationPlayState: 'paused' }}
        >
          {duplicatedTestimonials.map((t, index) => (
            <div 
              key={index}
              className="w-[380px] md:w-[450px] bg-[#F9FAFB] rounded-[40px] p-10 border border-gray-100 flex flex-col justify-between shrink-0 hover:border-emerald-200 hover:bg-white transition-all duration-700"
            >
              <div>
                <div className="flex justify-between items-start mb-10">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={12} className="text-emerald-500" />
                    <span className="text-[8px] font-black text-gray-300 uppercase tracking-widest leading-none">
                      Audit: {t.id}
                    </span>
                  </div>
                  <div className="flex gap-0.5 text-[#c9a24a]">
                    {[1,2,3,4,5].map(s => <Star key={s} size={8} fill="currentColor" strokeWidth={0} />)}
                  </div>
                </div>
                
                <Quote size={20} className="text-emerald-100/50 mb-6" />
                <p className="text-gray-900 text-sm md:text-base font-medium leading-relaxed mb-12 whitespace-normal italic font-serif">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-gray-900 text-[10px] font-black uppercase tracking-widest leading-tight">
                    {t.author}
                  </span>
                  <span className="text-gray-400 text-[8px] font-bold uppercase tracking-tighter">
                    {t.role}
                  </span>
                </div>
                
                <div className="flex items-center gap-3 text-right">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-black text-emerald-900 uppercase tracking-widest">{t.company}</span>
                    <span className="text-[8px] font-bold text-gray-300 uppercase tracking-widest">{t.location}</span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-gray-100">
                    <Globe size={12} className="text-emerald-600" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* Subtle Side Fades for depth */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>

      {/* --- Technical Status Footer --- */}
      <div className="mt-20 px-6 lg:px-20 opacity-20 flex justify-center">
        <div className="flex items-center gap-8">
           <span className="text-[8px] font-black tracking-[0.6em] text-gray-900 uppercase">Continuous Feed</span>
           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
           <span className="text-[8px] font-black tracking-[0.6em] text-gray-900 uppercase">Verified 2024-2026 Archive</span>
        </div>
      </div>
    </section>
  );
}