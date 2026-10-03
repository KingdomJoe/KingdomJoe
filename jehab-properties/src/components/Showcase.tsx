import { Suspense, lazy } from 'react';
import { ArrowRight, Landmark, LineChart, ShieldCheck } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/Reveal';
import { WebGLBoundary, ModelFallback, hasWebGL } from '@/components/WebGLBoundary';

const CityScene = lazy(() => import('@/three/CityScene').then((m) => ({ default: m.CityScene })));

const POINTS = [
  { icon: LineChart, title: 'Yield-led selection', body: 'We underwrite every asset against rental yield and exit liquidity before it reaches you.' },
  { icon: ShieldCheck, title: 'Clean title, always', body: 'Independent legal review and escrow-backed transfers on every commercial deal.' },
  { icon: Landmark, title: 'Institutional network', body: 'First look at Grade-A offices, retail and land from developers we trust.' },
];

export function Showcase({ onBook }: { onBook: () => void }) {
  return (
    <section id="commercial" className="scroll-mt-24 overflow-hidden bg-paper-dim py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        <div className="relative order-2 h-[420px] lg:order-1 lg:h-[560px]">
          {hasWebGL() ? (
            <WebGLBoundary>
              <Suspense
                fallback={
                  <div className="grid size-full place-items-center">
                    <div className="size-10 animate-spin rounded-full border-2 border-line border-t-brand" />
                  </div>
                }
              >
                <CityScene />
              </Suspense>
            </WebGLBoundary>
          ) : (
            <ModelFallback />
          )}
        </div>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">Commercial & investment</p>
            <h2 className="max-w-md text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              Space that pays you back.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted">
              From Grade-A offices to income-producing residential blocks, we help owners
              and investors treat property like the asset class it is.
            </p>
          </Reveal>

          <div className="mt-9 space-y-6">
            {POINTS.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.08}>
                <div className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-brand shadow-lift">
                    <p.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-[17px] font-semibold tracking-tight text-ink">{p.title}</h3>
                    <p className="mt-1 max-w-sm text-[14px] leading-relaxed text-muted">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35} className="mt-10">
            <Button variant="brand" onClick={onBook}>
              Talk to the commercial desk <ArrowRight />
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
