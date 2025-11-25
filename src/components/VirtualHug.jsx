import { useEffect, useState } from 'react';
import { HeartHandshake } from 'lucide-react';
import useHapticFeedback from '../hooks/useHapticFeedback.js';
import useSoundEffect from '../hooks/useSoundEffect.js';

const generateHearts = () =>
  Array.from({ length: 14 }, (_, index) => ({
    id: index + Date.now(),
    left: Math.random() * 100,
    delay: Math.random() * 0.3,
    size: 20 + Math.random() * 20,
  }));

const VirtualHug = () => {
  const [hearts, setHearts] = useState([]);
  const haptic = useHapticFeedback(30);
  const sparkleSound = useSoundEffect('sparkle');

  useEffect(() => {
    let timeout;
    if (hearts.length) {
      timeout = setTimeout(() => setHearts([]), 1600);
    }
    return () => clearTimeout(timeout);
  }, [hearts]);

  const handleHug = () => {
    haptic();
    sparkleSound();
    setHearts(generateHearts());
  };

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-blush-500/20 to-purple-500/20 p-8 text-center backdrop-blur-dream">
      <div className="absolute inset-0 opacity-40 blur-3xl">
        <div className="h-full w-full bg-gradient-to-br from-blush-300/30 to-purple-300/30" />
      </div>
      <div className="relative z-10 space-y-6">
        <p className="text-xs uppercase tracking-[0.4em] text-white/70">Virtual Hug Station</p>
        <h3 className="text-3xl font-display text-white">Need a squeeze?</h3>
        <p className="text-slate-100">
          Tap the button and let the screen burst with tiny heart fireworks.
        </p>
        <button
          type="button"
          onClick={handleHug}
          className="touch-target inline-flex items-center gap-2 rounded-full bg-white/90 px-8 py-4 text-lg font-semibold text-blush-500 shadow-lg shadow-white/40 transition hover:-translate-y-0.5"
        >
          Send a virtual hug
          <HeartHandshake />
        </button>
      </div>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {hearts.map((heart) => (
          <span
            key={heart.id}
            className="heart-burst"
            style={{
              left: `${heart.left}%`,
              animationDelay: `${heart.delay}s`,
              width: `${heart.size}px`,
              height: `${heart.size}px`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default VirtualHug;

