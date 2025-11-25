import { useEffect, useRef, useState } from 'react';
import { Sparkles, Heart, HeartPulse } from 'lucide-react';
import useHapticFeedback from '../hooks/useHapticFeedback.js';
import useCountdown from '../hooks/useCountdown.js';

const HEARTS = [
  { size: 28, left: '10%', delay: 0, speed: 0.15 },
  { size: 18, left: '30%', delay: 2, speed: 0.25 },
  { size: 22, left: '60%', delay: 1, speed: 0.2 },
  { size: 30, left: '75%', delay: 3, speed: 0.18 },
  { size: 16, left: '85%', delay: 0.5, speed: 0.3 },
];

const Landing = () => {
  const sectionRef = useRef(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const haptic = useHapticFeedback(15);
  const countdown = useCountdown('2025-11-27T00:00:00');

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const offset = (window.innerHeight - rect.top) * 0.08;
      setParallaxOffset(offset);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10 shadow-[0_20px_85px_rgba(15,23,42,0.8)]"
    >
      <div className="absolute inset-0 bg-sparkles" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0">
        {HEARTS.map((heart, index) => (
          <HeartPulse
            key={index}
            size={heart.size}
            className="absolute text-white/15 drop-shadow-[0_0_12px_rgba(255,92,133,0.5)] transition-transform duration-300 ease-out"
            style={{
              left: heart.left,
              top: `${10 + index * 15}%`,
              transform: `translateY(${parallaxOffset * heart.speed}px)`,
              animation: `pulse 4s ease-in-out ${heart.delay}s infinite alternate`,
            }}
          />
        ))}
      </div>
      <div className="relative grid items-center gap-10 md:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-blush-200 md:text-sm">
            <Sparkles size={18} /> Counting down to 27 · November · 2025
          </p>
          <h1 className="mt-6 text-3xl leading-tight text-white md:text-6xl font-display">
            Happy Birthday, <span className="text-blush-400">Sara</span>
          </h1>
          <p className="mt-6 text-base text-slate-300 leading-relaxed md:text-lg">
            Every sunrise between Marine Drive and Pawna feels brighter because of you. Here&apos;s
            to slow coffee mornings, kitchen waltzes, and the way you turn normal Tuesdays into
            premieres.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 text-center text-white sm:grid-cols-4">
            {[
              { label: 'Days', value: countdown.days },
              { label: 'Hours', value: countdown.hours },
              { label: 'Minutes', value: countdown.minutes },
              { label: 'Seconds', value: countdown.seconds },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-3xl font-display">{String(item.value).padStart(2, '0')}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-200">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              className="touch-target inline-flex items-center gap-2 rounded-full bg-blush-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blush-500/30 transition hover:-translate-y-0.5 hover:bg-blush-400 md:text-base"
              href="#letter"
              onClick={haptic}
            >
              Read Your Letter <Heart size={18} />
            </a>
            <a
              className="touch-target inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5 md:text-base"
              href="#memories"
              onClick={haptic}
            >
              Revisit Memories
            </a>
          </div>
        </div>

        <div className="relative isolate">
          <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-blush-400/50 to-purple-500/40 blur-3xl" />
          <div className="relative rounded-[30px] border border-white/15 bg-white/5 p-6 text-center backdrop-blur-2xl">
            <p className="text-sm uppercase tracking-[0.4em] text-blush-200">
              Your constellation
            </p>
            <p className="mt-5 text-6xl font-display text-white">26</p>
            <p className="mt-3 text-lg text-slate-200">years of magic</p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-slate-200">
              <div>
                <p className="text-2xl font-semibold text-white">365</p>
                <p>new dawns</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">52</p>
                <p>weekends</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-white">1</p>
                <p>you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;

