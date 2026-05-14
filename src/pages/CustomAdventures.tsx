import { motion } from 'motion/react';
import { Camera, Users, Target, Ship, MapPin, ArrowRight, Zap, Coffee } from 'lucide-react';

export default function CustomAdventures() {
  return (
    <div className="min-h-screen pb-24 bg-white text-zinc-900">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80" 
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-30" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="max-w-2xl"
          >
             <span className="text-orange-600 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block underline underline-offset-8">SPECIAL OPERATIONS</span>
             <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9] mb-8 text-zinc-900 text-3d-strong">YOUR TREK. <br/> YOUR RULES.</h1>
             <p className="text-xl text-zinc-500 mb-12 leading-relaxed font-medium">Beyond our planned roster, we offer full logistics for private expeditions, photography tours, and corporate leadership retreats.</p>
             <div className="flex gap-4">
                <a href="#inquiry" className="px-8 py-4 bg-zinc-900 text-white font-black tracking-widest text-xs uppercase hover:bg-orange-600 transition-all shadow-xl">
                   START PLANNING
                </a>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Options Grid */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-zinc-200 border border-zinc-200 shadow-sm">
           {[
             { icon: Users, title: "Private Group", desc: "4+ People, custom dates, exclusive guiding team." },
             { icon: Camera, title: "Photography", desc: "Golden hour optimized camping and high-altitude gear support." },
             { icon: Target, title: "Family & Soft", desc: "Lower altitude, shorter days, luxury camp options." },
             { icon: Coffee, title: "Corporate", desc: "Wilderness leadership & high-stakes team building." },
           ].map((opt, i) => (
             <div key={i} className="p-10 bg-white transition-all hover:bg-zinc-50 group">
                <opt.icon className="w-10 h-10 text-orange-600 mb-8" />
                <h4 className="text-lg font-black tracking-tight uppercase mb-4 text-zinc-900 group-hover:text-orange-600 transition-colors">{opt.title}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed font-medium">{opt.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="inquiry" className="py-24 max-w-7xl mx-auto px-4">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none text-zinc-900 text-3d">THE CUSTOM <br/> PROTOCOL.</h2>
               <p className="text-zinc-500 mb-12 font-medium">Submit your basic parameters. Our mission planning team will respond with a preliminary feasibility study and logistical draft within 48 hours.</p>
               
               <div className="space-y-8">
                  <div className="flex gap-6">
                     <div className="shrink-0 w-12 h-12 bg-zinc-50 border border-zinc-100 flex items-center justify-center font-black italic text-orange-600">01</div>
                     <div>
                        <h4 className="font-bold tracking-widest uppercase text-xs mb-2 text-zinc-900">Phase 1: Analysis</h4>
                        <p className="text-sm text-zinc-500 font-medium">Review of your target dates, region preference, and group size.</p>
                     </div>
                  </div>
                  <div className="flex gap-6">
                     <div className="shrink-0 w-12 h-12 bg-zinc-50 border border-zinc-100 flex items-center justify-center font-black italic text-orange-600">02</div>
                     <div>
                        <h4 className="font-bold tracking-widest uppercase text-xs mb-2 text-zinc-900">Phase 2: Draft</h4>
                        <p className="text-sm text-zinc-500 font-medium">Custom itinerary design and pricing model presentation.</p>
                     </div>
                  </div>
                  <div className="flex gap-6">
                     <div className="shrink-0 w-12 h-12 bg-zinc-50 border border-zinc-100 flex items-center justify-center font-black italic text-orange-600">03</div>
                     <div>
                        <h4 className="font-bold tracking-widest uppercase text-xs mb-2 text-zinc-900">Phase 3: Launch</h4>
                        <p className="text-sm text-zinc-500 font-medium">Permit processing and local logistics activation.</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-white border border-zinc-200 p-12 shadow-2xl">
               <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-8">
                     <div className="space-y-2">
                        <label className="text-[10px] text-zinc-400 uppercase font-black tracking-[0.2em]">Contact Name</label>
                        <input type="text" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 placeholder:text-zinc-200 text-sm focus:border-orange-500 outline-none text-zinc-900 uppercase font-bold" placeholder="COMMANDER NAME" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] text-zinc-400 uppercase font-black tracking-[0.2em]">Email Channel</label>
                        <input type="email" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 placeholder:text-zinc-200 text-sm focus:border-orange-500 outline-none text-zinc-900 uppercase font-bold" placeholder="COURSES@EMAIL.CO" />
                     </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                     <div className="space-y-2">
                        <label className="text-[10px] text-zinc-400 uppercase font-black tracking-[0.2em]">Preferred Region</label>
                        <select className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 text-xs font-bold uppercase focus:border-orange-500 outline-none text-zinc-900 cursor-pointer">
                           <option>PAKISTAN (KARAKORAM)</option>
                           <option>NEPAL (HIMALAYA)</option>
                           <option>BOTH / OPEN</option>
                        </select>
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] text-zinc-400 uppercase font-black tracking-[0.2em]">Team Size</label>
                        <input type="number" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 placeholder:text-zinc-200 text-sm focus:border-orange-500 outline-none text-zinc-900 font-bold" placeholder="GROUP COUNT" />
                     </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[10px] text-zinc-400 uppercase font-black tracking-[0.2em]">Mission Briefing</label>
                     <textarea className="w-full bg-zinc-50 border border-zinc-200 px-4 py-12 h-40 font-bold text-xs focus:border-orange-500 outline-none resize-none text-zinc-900 uppercase" placeholder="DESCRIBE YOUR CUSTOM OBJECTIVES..." />
                  </div>

                  <button className="w-full py-4 bg-zinc-900 text-white font-black tracking-widest text-xs uppercase flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-lg">
                    INITIATE PLANNING MODULE
                    <Zap className="w-4 h-4" />
                  </button>
               </form>
            </div>
         </div>
      </section>
    </div>
  );
}
