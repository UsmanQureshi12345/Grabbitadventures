import { motion } from 'motion/react';
import { Shield, Users, Heart, Globe, Award, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pb-24 bg-white text-zinc-900">
      {/* Editorial Header */}
      <section className="py-24 max-w-7xl mx-auto px-4 overflow-hidden relative">
        <motion.div
           initial={{ opacity: 0, scale: 1.1 }}
           animate={{ opacity: 0.03, scale: 1 }}
           className="text-[25vw] font-black tracking-tighter uppercase leading-[0.8] mb-12 text-zinc-900 absolute -top-10 left-0 -z-1 select-none whitespace-nowrap"
        >
          EXPERIENCE
        </motion.div>
        
        <div className="relative z-10 pt-20">
          <span className="text-orange-600 font-extrabold tracking-[0.4em] text-[11px] uppercase mb-4 block">OUR STORY</span>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.85] mb-12 text-zinc-900 text-3d-strong">BUILT FOR <br/> THE HIGHEST <br/> GROUND.</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
             <p className="text-2xl text-zinc-600 leading-relaxed font-semibold italic border-l-4 border-orange-500 pl-10 h-min">
                Grabbit Adventures was born from a singular obsession: to provide professional-grade logistical support for the world's most demanding treks.
             </p>
             <div className="space-y-6">
               <p className="text-lg text-zinc-500 leading-relaxed font-medium">
                  Founded by mountain guides who grew tired of standard tourist packages, we transitioned our expertise from elite climbing expeditions to high-altitude trekking. We believe that trekking in the Karakoram and Khumbu should be treated with the same tactical respect as a summit push.
               </p>
               <p className="text-lg text-zinc-500 leading-relaxed font-medium">
                  We don't just guide; we build infrastructure. Our logistics chain is the result of decades spent on K2, Broad Peak, and Everest, distilled into an experience available to the serious trekker.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Grid of USPs */}
      <section className="py-32 bg-zinc-50 border-y border-zinc-100 mt-24">
        <div className="max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-200 border border-zinc-200 rounded-3xl overflow-hidden shadow-sm">
            {[
              { icon: Shield, title: "Uncompromising Safety", desc: "Every lead guide has 10+ years experience and WFR certification." },
              { icon: Users, title: "Local Deep-Roots", desc: "Our network in Gilgit-Baltistan and Khumbu is familial and deep." },
              { icon: Heart, title: "Gourmet Logistics", desc: "Professional chefs, vacuum-packed fresh ingredients, real quality." },
              { icon: Globe, title: "Sustainability", desc: "CKNP environmental protocols, waste management, fair-pay for porters." },
              { icon: Award, title: "Premium Equipment", desc: "Tents, layers, and collective gear from global industry leaders." },
              { icon: Target, title: "Precision Planning", desc: "Meticulous itineraries designed for optimal acclimatization." },
            ].map((usp, i) => (
              <div key={i} className="bg-white p-16 transition-all hover:bg-zinc-50 group cursor-default">
                 <usp.icon className="w-12 h-12 text-orange-500 mb-10 group-hover:scale-110 transition-transform" />
                 <h3 className="text-xl font-black tracking-tight uppercase mb-6 text-zinc-900 leading-none">{usp.title}</h3>
                 <p className="text-base text-zinc-500 leading-relaxed font-medium">{usp.desc}</p>
              </div>
            ))}
           </div>
        </div>
      </section>

      {/* Team / Guides Section */}
      <section className="py-32 max-w-7xl mx-auto px-4">
         <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8 border-b border-zinc-100 pb-12">
            <div>
               <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none text-zinc-900 text-3d">THE GUIDING <br/> COLLECTIVE.</h2>
               <p className="text-zinc-500 max-w-md text-lg font-medium">Elite mountaineers and local legends from the heart of the Himalaya.</p>
            </div>
            <button className="text-[11px] font-black tracking-[0.4em] text-orange-600 border-b-2 border-orange-500/20 pb-4 hover:border-orange-500 transition-all uppercase">VIEW FULL BIOS</button>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { name: "Mustafa Baltoro", role: "Chief Guide", img: "https://images.unsplash.com/photo-1542103749-8ef59b94f47a?auto=format&fit=crop&q=80", lang: "Urdu, Balti, English" },
              { name: "Pasang Sherpa", role: "Khumbu Lead", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80", lang: "Nepali, Sherpa, English" },
              { name: "Ishaq Baig", role: "Logistics Mgr", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80", lang: "Urdu, English" },
              { name: "Nima Tashi", role: "Expedition Chef", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80", lang: "Nepali, English" },
            ].map((guide, i) => (
              <div key={i} className="group cursor-pointer">
                 <div className="aspect-[3/4] grayscale group-hover:grayscale-0 transition-opacity duration-1000 overflow-hidden rounded-3xl mb-8 relative bg-zinc-100 shadow-xl border border-zinc-100">
                    <img src={guide.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
                 <h4 className="text-2xl font-black uppercase mb-2 tracking-tighter text-zinc-900 group-hover:text-orange-600 transition-colors">{guide.name}</h4>
                 <span className="text-[10px] font-black text-orange-600 tracking-[0.3em] uppercase block mb-6 px-3 py-1 bg-orange-50 w-fit rounded-full">{guide.role}</span>
                 <p className="text-[10px] text-zinc-400 font-extrabold tracking-widest uppercase">{guide.lang}</p>
              </div>
            ))}
         </div>
      </section>

      {/* Safety Call-to-action */}
      <section className="py-32 bg-white overflow-hidden relative border-t border-zinc-100">
         <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
            <Shield className="w-96 h-96 text-zinc-900" />
         </div>
         <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-zinc-900 uppercase leading-[0.85] max-w-2xl text-3d">WE OPERATE ON <br/> ZERO-COMPROMISE <br/> SAFETY PROTOCOLS.</h2>
            <div className="flex flex-col gap-6 w-full md:w-auto">
               <button className="px-16 py-7 bg-zinc-900 text-white font-black tracking-widest text-[11px] uppercase hover:bg-orange-600 transition-all hover:shadow-2xl shadow-zinc-900/10 rounded-full">
                  VIEW SAFETY DOSSIER
               </button>
               <span className="text-zinc-400 text-[10px] font-black text-center tracking-[0.5em] uppercase">FULL COMPLIANCE (CKNP)</span>
            </div>
         </div>
      </section>
    </div>
  );
}
