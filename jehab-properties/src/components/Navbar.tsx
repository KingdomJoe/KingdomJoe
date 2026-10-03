import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const LINKS = [
  { href: '#listings', label: 'Listings' },
  { href: '#services', label: 'Services' },
  { href: '#commercial', label: 'Commercial' },
  { href: '#about', label: 'About' },
  { href: '#faq', label: 'FAQ' },
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

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-500',
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_var(--color-line)]' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3.5 py-2 text-[14px] font-medium text-ink-soft transition-colors duration-300 hover:bg-paper-sunk hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <a href="#contact">Sign in</a>
          </Button>
          <Button variant="brand" size="sm" onClick={onBook}>
            Book a viewing
            <ArrowUpRight />
          </Button>
        </div>

        <button
          className="grid size-10 place-items-center rounded-full text-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={cn(
          'md:hidden overflow-hidden border-b border-line bg-white/95 backdrop-blur-xl transition-all duration-500',
          open ? 'max-h-96' : 'max-h-0 border-b-0',
        )}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-[15px] font-medium text-ink-soft hover:bg-paper-sunk"
            >
              {l.label}
            </a>
          ))}
          <Button variant="brand" className="mt-2" onClick={() => { setOpen(false); onBook(); }}>
            Book a viewing
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
