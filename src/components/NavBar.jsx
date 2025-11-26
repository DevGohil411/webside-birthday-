import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MusicPlayer from './MusicPlayer.jsx';
import useHapticFeedback from '../hooks/useHapticFeedback.js';

const NAV_LINKS = [
  { id: 'landing', label: 'Home' },
  { id: 'timeline', label: 'Timeline' },
  { id: 'memories', label: 'Memories' },
  { id: 'quiz', label: 'Quiz' },
  { id: 'playlist', label: 'Playlist' },
  { id: 'letters', label: 'Letters' },
  { id: 'letter', label: 'Message' },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const haptic = useHapticFeedback();

  const toggleMenu = () => {
    haptic();
    setIsOpen((prev) => !prev);
  };

  const handleNavClick = () => {
    haptic();
    setIsOpen(false);
  };

  return (
    <nav className="relative rounded-3xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-dream">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-blush-200">
            26 laps around the sun
          </p>
          <h1 className="text-lg font-semibold text-white">Rishi × You</h1>
        </div>
        <div className="flex flex-1 items-center justify-end gap-3 md:flex-none">
          <div className="w-full min-w-[200px] max-w-[260px] flex-1 md:w-auto">
            <MusicPlayer />
          </div>
          <button
            type="button"
            className="touch-target inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white transition hover:bg-white/10 md:hidden"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div className="mt-4 hidden items-center justify-between gap-6 text-sm text-slate-200 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            className="touch-target rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10"
            href={`#${link.id}`}
            onClick={haptic}
          >
            {link.label}
          </a>
        ))}
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="mt-4 flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-sm text-white shadow-2xl backdrop-blur-2xl md:hidden"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              className="touch-target rounded-2xl border border-white/10 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              href={`#${link.id}`}
              onClick={handleNavClick}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;

