import { Globe } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative pt-40 pb-20 px-6 bg-white overflow-hidden">
      {/* Background Subtle Detail */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 translate-x-20 z-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            {/* Minimalist Badge */}
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-[#1f6f63]/5 border border-[#1f6f63]/10 text-[#1f6f63] text-[10px] font-black uppercase tracking-[0.3em] mb-10">
              <Globe size={12} />
              Est. 2016 — Global Operations
            </div>

            <h1 className="text-5xl md:text-[84px] font-light text-gray-900 leading-[0.95] tracking-tighter mb-10">
              Bridging Global Trade <br />
              <span className="text-gray-400 italic font-serif">with absolute integrity.</span>
            </h1>

            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
              Mayilvia is your trusted partner in China-to-Global machinery sourcing and logistics. We eliminate the distance between your vision and the world's best manufacturing hubs.
            </p>

            <div className="mt-12 flex items-center gap-8">
              <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold text-gray-400">
                     {i === 4 ? '+12' : ''}
                   </div>
                 ))}
              </div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                Trusted by 500+ <br /> Verified Suppliers
              </p>
            </div>
          </div>

          {/* Side Performance Card */}
          <div className="lg:col-span-4 mt-12 lg:mt-0">
             <div className="bg-white border border-gray-100 p-8 rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.04)] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                   <Globe size={80} className="text-[#1f6f63]" />
                </div>
                <h3 className="text-gray-900 text-[10px] font-black uppercase tracking-[0.2em] mb-8">Our Presence</h3>
                <div className="space-y-6">
                   <div>
                      <div className="text-gray-900 font-bold text-sm mb-1">Shanghai HQ</div>
                      <div className="text-gray-400 text-xs leading-relaxed">Central coordination & legal compliance hub.</div>
                   </div>
                   <div className="w-full h-px bg-gray-50" />
                   <div>
                      <div className="text-gray-900 font-bold text-sm mb-1">Regional Teams</div>
                      <div className="text-gray-400 text-xs leading-relaxed">On-ground field agents in Zhejiang, Jiangsu, & Guangdong.</div>
                   </div>
                </div>
                <button className="mt-10 w-full py-4 bg-gray-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-[#1f6f63] transition-colors">
                   View Logistics Network
                </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}