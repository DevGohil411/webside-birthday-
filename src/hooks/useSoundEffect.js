import { useCallback, useRef } from 'react';

const soundCache = new Map();

const getAudio = (key) => {
  if (soundCache.has(key)) {
    return soundCache.get(key).cloneNode();
  }

  const audio = new Audio(`/sfx/${key}.mp3`);
  audio.preload = 'auto';
  soundCache.set(key, audio);
  return audio.cloneNode();
};

const useSoundEffect = (key, options = {}) => {
  const { volume = 0.6 } = options;
  const audioRef = useRef(null);

  return useCallback(() => {
    try {
      const instance = getAudio(key);
      instance.volume = volume;
      audioRef.current = instance;
      instance.play().catch(() => {});
    } catch (error) {
      console.warn(`Unable to play ${key} sound`, error);
    }
  }, [key, volume]);
};

export default useSoundEffect;

