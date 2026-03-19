import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo-og.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled ? 'py-2 bg-white/80 backdrop-blur-xl border-b border-gray-100' : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* 1. Brand Identity */}
        <Link to="/" className="flex items-center gap-2 group z-50">
          <div className="relative">
            <img src={logo} alt="Mayilvia" className="h-16 w-auto object-contain transition-transform group-hover:scale-105" />
            {/* Minimalist "Active" Dot for Brand */}
            {/* <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full border-2 border-white" /> */}
          </div>
          {/* <div className="hidden lg:block border-l border-gray-100 pl-4">
            <span className="block font-black text-sm tracking-tighter text-gray-900 leading-none">MAYILVIA</span>
            <span className="text-[8px] text-gray-400 font-bold tracking-[0.4em] uppercase">Sourcing Protocol</span>
          </div> */}
        </Link>

        {/* 2. Central Navigation Pill */}
        <nav className="hidden md:flex items-center bg-gray-50/50 border border-gray-100 backdrop-blur-sm rounded-full p-1 shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${
                location.pathname === link.path 
                ? 'bg-[#064E3B] text-white shadow-lg shadow-emerald-900/20' 
                : 'text-gray-400 hover:text-gray-900'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* 3. Global Action Node */}
        <div className="flex items-center gap-3">
          {/* NEW: Contact Expert Direct Call */}
          <a 
            href="tel:+910000000000" 
            className="hidden xl:flex items-center gap-4 bg-white border border-gray-100 px-5 py-2.5 rounded-full hover:border-[#064E3B] transition-all group"
          >
            <div className="relative">
              <PhoneCall size={14} className="text-[#064E3B]" />
              <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
            </div>
            <div className="text-left">
              <div className="text-[8px] font-black text-gray-300 uppercase tracking-widest leading-none mb-1">Expert Hotline</div>
              <div className="text-[10px] font-black text-gray-900 leading-none tracking-tighter transition-colors group-hover:text-[#064E3B]">CONNECT DIRECTLY</div>
            </div>
          </a>

          {/* Primary CTA */}
          <Link 
            to="/contact" 
            className="flex items-center gap-3 bg-[#064E3B] text-white px-6 py-3 rounded-full text-[9px] font-black uppercase tracking-[0.3em] transition-all hover:bg-emerald-900 shadow-xl shadow-emerald-900/10 active:scale-95"
          >
            Request Specs
            <ArrowUpRight size={14} className="opacity-50" />
          </Link>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-3 bg-gray-50 border border-gray-100 rounded-2xl text-gray-900 md:hidden hover:bg-gray-100 transition-all"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Technical Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-2xl z-[-1] md:hidden flex flex-col items-center justify-center p-12"
          >
            <div className="flex flex-col items-center gap-8 w-full max-w-xs">
              {navLinks.map((link, i) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between w-full border-b border-gray-50 pb-4"
                >
                  <span className="text-3xl font-light tracking-tighter text-gray-900 uppercase">{link.label}</span>
                  <span className="text-[10px] font-black text-gray-200 group-hover:text-emerald-600 transition-colors">0{i+1}</span>
                </Link>
              ))}
              <a 
                href="tel:+910000000000"
                className="w-full bg-white border border-gray-100 text-gray-900 py-5 rounded-3xl flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-widest shadow-sm"
              >
                <PhoneCall size={16} className="text-emerald-600" />
                Call Expert Node
              </a>
              <Link 
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#064E3B] text-white py-5 rounded-3xl flex items-center justify-center text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl shadow-emerald-900/20"
              >
                Start Protocol
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}