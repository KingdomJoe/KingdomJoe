import { CarFront, DraftingCompass, HardHat, Home, LandPlot } from 'lucide-react';

import { Reveal } from '@/components/Reveal';
import { SERVICES } from '@/lib/data';

const ICONS = {
  land: LandPlot,
  house: Home,
  construction: HardHat,
  architecture: DraftingCompass,
  swap: CarFront,
} as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mb-12 sm:mb-16 text-center">
          <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand">What we do</p>
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl">
            Comprehensive real estate & building solutions.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-muted">
            From acquiring titled land to modern construction and vehicle equity swaps, we provide trusted end-to-end guidance.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <Reveal key={s.title} delay={i * 0.07}>
                <div className="group flex h-full flex-col justify-between rounded-xl2 border border-line bg-paper p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/40 hover:shadow-lift active:scale-[0.99]">
                  <div>
                    <span className="mb-5 sm:mb-6 grid size-12 place-items-center rounded-2xl bg-brand-soft text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-105 shadow-sm">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mb-2 font-display text-[17px] sm:text-lg font-semibold tracking-tight text-ink group-hover:text-brand transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-muted">
                      {s.body}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-line/60 flex items-center text-xs font-semibold uppercase tracking-wider text-brand">
                    <span>Explore details →</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
