import { ArrowUpRight, Play, Star, ShieldCheck, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Dynamic Background - Clean & High Key */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-100 grayscale brightness-110"
          style={{
            backgroundImage: `url('https://i.pinimg.com/1200x/14/b8/b0/14b8b0ab8ee50e50d35a07d05813224c.jpg')`, 
          }}
        />
        {/* Subtle Light Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-32 pb-12 min-h-screen flex flex-col justify-between">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Main Typography Column */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1f6f63]/5 border border-[#1f6f63]/10 text-[#1f6f63] text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              <Globe size={12} />
              Verified China-to-India Sourcing
            </div>
            
            <h1 className="text-5xl md:text-[100px] font-light text-gray-900 leading-[0.9] tracking-tighter mb-8">
              PRECISION <br />
              <span className="text-transparent font-black" style={{ WebkitTextStroke: '1px #1f6f63' }}>SOURCING.</span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-500 max-w-lg mb-12 leading-relaxed">
              Eliminate procurement risks. We provide <span className="text-gray-900 font-medium">on-site verification</span>, factory audits, and end-to-end logistics for handcrafts, machinery, furniture,electronics and industrial products.
            </p>

            <div className="flex flex-wrap gap-8 items-center">
              <button className="group bg-[#1f6f63] hover:bg-[#c9a24a] text-white px-8 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-3 shadow-lg shadow-[#1f6f63]/20">
                Start Sourcing
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              
              <button className="flex items-center gap-3 group">
                <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#1f6f63] group-hover:bg-[#1f6f63]/5 transition-all">
                  <Play size={16} className="text-[#1f6f63] fill-current" />
                </div>
                <span className="text-gray-900 font-bold text-xs uppercase tracking-widest">Watch Inspection</span>
              </button>
            </div>
          </div>

          {/* Minimalist Floating Panel */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:mt-16">
            <div className="bg-white/80 backdrop-blur-md border border-gray-100 p-8 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="text-3xl font-light text-gray-900">4.9<span className="text-xs text-gray-400 ml-1">/5.0</span></div>
                  <div className="flex text-[#c9a24a] mt-1 gap-0.5">
                    {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                  </div>
                </div>
                <ShieldCheck size={28} className="text-[#1f6f63] opacity-20" />
              </div>
              <p className="text-gray-500 text-xs leading-relaxed mb-6 font-medium">
                "Mayilvia transformed our procurement. The live video audits gave us 100% confidence in our furniture and machinery investments."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-[10px] font-bold text-[#1f6f63]">IG</div>
                <div>
                  <div className="text-gray-900 font-bold text-[10px] uppercase tracking-wider">Industrial Group Ltd.</div>
                  <div className="text-gray-400 text-[9px] uppercase tracking-widest">Verified Client</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist Status Bar */}
        <div className="mt-20 flex flex-wrap items-center justify-between gap-12 py-8 border-t border-gray-100">
          <div className="flex gap-16">
            <div>
              <div className="text-gray-900 font-light text-2xl tracking-tighter">800<span className="text-[#c9a24a]">+</span></div>
              <div className="text-[9px] text-gray-400 uppercase font-bold tracking-[0.2em] mt-1">Suppliers</div>
            </div>
            <div>
              <div className="text-gray-900 font-light text-2xl tracking-tighter">45M<span className="text-[#c9a24a]">+</span></div>
              <div className="text-[9px] text-gray-400 uppercase font-bold tracking-[0.2em] mt-1">Sourced</div>
            </div>
          </div>

          <div className="flex-1 max-w-xs hidden md:block">
            <div className="flex justify-between text-[9px] text-gray-400 font-bold mb-2 uppercase tracking-[0.2em]">
              <span>Active: Furniture Batch 04</span>
              <span className="text-[#1f6f63]">85%</span>
            </div>
            <div className="h-[1px] w-full bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-[85%] bg-[#1f6f63]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}