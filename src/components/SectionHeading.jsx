const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="mx-auto max-w-2xl text-center">
    {eyebrow && (
      <p className="mb-2 text-xs uppercase tracking-[0.3em] text-blush-400 md:text-sm">
        {eyebrow}
      </p>
    )}
    <h2 className="mb-3 text-2xl font-display text-white md:text-4xl">
      {title}
    </h2>
    {description && (
      <p className="text-base text-slate-300 md:text-lg">{description}</p>
    )}
  </div>
);

export default SectionHeading;

