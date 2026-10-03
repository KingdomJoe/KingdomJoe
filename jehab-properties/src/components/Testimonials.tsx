import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/Reveal';
import { TESTIMONIALS } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Testimonials() {
  const [emblaRef, api] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setSelected(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    onSelect();
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">Kind words</p>
            <h2 className="max-w-md text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              People we have moved, in their words.
            </h2>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={() => api?.scrollPrev()} aria-label="Previous testimonial">
              <ChevronLeft />
            </Button>
            <Button variant="outline" size="icon" onClick={() => api?.scrollNext()} aria-label="Next testimonial">
              <ChevronRight />
            </Button>
          </div>
        </Reveal>

        <Reveal>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)]">
                  <figure className="flex h-full flex-col justify-between rounded-xl2 border border-line bg-paper p-8 shadow-lift">
                    <div>
                      <Quote className="mb-6 size-6 text-brand" />
                      <blockquote className="text-[17px] leading-relaxed text-ink-soft">“{t.quote}”</blockquote>
                    </div>
                    <figcaption className="mt-8 flex items-center gap-3">
                      <span className="grid size-11 place-items-center rounded-full bg-brand-soft font-display text-sm font-semibold text-brand">
                        {t.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                      </span>
                      <div>
                        <p className="font-medium text-ink">{t.name}</p>
                        <p className="text-[13px] text-muted">{t.role}</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={cn(
                  'h-1.5 rounded-full transition-all duration-500',
                  i === selected ? 'w-8 bg-brand' : 'w-1.5 bg-line-strong hover:bg-muted',
                )}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
