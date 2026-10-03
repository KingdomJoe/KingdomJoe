import { STATS } from '@/lib/data';
import { CountUp } from '@/components/CountUp';
import { Reveal } from '@/components/Reveal';

export function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-12 px-5 md:grid-cols-4 md:px-8">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center md:border-r md:border-line md:last:border-r-0">
            <p className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              <CountUp to={s.value} prefix={'prefix' in s ? (s as { prefix: string }).prefix : ''} suffix={s.suffix} />
            </p>
            <p className="mt-2 text-sm font-medium tracking-wide text-muted">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
