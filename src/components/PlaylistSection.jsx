import useSoundEffect from '../hooks/useSoundEffect.js';
import useHapticFeedback from '../hooks/useHapticFeedback.js';

const PlaylistSection = ({ tracks }) => {
  const popSound = useSoundEffect('pop', { volume: 0.4 });
  const haptic = useHapticFeedback(10);

  const handlePlay = (track) => {
    popSound();
    haptic();
    if (track.url) {
      window.open(track.url, '_blank', 'noopener');
    }
  };

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-dream">
      <div className="grid gap-6 md:grid-cols-2">
        {tracks.map((track) => (
          <article
            key={track.title}
            className="flex items-center gap-5 rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-black/20"
          >
            <div
              className="flex h-20 w-20 items-center justify-center rounded-2xl text-3xl font-display text-white"
              style={{
                background: `linear-gradient(135deg, ${track.colors[0]}, ${track.colors[1]})`,
              }}
            >
              {track.initials}
            </div>
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
                {track.mood}
              </p>
              <h3 className="text-xl font-semibold text-white">{track.title}</h3>
              <p className="text-sm text-slate-300">{track.artist}</p>
              <p className="text-xs text-slate-400">{track.length}</p>
            </div>
            <button
              type="button"
              onClick={() => handlePlay(track)}
              className="touch-target rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Play
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PlaylistSection;

