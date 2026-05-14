import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Compass, Menu, X, Instagram, Facebook, Twitter, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { name: 'EXPEDITIONS', path: '/treks' },
    { name: 'RENTAL GEAR', path: '/rental' },
    { name: 'CUSTOM ADVENTURES', path: '/custom' },
    { name: 'JOURNAL', path: '/blog' },
    { name: 'ABOUT', path: '/about' },
    { name: 'BASE CAMP', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Compass className="w-8 h-8 text-orange-500 group-hover:rotate-45 transition-transform duration-500" />
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-tighter leading-none text-zinc-900 text-3d">GRABBIT</span>
            <span className="text-[10px] tracking-[0.3em] font-medium text-zinc-400 leading-none">ADVENTURES</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "text-[11px] font-bold tracking-[0.2em] transition-colors hover:text-orange-500",
                  isActive ? "text-orange-500" : "text-zinc-500"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
          <Link 
            to="/contact" 
            className="px-6 py-2 bg-orange-500 text-white text-[11px] font-bold tracking-[0.1em] rounded-full hover:bg-orange-600 transition-colors shadow-md shadow-orange-500/20"
          >
            BOOK NOW
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-zinc-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-white border-b border-zinc-200 lg:hidden flex flex-col p-8 gap-6"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold tracking-widest text-zinc-900"
              >
                {item.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-zinc-900">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Compass className="w-6 h-6 text-orange-500" />
            <span className="text-xl font-black tracking-tighter text-3d">GRABBIT</span>
          </div>
          <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
            From the Karakoram to the Khumbu. Planned & custom treks to the world's most dramatic landscapes.
          </p>
          <div className="flex gap-4">
            <Instagram className="w-5 h-5 text-zinc-400 hover:text-orange-500 cursor-pointer" />
            <Facebook className="w-5 h-5 text-zinc-400 hover:text-orange-500 cursor-pointer" />
            <Twitter className="w-5 h-5 text-zinc-400 hover:text-orange-500 cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 mb-6 uppercase">Expeditions</h4>
          <ul className="space-y-3 text-sm text-zinc-500">
            <li><Link to="/treks" className="hover:text-zinc-900 transition-colors">K2 Base Camp</Link></li>
            <li><Link to="/treks" className="hover:text-zinc-900 transition-colors">Snow Lake</Link></li>
            <li><Link to="/treks" className="hover:text-zinc-900 transition-colors">Everest Base Camp</Link></li>
            <li><Link to="/custom" className="hover:text-zinc-900 transition-colors">Custom Pakistan Treks</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 mb-6 uppercase">Company</h4>
          <ul className="space-y-3 text-sm text-zinc-500">
            <li><Link to="/about" className="hover:text-zinc-900 transition-colors">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-zinc-900 transition-colors">Meet the Guides</Link></li>
            <li><Link to="/rental" className="hover:text-zinc-900 transition-colors">Gear Rental</Link></li>
            <li><Link to="/about" className="hover:text-zinc-900 transition-colors">Sustainability</Link></li>
          </ul>
        </div>

        <div>
           <h4 className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 mb-6 uppercase">Safety</h4>
           <div className="space-y-4">
             <a href="tel:+923000000000" className="flex items-center gap-3 text-zinc-500 hover:text-orange-500 transition-colors">
               <Phone className="w-4 h-4" />
               <span className="text-sm font-bold">+92 300 0000000</span>
             </a>
             <a href="https://wa.me/923000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-500 hover:text-orange-500 transition-colors">
               <MessageSquare className="w-4 h-4" />
               <span className="text-sm font-bold">WhatsApp Support</span>
             </a>
             <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-4">
               24/7 EXPEDITION MONITORING
             </p>
           </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-zinc-200 flex flex-col md:row items-center justify-between gap-4 text-[10px] text-zinc-400 uppercase tracking-widest">
        <span>© 2026 GRABBIT ADVENTURES. ALL RIGHTS RESERVED.</span>
        <div className="flex gap-8">
          <Link to="/terms" className="hover:text-zinc-900 transition-colors">Terms & Conditions</Link>
          <Link to="/privacy" className="hover:text-zinc-900 transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
