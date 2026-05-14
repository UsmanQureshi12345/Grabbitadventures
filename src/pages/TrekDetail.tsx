import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { treks } from '../data/treks';
import { ChevronRight, Calendar, Users, Home, Thermometer, ShieldCheck, Download, Mail, Mountain, ArrowUpRight } from 'lucide-react';

export default function TrekDetail() {
  const { id } = useParams();
  const trek = treks.find(t => t.id === id);

  if (!trek) return (
    <div className="h-screen flex flex-col items-center justify-center bg-white text-zinc-900">
      <Mountain className="w-16 h-16 text-zinc-200 mb-6" />
      <span className="text-sm font-black tracking-[0.4em] uppercase">Expedition Not Found</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      {/* Hero */}
      <section className="relative h-[75vh] flex items-end pb-16 overflow-hidden">
        <img src={trek.image} className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <Link to="/treks" className="flex items-center gap-2 text-[11px] font-black tracking-[0.2em] text-orange-600 mb-8 hover:text-orange-700 transition-colors">
            <span className="opacity-50">DATABASE</span> / <span className="border-b-2 border-orange-500/20">{trek.name.toUpperCase()}</span>
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] text-zinc-900 mb-8 text-3d-strong">{trek.name}</h1>
              <div className="flex flex-wrap items-center gap-8">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest">Region:</span>
                  <span className="text-sm font-black uppercase text-zinc-900">{trek.region}</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-200" />
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-zinc-400 uppercase font-bold tracking-widest">Duration:</span>
                  <span className="font-mono text-sm font-black text-zinc-900">{trek.duration}</span>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-zinc-200" />
                <div className="px-5 py-2 bg-orange-500 text-white text-[10px] font-black tracking-widest uppercase shadow-lg">
                  {trek.grade}
                </div>
              </div>
            </div>
            <div className="text-right p-8 bg-white border border-zinc-100 shadow-2xl relative">
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-orange-500" />
              <span className="text-[10px] text-zinc-400 uppercase tracking-widest block mb-1 font-bold">Logistics Package</span>
              <span className="text-5xl font-black text-orange-600 font-mono tracking-tighter text-3d-strong">{trek.price}</span>
              <span className="text-[10px] text-zinc-400 block uppercase tracking-widest mt-1 font-bold">PP / STARTING FROM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <section className="bg-zinc-50 py-1 border-y border-zinc-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-zinc-100 border-x border-zinc-100">
          {[
            { icon: Calendar, label: "Best Season", value: trek.bestSeason },
            { icon: Thermometer, label: "Max Altitude", value: trek.maxAltitude },
            { icon: Users, label: "Group Size", value: trek.groupSize },
            { icon: Home, label: "Lodging", value: trek.accommodation },
            { icon: ShieldCheck, label: "Permits", value: "Included" },
            { icon: Download, label: "Itinerary", value: "PDF Dossier" },
          ].map((stat, i) => (
            <div key={i} className="p-10 bg-white flex flex-col items-center text-center group cursor-pointer hover:bg-zinc-50 transition-all hover:shadow-inner">
              <stat.icon className="w-6 h-6 text-orange-500 mb-6 group-hover:scale-110 transition-transform" />
              <span className="text-[9px] font-black tracking-[0.3em] text-zinc-400 uppercase mb-3">{stat.label}</span>
              <span className="text-[11px] font-black tracking-widest uppercase text-zinc-900 group-hover:text-orange-600 transition-colors">{stat.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-20">
            <div>
              <h2 className="text-3xl font-black tracking-tighter uppercase mb-10 flex items-center gap-6">
                The Expedition <span className="h-0.5 flex-1 bg-zinc-100" />
              </h2>
              <div className="max-w-none">
                <p className="text-2xl text-zinc-600 leading-relaxed font-medium mb-12 border-l-4 border-orange-500 pl-10">
                  {trek.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-base text-zinc-500 leading-relaxed font-medium">
                  <p>Our expeditions are more than just walks; they are complex logistical operations designed to put you in the most spectacular places on earth with maximum safety and professional support.</p>
                  <p>From gourmet dining in the wilderness to state-of-the-art satellite monitoring, we've redefined the high-altitude experience for those who demand excellence.</p>
                </div>
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <h2 className="text-3xl font-black tracking-tighter uppercase mb-10 flex items-center gap-6">
                Mission Ledger <span className="h-0.5 flex-1 bg-zinc-100" />
              </h2>
              <div className="space-y-4">
                {trek.itinerary.length > 0 ? (
                  trek.itinerary.map((step) => (
                    <div key={step.day} className="p-10 border border-zinc-100 hover:border-orange-500/30 transition-all hover:shadow-xl bg-white group relative">
                       <div className="absolute left-0 top-0 w-1 h-0 bg-orange-500 group-hover:h-full transition-all duration-300" />
                      <div className="flex flex-col md:flex-row md:items-center gap-8">
                        <div className="shrink-0 flex items-center gap-6">
                          <span className="text-4xl font-black font-mono text-zinc-100 group-hover:text-orange-500/10 transition-colors uppercase leading-none">DAY-{step.day < 10 ? `0${step.day}` : step.day}</span>
                          <div className="w-px h-16 bg-zinc-100 hidden md:block" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-black tracking-widest uppercase mb-2 text-zinc-900 group-hover:text-orange-600 transition-colors">{step.activity}</h4>
                          <p className="text-sm text-zinc-500 font-medium leading-relaxed">{step.description}</p>
                        </div>
                        {step.altitude && (
                           <div className="text-right bg-zinc-50 p-4 border border-zinc-100 rounded-sm">
                              <span className="text-[9px] text-zinc-400 uppercase tracking-widest block mb-1 font-bold">ALTITUDE</span>
                              <span className="font-mono text-base font-black text-zinc-900">{step.altitude}</span>
                           </div>
                        )}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-20 text-center border-2 border-dashed border-zinc-100 rounded-sm bg-zinc-50">
                    <span className="text-[11px] font-black tracking-[0.5em] text-zinc-300 uppercase">ITINERARY UNDER FINAL REVIEW</span>
                  </div>
                )}
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 p-12 bg-zinc-50 border border-zinc-100 rounded-sm">
               <div>
                  <h3 className="text-[11px] font-black tracking-[0.4em] text-orange-600 uppercase mb-8">MISSION HIGHLIGHTS</h3>
                  <ul className="space-y-6">
                    {trek.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-5 text-sm text-zinc-600 font-medium leading-relaxed">
                        <ArrowUpRight className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
               </div>
               <div>
                  <h3 className="text-[11px] font-black tracking-[0.4em] text-orange-600 uppercase mb-8">INCLUDED SYSTEMS</h3>
                  <ul className="space-y-6 text-sm text-zinc-500 font-medium">
                    <li className="flex items-center gap-5">
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                      Satellite Communications Support
                    </li>
                    <li className="flex items-center gap-5">
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                      15kg Professional Porterage
                    </li>
                    <li className="flex items-center gap-5">
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                      Wilderness Gourmet Catering
                    </li>
                    <li className="flex items-center gap-5">
                      <div className="w-2 h-2 rounded-full bg-orange-500" />
                      Expedition Grade Logistics
                    </li>
                  </ul>
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside>
            <div className="sticky top-32 space-y-10">
              <div className="bg-white p-10 rounded-sm shadow-2xl relative overflow-hidden group border border-zinc-100">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                   <ShieldCheck className="w-32 h-32 text-orange-600" />
                </div>
                <h3 className="text-2xl font-black tracking-tighter mb-4 text-zinc-900 uppercase relative z-10">Ready for Deployment?</h3>
                <p className="text-base text-zinc-500 mb-10 leading-relaxed font-medium relative z-10">Book your slot for the 2026 expedition. We require a 25% deposit to secure your permit and logistical chain.</p>
                <div className="space-y-4 relative z-10">
                  <Link to="/contact" className="w-full py-6 bg-orange-500 text-white font-black tracking-widest text-[11px] uppercase flex items-center justify-center gap-3 hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
                    <Mail className="w-5 h-5" />
                    SECURE MISSION SLOT
                  </Link>
                  <button className="w-full py-6 border border-zinc-200 text-zinc-900 font-black tracking-widest text-[11px] uppercase flex items-center justify-center gap-3 hover:bg-zinc-50 transition-all">
                    <Download className="w-5 h-5" />
                    TECHNICAL DOSSIER
                  </button>
                </div>
              </div>

              <div className="p-10 bg-white border border-zinc-100 space-y-8 shadow-sm">
                <div className="flex items-center gap-5">
                   <div className="w-16 h-16 rounded-full overflow-hidden grayscale border-2 border-zinc-50 shadow-lg">
                      <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80" alt="Guide" className="w-full h-full object-cover" />
                   </div>
                   <div>
                      <span className="text-[10px] text-zinc-400 font-extrabold tracking-widest block mb-1 uppercase">Chief Guide</span>
                      <span className="text-sm font-black uppercase text-zinc-900 tracking-wider">Mustafa Baltoro</span>
                   </div>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed font-medium italic border-l-2 border-zinc-100 pl-6">
                  "This route is our flagship for a reason. It's the ultimate test of endurance and the ultimate reward in vistas. We handle the heavy lifting; you live the dream."
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
