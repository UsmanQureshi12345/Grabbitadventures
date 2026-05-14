import React from 'react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MessageSquare, MapPin, Globe, Headphones, ArrowRight, Zap, Target, Loader2, Plus, Minus, X } from 'lucide-react';

export default function Contact() {
  const location = useLocation();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    expedition: 'K2 BASE CAMP',
    teamCount: '',
    requirements: ''
  });

  const [rentedItems, setRentedItems] = React.useState<{ id: string, name: string, quantity: number }[]>([]);

  React.useEffect(() => {
    if (location.state) {
      const { selectedGear, expedition } = location.state;
      
      if (selectedGear && selectedGear.length > 0) {
        setRentedItems(selectedGear.map((item: { id: string, name: string }) => ({ 
          id: item.id, 
          name: item.name, 
          quantity: 1 
        })));
      }
      
      setFormData(prev => ({
        ...prev,
        expedition: expedition || prev.expedition
      }));
    }
  }, [location.state]);

  const updateGearQuantity = (index: number, delta: number) => {
    setRentedItems(prev => {
      const updated = prev.map((item, i) => 
        i === index ? { ...item, quantity: item.quantity + delta } : item
      );
      return updated.filter(item => item.quantity > 0);
    });
  };

  const handleTransmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const gearText = rentedItems.length > 0 
      ? `*RENTAL GEAR REQUESTED:* \n${rentedItems.map(item => `• ${item.name} (x${item.quantity})`).join('\n')}\n\n`
      : '';

    const message = `*MISSION DATA TRANSMISSION*
---
*Candidate Name:* ${formData.name}
*Digital Address:* ${formData.email}
*Target Expedition:* ${formData.expedition}
*Team Count:* ${formData.teamCount}
*Objectives & Requirements:*
${gearText}${formData.requirements || 'N/A'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923000000000?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-12 pb-24 overflow-hidden relative text-zinc-900">
      {/* HUD Background Decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
         <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
         <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-orange-500/20 to-transparent" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-zinc-100 rounded-full" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-zinc-100 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pt-12 border-b border-zinc-100 pb-12">
           <div>
              <div className="flex items-center gap-4 text-orange-600 font-black tracking-[0.4em] text-[11px] uppercase mb-6">
                 <div className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                 BASE CAMP COMMS UNIT
              </div>
              <h1 className="text-6xl md:text-[8rem] font-black tracking-tighter uppercase leading-[0.8] text-zinc-900 text-3d">CONTACT <br/> MISSION.</h1>
           </div>
           <div className="flex gap-12 text-zinc-400 font-bold">
              <div className="text-right">
                <span className="text-[10px] tracking-widest uppercase block mb-1">LATITUDE</span>
                <span className="font-mono text-base text-zinc-900">35.6895° N</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] tracking-widest uppercase block mb-1">LONGITUDE</span>
                <span className="font-mono text-base text-zinc-900">139.6917° E</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] tracking-widest uppercase block mb-1 text-orange-600">SIGNAL</span>
                <span className="font-mono text-base uppercase text-orange-600 font-black">ENCRYPTED</span>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 px-1 bg-zinc-200 border border-zinc-200 shadow-2xl">
          {/* Left Panel: Direct Lines */}
          <div className="lg:col-span-4 bg-white p-10 space-y-12">
             <div>
                <h3 className="text-[11px] font-black tracking-[0.4em] text-zinc-400 uppercase mb-10 flex items-center gap-6">
                  DIRECT CHANNELS <span className="h-0.5 flex-1 bg-zinc-50" />
                </h3>
                <div className="space-y-6">
                   {[
                     { icon: MessageSquare, label: "WhatsApp Status", value: "ONLINE / +92 300 0000000", action: "OPEN CHAT", href: "https://wa.me/923000000000" },
                     { icon: Phone, label: "Expedition Hotline", value: "+92 300 1111111", action: "CALL", href: "tel:+923001111111" },
                     { icon: Mail, label: "Primary Comms", value: "MISSIONS@GRABBIT.CO", action: "SEND EMAIL", href: "mailto:MISSIONS@GRABBIT.CO" },
                   ].map((channel, i) => (
                     <div key={i} className="p-8 border border-zinc-100 hover:border-orange-500/30 transition-all group bg-zinc-50/30 hover:bg-white hover:shadow-xl relative overflow-hidden">
                        <div className="absolute left-0 top-0 w-1 h-0 bg-orange-500 group-hover:h-full transition-all duration-300" />
                        <channel.icon className="w-6 h-6 text-zinc-300 group-hover:text-orange-500 mb-6 transition-transform" />
                        <span className="text-[10px] text-zinc-400 uppercase tracking-widest block mb-1 font-bold">{channel.label}</span>
                        <p className="text-base font-black tracking-tighter mb-4 text-zinc-900">{channel.value}</p>
                        <a 
                          href={channel.href}
                          target={channel.href.startsWith('http') ? "_blank" : undefined}
                          rel={channel.href.startsWith('http') ? "noopener noreferrer" : undefined}
                          className="text-[10px] text-orange-600 font-black tracking-widest uppercase hover:text-orange-700 underline underline-offset-4 decoration-2 decoration-orange-500/20 hover:decoration-orange-500 transition-all inline-block"
                        >
                          {channel.action}
                        </a>
                     </div>
                   ))}
                </div>
             </div>

             <div className="p-10 border border-zinc-100 bg-zinc-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                   <Globe className="w-32 h-32 text-zinc-900" />
                </div>
                <h4 className="text-[11px] font-black tracking-widest uppercase mb-6 text-zinc-900">BASE LOCATIONS</h4>
                <div className="space-y-6 relative z-10">
                   <div className="border-l-2 border-orange-500 pl-6">
                      <span className="text-[9px] text-zinc-400 font-black uppercase block mb-1">FIELD HQ</span>
                      <span className="text-sm font-black text-zinc-900">Skardu, Gilgit-Baltistan</span>
                   </div>
                   <div className="border-l-2 border-orange-500 pl-6">
                      <span className="text-[9px] text-zinc-400 font-black uppercase block mb-1">LOGISTICS HUB</span>
                      <span className="text-sm font-black text-zinc-900">Lazimpat, Kathmandu</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Center Panel: Main Form */}
          <div className="lg:col-span-8 bg-white p-12 lg:p-20">
             <div className="max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
                   <div className="flex items-center gap-6">
                      <Target className="w-10 h-10 text-orange-600" />
                      <h2 className="text-4xl font-black tracking-tighter uppercase leading-none text-zinc-900 italic">BOOKING <br/> ENQUIRY V.4</h2>
                   </div>
                   <div className="text-[10px] font-black text-orange-600 tracking-[0.3em] border-2 border-orange-500/10 px-6 py-2 rounded-sm uppercase bg-orange-50/50">
                      REF ID: GB-EXP-2026
                   </div>
                </div>

                <form className="space-y-16" onSubmit={handleTransmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                     <div className="space-y-3 border-b-2 border-zinc-100 pb-3 transition-all focus-within:border-orange-500 group">
                        <label className="text-[11px] text-zinc-400 uppercase font-black tracking-widest group-focus-within:text-orange-600 transition-colors">Candidate Name</label>
                        <input 
                          type="text" 
                          className="w-full bg-transparent p-0 text-2xl font-black border-none focus:ring-0 outline-none placeholder:text-zinc-100 text-zinc-900 uppercase" 
                          placeholder="ELSA NILS" 
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        />
                     </div>
                     <div className="space-y-3 border-b-2 border-zinc-100 pb-3 transition-all focus-within:border-orange-500 group">
                        <label className="text-[11px] text-zinc-400 uppercase font-black tracking-widest group-focus-within:text-orange-600 transition-colors">Digital Address</label>
                        <input 
                          type="email" 
                          className="w-full bg-transparent p-0 text-2xl font-black border-none focus:ring-0 outline-none placeholder:text-zinc-100 text-zinc-900 uppercase" 
                          placeholder="E.NILS@GMAIL.COM" 
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        />
                     </div>
                     <div className="space-y-3 border-b-2 border-zinc-100 pb-3 transition-all focus-within:border-orange-500 group">
                        <label className="text-[11px] text-zinc-400 uppercase font-black tracking-widest group-focus-within:text-orange-600 transition-colors">Target Expedition</label>
                        <select 
                          className="w-full bg-transparent p-0 text-2xl font-black border-none focus:ring-0 outline-none appearance-none cursor-pointer text-zinc-900 uppercase"
                          value={formData.expedition}
                          onChange={(e) => setFormData(prev => ({ ...prev, expedition: e.target.value }))}
                        >
                           <option>K2 BASE CAMP</option>
                           <option>SNOW LAKE</option>
                           <option>EVEREST BASE CAMP</option>
                           <option>CUSTOM PK TREK</option>
                        </select>
                     </div>
                     <div className="space-y-3 border-b-2 border-zinc-100 pb-3 transition-all focus-within:border-orange-500 group">
                        <label className="text-[11px] text-zinc-400 uppercase font-black tracking-widest group-focus-within:text-orange-600 transition-colors">Team Count</label>
                        <input 
                          type="number" 
                          className="w-full bg-transparent p-0 text-2xl font-black border-none focus:ring-0 outline-none placeholder:text-zinc-100 text-zinc-900 uppercase" 
                          placeholder="1" 
                          value={formData.teamCount}
                          onChange={(e) => setFormData(prev => ({ ...prev, teamCount: e.target.value }))}
                        />
                     </div>
                  </div>

                  {rentedItems.length > 0 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
                       <label className="text-[11px] text-zinc-400 uppercase font-black tracking-widest block">Allocated Rental Inventory</label>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {rentedItems.map((item, i) => (
                             <div key={i} className="flex items-center justify-between p-4 bg-zinc-50 border border-zinc-100 rounded-xl group hover:border-orange-500/30 transition-all">
                                <div className="flex flex-col">
                                   <span className="text-[10px] font-black uppercase tracking-tight text-zinc-900 leading-none mb-1">{item.name}</span>
                                   <span className="text-[9px] font-mono text-zinc-400 uppercase">ID_{item.id.toUpperCase().replace('-', '_')}</span>
                                </div>
                                <div className="flex items-center">
                                   <div className="flex items-center bg-white border border-zinc-200 rounded-lg overflow-hidden shadow-sm">
                                      <button 
                                        type="button"
                                        onClick={() => updateGearQuantity(i, -1)}
                                        className="p-2.5 hover:bg-zinc-50 text-zinc-400 hover:text-orange-600 transition-colors border-r border-zinc-100"
                                        title="Remove one unit"
                                      >
                                         <Minus className="w-3.5 h-3.5" />
                                      </button>
                                      <span className="w-10 text-center text-xs font-black font-mono text-zinc-900 bg-white">
                                         {item.quantity}
                                      </span>
                                      <button 
                                        type="button"
                                        onClick={() => updateGearQuantity(i, 1)}
                                        className="p-2.5 hover:bg-zinc-50 text-zinc-400 hover:text-orange-600 transition-colors border-l border-zinc-100"
                                        title="Add one unit"
                                      >
                                         <Plus className="w-3.5 h-3.5" />
                                      </button>
                                   </div>
                                </div>
                             </div>
                          ))}
                       </div>
                    </div>
                  )}

                  <div className="space-y-6">
                     <label className="text-[11px] text-zinc-400 uppercase font-black tracking-widest block">Expedition Objectives & Requirements</label>
                     <textarea 
                        className="w-full bg-zinc-50 border border-zinc-100 p-8 h-52 text-base font-bold focus:border-orange-500 outline-none transition-colors border-l-4 border-l-orange-500 text-zinc-900 placeholder:text-zinc-300 whitespace-pre-wrap" 
                        placeholder="SPECIFY ANY TECHNICAL REQUIREMENTS, DIETARY PROTOCOLS, OR CUSTOM LOGISTICS..."
                        value={formData.requirements}
                        onChange={(e) => setFormData(prev => ({ ...prev, requirements: e.target.value }))}
                     />
                  </div>

                  <div className="relative group overflow-hidden">
                    <button className="w-full bg-orange-500 text-white p-8 font-black tracking-[0.4em] uppercase flex items-center justify-center gap-6 transition-all hover:bg-orange-600 shadow-xl shadow-orange-500/20 active:scale-[0.99] group/btn">
                       <Zap className="w-6 h-6 group-hover/btn:animate-bounce" />
                       TRANSMIT MISSION DATA
                    </button>
                    <div className="absolute top-0 left-0 w-full h-1 bg-white/30 animate-[loading_2s_infinite]" />
                  </div>
                </form>
             </div>

             <div className="mt-24 grid grid-cols-3 gap-8">
                {[
                  { label: "AVAILABILITY", value: "92%", icon: Target },
                  { label: "LATENCY", value: "14MS", icon: Zap },
                  { label: "UPTIME", value: "24/7", icon: Globe }
                ].map((stat, i) => (
                  <div key={i} className="p-8 border border-zinc-100 bg-zinc-50 flex flex-col items-center group hover:bg-white transition-colors hover:shadow-lg">
                    <stat.icon className="w-5 h-5 text-zinc-300 mb-4 group-hover:text-orange-500 transition-colors" />
                    <span className="text-[9px] font-black tracking-[0.3em] text-zinc-400 uppercase mb-2">{stat.label}</span>
                    <span className="text-sm font-mono font-black text-zinc-900">{stat.value}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>

       <style dangerouslySetInnerHTML={{ __html: `
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
}
