import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/mayilvia.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Section - Span 5 */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-transparent">
                <img src={logo} alt="Mayilvia" className="h-[78px] w-[78px] object-contain" />
              </div>
              {/* <span className="text-gray-900 font-black tracking-tighter text-xl">MAYILVIA</span> */}
            </div>
            <p className="text-gray-400 text-[11px] font-medium leading-relaxed max-w-xs uppercase tracking-wider">
              Precision-driven sourcing solutions for global industries. 
              Bridging the distance between requirement and reality with on-ground expertise.
            </p>
          </div>

          {/* Links Section - Span 7 */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-gray-900 text-[10px] font-black tracking-[0.3em] uppercase mb-8">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link 
                      to={link.path} 
                      className="text-gray-400 hover:text-[#1f6f63] text-[11px] font-bold uppercase tracking-widest transition-all flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 -translate-y-0.5 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-gray-900 text-[10px] font-black tracking-[0.3em] uppercase mb-8">Connect</h4>
              <ul className="space-y-6">
                <li className="flex flex-col gap-1">
                  <span className="text-[9px] text-gray-300 font-bold uppercase tracking-widest">Inquiries</span>
                  <a href="mailto:mayilviaglobal@gmail.com" className="text-gray-900 text-[11px] font-bold hover:text-[#1f6f63] transition-colors">mayilviaglobal@gmail.com</a>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[9px] text-gray-300 font-bold uppercase tracking-widest">Support</span>
                  <a href="tel:+919087621000" className="text-gray-900 text-[11px] font-bold hover:text-[#1f6f63] transition-colors">+91 9087621000</a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-gray-900 text-[10px] font-black tracking-[0.3em] uppercase mb-8">Headquarters</h4>
              <p className="text-gray-400 text-[11px] font-medium leading-relaxed uppercase tracking-wider">
                Coimbatore, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-10 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <span className="text-[9px] text-gray-300 font-black tracking-[0.4em] uppercase">
              &copy; {currentYear} MAYILVIA
            </span>
            <div className="w-1 h-1 bg-gray-200 rounded-full" />
            <span className="text-[9px] text-gray-300 font-bold tracking-[0.2em] uppercase">
              International Trade Excellence
            </span>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-[9px] text-gray-300 hover:text-gray-900 font-bold tracking-widest uppercase transition-colors">Privacy</a>
            <a href="#" className="text-[9px] text-gray-300 hover:text-gray-900 font-bold tracking-widest uppercase transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}