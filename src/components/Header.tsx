import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'À propos', href: '#agence' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-[#D4AF37]/20 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#accueil')}
            className="flex items-center gap-2 group"
          >
            <span className="text-2xl">⏳</span>
            <span className="font-display text-lg lg:text-xl font-semibold text-gold-light tracking-wide group-hover:text-gold transition-colors duration-300">
              TimeTravel <span className="text-[#D4AF37]">Agency</span>
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-[#e8e0d0]/70 hover:text-[#D4AF37] transition-colors duration-300 tracking-wide relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick('#contact')}
              className="hidden lg:inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#F4E4BC] text-[#0a0a0f] text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] active:scale-95"
            >
              Réserver un voyage
            </button>

            <button
              className="lg:hidden text-[#D4AF37] p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-[#D4AF37]/10 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left py-3 px-4 text-[#e8e0d0]/80 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 rounded-lg transition-all duration-200 text-sm tracking-wide"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full bg-[#D4AF37] text-[#0a0a0f] text-sm font-semibold py-3 rounded-full hover:bg-[#F4E4BC] transition-colors duration-300"
            >
              Réserver un voyage
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
