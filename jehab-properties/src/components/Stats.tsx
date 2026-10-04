import { STATS } from '@/lib/data';
import { CountUp } from '@/components/CountUp';
import { Reveal } from '@/components/Reveal';

export function Stats() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 border-y border-line/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 gap-x-4 sm:gap-8 px-5 md:grid-cols-4 md:px-8">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center md:border-r md:border-line md:last:border-r-0">
            <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink">
              <CountUp to={s.value} prefix={'prefix' in s ? (s as { prefix: string }).prefix : ''} suffix={s.suffix} />
            </p>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-medium tracking-wide text-muted">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
