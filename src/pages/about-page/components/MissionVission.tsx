export default function MissionVision() {
  const pillars = [
    {
      label: "Mission",
      title: "Democratic Access",
      desc: "To empower Indian SMEs by providing direct, secure, and commission-free access to high-quality Chinese industrial assets."
    },
    {
      label: "Vision",
      title: "The Sourcing Standard",
      desc: "To become the global gold standard for transparent cross-border trade, where every transaction is verified on-site and delivered on time."
    }
  ];

  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {pillars.map((p, i) => (
            <div key={i} className="group relative p-12 rounded-3xl bg-white border border-gray-100 hover:border-[#1f6f63]/30 transition-all duration-500 overflow-hidden">
              <span className="absolute -top-4 -right-4 text-[120px] font-black text-gray-50 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity select-none italic">
                {p.label[0]}
              </span>
              <div className="relative z-10">
                <span className="text-[10px] font-black text-[#1f6f63] tracking-[0.5em] uppercase mb-6 block">{p.label}</span>
                <h3 className="text-2xl font-light text-gray-900 mb-6 uppercase tracking-tighter">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Footer Label */}
        <div className="mt-20 flex justify-center">
           <div className="flex items-center gap-6 opacity-20">
              <span className="text-[9px] font-black tracking-[0.4em] text-gray-900 uppercase">Transparent</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              <span className="text-[9px] font-black tracking-[0.4em] text-gray-900 uppercase">Verified</span>
              <div className="w-1 h-1 bg-gray-400 rounded-full" />
              <span className="text-[9px] font-black tracking-[0.4em] text-gray-900 uppercase">Delivered</span>
           </div>
        </div>
      </div>
    </section>
  );
}