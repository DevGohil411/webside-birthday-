import { useCallback } from 'react';

const useHapticFeedback = (duration = 20) =>
  useCallback(() => {
    if (typeof window !== 'undefined' && navigator?.vibrate) {
      navigator.vibrate(duration);
    }
  }, [duration]);

export default useHapticFeedback;

