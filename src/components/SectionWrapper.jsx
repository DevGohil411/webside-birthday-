import { useEffect, useRef, useState } from 'react';
import ParticlesField from './ParticlesField.jsx';

const SectionWrapper = ({ id, children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id={id}
      ref={ref}
      className={`section-wrapper relative isolate ${isVisible ? 'section-visible' : ''}`}
    >
      <ParticlesField />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SectionWrapper;

