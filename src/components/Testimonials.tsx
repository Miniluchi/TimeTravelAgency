import { Quote } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const TESTIMONIALS = [
  {
    name: 'Isabelle Fontaine',
    role: 'Historienne de l\'art',
    destination: 'Florence 1504',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote:
      "Je pensais connaître la Renaissance. TimeTravel Agency m'a prouvé que je n'en avais qu'une image pâle. Voir Michel-Ange travailler sur le David, entendre le bruit du marteau sur le marbre... c'est une expérience qui change une vie.",
  },
  {
    name: 'Thomas Beaumont',
    role: 'Chef d\'entreprise',
    destination: 'Paris 1889',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote:
      "L'inauguration de la Tour Eiffel sous une pluie fine, la foule en tenues d'époque, l'odeur du charbon dans l'air... J'ai pleuré. Aucun musée, aucun film ne peut approcher cette authenticité absolue.",
  },
  {
    name: 'Dr. Amara Diallo',
    role: 'Paléontologue',
    destination: 'Crétacé · −65M',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote:
      "En tant que scientifique, j'avais mille questions sur la sécurité. Toutes ont été répondues avec une rigueur impressionnante. Et observer un T-Rex à 40 mètres, dans son environnement naturel... aucun mot ne suffit.",
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 relative"
      style={{
        background: 'linear-gradient(180deg, #0a0a0f 0%, #0c0b10 50%, #0a0a0f 100%)',
      }}
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
            Témoignages
            <span className="w-8 h-px bg-[#D4AF37]" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#F4E4BC]">
            Ils ont{' '}
            <em className="not-italic text-[#D4AF37]">voyagé dans le temps</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className="relative p-7 rounded-2xl border border-[#D4AF37]/15 bg-gradient-to-b from-[#111118] to-[#0d0d13] group hover:border-[#D4AF37]/30 transition-all duration-400"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `opacity 0.7s ease ${i * 0.15}s, transform 0.7s ease ${i * 0.15}s, border-color 0.3s`,
              }}
            >
              {/* Quote icon */}
              <Quote size={28} className="text-[#D4AF37]/20 mb-4" />

              <blockquote className="text-sm text-[#e8e0d0]/65 leading-relaxed font-light mb-7 italic">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-[#D4AF37]/10 pt-5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]/20"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-[#F4E4BC]">{t.name}</p>
                  <p className="text-xs text-[#e8e0d0]/40">{t.role}</p>
                </div>
                <div className="ml-auto">
                  <span className="text-xs text-[#D4AF37]/60 border border-[#D4AF37]/20 px-2.5 py-1 rounded-full">
                    {t.destination}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
