const TimelineSection = ({ events }) => (
  <section className="rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-8">
    <div className="relative mx-auto max-w-2xl">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-white/20 md:left-1/2 md:-translate-x-1/2" />
      <div className="space-y-10">
        {events.map((event, index) => (
          <article
            key={event.title}
            className={`relative flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-5 text-left backdrop-blur-dream ${
              index % 2 === 0 ? 'md:ml-auto md:max-w-[48%]' : 'md:mr-auto md:max-w-[48%]'
            }`}
          >
            <div className="absolute -left-6 top-5 h-3 w-3 rounded-full bg-blush-400 shadow-lg shadow-blush-500/40 md:left-auto md:-right-[1.4rem]" />
            <p className="text-xs uppercase tracking-[0.3em] text-blush-200">{event.date}</p>
            <h3 className="text-xl font-display text-white">{event.title}</h3>
            <p className="text-sm text-slate-200 md:text-base">{event.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TimelineSection;

