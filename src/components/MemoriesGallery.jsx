import { useState } from 'react';

const MemoryCard = ({ memory }) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <article
      className="group flex min-w-[280px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:shadow-blush-500/20 md:min-w-0"
    >
      <div className="relative h-48 overflow-hidden bg-slate-900">
        {!hasError ? (
          <img
            src={memory.image}
            alt={memory.title}
            loading="lazy"
            onLoad={() => setHasLoaded(true)}
            onError={() => setHasError(true)}
            className={`h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105 ${
              hasLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-slate-800 text-sm text-slate-300">
            Photo taking a raincheck
          </div>
        )}
        {!hasLoaded && !hasError && (
          <div className="absolute inset-0 animate-pulse bg-slate-800/60" aria-hidden="true" />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="text-[11px] uppercase tracking-[0.3em] text-blush-200 md:text-xs">
          {memory.year}
        </div>
        <h3 className="text-lg font-semibold text-white md:text-xl">{memory.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-slate-300 md:text-base">
          {memory.description}
        </p>
        <span className="text-sm font-medium text-blush-400 md:text-base">
          {memory.location}
        </span>
      </div>
    </article>
  );
};

const MemoriesGallery = ({ memories }) => (
  <section
    id="memories"
    className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-dream"
  >
    <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:snap-none md:overflow-visible">
      {memories.map((memory) => (
        <div key={memory.title} className="snap-center md:snap-none">
          <MemoryCard memory={memory} />
        </div>
      ))}
    </div>
  </section>
);

export default MemoriesGallery;

