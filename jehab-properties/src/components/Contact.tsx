import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { COMPANY_EMAIL, COMPANY_PHONE_DISPLAY, COMPANY_PHONE_TEL, COMPANY_WHATSAPP } from '@/lib/data';

const CHANNELS = [
  {
    icon: Phone,
    label: 'Call us',
    value: COMPANY_PHONE_DISPLAY,
    href: COMPANY_PHONE_TEL,
    description: 'Instant consultation & inquiries',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+233 24 337 2503',
    href: COMPANY_WHATSAPP,
    description: 'Direct messaging & brochure requests',
  },
  {
    icon: Mail,
    label: 'Email',
    value: COMPANY_EMAIL,
    href: `mailto:${COMPANY_EMAIL}`,
    description: 'Official proposals & investor relations',
  },
  {
    icon: MapPin,
    label: 'Studio',
    value: '12 Boundary Rd, East Legon, Accra',
    href: 'https://maps.google.com/?q=East+Legon+Accra',
    description: 'Visit our Accra advisory office',
  },
];

/** One inverted (ink) band to close the page with weight — white stays primary. */
export function Contact({ onBook }: { onBook: () => void }) {
  return (
    <section id="contact" className="scroll-mt-24 bg-ink py-16 sm:py-24 text-white">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-[1.15fr_1fr] items-center">
          <div className="text-center lg:text-left mx-auto max-w-lg lg:max-w-none lg:mx-0">
            <p className="mb-2.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand-bright">Start a conversation</p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl text-balance">
              Let's find your next address.
            </h2>
            <p className="mt-3.5 sm:mt-5 text-sm sm:text-base leading-relaxed text-white/70 max-w-md mx-auto lg:mx-0">
              Whether you are acquiring titled land, building from scratch, swapping a car for land, or buying a turnkey residence, we answer every call.
            </p>

            {/* Shortened, centered, well-proportioned buttons */}
            <div className="mt-7 sm:mt-8 flex flex-col items-center lg:items-start gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
              <Button
                variant="brand"
                size="lg"
                onClick={onBook}
                className="w-full max-w-[260px] sm:w-auto justify-center rounded-xl shadow-brand active:scale-[0.98] transition-transform"
              >
                Book a viewing <ArrowUpRight className="size-4" />
              </Button>
              <Button
                size="lg"
                className="w-full max-w-[260px] sm:w-auto justify-center border border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white shadow-none rounded-xl active:scale-[0.98] transition-transform"
                asChild
              >
                <a href={COMPANY_PHONE_TEL} className="flex items-center gap-2">
                  <Phone className="size-4 text-brand-bright" />
                  <span>{COMPANY_PHONE_DISPLAY}</span>
                </a>
              </Button>
              <Button
                size="lg"
                className="w-full max-w-[260px] sm:w-auto justify-center border border-white/20 bg-transparent text-white hover:bg-white/10 rounded-xl active:scale-[0.98] transition-transform"
                asChild
              >
                <a href={`mailto:${COMPANY_EMAIL}`}>Email us</a>
              </Button>
            </div>
          </div>

          {/* Centered, properly-proportioned channel cards container */}
          <div className="mx-auto w-full max-w-[420px] lg:max-w-none space-y-3 sm:space-y-3.5">
            {CHANNELS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
                className="group flex items-center gap-3.5 sm:gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 transition-all duration-200 hover:border-brand-bright/50 hover:bg-white/[0.08] active:scale-[0.99]"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand text-white transition-transform duration-200 group-hover:scale-105">
                  <c.icon className="size-5" />
                </span>
                <div className="min-w-0 flex-1 text-left">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] sm:text-[12px] uppercase tracking-widest text-white/50">{c.label}</p>
                    <ArrowUpRight className="size-4 text-white/30 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-bright" />
                  </div>
                  <p className="mt-0.5 text-[15px] sm:text-[17px] font-medium text-white truncate">{c.value}</p>
                  <p className="text-xs text-white/50 truncate">{c.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
