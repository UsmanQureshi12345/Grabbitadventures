import { motion } from 'motion/react';
import { Calendar, Tag, ArrowRight, Share2, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      id: 'pakistan-vs-nepal',
      title: 'Pakistan vs. Nepal: Which High-Altitude Trek is Right for You?',
      date: 'MAY 10, 2026',
      category: 'COMPARISON',
      excerpt: 'A deep dive into the vibe, technicality, and logistics of the Karakoram vs. the Himalaya.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80'
    },
    {
      id: 'k2-packing-list',
      title: 'The Ultimate K2 Base Camp Packing List',
      date: 'APR 24, 2026',
      category: 'GUIDE',
      excerpt: 'Essential technical gear and layering systems for a 20-day glacier expedition.',
      image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&q=80'
    },
    {
      id: 'trip-report-gondogoro',
      title: 'Trip Report: Crossing the Gondogoro La in 2025',
      date: 'MAR 12, 2026',
      category: 'REPORT',
      excerpt: 'First-hand account of the technical pass crossing during an early season blizzard.',
      image: 'https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="min-h-screen pb-24 bg-white text-zinc-900">
      {/* Header */}
      <section className="bg-zinc-50 py-24 border-b border-zinc-100 overflow-hidden relative">
         <div className="absolute -right-20 top-0 opacity-5 rotate-12">
            <Share2 className="w-96 h-96 text-zinc-900" />
         </div>
         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <span className="text-orange-600 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">FIELD INTELLIGENCE</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] mb-8 text-zinc-900 text-3d">EXPEDITION <br/> JOURNALS.</h1>
            <p className="text-zinc-500 max-w-sm mb-12 font-medium">Dispatches from the mountain, technical guides, and first-hand explorer reports.</p>
            
            <div className="flex w-full max-w-md bg-white border border-zinc-200 px-6 py-4 items-center gap-4 group focus-within:border-orange-500 transition-colors shadow-lg rounded-2xl">
               <Search className="w-5 h-5 text-zinc-300 group-focus-within:text-orange-600" />
               <input type="text" placeholder="SEARCH DOSSIERS..." className="bg-transparent border-none outline-none text-xs font-mono w-full text-zinc-900 placeholder:text-zinc-200" />
            </div>
         </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* Main Feed */}
          <div className="lg:col-span-8 space-y-24">
             {posts.map((post, i) => (
                <motion.article 
                  key={post.id} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group"
                >
                   <Link to={`/blog/${post.id}`} className="block relative h-[500px] overflow-hidden rounded-3xl mb-8 shadow-xl">
                      <img src={post.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                      <div className="absolute top-8 left-8 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full border border-zinc-100 shadow-sm">
                         <span className="text-[10px] font-black tracking-widest text-orange-600 uppercase">{post.category}</span>
                      </div>
                   </Link>
                   <div className="space-y-6">
                      <div className="flex items-center gap-6 text-[10px] font-bold text-zinc-400 tracking-widest uppercase">
                         <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                         </div>
                         <div className="w-1 h-1 rounded-full bg-zinc-200" />
                         <span>MIN 5 READ</span>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-[0.9] group-hover:text-orange-600 transition-colors text-zinc-900">
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                      </h2>
                      <p className="text-lg text-zinc-500 leading-relaxed max-w-2xl font-medium">{post.excerpt}</p>
                      <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-4 text-[10px] font-black tracking-[0.3em] uppercase group-hover:text-orange-600 transition-colors text-zinc-900">
                        READ FULL REPORT 
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                   </div>
                </motion.article>
             ))}
          </div>

          {/* Blog Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
             <div>
                <h3 className="text-xs font-bold tracking-[0.3em] text-zinc-400 uppercase mb-8 pb-4 border-b border-zinc-100">Popular Intel</h3>
                <ul className="space-y-6">
                   {[
                     "The 2026 Baltoro Permit Process",
                     "Best DSLR Lenses for K2 Base Camp",
                     "Acclimatization Hacks for High Passes",
                     "Why June is the Secret Window for Pakistan"
                   ].map((item, i) => (
                      <li key={i} className="group cursor-pointer">
                         <h4 className="text-sm font-bold tracking-tight uppercase group-hover:text-orange-600 transition-colors text-zinc-900">{item}</h4>
                         <span className="text-[9px] text-zinc-400 uppercase tracking-widest">Guide • Jan 2026</span>
                      </li>
                   ))}
                </ul>
             </div>

             <div className="p-8 bg-zinc-900 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.15)]">
                <h3 className="text-xl font-bold tracking-tighter text-white uppercase mb-4">JOIN THE ELITE.</h3>
                <p className="text-sm text-zinc-400 mb-8 leading-relaxed font-medium">Subscribe to get technical trip reports delivered directly to your comms channel.</p>
                <div className="space-y-3">
                   <input type="text" placeholder="CHNL_ID@EMAIL.CO" className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-xs font-mono placeholder:text-white/20 focus:outline-none focus:border-white transition-colors text-white" />
                   <button className="w-full py-4 bg-orange-500 text-white font-black tracking-widest text-xs uppercase hover:bg-orange-600 transition-all shadow-lg rounded-2xl">
                     SUBSCRIBE NOW
                   </button>
                </div>
             </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
