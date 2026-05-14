import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { treks } from '../data/treks';
import { 
  MoreHorizontal, 
  Users,
  ArrowRight,
  Snowflake,
  CloudSnow
} from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen lg:h-screen w-full bg-[#f8f9fa] lg:overflow-hidden font-sans text-zinc-900 selection:bg-orange-500/30">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80" 
          className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
          alt="Reflecting Mountains"
        />
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#f8f9fa] via-transparent to-transparent opacity-90" />
        <div className="absolute inset-0 bg-zinc-900/5" />
      </div>

      {/* Main HUD Container */}
      <div className="relative z-10 min-h-screen flex flex-col p-4 md:p-6 lg:p-10 pointer-events-none">
        
        {/* Center Content Section */}
        <main className="flex-1 flex flex-col items-center justify-center text-center py-20 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-10"
          >
            <span className="bg-orange-600 text-white px-8 py-2 rounded-sm text-[11px] font-black tracking-[0.3em] uppercase shadow-[0_10px_30px_rgba(249,115,22,0.2)]">
              Karakoram Excellence
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[9rem] font-black tracking-tighter leading-[0.8] text-zinc-900 text-3d-strong">
                UNLOCK THE <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-zinc-400">UNSEEN.</span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto font-medium tracking-tight mt-4 md:mt-8 px-4">
                Professional logistical support for high-altitude environments. <br />
                Karakoram • Khumbu • Hindu Kush
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto w-full max-w-xs sm:max-w-none px-4">
              <Link to="/treks" className="px-10 py-5 bg-zinc-900 text-white font-black tracking-widest text-[11px] hover:bg-orange-600 transition-all shadow-xl text-center">
                VIEW ROSTER
              </Link>
              <Link to="/custom" className="px-10 py-5 bg-white border border-zinc-200 text-zinc-900 font-black tracking-widest text-[11px] hover:bg-zinc-50 transition-all shadow-sm text-center">
                CUSTOM MISSION
              </Link>
            </div>
          </motion.div>
        </main>

        {/* Top Info Panels - Hidden on mobile for clarity */}
        <div className="hidden lg:flex absolute top-40 left-10 right-10 justify-between pointer-events-none">
          {/* Top Left Stats */}
          <div className="flex gap-1 pointer-events-auto bg-white/80 backdrop-blur-2xl border border-zinc-200/50 p-1.5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <div className="p-6 flex flex-col gap-1 w-36 hover:bg-zinc-50 transition-colors group rounded-xl items-center justify-center">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Snowflake className="w-10 h-10 text-zinc-900 group-hover:text-orange-600 transition-colors" />
              </motion.div>
              <span className="text-[9px] font-black tracking-[0.2em] text-zinc-400 uppercase mt-2">Heavy Snowfall</span>
            </div>
            <div className="w-px bg-zinc-200/60 my-4" />
            <div className="p-6 flex flex-col gap-1 w-36 hover:bg-zinc-50 transition-colors group rounded-xl items-center justify-center">
              <motion.div 
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <CloudSnow className="w-10 h-10 text-zinc-900 group-hover:text-orange-600 transition-colors" />
              </motion.div>
              <span className="text-[9px] font-black tracking-[0.2em] text-zinc-400 uppercase mt-2">Summit Blizzard</span>
            </div>
          </div>

          {/* Top Right Stats */}
          <div className="flex gap-1 pointer-events-auto bg-white/80 backdrop-blur-2xl border border-zinc-200/50 p-1.5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <div className="p-6 flex flex-col gap-1 w-36 hover:bg-zinc-50 transition-colors group rounded-xl">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black font-mono text-zinc-900 group-hover:text-orange-600 transition-colors text-3d">52</span>
                <span className="text-[10px] font-bold text-zinc-400">%</span>
              </div>
              <span className="text-[9px] font-black tracking-[0.2em] text-zinc-400 uppercase">O2 Saturation</span>
            </div>
            <div className="w-px bg-zinc-200/60 my-4" />
            <div className="p-6 flex flex-col gap-1 w-36 hover:bg-zinc-50 transition-colors group rounded-xl">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black font-mono text-zinc-900 group-hover:text-orange-600 transition-colors text-3d">350</span>
                <span className="text-[10px] font-bold text-zinc-400">M/H</span>
              </div>
              <span className="text-[9px] font-black tracking-[0.2em] text-zinc-400 uppercase">Ascent Rate</span>
            </div>
          </div>
        </div>

        {/* Side Panels Container */}
        <div className="relative lg:absolute lg:bottom-10 lg:left-10 lg:right-10 flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8 pb-10 lg:pb-0 pointer-events-none">
          
          {/* Left Glass Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full max-w-sm lg:w-80 bg-white/90 backdrop-blur-3xl border border-zinc-200 p-8 flex flex-col gap-8 rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.1)] pointer-events-auto relative overflow-hidden"
          >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500/20 rounded-tl-[2rem]" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-500/20 rounded-tr-[2rem]" />

            {/* Mission Header */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-1.5 flex-1 pr-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-orange-600 rounded-full animate-pulse" />
                    <h3 className="text-[11px] font-black tracking-[0.25em] h-min uppercase text-zinc-900 leading-tight">
                      K2 BASE CAMP <br/>& GONDOGORO LA
                    </h3>
                  </div>
                  <p className="text-[9px] text-zinc-400 font-mono tracking-widest pl-3.5 italic">MISSION: BALTORO_EXP_v4.0</p>
                </div>
                <div className="flex flex-col gap-0.5 mt-1">
                  {[1,2,3,4].map(i => (
                    <div key={i} className={`w-3 h-1 ${i === 1 ? 'bg-orange-600' : 'bg-zinc-100'}`} />
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 py-6 border-y border-zinc-100">
                <div className="space-y-2">
                  <span className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.2em] block">PERSONNEL</span>
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-orange-50 rounded-lg">
                      <Users className="w-3.5 h-3.5 text-orange-600" />
                    </div>
                    <span className="text-xl font-black font-mono tracking-tighter text-zinc-900">12/12</span>
                  </div>
                </div>
                <div className="space-y-2 border-l border-zinc-100 pl-4">
                  <span className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.2em] block">SUPPLY</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-black font-mono text-zinc-900 tracking-tighter uppercase whitespace-nowrap">STATUS: <span className="text-orange-600">OPTIMAL</span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Weather Projection */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-zinc-900 flex items-center gap-2">
                   WEATHER_MODEL
                   <span className="w-1.5 h-1.5 bg-zinc-200 rounded-full" />
                </h3>
                <MoreHorizontal className="w-4 h-4 text-zinc-300 cursor-pointer hover:text-orange-600 transition-colors" />
              </div>
              
              <div className="h-32 relative overflow-hidden bg-zinc-50 border border-zinc-100 rounded-xl">
                {/* HUD Grid Background */}
                <div className="absolute inset-0 opacity-[0.03] flex flex-col justify-between p-2">
                  <div className="h-px bg-zinc-900 w-full" />
                  <div className="h-px bg-zinc-900 w-full" />
                  <div className="h-px bg-zinc-900 w-full" />
                  <div className="h-px bg-zinc-900 w-full" />
                </div>

                <svg className="w-full h-full p-2" viewBox="0 0 200 80" preserveAspectRatio="none">
                  <path 
                    d="M0 60 Q20 55 40 65 Q60 15 80 45 Q100 25 120 60 Q140 10 160 35 Q180 75 200 55 V80 H0 Z" 
                    fill="url(#hud-grad)" 
                    stroke="#f97316"
                    strokeWidth="1.5"
                    className="drop-shadow-[0_2px_4px_rgba(249,115,22,0.2)]"
                  />
                  <defs>
                    <linearGradient id="hud-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Labels - More visible */}
                  <g className="font-mono font-black uppercase">
                    <text x="4" y="10" className="text-[6px] fill-zinc-500">PRESS: 540hPa</text>
                    <text x="145" y="10" className="text-[6px] fill-zinc-500">VIS: 24KM</text>
                  </g>
                </svg>

                {/* Scanning line effect */}
                <motion.div 
                   animate={{ left: ["0%", "100%", "0%"] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                   className="absolute top-0 bottom-0 w-px bg-orange-500/20 blur-[1px]"
                />
              </div>
              <div className="flex items-center justify-between text-[7px] font-mono font-bold text-zinc-400 tracking-tighter">
                <span>00:00:00_Z</span>
                <span className="text-orange-500/60 uppercase">Real-time sync active</span>
                <span>COORD: 35.88°N 76.51°E</span>
              </div>
            </div>
          </motion.div>


          {/* Right Glass Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full max-w-md lg:w-96 bg-white/90 backdrop-blur-3xl border border-zinc-200 p-8 flex flex-col gap-8 rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.1)] pointer-events-auto relative overflow-hidden"
          >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500/20 rounded-tl-[2rem]" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-500/20 rounded-tr-[2rem]" />

            {/* View Tabs */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-[10px] font-black tracking-[0.3em] uppercase text-zinc-900 flex items-center gap-2">
                  MOUNTAIN_DATA
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                </h3>
                <Link to="/treks" className="text-[9px] font-black text-orange-600 hover:text-orange-700 underline decoration-orange-500/20 underline-offset-4">VIEW ROSTER</Link>
              </div>
              
              <div className="space-y-3">
                {treks.map((trek) => (
                  <Link 
                    key={trek.id} 
                    to={`/treks/${trek.id}`} 
                    className="flex items-center justify-between p-4 border border-zinc-100 bg-white/50 hover:bg-white hover:border-orange-500/30 transition-all group rounded-2xl shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-1.5 h-6 bg-zinc-100 group-hover:bg-orange-500 transition-colors rounded-full" />
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-black tracking-widest text-zinc-900 uppercase leading-none">
                          {trek.name}
                        </span>
                        <span className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest leading-none">
                          {trek.region} • {trek.grade}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-300 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            </div>


            {/* Progress Status */}
            <div className="space-y-6 border-t border-zinc-100 pt-8">
              <h3 className="text-[11px] font-black tracking-[0.3em] uppercase text-zinc-900">ANNUAL_CAPACITY</h3>
              
              <div className="relative flex justify-center py-2 scale-110">
                <svg className="w-56 h-28" viewBox="0 0 200 100">
                  <circle cx="100" cy="100" r="80" fill="none" stroke="#f4f4f5" strokeWidth="16" strokeDasharray="251.32 251.32" strokeDashoffset="251.32" transform="rotate(-180 100 100)" strokeLinecap="round" />
                  <path 
                    d="M20 100 A80 80 0 0 1 180 100" 
                    fill="none" 
                    stroke="#f4f4f5" 
                    strokeWidth="16" 
                    strokeLinecap="round" 
                  />
                  <path 
                    d="M20 100 A80 80 0 0 1 168 46" 
                    fill="none" 
                    stroke="url(#logic-grad)" 
                    strokeWidth="16" 
                    strokeLinecap="round" 
                  />
                  <defs>
                    <linearGradient id="logic-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f4f4f5" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                  <text x="100" y="85" textAnchor="middle" className="text-4xl font-black fill-zinc-900 tracking-tighter text-3d-strong">84%</text>
                </svg>
                <div className="absolute bottom-0 w-full flex justify-center gap-6">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-zinc-200" />
                    <span className="text-[9px] font-black tracking-widest text-zinc-400 uppercase">Reserved</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-orange-500" />
                    <span className="text-[9px] font-black tracking-widest text-zinc-400 uppercase">Allocated</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Action */}
            <Link 
              to="/contact"
              className="w-full bg-zinc-900 text-white hover:bg-orange-600 transition-all py-5 rounded-[1.25rem] text-[11px] font-black tracking-[0.35em] uppercase shadow-xl text-center flex items-center justify-center gap-3 group"
            >
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:animate-ping" />
              BOOK EXPEDITION
            </Link>
          </motion.div>
        </div>

        {/* Global HUD Scanning Focus - Hidden on mobile */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-zinc-200 pointer-events-none rounded-lg">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500/20" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-500/20" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-orange-500/20" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500/20" />
          
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
             <div className="w-full h-px bg-zinc-900" />
             <div className="absolute w-px h-full bg-zinc-900" />
          </div>
        </div>

        {/* HUD Data Streams - Repositioned/Hidden on small screens */}
        <div className="hidden sm:flex absolute bottom-[15%] lg:bottom-[20%] left-1/2 -translate-x-1/2 items-center gap-4 opacity-10 whitespace-nowrap overflow-hidden w-full px-20">
          <div className="text-[8px] font-mono tracking-widest animate-[marquee_20s_linear_infinite] text-zinc-900">
            DATA_STREAM: K2_BASE_SEC_01 // ROUTE: GONDOGORO_LA // ELEVATION: 5120M // WIND_VECTOR: 22KMH_SW // PERSONNEL_STATUS: ACTIVE // LOGISTICS_SYNC: COMPLETE // DATA_STREAM: K2_BASE_SEC_01 // ROUTE: GONDOGORO_LA // ELEVATION: 5120M // WIND_VECTOR: 22KMH_SW // PERSONNEL_STATUS: ACTIVE // LOGISTICS_SYNC: COMPLETE
          </div>
        </div>

      </div>

      {/* Global Hud UI Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
         <div className="absolute top-0 left-[20%] w-px h-full bg-zinc-900/20" />
         <div className="absolute top-0 right-[20%] w-px h-full bg-zinc-900/20" />
         <div className="absolute top-[20%] left-0 w-full h-px bg-zinc-900/20" />
         <div className="absolute bottom-[20%] left-0 w-full h-px bg-zinc-900/20" />
      </div>
    </div>
  );
}
