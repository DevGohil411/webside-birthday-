import { useState } from 'react';
import { Laugh, MailOpen, Smile, CloudRain } from 'lucide-react';
import useSoundEffect from '../hooks/useSoundEffect.js';
import useHapticFeedback from '../hooks/useHapticFeedback.js';

const ICON_MAP = {
  happy: Smile,
  miss: MailOpen,
  laugh: Laugh,
  sad: CloudRain,
};

const OpenWhenLetters = ({ letters }) => {
  const [openLetter, setOpenLetter] = useState(null);
  const sparkleSound = useSoundEffect('sparkle', { volume: 0.5 });
  const haptic = useHapticFeedback(15);

  const handleToggle = (title) => {
    sparkleSound();
    haptic();
    setOpenLetter((prev) => (prev === title ? null : title));
  };

  return (
    <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-8">
      <div className="grid gap-6 md:grid-cols-2">
        {letters.map((letter) => {
          const Icon = ICON_MAP[letter.icon];
          const isOpen = openLetter === letter.title;
          return (
            <button
              key={letter.title}
              type="button"
              onClick={() => handleToggle(letter.title)}
              className={`touch-target relative overflow-hidden rounded-3xl border border-white/15 p-6 text-left transition ${
                isOpen ? 'bg-white/15' : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                  <Icon />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-blush-200">
                    Open when...
                  </p>
                  <h3 className="text-xl font-semibold text-white">{letter.title}</h3>
                </div>
              </div>
              <div
                className={`transition-all duration-500 ${
                  isOpen ? 'mt-4 max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-sm text-slate-200 md:text-base">{letter.message}</p>
              </div>
              <div
                className={`envelope ${isOpen ? 'envelope-open' : ''}`}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default OpenWhenLetters;

