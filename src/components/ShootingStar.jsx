import { useEffect, useState } from 'react';

const ShootingStar = () => {
  const [star, setStar] = useState(null);

  useEffect(() => {
    let timeoutId;

    const spawnStar = () => {
      setStar({
        id: Date.now(),
        top: 10 + Math.random() * 50,
        left: -20 - Math.random() * 20,
      });
      timeoutId = setTimeout(() => setStar(null), 1800);
    };

    spawnStar();
    const interval = setInterval(spawnStar, 8000 + Math.random() * 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {star && (
        <span
          className="shooting-star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
          }}
        />
      )}
    </div>
  );
};

export default ShootingStar;

