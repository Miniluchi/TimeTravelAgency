import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Destinations',
    links: ['Paris 1889', 'Crétacé −65M', 'Florence 1504', 'À venir...'],
  },
  {
    title: 'Agence',
    links: ['Notre histoire', 'Notre équipe', 'Presse', 'Partenaires'],
  },
  {
    title: 'Légal',
    links: ['Conditions générales', 'Politique de confidentialité', 'Mentions légales', 'Clause temporelle'],
  },
];

const SOCIALS = [
  { icon: Instagram, label: 'Instagram' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Youtube, label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/10 bg-[#060608]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⏳</span>
              <span className="font-display text-xl font-semibold text-[#F4E4BC]">
                TimeTravel <span className="text-[#D4AF37]">Agency</span>
              </span>
            </div>
            <p className="text-sm text-[#e8e0d0]/40 leading-relaxed font-light max-w-xs mb-6">
              L'unique agence de voyage temporel de luxe. Explorez l'Histoire comme vous ne l'avez jamais vécue.
            </p>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 flex items-center justify-center text-[#D4AF37]/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/10 transition-all duration-300"
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest mb-4">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <button className="text-sm text-[#e8e0d0]/40 hover:text-[#D4AF37]/80 transition-colors duration-200 text-left">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="border-t border-[#D4AF37]/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#e8e0d0]/25 tracking-wide">
            © 2026 TimeTravel Agency · Voyage fictif à but pédagogique
          </p>
          <p className="text-xs text-[#e8e0d0]/20 italic">
            Aucun dinosaure, personnage historique ou continuum espace-temps n'a été endommagé lors de la création de ce site.
          </p>
        </div>
      </div>
    </footer>
  );
}
