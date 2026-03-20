import React, { useState } from 'react';
import { Send, Activity, ShieldCheck, Cpu, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TechnicalIntake() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    email: '',
    company: '',
    requirement: '',
    additionalCommands: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="bg-white py-32 px-6 lg:px-20 font-sans antialiased">
      <div className="max-w-[1440px] mx-auto">
        
        {/* --- Header: Technical Meta --- */}
        <header className="grid lg:grid-cols-12 gap-12 mb-20 items-end border-b border-gray-50 pb-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-6 text-emerald-600">
              <Activity size={12} className="animate-pulse" />
              <span className="text-[9px] font-black tracking-[0.5em] uppercase text-[#064E3B]">Intake Protocol // 2026.03</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-light text-gray-900 tracking-tighter leading-none">
              Initialize <br />
              <span className="text-gray-400 italic font-serif text-4xl md:text-6xl text-gray-300">Sourcing Data.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-right hidden lg:block">
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest leading-relaxed mb-4">
              Direct OEM Integration Gateway <br />
              Verified Sourcing Corridor: CN — IN
            </p>
            <div className="flex justify-end gap-1">
               {[1, 0.6, 0.3, 0.1].map((o, i) => <div key={i} className="w-6 h-1 bg-[#064E3B]" style={{ opacity: o }} />)}
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* --- LEFT: Operational Status (4 Columns) --- */}
          <div className="lg:col-span-4 space-y-8">
            <div className="p-10 rounded-[40px] bg-[#F9FAFB] border border-gray-100 relative overflow-hidden">
               <div className="absolute top-6 right-6 text-emerald-900/5">
                  <ShieldCheck size={60} strokeWidth={1} />
               </div>
               <h3 className="text-[10px] font-black text-[#064E3B] uppercase tracking-[0.4em] mb-6">Verification Note</h3>
               <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest leading-relaxed">
                  Data submitted is encrypted and routed directly to our Shanghai technical hub for preliminary factory vetting. Expect a briefing within 24 operational hours.
               </p>
            </div>

            {/* <div className="flex items-center gap-6 px-10 py-6 border-l-2 border-emerald-500 bg-emerald-50/30">
               <Cpu size={20} className="text-emerald-700" strokeWidth={1.5} />
               <div>
                  <div className="text-[9px] font-black text-emerald-800 uppercase tracking-widest">Protocol Version</div>
                  <div className="text-xs font-black text-gray-900">MV-SEC-ALPHA-2.0</div>
               </div>
            </div> */}
          </div>

          {/* --- RIGHT: High-Density Form (8 Columns) --- */}
          <div className="lg:col-span-8">
            <form className="space-y-10">
              {/* Row 1: Identity */}
              <div className="grid md:grid-cols-2 gap-8">
                <InputGroup label="Full Name" name="name" placeholder="Executive Name" value={formData.name} onChange={handleChange} />
                <InputGroup label="Organization" name="company" placeholder="Entity Ltd." value={formData.company} onChange={handleChange} />
              </div>

              {/* Row 2: Communication Nodes */}
              <div className="grid md:grid-cols-3 gap-6">
                <InputGroup label="Primary Phone" name="phone" placeholder="+91 00000 00000" value={formData.phone} onChange={handleChange} />
                <InputGroup label="WhatsApp ID" name="whatsapp" placeholder="Verified Number" value={formData.whatsapp} onChange={handleChange} />
                <InputGroup label="E-Mail Node" name="email" placeholder="official@company.com" value={formData.email} onChange={handleChange} />
              </div>

              {/* Row 3: Requirement Specifics */}
              <div className="space-y-8">
                <div className="relative border-b border-gray-100 pb-2">
                   <label className="text-[9px] font-black text-gray-300 uppercase tracking-[0.4em] mb-4 block">Machinery Requirement</label>
                   <textarea 
                    name="requirement"
                    rows={2}
                    placeholder="Describe specific machinery, capacity, and technical specs..."
                    className="w-full bg-transparent text-xs font-black text-gray-900 uppercase tracking-tighter outline-none placeholder:text-gray-200 resize-none"
                    onChange={handleChange}
                   />
                </div>

                <div className="relative border-b border-gray-100 pb-2">
                   <label className="text-[9px] font-black text-gray-300 uppercase tracking-[0.4em] mb-4 block">Additional Commands</label>
                   <textarea 
                    name="additionalCommands"
                    rows={2}
                    placeholder="Specific deadlines, logistical preferences, or factory-visit requests..."
                    className="w-full bg-transparent text-xs font-black text-gray-900 uppercase tracking-tighter outline-none placeholder:text-gray-200 resize-none"
                    onChange={handleChange}
                   />
                </div>
              </div>

              {/* Submission Node */}
              <div className="pt-10 flex items-center justify-between">
                <div className="flex items-center gap-3 text-gray-300">
                   <MessageSquare size={14} />
                   <span className="text-[8px] font-black uppercase tracking-[0.3em]">Direct Transmission Active</span>
                </div>
                <button className="px-14 py-5 bg-[#064E3B] text-white rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-2xl shadow-emerald-900/30 hover:bg-emerald-800 transition-all flex items-center gap-4 group">
                  Initiate Sourcing
                  <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- High-Density Input Component ---
function InputGroup({ label, name, placeholder, value, onChange }: any) {
  return (
    <div className="relative border-b border-gray-100 pb-2 group focus-within:border-emerald-500 transition-colors">
      <label className="text-[9px] font-black text-gray-300 uppercase tracking-[0.4em] mb-3 block group-focus-within:text-emerald-600 transition-colors">
        {label}
      </label>
      <input 
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full bg-transparent text-xs font-black text-gray-900 uppercase tracking-tighter outline-none placeholder:text-gray-100"
      />
    </div>
  );
}