import { Compass, HandHeart, Scale } from 'lucide-react';

import { Reveal } from '@/components/Reveal';

const VALUES = [
  { icon: Scale, title: 'Honest pricing', body: 'We would rather lose a sale than stretch a price. Valuations are grounded in real, recent comparables.' },
  { icon: Compass, title: 'Local judgement', body: 'A decade on Accra streets means we know which plots flood, which titles are clean and which will appreciate.' },
  { icon: HandHeart, title: 'People first', body: 'A home is a life decision. We move at your pace, and we answer the phone long after the keys change hands.' },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:px-8 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">About Jehab</p>
          <h2 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            A brokerage built the way we wished someone had built it for us.
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-muted">
            Since 2016 we have helped more than a thousand families and investors move
            well — with fewer surprises, clearer paperwork and honest advice. We stay
            deliberately small so every client gets a senior advisor, not a call centre.
          </p>
          <p className="mt-6 font-display text-sm font-medium tracking-wide text-ink-soft">
            — The Jehab Properties team, Accra
          </p>
        </Reveal>

        <div className="space-y-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="flex gap-5 rounded-xl2 border border-line bg-paper p-6 transition-all duration-500 hover:border-brand/30 hover:shadow-lift">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand">
                  <v.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink">{v.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{v.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
