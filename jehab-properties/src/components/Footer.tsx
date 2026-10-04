import { Phone, MessageCircle } from 'lucide-react';
import { Logo } from '@/components/Navbar';
import { COMPANY_PHONE_DISPLAY, COMPANY_PHONE_TEL, COMPANY_WHATSAPP } from '@/lib/data';

const COLS = [
  {
    title: 'Services',
    links: [
      { label: 'Sale of Lands', href: '#services' },
      { label: 'Sale of Houses', href: '#services' },
      { label: 'Construction', href: '#services' },
      { label: 'Architectural Designs', href: '#services' },
      { label: 'Swap car for Land', href: '#services' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Featured Listings', href: '#listings' },
      { label: 'Commercial & Office', href: '#commercial' },
      { label: 'About Us', href: '#about' },
      { label: 'Frequently Asked Questions', href: '#faq' },
    ],
  },
  {
    title: 'Direct Contact',
    links: [
      { label: COMPANY_PHONE_DISPLAY, href: COMPANY_PHONE_TEL },
      { label: 'WhatsApp Chat', href: COMPANY_WHATSAPP },
      { label: 'hello@jehabproperties.com', href: 'mailto:hello@jehabproperties.com' },
      { label: 'East Legon, Accra, Ghana', href: '#contact' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-white py-14">
      <div className="mx-auto grid max-w-6xl gap-10 sm:gap-12 px-5 md:px-8 sm:grid-cols-2 lg:grid-cols-[1.3fr_repeat(3,1fr)]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-muted">
            A modern real estate brokerage in Accra, Ghana. Verified titled lands, premium houses, bespoke construction, and architectural design.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <a
              href={COMPANY_PHONE_TEL}
              className="flex items-center gap-1.5 rounded-full border border-line bg-paper-sunk px-3 py-1.5 text-[12.5px] font-semibold text-ink hover:border-brand/40 hover:text-brand transition-colors"
            >
              <Phone className="size-3.5 text-brand" />
              <span>{COMPANY_PHONE_DISPLAY}</span>
            </a>
            <a
              href={COMPANY_WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[12.5px] font-semibold text-emerald-700 hover:bg-emerald-100 transition-colors"
            >
              <MessageCircle className="size-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {COLS.map((c) => (
          <div key={c.title}>
            <h4 className="mb-4 text-sm font-semibold tracking-wide text-ink">{c.title}</h4>
            <ul className="space-y-2.5">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[13.5px] text-muted transition-colors hover:text-brand"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-line px-5 pt-6 text-[13px] text-muted md:px-8">
        <p>© {new Date().getFullYear()} Jehab Properties. All rights reserved.</p>
        <p>
          3D models by{' '}
          <a href="https://kenney.nl" target="_blank" rel="noreferrer" className="font-medium text-ink-soft hover:text-brand">
            Kenney
          </a>{' '}
          (CC0) · Built with three.js & shadcn/ui
        </p>
      </div>
    </footer>
  );
}
