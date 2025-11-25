import { HeartHandshake, Smile, Compass, Music3 } from 'lucide-react';

const ICON_MAP = {
  heart: HeartHandshake,
  smile: Smile,
  compass: Compass,
  music: Music3,
};

const ReasonsSection = ({ reasons }) => (
  <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8">
    <div className="grid gap-6 md:grid-cols-2">
      {reasons.map((reason, index) => {
        const Icon = ICON_MAP[reason.icon];
        return (
          <article
            key={reason.title}
            className="fade-card group flex gap-4 rounded-2xl border border-white/5 bg-white/5 p-5 backdrop-blur-dream transition hover:-translate-y-0.5"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blush-500/20 text-blush-300">
              <Icon />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white md:text-lg">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300 md:text-base">
                {reason.description}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  </section>
);

export default ReasonsSection;

