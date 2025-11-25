import { useEffect, useState } from 'react';

const TypewriterParagraph = ({ text, delay }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    let index = 0;
    let intervalId;

    const startTyping = () => {
      intervalId = setInterval(() => {
        index += 1;
        setContent(text.slice(0, index));
        if (index >= text.length) {
          clearInterval(intervalId);
        }
      }, 25);
    };

    const startDelay = setTimeout(startTyping, delay);

    return () => {
      clearTimeout(startDelay);
      clearInterval(intervalId);
    };
  }, [text, delay]);

  return <p className="typewriter">{content}</p>;
};

const LetterSection = ({ paragraphs, signature }) => (
  <section
    id="letter"
    className="rounded-3xl border border-white/10 bg-white/5 p-8 text-slate-200 backdrop-blur-dream"
  >
    <p className="text-xs uppercase tracking-[0.4em] text-blush-200 md:text-sm">
      Letter
    </p>
    <h2 className="mt-3 text-2xl font-display text-white md:text-4xl">Dear birthday girl,</h2>
    <div className="mt-6 space-y-4 text-base leading-relaxed md:text-xl">
      {paragraphs.map((text, index) => (
        <TypewriterParagraph key={index} text={text} delay={index * 600} />
      ))}
    </div>
    <p className="mt-8 text-lg font-semibold text-white md:text-2xl">{signature}</p>
  </section>
);

export default LetterSection;

