import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface StatProps {
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
  delay: number;
}

function AnimatedStat({ value, suffix, label, isVisible, delay }: StatProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      let start = 0;
      const duration = 1800;
      const step = 16;
      const increment = value / (duration / step);
      const interval = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCurrent(value);
          clearInterval(interval);
        } else {
          setCurrent(Math.floor(start));
        }
      }, step);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);

  return (
    <div className="text-center group">
      <div className="font-display text-4xl lg:text-5xl font-bold text-[#D4AF37] mb-2">
        {current}{suffix}
      </div>
      <div className="text-sm text-[#e8e0d0]/50 tracking-wide uppercase font-medium">{label}</div>
    </div>
  );
}

export default function Agency() {
  const { ref, isVisible } = useIntersectionObserver(0.2);

  return (
    <section
      id="agence"
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 lg:py-32 relative ${isVisible ? 'section-visible' : 'section-hidden'}`}
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — text */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-[#D4AF37] tracking-widest uppercase mb-5">
              <span className="w-8 h-px bg-[#D4AF37]" />
              Notre histoire
            </div>

            <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#F4E4BC] leading-tight mb-8">
              Une expérience{' '}
              <em className="not-italic text-[#D4AF37]">hors du temps</em>
            </h2>

            <div className="space-y-5 text-[#e8e0d0]/65 leading-[1.8] font-light">
              <p>
                Fondée en 2019 par une équipe de physiciens théoriques et de passionnés d'histoire, TimeTravel Agency est la première et unique agence au monde à proposer des voyages temporels certifiés. Notre technologie exclusive de déplacement chronologique, brevetée dans 47 pays, vous garantit une expérience authentique, sûre et inoubliable.
              </p>
              <p>
                Chaque voyage est méticuleusement préparé par nos historiens et consultants scientifiques. Vous bénéficiez d'un briefing complet, d'une garde-robe d'époque sur mesure, et d'un guide dédié qui vous accompagne à chaque instant. Rien n'est laissé au hasard.
              </p>
              <p>
                Notre engagement premier est votre sécurité. Chaque expédition temporelle bénéficie d'une assurance retour garantie et de protocoles d'urgence développés en collaboration avec les plus grands experts en physique quantique.
              </p>
            </div>
          </div>

          {/* Right — stats + decorative */}
          <div>
            {/* Decorative frame */}
            <div className="relative p-8 lg:p-12 rounded-2xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/5 to-transparent">
              <div className="absolute top-4 right-4 w-16 h-16 border-t border-r border-[#D4AF37]/30 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-b border-l border-[#D4AF37]/30 rounded-bl-lg" />

              <div className="grid grid-cols-3 gap-8 mb-10">
                <AnimatedStat value={150} suffix="+" label="Voyageurs satisfaits" isVisible={isVisible} delay={200} />
                <AnimatedStat value={3} suffix="" label="Époques exclusives" isVisible={isVisible} delay={500} />
                <AnimatedStat value={100} suffix="%" label="Retour garanti" isVisible={isVisible} delay={800} />
              </div>

              <div className="border-t border-[#D4AF37]/15 pt-8">
                <blockquote className="font-display italic text-[#F4E4BC]/80 text-lg leading-relaxed text-center">
                  "L'histoire n'est plus un livre fermé.
                  <br />
                  Elle est votre prochain voyage."
                </blockquote>
                <p className="text-center text-xs text-[#D4AF37]/60 mt-3 tracking-widest uppercase">
                  — Fondateurs de TimeTravel Agency
                </p>
              </div>
            </div>

            {/* Certifications row */}
            <div className="mt-6 flex items-center justify-center gap-6 text-xs text-[#e8e0d0]/35 tracking-wide">
              <span>Chrono-certifié ISO 9001</span>
              <span className="w-1 h-1 rounded-full bg-[#D4AF37]/30" />
              <span>Approuvé UNESCO</span>
              <span className="w-1 h-1 rounded-full bg-[#D4AF37]/30" />
              <span>IATA temporel membre</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
