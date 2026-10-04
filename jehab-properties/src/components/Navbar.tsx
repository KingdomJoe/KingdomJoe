import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, ChevronRight, Menu, MessageCircle, Phone, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { COMPANY_PHONE_DISPLAY, COMPANY_PHONE_TEL, COMPANY_WHATSAPP } from '@/lib/data';
import { cn } from '@/lib/utils';

const LINKS = [
  { href: '#listings', label: 'Listings' },
  { href: '#services', label: 'Services' },
  { href: '#commercial', label: 'Commercial' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-2.5">
      <span className="grid size-9 place-items-center rounded-[10px] bg-brand text-white shadow-brand transition-transform duration-300 group-hover:-rotate-6">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 11.5 L12 4.5 L20 11.5" />
          <path d="M8 10.5 V18 Q8 19 9 19 H14 Q16 19 16 17 V10.5" />
        </svg>
      </span>
      <span className={cn('font-display text-[17px] font-semibold tracking-tight', dark ? 'text-white' : 'text-ink')}>
        Jehab <span className={dark ? 'text-white/70' : 'text-brand'}>Properties</span>
      </span>
    </a>
  );
}

export function Navbar({ onBook }: { onBook: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-all duration-500',
          scrolled ? 'bg-white/85 backdrop-blur-xl shadow-[0_1px_0_0_var(--color-line)]' : 'bg-transparent',
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
          <Logo />

          <nav className="hidden items-center gap-1 md:flex">
            {LINKS.slice(0, 5).map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-2 text-[14px] font-medium text-ink-soft transition-colors duration-200 hover:bg-paper-sunk hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2.5 md:flex">
            <a
              href={COMPANY_PHONE_TEL}
              className="flex items-center gap-1.5 rounded-full border border-line bg-paper px-3 py-1.5 text-[13px] font-medium text-ink-soft transition-all duration-200 hover:border-brand/40 hover:text-brand hover:shadow-sm"
              title="Call us directly"
            >
              <Phone className="size-3.5 text-brand" />
              <span>{COMPANY_PHONE_DISPLAY}</span>
            </a>
            <Button variant="brand" size="sm" onClick={onBook} className="active:scale-[0.98] transition-transform">
              Book a viewing
              <ArrowUpRight className="size-3.5" />
            </Button>
          </div>

          <button
            className="grid size-10 place-items-center rounded-full border border-line/60 bg-paper/80 text-ink shadow-sm md:hidden active:scale-95 transition-transform"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </motion.header>

      {/* Emil Kowalski style mobile animated drawer */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Menu Sheet */}
            <motion.div
              initial={{ y: '-100%', opacity: 0.8 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-100%', opacity: 0.8 }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="relative max-h-[85vh] overflow-y-auto rounded-b-3xl border-b border-line bg-white/98 px-5 pb-6 pt-4 shadow-lift-lg backdrop-blur-2xl"
            >
              <div className="flex items-center justify-between border-b border-line pb-4">
                <Logo />
                <button
                  onClick={() => setOpen(false)}
                  className="grid size-9 place-items-center rounded-full bg-paper-sunk text-ink hover:bg-line/60 active:scale-95 transition-transform"
                  aria-label="Close menu"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Direct Call card */}
              <div className="mt-4 rounded-2xl border border-brand/20 bg-brand-soft/70 p-3.5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-brand">Direct Contact</p>
                <a
                  href={COMPANY_PHONE_TEL}
                  className="mt-1 flex items-center justify-between text-ink active:scale-[0.98] transition-transform"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="grid size-8 place-items-center rounded-xl bg-brand text-white">
                      <Phone className="size-4" />
                    </span>
                    <span className="text-[16px] font-semibold text-ink">{COMPANY_PHONE_DISPLAY}</span>
                  </div>
                  <span className="rounded-lg bg-brand px-2.5 py-1 text-xs font-semibold text-white shadow-sm">
                    Call
                  </span>
                </a>
              </div>

              {/* Navigation links */}
              <div className="mt-4 flex flex-col divide-y divide-line/60">
                {LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3 text-[15px] font-medium text-ink-soft transition-colors active:text-brand"
                  >
                    <span>{l.label}</span>
                    <ChevronRight className="size-4 text-muted" />
                  </a>
                ))}
              </div>

              {/* Action buttons */}
              <div className="mt-5 grid grid-cols-2 gap-2.5">
                <a
                  href={COMPANY_WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 py-3 text-[14px] font-semibold text-emerald-700 active:scale-95 transition-transform"
                >
                  <MessageCircle className="size-4" />
                  <span>WhatsApp</span>
                </a>
                <Button
                  variant="brand"
                  size="default"
                  className="rounded-xl py-3 text-[14px] font-semibold shadow-brand active:scale-95 transition-transform"
                  onClick={() => {
                    setOpen(false);
                    onBook();
                  }}
                >
                  Book a viewing
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
