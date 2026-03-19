export default function WhyChooseUs() {
  const advantages = [
    { title: "No Middlemen", desc: "0% Commission. You pay the factory price directly." },
    { title: "Local Support", desc: "Tamil, English & Chinese support on the ground in China." },
    { title: "Legal Handling", desc: "Complete 100% legal import documentation for Indian customs." }
  ];

  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] font-black text-[#1f6f63] tracking-[0.4em] uppercase">The Mayilvia Edge</span>
          <h2 className="text-3xl font-light text-gray-900 mt-4 tracking-tighter">Engineered for absolute transparency.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {advantages.map((adv, i) => (
            <div key={i} className="text-center border-r border-gray-200 last:border-0 px-8">
              <h4 className="text-gray-900 text-[11px] font-black uppercase tracking-widest mb-3">{adv.title}</h4>
              <p className="text-gray-500 text-xs leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}