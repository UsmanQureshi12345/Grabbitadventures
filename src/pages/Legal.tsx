import { motion } from 'motion/react';

export function LegalPage({ title }: { title: string }) {
  return (
    <div className="min-h-screen py-32 max-w-4xl mx-auto px-4 bg-white text-zinc-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-orange-600 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">Legal Dossier</span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-12 text-zinc-900">{title}</h1>
        
        <div className="prose prose-zinc max-w-none text-zinc-500 space-y-8 font-medium">
           <section>
              <h3 className="text-zinc-900 uppercase font-bold tracking-widest text-sm mb-4">01. EXPEDITION PROTOCOL</h3>
              <p>All expedition participants must adhere to the safety guidelines established by the lead guide. Failure to comply with safety protocols may result in immediate extraction at the participant's expense.</p>
           </section>
           <section>
              <h3 className="text-zinc-900 uppercase font-bold tracking-widest text-sm mb-4">02. LOGISTICAL CANCELLATION</h3>
              <p>Due to the complex nature of high-altitude logistics, deposits are non-refundable after permit applications have been submitted (typically 90 days prior to departure).</p>
           </section>
           <section>
              <h3 className="text-zinc-900 uppercase font-bold tracking-widest text-sm mb-4">03. DATA PROTECTION</h3>
              <p>Mission data and candidate information are stored on encrypted servers and shared only with necessary logistical partners (permit offices, airlines, heli-rescue units).</p>
           </section>
        </div>
      </motion.div>
    </div>
  );
}
