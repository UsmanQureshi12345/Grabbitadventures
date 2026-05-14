import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Filter, Map, Clock, Mountain, ArrowUpRight } from 'lucide-react';
import { treks } from '../data/treks';
import { cn } from '../lib/utils';

export default function Treks() {
  const [filterRegion, setFilterRegion] = React.useState<'All' | 'Pakistan' | 'Nepal'>('All');

  const filteredTreks = filterRegion === 'All' ? treks : treks.filter(t => t.region === filterRegion);

  return (
    <div className="min-h-screen pb-24 bg-white text-zinc-900">
      {/* Header */}
      <section className="bg-zinc-50 py-24 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-orange-600 font-extrabold tracking-[0.4em] text-[11px] uppercase mb-4 block">DATABASE V.2.0</span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-6 text-zinc-900 text-3d">EXPEDITION <br/> ROSTER.</h1>
              <p className="text-zinc-500 max-w-sm text-lg font-medium">Detailed dossiers on our current and upcoming mountaineering routes.</p>
            </div>
            
            {/* Filter */}
            <div className="flex gap-2">
              {(['All', 'Pakistan', 'Nepal'] as const).map((region) => (
                <button
                  key={region}
                  onClick={() => setFilterRegion(region)}
                  className={cn(
                    "px-8 py-3 text-[10px] font-black tracking-[0.2em] rounded-full transition-all border shadow-sm",
                    filterRegion === region 
                      ? "bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/20" 
                      : "bg-white border-zinc-200 text-zinc-400 hover:border-zinc-400"
                  )}
                >
                  {region.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* List Container */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 space-y-1">
          {filteredTreks.map((trek, i) => (
            <motion.div
              key={trek.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group border border-zinc-100 hover:border-orange-500/10 transition-all bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden rounded-3xl mb-4"
            >
              <Link to={`/treks/${trek.id}`} className="flex flex-col lg:flex-row p-10 gap-12 items-center">
                <div className="w-full lg:w-80 h-52 overflow-hidden rounded-2xl relative shadow-md">
                  <img 
                    src={trek.image} 
                    alt={trek.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute top-4 left-4 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full shadow-sm">
                     <span className="text-[10px] font-black tracking-[0.1em] text-orange-600">{trek.region.toUpperCase()}</span>
                  </div>
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  <div className="lg:col-span-1">
                    <h3 className="text-3xl font-black tracking-tighter uppercase group-hover:text-orange-600 transition-colors leading-[0.9] mb-4 text-3d">{trek.name}</h3>
                    <p className="text-sm text-zinc-400 line-clamp-2 font-medium">{trek.description}</p>
                  </div>

                  <div className="flex flex-col justify-center border-l border-zinc-100 pl-8">
                    <div className="flex items-center gap-2 text-zinc-400 mb-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-[9px] font-black tracking-[0.2em] uppercase">Duration</span>
                    </div>
                    <span className="font-mono text-xl text-zinc-900 font-bold">{trek.duration}</span>
                  </div>

                  <div className="flex flex-col justify-center border-l border-zinc-100 pl-8">
                    <div className="flex items-center gap-2 text-zinc-400 mb-2">
                      <Mountain className="w-4 h-4" />
                      <span className="text-[9px] font-black tracking-[0.2em] uppercase">Max Altitude</span>
                    </div>
                    <span className="font-mono text-xl text-zinc-900 font-bold">{trek.maxAltitude}</span>
                  </div>

                  <div className="flex flex-col justify-center border-l border-zinc-100 pl-8">
                    <div className="flex items-center gap-2 text-zinc-400 mb-2">
                      <Filter className="w-4 h-4" />
                      <span className="text-[9px] font-black tracking-[0.2em] uppercase">Grade</span>
                    </div>
                    <span className="text-xl font-black text-orange-600">{trek.grade.toUpperCase()}</span>
                  </div>
                </div>

                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full border border-zinc-100 flex items-center justify-center group-hover:border-orange-500 group-hover:bg-orange-500 transition-all shadow-sm">
                    <ArrowUpRight className="w-6 h-6 text-zinc-300 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </Link>
              <div className="absolute bottom-0 left-0 h-1 bg-orange-500 w-0 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
