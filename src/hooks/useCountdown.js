import { useEffect, useMemo, useState } from 'react';

const MS_IN_SECOND = 1000;
const MS_IN_MINUTE = 60 * MS_IN_SECOND;
const MS_IN_HOUR = 60 * MS_IN_MINUTE;
const MS_IN_DAY = 24 * MS_IN_HOUR;

const useCountdown = (targetDate) => {
  const target = useMemo(() => new Date(targetDate).getTime(), [targetDate]);

  const calculateTimeLeft = () => {
    const now = Date.now();
    const diff = Math.max(target - now, 0);

    return {
      days: Math.floor(diff / MS_IN_DAY),
      hours: Math.floor((diff % MS_IN_DAY) / MS_IN_HOUR),
      minutes: Math.floor((diff % MS_IN_HOUR) / MS_IN_MINUTE),
      seconds: Math.floor((diff % MS_IN_MINUTE) / MS_IN_SECOND),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return timeLeft;
};

export default useCountdown;

