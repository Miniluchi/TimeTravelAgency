import { ArrowRight, MapPin, Clock, Star } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Destination {
  id: string;
  era: string;
  eraColor: string;
  title: string;
  year: string;
  description: string;
  highlights: string[];
  price: string;
  image: string;
  imageAlt: string;
}

const DESTINATIONS: Destination[] = [
  {
    id: 'paris-1889',
    era: 'Belle Époque',
    eraColor: '#C87941',
    title: 'Paris 1889',
    year: '1889',
    description:
      "Vivez l'Exposition Universelle et l'inauguration de la Tour Eiffel. Plongez dans le Paris effervescent de la Belle Époque, entre cabarets, salons littéraires et révolution industrielle.",
    highlights: ['Tour Eiffel', 'Exposition Universelle', 'Moulin Rouge'],
    price: 'À partir de 12 500 €',
    image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Tour Eiffel Paris',
  },
  {
    id: 'cretace',
    era: 'Préhistoire',
    eraColor: '#4A7C59',
    title: 'Crétacé · −65M',
    year: '-65 000 000',
    description:
      'Une aventure naturaliste unique au cœur des derniers jours des dinosaures. Observez tyrannosaures, tricératops et forêts primitives en toute sécurité depuis votre capsule pressurisée.',
    highlights: ['Faune préhistorique', 'Paysages vierges', 'Safari temporel'],
    price: 'À partir de 24 900 €',
    image: 'https://images.pexels.com/photos/1591438/pexels-photo-1591438.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Forêt préhistorique Crétacé',
  },
  {
    id: 'florence-1504',
    era: 'Renaissance',
    eraColor: '#7B4F8E',
    title: 'Florence 1504',
    year: '1504',
    description:
      "Au cœur de la Renaissance italienne, croisez Michel-Ange sculptant le David et Léonard de Vinci. Une immersion absolue dans l'âge d'or de l'art occidental.",
    highlights: ['Michel-Ange', 'Léonard de Vinci', 'Art & Architecture'],
    price: 'À partir de 18 700 €',
    image: 'https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageAlt: 'Florence Renaissance architecture',
  },
];

interface CardProps {
  dest: Destination;
  index: number;
  isVisible: boolean;
}

function DestinationCard({ dest, index, isVisible }: CardProps) {
  return (
    <div
      className="card-hover rounded-2xl overflow-hidden border border-[#D4AF37]/15 bg-gradient-to-b from-[#111118] to-[#0d0d13] group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
      }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={dest.image}
          alt={dest.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d13] via-[#0d0d13]/20 to-transparent" />
        {/* Era badge */}
        <div
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-white"
          style={{ backgroundColor: dest.eraColor }}
        >
          {dest.era}
        </div>
        {/* Year overlay */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 text-[#D4AF37]/70 text-xs">
          <Clock size={11} />
          <span className="font-medium tracking-wider">{dest.year}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-2xl font-bold text-[#F4E4BC] mb-3">{dest.title}</h3>
        <p className="text-[#e8e0d0]/55 text-sm leading-relaxed mb-5 font-light">{dest.description}</p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-6">
          {dest.highlights.map((h) => (
            <span
              key={h}
              className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37]/80 border border-[#D4AF37]/20 px-2.5 py-1 rounded-full"
            >
              <MapPin size={9} />
              {h}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="border-t border-[#D4AF37]/10 pt-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-[#e8e0d0]/40 uppercase tracking-widest mb-0.5">Tarif</p>
            <p className="font-display text-lg font-semibold text-[#D4AF37]">{dest.price}</p>
          </div>
          <button className="group/btn inline-flex items-center gap-2 bg-[#D4AF37]/10 hover:bg-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#D4AF37] hover:text-[#0a0a0f] text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-300">
            Explorer
            <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Destinations() {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <section
      id="destinations"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 relative"
      style={{
        background: 'linear-gradient(180deg, #0a0a0f 0%, #0e0c14 50%, #0a0a0f 100%)',
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            Destinations exclusives
            <span className="w-8 h-px bg-[#D4AF37]" />
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#F4E4BC] mb-5">
            Nos destinations{' '}
            <em className="not-italic text-[#D4AF37]">temporelles</em>
          </h2>
          <p className="text-[#e8e0d0]/50 max-w-xl mx-auto text-sm leading-relaxed font-light">
            Trois voyages d'exception, sélectionnés pour leur richesse historique et leur impact émotionnel. Chaque destination est accessible sur réservation privée.
          </p>

          {/* Star rating decorative */}
          <div className="flex items-center justify-center gap-1 mt-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#D4AF37" className="text-[#D4AF37]" />
            ))}
            <span className="text-xs text-[#e8e0d0]/40 ml-2">3 destinations d'exception</span>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {DESTINATIONS.map((dest, i) => (
            <DestinationCard key={dest.id} dest={dest} index={i} isVisible={isVisible} />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-[#e8e0d0]/25 mt-10 tracking-wide">
          Nouvelles destinations annoncées chaque trimestre · Places très limitées
        </p>
      </div>
    </section>
  );
}
