import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Reveal } from '@/components/Reveal';
import { FAQS } from '@/lib/data';

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-paper-dim py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">Questions</p>
          <h2 className="text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Asked often, answered plainly.
          </h2>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
            Anything else? Write to us at{' '}
            <a href="mailto:hello@jehabproperties.com" className="font-medium text-brand underline-offset-4 hover:underline">
              hello@jehabproperties.com
            </a>{' '}
            — a person replies within a day.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-xl2 border border-line bg-paper px-7 shadow-lift">
            <Accordion type="single" collapsible defaultValue="item-0">
              {FAQS.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
