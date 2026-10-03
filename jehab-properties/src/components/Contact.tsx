import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'motion/react';

import { Button } from '@/components/ui/button';

const CHANNELS = [
  { icon: Phone, label: 'Call / WhatsApp', value: '+233 30 000 0000' },
  { icon: Mail, label: 'Email', value: 'hello@jehabproperties.com' },
  { icon: MapPin, label: 'Studio', value: '12 Boundary Rd, East Legon, Accra' },
];

/** One inverted (ink) band to close the page with weight — white stays primary. */
export function Contact({ onBook }: { onBook: () => void }) {
  return (
    <section id="contact" className="scroll-mt-24 bg-ink py-24 text-white">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand-bright">Start a conversation</p>
            <h2 className="max-w-lg text-4xl font-semibold tracking-tight md:text-6xl">
              Let's find your next address.
            </h2>
            <p className="mt-6 max-w-md text-[16px] leading-relaxed text-white/60">
              Whether you are buying your first room or your fourth building, the first
              conversation is free and unhurried.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button variant="brand" size="lg" onClick={onBook}>
                Book a viewing <ArrowUpRight />
              </Button>
              <Button
                size="lg"
                className="border border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white shadow-none"
                asChild
              >
                <a href="mailto:hello@jehabproperties.com">Email us</a>
              </Button>
            </div>
          </motion.div>

          <div className="space-y-4 self-center">
            {CHANNELS.map((c) => (
              <div
                key={c.label}
                className="flex items-center gap-4 rounded-xl2 border border-white/10 bg-white/[0.04] p-5 transition-colors duration-300 hover:bg-white/[0.08]"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand text-white">
                  <c.icon className="size-5" />
                </span>
                <div>
                  <p className="text-[12px] uppercase tracking-widest text-white/50">{c.label}</p>
                  <p className="mt-0.5 font-medium text-white">{c.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
