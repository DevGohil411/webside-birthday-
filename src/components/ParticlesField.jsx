import { useMemo } from 'react';

const ParticlesField = ({ count = 18 }) => {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => ({
        id: index,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 6 + Math.random() * 6,
        size: 2 + Math.random() * 3,
        opacity: 0.15 + Math.random() * 0.35,
        bottom: Math.random() * 25,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="floating-particle"
          style={{
            left: `${particle.left}%`,
            bottom: `${particle.bottom}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default ParticlesField;

