import { NEIGHBOURHOODS } from '@/lib/data';

/** Quiet scrolling strip of the neighbourhoods served. */
export function Marquee() {
  const items = [...NEIGHBOURHOODS, ...NEIGHBOURHOODS];
  return (
    <section aria-label="Neighbourhoods served" className="border-y border-line bg-white py-5">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-10">
          {items.map((n, i) => (
            <span key={`${n}-${i}`} className="flex items-center gap-10 whitespace-nowrap text-sm font-medium tracking-tight text-muted">
              {n}
              <span className="size-1 rounded-full bg-brand/50" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
