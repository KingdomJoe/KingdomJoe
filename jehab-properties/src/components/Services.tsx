import { Building2, ChartLine, KeyRound, Tag } from 'lucide-react';

import { Reveal } from '@/components/Reveal';
import { SERVICES } from '@/lib/data';

const ICONS = {
  key: KeyRound,
  tag: Tag,
  building: Building2,
  chart: ChartLine,
} as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">What we do</p>
          <h2 className="mx-auto max-w-xl text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Every step of owning a home, handled.
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="group h-full rounded-xl2 border border-line bg-paper p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-lift">
                  <span className="mb-6 grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand transition-all duration-500 group-hover:bg-brand group-hover:text-white">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mb-2 font-display text-lg font-semibold tracking-tight text-ink">{s.title}</h3>
                  <p className="text-[14px] leading-relaxed text-muted">{s.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
