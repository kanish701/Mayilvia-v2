import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Search, 
  ShieldCheck, 
  Video, 
  Ship, 
  FileText, 
  ArrowUpRight,
  Activity
} from 'lucide-react';

interface AuditStep {
  id: string;
  phase: string;
  title: string;
  timestamp: string;
  status: 'COMPLETED' | 'ACTIVE' | 'PENDING';
  details: string[];
}

const auditData: AuditStep[] = [
  {
    id: "01",
    phase: "VETTING",
    title: "OEM Credentials Verification",
    timestamp: "T-MINUS 14 DAYS",
    status: 'COMPLETED',
    details: ["Business License Audit", "Export Permit Validation", "Factory Capacity Check"]
  },
  {
    id: "02",
    phase: "INSPECTION",
    title: "50-Point Physical Audit",
    timestamp: "T-MINUS 08 DAYS",
    status: 'COMPLETED',
    details: ["Motor Performance Test", "Frame Structural Integrity", "Safety Sensor Calibration"]
  },
  {
    id: "03",
    phase: "VERIFICATION",
    title: "Live 4K Client Demo",
    timestamp: "T-MINUS 02 DAYS",
    status: 'ACTIVE',
    details: ["Real-time Operational Run", "Remote Quality Sign-off", "Component Serial Mapping"]
  },
  {
    id: "04",
    phase: "TRANSIT",
    title: "Container Loading & Seal",
    timestamp: "EST. ARRIVAL: 12 DAYS",
    status: 'PENDING',
    details: ["Seaworthy Packaging", "Customs Documentation", "GPS Tracker Initialization"]
  }
];

export default function StepByStepAudit() {
  return (
    <section className="bg-white py-24 px-6 lg:px-20 border-t border-gray-50">
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-12 gap-16">
        
        {/* LEFT: Context Header (4 Columns) */}
        <div className="lg:col-span-4 sticky top-32 h-fit">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[9px] font-black tracking-[0.4em] text-emerald-600 uppercase">Audit Intelligence</span>
            <div className="h-px w-8 bg-emerald-100" />
          </div>
          <h2 className="text-4xl font-light text-gray-900 tracking-tighter leading-none mb-8">
            The Verification <br />
            <span className="text-gray-400 italic font-serif">Protocol.</span>
          </h2>
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed max-w-xs mb-10">
            A real-time data stream of our <br /> pre-shipment verification cycle.
          </p>
          
          <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
             <div className="flex justify-between items-center mb-4">
                <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Active Batch</span>
                <div className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse" />
             </div>
             <div className="text-xs font-black text-gray-900">#CNC-VERIFY-8821</div>
          </div>
        </div>

        {/* RIGHT: Technical Timeline (8 Columns) */}
        <div className="lg:col-span-8 relative">
          {/* Vertical Path Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-100 z-0" />

          <div className="space-y-12">
            {auditData.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 flex gap-12 group"
              >
                {/* Status Indicator Circle */}
                <div className={`w-12 h-12 rounded-full border-2 bg-white flex items-center justify-center shrink-0 transition-colors duration-500 ${
                  step.status === 'COMPLETED' ? 'border-emerald-500 text-emerald-500' : 
                  step.status === 'ACTIVE' ? 'border-[#c9a24a] text-[#c9a24a]' : 'border-gray-100 text-gray-300'
                }`}>
                  {step.status === 'COMPLETED' ? <CheckCircle2 size={18} /> : 
                   step.status === 'ACTIVE' ? <Activity size={18} className="animate-pulse" /> : <FileText size={18} />}
                </div>

                {/* Content Card */}
                <div className="flex-1 pb-12 border-b border-gray-50 group-last:border-none">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-1">{step.phase} // {step.id}</div>
                      <h3 className="text-xl font-black text-gray-900 uppercase tracking-tighter group-hover:text-emerald-900 transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest border border-gray-100 px-3 py-1 rounded-md">
                      {step.timestamp}
                    </span>
                  </div>

                  {/* Micro-Details Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {step.details.map((detail, dIndex) => (
                      <div key={dIndex} className="flex items-center gap-2">
                         <div className="h-0.5 w-2 bg-gray-100" />
                         <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Conditional "View Proof" Button for Completed steps */}
                  {step.status === 'COMPLETED' && (
                    <motion.button 
                      whileHover={{ x: 5 }}
                      className="mt-6 flex items-center gap-2 text-[9px] font-black text-emerald-600 uppercase tracking-widest group-hover:gap-4 transition-all"
                    >
                      View Report <ArrowUpRight size={12} />
                    </motion.button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}