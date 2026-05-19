import { ArrowRight, Mail, Phone, Clock } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver(0.2);

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-36 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(ellipse, #D4AF37, transparent)' }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <div
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity 0.8s ease, transform 0.8s ease',
          }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium text-[#D4AF37] tracking-widest uppercase mb-6">
            <span className="w-8 h-px bg-[#D4AF37]" />
            Commencer l'aventure
            <span className="w-8 h-px bg-[#D4AF37]" />
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F4E4BC] mb-6 leading-tight">
            Prêt pour votre{' '}
            <em className="not-italic text-[#D4AF37]">voyage ?</em>
          </h2>

          <p className="text-[#e8e0d0]/55 max-w-lg mx-auto text-base leading-relaxed font-light mb-10">
            Chaque aventure temporelle commence par une consultation privée avec l'un de nos conseillers experts. Ensemble, nous concevons le voyage qui correspond à vos attentes, en toute confidentialité.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#F4E4BC] text-[#0a0a0f] font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] active:scale-95">
              Réserver une consultation
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center border border-[#D4AF37]/30 text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300">
              Voir nos brochures
            </button>
          </div>

          {/* Contact info */}
          <div className="grid sm:grid-cols-3 gap-6 border-t border-[#D4AF37]/15 pt-10">
            {[
              { icon: Mail, label: 'Email', value: 'voyages@timetravel.agency' },
              { icon: Phone, label: 'Téléphone', value: '+33 (0)1 XX XX XX XX' },
              { icon: Clock, label: 'Disponibilité', value: 'Lun–Ven, 9h–19h' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 flex items-center justify-center">
                  <Icon size={16} className="text-[#D4AF37]" />
                </div>
                <p className="text-xs text-[#e8e0d0]/40 uppercase tracking-widest">{label}</p>
                <p className="text-sm text-[#F4E4BC]/80 font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
