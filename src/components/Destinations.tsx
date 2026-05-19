import { ArrowRight, MapPin, Clock, Star, X } from 'lucide-react';
import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface GalleryImage {
  src: string;
  alt: string;
}

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
  gallery?: GalleryImage[];
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
    image: 'https://res.cloudinary.com/dw0gzaqmt/image/upload/v1779192599/Paris_-_1_1_format_iiz5ic.png',
    imageAlt: "La Tour Eiffel lors de l'Exposition Universelle de Paris en 1889, Belle Époque",
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
    image:
      'https://res.cloudinary.com/dw0gzaqmt/image/upload/v1779192600/Cre%CC%81tace%CC%81_-_16_9_Hero_pcyx8c.png',
    imageAlt:
      "Paysage du Crétacé supérieur avec forêts primitives et faune préhistorique, −65 millions d'années",
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
    image: 'https://res.cloudinary.com/dw0gzaqmt/image/upload/v1779192601/Renaissance_-_16_9_Hero_shn2hh.png',
    imageAlt:
      'Florence en 1504, cathédrale Santa Maria del Fiore et palais médicéens de la Renaissance italienne',
  },
];

interface ModalProps {
  dest: Destination;
  onClose: () => void;
}

function DestinationModal({ dest, onClose }: ModalProps) {
  const [activeGallery, setActiveGallery] = useState<number | null>(null);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Détails de la destination ${dest.title}`}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#D4AF37]/20 bg-[#0d0d13] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[16/10] overflow-hidden rounded-t-2xl">
          <img
            src={activeGallery !== null ? dest.gallery![activeGallery].src : dest.image}
            alt={activeGallery !== null ? dest.gallery![activeGallery].alt : dest.imageAlt}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-white"
            style={{ backgroundColor: dest.eraColor }}
          >
            {dest.era}
          </div>
          <button
            onClick={onClose}
            aria-label="Fermer la fenêtre de détails"
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors duration-200"
          >
            <X size={16} />
          </button>
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-[#D4AF37] text-xs">
            <Clock size={11} />
            <span className="font-medium tracking-wider">{dest.year}</span>
          </div>
        </div>
        {dest.gallery && dest.gallery.length > 0 && (
          <div className="flex gap-2 px-6 pt-4" role="list" aria-label="Galerie de photos">
            <button
              role="listitem"
              onClick={() => setActiveGallery(null)}
              aria-label={`Voir l'image principale : ${dest.imageAlt}`}
              className={`relative aspect-[4/3] w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                activeGallery === null
                  ? 'border-[#D4AF37]'
                  : 'border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
              }`}
            >
              <img
                src={dest.image}
                alt={dest.imageAlt}
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </button>
            {dest.gallery.map((img, i) => (
              <button
                key={i}
                role="listitem"
                onClick={() => setActiveGallery(i)}
                aria-label={`Voir la photo ${i + 2} : ${img.alt}`}
                className={`relative aspect-[4/3] w-20 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                  activeGallery === i
                    ? 'border-[#D4AF37]'
                    : 'border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}
        <div className="p-6">
          <h2 className="font-display text-3xl font-bold text-[#F4E4BC] mb-3">{dest.title}</h2>
          <p className="text-[#e8e0d0]/60 text-sm leading-relaxed mb-5 font-light">{dest.description}</p>
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
          <div className="border-t border-[#D4AF37]/10 pt-5 flex items-center justify-between">
            <div>
              <p className="text-xs text-[#e8e0d0]/40 uppercase tracking-widest mb-0.5">Tarif</p>
              <p className="font-display text-xl font-semibold text-[#D4AF37]">{dest.price}</p>
            </div>
            <button className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0a0a0f] text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-[#D4AF37]/90 transition-colors duration-200">
              Réserver
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CardProps {
  dest: Destination;
  index: number;
  isVisible: boolean;
  onOpen: () => void;
}

function DestinationCard({ dest, index, isVisible, onOpen }: CardProps) {
  return (
    <div
      className="card-hover rounded-2xl overflow-hidden border border-[#D4AF37]/15 bg-gradient-to-b from-[#111118] to-[#0d0d13] group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s ease ${index * 0.15}s`,
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={dest.image}
          alt={dest.imageAlt}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div
          className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold tracking-wide text-white"
          style={{ backgroundColor: dest.eraColor }}
        >
          {dest.era}
        </div>
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 text-[#D4AF37]/70 text-xs">
          <Clock size={11} />
          <span className="font-medium tracking-wider">{dest.year}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-bold text-[#F4E4BC] mb-3">{dest.title}</h3>
        <p className="text-[#e8e0d0]/55 text-sm leading-relaxed mb-5 font-light">{dest.description}</p>
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
        <div className="border-t border-[#D4AF37]/10 pt-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-[#e8e0d0]/40 uppercase tracking-widest mb-0.5">Tarif</p>
            <p className="font-display text-lg font-semibold text-[#D4AF37]">{dest.price}</p>
          </div>
          <button
            onClick={onOpen}
            className="group/btn inline-flex items-center gap-2 bg-[#D4AF37]/10 hover:bg-[#D4AF37] border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#D4AF37] hover:text-[#0a0a0f] text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-300"
          >
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
  const [openDest, setOpenDest] = useState<Destination | null>(null);

  return (
    <section
      id="destinations"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-24 lg:py-32 relative"
      style={{
        background: 'linear-gradient(180deg, #0a0a0f 0%, #0e0c14 50%, #0a0a0f 100%)',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
          <div className="flex items-center justify-center gap-1 mt-5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#D4AF37" className="text-[#D4AF37]" />
            ))}
            <span className="text-xs text-[#e8e0d0]/40 ml-2">3 destinations d'exception</span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {DESTINATIONS.map((dest, i) => (
            <DestinationCard
              key={dest.id}
              dest={dest}
              index={i}
              isVisible={isVisible}
              onOpen={() => setOpenDest(dest)}
            />
          ))}
        </div>
        <p className="text-center text-xs text-[#e8e0d0]/25 mt-10 tracking-wide">
          Nouvelles destinations annoncées chaque trimestre · Places très limitées
        </p>
      </div>
      {openDest && (
        <DestinationModal dest={openDest} onClose={() => setOpenDest(null)} />
      )}
    </section>
  );
}
