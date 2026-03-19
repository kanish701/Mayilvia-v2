export default function WhyWeStarted() {
  return (
    <section className="bg-gray-50 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="text-[10px] font-black text-[#c9a24a] tracking-[0.4em] uppercase block mb-6">The Genesis</span>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 tracking-tighter mb-10 leading-tight">
              A solution born from <br />
              procurement frustration.
            </h2>
            <div className="space-y-6 text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
              <p>
                We saw countless business owners in India struggle with "blind imports"—sending large payments to manufacturers in China without ever seeing the factory or the machine in person.
              </p>
              <p>
                Language barriers, quality inconsistencies, and complex customs laws made importing feel like a gamble. We started Mayilvia to turn that gamble into a guaranteed, data-backed investment.
              </p>
            </div>
          </div>
          
          {/* Founders Note Card */}
          <div className="bg-white p-12 rounded-[40px] shadow-sm border border-gray-100 flex flex-col justify-between h-full">
            <p className="text-gray-900 text-lg md:text-xl font-medium leading-relaxed italic mb-12">
              "Our goal isn't just to ship machines; it's to build the infrastructure of trust that allows Indian manufacturers to scale with the world's best equipment."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-gray-200" />
              <div>
                <span className="text-gray-900 text-[11px] font-black uppercase tracking-widest block">Team Mayilvia</span>
                <span className="text-gray-400 text-[10px] uppercase tracking-widest">Coimbatore — Shanghai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}