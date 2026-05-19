import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface Star {
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

function generateStars(count: number): Star[] {
  return Array.from({ length: count }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.7 + 0.2,
  }));
}

const STARS = generateStars(180);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { width, height } = hero.getBoundingClientRect();
      const xPct = (clientX / width - 0.5) * 20;
      const yPct = (clientY / height - 0.5) * 10;
      hero.style.setProperty('--parallax-x', `${xPct}px`);
      hero.style.setProperty('--parallax-y', `${yPct}px`);
    };
    hero.addEventListener('mousemove', onMouseMove);
    return () => hero.removeEventListener('mousemove', onMouseMove);
  }, []);

  const scrollToDestinations = () => {
    document.querySelector('#destinations')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAgence = () => {
    document.querySelector('#agence')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="accueil"
      ref={heroRef as React.RefObject<HTMLElement>}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 30%, #1a1020 0%, #0a0a0f 50%, #060608 100%)',
      }}
    >
      {/* Stars layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ transform: 'translate(var(--parallax-x, 0), var(--parallax-y, 0))', transition: 'transform 0.1s ease-out' }}
      >
        {STARS.map((star, i) => (
          <span
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: i % 5 === 0 ? '#F4E4BC' : '#ffffff',
              opacity: star.opacity,
              '--duration': `${star.duration}s`,
              '--delay': `${star.delay}s`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }} />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #8B4513, transparent)' }} />

      {/* Decorative horizontal lines */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-5">
        <div className="h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-5xl mx-auto">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse-gold" />
          <span className="text-xs font-medium text-[#D4AF37] tracking-widest uppercase">
            Agence de voyage temporel
          </span>
        </div>

        {/* Main title */}
        <h1
          className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.05] mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.25s' }}
        >
          <span className="text-[#F4E4BC]">Voyagez à</span>
          <br />
          <span className="gold-shimmer">travers le temps</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-base sm:text-lg lg:text-xl text-[#e8e0d0]/60 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up font-light"
          style={{ animationDelay: '0.4s' }}
        >
          L'unique agence de voyage temporel de luxe.{' '}
          <span className="text-[#D4AF37]/80 italic">Explorez l'Histoire, réinventée.</span>
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.55s' }}
        >
          <button
            onClick={scrollToDestinations}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D4AF37] hover:bg-[#F4E4BC] text-[#0a0a0f] font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_32px_rgba(212,175,55,0.5)] active:scale-95"
          >
            Découvrir les destinations
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>
          <button
            onClick={scrollToAgence}
            className="w-full sm:w-auto inline-flex items-center justify-center border border-[#D4AF37]/40 text-[#D4AF37] hover:border-[#D4AF37] hover:bg-[#D4AF37]/5 font-semibold text-sm px-8 py-4 rounded-full transition-all duration-300"
          >
            En savoir plus
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToDestinations}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#D4AF37]/50 hover:text-[#D4AF37] transition-colors duration-300 animate-scroll-bounce"
      >
        <span className="text-xs tracking-widest uppercase">Défiler</span>
        <ChevronDown size={18} />
      </button>
    </section>
  );
}
