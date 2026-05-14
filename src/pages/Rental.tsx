import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { equipmentList } from '../data/equipment';
import { Shield, Package, Info, Check, ArrowRight } from 'lucide-react';

export default function Rental() {
  const navigate = useNavigate();
  const [selectedGear, setSelectedGear] = React.useState<string[]>([]);
  const [expeditionId, setExpeditionId] = React.useState('K2 BASE CAMP');

  const toggleGear = (id: string) => {
    setSelectedGear(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const gearItems = equipmentList
      .filter(item => selectedGear.includes(item.id))
      .map(item => ({ id: item.id, name: item.name }));
    
    navigate('/contact', { 
      state: { 
        selectedGear: gearItems,
        expedition: expeditionId
      } 
    });
  };

  return (
    <div className="min-h-screen pb-24 bg-white text-zinc-900">
      {/* Hero */}
      <section className="bg-zinc-50 py-24 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-orange-600 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">LOGISTICS DEPT</span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9] mb-4 text-zinc-900 text-3d">EXPEDITION <br/> GEAR RENTAL.</h1>
          <p className="text-zinc-500 max-w-sm font-medium">High-altitude mountaineering equipment maintained to rigorous safety standards.</p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          {/* Detailed Gear Table */}
          <div className="lg:col-span-2 space-y-12">
            <div>
               <h2 className="text-2xl font-black tracking-tighter uppercase mb-2 flex items-center gap-4 text-zinc-900">
                EQUIPMENT CATALOGUE <span className="h-px flex-1 bg-zinc-100" />
              </h2>
              <p className="text-xs text-zinc-400 font-bold tracking-[0.2em] mb-8 italic">AVAILABLE FOR ALL 2026 EXPEDITIONS</p>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-zinc-200">
                      <th className="py-4 text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Item Dossier</th>
                      <th className="py-4 text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Brand/Spec</th>
                      <th className="py-4 text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Daily Rate</th>
                      <th className="py-4 text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Weekly Rank</th>
                      <th className="py-4 text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase text-center">Protocol</th>
                    </tr>
                  </thead>
                  <tbody>
                    {equipmentList.map((gear) => (
                      <tr 
                        key={gear.id} 
                        className="group border-b border-zinc-100 hover:bg-zinc-50 transition-colors cursor-pointer"
                        onClick={() => toggleGear(gear.id)}
                      >
                        <td className="py-6 pr-4">
                          <div className="flex items-center gap-4">
                             <div className={`w-4 h-4 border rounded ${selectedGear.includes(gear.id) ? 'bg-orange-500 border-orange-500' : 'border-zinc-300'} transition-all flex items-center justify-center`}>
                               {selectedGear.includes(gear.id) && <Check className="w-3 h-3 text-white" />}
                             </div>
                             <span className="text-sm font-bold tracking-tight uppercase group-hover:text-orange-600 transition-colors text-zinc-900">{gear.name}</span>
                          </div>
                        </td>
                        <td className="py-6 text-xs text-zinc-400 uppercase tracking-widest">{gear.brand}</td>
                        <td className="py-6 font-mono text-sm text-zinc-900">${gear.dailyRate}</td>
                        <td className="py-6 font-mono text-sm text-zinc-900">${gear.weeklyRate}</td>
                        <td className="py-6">
                           <div className="flex flex-wrap gap-1 justify-center">
                              {gear.requiredFor.map((req, i) => (
                                <span key={i} className="text-[8px] font-bold tracking-tighter px-2 py-0.5 border border-zinc-200 rounded-full uppercase text-zinc-400">
                                  {req}
                                </span>
                              ))}
                           </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="p-8 border border-zinc-100 bg-zinc-50 rounded-3xl shadow-sm">
                 <Shield className="w-8 h-8 text-orange-600 mb-6" />
                 <h4 className="text-sm font-bold tracking-widest uppercase mb-4 text-zinc-900">Quality Assurance</h4>
                 <p className="text-xs text-zinc-500 leading-relaxed font-medium">All technical gear (crampons, harnesses, helmets) undergoes stress-testing after every expedition. We replace climbing hardware every 2 seasons or after any impact event.</p>
              </div>
              <div className="p-8 border border-zinc-100 bg-zinc-50 rounded-3xl shadow-sm">
                 <Package className="w-8 h-8 text-orange-600 mb-6" />
                 <h4 className="text-sm font-bold tracking-widest uppercase mb-4 text-zinc-900">Deployment Method</h4>
                 <p className="text-xs text-zinc-500 leading-relaxed font-medium">Rentals are delivered directly to your base hotel in Skardu or Kathmandu 48 hours before expedition start for fitting and orientation.</p>
              </div>
            </div>
          </div>

          {/* Form Sidebar */}
          <aside>
            <div className="sticky top-32 bg-white p-8 border border-zinc-200 shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-3xl">
              <h3 className="text-xl font-bold tracking-tighter mb-2 uppercase text-zinc-900">RENTAL REQUEST</h3>
              <p className="text-[10px] text-zinc-400 tracking-[0.2em] mb-8 font-bold">DEPT ID: LOG-4402</p>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4">
                   <div className="space-y-1">
                      <label className="text-[9px] text-zinc-400 uppercase tracking-widest font-bold">Expedition ID</label>
                      <select 
                        value={expeditionId}
                        onChange={(e) => setExpeditionId(e.target.value)}
                        className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 text-xs font-bold uppercase focus:border-orange-500 outline-none text-zinc-900 cursor-pointer rounded-xl"
                      >
                         <option>K2 BASE CAMP</option>
                         <option>SNOW LAKE</option>
                         <option>EVEREST BASE CAMP</option>
                         <option>CUSTOM EXPEDITION</option>
                      </select>
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[9px] text-zinc-400 uppercase tracking-widest font-bold">Start Date</label>
                        <input type="date" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 text-xs font-mono focus:border-orange-500 outline-none text-zinc-900 rounded-xl" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] text-zinc-400 uppercase tracking-widest font-bold">End Date</label>
                        <input type="date" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 text-xs font-mono focus:border-orange-500 outline-none text-zinc-900 rounded-xl" />
                      </div>
                   </div>
                   <div className="pt-4 border-t border-zinc-100">
                      <div className="flex justify-between mb-4">
                        <span className="text-[9px] text-zinc-400 uppercase tracking-widest">Selected Items</span>
                        <span className="text-[9px] text-orange-600 font-bold">{selectedGear.length} ITEMS</span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        {selectedGear.map((id) => (
                           <li key={id} className="text-[10px] font-bold text-zinc-600 uppercase flex items-center justify-between">
                              {id.replace('-', ' ')}
                              <button onClick={() => toggleGear(id)}><Info className="w-3 h-3 text-zinc-300 hover:text-zinc-600" /></button>
                           </li>
                        ))}
                        {selectedGear.length === 0 && <li className="text-[10px] italic text-zinc-300">NO ITEMS SELECTED</li>}
                      </ul>
                   </div>
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 bg-zinc-900 text-white font-black tracking-widest text-xs uppercase flex items-center justify-center gap-2 hover:bg-orange-600 transition-all shadow-lg rounded-2xl"
                >
                  SUBMIT LOGISTICS REQUEST
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 justify-center py-4 border-y border-zinc-100 mt-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[8px] font-bold tracking-widest text-zinc-400 uppercase">ENCRYPTED TRANSMISSION</span>
                </div>
              </form>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
