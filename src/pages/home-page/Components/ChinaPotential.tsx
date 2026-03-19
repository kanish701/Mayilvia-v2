import React, { useLayoutEffect, useRef } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { 
  Globe, ShieldCheck, Phone, Ship, Factory, 
  MoreHorizontal, CheckCircle2, ArrowRight,
  Activity, Cpu
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- Types ---
interface SectorExpertise {
  id: string;
  name: string;
  code: string;
  tag: string;
}

const sectors: SectorExpertise[] = [
  { id: '1', name: 'Food Processing', code: 'MV-6112', tag: 'ALLV' },
  { id: '2', name: 'CNC Machinery', code: 'MV-3121', tag: 'ALLP' },
  { id: '3', name: 'Textile Looms', code: 'MV-1141', tag: 'ALLP' },
];

const SourcingDashboard: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!chartRef.current) return;

    // 1. Initialize amCharts Root
    const root = am5.Root.new(chartRef.current);

    // 2. Set Themes
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    // 3. Create Map Chart
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "none",
        wheelX: "none",
        wheelY: "none",
        projection: am5map.geoMercator(),
        homeGeoPoint: { latitude: 20, longitude: 90 },
        homeZoomLevel: 1.5
      })
    );

    // 3. Create Polygon Series (Landmass)
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"]
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      fill: am5.color(0xe2e8f0),
      stroke: am5.color(0xffffff),
      strokeWidth: 1,
      interactive: true
    });

    // Highlight China and India specifically
    polygonSeries.mapPolygons.template.adapters.add("fill", (fill, target) => {
      const id = (target.dataItem?.dataContext as any)?.id;
      if (id === "CN") return am5.color(0x064E3B); // Mayilvia Green for China
      if (id === "IN") return am5.color(0x10b981); // Emerald for India
      return fill;
    });

    // 4. Create Line Series (The Corridor)
    const lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
    lineSeries.mapLines.template.setAll({
      stroke: am5.color(0x064E3B),
      strokeWidth: 2,
      strokeOpacity: 0.6,
      strokeDasharray: [6, 4]
    });

    // Add path from Shanghai (Approx) to Coimbatore (Approx)
    lineSeries.pushDataItem({
      geometry: {
        type: "LineString",
        coordinates: [
          [121.47, 31.23], // Shanghai
          [76.95, 11.01]   // Coimbatore
        ]
      }
    });

    // 5. Point Series for Hub Markers
    const pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
    
    const addMarker = (lng: number, lat: number, label: string) => {
      pointSeries.data.push({
        latitude: lat,
        longitude: lng,
        name: label
      });
    };

    pointSeries.bullets.push(() => {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: am5.color(0x064E3B),
          stroke: am5.color(0xffffff),
          strokeWidth: 2
        })
      });
    });

    addMarker(121.47, 31.23, "Shanghai");
    addMarker(76.95, 11.01, "Coimbatore");

    return () => root.dispose();
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FB] p-4 md:py-16 md:px-12 font-sans antialiased text-slate-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-[1400px] overflow-hidden rounded-[40px] bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.04)] border border-slate-100"
      >
        
        <div className="flex flex-col lg:flex-row min-h-[800px]">
          
          {/* Map Section (Left) */}
          <div className="relative flex-[1.6] bg-[#FAFBFC] p-12 overflow-hidden flex flex-col">
            <div className="relative z-20 mb-8">
              <h1 className="text-5xl font-black tracking-tighter leading-none mb-4">
                China—India <br />
                <span className="text-emerald-800/30 font-light italic">Sourcing Corridor.</span>
              </h1>
              <div className="flex items-center gap-2 px-3 py-1 bg-white border border-slate-100 w-fit rounded-full shadow-sm">
                <Ship size={14} className="text-emerald-600" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Sea Route: 18 Days Avg.</span>
              </div>
            </div>

            {/* THE ACTUAL DYNAMIC MAP */}
            <div ref={chartRef} className="flex-1 w-full min-h-[450px] scale-110 translate-y-10" />

            {/* Shanghai Node Card - Overlaid via Absolute Positioning */}
            <motion.div 
              className="absolute top-[25%] right-[15%] z-20 w-56 rounded-3xl bg-white/90 backdrop-blur-xl p-5 shadow-xl border border-white"
            >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Factory className="h-5 w-5 text-emerald-600" />
                    <span className="text-[11px] font-black uppercase tracking-widest">Shanghai Hub</span>
                  </div>
                </div>
                <div className="text-[10px] text-slate-500 font-medium mb-1">CAPACITY STATUS</div>
                <div className="text-xs font-bold text-emerald-900">94.2% Operational</div>
            </motion.div>
          </div>

          {/* Sidebar Sourcing Ledger (Right) */}
          <div className="w-full lg:w-[460px] border-l border-slate-50 bg-white p-10 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-10">
                  <h2 className="text-2xl font-black tracking-tighter text-slate-900 uppercase">Strategic Edge</h2>
                  <Activity size={20} className="text-slate-300" />
                </div>

                <section className="mb-10">
                  {/* Advantage 01: Cost & Scalability */}
                  <div className="group rounded-[32px] border border-slate-100 bg-[#F9FAFB] p-6 mb-6 transition-all hover:bg-white hover:shadow-xl hover:shadow-emerald-900/5">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-black text-sm uppercase text-slate-800">Manufacturing Potential</h4>
                        <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest">Cost Optimization</p>
                      </div>
                      <Cpu size={18} className="text-slate-200 group-hover:text-emerald-600 transition-colors" />
                    </div>
                    <p className="text-[11px] leading-relaxed text-slate-500 mb-6 font-medium uppercase tracking-tighter">
                      Bypass middlemen. Access direct-from-factory pricing with 20-35% lower procurement costs on industrial assets.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                      <MetricItem label="Price Advantage" value="Direct OEM (-30%)" barWidth="w-full" />
                      <MetricItem label="Production" value="24/7 Scalable" barWidth="w-[95%]" />
                    </div>
                  </div>

                  {/* Advantage 02: Risk Mitigation */}
                  <div className="rounded-[32px] border border-slate-100 p-6 bg-white shadow-sm transition-all hover:border-emerald-100">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-black text-sm uppercase text-slate-800">Risk Mitigation</h4>
                        <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest">Quality Assurance</p>
                      </div>
                      <ShieldCheck size={18} className="text-emerald-600" />
                    </div>
                    <p className="text-[11px] leading-relaxed text-slate-500 mb-6 font-medium uppercase tracking-tighter">
                      50-point on-site audits and live video verification eliminate the risk of substandard machinery arrivals.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                      <MetricItem label="Inspection" value="Pre-Shipment (100%)" barWidth="w-full" />
                      <MetricItem label="Protocol" value="ISO-9001 Elite" barWidth="w-full" />
                    </div>
                  </div>
                </section>

                {/* Advantage 03: Operational Ease */}
                <section className="mb-10 px-2">
                  <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6">Logistical Velocity</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span className="text-[11px] font-bold text-slate-700 uppercase tracking-tight">Full Legal Import Handling (DDP)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span className="text-[11px] font-bold text-slate-700 uppercase tracking-tight">Zero Language Barrier (Tamil/English)</span>
                    </div>
                  </div>
                </section>

                <button className="group w-full rounded-[20px] bg-[#064E3B] py-5 text-xs font-black uppercase tracking-[0.2em] text-white shadow-2xl shadow-emerald-900/20 flex items-center justify-center gap-3 transition-all hover:bg-emerald-900">
                  Initialize Sourcing Protocol
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

const MetricItem = ({ label, value, barWidth }: { label: string, value: string, barWidth: string }) => (
  <div>
    <div className="text-[9px] uppercase text-slate-400 font-black tracking-widest mb-2">{label}</div>
    <div className="text-[11px] font-bold text-slate-800 mb-2">{value}</div>
    <div className="h-[3px] w-full bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full bg-emerald-600 ${barWidth}`} />
    </div>
  </div>
);

export default SourcingDashboard;