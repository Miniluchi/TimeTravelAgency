import { Shield, Crown, BookOpen, Infinity } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const PILLARS = [
  {
    icon: Shield,
    title: 'Sécurité absolue',
    description:
      'Notre technologie chrono-quantique certifiée garantit votre intégrité physique et temporelle à chaque instant du voyage. Protocoles de sécurité validés par 47 académies scientifiques.',
  },
  {
    icon: Crown,
    title: 'Voyages premium',
    description:
      'Groupes de 6 voyageurs maximum pour une expérience intime et personnalisée. Hébergements d\'époque reconstitués, gastronomie historique et service conciergerie 24h/24.',
  },
  {
    icon: BookOpen,
    title: 'Guides historiens',
    description:
      'Chaque voyage est conduit par un historien spécialiste de l\'époque visitée, formé à nos protocoles d\'immersion. Doctorats, publications académiques, passion partagée.',
  },
  {
    icon: Infinity,
    title: 'Retour garanti',
    description:
      'Notre assurance temporelle couvre l\'intégralité du voyage. Technologie de retour d\'urgence activable en moins de 3 secondes. Zéro incident en 7 ans d\'opération.',
  },
];

export default function WhyUs() {
  const { ref, isVisible } = useIntersectionObserver(0.15);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium text-[#D4AF37] tracking-widest uppercase mb-5">
            <span className="w-8 h-px bg-[#D4AF37]" />
            Pourquoi nous choisir
            <span className="w-8 h-px bg-[#D4AF37]" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#F4E4BC]">
            L'excellence à chaque{' '}
            <em className="not-italic text-[#D4AF37]">époque</em>
          </h2>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group relative p-7 rounded-2xl border border-[#D4AF37]/15 bg-gradient-to-b from-[#111118]/80 to-[#0d0d13]/80 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/3 transition-all duration-400"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `opacity 0.7s ease ${i * 0.12}s, transform 0.7s ease ${i * 0.12}s, border-color 0.3s, background 0.3s`,
                }}
              >
                {/* Icon container */}
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-5 group-hover:bg-[#D4AF37]/20 group-hover:border-[#D4AF37]/40 transition-all duration-300">
                  <Icon size={22} className="text-[#D4AF37]" />
                </div>

                <h3 className="font-display text-lg font-semibold text-[#F4E4BC] mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#e8e0d0]/50 leading-relaxed font-light">
                  {pillar.description}
                </p>

                {/* Corner accent on hover */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[#D4AF37]/0 group-hover:border-[#D4AF37]/30 rounded-tr-2xl transition-all duration-400" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
