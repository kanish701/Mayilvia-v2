import { Search, Plane, Calculator, ShieldCheck, Ship, Home } from 'lucide-react';

const services = [
  { id: '01', title: 'Factory Sourcing', desc: 'Direct access to original equipment manufacturers (OEMs).', icon: Search },
  { id: '02', title: 'Travel & Visits', desc: 'Complete arrangement for China factory tours and site visits.', icon: Plane },
  { id: '03', title: 'Price Negotiation', desc: 'Professional cost-optimization and contract handling.', icon: Calculator },
  { id: '04', title: 'Quality Inspection', desc: 'Rigorous on-site testing before final dispatch.', icon: ShieldCheck },
  { id: '05', title: 'Customs Clearance', desc: 'End-to-end import documentation and legal handling.', icon: Ship },
  { id: '06', title: 'Door Delivery', desc: 'Last-mile logistics delivered directly to your Indian facility.', icon: Home },
];

export default function WhatWeDo() {
  return (
    <section className="bg-white py-12 px-6 border-t border-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <div className="text-[#1f6f63] text-[10px] font-black tracking-[0.4em] uppercase mb-4">Core Capabilities</div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tighter">
              Importing excellence, <br />
              <span className="text-gray-400 italic font-serif">delivered with precision.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-3xl overflow-hidden">
          {services.map((s) => (
            <div key={s.id} className="bg-white p-10 group hover:bg-gray-50 transition-all duration-500">
              <span className="text-[10px] font-black text-gray-300 group-hover:text-[#c9a24a] transition-colors tracking-widest uppercase mb-6 block">Service {s.id}</span>
              <h3 className="text-gray-900 text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-3">
                <s.icon size={16} strokeWidth={1.5} className="text-[#1f6f63]" />
                {s.title}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}