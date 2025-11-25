import { useEffect, useRef, useState } from 'react';
import { Music2, Pause, Play } from 'lucide-react';
import useHapticFeedback from '../hooks/useHapticFeedback.js';

const FADE_DURATION = 800;

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const fadeRef = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const haptic = useHapticFeedback();

  useEffect(() => {
    const audio = new Audio('/music/song.mp3');
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0;
    audioRef.current = audio;
    setIsReady(true);

    const handleVisibility = () => {
      if (document.hidden) {
        pauseWithFade();
      }
    };

    const handlePageHide = () => {
      pauseWithFade();
    };

    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('pagehide', handlePageHide);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('pagehide', handlePageHide);
      pauseWithFade(true);
      if (audioRef.current) {
        audioRef.current.src = '';
        audioRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cancelFade = () => {
    if (fadeRef.current) {
      cancelAnimationFrame(fadeRef.current);
      fadeRef.current = null;
    }
  };

  const fadeVolume = (target, duration = FADE_DURATION, onComplete) => {
    const audio = audioRef.current;
    if (!audio) return;
    cancelFade();

    const start = audio.volume;
    const delta = target - start;
    if (delta === 0) {
      if (onComplete) onComplete();
      return;
    }

    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      audio.volume = Math.min(Math.max(start + delta * progress, 0), 1);
      if (progress < 1) {
        fadeRef.current = requestAnimationFrame(step);
      } else if (onComplete) {
        onComplete();
      }
    };

    fadeRef.current = requestAnimationFrame(step);
  };

  const pauseWithFade = (instant = false) => {
    const audio = audioRef.current;
    if (!audio || audio.paused) return;
    const stop = () => {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    };

    if (instant) {
      cancelFade();
      audio.volume = 0;
      stop();
    } else {
      fadeVolume(0, FADE_DURATION, stop);
    }
  };

  const handleToggle = async () => {
    if (!isReady || !audioRef.current) return;
    const audio = audioRef.current;
    haptic();

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
        fadeVolume(volume);
      } catch (error) {
        console.error('Unable to start playback', error);
      }
    } else {
      pauseWithFade();
    }
  };

  const handleVolumeChange = (event) => {
    const value = Number(event.target.value);
    const normalized = value / 100;
    setVolume(normalized);

    if (audioRef.current && !audioRef.current.paused) {
      audioRef.current.volume = normalized;
    }
  };

  const visualizerBars = new Array(4).fill(null);

  return (
    <div className="flex flex-wrap items-center gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-dream">
      <button
        type="button"
        className="touch-target inline-flex h-11 w-11 items-center justify-center rounded-full bg-blush-500 text-white shadow-lg shadow-blush-500/30 transition hover:scale-105 disabled:opacity-50"
        onClick={handleToggle}
        disabled={!isReady}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>

      <div className="flex flex-col">
        <span className="flex items-center gap-1 text-xs uppercase tracking-[0.3em] text-slate-300">
          <Music2 size={14} />
          Mood
        </span>
        <div className="music-visualizer">
          {visualizerBars.map((_, index) => (
            <span
              key={index}
              className={`music-bar ${isPlaying ? 'playing' : ''}`}
            />
          ))}
        </div>
      </div>

      <label className="flex items-center gap-2 text-xs text-slate-300">
        Vol
        <input
          type="range"
          min="0"
          max="100"
          value={Math.round(volume * 100)}
          onChange={handleVolumeChange}
          className="h-1 w-24 cursor-pointer accent-blush-400"
        />
      </label>
    </div>
  );
};

export default MusicPlayer;

