import { ArrowUpRight, MessageCircle, Phone } from 'lucide-react';
import { motion } from 'motion/react';

import { COMPANY_PHONE_DISPLAY, COMPANY_PHONE_TEL, COMPANY_WHATSAPP } from '@/lib/data';

interface MobileDockProps {
  onBook: () => void;
}

/**
 * Mobile Dock: Emil Kowalski & Matt Paddock inspired thumb-ergonomic floating island.
 * Only rendered on small screens (<768px), strictly hidden on desktop (md:hidden).
 */
export function MobileDock({ onBook }: MobileDockProps) {
  return (
    <motion.aside
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-3 bottom-3 z-40 mx-auto max-w-md md:hidden pointer-events-auto"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      aria-label="Quick mobile actions"
    >
      <div className="flex items-center justify-between gap-2 rounded-2xl border border-line-strong/80 bg-white/95 p-1.5 shadow-lift-lg backdrop-blur-xl">
        {/* Direct Call Button */}
        <a
          href={COMPANY_PHONE_TEL}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-paper-sunk py-2.5 px-3 text-[13px] font-semibold text-ink transition-transform duration-150 active:scale-95 border border-line/80 hover:bg-line/40"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-600" />
          </span>
          <Phone className="size-3.5 text-brand" />
          <span className="truncate">{COMPANY_PHONE_DISPLAY}</span>
        </a>

        {/* WhatsApp Icon Button */}
        <a
          href={COMPANY_WHATSAPP}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="grid size-10 shrink-0 place-items-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-600 transition-transform duration-150 active:scale-95 hover:bg-emerald-100"
        >
          <MessageCircle className="size-4" />
        </a>

        {/* Book Viewing Button */}
        <button
          type="button"
          onClick={onBook}
          className="flex flex-1 items-center justify-center gap-1 rounded-xl bg-brand py-2.5 px-3 text-[13px] font-semibold text-white shadow-brand transition-transform duration-150 active:scale-95 hover:bg-brand-deep"
        >
          <span>Book view</span>
          <ArrowUpRight className="size-3.5" />
        </button>
      </div>
    </motion.aside>
  );
}
